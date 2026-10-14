# Guardrails (Kiswahili)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Chanzo rasmi:** `src/lib/guardrails/`
> **Ilisasishwa mwisho:** 2026-08-29 — v3.8.51 (asili ya nakala ya Video Bridge hutangazwa na mpigaji,
> bado haijathibitishwa na seva — imefafanuliwa kulingana na #11661)

Vizuizi vya ulinzi hutekeleza usalama, sera na mageuzi ya maudhui kwenye mpaka
kati ya OmniRoute na watoa huduma wa ngazi ya juu. Kila kizuizi cha ulinzi kinaweza kukagua (na
kwa hiari kukataa, kubadilisha au kuweka ufafanuzi kwenye) data za ombi (`preCall`) na
majibu ya mtoa huduma wa ngazi ya juu (`postCall`).

Mfumo ni wa **fail-open**: ikiwa kizuizi cha ulinzi kitatupa hitilafu kinapotekelezwa, sajili
hurekodi hitilafu hiyo na kuendelea na kizuizi kinachofuata badala ya kusababisha
ombi lishindwe. Kuzuia ni uamuzi wa moja kwa moja (`block: true`), kamwe si ajali.

## Mifumo ya Ulinzi ya Ndani

Rejista inaongeza mifumo sita ya ulinzi kwa mpangilio wa kipaumbele wakati wa kuagiza
(tazama `registry.ts` → `registerDefaultGuardrails()`):

| Kipaumbele | Jina                | Hatua(s)       | Faili                 |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nambari za kipaumbele za chini zinaendesha **kwanza**.

### Bridge ya Maono (`visionBridge.ts`) — Mifumo ya Bridge PR-1

Inakabili maombi yanayoleta picha yanayolenga **mifano zisizo za maono** na ama
kuhamasisha ombi lote kwa mfano unaoweza kuona au kubadilisha sehemu za picha
na maelezo ya maandiko yanayozalishwa na mfano wa maono unaoweza kubadilishwa kabla
ya wito wa juu. Hii inaruhusu watoa huduma wa maandiko pekee kushughulikia
mifumo ya malipo ya multimodal kwa uwazi.

Mchakato:

1. Kataa ikiwa mfano wa lengo tayari unasaidia maono (isipokuwa inapoonekana kwenye
   orodha ya bridge iliyolazimishwa `isVisionBridgeForcedModel`).
2. Toa sehemu za picha kupitia `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ambayo inapeleka kwa **mwanahabari wa vyombo vya habari
   vilivyounganishwa** `detectMediaParts()` katika `open-sse/utils/mediaParts.ts` —
   chanzo kimoja cha ukweli kinachoshirikiwa na chujio cha ulinganifu wa combo.
   Utoaji umewekwa kwenye orodha ya kuruhusiwa kwa sehemu za juu za umbo
   `replaceImageParts` zinaweza kuunganishwa tena (mkataba wa extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, na Responses API `input_image`. Picha zilizozungukwa na
   umbo la kiashiria pekee ni vifaa vya chujio vya combo na hazitolewi kamwe.
   Kataa ikiwa hakuna iliyopatikana.
3. Pata usanidi wa wakati wa kukimbia kupitia `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): funguo mpya za `modalityBridge*`
   zinasababisha ushindi; funguo za zamani za `visionBridge*` zinabaki kuwa **mara moja
   ya kurudi nyuma** (dirisha la kurudi nyuma). Kataa kabla ya kusafiri kwa vyombo vya habari wakati bridge imezuiliwa.
4. Mchaguzi wa hali (`modalityBridgeVisionMode`, tazama jedwali hapa chini) unamua
   kuhamasisha dhidi ya kuelezea. Kuhamasisha kunarejesha `modifiedPayload` na tu `model`
   iliyobadilishwa, pamoja na meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Njia ya kuelezea: weka picha kwenye `maxImages`, tengeneza ombi linalojua kazi,
   angalia cache ya kuelezea, piga mfano wa maono **kwa sambamba**
   (`Promise.allSettled`), na ingiza sehemu za maandiko `[Image N]: <description>` mahali pake. Kuelezea kwa kushindwa kunatoa `null` na sehemu ya picha asili inabaki
   **kuhifadhiwa** (#4012) — isipokuwa kwenye njia ya kuelezea ya combo wakati kila
   kuelezea ilishindwa, ambapo mfano wa juu usio na maono unapata
   `(unavailable — no vision-capable provider connected)` stub badala (#8430).
6. Rudisha `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Mchaguzi wa hali (`modalityBridgeVisionMode`)

| Hali       | Kawaida | Tabia                                                                                                                                                                                                                                                                         |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Heuristics za zamani, zisizoguswa (#6640/#7204): mifano zisizo za combo/`auto/` huhamasisha kwa mfano bora wa maono isipokuwa mfano wa asili tayari una akreditivu zinazoweza kutumika (kisha kuelezea); malengo ya combo daima yanaelezea.                                   |
| `describe` |         | Daima elezea — kizuizi cha kuhamasisha kinakosolewa kabisa; mfano uliochaguliwa na mtumiaji daima unajibu.                                                                                                                                                                    |
| `reroute`  |         | Lazimisha kuhamasisha: kizuizi cha mfano wa akreditifu kinapita. Kizuizi cha akreditifu cha kuhamasisha-**lengo** bado kinatumika — wakati hakuna mfano wa maono unaoweza kutumika, ombi linapita kuelezea ili picha mbichi zisiweze kufikia nyuma ya maandiko pekee (#8430). |

Hali zilizolazimishwa zinafanya kazi **kabla** ya heuristics ya auto kuendesha; tabia ya `auto`
ni sawa na ile ya kizuizi cha awali PR-1.

#### Wigo wa API-key (`visionBridgeKeyScope.ts`)

Wakati funguo ya API ya mpiga simu inazuia `allowedConnections`, mizunguko ya quota
(`allowedQuotas`) au mifano (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), bridge inachagua tu mifano ya kuhamasisha na kuelezea ambazo funguo inaweza kutumia, kwenye mizunguko ambazo funguo inaweza
kutumia. Wito wa kuelezea kisha daima hupitia mzunguko wa ndani wa OmniRoute na
kichwa cha `x-omniroute-self-loop-key-id`, hivyo ombi la mazungumzo linalopokea
linalazimisha sera ya uhusiano na mfano wa funguo hiyo tena. `enforceApiKeyPolicy()`
inaheshimu kichwa hicho tu pamoja na mtoaji wa mzunguko wa ndani, hivyo inaweza tu
kupunguza ufikiaji, na kitambulisho ambacho hakiwezi kutatuliwa kinakataliwa.

Ikiwa hakuna mfano wa maono unaruhusiwa kwa funguo, njia ya kuelezea inajiondoa na
ombi linapita bila kubadilishwa, tabia sawa ya kufeli-kufungua kama kizuizi kilichozuiliwa
(meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Maombi bila funguo, na funguo zisizo na vizuizi hivi, zinafanya kazi kama ilivyokuwa awali.

#### Ombi la kuelezea linalojua kazi (`modalityBridgeVisionTaskAware`)

Default **kweli**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) inaongeza
maandishi ya **ujumbe wa mwisho wa mtumiaji** (iliyokatwa hadi herufi 500) kwenye msingi
wa maelezo ya kuandika, ikielekeza maelezo kuelekea kile mtumiaji alichouliza
(mfumo wa codex-vision-proxy) na kuomba mfano wa maono kuandika maandiko ya
kuonekana. Ikiwa bendera imezimwa — au hakuna maandiko ya mtumiaji — msingi
wa maelezo unatumika bila kubadilishwa.

Ombi la kuandika la self-loop la describe (`callVisionModelSingle()`
katika `visionBridgeHelpers.ts`) kila wakati linaomba `image_url.detail: "high"` —
bila masharti, kwa kila mpiga simu/mtoa huduma, bila kuzingatia ishara yoyote ya mteja.
Sampling ya maelezo ya chini inaharibu usahihi wa OCR kwa kazi halisi ya
kuandika maandiko ambayo ombi hili linaomba, hivyo ombi la describe lenyewe kila wakati
linaomba maelezo ya juu bila kujali kiwango cha maelezo ambacho ombi la awali
lililotumwa lilitumika. Hii inahusisha tu mwili wa ombi la ndani la describe; haibadilishi jinsi
OmniRoute inavyosambaza `image_url.detail` ya mpiga simu kwenye ombi kuu —
ile default inatumika tofauti, na kwa wateja wa OpenCode waliogundulika tu, katika
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Tawi la
format ya waya ya Anthropic la self-loop la describe halina uwanja wa `detail`
na halikathiriwi na default yoyote.

#### Kiwango cha matokeo ya describe (`modalityBridgeVisionMaxChars`)

| Funguo                         | Default | Muktadha         |
| ------------------------------ | ------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`     | `0` au 100–50000 |

`0` (default) inamaanisha **hakuna kikomo** — maelezo yanayorejeshwa na
`callVisionModel()` yanapitishwa bila kubadilishwa, yakihifadhi tabia iliyopo. Thamani yoyote katika
muktadha wa 100–50000 inakata maelezo kwa kiambishi cha `…` kabla ya kuunganishwa tena kama
`[Image N]: <maelezo>` (`VisionBridgeGuardrail.preCall()` katika `src/lib/guardrails/visionBridge.ts`).
Pandisha hii kwa kazi za OCR zenye maelezo mengi ambapo mfano wa chini unahitaji
kuandika kamili; punguza ili kudhibiti matumizi ya token kwenye mifano ya maono yenye mazungumzo.
Sehemu ya dashibodi inapatikana kwenye paneli ya Advanced ya tab ya Vision
(`modality-bridge-max-chars` katika `ModalityBridgeVisionTab.tsx`) na inakata
thamani yoyote kati ya 1 na 99 hadi sakafu ya 100 huku ikiacha `0`
isiyoguswa — `0` ni thamani halali ya Zod kwa njia yake mwenyewe
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), si tu
default ya "haijapangwa".

#### Cache ya describe (`modalityBridge/bridgeCache.ts`)

Cache ya LRU + TTL katika kumbukumbu kwa matokeo ya describe, inayoshirikiwa
kote katika mchakato. Funguo = `sha256(imageRef + composedPrompt + configuredBridgeModel)` na
ufunguo wa urefu (hakuna migongano ya mipaka ya uwanja). Sehemu ya mfano ni
mfano wa **imepangwa** wa bridge, si mfano ambao kwa kweli ulijibu —
`callVisionModel` inaweza kurudi nyuma ndani, na kufungia kwa kila jaribio kutavunja
cache. Maelezo yaliyoshindwa hayahifadhiwi kamwe. Mipangilio:

| Funguo                          | Default | Muktadha |
| ------------------------------- | ------- | -------- |
| `modalityBridgeCacheEnabled`    | `kweli` | —        |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440   |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000  |

#### Kurekebisha picha za mbali (self-loop describe/base64 fetch)

Wakati bridge inapata picha **ya mbali** yenyewe — ombi la self-call la Anthropic
na mabadiliko ya format ya waya ya claude ya base64
(`ensureBase64ImagesForClaudeWire`), zote kupitia
`fetchRemoteImageAsDataUri()` katika `visionBridgeHelpers.ts` — URI ya data inayotokana
inasafirishwa kupitia `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) kabla ya kuingizwa katika ombi la mfano wa maono.
Picha kubwa zinapunguzwa hadi **mipaka ya 2048px** (inayoendana na kikomo cha
kurekebisha ambacho OpenAI/Anthropic tayari wanatumia upande wa seva), ambayo inakata
bytes za kupakia/kuchelewesha bila kubadilisha kile mfano wa maono unaona. Kurekebisha
kunatumia `sharp`, iliyopakiwa kupitia uagizaji wa dynamic: kwenye jukwaa ambapo
binary yake asilia inashindwa kupakia, `normalizeDataUri()` **kamwe haitatupa** —
inaangukia kwenye kupitisha bytes za asili, hivyo njia ya describe/base64-conversion
kila wakati inaendelea kufanya kazi. Bytes zisizo za picha (kuchota ambayo haikurejesha picha
iliyoweza kufafanuliwa) pia zinapitishwa bila kubadilishwa. Kurekebisha hii
kunaelekezwa kwa picha ambazo bridge inapata kwa ombi lake la ndani — haitumiki
kamwe kwa mzigo wa kupitisha wa mpiga simu, kulingana na kanuni ya mabadiliko ya
kujiunga pekee (Sheria Kali #20).

#### Muundo wa mipangilio + uhamasishaji

Funguo mpya za `modalityBridge*` zinathibitishwa na Zod katika `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio ya `modalityBridgeCache*`, na kundi la
`modalityBridgeAudio*` linalotumiwa na Bridge ya Sauti. Uhamasishaji
`141_modality_bridge_settings.sql` unakopya thamani za zamani za
`visionBridge*` kwa funguo mpya zinazolingana (idempotent, kamwe haifutii
thamani ya `modalityBridge*` iliyowekwa na opereta); funguo za zamani zinaendelea
kukubaliwa kama fallback ya kusoma kwa mzunguko mmoja wa kutolewa.

#### Kichwa cha uwazi + takwimu

Majibu yaliyobadilishwa na describe yana carry
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(yaliyoundwa na `buildModalityBridgeHeader()` katika `modalityBridge/bridgeStats.ts`,
yaliyotolewa na `withModalityBridgeHeader()` katika `src/sse/handlers/chatHelpers.ts`).
Maombi yaliyorejelewa hayana **kichwa** — mzigo haujaguzwa na kubadilisha mfano
kunaonekana tayari katika uwanja wa `model` wa mwili wa majibu.

`GET /api/modality-bridge/stats` (usimamizi wa uthibitisho, kiwango sawa na
`GET /api/settings`) inarudisha hesabu za kila modality zilizohifadhiwa kwenye
kumbukumbu `[{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }]` kwa `vision`, `audio`, na
`video`. `averageLatencyMs` inatumia `latencySamples`, si majaribio yote, kama
denominator yake; operesheni bila muda haifanyi sampuli ya milisekunde sifuri. `bridged`
inasalia kuwa jina la zamani linalofaa kwa mabadiliko yaliyofanikiwa; majaribio
yaliyo shindwa hayakuongeza hiyo.
Hesabu zinawekwa upya wakati wa kuanzisha mchakato kwa muundo
(telemetry, si uhasibu).

#### Mipangilio ya dashibodi

Ukurasa wa dashibodi uliojitolea ni
`/dashboard/settings/modality-bridge`. Anuani yake ya URL `Vision`, `Audio`,
na `Video` inahifadhi vigezo vya uchunguzi wakati wa kubadilisha thamani ya `tab`.
Tab ya Vision inaonyesha kuwezesha, hali, uchaguzi wa mfano (ikiwemo chaguo la
kiotomatiki), kuhamasisha kulingana na kazi, mipaka ya muda/mchoro/muda wa
maelezo/cache, hesabu za wakati wa kukimbia,
na ombi la sampuli lililolindwa. Tab ya Audio pia iko hai: inaonyesha
kuwezesha, mchaguzi wa mfano wa STT pekee na Auto, mipaka ya muda/mchoro wa
clip, hesabu za sauti, na mtihani wa sampuli wa `input_audio`. Tab ya Video
inafanya kazi: inaripoti hali ya wakati wa kukimbia ya FFmpeg/ffprobe — moja ya
hali nne wazi za UI (`unknown` wakati uchunguzi uko angani au hauwezi kukamilika,
`restricted` kwenye mwenyeji wa dashibodi usio wa loopback ambapo uchunguzi
unakosolewa upande wa mteja, `unavailable` mara tu uchunguzi ukifanywa na
kuhakikishwa kukosekana, au `available` na toleo la FFmpeg/ffprobe) — inahifadhi
mipaka ya enable/model/frame/video/timeout, inachuja mchaguzi wa mfano kwa
mfano unaoweza kuona, na inaonyesha hesabu za video.

Kadi ya zamani ya Vision Bridge chini ya mipangilio ya AI ni kiungo cha
kuyakabili na ukurasa mpya; haitumii nakala ya pili ya fomu. Watoa Huduma za
Vyombo pia wanaunganisha Mchakato wa Picha hadi Maandishi na Mchakato wa
Hotuba hadi Maandishi kwenye tab za Modality Bridge bila kuondoa uwanja wa
Hotuba hadi Maandishi uliopo.

**Kupita kwa kuingia kwa mzunguko wa ndani:** wakati wito wa kuelezea unapotembea
kupitia mzunguko wa ndani wa OmniRoute `/v1` (mfano wa mtoa huduma usio wa kawaida),
ombwe ndogo linapeleka `x-omniroute-admission-bypass: internal` na linathibitishwa
na akidi ya mzunguko wa ndani iliyopatikana — sentinel ya ndani `sk_omniroute`
katika hali ya ndani, au funguo ya mazingira iliyowekwa na opereta `OMNIROUTE_API_KEY`
/ `ROUTER_API_KEY` env key (#1350) ili
kuhakikisha kwamba matumizi ya `REQUIRE_API_KEY=true` yanaweza bado kuendesha
wito wa kuelezea. Kupita huko kunaheshimiwa tu kwa akidi hizo hasa, hivyo
wateja wa nje hawawezi kutumia kichwa hicho kupita kuingia.

Mipangilio ya zamani inapatikana katika `src/shared/constants/visionBridgeDefaults.ts`;
mipangilio mipya ya hali/kazi ya kuzingatia/cache na msola wa mipangilio
inapatikana katika `src/shared/constants/modalityBridgeDefaults.ts`. Mlinzi
anaonyesha chaguo la `deps` kwa hivyo majaribio yanaweza kuingiza
mifano ya uongo ya `getSettings` na `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Inakabili maombi ya mazungumzo yanayobeba sauti kabla ya kufikia lengo ambalo
halijulikani kukubali pembejeo za sauti. Hailazimishi tena ombi la mazungumzo:
sehemu za sauti zinatafsiriwa kupitia mwisho wa multipart unaofaa wa OpenAI
na mfano wa mazungumzo uliochaguliwa unaendelea na tafsiri za maandiko.

Mchakato:

1. Pata `supportsAudio` kupitia `getResolvedModelCapabilities()`. Metadata ya
   usajili wa mtoa huduma iliyo wazi inashinda, kisha metadata ya mfano wa
   statiki, kisha `modalities_input` iliyosawazishwa. Orodha ya pembejeo iliyotangazwa
   bila `audio` ni `false`; hakuna ushahidi wa uwezo unabaki `null`. Wote `false`
   na `null` huanzisha daraja la kihafidhina, wakati `true` linakwepa.
2. Pata mipangilio ya `modalityBridgeAudio*` na kutoa sehemu za sauti za juu
   zinazoweza kuchanganywa kutoka kila ujumbe kupitia detector ya pamoja
   `detectMediaParts()`. Umbo la waya linaloungwa mkono ni OpenAI `input_audio`,
   `audio_url`, na `source.media_type: "audio/*"`. Sauti iliyozungukwa inagundulika
   kwa ajili ya kuelekeza lakini haiondolewa na njia ya kuchanganya. Kazi inakabiliwa
   na `modalityBridgeAudioMaxClips`; sehemu za baadaye zinabaki bila kuguswa.
3. Heshimu `provider/model` iliyowekwa, au acha `selectAudioBridgeModel()`
   ipitie `AUDIO_TRANSCRIPTION_PROVIDERS` kwa mpangilio thabiti wa katalogi
   na kuchagua mfano wa kwanza wenye akidi inayofaa ya mtoa huduma.
4. `callAudioTranscription()` inabadilisha sauti ya base64/data-URI kuwa
   multipart `file`, au inashusha `audio_url` ya mbali kupitia mlinzi wa
   umma pekee na pinning ya DNS na mipaka ya 25 MB. Kisha inatumia POST
   faili na mfano uliochaguliwa kwa mzunguko wa ndani wa `/v1/audio/transcriptions`,
   ikithibitishwa na `resolveSelfLoopBearer()`. Njia ya tafsiri iliyopo inafanya
   utafutaji wa kawaida wa akidi, kushughulikia kupumzika/mipaka ya kiwango, na
   usambazaji wa mtoa huduma.
5. Wito wenye mafanikio unabadilisha sehemu zao kuwa `[Audio N]: <transcript>`.
   Wito zinafanywa kwa `Promise.allSettled`: kushindwa kwa mtu mmoja kunahifadhi
   sehemu hiyo ya sauti ya awali (#4012 mkataba). Ikiwa kila wito unashindwa na
   lengo linaonekana `supportsAudio === false`, sehemu zinakuwa
   `[Audio N]: (haipatikani — hakuna mtoa huduma wa STT aliyeunganishwa)` (#8430
   mkataba). Kwa lengo lisilojulikana (`null`), matokeo yote ya kushindwa
   yanabaki bila kuguswa. Lengo lililo thibitishwa la maandiko pekee bila
   akidi inayofaa ya STT linapata stub hiyo hiyo wazi bila kutoa wito wa mtandao.

Tafsiri zenye mafanikio zinatumia cache ya Modality Bridge LRU/TTL ya mchakato mzima.
Funguo inachanganya rejeleo la sauti, lebo ya operesheni ya `audio-transcription`
thabiti, na mfano wa STT uliochaguliwa; kushindwa hakuhifadhiwi kamwe. Mjaribio ya
sauti inasasisha `bridged`, `cacheHits`, `failures`, na `lastUsedAt` hesabu.
Majibu yaliyobadilishwa yana carry
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; maombi
yasiyoguswa hayapokei sehemu ya Audio Bridge.

Mipangilio ya wakati wa kukimbia inategemea DB na kuthibitishwa na Zod:

| Key                           | Default | Range          |
| ----------------------------- | ------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —              |
| `modalityBridgeAudioModel`    | `""`    | Auto au STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10           |

Cache iliyoshirikiwa inabaki kudhibitiwa na `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, na `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Inakabili sehemu za video za kiwango cha juu katika Chat Completions `messages` na Responses
API `input` kabla ya lengo ambalo halijulikani kuwa na msaada wa video wa asili liitwe.
Maumbo yanayoungwa mkono ni `input_video`, `video_url`, `video_source`, HTTPS URLs,
na `data:video/*;base64,...` data URIs. Majina ya faili ya kawaida katika maandiko hayachukuliwi
kama video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) inamiliki usafiri wa ombi,
ukaguzi wa uwezo/sera, muungano wa kila ombi, na mzigo wa majibu.
Kazi za kila video — ununuzi, cache ya matokeo yote, kuelezea mfuatano wa fremu
(ambayo inachanganya yoyote iliyotangazwa na mwitishaji ya sauti), na metriki/kuacha/kuondoa kwa kila jaribio
— imefichwa nyuma ya `processVideoPart` katika
`videoBridgePipeline.ts`, inayoitwa mara moja kwa kila sehemu ya video ndani ya mzunguko wa `preCall`.
Moduli hiyo pia inaelezea mipaka ya bandari wazi `VideoMediaBrokerPort`
(kuinua bytes na kutoa fremu zilizochukuliwa), `VideoAudioTranscriptionPort`
(kuchanganya hati ya sauti iliyotangazwa na mwitishaji na manukuu yaliyopimwa), na
`VideoDrilldownPort` (umbo la zamani la kuhifadhi ghafi). STT ya uzalishaji na uhifadhi wa fremu
zimejengwa karibu na bandari inayofafanua kupitia `createVideoSttAdapter` na
`createVideoDrilldownAdapter`; ya mwisho inatumia mzunguko wa kushiriki wa opaque-handle.

Njia ya ombi ya umma `/v1` kamwe haiagizi au kuanzisha subprocess. Video za mbali
zinapakuliwa chini ya mipaka ya 50 MiB; video za ndani za base64 zina
mipaka ya 36 MiB iliyotafsiriwa kwa kila video ili mfano/meseji/mifuko ya muundo
iweze kubaki ndani ya kikomo cha kuingia cha ombi cha umma cha JSON cha 50 MiB. Urefu wa ndani
na makadirio ya saizi iliyotafsiriwa yanakaguliwa kabla ya ugawaji. HTTPS inahitajika
katika URL ya mbali ya awali na kila upitishaji, ikitumia ulinzi wa umma pekee wa outbound
na DNS pinning. Bytes kisha hupita mpaka sahihi wa ndani
`POST /api/modality-bridge/video/extract`. Njia hiyo ni `LOCAL_ONLY` na `SPAWN_CAPABLE`,
inakubali tu ombi lililoidhinishwa la per-process, lililoaminika, na halikubali kamwe URL, njia ya mfumo wa faili,
programu inayoweza kutekelezwa, au orodha ya hoja. Mchakato wa saizi ya mwili wa API na msomaji wa mwili wa
mshughulikiaji hufanya kazi kwa uhuru kutekeleza kikomo cha 50 MiB cha pembejeo za broker. Foleni yake iliyo na mipaka inafanya
uchimbaji mmoja kwa wakati, inaruhusu kazi nne zinazokusubiri, na inakomo pembejeo zinazokusubiri kwa
100 MiB.

Ndani ya broker, `ffprobe` inasoma faili ya ndani ya kibinafsi; orodha ya muundo
imeondoa muundo wa orodha na wa orodha. Kwa kontena zinazoruhusiwa za familia ya MOV,
marejeleo ya data ya MOV ya nje yanabaki yamezuiliwa kwa chaguo-msingi, na amri iliyowekwa
haiingii ndani yao. Wote `ffprobe` na `ffmpeg` hutumia
orodha ya itifaki ya `file` pekee, thread moja, safu za hoja zilizowekwa, hakuna shell,
na programu zinazoweza kutekelezwa zinazotolewa kutoka `PATH`. Mipango ya picha iliyounganishwa si
wagombea wanaoweza kupigwa. Mipango yote inayoweza kupigwa lazima ikidhi mipaka, na mwelekeo wa kawaida wa wazi
unapendelea kabla ya kurudi kwa chini kwa index ya chini. Video zina mipaka ya sekunde 600, pixels 8,192 kwa kipimo, na
33,554,432 pixels za chanzo. FFmpeg inachukua fremu za JPEG za katikati 1–16, inapunguza
kando ndefu hadi angalau pixels 1,024 bila kuongeza ukubwa wa pembejeo ndogo, na
kamwe haiwezi kupokea URL. Uchukuaji ni `uniform` kwa chaguo-msingi. Sera za hiari
`scene_aware` na za majaribio `segment_aware` zinafanya kupita moja ya ziada ya
FFmpeg juu ya mstream ya ndani iliyothibitishwa, kuchagua alama za wakati za `showinfo` zilizopimwa,
na kurudi kwa uamuzi kwa katikati sawa za kawaida wakati wa kushindwa kwa detector, muda wa mwisho,
matokeo yasiyo sahihi, au seti ya wagombea tupu. Modo ya segment-aware inagawanya sampuli za katikati kwa uwiano na
vipindi vya scene vilivyothibitishwa; ushahidi wa segment-aware na tabia ya kurudi imeelezewa hapa chini. Mipaka ngumu ya fremu 16
inawekwa baada ya uchaguzi katika sera zote. Wakati ombi la scene-aware lina bajeti ya fremu moja tu,
linatumia katikati ya kawaida ya video kamili au dirisha la makini na ripoti `policyEffective: uniform`: fremu moja iliyochaguliwa
haiwezi kuhifadhi pande zote za muda. Mwitishaji anaweza kwa hiari kutoa dirisha la makini
(`start`/`end` sekunde); mipaka inashikiliwa kwa muda wa media, dirisha zilizogeuzwa au zisizo na mwisho zinakataliwa, na sera zote za uchukuaji
zinafanywa tu ndani ya kipindi kilichosawazishwa. Dirisha linalotokana linajumuishwa katika metadata ya uchukuaji na katika
prefix ya maelezo yasiyoaminika ili mifano ya chini iweze kutofautisha excerpt iliyo makini kutoka kwa muda wote.

Mwelekeo wa maandiko ni mipangilio tofauti, wazi. Modo ya uchambuzi ya `full`
inaifadhi ombi la fremu lililopo na kamwe haisambazi maandiko ya ombi kwa mfano wa manukuu. Katika modo ya `focused`,
daraja linakusanya tu `text`/`input_text` ya hivi karibuni isiyo tupu iliyoundwa na mtumiaji kutoka kwenye chombo hicho hicho cha Chat au Responses,
inaisawazisha kwa NFC, inakandamiza wahusika wa kudhibiti na nafasi, na inakomo kwa alama 500 za Unicode. Matokeo yasiyo na kitu yanarudi kwa
ombi la `full` sahihi. Kidokezo kinachoweza kutumika kinahifadhiwa kama JSON katika block maalum ya
muktadha wa mtumiaji asiyeaminika na kinaweza tu kuzingatia maelezo yanayoonekana; hakiwezi kubadilisha onyo tofauti dhidi ya kufuata maagizo yanayoonekana
au kusikika katika media. Mwelekeo wa maandiko kamwe haujifanyii `start`/`end` au kubadilisha
mchambuzi wa muda.

#### FU-07 ushahidi wa sehemu ya muundo

`segment_aware` inatumia kupita moja ya awali iliyo na mipaka juu ya mtiririko wa video wa ndani ambao tayari umethibitishwa. Mnyororo wa chujio wa kudumu kwanza unapanua hadi angalau pikseli 320 pana, kugundua mabadiliko ya scene na vipindi vilivyoganda, kisha unachukua sampuli kwa picha 1 kwa sekunde kwa blur, luma ya wastani, na taarifa za nafasi/nyakati. Pita hii imewekwa mipaka kwa sampuli 600 za muundo, thread moja ya FFmpeg/filter, itifaki na orodha za vyombo vya container zinazoruhusiwa za `file` pekee, mipaka ya pato la mchakato ya 1 MiB, na kwa muda wa sekunde 30 ndani ya muda wa kushiriki wa broker. Haikubali kamwe amri, chujio, njia, au URL kutoka kwa ombi.

Thamani za muundo ni ushahidi wa sampuli zisizobadilika, si uelewa wa video wa kisemantiki. Hazihusishi mada, vitendo, vichwa vya habari, hotuba, au nia ya mtumiaji. Mipaka ya scene na barafu huunda sehemu; kufunika kwa barafu, blur, mwangaza, maelezo ya nafasi, na mabadiliko ya nyakati yanaathiri tu jinsi bajeti ya picha 1–16 ilivyopewa. Sehemu iliyojaa barafu inakabiliwa na picha moja, wakati sehemu zisizojaa barafu zinashindana kwa bajeti iliyobaki. Wakati mipaka inazidi picha, kufunika kwa muda sawa kunahifadhiwa ili kukata mapema haraka haziwezi kuficha sehemu ndefu inayofuata. Mipaka ya scene ndani ya azimio la uchambuzi la sekunde 1 la mipaka ya barafu inachanganywa.

Chujio kilichokosekana, ushahidi usio na umbo/tyupu, kosa la kugundua, au muda wa kukatika kwa awali wa mipaka unashindwa kufunguka kwa sera ya katikati ya kawaida. Kukatishwa kwa mwito au muda wa broker hakufunguki: inamaliza mchakato wa ndani, kuzuia uchimbaji wa picha baadaye, na mti wa muda wa kibinafsi unondolewa katika `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` inazalisha vifaa vya FFmpeg vya kweli vya kisayansi kwa akiba ya wito wa kichwa baada ya kuondoa, ugawaji wa bajeti ya mwendo mzito, ushahidi wa blur/mwangaza/SI-TI, kukata haraka na mkia mrefu, na uongo wa kupungua taratibu. Inarekodi muda wa ukuta wa uchambuzi wa awali na, ambapo `/usr/bin/time` inapatikana, CPU ya mtoto na RSS ya juu. Ukaguzi wake wa ubora ni oracles za muundo pekee. Ubora wa mfano wa kichwa wa kweli unabaki `HOLD` kwa sababu kifaa hiki hakina mwisho ulioidhinishwa au jaji aliyejaa barafu. Akiba ya fedha pia inabaki `HOLD` isipokuwa `--caption-cost-per-call-usd` itoe makadirio ya wazi ya chaji kwa wito; skripti haitengenezi matokeo yoyote.

Kila picha imewekwa mipaka kwa 4 MiB, picha zote mbichi pamoja hadi 23 MiB, na jibu la broker lililosanifishwa hadi 32 MiB. Kadiria ya muda wa kibinafsi inondolewa katika `finally`. OmniRoute haitoi FFmpeg na haitakubali njia ya kutekeleza iliyobinafsishwa. Kabla ya kuweka vichwa vya habari, daraja linafanya kupita kwa uhakika wa kuona: kila JPEG inapunguzwa hadi buffer ya 16×16 ya grayscale na inalinganishwa tu na picha ya mwisho iliyohifadhiwa. Kwa bajeti ya kichwa inayohitajika zaidi ya picha moja, uchimbaji unatoa
mchango wa wagombea wenye mipaka wa hadi mara mbili ya bajeti hiyo na kamwe zaidi ya picha 16. Kiwango kinachohitajika kinatumika tu baada ya kuondoa, huku wagombea wa kwanza na wa mwisho wakihifadhiwa wakati wa kupunguza mwisho wakati bajeti iko angalau mbili. Sera ya
`grayscale-16x16-mean-cells-v2` inatumia kubwa ya delta ya luma ya wastani na uwiano wa seli za thumbnail ambazo delta zao zilizorekebishwa ni angalau 0.05. Kiwango cha nakala ni 0.04, kilichochaguliwa kwa utabiri badala ya kuonyeshwa kama mipangilio ya wakati wa kukimbia. Ishara hii ya pili ya
juu-ya-mwanzo inahifadhi mwendo mdogo na mabadiliko ya maandiko yanayoonekana ambayo kulinganisha kwa wastani pekee yanaweza kuficha. Makosa ya kulinganisha au kufasiri yanashindwa kufunguka na kuhifadhi kufunika. Metadata ya pato inatenganisha wagombea waliochimbwa, picha zilizotumika kwa mafanikio, na nakala za kuona zilizotupwa.

Sehemu ya video iliyoandikwa wazi inaweza kuomba karatasi ya mawasiliano yenye alama ya muda. Daraja linaunda grid ya JPEG ya safu 4, picha 16 kwa kiwango cha juu. Kila seli ya pikseli 512 inachoma alama yake ya muda ya chanzo kwenye bendi ya chini yenye mchanganyiko wa juu, wakati alama hizo hizo zinabaki katika metadata ya maandiko kwa ushirikiano wa chini na ukaguzi. JPEG kamili inabaki na mipaka ya 32 MiB. Ikiwa `sharp` haiwezi kufasiri au kuunda grid, daraja linarudi kwa picha za JPEG za kibinafsi; kukatishwa kwa mteja bado kunasambaza kupitia operesheni ya karatasi.

Ushahidi wa kukuza umewekwa kando kutoka kwa microbenchmark ya muundo wa synthetiki. `scripts/perf/video-bridge-contact-sheet-eval.ts` inafafanua muundo wa A/B wa toleo la schema kwa mifano halisi ya maono yanayofaa OpenAI. Inapima tokens zilizoripotiwa na mtoa huduma, ucheleweshaji wa ukuta wa mwisho-kwa-mwisho (ikiwemo muundo wa karatasi), idadi ya wito wa mfano, na uhifadhi wa ukweli uliofafanuliwa na orodha. Majibu ya mfano mbichi hayandikwi kwenye ripoti; tu SHA-256 digests na vitambulisho vya ukweli vilivyolingana vinahifadhiwa. Kifaa hakifanyi wito wa mtandao au wa mfano wa kulipwa isipokuwa `--execute-real` ipitishwe na `--model`, `OMNIROUTE_BASE_URL`, na `OMNIROUTE_API_KEY` zikiwa zimewekwa. Bila hiyo kukimbia kwa kweli, hukumu yake inayoweza kusomeka na mashine inabaki `HOLD`; vipimo vya mzigo wa synthetiki/idadi ya wito pekee si ushahidi wa kukuza.

`scripts/perf/video-bridge-promotion-eval.ts` inayotenganishwa inatumia FU-07 au FU-09 maoni. Kukubaliwa kwa kukuza kunahitaji aina zote nane za hali za synthetiki pamoja na kipande halisi kilichosafishwa, angalau marudio matatu yaliyopimwa kwa kila jukumu na kesi, vipimo kumi vilivyotangazwa, muundo wa vyombo vya habari vilivyogandishwa/prompt/ukweli unaotarajiwa/mipangilio, vitambulisho vya maoni vya kipekee na mpangilio wa A/B uliothibitishwa. Risiti ya utekelezaji inashikilia digest ya corpus, SHA ya wagombea sahihi na marekebisho ya mfano. Vipimo vilivyokosekana au visivyo sahihi vinabaki `HOLD`, ikiwa ni pamoja na CPU zaidi ya sekunde 30, RSS ya juu zaidi ya 512 MiB au uchambuzi wa awali zaidi ya sekunde 30. Hizi ni mipaka ya kuingia ushahidi, si dhamana mpya ya utekelezaji wa RSS.

FU-07 inahitaji angalau 98% uhifadhi wa ubora na latensi ya p95 isiyozidi 1.2x
misingi, pamoja na kuboresha angalau 0.05 ya kesi iliyosawazishwa ya kati ya
kumbukumbu kwa simu za maelezo sawa, au angalau 10% za chini ya simu za maelezo
za baada ya kuondoa. FU-09 inahitaji angalau 0.85 ubora, 95% uhifadhi, 20% kupunguza
latensi ya p95 na 10% kupunguza tokeni. Kupoteza ukweli muhimu, kufuata sindano au
kutokuwepo kwa matumizi kuna zuia kupandishwa. Utendaji mmoja hauwezi kupandisha
chochote: `--previous-report` inathibitisha utendaji mbili tofauti, zisizopingana,
zinazoendana za sera/model toleo/mgombea/corpus ile ile. Jaribio la sampuli haliwezi
kuhakikisha jaribio la karatasi ya mawasiliano.

Wakusanya wanapaswa kuhesabu majibu katika kumbukumbu na kuhifadhi `responseDigest`
pamoja na vipimo na uhusiano wa uchunguzi, kamwe si maandiko ya majibu. Mtumiaji pia
anapitia uchunguzi wa zamani lakini kamwe haakopi maandiko hayo katika ripoti zake.
Moja tu ya `responseDigest` au `rawResponseText` inakubaliwa kwa kila uchunguzi.
Orodha ya ruhusa iliyotolewa inabaki tupu ikiwa na `hold` isiyobadilika kama chaguo
la msingi. Kichwa kinachostahiki kinahitaji rejeleo lake la ushahidi, sera, toleo la
mfano, SHA sahihi ya mgombea, muhtasari wa digest na IDs mbili tofauti za utendaji;
muktadha unaopingana unakataliwa. Metadata hizi ni mkataba wa ukaguzi, si uthibitisho
kwamba faili iliyorejelewa ina vipimo halisi. Kagua risiti halisi kabla ya kuongeza
kila kichwa. Kituo cha takwimu za usimamizi na dashibodi ya Video vinatoa
valvu ya uhakika. Jina la mfano lililowekwa pekee halijathibitisha toleo lake au
SHA ya mgombea anayekimbia, hivyo ripoti ya sasa ya dashibodi inaripoti `HOLD`
badala ya kutumia ustahiki kutoka kwa muktadha mwingine wa utendaji. Uchaguzi wa
majaribio wazi unabaki tofauti na kupandishwa; hakuna chaguo la msingi linalobadilishwa
automatik.

Wito wanaweza kuambatanisha safu ya hiari ya `transcript.cues` kwa sehemu ya video
iliyoungwa mkono wanapokuwa tayari na maandiko yaliyolingana. Kila kiashiria lazima
kibebe `text`, kipindi cha `start`/`end` ndani ya muda uliochunguzwa, na `source`
iliyoorodheshwa (`client`, `embedded`, au `audio-bridge`); `confidence` inakuwa
`1` na lazima ibaki kati ya `0` na `1`. Viashiria vya nakala halisi vinakandamizwa.
OmniRoute kamwe haianzi uandishi kutoka kwa metadata hii: viashiria vilivyothibitishwa
vinakopiwa katika matokeo yaliyoelezewa pamoja na chanzo, uaminifu, na kipindi, na
vinatolewa kama uchunguzi usioaminika pamoja na maelezo ya fremu. Maandishi yasiyo
halali, yasiyo na mipaka, au yasiyo na asili yanakataliwa badala ya kuchanganywa
katika mtiririko wa maelezo. Makanika ya mwili wa ombi la transcript huweka
asili iliyotolewa kuwa `client`, ikiwa ni pamoja na `embedded` au `audio-bridge`
labels zilizojitolea. Ni adapter inayomilikiwa na seva pekee inayoweza kupeana
lebo hizo za kuaminika kupitia hoja ya `trustedSource` ya msimbo pekee; uwanja wa
ombio la JSON hauwezi kufikia hoja hiyo. Maandishi ya transcript yanabaki kuwa
maudhui yasiyoaminika yanayotokana na vyombo vya habari, bila kujali asili yake,
na kamwe hayapaswi kuamua idhini.

Mwanakitu wa hali ya juu anaweza kutoa wimbo wa `audioTranscript` kwa video hiyo
hiyo; inachukuliwa kama maandiko yaliyotolewa na mteja, si uthibitisho wa uandishi
wa seva. Seam ya fusion inafanya uchunguzi wa kuona na sauti chini ya
tarehe moja na ishara ya kukatisha, inaziweka kwenye muda wa kawaida, inakandamiza
nakala halisi, na inaripoti matokeo ya sehemu wakati upande mmoja tu unafanikiwa.
`audioTranscript` isiyo halali inashuka hadi matokeo hayo ya sehemu — maelezo ya
kuona yanahifadhiwa na tawi la sauti linaandika msimbo wa kushindwa ulio safishwa —
badala ya kushindwa kwa video nzima. Kila tawi la upatikanaji, bendera ya sehemu,
na misimbo ya kushindwa iliyosafishwa inahifadhiwa katika matokeo yaliyoelezewa,
katika metadata ya kingo (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), katika metadata ya cache ya matokeo, na katika
hesabu za fusion ya daraja. Njia ya msingi ya Video Bridge haiwezi kuanzisha
hotuba-kwa-teksti au kupakua nakala ya pili ya vyombo vya habari; bila wimbo huo
wazi, inabaki kuwa video pekee.

**Uhifadhi wa transcript (#12150 P1).** Hii inatumika moja kwa moja kila wakati
Video Bridge (ambayo ni hiari) inatoa kiashiria cha transcript — hakuna bendera ya
uhifadhi tofauti. Wakati ombi linapotoa kiashiria chochote cha transcript (kiashiria
kilichotangazwa na mwito au `audioTranscript` iliyounganishwa), kingo inakadiria
`videoBridgeObserved` na inatoa kivuli kilichofichwa cha maelezo ya video —
uandishi sawa ambapo kila mwili wa kiashiria wa maandiko hufanywa kuwa
`[redacted-video-transcript]`, iliyojengwa kwa kubadilisha uwanja wa kiashiria
kabla ya mfuatano wa maandiko kuundwa (kamwe kwa kuchambua maandiko yaliyopunguzwa,
hivyo hakuna maudhui ya kiashiria — ya uhasama au ya kawaida, ikiwa ni pamoja na
miili inayojumuisha `]` kama vile `[inaudible]`/`[music]` — inaweza kuishi). Mwili wa
ombio wa kumbukumbu uliohifadhiwa unabadilisha kila sehemu ya maandiko inayotokana na
video kwa kivuli hicho kilichofichwa, kilicholingana kwa usawa wa maudhui; kiunganishi
cha `fullText` kinarejeshwa kutoka kwa mzigo wa kingo wa kabla ya wito, hivyo
mshikamano bado unafanikiwa baada ya kingo za mfuatano baadaye (maskers za PII na
vithibitisho, vipaumbele 10/95) kuandika maandiko ya maelezo mahali na
baada ya mfumo wa kuamuru/kuhamasisha/kumbukumbu kuunda upya safu ya ujumbe.
Mwili uliopelekwa juu kwa mfano haujabadilika. Ombi lililoshuhudiwa pia halijaza
kumbukumbu ya kudumu (kila uchimbaji wa ombi na majibu unakosolewa),
hivyo jibu la mfano haliwezi kurudia maandiko ya transcript katika Kumbukumbu.

**Sehemu za video ghafi (#12430).** Wakati daraja linapowekwa na msaada wa video
asili haujulikani au haupo, sehemu zilizofafanuliwa za `transcript`/`audioTranscript`
pia zinaanzisha `videoBridgeObserved`, hata baada ya kushindwa kwa maelezo au
kipimo cha `maxVideos`. `null` na nyuzi tupu zinahesabiwa; sehemu zisizopo na
metadata zisizo za video hazihesabiwi. Nakala zilizohifadhiwa zinafichwa sehemu hizi
au kuacha ombi, na caches/Kumbukumbu zinakosolewa. Mzigo wa mtoa huduma unabaki
kuwa bila mabadiliko.

Zaidi ya nakala zilizohifadhiwa zinatumia ishara ya ombi lililoshuhudiwa. Picha ya ombi la mteja kabla ya ulinzi, ombi lililosubiri kwenye kumbukumbu, na kumbukumbu ya ombi lililokataliwa mapema zinabadilisha kwa muundo sehemu za transcript katika sehemu za video; maelekezo ya maandiko yaliyoundwa na hatua za bomba na uhamisho wa muktadha yanatolewa kwenye sink ya ombi lililohifadhiwa. Alama ya `video_content_removed` iliyohifadhiwa inafanya kuendelea kwa `previous_response_id` kufeli kwa kufungwa badala ya kujenga tena maandiko ambayo yalitengwa kwa makusudi. Ikiwa ombi lililoshuhudiwa linapoteza kivuli cha uondoaji kwa kila sehemu kabla ya kuandika, au hata kivuli kimoja kati ya kadhaa za video kinashindwa kulingana baada ya mabadiliko ya ombi baadaye, mwili wa ombi uliohifadhiwa unachukuliwa kabisa badala ya kuhifadhi transcript iliyokatwa sehemu.

Kwa ombi lililoshuhudiwa, jibu la mfano linaweza kunukuu sehemu yoyote ya transcript bila mpaka wa ishara iliyopangwa. Kumbukumbu yake ya simu iliyohifadhiwa `responseBody` kwa hivyo inabadilishwa na alama ya kutokuwepo; kipande cha bomba kilichofafanuliwa (ambacho kinaweza kujumuisha miili ya mteja/upstream na vipande vya mtiririko) hakihifadhiwi. Kumbukumbu za maana, idempotency, na reasoning-replay zinakwepa kusoma na kuandika kwa ombi hilo. Ombi la mtoa huduma na jibu linaloonekana na mteja yanabaki bila kubadilika. Bytes za kuishi mapema zinatolewa kutoka kwenye buffer ya muda wakati kipande cha kina kinapotolewa. Onyo la Kiro la EventStream lililovunjika lina ripoti tu ya idadi ya byte za payload, kamwe si maudhui yake au makosa ya ghafi ya parser ya JSON. Hii haiwezi kudai kwamba kila uchunguzi wa mtoa huduma/plugin usiohusiana umefanyiwa ukaguzi; kusafisha kwa jumla kwa sink iliyohifadhiwa kunafuatiliwa katika #11658.

Mzunguko wa ndani wa `/api/modality-bridge/video/drilldown` ni substrate tofauti ya cache ya loopback/token-authenticated. Kila operesheni pia inahitaji ID ya msingi isiyo na muundo. Kabla ya mwito wa uzalishaji kuwezeshwa, lazima ipate ID hiyo kutoka kwa mpangaji aliyethibitishwa na haipaswi kamwe kupeleka thamani iliyochaguliwa na mteja. Funguo za cache zinabinda msingi huo kwa ID za kikao cha kawaida na video-referensi, kuhifadhi tu funguo zao zilizotokana na SHA-256, na kuzingatia kusoma na kufuta kwa msingi huo huo. Cache inahifadhi kwa kiwango cha juu cha picha 16 zilizotokana na JPEG kwa kila ingizo, inaziondoa baada ya dakika kumi, na inasaidia kusoma `start`/`end` zilizopangwa au kufuta kikao wazi.

Kila msingi umewekwa mipaka ya ingizo 16 na 64 MiB ya data ya JPEG ya kawaida. Mipaka hiyo haitegemei dari ya kimataifa ya ingizo 64/256 MiB: shinikizo la quota ya msingi linatoa tu ingizo la msingi lililotumika kidogo zaidi kabla ya kufikiriwa kufukuzwa kwa LRU ya kimataifa. Ingizo zilizokwisha muda zinatolewa kutoka kwa hesabu ya msingi na ya kimataifa kwenye shughuli za cache, wakati kufutwa na kushindwa kwa uthibitisho hakufanyi uingizwaji wa sehemu.

Cache inakataa Base64 zisizo za kawaida, padding nyingi, vyombo vya habari visivyo vya JPEG, JPEG zilizo na makosa au zilizokatwa, na JPEG zinazozalisha onyo wakati wa uondoaji wa picha nzima `sharp` ulio na mipaka. Inarejesha kila picha iliyokubaliwa kama JPEG ya kawaida, inapata upana na urefu kutoka kwa bytes zilizotafsiriwa badala ya kutegemea maeneo ya mwito, na inatupa bytes zozote za polyglot zilizobaki badala ya kuziweka. Ni buffer ya kawaida ya kubana iliyohifadhiwa tu ambayo inatozwa kwa quota zote. Kiwango cha waya cha JSON kinajumuisha gharama za Base64 kwa dari ya 32 MiB ya pembejeo iliyotafsiriwa. Kila
kibali kilichohifadhiwa kinarekodi muundo/resolution ya JPEG iliyothibitishwa, sera ya sampuli, toleo la uanzishaji, wakati wa uumbaji, hash ya maudhui iliyohesabiwa na seva, na hash ya rejeleo la mzazi iliyohesabiwa pamoja na hash ya maudhui ya mzazi wa mwito wa kuaminika. Kufutwa kunakaguliwa kati ya hatua za kutafsiri/hash zisizo za wakati mmoja kabla ya kujitolea kwa cache ya atomiki.

Mzalishaji wa uzalishaji anatumia tena picha za broker zilizotokana tayari tu baada ya uchambuzi wa kuona kufanikiwa, bila kupakua/kutoa video ya pili. Inahitaji opereta `modalityBridgeVideoDrilldownEnabled=true`, `drilldown: true` kwa kila sehemu, na ID ya rekodi ya API-key iliyothibitishwa. Thamani za msingi/kikao zilizotangazwa na mteja kamwe hazianzishi umiliki. Bila masharti yote matatu, haiwezi kuhesabu, kubadilisha ukubwa au kuhifadhi picha za ziada. Kushindwa kwa uhifadhi kunahifadhi jibu la kuona linaloweza kutumika. Maombi yaliyokubaliwa yanakwepa cache ya matokeo ya video nzima ili matokeo yaliyohifadhiwa kamwe yasirudie kushughulikia.

Majibu ya JSON na SSE yenye mafanikio yanaonyesha kwa kiwango cha juu handles nne zisizo za kawaida katika kichwa cha `x-omniroute-video-drilldown` kilichopangwa. Misingi ya kivinjari iliyoidhinishwa inaweza kusoma kichwa hicho bila kupanua sera ya asili ya CORS. Handles mpya zinatumia `v1.<32-byte random base64url token>`, na rejista inahifadhi tu
hash zao za SHA-256. Msomaji/parser wa kichwa pia unakubali token za zamani za 64-hex. Mtumiaji wa umma aliyethibitishwa ni
`GET /api/v1/video-bridge/drilldown?handle=...`, inayozuiliwa kwa uhuru na
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Uondoaji wa wazi wa uongo unafuta ufikiaji hata wakati mazingira ya zamani `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` yanapatikana. Uhifadhi wa uzalishaji una mazingira ya zamani sawa ya
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED`. Mipangilio yote ya zamani inakuwa mbali.

Mtumiaji anapata umiliki kutoka kwa funguo iliyothibitishwa, anatumia sera ya funguo, na anarudisha 404 sawa kwa handles zisizojulikana, zilizokwisha muda na funguo nyingine. Inakubali `variant=preview|standard|detail` (ukubwa wa JPEG wa juu 320/640/1280, kamwe haupandishwi), `limit=1..8` (au alias ya zamani `frames`, kamwe si zote mbili), `page` isiyo na msingi, na sekunde za kuzingatia za hiari `start`/`end`. Funguo za maswali za kurudiwa na madirisha ya kuzingatia yaliyogeuzwa yanakataliwa. Kila toleo lililorejeshwa lina hash ya maudhui yake halisi na metadata ya resolution halisi, iliyounganishwa na chanzo kilichohifadhiwa. Mabadiliko yanatokana wakati wa kusoma badala ya kuhifadhiwa kama nakala za ziada zilizohifadhiwa. Jibu la JSON, ikiwa ni pamoja na Base64/envelope, limewekwa mipaka kwa 32 MiB; ukurasa mkubwa unarudisha 413 na mteja lazima aombe picha chache. Kusoma kunakagua kufutwa karibu na kila kubadilisha ukubwa na kuangalia tena uhalali wa handle kabla ya kurudisha. `DELETE` na mmiliki ni idempotent; kufutwa au kuisha kwa TTL kunatoa chanzo kilichohifadhiwa na hesabu ya matumizi.

Duka lililosambazwa ni la mchakato wa ndani: mikono inakoma wakati wa kuanzisha upya na haiwezi kuhamishwa kati ya michakato huru ya OmniRoute. Takwimu za usimamizi zinaonyesha sera ya uhifadhi/mbali inayofaa na kujumlisha entries/bytes zilizohifadhiwa pekee, kamwe si vyombo vya habari, marejeleo, IDs za msingi au mikono. Paneli ya mipangilio ya Video inaonyesha thamani hizo na inaweza kudumisha swichi za ridhaa zote. Hati hii ya utekelezaji si uthibitisho wa kutekeleza moja kwa moja au kukuza; kukubaliwa kwa mfano halisi kunafuatiliwa tofauti.

Mifano inapata maandiko kwa mpangilio na mfano wa Video uliowekwa. Kifungo cha Video kisichokuwa na kitu kinapata mipangilio ya Vision; ikiwa zote mbili hazina kitu, auto-router ya Vision inachagua mfano unaoweza kuona. Maandishi yaliyofanikiwa yanachukua sehemu ya asili na prefix thabiti `[Video description:` ambayo pia inaashiria maandiko kama uchunguzi usioaminika wa vyombo vya habari na inawaambia mifano ya chini wasifuatilie maagizo yaliyopatikana katika vyombo vya habari. Funguo za cache za maandiko ya mifano zinajumuisha bytes za JPEG, ombi, muda, na mfano unaofaa; ni maandiko yaliyofanikiwa pekee yanayohifadhiwa. Kuingia kwenye cache kunahifadhi mfano halisi wa mtengenezaji aliyefaulu, ikiwa ni pamoja na mfano wa akiba; daraja lina ripoti `mixed` wakati mifano tofauti ilitengenezwa na mifano tofauti. Hitilafu ya cache inatumia utambulisho wa mtengenezaji badala ya kuupatia jina jipya kama mpango wa urambazaji ulioombwa. Cache ya matokeo ya video nzima imefungwa kwenye kila ingizo linalobadilisha matokeo — ombi, mfano unaofaa, sera ya sampuli, idadi ya mifano, hali ya uchambuzi wa semantiki, fingerprint ya SHA-256 ya kidokezo kilichonormalized, dirisha la kuzingatia, `transcript`, `audioTranscript`, na bendera ya contact-sheet — hivyo kubadilisha yoyote ya vipimo hivyo ni hitilafu ya cache, kamwe si matumizi ya zamani. Toleo la sera ya kudhibiti picha linaweza, kigezo, na idadi ya mifano ya mgombea iliyowekwa pia ni wazi katika funguo za cache ya matokeo na metadata; hivyo, mabadiliko ya sera hayawezi kutumia maelezo ya zamani ya video nzima. Metadata ya cache ya matokeo v4 inahifadhi hali na fingerprint, kamwe si kazi halisi ya mtumiaji. Metadata ya guardrail inaripoti hali zote za uchambuzi zilizohitajika na zinazofaa; hali ya `focused` iliyohitajika bila maandiko ya mtumiaji yanayoweza kutumika inaripotiwa kama `full` kwa ufanisi.

Guardrail inatoa kila sehemu ya video inayoungwa mkono lakini inaelezea zaidi ya `modalityBridgeVideoMaxVideos`. Kwa lengo lililo thibitishwa kuwa `supportsVideo === false`, video zilizoshindwa na zile zilizozidi mipaka zinakuwa alama za maandiko salama ili hakuna video halisi inayosalia. Wakati uwezo haujulikani, sehemu hizo zinabaki bila kuguswa. Malengo yenye `supportsVideo === true` yanapita daraja. Ishara ya kuacha ombi la mteja inasambazwa kupitia upakuaji, foleni ya broker, michakato ya chini, na simu za maandiko; kuacha kunasimama kati ya video na kamwe hakufeli wazi kwa vyombo vya habari halisi.

Mipangilio ya wakati wa kukimbia inategemea DB na kuthibitishwa na Zod:

| Funguo                              | Kiwango cha Kawaida | Mipango / tabia                                                                                             |
| ----------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`             | Muda wa kukimbia wa hiari, chaguo la kujiunga                                                               |
| `modalityBridgeVideoAnalysisMode`   | `"full"`            | `full` inahifadhi maandiko ya jumla; `focused` inatumia muktadha wa mtumiaji wa hivi karibuni usioaminika   |
| `modalityBridgeVideoModel`          | `""`                | Inherit mfano wa Vision Bridge                                                                              |
| `modalityBridgeVideoFrameCount`     | `8`                 | 1–16                                                                                                        |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`         | `uniform`, `scene_aware`, au `segment_aware` ya uwiano; kushindwa kwa detector kunarudi nyuma kwa `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`                 | 1–4                                                                                                         |
| `modalityBridgeVideoTimeout`        | `120000`            | 1000–120000 ms                                                                                              |

Thamani za zamani za muda wa Video zilizohifadhiwa juu ya sekunde 120 zinakamatwa kwa muda wa mwisho wa broker; maandiko mapya juu ya mipaka hiyo yanakataliwa. `GET /api/modality-bridge/video/runtime` inahitaji eneo la loopback lililo na muhuri wa kuaminika kabla ya uthibitishaji au uchunguzi wa wakati wa kukimbia, kisha inahitaji uthibitisho wa usimamizi. Inarudisha tu `available`, toleo la FFmpeg/ffprobe lililosafishwa, na sababu thabiti wakati wa wakati wa kukimbia haupatikani. Kituo cha ndani cha uchimbaji si API ya kupakia ya umma: kujaa kwa foleni kunarudisha `503` pamoja na `Retry-After`, kutenganisha kwa mpiga simu kunarudisha `499`, na muda wa mwisho wa broker unarudisha `504`. Majibu yaliyobadilishwa yanaongeza `video->text;model=<visionModel>;parts=<videos>` kwenye kichwa cha kati `x-omniroute-modality-bridge` bila kuondoa sehemu za Vision au Audio.

### PII Masker (`piiMasker.ts`)

Inafanya kazi kwenye **michakato yote**.

- **`preCall`** inakopi payload, inatembea `system`, `messages`, `input`, na `prompt` (ikiwemo vitu vya maandiko safi), na inatumia `processPII()` (kutoka `@/shared/utils/inputSanitizer`) kwa nyanja za maandiko `content`/`text`. Wakati `PII_REDACTION_ENABLED=true`, PII iliyogundulika inafichwa katika payload ya nje. Hii ni huru na `INPUT_SANITIZER_MODE` (ambayo inasimamia sera ya kuingiza ombi tu). Wakati kufichwa kuna mbali, simu inarekodi idadi za kugundua bila kuandika upya maudhui.
- **`postCall`** inakopi kwa undani jibu, inafanya kazi `sanitizePIIResponse()` pamoja na masker ya muundo wa Responses-API (`maskResponsesOutput` — inashughulikia `output_text` na `output[].content[].text`). Ikiwa kufichwa kutatokea, jibu lililobadilishwa linachukua nafasi ya asili.

Guardrail kamwe haizuizi; inachora tu (`meta.detections`, `meta.redacted`) au kuandika upya.

### Prompt Injection (`promptInjection.ts`)

Hugundua muundo wa uhasama katika maudhui yaliyotolewa na mtumiaji na kutekeleza sera iliyowekwa. Tabia inasababishwa na mabadiliko ya mazingira na chaguzi za mjenzi:

| Mpangilio          | Mabadiliko ya mazingira                                                                                  | Kawaida | Athari                                                                                                                                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Iliyowezeshwa      | `INPUT_SANITIZER_ENABLED`                                                                                | `true`  | Wakati `false`, guardrail inakata.                                                                                                                                                                      |
| Njia               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                          | `warn`  | Sera ya kuingiza: `block`, `warn`, au `log`. (`redact` inakubaliwa kwa ajili ya urahisi wa nyuma lakini haisafishi maandiko ya kuingiza; ombi la PII rewrite linadhibitiwa na `PII_REDACTION_ENABLED`.) |
| Kiwango cha kuzuia | Chaguo la `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Kiwango cha chini kinachohitajika kuzuia. Kati ni kuangalia tu kwa kawaida.                                                                                                                             |

**Kipaumbele cha Njia** (`getMode`): mwitishaji `options.mode` →
`INJECTION_GUARD_MODE` **DB feature-flag override** (Dashibodi → Mipangilio →
Bendera za Kipengele) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Hivyo, urekebishaji wa dashibodi unashinda bendera za mazingira, hivyo UI ya Bendera za Kipengele inasimamia guard inayofanya kazi moja kwa moja (hakuna upya). Usomaji wa DB ni wa usalama:
ikiwa kuna hitilafu, guard inarudi kwenye tabia ya mazingira, na wakati hakuna
urekebishaji uliowekwa tabia ni sawa na ufumbuzi wa mazingira pekee.

Vyanzo vya kugundua:

1. `sanitizeRequest()` kutoka `@/shared/utils/inputSanitizer` (kigundua kilichoshirikiwa
   kinachotumika mahali pengine katika mchakato).
2. `DEFAULT_GUARD_PATTERNS` iliyojengwa ndani (sasa `system_override_inline` na
   `markdown_system_block`, zote zikiwa na kiwango cha `high`).
3. Chaguo la ziada `customPatterns` linalopitishwa kupitia chaguzi za mjenzi (nyuzi, regex,
   au `{ name, pattern, severity }` rekodi).

Wakati `mode === "block"` **na** angalau kugundua moja inakidhi kiwango
cha kuzuia, `preCall` inarudisha `{ block: true, message: "Ombi limekataliwa:
maudhui ya kutatanisha yamegunduliwa" }`. Katika hali za `warn`/`log` guardrail
inaandika lakini inaruhusu wito. Msaidizi wa pamoja `evaluatePromptInjection()`
pia unapelekwa kwa wito ambao unahitaji kutathmini maelekezo bila kupitia
orodha.

**Scan bound (v3.8.20):** kigundua kinachunguza tu **KB 16 za kwanza** za
maandishi ya pamoja — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes)
katika `src/shared/utils/inputSanitizer.ts`. Wote `detectInjection()` na
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` kabla ya
kuendesha mzunguko wa muundo. Maelekezo ya kuingiza yako karibu na kilele
cha ingizo, hivyo hii inakata CPU/GC ya regex kwenye mzigo wa multi-hundred-KB
bila kudhoofisha kugundua (cf. #3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Inafanya kazi kwenye **hatua zote** mbili, ya mwisho katika mnyororo wa kawaida
(kipaumbele `95`). Inasafisha muundo wa API-key / secret-token unaojulikana
kutoka kwa mzigo wa nje (maudhui ya ujumbe, hoja za wito wa chombo, matokeo ya
chombo) **na** jibu la mtoa huduma, hivyo akidi iliyowekwa kwenye maelekezo
(au iliyorejeshwa na matokeo ya chombo) haiwezi kuvuja kwa mtoa huduma wa
juu au kurudi kwa mteja.

- **Opt-in tu**, kanuni sawa na uondoaji wa PII (Sheria Ngumu #20-iliyokaribu):
  imezimwa isipokuwa `settings.credentialRedactionEnabled === true` **au**
  `CREDENTIAL_REDACTION_ENABLED=true`. Ikiwa imezimwa, guardrail ni no-op —
  haiwahi kuzuia na kamwe haisafishi.
- `redactCredentials()` inatembea kwenye mzigo/jibu kamili (`walkValue()`,
  salama ya prototype-pollution, salama ya mzunguko kupitia `WeakSet`) na
  inabadilisha mechi na
  `[REDACTED:<type>]` kipande cha nafasi, ikikopi tu matawi ambayo
  kwa kweli yamebadilika.
- `CREDENTIAL_PATTERNS` inashughulikia funguo za mtoa huduma wa LLM
  (OpenAI, OpenAI-proj, Anthropic, Google, Hugging Face, Replicate),
  tokens za VCS/SaaS (GitHub, Slack, Linear, Notion, npm, Postman, Discord),
  funguo za malipo (Stripe, Square), funguo za wingu (funguo za ufikiaji wa
  AWS, Twilio, SendGrid, Mailgun), funguo za faragha / JWTs,
  nyuzi za muunganisho zenye akidi (`mongodb://user:pass@...`, nk.), na
  muundo wa jumla wa kichwa `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Funguo za umbo la kichwa (`authorization`, `x-api-key`, `api-key`,
  `apikey`) zinarekebishwa kimuundo (thamani tu, mpango wa awali kama
  `Bearer `/`Basic ` inahifadhiwa) badala ya kupitia regex ya maandiko ya jumla.
- Guardrail kamwe haizuia; inarekebisha tu (`modifiedPayload` /
  `modifiedResponse`) na kuandika (`meta.credentialsRedacted`, `meta.count`).

Ulinzi wa kurudi nyuma: `tests/unit/credential-masker-guardrail.test.ts`.

## Mkataba wa Msingi (`base.ts`)

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
  block?: boolean; // true husitisha mnyororo mara moja
  message?: string; // huonyeshwa wakati wa kuzuia
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // hurejeshwa na preCall ili kuandika upya ombi
  modifiedResponse?: TValue; // hurejeshwa na postCall ili kuandika upya jibu
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

Kizuizi huashiria "hakuna mabadiliko" kwa kurejesha mojawapo ya `void`, `{}`, au
`{ block: false }`. Kurejesha `modifiedPayload`/`modifiedResponse` hubadilisha
thamani inayopita kwenye mnyororo kwenda kwenye vizuizi vinavyofuata.
`signal?: AbortSignal` hubeba mzunguko wa maisha wa mpigaji hadi kwenye vizuizi. Kughairi ombi ni hali maalumu ya kimakusudi ya kuendelea licha ya hitilafu: madaraja ya midia husimamisha kazi na kufanya usafishaji bila kurejesha midia ghafi kwa lengo linalojulikana kuwa halitumii muundo huo.

## Sajili (`registry.ts`)

`guardrailRegistry` ya singleton hutoa:

- `register(guardrail)` — huongeza kizuizi (au kukibadilisha kulingana na jina lililosawazishwa) na
  kupanga upya kwa `priority` ya kupanda.
- `clear()` / `list()` — zana saidizi za usimamizi.
- `runPreCallHooks(payload, context)` — hupitia vizuizi amilifu, hupitisha
  payload kupitia `modifiedPayload`, na kusimama inapokutana na `block: true` ya kwanza.
- `runPostCallHooks(response, context)` — mtiririko huohuo upande wa jibu.
- `resetGuardrailsForTests({ registerDefaults })` — hufuta hali na kwa hiari
  kusajili upya chaguo-msingi ili kutenga majaribio kwa usafi.

Viendeshaji vyote viwili hurejesha `{ blocked, payload|response, results, guardrail?, message? }`
ambapo `results` ni safu ya rekodi za `GuardrailExecutionResult` zinazojumuisha
sehemu za `blocked`, `skipped`, `modified`, `error`, na `meta` kwa kila kizuizi,
ambazo ni muhimu kwa ufuatiliaji.

### Kuzima Vizuizi kwa Kila Ombi

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` hukusanya orodha
isiyorudiwa ya majina ya vizuizi ambavyo vinapaswa kurukwa kwa ombi la sasa.
Vyanzo (vyote ni vya hiari, vyote vinaunganishwa):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` katika mwili wa ombi (kiwango cha juu)
- `metadata.disabledGuardrails` katika mwili wa ombi
- Kichwa `x-omniroute-disabled-guardrails` (au cha zamani
  `x-disabled-guardrails`)

Thamani zinaweza kuwa safu za mifuatano au mfuatano uliotenganishwa kwa koma; majina
husawazishwa kuwa herufi ndogo za kebab-case (`pii_masker` → `pii-masker`). Tokeo
hupitishwa kupitia `context.disabledGuardrails` hadi kwenye sajili, ambayo huruka
vizuizi vinavyolingana (`skipped: true` katika `results`).

## Mpangilio wa Utekelezaji

Kwa kila ombi linalopitia `src/sse/handlers/chat.ts` na
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` huunda orodha ya kurukwa kutokana na ufunguo wa API, mwili wa ombi,
   na vichwa.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` huendesha vizuizi kwa mpangilio wa kipaumbele
   kuanzia cha chini kwenda juu:
   - Vizuizi vilivyozimwa hurekodiwa kama `skipped`.
   - `preCall` ya kila kizuizi inaweza kuandika upya data ya ombi kupitia `modifiedPayload`.
   - `block: true` ya kwanza husitisha mfuatano mara moja na kishughulikiaji hurejesha
     jibu la kukataliwa na kizuizi.
3. Data ya ombi (ambayo huenda imeandikwa upya) hupelekwa kwenye uelekezaji wa mchanganyiko na
   utumaji kwa huduma ya juu.
4. Baada ya jibu kuundwa, `guardrailRegistry.runPostCallHooks(...)`
   huendesha mfuatano huo huo kwenye jibu. `block: true` hapa huondoa jibu la
   huduma ya juu.

Vizuizi vinavyotupa hitilafu hurekodiwa kwa `error: <message>` na kuandikwa kwenye kumbukumbu kupitia
`logger.warn`, lakini mfuatano huendelea — kwa muundo, mfumo huruhusu ombi kuendelea hitilafu ikitokea.

## Usanidi

Vigeu vya mazingira vinavyosomwa na vizuizi vilivyojengewa ndani:

| Kigeu                                 | Kinachokitumia            | Athari                                                                                                                                     |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Weka `false` ili kuzima utambuzi kabisa.                                                                                                   |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Sera ya udungaji: `warn`, `block`, au `log`. Thamani ya zamani `redact` haiandiki upya maandishi ya udungaji.                              |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Hali ya kizuizi cha udungaji; pia ni alama ya kipengele katika DB ambayo **hupuuza na kuchukua nafasi ya** vigeu vya mazingira (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Kiwango cha chini cha ukali kinachokataliwa na `MODE=block`: `high` (chaguo-msingi), `medium`, au `low`.                                   |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Jina mbadala la zamani la `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Ikiwa `true`, PII katika ombi hufichwa (bila kutegemea hali ya udungaji).                                                                  |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Hudhibiti tabia ya kifichaji kwenye upande wa jibu.                                                                                        |

Vizuizi vya Modality Bridge husoma usanidi wa wakati wa utekelezaji kutoka kwenye hifadhi ya mipangilio
inayotegemea DB (`getSettings()`), si vigeu vya mazingira. Funguo kuu za Vision ni
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, na
`modalityBridgeCacheMaxEntries`. Funguo za zamani za
`visionBridge*` zinakubaliwa tu kama mbadala wa usomaji wa mzunguko mmoja ulioandikwa
kwenye nyaraka; uandishi kutoka dashibodi hutumia funguo kuu. Chaguo-msingi na kitatuzi cha mbadala
vinapatikana katika `src/shared/constants/modalityBridgeDefaults.ts`, huku konstanti za zamani
zikihifadhiwa katika `src/shared/constants/visionBridgeDefaults.ts`.

Sauti hutumia `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, na `modalityBridgeAudioMaxClips`, pamoja na mipangilio ya pamoja ya
`modalityBridgeCache*`. Sauti haina mbadala wa funguo za zamani kwa sababu funguo hizi
zilianzishwa pamoja na skima ya Modality Bridge.

Video hutumia `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, na
`modalityBridgeVideoTimeout`, pamoja na mipangilio ya pamoja ya `modalityBridgeCache*`.
Imezimwa kwa chaguo-msingi kwa sababu FFmpeg/ffprobe ni vitegemezi vya hiari vya
uendeshaji, na uundaji wa maelezo ya fremu huongeza muda wa kusubiri na gharama ya modeli.

## Vizuizi Maalum

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

Hatua:

1. Unda `src/lib/guardrails/myGuardrail.ts` inayopanua `BaseGuardrail`.
2. Tekeleza `preCall` na/au `postCall`.
3. Ama isajili wakati wa kuingiza (isukume kutoka `registerDefaultGuardrails`) au
   uite `guardrailRegistry.register(...)` wakati wa utekelezaji — sajili hubadilisha
   kizuizi chochote cha awali chenye jina lilelile lililosawazishwa.
4. Ongeza majaribio chini ya `tests/unit/` (mifano iliyopo:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Majaribio

Tumia `resetGuardrailsForTests()` kati ya majaribio ili kuanza kutoka hali inayojulikana.
Pitisha `{ registerDefaults: false }` ili kuanza na sajili tupu na
kusajili tu vizuizi vinavyojaribiwa. Vision Bridge inakubali uingizaji wa vitegemezi
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge hutoa sehemu
sawa za mipangilio, uwezo, uteuzi wa modeli ya STT, ukaguzi wa vitambulisho,
na unukuzi. Kwa hivyo, majaribio yanaweza kutekeleza mitiririko yote miwili bila ufikiaji wa DB
au mtandao.

## Angalia Pia

- `src/lib/guardrails/` — utekelezaji
- `src/shared/utils/inputSanitizer.ts` — kigunduzi kinachoshirikiwa kinachowezesha
  ugunduzi wa udukuzi wa prompt na ufichaji wa PII
- `src/shared/constants/visionBridgeDefaults.ts` — chaguomsingi za Vision Bridge na
  orodha ya modeli zinazolazimishwa kutumia bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — chaguomsingi za pamoja za wakati wa utekelezaji za Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — safu huru (kivunja mzunguko, vipindi vya kusubiri)
- `docs/reference/ENVIRONMENT.md` — rejeleo kamili la vigeu vya mazingira

## Ufikivu wa njia wa kizuizi cha udukuzi na red-team (Awamu ya 8 · Sehemu D)

Kizuizi cha udukuzi (`createInjectionGuard` / `withInjectionGuard`) kinashughulikia njia zote
zinazokubali prompt za watumiaji. Kinaheshimu `INJECTION_GUARD_MODE` (chaguomsingi `warn` = kumbukumbu pekee;
`block` = hurudisha HTTP 400 `SECURITY_001`).

| Aina                 | Njia                                                                                                                                                 | Hali chaguomsingi |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Maandishi (zilizopo) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn              |
| Uzalishaji           | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn              |
| Data                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn              |

Uchimbaji wa maandishi (`extractMessageContents`) hushughulikia `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (kila usiku, `nightly-llm-security.yml`):** promptfoo huthibitisha kuwa kila njia huzuia
mkusanyiko wa OWASP-LLM katika `INJECTION_GUARD_MODE=block`; garak huendesha uchunguzi (huruka bila siri).
`moderations` imejumuishwa kwa ajili ya uthabiti — waendeshaji katika hali ya kuzuia wanaweza kuiondoa kupitia
`resolveDisabledGuardrails`.

Mtiririko wa kazi wa kila usiku (`.github/workflows/nightly-llm-security.yml`, cron + uanzishaji wa
mkono) una kazi mbili:

- **`promptfoo-guard` (inayozuia)** — huendesha `promptfoo eval -c promptfooconfig.yaml`
  pamoja na `INJECTION_GUARD_MODE=block`. Kila tukio hasidi (k.m. "puuza
  maagizo yote ya awali…", uvunjaji wa vizuizi wa mtindo wa DAN) huhakikisha kuwa jibu lina
  `error.code === "SECURITY_001"`, yaani, kizuizi kilikataa ombi hilo kwa hakika.
- **`garak` (ya ushauri)** — huendesha garak `--probes promptinject,dan,leakreplay`
  dhidi ya instansi ya ndani ya OmniRoute (`http://localhost:20128/v1`). Hudhibitiwa na
  siri ya mtoa huduma (`PROMPTFOO_PROVIDER_KEY`); huruka kwa utaratibu bila hitilafu na huongezewa
  `|| true`, kwa hivyo huripoti bila kusababisha CI ishindwe.

Ufikivu wa kisaidizi cha kizuizi (`createInjectionGuard` / `withInjectionGuard`)
unahusisha kila njia ya `/v1` yenye prompt; maandishi ya prompt huchukuliwa kutoka
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` na
`extractMessageContents()` katika `src/shared/utils/inputSanitizer.ts`.
