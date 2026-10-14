/**
 * GitHub Copilot `auto` → concrete model, resolved before routing.
 *
 * chatCore picks the target format, translates the body and records usage from the
 * model id, so the Copilot `/auto` decision has to land before any of that: a Claude
 * pick then goes to Copilot's /v1/messages shim with an Anthropic-shaped body, a
 * Responses-only pick goes to /responses, and usage, cost and call logs carry the
 * model that actually served the request (the call log's requestedModel keeps
 * `auto`). The decision's session token rides on a per-request credentials copy and
 * is turned into the `Copilot-Session-Token` header by GithubExecutor.buildHeaders.
 *
 * Only the github.com `github` provider opts in; `ghe-copilot` does not expose `auto`.
 */
import { getExecutor } from "../../executors/index.ts";
import type { CopilotAutoResolution } from "../../executors/github.ts";
import { isCopilotAutoModel } from "../../executors/github/autoModel.ts";
import { createErrorResult } from "../../utils/error.ts";
import { isProbeContext } from "@/shared/utils/probeOrigin";

type Credentials = Record<string, unknown>;

type AutoLog = {
  info?: (tag: string, message: string) => void;
  warn?: (tag: string, message: string) => void;
} | null;

export type CopilotAutoExecutor = {
  needsRefresh: (credentials: Credentials) => boolean;
  refreshCredentials: (credentials: Credentials, log: AutoLog) => Promise<Credentials | null>;
  resolveAutoModel: (input: {
    body: unknown;
    credentials: Credentials;
    sessionKey?: string | null;
    signal?: AbortSignal | null;
    log?: AutoLog;
  }) => Promise<CopilotAutoResolution>;
};

export type CopilotAutoContext = {
  sessionKey?: string | null;
  signal?: AbortSignal | null;
  onCredentialsRefreshed?: ((next: Credentials) => unknown) | null;
  log?: AutoLog;
  /** Test seam; defaults to the registered github executor. */
  executor?: CopilotAutoExecutor;
};

export type CopilotAutoOutcome = {
  model: string;
  credentials: Credentials;
  errorResult?: ReturnType<typeof createErrorResult>;
};

// The /auto call runs before BaseExecutor.execute()'s proactive refresh, so mint a
// fresh Copilot token here when the stored one is stale (and persist it the same way).
async function withFreshCopilotToken(
  executor: CopilotAutoExecutor,
  credentials: Credentials,
  ctx: CopilotAutoContext
): Promise<Credentials> {
  if (isProbeContext() || !executor.needsRefresh(credentials)) return credentials;
  try {
    const refreshed = await executor.refreshCredentials(credentials, ctx.log ?? null);
    if (!refreshed) return credentials;
    await ctx.onCredentialsRefreshed?.(refreshed);
    return {
      ...credentials,
      ...refreshed,
      providerSpecificData: {
        ...((credentials.providerSpecificData as Credentials | undefined) || {}),
        ...((refreshed.providerSpecificData as Credentials | undefined) || {}),
      },
    };
  } catch (error) {
    ctx.log?.warn?.(
      "GITHUB",
      `Copilot token refresh before auto selection failed: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
    return credentials;
  }
}

export async function applyCopilotAutoModel(
  provider: string | null | undefined,
  model: string,
  body: unknown,
  credentials: Credentials,
  ctx: CopilotAutoContext = {}
): Promise<CopilotAutoOutcome> {
  if (provider !== "github" || !isCopilotAutoModel(model)) return { model, credentials };

  const executor =
    ctx.executor ?? ((await getExecutor("github")) as unknown as CopilotAutoExecutor);
  const freshCredentials = await withFreshCopilotToken(executor, credentials, ctx);
  const resolution = await executor.resolveAutoModel({
    body,
    credentials: freshCredentials,
    sessionKey: ctx.sessionKey,
    signal: ctx.signal,
    log: ctx.log,
  });
  if (!resolution.ok) {
    return {
      model,
      credentials: freshCredentials,
      errorResult: createErrorResult(resolution.status, resolution.message),
    };
  }

  const selected = resolution.decision.model;
  ctx.log?.info?.("ROUTING", `GitHub Copilot auto → ${selected}`);
  if (body && typeof body === "object") (body as Record<string, unknown>).model = selected;
  return {
    model: selected,
    credentials: { ...freshCredentials, copilotSessionToken: resolution.decision.sessionToken },
  };
}
