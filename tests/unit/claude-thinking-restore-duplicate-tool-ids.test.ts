// The signed-thinking store (claudeThinkingStore) is keyed by tool_use id and keeps
// only the newest generation of a turn. A client that retries a turn re-sends the same
// tool_call id for a different generation, so restoring the store's block into the older
// turn replays a block the upstream never saw in that position and it answers
// 400 "…blocks in the latest assistant message cannot be modified".
//
// Fix: openaiToClaudeRequest counts tool_call ids across the whole client history and
// skips the restore for any turn whose id is ambiguous (appears more than once).
// A request without thinking blocks is valid and is what clients sent before the store.

import { test } from "node:test";
import assert from "node:assert/strict";
import { openaiToClaudeRequest } from "../../open-sse/translator/request/openai-to-claude.ts";
import { storeClaudeThinkingBlocks } from "../../open-sse/services/claudeThinkingStore.ts";

const PROVIDER = "claude";
const MODEL = "claude-opus-5-5";

function body(assistantTurns: Array<{ id: string }>) {
  return {
    model: MODEL,
    max_tokens: 512,
    stream: true,
    thinking: { type: "adaptive" },
    messages: [
      { role: "user", content: "bir sey yap" },
      ...assistantTurns.map((t) => ({
        role: "assistant",
        content: "",
        tool_calls: [
          { id: t.id, type: "function", function: { name: "get_time", arguments: "{}" } },
        ],
      })),
      ...assistantTurns.map((t) => ({ role: "tool", tool_call_id: t.id, content: "12:00" })),
      { role: "user", content: "devam" },
    ],
  };
}

function lastAssistant(messages: any[]) {
  return [...messages].reverse().find((m) => m.role === "assistant");
}

function thinkingBlocks(msg: any) {
  return Array.isArray(msg?.content)
    ? msg.content.filter((b: any) => b?.type === "thinking" || b?.type === "redacted_thinking")
    : [];
}

test("yinelenen tool_call id: store'dan geri yukleme YAPILMAZ (400 'cannot be modified' onlemi)", () => {
  const id = "toolu_dup_1";
  assert.ok(
    storeClaudeThinkingBlocks({
      toolUseIds: [id],
      blocks: [{ type: "thinking", thinking: "eski nesil", signature: "IMZA_A" }],
      provider: PROVIDER,
      model: MODEL,
    })
  );
  const out: any = openaiToClaudeRequest(MODEL, body([{ id }, { id }]) as any, true, {
    _provider: PROVIDER,
  });
  const son = lastAssistant(out.messages);
  assert.equal(
    thinkingBlocks(son).length,
    0,
    "yinelenen id tasinan son asistan mesajina thinking blogu eklenmemeli"
  );
});

test("tekil tool_call id: store geri yuklemesi DEVAM eder (ozellik korunur)", () => {
  const id = "toolu_tekil_1";
  assert.ok(
    storeClaudeThinkingBlocks({
      toolUseIds: [id],
      blocks: [{ type: "thinking", thinking: "dogru nesil", signature: "IMZA_B" }],
      provider: PROVIDER,
      model: MODEL,
    })
  );
  const out: any = openaiToClaudeRequest(MODEL, body([{ id }]) as any, true, {
    _provider: PROVIDER,
  });
  const son = lastAssistant(out.messages);
  assert.equal(thinkingBlocks(son).length, 1, "tekil id'de thinking blogu geri yuklenmeli");
});

test("farkli id'ler ama biri yinelenmis: yalnizca yinelenen turn atlanir", () => {
  const dup = "toolu_mix_dup";
  const tek = "toolu_mix_tek";
  storeClaudeThinkingBlocks({
    toolUseIds: [dup, tek],
    blocks: [{ type: "thinking", thinking: "x", signature: "IMZA_C" }],
    provider: PROVIDER,
    model: MODEL,
  });
  const out: any = openaiToClaudeRequest(
    MODEL,
    body([{ id: dup }, { id: dup }, { id: tek }]) as any,
    true,
    { _provider: PROVIDER }
  );
  const asistans = out.messages.filter((m: any) => m.role === "assistant");
  const duz = asistans.filter((m: any) => thinkingBlocks(m).length > 0);
  assert.equal(duz.length, 1, "yalnizca tekil id'ye sahip turn thinking blogu alir");
  const aldiId = duz[0].content.find((b: any) => b?.type === "tool_use")?.id;
  assert.equal(aldiId, tek, "blogu alan turn tekil id'li olmali");
});
