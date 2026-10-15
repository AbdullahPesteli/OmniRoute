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

## Mambo ya Ndani ya Ulinzi

Rejista inajaza kiotomatiki ulinzi sita kwa mpangilio wa kipaumbele wakati wa kuagiza
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

### Bridge ya Maono (`visionBridge.ts`) — Modality Bridge PR-1

Inakabili maombi yanayoleta picha yanayolenga **mfano usio na maono** na ama
kupeleka ombi lote kwa mfano unaoweza kuona au kubadilisha sehemu za picha
na maelezo ya maandiko yanayozalishwa na mfano wa maono unaoweza kubadilishwa kabla
ya wito wa juu. Hii inawawezesha watoa huduma wa maandiko pekee kushughulikia
mifuko ya multimodal kwa uwazi.

Mchakato:

1. Punguza ikiwa mfano wa lengo tayari unasaidia maono (isipokuwa inapoonekana kwenye
   orodha ya kulazimishwa `isVisionBridgeForcedModel`).
2. Toa sehemu za picha kupitia `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ambayo inapeleka kwa **mchambuzi wa vyombo vya habari
   uliounganishwa** `detectMediaParts()` katika `open-sse/utils/mediaParts.ts` —
   chanzo kimoja cha ukweli kinachoshirikiwa na chujio cha ulinganifu wa combo.
   Utoaji umeorodheshwa kwa sehemu za juu za umbo
   `replaceImageParts` zinaweza kuunganishwa tena (mkataba wa extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, na Responses API `input_image`. Picha zilizozungukwa na
   umbo la kiashiria pekee ni vifaa vya chujio vya combo na hazitolewi kamwe.
   Punguza ikiwa hakuna iliyopatikana.
3. Pata mipangilio ya wakati wa kukimbia kupitia `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): funguo mpya za mipangilio ya `modalityBridge*`
   zinashinda; funguo za zamani za `visionBridge*` zinabaki kuwa **mkurugenzi wa mzunguko mmoja**
   (dirisha la kurudi nyuma). Punguza kabla ya kusafiri kwa vyombo vya habari wakati
   daraja limezuiliwa.
4. Mchaguzi wa hali (`modalityBridgeVisionMode`, tazama jedwali hapa chini) unamua
   kupeleka tena dhidi ya kuelezea. Kupeleka tena kunarudisha `modifiedPayload` na tu `model`
   iliyobadilishwa, pamoja na meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Njia ya kuelezea: punguza picha hadi `maxImages`, tengeneza ombi linalojua kazi,
   angalia cache ya kuelezea, piga simu kwa mfano wa maono **kwa sambamba**
   (`Promise.allSettled`), na ingiza sehemu za maandiko `[Image N]: <description>` mahali pake. Kuelezea
   kunashindwa kunatoa `null` na sehemu ya picha ya asili inabaki **ilindwe** (#4012) — isipokuwa kwenye njia ya kuelezea ya combo wakati kila
   kuelezea kumeshindwa, ambapo mwelekeo wa juu usio na maono unapata
   `(unavailable — no vision-capable provider connected)` stub badala yake (#8430).
6. Rudisha `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Mchaguzi wa hali (`modalityBridgeVisionMode`)

| Hali       | Kawaida | Tabia                                                                                                                                                                                                                                                                   |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Heuristics za zamani, zisizoguswa (#6640/#7204): mifano isiyo ya combo/`auto/` inapeleka kwa mfano bora wa maono isipokuwa mfano wa asili tayari una akreditivu zinazoweza kutumika (kisha kuelezea); malengo ya combo daima yanaelezea.                                |
| `describe` |         | Daima kuelezea — kizuizi cha kupeleka tena kinakosolewa kabisa; mfano uliochaguliwa na mtumiaji daima unajibu.                                                                                                                                                          |
| `reroute`  |         | Lazimisha kupeleka tena: kizuizi cha mfano wa akreditivu kinapita. Kizuizi cha akreditivu cha **lengo** bado kinatumika — wakati hakuna lengo la maono linaloweza kutumika, ombi linaanguka kuelezea ili picha mbichi zisiweze kufikia nyuma ya maandiko pekee (#8430). |

Hali zilizolazimishwa zinafanya kazi **kabla** ya heuristics ya auto kuendesha; tabia ya `auto`
ni sawa na ile ya ulinzi wa kabla ya PR-1.

#### Mipaka ya ufunguo wa API (`visionBridgeKeyScope.ts`)

Wakati ufunguo wa API wa mpiga simu unakabili `allowedConnections`, mizunguko ya quota
(`allowedQuotas`) au mifano (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), daraja linaweza kuchagua tu mifano ya kupeleka tena na kuelezea ambazo ufunguo unaweza kutumia, kwenye mizunguko ambazo ufunguo unaweza
kutumia. Wito wa kuelezea kisha daima hupita kupitia mzunguko wa ndani wa OmniRoute na
kichwa `x-omniroute-self-loop-key-id`, hivyo ombi la mazungumzo linalopokea
linatekeleza sera ya uhusiano na mfano wa ufunguo huo tena. `enforceApiKeyPolicy()`
inaheshimu kichwa hicho tu pamoja na mpelezi wa mzunguko wa ndani, hivyo inaweza tu
kupunguza ufikiaji, na kitambulisho ambacho hakitatatuliwa kinakataliwa.

Ikiwa hakuna mfano wa maono unaruhusiwa kwa ufunguo, njia ya kuelezea inajiondoa na
ombile linaendelea bila kubadilika, tabia sawa ya kufeli-kufungua kama ulinzi uliozuiliwa (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Maombi bila ufunguo, na funguo zisizo na vizuizi hivi, zinafanya kazi kama
ilivyokuwa awali.

#### Maelezo ya ombi linalojua kazi (`modalityBridgeVisionTaskAware`)

Default **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) inaongeza
maandishi ya **ujumbe wa mwisho wa mtumiaji** (iliyopunguzwa hadi herufi 500) kwenye msingi
wa maelezo, ikielekeza maelezo kuelekea kile mtumiaji alichouliza
(mfumo wa codex-vision-proxy) na kuomba mfano wa maono kuandika maandiko
yanayoonekana. Ikiwa bendera imezimwa — au hakuna maandiko ya mtumiaji — msingi
wa maelezo unatumika bila kubadilishwa.

Ombi la mzunguko wa kujieleza la OpenAI-linalofaa (`callVisionModelSingle()`
katika `visionBridgeHelpers.ts`) kila wakati linaomba `image_url.detail: "high"` —
bila masharti, kwa kila mpiga simu/mtoa huduma, bila kufungwa na ishara yoyote ya mteja.
Sampling ya maelezo ya chini inaharibu usahihi wa OCR kwa kazi halisi ya
kuandika maandiko ambayo ombi hili linaomba, hivyo ombi la kujieleza lenyewe kila wakati linaomba maelezo ya juu bila kujali kiwango cha maelezo ambacho ombi la awali lilitumika. Hii inahusisha tu mwili wa ombi la ndani la kujieleza; haibadilishi jinsi
OmniRoute inavyosambaza `image_url.detail` ya mpiga simu kwenye ombi kuu —
ile default inatumika tofauti, na kwa wateja wa OpenCode waliogundulika tu, katika
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Tawi la muundo wa waya la
Anthropic la mzunguko wa kujieleza halina uwanja wa `detail` na haliguswi na default yoyote.

#### Kiwango cha maelezo ya kujieleza (`modalityBridgeVisionMaxChars`)

| Funguo                         | Default | Muktadha         |
| ------------------------------ | ------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`     | `0` au 100–50000 |

`0` (default) inamaanisha **hakuna kikomo** — maelezo yanayorejeshwa na
`callVisionModel()` yanapitishwa bila kubadilishwa, yakihifadhi tabia iliyopo. Thamani yoyote katika muktadha wa 100–50000 inakata maelezo kwa
suffix ya `…` kabla ya kuunganishwa tena kama `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` katika `src/lib/guardrails/visionBridge.ts`).
Pandisha hii kwa kazi za OCR zenye maelezo mengi ambapo mfano wa chini unahitaji
kuandika kamili; ipunguze ili kudhibiti matumizi ya token kwenye mifano ya maono yenye mazungumzo.
Sehemu ya dashibodi ipo kwenye paneli ya Advanced ya tab ya Vision
(`modality-bridge-max-chars` katika `ModalityBridgeVisionTab.tsx`) na inakata
thamani yoyote kati ya 1 na 99 hadi sakafu ya 100 huku ikiacha `0`
iliyowekwa wazi bila kuguswa — `0` ni thamani halali ya Zod kwa njia yake
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), sio tu
default ya "haijapangwa".

#### Kumbukumbu ya kujieleza (`modalityBridge/bridgeCache.ts`)

Kumbukumbu ya LRU + TTL katika kumbukumbu kwa maelezo ya kujieleza, inayoshirikiwa
kote katika mchakato. Funguo = `sha256(imageRef + composedPrompt + configuredBridgeModel)` yenye
ufunguo wa urefu (hakuna migongano ya mipaka ya uwanja). Sehemu ya mfano ni
mfano wa **iliyopangwa** wa daraja, sio mfano ambao kwa kweli umejibu —
`callVisionModel` inaweza kurudi nyuma ndani, na kufungia kwa kila jaribio kutavunja
kumbukumbu. Maelezo yaliyoshindwa hayahifadhiwi kamwe. Mipangilio:

| Funguo                          | Default | Muktadha |
| ------------------------------- | ------- | -------- |
| `modalityBridgeCacheEnabled`    | `true`  | —        |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440   |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000  |

#### Kurekebisha picha za mbali (mzunguko wa kujieleza/kuleta base64)

Wakati daraja linapofanya utafutaji wa picha **za mbali** — ombi la kujieleza la
Anthropic na mabadiliko ya muundo wa waya wa claude wa base64
(`ensureBase64ImagesForClaudeWire`), zote kupitia
`fetchRemoteImageAsDataUri()` katika `visionBridgeHelpers.ts` — URI ya data inayopatikana
inapitishwa kupitia `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) kabla ya kuingizwa katika ombi la mfano wa maono.
Picha kubwa zinapunguzwa hadi **mipaka ya 2048px** (inayoendana na kikomo cha
kurekebisha ambacho OpenAI/Anthropic tayari wanatumia upande wa seva), ambayo inapunguza
bytes za kupakia/kuchelewesha bila kubadilisha kile mfano wa maono unaona. Kurekebisha
kunatumia `sharp`, iliyopakiwa kupitia uagizaji wa dynamic: kwenye jukwaa ambapo
binary yake asilia inashindwa kupakia, `normalizeDataUri()` **kamwe haitatupa** —
inaangukia kwenye kupitisha bytes za asili, hivyo njia ya kujieleza/mabadiliko ya base64
kila wakati inabaki ikifanya kazi. Bytes zisizo za picha (ufutaji ambao haukurudisha picha
iliyoweza kufafanuliwa) pia zinapitishwa bila kuguswa. Kurekebisha hii
kunaelekezwa kwa picha ambazo daraja linazipata kwa ombi lake mwenyewe — haitumiki
kamwe kwa mzigo wa kupitisha wa mpiga simu, kulingana na kanuni ya mabadiliko ya
kujiunga pekee (Sheria Ngumu #20).

#### Muundo wa mipangilio + uhamasishaji

Funguo mpya za `modalityBridge*` zinathibitishwa na Zod katika `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio ya `modalityBridgeCache*`, na
kikundi cha `modalityBridgeAudio*` kinachotumiwa na Daraja la Sauti. Uhamasishaji
`141_modality_bridge_settings.sql` unakopya thamani za zamani za
`visionBridge*` kwa funguo mpya zinazolingana (idempotent, kamwe haifutii
thamani ya `modalityBridge*` iliyowekwa na opereta); funguo za zamani zinaendelea
kukubaliwa kama fallback ya kusoma kwa mzunguko mmoja wa kutolewa.

#### Kichwa cha uwazi + takwimu

Majibu yaliyobadilishwa na kujieleza yana kubeba
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(yaliyoundwa na `buildModalityBridgeHeader()` katika `modalityBridge/bridgeStats.ts`,
yaliyotiwa alama na `withModalityBridgeHeader()` katika `src/sse/handlers/chatHelpers.ts`).
Maombi yaliyosambazwa hayana **kichwa** — mzigo haujaguzwa na kubadilisha mfano
kunaonekana tayari katika uwanja wa `model` wa mwili wa majibu.

`GET /api/modality-bridge/stats` (usimamizi wa uthibitisho, kiwango sawa na
`GET /api/settings`) inarudisha hesabu za kila modality za ndani
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` kwa `vision`, `audio`, na
`video`. `averageLatencyMs` inatumia `latencySamples`, si majaribio yote, kama
denominator yake; operesheni bila muda haijaunda sampuli ya milisekunde sifuri.
`bridged` inabaki kuwa jina la zamani linalofanya kazi kwa mabadiliko yenye mafanikio;
majaribio yaliyoshindwa hayakuongeza hiyo.
Hesabu zinawekwa upya wakati wa kuanzisha mchakato kwa muundo
(telemetry, si uhasibu).

#### Mipangilio ya dashibodi

Ukurasa wa dashibodi uliopewa ni
`/dashboard/settings/modality-bridge`. Anuani yake ya URL `Vision`, `Audio`,
na `Video` inahifadhi vigezo vya uchunguzi wakati inabadilisha thamani ya `tab`.
Tabu ya Vision inatoa uwezo, hali, uchaguzi wa mfano (ikiwemo chaguo la
kiotomatiki), kuhamasisha kulingana na kazi, mipaka ya muda wa juu/picha/muda wa
maelezo/cache, hesabu za wakati wa kukimbia,
na ombi la sampuli lililolindwa. Tabu ya Audio pia iko hai: inatoa
uwezo, mchaguzi wa mfano wa STT pekee na Auto, mipaka ya muda/maklipu ya juu,
hesabu za sauti, na mtihani wa sampuli ya `input_audio`. Tabu ya Video inafanya kazi: inaripoti
hali ya wakati wa kukimbia ya FFmpeg/ffprobe — moja ya hali nne za UI wazi
(`unknown` wakati uchunguzi uko angani au hauwezi kukamilika, `restricted` kwenye
mwenyeji wa dashibodi usio wa loopback ambapo uchunguzi unakosolewa upande wa mteja,
`unavailable` mara uchunguzwe na kuthibitishwa kukosekana, au `available` na
matoleo ya FFmpeg/ffprobe) — inahifadhi mipaka ya enable/model/frame/video/timeout,
inachuja mchaguzi wa mfano kwa mifano inayoweza kuona, na inatoa hesabu za video.

Kadi ya zamani ya Vision Bridge chini ya mipangilio ya AI ni kiungo cha
uambatanisho kwa ukurasa mpya; haitumii tena nakala ya pili ya fomu. Watoa Huduma za Vyombo pia
wanahusisha Mchakato wa Picha hadi Maandishi na Mchakato wa Hotuba hadi Maandishi
na tabo zinazohusiana za Modality Bridge bila kuondoa uwanja wa Hotuba hadi Maandishi uliopo.

**Kukwepa kuingia kwa mzunguko wa ndani:** wakati wito wa kuelezea unapotembea kupitia
mzunguko wa ndani wa OmniRoute `/v1` (mfano wa mtoa huduma usio wa kawaida), ombi ndogo
linapeleka `x-omniroute-admission-bypass: internal` na linathibitishwa kwa
akili ya mzunguko wa ndani — sentinel ya ndani `sk_omniroute` katika hali ya ndani, au
funguo ya mazingira iliyowekwa na opereta `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350) ili
kuhakikisha kwamba matumizi ya `REQUIRE_API_KEY=true` yanaweza bado kufanya wito wa kuelezea. Kukwepa
huku kunaheshimiwa tu kwa akidi hizo sahihi, hivyo wateja wa nje hawawezi kutumia
kichwa hiki kukwepa kuingia.

Mipangilio ya zamani inapatikana katika `src/shared/constants/visionBridgeDefaults.ts`; mipangilio mipya ya hali/kazi ya
kuweza/kikomo na msola wa mipangilio inapatikana katika
`src/shared/constants/modalityBridgeDefaults.ts`. Mlinzi anatoa chaguo la
`deps` kwa ajili ya ujenzi ili majaribio yaweze kuingiza `getSettings` bandia na
uteuzi wa `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Inakabili maombi ya mazungumzo yenye sauti kabla ya kufikia lengo ambalo halijulikani
kukubali pembejeo za sauti. Hailazimishi tena ombi la mazungumzo: sehemu za sauti
zinatafsiriwa kupitia kiunganishi cha sehemu nyingi kinachofaa OpenAI na
mfano wa mazungumzo uliochaguliwa unaendelea na tafsiri za maandiko.

Mchakato:

1. Pata `supportsAudio` kupitia `getResolvedModelCapabilities()`. Metadata ya
   orodha ya mtoa huduma inayoeleweka inashinda, kisha metadata ya mfano wa
   static, kisha `modalities_input` iliyosawazishwa. Orodha ya pembejeo iliyotangazwa bila
   `audio` ni `false`; hakuna ushahidi wa uwezo unabaki `null`. Wote `false` na `null` huamsha
   daraja la kihafidhina, wakati `true` linakwepa.
2. Pata mipangilio ya `modalityBridgeAudio*` na kutoa sehemu za sauti za juu
   zinazoweza kuchanganywa kutoka kila ujumbe kupitia
   mpelelezi wa pamoja `detectMediaParts()`. Umbo la waya linaloungwa mkono ni
   OpenAI `input_audio`, `audio_url`, na `source.media_type: "audio/*"`. Sauti zilizozungukwa
   zinagundulika kwa ajili ya kuelekeza lakini haziondolewa na njia ya kuchanganya. Kazi inakabiliwa na
   `modalityBridgeAudioMaxClips`; sehemu za baadaye zinabaki bila kuguswa.
3. Heshimu `provider/model` iliyowekwa, au acha `selectAudioBridgeModel()` ipitie
   `AUDIO_TRANSCRIPTION_PROVIDERS` kwa mpangilio thabiti wa katalogi na kuchagua mfano wa kwanza
   wenye akidi ya mtoa huduma inayofaa.
4. `callAudioTranscription()` inabadilisha sauti ya base64/data-URI kuwa sehemu nyingi
   `file`, au inashusha `audio_url` ya mbali kupitia mlinzi wa nje wa umma
   na pinning ya DNS na kikomo cha 25 MB. Kisha inatumia POST faili na mfano uliochaguliwa
   kwa mzunguko wa ndani wa `/v1/audio/transcriptions`, ikithibitishwa kwa
   `resolveSelfLoopBearer()`. Njia ya tafsiri iliyopo inafanya utafutaji wa kawaida wa akidi,
   usimamizi wa baridi/mipaka ya kiwango, na usambazaji wa mtoa huduma.
5. Wito wenye mafanikio unabadilisha sehemu zao kuwa `[Audio N]: <transcript>`. Wito
   unakimbia na `Promise.allSettled`: kushindwa kwa mtu mmoja kunahifadhi sehemu hiyo ya sauti ya awali
   (#4012 mkataba). Ikiwa kila wito unashindwa na lengo linaonekana
   `supportsAudio === false`, sehemu zinakuwa
   `[Audio N]: (haipatikani — hakuna mtoa huduma wa STT aliyeunganishwa)` (#8430 mkataba). Kwa
   lengo lisilojulikana (`null`), matokeo ya kushindwa yote yanabaki bila kuguswa. Lengo lililo thibitishwa
   la maandiko pekee bila akidi ya STT inayofaa linapata stub hiyo hiyo wazi
   bila kutoa wito wa mtandao.

Tafsiri zenye mafanikio zinatumia cache ya Modality Bridge LRU/TTL ya mchakato mzima. Funguo inachanganya
marejeleo ya sauti, lebo ya operesheni ya thabiti `audio-transcription`, na mfano wa STT uliochaguliwa; kushindwa hakuhifadhiwi kamwe. Majaribio ya sauti yanasasisha
`bridged`, `cacheHits`, `failures`, na `lastUsedAt` hesabu.
Majibu yaliyobadilishwa yana carry
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; maombi yasiyoguswa
hayapokei sehemu ya Audio Bridge.

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
(ambayo inachanganya maandiko ya sauti yaliyotangazwa na mwitishaji), na metriki/kuacha/kuondoa kwa kila jaribio
— imefichwa nyuma ya `processVideoPart` katika
`videoBridgePipeline.ts`, inayoitwa mara moja kwa kila sehemu ya video ndani ya mzunguko wa `preCall`.
Moduli hiyo pia inaelezea mipaka ya bandari wazi `VideoMediaBrokerPort`
(kuinua bytes na kutoa fremu zilizochukuliwa), `VideoAudioTranscriptionPort`
(kuunganisha maandiko ya sauti yaliyotangazwa na mwitishaji na vichwa vilivyopimwa), na
`VideoDrilldownPort` (umbo la duka la zamani). STT ya uzalishaji na uhifadhi wa fremu
zimejengwa kuzunguka bandari inayofafanua kupitia `createVideoSttAdapter` na
`createVideoDrilldownAdapter`; ya mwisho inatumia mzunguko wa kushiriki wa opaque-handle.

Njia ya ombi ya umma `/v1` kamwe haiingizi au kuanzisha subprocess. Video za mbali
zinapakuliwa chini ya mipaka ya 50 MiB; video za ndani za base64 zina
mipaka ya 36 MiB iliyotafsiriwa kwa kila video ili mfano/meseji/mifuko ya fremu
iweze kubaki ndani ya kikomo cha kuingia cha ombi cha umma cha JSON cha 50 MiB. Urefu wa ndani
na makadirio ya ukubwa wa kutafsiriwa yanakaguliwa kabla ya ugawaji. HTTPS inahitajika
katika URL ya mbali ya awali na kila upitishaji, ikitumia ulinzi wa umma pekee wa outbound
na DNS pinning. Bytes kisha hupita mpaka sahihi wa ndani
`POST /api/modality-bridge/video/extract`. Njia hiyo ni `LOCAL_ONLY` na `SPAWN_CAPABLE`,
inakubali tu ombi lililothibitishwa la kila mchakato, lililoaminika, na halikubali kamwe URL, njia ya mfumo wa faili, executable,
au orodha ya hoja. Mchakato wa ukubwa wa mwili wa API na msomaji wa mwili wa kuongeza wa handler
huzingatia kikomo cha 50 MiB cha pembejeo za broker. Foleni yake iliyowekwa inafanya
uchimbaji mmoja kwa wakati, inaruhusu kazi nne zinazotarajiwa, na inakomo pembejeo zinazotarajiwa kwa
100 MiB.

Ndani ya broker, `ffprobe` inasoma faili ya ndani ya kibinafsi; orodha ya muundo
imeondoa aina za orodha na muundo wa hati. Kwa vyombo vya MOV-family vilivyokubaliwa,
marejeleo ya data ya MOV ya nje yanabaki kuzuiliwa kwa chaguo-msingi, na amri iliyowekwa haikubali
kujiunga nazo. Wote `ffprobe` na `ffmpeg` hutumia orodha ya itifaki ya `file` pekee, thread moja, safu za hoja zilizowekwa, hakuna shell,
na executables zinazotolewa kutoka `PATH`. Mipango ya picha iliyounganishwa si
wagombea wanaoweza kuchezwa. Mipango yote inayoweza kuchezwa lazima itimize mipaka, na
mipango ya msingi iliyowekwa inpreferiwa kabla ya kurudi kwa chini kwa index ya chini inayoweza kutabirika.
Video zinakabiliwa na sekunde 600, pixels 8,192 kwa kipimo, na
33,554,432 pixels za chanzo. FFmpeg inachukua fremu za JPEG za katikati 1–16, inapunguza
kando ndefu hadi angalau pixels 1,024 bila kuongeza ukubwa wa pembejeo ndogo, na
kamwe haiwezi kupokea URL. Sampuli ni `uniform` kwa chaguo-msingi. Sera za hiari
`scene_aware` na `segment_aware` zinafanya kupita moja ya ziada ya FFmpeg juu ya mstream ya ndani iliyothibitishwa, kuchagua
muda wa alama za `showinfo` zilizowekwa, na kurudi kwa utabiri kwa katikati sawa
katika tukio la kushindwa kwa detector, muda wa mwisho, matokeo yasiyo sahihi, au seti ya wagombea tupu. Hali ya segment-aware inagawanya sampuli za katikati kwa uwiano na
vipindi vya scene vilivyothibitishwa; ushahidi wa segment-aware na tabia ya kurudi imeelezewa hapa chini. Kikomo kigumu cha fremu 16
kinatumika baada ya uchaguzi katika sera zote. Wakati ombi la scene-aware lina bajeti ya fremu moja tu,
linatumia katikati ya kawaida ya video kamili au dirisha la makini na ripoti `policyEffective: uniform`: fremu moja iliyochaguliwa ya scene
haiwezi kuhifadhi mwisho wote wa muda. Mwitishaji anaweza kwa hiari kutoa
dirisha la makini lenye mipaka (`start`/`end` sekunde); mipaka inashikiliwa kwa muda wa media,
dirisha zilizogeuzwa au zisizo na mwisho zinakataliwa, na sera zote za sampuli
zinatendewa tu ndani ya kipindi kilichosawazishwa. Dirisha linalotokana linajumuishwa katika metadata ya sampuli na katika
prefix ya maelezo yasiyoaminika ili mifano ya chini iweze kutofautisha excerpt iliyozingatia kutoka kwa muda wote.

Mzingatiaji wa maandiko ni mipangilio tofauti, wazi. Hali ya uchambuzi ya chaguo-msingi `full`
inaifadhi mwito wa fremu uliopo na kamwe haisambazi maandiko ya ombi kwa mfano wa kichwa. Katika hali ya `focused`,
daraja linakusanya tu `text`/`input_text` ya hivi karibuni isiyo tupu iliyoundwa na mtumiaji kutoka
konteksti sawa ya Chat au Responses, inasawazisha hadi NFC, inakandamiza wahusika wa udhibiti na nafasi,
na inakomo kwa alama 500 za Unicode. Matokeo yasiyo na kitu yanarudi kwa mwito wa `full` sahihi. Kidokezo kinachoweza kutumika
kinahifadhiwa kama JSON katika block maalum ya muktadha wa mtumiaji asiyeaminika na kinaweza tu kuipa kipaumbele maelezo yanayoonekana; hakiwezi kubadilisha
onyo tofauti dhidi ya kufuata maagizo yanayoonekana au kusikika katika media. Mzingatiaji wa maandiko kamwe haujifanyii `start`/`end` au kubadilisha
sampler wa muda.

#### FU-07 ushahidi wa sehemu ya muundo

`segment_aware` inatumia kupita moja ya awali iliyo na mipaka juu ya mtiririko wa video wa ndani ambao tayari umethibitishwa. Mnyororo wa chujio wa kudumu kwanza unapanua hadi pixels 320 tu, unagundua mabadiliko ya scene na vipindi vilivyoganda, kisha unachukua sampuli kwa picha 1 kwa sekunde kwa blur, luma ya wastani, na taarifa za nafasi/nyakati. Kupita kuna mipaka ya sampuli 600 za muundo, thread moja ya FFmpeg/filter, itifaki na orodha za vyombo vya container za `file` pekee, mipaka ya pato la mchakato ya 1 MiB, na kwa muda wa sekunde 30 ndani ya muda wa kushiriki wa broker. Haukubali kamwe amri, chujio, njia, au URL kutoka kwa ombi.

Thamani za muundo ni ushahidi wa sampuli unaoweza kutabiri, sio uelewa wa video wa kisemantiki. Hazihusishi mada, vitendo, vichwa vya habari, hotuba, au nia ya mtumiaji. Mipaka ya scene na barafu huunda sehemu; kufunika kwa barafu, blur, mwangaza, maelezo ya nafasi, na mabadiliko ya wakati yanashawishi tu jinsi bajeti ya picha 1–16 ilivyopewa. Sehemu iliyo baridi kabisa ina mipaka ya picha moja, wakati sehemu zisizo baridi zinashindana kwa bajeti iliyobaki. Wakati mipaka inazidi picha, kufunika kwa muda wa kawaida kunahifadhiwa ili kukata mapema haraka haziwezi kuficha sehemu ndefu inayofuata. Mipaka ya scene ndani ya azimio la uchambuzi la sekunde 1 la mipaka ya barafu inakusanywa.

Chujio kilichokosekana, ushahidi usio na umbo/tyupu, kosa la kugundua, au muda wa kukatika kwa awali wa mipaka unashindwa kufungua kwa sera ya katikati ya kawaida. Kukatishwa kwa mwito au muda wa broker hakufungui: kunamaliza mchakato wa ndani, kuzuia uchimbaji wa picha baadaye, na mti wa muda wa kibinafsi unondolewa katika `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` inazalisha vifaa vya FFmpeg vya kweli vinavyoweza kutabiri kwa akiba ya wito wa kichwa baada ya kuondoa, ugawaji wa bajeti ya mwendo mzito, ushahidi wa blur/mwangaza/SI-TI, kukata haraka na mkia mrefu, na makosa ya kupungua taratibu. Inarekodi muda wa ukuta wa uchambuzi na, ambapo `/usr/bin/time` inapatikana, CPU ya mtoto na RSS ya juu. Ukaguzi wake wa ubora ni oracles za muundo pekee. Ubora wa kweli wa mfano wa kichwa unabaki `HOLD` kwa sababu harness hii haina mwisho ulioidhinishwa au jaji aliye baridi. Akiba ya fedha pia inabaki `HOLD` isipokuwa `--caption-cost-per-call-usd` itoe makadirio ya wazi ya chaji kwa wito; script haitengenezi matokeo yoyote.

Kila picha ina mipaka ya 4 MiB, picha zote mbichi pamoja hadi 23 MiB, na jibu la broker lililosanifishwa hadi 32 MiB. Kadiria ya muda wa kibinafsi inondolewa katika `finally`. OmniRoute haisambazi FFmpeg na haitakubali njia ya kutekeleza maalum. Kabla ya kuweka vichwa, daraja linafanya kupita kwa uhakika wa kuona: kila JPEG inapunguzwa hadi buffer ya 16×16 ya grayscale na inalinganishwa tu na picha ya mwisho iliyohifadhiwa. Kwa bajeti ya kichwa inayohitajika zaidi ya picha moja, uchimbaji unatoa
kikundi cha wagombea kilichowekwa mipaka cha hadi mara mbili ya bajeti hiyo na kamwe zaidi ya picha 16. Kiwango kilichohitajika kinatumika tu baada ya kuondoa, huku wagombea wa kwanza na wa mwisho wakihifadhiwa wakati wa kupunguza mwisho wakati bajeti iko angalau mbili. Sera ya
`grayscale-16x16-mean-cells-v2` inatumia kubwa ya delta ya luma ya wastani na uwiano wa seli za thumbnail ambazo delta yao iliyosanifishwa ni angalau 0.05. Kiwango cha nakala ni 0.04, kilichochaguliwa kwa utabiri badala ya kufichuliwa kama mipangilio ya wakati wa kukimbia. Ishara hii ya pili yenye mchanganyiko wa juu inahifadhi mwendo mdogo na mabadiliko ya maandiko yanayoonekana ambayo kulinganisha kwa wastani pekee yanaweza kuficha. Makosa ya kulinganisha au kufasiri yanashindwa kufungua na kuhifadhi kufunika. Metadata ya pato inatenganisha wagombea waliochimbwa, picha zilizotumika kwa mafanikio, na nakala za kuona zilizotupwa.

Sehemu ya video iliyoashiriwa wazi inaweza kuomba karatasi ya mawasiliano yenye alama ya muda. Daraja linajenga grid ya JPEG ya safu 4, picha 16 kwa kiwango cha juu. Kila seli ya 512-pixel inachoma alama yake ya muda ya chanzo kwenye bendi ya chini yenye mchanganyiko wa juu, wakati alama hizo hizo zinabaki katika metadata ya maandiko kwa ushirikiano wa chini na ukaguzi. JPEG kamili inabaki na mipaka ya 32 MiB. Ikiwa `sharp` haiwezi kufasiri au kuunda grid, daraja linarudi kwa picha za JPEG za kibinafsi; kukatishwa kwa mteja bado kunasambaza kupitia operesheni ya karatasi.

Ushahidi wa kukuza umewekwa wazi tofauti na microbenchmark ya muundo wa synthetiki. `scripts/perf/video-bridge-contact-sheet-eval.ts` inafafanua muundo wa A/B wenye toleo la schema kwa mifano halisi ya maono yanayofaa OpenAI. Inapima tokens zilizoripotiwa na mtoa huduma, ucheleweshaji wa ukuta wa mwisho hadi mwisho (ikiwemo muundo wa karatasi), idadi ya wito wa mfano, na uhifadhi wa ukweli uliofafanuliwa na orodha. Majibu ya mfano mbichi hayandikwi kwenye ripoti; tu SHA-256 digests na vitambulisho vya ukweli vilivyolingana vinahifadhiwa. Harness hii haitafanya wito wa mtandao au wa mfano wa kulipwa isipokuwa `--execute-real` ipitishwe na `--model`, `OMNIROUTE_BASE_URL`, na `OMNIROUTE_API_KEY` zikiwa zimewekwa. Bila hiyo kukimbia halisi wazi, hukumu yake inayoweza kusomeka na mashine inabaki `HOLD`; vipimo vya mzigo wa synthetiki/idadi ya wito pekee si ushahidi wa kukuza.

`scripts/perf/video-bridge-promotion-eval.ts` tofauti inatumia FU-07 au FU-09 maoni. Kuingia kwa kukuza kunahitaji aina zote nane za hali ya synthetiki pamoja na kipande halisi kilichosafishwa, angalau repetitions tatu zilizopimwa kwa kila jukumu na kesi, vipimo kumi vilivyotangazwa, digest za vyombo vya habari vya baridi/prompt/ukweli unaotarajiwa/mipangilio, vitambulisho vya maoni vya kipekee na mpangilio wa A/B uliohakikishwa. Risiti ya utekelezaji inashikilia digest ya corpus, SHA halisi ya wagombea na marekebisho ya mfano. Vipimo vilivyokosekana au visivyo sahihi vinabaki `HOLD`, ikiwa ni pamoja na CPU zaidi ya sekunde 30, RSS ya juu zaidi ya 512 MiB au uchambuzi wa awali zaidi ya sekunde 30. Hizi ni mipaka ya kuingia ushahidi, sio dhamana mpya ya kutekeleza RSS wakati.

FU-07 inahitaji angalau 98% ya uhifadhi wa ubora na latency ya p95 isiyozidi 1.2x
misingi, pamoja na kuboresha ya 0.05 ya kesi iliyosawazishwa ya kati ya kukumbuka katika
kuitwa kwa maelezo sawa, au angalau 10% ya kupungua kwa kuitwa kwa maelezo baada ya
kuondoa. FU-09 inahitaji angalau 0.85 ubora, 95% uhifadhi, 20% kupunguza latency ya p95
na 10% kupunguza token. Kupoteza kwa ukweli muhimu, utii wa sindano au
kutokuwepo kwa matumizi kunazuia kukuza. Utendaji mmoja hauwezi kukuza chochote:
`--previous-report` inathibitisha utendaji mbili tofauti, zisizovutana, zinazofaa
za sera/model toleo/mgombea/corpus. Jaribio la sampuli haliwezi kuthibitisha jaribio la
karatasi ya mawasiliano.

Wakusanya wanapaswa kutoa alama za majibu katika kumbukumbu na kuhifadhi `responseDigest` pamoja
na metriki na uhusiano wa uchunguzi, kamwe si maandiko ya majibu. Mtumiaji pia anasoma
uchunguzi wa zamani lakini kamwe haakopi maandiko hayo katika ripoti zake. Moja tu ya `responseDigest` au `rawResponseText` inakubaliwa kwa kila uchunguzi.
Orodha ya ruhusa iliyotolewa inabaki tupu ikiwa na `hold` isiyobadilika kama chaguo la
kawaida. Kuingia inayofaa inahitaji rejeleo lake la ushahidi, sera, toleo la mfano, SHA sahihi
ya mgombea, digest ya orodha na IDs mbili tofauti za utendaji; muktadha unaopingana
unakataliwa. Metadata hizi ni mkataba wa ukaguzi, si uthibitisho kwamba faili iliyorejelewa ina
kipimo halisi. Kagua risiti halisi kabla ya kuongeza
ingia yoyote. Kituo cha takwimu za usimamizi na dashibodi ya Video vinatoa
valvu ya uhakika. Jina la mfano lililowekwa pekee halijathibitisha toleo lake au
SHA ya mgombea anayekimbia, hivyo ripoti ya dashibodi ya sasa inaripoti `HOLD` badala ya
kurudia uhalali kutoka kwa muktadha mwingine wa utendaji. Uchaguzi wa majaribio wazi
unabaki tofauti na kukuza; hakuna chaguo la kawaida linalobadilishwa kiotomatiki.

Wito wanaweza kuambatanisha safu ya hiari ya `transcript.cues` kwa sehemu ya video
iliyosaidiwa wanapokuwa tayari na maandiko yaliyolingana. Kila kiashiria lazima kiwe na `text`,
kipindi cha `start`/`end` ndani ya muda uliochunguzwa, na `source` iliyoorodheshwa
(`client`, `embedded`, au `audio-bridge`); `confidence` inakuwa
`1` na lazima ibaki kati ya `0` na `1`. Viashiria vya nakala halisi vinapunguzwaje.
OmniRoute kamwe haianzishi uandishi kutoka kwa metadata hii: viashiria vilivyothibitishwa
vinakopishwa katika matokeo yaliyoelezewa pamoja na chanzo, uaminifu, na kipindi, na
vinatolewa kama uchunguzi usioaminika pamoja na maelezo ya fremu. Maandishi yasiyo sahihi,
yasiyo katika kiwango, au yasiyo na asili yanakataliwa badala ya kuchanganywa katika
mchakato wa maelezo. Makanika ya mwili wa ombi wa transcript huweka asili iliyotolewa
kuwa `client`, ikiwa ni pamoja na `embedded` au `audio-bridge`
lebo zilizojitolea. Ni adapter inayomilikiwa na seva pekee inayoweza kupewa lebo hizo
za kuaminika kupitia hoja ya `trustedSource` ya msimbo pekee; uwanja wa JSON wa ombi hauwezi
kufikia hoja hiyo. Maandishi ya transcript yanabaki kuwa maudhui yasiyoaminika yaliyotokana
na vyombo vya habari, bila kujali asili yake, na hayapaswi kamwe kuamua mamlaka.

Mwaitaji wa hali ya juu anaweza kutoa wimbo wa `audioTranscript` kwa video hiyo hiyo;
inachukuliwa kama maandiko yaliyotolewa na mteja, si uthibitisho wa uandishi wa seva.
Mshikamano wa fusion unafanya uchunguzi wa visual na sauti chini ya
tarehe moja na ishara ya kuacha, unawaweka kwenye muda wa kawaida, unachanganya
nakala halisi, na ripoti ya matokeo ya sehemu wakati upande mmoja tu unafanikiwa.
`audioTranscript` isiyo sahihi inashuka hadi matokeo hayo ya sehemu — maelezo ya visual
yanahifadhiwa na tawi la sauti linaandika msimbo wa kushindwa ulio safishwa —
badala ya kushindwa kwa video nzima. Kila tawi la upatikanaji, bendera ya sehemu,
na misimbo ya kushindwa iliyosafishwa inahifadhiwa katika matokeo yaliyoelezewa, katika
metadata ya kingo (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), katika metadata ya cache ya matokeo, na katika
hesabu za fusion ya daraja. Njia ya kawaida ya Video Bridge haianzishi
hotuba-kwa- maandiko au kupakua nakala ya pili ya vyombo vya habari; bila wimbo huo wazi,
inabaki kuwa video pekee.

**Uhifadhi wa transcript (#12150 P1).** Hii inatumika kiotomatiki kila wakati
Video Bridge (ambayo ni hiari) inapotengeneza kiashiria cha transcript — hakuna bendera ya
uhifadhi tofauti. Wakati ombi linapotengeneza kiashiria chochote cha transcript (kiashiria kilichotangazwa na
mwaitaji `transcript` au `audioTranscript` iliyounganishwa), kingo inakadiria
`videoBridgeObserved` na inazalisha kivuli kilichofichwa cha maelezo ya video —
uundaji sawa ambapo kila mwili wa kiashiria wa maandiko hufanywa kuwa
`[redacted-video-transcript]`, iliyoundwa kwa kubadilisha uwanja wa kiashiria
kabla ya mfuatano wa maandiko kuundwa (kamwe kwa kuchambua maandiko yaliyopunguzwa, hivyo hakuna maudhui ya kiashiria — ya mashindano au ya kawaida, ikiwa ni pamoja na miili inayojumuisha `]` kama
`[inaudible]`/`[music]` — inaweza kuishi). Mwili wa ombi wa kumbukumbu uliohifadhiwa
unabadilisha kila sehemu ya maandiko iliyotokana na video kwa kivuli hicho kilichofichwa,
kilicholingana na usawa wa maudhui; kiunganishi cha `fullText` kinarejeshwa kutoka
kifurushi cha kingo cha kabla ya wito, hivyo ulingano bado unafanikiwa baada ya kingo za
mfuatano baadaye (maskers za PII na akidi, vipaumbele 10/95) kuandika maandiko ya maelezo
mahali na baada ya mfumo wa kuamuru/kuhamasisha/kushawishi kumbukumbu kuunda
mfuatano wa ujumbe. Mwili uliopelekwa juu kwa mfano haujabadilika. Ombi lililoshuhudiwa pia halijaza
kumbukumbu ya kudumu (kila uchimbaji wa ombi na majibu umeachwa), hivyo jibu la mfano
haliwezi kurudia maandiko ya transcript katika Kumbukumbu.

**Sehemu za video ghafi (#12430).** Wakati daraja limewezeshwa na msaada wa video wa asili haujulikani au haupo,
sehemu zilizofafanuliwa za `transcript`/`audioTranscript` pia zinaanzisha `videoBridgeObserved`, hata baada ya kushindwa kwa maelezo au kikomo cha `maxVideos`. `null` na nyuzi tupu zinahesabiwa; sehemu zilizokosekana na metadata zisizo za video hazihesabiwi. Nakala zilizohifadhiwa zinaficha sehemu hizi au kuacha ombi, na caches/Kumbukumbu zinakosolewa.

Katika njia hizo za fallback, cues halali za mwito zinakuwa sehemu zinazoungwa mkono za `text`/`input_text` badala ya maeneo yasiyo ya kawaida ya mtoa huduma. Tracks zote zinazotolewa na ombi zinabaki kuwa maoni yasiyoaminika ya `client`, huku kukiwa na onyo wazi kwamba video haikuelezewa na alama za wakati hazikuthibitishwa dhidi ya media. Bajeti zilizopo za 256-cue/64-KiB jumla na kwa kila cue zinatumika kwa pamoja kwenye tracks hizo mbili; alama za wakati lazima ziendane na kikomo cha sekunde 600 cha broker na dirisha lolote lililotolewa la umakini. Tracks zisizo halali zinatupwa, hazipelekwi kama maandiko yasiyo na mpangilio; ndugu halali bado zinaweza kutumika isipokuwa bajeti yao ya pamoja imezidi. Sehemu za null/empty haziongezi maandiko yoyote. Hakuna upakuaji wa media au uandishi unaoongezwa na fallback hii. Sehemu za upanuzi wa maandiko zimeondolewa kutoka kwa carrier ya video ya fallback na vitu vyake vya `video_url`/`source`. Orodha ya wire ya OpenAI inabaki kuwa kali; carriers za video zisizojulikana zinabaki kuwa zinapatikana na malengo yanayojulikana ya maandiko pekee yanaweka alama salama. Vivuli vya redaction vilivyopangwa vinahifadhi maandiko ya transcript yaliyoongezwa, wakati ombi la mwito la awali linabaki bila kubadilishwa. Malengo yanayoungwa mkono na asili na madaraja yaliyoshindikana yanahifadhi tabia zao za kupita zilizopo.

Nakala za ziada zilizohifadhiwa zinatumia ishara ile ile ya ombi iliyoangaliwa. Snapshot ya ombi la mteja kabla ya guardrail, ombi lililoko kwenye kumbukumbu, na kumbukumbu ya ombi lililokataliwa mapema zinachukua nafasi ya sehemu za transcript katika sehemu za video; maelekezo ya maandiko yaliyoundwa na hatua za pipeline na kukabidhiwa kwa muktadha yanarekebishwa kwenye sink ya ombi lililohifadhiwa. Alama ya `video_content_removed` inafanya kuendelea kwa `previous_response_id` kufeli kufungwa badala ya kujenga maandiko ambayo yalitupwa kwa makusudi. Ikiwa ombi lililoangaliwa linapoteza kivuli chake cha redaction kabla ya kuandika, au hata moja ya vivuli vya video kadhaa inashindwa kulinganisha baada ya mabadiliko ya ombi baadaye, mwili wa ombi uliohifadhiwa unachukuliwa kabisa badala ya kuhifadhi transcript iliyorekebishwa kwa sehemu.

Kwa ombi lililoangaliwa, jibu la mfano linaweza kunukuu sehemu yoyote ya transcript bila mpaka wa cue ulioandikwa. Kumbukumbu yake ya simu iliyo hifadhiwa `responseBody` kwa hivyo inabadilishwa na alama ya kutokuwepo; kipande cha maelezo ya pipeline (ambacho kinaweza kujumuisha miili ya upstream/client na vipande vya mtiririko) hakihifadhiwi. Kumbukumbu za semantic, idempotency, na reasoning-replay zinapita kusoma na kuandika kwa ombi hilo. Ombi la mtoa huduma na jibu linaloonekana na mteja yanabaki bila kubadilishwa. Bytes za keepalive za mapema zinatolewa kutoka kwenye buffer ya muda wakati kipande cha maelezo kinapotupwa. Onyo la EventStream la Kiro lililo na makosa lina ripoti tu idadi ya byte za payload, kamwe si maudhui yake au makosa halisi ya parser wa JSON. Hii haiwezi kudai kwamba kila uchunguzi wa mtoa huduma/plugin usiohusiana umeangaliwa; kusafisha kwa jumla kunahifadhiwa katika #11658.

Mzunguko wa ndani wa `/api/modality-bridge/video/drilldown` ni substrate tofauti ya cache inayothibitishwa na loopback/token. Kila operesheni pia inahitaji ID ya msingi isiyo na uwazi. Kabla ya mwito wa uzalishaji kuwezeshwa, lazima ipate ID hiyo kutoka kwa mpangaji aliyethibitishwa na haitapaswa kamwe kupeleka thamani iliyochaguliwa na mteja. Funguo za cache zinabinda msingi huo kwa ID za kikao na rejeleo la video, kuhifadhi tu funguo zao zilizotokana na SHA-256, na kuzingatia kusoma na kufuta kwa msingi huo. Cache inahifadhi kwa kiwango cha juu cha picha 16 za JPEG zilizotokana kwa kila kipengee, inaziondoa baada ya dakika kumi, na inasaidia kusoma au kufuta kikao kwa `start`/`end` zilizopangwa.

Kila msingi umewekwa mipaka ya entries 16 na 64 MiB za data za JPEG za kikanuni. Mipaka hiyo haitegemei kikomo cha kimataifa cha entries 64/256 MiB: shinikizo la quota ya msingi linatupa tu entries za msingi huo zilizotumika kidogo kabla ya kufikiriwa kwa kufutwa kwa LRU ya kimataifa. Entries zilizokwisha muda zinatolewa kutoka kwa hesabu ya msingi na ya kimataifa kwenye shughuli za cache, wakati kufutwa na kushindwa kuthibitisha hakufanyi uingizwaji wa sehemu.

Cache inakataa Base64 zisizo za kikanuni, padding nyingi, media zisizo za JPEG, JPEG zenye makosa au zilizokatwa, na JPEG zinazozalisha onyo wakati wa kutafsiri picha nzima ya `sharp` kwa kiwango kilichowekwa. Inarejesha kila picha iliyokubaliwa kama JPEG ya kikanuni, inapata upana na urefu kutoka kwa bytes zilizotafsiriwa badala ya kuamini maeneo ya mwito, na inatupa bytes zozote za polyglot zinazofuata badala ya kuzihifadhi. Ni buffer ya kikanuni iliyoshinikizwa tu inayotozwa kwa quotas zote. Kiwango cha waya cha JSON kinajumuisha gharama za Base64 kwa kikomo cha 32 MiB cha input kilichotafsiriwa. Kila
kiboko kilichohifadhiwa kinarekodi muundo wake wa JPEG ulioidhinishwa/kupima, sera ya sampuli, toleo la derivation, wakati wa uumbaji, hash ya maudhui iliyohesabiwa na seva, na hash ya rejeleo la mzazi iliyohesabiwa pamoja na hash ya maudhui ya mzazi wa mwito wa kuaminika. Kufutwa kunakaguliwa kati ya hatua za kutafsiri/hash zisizo za wakati kabla ya kujitolea kwa cache ya atomiki.

Mzalishaji wa uzalishaji unatumia tena picha za broker zilizotokana tayari tu baada ya uchambuzi wa kuona kufanikiwa, bila kupakua/kutoa video ya pili. Inahitaji operator `modalityBridgeVideoDrilldownEnabled=true`, `drilldown: true` kali kwa kila sehemu, na ID ya rekodi ya API-key iliyothibitishwa. Thamani za msingi/kikao zilizotangazwa na mteja hazijawahi kuanzisha umiliki. Bila masharti yote matatu, haitahesabu, kubadilisha ukubwa au kuhifadhi picha za ziada. Kushindwa kwa uhifadhi kunahifadhi jibu la kuona linaloweza kutumika. Maombi yaliyokubaliwa yanapita cache ya matokeo ya video nzima ili matokeo yaliyohifadhiwa yasijirudie kushughulikia.

Majibu ya JSON na SSE yanayo fanikiwa yanaonyesha kwa kiwango cha juu mikono minne isiyo na uwazi katika kichwa cha `x-omniroute-video-drilldown`. Mifumo ya kivinjari iliyoidhinishwa inaweza kusoma kichwa hicho bila kupanua sera ya asili ya CORS. Mikono mipya inatumia `v1.<32-byte random base64url token>`, na rejista inahifadhi tu hash zao za SHA-256. Msomaji/mchambuzi wa kichwa pia unakubali token za zamani za 64-hex. Mtumiaji wa umma aliyeidhinishwa ni `GET /api/v1/video-bridge/drilldown?handle=...`, ambayo inategemea kwa uhuru na `modalityBridgeVideoDrilldownRemoteEnabled=true`. Uondoaji wa wazi wa uwongo unafuta ufikiaji hata wakati `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env fallback ya zamani imewezeshwa. Uhifadhi wa uzalishaji una fallback ya zamani inayofanana ya `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED`. Fallback zote zina default off.

Mtumiaji anapata umiliki kutoka kwa funguo zilizoidhinishwa, anatumia sera ya funguo, na anarudisha 404 sawa kwa mikono isiyojulikana, iliyokwisha muda na mikono ya funguo nyingine. Inakubali `variant=preview|standard|detail` (kipimo cha JPEG cha juu 320/640/1280, kamwe hakiongezeki), `limit=1..8` (au alias ya zamani `frames`, kamwe sio zote mbili), `page` yenye msingi wa sifuri, na sekunde za kuzingatia za hiari `start`/`end`. Funguo za maswali za nakala na madirisha ya kuzingatia yaliyogeuzwa yanakataliwa. Kila toleo lililorejeshwa lina hash ya maudhui yake halisi na metadata ya azimio halisi, iliyounganishwa na chanzo kilichohifadhiwa. Mabadiliko yanatokana kwenye kusoma badala ya kuhifadhiwa kama nakala za ziada zilizohifadhiwa. Jibu la JSON, ikiwa ni pamoja na Base64/envelope, limewekwa kwenye mipaka ya 32 MiB; ukurasa mkubwa unarudisha 413 na mteja lazima aombe fremu chache. Kusoma kunakagua kufutwa karibu na kila upanuzi na kuangalia tena uhalali wa mkono kabla ya kurudisha. `DELETE` na mmiliki ni idempotent; kufutwa au kuisha kwa TTL kunatoa chanzo kilichohifadhiwa na uhasibu wa matumizi.

Duka la pamoja ni la mchakato wa ndani: mikono inakoma wakati wa kuanzisha upya na siwezi kuhamishwa kati ya michakato huru ya OmniRoute. Takwimu za usimamizi zinaonyesha sera ya uhifadhi/remote inayofaa na kujumlisha entries/hisa zilizohifadhiwa tu, kamwe si vyombo vya habari, viungo, IDs za msingi au mikono. Paneli ya mipangilio ya Video inaonyesha thamani hizo na inaweza kuhifadhi swichi za idhini zote. Hati hii ya utekelezaji si uthibitisho wa kutekeleza moja kwa moja au kukuza; kukubali mfano halisi kunafuatiliwa tofauti.

Fremu zinaandikwa kwa mfululizo na mfano wa Video ulioanzishwa. Uondoaji wa Video tupu unarithi mipangilio ya Vision; ikiwa zote mbili ni tupu, router ya auto ya Vision inachagua mfano unaoweza kuona. Maandishi yaliyofanikiwa yanachukua sehemu ya asili na kiambatisho thabiti `[Video description:` ambacho pia kinakadiria maandiko kama uchunguzi usioaminika wa vyombo vya habari na kinaelekeza mifano ya chini kutofuata maagizo yaliyopatikana katika vyombo vya habari. Funguo za cache za caption za fremu zinajumuisha bytes za JPEG, ombi, muda, na mfano unaofaa; ni maandiko yaliyofanikiwa pekee yanayohifadhiwa. Kuingilia kwa cache kunahifadhi mfano wa mtengenezaji aliyefaulu, ikiwa ni pamoja na mfano wa fallback; daraja lina ripoti `mixed` wakati fremu tofauti zilitengenezwa na mifano tofauti. Hit ya cache inatumia utambulisho wa mtengenezaji badala ya kuupa jina upya kama mpango wa uelekezaji ulioombwa. Cache ya matokeo ya video nzima imefungwa kwenye kila ingizo linalobadilisha matokeo — ombi, mfano unaofaa, sera ya sampuli, idadi ya fremu, hali ya uchambuzi wa maana, fingerprint ya SHA-256 ya kidokezo cha kuzingatia kilichonormalized, dirisha la kuzingatia, `transcript`, `audioTranscript`, na bendera ya contact-sheet — hivyo kubadilisha yoyote ya vipimo hivyo ni kukosa cache, kamwe sio matumizi ya zamani. Toleo la sera ya kudhibiti picha, kigezo, na idadi ya fremu za wagombea zilizopangwa pia ni wazi katika funguo za cache ya matokeo na metadata; hivyo, mabadiliko ya sera hayawezi kutumia maelezo ya zamani ya video nzima. Metadata ya cache ya matokeo v4 inahifadhi hali na fingerprint, kamwe si kazi halisi ya mtumiaji. Metadata ya guardrail inaripoti hali zote za uchambuzi zilizohitajika na zinazofaa; hali ya `focused` iliyohitajika bila maandiko ya mtumiaji yanayoweza kutumika inaripotiwa kama kwa ufanisi `full`.

Guardrail inatoa kila sehemu ya video inayoungwa mkono lakini inaelezea zaidi ya `modalityBridgeVideoMaxVideos`. Kwa lengo lililo thibitishwa kuwa `supportsVideo === false`, video zilizoshindwa na zilizozidi mipaka zinakuwa alama za maandiko salama wazi ili hakuna video halisi inayosalia. Wakati uwezo haujulikani, sehemu hizo zinahifadhi carrier yao ya video; transcript yoyote ya fallback inafuata mabadiliko ya maandiko yaliyopangwa hapo juu. Malengo yenye `supportsVideo === true` yanapita daraja. Ishara ya kufuta ombi la mteja inasambazwa kupitia upakuaji, foleni ya broker, michakato ya chini, na simu za caption; kufutwa kunasimama kati ya video na kamwe hakufeli wazi kwa vyombo vya habari halisi.

Mipangilio ya wakati wa kukimbia inategemea DB na kuthibitishwa na Zod:

| Funguo                              | Kiwango     | Mipango / tabia                                                                                       |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Muda wa hiari, opt-in                                                                                 |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` inahifadhi maandiko ya jumla; `focused` inatumia muktadha wa hivi karibuni usioaminika         |
| `modalityBridgeVideoModel`          | `""`        | Rithi mfano wa Vision Bridge                                                                          |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                  |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, au `segment_aware` ya uwiano; kushindwa kwa detector kunarudi kwa `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                   |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                        |

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

Inafanya kazi kwenye **masharti** yote mawili.

- **`preCall`** inachukua nakala ya payload, inatembea `system`, `messages`, `input`, na
  `prompt` (ikiwemo vitu vya maandiko ya kawaida), na inatumia `processPII()` (kutoka
  `@/shared/utils/inputSanitizer`) kwenye nyanja za maandiko `content`/`text`. Wakati
  `PII_REDACTION_ENABLED=true`, PII iliyogunduliwa inafichwa katika payload ya nje. Hii ni huru
  kutoka kwa `INPUT_SANITIZER_MODE` (ambayo inasimamia sera ya kuingiza prompt). Wakati
  kufichwa kumezimwa, rekodi za simu zinarekodi idadi za ugunduzi bila kuandika tena maudhui.
- **`postCall`** inachukua nakala ya kina ya majibu, inafanya kazi `sanitizePIIResponse()` pamoja
  na masker ya muundo wa Responses-API (`maskResponsesOutput` — inashughulikia
  `output_text` na `output[].content[].text`). Ikiwa kufichwa kutatokea, jibu lililobadilishwa
  linachukua nafasi ya asili.

Guardrail kamwe haizuizi; inachora tu alama (`meta.detections`,
`meta.redacted`) au inarekebisha.

### Prompt Injection (`promptInjection.ts`)

Inagundua muundo wa uhasama katika maudhui yaliyotolewa na mtumiaji na inatekeleza sera
iliyowekwa. Tabia inasababishwa na vigezo vya mazingira na chaguo za mjenzi:

| Mpangilio          | Env var                                                                                               | Kawaida | Athari                                                                                                                                                                                                  |
| ------------------ | ----------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Iliyowezeshwa      | `INPUT_SANITIZER_ENABLED`                                                                             | `true`  | Wakati `false`, guardrail inakata.                                                                                                                                                                      |
| Njia               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`  | Sera ya kuingiza: `block`, `warn`, au `log`. (`redact` inakubaliwa kwa ajili ya urahisi wa nyuma lakini haisafishi maandiko ya kuingiza; ombi la kuficha PII linadhibitiwa na `PII_REDACTION_ENABLED`.) |
| Kiwango cha kuzuia | `blockThreshold` chaguo / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Kiwango cha chini kinachohitajika kuzuia. Kati ni ya kutazama tu kwa kawaida.                                                                                                                           |

**Kipaumbele cha Njia** (`getMode`): mwitishaji `options.mode` →
`INJECTION_GUARD_MODE` **DB feature-flag override** (Dashibodi → Mipangilio →
Bendera za Kipengele) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Hivyo, urekebishaji wa dashibodi unashinda juu ya vigezo vya mazingira, hivyo UI ya Bendera za Kipengele inasimamia guard inayofanya kazi moja kwa moja (hakuna upya). Usomaji wa DB ni salama:
ikiwa kuna kosa, guard inarudi kwenye tabia inayotegemea mazingira, na wakati hakuna
urekebishaji ulioanzishwa tabia ni sawa na ufumbuzi wa mazingira pekee.

Vyanzo vya ugunduzi:

1. `sanitizeRequest()` kutoka `@/shared/utils/inputSanitizer` (seti ya kugundua
   iliyoshirikiwa inayotumika mahali pengine kwenye pipeline).
2. `DEFAULT_GUARD_PATTERNS` iliyojengwa ndani (sasa `system_override_inline` na
   `markdown_system_block`, zote zikiwa na kiwango cha `high`).
3. `customPatterns` za hiari zinazopitishwa kupitia chaguo za mjenzi (nyuzi, regex,
   au `{ name, pattern, severity }` rekodi).

Wakati `mode === "block"` **na** angalau ugunduzi mmoja unakidhi kiwango
cha kuzuia, `preCall` inarudisha `{ block: true, message: "Ombi limekataliwa:
maudhui ya shaka yamegunduliwa" }`. Katika hali za `warn`/`log`, guardrail inarekodi lakini
inaruhusu simu. Msaada wa pamoja `evaluatePromptInjection()` pia unasafirishwa
kwa wito wanaohitaji kutathmini prompts bila kupitia orodha.

**Scan bound (v3.8.20):** mpelelezi anachunguza tu **KB 16** za kwanza za
maandishi ya pamoja ya prompt — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) katika
`src/shared/utils/inputSanitizer.ts`. Wote `detectInjection()` na
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` kabla ya kuendesha
mzunguko wa muundo. Maelekezo ya kuingiza yanakaa karibu na juu ya ingizo, hivyo hii
inasimamisha CPU/GC ya regex kwenye payload nyingi za KB bila kudhoofisha ugunduzi (cf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Inafanya kazi kwenye **masharti** yote mawili, ya mwisho katika mnyororo wa kawaida (kipaumbele `95`). Inaficha
mifumo ya API-key / token ya siri inayojulikana kutoka kwa payload ya nje (maudhui
ya ujumbe, hoja za wito wa chombo, matokeo ya chombo) **na** jibu la mtoa huduma, hivyo
akidi iliyowekwa kwenye prompt (au iliyorejeshwa na matokeo ya chombo) haiwezi kuvuja
kwa mtoa huduma wa juu au kurudi kwa mteja.

- **Chaguo tu**, kanuni sawa na uondoaji wa PII (Kanuni Ngumu #20-iliyokaribiana):
  imezimwa isipokuwa `settings.credentialRedactionEnabled === true` **au**
  `CREDENTIAL_REDACTION_ENABLED=true`. Ikiwa imezimwa, kinga ni no-op —
  haizuizi kamwe na kamwe hairekebishi.
- `redactCredentials()` inatembea kwenye mzizi wa payload/jibu (`walkValue()`,
  salama dhidi ya uchafuzi wa prototype, salama dhidi ya mzunguko kupitia `WeakSet`) na inabadilisha mechi na
  kipande cha `[REDACTED:<type>]`, ikikopi tu matawi ambayo kwa kweli
  yalibadilika.
- `CREDENTIAL_PATTERNS` inashughulikia funguo za mtoa huduma wa LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), token za VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), funguo za malipo (Stripe, Square), funguo za wingu
  (funguo za ufikiaji wa AWS, Twilio, SendGrid, Mailgun), funguo za kibinafsi / JWTs,
  nyuzi za muunganisho zenye akreditivu (`mongodb://user:pass@...`, nk.), na
  muundo wa jumla wa kichwa `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Funguo za umbo la kichwa (`authorization`, `x-api-key`, `api-key`,
  `apikey`) zinarekebishwa kimuundo (thamani tu, awali ya mpango kama
  `Bearer `/`Basic ` inahifadhiwa) badala ya kupitia regex ya maandiko ya jumla.
- Kinga kamwe haizuizi; inarekebisha tu (`modifiedPayload` /
  `modifiedResponse`) na kuandika maelezo (`meta.credentialsRedacted`, `meta.count`).

Kinga ya kurudi nyuma: `tests/unit/credential-masker-guardrail.test.ts`.

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
