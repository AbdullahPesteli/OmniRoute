# Guardrails (Hausa)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Madogaran gaskiya:** `src/lib/guardrails/`
> **An sabunta ta karshe:** 2026-08-29 — v3.8.51 (Asalin fassarar Video Bridge an bayyana shi ne ta hanyar mai kiran,
> ba a tabbatar da shi ta server ba tukuna — an yi bayani gwargwadon #11661)

Guardrails suna aiwatar da tsaro, dokoki, da sauye-sauyen abun ciki a iyakar
tsakanin OmniRoute da masu ba da sabis na sama (upstream providers). Kowace guardrail na iya bincika (kuma
da zabi ta ki, ta sauya, ko ta sanya bayani a kan) buƙatun kaya (`preCall`) da
martanin sama (`postCall`).

Tsarin **fail-open** ne: idan wani guardrail ya fadi yayin aiwatarwa, tsarin
rajista (registry) yana rubuta kuskuren kuma ya ci gaba da sauran guardrail maimakon ya sa buƙatar ta fadi.
Tabbatar da block yanke shawara ce ta zahiri (`block: true`), ba ta faru ta kuskure ba.

## Tsarin Kariya na Cikin Gida

Rajistar tana loda kariya guda shida ta atomatik bisa ga tsarin fifiko lokacin shigo da ita
(duba `registry.ts` → `registerDefaultGuardrails()`):

| Fifiko | Sunan               | Mataki(ku)     | Fayil                 |
| ------ | ------------------- | -------------- | --------------------- |
| `5`    | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`    | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`    | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`   | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`   | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`   | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lambobin fifiko masu ƙasa suna gudana **na farko**.

### Bridge na Hangen Nesa (`visionBridge.ts`) — Tsarin Hangen Nesa PR-1

Yana tsallake buƙatun da ke dauke da hotuna da aka nufa ga **samfuran da ba su da hangen nesa** kuma ko dai
yana mayar da dukkan buƙatar zuwa samfurin da ke da ikon hangen nesa ko kuma yana maye gurbin sassan hoton
da bayanan rubutu da samfurin hangen nesa mai iya daidaitawa ya samar kafin
kiran sama. Wannan yana ba masu bayar da rubutu kawai damar sarrafa
manyan kaya na multimodal cikin sauƙi.

Hanyar:

1. Tsallake idan samfurin da aka nufa yana goyon bayan hangen nesa (sai dai idan yana cikin
   jerin tilasta-bridge `isVisionBridgeForcedModel`).
2. Fitar da sassan hoton ta hanyar `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), wanda ke ba da izini ga **hadadden mai gano kafofin watsa labarai**
   `detectMediaParts()` a cikin `open-sse/utils/mediaParts.ts` — tushen gaskiya guda ɗaya da aka raba tare da tacewar dacewar haɗin gwiwa.
   Fitarwa ana ba da izini ga sassan manyan matakai na siffofi
   `replaceImageParts` na iya mayar da su (yarjejeniyar fitarwa↔maye gurbi): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, da Responses API `input_image`. Hitting da aka nested da
   siffofin alama kawai suna cikin kayan tacewa na haɗin gwiwa kuma ba a taɓa fitar da su ba.
   Tsallake idan babu wanda aka samu.
3. Warware saitin lokaci ta hanyar `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): sabbin maɓallan saitin `modalityBridge*`
   suna cin nasara; tsofaffin maɓallan `visionBridge*` suna kasancewa **sauƙin juyawa guda ɗaya**
   (tagomashi na juyawa). Tsallake kafin kowanne tafiya na kafofin watsa labarai lokacin da
   an kashe gado.
4. Mai zaɓin yanayi (`modalityBridgeVisionMode`, duba tebur a ƙasa) yana yanke shawara
   ko za a mayar ko a bayyana. Mayar yana dawo da `modifiedPayload` tare da kawai `model`
   an canza, tare da meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Hanyar bayyana: iyakance hotuna a `maxImages`, tsara aikin da ya dace da aikin,
   tuntubi ajiyar bayyana, kira samfurin hangen nesa **a cikin jere**
   (`Promise.allSettled`), da saka `[Image N]: <description>` sassan rubutu a
   wurin su. Kiran bayyana da ya gaza yana haifar da `null` kuma an **ajiye** sashin hoton asali
   (#4012) — sai dai a kan hanyar bayyana haɗin gwiwa lokacin da dukkan bayyana suka gaza, inda samfurin
   da ba na hangen nesa ba ya sami
   `(unavailable — no vision-capable provider connected)` stub maimakon (#8430).
6. Dawo da `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Mai zaɓin yanayi (`modalityBridgeVisionMode`)

| Yanayi     | Na Gaba | Halayya                                                                                                                                                                                                                                                                                           |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Tsofaffin ka'idoji, ba a taɓa canza ba (#6640/#7204): samfuran da ba na haɗin gwiwa/`auto/` suna mayar da su zuwa samfurin hangen nesa mafi kyau sai dai idan samfurin asali yana da ingantaccen takardun shaida (sai a bayyana); abubuwan haɗin gwiwa koyaushe suna bayyana.                     |
| `describe` |         | Koyaushe bayyana — an tsallake dukkanin block na mayar; samfurin da mai amfani ya zaɓa koyaushe yana amsa.                                                                                                                                                                                        |
| `reroute`  |         | Tilasta mayar: an tsallake kariya ta samfurin da ke da takardun shaida. Kariya ta takardun shaida na **manufa** har yanzu tana aiki — lokacin da babu samfurin hangen nesa mai amfani, buƙatar tana faɗuwa zuwa bayyana don haka hotuna na asali ba za su kai ga bayanan rubutu kawai ba (#8430). |

Hanyoyin tilasta suna gaggawa **kafin** ka'idar auto ta gudana; halayen `auto`
na daidai da byte ga gado na pre-PR-1.

#### Tsarin maɓallin API (`visionBridgeKeyScope.ts`)

Lokacin da maɓallin API na mai kira ya takaita `allowedConnections`, tarin kuɗi
(`allowedQuotas`) ko samfuran (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), gado yana ɗaukar kawai
samfuran mayar da su da bayyana waɗanda maɓallin zai iya amfani da su, akan haɗin da maɓallin zai iya
amfani da su. Kiran bayyana yana wuce ta hanyar juyin kai na OmniRoute tare da
`x-omniroute-self-loop-key-id` header, don haka buƙatar tattaunawa da aka karɓa
yana tabbatar da haɗin maɓallin da tsarin samfurin wannan maɓallin. `enforceApiKeyPolicy()`
yana girmama wannan header kawai tare da mai ɗaukar juyin kai, don haka yana iya kawai
ƙara iyakancewa, kuma id da ba ta warware ba ana ƙin karɓa.

Idan babu samfurin hangen nesa da aka yarda da maɓallin, hanyar bayyana tana tsallake kuma
buƙatar tana wucewa ba tare da canji ba, halayen gazawa da buɗewa iri ɗaya da gado da aka kashe (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Buƙatun da ba su da maɓalli, da maɓallan da ba su da waɗannan takunkumin, suna aiki daidai kamar
kafin.

#### Aikin da ya dace da bayyana rubutu (`modalityBridgeVisionTaskAware`)

Default **gaskiya**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) yana haɗa
rubutun **sako na ƙarshe daga mai amfani** (wanda aka yanke zuwa haruffa 500) zuwa
tushen bayanin da aka bayyana, yana ja bayanin zuwa abin da mai amfani ya tambaya
(patani na codex-vision-proxy) da kuma tambayar samfurin hangen nesa don rubuta
rubutun da ake gani. Idan aka kashe alamar — ko babu rubutun mai amfani — ana amfani da
tushen bayanin ba tare da canji ba.

Buɗe juyin bayanin kanta na OpenAI mai dacewa (`callVisionModelSingle()`
a cikin `visionBridgeHelpers.ts`) koyaushe yana neman `image_url.detail: "high"` —
ba tare da sharuɗɗa ba, ga kowane mai kira/mai bayarwa, ba tare da an rufe shi da
wani siginar abokin ciniki ba. Samfuran ƙananan bayani suna rage ingancin OCR
don ainihin aikin rubuta rubutu da wannan bayanin ke tambaya, don haka kiran
bayanin yana tambayar babban bayani ba tare da la'akari da matakin bayani da
aka yi amfani da shi a cikin buƙatar shigowa ba. Wannan yana shafar kawai
jikin buƙatar bayanin na ciki; ba ya canza yadda OmniRoute ke turawa
`image_url.detail` na mai kira a kan buƙatar farko — wannan tsohon yana
aikace-aikace daban, kuma kawai ga abokan ciniki na OpenCode da aka gano, a
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Ramin
sadarwar Anthropic na juyin bayanin kanta ba shi da filin `detail` kuma ba ya
shafa ko wanne tsoho.

#### Iyakar fitarwa na bayanin (`modalityBridgeVisionMaxChars`)

| Maɓalli                        | Tsoho | Tsarin           |
| ------------------------------ | ----- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`   | `0` ko 100–50000 |

`0` (tsoho) yana nufin **babu iyaka** — bayanin da aka dawo daga
`callVisionModel()` ana wucewa ba tare da canji ba, yana kiyaye halayen
da ake da su. Duk wani ƙima a cikin tsarin 100–50000 yana yanke bayanin tare da
`…` a ƙarshen kafin a haɗa shi a matsayin `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` a cikin `src/lib/guardrails/visionBridge.ts`).
Kara wannan don ayyukan OCR masu nauyi inda samfurin da ke ƙasa ke buƙatar
cikakken rubutu; rage shi don iyakance amfani da token akan samfurin hangen
nesa mai magana. Filin dashboard yana cikin shafin Vision na Advanced
(`modality-bridge-max-chars` a cikin `ModalityBridgeVisionTab.tsx`) kuma yana
ƙuntata kowanne ƙima tsakanin 1 da 99 zuwa ƙasan 100 yayin da yake barin
`0` a matsayin mai tsabta — `0` yana da ingantaccen Zod a cikin kansa
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ba kawai
tsohon "ba a saita ba".

#### Cache na bayanin (`modalityBridge/bridgeCache.ts`)

LRU + TTL cache a cikin ƙwaƙwalwa don fitar da bayanai, wanda aka raba a cikin
tsarin. Maɓalli = `sha256(imageRef + composedPrompt + configuredBridgeModel)` tare da
tsarin tsawo (babu haɗarin iyakar filin). Sashin samfurin shine
**an tsara** samfurin gada, ba samfurin da ya amsa ba —
`callVisionModel` na iya faɗuwa a cikin gida, kuma maɓallin a kowane ƙoƙari zai
raba cache. An taɓa yin bayanan da suka gaza ba a adana su ba. Saituna:

| Maɓalli                         | Tsoho     | Tsarin  |
| ------------------------------- | --------- | ------- |
| `modalityBridgeCacheEnabled`    | `gaskiya` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`      | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`     | 10–5000 |

#### Daidaitawa hoton nesa (juyin bayanin kanta/base64 fetch)

Lokacin da gada ta ɗauki **hoton nesa** kanta — juyin bayanin Anthropic
da canjin claude-wire-format base64
(`ensureBase64ImagesForClaudeWire`), duka ta hanyar
`fetchRemoteImageAsDataUri()` a cikin `visionBridgeHelpers.ts` — URI na bayanin
da aka samu yana wucewa ta `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) kafin a haɗa shi a cikin buƙatar samfurin
hangen nesa. Hotuna masu girma suna ragewa zuwa **2048px gefen tsawo**
(daidai da iyakar girman da OpenAI/Anthropic suka riga suka yi amfani da shi a
bangaren sabar), wanda ke rage yawan bytes/latency ba tare da canza abin da
samfurin hangen nesa ke gani ba. Canjin girman yana amfani da `sharp`, wanda aka
loda ta hanyar shigo da dindindin: a kan dandamali inda binary ɗin sa na asali
ya kasa loda, `normalizeDataUri()` **ba ya jefa** — yana faɗuwa zuwa
wucewar asalin bytes, don haka hanyar bayanin/base64-conversion koyaushe tana
ci gaba da aiki. Non-image bytes (fetch wanda bai dawo da hoto mai iya
karantawa ba) suma ana wucewa ba tare da canji ba. Wannan daidaitawa yana
ƙuntata ga hotuna da gada ke ɗauka don juyinta kanta — ba a taɓa amfani da shi
ga raw passthrough payload na mai kira ba, wanda ya dace da ka'idar canji
na zaɓi kawai (Ka'idar Mai Tsauri #20).

#### Tsarin saituna + hijira

Sabbin maɓallan `modalityBridge*` suna da tabbaci na Zod a cikin `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, ƙungiyar `modalityBridgeCache*`, da
ƙungiyar `modalityBridgeAudio*` da Audio Bridge ke amfani da su. Hijira
`141_modality_bridge_settings.sql` tana kwafe tsofaffin
`visionBridge*` ƙimomi zuwa sabbin maɓallan da suka dace (idempotent, ba ta
overwrite kowane ƙima na `modalityBridge*` da aka saita ta mai aiki ba); tsofaffin
maɓallan suna ci gaba da karɓa a matsayin madadin karatu na tsawon wani
zango na fitarwa.

#### Header na bayyana + kididdiga

Amsoshin da aka canza ta hanyar bayanin suna ɗauke da
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(da aka gina ta `buildModalityBridgeHeader()` a cikin `modalityBridge/bridgeStats.ts`,
an danna ta `withModalityBridgeHeader()` a cikin `src/sse/handlers/chatHelpers.ts`).
Buƙatun da aka sake juyawa ba su da **header** — an bar kayan aikin ba tare da
canji ba kuma canjin samfurin yana riga yana bayyana a cikin filin `model` na
jikin amsar.

`GET /api/modality-bridge/stats` (management auth, same tier as
`GET /api/settings`) yana dawo da ƙididdiga na kowane modality a cikin ƙwaƙwalwar ajiya
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` don `vision`, `audio`, da
`video`. `averageLatencyMs` yana amfani da `latencySamples`, ba duk ƙoƙarin ba, a matsayin
denominator; aikin da ba tare da lokaci ba ba ya ƙirƙiri samfurin milisani na zero. `bridged` yana ci gaba da zama sunan da ya dace da baya don nasarar
canje-canje; ƙoƙarin da ya gaza ba ya ƙara masa.
Ana sake saita ƙididdiga lokacin farawa aikin ta hanyar zane
(telemetry, ba lissafi ba).

#### Tsarin Dashboard

Shafin dashboard da aka keɓe shine
`/dashboard/settings/modality-bridge`. Adireshin URL ɗinsa `Vision`, `Audio`,
da `Video` suna kiyaye ƙarin tambayoyi yayin canza ƙimar `tab`.
Tab na Vision yana bayyana ƙarfafawa, yanayi, zaɓin samfur (ciki har da na'ura mai aiki da kanta
na tsoho), tambayoyin da suka dace da aikin, iyakokin lokaci/ hoton/ tsawon bayanin/ cache
masu zurfi, ƙididdiga na lokacin aiki,
da kuma buƙatar samfurin da aka kare. Tab na Audio ma yana aiki: yana bayyana
ƙarfafawa, mai zaɓin samfurin STT kawai tare da Auto, iyakokin lokaci/ max-clip, ƙididdiga na audio,
da kuma gwajin samfurin `input_audio`. Tab na Video yana aiki: yana bayar da
halin lokacin aiki na FFmpeg/ffprobe — ɗaya daga cikin hudu halin UI na musamman (`unknown` yayin
da aka yi bincike ko ba a kammala ba, `restricted` akan wani mai masaukin dashboard wanda ba a maimaita ba inda aka tsallake binciken a gefen abokin ciniki, `unavailable` bayan an bincika
da tabbatar da rashin samuwa, ko `available` tare da sigar FFmpeg/ffprobe) — yana ci gaba
da iyakokin enable/model/frame/video/timeout, yana tace mai zaɓin samfurin zuwa samfurori masu ƙarfin hangen nesa,
da kuma bayyana ƙididdiga na bidiyo.

Tsohon katin Vision Bridge a ƙarƙashin saitunan AI shine haɗin gwiwa zuwa
sabuwar shafin; ba ya mallaki kwafin na biyu na fom. Masu bayar da Media ma
suna haɗa hanyoyin Image-to-Text da Speech-to-Text zuwa tab ɗin Modality
Bridge ba tare da cire tsohon filin wasa na Speech-to-Text ba.

**Biyu na shigarwa na kai:** lokacin da kiran bayyana ya ratsa ta hanyar
OmniRoute's `/v1` na kai (samfurin mai bayarwa na al'ada), ƙaramin buƙatar yana aika
`x-omniroute-admission-bypass: internal` kuma an tabbatar da shi tare da
takaddun shaida na kai da aka warware — mai tsaron gida `sk_omniroute` a cikin yanayin gida, ko
ma'aikatar da aka saita `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env key (#1350) don
hakan `REQUIRE_API_KEY=true` na iya ci gaba da gudanar da kiran bayyana. Bypass
ana girmama shi ne kawai don waɗannan takaddun shaida, don haka abokan ciniki na waje ba za su iya amfani da
kanun don tsallake shigarwa ba.

Tsohon tsohon suna cikin `src/shared/constants/visionBridgeDefaults.ts`; sabbin yanayi/ aikin da suka dace da cache suna cikin
`src/shared/constants/modalityBridgeDefaults.ts`. Kayan kari yana bayyana
zaɓin gina `deps` don haka gwaje-gwaje na iya shigar da jabu `getSettings` da
`callVisionModel` aiwatarwa.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Yana tsallake buƙatun tattaunawa masu ɗauke da sauti kafin su kai ga wani makasudi wanda ba a san shi ba
yana karɓar shigarwar sauti. Ba ya taɓa canza hanyar buƙatar tattaunawa: sassan sauti suna
fassara ta hanyar hanyar haɗin gwiwa mai jituwa da OpenAI kuma
samfurin tattaunawa da aka zaɓa yana ci gaba da rubutun rubutu.

Hanyar:

1. Warware `supportsAudio` ta hanyar `getResolvedModelCapabilities()`. Bayanan
   rajistar mai bayarwa na musamman yana lashe, sannan bayanan samfur na tsaye, sannan
   `modalities_input` da aka haɗa. Jerin shigarwa da aka bayyana ba tare da `audio` ba yana nufin `false`; babu
   shaidar ƙwarewa tana kasancewa `null`. Duka `false` da `null` suna kunna
   gado mai tsauri, yayin da `true` ke tsallake shi.
2. Warware saitunan `modalityBridgeAudio*` da kuma fitar da sassan sauti na sama daga kowanne saƙo ta hanyar
   mai gano `detectMediaParts()` da aka raba. Tsarin waya da aka goyi bayan sune OpenAI `input_audio`, `audio_url`, da
   `source.media_type: "audio/*"`. Ana gano sauti mai zurfi don hanyar amma ba a
   cire ta ta hanyar splice. Aikin yana iyakance ta `modalityBridgeAudioMaxClips`;
   sassan daga baya suna kasancewa ba tare da taɓawa ba.
3. Girmama `provider/model` da aka saita, ko barin `selectAudioBridgeModel()` ya yi tafiya
   `AUDIO_TRANSCRIPTION_PROVIDERS` a cikin tsari na katako mai ɗorewa kuma ya zaɓi samfurin farko
   tare da ingantaccen takaddun shaida na mai bayarwa.
4. `callAudioTranscription()` yana canza sautin base64/data-URI zuwa multipart
   `file`, ko yana sauke `audio_url` na nesa ta hanyar kari na fita kawai tare da DNS pinning da iyaka na 25 MB. Sa'an nan yana POST fayil ɗin da aka zaɓa
   da samfurin zuwa cikin `/v1/audio/transcriptions` na kai, wanda aka tabbatar da shi tare da
   `resolveSelfLoopBearer()`. Hanyar fassarar da aka riga aka kafa tana gudanar da binciken takaddun shaida na al'ada, sarrafa lokacin hutu/ iyakokin ƙimar, da kuma aika mai bayarwa.
5. Kiran da suka yi nasara suna maye gurbin sassan su da `[Audio N]: <transcript>`. Kiran
   suna gudana tare da `Promise.allSettled`: gazawar mutum tana kiyaye wannan asalin
   sashin sauti (#4012 kwangila). Idan duk kiran sun gaza kuma an tabbatar da makasudin
   `supportsAudio === false`, sassan suna zama
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 kwangila). Don
   makasudi mara sananne (`null`), sakamakon duk-gazawa yana kasancewa ba tare da taɓawa ba. Makasudin da aka tabbatar da cewa yana rubutu kawai tare da babu ingantaccen takaddun shaida na STT yana karɓar wannan jabu
   ba tare da yin kiran hanyar sadarwa ba.

Nasara fassarar suna amfani da tsarin Modality Bridge LRU/TTL cache na dukkan tsarin. Maɓallin yana haɗa
da nuni na sauti, alamar aikin `audio-transcription` mai ɗorewa, da samfurin STT da aka zaɓa; gazawar ba a taɓa ajiye su ba. Ƙoƙarin sauti suna sabunta
`bridged`, `cacheHits`, `failures`, da `lastUsedAt` ƙididdiga.
Amsoshin da aka canza suna ɗauke da
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; buƙatun da ba a taɓa ba
ba su karɓi wani ɓangare na Audio Bridge ba.

Saitunan lokacin aiki suna goyan bayan DB kuma an tabbatar da su da Zod:

| Key                           | Default | Range          |
| ----------------------------- | ------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —              |
| `modalityBridgeAudioModel`    | `""`    | Auto ko STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10           |

Cache ɗin da aka raba yana ƙarƙashin kulawar `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, da `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Yana tsoma baki a cikin manyan sassan bidiyo a cikin Chat Completions `messages` da Responses
API `input` kafin a kira wani manufa ba tare da sanannen goyon bayan bidiyo na asali ba.
Tsarin da aka goyi bayan sun haɗa da `input_video`, `video_url`, `video_source`, HTTPS URLs,
da `data:video/*;base64,...` data URIs. Sunayen fayil a cikin rubutu ba a ɗauka
a matsayin bidiyo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) yana da alhakin binciken buƙata,
duba ƙarfi/ka'idoji, tarin kowane buƙata, da kuma kayan amsa.
Aikin kowanne bidiyo — samun, cache na dukkan sakamakon, bayyana jerin fuskoki
(wanda ke haɗa duk wani rubutun sauti da mai kira ya bayyana), da kuma ƙididdiga/tsayawa/tsabtacewa
na kowane ƙoƙari — yana ɓoye a bayan `processVideoPart` a cikin
`videoBridgePipeline.ts`, wanda aka kira sau ɗaya a kowane ɓangare na bidiyo a cikin
jirin `preCall`. Wannan module kuma yana bayyana iyakokin tashar da aka bayyana
`VideoMediaBrokerPort` (samu bytes da fitar da fuskokin da aka ɗauka),
`VideoAudioTranscriptionPort` (haɗa rubutun sauti da mai kira ya bayyana tare da
rubutun da aka ɗauka), da `VideoDrilldownPort` (tsarin tsohon ajiyar raw).
Samun STT na samarwa da riƙon fuskoki ana haɗa su a kusa da tashar da ke bayyana
ta hanyar `createVideoSttAdapter` da `createVideoDrilldownAdapter`;
wannan na ƙarshe yana amfani da rayuwar rufin da aka raba.

Hanyar buƙatar `/v1` ba ta taɓa shigo da ko kira wani ƙaramin tsari ba.
Bidiyon nesa ana sauke su a ƙarƙashin iyakar 50 MiB; bidiyon inline na base64
yana da iyakar 36 MiB da aka fassara a kowanne bidiyo don haka samfurin/messages/envelope
na framing zai iya kasancewa a cikin iyakar shigar da buƙatar JSON na jama'a na 50 MiB.
Ana duba tsawon inline da kimar girman da aka fassara kafin a raba. HTTPS
ana buƙata a kan URL na farko na nesa da kowane juyawa, yana amfani da
tsarin kariya na jama'a kawai tare da DNS pinning. Bytes suna wuce
iyakar broker na ciki na `POST /api/modality-bridge/video/extract`.
Wannan hanya tana da `LOCAL_ONLY` da `SPAWN_CAPABLE`, tana karɓar
kawai buƙatar da aka tantance, amintacce, da ke juyawa, kuma ba ta karɓi
URL, hanyar fayil, executable, ko jerin hujjoji. Jirgin jiki na API da
mai karɓar jiki na ƙarin mai karɓa suna tilasta iyakar shigar broker na 50 MiB.
Queue ɗin da aka iyakance yana gudanar da ɗaya fitarwa a lokaci guda, yana
ba da izinin ayyuka hudu masu jiran, kuma yana iyakance shigar da
masu jiran zuwa 100 MiB.

A cikin broker, `ffprobe` yana karanta fayil na gida; jerin tsarin da aka
ƙayyade yana cire tsarin jerin waƙoƙi da na bayyana. Don containers na MOV-family
da aka yarda, bayanan MOV na waje suna kasancewa a kashe ta tsohuwa, kuma
umarnin da aka ƙayyade ba ya zaɓar su. Duka `ffprobe` da `ffmpeg` suna
amfani da jerin tsari na `file` kawai, wani zaren, jerin hujjoji da aka
ƙayyade, babu shell, da executables da aka warware daga `PATH`.
Hanyoyin rufin hoto da aka haɗa ba su zama masu yiwuwa ba. Dukkan
hanyoyin da za a iya kunna su dole ne su cika iyakokin, kuma
ana fifita ruwan hoto na tsohuwa kafin a dawo da mafi ƙarancin
index na tabbatacce. Bidiyo suna iyakance zuwa 600 seconds, 8,192 pixels
kowane dimension, da 33,554,432 pixels na asali. FFmpeg yana ɗaukar
1–16 midpoint JPEG frames, yana rage gefen dogon zuwa aƙalla 1,024 pixels
ba tare da haɓaka ƙaramin shigar ba, kuma ba ya karɓi URL.
Samun shine `uniform` ta tsohuwa. Zaɓin `scene_aware` da
`segment_aware` suna aiwatar da ƙarin wucewa na FFmpeg a kan
hanyar gida da aka tabbatar, suna zaɓar timestamps na
`showinfo` na iyakance, kuma suna dawo da tabbatacce zuwa
irin waɗannan midpoints na uniform a kan gazawar mai gano,
lokaci, fitarwa mara kyau, ko saitin mai yiwuwa mara komai.
Yanayin segment-aware yana raba samfurin midpoint bisa ga
lokutan sahihan shahararru; shaidar segment-aware da
halayen dawo suna cikin bayani a ƙasa. Iyakacin 16-frame
ana amfani da shi bayan zaɓi a cikin kowanne ka'ida.
Lokacin da buƙatar da aka san ta da scene tana da kasafin
ƙarin frame guda, tana amfani da midpoint na uniform na
cikakken bidiyo ko taga mai ma'ana kuma tana bayar da
`policyEffective: uniform`: frame ɗin scene guda da aka zaɓa
ba zai iya adana duka ƙarshen lokaci ba. Mai kira na iya
zaɓar bayar da taga mai ma'ana (`start`/`end` seconds);
iyakar suna da iyaka ga tsawon kafofin watsa labarai,
tawagar da aka juyawa ko waɗanda ba su da iyaka suna
karyatawa, kuma duk ka'idojin samfurin suna aiwatar da su
ne kawai a cikin iyakar da aka daidaita. Taga da aka samu
ana haɗawa a cikin metadata na samfurin da kuma a cikin
sashin bayanin da ba a yarda da shi don haka samfurin
da ke ƙasa na iya bambanta tsakanin ɓangaren da aka mai da hankali
da cikakken lokaci.

Fahimtar rubutun mai ma'ana yana da saitin daban, na musamman.
Yanayin nazarin `full` na tsohuwa yana adana
rubutun fuskokin da ke akwai kuma ba ya wuce rubutun
buƙata zuwa samfurin rubutu. A cikin yanayin `focused`,
bridge yana karanta kawai sabon rubutun mai amfani
na `text`/`input_text` daga wannan Chat ko Responses
container, yana daidaita shi zuwa NFC, yana rage
haruffa masu sarrafawa da sarari, kuma yana iyakance shi
zuwa 500 Unicode code points. Sakamakon da ba shi da komai
yana dawo da rubutun `full` na daidai. Hujja mai amfani
ana jera shi a matsayin JSON a cikin wani sashi na
untrusted-user-context kuma na iya fifita
bayanan da za a iya gani kawai; ba za ta iya
wuce gargadin daban akan bin umarni da ke bayyana
ko jin a cikin kafofin watsa labarai ba. Mai ma'ana
rubutun ba ya ƙayyade `start`/`end` ko canza
samfurin lokaci.

#### FU-07 shaidar sashi na tsari

`segment_aware` yana amfani da watsa bayanai guda ɗaya da aka iyakance akan rukunin bidiyo na gida da aka tabbatar. Tsarin tacewa na dindindin yana farko yana daidaita zuwa aƙalla pixels 320 fadi, yana gano canje-canje na yanayi da tsayawar lokaci, sannan yana ɗaukar samfurin a 1 frame a kowace dakika don blur, matsakaicin luma, da bayanan sarari/na lokaci. Wannan watsa bayanai yana iyakance ga samfurin tsari 600, ɗaya FFmpeg/filter thread, tsarin `file`-kawai da jerin abubuwan kwantena, iyakar fitarwa na 1 MiB, da aƙalla 30 seconds a cikin lokacin rabuwa/ƙayyadadden mai kula. Ba ya taɓa karɓar umarni, tacewa, hanya, ko URL daga buƙatar.

Darajar tsari suna zama shaidar samfurin mai tsari, ba fahimtar bidiyo mai ma'ana ba. Ba su fahimci batutuwa, ayyuka, rubuce-rubuce, magana, ko niyyar mai amfani ba. Iyakokin yanayi da tsayawar suna ƙirƙirar sassa; rufin tsayawa, blur, haske, bayyanar sarari, da canjin lokaci suna shafar yadda aka raba kasafin kuɗi na 1–16 frame. Sashe mai tsayawa yana iyakance ga frame guda, yayin da sassan da ba su tsaya suna fafatawa don sauran kasafin. Lokacin da iyakokin suka fi frames yawa, ana kiyaye rufin lokaci mai ma'ana don cewa gajerun yanke-yanke na farko ba za su iya ɓoye wani sashe mai tsawo ba. Iyakokin yanayi a cikin ƙayyadadden nazarin na 1-second na iyakar tsayawa suna haɗuwa.

Rashin tacewa, shaidar da ba ta dace ba/ta ƙunshe, kuskuren mai gano, ko ƙayyadadden lokacin watsa bayanai suna faɗa a bude ga daidaitaccen tsari na tsakiya. Wani kira na rabuwa ko ƙayyadadden mai kula ba ya faɗa a bude: yana dakatar da aikin da ke gudana, yana hana fitar da frame daga baya, kuma ana cire itacen wucin gadi a cikin `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` yana ƙirƙirar ainihin FFmpeg fixtures don ajiye kuɗin kiran rubutu bayan an cire maimaitawa, rarraba kasafin motsi mai yawa, shaidar blur/exposure/SI-TI, gajerun yanke-yanke tare da dogon jiki, da ƙarya-fade na ƙarya. Yana rubuta lokacin bango na watsa bayanai kuma, inda `/usr/bin/time` ke samuwa, CPU na yaron da peak RSS. Duban ingancinsa suna zama tsari kawai. Ingancin ainihin samfurin rubutu yana ci gaba da kasancewa `HOLD` saboda wannan kayan aikin ba shi da wurin karɓa da aka ba da izini ko mai hukunci mai tsayawa. Ajiye kuɗi ma yana ci gaba da kasancewa `HOLD` sai dai idan `--caption-cost-per-call-usd` ya bayar da ƙima mai kyau ta kiran; rubutun ba ya ƙirƙirar kowanne sakamako.

Kowane frame yana iyakance ga 4 MiB, dukkan frames na asali suna zuwa 23 MiB, da martanin mai kula da aka tsara yana zuwa 32 MiB. Ana cire babban directory na wucin gadi a cikin `finally`. OmniRoute ba ta haɗa FFmpeg kuma ba ta karɓi hanyar gudanarwa ta musamman. Kafin rubutawa, gado yana amfani da watsa bayanai na gani mai tsauri: kowane JPEG yana ragewa zuwa buffer na 16×16 grayscale kuma ana kwatanta shi ne kawai da frame na ƙarshe da aka riƙe. Don kasafin rubutu da aka nema sama da frame guda, fitarwa tana bayar da
tsohon jerin masu yiwuwa na har zuwa sau biyu na wannan kasafin kuma ba fiye da frames 16 ba. Ana amfani da iyakar da aka nema ne kawai bayan an cire maimaitawa, tare da farko da ƙarshe zaɓaɓɓun masu yiwuwa suna riƙe a lokacin ƙarshe lokacin da kasafin ya kai aƙalla biyu. Tsarin
`grayscale-16x16-mean-cells-v2` yana amfani da mafi girma na matsakaicin luma delta da
rabo na cells na thumbnail wanda delta ɗin da aka daidaita ya kai aƙalla 0.05. Iyakokin maimaitawa shine dindindin 0.04, wanda aka zaɓa don tsayayya maimakon a bayyana a matsayin saitin lokacin gudanarwa. Wannan siginar
mai tsananin bambanci yana kiyaye ƙaramin motsi da canje-canje na rubutu da za a iya ɓoye su ta hanyar kwatancen kawai na matsakaici. Kuskuren mai kwatanta ko mai fassara suna faɗa a bude kuma suna kiyaye rufin. Metadata na fitarwa yana raba masu yiwuwa da aka fitar, frames da aka yi amfani da su, da kwatancen gani da aka zubar.

Wani ɓangare na bidiyo da aka bayyana a fili na iya neman takardar tuntuɓar da aka yi wa lokaci. Gado yana gina grid na JPEG tare da kolum 4, frames 16 a mafi yawa. Kowane cell na pixels 512 yana ƙonewa da lokacin asalin sa a cikin babban ruwan ƙarshe, yayin da waɗannan lokutan suke a cikin metadata na rubutu don haɗin gwiwa da bincike. JPEG ɗin da aka kammala yana ci gaba da kasancewa a iyakar 32 MiB. Idan `sharp` ba zai iya fassara ko haɗa grid ba, gado yana komawa ga frames JPEG na mutum; rabuwa daga abokin ciniki har yanzu yana wucewa ta hanyar aikin takardar.

Shaidar inganta tana nesa da haɗin gwiwar ƙirƙira na microbenchmark. `scripts/perf/video-bridge-contact-sheet-eval.ts` yana bayyana tsarin da aka tsara na A/B don ainihin samfuran hangen nesa masu dacewa da OpenAI. Yana auna adadin tokens da mai bayarwa ya bayar, jinkirin bango na gaba ɗaya (ciki har da haɗin takarda), adadin kiran samfur, da riƙon gaskiya da aka bayyana a cikin jerin abubuwa. Ba a rubuta amsoshin samfur na asali a cikin rahoton; kawai SHA-256 digests da IDs na gaskiya da aka dace ne aka riƙe. Kayan aikin ba ya yin kiran hanyar sadarwa ko samfurin da aka biya sai dai idan `--execute-real` an wuce kuma `--model`, `OMNIROUTE_BASE_URL`, da `OMNIROUTE_API_KEY` an saita. Ba tare da wannan gudanarwar a fili ba, hukuncin da za a iya karantawa na na'ura yana ci gaba da kasancewa `HOLD`; auna nauyin kaya/ƙididdigar kira kawai ba su zama shaidar inganta ba.

Wannan rukunin `scripts/perf/video-bridge-promotion-eval.ts` yana amfani da FU-07 ko FU-09 lura. Shiga inganta yana buƙatar dukkan nau'ikan yanayi guda takwas na ƙirƙira da kuma faifan ainihi da aka tsabtace, aƙalla maimaitawa uku a kowane rawa da hali, dukkanin ƙididdiga goma da aka bayyana, shaidar kafofin watsa labarai/umarnin/ƙididdigar da aka tsammani/saido, IDs na lura na musamman da tabbatar da tsari na A/B. Takardar shaidar aiwatarwa tana haɗa da digest na corpus, daidaitaccen SHA na masu yiwuwa da sabuntawar samfur. Rashin ko auna da ba ta dace ba suna ci gaba da kasancewa `HOLD`, ciki har da CPU sama da 30 s, peak RSS sama da 512 MiB ko watsa bayanai sama da 30 s. Waɗannan suna zama iyakokin shaidar shigarwa, ba sabon tabbacin aiwatar da RSS ba.

FU-07 yana buƙatar aƙalla 98% riƙewar inganci da p95 jinkirin ba fiye da 1.2x
tushen, tare da ko dai ingantaccen maimaitawa na 0.05 a cikin kiran maƙalar daidai, ko kuma aƙalla 10% ƙasa da maimaitawar kiran maƙalar bayan an cire. FU-09 yana buƙatar aƙalla 0.85 inganci, 95% riƙewa, 20% rage jinkirin p95 da 10% rage alamu. Asarar muhimmin gaskiya, bin ka'idoji ko rashin amfani yana hana inganta. Wani aiwatarwa ba zai iya inganta komai ba: `--previous-report` yana tabbatar da aiwatarwa guda biyu masu bambanci, ba su haɗu ba, masu cancanta a jere na tsarin/manhaja/mai yiwuwa/jerin. Wani gwajin samfur ba zai iya tabbatar da gwajin takardar tuntuɓar ba.

Masu tattara bayanai ya kamata su ba da maki ga amsoshi a cikin ƙwaƙwalwa kuma su adana `responseDigest` tare da
ma'auni da haɗin lura, ba tare da rubutun amsa ba. Mai amfani kuma yana karanta tsofaffin lura na asali amma ba ya taɓa kwafa wannan rubutun cikin rahotanninsa. Daya daga cikin `responseDigest` ko `rawResponseText` ana karɓa don kowanne lura. Jerin izini mai sigar yana ci gaba da zama fanko tare da `hold` na dindindin. Shiga mai cancanta yana buƙatar shaida, ka'ida, gyaran samfur, takamaiman SHA na mai yiwuwa, digest na manifest da IDs guda biyu na gudanarwa; yanayi masu rikici ana ƙin su. Waɗannan bayanan suna matsayin kwangilar bincike, ba hujja cewa fayil ɗin da aka ambata yana ƙunshe da ainihin ma'auni ba. Duba takardun da suka dace kafin ƙara kowanne shigar. Hanyar kididdiga ta gudanarwa da dashboard na Bidiyo suna bayyana karfin karɓa. Sunan samfur da aka saita kawai ba ya kafa gyaransa ko
SHA na mai yiwuwa, don haka dashboard na yanzu yana bayar da `HOLD` maimakon sake amfani da cancantar daga wani yanayin aiwatarwa. Zaɓin gwaji na musamman yana ci gaba da zama daban daga inganta; babu tsoho da aka canza ta atomatik.

Masu kira na iya haɗa zaɓin `transcript.cues` zuwa wani ɓangare na bidiyo da aka goyi bayan lokacin da suka riga sun mallaki rubutun da aka daidaita. Kowanne alama dole ne ta ƙunshi `text`, wani iyakacin `start`/`end` a cikin lokacin da aka bincika, da `source` da aka ba da izini (`client`, `embedded`, ko `audio-bridge`); `confidence` yana zama `1` kuma dole ne ya kasance tsakanin `0` da `1`. Ainihin alamomin maimaitawa ana haɗa su. OmniRoute ba ya fara rubutun daga wannan bayanan: an kwafa alamomin da aka tabbatar cikin sakamakon da aka bayyana tare da tushe, amincewa, da iyaka, kuma ana fassara su a matsayin lura marasa amincewa tare da rubutun fuskokin. Rubutun da ba daidai ba, wanda ya wuce iyaka, ko wanda ba shi da tushe ana ƙin su maimakon haɗawa cikin ruwan rubutu. Dukkanin tashoshin rubutun jiki suna daidaita tushe da aka bayar zuwa `client`, gami da `embedded` ko `audio-bridge` da aka bayyana. Kawai mai haɗin kai na uwar garke ne zai iya sanya waɗannan alamomin amintattu ta hanyar hujjar `trustedSource` kawai; filin JSON na buƙata ba zai iya kaiwa ga wannan hujjar ba. Rubutun transcript yana kasancewa abun ciki wanda ba a yarda da shi ba, duk da asalinsa, kuma ba ya kamata ya ƙayyade izini.

Wani mai kira na iya bayar da `audioTranscript` track don wannan bidiyon; ana ɗaukar sa a matsayin rubutun da abokin ciniki ya bayar, ba hujja ta rubutun uwar garke ba. Tashar haɗin gwiwa tana gudanar da lura na gani da sauti a ƙarƙashin
ƙayyadadden lokaci da siginar tsayawa, tana tsara su a kan lokaci guda, tana haɗa ainihin maimaitawa, kuma tana bayar da sakamakon ɓangare lokacin da ɓangare guda ɗaya kawai ya yi nasara. Wani `audioTranscript` mara inganci yana raguwa zuwa wannan sakamakon ɓangare — ana adana bayanin gani kuma ɓangaren sauti yana rubuta lambar gazawa mai tsafta — maimakon gazawa duka bidiyon. Bisa ga samuwa na kowanne ɓangare, alamar ɓangare, da lambobin gazawa masu tsafta ana adana su a cikin sakamakon da aka bayyana, a cikin bayanan kariya (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), a cikin bayanan ajiyar sakamakon, da kuma a cikin ƙididdigar haɗin gwiwa. Hanyar tsohon Bidiyo Bridge ba ta kaddamar da magana zuwa rubutu
ko sauke kwafin kafofin watsa labarai na biyu; ba tare da wannan takardar da aka bayyana ba, yana kasancewa kawai bidiyo.

**Riƙewar transcript (#12150 P1).** Wannan yana aiki ta atomatik duk lokacin da
Bidiyo Bridge (kansa zaɓi) ya fitar da alamar rubutun — babu wata alamar riƙewa ta daban. Lokacin da buƙata ta fitar da kowanne alamar rubutun (wannan mai kira ya bayyana `transcript` ko `audioTranscript` da aka haɗa), kariya tana alamar ta `videoBridgeObserved` kuma tana samar da inuwa mai gyara na bayanin bidiyo —
wani fassarar da aka yi daidai inda kowanne jigon rubutun kyauta yana maye gurbin da `[redacted-video-transcript]`, wanda aka gina ta hanyar maye gurbin filin jigon da aka tsara kafin a haɗa rubutun (ba ta hanyar fassara rubutun da aka murɗa ba, don haka babu abun ciki na jigon — na adawa ko na al'ada, gami da jigon da ke ƙunshe da `]` kamar
`[inaudible]`/`[music]` — zai iya tsira). Jikin buƙatar da aka adana yana musanya kowanne ɓangaren rubutun da aka samo daga bidiyo don wannan inuwa mai gyara, wanda aka dace da daidaito na abun ciki; an sake karanta `fullText` daga kayan kariya na pre-call da aka gama, don haka daidaiton yana ci gaba da nasara bayan kariya na jere na gaba (masu rufe PII da takardun shaidar, fifiko 10/95) suna sake rubuta rubutun bayanin a wuri da bayan tsarin-ƙaddamarwa/haɗin gwiwa/ƙarin ƙwaƙwalwa suna sake fasalin jerin saƙon. Jikin da aka tura sama zuwa samfur ba ya canza. Wani buƙata da aka lura kuma ba ta cika ƙwaƙwalwa ba (dukkanin fitar da buƙata da amsa an tsallake), don haka amsar kanta ba za ta iya maimaita rubutun transcript cikin ƙwaƙwalwa ba.

**Fannon bidiyo na asali (#12430).** Lokacin da aka kunna gado kuma goyon bayan bidiyo na asali ba a sani ba ko babu, an bayyana `transcript`/`audioTranscript` fannonin kuma suna kunna `videoBridgeObserved`, ko da bayan gazawar bayanin ko iyakar `maxVideos`. `null` da sararin rubutu suna ƙidaya; fannonin da ba su wanzu ba da bayanan da ba bidiyo ba ba su yi haka ba. An adana kwafi suna gyara waɗannan fannonin ko kuma suna watsi da buƙatar, kuma ana tsallake ajiyar/ƙwaƙwalwa.

A kan waɗannan hanyoyin dawo, ingantattun kiran mai kira suna zama goyon bayan `text`/`input_text` sassa maimakon filayen mai bayarwa na rashin tsari. Dukkanin tracks da aka bayar ta hanyar buƙata suna kasancewa a matsayin `client` observations marasa amincewa, tare da gargadi na musamman cewa bidiyon ba a bayyana shi ba kuma lokutan ba a tabbatar da su da kafofin watsa labarai ba. Tsarin 256-cue/64-KiB jimlar da kasafin kowane cue yana aiki a kan waɗannan tracks guda biyu tare; lokutan dole ne su dace da iyakar 600-seconds na broker da kowane taga mai mayar da hankali da aka bayar. Ana zubar da tracks marasa inganci, ba a tura su a matsayin rubutu ba; ana iya amfani da ɗan uwan ingantacce sai dai idan an wuce kasafin haɗin su. Filayen Null/empty ba su ƙara wani rubutu ba. Babu wani karɓar kafofin watsa labarai ko rubutun da aka ƙara ta wannan dawo. Ana cire filayen faɗaɗa rubutu daga mai ɗaukar bidiyon dawo da kuma abubuwan `video_url`/`source`. Jerin izinin OpenAI yana kasancewa mai tsauri; mai ɗaukar bidiyo na asali marasa sananne suna nan a cikin samuwa kuma sanannun wuraren rubutu kawai suna riƙe alamomin tsaro. Hanyoyin redaction masu tsari suna kare rubutun da aka haɗa, yayin da buƙatar mai kira na asali ke ci gaba da kasancewa ba tare da canji ba. Wuraren da aka goyi bayan na asali da gadoji da aka kashe suna riƙe halayen bypass na yanzu.

Kwatancen da aka riƙe suna amfani da siginar buƙatar da aka lura da ita. Hoton buƙatar mai amfani na farko, a cikin ƙwaƙwalwar ajiya, da log na buƙatar da aka ƙi a farkon suna maye gurbin filayen rubutu a cikin sassan bidiyo; umarnin rubutu da aka ƙirƙira ta matakan pipeline da canja wurin mahallin ana redacted a wurin jikin buƙatar da aka adana. Alamar `video_content_removed` da aka adana tana sa ci gaba da `previous_response_id` ya kasa rufewa maimakon sake gina rubutun da aka zubar da shi da gangan. Idan buƙatar da aka lura da ita ta rasa inuwa redaction a kowane sashi kafin a rubuta, ko ma ɗaya daga cikin shadows na bidiyo da yawa ta kasa dacewa bayan canje-canje na buƙata daga baya, jikin buƙatar da aka riƙe yana cire gaba ɗaya maimakon riƙe rubutun da aka redacted a ɓangare.

Don buƙatar da aka lura da ita, amsar samfur na iya ambaton kowane ɓangare na rubutun ba tare da iyakar kiran tsari ba. Saboda haka, `responseBody` na log na kira da aka adana yana maye gurbin alamar watsi; kayan aikin pipeline na daki-daki (wanda zai iya haɗawa da jikin upstream/client da ɓangarorin yawo) ba a riƙe su ba. Cache na ma'ana, idempotency, da reasoning-replay suna bypass karatu da rubuce-rubuce don wannan buƙatar. Buƙatar mai bayarwa da amsar da mai amfani ke gani suna ci gaba da kasancewa ba tare da canji ba. Ana zubar da bytes na farko na keepalive daga buffer na wucin gadi lokacin da aka watsi da kayan aikin daki-daki. Gargadin Kiro na EventStream mara kyau yana bayar da rahoton kawai adadin bytes na payload, ba tare da abun ciki ko kuskuren asalin mai fassara JSON ba. Wannan ba ya yi ikirarin cewa an duba duk wani bincike na mai bayarwa/plugin da ba su da alaƙa; ana bin diddigin faɗakarwa na riƙe a cikin #11658.

Rayuwar `/api/modality-bridge/video/drilldown` na ciki yana zama wani abu daban, cache na loopback/token-authenticated. Kowanne aiki yana buƙatar ID na asali mai ɗauke da hoto. Kafin a ba da izinin mai kira na samarwa, dole ne ya samo wannan ID daga mai haya da aka tantance kuma ba zai taɓa tura wani ƙima da mai amfani ya zaɓa ba. Mabuɗan cache suna haɗa wannan asalin da ID na zaman canonical da na bidiyo, suna adana kawai mabuɗan da aka samo daga SHA-256, kuma suna iyakance karatu da goge zuwa wannan asalin. Cache yana adana a kalla hotuna 16 na JPEG da aka samo a kowane shafi, yana ƙare su bayan mintuna goma, kuma yana goyon bayan karatu ko goge zaman da aka iyakance `start`/`end`.

Kowane asali yana da iyaka na shafuka 16 da 64 MiB na bayanan JPEG na canonical. Waɗannan iyakokin suna zaman kansu daga iyakar duniya ta shafuka 64/256 MiB: matsin lamba na asali yana fitar da kawai shafukan da aka yi amfani da su na ƙarshe kafin a yi la'akari da fitar da LRU na duniya. Ana zubar da shafukan da suka ƙare daga asalin da kuma lissafin duniya akan aikin cache, yayin da soke da gazawar tantancewa ba su yi rajistar maye gurbin ɓangare ba.

Cache yana ƙin Base64 mara tsari, ƙarin padding, kafofin watsa labarai marasa JPEG, JPEGs mara kyau ko waɗanda aka yanke, da JPEGs da ke haifar da gargadi yayin cikakken hoton `sharp` decode. Yana sake loda kowanne hoto da aka karɓa a matsayin JPEG na canonical, yana samo fadi da tsawo daga bytes da aka fassara maimakon dogaro da filayen mai kira, kuma yana zubar da duk wani bytes na polyglot da suka biyo baya maimakon riƙe su. Kawai buffer na canonical da aka matsa yana cajin duka kasafin. Iyakokin JSON na waya sun haɗa da ƙarin Base64 don iyakar 32 MiB na shigar da aka fassara. Kowanne
samar da aka adana yana rubuta tsarin JPEG da aka tabbatar/ma'auni, tsarin samfur, sigar samarwa, lokacin ƙirƙira, hash na abun ciki da aka ƙirƙira ta uwar garken, da hash na mahaifin abun ciki na mai kira mai amincewa. Ana duba soke tsakanin matakan fassara/hash na asynchronus kafin a yi rajistar cache na atomatik.

Mai samarwa na samarwa yana sake amfani da hotunan broker da aka riga aka samo kawai bayan nasarar nazarin hoto, ba tare da saukar bidiyo na biyu/ƙarɓa ba. Yana buƙatar `modalityBridgeVideoDrilldownEnabled=true`, tsauraran `drilldown: true` na kowane sashi, da ID na rajistar API-key da aka tantance. Ƙimar asalin/zaman da mai amfani ya bayyana ba ta taɓa kafa mallaka ba. Ba tare da duk waɗannan sharuɗɗan guda uku ba, ba ya loda, gyara ko riƙe ƙarin hotuna. Gazawar riƙewa tana adana amsar hoto mai amfani. Buƙatun da aka yarda suna bypass dukkanin cache na sakamakon bidiyo don haka sakamakon da aka adana ba su taɓa sake juyawa ba.

Successful JSON da SSE amsoshi suna bayyana a kalla handles hudu masu duhu a cikin iyakance `x-omniroute-video-drilldown` header. Asalin burauzan da aka ba da izini na iya karanta wannan header ba tare da fadada tsarin manufofin CORS ba. Sabbin handles suna amfani da `v1.<32-byte random base64url token>`, kuma rajistar tana adana kawai hashes na SHA-256 nasu. Mai karatu/masu fassara header suna karɓar tsofaffin 64-hex tokens. Masu amfani da aka tabbatar suna da
`GET /api/v1/video-bridge/drilldown?handle=...`, wanda aka raba ta hanyar
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Kafa da aka adana a fili ta hanyar janye
na gaskiya yana janye damar ko da lokacin da tsohuwar `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env
fallback yana kunna. Adana a cikin samarwa yana da tsohuwar
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Dukkanin fallbacks suna farawa daga kashe.

Masu amfani suna samun mallaka daga mabuɗin da aka tabbatar, suna amfani da manufofin mabuɗi, kuma
suna dawo da 404 guda ɗaya don handles marasa sananne, waɗanda suka ƙare da kuma na wani mabuɗi. Yana karɓar
`variant=preview|standard|detail` (matsakaicin girman JPEG 320/640/1280, ba a taƙaita ba),
`limit=1..8` (ko tsohuwar `frames` alias, ba duka ba), zero-based `page`, da zaɓi
`start`/`end` seconds na mai da hankali. Maɓallan tambaya masu maimaitawa da windows na mai da hankali
suna ƙin karɓa. Kowanne variant da aka dawo da shi yana da hash
na ainihin abun ciki da ainihin bayanan ƙuduri, wanda aka haɗa da tushen da aka adana.
Variants suna samuwa a karatu maimakon a adana a matsayin ƙarin kwafi da aka adana.
Amsar JSON, gami da Base64/envelope, an iyakance zuwa 32 MiB; shafin da ya yi yawa yana dawo da
413 kuma abokin ciniki dole ne ya nemi ƙananan frames. Karatu suna duba janyewar a kusa da kowanne
resize da sake duba ingancin handle kafin dawo da shi. `DELETE` ta mai shi yana da idempotent;
goge ko ƙarewar TTL yana sakin tushen da aka adana da lissafin amfani.

Store ɗin da aka raba yana cikin tsari na gida: handles suna ƙarewa lokacin sake farawa
kuma ba za a canza su tsakanin tsarukan OmniRoute masu zaman kansu ba. Kididdigar gudanarwa suna bayyana
ingantaccen adana/
manufofin nesa da adadin shigarwa/bytes da aka adana kawai, ba tare da kafofin watsa labarai,
ma'auni, IDs na babban ko handles ba. Panel na saitunan Bidiyo yana nuna waɗannan ƙimar kuma
na iya adana duka canje-canje na yarda. Wannan takaddar aiwatarwa ba shaidar aikace-aikacen kai tsaye
ko inganta ba; karɓar ainihin samfur yana bin diddigin daban.

Frames suna da taken a jere tare da samfurin Bidiyo da aka saita. Wani
override na Bidiyo mara komai yana gaji da saitin Vision; idan duka suna da komai,
auto-router na Vision yana zaɓar samfurin da zai iya gani. Nasarar taken
suna maye gurbin ɓangaren asali tare da `[Video description:` prefix wanda kuma
ke nuna rubutun a matsayin wani abu daga kafofin watsa labarai wanda ba a yarda da shi ba
kuma yana gaya wa samfurori masu zuwa kada su bi umarnin da aka samo a cikin kafofin watsa labarai.
Maɓallan cache na frame-caption suna haɗa da bytes na JPEG, tambaya, lokaci, da samfurin da ya dace;
kawai nasarar taken ne aka adana. Shigarwar cache suna adana ainihin samfurin mai samarwa
na nasara, gami da samfurin fallback; gado yana bayar da rahoton `mixed` lokacin da aka samar da
frames daban-daban ta hanyoyi daban-daban. Samun cache yana sake amfani da wannan
mabuɗin mai samarwa maimakon sake sanya shi a matsayin shirin jigilar da aka nema.
Cache na sakamakon dukkan bidiyo yana da maɓalli akan kowanne shigarwa wanda ke canza
sakamakon — tambaya, samfurin da ya dace, manufofin samfur, adadin frame, yanayin
binciken ma'ana, SHA-256
fingerprint na alamar mai da hankali da aka daidaita, taga mai da hankali,
`transcript`,
`audioTranscript`, da alamar takardar tuntuɓar — don haka canza kowanne daga cikin waɗannan
dimenshiyoni yana zama rashin samun cache, ba tare da sake amfani da tsofaffi ba.
Version na manufofin dedup na gani, iyaka, da adadin frames na mai yiwuwa
suna kuma bayyana a cikin maɓallin cache na sakamakon da metadata; canjin manufofi
saboda haka ba zai iya sake amfani da bayanin dukkan bidiyo na tsoho ba. Metadata na cache na sakamakon v4
yana adana yanayin da
fingerprint, ba tare da aikin mai amfani na asali ba. Metadata na guardrail yana bayar da rahoton
duka yanayin bincike da aka nema da wanda ya dace; yanayin `focused` da aka nema
ba tare da rubutun mai amfani mai amfani ba yana bayar da rahoton a matsayin
wanda ya dace `full`.

Guardrail yana fitar da kowane ɓangaren bidiyo da aka goyi bayan amma ba ya bayyana fiye da
`modalityBridgeVideoMaxVideos`. Don wani manufa da aka tabbatar da
`supportsVideo === false`, bidiyo da suka gaza da suka wuce iyaka suna zama
maɓallan rubutu masu aminci don haka babu bidiyo na asali da ya wuce. Lokacin da ba a san
iyawa ba, waɗannan ɓangarorin suna adana mai ɗaukar bidiyo; kowanne
fallback transcript yana bin canjin rubutu da aka iyakance a sama. Targets tare da
`supportsVideo === true` suna wuce gado.
Siginar janyewar buƙatun abokin ciniki tana watsawa ta hanyar saukarwa, jerin broker,
subprocesses, da kiran taken; janyewar suna tsayawa tsakanin bidiyo kuma ba su taɓa
fada a bude ga kafofin watsa labarai na asali.

Saitunan lokacin aiki suna goyon bayan DB da Zod-validated:

| Key                                 | Default     | Range / behavior                                                                                          |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Zabi na lokacin aiki, zaɓi cikin                                                                          |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` yana adana taken gama gari; `focused` yana amfani da iyakance, ba a yarda da sabuwar mai amfani ba |
| `modalityBridgeVideoModel`          | `""`        | Gaji da samfurin Vision Bridge                                                                            |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                      |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, ko rabo `segment_aware`; gazawar mai gano yana dawo da `uniform`                |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                       |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                            |

Legacy persisted Video timeout values sama da 120 seconds ana kulle su zuwa
broker deadline; sabbin saituna da suka wuce wannan iyaka ana ƙin karɓar su.
`GET /api/modality-bridge/video/runtime` yana buƙatar trusted stamped loopback
locality kafin tantancewa ko gwajin lokaci, sannan yana buƙatar gudanarwa
auth. Yana dawo da `available` kawai, sanitized FFmpeg/ffprobe versions, da
dalili mai ɗorewa lokacin da lokacin ba ya samuwa. Hanyar fitarwa ta ciki ba
API na upload na jama'a bane: cunkoson jeri yana dawo da `503` tare da `Retry-After`,
rashin haɗin mai kira yana dawo da `499`, da kuma ɗorewar broker deadline tana
dawo da `504`. An canza amsoshi suna ƙara
`video->text;model=<visionModel>;parts=<videos>` zuwa babban
`x-omniroute-modality-bridge` header ba tare da cire Vision ko Audio segments ba.

### PII Masker (`piiMasker.ts`)

Yana gudana a **duka** matakai.

- **`preCall`** yana kwafin payload, yana tafiya `system`, `messages`, `input`, da
  `prompt` (ciki har da abubuwan rubutu na al'ada), kuma yana amfani da
  `processPII()` (daga `@/shared/utils/inputSanitizer`) ga filayen rubutu
  `content`/`text`. Lokacin da `PII_REDACTION_ENABLED=true`, an yi redaction ga
  PII da aka gano a cikin outbound payload. Wannan yana zaman kansa daga
  `INPUT_SANITIZER_MODE` (wanda kawai ke sarrafa
  tsarin shigar da tambaya). Lokacin da redaction ba ta kunna ba, kira yana
  rubuta adadin gano ba tare da sake rubuta abun ciki ba.
- **`postCall`** yana yin zurfin kwafin amsar, yana gudanar da
  `sanitizePIIResponse()` tare da
  masker na Responses-API-shape (`maskResponsesOutput` — yana rufe
  `output_text` da `output[].content[].text`). Idan an yi redaction, amsar da aka
  gyara tana maye gurbin asalin.

Guardrail ba ya taɓa toshe; yana kawai yin bayanin (`meta.detections`,
`meta.redacted`) ko sake rubuta.

### Prompt Injection (`promptInjection.ts`)

Yana gano tsarukan adawa a cikin abun ciki da mai amfani ya bayar kuma yana
tilasta tsarin da aka saita. Halayen yana tafiya da canje-canje na muhalli da
zaɓuɓɓukan mai gina:

| Saitin          | Env var                                                                                             | Default | Tasiri                                                                                                                                                                                |
| --------------- | --------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| An kunna        | `INPUT_SANITIZER_ENABLED`                                                                           | `true`  | Lokacin da `false`, guardrail yana gajarta.                                                                                                                                           |
| Yanayi          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                     | `warn`  | Tsarin shigarwa: `block`, `warn`, ko `log`. (`redact` an karɓa don jituwa da baya amma ba ya **cire** rubutun shigarwa; buƙatar PII rewrite yana sarrafa ta `PII_REDACTION_ENABLED`.) |
| Block threshold | `blockThreshold` zaɓi / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Mafi ƙarancin tsanani da ake buƙata don toshe. Matsakaici yana kasancewa kawai a kalla a tsoho.                                                                                       |

**Yanayin fifiko** (`getMode`): mai kira `options.mode` →
`INJECTION_GUARD_MODE` **DB feature-flag override** (Dashboard → Saituna →
Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Saboda haka, override na dashboard yana lashe canje-canje na muhalli, don haka UI na Feature Flags yana sarrafa guard mai gudana kai tsaye (ba tare da sake farawa ba). Karatun DB yana da kariya:
idan ya yi kuskure, guard yana komawa ga halayen da aka gina bisa ga muhalli, kuma lokacin da babu
override da aka saita halayen yana zama iri ɗaya da warwarewar kawai ta muhalli.

Hanyoyin gano:

1. `sanitizeRequest()` daga `@/shared/utils/inputSanitizer` (set na mai gano
   da aka raba wanda aka yi amfani da shi a wasu wurare a cikin bututun).
2. An gina cikin `DEFAULT_GUARD_PATTERNS` (a halin yanzu `system_override_inline` da
   `markdown_system_block`, duka suna da tsanani `high`).
3. Zaɓi `customPatterns` da aka wuce ta hanyar zaɓuɓɓukan mai gina (rubutun, regex,
   ko `{ name, pattern, severity }` rikodi).

Lokacin da `mode === "block"` **da** akalla gano ɗaya ya cika tsananin
threshold, `preCall` yana dawo da `{ block: true, message: "Request rejected:
suspicious content detected" }`. A cikin yanayin `warn`/`log` guardrail yana rubuta amma
yana ba da izinin kira. Mai taimako na raba `evaluatePromptInjection()` an kuma fitar
don masu kira da ke buƙatar tantance tambayoyi ba tare da wucewa ta hanyar rajista ba.

**Scan bound (v3.8.20):** mai gano yana duba **farko 16 KB** na
hadadden rubutun tambaya — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) a
`src/shared/utils/inputSanitizer.ts`. Duka `detectInjection()` da
`evaluatePromptInjection()` suna `slice(0, MAX_INJECTION_SCAN_BYTES)` kafin gudanar da
zangon tsari. Umarnin shigarwa suna kusa da saman shigarwa, don haka wannan
yana iyakance regex CPU/GC akan manyan payloads ba tare da raunana gano ba (cf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Yana gudana a **duka** matakai, na ƙarshe a cikin silsilar tsoho (matsayi `95`). Yana yin redaction
ga sanannun API-key / secret-token patterns daga outbound payload (abun ciki
na saƙo, hujjojin kiran kayan aiki, sakamakon kayan aiki) **da** amsar mai bayarwa, don haka
credential da aka liƙa cikin tambaya (ko aka maimaita ta sakamakon kayan aiki) ba a bayyana
ga mai bayarwa na sama ko kuma ga abokin ciniki ba.

- **Zaɓi kawai**, irin wannan tsarin kamar PII redaction (Ka'ida Mai Tsauri #20-kusa):
  an kashe sai dai idan `settings.credentialRedactionEnabled === true` **ko**
  `CREDENTIAL_REDACTION_ENABLED=true`. Idan an kashe, kariya ba ta aiki —
  ba ta taɓa toshewa kuma ba ta taɓa sake rubutawa.
- `redactCredentials()` yana tafiya cikin dukkanin payload/amsar itace (`walkValue()`,
  tsaro daga gurbatawa, tsaro daga juyawa ta hanyar `WeakSet`) kuma yana maye gurbin
  daidaitattun abubuwa da `[REDACTED:<type>]` wuri, yana kwafin kawai rassan da suka
  canza.
- `CREDENTIAL_PATTERNS` yana rufe maɓallan masu bayar da LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokens (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maɓallan biyan kuɗi (Stripe, Square), maɓallan
  gajimare (AWS access key, Twilio, SendGrid, Mailgun), maɓallan sirri / JWTs,
  layukan haɗin da ke ɗauke da takardun shaida (`mongodb://user:pass@...`, da sauransu), da
  tsarin `Authorization`/`x-api-key`/`api-key`/`apikey` na gaba. Maɓallan da suka
  yi kama da header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) ana gurbata su a tsari (kawai ƙima, tsarin gabatarwa kamar
  `Bearer `/`Basic ` an kiyaye) maimakon ta hanyar rubutun regex na gaba.
- Kariya ba ta taɓa toshewa; tana sake rubutawa kawai (`modifiedPayload` /
  `modifiedResponse`) da kuma yin bayanin (`meta.credentialsRedacted`, `meta.count`).

Kariya ta koma: `tests/unit/credential-masker-guardrail.test.ts`.

## Kwantirƙirar Asali (`base.ts`)

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
  block?: boolean; // gaskiya yana katse silsilar
  message?: string; // an bayyana lokacin katsewa
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // an dawo da shi daga preCall don sake rubuta bukatar
  modifiedResponse?: TValue; // an dawo da shi daga postCall don sake rubuta amsar
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

Wani guardrail yana nuna "babu canji" ta hanyar dawo da ko dai `void`, `{}`, ko `{ block: false }`. Dawo da `modifiedPayload`/`modifiedResponse` yana maye gurbin ƙimar da ke gudana ta cikin silsilar don ƙarin guardrails. `signal?: AbortSignal` yana ɗaukar rayuwar mai kira cikin guardrails. Tsarin dakatar da buƙata shine kuskuren fail-open na gangan: gadojin kafofin watsa labarai suna daina aiki da tsaftacewa ba tare da dawo da kafofin watsa labarai na asali zuwa wani manufa da aka sani ba wanda ba ya goyon bayan shi.

## Rajista (`registry.ts`)

Singleton `guardrailRegistry` yana bayyana:

- `register(guardrail)` — yana ƙara (ko maye gurbin ta sunan da aka daidaita) guardrail kuma
  yana sake tsarawa ta hanyar hawan `priority`.
- `clear()` / `list()` — masu taimakawa gudanarwa.
- `runPreCallHooks(payload, context)` — yana maimaita guardrails masu aiki, yana wuce da
  payload ta hanyar `modifiedPayload`, kuma yana tsayawa a farkon `block: true`.
- `runPostCallHooks(response, context)` — tsarin guda ɗaya a gefen amsa.
- `resetGuardrailsForTests({ registerDefaults })` — yana share yanayi kuma a zaɓi
  yana sake yin rajistar tsoffin abubuwan don tsabtataccen keɓewar gwaji.

Duk masu gudu suna dawo da `{ blocked, payload|response, results, guardrail?, message? }`
inda `results` shine jerin bayanan `GuardrailExecutionResult` waɗanda suka haɗa da
filayen `blocked`, `skipped`, `modified`, `error`, da `meta` na kowane guardrail,
masu amfani don bin diddigi.

### Kashe Guardrails Ga Kowane Buƙata

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` yana tattara
jerin sunayen guardrail da aka cire kwafi waɗanda ya kamata a tsallake su don
buƙatar yanzu. Tushen (duk na zaɓi, duk an haɗa su):

- `apiKeyInfo.disabledGuardrails`
- Jikin buƙata `disabledGuardrails` (matakin sama)
- Jikin buƙata `metadata.disabledGuardrails`
- Header `x-omniroute-disabled-guardrails` (ko tsohon
  `x-disabled-guardrails`)

Ƙimar na iya zama jerin igiyoyi ko igiya mai raba-koma; ana daidaita sunaye
zuwa ƙananan haruffa kebab-case (`pii_masker` → `pii-masker`). Ana wuce da
sakamakon ta hanyar `context.disabledGuardrails` zuwa rajista, wanda ke
tsallake guardrails masu dacewa (`skipped: true` a cikin `results`).

## Tsarin Aiki

Ga kowane buƙata da ke gudana ta `src/sse/handlers/chat.ts` da
`open-sse/handlers/chatCore.ts`:

1.  `resolveDisabledGuardrails(...)` yana gina jerin abubuwan da za a tsallake daga maɓallin API, jiki,
    da kuma kanun labarai.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` yana gudanar da guardrails a cikin tsarin fifiko mai hawa:
    - Guardrails da aka kashe ana rubuta su a matsayin `skipped`.
    - Kowane `preCall` na guardrail na iya sake rubuta bayanan da aka ɗora ta hanyar `modifiedPayload`.
    - `block: true` na farko yana dakatar da sarkar kuma mai sarrafawa yana mayar da
      martanin kin amincewa da guardrail.
3.  Bayanan da aka ɗora (watakila an sake rubuta su) suna shiga cikin hanyar haɗin gwiwa da kuma
    aikin aika zuwa sama.
4.  Bayan an haɗa martanin, `guardrailRegistry.runPostCallHooks(...)`
    yana gudanar da sarkar iri ɗaya akan martanin. `block: true` anan yana jefar da martanin daga sama.

Guardrails da suka jefa kuskure ana rubuta su da `error: <message>` kuma ana shigar da su ta hanyar
`logger.warn`, amma sarkar tana ci gaba – an tsara ta don ta ci gaba duk da kuskure.

## Saita

Ma'aunin muhalli da guardrails na ciki ke karantawa:

| Variable                              | Wanda ke amfani da shi      | Tasiri                                                                                              |
| :------------------------------------ | :-------------------------- | :-------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`          | Saita `false` don kashe gano gaba ɗaya.                                                             |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`          | Manufar allura: `warn`, `block`, ko `log`. Tsohon darajar `redact` baya sake rubuta rubutun allura. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`          | Yanayin don kariyar allura; kuma alamar fasalin DB da **ke mamaye** ma'aunin muhalli (DB > ENV).    |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`          | Mafi ƙarancin tsanani da `MODE=block` ke ƙi: `high` (tsoho), `medium`, ko `low`.                    |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`          | Tsohon suna ga `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`                | Lokacin da `true`, PII na buƙata ana gyara shi (mai zaman kansa daga yanayin allura).               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (ƙasa da ruwa) | Yana sarrafa halayen masker na gefen martani.                                                       |

Guardrails na Modality Bridge suna karanta saitin lokacin aiki daga ma'ajiyar saitunan da DB ke tallafawa
(`getSettings()`), ba ma'aunin muhalli ba. Maɓallan farko na Vision sune
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, da
`modalityBridgeCacheMaxEntries`. Tsoffin maɓallan
`visionBridge*` ana karɓar su ne kawai a matsayin abin da aka rubuta na sake karantawa na zagaye ɗaya;
rubuce-rubucen dashboard suna amfani da maɓallan farko. Abubuwan tsoho da mai warwarewa na sake karantawa suna zaune a
`src/shared/constants/modalityBridgeDefaults.ts`, tare da tsoffin ma'auni da aka riƙe a
`src/shared/constants/visionBridgeDefaults.ts`.

Audio yana amfani da `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, da `modalityBridgeAudioMaxClips`, tare da saitunan
`modalityBridgeCache*` da aka raba. Audio bashi da tsohon maɓallin sake karantawa saboda an gabatar da waɗannan maɓallan tare da tsarin Modality Bridge.

Video yana amfani da `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, da
`modalityBridgeVideoTimeout`, tare da saitunan `modalityBridgeCache*` da aka raba.
An kashe shi ta tsohuwa saboda FFmpeg/ffprobe sune zaɓin dogaro na aiki kuma
ƙara rubutun firam yana ƙara jinkiri da farashin samfuri.

## Tsare-tsare na Musamman

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "An wuce kasafin kuɗi na yau da kullun" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Matakai:

1. Ƙirƙiri `src/lib/guardrails/myGuardrail.ts` yana faɗaɗa `BaseGuardrail`.
2. Aiwatar da `preCall` da/ko `postCall`.
3. Ko dai a yi rajista a lokacin shigo da kaya (tura daga `registerDefaultGuardrails`) ko
   kiran `guardrailRegistry.register(...)` a lokacin gudu — rajistar tana maye gurbin
   kowane tsarin tsaro na baya da suna ɗaya.
4. Ƙara gwaje-gwaje a ƙarƙashin `tests/unit/` (misalai masu akwai:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Gwaji

Yi amfani da `resetGuardrailsForTests()` tsakanin gwaje-gwaje don farawa daga sanannen yanayi.
Wuce `{ registerDefaults: false }` don farawa da rajista mara komai kuma
yi rajistar tsare-tsaren tsaro kawai da ake gwadawa. Vision Bridge yana karɓar allurar dogaro (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge yana bayyana
daidaitattun abubuwan da suka dace don saituna, iyawa, zaɓin samfurin STT, binciken takardun shaida,
da rubutawa. Don haka gwaje-gwaje na iya yin amfani da duka hanyoyin ba tare da DB
ko samun damar hanyar sadarwa ba.

## Duba Kuma

- `src/lib/guardrails/` — aiwatarwa
- `src/shared/utils/inputSanitizer.ts` — mai gano abubuwan da aka raba wanda ke ba da ƙarfi
  allurar saƙo da rufe PII
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge tsoffin saituna da
  jerin samfuran da aka tilasta-gada
- `src/shared/constants/modalityBridgeDefaults.ts` — Vision/Audio tsoffin saitunan lokacin gudu
- `docs/architecture/RESILIENCE_GUIDE.md` — Layer na orthogonal (mai karya kewaye, sanyaya)
- `docs/reference/ENVIRONMENT.md` — cikakken bayanin env var

## Rufin hanyar kariya daga allura & ƙungiyar ja (Mataki na 8 · Block D)

Kariyar allura (`createInjectionGuard` / `withInjectionGuard`) tana rufe duk hanyoyin
da ke karɓar saƙonnin mai amfani. Tana mutunta `INJECTION_GUARD_MODE` (tsoho `warn` = log kawai;
`block` = yana dawo da HTTP 400 `SECURITY_001`).

| Nau'i | Hanyoyi | Yanayin tsoho |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | warn |
| Rubutu (mai akwai) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions` | warn |
| Generative | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn |
| Data | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations` | warn |

Cire rubutu (`extractMessageContents`) yana rufe `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Ƙungiyar ja (dare, `nightly-llm-security.yml`):** promptfoo yana tabbatar da cewa kowace hanya tana toshe
corpus na OWASP-LLM a cikin `INJECTION_GUARD_MODE=block`; garak yana gudanar da bincike (yana tsallake ba tare da sirri ba).
An haɗa `moderations` don daidaito — masu aiki a yanayin toshewa na iya keɓe shi ta hanyar
`resolveDisabledGuardrails`.

Aikin dare (`.github/workflows/nightly-llm-security.yml`, cron + manual
dispatch) yana da ayyuka biyu:

- **`promptfoo-guard` (toshewa)** — yana gudanar da `promptfoo eval -c promptfooconfig.yaml`
  tare da `INJECTION_GUARD_MODE=block`. Kowace shari'ar adawa (misali "yi watsi da duk
  umarnin da suka gabata…", DAN-style jailbreaks) yana tabbatar da cewa amsar tana ɗauke da
  `error.code === "SECURITY_001"`, wato, mai gadi ya ƙi buƙatar.
- **`garak` (shawara)** — yana gudanar da garak `--probes promptinject,dan,leakreplay`
  akan wani misali na OmniRoute na gida (`http://localhost:20128/v1`). An rufe shi da
  sirrin mai bayarwa (`PROMPTFOO_PROVIDER_KEY`); yana tsallake da kyau kuma an haɗa shi da
  `|| true`, don haka yana bayar da rahoto ba tare da gazawar CI ba.

Rufin mai taimakon gadi (`createInjectionGuard` / `withInjectionGuard`)
yana rufe kowace hanyar `/v1` mai ɗauke da saƙo; ana cire rubutun saƙo daga
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ta hanyar
`extractMessageContents()` a cikin `src/shared/utils/inputSanitizer.ts`.
