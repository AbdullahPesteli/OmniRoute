# Guardrails (Malti)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sors awtorevoli:** `src/lib/guardrails/`
> **Aġġornat l-aħħar:** 2026-08-29 — v3.8.51 (il-provenjenza tat-traskrizzjoni ta’ Video Bridge tiġi ddikjarata minn min isejjaħ,
> u għadha mhix ivverifikata mis-server — iċċarat skont #11661)

Il-guardrails jinfurzaw is-sikurezza, il-politiki u t-trasformazzjonijiet tal-kontenut fil-konfini
bejn OmniRoute u l-fornituri upstream. Kull guardrail jista’ jispezzjona (u,
b’mod fakultattiv, jirrifjuta, jittrasforma jew jannota) il-payloads tat-talbiet (`preCall`) u
r-risposti upstream (`postCall`).

Is-sistema hija **fail-open**: jekk guardrail jitfa’ eċċezzjoni waqt l-eżekuzzjoni, ir-reġistru
jirreġistra l-iżball u jkompli bil-guardrail li jmiss minflok ifalli
t-talba. L-imblukkar huwa deċiżjoni espliċita (`block: true`), qatt aċċident.

## Guardrails Integrati

Il-reġistru awtomatikament jħaddem sitt guardrails fl-ordni ta' prijorità fuq l-importazzjoni
(ara `registry.ts` → `registerDefaultGuardrails()`):

| Prijorità | Isem                | Stage(s)       | File                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Numri ta' prijorità aktar baxxi jsiru **l-ewwel**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Jinterċetta talbiet li jġorru ritratti immirati lejn **mudelli mhux viżivi** u jew
jirruta t-talba kollha għal mudell kapaċi viżjoni jew jissostitwixxi l-parti tar-ritratti b'deskrizzjonijiet bil-test prodotti minn mudell viżwali konfigurable qabel
il-kall ta' fuq. Dan jippermetti li fornituri biss bil-test jandmu b'mod trasparenti
pajpijiet multimodali.

Fluss:

1. Iskipja jekk il-mudell immirat diġà jappoġġa viżjoni (sakemm ma jidhirx fil-lista
   tal-forzi `isVisionBridgeForcedModel`).
2. Eħles il-parti tar-ritratti permezz ta' `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), li delega lill-**detettur ta' media unifikata**
   `detectMediaParts()` f`open-sse/utils/mediaParts.ts` — is-sors uniku ta' verità
   maqsuma mal-filtru ta' kompatibbiltà tal-kombinazzjoni.
   L-eħles huwa awtorizzat għal partijiet ta' livell għoli tal-formi
   `replaceImageParts` jistgħu jinqatgħu lura (il-kuntratt estratt↔sostituzzjoni): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, u Responses API `input_image`. Hits imnested u
   forom biss ta' indikatur huma materjal tal-filtru tal-kombinazzjoni u qatt ma jiġu estratti.
   Iskipja jekk ma ssibx.
3. Irriżolvi l-konfigurazzjoni tal-ħin reali permezz ta' `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): il-ġodda `modalityBridge*`
   settijiet jiġġieldu; l-antik `visionBridge*` jibqgħu **fallback ta' ċiklu wieħed**
   (window ta' rollback). Iskipja qabel kwalunkwe traversali tal-media meta l-bridge huwa diżattivat.
4. Il-selettur tal-mod (`modalityBridgeVisionMode`, ara t-tabella hawn taħt) jiddeċiedi
   jekk jirruttaw jew jiddeskrivi. Il-rirruta tirritorna `modifiedPayload` b'`model`
   biss mibdula, flimkien ma' meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Triq id-diskrizzjoni: iċċappa r-ritratti sa `maxImages`, kompona l-promt
   li jifhem it-task, ikkonsulta l-kaxxa tad-diskrizzjoni, iċċempel il-mudell viżwali **fil-parallelo**
   (`Promise.allSettled`), u injettaw `[Image N]: <description>` partijiet tat-test fil-post tagħhom. Deskrizzjoni fallita tagħti `null` u l-parti oriġinali tar-ritratti hija
   **preservata** (#4012) — eċċezzjoni fuq it-triq tad-diskrizzjoni tal-kombinazzjoni meta kull
   deskrizzjoni falliet, fejn upstream mhux viżwali ikkonfermat jiksbu stub
   `(unavailable — no vision-capable provider connected)` minflok (#8430).
6. Irritorna `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selettur tal-mod (`modalityBridgeVisionMode`)

| Mod        | Default | Imġieba                                                                                                                                                                                                                                                                       |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Heuristika antika, mhux imħallsa (#6640/#7204): mudelli mhux kombinati/`auto/` jirruttaw għall-aħjar mudell viżwali sakemm il-mudell oriġinali diġà jkollu kredenzjali utli (imbagħad jiddeskrivi); l-għanijiet tal-kombinazzjoni dejjem jiddeskrivu.                         |
| `describe` |         | Dejjem jiddeskrivi — il-blokk tar-rirruta huwa skipjat kompletament; il-mudell magħżul mill-utent dejjem jwieġeb.                                                                                                                                                             |
| `reroute`  |         | Rirruta bil-forza: il-gwardja tal-mudell bil-kredenzjali tintlaqa. Il-gwardja tal-kredenzjali tar-rirruta-**għan** għadha tapplika — meta m'hemmx mudell viżwali utli, it-talba tiġi f'kumbinazzjoni sabiex ir-ritratti raw qatt ma jaslu għal backend biss bil-test (#8430). |

Il-modijiet forzati jissakkru **qabel** ma l-heuristika awtomatika tiġi esegwita; l-imġieba `auto`
hija identika fil-byte għall-guardrail pre-PR-1.

#### Ambitu tal-api-key (`visionBridgeKeyScope.ts`)

Meta l-api key tal-caller tikkontrolla `allowedConnections`, pools ta' kwota
(`allowedQuotas`) jew mudelli (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), il-bridge jpickja biss mudelli
li jirruttaw u jiddeskrivu li l-key tista' tuża, fuq konnessjonijiet li l-key tista' tuża. Il-kall tad-diskrizzjoni imbagħad dejjem jgħaddi permezz tal-OmniRoute self-loop bil
`x-omniroute-self-loop-key-id` header, sabiex it-talba tal-chat li tirċievi
tiflaħ il-politika ta' konnessjoni u mudell ta' dik il-key mill-ġdid. `enforceApiKeyPolicy()`
jħaddan dak il-header biss flimkien mal-bearer tal-self-loop, sabiex jista' biss
jifred l-aċċess, u id li ma tirriżolvixx qiegħed miċħud.

Jekk l-ebda mudell viżwali ma huwa permess għall-key, it-triq tad-diskrizzjoni tħalli lilha nnifisha u
it-talba tgħaddi mingħajr ma tinbidel, l-istess imġieba ta' fall-open bħal guardrail diżattivat (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Talbiet mingħajr key, u keys mingħajr dawn ir-restrizzjonijiet, jaġixxu eżatt kif kienu qabel.

#### Promt ta' diskrezzjoni li jifhem it-task (`modalityBridgeVisionTaskAware`)

Default **veru**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) jżid
it-test tal **-aħħar messaġġ mill-utent** (imqassar għal 500 karattri) mal-bażi
ta' l-promt ta' deskrizzjoni, jimmira d-deskrizzjoni lejn dak li l-utent verament staqsa
(pattern codex-vision-proxy) u jitlob lill-mudell tal-viżjoni biex jitranskrivi t-test viżibbli. Bil-flag off — jew mingħajr test mill-utent — l-promt bażiku jintuża bla tibdil.

Il-request ta' OpenAI-kompatibbli tal-loop ta' deskrizzjoni (`callVisionModelSingle()`
fil `visionBridgeHelpers.ts`) dejjem titlob `image_url.detail: "high"` —
b'mod inkoerenti, għal kull caller/provider, mhux imwaqqaf fuq xi sinjal mill-klijent.
Sampling ta' dettall baxx inaqqas l-eżattezza tal-OCR għall-kompitu ta' traskrizzjoni tat-test li din il-promt titlob, għalhekk il-calling ta' deskrizzjoni nnifsu dejjem jitlob dettall għoli irrispettivament minn x'livell ta' dettall użat fil-request inizjali. Dan jaffettwa biss il-ġisem tal-request interna ta' deskrizzjoni; ma jibdilx kif
OmniRoute jforwarda l-proprju `image_url.detail` tal-caller fuq il-request prinċipali —
dak il-default jiġi applikat separatament, u biss għal klijenti OpenCode identifikati, fil
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Il-branċ tal-format wire ta' Anthropic tal-loop ta' deskrizzjoni m'għandux `detail` field
u m'huwa affettwat minn xi default.

#### Limitu ta' output ta' deskrizzjoni (`modalityBridgeVisionMaxChars`)

| Key                            | Default | Range             |
| ------------------------------ | ------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`     | `0` jew 100–50000 |

`0` (default) ifisser **l-ebda limit** — id-deskrizzjoni li tiġi rritornata minn
`callVisionModel()` tiġi mgħoddija bla tibdil, tippreserva l-imġiba eżistenti. Kull valur fil-livell ta' 100–50000 jinqata' bil
`…` suffiss qabel ma tiġi mqabbda lura bħala `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` fil `src/lib/guardrails/visionBridge.ts`).
Irrid tella' dan għal kompiti ta' OCR b'dettall għoli fejn il-mudell downstream jeħtieġ it-traskrizzjoni sħiħa; ibaxxiha biex tikkontrolla l-użu tat-token fuq mudelli ta' viżjoni li jitkellmu ħafna.
Il-qasam tal-dashboard jinsab fuq il-panel Avvanzat tal-tab ta' Viżjoni
(`modality-bridge-max-chars` fil `ModalityBridgeVisionTab.tsx`) u jikkontrolla kwalunkwe
valur bejn 1 u 99 sa l-100 floor waqt li jħalli `0` esplicitu
mingħajr tibdil — `0` huwa valur validu ta' Zod f'idejn tiegħu
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), mhux biss
il-default "unset".

#### Cache ta' deskrizzjoni (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL fil-memorja għall-output ta' deskrizzjoni, maqsuma proċess-wiċċ.
Key = `sha256(imageRef + composedPrompt + configuredBridgeModel)` b'framing ta' length-prefix (l-ebda kollisioni tal-limiti tal-field). Il-komponent tal-mudell huwa
l-mudell **konfigurat** tal-pont, mhux il-mudell li verament wieġeb —
`callVisionModel` jista' jaqa' lura internament, u l-keying kull tentattiv jiffranka
l-cache. Deskrizzjonijiet li fallu qatt mhumiex maħżuna. Settings:

| Key                             | Default | Range   |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `veru`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Normalizzazzjoni ta' immaġini remoti (self-loop describe/base64 fetch)

Meta l-pont jfetcha immaġini **remoti** nnifsu — il-calling ta' deskrizzjoni ta' Anthropic
u l-konverżjoni ta' base64 tal-format wire claude
(`ensureBase64ImagesForClaudeWire`), it-tnejn permezz ta'
`fetchRemoteImageAsDataUri()` fil `visionBridgeHelpers.ts` — id-data URI li jirriżulta
tiġi mgħoddija permezz ta' `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) qabel ma tiġi inkorporata fil-request tal-mudell tal-viżjoni. Immaġini kbar jiġu downscaled għal **2048px long edge** (li jikkorrispondi
mal-limitu ta' resize li OpenAI/Anthropic diġà japplikaw fuq is-server), li jnaqqas
il-byte ta' upload/latency mingħajr ma jibdel dak li l-mudell tal-viżjoni jara. Ir-ridimensionar
jintuża `sharp`, imniżżel permezz ta' importazzjoni dinamika: fuq pjattaforma fejn il-binary nativ tiegħu falla li jinstalla, `normalizeDataUri()` **qatt ma jniedi** — jaqa' lura
għall-passthrough tal-byte oriġinali, sabiex il-path ta' deskrizzjoni/konverżjoni ta' base64
dejjem jibqa' jaħdem. Bytes mhux-immaġini (fetch li ma rritorna immaġini dekodifikabbli) huma wkoll mgħoddija bla tibdil. Din il-normalizzazzjoni hija
skoperta għall-immaġini li l-pont jfetcha għall-calling nnifsu — qatt ma tiġi applikata għall-payload raw tal-caller, konsistenti mal-prinċipju ta' mutazzjoni opt-in biss (Hard Rule #20).

#### Schema tal-settings + migrazzjoni

Il-ġodda `modalityBridge*` keys huma validati minn Zod fil `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, it-trio `modalityBridgeCache*`, u l-grupp
`modalityBridgeAudio*` użat mill-Audio Bridge. Il-migrazzjoni
`141_modality_bridge_settings.sql` tikkopja l-valuri eżistenti ta' legacy
`visionBridge*` għall-keys ġodda li jmatchjaw (idempotent, qatt ma joverwrites
valur `modalityBridge*` stabbilit mill-operatur); il-keys legacy jibqgħu aċċettati bħala fallback ta' qari għal ċiklu ta' rilaxx wieħed.

#### Header ta' trasparenza + stats

Ir-risposti trasformati ta' deskrizzjoni jġorru
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(mibnija minn `buildModalityBridgeHeader()` fil `modalityBridge/bridgeStats.ts`,
stampata minn `withModalityBridgeHeader()` fil `src/sse/handlers/chatHelpers.ts`).
Requests rerouted ma jiksbu **l-ebda** header — il-payload kien bla tibdil u l-bidla tal-mudell
diġà hija viżibbli fil-field `model` tal-ġisem tar-risposta.

`GET /api/modality-bridge/stats` (awtorizzazzjoni tal-ġestjoni, l-istess livell bħal
`GET /api/settings`) jirritorna l-kontijiet per-modality fil-memorja
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` għal `vision`, `audio`, u
`video`. `averageLatencyMs` juża `latencySamples`, mhux il-ħafna tentattivi, bħala
l-denominatur; operazzjoni mingħajr ħin ma toħloqx kampjun ta' zero millisecondi.
`bridged` jibqa' l-alias kompatibbli mal-imgħoddi għall-konverżjonijiet
suċċessivi; tentattivi falluti ma jżidu l-valur tiegħu.
Il-kontijiet jerġgħu jitwaqqfu meta l-proċess jerġa' jibda b'disinn
(telemetrija, mhux kontabilità).

#### Konfigurazzjoni tal-dashboard

Il-paġna dedikata tal-dashboard hija
`/dashboard/settings/modality-bridge`. Il-tab `Vision`, `Audio`,
u `Video` li jistgħu jiġu aċċessati bil-URL jżommu l-parametri tal-kwestjonarju waqt li jinbidlu l-valur `tab`.
Il-tab Vision juri l-attivazzjoni, il-modalità, l-għażla tal-mudell (inkluż il-default awtomatiku),
il-prompts li jafu l-kompiti, il-limiti avvanzati ta' timeout/immaġni/length/deskrizzjoni/cache,
il-kontijiet tal-ħin tal-eżekuzzjoni, u talba protetta għall-kampjun. Il-tab Audio huwa wkoll attiv: juri
l-attivazzjoni, għażla ta' mudell STT biss bil-Auto, limiti ta' timeout/max-clip, kontijiet tal-audio,
u test ta' kampjun `input_audio`. Il-tab Video huwa funzjonali: jirrapporta
l-istat tal-eżekuzzjoni FFmpeg/ffprobe — waħda minn erba' stati UI espliciti (`unknown` waqt
li l-probe tkun fil-vjaġġ jew ma setgħetx titlesta, `restricted` fuq host tal-dashboard mhux loopback fejn il-probe
tiġi skippjata mill-klijent, `unavailable` ladarba tkun ġiet probata
u kkonfermata li nieqsa, jew `available` bil-verżjonijiet FFmpeg/ffprobe) — tibqa'
l-limiti tal-enable/model/frame/video/timeout, filtri l-għażla tal-mudell għal mudelli kapaċi tal-viżjoni,
u turi kontijiet tal-video.

Il-karta preċedenti tal-Vision Bridge taħt l-impostazzjonijiet AI hija link ta' kompatibbiltà għall
paġna ġdida; ma tistax iżżomm kopja sekondarja tal-formola. Il-Provduturi tal-Media wkoll
jilinkjaw Image-to-Text u Speech-to-Text workflows mal-tabs korrespondenti tal-Modality
Bridge mingħajr ma jneħħu l-playground eżistenti ta' Speech-to-Text.

**Bypass tal-ammissioni self-loop:** meta l-kall call jivvjaġġa permezz tal-self-loop ta' OmniRoute
`/v1` (mudell tal-providur mhux standard), is-sub-request jibgħat
`x-omniroute-admission-bypass: internal` u huwa awtorizzat bil-kredenzjali
self-loop riżolti — il-lokal `sk_omniroute` sentinel fil-modalità lokali, jew il
kredenzjali konfigurati mill-operatur `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env key (#1350) sabiex
il-implimentazzjonijiet `REQUIRE_API_KEY=true` jistgħu xorta jsalvaw il-kall call. Il-bypass
jiġi onorat biss għal dawk il-kredenzjali eżatti, sabiex klijenti esterni ma jistgħux jużaw
il-header biex jaqbżu l-ammissioni.

Il-defaults tal-legacy jgħixu f`src/shared/constants/visionBridgeDefaults.ts`; il
default ġdid tal-modalità/task-aware/cache u l-resolver tal-impostazzjonijiet jgħixu f`
src/shared/constants/modalityBridgeDefaults.ts`. Il-guardrail juri
opzjoni ta' kostrutturi `deps` sabiex it-testijiet jistgħu jinjetta foloz `getSettings` u
`callVisionModel` implimentazzjonijiet.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Jinterċetta talbiet ta' chat li jġorru l-audio qabel ma jaslu għal mira li mhix
magħrufa li taċċetta input audio. Qatt ma jerġa' jivvjaġġa t-talba tal-chat: partijiet tal-audio
jittieħdu permezz tal-endpoint multipart kompatibbli ma' OpenAI eżistenti u l
mudell tal-chat magħżul ikompli bil-kontijiet tat-test.

Flow:

1. Irriżolvi `supportsAudio` permezz ta' `getResolvedModelCapabilities()`. Metadata tal-providur
   reġistrata esplicita tirbaħ, imbagħad metadata statika tal-mudell, imbagħad `modalities_input` sync'd. Lista ta' input iddikkjarata mingħajr `audio` hija `false`; ebda
   evidenza ta' kapaċità tibqa' `null`. Bħala `false` u `null` jattivaw il
   bridge konservattiv, filwaqt li `true` jaqbżuha.
2. Irriżolvi l-impostazzjonijiet `modalityBridgeAudio*` u estratt partijiet ta' audio
   ta' livell għoli li jistgħu jiġu spliced minn kull messaġġ permezz tal-`detectMediaParts()`
   detettur. Il-formati tal-wajer appoġġjati huma OpenAI `input_audio`, `audio_url`, u
   `source.media_type: "audio/*"`. L-audio imnested jiġi detett għall-vjaġġar iżda mhux
   imneħħi mill-passi ta' splicing. Il-ħidma hija limitata minn `modalityBridgeAudioMaxClips`;
   partijiet aktar tard jibqgħu mhux imħassra.
3. Iħaddan `provider/model` konfigurati, jew ħalli `selectAudioBridgeModel()` timxi
   `AUDIO_TRANSCRIPTION_PROVIDERS` fl-ordni tal-katalgu stabbli u tagħżel l-ewwel
   mudell bil-kredenzjali attivi utli.
4. `callAudioTranscription()` jikkonverti audio base64/data-URI għal `file` multipart,
   jew tniżżel `audio_url` remota permezz tal-guard pubbliku biss bil-pinning DNS u limit ta' 25 MB. Imbagħad POSTs il-file u l-mudell magħżul għall-local `/v1/audio/transcriptions` self-loop, awtorizzat bil
   `resolveSelfLoopBearer()`. Ir-rotta ta' traskrizzjoni eżistenti twettaq normalment
   il-kontroll tal-kredenzjali, il-ħin ta' cooldown/limit ta' rata, u l-ippjanar tal-providur.
5. Kallijiet suċċessivi jissostitwixxu l-partijiet tagħhom b`[Audio N]: <transcript>`. Kallijiet
   joperaw b`Promise.allSettled`: falliment individwali jżomm dik il-parti tal-audio oriġinali (#4012 kuntratt). Jekk kull kall jonqos u l-mira tiġi ppruvata
   `supportsAudio === false`, il-partijiet jsiru
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 kuntratt). Għall
   mira mhux magħrufa (`null`), riżultat ta' falliment kollu jibqa' mhux imħassar. Mira ppruvata li hija biss test u li m'għandhiex kredenzjali STT utli tirċievi l-istess stub esplicitu mingħajr ma tissottometti kall.

Traskrizzjonijiet suċċessivi jużaw il-cache Modality Bridge LRU/TTL li huwa globali. Il
għan jikkombina r-referenza tal-audio, l-etikett tal-operazzjoni stabbli `audio-transcription`,
u l-mudell STT magħżul; fallimenti qatt ma jiġu kċaħda. Tentattivi ta' audio jħallu
l-kontijiet `bridged`, `cacheHits`, `failures`, u `lastUsedAt` aġġornati.
Risposti trasformati jġorru
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; talbiet mhux imħassra ma jirċievu segment Audio Bridge.

L-impostazzjonijiet tal-ħin huma DB-backed u Zod-validated:

| Key                           | Default | Range           |
| ----------------------------- | ------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —               |
| `modalityBridgeAudioModel`    | `""`    | Auto jew STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10            |

Il-kaxxa kondivi tibqa' kontrollata minn `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, u `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Tinterċetta l-partijiet tal-video ta' livell għoli fil-Chat Completions `messages` u
Responses API `input` qabel ma tiġi ċċelebrata mira mingħajr appoġġ nativ magħruf għall-video.
Il-formati appoġġati huma `input_video`, `video_url`, `video_source`, URLs HTTPS,
u `data:video/*;base64,...` data URIs. Isem ta' fajl sempliċi fit-test ma jiġix ikkunsidrat
bħala video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) għandha t-traversal tal-request, il
kontroll tal-kapaċità/polza, l-aggregazzjoni kull request, u l-payload tar-risposta.
Il-ħidma kull video — akkwist, il-kaxxa ta' riżultat sħiħ, li tiddeskrivi sekwenza ta' ritratti
(li tgħaqqad kwalunkwe traskrizzjoni tal-audio ddikjarata mill-caller), u metrikji/abort/cleanup
kull tentattiv — hija moħbija wara `processVideoPart` f'`videoBridgePipeline.ts`, imsejħa darba kull
parti tal-video ġewwa l-loop ta' `preCall`. Dak il-modulu jiddetermina wkoll il-limiti tal-port espliciti
`VideoMediaBrokerPort` (akkwist ta' bytes u estrazzjoni ta' ritratti campjati), `VideoAudioTranscriptionPort`
(tgħaqqad traskrizzjoni tal-audio ddikjarata mill-caller mal-kapturi campjati), u
`VideoDrilldownPort` (il-forma tal-ħażna raw tal-istorja). STT tal-produzzjoni u ritenzjoni ta' ritratti
huma komposti madwar il-port li jiddeskrivi permezz ta' `createVideoSttAdapter` u
`createVideoDrilldownAdapter`; l-aħħar tuża l-lifecycle ta' ħaġa opaka kondivi.

Il-passaġġ pubbliku `/v1` qatt ma jimporta jew jinvoka subprocess. Il-videos remoti
jinstabu taħt limit ta' 50 MiB; il-videos inline base64 għandhom limit ta' 36 MiB dekodifikati
kull video sabiex il-mudell/messages/framing envelope jistgħu jibqgħu ġewwa l-limitu ta' ammissjoni
tal-JSON pubbliku ta' 50 MiB. Il-lunghezza inline u l-estimi tad-daqs dekodifikati jiġu kkontrollati
qabel l-allokazzjoni. HTTPS huwa meħtieġ fuq l-ewwel URL remota u kull redirect, billi tuża
l-guard pubbliku biss eżistenti bil-pinning DNS. Il-bytes imbagħad jgħaddu mill-fruntiera interna eżatta
`POST /api/modality-bridge/video/extract`. Dak il-mogħdija huwa kemm `LOCAL_ONLY` u
`SPAWN_CAPABLE`, jaċċetta biss request awtentikat, trusted-loopback kull proċess, u qatt ma jaċċetta
URL, triq tal-fajls, eżekuttiv, jew lista ta' argumenti. Il-pipeline tal-ġisem tal-API u l-qarrej incrementali
tal-ġisem tal-handler jimplimentaw indipendentement limit ta' input broker ta' 50 MiB. Il-queue
bounded tagħha taħdem estrazzjoni waħda kull darba, tippermetti erba' xogħlijiet pendenti, u tikkappa
input pendenti għal 100 MiB.

Fil-broker, `ffprobe` jaqra fajl lokali privat; il-format fissi
allowlist jeskudi formati ta' playlist u manifest. Għal containers tal-familja MOV
permess, ir-referenzi ta' data MOV esterni jibqgħu disattivati b'mod predefinit, u l
kmand fissi ma jikkunsidrax lilhom. Bħala `ffprobe` u `ffmpeg` jużaw il
whitelist tal-protokoll `file` biss, thread waħda, arrays ta' argumenti fissi, mingħajr shell,
u eżekuttivi riżolti minn `PATH`. Il-flussi tal-kopertura tal-immaġni ma jkunux
kandidati li jistgħu jintlagħbu. Il-flussi kollha li jistgħu jintlagħbu għandhom jissodisfaw il-limiti,
u fluss predefinit esplicitu huwa ppreferut qabel il-fallback deterministiku tal-indice l-aktar baxx.
Il-videos huma limitati għal 600 sekondi, 8,192 pixels kull dimensjoni, u
33,554,432 pixels ta' sors. FFmpeg jikkampja ritratti JPEG ta' 1–16 fil-punt medju, jiskala 'l isfel
il-limitu twil għal massimu ta' 1,024 pixels mingħajr ma jiskala inputs iżgħar, u
qatt ma jirċievi URL. Il-kampjament huwa `uniform` b'mod predefinit. Il-politiki fakultattivi
`scene_aware` u `segment_aware` iwettqu pass addizzjonali fissi ta' FFmpeg fuq il-fluss lokali
diġà validat, jagħżlu timestamps tal-scene `showinfo` bounded, u jfallu deterministikament
għall-istess midpoints uniformi fuq falliment tad-detettur, timeout, output malformed, jew sett ta' kandidati vojt.
Il-mod segment-aware jalloka kampjamenti tal-punt medju proporzjonalment għall-intervals tal-scene validati;
evidenza segment-aware u l-imġiba tal-fallback huma dettaljati hawn taħt. Il-limitu 16-frame iebes huwa
applikat wara l-għażla f'kull politika. Meta request scene-aware għandha biss baġit ta' frame wieħed,
tuża l-punt medju uniformi tal-video sħiħ attiv jew tal-finestra tal-fokus u tirrapporta `policyEffective: uniform`: frame ta' scena waħda magħżula
ma tistax iżżomm kemm l-ends temporali. Caller jista' b'mod fakultattiv jipprovdi
finestra tal-fokus limitata (`start`/`end` sekondi); il-limiti huma kklampjati għall-perjodu tal-media,
finestri rversi jew mhux limitati jiġu miċħuda, u l-politiki kollha tal-kampjament jiġu implimentati biss
ġewwa l-interval normalizzat. Il-finestra li tirriżulta hija inkluża fil-metadati tal-kampjament u fil-prefiss
ta' deskrizzjoni mhux affidabbli sabiex mudelli downstream jistgħu jiddistingwu eżerċit fokussat mill-timelin sħiħ.

Il-fokus tal-kapturi semantiku huwa sett separati, esplicitu. Il-modalità ta' analisi predefinita `full`
tħares lejn il-prompt tal-frame eżistenti u qatt ma tgħaddi t-test tal-request lill-mudell tal-kapturi. Fil-modalità `focused`,
il-bridge jaqra biss it-test `text`/`input_text` mhux vojt l-aktar reċenti minn
l-istess kontenitur tal-Chat jew Responses, normalizza dan għal NFC, tikkollassa karattri ta' kontroll u
spazji, u tikkappa dan għal 500 punti ta' kodiċi Unicode. Riżultat vojt jerġa' lura għall-eżatt `full` prompt. Hint utli
jiġi serializzat bħala JSON f'blokka dedikata ta' kontext mhux affidabbli tal-utent u jista' biss
jippreferi dettalji osservabbli; ma jistax jaqbeż il-warning separat kontra li ssegwi istruzzjonijiet viżibbli
jew udjibbli fil-media. Il-fokus testwali qatt ma jinfirx `start`/`end` jew jibdel
il-kampjatur temporali.

#### FU-07 evidenza ta' segment strutturali

`segment_aware` jużza pass pre-analiżat wieħed limitat fuq il-fluss tal-video lokali li diġà ġie validat. Il-katina ta' filtri fissa l-ewwel tiskala sa massimu ta' 320 pixel wiesa', tidentifika bidliet fil-scena u intervalli maħmuġin, imbagħad tiġbor kampjuni f'1 frame kull sekonda għal blur, luma medja, u informazzjoni spazjali/temporali. Il-pass huwa limitat għal 600 kampjuni strutturali, thread wieħed FFmpeg/filter, l-istess protokoll u allowlists tal-kontenitur `file`-only, limit ta' 1 MiB għall-output tal-proċess, u sa massimu ta' 30 sekondi ġewwa l-abort/deadline kondivi tal-broker. Qatt ma jaċċetta komandi, filtri, paths, jew URLs mill-bidla.

Il-valuri strutturali huma evidenza ta' kampjuni deterministiċi, mhux fehim semantiku tal-video. Ma jinfirxux suġġetti, azzjonijiet, captions, diskors, jew intenzjoni tal-utent. Il-fruntieri tal-scena u tal-maħmuġ formano segmenti; il-kopertura tal-maħmuġ, blur, espożizzjoni, dettall spazjali, u bidla temporali jaffettwaw biss kif il-baġit eżistenti ta' 1–16 frame huwa allokat. Segment li huwa kompletament maħmuġ huwa limitat għal frame waħda, filwaqt li segmenti mhux maħmuġin jikkompetu għall-baġit li fadal. Meta l-fruntieri jinqasmu aktar minn frames, kopertura uniformi tal-linja ta' żmien tiġi mantenuta sabiex cuts bikrin rapidi ma jistgħux jaħbu segment twil li jsegwi. Il-fruntieri tal-scena ġewwa l-1-sekonda analisi ta' risoluzzjoni ta' fruntiera maħmuġa jiġu kkoalizzati.

Filtri nieqsa, evidenza malformed/vojt, żball tad-dettettur, jew il-ħin limitat tal-pre-analiżi jfallu miftuħ għall-politika ta' medda uniformi eżatta. Abort tal-caller jew deadline tal-broker ma jfallux miftuħ: jtemm il-subprocess li qiegħed fl-ajru, jipprevjeni l-estrazzjoni ta' frames aktar tard, u l-ġnien temporanju privat jiġi mneħħi f'`finally`.

`scripts/perf/video-bridge-fu07-eval.ts` ġġenera fixtures reali deterministiċi FFmpeg għall-ħlasijiet ta' caption post-dedup, allokazzjoni ta' baġit ta' moviment densi, evidenza ta' blur/espożizzjoni/SI-TI, cuts rapidi b'tejp twil, u falsi pożittivi gradwali. Tirreġistra l-ħin tal-ħajt tal-pre-analiżi u, fejn `/usr/bin/time` huwa disponibbli, CPU tat-tfal u l-RSS massimu. Il-kontrolli tal-kwalità tagħha huma orakli strutturali biss. Il-kwalità reali tal-mudell ta' caption tibqa' `HOLD` minħabba li din il-ħarġa m'għandhiex punt awtorizzat jew ġudikant maħmuġ. Il-ħlasijiet monetarji wkoll jibqgħu `HOLD` sakemm `--caption-cost-per-call-usd` ma jfornixxix stima pożittiva esplicita għal kull telefonata; il-kodiċi qatt ma jfabricaw l-ebda riżultat.

Kull frame huwa limitat għal 4 MiB, il-frames raw kollha flimkien għal 23 MiB, u r-risposta serializzata tal-broker għal 32 MiB. Direttorju temporanju privat jiġi mneħħi f'`finally`. OmniRoute ma jġibx FFmpeg u ma jaċċetta l-ebda path ta' eżekuttiv personalizzat. Qabel il-captioning, il-pont applikat pass ta' deduplication viżwali konservattiv: kull JPEG jitnaqqas għal buffer griż ta' 16×16 u jiġi mqabbel biss mal-aħħar frame miżmum. Għall-baġit ta' caption mitlub li jaqbeż frame waħda, l-estrazzjoni tipprovdi pool ta' kandidati limitat sa darbtejn dak il-baġit u qatt aktar minn 16 frames. Il-kappa mitluba tiġi applikata biss wara d-deduplication, bil-kandidati selettivi l-ewwel u finali maħżuna matul it-tnaqqis finali meta l-baġit ikun mill-inqas tnejn. Il-politika versioned `grayscale-16x16-mean-cells-v2` tuża l-akbar ta' mean luma delta u r-ratio ta' cells ta' thumbnail li l-delta normalizzat tagħhom huwa mill-inqas 0.05. Il-threshold ta' duplikati huwa l-kostanti 0.04, magħżula għal prevedibbiltà minflok esposta bħala sett ta' runtime. Dan is-sinjal sekondarju ta' kontra għolja jżomm bidliet żgħar fil-moviment u test visibbli li mqabbel biss b'mean jista' jaħbi. Żbalji ta' komparatur jew dekoder jfallu miftuħ u jżommu kopertura. Metadata tal-output tissepara l-kandidati estratti, frames użati b'suċċess, u duplikati viżwali miċħuda.

Parti tal-video marked esplicittament tista' titlob sheet ta' kuntatt timestamped. Il-pont jibni massimu ta' grid JPEG ta' 4-kolonni, 16-frame. Kull cella ta' 512-pixel tħaffef il-timestamp tas-sors tagħha f'band ta' kontra għolja fil-fond, filwaqt li l-istess timestamps jibqgħu fil-metadata testwali għall-assocjazzjoni u l-audit downstream. Il-JPEG komplut jibqa' limitat għal 32 MiB. Jekk `sharp` ma jistax id-dekoda jew jikkumpuni l-grid, il-pont jerġa' lura għall-frames JPEG individwali; abort tal-klijent xorta jippersisti permezz tal-operazzjoni tal-sheet.

L-evidenza tal-promozzjoni hija separata b'mod deliberat mill-mikrobenchmark tal-kompożizzjoni sintetika. `scripts/perf/video-bridge-contact-sheet-eval.ts` jiddeskrivi A/B harness b'schema-versioned għal mudelli tal-viżjoni kompatibbli ma' OpenAI reali. Jkejjel tokens rapportati mill-fornitur, latenza tal-ħajt end-to-end (inkluż il-kompożizzjoni tal-sheet), kont ta' telefonati tal-mudell, u retention ta' fatti definiti mill-manifest. Risposti raw tal-mudell ma jiġux miktuba fir-rapport; biss SHA-256 digests u matched fact IDs jiġu mħażna. Il-ħarġa ma tagħmel l-ebda telefonata tan-netwerk jew mudell imħallas sakemm `--execute-real` jiġi passat u `--model`, `OMNIROUTE_BASE_URL`, u `OMNIROUTE_API_KEY` jiġu kkonfigurati. Mingħajr dik il-run real esplicita, il-verdict li jista' jiġi maqsum mill-magna jibqa' `HOLD`; il-miżuri ta' payload/call-count sintetiku biss mhumiex evidenza ta' promozzjoni.

Is-separat `scripts/perf/video-bridge-promotion-eval.ts` jikkonsma osservazzjonijiet FU-07 jew FU-09. L-aċċettazzjoni tal-promozzjoni teħtieġ l-għaxar tipi ta' xenarji sintetiku flimkien ma' clip reali sanitizzat, mill-inqas tliet ripetizzjonijiet miżurati għal kull rwol u każ, l-għaxar metriċi ddikjarati, digests ta' media maħmuġa/prompt/fatt mistennija/settings, IDs ta' osservazzjoni uniċi u ordni A/B imħarsa. Ir-riċetta tal-eżekuzzjoni tgħaqqad id-digest tal-korp, SHA eżatta tal-kandidat u r-reviżjoni tal-mudell. Miżuri nieqsa jew invalidi jibqgħu `HOLD`, inklużi CPU aktar minn 30 s, peak RSS aktar minn 512 MiB jew pre-analiżi aktar minn 30 s. Dawn huma limiti ta' aċċettazzjoni tal-evidenza, mhux garanzija ġdida ta' enforcement ta' RSS ta' runtime.

FU-07 jeħtieġ mill-inqas 98% ta' żamma tal-kwalità u p95 latenza mhux aktar minn 1.2x
bażi, flimkien ma' jew 0.05 titjib assolut fil-median recall bil-kas bil-bilanċ
f'koll calls ta' captions ekwivalenti, jew mill-inqas 10% inqas calls ta' captions
post-dedup. FU-09 jeħtieġ mill-inqas 0.85 kwalità, 95% żamma, 20% tnaqqis fil-latenza
p95 u 10% tnaqqis fit-tokens. Telf ta' fatt kritiku, konformità tal-injezzjoni jew
nuqqas ta' użu jipprevjenu l-promozzjoni. Eżekuzzjoni waħda ma tistax tippromwovi xejn:
`--previous-report` jikkonferma żewġ eżekuzzjonijiet distinti, mhux sovrapposti, konsegwenti
eleggibbli tal-istess politika/reviżjoni tal-mudell/kandidata/korp. Esperiment ta' kampjuni ma jistax jikkonferma esperiment ta' contact-sheet.

Il-kolletturi għandhom jiskorjaw ir-risposti fil-memorja u jiffrankaw `responseDigest` flimkien
ma' metrics u osservazzjonijiet, qatt it-test tar-risposta. Il-konsumatur jaqra wkoll
osservazzjonijiet raw tal-istorja iżda qatt ma jkopja dak it-test fil-rapporti tiegħu. Eżatt
wieħed minn `responseDigest` jew `rawResponseText` huwa aċċettat għal kull osservazzjoni.
Il-lista ta' permessi bil-verżjoni tibqa' vojt bi `hold` immutabbli bħala default. Entrata
eleggibbli teħtieġ ir-referenza tal-evidenza tagħha, politika, reviżjoni tal-mudell, SHA
eżatta tal-kandidata, digest tal-manifest u żewġ IDs ta' run distinti; kontesti
konflittwali jiġu miċħuda. Dawn il-metadati huma kuntratt ta' awditjar, mhux prova li
fajl referenzjat fih miżuri ġenwini. Iċċekkja l-actual receipts qabel ma żżid
kwalunkwe entrata. L-endpoint tal-istat tal-ġestjoni u l-dashboard tal-Vidjo juru
pront konservattiv. Alias tal-mudell konfigurata waħedha ma tistax tistabbilixxi
r-reviżjoni tagħha jew il-SHA tal-kandidata li qed taħdem, għalhekk id-dashboard attwali
jirrapporta `HOLD` minflok jerġa' juża l-eleggibilità minn kontest ta' eżekuzzjoni ieħor.
Selezjoni esperimentali esplicita tibqa' separata mill-promozzjoni; l-ebda default
ma jinbidel awtomatikament.

Il-caller jistgħu jattaccja array opzjonali `transcript.cues` għal parti tal-vidjo
appoġġjata meta diġà għandhom test allinjat. Kull cue għandu jġorr `text`, intervall
finito `start`/`end` ġewwa d-durata mħarrġa, u `source` bil-lista ta' permessi
(`client`, `embedded`, jew `audio-bridge`); `confidence` huwa default għal `1` u
għandu jibqa' bejn `0` u `1`. Cues eżatti duplikati jiġu kkollettati.
OmniRoute qatt ma jibda t-traskrizzjoni minn dawn il-metadati: cues validati jiġu
kopjati fil-riżultat deskritt bil-sors, il-fiduċja, u l-intervall, u jiġu
rappreżentati bħala osservazzjonijiet mhux fiduċjużi flimkien mal-caption tal-qafas. Test
invalidu, barra mill-ambitu, jew mingħajr provenjenza jiġi miċħud minflok ma jitħallat
fil-fluss tal-caption. Iż-żewġ kanali tal-korp tal-request tal-traskrizzjoni
normalizzaw il-provenjenza mogħtija għal `client`, inkluż `embedded` jew `audio-bridge`
labels asseriti minnha nnifisha. Biss adapter li jappartjeni lis-server jista' jassigna
dawk il-labels fiduċjużi permezz tal-argument `trustedSource` li huwa kodifikat biss;
qasam tal-JSON tal-request ma jistax jasal għal dak l-argument. It-test tal-traskrizzjoni
jibqa' kontenut derivat minn media mhux fiduċjuż, irrispettivament mill-provenjenza
tagħha, u qatt ma għandu jiddetermina l-awtorizzazzjoni.

Caller avvanzat jista' jipprovdi track `audioTranscript` għall-istess vidjo;
jiġi trattat bħala test ipprovdut mill-klijent, mhux prova ta' traskrizzjoni tas-server.
Il-fużjoni tal-seam tmexxi osservazzjonijiet viżwali u awdjovi taħt
deadline waħda u sinjal ta' abort, ordnihom fuq timeline komuni, tikkollassa
duplikati eżatti, u tirrapporta riżultat parzjali meta naħa waħda biss tirnexxi.
`audioTranscript` invalidu jiddgħajjef għal dak ir-riżultat parzjali — id-deskrizzjoni
viżwali tiġi mantenuta u l-branċ awdjo jirreġistra kodiċi ta' falliment sanitizzat —
minflok ma jiflaħ il-vidjo kollu. Għall-availability ta' kull branċ, il-flag parzjali,
u l-kodiċi ta' falliment sanitizzat jiġu preservati fil-riżultat deskritt, fil-metadati
tal-guardrail (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), fil-metadati tal-cache tar-riżultat, u fil-kontijiet
tal-fużjoni tal-bidge. Il-path predefinit tal-Vidjo Bridge ma jinvokax
speech-to-text jew jitniżżel kopja oħra ta' media; mingħajr dak it-track esplicitu,
jibqa' biss vidjo.

**Żamma tal-traskrizzjoni (#12150 P1).** Dan japplika awtomatikament kull meta
l-Vidjo Bridge (innifsu opt-in) juri cue ta' traskrizzjoni — m'hemm l-ebda flag
separat ta' żamma. Meta request juri kwalunkwe cue ta' traskrizzjoni (traskrizzjoni
dikkjarata mill-caller jew `audioTranscript` fuzjonat), il-guardrail jimmarka
`videoBridgeObserved` u jipproduċi shadow redatt tal-deskrizzjoni tal-vidjo —
rendering identiku fejn il-korp ta' kull cue ta' test ħieles jiġi sostitwit b'`[redacted-video-transcript]`, mibni billi ssostitwixxi l-qasam strutturat tal-cue qabel ma
l-istringa tiġi assembjata (qatt billi tparsej il-test imflaħ, għalhekk l-ebda
kontenut tal-cue — avversarjali jew ordinarju, inkluż korpi li jikkontinwaw `]`
bħall-`[inaudible]`/`[music]` — ma jistax jgħix). Il-korp tal-log tal-call
persistenti jissostitwixxi kull parti ta' test derivat mill-vidjo għal dak
l-shadow redatt, imwaqqaf mill-ugwaljanza tal-kontenut; l-ankra `fullText` tiġi
riletta mill-payload tal-guardrail pre-call li tlestiet, sabiex il-match
għadha tirnexxi wara guardrails tal-katina aktar tard (il-PII u
credential maskers, prioretajiet 10/95) jrewritejaw it-test tad-deskrizzjoni fil-post u
wara l-prompt tas-sistema/handoff/injezzjoni tal-memorja jiffurmaw il-messaġġ
array. Il-korp mibgħut 'il fuq lill-mudell ma jinbidilx. Request osservat ukoll ma
popola l-ebda Memorja durabbli (it-tneħħija derivata kemm mill-request kif ukoll
mir-risposta tiġi skipjata), sabiex ir-risposta tal-mudell ma tistax tirrepeti
test ta' traskrizzjoni fil-Memorja.

**Qasam tal-vidjo raw (#12430).** Meta l-bidge jkun attivat u l-appoġġ tal-vidjo
nattiv ikun mhux magħruf jew assenti, il-qasam definit `transcript`/`audioTranscript`
jattiva wkoll `videoBridgeObserved`, anke wara falliment tad-deskrizzjoni jew limitu
`maxVideos`. `null` u strings vojt jikkontaw; qasmijiet assenti u metadati mhux
vidjo ma jagħmlux. Kopji miżmuma jreddu dawn il-qasms jew jomittu r-request, u
caches/Memorja jiġu bypassed.

F'dawn il-passi ta' fallback, il-cues validi tal-caller jsiru partijiet appoġġati `text`/`input_text` minflok fields mhux standard tal-fornitur. It-tracks ipprovduti mit-talba jibqgħu osservazzjonijiet `client` mhux fiduċjużi, b'avviż esplicitu li l-video ma ġiex deskritt u l-timestamps ma ġewx verifikati kontra l-media. Il-budgets eżistenti ta' 256-cue/64-KiB totali u għal kull cue japplikaw madwar it-tnejn tracks flimkien; il-timestamps għandhom jaqgħu fil-limitu ta' 600 sekonda tal-broker u fi kwalunkwe window ta' fokus ipprovduta. It-tracks invalidi jiġu skartati, mhux mibgħuta bħala test arbitrarju; sibling validi jistgħu xorta jintużaw sakemm il-budget kombinat tagħhom ma jkunx eċċedut. Fields null/vojt ma jżidu l-ebda test. L-ebda fetch tal-media jew traskrizzjoni ma jiżdied minn dan il-fallback. Il-fields ta' estensjoni tat-traskrizzjoni jiġu meħuda mill-kari tal-video tal-fallback u l-oġġetti `video_url`/`source` tiegħu. Il-lista ta' wire ta' OpenAI tibqa' stretta; carriers tal-video mhux magħrufa jibqgħu disponibbli u targets magħrufa biss ta' test iżommu markers sikuri. Shadows ta' redazzjoni strutturati jipproteġu t-test traskrizzjoni miżjud, filwaqt li t-talba oriġinali tal-caller tibqa' bla tibdil. Targets appoġġati nativament u bridges imwaqqfa jżommu l-imġiba ta' bypass eżistenti tagħhom.

Kopji addizzjonali miżmuma jużaw l-istess sinjal tal-osservazzjoni tat-talba. Is-snapshot tal-talba tal-klijent qabel il-guardrail, it-talba pendenti fil-memorja, u l-log tat-talba miċħuda kmieni jissostitwixxu strutturalment il-fields tat-traskrizzjoni fil-partijiet tal-video; il-prompts ta' string sintetizzati mill-istadji tal-pipeline u l-ħlas tal-kuntest jiġu redatti fil-sink tal-ġisem tal-talba persistenti. Il-marker persistenti `video_content_removed` jagħmel li l-kontinwazzjoni ta' `previous_response_id` tonqos magħluqa minflok tirrikostitwixxi test li ġie skartat intenzjonalment. Jekk talba osservata titlef is-shadow ta' redazzjoni tagħha qabel il-logging, jew anke jekk wieħed minn diversi shadows tal-video jonqos milli jaqbel wara mutazzjonijiet tat-talba aktar tard, il-ġisem tal-talba miżmum jiġi ommesso kompletament minflok ma jżomm traskrizzjoni parzjalment redatta.

Għat-talba osservata, risposta tal-mudell tista' tkwota kwalunkwe parti tat-traskrizzjoni mingħajr il-fruntiera strutturata tal-cue. Il-`responseBody` tal-log tal-kont persistenti għalhekk jiġi sostitwit minn marker ta' ommissjoni; l-artifact dettaljat tal-pipeline (li jista' jinkludi ġisem ta' upstream/client u chunks tal-stream) ma jiġix miżmum. Il-kaxxi semantika, ta' idempotency, u ta' replay tal-ħsieb jgħaddu minn qari u kitba għal dik it-talba. It-talba tal-fornitur u r-risposta viżibbli tal-klijent jibqgħu bla tibdil. Il-bytes ta' keepalive kmieni jiġu drenati mill-buffer temporanju meta l-artifact dettaljat jiġi ommesso. Il-warning ta' EventStream malformed ta' Kiro rapporta biss il-kont ta' bytes tal-payload, qatt ma l-kontenut tiegħu jew l-iżbalji raw tal-parser JSON. Dan ma jiddikjarax li kull diognostika mhux relatata tal-fornitur/plugin ġiet auditata; il-ħarġa aktar wiesgħa ta' sink miżmum hija segwita f'#11658.

Il-lifecycle intern `/api/modality-bridge/video/drilldown` huwa substrat ta' cache separat, loopback/token-authenticated. Kull operazzjoni teħtieġ ukoll ID prinċipali opak kanoniku. Qabel ma tiġi attivata talba ta' produzzjoni, għandha tiġi derivata dik l-ID mill-tenant awtorizzat u qatt ma għandha tgħaddi valur magħżul mill-klijent. Il-keys tal-cache jgħaqqdu dak il-prinċipali ma' IDs kanoniċi ta' sessjoni u referenza tal-video, jżommu biss il-keys derivati SHA-256 tagħhom, u jiskopru kemm il-qari kif ukoll it-tneħħija għall-istess prinċipali. Il-cache jżomm sa 16 framijiet JPEG derivati għal kull entrata, jiskadihom wara għaxar minuti, u jappoġġja qari jew tneħħija esplicita ta' sessjoni limitata `start`/`end`.

Kull prinċipali huwa limitat għal 16 entrati u 64 MiB ta' data JPEG kanonika. Dawn il-limiti huma indipendenti mill-limitu globali ta' 64-entry/256 MiB: il-pressjoni tal-quota tal-prinċipali tneħħi biss l-entrati l-inqas riċenti użati ta' dak il-prinċipali qabel ma tiġi kkunsidrata l-evażjoni globali LRU. L-entrati skaduti jiġu sweeps mill-kontabilità tal-prinċipali u globali fuq l-attività tal-cache, filwaqt li l-annullament u l-falliment tal-validazzjoni ma jikkontribwixxux għal sostituzzjoni parzjali.

Il-cache jirrifjuta Base64 mhux kanoniku, padding eċċessiv, media mhux JPEG, JPEGs malformed jew imqassma, u JPEGs li jipproduċu warning waqt dekodifikazzjoni limitata ta' full-image `sharp`. Huwa jerġa' jikkodifika kull immaġni aċċettata bħala JPEG kanoniku, jiġi derivat l-wisa' u l-għoli mill-bytes dekodifikati minflok fiduċja fil-fields tal-caller, u jiskarta kwalunkwe bytes polyglot li jmiss minflok ma jżommhom. Biss il-buffer kompressat kanoniku limitat jiġi miżmum għall-both quotas. Il-limitu tal-wire JSON jinkludi l-overhead Base64 għall-limitu ta' 32 MiB ta' input dekodifikat. Kull derivazzjoni maħżuna tirreġistra l-format/resoluzzjoni JPEG validata tagħha, il-politika ta' campjuni, il-verżjoni ta' derivazzjoni, il-ħin tal-ħolqien, il-hash tal-kontenut imħaddem mis-server, u l-hash tar-referenza tal-ġenituri flimkien mal-hash tal-kontenut tal-ġenituri tal-caller fiduċjuż. L-annullament jiġi kkontrollat bejn il-fażi asinkrona ta' dekodifikazzjoni/hash qabel il-kuntratt tal-cache atomiku.

Il-produttur tal-produzzjoni jerġa' juża framijiet tal-broker diġà derivati biss wara analisi viżiva suċċessiva, mingħajr tniżżil/estrazzjoni ta' video sekondarju. Huwa jeħtieġ operatur `modalityBridgeVideoDrilldownEnabled=true`, `drilldown: true` strett għal kull parti, u ID ta' rekord ta' API-key awtorizzata. Il-valuri tal-prinċipali/session iddikkjarati mill-klijent qatt ma jistabbilixxu l-proprjetà. Mingħajr it-tlieta kundizzjonijiet, ma jikkodifikax, ma jżidx jew ma jżommx framijiet addizzjonali. Il-falliment ta' retention jżomm ir-risposta viżiva utli. It-talbiet konsenswali jgħaddu mill-cache tar-riżultat tal-video kollu sabiex ir-riżultati miżmuma qatt ma jerġgħu jreplay handles.

Suċċessivi risposti JSON u SSE juru sa massimu ta' erba' handles opaki fil-header limitat `x-omniroute-video-drilldown`. Oriġini awtorizzati tal-browser jistgħu jaqraw dak il-header mingħajr ma jespandu l-politika tal-origini CORS. Handles ġodda jużaw `v1.<32-byte random base64url token>`, u r-reġistru jżomm biss il-hashes SHA-256 tagħhom. Il-qarrej/parser tal-header jaċċetta wkoll tokens legacy 64-hex. Il-konsumatur pubbliku awtorizzat huwa `GET /api/v1/video-bridge/drilldown?handle=...`, imwaqqaf indipendentement minn `modalityBridgeVideoDrilldownRemoteEnabled=true`. Persisted false esplicita tirrevoka l-aċċess anke meta l-fallback legacy `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` huwa attivat. Il-ħażna tal-produzzjoni għandha l-fallback legacy analogu `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED`. Iż-żewġ fallback default huma off.

Il-konsumatur jiksbu l-proprjetà mill-key awtorizzat, applikat il-politika tal-key, u jirritorna l-istess 404 għal handles mhux magħrufa, skaduti u ta' key oħra. Jaċċetta `variant=preview|standard|detail` (dimensjoni massima JPEG 320/640/1280, qatt ma tiġi aġġustata 'l fuq), `limit=1..8` (jew l-alias legacy `frames`, qatt kemm), `page` bbażata fuq zero, u sekondi fokali opzjonali `start`/`end`. Keys ta' query duplicati u windows fokali inversi jiġu miċħuda. Kull varjant imħallas għandu hash tal-kontenut attwali tiegħu u metadata tal-riżoluzzjoni attwali, marbuta mal-fonte mżomm. Il-varjanti jiġu derivati waqt il-qari minflok ikunu maħżuna bħala kopji addizzjonali mżomma. Ir-risposta JSON, inkluż Base64/envelope, hija limitata għal 32 MiB; paġna eċċessiva tirritorna 413 u l-klijent irid jitlob inqas frames. Il-qari jiċċekkja l-annullament madwar kull aġġustament u jerġa' jiċċekkja l-validità tal-handle qabel ma jirritorna. `DELETE` mill-proprjetar huwa idempotent; tħassir jew skadenza TTL jħalli l-fonte mżomma u l-kontabilità tal-użu.

Il-maħżen kondiviż huwa lokali għall-proċess: handles jispiċċaw meta jerġa' jibda u mhumiex trasferibbli bejn proċessi indipendenti ta' OmniRoute. Il-istatistika tal-ġestjoni turi l-politika effettiva ta' ħażna/remot u l-entrati/bytes mżomma aggregati biss, qatt mhux media, referenzi, IDs prinċipali jew handles. Il-panew tal-impostazzjonijiet tal-Video juri dawk il-valuri u jista' jżomm iż-żewġ switches ta' konsens. Din id-dokumentazzjoni tal-implimentazzjoni mhix evidenza ta' implimentazzjoni live jew promozzjoni; l-aċċettazzjoni tal-mudell reali tiġi mmonitorjata separatament.

Il-frames huma kappa b'mod sekondarju bil-mudell tal-Video kkonfigurati. Override Voide vojt jirtira l-impostazzjoni tal-Vision; jekk it-tnejn huma vojt, il-router awtomatiku tal-Vision jagħżel il-mudell effettiv li jista' jara. Kappa suċċessivi jissostitwixxu l-parti oriġinali b'prefix stabbli `[Video description:` li wkoll jindika t-test bħala osservazzjoni derivata minn media mhux fiduċjuża u jgħid lill-mudelli downstream biex ma jsegwux l-istruzzjonijiet li jinsabu fil-media. Il-keys tal-cache tal-kappa tal-frame jinkludu l-byte JPEG, il-prompt, it-timestamp, u l-mudell effettiv; biss kappa suċċessivi jiġu maħżuna. L-entrati tal-cache iżommu l-mudell tal-produttur suċċessiv attwali, inkluż mudell ta' fallback; il-pont jirrapporta `mixed` meta frames differenti ġew prodotti minn mudelli differenti. Hit tal-cache jerġa' juża dik l-identità tal-produttur minflok ma jerġa' jlabelha bħala l-pjan ta' routing mitlub. Il-cache tar-riżultat tal-video kollu huwa kkodifikat fuq kull input li jinbidel l-output — prompt, mudell effettiv, politika ta' campjatura, kont ta' frames, modalità ta' analiżi semantika, il-fingerprint SHA-256 tal-hint fokali normalizzat, window fokali, `transcript`, `audioTranscript`, u l-flag tal-kontatt-sheet — għalhekk ibdil ta' kwalunkwe waħda minn dawk id-dimensjonijiet huwa miss tal-cache, qatt riutilizzazzjoni stale. Il-verżjoni tal-politika ta' dedup viżwali, il-threshold, u l-kont ta' frames kandidati limitati huma wkoll espliciti fil-key tal-cache tar-riżultat u metadata; għalhekk, bidla fil-politika ma tistax tirriutilizza deskrizzjoni stale tal-video kollu. Il-metadata tal-cache tar-riżultat v4 iżomm il-modalità u l-fingerprint, qatt l-attività raw tal-utent. Il-metadata tal-guardrail tirrapporta kemm il-modalità tal-analiżi mitluba u dik effettiva; modalità `focused` mitluba mingħajr test utent utli tiġi rrappurtata bħala effettivament `full`.

Il-guardrail jeħodha kull parti tal-video appoġġata iżda jiddeskrivi mhux aktar minn `modalityBridgeVideoMaxVideos`. Għal mira li ġiet ippruvata li għandha `supportsVideo === false`, il-videos li fallu u dawk li jaqbżu l-limitu jsiru markers ta' test sikur espliciti sabiex l-ebda video raw ma jibqa'. Meta l-kapaċità mhix magħrufa, dawk il-parti żżommu l-portatur tal-video tagħhom; kull fallback transcript issegwi l-konverżjoni ta' test limitata hawn fuq. Targets b`supportsVideo === true` jgħaddu l-pont. Is-sinjal tal-abort tal-request tal-klijent jippopga permezz ta' download, broker queue, subprocesses, u sejħiet tal-kappa; aborts waqfu bejn il-videos u qatt ma jfallu miftuħ għal media raw.

L-impostazzjonijiet tal-runtime huma DB-backed u Zod-validated:

| Key                                 | Default     | Range / behavior                                                                                                |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Optional runtime, opt-in                                                                                        |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` iżomm kappa ġenerika; `focused` juża kontest limitat, mhux fiduċjuż tal-aħħar utent                      |
| `modalityBridgeVideoModel`          | `""`        | Irtira l-mudell tal-Vision Bridge                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                            |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, jew proporzjonali `segment_aware`; falliment tad-dettettur jerġa' lura għal `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                             |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                  |

Legacy persistenti valuri ta' timeout tal-Video li huma 'l fuq minn 120 sekonda huma kklampjati għall-ħin limitu tal-broker; skrizzjonijiet ġodda li jaqgħu 'l fuq minn dak il-limitu jiġu miċħuda. `GET /api/modality-bridge/video/runtime` teħtieġ lokalità ta' loopback stampata f'fiducja qabel l-autentikazzjoni jew il-probazzjoni tal-ħin, imbagħad teħtieġ awtorizzazzjoni tal-ġestjoni. Tirritorna biss verżjonijiet ta' FFmpeg/ffprobe `disponibbli`, sanizzati, u raġuni fissa meta l-ħin ma jkunx disponibbli. L-endpoint ta' estrazzjoni interna mhuwiex API ta' upload pubbliku: saturazzjoni tal-queue tirritorna `503` plus `Retry-After`, disconnessione tal-caller tirritorna `499`, u l-ħin limitu tal-broker fissi jirritorna `504`. Risposti konvertiti jżidu `video->text;model=<visionModel>;parts=<videos>` mal-header ċentrali `x-omniroute-modality-bridge` mingħajr ma jneħħu s-segumenti tal-Viżjoni jew tal-Audio.

### PII Masker (`piiMasker.ts`)

Jaħdem fuq **it-tnejn** il-fażi.

- **`preCall`** jikkopja l-payload, jimxi `system`, `messages`, `input`, u `prompt` (inklużi oġġetti ta' string sempliċi), u japplika `processPII()` (minn `@/shared/utils/inputSanitizer`) għal kampjuni ta' string `content`/`text`. Meta `PII_REDACTION_ENABLED=true`, PII identifikat jiġi redatt fil-payload li joħroġ. Dan huwa indipendenti minn `INPUT_SANITIZER_MODE` (li jikkontrolla biss il-politika ta' injettar tal-prompt). Meta l-redazzjoni tkun off, il-kontijiet ta' detzzjoni tal-calls jiġu rreġistrati mingħajr ma jrewritew il-kontenut.
- **`postCall`** jikkopja profondament ir-risposta, jaħdem `sanitizePIIResponse()` plus il-masker tal-forma tal-Responses-API (`maskResponsesOutput` — jkopri `output_text` u `output[].content[].text`). Jekk ikun hemm xi redazzjoni, ir-risposta immodifikata tissostitwixxi l-originali.

Il-gwardja qatt ma tħarrek; hija biss annota (`meta.detections`, `meta.redacted`) jew tirrewriteja.

### Prompt Injection (`promptInjection.ts`)

Id-dettetturi ta' strutturi avversarjali fil-kontenut mogħti mill-utent u tikkonforma mal-politika kkonfigurata. Il-kondotta hija mmexxija minn varjabbli tal-ambjent u għażliet tal-kostruzzjoni:

| Setting         | Env var                                                                                               | Default | Effett                                                                                                                                                                                                                    |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled         | `INPUT_SANITIZER_ENABLED`                                                                             | `true`  | Meta `false`, il-gwardja tħares.                                                                                                                                                                                          |
| Mode            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`  | Politika ta' injettar: `block`, `warn`, jew `log`. (`redact` hija aċċettata għall-kompatibbiltà lura iżda ma tneħħix it-test ta' injettar; talba għal redazzjoni ta' PII hija kkontrollata minn `PII_REDACTION_ENABLED`.) |
| Block threshold | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Severità minima meħtieġa biex tiġi blokkata. Medju huwa osservazzjoni biss fil-default.                                                                                                                                   |

**Preċedenza tal-Mod** (`getMode`): caller `options.mode` →
`INJECTION_GUARD_MODE` **DB feature-flag override** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Għalhekk, override tal-dashboard jirbaħ fuq il-varjabbli tal-ambjent, sabiex l-UI tal-Feature Flags tikkontrolla l-gwardja li qed taħdem live (mingħajr reġistrazzjoni). Il-qari tal-DB huwa fail-safe: jekk ikun hemm żball, il-gwardja terġa' lura għall-kondotta bbażata fuq l-ambjent, u meta m'hemm l-ebda override imwaqqaf il-kondotta tkun identika għal riżoluzzjoni bbażata fuq l-ambjent biss.

Sorsi ta' detzzjoni:

1. `sanitizeRequest()` minn `@/shared/utils/inputSanitizer` (sett ta' detetturi maħsuba biex jintużaw f'postijiet oħra fil-pipeline).
2. `DEFAULT_GUARD_PATTERNS` mibnija (bħalissa `system_override_inline` u `markdown_system_block`, it-tnejn ta' severità `high`).
3. `customPatterns` opzjonali mgħoddija permezz ta' għażliet tal-kostruzzjoni (strings, regex, jew `{ name, pattern, severity }` records).

Meta `mode === "block"` **u** mill-inqas detzzjoni waħda tilħaq il-limitu ta' severità, `preCall` jirritorna `{ block: true, message: "Request rejected: suspicious content detected" }`. F'modi `warn`/`log` il-gwardja tikkunsidra iżda tippermetti l-call. Il-ħallieq kondiviż `evaluatePromptInjection()` huwa wkoll esportat għal callers li għandhom bżonn evalwaw il-prompts mingħajr ma jgħaddu mill-reġistru.

**Scan bound (v3.8.20):** id-dettettur jinspecta biss l-**ewwel 16 KB** ta' test tal-prompt magħqud — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) f`src/shared/utils/inputSanitizer.ts`. Bħala `detectInjection()` u `evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` qabel ma jsir il-loop tal-pattern. Id-direttivi ta' injettar jinsabu qrib il-quċċata ta' input, għalhekk dan jillimita l-CPU/GC regex fuq payloads ta' multi-hundred-KB mingħajr ma jnaqqas id-dettzzjoni (cf. #3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Jaħdem fuq **it-tnejn** il-fażi, l-aħħar fil-katina predefinita (priorità `95`). Jiredatti patterns magħrufa tajjeb ta' API-key / secret-token mill-payload li joħroġ (kontenut tal-messaġġ, argumenti tal-calls tal-għodda, riżultati tal-għodda) **u** ir-risposta tal-fornitur, sabiex credential imqiegħda f'prompt (jew imqiegħda lura minn riżultat tal-għodda) ma tiġix mħallsa lill-fornitur ta' fuq jew lura lill-klijent.

- **Biss opt-in**, l-istess konvenzjoni bħal PII redaction (Regola Ħarxa #20-adjacent):
  diżabilitat sakemm `settings.credentialRedactionEnabled === true` **jew**
  `CREDENTIAL_REDACTION_ENABLED=true`. Meta tkun off, il-guardrail huwa no-op —
  qatt ma jblokka u qatt ma jrewriteja.
- `redactCredentials()` imxi l-payload/response tree sħiħa (`walkValue()`,
  prototip-pollution-safe, cycle-safe permezz ta `WeakSet`) u jissostitwixxi l-matches ma
  placeholder `[REDACTED:<type>]`, cloning biss il-fergħat li fil-fatt
  biddlu.
- `CREDENTIAL_PATTERNS` tinkludi l-keys tal-fornituri ta' LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens ta' VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), keys ta' ħlas (Stripe, Square), keys tal-cloud
  (AWS access key, Twilio, SendGrid, Mailgun), keys privati / JWTs,
  strings ta' konnessjoni li jġorru credentials (`mongodb://user:pass@...`, eċċ.), u
  pattern ġeneriku ta' `Authorization`/`x-api-key`/`api-key`/`apikey`
  header-value. Keys ta' forma ta' header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) huma redatti strutturalment (valur biss, prefiss tal-schema bħal
  `Bearer `/`Basic ` preservat) minflok permezz tat-test regex ġeneriku.
- Il-guardrail qatt ma jblokka; huwa biss jrewriteja (`modifiedPayload` /
  `modifiedResponse`) u jannota (`meta.credentialsRedacted`, `meta.count`).

Regression guard: `tests/unit/credential-masker-guardrail.test.ts`.

## Kuntratt Bażiku (`base.ts`)

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
  block?: boolean; // true jwaqqaf il-katina immedjatament
  message?: string; // jintwera meta jsir imblukkar
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // jiġi rritornat minn preCall biex jerġa' jikteb it-talba
  modifiedResponse?: TValue; // jiġi rritornat minn postCall biex jerġa' jikteb ir-rispons
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

Guardrail jindika "l-ebda bidla" billi jirritorna jew `void`, `{}`, jew
`{ block: false }`. Ir-ritorn ta' `modifiedPayload`/`modifiedResponse` jissostitwixxi
l-valur li jgħaddi mill-katina għall-guardrails sussegwenti.
`signal?: AbortSignal` jittrasmetti ċ-ċiklu tal-ħajja ta' min jagħmel is-sejħa lill-guardrails. L-abort ta' talba huwa l-eċċezzjoni intenzjonata ta' fail-open: il-pontijiet tal-midja jwaqqfu x-xogħol u jagħmlu t-tindif mingħajr ma jirrestawraw il-midja mhux ipproċessata lejn mira li hu magħruf li ma tappoġġjahiex.

## Reġistru (`registry.ts`)

Is-singleton `guardrailRegistry` jesponi:

- `register(guardrail)` — iżid guardrail (jew jissostitwih skont l-isem normalizzat) u
  jerġa' jordna skont `priority` axxendenti.
- `clear()` / `list()` — għodod ta' għajnuna amministrattivi.
- `runPreCallHooks(payload, context)` — jgħaddi mill-guardrails attivi, jgħaddi l-
  payload minn `modifiedPayload`, u jieqaf mal-ewwel `block: true`.
- `runPostCallHooks(response, context)` — l-istess fluss fuq in-naħa tar-rispons.
- `resetGuardrailsForTests({ registerDefaults })` — ineħħi l-istat u, b'mod fakultattiv,
  jerġa' jirreġistra l-valuri predefiniti għal iżolament nadif tat-testijiet.

Iż-żewġ runners jirritornaw `{ blocked, payload|response, results, guardrail?, message? }`
fejn `results` huwa array ta' rekords `GuardrailExecutionResult` li jinkludu
l-fields `blocked`, `skipped`, `modified`, `error`, u `meta` għal kull guardrail,
utli għat-traċċar.

### Diżattivazzjoni tal-Guardrails Għal Kull Talba

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` jiġbor lista
mingħajr duplikati ta' ismijiet ta' guardrails li għandhom jinqabżu għat-talba
attwali. Is-sorsi (kollha fakultattivi, kollha magħquda) huma:

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` fil-body tat-talba (fl-ogħla livell)
- `metadata.disabledGuardrails` fil-body tat-talba
- Il-header `x-omniroute-disabled-guardrails` (jew dak legat
  `x-disabled-guardrails`)

Il-valuri jistgħu jkunu arrays ta' strings jew string separata b'virgoli; l-ismijiet jiġu
normalizzati għal kebab-case b'ittri żgħar (`pii_masker` → `pii-masker`). Ir-riżultat
jgħaddi permezz ta' `context.disabledGuardrails` lir-reġistru, li jaqbeż
il-guardrails korrispondenti (`skipped: true` f'`results`).

## Ordni tal-Eżekuzzjoni

Għal kull talba li tgħaddi minn `src/sse/handlers/chat.ts` u
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` jibni l-lista ta’ elementi li għandhom jinqabżu mill-API key, mill-body,
   u mill-headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` iħaddem il-guardrails f’ordni axxendenti
   ta’ prijorità:
   - Il-guardrails diżattivati jiġu rreġistrati bħala `skipped`.
   - Il-`preCall` ta’ kull guardrail jista’ jerġa’ jikteb il-payload permezz ta’ `modifiedPayload`.
   - L-ewwel `block: true` iwaqqaf il-katina immedjatament u l-handler jirritorna
     risposta ta’ rifjut mill-guardrail.
3. Il-payload (li potenzjalment ikun inkiteb mill-ġdid) jgħaddi għar-routing ikkombinat u
   għad-dispatch upstream.
4. Wara li tiġi assemblata r-risposta, `guardrailRegistry.runPostCallHooks(...)`
   iħaddem l-istess katina fuq ir-risposta. `block: true` hawnhekk iwarrab ir-risposta
   upstream.

Guardrails li joħolqu eċċezzjoni jiġu rreġistrati b’`error: <message>` u jiddaħħlu fil-log permezz ta’
`logger.warn`, iżda l-katina tkompli — bid-disinn, f’każ ta’ falliment tippermetti li l-proċess ikompli.

## Konfigurazzjoni

Varjabbli tal-ambjent moqrija mill-guardrails integrati:

| Varjabbli                             | Użata minn                | Effett                                                                                                                        |
| ------------------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Issettja għal `false` biex tiddiżattiva kompletament id-detezzjoni.                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Politika tal-injezzjoni: `warn`, `block`, jew `log`. Il-valur legacy `redact` ma jerġax jikteb it-test tal-injezzjoni.        |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Modalità għall-guard tal-injezzjoni; huwa wkoll feature flag fid-DB li **jissostitwixxi** l-varjabbli tal-ambjent (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Is-severità minima li `MODE=block` jirrifjuta: `high` (default), `medium`, jew `low`.                                         |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Alias legacy għal `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                          |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Meta jkun `true`, il-PII tat-talba jiġi redatt (indipendentement mill-modalità tal-injezzjoni).                               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Jikkontrolla l-imġiba tal-masker fuq in-naħa tar-risposta.                                                                    |

Il-guardrails tal-Modality Bridge jaqraw il-konfigurazzjoni waqt l-eżekuzzjoni mill-ħażna tas-settings
ibbażata fuq id-DB (`getSettings()`), mhux mill-varjabbli tal-ambjent. Il-keys primarji ta’ Vision huma
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, u
`modalityBridgeCacheMaxEntries`. Il-keys legacy
`visionBridge*` jiġu aċċettati biss bħala l-fallback dokumentat għall-qari għal ċiklu wieħed;
il-kitbiet mid-dashboard jużaw il-keys primarji. Il-valuri default u r-resolver tal-fallback
jinsabu f’`src/shared/constants/modalityBridgeDefaults.ts`, filwaqt li l-kostanti legacy
jinżammu f’`src/shared/constants/visionBridgeDefaults.ts`.

Audio juża `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, u `modalityBridgeAudioMaxClips`, flimkien mas-settings kondiviżi
`modalityBridgeCache*`. Audio m’għandux fallback għal keys legacy minħabba li dawn
il-keys ġew introdotti mal-iskema tal-Modality Bridge.

Video juża `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, u
`modalityBridgeVideoTimeout`, flimkien mas-settings kondiviżi `modalityBridgeCache*`.
Huwa diżattivat b’mod default minħabba li FFmpeg/ffprobe huma dipendenzi operazzjonali
fakultattivi u l-ħolqien ta’ captions għall-frames iżid il-latenza u l-ispiża tal-mudell.

## Guardrails Personalizzati

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

Passi:

1. Oħloq `src/lib/guardrails/myGuardrail.ts` li jestendi `BaseGuardrail`.
2. Implimenta `preCall` u/jew `postCall`.
3. Jew irreġistrah waqt l-importazzjoni (żidu minn `registerDefaultGuardrails`) jew
   sejjaħ `guardrailRegistry.register(...)` waqt l-eżekuzzjoni — ir-reġistru jissostitwixxi
   kwalunkwe guardrail preċedenti bl-istess isem normalizzat.
4. Żid testijiet taħt `tests/unit/` (eżempji eżistenti:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Ittestjar

Uża `resetGuardrailsForTests()` bejn it-testijiet biex tibda minn stat magħruf.
Għaddi `{ registerDefaults: false }` biex tibda b’reġistru vojt u
rreġistra biss il-guardrails li qed jiġu ttestjati. Vision Bridge jaċċetta l-injezzjoni
tad-dipendenzi (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge jesponi
l-punti ta’ separazzjoni ekwivalenti għas-settings, il-kapaċitajiet, l-għażla tal-mudell STT, il-kontrolli
tal-kredenzjali, u t-traskrizzjoni. Għalhekk, it-testijiet jistgħu jeżerċitaw iż-żewġ flussi mingħajr aċċess
għad-DB jew għan-network.

## Ara Wkoll

- `src/lib/guardrails/` — implimentazzjoni
- `src/shared/utils/inputSanitizer.ts` — detettur kondiviż li jħaddem
  il-protezzjoni kontra l-injezzjoni fil-prompt u l-maskra tal-PII
- `src/shared/constants/visionBridgeDefaults.ts` — valuri predefiniti ta’ Vision Bridge u
  lista ta’ mudelli b’bridge obbligatorju
- `src/shared/constants/modalityBridgeDefaults.ts` — valuri predefiniti kondiviżi waqt l-eżekuzzjoni għal Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — saff ortogonali (circuit breaker, perjodi ta’ stennija)
- `docs/reference/ENVIRONMENT.md` — referenza sħiħa tal-varjabbli tal-ambjent

## Kopertura tar-rotot tal-protezzjoni kontra l-injezzjoni u red-team (Fażi 8 · Blokka D)

Il-protezzjoni kontra l-injezzjoni (`createInjectionGuard` / `withInjectionGuard`) tkopri r-rotot kollha
li jaċċettaw prompts tal-utenti. Tirrispetta `INJECTION_GUARD_MODE` (il-valur predefinit `warn` = tirreġistra biss;
`block` = tirritorna HTTP 400 `SECURITY_001`).

| Tip              | Rotot                                                                                                                                                | Modalità predefinita |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| Test (eżistenti) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                 |
| Ġenerattiv       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                 |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                 |

L-estrazzjoni tat-test (`extractMessageContents`) tkopri `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (kull lejl, `nightly-llm-security.yml`):** promptfoo jivvalida li kull rotta timblokka
l-korpus OWASP-LLM meta `INJECTION_GUARD_MODE=block`; garak iħaddem probes (jinqabeż mingħajr secret).
`moderations` huwa inkluż għall-konsistenza — l-operaturi fil-modalità ta’ mblukkar jistgħu jeżentawh permezz ta’
`resolveDisabledGuardrails`.

Il-workflow ta’ kull lejl (`.github/workflows/nightly-llm-security.yml`, cron + attivazzjoni
manwali) għandu żewġ jobs:

- **`promptfoo-guard` (blokkanti)** — iħaddem `promptfoo eval -c promptfooconfig.yaml`
  b’`INJECTION_GUARD_MODE=block`. Kull każ avversarju (eż. "ignore all
  previous instructions…", jailbreaks tal-istil DAN) jivverifika li r-risposta ġġorr
  `error.code === "SECURITY_001"`, jiġifieri li l-protezzjoni fil-fatt irrifjutat it-talba.
- **`garak` (konsultattiv)** — iħaddem garak `--probes promptinject,dan,leakreplay`
  kontra istanza lokali ta’ OmniRoute (`http://localhost:20128/v1`). Huwa kkundizzjonat minn
  secret tal-fornitur (`PROMPTFOO_PROVIDER_KEY`); jinqabeż mingħajr problemi u għandu s-suffiss
  `|| true`, għalhekk jirrapporta mingħajr ma jfalli s-CI.

Il-kopertura tal-helper tal-protezzjoni (`createInjectionGuard` / `withInjectionGuard`)
testendi għal kull rotta `/v1` li ġġorr prompt; it-test tal-prompt jittieħed minn
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` minn
`extractMessageContents()` f’`src/shared/utils/inputSanitizer.ts`.
