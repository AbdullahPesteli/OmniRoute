# Guardrails (Igbo)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Isi mmalite nke eziokwu:** `src/lib/guardrails/`
> **Emelitere ikpeazụ:** 2026-08-29 — v3.8.51 (Video Bridge transcript provenance bụ nke onye kpọrọ ọrụ kwupụtara,
> sava enyochabeghị ya — akọwapụtara nke ọma dịka #11661)

Guardrails na-amanye nchekwa, amụma, na mgbanwe ọdịnaya n'ókè dị
n'etiti OmniRoute na ndị na-eweta ọrụ upstream. Guardrail ọ bụla nwere ike inyocha (ma
ọ bụrụ na achọrọ, jụ, gbanwee, ma ọ bụ tinye nkọwa na) payload arịrịọ (`preCall`) na
nzaghachi upstream (`postCall`).

Sistemụ ahụ bụ **fail-open**: ọ bụrụ na guardrail atụpụta njehie mgbe ọ na-arụ ọrụ, registry
na-edekọ njehie ahụ ma gaa n'ihu na guardrail na-esote kama ime ka
arịrịọ ahụ daa. Igbochi bụ mkpebi doro anya (`block: true`), ọ bụghị ihe mberede.

## Nchedo Ndụ

Nchedo ndọrọndọrọ na-ebudata onwe ya n'usoro ihe dị mkpa isii mgbe a na-ebubata
(lee `registry.ts` → `registerDefaultGuardrails()`):

| Ihe Ndụ | Aha                 | Ọnọdụ(s)       | Faịlụ                 |
| ------- | ------------------- | -------------- | --------------------- |
| `5`     | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`     | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`     | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`    | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`    | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`    | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nọmba ndị dị ala na-arụ ọrụ **mbu**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Na-ejide arịrịọ ndị nwere onyonyo nke na-ezube **ụdị na-enweghị ọhụụ** ma ọ bụ
na-agbanwe arịrịọ niile ka ọ bụrụ ụdị nwere ọhụụ ma ọ bụ na-anọchi onyonyo
nke na-eme ka nkọwa ederede nke a na-emepụta site na ụdị ọhụụ nwere ike ịhazigharị tupu
kpọọ elu. Nke a na-enye ndị na-enye naanị ederede ohere ịchịkwa
ngwugwu multimodal n'enweghị nsogbu.

Usoro:

1. Hapụ ma ọ bụrụ na ụdị ebumnuche ahụ nwere ọhụụ (ma ọ bụ na ọ na-apụta na
   ndepụta nke a na-eme ka ọ bụrụ `isVisionBridgeForcedModel`).
2. Wepụ akụkụ onyonyo site na `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), nke na-enye ọrụ na **nnyocha mgbakọ
   media** `detectMediaParts()` na `open-sse/utils/mediaParts.ts` — isi
   otu isiokwu nke a na-ekekọrịta na ng фильтр ngwá ọrụ.
   Wepụ bụ nke a na-anabata na akụkụ kachasị elu nke ụdị
   `replaceImageParts` nwere ike ịgbakwunye (nkwekọrịta wepụ↔dochie): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, na Responses API `input_image`. Ncheta na
   ụdị naanị na-egosi bụ ihe ngwá ọrụ ngwá ọrụ ma a naghị ewepụ ha.
   Hapụ ma ọ bụrụ na enweghi ihe ọ bụla.
3. Dozie ntọala oge site na `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): ọhụrụ `modalityBridge*`
   igodo ntọala na-emeri; ochie `visionBridge*` igodo na-anọgide na **otu-oge
   ndabere** (ndebere mgbatị). Hapụ tupu njem media ọ bụla mgbe
   a na-egbochi mgbakwunye.
4. Nhọrọ ụdị (`modalityBridgeVisionMode`, lee tebụl dị n'okpuru) na-ekpebi
   ịgbanwe ma ọ bụ kọwaa. Ịgbanwe na-eweghachite `modifiedPayload` na naanị `model`
   gbanwere, tinyere meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Kọwaa ụzọ: gbochie onyonyo na `maxImages`, hazie arịrịọ nke na-eme ka
   nkọwa, jụọ cache nkọwa, kpọọ ụdị ọhụụ **n'ozuzu**
   (`Promise.allSettled`), ma tinye `[Image N]: <description>` ederede na
   ebe ha nọ. Nkọwa na-adịghị mma na-enye `null` na akụkụ onyonyo mbụ
   **na-echekwa** (#4012) — ma e wezụga na ụzọ nkọwa ngwá ọrụ mgbe
   nkọwa niile dara, ebe a na-enweta ụdị na-enweghị ọhụụ na
   `(unavailable — no vision-capable provider connected)` stub kama (#8430).
6. Weghachite `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Nhọrọ ụdị (`modalityBridgeVisionMode`)

| Ụdị        | Ndabere | Ọrụ                                                                                                                                                                                                                                                      |
| ---------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Nchedo ochie, na-enweghị mmetọ (#6640/#7204): ụdị na-enweghị ngwá ọrụ/`auto/` na-agbanwe na ụdị ọhụụ kacha mma ma ọ bụrụ na ụdị mbụ nwere ikike eji eme ihe (nke ahụ na kọwaa); ebumnuche ngwá ọrụ na-adị mgbe niile.                                    |
| `describe` |         | Kọwaa mgbe niile — a na-ewepụ blọk ịgbanwe kpamkpam; ụdị nke onye ọrụ họọrọ na-eme ka ọ bụrụ nzaghachi.                                                                                                                                                  |
| `reroute`  |         | Kpọrọ ịgbanwe: a na-ewepụ nchedo nke ụdị nwere ikike. Nchedo nke **ebumnuche** na-agbanwe ka na-arụ ọrụ — mgbe enweghi ụdị ọhụụ eji eme ihe, arịrịọ ahụ na-apụ na kọwaa ka onyonyo ndị a na-enweghị ederede agaghị erute azụ na-enweghị ederede (#8430). |

Ụdị ndị a na-eme ka ọ bụrụ na **tupu** heuristics auto na-arụ ọrụ; omume `auto`
dị ka byte na-enweghị mgbanwe na nchedo ndọrọndọrọ pre-PR-1.

#### API-key scope (`visionBridgeKeyScope.ts`)

Mgbe igodo API nke onye na-akpọ na-achịkọta `allowedConnections`, pools quota
(`allowedQuotas`) ma ọ bụ ụdị (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), mgbakwunye na-ahọrọ
na-agbanwe na kọwaa ụdị ndị igodo nwere ike iji, na njikọ ndị igodo nwere ike
iji. Arịrịọ nkọwa ahụ na-aga site na OmniRoute self-loop na
`x-omniroute-self-loop-key-id` header, ya mere arịrịọ chat na-enweta
na-achịkwa njikọ na iwu ụdị nke igodo ahụ ọzọ. `enforceApiKeyPolicy()`
na-eme ka header ahụ bụrụ naanị na ya na self-loop bearer, ya mere ọ nwere ike
nwepụ ohere, na id nke na-adịghị edozi na-anaghị anabata.

Ọ bụrụ na enweghi ụdị ọhụụ a na-anabata maka igodo ahụ, ụzọ nkọwa na-apụ na
arịrịọ ahụ na-aga n'ihu na-enweghị mgbanwe, omume fail-open yiri nke a na-egbochi
nchedo (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Arịrịọ na-enweghị igodo, na igodo na-enweghị ihe ndị a na-achịkọta, na-arụ ọrụ n'ụzọ ziri ezi dịka
oge gara aga.

#### Nkọwa nkọwa nke na-eme ka ọrụ mara (`modalityBridgeVisionTaskAware`)

Default **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) na-agbakwunye
okwu nke **n'ikpeazụ ozi onye ọrụ** (nke a na-ewepụ na 500 chars) na
isi kwuo, na-eduga nkọwa na ihe onye ọrụ jụrụ n'ezie
(codex-vision-proxy pattern) na-arịọ ụdị ọhụụ ka o dee
okwu ndị a na-ahụ. Mgbe a na-ewepụ flag — ma ọ bụ na-enweghị
okwu onye ọrụ — a na-eji isi kwuo na-enweghị mgbanwe.

Nkọwa nke self-loop nke OpenAI-compatible arịrịọ (`callVisionModelSingle()`
na `visionBridgeHelpers.ts`) na-arịọ mgbe niile `image_url.detail: "high"` —
na-enweghị ọnọdụ, maka onye ọ bụla na-akpọ/na-enye, ọ bụghị na-egbochi
n'ịbụ onye ahịa. Sampling nke nkọwa dị ala na-emebi
nchekwa OCR maka ọrụ nke a na-arịọ maka, ya mere, arịrịọ nkọwa
na-arịọ mgbe niile maka nkọwa dị elu n'agbanyeghị nke nkọwa
nke arịrịọ mbụ. Nke a na-emetụta naanị ahụ nke arịrịọ nkọwa; ọ
na-agbanwe agbanwe otú OmniRoute si zipu `image_url.detail` nke onye
na-akpọ na arịrịọ mbụ — a na-etinye default a n'ụzọ dị iche,
na naanị maka ndị ahịa OpenCode a chọpụtara, na
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic wire-format branch nke nkọwa self-loop enweghị `detail` field
ma ọ bụ na-emetụta site na default ọ bụla.

#### Nkọwa output cap (`modalityBridgeVisionMaxChars`)

| Key                            | Default | Range                 |
| ------------------------------ | ------- | --------------------- |
| `modalityBridgeVisionMaxChars` | `0`     | `0` ma ọ bụ 100–50000 |

`0` (default) pụtara **enweghị cap** — nkọwa a na-enweta site na
`callVisionModel()` na-aga n'ihu na-enweghị mgbanwe, na-echekwa
omume dị ugbu a. Ọnụahịa ọ bụla n'ime 100–50000 na-ewepụ nkọwa
na `…` suffix tupu e wepụ ya dịka `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` na `src/lib/guardrails/visionBridge.ts`).
Gbaa mbọ hụ na nke a maka ọrụ OCR nke nwere nkọwa dị arọ ebe
ụdị dị n'okpuru chọrọ nkọwa zuru ezu; belata ya iji chekwaa
iji token na ụdị ọhụụ na-ekwu okwu. Ụlọ dashboard dị na
Vision tab's Advanced panel (`modality-bridge-max-chars` na
`ModalityBridgeVisionTab.tsx`) na-ejide ọnụahịa ọ bụla n'etiti 1 na 99
na 100 floor mgbe a na-ahapụ `0` doro anya — `0` bụ
nke ziri ezi Zod value n'onwe ya
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ọ bụghị naanị
"unset" default.

#### Nkọwa cache (`modalityBridge/bridgeCache.ts`)

In-memory LRU + TTL cache maka nkọwa outputs, nke a na-ekekọrịta
n'ozuzu usoro. Key = `sha256(imageRef + composedPrompt + configuredBridgeModel)` na
ogologo-prefix framing (enweghị field-boundary collisions). Ụdị
nke a bụ **configured** bridge model, ọ bụghị ụdị nke zara n'ezie —
`callVisionModel` nwere ike ịlaghachi n'ime, na ịkpọ aha kwa
nwoke ga-emebi cache. A naghị echekwa nkọwa ndị dara. Ntọala:

| Key                             | Default | Range   |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Remote image normalization (self-loop describe/base64 fetch)

Mgbe bridge na-enweta **remote** image n'onwe ya — nkọwa
self-call nke Anthropic na claude-wire-format base64 conversion
(`ensureBase64ImagesForClaudeWire`), ma abụọ site na
`fetchRemoteImageAsDataUri()` na `visionBridgeHelpers.ts` — data
URI nke na-esote na-aga site na `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) tupu etinye ya na arịrịọ
nke ụdị ọhụụ. A na-ebelata onyonyo ndị buru ibu na **2048px ogologo
oche** (na-ezute resize cap OpenAI/Anthropic na-etinye na
server-side), nke na-ewepụ bytes/latency na-enweghị
ịgbanwe ihe ụdị ọhụụ na-ahụ. Resizing na-eji `sharp`, nke a na-ebudata
site na dynamic import: na ikpo okwu ebe binary ya
na-adịghị arụ ọrụ, `normalizeDataUri()` **agaghị ewere** — ọ na-alaghachi
na passthrough nke bytes mbụ, ya mere, ụzọ nkọwa/base64-conversion
na-anọgide na-arụ ọrụ. Non-image bytes (fetch nke na-adịghị
wepụta onyonyo a na-agụ) na-agafe na-enweghị mgbanwe. A na-ejide
normalization a na onyonyo bridge na-enweta maka
nke ya self-call — a naghị etinye ya na raw passthrough payload nke onye
na-akpọ, nke na-eme ka ọ bụrụ na a na-eme mgbanwe naanị na
nke a na-ahọrọ (Hard Rule #20).

#### Settings schema + migration

Ndị ọhụrụ `modalityBridge*` keys bụ Zod-validated na `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*`, na
`modalityBridgeAudio*` otu a na-eji site na Audio Bridge. Migration
`141_modality_bridge_settings.sql` na-ewepụta
nke dị ugbu a legacy `visionBridge*` values na
nke ọhụrụ na-ezute (idempotent, anaghị overwrite
nke onye ọrụ-set `modalityBridge*` value); a na-anabata
legacy keys dị ka fallback na-agụ maka otu
release cycle.

#### Transparency header + stats

Nkọwa a na-agbanwe agbanwe na-ebu
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(nke a na-ewu site na `buildModalityBridgeHeader()` na
`modalityBridge/bridgeStats.ts`, na-ejide site na `withModalityBridgeHeader()`
na `src/sse/handlers/chatHelpers.ts`). A na-enweta arịrịọ
na-enyefe **no** header — payload ahụ adịghị agbanwe na
ndị na-agbanwe model ahụ na-adị na `model` field nke
ahụ nke nzaghachi.

`GET /api/modality-bridge/stats` (njikwa ikike, otu ọkwa dị ka
`GET /api/settings`) na-eweghachi ndị na-agba ọsọ per-modality
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` maka `vision`, `audio`, na
`video`. `averageLatencyMs` na-eji `latencySamples`, ọ bụghị niile attempts, dị ka
nke ya; ọrụ na-enweghị oge anaghị emepụta sample nke zero-millisecond.
`bridged` na-anọgide na-abụ alias nke na-akwado azụ maka ihe ịga nke ọma
ndị na-agbanwe; attempts na-adịghị mma anaghị agbakwunye ya.
Counters na-eweghachi na mmalite usoro site na imewe
(telemetry, ọ bụghị accounting).

#### Nhazi Dashboard

Ihu dashboard a na-ejide bụ
`/dashboard/settings/modality-bridge`. URL ya na-adọrọ adọrọ `Vision`, `Audio`,
na `Video` tabs na-echekwa parameters ajụjụ mgbe ha na-agbanwe `tab` value.
Tab Vision na-egosi enablement, mode, nhọrọ model (gụnyere nke a na-emeghe
ndabere), ịkpọ oku na-adabere na ọrụ, oge advanced/image/description-length/cache
ogo, runtime
counters, na arịrịọ sample echekwara. Tab Audio na-arụ ọrụ: ọ na-egosi
enablement, STT-nke naanị model picker na Auto, timeout/max-clip ogo, audio
counters, na `input_audio` sample test. Tab Video na-arụ ọrụ: ọ na-akọwa
ọnọdụ runtime FFmpeg/ffprobe — otu n'ime anọ UI states doro anya (`unknown` mgbe
probe nọ na ụgbọ elu ma ọ bụ enweghị ike ịmecha, `restricted` na host dashboard
na-abụghị loopback ebe probe na-apụghị imecha na akụkụ onye ahịa, `unavailable` mgbe
probe na-enyocha na kwadoro na ọ na-efu, ma ọ bụ `available` na FFmpeg/ffprobe
versions) — na-echekwa
enable/model/frame/video/timeout ogo, na filters model picker ka models nwere
vision-capable, na-egosi video counters.

Card Vision Bridge gara aga n'okpuru AI settings bụ njikọ nkwado na
peeji ọhụrụ; ọ na-adịghị enwe ọzọ copy nke fọm ahụ. Media Providers na-ejikọta
Image-to-Text na Speech-to-Text workflows na tabs Modality
Bridge kwekọrọ na-enweghị iwepụ egwuregwu Speech-to-Text dị.

**Nkwado admission bypass:** mgbe akpọrọ describe na-agafe na
OmniRoute's nke `/v1` self-loop (non-standard provider model), sub-request na-eziga
`x-omniroute-admission-bypass: internal` ma na-enyocha ya na
nkwado self-loop nke a kpebiri — local `sk_omniroute` sentinel na local mode, ma ọ bụ
nkwado onye ọrụ `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env key (#1350) ka
`REQUIRE_API_KEY=true` deployments ka nwere ike ịrụ ọrụ na akpọrọ describe. Nkwado
a na-anabata naanị maka ndị nkwado ahụ, ya mere ndị ahịa mpụga enweghị ike iji
header ahụ gbanwee admission.

Legacy defaults nọ na `src/shared/constants/visionBridgeDefaults.ts`;
ọhụrụ mode/task-aware/cache defaults na settings resolver nọ na
`src/shared/constants/modalityBridgeDefaults.ts`. The guardrail na-egosi
`deps` constructor option ka ule nwee ike itinye ụgha `getSettings` na
`callVisionModel` implementations.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Na-ejide arịrịọ chat nwere audio tupu ha erute ebe a na-amaghị
na-anabata audio input. Ọ na-adịghị reroute arịrịọ chat: akụkụ audio
na-edegharị site na OpenAI-compatible multipart endpoint dị ugbu a na
model chat a họọrọ na-aga n'ihu na text transcripts.

Flow:

1. Kpebie `supportsAudio` site na `getResolvedModelCapabilities()`. Metadata
   provider-registry doro anya na-emeri, mgbe ahụ static model metadata, mgbe ahụ
   synced `modalities_input`. A kọwara ndepụta input na-enweghị `audio` bụ `false`;
   enweghị ihe akaebe ikike na-anọ `null`. Ma `false` na `null` na-eme ka
   bridge na-echekwa, ebe `true` na-agbapụ ya.
2. Kpebie `modalityBridgeAudio*` settings ma wepụ akụkụ audio
   spliceable top-level site na ozi ọ bụla site na `detectMediaParts()`
   detector. A na-akwado wire shapes bụ OpenAI `input_audio`, `audio_url`, na
   `source.media_type: "audio/*"`. A na-enyocha audio nested maka routing ma ọ bụghị
   wepụ site na splice path. A na-ejide ọrụ site na `modalityBridgeAudioMaxClips`;
   akụkụ ndị ọzọ na-anọ untouched.
3. Kwanyere `provider/model` a haziri, ma ọ bụ ka `selectAudioBridgeModel()`
   na-agagharị `AUDIO_TRANSCRIPTION_PROVIDERS` na usoro catalog kwụsiri ike ma họrọ
   model mbụ nwere usable active provider credential.
4. `callAudioTranscription()` na-agbanwe base64/data-URI audio ka multipart
   `file`, ma ọ bụ na-ebudata `audio_url` dịpụrụ adịpụ site na
   public-only outbound guard na DNS pinning na 25 MB bound. Ọ na-eso POST
   faịlụ na model a họọrọ na local `/v1/audio/transcriptions` self-loop, na-enyocha
   ya na `resolveSelfLoopBearer()`. Ụzọ transcription dị ugbu a na-eme nchọpụta
   credential nkịtị, cooldown/rate-limit handling, na provider dispatch.
5. Akpọrọ nke ọma na-anọchi akụkụ ha na `[Audio N]: <transcript>`. Akpọrọ
   na-agba ọsọ na `Promise.allSettled`: njehie nke onye ọ bụla na-echekwa
   akụkụ audio mbụ (#4012 contract). Ọ bụrụ na akpọrọ niile na-ada ma
   ebe a na-enyocha `supportsAudio === false`, akụkụ ahụ na-agbanwe
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 contract). Maka
   ebe a na-amaghị (`null`), nsonaazụ niile na-ada na-anọ untouched. Ebe a
   na-enyocha text-only target na-enweghị usable STT credential na-enweta
   otu stub doro anya na-enweghị ịkpọ oku netwọk.

Transcripts nke ọma na-eji Modality Bridge LRU/TTL cache nke na-arụ ọrụ.
Key na-ejikọta audio reference, stable `audio-transcription` operation
label, na model STT a họọrọ; failures anaghị echekwa. Audio attempts na-emelite
`bridged`, `cacheHits`, `failures`, na `lastUsedAt` counters.
Azịza a gbanwere na-eburu
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; arịrịọ
na-anọghị na-enwetaghị Audio Bridge segment.

Runtime settings bụ DB-backed na Zod-validated:

| Igodo                         | Ndabere | Ogo            |
| ----------------------------- | ------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —              |
| `modalityBridgeAudioModel`    | `""`    | Auto ma STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10           |

Cache nke a na-ekekọrịta ka na-achịkwa site na `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, na `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Na-ejide akụkụ vidiyo nke dị n'elu na Chat Completions `messages` na Responses
API `input` tupu akpọọ ebe a na-amaghị nkwado vidiyo. Ụdị a na-akwado bụ `input_video`, `video_url`, `video_source`, HTTPS URLs,
na `data:video/*;base64,...` data URIs. A naghị ele anya na faịlụ dị mfe n'okwu
dị ka vidiyo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) nwere njem arịrịọ,
nnyocha ikike/policy, nchikota kwa arịrịọ, na payload nzaghachi.
Ọrụ kwa vidiyo — inweta, cache nke nsonaazụ niile, na-akọwa usoro
nke a na-ejikọta transcript ụda nke onye na-akpọ, na metrics/ịkwụsị/nhicha kwa
nwale — na-ezobe n'azụ `processVideoPart` na
`videoBridgePipeline.ts`, akpọrọ otu ugboro kwa akụkụ vidiyo n'ime
loop nke `preCall`. Modulu ahụ na-akọwa kwa oke ọdụ `VideoMediaBrokerPort`
(inweta byte na iwepụ ihe atụ nke a na-enweta), `VideoAudioTranscriptionPort`
(na-ejikọta transcript ụda nke onye na-akpọ na ihe atụ nke a na-enweta), na
`VideoDrilldownPort` (ụdị nchekwa ochie). Production STT na idobe
ihe atụ na-ejikọta gburugburu ọdụ na-akọwa site na `createVideoSttAdapter` na
`createVideoDrilldownAdapter`; nke ikpeazụ na-eji ndụmọdụ opaque-handle nke a na-ekekọrịta.

Ụzọ arịrịọ ọha `/v1` anaghị ebubata ma ọ bụ kpọọ subprocess. Vidiyo dịpụrụ adịpụ
na-ebudata n'okpuru oke 50 MiB; inline base64 vidiyo nwere
oke 36 MiB nke a na-ewepụ na vidiyo ọ bụla ka ụdị/ozizi/nkwupụta
nwere ike ịnọ n'ime oke nnabata arịrịọ JSON ọha nke 50 MiB. A na-enyocha
ogologo inline na ọnụ ọgụgụ a na-ewepụ tupu itinye. HTTPS
na-achọsi ike na URL dịpụrụ adịpụ mbụ na ntụgharị ọ bụla, na-eji
nchekwa ọha naanị nke dị ugbu a na DNS pinning. Byte ahụ na-agafe
n'ókè ziri ezi nke `POST /api/modality-bridge/video/extract` broker. Ụzọ ahụ bụ
`LOCAL_ONLY` na `SPAWN_CAPABLE`, na-anabata naanị arịrịọ nke a kwadoro
nke onye ọrụ, trusted-loopback, na anaghị anabata URL, ụzọ faịlụ, executable,
ma ọ bụ ndepụta nke arguments. Pipeline nke API body-size na onye na-ahụ maka
incremental body reader na-achịkwa n'ụzọ dị iche 50 MiB broker input cap.
Queue ya nwere oke na-arụ otu n'elu oge, na-enye ohere ọrụ anọ na-atụfu
input na 100 MiB.

N'ime broker, `ffprobe` na-agụ faịlụ mpaghara nkeonwe; ndepụta
usoro a na-ekwe ka a gbanwee ụdị playlist na manifest. Maka MOV-family
containers a na-ekwe ka, njikọ MOV data nke mpụga ka na-anaghị arụ ọrụ
site na ndabara, na iwu a na-adịghị ekwe ka ha. Ma `ffprobe` na `ffmpeg` na-eji
ndị na-ekwe ka `file`-nke naanị protocol whitelist, otu thread, ndepụta
arguments kwụsiri ike, enweghị shell,
na executables a na-achọpụta site na `PATH`. A naghị ekwe ka
streams nke mkpuchi foto a na-ejikọta. Ụfọdụ streams a na-egwu ga-emezu
oke, na a na-ahọrọ stream ndabara doro anya tupu
ndị na-anaghị atụ anya na index kachasị ala. Vidiyo nwere oke nke 600 sekọnd, 8,192 pixels kwa
n'ogologo, na 33,554,432 pixels isi. FFmpeg na-ewepụta 1–16 midpoint JPEG frames, na-ebelata
n'ogologo nke ogologo na 1,024 pixels na-enweghị ịkwalite inputs dị obere, na
anaghị enweta URL. Sampling bụ `uniform` site na ndabara.
Nchekwa `scene_aware` na `segment_aware` na-arụ ọrụ otu FFmpeg pass
n'elu stream mpaghara a kwadoro, na-ahọrọ `showinfo` scene timestamps
na na-eweghachi n'ụzọ doro anya na otu
midpoints uniform na mmejọ detector, timeout, output na-adịghị mma, ma ọ bụ
set nke ndị na-anaghị enweta. Ụdị segment-aware na-enye samples midpoint
n'ogologo nke a kwadoro scene intervals; ihe akaebe segment-aware na omume
na-eweghachi bụ nke a kọwara n'okpuru. Oke 16-frame siri ike bụ
na-etinye na nhọpụta na policy ọ bụla. Mgbe arịrịọ nke na-ahụ maka
scene nwere naanị otu frame budget, ọ na-eji midpoint uniform nke
vidiyo zuru ezu ma ọ bụ windo nke a na-elekwasị anya na na-akọwa `policyEffective: uniform`: otu
akụkụ scene a họọrọ enweghị ike idobe ma njedebe oge abụọ. Onye na-akpọ nwere ike
inwekwu inye windo nke a na-elekwasị anya (`start`/`end` sekọnd); oke a na-ejide
na ogologo media, windo na-agbanwe ma ọ bụ na-adịghị njedebe na-anaghị anabata, na
a na-eme sampling policies naanị n'ime oge a kwadoro. Windo a na-abanye
n'ime metadata sampling na na prefix nkọwa na-adịghị ntụkwasị obi ka
ndị na-esote nwere ike ịmata excerpt a na-elekwasị anya site na
n'ogologo zuru ezu.

Nchekwa caption semantic bụ ntọala dị iche, doro anya. Ụdị ndabara `full`
nnyocha na-echekwa prompt frame dị ugbu a ma na-anaghị eziga
okwu arịrịọ na model caption. Na `focused` mode, bridge na-agụ naanị
nke kachasị ọhụrụ na-enweghị ọdịnaya nke onye ọrụ `text`/`input_text` site na
otu Chat ma ọ bụ Responses
container, na-eme ka ọ bụrụ NFC, na-ejikọta akara njikwa na whitespace,
na na-ejide ya na 500 Unicode code points. Nsonaazụ efu na-eweghachi
na prompt `full` ziri ezi. A na-eme ka ihe na-arụ ọrụ dị ka JSON na
block nke onye ọrụ na-adịghị ntụkwasị obi ma nwee ike naanị ịkwado
ndị a na-ahụ anya; ọ pụghị ịgbanwe ihe ịdọ aka na ntị dị iche
na-anya ma ọ bụ na-anụ na media. Nchekwa ederede anaghị atụgharị `start`/`end` ma ọ bụ gbanwee
sampler oge.

#### FU-07 ihe akaebe nke akụkụ usoro

`segment_aware` na-eji otu pre-analysis pass nke e mere n'elu vidiyo mpaghara a kwadoro. Chịkọta nzacha a na-eme ka ọ bụrụ na ọ bụghị karịa 320 pixels n'ogologo, na-achọpụta mgbanwe na ọnọdụ ndị kwụsịrị, mgbe ahụ na-anwale na 1 frame kwa nkeji maka blur, average luma, na ozi spatial/temporal. Pass a bụ nke a na-edobe na 600 structural samples, otu FFmpeg/filter thread, otu protocol na container allowlists nke `file`-only, 1 MiB process-output bound, na ọ bụghị karịa 30 sekọnd n'ime oge nkewa/ndeadline nke broker. Ọ naghị anabata iwu, nzacha, ụzọ, ma ọ bụ URL site na arịrịọ.

Uru ndị a na-eme ka ọ bụrụ na ha bụ ihe atụ nke sampling, ọ bụghị nghọta vidiyo semantic. Ha anaghị atụgharị isiokwu, omume, captions, okwu, ma ọ bụ ebumnuche onye ọrụ. Boundaries nke scene na freeze na-eme ka ọ bụrụ segments; freeze coverage, blur, exposure, spatial detail, na temporal change na-emetụta naanị otu esi etinye 1–16 frame budget dị adị. Segment nke zuru ezu na-ejide na otu frame, ebe segments ndị na-adịghị akwụsị na-asọ mpi maka ego fọdụrụ. Mgbe boundaries karịrị frames, a na-edebe uniform timeline coverage ka cuts ngwa ngwa na mbụ enweghị ike ịzụta segment ogologo. Boundaries nke scene n'ime 1-second analysis resolution nke freeze boundary na-ejikọta ọnụ.

Ndị na-adịghị mma, ihe atụ na-adịghị mma/n'efu, njehie detector, ma ọ bụ bounded pre-analysis timeout na-eme ka ọ bụrụ na ọ na-emeghe na usoro uniform midpoint policy. Iwu nke onye na-akpọ ma ọ bụ deadline broker anaghị eme ka ọ bụrụ na ọ na-emeghe: ọ na-akwụsị subprocess na-agba ọsọ, na-egbochi iwepụ frame n'ọdịnihu, na a na-ewepụ osisi nkeonwe na `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` na-emepụta FFmpeg fixtures ziri ezi maka post-dedup caption-call savings, dense-motion budget allocation, blur/exposure/SI-TI evidence, rapid cuts with a long tail, na gradual-fade false positives. Ọ na-edekọ pre-analysis wall time na, ebe `/usr/bin/time` dị, CPU nke nwa na peak RSS. Nyocha àgwà ya bụ structural oracles naanị. Àgwà caption-model ziri ezi ka nọ na `HOLD` n'ihi na harness a enweghị njedebe kwadoro ma ọ bụ onye ikpe kwụsịrị. Ego nchekwa ka nọ na `HOLD` ma ọ bụrụ na `--caption-cost-per-call-usd` na-enye ọnụahịa doro anya kwa oku; script ahụ anaghị eme ka nsonaazụ ọ bụla.

Frame ọ bụla nwere oke 4 MiB, frames niile raw ọnụ na 23 MiB, na nzaghachi broker serialized na 32 MiB. A na-ewepụ nchekwa nkeonwe na `finally`. OmniRoute anaghị etinye FFmpeg ma na-anaghị anabata ụzọ executable nkeonwe. Tupu captioning, bridge na-etinye pass visual deduplication na-echebe: JPEG ọ bụla na-ebelata na 16×16 grayscale buffer ma na-ejikọta naanị na frame ikpeazụ a na-edebe. Maka ego caption a rịọrọ nke karịrị otu frame, iwepụ na-enye pool nke ndị na-achọghị nke nwere ike ịbụ ugboro abụọ nke ego ahụ ma ọ bụghị karịa 16 frames. A na-etinye cap a rịọrọ naanị mgbe deduplication gasịrị, na ndị na-achọghị mbụ na ikpeazụ na-echekwa n'oge thinning ikpeazụ mgbe ego ahụ dịkarịa ala abụọ. Usoro `grayscale-16x16-mean-cells-v2` na-eji nke kachasị nke mean luma delta na ọnụego nke thumbnail cells nke normalized delta ya dịkarịa ala 0.05. Threshold nke duplicate bụ 0.04, nke a họọrọ maka predictability kama ka a kpughee dị ka ntọala runtime. Nke a secondary high-contrast signal na-echekwa obere mmegharị na mgbanwe ederede nke a na-ejighị naanị njikọ mean. Njehie comparator ma ọ bụ decoder na-eme ka ọ bụrụ na ọ na-emeghe ma na-edebe coverage. Metadata nke output na-ekewapụ ndị na-ewepụ, frames a na-eji nke ọma, na visual duplicates a na-ewepụ.

A na-ejikarị akụkụ vidiyo nke a kpọpụtara kpọrọ arịrịọ timestamped contact sheet. Bridge na-ewu grid JPEG nke nwere columns 4, 16-frame. Cell ọ bụla nke 512-pixel na-ere timestamp ya na band dị elu, ebe timestamps ndị ahụ ka nọ na metadata ederede maka njikọ na audit. JPEG zuru ezu ka nọ na 32 MiB. Ọ bụrụ na `sharp` enweghị ike ịkọ ma ọ bụ hazie grid, bridge na-alaghachi na frames JPEG nkeonwe; abort nke onye ahịa ka na-agba ọsọ site na ọrụ sheet.

Eziokwu nke mgbasa ozi bụ nke a na-eme ka ọ bụrụ na ọ dị iche na synthetic composition microbenchmark. `scripts/perf/video-bridge-contact-sheet-eval.ts` na-akọwa schema-versioned A/B harness maka ezi OpenAI-compatible vision models. Ọ na-atụle tokens a na-akọ na provider, end-to-end wall latency (gụnyere sheet composition), model-call count, na manifest-defined fact retention. A naghị ede raw model responses na akụkọ; naanị SHA-256 digests na matched fact IDs ka nọgide. Harness ahụ anaghị eme netwọk ma ọ bụ kpọrọ model na-akwụ ụgwọ ma ọ bụrụ na `--execute-real` na-agbakwunye na `--model`, `OMNIROUTE_BASE_URL`, na `OMNIROUTE_API_KEY` ka haziri. Na-enweghị ịrụ ọrụ ziri ezi a kpọpụtara, mkpebi ya nke machine-readable ka nọ na `HOLD`; synthetic payload/call-count measurements naanị abụghị eziokwu mgbasa ozi.

Ndị a na-ejikọta `scripts/perf/video-bridge-promotion-eval.ts` na-eji FU-07 ma ọ bụ FU-09 observations. Ikwado mgbasa ozi chọrọ ụdị scenario asatọ synthetic niile tinyere clip ziri ezi nke a na-eme ka ọ dị ọcha, ma ọ dịkarịa ala repetitions atọ a tụrụ na ọrụ na ikpe, metrics iri niile a kọwara, media/prompt/expected-fact/settings digests kwụsịrị, unique observation IDs na verified seeded A/B order. Receipt nke arụmọrụ na-ejikọta corpus digest, exact candidate SHA na model revision. Njehie ma ọ bụ measurements na-adịghị mma ka nọ na `HOLD`, gụnyere CPU karịrị 30 s, peak RSS karịrị 512 MiB ma ọ bụ pre-analysis karịrị 30 s. Nke a bụ caps admission evidence, ọ bụghị nkwenye ọhụrụ nke runtime RSS enforcement.

FU-07 chọrọ ka o nwee ọkara 98% nke ịdị mma na p95 latency na-erughị 1.2x
ndị bụ isi, tinyere ma ọ bụ 0.05 nkezi nke ikpe ziri ezi na-eme ka ncheta ka mma na
nkezi nkezi nke akpọrọ, ma ọ bụ na ọ dịkarịa ala 10% nkezi nke akpọrọ post-dedup. FU-09 chọrọ ka o nwee ọkara 0.85, 95% retention, 20% p95 latency
nchekwa na 10% token belata. Nkwụsịtụ nke eziokwu dị mkpa, nkwado ntinye ma ọ bụ
ncheta na-adịghị adị na-egbochi ịkwalite. Otu mmegharị enweghị ike ịkwalite ihe ọ bụla:
`--previous-report` na-ekwenye na e nwere mmegharị abụọ dị iche, na-enweghị overlap, nke na-eru eru
nke otu iwu/model revision/candidate/corpus. Nnyocha sampling enweghị ike ikwenye
nnyocha contact-sheet.

Ndị na-anakọta kwesịrị ịkọwa nzaghachi na ebe nchekwa ma chekwaa `responseDigest` tinyere
metrics na njikọ nlekota, mgbe niile na-enweghị ederede nzaghachi. Onye na-eji ya na-agụkwa
nnyocha ndị ochie ma ọ bụghị ịkọwa ederede ahụ na akụkọ ya. Naanị otu n'ime `responseDigest` ma ọ bụ `rawResponseText` ka a na-anabata maka nnyocha ọ bụla.
Ndepụta nke a na-enye ikike ka na-adị efu na `hold` nke na-adịghị agbanwe agbanwe. Nnyocha kwesịrị ekwesị chọrọ njikọ nke ihe akaebe ya, iwu, model revision, kpọmkwem
candidate SHA, manifest digest na ID abụọ dị iche; ọnọdụ na-emegide na-anaghị anabata. Metadata ndị a bụ nkwekọrịta nyocha, ọ bụghị ihe akaebe na faịlụ a kpọtụrụ aha nwere
nke ziri ezi. Lelee akwụkwọ ndị a na-egosi tupu itinye
nnyocha ọ bụla. Njikwa stats endpoint na Video dashboard na-egosi
nchekwa dị mma. Naanị aha model a haziri ahazi anaghị etinye ya na
revision ya ma ọ bụ
candidate SHA na-agba ọsọ, ya mere, dashboard ugbu a na-akọwa `HOLD` kama
iji ohere sitere na ọnọdụ mmegharị ọzọ. Nhọrọ nyocha doro anya ka na-adị iche na ịkwalite; enweghị ndabara na-agbanwe na-akpaghị aka.

Ndị na-akpọ nwere ike itinye `transcript.cues` array nke nhọrọ na akụkụ vidiyo
nkwado mgbe ha nwere ederede kwekọrọ. Cue ọ bụla ga-enwe `text`, a
nkeji `start`/`end` nkeji n'ime oge a nyochara, na `source` nke a na-enye ikike
(`client`, `embedded`, ma ọ bụ `audio-bridge`); `confidence` na-adị na
`1` ma ga-anọgide n'etiti `0` na `1`. Cue ndị na-emegharị n'ozuzu na-ejide.
OmniRoute anaghị amalite transcription site na metadata a: a na-ejide cues ndị a
n'ime nsonaazụ a kọwara na `source`, `confidence`, na `interval`, ma
na-egosi dị ka nlekota na-adịghị ntụkwasị obi na ọnụ caption. Ederede na-adịghị mma,
na-enweghị oke, ma ọ bụ na-enweghị ihe akaebe na-anaghị anabata kama ịkọrọ na
caption stream. Ma request-body transcript channels na-eme ka provenance a na-enye
nke a bụrụ `client`, gụnyere self-asserted `embedded` ma ọ bụ `audio-bridge`
labels. Naanị adapter nke onye ọrụ sava nwere ike ịnye ndị a na-enye ntụkwasị obi
labels site na argument `trustedSource` nke naanị koodu; a request JSON field enweghị ike iru
argument ahụ. Ederede transcript ka na-adị na-adịghị ntụkwasị obi, nke sitere na mgbasa ozi,
n'agbanyeghị ihe akaebe ya, ma ghara ịkọwa ikike.

Ndị na-akpọ dị elu nwere ike inye `audioTranscript` track maka vidiyo ahụ; a na-ejikwa ya dị ka ederede nke onye ahịa nyere, ọ bụghị ihe akaebe nke sava transcription.
Njikọ fusion na-agba ọsọ nlekota anya na nke olu n'okpuru
otu oge ikpeazụ na mgbaàmà nkwụsị, na-edozi ha na otu oge, na-ejide
nkeji ndị na-emegharị n'ozuzu, ma na-akọwa nsonaazụ akụkụ mgbe naanị otu akụkụ na-eme nke ọma.
`audioTranscript` na-adịghị mma na-ebelata na nsonaazụ akụkụ ahụ — nkọwa anya ka na-adị na
olu na-edekọ koodu mmejọ a na-emegharị — kama ịkwụsị vidiyo niile. N'ịbụ nkeji, flag akụkụ,
na koodu mmejọ a na-emegharị ka na-adị na nsonaazụ a kọwara, na
metadata guardrail (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), na metadata cache nsonaazụ, na na
counters fusion bridge. Ụzọ Video Bridge ndabara anaghị akpọrọ speech-to-text
ma ọ bụ budata nkeji mgbasa ozi nke abụọ; na-enweghị track doro anya ahụ, ọ na-anọgide
vidiyo naanị.

**Nchekwa transcript (#12150 P1).** Nke a na-apụta na-akpaghị aka mgbe
Video Bridge (nke onwe ya bụ opt-in) na-eme ka cue transcript — enweghị flag nchekwa dị iche. Mgbe a na-arịọ ka e mepụta cue transcript ọ bụla (nnyocha a kọwara `transcript` ma ọ bụ `audioTranscript` a na-ejikọta), guardrail na-eme ka ọ bụrụ
`videoBridgeObserved` ma na-emepụta ihe omimi nke nkọwa vidiyo —
nke a na-emegharị na nke a na-eme ka ọ bụrụ na akụkụ nke cue ọ bụla na-enweghị ụgwọ bụ
`[redacted-video-transcript]`, nke a na-ewu site na ịgbanwe mpaghara cue a haziri tupu a
na-ejikọta eriri (na-enweghị ịtụgharị ederede a na-emegharị, ya mere, enweghị ọdịnaya cue
— nke na-emegide ma ọ bụ nke nkịtị, gụnyere akụkụ nwere `]` dịka
`[inaudible]`/`[music]` — nwere ike ịnagide). A na-ejikwa
nke a na-echekwa na-arịọ ka a na-agbanwe
nkeji vidiyo niile maka ihe omimi ahụ, nke a na-ejikọta site na ịdị n'otu; `fullText` anchor na-agụgharị ọzọ site na
nkeji guardrail pre-call a kwụsịrị, ya mere, njikọ ka na-eme nke ọma mgbe
n'ịbụ nkeji guardrails (PII na
credential maskers, mkpa 10/95) na-edegharị nkọwa ederede na ebe na
mgbaàmà sistem/prompt/handoff/memory injection na-emegharị usoro ozi. Ederede a na-eziga n'elu na model adịghị agbanwe. A na-ahụ request a na-ejikwa
n'ịbụ na enweghị nchekwa Memory (nnyocha na nzaghachi na-abụghị nke a na-enwetaghị),
ya mere, nzaghachi nke model onwe ya enweghị ike ịkpọgharị ederede transcript n'ime Memory.

**Raw video fields (#12430).** Mgbe a na-eme ka bridge na-arụ ọrụ ma nkwado vidiyo nke a na-ahụghị ma ọ bụ na-adịghị, a na-akpọ `transcript`/`audioTranscript` fields na-eme ka `videoBridgeObserved`, ọbụlagodi mgbe nkọwa na-adịghị mma ma ọ bụ `maxVideos` limit. `null` na eriri efu na-agụ; a na-adịghị anabata fields na-adịghị ma ọ bụ metadata na-abụghị vidiyo. A na-echekwa ndị a na-emegharị na-ewepụ fields ndị a ma ọ bụ na-ewepụ arịrịọ ahụ, na caches/Memory na-apụghị ịga.

Na ụzọ ndị a na-eweghachi, ihe ndị na-akpọ oku ziri ezi na-abụ akụkụ `text`/`input_text` nke a na-akwado kama ịbụ ebe ndị na-enyeghị ụkpụrụ. Ma tracks nke a na-enye na arịrịọ ka na-anaghị atụkwasị obi `client` nlekota, na nkwupụta doro anya na vidiyo ahụ adịghị akọwapụta ma timestamps adịghị ekwenyere na media. 256-cue/64-KiB nke dị ugbu a na ego kwa cue na-ejikọta na tracks abụọ ahụ; timestamps ga-adabara ceiling nke 600 sekọnd nke broker na window nke a na-enye. A na-ewepụ tracks na-adịghị mma, ọ bụghị na-eziga dị ka ederede na-enweghị usoro; a pụrụ iji ezigbo nwanne ma ọ bụrụ na ego ha jikọtara adịghị agafe. Null/empty fields anaghị agbakwunye ederede. Enweghị media fetch ma ọ bụ transcription a na-agbakwunye site na nke a na-eweghachi. A na-ewepụ transcript extension fields na fallback video carrier na `video_url`/`source` objects ya. Ndepụta wire OpenAI na-anọgide na-esiri ike; ndị na-ebufe vidiyo na-amaghị ama ka na-adị, na ndị na-ejide ederede naanị na-echekwa akara nchekwa. Structured redaction shadows na-echebe ederede transcript a gbakwunyere, mgbe arịrịọ nke onye na-akpọ mbụ na-anọgide na-adị ka ọ dị. Ndị na-akwado ndị na-akwado na ndị na-adịghị arụ ọrụ na-echekwa omume bypass ha dị ugbu a.

Ndị ọzọ a na-edebe na-eji otu akara arịrịọ a na-ahụ. Snapshot arịrịọ client pre-guardrail, na-eche na arịrịọ, na log arịrịọ nke a jụrụ na mbụ na-anọchi anya transcript fields na akụkụ vidiyo; string prompts nke a na-emepụta site na pipeline stages na context handoff na-ewepụ na persisted-request-body sink. A na-eme ka `video_content_removed` marker mee ka `previous_response_id` continuation kwụsị na-emeghe kama ịmepụta ederede nke a na-ewepụ na nzube. Ọ bụrụ na arịrịọ a na-ahụ na-efu shadow redaction ya na akụkụ tupu logging, ma ọ bụ ọbụna otu n'ime ọtụtụ shadows vidiyo na-adịghị adabara mgbe arịrịọ emechara, a na-ewepụ arịrịọ ahụ kpamkpam kama ịchekwa transcript nke a na-ewepụ n'ụzọ akụkụ.

Maka arịrịọ a na-ahụ, azịza model nwere ike ịkpọtụrụ akụkụ ọ bụla nke transcript na-enweghị oke cue. A na-anọchi anya `responseBody` nke log oku ya na mkpụrụ edemede; a na-ewepụ ihe nketa pipeline (nke nwere ike ịgụnye upstream/client bodies na stream chunks). Semantic, idempotency, na reasoning-replay caches na-ewepụgụ na idebe maka arịrịọ ahụ. Arịrịọ onye na-enye na azịza nke a na-ahụ na client na-anọgide na-adị ka ọ dị. A na-ewepụ bytes keepalive mbụ site na buffer nke oge a mgbe a na-ewepụ ihe nketa. Kiro's malformed EventStream warning na-akọwa naanị ọnụ ọgụgụ byte nke payload, ọ bụghị ọdịnaya ya ma ọ bụ njehie raw nke JSON parser.
Nke a anaghị ekwu na a na-enyocha nyocha nke onye na-enye/plugin na-enweghị njikọ; a na-edekọ sweep nke a na-edebe na #11658.

Ụkpụrụ ndụ `/api/modality-bridge/video/drilldown` bụ substrate cache nke dị iche, loopback/token-authenticated. Ọrụ ọ bụla na-achọkwa ID principal opaque canonical. Tupu a kwado onye na-akpọ mmepụta, ọ ga-enweta ID ahụ site na tenant a kwadoro ma ghara iziga uru nke onye ahịa họọrọ. Cache keys na-ejikọta principal ahụ na canonical session na video-reference IDs, na-echekwa naanị keys ha sitere na SHA-256, na scope na-agụnye na ihichapụ na principal ahụ. Cache na-echekwa ihe kachasị 16 JPEG frames nke a na-enweta kwa ntinye, na-eme ka ha kwụsị na nkeji iri, na-akwado `start`/`end` na-agụ ma ọ bụ ihichapụ session doro anya.

Onye principal ọ bụla nwere oke 16 entries na 64 MiB nke data JPEG canonical. Oke ndị a bụ nke onwe ha na ceiling global 64-entry/256 MiB: nrụgide quota principal na-ewepụ naanị entries nke principal ahụ nke a na-eji na nso nso a tupu a tụlee global LRU eviction. A na-ewepụ entries ndị kwụsịrị site na principal na global accounting na cache activity, mgbe ịkwụsị na mmejọ nkwenye anaghị eme ka a na-emegharị akụkụ.

Cache na-anaghị anabata Base64 na-abụghị canonical, padding nke na-abawanye, media na-abụghị JPEG, JPEGs na-adịghị mma ma ọ bụ truncated, na JPEGs nke na-emepụta ịdọ aka ná ntị n'oge `sharp` decode nke full-image. Ọ na-emegharị foto ọ bụla a nabatara dịka JPEG canonical, na-enweta obosara na elu site na bytes a kọrọ kama ịtụkwasị obi na fields nke onye na-akpọ, na-ewepụ bytes polyglot na-esote kama ịchekwa ha. Naanị buffer compressed canonical nke a na-edebe na quotas abụọ. Limit JSON wire gụnyere Base64 overhead maka ceiling 32 MiB nke decoded-input. Onye
a na-echekwa derivation ọ bụla na-edekọ usoro JPEG ya kwadoro/resolution, iwu sampling, version derivation, oge mmepụta, hash ọdịnaya nke server, na hashed parent reference tinyere hash parent-content nke onye na-akpọ kwadoro. A na-enyocha cancellation n'etiti asynchronous decode/hash phases tupu atomic cache commit.

Onye na-emepụta mmepụta na-eji frames broker nke a na-enweta na mbụ naanị mgbe nyocha anya gara nke ọma, na-enweghị mbipụta/ntinye vidiyo nke abụọ. Ọ na-achọ operator `modalityBridgeVideoDrilldownEnabled=true`, `drilldown: true` nke a na-ahụ na akụkụ, na ID ndekọ API-key kwadoro. Uru principal/session nke onye ahịa na-ekwupụta anaghị etinye ikike. Na-enweghị ọnọdụ atọ ahụ, ọ naghị eme hash, resize ma ọ bụ chekwaa frames ndị ọzọ. Nkwụsị na-adịghị mma na-echekwa azịza anya bara uru. Arịrịọ ndị kwadoro na-ewepụ cache nke nsonaazụ vidiyo niile ka nsonaazụ a na-echekwa anaghị emegharị handles.

Nsonaazụ JSON na SSE nke ọma na-egosi na ọ dịkarịa ala handles anọ na-enweghị atụ na
`x-omniroute-video-drilldown` header. Ndị nchọgharị nwere ikike nwere ike ịgụ header ahụ
na-enweghị ịgbatị iwu CORS origin. Handles ọhụrụ na-eji `v1.<32-byte random base64url
token>`, na ndekọ na-edebe naanị
hashes SHA-256 ha. Onye na-agụ/header parser na-anabatakwa legacy 64-hex tokens.
Onye na-ahụ maka ọha na eze bụ
`GET /api/v1/video-bridge/drilldown?handle=...`, nke a na-achịkwa n'ụzọ dị iche site na
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Nkwupụta doro anya na-adịgide adịgide na-ewepụ
nnweta ọbụna mgbe legacy `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env
fallback bụ arụnyere. Nchekwa mmepụta nwere legacy
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback yiri ya. Fallback abụọ na-default off.

Onye na-eji ya na-enweta ikike site na igodo a kwadoro, na-etinye iwu igodo, na
na-alaghachi 404 otu maka handles na-amaghị, kwụsịrị na handles igodo ọzọ. Ọ na-anabata
`variant=preview|standard|detail` (n'ogologo JPEG kacha elu 320/640/1280, anaghị emepụta ya),
`limit=1..8` (ma ọ bụ legacy `frames` alias, anaghị abụ abụọ), zero-based `page`, na nhọrọ
`start`/`end` sekọnd. A na-enyocha
query keys na reversed focus windows. Variant ọ bụla a na-alaghachi nwere hash
nke ọdịnaya ya na metadata nke ezi nhazi, jikọrọ na isi nke edere. A na-enweta variants na
gụnyere kama ịchekwa ha dị ka ndị ọzọ edere. Nsonaazụ JSON,
gụnyere Base64/envelope, bụ capped na 32 MiB; peeji nke ukwuu na-alaghachi
413 na onye ahịa ga-arịọ maka obere frames. Gụọ na-enyocha nkwụsị gburugburu
nke ọ bụla resize na-enyocha handle validity tupu alaghachi. `DELETE` site na onye nwe bụ idempotent;
ihichapụ ma ọ bụ TTL expiry na-emeghe isi nke edere na nchịkọta ojiji.

Store a na-ekekọrịta bụ process-local: handles na-apụ na restart ma
adịghị enwe ike ịkwaga n'etiti usoro OmniRoute dị iche. Nchịkọta stats na-egosi
nchekwa dị irè/nkwupụta na nchịkọta edere entries/bytes naanị, anaghị abụ media, references,
principal IDs ma ọ bụ handles. Panel ntọala Video na-egosi uru ndị ahụ ma nwee ike ịchekwa
ma abụọ consent switches. Akwụkwọ ndu a na-emeghị ka ọ bụrụ ihe ngosi mmejuputa ma ọ bụ
nkwado; nnabata nke ezi ụdị na-enyocha nke ọma.

Frames na-enweta caption n'usoro na nhazi Video a haziri. N'efu
Video override na-erite site na ntọala Vision; ma ọ bụrụ na ha abụọ bụ efu, Vision
auto-router na-ahọrọ ụdị nwere ikike vision. Captions nke ọma
na-anọchite anya akụkụ mbụ na prefix `[Video description:` kwụsiri ike nke na-emekwa
ka ederede ahụ bụrụ ihe na-adịghị ntụkwasị obi nke sitere na media ma na-agwa ụdị ndị ọzọ
ka ha ghara iso ntuziaka ndị ahụ chọpụtara na media. Frame-caption cache keys
na-agụnye JPEG bytes, prompt, timestamp, na ụdị dị irè; naanị captions nke ọma
na-echekwa. Cache entries na-edebe ụdị mmepụta nke ọma,
gụnyere ụdị fallback; bridge na-akọ `mixed` mgbe frames dị iche
bụ ndị mmepụta site na ụdị dị iche. A cache hit na-eji njirimara mmepụta ahụ
n'iji ya kama ịkpọ ya aha dịka atụmatụ routing a rịọrọ. Cache nsonaazụ vidiyo niile
na-ejide na ntinye ọ bụla na-agbanwe output — prompt, ụdị dị irè, iwu sampling, ọnụ ọgụgụ frames,
semantic analysis mode, SHA-256 fingerprint nke normalized focus hint, focus window,
`transcript`, `audioTranscript`, na flag contact-sheet — ya mere, ịgbanwe otu n'ime
ndị ahụ bụ cache miss, anaghị abụ reuse na-adịghị ọhụrụ. Version nke iwu visual dedup
policy, threshold, na bounded candidate-frame count bụkwa doro anya na
nsonaazụ-cache key na metadata; mgbanwe iwu ya mere enweghị ike iji
nkọwa vidiyo niile na-adịghị ọhụrụ. Nsonaazụ-cache v4 metadata na-edebe
mode na fingerprint, anaghị edebe ọrụ onye ọrụ raw. Metadata guardrail na-akọ
ma ntuziaka na ụdị nyocha dị irè; a rịọrọ `focused` mode na-enweghị
edeghị ederede onye ọrụ usable na-akọ dịka `full` n'ezie.

Guardrail na-ewepụ akụkụ vidiyo niile a kwadoro ma na-akọghị karịa
`modalityBridgeVideoMaxVideos`. Maka ihe mgbaru ọsọ a na-egosi na
`supportsVideo === false`, vidiyo ndị na-adịghị arụ ọrụ na ndị na-erughị oke
na-abụ ndị na-egosi ederede nchekwa ka ọ ghara ịnwe vidiyo raw. Mgbe ikike
amaghị, akụkụ ndị ahụ na-edebe carrier vidiyo ha; ọ bụla fallback transcript na-esochi
nke a na-edebe ederede. Targets nwere `supportsVideo === true` na-apụ na bridge.
Nkwupụta arịrịọ nke onye ahịa na-agbasa site na ibudata, broker queue,
subprocesses, na oku caption; arịrịọ na-akwụsị n'etiti vidiyo ma
anaghị emebi na vidiyo raw.

Ntọala oge bụ DB-backed na Zod-validated:

| Key                                 | Default     | Range / behavior                                                                                           |
| ----------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Ntọala oge, opt-in                                                                                         |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` na-edebe captions nke ọma; `focused` na-eji bounded, untrusted latest-user context                  |
| `modalityBridgeVideoModel`          | `""`        | Nweta ụdị Vision Bridge                                                                                    |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                       |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, ma ọ bụ proportional `segment_aware`; failure detector na-alaghachi na `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                        |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                             |

Legacy persisted Video timeout values above 120 seconds are clamped to the
broker deadline; new settings writes above that limit are rejected.
`GET /api/modality-bridge/video/runtime` requires trusted stamped loopback
locality before authentication or runtime probing, then requires management
auth. It returns only `available`, sanitized FFmpeg/ffprobe versions, and a fixed
reason when the runtime is unavailable. The internal extraction endpoint is not
a public upload API: queue saturation returns `503` plus `Retry-After`, a caller
disconnect returns `499`, and the fixed broker deadline returns `504`. Converted responses add
`video->text;model=<visionModel>;parts=<videos>` to the central
`x-omniroute-modality-bridge` header without removing Vision or Audio segments.

### PII Masker (`piiMasker.ts`)

Na-arụ ọrụ na **ma** ọkwa abụọ.

- **`preCall`** na-eme ka payload, na-agagharị `system`, `messages`, `input`, na
  `prompt` (gụnyere ihe ederede dị mfe), na-etinye `processPII()` (site na
  `@/shared/utils/inputSanitizer`) na string `content`/`text` fields. Mgbe
  `PII_REDACTION_ENABLED=true`, PII a chọpụtara na-ewepụ na outbound
  payload. Nke a bụ nke na-abụghị nke `INPUT_SANITIZER_MODE` (nke na-achịkwa naanị
  iwu prompt-injection). Mgbe a na-ewepụ, ndekọ oku na-edekọ ọnụ ọgụgụ nchọpụta
  na-enweghị idegharịa ọdịnaya.
- **`postCall`** na-eme ka nzaghachi, na-agba ọsọ `sanitizePIIResponse()` tinyere
  masker Responses-API-shape (`maskResponsesOutput` — na-ekpuchi
  `output_text` na `output[].content[].text`). Ọ bụrụ na a na-emegharị ihe ọ bụla,
  nzaghachi a gbanwere na-anọchite anya nke mbụ.

The guardrail adịghị egbochi; ọ na-anọchite naanị (`meta.detections`,
`meta.redacted`) ma ọ bụ na-edegharịa.

### Prompt Injection (`promptInjection.ts`)

Na-achọpụta usoro ndị na-emegide na ọdịnaya onye ọrụ nyere ma na-eme ka
iwu a haziri. Ọrụ a na-akpata site na mgbanwe gburugburu na nhọrọ constructor:

| Ntọala          | Env var                                                                                               | Default | Nsonaazụ                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Emebere         | `INPUT_SANITIZER_ENABLED`                                                                             | `true`  | Mgbe `false`, guardrail na-eme ka ọ bụrụ na ọ na-emeghị.                                                                                                                                     |
| Ụdị             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`  | Iwu injection: `block`, `warn`, ma ọ bụ `log`. (`redact` na-anabata maka nkwado azụ mana anaghị **ewepụ** ederede injection; arịrịọ PII rewrite na-achịkwa site na `PII_REDACTION_ENABLED`.) |
| Block threshold | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Ọnụ ọgụgụ kachasị mkpa chọrọ iji gbochie. Medium bụ naanị nlekota na ndabara.                                                                                                                |

**Ụdị ndọrọndọrọ** (`getMode`): onye na-akpọ `options.mode` →
`INJECTION_GUARD_MODE` **DB feature-flag override** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. N'ihi ya, ihe ndọrọndọrọ dashboard na-emeri n'elu mgbanwe gburugburu, ya mere UI Feature
Flags na-achịkwa guard na-arụ ọrụ n'oge (enweghị mmeghari). Ntụle DB bụ fail-safe:
ma ọ bụrụ na ọ na-emehie, guard na-alaghachi na omume dabere na gburugburu, na mgbe enweghị
ndọrọndọrọ, omume ahụ bụ otu na mkpebi naanị gburugburu.

Nchọpụta isi:

1. `sanitizeRequest()` site na `@/shared/utils/inputSanitizer` (nchọpụta a na-ekekọrịta
   set eji n'ebe ọzọ na pipeline).
2. Built-in `DEFAULT_GUARD_PATTERNS` (n'oge a `system_override_inline` na
   `markdown_system_block`, abụọ `high` severity).
3. Optional `customPatterns` a na-eziga site na nhọrọ constructor (strings, regex,
   ma ọ bụ `{ name, pattern, severity }` ndekọ).

Mgbe `mode === "block"` **na** ọ dịkarịa ala nchọpụta otu na-ezute ọnụ ọgụgụ
threshold, `preCall` na-ewepụta `{ block: true, message: "Arịrịọ a jụrụ:
nchọpụta ọdịnaya na-adịghị mma" }`. Na `warn`/`log` modes, guardrail na-edekọ ma
na-ahapụ oku. The shared helper `evaluatePromptInjection()` na-emekwa ka a na-ewepụta
maka ndị na-achọ ịtụle prompts na-enweghị ịga site na ndekọ.

**Scan bound (v3.8.20):** nchọpụta na-enyocha **mbụ 16 KB** nke
ejikọrọ prompt text — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) na
`src/shared/utils/inputSanitizer.ts`. Ma `detectInjection()` na
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` tupu ịgba ọsọ
ụkpụrụ. Nchọpụta directives nọ n'elu nke input, ya mere nke a na-eme ka regex CPU/GC na
multi-hundred-KB payloads na-enweghị imebi nchọpụta (cf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Na-arụ ọrụ na **ma** ọkwa abụọ, ikpeazụ na usoro ndabara (priority `95`). Na-ewepụ
ama ama API-key / secret-token patterns site na outbound payload (nke
ndị na-eziga, arguments tool-call, nsonaazụ tool) **na** nzaghachi provider, ya mere a
credential a na-etinye na prompt (ma ọ bụ na-eweghachite site na nsonaazụ tool) anaghị apụta
na onye na-enye elu ma ọ bụ na onye ahịa.

- **Nkwenye naanị**, otu usoro dị ka PII redaction (Iwu Ike #20-adjacent):
  kwụsịrị ma ọ bụrụ na `settings.credentialRedactionEnabled === true` **ma ọ bụ**
  `CREDENTIAL_REDACTION_ENABLED=true`. Mgbe ọ na-ewepụ, guardrail bụ no-op —
  ọ naghị egbochi ma ọ bụ deegharị.
- `redactCredentials()` na-agagharị n'ozuzu payload/ndepụta osisi (`walkValue()`,
  prototype-pollution-safe, cycle-safe site na `WeakSet`) ma dochie ihe ndị
  kwekọrọ na `[REDACTED:<type>]` placeholder, na-emepụta naanị mgbọrọgwụ ndị
  gbanwere n'ezie.
- `CREDENTIAL_PATTERNS` na-ekpuchi igodo ndị na-enye LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokens (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), igodo ịkwụ ụgwọ (Stripe, Square), igodo
  igwe ojii (AWS access key, Twilio, SendGrid, Mailgun), igodo nzuzo / JWTs,
  njikọ na-ejide credential (`mongodb://user:pass@...`, wdg), na
  usoro `Authorization`/`x-api-key`/`api-key`/`apikey` header-value
  pattern. Igodo nke nwere ụdị header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) na-ewepụ ya n'usoro (value naanị, scheme prefix dịka
  `Bearer `/`Basic ` na-echekwa) kama site na generic text regex.
- Guardrail anaghị egbochi; ọ na-edegharị naanị (`modifiedPayload` /
  `modifiedResponse`) ma na-akatọ (`meta.credentialsRedacted`, `meta.count`).

Nchekwa regression: `tests/unit/credential-masker-guardrail.test.ts`.

## Nkwekọrịta Ntọala (`base.ts`)

```typescript
class BaseGuardrail {
  enabled: boolean;
  name: string;
  priority: number;

  constructor(name: string, options?: { enabled?: boolean; priority?: number });

  async preCall(payload: unknown, context: GuardrailContext): Promise<GuardrailResult | void>;

  async postCall(response: unknown, context: GuardrailContext): Promise<GuardrailResult | void>;
}

interface GuardrailResult<TValue = unknown> {
  block?: boolean; // true na-akwụsị usoro ahụ ozugbo
  message?: string; // a na-egosi ya mgbe a na-egbochi
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall na-eweghachi ya iji degharịa arịrịọ ahụ
  modifiedResponse?: TValue; // postCall na-eweghachi ya iji degharịa nzaghachi ahụ
}

interface GuardrailContext {
  apiKeyInfo?: Record<string, unknown> | null;
  disabledGuardrails?: string[] | null;
  endpoint?: string | null;
  headers?: Headers | Record<string, unknown> | null;
  log?: GuardrailLog | Console | null;
  method?: string | null;
  model?: string | null;
  provider?: string | null;
  signal?: AbortSignal;
  sourceFormat?: string | null;
  stream?: boolean;
  targetFormat?: string | null;
}
```

Guardrail na-egosi “enweghị mgbanwe” site n'ịweghachi `void`, `{}`, ma ọ bụ
`{ block: false }`. Iweghachi `modifiedPayload`/`modifiedResponse` na-eji uru ahụ
dochie uru na-agafe n'usoro ahụ maka guardrail ndị na-esote.
`signal?: AbortSignal` na-ebunye usoro ndụ onye kpọrọ ọrụ ahụ n'ime guardrail. Ịkwụsị arịrịọ bụ ọnọdụ pụrụ iche fail-open e kpachapụrụ anya: àkwà mmiri mgbasa ozi na-akwụsị ọrụ ma na-ehichapụ ihe ndị fọdụrụ n'enweghị iweghachi mgbasa ozi raw n'ebe a maara na ọ naghị akwado ya.

## Ndebanye (`registry.ts`)

Singleton `guardrailRegistry` na-enye:

- `register(guardrail)` — na-agbakwụnye guardrail (ma ọ bụ jiri aha ahaziri dochie nke dị adị) ma
  hazie ha ọzọ dịka `priority` na-arịgo.
- `clear()` / `list()` — ngwa enyemaka nchịkwa.
- `runPreCallHooks(payload, context)` — na-agafe guardrail ndị na-arụ ọrụ, na-ebufe
  payload ahụ site na `modifiedPayload`, ma kwụsị na `block: true` mbụ.
- `runPostCallHooks(response, context)` — otu usoro ahụ n'akụkụ nzaghachi.
- `resetGuardrailsForTests({ registerDefaults })` — na-ehichapụ ọnọdụ ma, ma ọ bụrụ na ahọrọ ya,
  debanyeghachi ntọala ndabara iji kewapụ ule nke ọma.

Ndị na-agba ọsọ abụọ ahụ na-eweghachi `{ blocked, payload|response, results, guardrail?, message? }`
ebe `results` bụ n'usoro ndekọ `GuardrailExecutionResult` nke gụnyere mpaghara
`blocked`, `skipped`, `modified`, `error`, na `meta` maka guardrail ọ bụla,
nke bara uru maka nsuso.

### Ịgbanyụ Guardrail Maka Arịrịọ Ọ Bụla

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` na-achịkọta ndepụta
aha guardrail na-enweghị oyiri nke a ga-awụli maka arịrịọ dị ugbu a. Isi mmalite
(ha niile bụ nhọrọ, a na-ejikọta ha niile):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` dị n'ahụ arịrịọ (n'ọkwa kachasị elu)
- `metadata.disabledGuardrails` dị n'ahụ arịrịọ
- Header `x-omniroute-disabled-guardrails` (ma ọ bụ nke ochie
  `x-disabled-guardrails`)

Uru nwere ike ịbụ n'usoro string ma ọ bụ string nke rikoma kewara; a na-ahazi
aha ka ha bụrụ lowercase kebab-case (`pii_masker` → `pii-masker`). A na-ebufe
nsonaazụ ahụ site na `context.disabledGuardrails` gaa na ndebanye ahụ, nke na-awụli
guardrail ndị dabara (`skipped: true` n'ime `results`).

## Usoro Mmezu

Maka arịrịọ ọ bụla na-agafe na `src/sse/handlers/chat.ts` na
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` na-emepụta ndepụta ihe a ga-amafe site na API key, body,
   na headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` na-eme guardrails n'usoro priority
   na-arị elu:
   - A na-edekọ guardrails ndị agbanyụrụ dịka `skipped`.
   - `preCall` nke guardrail ọ bụla nwere ike idegharị payload site na `modifiedPayload`.
   - `block: true` mbụ na-akwụsị usoro ahụ ozugbo, handler ahụ wee weghachite
     nzaghachi ọjụjụ guardrail.
3. Payload ahụ (nke enwere ike idegharị) na-abanye na combo routing na upstream
   dispatch.
4. Mgbe ahaziri nzaghachi ahụ, `guardrailRegistry.runPostCallHooks(...)`
   na-eme otu usoro ahụ na nzaghachi ahụ. `block: true` n'ebe a na-ewepụ nzaghachi
   upstream ahụ.

A na-edekọ guardrails ndị tụbara mperi na `error: <message>`, a na-edekwa ha na log site na
`logger.warn`, mana usoro ahụ na-aga n'ihu — nke a bụ nhazi fail-open e mere ụma.

## Nhazi

Environment variables ndị guardrails arụnyere n'ime sistemụ na-agụ:

| Variable                              | Ihe na-eji ya             | Mmetụta                                                                                                 |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Tọọ ya ka ọ bụrụ `false` iji gbanyụọ nchọpụta kpamkpam.                                                 |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Iwu injection: `warn`, `block`, ma ọ bụ `log`. Legacy value `redact` anaghị edegharị ederede injection. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Mode maka injection guard; ọ bụkwa DB feature flag nke **na-akagbu** env vars (DB > ENV).               |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Severity kacha nta nke `MODE=block` na-ajụ: `high` (ndabara), `medium`, ma ọ bụ `low`.                  |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Legacy alias maka `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                    |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Mgbe ọ bụ `true`, a na-ekpuchi PII dị na request (n'adabereghị na injection mode).                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Na-achịkwa omume masker n'akụkụ response.                                                               |

Guardrails nke Modality Bridge na-agụ runtime config site na settings store
nke DB na-akwado (`getSettings()`), ọ bụghị env vars. Primary keys nke Vision bụ
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, na
`modalityBridgeCacheMaxEntries`. A na-anabata legacy
`visionBridge*` keys naanị dịka documented one-cycle read
fallback; ihe dashboard na-ede na-eji primary keys. Defaults na fallback
resolver dị na `src/shared/constants/modalityBridgeDefaults.ts`, ebe a ka na-edobe legacy
constants na `src/shared/constants/visionBridgeDefaults.ts`.

Audio na-eji `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, na `modalityBridgeAudioMaxClips`, tinyere settings
`modalityBridgeCache*` ndị a na-ekekọrịta. Audio enweghị legacy-key fallback n'ihi na e
webatara keys ndị a na schema nke Modality Bridge.

Video na-eji `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, na
`modalityBridgeVideoTimeout`, tinyere settings `modalityBridgeCache*` ndị a na-ekekọrịta.
A na-agbanyụ ya na ndabara n'ihi na FFmpeg/ffprobe bụ operational
dependencies ndị nhọrọ, na frame captioning na-agbakwunye latency na model cost.

## Guardrail Ahaziri

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Daily budget exceeded" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Nzọụkwụ:

1. Mepụta `src/lib/guardrails/myGuardrail.ts` nke na-agbatị `BaseGuardrail`.
2. Mejuputa `preCall` na/ma ọ bụ `postCall`.
3. Debanye ya n'oge mbubata (tinye site na `registerDefaultGuardrails`) ma ọ bụ
   kpọọ `guardrailRegistry.register(...)` n'oge sistemụ na-arụ ọrụ — ndekọ ahụ na-eji
   guardrail ọhụrụ dochie nke ọ bụla dịbu nke nwere otu aha ahaziri ahazi.
4. Tinye ule n'okpuru `tests/unit/` (ihe atụ ndị dị ugbu a:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Nnwale

Jiri `resetGuardrailsForTests()` n'etiti ule iji malite site n'ọnọdụ a maara.
Nyefee `{ registerDefaults: false }` iji malite na ndekọ efu ma
debanye naanị guardrail ndị a na-anwale. Vision Bridge na-anabata ntinye
ndabere (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge na-ekpughe
ebe ntinye yiri ya maka ntọala, ike, nhọrọ ụdị STT, nyocha
nzere, na ntụgharị okwu ọdịyo gaa na ederede. Ya mere, ule nwere ike ịnwale usoro abụọ ahụ na-enweghị ohere
ịnweta DB ma ọ bụ netwọkụ.

## Hụkwa

- `src/lib/guardrails/` — mmejuputa
- `src/shared/utils/inputSanitizer.ts` — ihe nchọpụta a na-ekekọrịta nke na-akwado
  igbochi ntinye prompt na ikpuchi PII
- `src/shared/constants/visionBridgeDefaults.ts` — ndabara Vision Bridge na
  ndepụta ụdị nke a na-amanye iji bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — ndabara runtime Vision/Audio a na-ekekọrịta
- `docs/architecture/RESILIENCE_GUIDE.md` — oyi akwa kwụụrụ onwe ya (circuit breaker, oge nchere)
- `docs/reference/ENVIRONMENT.md` — ntụaka zuru ezu nke env var

## Mkpuchi route nke injection-guard & red-team (Oge 8 · Blọk D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) na-ekpuchi route niile
na-anabata prompt ndị ọrụ. Ọ na-asọpụrụ `INJECTION_GUARD_MODE` (ndabara `warn` = naanị dekọọ;
`block` = weghachite HTTP 400 `SECURITY_001`).

| Ụdị                 | Route                                                                                                                                                | Ọnọdụ ndabara |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Ederede (dị ugbu a) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Mmepụta             | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Data                | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Mwepụta ederede (`extractMessageContents`) na-ekpuchi `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (kwa abalị, `nightly-llm-security.yml`):** promptfoo na-akwado na route ọ bụla na-egbochi
corpus OWASP-LLM mgbe `INJECTION_GUARD_MODE=block`; garak na-agba probes (ọ na-awụfe ma ọ bụrụ na secret adịghị).
Agụnyere `moderations` maka ịdị n'otu — ndị na-ahụ maka sistemụ nọ na block-mode nwere ike iwepụ ya site na
`resolveDisabledGuardrails`.

Workflow nke abalị (`.github/workflows/nightly-llm-security.yml`, cron + iji aka
malite) nwere ọrụ abụọ:

- **`promptfoo-guard` (na-egbochi)** — na-agba `promptfoo eval -c promptfooconfig.yaml`
  na `INJECTION_GUARD_MODE=block`. Ọnọdụ mmegide ọ bụla (dịka "leghara
  ntuziaka niile gara aga anya…", jailbreak ụdị DAN) na-akwado na nzaghachi ahụ nwere
  `error.code === "SECURITY_001"`, ya bụ, na guard ahụ jụrụ arịrịọ ahụ n'ezie.
- **`garak` (ndụmọdụ)** — na-agba garak `--probes promptinject,dan,leakreplay`
  megide instance OmniRoute mpaghara (`http://localhost:20128/v1`). A na-achịkwa ya site na
  secret onye na-eweta (`PROMPTFOO_PROVIDER_KEY`); ọ na-awụfe n'enweghị nsogbu ma tinye
  `|| true` na njedebe, ya mere ọ na-enye akụkọ na-emeghị ka CI daa.

Mkpuchi nke ihe enyemaka guard (`createInjectionGuard` / `withInjectionGuard`)
na-erute route `/v1` ọ bụla nwere prompt; a na-ewepụta ederede prompt site na
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` site na
`extractMessageContents()` dị na `src/shared/utils/inputSanitizer.ts`.
