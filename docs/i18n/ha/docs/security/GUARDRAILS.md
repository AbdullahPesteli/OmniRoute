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

## Kafaffen Tsaro

Rajistar tana loda kafaffen tsaro guda shida bisa ga tsarin fifiko lokacin shigo da su
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

### Vision Bridge (`visionBridge.ts`) — Kafaffen Hanya PR-1

Yana tsallake buƙatun da ke ɗauke da hotuna da aka nufa ga **samfuran da ba su da hangen nesa** kuma ko dai
yana canza dukkan buƙatar zuwa samfurin da ke da ikon hangen nesa ko kuma yana maye gurbin sassan hoton
da bayanan rubutu da samfurin hangen nesa mai iya daidaitawa ya samar kafin
kiran sama. Wannan yana ba da damar masu bayar da rubutu kawai su kula da
kayan aikin multimodal ba tare da wata matsala ba.

Hanyar:

1. Tsallake idan samfurin da aka nufa yana goyon bayan hangen nesa (sai dai idan yana cikin
   jerin tilasta-bridge `isVisionBridgeForcedModel`).
2. Fitar da sassan hoton ta hanyar `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), wanda ke ba da umarni ga **hadadden mai gano
   kafofin watsa labarai** `detectMediaParts()` a cikin `open-sse/utils/mediaParts.ts` —
   tushen gaskiya guda ɗaya da aka raba tare da tacewar dacewar haɗin gwiwa.
   Fitarwa ana ba da izini ga sassan manyan matakai na siffofi
   `replaceImageParts` za su iya haɗawa (yarjejeniyar fitarwa↔maye gurbi): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, da Responses API `input_image`. Hanyoyin da aka yi amfani da su da
   siffofin da ke nuna kawai suna kayan tacewa ne kuma ba a taɓa fitar da su ba.
   Tsallake idan ba a sami komai ba.
3. Warware saitin lokaci ta hanyar `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): sabbin maɓallan saitin `modalityBridge*`
   suna cin nasara; tsofaffin maɓallan `visionBridge*` suna zama **madadin
   na zagaye ɗaya** (matsakaicin juyawa). Tsallake kafin kowanne tafiya na kafofin watsa labarai lokacin da
   an kashe gado.
4. Mai zaɓin yanayi (`modalityBridgeVisionMode`, duba tebur a ƙasa) yana yanke shawara
   canza hanyar ko bayyana. Canza hanyar tana dawo da `modifiedPayload` tare da kawai `model`
   an canza, tare da meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Hanyar bayyana: iyakance hotuna zuwa `maxImages`, haɗa aikin da aka sani,
   tuntubi ajiyar bayyana, kira samfurin hangen nesa **a cikin jere**
   (`Promise.allSettled`), da saka `[Image N]: <description>` sassan rubutu a
   wurin su. Kiran bayyana da ya gaza yana bayar da `null` kuma sashin hoton asali yana
   **a kiyaye** (#4012) — sai dai a kan hanyar bayyana haɗin gwiwa lokacin da kowanne
   bayyana ya gaza, inda samfurin da ba na hangen nesa ba ya sami
   `(unavailable — no vision-capable provider connected)` stub maimakon (#8430).
6. Dawo da `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Mai zaɓin yanayi (`modalityBridgeVisionMode`)

| Yanayi     | Na asali | Halayya                                                                                                                                                                                                                                                                                 |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Tsofaffin ka'idoji, ba a taɓa canza ba (#6640/#7204): samfuran da ba su haɗu da `auto/` suna canza zuwa mafi kyawun samfurin hangen nesa sai dai idan samfurin asali yana da ingantaccen shaidar da za a yi amfani da (sannan a bayyana); abubuwan haɗin gwiwa koyaushe suna bayyana.   |
| `describe` |          | Koyaushe bayyana — an tsallake dukkanin hanyar canza; samfurin da mai amfani ya zaɓa koyaushe yana amsa.                                                                                                                                                                                |
| `reroute`  |          | Tilasta canza hanya: an tsallake tsaron samfurin da aka kiyaye. Tsaron shaidar canza-**manufa** har yanzu yana aiki — lokacin da babu samfurin hangen nesa da za a yi amfani da shi, buƙatar tana faɗuwa zuwa bayyana don hotuna na asali ba su kai ga bayanan rubutu kawai ba (#8430). |

Hanyoyin da aka tilasta suna gaggawa **kafin** ka'idojin auto su gudana; halayen `auto`
na daidai da na gado na pre-PR-1.

#### API-key scope (`visionBridgeKeyScope.ts`)

Lokacin da maɓallin API na mai kira yana iyakance `allowedConnections`, ƙungiyoyin kuɗi
(`allowedQuotas`) ko samfuran (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), gado kawai
yana zaɓar samfuran canza hanya da bayyana da maɓallin zai iya amfani da su, akan haɗin da maɓallin zai iya
amfani da su. Kiran bayyana yana wucewa ta hanyar juyin kai na OmniRoute tare da
`x-omniroute-self-loop-key-id` header, don haka buƙatar tattaunawa da aka karɓa
yana tabbatar da haɗin maɓallin da tsarin samfurin wannan maɓallin. `enforceApiKeyPolicy()`
yana girmama wannan header kawai tare da mai riƙe juyin kai, don haka yana iya kawai
ƙarƙasa samun dama, kuma id da ba ta warware ba ana ƙin ta.

Idan babu samfurin hangen nesa da aka yarda da maɓallin, hanyar bayyana tana tsallake kuma
buƙatar tana wucewa ba tare da canji ba, halayen gazawa da bude kamar gado da aka kashe
(meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Buƙatun da ba su da maɓalli, da maɓallan da ba su da waɗannan iyakokin, suna aiki daidai kamar
kafin.

#### Aikin da aka sani na bayyana (`modalityBridgeVisionTaskAware`)

Default **gaskiya**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) yana ƙara
rubutun **sako na ƙarshe daga mai amfani** (an yanke zuwa haruffa 500) zuwa
tushen bayanin da aka bayyana, yana ja bayanin zuwa abin da mai amfani ya tambaya
(patani na codex-vision-proxy) da kuma tambayar samfurin hangen nesa don
rubuta rubutun da ke bayyana. Tare da alamar kashe — ko babu rubutun mai amfani —
tushen bayanin ana amfani da shi ba tare da canji ba.

Bayanin juyin kai na OpenAI mai dacewa (`callVisionModelSingle()`
a cikin `visionBridgeHelpers.ts`) koyaushe yana neman `image_url.detail: "high"` —
ba tare da sharaɗi ba, ga kowane mai kira/mai bayarwa, ba tare da kowane siginar
abokin ciniki ba. Samfuran ƙananan bayani suna rage ingancin OCR don ainihin aikin
rubuta rubutun da wannan bayanin ke nema, don haka kiran bayanin kanta koyaushe
yana neman babban bayani ba tare da la'akari da matakin bayani da asalin
tambayar ta shigo ba. Wannan yana shafar jikin buƙatar bayanin na ciki kawai;
ba ya canza yadda OmniRoute ke turawa na `image_url.detail` na mai kira a cikin
buƙatar farko — wannan tsohon yana aiki daban, kuma kawai ga abokan ciniki na
OpenCode da aka gano, a cikin `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Rabin tsarin waya na Anthropic na juyin kai ba shi da filin `detail` kuma ba ya
shafa ko wane tsoho.

#### Iyakar fitarwa na bayanin (`modalityBridgeVisionMaxChars`)

| Maɓalli                        | Tsoho | Tsarin           |
| ------------------------------ | ----- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`   | `0` ko 100–50000 |

`0` (tsoho) yana nufin **babu iyaka** — bayanin da aka dawo daga
`callVisionModel()` ana wucewa ba tare da canji ba, yana kiyaye halayen da
ake akwai. Duk wani ƙima a cikin tsarin 100–50000 yana yanke bayanin tare da
`…` a ƙarshen kafin a haɗa shi a matsayin `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` a cikin `src/lib/guardrails/visionBridge.ts`).
Kara wannan don ayyukan OCR masu nauyi inda samfurin da ke ƙasa ke buƙatar
cikakken rubutun; rage shi don iyakance amfani da token akan samfurin hangen
nesa mai magana. Filin dashboard yana cikin shafin Vision na Advanced
(`modality-bridge-max-chars` a cikin `ModalityBridgeVisionTab.tsx`) kuma yana
kafa kowanne ƙima tsakanin 1 da 99 zuwa ƙasan 100 yayin da yake barin
`0` a matsayin wanda ba a taɓa ba — `0` yana da ingantaccen Zod a cikin
kansa (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ba kawai
tsohon "ba a saita" ba.

#### Cache na bayanin (`modalityBridge/bridgeCache.ts`)

LRU + TTL cache a cikin ƙwaƙwalwa don fitar da bayanai, wanda aka raba a cikin
tsarin. Maɓalli = `sha256(imageRef + composedPrompt + configuredBridgeModel)` tare da
tsarin tsawo (babu haɗarin iyakokin filin). Sashin samfurin shine
**an tsara** samfurin gada, ba samfurin da ya amsa ba —
`callVisionModel` na iya komawa a cikin gida, kuma maɓallin bisa ga ƙoƙarin
zai raba cache. An taɓa bayanan da suka gaza ba a taɓa ajiye su ba. Saituna:

| Maɓalli                         | Tsoho     | Tsarin  |
| ------------------------------- | --------- | ------- |
| `modalityBridgeCacheEnabled`    | `gaskiya` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`      | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`     | 10–5000 |

#### Daidaitawa hoton nesa (juyin kai bayanin/fetch base64)

Lokacin da gada ta ɗauki hoto **na nesa** kanta — juyin kai na
Anthropic da canjin claude-wire-format base64
(`ensureBase64ImagesForClaudeWire`), duka ta hanyar
`fetchRemoteImageAsDataUri()` a cikin `visionBridgeHelpers.ts` — URI na bayanin
da aka samu ana wucewa ta `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) kafin a haɗa shi a cikin buƙatar samfurin
hangen nesa. Hotuna masu girma suna ragewa zuwa **2048px gefen tsawo**
(daidai da iyakar girman da OpenAI/Anthropic suka riga suka yi amfani da shi a
bangaren sabar), wanda ke rage adadin bytes/latency ba tare da canza abin da
samfurin hangen nesa ke gani ba. Canza girman yana amfani da `sharp`, wanda aka
loda ta hanyar shigo da dindindin: a kan dandamali inda binary na asali
ya kasa loda, `normalizeDataUri()` **ba ta taɓa jefa** — tana komawa
ga wucewar asalin bytes, don haka hanyar bayanin/canji na base64 koyaushe
na ci gaba da aiki. Bytes marasa hoto (fetch wanda bai dawo da hoto mai
decodable ba) suma ana wucewa ba tare da canji ba. Wannan daidaitawa yana
ƙayyade ga hotuna da gada ke ɗauka don juyinta kanta — ba a taɓa
aikata shi ga raw passthrough payload na mai kira ba, wanda ya dace da
ka'idar canji kawai (Ka'idar Mafi Tsauri #20).

#### Tsarin saituna + hijira

Sabbin maɓallan `modalityBridge*` suna da tabbaci na Zod a cikin
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, taron `modalityBridgeCache*`, da
rukunin `modalityBridgeAudio*` da Audio Bridge ke amfani da su. Hijira
`141_modality_bridge_settings.sql` tana kwafa tsofaffin
`visionBridge*` ƙimomi zuwa sabbin maɓallan da suka dace (idempotent, ba ta
overwrite kowane ƙima na `modalityBridge*` da aka saita ta mai aiki ba);
tsoffin maɓallan suna ci gaba da karɓa a matsayin madadin karatu na
zango guda.

#### Header na bayyana + kididdiga

Amsoshin da aka canza ta hanyar bayanin suna ɗauke da
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(da aka gina ta `buildModalityBridgeHeader()` a cikin `modalityBridge/bridgeStats.ts`,
an yi wa `withModalityBridgeHeader()` a cikin `src/sse/handlers/chatHelpers.ts`).
Buƙatun da aka sake juyawa ba su da **header** — an bar payload ba tare da canji ba
kuma canjin samfurin yana bayyana a cikin filin `model` na jikin amsar.

`GET /api/modality-bridge/stats` (management auth, same tier as
`GET /api/settings`) yana dawo da ƙididdiga na kowane modality a cikin ƙwaƙwalwar ajiya
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` don `vision`, `audio`, da
`video`. `averageLatencyMs` yana amfani da `latencySamples`, ba duk ƙoƙarin ba, a matsayin
denominator; aikin da ba tare da lokaci ba ba ya ƙirƙiri samfurin milisekondi na sifili. `bridged` yana ci gaba da zama sunan da ya dace da baya don nasarar
canje-canje; ƙoƙarin da ya gaza ba ya ƙara masa.
Ana sake saita ƙididdiga lokacin farawa aikin ta hanyar zane
(telemetry, ba lissafi ba).

#### Tsarin Dashboard

Shafin dashboard na musamman shine
`/dashboard/settings/modality-bridge`. Adireshin URL ɗin sa `Vision`, `Audio`,
da `Video` suna adana ƙarin tambayoyi yayin canza ƙimar `tab`.
Tab din Vision yana bayyana kunna, yanayi, zaɓin samfur (ciki har da na atomatik
na tsoho), tambayoyi masu hankali, iyakokin lokaci/ hoton/ tsawon bayanin/ cache
masu zurfi, ƙididdiga na lokacin aiki,
da kuma buƙatar samfurin da aka kiyaye. Tab din Audio ma yana aiki: yana bayyana
kunna, mai zaɓin samfurin STT kawai tare da Auto, iyakokin lokaci/ max-clip, ƙididdiga na audio,
da kuma gwajin samfurin `input_audio`. Tab din Video yana aiki: yana bayar da
halin lokacin FFmpeg/ffprobe — ɗaya daga cikin hudu halin UI na musamman (`unknown` yayin
da aka yi bincike ko ba a kammala ba, `restricted` akan mai masaukin dashboard wanda ba a maimaita ba inda aka tsallake binciken a gefen abokin ciniki, `unavailable` bayan an bincika
da tabbatar da rashin, ko `available` tare da sigar FFmpeg/ffprobe) — yana ci gaba
da iyakokin enable/model/frame/video/timeout, yana tace mai zaɓin samfurin zuwa samfurori masu iya gani,
da kuma bayyana ƙididdiga na bidiyo.

Tsohon katin Vision Bridge a ƙarƙashin saitunan AI shine haɗin gwiwa zuwa
sabuwar shafin; ba ya ƙara wani kwafi na fom. Masu bayar da Media ma
suna haɗa Hanyoyin Hoton-zuwa-Tsarin da Hanyoyin Magana-zuwa-Tsarin zuwa
tab din Modality Bridge ba tare da cire tsohon filin wasa na Magana-zuwa-Tsarin ba.

**Biyu na shigarwa na kai:** lokacin da kiran bayyana ya ratsa ta hanyar
OmniRoute's na kansa `/v1` self-loop (samfurin mai bayarwa na ba na al'ada ba), ƙaramin buƙatar yana aika
`x-omniroute-admission-bypass: internal` kuma an tabbatar da shi tare da
takardar shaidar self-loop da aka warware — mai tsaron gida `sk_omniroute` a cikin yanayin gida, ko
ma'aikatar da aka saita `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env key (#1350) don
`REQUIRE_API_KEY=true` aikace-aikacen na iya ci gaba da gudanar da kiran bayyana. Bypass
ana girmama shi ne kawai ga waɗannan takardun shaidar, don haka abokan ciniki na waje ba za su iya amfani da
header don tsallake shigarwa ba.

Tsoffin tsoffin suna cikin `src/shared/constants/visionBridgeDefaults.ts`; sabbin yanayi/ aikin da aka sani/ cache suna cikin
`src/shared/constants/modalityBridgeDefaults.ts`. Kariya tana bayyana
zaɓin `deps` na mai gina don haka gwaje-gwaje na iya shigar da jabu `getSettings` da
`callVisionModel` aiwatarwa.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Yana tsallake buƙatun tattaunawa masu ɗauke da sauti kafin su kai ga wani manufa wanda ba a san shi ba
yana karɓar shigarwar sauti. Ba ya taɓa canza hanyar buƙatar tattaunawa: sassan sauti suna
fassara ta hanyar hanyar haɗin gwiwa ta OpenAI da aka riga aka kafa kuma
samfurin tattaunawa da aka zaɓa yana ci gaba da rubutun rubutu.

Hanyar:

1. Warware `supportsAudio` ta hanyar `getResolvedModelCapabilities()`. Bayanan
   rajistar mai bayarwa na musamman yana cin nasara, sannan bayanan samfur na tsaye, sannan
   `modalities_input` da aka haɗa. Jerin shigarwa da aka bayyana ba tare da `audio` ba yana zama `false`; babu
   shaidar ƙwarewa yana kasancewa `null`. Duka `false` da `null` suna kunna
   gado mai tsanani, yayin da `true` ke tsallake shi.
2. Warware saitunan `modalityBridgeAudio*` da kuma fitar da sassan sauti na sama daga kowanne saƙo ta hanyar
   mai gano `detectMediaParts()` da aka raba. Tsarin waya da aka goyi bayan sune OpenAI `input_audio`, `audio_url`, da
   `source.media_type: "audio/*"`. Ana gano sauti mai zurfi don hanyar amma ba a
   cire ta ta hanyar tsaga. Aiki yana da iyaka ta `modalityBridgeAudioMaxClips`;
   sassan daga baya suna kasancewa ba tare da taɓawa ba.
3. Girmama `provider/model` da aka saita, ko barin `selectAudioBridgeModel()` ya yi tafiya
   `AUDIO_TRANSCRIPTION_PROVIDERS` a cikin tsari na katako mai ɗorewa kuma ya zaɓi samfurin farko
   tare da ingantaccen takardar shaidar mai bayarwa.
4. `callAudioTranscription()` yana canza sautin base64/data-URI zuwa multipart
   `file`, ko yana sauke `audio_url` daga nesa ta hanyar kariya ta waje kawai tare da DNS pinning da
   iyaka na 25 MB. Sannan yana POST fayil ɗin da aka zaɓa
   zuwa cikin `/v1/audio/transcriptions` self-loop, wanda aka tabbatar da shi tare da
   `resolveSelfLoopBearer()`. Hanyar fassarar da aka riga aka kafa tana gudanar da binciken takardar shaidar na al'ada,
   sarrafa lokacin hutu/iyaka, da kuma aika mai bayarwa.
5. Kiran da suka yi nasara suna maye gurbin sassan su da `[Audio N]: <transcript>`. Kiran
   suna gudana tare da `Promise.allSettled`: gazawar mutum tana adana wannan asalin
   sashin sauti (#4012 kwangila). Idan duk kiran sun gaza kuma an tabbatar da cewa manufa tana
   `supportsAudio === false`, sassan suna zama
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 kwangila). Don
   manufa mara sananne (`null`), sakamakon duk gazawa yana kasancewa ba tare da taɓawa ba. Manufa da aka tabbatar
   kawai da rubutu tare da babu ingantaccen takardar shaidar STT tana karɓar wannan jabu
   stub ba tare da yin kiran hanyar sadarwa ba.

Nasara fassarar suna amfani da tsarin Modality Bridge LRU/TTL cache na duniya. Maɓallin yana haɗa
da tunanin sauti, alamar aikin `audio-transcription` mai ɗorewa, da samfurin STT da aka zaɓa; gazawar ba a taɓa adana su ba. Ƙoƙarin sauti suna sabunta
`bridged`, `cacheHits`, `failures`, da `lastUsedAt` ƙididdiga.
Amsoshin da aka canza suna ɗauke da
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; buƙatun da ba a taɓa
samu wani sashi na Audio Bridge ba.

Saitunan lokacin aiki suna goyan bayan DB kuma an tabbatar da su da Zod:

| Key                           | Default | Range          |
| ----------------------------- | ------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —              |
| `modalityBridgeAudioModel`    | `""`    | Auto ko STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10           |

Cache ɗin da aka raba yana ci gaba da kasancewa ƙarƙashin kulawar `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, da `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Yana kama ɓangarorin bidiyo na matakin sama a cikin Chat Completions `messages` da Responses
API `input` kafin a kira wani manufa ba tare da sanannen goyon bayan bidiyo na asali ba.
Tsarin da aka goyi bayan sun haɗa da `input_video`, `video_url`, `video_source`, HTTPS URLs,
da `data:video/*;base64,...` data URIs. Sunayen fayil a cikin rubutu ba a ɗauka
a matsayin bidiyo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) yana da alhakin tafiyar da buƙatu,
duba ikon/manufa, tarin kowane buƙata, da kuma kayan amsa.
Aikin kowane bidiyo — samun, cache na dukkan sakamakon, bayyana jerin fuskoki
(wanda ke haɗa kowanne rubutun sauti da mai kira ya bayyana), da kuma kowane ƙoƙari
metrics/abort/cleanup — an ɓoye a bayan `processVideoPart` a cikin
`videoBridgePipeline.ts`, wanda aka kira sau ɗaya a kowane ɓangaren bidiyo a cikin
juyin `preCall`. Wannan module yana kuma bayyana iyakokin tashar da aka bayyana
`VideoMediaBrokerPort` (samu bytes da fitar da fuskokin da aka ɗauka),
`VideoAudioTranscriptionPort` (haɗa rubutun sauti da mai kira ya bayyana tare da
rubutun da aka ɗauka), da `VideoDrilldownPort` (tsarin tsohon ajiyar raw).
Samun STT da riƙe fuskoki suna haɗuwa a kusa da tashar da aka bayyana ta hanyar
`createVideoSttAdapter` da `createVideoDrilldownAdapter`; wanda na ƙarshe yana
amfani da rayuwar opaque-handle da aka raba.

Hanyar buƙatar `/v1` ba ta taɓa shigo da ko kira wani ƙaramin tsari ba.
Bidiyon nesa ana sauke su a ƙarƙashin iyakar 50 MiB; bidiyon inline na base64 suna da
iyakar 36 MiB da aka fassara a kowane bidiyo don haka samfurin/messages/f framing envelope
za su iya kasancewa a cikin iyakar shigar buƙatar JSON na jama'a na 50 MiB.
Ana duba tsawon inline da kimanin girman da aka fassara kafin a raba. HTTPS
ana buƙata a kan URL na farko na nesa da kowane juyawa, yana amfani da
gargadi na jama'a kawai tare da DNS pinning. Bytes suna wuce iyakar
`POST /api/modality-bridge/video/extract` broker na ciki. Wannan hanya tana
zama `LOCAL_ONLY` da `SPAWN_CAPABLE`, tana karɓar kawai buƙatar
amintacce, trusted-loopback a kowane tsari, kuma ba ta taɓa karɓar URL,
hanyar fayil, executable, ko jerin hujjoji. Jikin API body-size pipeline da
karatun jiki na mai sarrafa suna tilasta iyakar shigar broker na 50 MiB.
Queue ɗin da aka iyakance yana gudanar da fitarwa guda ɗaya a lokaci, yana
ba da izinin ayyuka guda hudu masu jiran, kuma yana iyakance shigar
masu jiran a 100 MiB.

A cikin broker, `ffprobe` yana karanta fayil na gida na sirri;
jerin tsarin da aka gyara yana cire tsarin playlist da manifest.
Don containers na MOV-family da aka yarda, bayanan MOV na waje suna
ci gaba da kasancewa a rufe ta tsohuwa, kuma umarnin da aka gyara
ba ya shiga cikin su. Duk `ffprobe` da `ffmpeg` suna amfani da
jerin tsari na `file`-kawai, wani zaren, jerin hujjoji na dindindin,
babu shell, da executables da aka warware daga `PATH`.
Hanyoyin rufin hoton da aka haɗa ba su zama masu yiwuwa ba.
Duk hanyoyin da za a iya kunna su dole ne su cika iyakokin,
kuma ana fifita wani rafi na tsoho kafin a dawo da mafi ƙanƙanta
na ƙididdiga. Bidiyo suna iyakance ga 600 seconds, 8,192 pixels
a kowane dimension, da 33,554,432 pixels na asali. FFmpeg yana
samun 1–16 midpoint JPEG frames, yana rage gefen mai tsawo
zuwa aƙalla 1,024 pixels ba tare da haɓaka ƙaramin shigar ba,
kuma ba ya taɓa karɓar URL. Samfuran suna zama `uniform`
ta tsohuwa. Zaɓin `scene_aware` da kuma gwaji `segment_aware`
suna gudanar da wani ƙarin wucewa na FFmpeg a kan rafi na gida
da aka tabbatar, suna zaɓar iyakokin `showinfo` na lokaci,
kuma suna dawo da ƙayyadadden ga waɗannan uniform midpoints
akan gazawar mai gano, lokaci, fitarwa mara kyau, ko
jerin masu yiwuwa marasa komai. Yanayin segment-aware yana
raba samfuran midpoint bisa ga lokacin da aka tabbatar;
hujjojin segment-aware da halayen dawo suna bayyana a ƙasa.
Iyakacin 16-frame mai ƙarfi yana
aikace bayan zaɓi a cikin kowanne tsari. Lokacin da buƙatar
scene-aware tana da kasafin kuɗi na frame guda, tana amfani da
midpoint na dindindin na bidiyo ko taga mai ma'ana kuma tana
raba `policyEffective: uniform`: frame ɗin scene guda
ba zai iya adana duka ƙarshen lokaci ba. Mai kira na iya
zaɓar bayar da taga mai ma'ana (`start`/`end` seconds);
iyakar suna da iyaka ga tsawon kafofin watsa labarai,
taga mai juyawa ko mara iyaka ana ƙin karɓa,
kuma duk tsarin samfur suna gudanar da su ne kawai a cikin
iyakar da aka daidaita. Taga da aka samu ana haɗa ta
a cikin metadata na samfur da kuma a cikin
siffofin bayanan da ba a yarda da su don haka
samfuran da ke ƙasa za su iya bambanta tsakanin
ƙarin da aka mai da hankali da cikakken
lokaci.

Farkon rubutun ma'ana yana zama saitin daban, na musamman.
Tsarin nazari na `full` na tsohuwa yana adana
rubutun fuskokin da ake da shi kuma ba ya taɓa
turawa rubutun buƙata zuwa samfurin rubutu. A cikin
tsarin `focused`, gado yana karanta kawai
sabuwar `text`/`input_text` daga mai amfani da ba
a cika ba daga wannan Chat ko Responses
container, yana daidaita shi zuwa NFC, yana
ƙarƙashin haruffa da sarari, kuma yana iyakance shi
zuwa 500 Unicode code points. Sakamakon da ba a cika ba
yana dawo da daidai `full` prompt. Hujja mai amfani
ana jera ta a matsayin JSON a cikin wani
block na untrusted-user-context kuma na iya
fifita bayanan da za a iya gani kawai; ba za ta iya
wuce gargadin daban akan bin umarni da ke
gane ko jin a cikin kafofin watsa labarai ba.
Farkon rubutu ba ya ƙirƙiri `start`/`end` ko
canza mai ɗaukar lokaci.

#### FU-07 hujjar tsari na segment

`segment_aware` yana amfani da wani iyakance pre-analysis pass akan rukunin bidiyo na gida da aka tabbatar. Tsarin tacewa na dindindin yana farko yana daidaita zuwa aƙalla pixels 320 fadi, yana gano canje-canje na yanayi da tsayawar lokaci, sannan yana samfurin a 1 frame a kowace dakika don blur, matsakaicin luma, da bayanan sarari/na lokaci. Wannan pass yana iyakance ga samfurin tsarin 600, wani FFmpeg/filter thread, wannan `file`-kawai tsarin da jerin kwantena, iyakar fitarwa na 1 MiB, da kuma aƙalla 30 seconds a cikin lokacin raba na broker. Ba ya karɓi umarni, tace, hanya, ko URL daga buƙatar.

Darajar tsarin suna zama shaidar samfurin mai tabbatacce, ba fahimtar bidiyo ta ma'ana ba. Ba su fahimci batutuwa, ayyuka, rubutu, magana, ko niyyar mai amfani ba. Iyakokin yanayi da tsayawar suna samar da sassa; rufin tsayawa, blur, haske, cikakken bayani na sarari, da canjin lokaci suna shafar yadda aka rarraba kasafin kuɗin frame 1–16 da ke akwai. An iyakance sashin da aka daina a frame guda, yayin da sassan da ba a daina ba suna fafatawa don sauran kasafin. Lokacin da iyakokin suka fi frames yawa, ana kiyaye rufin lokaci na daidaito don cewa gajerun yanke-yanke ba za su iya ɓoye sashin dogon juyawa ba. Iyakokin yanayi a cikin 1-second nazarin ingancin iyakar tsayawa suna haɗuwa.

Rashin tace, shaidar da ba ta dace ba/ta kasance, kuskuren mai gano, ko lokacin iyakance pre-analysis yana fuskantar buɗewa zuwa ga daidaitaccen tsari na tsakiya. Wani kira na dakatarwa ko lokacin ƙarshe na broker ba ya fuskantar buɗewa: yana dakatar da aikin da ke gudana, yana hana fitar da frame daga baya, kuma ana cire itacen wucin gadi a cikin `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` yana haifar da ainihin FFmpeg fixtures don adana kudaden kiran rubutu bayan an cire maimaitawa, rarraba kasafin motsi mai yawa, shaidar blur/exposure/SI-TI, gajerun yanke-yanke tare da dogon juyawa, da ƙarin-fade ƙarya masu kyau. Yana rubuta lokacin bango na pre-analysis, kuma, inda `/usr/bin/time` ke akwai, CPU na yaron da peak RSS. Duban ingancinsa suna zama oracles na tsarin kawai. Ingancin ainihin samfurin rubutu yana ci gaba da kasancewa `HOLD` saboda wannan kayan aikin ba shi da wurin karɓa da aka ba da izini ko mai yanke hukunci da aka daina. Adana kuɗi ma yana ci gaba da kasancewa `HOLD` sai dai idan `--caption-cost-per-call-usd` ya bayar da ƙididdiga mai kyau ta kowanne kira; rubutun ba ya ƙirƙirar kowanne sakamako.

Kowane frame yana iyakance ga 4 MiB, dukkanin frames na asali suna zuwa 23 MiB, da martanin broker da aka tsara yana zuwa 32 MiB. Ana cire babban directory na wucin gadi a cikin `finally`. OmniRoute ba ta haɗa FFmpeg kuma ba ta karɓi hanyar aiwatarwa ta musamman. Kafin rubutun, gado yana amfani da wani tsari na kula da hoto: kowane JPEG yana ragewa zuwa buffer na 16×16 grayscale kuma ana kwatanta shi kawai da frame na ƙarshe da aka riƙe. Don kasafin rubutu da aka nema sama da frame guda, fitarwa yana bayar da wani iyakance na masu yiwuwa har zuwa sau biyu na wannan kasafin kuma ba zai taɓa zama fiye da frames 16 ba. Ana amfani da iyakar da aka nema ne kawai bayan an cire maimaitawa, tare da farko da ƙarshe zaɓaɓɓun masu yiwuwa suna kasancewa a lokacin ƙarshe lokacin da kasafin ya kai aƙalla biyu. Tsarin da aka tsara `grayscale-16x16-mean-cells-v2` yana amfani da mafi girman na matsakaicin luma delta da rabo na cells na thumbnail wanda ke da delta da aka daidaita aƙalla 0.05. Iyakokin maimaitawa shine 0.04, wanda aka zaɓa don tabbatacce maimakon a bayyana a matsayin saitin lokacin aiki. Wannan siginar mai ƙarancin bambanci na biyu yana kiyaye ƙaramin motsi da canje-canje na rubutu da za a iya ɓoye su ta hanyar kwatancen kawai na matsakaici. Kuskuren mai kwatanta ko mai fassara suna fuskantar buɗewa kuma suna kiyaye rufin. Metadata na fitarwa yana raba masu yiwuwa da aka fitar, frames da aka yi amfani da su, da kwatancen hoto da aka zubar.

Wani ɓangare na bidiyo da aka bayyana a fili na iya neman takardar tuntuɓar da aka yi wa alama da lokaci. Gado yana gina grid na JPEG mai kolum 4, frames 16 a mafi yawa. Kowane cell na pixels 512 yana ƙonewa da lokacin asalin sa a cikin babban rukunin ƙarancin bambanci, yayin da wannan lokacin yana kasancewa a cikin metadata na rubutu don haɗin gwiwa da bincike. Cikakken JPEG yana ci gaba da kasancewa a iyakar 32 MiB. Idan `sharp` ba zai iya fassara ko haɗa grid ba, gado yana komawa ga frames JPEG na mutum; dakatarwar abokin ciniki har yanzu tana wucewa ta hanyar aikin takardar.

Shaidar inganta tana da nufin zama daban daga ƙirƙirar haɗin gwiwa na microbenchmark. `scripts/perf/video-bridge-contact-sheet-eval.ts` yana bayyana tsarin da aka tsara na A/B don ainihin samfuran hangen nesa masu dace da OpenAI. Yana auna adadin tokens da mai bayarwa ya bayar, jinkirin bango na gaba ɗaya (ciki har da haɗin takarda), adadin kiran samfur, da riƙon gaskiya da aka bayyana a cikin jerin. Ba a rubuta amsoshin samfurin asali a cikin rahoton; kawai SHA-256 digests da IDs na gaskiya da aka dace ne aka riƙe. Wannan kayan aikin ba ya yi kiran hanyar sadarwa ko samfurin da aka biya sai dai idan `--execute-real` an wuce kuma `--model`, `OMNIROUTE_BASE_URL`, da `OMNIROUTE_API_KEY` an saita. Ba tare da wannan gudanarwar ainihi ba, hukuncin da za a iya karantawa na na'ura yana ci gaba da kasancewa `HOLD`; kawai auna nauyin kaya/ƙididdigar kira ba su zama shaidar inganta ba.

Wannan daban `scripts/perf/video-bridge-promotion-eval.ts` yana amfani da FU-07 ko FU-09 lura. Shiga inganta yana buƙatar dukkan nau'ikan yanayi guda takwas na ƙirƙira da kuma wani clip na ainihi da aka tsabtace, aƙalla maimaitawa uku da aka auna a kowanne rawa da yanayi, dukkanin metrics guda goma da aka bayyana, shaidar kafofin watsa labarai/umarnin/ƙididdigar da aka tsammani/saido, IDs na lura na musamman da tabbatar da tsarin A/B da aka shuka. Takardar shaidar aiwatarwa tana haɗa da digest na corpus, takamaiman SHA na masu yiwuwa da gyaran samfur. Rashin ko rashin ingancin auna yana ci gaba da kasancewa `HOLD`, ciki har da CPU sama da 30 s, peak RSS sama da 512 MiB ko pre-analysis sama da 30 s. Waɗannan suna zama iyakokin shaidar shigarwa, ba sabon tabbacin aiwatar da RSS ba.

FU-07 yana buƙatar aƙalla 98% riƙon inganci da p95 jinkirin ba fiye da 1.2x
tushen, tare da ko dai ingantaccen maimaitawa na 0.05 a cikin kiran ma'anar da aka daidaita, ko kuma aƙalla 10% ƙasa da ma'anar kiran bayan-dedup. FU-09 yana buƙatar aƙalla 0.85 inganci, 95% riƙon, 20% rage jinkirin p95 da 10% rage token. Asarar muhimmin abu, bin doka ko rashin amfani yana hana inganta. Wani aiwatarwa ba zai iya inganta komai ba: `--previous-report` yana tabbatar da aiwatarwa guda biyu masu bambanci, ba su yi jituwa ba, da suka yi jere na cancanta na tsarin/model na gyara/maraba/corpus ɗaya. Wani gwajin samfur ba zai iya tabbatar da gwajin takardar tuntuɓar ba.

Masu tattara bayanai ya kamata su ba da maki ga amsoshin a cikin ƙwaƙwalwa kuma su adana `responseDigest` tare da
ma'auni da haɗin hangen nesa, ba tare da rubutun amsa ba. Mai amfani kuma yana karanta tsofaffin bayanan da aka yi amfani da su amma ba ya taɓa kwafa wannan rubutun cikin rahotanninsa. Daya daga cikin `responseDigest` ko `rawResponseText` ana karɓa don kowanne hangen nesa. Jerin izini mai juyawa yana ci gaba da zama fanko tare da `hold` na dindindin. Wani shafi mai cancanta yana buƙatar shaidar shaidarsa, tsarin, gyaran samfur, takamaiman SHA na maraba, digest na manifest da IDs guda biyu na gudanarwa; yanayi masu rikici ana ƙin su. Waɗannan bayanan suna matsayin kwangilar bincike, ba shaidar cewa fayil ɗin da aka ambata yana ɗauke da ainihin ma'auni ba. Duba takardun da aka yi kafin ƙara kowanne shafi. Hanyar bayanan gudanarwa da dashboard na Bidiyo suna bayyana karfin karɓa. Wani suna na samfur da aka saita kawai ba ya kafa gyaransa ko
SHA na maraba, don haka dashboard na yanzu yana bayar da `HOLD` maimakon sake amfani da cancanta daga wani yanayin aiwatarwa. Zaɓin gwaji na musamman yana ci gaba da zama daban daga inganta; babu tsoho da aka canza ta atomatik.

Masu kira na iya haɗa zaɓin `transcript.cues` zuwa wani ɓangare na bidiyo da aka goyi bayan lokacin da suke da rubutun da aka daidaita. Kowanne alama dole ne ta ɗauki `text`, wani iyakacin `start`/`end` a cikin lokacin da aka bincika, da `source` da aka ba da izini (`client`, `embedded`, ko `audio-bridge`); `confidence` yana zama na asali `1` kuma dole ne ya kasance tsakanin `0` da `1`. Ainihin alamomin kwafi ana haɗa su. OmniRoute ba ya fara rubutun daga wannan bayanan: alamomin da aka tabbatar ana kwafa su cikin sakamakon da aka bayyana tare da tushe, amincewa, da iyaka, kuma ana fassara su a matsayin hangen nesa marasa amincewa tare da rubutun fuskokin. Rubutun da ba daidai ba, wanda ya wuce iyaka, ko wanda ba a san asalin sa ba ana ƙin sa maimakon haɗa shi cikin ruwan rubutu. Dukkanin tashoshin rubutun jiki suna daidaita asalin da aka bayar zuwa `client`, gami da `embedded` ko `audio-bridge` da aka bayyana. Kawai mai haɗin kai na uwar garke ne zai iya sanya waɗannan alamomin amintattu ta hanyar hujjar `trustedSource` kawai; filin JSON na buƙata ba zai iya isa wannan hujjar ba. Rubutun rubutu yana kasancewa abun ciki na kafofin watsa labarai marasa amincewa, ba tare da la'akari da asalinsa ba, kuma ba ya kamata ya taɓa tantance izini.

Wani mai kira na iya bayar da `audioTranscript` track don wannan bidiyon; ana ɗaukar sa a matsayin rubutun da abokin ciniki ya bayar, ba shaidar rubutun uwar garke ba. Hanyar haɗin gwiwa tana gudanar da hangen nesa da sauti a ƙarƙashin
ƙayyadadden lokaci da siginar dakatarwa, tana tsara su akan lokaci guda, tana haɗa ainihin kwafi, kuma tana bayar da sakamakon ɓangare lokacin da ɓangare guda ɗaya kawai ya yi nasara. Wani `audioTranscript` da ba daidai ba yana raguwa zuwa wannan sakamakon ɓangare — ana adana bayanin hangen nesa kuma ɓangaren sauti yana rubuta lambar gazawa mai tsabta — maimakon gazawa dukkanin bidiyon. Bisa ga samuwa na ɓangare, alamar ɓangare, da lambobin gazawa masu tsabta ana adana su a cikin sakamakon da aka bayyana, a cikin bayanan kariya (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), a cikin bayanan ajiyar sakamakon, da kuma a cikin ƙididdigar haɗin gwiwa. Hanyar tsohon Bidiyo Bridge ba ta kaddamar da magana-zuwa-rubutu ko sauke wani kwafin kafofin watsa labarai na biyu; ba tare da wannan takamaiman track ba, yana kasancewa kawai bidiyo.

**Riƙon rubutun (#12150 P1).** Wannan yana aiki ta atomatik duk lokacin da
Bidiyo Bridge (kansa zaɓi) ya fitar da alamar rubutu — babu wata alamar riƙon daban. Lokacin da wani buƙata ta fitar da kowanne alamar rubutu (wannan mai kira ya bayyana `transcript` ko `audioTranscript` da aka haɗa), kariya tana alamar shi `videoBridgeObserved` kuma tana samar da inuwa mai gyara na bayanin bidiyo —
wani fassarar da dukkanin jikin rubutun kyauta na kowanne alama an maye gurbinsa da `[redacted-video-transcript]`, wanda aka gina ta hanyar maye gurbin filin alama na tsari kafin a haɗa rubutun (ba ta hanyar fassara rubutun da aka daskare ba, don haka babu abun ciki na alama — na adawa ko na yau da kullum, gami da jikin da ke ɗauke da `]` kamar `[inaudible]`/`[music]` — zai iya tsira). Jikin da aka aiko sama zuwa ga samfur ba ya canza. An lura da buƙatar kuma ba ta cika ƙwaƙwalwar dindindin (duka fitar da buƙata da amsa an tsallake), don haka amsar kanta ba za ta iya maimaita rubutun rubutu cikin ƙwaƙwalwa ba.

**Fannonin bidiyo na asali (#12430).** Lokacin da aka kunna gado kuma goyon bayan bidiyo na asali ba a san shi ko babu, an bayyana `transcript`/`audioTranscript` fannonin suna kuma kunna `videoBridgeObserved`, ko bayan gazawar bayanin ko iyakar `maxVideos`. `null` da fannonin da ba su cika suna ƙidaya; fannonin da ba su kasance ba da bayanan da ba bidiyo ba ba su yi haka ba. An adana kwafi suna gyara waɗannan fannonin ko kuma suna watsi da buƙatar, kuma ajiyar/ƙwaƙwalwa ana tsallake su. Jikin mai bayarwa yana kasancewa ba tare da canji ba.

Karin kwafin da aka adana suna amfani da siginar buƙatun da aka lura da ita. Hoton buƙatun abokin ciniki na farko, buƙatun da ke jiran a cikin ƙwaƙwalwa, da rajistar buƙatun da aka ƙi a farko suna maye gurbin filayen rubutu a cikin sassan bidiyo; umarnin rubutu da aka ƙirƙira ta matakan pipeline da canja wurin mahallin ana redacted a wurin adana buƙatun. Alamar `video_content_removed` da aka adana tana sa ci gaba da `previous_response_id` ya kasa rufewa maimakon sake gina rubutun da aka zartar da shi da gangan. Idan buƙatun da aka lura ya rasa inuwa na redaction a kowane sashi kafin a rubuta, ko ma ɗaya daga cikin shadows na bidiyo da yawa ya kasa dacewa bayan canje-canje na buƙatun daga baya, ana watsi da jikin buƙatun da aka adana gaba ɗaya maimakon adana rubutun da aka redacted a ɓangare.

Don buƙatun da aka lura, amsar samfurin na iya ambaton kowanne ɓangare na rubutun ba tare da iyakar alamar tsari ba. Saboda haka, `responseBody` na rajistar kira da aka adana yana maye gurbin alamar watsi; kayan aikin pipeline na daki-daki (wanda zai iya haɗawa da jikin upstream/client da chunks na kwarara) ba a adana su. Cache na ma'ana, idempotency, da reasoning-replay suna kauce wa karatu da rubuce-rubuce don wannan buƙatun. Buƙatun mai bayarwa da amsar da abokin ciniki ke gani suna ci gaba da kasancewa ba tare da canji ba. Ana drain bytes na farko na keepalive daga buffer na wucin gadi lokacin da aka watsi da kayan aikin daki-daki. Gargadin Kiro na EventStream da aka yi kuskure yana bayar da rahoton kawai adadin bytes na kayan aiki, ba tare da abun ciki ko kuskuren asalin mai fassara JSON ba. Wannan ba ya yi ikirarin cewa an duba kowanne rahoton mai bayarwa/plugin da ba a danganta ba; ana bin diddigin faɗin adana-sink a cikin #11658.

Rayuwar `/api/modality-bridge/video/drilldown` na ciki yana zama wani abu daban, cache na loopback/token-authenticated. Kowanne aiki yana buƙatar ID na asali mai ɗauke da hoto. Kafin a ba da izinin mai kira na samarwa, dole ne ya samo wannan ID daga mai haya da aka tabbatar kuma ba zai taɓa watsawa da ƙimar da abokin ciniki ya zaɓa ba. Maɓallan cache suna haɗa wannan asalin da ID na zaman canonical da na tunani-bidiyo, suna adana kawai maɓallan da aka samo daga SHA-256, kuma suna iyakance karatu da goge-goge ga wannan asalin. Cache yana adana a kalla frames 16 na JPEG da aka samo a kowanne shafi, yana ƙare su bayan mintuna goma, kuma yana goyon bayan karatun `start`/`end` da aka iyakance ko goge zaman a fili.

Kowane asali yana iyakance ga shafuka 16 da 64 MiB na bayanan JPEG na asali. Wadannan iyakokin suna zaman kansu daga babban iyaka na shafuka 64/256 MiB: matsin lamba na asali yana fitar da kawai shafukan da aka yi amfani da su na ƙarshe kafin a yi la'akari da fitar da LRU na duniya. Ana goge shafukan da suka ƙare daga asali da lissafin duniya akan aikin cache, yayin da soke da gazawar tantancewa ba su yi rajistar maye gurbin ɓangare ba.

Cache yana ƙin Base64 mara asali, ƙarin padding, kafofin watsa labarai na non-JPEG, JPEGs da aka yi kuskure ko aka yanke, da JPEGs da ke haifar da gargadi yayin cikakken hoton `sharp` decode da aka iyakance. Yana sake ƙirƙirar kowanne hoto da aka karɓa a matsayin JPEG na asali, yana samo fadi da tsawo daga bytes da aka fassara maimakon dogaro da filayen mai kira, kuma yana watsi da duk wani bytes na polyglot da suka rage maimakon adana su. Kawai buffer na canonical da aka matsa yana cajin dukkanin ƙimar. Iyakokin waya na JSON sun haɗa da ƙarin Base64 don iyakar 32 MiB na shigar da aka fassara. Kowanne
samar da aka adana yana rubuta tsarin JPEG da aka tabbatar/resolution, tsarin samfur, sigar samfur, lokacin ƙirƙira, hash na abun ciki da aka ƙirƙira ta uwar garken, da hash na mahaifin tushe mai aminci. Ana duba soke tsakanin matakan asyncronous decode/hash kafin a yi rajistar cache na atomatik.

Mai samarwa na samarwa yana sake amfani da frames na broker da aka riga aka samo kawai bayan nasarar nazarin hoto, ba tare da saukar bidiyo na biyu/ƙarɓa ba. Yana buƙatar mai aiki `modalityBridgeVideoDrilldownEnabled=true`, tsauraran `drilldown: true` a kowane sashi, da ID na rajistar API-key da aka tabbatar. Kima na asali/session da abokin ciniki ya bayyana ba su taɓa kafa mallaka ba. Ba tare da dukkanin sharuɗɗan uku ba, ba ya yi hash, resize ko adana ƙarin frames. Gazawar adana tana adana amsar hoto mai amfani. Buƙatun da aka yarda suna kauce wa dukkanin sakamakon bidiyo don haka sakamakon da aka adana ba su taɓa sake yin amfani da su ba.

Nasara JSON da amsoshin SSE suna bayyana a kalla handles hudu na hoto a cikin `x-omniroute-video-drilldown` header da aka iyakance. Asalin mai izini na burauza na iya karanta wannan header ba tare da faɗaɗa tsarin manufofin asalin CORS ba. Sabbin handles suna amfani da `v1.<32-byte random base64url token>`, kuma rajistar tana adana kawai hashes na SHA-256. Mai karatu/header parser yana karɓar tsofaffin maɓallan 64-hex. Mai amfani na jama'a da aka tabbatar shine `GET /api/v1/video-bridge/drilldown?handle=...`, wanda aka raba ta hanyar `modalityBridgeVideoDrilldownRemoteEnabled=true`. Kwatancen da aka adana na ƙarya yana soke samun dama ko da lokacin da tsohon `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env fallback ya kasance a kunna. Adana samarwa yana da kwatancen tsoho na `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Dukkanin waɗannan faɗakarwar suna da tsohon da aka saita a kashe.

Mai amfani yana samo mallaka daga maɓallin da aka tabbatar, yana amfani da tsarin maɓalli, kuma yana dawo da 404 ɗaya don handles da ba a sani ba, waɗanda suka ƙare da kuma na wani maɓalli. Yana karɓar `variant=preview|standard|detail` (matsakaicin girman JPEG 320/640/1280, ba a ƙara girma ba), `limit=1..8` (ko tsohon `frames` alias, ba duka ba), `page` mai tushe, da zaɓin `start`/`end` na seconds. Maɓallan tambaya masu maimaitawa da windows na mayar da hankali suna ƙin karɓa. Kowanne nau'in da aka dawo yana da hash na abun ciki na gaske da metadata na resolution na gaske, wanda aka haɗa da tushen da aka adana. Ana samo nau'ikan a karatu maimakon adana su a matsayin ƙarin kwafi da aka adana. Amsar JSON, gami da Base64/envelope, an iyakance ta zuwa 32 MiB; shafi mai girma yana dawo da 413 kuma abokin ciniki dole ne ya nemi ƙarin frames. Karatu suna duba soke a kusa da kowane resize da sake duba ingancin handle kafin dawo da su. `DELETE` ta mai mallaka yana da idempotent; goge ko ƙarewar TTL yana sakin tushen da aka adana da lissafin amfani.

Store da aka raba yana cikin tsarin aikin: ana ƙare hannayen a lokacin sake farawa kuma ba za a iya canja wurin su tsakanin tsarin OmniRoute masu zaman kansu ba. Kididdigar gudanarwa tana bayyana ingantaccen riƙewa/tsarin nesa kuma tana tara shigarwa/bytes da aka riƙe kawai, ba tare da kafofin watsa labarai, tunani, IDs na babban mutum ko hannaye ba. Panel na saitunan Bidiyo yana nuna waɗannan ƙimar kuma yana iya ci gaba da canje-canje na yarda duka. Wannan takaddun aikin aiwatarwa ba shaidar aikace-aikacen kai tsaye ko inganta ba; karɓar samfurin ainihi ana bin diddigin sa daban.

Ana sanya rubutun a cikin Frames a jere tare da samfurin Bidiyo da aka saita. Wani watsi na Bidiyo mara komai yana gaji saitin Vision; idan duka suna komai, mai sarrafa hangen nesa na atomatik yana zaɓar ingantaccen samfurin da zai iya hangen nesa. Rubutun da ya yi nasara yana maye gurbin asalin sashi tare da `[Video description:` mai ɗorewa wanda kuma yana nuna rubutun a matsayin wani abu da aka samo daga kafofin watsa labarai wanda ba a yarda da shi ba kuma yana gaya wa samfurori masu zuwa kada su bi umarnin da aka samo a cikin kafofin watsa labarai. Maɓallan ajiyar rubutun Frame suna haɗa bytes na JPEG, tambaya, lokacin, da ingantaccen samfur; kawai rubutun da ya yi nasara ne aka adana. Shigarwar ajiyar suna riƙe ainihin samfurin mai samar da nasara, gami da samfurin madadin; gada tana bayar da rahoton `mixed` lokacin da aka samar da frames daban-daban ta hanyoyi daban-daban. Samun ajiyar yana sake amfani da wannan asalin mai samar da maimakon sake sanya shi a matsayin shirin jigilar da aka nema. Ajiyar sakamakon dukkan bidiyo yana da maɓalli akan kowane shigarwa da ke canza fitarwa — tambaya, ingantaccen samfur, tsarin samfur, adadin frame, yanayin nazarin ma'ana, SHA-256 fingerprint na alamar mai da hankali da aka daidaita, taga mai da hankali, `transcript`, `audioTranscript`, da alamar takardar tuntuɓa — don haka canza kowane daga cikin waɗannan girma yana zama rashin samun ajiyar, ba tare da sake amfani da tsofaffi ba. Sigogin manufofin cire hoto na gani, ƙayyadaddun ƙayyadaddun, da adadin frames na ɗan takara suna kuma bayyana a cikin maɓallin ajiyar sakamakon da metadata; canjin manufofi don haka ba zai iya sake amfani da tsohuwar bayanin dukkan bidiyo ba. Metadata na ajiyar sakamakon v4 yana riƙe yanayin da fingerprint, ba tare da aikin mai amfani na asali ba. Metadata na kariya yana bayar da rahoton duka yanayin nazari da aka nema da ingantaccen; yanayin `focused` da aka nema ba tare da rubutun mai amfani mai amfani ba ana bayar da rahoton a matsayin ingantaccen `full`.

Kariya tana cire kowane ɓangare na bidiyo da aka goyi bayan amma ba ta bayyana fiye da `modalityBridgeVideoMaxVideos` ba. Don wani manufa da aka tabbatar da cewa `supportsVideo === false`, bidiyon da suka gaza da waɗanda suka wuce iyaka suna zama alamomin rubutu masu aminci don haka babu bidiyo na asali da ya wanzu. Lokacin da ba a san ikon ba, waɗannan ɓangarorin suna kasancewa ba a taɓa su ba. Targets tare da `supportsVideo === true` suna wuce gada. Siginar dakatar da buƙatar abokin ciniki tana wucewa ta hanyar saukarwa, jerin broker, subprocesses, da kiran rubutu; dakatarwa suna tsayawa tsakanin bidiyo kuma ba sa faɗi a bude ga kafofin watsa labarai na asali.

Saitunan lokacin suna goyon bayan DB kuma an tabbatar da su ta Zod:

| Key                                 | Default     | Range / behavior                                                                                                     |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Zaɓi na lokacin, zaɓi cikin                                                                                          |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` yana adana rubutun gama-gari; `focused` yana amfani da iyakance, ba a yarda da sabuwar mahallin mai amfani ba |
| `modalityBridgeVideoModel`          | `""`        | Gaji samfurin Vision Bridge                                                                                          |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                 |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, ko daidaitaccen `segment_aware`; gazawar mai gano yana komawa zuwa `uniform`               |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                  |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                       |

Darajar lokaci na Bidiyo da aka adana na tsoho sama da sekondi 120 ana ƙayyade su zuwa ƙayyadadden lokaci na broker; sabbin saitunan da aka rubuta sama da wannan iyaka ana ƙin su. `GET /api/modality-bridge/video/runtime` yana buƙatar amintaccen stamped loopback locality kafin tantancewa ko binciken lokacin, sannan yana buƙatar izinin gudanarwa. Yana dawo da `available` kawai, an tsaftace FFmpeg/ffprobe sigogi, da dalili mai ɗorewa lokacin da lokacin ba ya samuwa. Wurin fitarwa na ciki ba API ne na ɗora jama'a ba: cunkoson jeri yana dawo da `503` tare da `Retry-After`, katsewar mai kira tana dawo da `499`, da ƙayyadadden lokacin broker yana dawo da `504`. Amsoshin da aka canza suna ƙara `video->text;model=<visionModel>;parts=<videos>` zuwa babban `x-omniroute-modality-bridge` header ba tare da cire sassan Vision ko Audio ba.

### PII Masker (`piiMasker.ts`)

Yana gudana a **duka** matakai.

- **`preCall`** yana kwafin abun ciki, yana tafiya ta `system`, `messages`, `input`, da `prompt` (ciki har da abubuwan rubutu na al'ada), kuma yana amfani da `processPII()` (daga `@/shared/utils/inputSanitizer`) ga filayen rubutu `content`/`text`. Lokacin da `PII_REDACTION_ENABLED=true`, an yi redaction ga PII da aka gano a cikin abun ciki na fita. Wannan yana zaman kansa daga `INPUT_SANITIZER_MODE` (wanda kawai ke sarrafa tsarin shigar da tambaya). Lokacin da aka kashe redaction, kiran yana rikodin adadin gano ba tare da sake rubuta abun ciki ba.
- **`postCall`** yana yin zurfin kwafin amsar, yana gudanar da `sanitizePIIResponse()` tare da mai masker na Tsarin Amsoshi (`maskResponsesOutput` — yana rufe `output_text` da `output[].content[].text`). Idan an yi redaction, amsar da aka gyara tana maye gurbin asalin.

Kariya ba ta taɓa toshewa; tana kawai yin bayanin (`meta.detections`, `meta.redacted`) ko sake rubuta.

### Prompt Injection (`promptInjection.ts`)

Detects adversarial structures in user-supplied content and enforces the
configured policy. Behavior is driven by environment variables and constructor
options:

| Saitin          | Env var                                                                                               | Default | Tasiri                                                                                                                                                                          |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| An kunna        | `INPUT_SANITIZER_ENABLED`                                                                             | `true`  | Lokacin da `false`, guardrail yana gaggawa.                                                                                                                                     |
| Yanayi          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`  | Dokar shigarwa: `block`, `warn`, ko `log`. (`redact` an karɓa don jituwa da baya amma ba ya cire rubutun shigarwa; buƙatar PII rewrite ana sarrafa ta `PII_REDACTION_ENABLED`.) |
| Block threshold | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Mafi ƙarancin tsanani da ake buƙata don toshewa. Matsakaici yana zama kawai a lura da shi a tsoho.                                                                              |

**Yanayi fifiko** (`getMode`): mai kira `options.mode` →
`INJECTION_GUARD_MODE` **DB feature-flag override** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Saboda haka, override na dashboard yana samun nasara akan env vars, don haka UI na Feature
Flags yana sarrafa guard mai gudana kai tsaye (ba tare da sake farawa ba). Karatun DB yana da kariya:
idan ya yi kuskure, guard yana komawa ga halayen da aka dogara da env, kuma lokacin da babu
override da aka saita halayen suna daidai da warwarewar env kawai.

Hanyoyin ganowa:

1. `sanitizeRequest()` daga `@/shared/utils/inputSanitizer` (rukunin ganowa
   da aka yi amfani da shi a wasu wurare a cikin pipeline).
2. An gina cikin `DEFAULT_GUARD_PATTERNS` (a halin yanzu `system_override_inline` da
   `markdown_system_block`, duka suna da tsanani `high`).
3. Zaɓi `customPatterns` da aka wuce ta hanyar zaɓin mai gina (strings, regex,
   ko `{ name, pattern, severity }` records).

Lokacin da `mode === "block"` **da** akalla ɗaya daga cikin ganowa ya cika tsananin
threshold, `preCall` yana dawo da `{ block: true, message: "Request rejected:
suspicious content detected" }`. A cikin `warn`/`log` yanayi, guardrail yana rubuta amma
yana ba da izinin kira. Mai taimako na raba `evaluatePromptInjection()` an kuma fitar da shi
don masu kira da ke buƙatar tantance tambayoyi ba tare da wucewa ta hanyar rajista ba.

**Scan bound (v3.8.20):** mai ganowa yana duba **na farko 16 KB** na
rubutun tambaya da aka haɗa — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) a
`src/shared/utils/inputSanitizer.ts`. Duka `detectInjection()` da
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` kafin gudanar da
madauki na tsari. Umarnin shigarwa suna kusa da saman shigarwa, don haka wannan
yana iyakance regex CPU/GC akan nauyin da ya kai dubban-KB ba tare da raunana ganowa ba (cf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Yana gudana a **duka** matakai, na ƙarshe a cikin silsilar tsoho (matsayi `95`). Yana cire
sanannun tsarin API-key / secret-token daga nauyin fita (abun ciki na saƙo,
hujjojin kiran kayan aiki, sakamakon kayan aiki) **da** amsar mai bayarwa, don haka
credential da aka liƙa cikin tambaya (ko an maimaita ta ta hanyar sakamakon kayan aiki) ba a bayyana
ga mai bayarwa na sama ko kuma ga abokin ciniki ba.

- **Zaɓi kawai**, wannan tsarin yana daidai da PII redaction (Ka'ida Mai Tsauri #20-mai kusanci):
  an kashe sai dai idan `settings.credentialRedactionEnabled === true` **ko**
  `CREDENTIAL_REDACTION_ENABLED=true`. Idan an kashe, guardrail ba ya aiki —
  ba ya taɓa toshewa kuma ba ya taɓa sake rubutawa.
- `redactCredentials()` yana tafiya cikin dukkan nauyin/amsar itace (`walkValue()`,
  mai kariya daga gurbatawa, mai kariya daga zagaye ta hanyar `WeakSet`) kuma yana maye gurbin da
  `[REDACTED:<type>]` placeholder, yana kwafin kawai rassan da suka canza.
- `CREDENTIAL_PATTERNS` yana rufe maɓallan mai bayarwa na LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens na VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maɓallan biyan kuɗi (Stripe, Square), maɓallan gajimare
  (AWS access key, Twilio, SendGrid, Mailgun), maɓallan sirri / JWTs,
  hanyoyin haɗin da ke ɗauke da credential (`mongodb://user:pass@...`, da sauransu), da
  tsarin `Authorization`/`x-api-key`/`api-key`/`apikey` header-value. Maɓallan da suka yi kama da header
  (`authorization`, `x-api-key`, `api-key`,
  `apikey`) ana cire su bisa tsarin (kawai ƙima, tsarin gabatarwa kamar
  `Bearer `/`Basic ` an adana) maimakon ta hanyar regex na rubutu na gama-gari.
- Guardrail ba ya taɓa toshewa; yana sake rubutawa kawai (`modifiedPayload` /
  `modifiedResponse`) da kuma yin bayanin (`meta.credentialsRedacted`, `meta.count`).

Kariya daga koma baya: `tests/unit/credential-masker-guardrail.test.ts`.

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
