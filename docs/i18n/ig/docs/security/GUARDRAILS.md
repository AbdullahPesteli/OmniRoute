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

Nchedo ndọrọndọrọ na-ebudata onwe ya na usoro ihe omume isii n'usoro ihe omume mgbe a na-ebudata
(lee `registry.ts` → `registerDefaultGuardrails()`):

| Nchedo | Aha                 | Ọnọdụ(s)       | Faịlụ                 |
| ------ | ------------------- | -------------- | --------------------- |
| `5`    | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`    | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`    | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`   | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`   | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`   | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nọmba nchedo dị ala na-agba **mbụ**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Na-ejide arịrịọ ndị nwere onyonyo nke na-ezube **ụdị na-enweghị ọhụụ** ma ọ bụ
na-eweghachite arịrịọ niile na ụdị nwere ọhụụ ma ọ bụ dochie akụkụ onyonyo
na nkọwa ederede nke ụdị ọhụụ nwere ike ịhazigharị tupu
arịrịọ nke elu. Nke a na-enye ndị na-enye naanị ederede ohere ịchịkwa
ngwugwu multimodal n'enweghị nsogbu.

Usoro:

1. Hapụ ma ọ bụrụ na ụdị ebumnuche ahụ na-akwado ọhụụ (ma ọ bụrụ na ọ bụghị na
   ndepụta nke a na-eme ka `isVisionBridgeForcedModel`).
2. Wepụ akụkụ onyonyo site na `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), nke na-enye ọrụ na **nchedo mgbakwunye
   media** `detectMediaParts()` na `open-sse/utils/mediaParts.ts` — isi
   otu isiokwu nke a na-ekekọrịta na ng фильтр ngwá ọrụ.
   Wepụ na-anabata naanị akụkụ nke elu nke ụdị
   `replaceImageParts` nwere ike ịgbakwunye (nkwekọrịta wepụ↔dochie): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, na Responses API `input_image`. Ncheta na
   ụdị naanị ihe na-egosi bụ ihe ngwá ọrụ ngwá ọrụ na a na-ewepụghị ha.
   Hapụ ma ọ bụrụ na e nweghị nke a chọpụtara.
3. Kpebie nhazi oge site na `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): ọhụrụ `modalityBridge*`
   igodo ntọala na-emeri; ochie `visionBridge*` igodo na-anọgide na **otu
   usoro nkwụsị** (ogige nkwụsị). Hapụ tupu ọ bụla media traversal mgbe
   a na-egbochi mgbakwunye.
4. Nhọrọ ụdị (`modalityBridgeVisionMode`, lee tebụl dị n'okpuru) na-ekpebi
   ịgbanwe ma ọ bụ kọwaa. Ịgbanwe na-eweghachite `modifiedPayload` na naanị `model`
   gbanwere, tinyere meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Kọwaa ụzọ: gbochie onyonyo na `maxImages`, hazie arịrịọ nke na-ahụ maka ọrụ,
   jụọ cache kọwaa, kpọọ ụdị ọhụụ **n'ozuzu**
   (`Promise.allSettled`), ma tinye `[Image N]: <description>` akụkụ ederede na
   ebe ha nọ. A na-echekwa `null` ma ọ bụrụ na kọwaa na-adịghị mma na akụkụ onyonyo mbụ
   bụ **nchekwa** (#4012) — ma e wezụga na ụzọ kọwaa ngwá ọrụ mgbe
   kọwaa niile dara, ebe a na-enweta ụdị na-enweghị ọhụụ na
   `(unavailable — no vision-capable provider connected)` stub kama (#8430).
6. Weghachite `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Nhọrọ ụdị (`modalityBridgeVisionMode`)

| Ụdị        | Ndabere | Ọrụ                                                                                                                                                                                                                                                     |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Nchedo ochie, na-enweghị mmetọ (#6640/#7204): ụdị na-enweghị ngwá ọrụ/`auto/` na-agbanwe na ụdị ọhụụ kacha mma ma ọ bụrụ na ụdị mbụ nwere ikike eji eme ihe (ya mere kọwaa); ebumnuche ngwá ọrụ na-agbanwe mgbe niile.                                  |
| `describe` |         | Kọwaa mgbe niile — a na-ewepụ ngbanwe na-enweghị atụ; ụdị onye ọrụ họọrọ na-aza mgbe niile.                                                                                                                                                             |
| `reroute`  |         | Gbaa ọsọ na-agbanwe: a na-ewepụ nchedo nke ụdị nwere ikike. Nchedo nke **ebumnuche** na-agbanwe ka na-arụ ọrụ — mgbe e nweghị ụdị ọhụụ eji eme ihe, arịrịọ ahụ na-apụ na kọwaa ka onyonyo ndị a na-enweghị atụ na-erute azụmahịa naanị ederede (#8430). |

Ụdị a na-eme ka ọ bụrụ **tupu** usoro ochie na-agba; omume `auto`
bụ byte-ndị na-ejide na nchedo mbụ-PR-1.

#### API-key scope (`visionBridgeKeyScope.ts`)

Mgbe igodo API nke onye na-akpọ na-achịkọta `allowedConnections`, pools quota
(`allowedQuotas`) ma ọ bụ ụdị (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), mgbakwunye na-ahọrọ
na-agbanwe na kọwaa ụdị ndị igodo nwere ike iji, na njikọ ndị igodo nwere ike
iji. A na-eme ka arịrịọ kọwaa mgbe niile na-aga site na OmniRoute self-loop na
`x-omniroute-self-loop-key-id` header, ya mere arịrịọ chat na-anata
na-eme ka njikọ na iwu ụdị nke igodo ahụ ọzọ. `enforceApiKeyPolicy()`
na-akwanyere header ahụ naanị na njikọ nke self-loop, ya mere ọ nwere ike naanị
ime ka ohere dịkwuo, na id nke na-adịghị edozi na-anaghị anabata.

Ọ bụrụ na e nweghị ụdị ọhụụ kwere ka igodo, ụzọ kọwaa na-apụ na
arịrịọ ahụ na-apụ na-enweghị mgbanwe, omume fail-open yiri ka a na-egbochi
nchedo (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Arịrịọ na-enweghị igodo, na igodo na-enweghị ihe ndị a na-achịkọta, na-eme ka
ọ bụrụ na mbụ.

#### Kọwaa arịrịọ nke na-ahụ maka ọrụ (`modalityBridgeVisionTaskAware`)

Default **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) na-agbakwunye
okwu nke **n'ikpeazụ ozi onye ọrụ** (nke a na-ewepụ na 500 chars) na
isi kọwara prompt, na-eduga nkọwa na ihe onye ọrụ jụrụ n'ezie
(codex-vision-proxy pattern) na-arịọ ụdị ọhụụ ka o dekọọ
okwu ndị a na-ahụ. Na flag gbanyere — ma ọ bụ na-enweghị ozi onye ọrụ — a na-eji
isi prompt na-enweghị mgbanwe.

Nkọwa nke self-loop nke OpenAI-compatible arịrịọ (`callVisionModelSingle()`
na `visionBridgeHelpers.ts`) na-arịọ mgbe niile `image_url.detail: "high"` —
n'enweghị ọnọdụ, maka onye ọ bụla na-akpọ/na-enye, ọ bụghị na-ejide
n'ọnọdụ ọ bụla nke onye ahịa. Sampling nke nkọwa dị ala na-emebi
nchekwa OCR maka ọrụ dekọọ okwu nke a na-arịọ na prompt a, ya mere
nkọwa arịrịọ na-achọ mgbe niile nkọwa dị elu n'agbanyeghị ihe nkọwa
nke arịrịọ mbụ si na-abịa. Nke a na-emetụta naanị ahụ nke arịrịọ
nkọwa; ọ naghị agbanwe otu OmniRoute si ebugharị `image_url.detail`
nke onye na-akpọ na arịrịọ mbụ — a na-etinye default a n'ụzọ
nke ọzọ, na naanị maka ndị ahịa OpenCode a chọpụtara, na
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic wire-format branch nke nkọwa self-loop enweghị `detail` field
ma na-adịghị emetụta ma ọ bụ default.

#### Nkọwa output cap (`modalityBridgeVisionMaxChars`)

| Key                            | Default | Range                 |
| ------------------------------ | ------- | --------------------- |
| `modalityBridgeVisionMaxChars` | `0`     | `0` ma ọ bụ 100–50000 |

`0` (default) pụtara **enweghị cap** — nkọwa a na-eweghachite site na
`callVisionModel()` na-aga n'ihu na-enweghị mgbanwe, na-echekwa
omume dị ugbu a. Ọ bụla uru dị na 100–50000 na-ewepụ nkọwa na
`…` suffix tupu e weghachite ya dịka `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` na `src/lib/guardrails/visionBridge.ts`).
Gbaa mbọ hụ na nke a maka ọrụ OCR nke nwere nkọwa dị arọ ebe
ụdị dị n'okpuru chọrọ dekọọ zuru ezu; belata ya iji gbochie
iji token na ụdị ọhụụ na-ekwu okwu. Ụlọ dashboard dị na
Vision tab's Advanced panel (`modality-bridge-max-chars` na
`ModalityBridgeVisionTab.tsx`) ma na-ejide uru ọ bụla n'etiti 1 na 99
na 100 floor mgbe a na-ahapụ `0` doro anya — `0` bụ ezigbo Zod
uru n'onwe ya (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`),
ọ bụghị naanị "unset" default.

#### Nkọwa cache (`modalityBridge/bridgeCache.ts`)

In-memory LRU + TTL cache maka nkọwa outputs, nke a na-ekekọrịta
na usoro niile. Key = `sha256(imageRef + composedPrompt + configuredBridgeModel)`
na framing nke ogologo-prefix (enweghị njikọ mpaghara). Ụdị
nke a bụ **nke a haziri** bridge model, ọ bụghị ụdị nke zara n'ezie —
`callVisionModel` nwere ike ịlaghachi n'ime, na ịkpọ per
nwughari ga-eme ka cache bụrụ nke a na-agbasa. Nkọwa ndị na-adịghị
eme nke ọma anaghị echekwa. Ntọala:

| Key                             | Default | Range   |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Nchekwa onyonyo dịpụrụ adịpụ (self-loop describe/base64 fetch)

Mgbe bridge na-enweta **onyonyo dịpụrụ adịpụ** n'onwe ya — nkọwa
self-call nke Anthropic na claude-wire-format base64 conversion
(`ensureBase64ImagesForClaudeWire`), abụọ site na
`fetchRemoteImageAsDataUri()` na `visionBridgeHelpers.ts` — data URI
nke na-esote na-aga site na `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) tupu etinye ya na arịrịọ
nke ụdị ọhụụ. Onyonyo ndị buru ibu na-ebelata na **2048px ogologo
oche** (na-ezute nkọwa resize nke OpenAI/Anthropic etinyere
na sava), nke na-ewepụ byte/latency na-enweghị ịgbanwe ihe
nke ụdị ọhụụ na-ahụ. Resizing na-eji `sharp`, nke a na-ebudata
site na mbido dynamic: na ikpo okwu ebe binary ya na-emebi
ibu, `normalizeDataUri()` **agaghị ewere** — ọ na-alaghachi
na passthrough nke byte mbụ, ya mere ụzọ nkọwa/base64-conversion
na-ejide mgbe niile. Byte ndị na-abụghị onyonyo (nnyocha nke
na-adịghị eweghachite onyonyo a na-agaghị ekwu) na-agafe
na-enweghị mgbanwe. Nchekwa a bụ nke a na-ejide onyonyo
bridge na-enweta maka onwe ya — a na-apụghị itinye ya na
payload passthrough nke onye na-akpọ, nke na-eme ka
nke a bụrụ iwu na-achọghị mgbanwe (Hard Rule #20).

#### Ntọala schema + mgbasa

Ụfọdụ ọhụrụ `modalityBridge*` keys bụ Zod-validated na
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCache*` trio, na `modalityBridgeAudio*` group
ji Audio Bridge. Mgbasa `141_modality_bridge_settings.sql`
na-ewepụta uru ndị dị ugbu a `visionBridge*` na
nke ọhụrụ na-ezute (idempotent, anaghị overwrite
uru `modalityBridge*` nke onye ọrụ set); a na-anabata
ụdị ochie dị ka nzaghachi na-agba ọsọ maka otu
mgbasa.

#### Transparency header + stats

Nkọwa a gbanwere azịza na-ewepụta
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(nke a na-ewu site na `buildModalityBridgeHeader()` na
`modalityBridge/bridgeStats.ts`, na-ejide site na
`withModalityBridgeHeader()` na `src/sse/handlers/chatHelpers.ts`).
Arịrịọ ndị a na-eziga na **enweghị** header — payload ahụ
adịghị agbanwe na mgbanwe ụdị ahụ na-apụta na
`model` field nke azịza.

`GET /api/modality-bridge/stats` (njikwa nchịkwa, otu ọkwa dị ka
`GET /api/settings`) na-eweghachite ndị na-agba ọsọ per-modality
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` maka `vision`, `audio`, na
`video`. `averageLatencyMs` na-eji `latencySamples`, ọ bụghị niile attempts, dị ka
nke ya; ọrụ na-enweghị oge anaghị emepụta sample nke zero-millisecond.
`bridged` na-anọgide na-abụ alias nke na-akwado nkwụsịtụ maka ihe ịga nke ọma;
n attempts na-adịghị mma anaghị agbakwunye ya.
Counters na-eweghachite na mmalite usoro site na imewe
(telemetry, ọ bụghị accounting).

#### Nhazi Dashboard

Ihu dashboard a na-ejide bụ
`/dashboard/settings/modality-bridge`. URL ya na-adọrọ adọrọ `Vision`, `Audio`,
na `Video` tabs na-echekwa parameters ajụjụ mgbe ha na-agbanwe `tab` value.
Tab Vision na-egosi ikike, ọnọdụ, nhọrọ model (gụnyere ndabara
ndabara), ịkpọ oku na-adabere na ọrụ, oge a na-emezigharị/image/description-length/cache
nchekwa, runtime
counters, na arịrịọ sample echekwara. Tab Audio na-arụ ọrụ: ọ na-egosi
ikike, onye na-ahọrọ model STT naanị na Auto, oge/nchekwa max-clip, audio
counters, na arịrịọ sample `input_audio`. Tab Video na-arụ ọrụ: ọ na-akọ
ọnọdụ runtime FFmpeg/ffprobe — otu n'ime anọ UI doro anya (`unknown` mgbe
probe nọ na flight ma ọ bụ enweghị ike ịmecha, `restricted` na host dashboard na-abụghị loopback ebe probe na-apụghị imecha na akụkụ onye ahịa, `unavailable` mgbe probe na-enyocha na ekwenyere na ọ na-efu, ma ọ bụ `available` na FFmpeg/ffprobe versions) — na-echekwa
ikike/model/frame/video/oge, na filters onye na-ahọrọ model ka ọ bụrụ
models nwere ike ịhụ, na na-egosi video counters.

Card Vision Bridge gara aga n'okpuru AI settings bụ njikọ nkwado na
peeji ọhụrụ; ọ naghị enwekwa otu mkpụrụedemede nke fọm. Ndị na-enye mgbasa ozi na-ejikọta
Image-to-Text na Speech-to-Text workflows na tabs Modality
Bridge kwekọrọ na ya na-enweghị iwepụ egwuregwu Speech-to-Text dị.

**Nkwado nnabata self-loop:** mgbe akpọrọ akpọrọ na-agafe na
OmniRoute's `/v1` self-loop (model onye na-enye na-abụghị ọkọlọtọ), sub-arịrịọ na-eziga
`x-omniroute-admission-bypass: internal` ma na-enyocha ya na
nkwenye self-loop a kpebiri — sentinel `sk_omniroute` na mpaghara mpaghara, ma ọ bụ
nkwenye `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` nke onye na-arụ ọrụ (#1350) ka
`REQUIRE_API_KEY=true` deployments ka nwere ike ịrụ ọrụ na akpọrọ akpọrọ. Nkwado a
na-anabata naanị maka ndị nkwenye ahụ, ya mere ndị ahịa mpụga enweghị ike iji
header ahụ gbanwee nnabata.

Nkwenye ochie dị na `src/shared/constants/visionBridgeDefaults.ts`;
nkwenye ọhụrụ/mode/task-aware/cache na nkwenye resolver dị na
`src/shared/constants/modalityBridgeDefaults.ts`. The guardrail na-egosi
`deps` constructor option ka ule nwee ike itinye ụgha `getSettings` na
`callVisionModel` implementations.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Na-ejide arịrịọ chat nwere audio tupu ha erute ebe a na-amaghị
na-anabata audio input. Ọ naghị agbanwe arịrịọ chat: akụkụ audio na-
edekọ na ụzọ OpenAI kwekọrọ na multipart endpoint na
model chat a họọrọ na-aga n'ihu na transcripts ederede.

Flow:

1. Kpebie `supportsAudio` site na `getResolvedModelCapabilities()`. Metadata
   nke onye na-enye na ndekọ na-emeri, mgbe ahụ metadata model static, mgbe ahụ
   `modalities_input` synchronized. Ndepụta input a kọrọ na-enweghị `audio` bụ `false`;
   enweghị ihe àmà ikike na-anọ `null`. Ma `false` na `null` na-eme ka
   bridge na-echekwa, mgbe `true` na-agbapụ ya.
2. Kpebie `modalityBridgeAudio*` settings ma wepụ akụkụ audio
   nke nwere ike ịkpụ site na ozi ọ bụla site na `detectMediaParts()`
   detector. A na-akwado ụdị waya bụ OpenAI `input_audio`, `audio_url`, na
   `source.media_type: "audio/*"`. A na-enyocha audio nested maka routing ma ọ bụ
   wepụ ya site na ụzọ splice. A na-ejide ọrụ site na `modalityBridgeAudioMaxClips`;
   akụkụ ndị ọzọ na-anọ untouched.
3. Kwanyere `provider/model` a haziri, ma ọ bụ ka `selectAudioBridgeModel()` na-agagharị
   `AUDIO_TRANSCRIPTION_PROVIDERS` na usoro catalog kwụsiri ike ma họrọ model mbụ
   nwere ike iji credential onye na-enye.
4. `callAudioTranscription()` na-agbanwe base64/data-URI audio ka multipart
   `file`, ma ọ bụ na-ebudata `audio_url` dịpụrụ adịpụ site na
   nchedo naanị maka ọha na eze na DNS pinning na 25 MB bound. Ọ na-eso POST
   faịlụ na model a họọrọ na `/v1/audio/transcriptions` self-loop, na-enyocha ya na
   `resolveSelfLoopBearer()`. Ụzọ transcription dị ugbu a na-eme nchọpụta
   credential nkịtị, cooldown/rate-limit handling, na dispatch onye na-enye.
5. Arịrịọ ndị gara nke ọma na-anọchi akụkụ ha na `[Audio N]: <transcript>`. Arịrịọ
   na-agba ọsọ na `Promise.allSettled`: mmejọ nke onye ọ bụla na-echekwa
   akụkụ audio mbụ (#4012 contract). Ọ bụrụ na arịrịọ niile na-ada ma
   ebe a na-enyocha na-egosi `supportsAudio === false`, akụkụ ahụ na-abụ
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 contract). Maka
   ebe a na-amaghị (`null`), nsonaazụ niile na-ada na-anọ untouched. Ebe a na-enyocha
   ebe a na-enyocha ederede naanị na-enweghị credential STT nwere ike iji na-enweta
   stub doro anya otu a na-enweghị ịkpọ oku netwọk.

Transcripts ndị gara nke ọma na-eji Modality Bridge LRU/TTL cache nke
usoro. Igodo na-ejikọta audio reference, label ọrụ `audio-transcription` kwụsiri ike,
na model STT a họọrọ; a na-ejighị cache mmejọ. Audio attempts na-emelite
`bridged`, `cacheHits`, `failures`, na `lastUsedAt` counters.
Azịza a gbanwere na-ejide
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; arịrịọ ndị na-anaghị agbanwe enweghi
Audio Bridge segment.

Ntọala runtime bụ DB-backed na Zod-validated:

| Igodo                         | Ndabere | Ogo            |
| ----------------------------- | ------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —              |
| `modalityBridgeAudioModel`    | `""`    | Auto ma STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10           |

Cache a na-ekekọrịta ka a na-achịkwa site na `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, na `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Na-ewepụ akụkụ vidiyo dị elu na Chat Completions `messages` na Responses
API `input` tupu akpọọ ebumnuche na-enweghị nkwado vidiyo ama ama.
Ụdị a na-akwado bụ `input_video`, `video_url`, `video_source`, HTTPS URLs,
na `data:video/*;base64,...` data URIs. A naghị ele anya na faịlụ aha n'okwu
dị ka vidiyo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) nwere njem arịrịọ,
nnyocha ikike/policy, nchikota arịrịọ, na payload nzaghachi.
Ọrụ vidiyo kwa — inweta, cache nke nsonaazụ niile, ịkọwa usoro
nke a na-ejikọta transcript ụda nke onye na-akpọ, na metrics/abort/cleanup kwa
nke a na-ezobe n'azụ `processVideoPart` na
`videoBridgePipeline.ts`, nke a na-akpọ otu ugboro kwa akụkụ vidiyo n'ime
loop nke `preCall`. Modulu ahụ na-akọwa kwa oke ọdụ ụgbọ mmiri `VideoMediaBrokerPort`
(inweta bytes na iwepụ sampled frames), `VideoAudioTranscriptionPort`
(na-ejikọta transcript ụda nke onye na-akpọ na captions a sampled), na
`VideoDrilldownPort` (ụdị nchekwa ọdịnala). Production STT na retention
nke frames na-ejikọta gburugburu ọdụ ụgbọ mmiri na-akọwa site na `createVideoSttAdapter` na
`createVideoDrilldownAdapter`; nke ikpeazụ na-eji ndụmọdụ opaque-handle a na-ekekọrịta.

Ụzọ arịrịọ ọha `/v1` anaghị ebubata ma ọ bụ kpọọ subprocess. A na-ebudata
vidiyo dịpụrụ adịpụ n'okpuru oke 50 MiB; inline base64 vidiyo nwere
oke 36 MiB dekọd nke a na-ejikọta kwa vidiyo ka ụdị/ozizi/nkwu
nwere ike ịnọ n'ime oke nnabata arịrịọ JSON ọha nke 50 MiB. A na-enyocha
ogologo inline na ndekọ nha tupu ịkekọrịta. HTTPS bụ
a chọrọ na URL dịpụrụ adịpụ mbụ na ntụgharị ọ bụla, na-eji
nchekwa ọha naanị na-apụ apụ na DNS pinning. Bytes ahụ na-agafe
n'ókè ziri ezi nke `POST /api/modality-bridge/video/extract` broker. Ụzọ ahụ bụ
`LOCAL_ONLY` na `SPAWN_CAPABLE`, na-anabata naanị arịrịọ nke a kwadoro,
nkwado-loopback, na anaghị anabata URL, ụzọ faịlụ, executable,
ma ọ bụ ndepụta nke arguments. Pipeline nke API body-size na onye na-ahụ maka
incremental body reader na-eme ka 50 MiB broker input cap. Queue ya
na-ejide otu extraction n'otu oge, na-enye ohere ọrụ anọ na
na-ejide input na-atụ anya na 100 MiB.

N'ime broker, `ffprobe` na-agụ faịlụ mpaghara nkeonwe; a na-ewepụ
format allowlist na-ewepụ playlist na manifest formats. Maka MOV-family
containers a na-akwado, a na-ewepụ njikọ MOV data dịpụrụ adịpụ na ndabara, na
nchịkọta a na-ewepụghị na ha. Ma `ffprobe` na `ffmpeg` na-eji
`file`-only protocol whitelist, otu thread, fixed argument arrays, enweghị shell,
na executables a na-achọpụta site na `PATH`. A naghị enwe ike igwu egwu
na streams nke a na-ejikọta. Ụfọdụ streams niile ga-emezu oke, na
a na-ahọrọ stream ndabara doro anya tupu ndabere kachasị ala.
Vidiyo na-ejide 600 sekọnd, 8,192 pixels kwa akụkụ, na
33,554,432 pixels isi. FFmpeg na-ewepụta 1–16 midpoint JPEG frames, na-ebelata
n'ókè ogologo ruo 1,024 pixels na-enweghị ịkwalite inputs dị obere, na
anaghị enweta URL. Sampling bụ `uniform` na ndabara.
Nchekwa `scene_aware` na `segment_aware` na-eme otu FFmpeg pass ọzọ
n'elu stream mpaghara a kwadoro, na-ahọrọ `showinfo` scene timestamps
na na-eweghachi n'ụzọ doro anya na otu
uniform midpoints na mmejọ detector, timeout, malformed output, ma ọ bụ
set nke ndị na-emeghị ihe. Segment-aware mode na-enye midpoint samples
n'usoro nke validated scene intervals; segment-aware evidence na
ndabere omume a kọwara n'okpuru. A na-etinye oke 16-frame
n'ọrụ mgbe a na-ahọrọ na policy ọ bụla. Mgbe arịrịọ na-ahụ maka
scene nwere naanị otu frame budget, ọ na-eji midpoint uniform nke
vidiyo zuru ezu ma ọ bụ windo ntinye na na-akọwa `policyEffective: uniform`: a
nke a họọrọ scene frame enweghị ike ịchekwa ma njedebe oge abụọ. Onye na-akpọ nwere ike
inwe nhọrọ inye windo ntinye na-adịgide adịgide (`start`/`end` sekọnd); a na-ejide
oke na ogologo media, windo a na-atụgharị ma ọ bụ na-adịghị adịgide na-anaghị anabata, na
a na-eme sampling policies niile naanị n'ime interval a na-emezi. Windo
nke a na-agụnye na metadata sampling na na untrusted description
prefix ka ụdị ndị na-esote nwee ike ịmata excerpt a na-elekwasị anya site na
n'ozuzu timeline.

Nchekwa caption semantic bụ ntọala dị iche, doro anya. Ụdị ndabara `full`
nnyocha na-echekwa prompt frame dị ugbu a ma na-anaghị ebugharị
arịrịọ ederede na caption model. Na `focused` mode, bridge na-agụ naanị
nke kachasị ọhụrụ na-enweghị efu onye ọrụ dere `text`/`input_text` site na
otu Chat ma ọ bụ Responses
container, na-emezi ya ka NFC, na-ejikọta akara njikwa na oghere,
na na-ejide ya na 500 Unicode code points. Nsonaazụ efu na-eweghachi
na prompt `full` ziri ezi. A na-eme ka ihe eji eme ihe dị ka JSON na
dedicated untrusted-user-context block ma nwee ike naanị ịkwado
ndetails a na-ahụ; ọ pụghị ịgbanwe ihe ịrịba ama dị iche na
na-esote ntuziaka a na-ahụ ma ọ bụ na-anụ na media. Nchekwa ederede
anaghị atụgharị `start`/`end` ma ọ bụ gbanwee
nchekwa oge.

#### FU-07 ihe akaebe nke akụkụ usoro

`segment_aware` na-eji otu pre-analysis pass nke e mere n'elu vidiyo mpaghara nke a kwadoro. Chai nke na-adịgide adịgide na mbụ na-eme ka ọ bụrụ 320 pixels n'ogologo, na-achọpụta mgbanwe na ọnọdụ ndị kwụsịrị, mgbe ahụ na-ewe samples na 1 frame kwa nkeji maka blur, average luma, na ozi spatial/temporal. Pass a nwere oke samples 600, otu FFmpeg/filter thread, otu protocol na container allowlists nke `file`-only, 1 MiB process-output bound, na nkeji 30 n'ime broker's shared abort/deadline. Ọ naghị anabata iwu, filter, ụzọ, ma ọ bụ URL site na arịrịọ.

Uru ndị a bụ ihe atụ nke sampling deterministic, ọ bụghị nghọta vidiyo semantic. Ha anaghị atụgharị isiokwu, omume, captions, okwu, ma ọ bụ ebumnuche onye ọrụ. Boundaries nke scene na freeze na-eme ka segments; freeze coverage, blur, exposure, spatial detail, na temporal change na-emetụta naanị otu esi etinye 1–16 frame budget dị. Segment nke zuru ezu na-ejide na otu frame, ebe segments na-adịghị akwụsị na-asọ mpi maka ego fọdụrụ. Mgbe boundaries karịrị frames, a na-edebe uniform timeline coverage ka cuts ngwa ngwa na mbụ ghara ịzoputa segment ogologo. Boundaries nke scene n'ime 1-second analysis resolution nke freeze boundary na-ejikọta.

Ncheta filters na-adịghị, ihe atụ na-adịghị mma/efu, njehie detector, ma ọ bụ bounded pre-analysis timeout na-eme ka ọ bụrụ nke a na-apụghị ịgbanwe agbanwe na usoro uniform midpoint. Iwu nke onye na-akpọ ma ọ bụ deadline broker anaghị eme ka ọ bụrụ nke a na-apụghị ịgbanwe agbanwe: ọ na-akwụsị subprocess na-agba ọsọ, na-egbochi iwepụ frame n'ọdịnihu, na a na-ewepụ osisi nkeonwe na `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` na-emepụta ihe atụ FFmpeg ziri ezi maka post-dedup caption-call savings, dense-motion budget allocation, blur/exposure/SI-TI evidence, rapid cuts with a long tail, na gradual-fade false positives. Ọ na-edekọ pre-analysis wall time na, ebe `/usr/bin/time` dị, CPU nwa na peak RSS. Nyocha àgwà ya bụ oracles structural naanị. Àgwà caption-model ziri ezi ka nọ na `HOLD` n'ihi na harness a enweghị njedebe kwadoro ma ọ bụ onye ikpe kwụsịrị. Ego na-echekwa ka nọ na `HOLD` ma ọ bụrụ na `--caption-cost-per-call-usd` na-enye ọnụahịa doro anya kwa arịrịọ; script ahụ anaghị eme ka nsonaazụ ọ bụla.

Frame ọ bụla nwere oke 4 MiB, frames niile raw na ọnụ ọgụgụ 23 MiB, na azịza broker serialized na 32 MiB. A na-ewepụ nchekwa nkeonwe na `finally`. OmniRoute anaghị etinye FFmpeg ma na-anaghị anabata ụzọ executable nkeonwe. Tupu captioning, bridge na-etinye pass visual deduplication na-echebe: JPEG ọ bụla na-ebelata na 16×16 grayscale buffer ma na-ejikọta naanị na frame ikpeazụ echekwara. Maka ego caption a rịọrọ nke karịrị otu frame, extraction na-enye pool nke ndị na-eme ihe atụ nke nwere ike ịbụ ugboro abụọ nke ego ahụ ma ọ bụghị karịa 16 frames. A na-etinye cap a rịọrọ naanị mgbe deduplication gasịrị, na ndị na-eme ihe atụ mbụ na ikpeazụ na-echekwa n'oge thinning ikpeazụ mgbe ego ahụ dịkarịa ala abụọ. Usoro `grayscale-16x16-mean-cells-v2` na-eji nke kachasị n'etiti mean luma delta na ọnụego nke thumbnail cells nke normalized delta ya dịkarịa ala 0.05. Threshold nke duplicate bụ 0.04, a họpụtara ya maka predictability kama ka a kpughee ya dị ka ntọala runtime. Nke a secondary high-contrast signal na-echekwa obere mmegharị na mgbanwe ederede nke a na-ejikọta naanị na ntụnyere mean. Njehie comparator ma ọ bụ decoder na-eme ka ọ bụrụ nke a na-apụghị ịgbanwe agbanwe ma na-edebe coverage. Metadata output na-ekewapụ ndị a na-ewepụ, frames a na-eji nke ọma, na visual duplicates a na-ewepụ.

A na-ejikarị akụkụ vidiyo nke a kpọrọ aha rịọ timestamped contact sheet. Bridge na-ewu grid JPEG nke nwere columns 4, 16-frame. Cell ọ bụla nke 512-pixel na-ere timestamp ya na band dị elu, ebe timestamps ndị ahụ na-anọgide na metadata ederede maka njikọ na audit. JPEG zuru ezu ka nọ na 32 MiB. Ọ bụrụ na `sharp` enweghị ike ịkọ ma ọ bụ hazie grid, bridge na-alaghachi na frames JPEG nkeonwe; a na-agbasa abort nke onye ahịa site na ọrụ sheet.

Ncheta nkwado bụ nke a na-eme ka ọ bụrụ nke dị iche na synthetic composition microbenchmark. `scripts/perf/video-bridge-contact-sheet-eval.ts` na-akọwa schema-versioned A/B harness maka ezi OpenAI-compatible vision models. Ọ na-atụle tokens a na-akọ na provider, end-to-end wall latency (gụnyere sheet composition), model-call count, na manifest-defined fact retention. A naghị ede azịza model raw na akụkọ; naanị SHA-256 digests na matched fact IDs ka echekwara. Harness ahụ anaghị eme netwọk ma ọ bụ kpọọ model akwụ ụgwọ ma ọ bụrụ na `--execute-real` na-agbasa na `--model`, `OMNIROUTE_BASE_URL`, na `OMNIROUTE_API_KEY` ka a hazie. Na-enweghị arụmọrụ ziri ezi a kpọrọ, ikpe a na-agụnye na machine-readable verdict ka nọ na `HOLD`; synthetic payload/call-count measurements naanị abụghị ihe nkwado nkwado.

Ncheta `scripts/perf/video-bridge-promotion-eval.ts` na-eji FU-07 ma ọ bụ FU-09 observations. Nkwado nkwado chọrọ ụdị scenario synthetic asatọ niile tinyere clip ziri ezi nke a na-eme ka ọ dị ọcha, ma ọ dịkarịa ala repetitions atọ a tụrụ na ọrụ na ikpe, metrics iri niile a kọwara, media/prompt/expected-fact/settings digests kwụsịrị, unique observation IDs na verified seeded A/B order. Receipt nke arụmọrụ na-ejikọta corpus digest, exact candidate SHA na model revision. Ncheta ma ọ bụ measurements na-adịghị mma ka nọ na `HOLD`, gụnyere CPU karịrị 30 s, peak RSS karịrị 512 MiB ma ọ bụ pre-analysis karịrị 30 s. Nke a bụ caps admission evidence, ọ bụghị nkwenye ọhụrụ nke RSS enforcement runtime.

FU-07 chọrọ n'ogo kachasị 98% nke ịdị mma na p95 latency na-abụghị karịa 1.2x
ndị bụ isi, tinyere ma ọ bụ 0.05 nkezi nke ikpe ziri ezi na-eme ka ncheta ka mma na
nkezi nkezi nke akpọrọ, ma ọ bụ ma ọ dịkarịa ala 10% nkezi nke akpọrọ post-dedup. FU-09 chọrọ n'ogo kachasị 0.85, 95% retention, 20% p95 latency
belata na 10% token belata. Nchekwa nke eziokwu, nkwado ntinye ma ọ bụ
nchekwa na-adịghị adị na-egbochi ịkwalite. Otu mmegharị enweghị ike ịkwalite ihe ọ bụla:
`--previous-report` na-egosi mmegharị abụọ dị iche, na-enweghị overlap, nke na-esote
nkwado nke otu iwu/model nsụgharị/ndị na-eme/akụkụ. Otu
nnyocha sampling enweghị ike ịkọwa nnyocha contact-sheet.

Ndị na-anakọta kwesịrị ịkọwa nzaghachi na nchekwa ma chekwaa `responseDigest` tinyere
metrics na njikọ nyocha, ọ bụghị ederede nzaghachi. Onye na-eri na-agụkwa
ncheta raw ochie mana anaghị ewere ederede ahụ n'ime akụkọ ya. Otu n'ime `responseDigest` ma ọ bụ `rawResponseText` ka a na-anabata maka nyocha ọ bụla.
Ndepụta nke a na-enye nsụgharị na-anọgide na-enweghị ihe ọ bụla na `hold` ndabara. Otu
ndepụta kwesịrị inwe ntụaka nke ihe akaebe ya, iwu, nsụgharị model, kpọmkwem
candidate SHA, manifest digest na ID abụọ dị iche; ọnọdụ na-emegide
na-anaghị anabata. Metadata ndị a bụ nkwekorita nyocha, ọ bụghị ihe àmà na faịlụ a kpọtụrụ aha nwere
n'ezie measurements. Lelee akwụkwọ ndị a tupu itinye
ndepụta ọ bụla. Nchekwa stats njikwa na Video dashboard na-egosi
ndị na-echekwa. Otu alias model a haziri naanị anaghị etinye nsụgharị ya ma ọ bụ
nke na-eme candidate SHA, ya mere, dashboard ugbu a na-akọ `HOLD` kama
iji eligibility si na ọnọdụ mmegharị ọzọ. Nhọrọ nyocha doro anya na-anọpụ iche na ịkwalite; enweghị ndabara na-agbanwe.

Ndị na-akpọ nwere ike itinye `transcript.cues` array nke nhọrọ na akụkụ vidiyo
nkwado mgbe ha nwere ederede kwekọrọ. Cue ọ bụla ga-enwe `text`, a
nkeji `start`/`end` nkeji n'ime oge a na-enyocha, na `source` nke a na-enyere aka
(`client`, `embedded`, ma ọ bụ `audio-bridge`); `confidence` na-abụkarị
`1` ma ga-anọgide n'etiti `0` na `1`. Ederede ndị na-emegharị na-ezighị ezi na-ejide.
OmniRoute anaghị amalite transcription site na metadata a: a na-ewepụta cues
nke a kwadoro na nsonaazụ a kọwara na isi, ntụkwasị obi, na nkeji, na
a na-eme ka ha bụrụ nyocha na-adịghị ntụkwasị obi na mgbakwunye na captions nke frame. Ederede na-adịghị mma,
n'ogologo, ma ọ bụ na-enweghị provenance na-anaghị anabata kama ịkọrọ ya na
caption stream. Ma channels transcript request-body na-emepụta provenance a na-enye
na `client`, tinyere self-asserted `embedded` ma ọ bụ `audio-bridge`
labels. Nanị adapter nke onye ọrụ sava nwere ike ịtọpụ ndị a kwadoro labels site na
`trustedSource` argument naanị; a na-apụghị ịbanye na mpaghara JSON nke arịrịọ
na argument ahụ. Ederede transcript na-anọgide na-adịghị ntụkwasị obi media-derived content,
n'agbanyeghị provenance ya, ma ghara ịkọwa ikike.

Ndị na-akpọ dị elu nwere ike inye `audioTranscript` track maka vidiyo ahụ;
a na-atụle ya dịka ederede nke onye ahịa nyere, ọ bụghị ihe àmà nke sava transcription.
Nchekwa fusion na-agba ọsọ visual na audio observations n'okpuru
otu oge ikpeazụ na mgbaàmà ịkwụsị, na-edozi ha na oge a na-ahụkarị, na-ejide
ndị na-emegharị na-ezighị ezi, na-akọwa nsonaazụ akụkụ mgbe naanị otu akụkụ na-eme nke ọma.
Otu `audioTranscript` na-adịghị mma na-ebelata na nsonaazụ akụkụ ahụ — a na-edebe nkọwa
visual na akụkụ audio na-edekọ koodu mfu a na-emegharị —
n'ikpeazụ na-emeghị ka vidiyo niile daa. N'ịbụ nke ọ bụla, flag akụkụ,
na koodu mfu a na-emegharị na-edebe na nsonaazụ a kọwara, na
metadata guardrail (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), na metadata cache nsonaazụ, na na
counters fusion bridge. Otu ụzọ Video Bridge ndabara anaghị akpọrọ speech-to-text
ma ọ bụ budata nke abụọ media copy; na-enweghị track doro anya ahụ, ọ na-anọgide
vidiyo naanị.

**Nchekwa transcript (#12150 P1).** Nke a na-apụta na-akpaghị aka mgbe
Video Bridge (n'onwe ya opt-in) na-eme ka cue transcript — enweghị flag nchekwa dị iche. Mgbe arịrịọ na-eme ka cue transcript ọ bụla (a kpọrọ `transcript` ma ọ bụ `audioTranscript` fused), guardrail na-eme ka ọ
`videoBridgeObserved` ma na-emepụta shadow redacted nke nkọwa vidiyo —
nke a na-emegharị na nke ahụ na ebe ọ bụla cue's free-text body na-anọchi anya
`[redacted-video-transcript]`, nke a na-ewu site na ịgbanwe mpaghara cue
tupu a na-ejikọta eriri (ọ bụghị site na parsing ederede flattened, ya mere, enweghị ọdịnaya cue
— nke na-emegide ma ọ bụ nke nkịtị, tinyere bodies nwere `]` dịka
`[inaudible]`/`[music]` — nwere ike ịnagide). A na-agbanwe arịrịọ call-log
nke a na-eziga na vidiyo-derived text part maka shadow redacted ahụ, nke a na-ejikọta site na
nkeji ọdịnaya; a na-agụ `fullText` anchor site na payload guardrail pre-call
nke mechara, ya mere, njikọ ka na-eme nke ọma mgbe guardrails njikọ na-esote (PII na
credential maskers, priorities 10/95) na-edegharị nkọwa ederede na ebe na
mgbaàmà sistem/prompt/handoff/memory injection na-emegharị array ozi. A na-eziga
n'elu na model adịghị agbanwe. A na-ahụ arịrịọ na-emepụta
n'ozuzu Memory (ma arịrịọ na nzaghachi-derived extraction na-ezighị), ya mere, nzaghachi nke model
n'onwe ya enweghị ike ịkpọgharị ederede transcript n'ime Memory.

**Raw video fields (#12430).** Mgbe a na-eme ka bridge na-arụ ọrụ ma nkwado vidiyo
n'ozuzu ma ọ bụ na-adịghị adị, a na-eme ka `transcript`/`audioTranscript` fields na-emepụta `videoBridgeObserved`, ọbụlagodi mgbe nkọwa dara ma ọ bụ `maxVideos` limit. `null` na eriri efu na-agụ; a na-apụghị ịnabata
ndị na-adịghị adị na metadata na-abụghị vidiyo. A na-edebe ndị a na-echekwa
ndị a na-emegharị ma ọ bụ na-ewepụ arịrịọ, na caches/Memory na-apụghị ịbanye. A na-ejide payload provider na-enweghị mgbanwe.

Nkwupụta ndị ọzọ echedoro na-eji otu ihe ngosi a na-ahụ maka arịrịọ. Snapshot nke arịrịọ onye ahịa pre-guardrail, arịrịọ na-eche na nchekwa, na ndekọ arịrịọ a jụrụ na mbụ na-anọchi anya mpaghara transcript na akụkụ vidiyo; string prompts e mepụtara site na usoro pipeline na nkwukọrịta ọnọdụ na-ewepụ na sink nke arịrịọ echedoro. Marker `video_content_removed` echedoro na-eme ka `previous_response_id` na-aga n'ihu kwụsịrị ma ọ bụghị ịmepụta ederede nke a na-ewepụghị n'echiche. Ọ bụrụ na arịrịọ a hụrụ na-efu ihe ndabere redaction ya tupu ndekọ, ma ọ bụ ọbụna otu n'ime ọtụtụ ihe ndabere vidiyo na-efu na-esote mgbanwe arịrịọ, a na-ewepụ arịrịọ echedoro kpamkpam kama ịchekwa transcript nke e wepụtawo n'ụzọ akụkụ.

Maka arịrịọ a hụrụ, azịza ụdị nwere ike ịkpọtụrụ akụkụ ọ bụla nke transcript na-enweghị ihe ngosi nhazi. N'ihi ya, `responseBody` nke ndekọ oku echedoro na-anọchi anya ya site na marker nke ewepụtawo; ihe ngosi pipeline zuru ezu (nke nwere ike ịgụnye arịrịọ ndị na-abịa/n'ịntanetị na akụkụ nke usoro) anaghị echekwa. Semantic, idempotency, na caches replay echiche na-apụ apụ na-agụ na idebe maka arịrịọ ahụ. Arịrịọ onye na-enye na azịza nke onye ahịa na-anọgide na-adị ka ọ dị. A na-ewepụ byte keepalive mbụ site na buffer nke oge mgbe a na-ewepụ ihe ngosi zuru ezu. Nkwupụta njehie Kiro nke EventStream na-akọ naanị ọnụ ọgụgụ byte nke payload, ọ bụghị ọdịnaya ya ma ọ bụ njehie raw nke JSON parser.
Nke a anaghị ekwu na a na-enyocha nyocha nke onye na-enye/plugin na-adịghị njikọ; a na-edekọ sweeping nke echedoro-sink na #11658.

Ụzọ ndụ `/api/modality-bridge/video/drilldown` bụ ihe dị iche, cache substrate nke loopback/token-authenticated. Ọrụ ọ bụla na-achọkwa ID nke onye isi opaque canonical. Tupu a kwado onye na-akpọ mmepụta, ọ ga-enweta ID ahụ site na tenant a kwadoro ma ghara ịkwado uru onye ahịa họọrọ. Igodo cache na-ejikọta onye isi ahụ na ID nke oge canonical na ID nke vidiyo, na-echekwa naanị igodo ha sitere na SHA-256, na-ejikwa agụ na ihichapụ na onye isi ahụ. Cache na-echekwa naanị 16 JPEG frames e si na ya pụta kwa ntinye, na-emecha ha mgbe nkeji iri, na-akwado agụ `start`/`end` ma ọ bụ ihichapụ oge doro anya.

Onye isi ọ bụla nwere oke nke 16 ntinye na 64 MiB nke data JPEG canonical. Oke ndị a bụ nke na-adịghị njikọ na oke 64-entry/256 MiB nke ụwa: nrụgide quota nke onye isi na-ewepụ naanị ntinye ndị a na-eji nke onye isi ahụ na-adịbeghị anya tupu a tụlee iwepụ LRU nke ụwa. A na-ewepụ ntinye ndị agwụla site na onye isi na akụrụngwa ụwa na omume cache, ebe ịkwụsị na njehie nkwenye anaghị eme ka a dochie akụkụ.

Cache na-anaghị anabata Base64 na-abụghị canonical, padding karịrị, media na-abụghị JPEG, JPEGs na-adịghị mma ma ọ bụ nke a na-ewepụ, na JPEGs nke na-emepụta nkwupụta mgbe a na-eme `sharp` decode zuru ezu. Ọ na-emegharị foto ọ bụla a nabatara dịka JPEG canonical, na-enweta obosara na elu site na byte ndị a kọrọ kama ịtụkwasị obi na mpaghara ndị na-akpọ, na-ewepụ byte polyglot ọ bụla na-esote kama ịchekwa ha. Naanị buffer compressed canonical nke e ji mara na-akwụ ụgwọ na quota abụọ. Oke eriri JSON gụnyere Base64 overhead maka oke 32 MiB nke decoded-input. Nkọwa ọ bụla echekwara na-edekọ usoro JPEG ya kwadoro/resolution, usoro sampling, nsụgharị derivation, oge ịmepụta, hash ọdịnaya nke server, na hash nke njikọ nne na nna nke onye na-akpọ kwadoro. A na-enyocha ịkwụsị n'etiti usoro decode/hash asynchronous tupu a kwado cache atomic.

Onye na-emepụta mmepụta na-eji frames broker nke e si na ya pụta naanị mgbe nyocha anya gara nke ọma, na-enweghị mbipụta vidiyo nke abụọ/nwepụ. Ọ na-achọ `modalityBridgeVideoDrilldownEnabled=true`, `drilldown: true` nke siri ike kwa akụkụ, na ID ndekọ API-key a kwadoro. Uru ndị a na-ekwupụta nke onye ahịa na/session anaghị etinye ikike. Na-enweghị ọnọdụ atọ ahụ, ọ naghị eme hash, resize ma ọ bụ chekwaa frames ndị ọzọ. Nkwụsị na-adịghị mma na-echekwa azịza anya nke a pụrụ iji. Arịrịọ ndị a kwadoro na-apụ apụ cache nke nsonaazụ vidiyo niile ka nsonaazụ echedoro na-adịghị eme replay handles.

Nsonaazụ JSON na SSE nke ọma na-egosi na ọ dịkarịa ala handles anọ opaque na `x-omniroute-video-drilldown` header. Ndị nchọgharị a kwadoro nwere ike ịgụ header ahụ na-enweghị ime ka iwu CORS nke isi gbanwee. Handles ọhụrụ na-eji `v1.<32-byte random base64url token>`, na ndekọ na-echekwa naanị hashes SHA-256 ha. Onye na-agụ/na-emegharị header na-anabatakwa 64-hex tokens ochie. Onye na-azụ ahịa a kwadoro bụ `GET /api/v1/video-bridge/drilldown?handle=...`, nke a na-enyocha n'ụzọ dị iche site na `modalityBridgeVideoDrilldownRemoteEnabled=true`. Nkwupụta a kwadoro na-adịghị mma na-ewepụ ohere ọbụna mgbe `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env fallback ochie na-arụ ọrụ. Nchekwa mmepụta nwere nkwupụta ochie `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Ma nkwupụta abụọ ahụ na-adị na ndabara.

Onye na-azụ ahịa na-enweta ikike site na igodo a kwadoro, na-etinye iwu igodo, na na-eweghachi 404 otu ahụ maka handles na-amaghị, agwụla na nke igodo ọzọ. Ọ na-anabata `variant=preview|standard|detail` (obere JPEG kachasị 320/640/1280, na-enweghị ịbawanye), `limit=1..8` (ma ọ bụ alias ochie `frames`, na-enweghị ma abụọ), zero-based `page`, na optional `start`/`end` nkeji. Igodo ajụjụ ndị na-emegharị na windo focus na-ezighị ezi na-anaghị anabata. Variant ọ bụla a na-eweghachi nwere hash nke ọdịnaya ya na metadata resolution ya, jikọtara na isi echedoro. A na-enweta variants na-agụ kama ịchekwa ha dịka copies echedoro. Azịza JSON, gụnyere Base64/envelope, na-ejide na 32 MiB; peeji buru ibu na-eweghachi 413 na onye ahịa ga-arịọ maka frames ole na ole. Agụ na-enyocha ịkwụsị gburugburu resize ọ bụla na-enyocha validity nke handle tupu a na-eweghachi. `DELETE` site na onye nwe bụ idempotent; ihichapụ ma ọ bụ TTL expiry na-emeghe isi echedoro na akụrụngwa iji.

The shared store bụ nke usoro mpaghara: njikwa na-agwụ na mmeghachi omume ma ọ bụ na-emekọrịta
n'etiti usoro OmniRoute dị iche. Njikwa stats na-egosi njikwa dị irè/
ndị ọzọ na-agbakwunye ihe edere/byte naanị, ọ bụghị mgbasa ozi, ntụaka,
ndị isi ma ọ bụ njikwa. Panel ntọala Video na-egosi ụkpụrụ ndị ahụ ma nwee ike ịchekwa
ma abụọ consent switches. Akwụkwọ ntuziaka a abụghị ihe ngosi mmeghachi omume ma ọ bụ
nkwado; nnabata ụdị eziokwu na-enyocha nke ọma.

A na-edepụta ihe oyiyi n'usoro na usoro Video a haziri. Ọ bụrụ na
Video override adịghị, ọ na-erite ntọala Vision; ma ọ bụrụ na ha abụọ adịghị, Vision
auto-router na-ahọrọ ụdị nwere ike ịhụ. Ihe oyiyi gara nke ọma
na-anọchi akụkụ mbụ na `[Video description:` prefix kwụsiri ike nke na-emekwa
ka ederede ahụ bụrụ nyocha sitere na mgbasa ozi na-agaghị ekwe ka ụdị ndị ọzọ
soro ntuziaka ndị dị na mgbasa ozi. Igwe njikọ cache nke ihe oyiyi
na-agụnye byte JPEG, prompt, timestamp, na ụdị dị irè; naanị ihe oyiyi gara nke ọma
ka a na-echekwa. Cache entries na-echekwa ụdị onye na-emepụta nke gara nke ọma,
gụnyere ụdị ndabere; ọdụ ụgbọ mmiri na-akọ `mixed` mgbe ihe oyiyi dị iche
nwere ụdị dị iche. Cache hit na-eji njirimara onye na-emepụta ahụ
n'ịbụ nke a na-akpọghị ya dịka atụmatụ routing a chọrọ. Cache nke nsonaazụ
video zuru ezu bụ nke a na-eme na ntinye ọ bụla na-agbanwe
mmepụta — prompt, ụdị dị irè, usoro sampling, ọnụ ọgụgụ ihe oyiyi, usoro nyocha semantic, SHA-256
fingerprint nke normalized focus hint, focus window, `transcript`,
`audioTranscript`, na flag contact-sheet — ya mere, ịgbanwe otu n'ime
ndị a bụ cache miss, ọ bụghị reuse ochie. Usoro dedup visual
version, threshold, na ọnụ ọgụgụ ihe oyiyi a na-edobe bụkwa doro anya na
nsonaazụ-cache key na metadata; mgbanwe iwu ya mere apụghị iji reuse ochie
nkọwa video zuru ezu. Nsonaazụ-cache v4 metadata na-echekwa usoro na
fingerprint, ọ bụghị ọrụ onye ọrụ raw. Metadata guardrail na-akọ ma
ihe a chọrọ na usoro nyocha dị irè; usoro a chọrọ `focused` na-enweghị
edezi ederede onye ọrụ bara uru na-akọ dịka `full`.

The guardrail na-ewepụ akụkụ video niile a kwadoro ma na-akọghị karịa
`modalityBridgeVideoMaxVideos`. Maka ebumnuche a kwadoro na
`supportsVideo === false`, vidiyo ndị dara na nke karịrị oke na-abụ
nkọwa ederede nchekwa doro anya ka mgbasa ozi raw ghara ịnagide. Mgbe ikike adịghị
ama, akụkụ ndị ahụ na-anọgide na-enweghị mmetọ. Ebumnuche nwere `supportsVideo === true`
na-apụ apụ na ọdụ ụgbọ mmiri. Nkwupụta arịrịọ nke onye ahịa na-agbasa site na
ndownload, broker queue, subprocesses, na oku caption; arịrịọ na-akwụsị n'etiti
vidiyo ma ọ bụ na-emeghị ka mgbasa ozi raw pụta.

Usoro runtime bụ DB-backed na Zod-validated:

| Key                                 | Default     | Range / behavior                                                                                                     |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Optional runtime, opt-in                                                                                             |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` na-echekwa ihe oyiyi nkịtị; `focused` na-eji bounded, untrusted latest-user context                           |
| `modalityBridgeVideoModel`          | `""`        | Inherit the Vision Bridge model                                                                                      |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                 |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, ma ọ bụ proportional `segment_aware`; na-adịghị arụ ọrụ detector na-alaghachi na `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                  |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                       |

Legacy persisted Video timeout values dị elu 120 sekọnd na-ejide na
broker deadline; edemede ọhụrụ na-ede elu na oke ahụ na-anaghị anabata.
`GET /api/modality-bridge/video/runtime` chọrọ trusted stamped loopback
locality tupu authentication ma ọ bụ runtime probing, mgbe ahụ, chọrọ
njikwa auth. Ọ na-alaghachi naanị `available`, sanitized FFmpeg/ffprobe versions, na
ihe kpatara mgbe runtime adịghị. Internal extraction endpoint abụghị
public upload API: queue saturation na-alaghachi `503` tinyere `Retry-After`, disconnect nke onye na-akpọ na-alaghachi `499`, na
broker deadline na-alaghachi `504`. A na-agbakwunye azịza gbanwere
`video->text;model=<visionModel>;parts=<videos>` na isi
`x-omniroute-modality-bridge` header na-enweghị iwepụ Vision ma ọ bụ Audio segments.

### PII Masker (`piiMasker.ts`)

Na-arụ ọrụ na **ma** ọkwa.

- **`preCall`** na-emegharị payload, na-agagharị `system`, `messages`, `input`, na
  `prompt` (gụnyere ihe ederede dị mfe), na-etinye `processPII()` (site na
  `@/shared/utils/inputSanitizer`) na string `content`/`text` fields. Mgbe
  `PII_REDACTION_ENABLED=true`, PII a chọpụtara na-ewepụ na outbound
  payload. Nke a bụ nke na-adịghị emetụta `INPUT_SANITIZER_MODE` (nke na-achịkwa naanị
  prompt-injection policy). Mgbe a na-ewepụ, oku na-edekọ ọnụ ọgụgụ nchọpụta
  na-enweghị idegharị ọdịnaya.
- **`postCall`** na-emegharị nzaghachi, na-agba ọsọ `sanitizePIIResponse()` tinyere
  masker Responses-API-shape (`maskResponsesOutput` — na-cover
  `output_text` na `output[].content[].text`). Ọ bụrụ na e nwere ihe a na-ewepụ, nzaghachi gbanwere
  na-anọchi akụkụ mbụ.

The guardrail anaghị egbochi; ọ na-anọchi naanị (`meta.detections`,
`meta.redacted`) ma ọ bụ na-edegharị.

### Prompt Injection (`promptInjection.ts`)

Na-achọpụta ihe ndị na-emegide na ọdịnaya onye ọrụ nyere ma na-eme ka iwu a haziri ahazi. Ọrụ a na-adabere na mgbanwe gburugburu na nhọrọ onye nrụpụta:

| Ntọala          | Env var                                                                                            | Ndabere | Mmetụta                                                                                                                                                                                 |
| --------------- | -------------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Emebere         | `INPUT_SANITIZER_ENABLED`                                                                          | `true`  | Mgbe `false`, guardrail na-eme ka ọ bụrụ na ọ gaghị arụ ọrụ.                                                                                                                            |
| Ụzọ             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                    | `warn`  | Iwu ntinye: `block`, `warn`, ma ọ bụ `log`. (`redact` a na-anabata ya maka nkwado azụ mana anaghị ewepụ ederede ntinye; arịrịọ PII rewrite na-achịkwa site na `PII_REDACTION_ENABLED`.) |
| Block threshold | `blockThreshold` nhọrọ / `INPUT_SANITIZER_BLOCK_THRESHOLD` (aha `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Ọnụ ọgụgụ kachasị mkpa chọrọ ka e mechie. Medium bụ naanị nlekota na ndabara.                                                                                                           |

**Ụzọ nke a na-eme** (`getMode`): onye na-akpọ `options.mode` →
`INJECTION_GUARD_MODE` **DB atụmatụ-ndị na-eme ka ọ bụrụ** (Dashboard → Ntọala →
Atụmatụ Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. N'ihi ya, mgbanwe dashboard na-emeri mgbanwe gburugburu, ya mere UI Atụmatụ
Flags na-achịkwa guard na-arụ ọrụ n'oge (enweghị mmeghari). Nchịkọta DB bụ nke na-echebe:
ma ọ bụrụ na ọ na-emehie, guard na-alaghachi na omume dabere na gburugburu, na mgbe enweghị
mgbanwe a setịpụrụ, omume ahụ bụ otu na mkpebi naanị gburugburu.

Isi mmalite nchọpụta:

1. `sanitizeRequest()` si `@/shared/utils/inputSanitizer` (nchọpụta a na-ekekọrịta
   eji n'ebe ọzọ na pipeline).
2. `DEFAULT_GUARD_PATTERNS` nke a na-ewere dị ka nke a na-ewere (n'oge a `system_override_inline` na
   `markdown_system_block`, ma abụọ bụ `high` severity).
3. `customPatterns` nke a na-enye site na nhọrọ onye nrụpụta (ahịrịokwu, regex,
   ma ọ bụ `{ name, pattern, severity }` ndekọ).

Mgbe `mode === "block"` **na** ọ dịkarịa ala otu nchọpụta na-ezute oke
nke a, `preCall` na-alaghachi `{ block: true, message: "Arịrịọ a jụrụ:
nkọwa na-adịghị mma achọpụtara" }`. Na `warn`/`log` Ụzọ, guardrail na-edekọ ma
na-enye ohere ka arịrịọ ahụ. Onye enyemaka a na-ekekọrịta `evaluatePromptInjection()` na-emekwa ka ndị na-akpọ
nwere ike ịtụle prompts na-enweghị ịga site na ndekọ.

**Nyocha njedebe (v3.8.20):** nchọpụta ahụ na-enyocha naanị **mbido 16 KB** nke
edemede prompt jikọtara — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) na
`src/shared/utils/inputSanitizer.ts`. Ma `detectInjection()` na
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` tupu ịrụ ọrụ
na usoro. Ntuziaka ntinye nọ n'elu nke ntinye, ya mere nke a
na-eme ka regex CPU/GC na ọtụtụ narị-KB payloads na-enweghị imebi nchọpụta (cf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Na-arụ ọrụ na **ma** usoro abụọ, ikpeazụ na usoro ndabara (nchekwa `95`). Na-ewepụ
ama ama API-key / secret-token patterns site na payload na-apụ (nkọwa
ndekọ, arguments tool-call, nsonaazụ ngwá ọrụ) **na** nzaghachi onye na-enye, ya mere a
credential e tinyere na prompt (ma ọ bụ wepụtara site na nsonaazụ ngwá ọrụ) adịghị apụta
na onye na-enye elu ma ọ bụ laghachi na onye ahịa.

- **Opt-in naanị**, otu usoro dị ka PII redaction (Hard Rule #20-adjacent):
  emechiri ma ọ bụrụ na `settings.credentialRedactionEnabled === true` **ma ọ bụ**
  `CREDENTIAL_REDACTION_ENABLED=true`. Mgbe ọ na-adịghị arụ ọrụ, guardrail bụ no-op —
  ọ gaghị emechi ma gaghị rewrite.
- `redactCredentials()` na-agagharị na payload/azaghachi osisi (`walkValue()`,
  prototype-pollution-safe, cycle-safe site na `WeakSet`) ma na-anọchi anya ihe ndị
  zụtara na `[REDACTED:<type>]` placeholder, na-ewepụta naanị ndị na-acha na
  mgbanwe.
- `CREDENTIAL_PATTERNS` na-ekpuchi igodo LLM provider (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokens (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), igodo ịkwụ ụgwọ (Stripe, Square), igodo igwe ojii
  (AWS access key, Twilio, SendGrid, Mailgun), igodo nzuzo / JWTs,
  njikọ na-ejide credential (`mongodb://user:pass@...`, wdg), na
  ụdị `Authorization`/`x-api-key`/`api-key`/`apikey` header-value
  pattern. Igodo nke nwere ụdị header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) na-ewepụ ya n'ụzọ usoro (nke a na-eme ka ọ bụrụ, usoro prefix dị ka
  `Bearer `/`Basic ` na-echekwa) kama site na regex ederede nkịtị.
- Guardrail anaghị emechi; ọ na-eme ka ọ bụrụ naanị (`modifiedPayload` /
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
