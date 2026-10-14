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

Il-reġistru jħaddem awtomatikament sitt guardrails fl-ordni ta' prijorità fuq l-importazzjoni
(ara `registry.ts` → `registerDefaultGuardrails()`):

| Prijorità | Isem                | Fazi(e)        | File                  |
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
il-kall ta' fuq. Dan jippermetti li fornituri biss bil-test jittrattaw
payloads multimodali b'mod trasparenti.

Fluss:

1. Iskipja jekk il-mudell immirat diġà jappoġġa viżjoni (sakemm ma jidhirx fil-lista
   tal-bridge imġiegħel `isVisionBridgeForcedModel`).
2. Eħles il-parti tar-ritratti permezz ta' `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), li delega lill-**detettur ta' media
   unifikata** `detectMediaParts()` f`open-sse/utils/mediaParts.ts` — is-sors uniku ta' verità
   maqsuma mal-filtru ta' kompatibbiltà tal-kombinazzjoni.
   L-eħles huwa permess għal partijiet ta' livell għoli tal-formi
   `replaceImageParts` jistgħu jerġgħu jinqasmu (il-kuntratt estratt↔sostituzzjoni): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, u Responses API `input_image`. Hits imnestinati u
   forom biss indikaturi huma materjal għall-filtru tal-kombinazzjoni u qatt ma jiġu estratti.
   Iskipja jekk ma jsibx.
3. Irriżolvi l-konfigurazzjoni tal-ħin reali permezz ta' `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): il-ġodda `modalityBridge*`
   keys tal-impostazzjonijiet jirbħu; l-impostazzjonijiet ta' `visionBridge*` tal-passat jibqgħu
   **fallback ta' ċiklu wieħed** (window ta' rollback). Iskipja qabel kwalunkwe traversa tal-media meta l-bridge huwa diżattivat.
4. Il-selettur tal-modu (`modalityBridgeVisionMode`, ara t-tabella hawn taħt) jiddeċiedi
   jekk jirruttaw jew jiddeskrivi. Rirruta tirritorna `modifiedPayload` b'`model`
   biss mibdula, flimkien ma' meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Triq id-deskritt: iċċappa r-ritratti sa `maxImages`, kompona l-promt konxju tal-compito,
   kunsulta l-cache tad-deskrizzjoni, iċċempel il-mudell viżwali **f'parallelo**
   (`Promise.allSettled`), u injettaw `[Image N]: <description>` partijiet tat-test fil-post tagħhom. Deskrizzjoni fallita tagħti `null` u l-parti oriġinali tar-ritratt hija
   **preservata** (#4012) — eċċezzjoni fuq it-triq tad-deskrizzjoni tal-kombinazzjoni meta kull
   deskritt fallit, fejn upstream mhux viżwali kkonfermat jinkiseb
   `(unavailable — no vision-capable provider connected)` stub minflok (#8430).
6. Irreġistra `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selettur tal-modu (`modalityBridgeVisionMode`)

| Modu       | Default | Imġieba                                                                                                                                                                                                                                                                                          |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔       | Heuristika tal-passat, mhux imħallsa (#6640/#7204): mudelli mhux kombinati/`auto/` jirruttaw għall-aħjar mudell viżwali sakemm il-mudell oriġinali diġà jkollu kredenzjali utli (imbagħad jiddeskrivi); l-għanijiet tal-kombinazzjoni dejjem jiddeskrivu.                                        |
| `describe` |         | Dejjem jiddeskrivi — il-blokk tar-rirruta huwa skipjat kompletament; il-mudell magħżul mill-utent dejjem iwieġeb.                                                                                                                                                                                |
| `reroute`  |         | Rirruta bil-forza: il-gwardja tal-mudell bil-kredenzjali tiġi bypassed. Il-gwardja tal-kredenzjali tar-rirruta-**target** għadha tapplika — meta ma jkunx hemm mudell viżwali utli, it-talba tiġi passata għal deskritt sabiex ir-ritratti raw qatt ma jaslu għal backend bil-test biss (#8430). |

Modi mġiegħla jissakkru **qabel** ma l-heuristika awtomatika tiġi esegwita; l-imġieba `auto`
hija identika fil-byte għall-guardrail pre-PR-1.

#### Ambitu tal-api-key (`visionBridgeKeyScope.ts`)

Meta l-api key tal-caller tikkontrolla `allowedConnections`, pools ta' kwota
(`allowedQuotas`) jew mudelli (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), il-bridge jpickja biss mudelli ta'
rirruta u deskritt li l-key tista' tuża, fuq konnessjonijiet li l-key tista' tuża. Il-kall tad-deskrizzjoni imbagħad dejjem jgħaddi permezz tal-OmniRoute self-loop bil
`x-omniroute-self-loop-key-id` header, sabiex it-talba tal-chat li tirċievi
tiflaħ il-politika ta' konnessjoni u mudell ta' dik il-key mill-ġdid. `enforceApiKeyPolicy()`
jħaddan dak il-header biss flimkien mal-bearer tal-self-loop, sabiex jista' biss
jifrex l-aċċess, u id li ma tirriżolvix tiġi miċħuda.

Jekk l-ebda mudell viżwali ma jkun permess għall-key, it-triq tad-deskrizzjoni tħalli
u t-talba tgħaddi mingħajr ma tinbidel, l-istess imġieba ta' fail-open bħal guardrail diżattivat (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Talbiet mingħajr key, u keys mingħajr dawn ir-restrizzjonijiet, jaġixxu eżattament kif
qabel.

#### Promt ta' deskritt konxju tal-compito (`modalityBridgeVisionTaskAware`)

Default **veru**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) jżid
it-test tal **-aħħar messaġġ tal-utent** (truncated għal 500 chars) mal-bażi
ta' l-promt ta' deskrizzjoni, jikkontrolla d-deskrizzjoni lejn dak li l-utent
verament staqsa (codex-vision-proxy pattern) u jitlob lill-mudell tal-viżjoni
jitranskrivi t-test viżibbli. Bil-flag off — jew mingħajr test tal-utent —
il-promt bażiku jintuża bla tibdil.

Il-request tal-deskrizzjoni tal-self-loop tagħha stess OpenAI-kompatibbli
(`callVisionModelSingle()` fil `visionBridgeHelpers.ts`) dejjem jitlob
`image_url.detail: "high"` — mingħajr kundizzjonijiet, għal kull
caller/provider, mhux imwaqqaf fuq xi sinjal tal-klijent. Il-kampjuni ta'
detalji baxxi jnaqqsu l-eżattezza tal-OCR għall-kompitu ta' traskrizzjoni
tat-test li din il-promt titlob, għalhekk il-calling tal-deskrizzjoni
dejn jitlob dejjem għad-dettalji għoljin irrispettivament minn x'livell ta'
detalji l-request inizjali inbound użat. Dan jaffettwa biss il-ġisem tal-request
intern tal-deskrizzjoni; ma jibdilx kif OmniRoute jforwardja l-proprju
`image_url.detail` tal-caller fuq il-request prinċipali — dak il-default
jiġi applikat separatament, u biss għal klijenti OpenCode identifikati, fil
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Il-branċ tal-format wire ta' Anthropic tal-deskrizzjoni tal-self-loop m'għandux
qasam `detail` u mhu affettwat minn xi default.

#### Deskrizzjoni tal-kapaċità ta' output (`modalityBridgeVisionMaxChars`)

| Key                            | Default | Range             |
| ------------------------------ | ------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`     | `0` jew 100–50000 |

`0` (default) jfisser **l-ebda kapaċità** — id-deskrizzjoni li tiġi
ritornata minn `callVisionModel()` tiġi mgħoddija bla tibdil, tippreserva
l-imġiba eżistenti. Kull valur fil-100–50000 range jnaqqas id-deskrizzjoni
b'suffiċċju `…` qabel ma tiġi mqiegħda lura bħala `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` fil `src/lib/guardrails/visionBridge.ts`).
Irrid tella' dan għal kompiti ta' OCR b'dettalji għoljin fejn il-mudell
ta' wara jeħtieġ it-traskrizzjoni sħiħa; naqqasha biex tikkontrolla l-użu
ta' token fuq mudelli ta' viżjoni li jitkellmu ħafna. Il-qasam tal-dashboard
jgħix fuq il-panel Avvanzata tal-tab ta' Viżjoni
(`modality-bridge-max-chars` fil `ModalityBridgeVisionTab.tsx`) u jikkontrolla
kull valur bejn 1 u 99 sa l-100 floor waqt li jħalli `0` esplicitu
mingħajr tibdil — `0` huwa valur validu ta' Zod f'idejh stess
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), mhux
sempliċement il-default "unset".

#### Cache tal-deskrizzjoni (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL fil-memorja għall-output tal-deskrizzjoni, maqsuma
proċess-wide. Key = `sha256(imageRef + composedPrompt + configuredBridgeModel)`
bil-framing ta' length-prefix (l-ebda kollisioni tal-qasam tal-limiti).
Il-komponent tal-mudell huwa l-mudell **konfigurat** tal-pont, mhux il-mudell
li verament wieġeb — `callVisionModel` jista' jaqa' lura internament, u
keying kull tentattiv jiffranka l-cache. Deskrizzjonijiet li fallu qatt
ma jiġu kaxxati. Settings:

| Key                             | Default | Range   |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `veru`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Normalizzazzjoni tal-immaġni remota (self-loop describe/base64 fetch)

Meta l-pont jfetchja immaġni **remota** stess — il-calling tal-deskrizzjoni
Anthropic u l-konverżjoni base64 tal-format wire claude
(`ensureBase64ImagesForClaudeWire`), it-tnejn permezz ta'
`fetchRemoteImageAsDataUri()` fil `visionBridgeHelpers.ts` — id-URI tad-data
riżultanti tiġi mgħoddija permezz ta' `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) qabel ma tiġi embeddjata fil-request
tal-mudell tal-viżjoni. Immaġini kbar jiġu downscaled għal **2048px long edge**
(matching il-kapaċità ta' resize li OpenAI/Anthropic diġà applikaw server-side),
li tnaqqas il-byte ta' upload/latency mingħajr ma tbiddel dak li l-mudell
tal-viżjoni jara. Il-resizing juża `sharp`, imlaħqu permezz ta' import
dinamiku: fuq pjattaforma fejn il-binary nativ tiegħu jonqos milli jinstalla,
`normalizeDataUri()` **qatt ma jniedi** — jaqa' lura għal passthrough tal-byte
oriġinali, sabiex il-calling/deskrizzjoni tal-konverżjoni base64 dejjem
tkompli taħdem. Byte mhux-immaġni (fetch li ma rritornax immaġni dekodifikabbli)
jiġu wkoll mgħoddija bla tibdil. Din il-normalizzazzjoni hija
skoperta għall-immaġini li l-pont jfetchja għall-calling tiegħu stess — qatt
ma tiġi applikata għall-payload raw tal-caller, konsistenti mal-prinċipju
ta' mutazzjoni opt-in biss (Hard Rule #20).

#### Skema tal-Settings + migrazzjoni

Il-ġodda `modalityBridge*` keys huma validati minn Zod fil `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, it-trio `modalityBridgeCache*`, u l-grupp
`modalityBridgeAudio*` użat mill-Audio Bridge. Il-migrazzjoni
`141_modality_bridge_settings.sql` tikkopja l-valuri eżistenti ta' legacy
`visionBridge*` għall-keys ġodda li jmatchjaw (idempotent, qatt ma
joverwrite valur `modalityBridge*` stabbilit mill-operatur); il-keys
legacy jibqgħu aċċettati bħala fallback ta' qari għal ċiklu ta' rilaxx wieħed.

#### Header ta' Trasparenza + stats

Risposti trasformati mid-deskrizzjoni jġorru
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(mibnija minn `buildModalityBridgeHeader()` fil `modalityBridge/bridgeStats.ts`,
stampata minn `withModalityBridgeHeader()` fil `src/sse/handlers/chatHelpers.ts`).
Requests rerouted ma jiksbu **l-ebda** header — il-payload kien
bla tibdil u l-bidla tal-mudell diġà hija viżibbli fil-qasam `model`
tal-ġisem tar-risposta.

`GET /api/modality-bridge/stats` (awtorizzazzjoni tal-ġestjoni, l-istess livell bħal
`GET /api/settings`) jirritorna l-kontijiet per-modality fil-memorja
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` għal `vision`, `audio`, u
`video`. `averageLatencyMs` juża `latencySamples`, mhux il-provi kollha, bħala
l-denominatur; operazzjoni mingħajr ħin ma toħloqx kampjun ta' zero millisecondi.
`bridged` jibqa' l-alias kompatibbli mal-ġejjieni għall-konverżjonijiet
suċċessivi; tentattivi falluti ma jżidu l-valur tiegħu.
Il-kontijiet jerġgħu jitwaqqfu meta l-proċess jerġa' jibda skont id-disinn
(telemetrija, mhux kontabilità).

#### Konfigurazzjoni tal-dashboard

Il-paġna dedikata tal-dashboard hija
`/dashboard/settings/modality-bridge`. Il-tab `Vision`, `Audio`,
u `Video` li jistgħu jiġu aċċessati permezz tal-URL jżommu l-parametri tal-kwestjonarju waqt li jinbidlu l-valur `tab`.
Il-tab Vision juri l-attivazzjoni, il-modalità, l-għażla tal-mudell (inkluż il-default awtomatiku),
il-prompts li jikkunsidraw il-kompitu, il-limiti avvanzati ta' timeout/immaġni/length/deskrizzjoni/cache,
il-kontijiet tal-ħin tal-eżekuzzjoni, u talba protetta għall-kampjun. Il-tab Audio huwa wkoll attiv: juri
l-attivazzjoni, għażla ta' mudell STT biss bil-Auto, limiti ta' timeout/max-clip, kontijiet tal-audio,
u test tal-kampjun `input_audio`. Il-tab Video huwa funzjonali: jirrapporta
l-istat tal-eżekuzzjoni FFmpeg/ffprobe — wieħed minn erba' stati UI espliciti (`unknown` waqt
li l-probe tkun fil-vjaġġ jew ma setgħetx titlesta, `restricted` fuq host dashboard mhux loopback fejn il-probe
jiġi skippjat mill-klijent, `unavailable` ladarba ġie probat u kkonfermat li jonqos, jew `available`
bil-verżjonijiet FFmpeg/ffprobe) — jżomm
il-limiti ta' enable/model/frame/video/timeout, filtra l-għażla tal-mudell għal mudelli kapaċi ta' viżjoni,
u juri kontijiet tal-video.

Il-karta preċedenti tal-Vision Bridge taħt l-impostazzjonijiet AI hija link ta' kompatibbiltà għall
paġna ġdida; ma tistax ikollha kopja sekondarja tal-formola. Il-Provduri tal-Media wkoll
jilinkjaw l-immaġni għal-test u l-kliem għal-test flussijiet għall-tabs korrespondenti tal-Modality
Bridge mingħajr ma jneħħu l-playground eżistenti tal-kliem għal-test.

**Bypass ta' aċċess għall-self-loop:** meta l-kont tal-deskrizzjoni jgħaddi permezz tal-self-loop ta' OmniRoute
stess `/v1` (mudell ta' provdiment mhux standard), il-sub-kont jibgħat
`x-omniroute-admission-bypass: internal` u huwa awtorizzat bil-kredenzjali tal-self-loop riżolti — il-lokal
`sk_omniroute` sentinel fil-modalità lokali, jew il-kredenzjali konfigurati mill-operatur `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env key (#1350) sabiex
il-implimentazzjonijiet `REQUIRE_API_KEY=true` jistgħu xorta jsalvaw il-kont tal-deskrizzjoni. Il-bypass
jiġi onorat biss għal dawk il-kredenzjali eżatti, sabiex il-klijenti esterni ma jistgħux jużaw il-header biex jaqbżu l-aċċess.

Il-defaults storċi jgħixu f`src/shared/constants/visionBridgeDefaults.ts`; il
l-impostazzjonijiet ġodda/task-aware/cache u l-resolver tal-impostazzjonijiet jgħixu f
`src/shared/constants/modalityBridgeDefaults.ts`. Il-guardrail juri
opzjoni ta' kostrutturi `deps` sabiex it-testijiet jistgħu jinjetta foloz `getSettings` u
implimentazzjonijiet `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Jinterċetta talbiet ta' chat li jġorru l-audio qabel ma jaslu għal mira li mhix
magħrufa li taċċetta l-input tal-audio. Qatt ma jerġa' jindirizza t-talba tal-chat: partijiet tal-audio
jittieħdu permezz tal-punt ta' OpenAI kompatibbli eżistenti u l-mudell tal-chat magħżul ikompli bil-kontijiet tat-test.

Fluss:

1. Irriżolvi `supportsAudio` permezz ta' `getResolvedModelCapabilities()`. Metadata tal-provident
   reġistrata esplicita tirbaħ, imbagħad metadata statika tal-mudell, imbagħad `modalities_input` sincronizzati. Lista ta' input dikjarata mingħajr `audio` hija `false`; ebda
   evidenza ta' kapaċità tibqa' `null`. Bħala `false` u `null` jattivaw il-bridge konservattiv, filwaqt li `true` jaqbżuha.
2. Irriżolvi l-impostazzjonijiet `modalityBridgeAudio*` u estratt partijiet ta' audio ta' livell għoli li jistgħu jiġu spliced minn kull messaġġ permezz tal-`detectMediaParts()`
   detector. Il-formati tal-wajer appoġġjati huma OpenAI `input_audio`, `audio_url`, u
   `source.media_type: "audio/*"`. L-audio imnested jiġi identifikat għall-instradament iżda mhux
   imneħħi mill-passaġġ ta' splice. Il-ħidma hija limitata minn `modalityBridgeAudioMaxClips`;
   partijiet aktar tard jibqgħu mhux imħassra.
3. Iħaddan `provider/model` konfigurati, jew ħalli `selectAudioBridgeModel()` timxi
   `AUDIO_TRANSCRIPTION_PROVIDERS` fl-ordni tal-katalgu stabbli u tagħżel l-ewwel
   mudell bil-kredenzjali attivi utli.
4. `callAudioTranscription()` jikkonverti l-audio base64/data-URI għal `file` multipart,
   jew jitniżżel `audio_url` remota permezz tal-guard pubbliku biss bil-pinning DNS u limit ta' 25 MB. Imbagħad POSTs il-file u l-mudell magħżul għall-lokal `/v1/audio/transcriptions` self-loop, awtorizzat bil
   `resolveSelfLoopBearer()`. Il-mogħdija tal-eżekuzzjoni eżistenti tagħmel l-iskoperta normali tal-kredenzjali, il-ħidma ta' cooldown/rate-limit, u l-instradament tal-provident.
5. Talbiet suċċessivi jissostitwixxu l-partijiet tagħhom b`[Audio N]: <transcript>`. Talbiet
   jiġbdu bil `Promise.allSettled`: falliment individwali jżomm dik il-parti tal-audio oriġinali (#4012 kuntratt). Jekk kull talba tonqos u l-mira tiġi ppruvata
   `supportsAudio === false`, il-partijiet jsiru
   `[Audio N]: (unavailable — l-ebda STT provider konness)` (#8430 kuntratt). Għall-mira mhux magħrufa (`null`), riżultat ta' falliment kollu jibqa' mhux imħassar. Mira provata li hija biss test mingħajr kredenzjali STT utli tirċievi l-istess stub esplicitu mingħajr ma tagħmel talba tan-netwerk.

Transkrizzjonijiet suċċessivi jużaw il-cache Modality Bridge LRU/TTL li huwa globali. Il
ċavetta tikkombina r-referenza tal-audio, l-etikett tal-operazzjoni stabbli `audio-transcription`, u l-mudell STT magħżul; fallimenti qatt ma jiġu kċaħħda. Il-tentattivi tal-audio j aggiornaw
il-kontijiet `bridged`, `cacheHits`, `failures`, u `lastUsedAt`.
Risposti trasformati jġorru
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; talbiet mhux imħassra ma jirċievu segment tal-Audio Bridge.

L-impostazzjonijiet tal-ħin huma DB-backed u Zod-validated:

| Key                           | Default | Range           |
| ----------------------------- | ------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —               |
| `modalityBridgeAudioModel`    | `""`    | Auto jew STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10            |

Il-cache kondivi jibqa' kkontrollat minn `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, u `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Jinterċetta l-parti tal-video ta' livell għoli fil-Chat Completions `messages` u
Responses API `input` qabel ma tiġi kkonfermata mira mingħajr appoġġ nativ magħruf għall-video.
Il-formi appoġġati huma `input_video`, `video_url`, `video_source`, URLs HTTPS,
u `data:video/*;base64,...` data URIs. Isem ta' fajl sempliċi fit-test ma jiġix ikkunsidrat
bħala video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) għandha t-traversal tal-request, il
kontroll tal-kapaċità/policy, l-aggregazzjoni kull request, u l-payload tar-risposta.
Il-ħidma kull video — akkwist, il-cache tal-riżultat kollu, li jiddeskrivi sequenza ta' frame
(li tgħaqqad kwalunkwe traskrizzjoni tal-audio dikjarata mill-caller), u metrikji/abort/cleanup
kull tentattiv — huma moħbija wara `processVideoPart` f'
`videoBridgePipeline.ts`, imsejħa darba għal kull parti tal-video ġewwa l-loop ta' `preCall`.
Dak il-modulu jiddetermina wkoll il-limiti tal-port espliciti `VideoMediaBrokerPort`
(akkwist ta' bytes u estrazzjoni ta' frames campjati), `VideoAudioTranscriptionPort`
(tgħaqqad traskrizzjoni tal-audio dikjarata mill-caller mal-kapturi campjati), u
`VideoDrilldownPort` (il-forma tal-ħażna raw tal-istorja). STT tal-produzzjoni u r-retentjoni tal-frame
huma komposti madwar il-port li jiddeskrivi permezz ta' `createVideoSttAdapter` u
`createVideoDrilldownAdapter`; l-aħħar tuża l-lifecycle tal-handles opaki kondivi.

Il-passaġġ pubbliku `/v1` qatt ma jimporta jew jinvoka subprocess. Videos remoti
jinstabu taħt limit ta' 50 MiB; videos inline base64 għandhom limit konservattiv ta' 36 MiB
deċodifikati għal kull video sabiex il-mudell/messages/framing envelope
jista' jibqa' ġewwa l-limitu ta' aċċettazzjoni tal-request JSON pubbliku ta' 50 MiB. Il-lunghezza inline
u l-estimi tad-daqs deċodifikat jiġu kontrollati qabel l-allokazzjoni. HTTPS huwa
meħtieġ fuq l-ewwel URL remota u kull redirect, billi tuża l-guard pubbliku biss
eżistenti bil-pinning DNS. Il-bytes imbagħad jaqsmu l-fruntiera interna eżatta
`POST /api/modality-bridge/video/extract`. Dak it-triq huwa kemm
`LOCAL_ONLY` u `SPAWN_CAPABLE`, jaċċetta biss request awtorizzata, trusted-loopback għal kull proċess,
u qatt ma jaċċetta URL, triq tal-fajls, eżekutabbli,
jew lista ta' argumenti. Il-pipeline tal-ġisem tal-API u l-qarrej incrementali tal-ġisem
tal-handler jimplimentaw indipendentement limit ta' input broker ta' 50 MiB. Il-queue limitata tagħha
tħaddem estrazzjoni waħda kull darba, tippermetti erba' xogħlijiet pendenti, u tikkappa l-input pendenti għal
100 MiB.

Fil-broker, `ffprobe` jaqra fajl lokali privat; il-format
allowlist fissa teskludi playlist u formati tal-manifest. Għal containers tal-familja MOV
permess, referenzi esterni tal-data MOV jibqgħu disabilitati b'mod predefinit, u l
komanda fissa ma tgħaqqadx magħhom. Bħala `ffprobe` u `ffmpeg` jużaw il
whitelist tal-protokoll `file` biss, thread waħda, arrays ta' argumenti fissi, mingħajr shell,
u eżekutabbli riżolti minn `PATH`. Il-flussi tal-kopertura tal-immaġni ma jkunux
kandidati li jistgħu jintlagħbu. Il-flussi kollha li jistgħu jintlagħbu għandhom jissodisfaw il-limiti, u
flus ta' default espliciti huma ppreferuti qabel il-fall-back deterministiku tal-indice l-aktar baxx.
Il-videos huma limitati għal 600 sekondi, 8,192 pixels kull dimensjoni, u
33,554,432 pixels ta' sors. FFmpeg jikkampja frames JPEG ta' 1–16 fil-punt medju, jiskala 'l isfel
il-lunghezza twila għal massimu ta' 1,024 pixels mingħajr ma jiskala inputs iżgħar, u
qatt ma jirċievi URL. Il-kampjazzjoni hija `uniform` b'mod predefinit. Il-politiki fakultattivi
`scene_aware` u `segment_aware` iwettqu pass addizzjonali fissi ta' FFmpeg fuq il-fluss lokali
diġà validat, jagħżlu timestamps tal-scene limitati `showinfo`, u jfallu lura deterministiku
għal l-istess midpoints uniformi f'każ ta' falliment tal-detector, timeout, output malformed, jew sett ta' kandidati vojt. Il-modalità segment-aware talloca kampjuni ta' midpoints proporzjonalment għall-intervals tal-scene validati; evidenza segment-aware u l-imġiba tal-fall-back huma
detallati hawn taħt. Il-limitu 16-frame iebes huwa
applikat wara l-għażla f'kull politika. Meta request scene-aware għandha biss baġit ta' frame wieħed,
tuża l-midpoint uniform tal-video sħiħ attiv jew tal-finestra ta' fokus u tirrapporta `policyEffective: uniform`: frame ta' scena waħda magħżula ma tistax tippreserva kemm l-ends temporali. Caller jista' b'mod fakultattiv jipprovdi
finestra ta' fokus limitata (`start`/`end` sekondi); il-limiti huma kklampjati għall-perjodu tal-media, il-finestri inversi jew mhux limitati jiġu miċħuda, u l-politiki kollha tal-kampjazzjoni jsiru biss ġewwa l-interval normalizzat. Il-finestra li tirriżulta
hija inkluża fil-metadati tal-kampjazzjoni u fil-prefiss tad-deskrizzjoni mhux fiduċjarju sabiex il-mudelli downstream jistgħu jiddistingwu eżerċit fokussat mill-timelin sħiħ.

Il-fokus tal-kapturi semantiku huwa sett separati, esplicitu. Il-modalità ta' analisi predefinita `full`
tippreserva l-prompt tal-frame eżistenti u qatt ma tgħaddi t-test tal-request lill-mudell tal-kapturi. Fil-modalità `focused`, il-bridge jaqra biss l-aħħar
`text`/`input_text` mhux vojt miktub mill-utent mill-istess container ta' Chat jew Responses,
normalizzat għal NFC, jikkollassa karattri ta' kontroll u spazji, u jillimita għal 500 punti ta' kodiċi Unicode. Riżultat vojt jerġa' lura għall-eżatt `full` prompt. Hint utli huwa serializzat bħala JSON f'blokk dedikat
ta' kontext mhux fiduċjarju tal-utent u jista' biss jippreferi dettalji osservabbli; ma jistax joverwritja l-avviż separat kontra li jsegwi istruzzjonijiet viżibbli
jew udjibbli fil-media. Il-fokus testwali qatt ma jinfirx `start`/`end` jew jibdel
il-sampler temporali.

#### FU-07 evidenza ta' segment strutturali

`segment_aware` jużza pass pre-analiż limitat fuq il-fluss tal-video lokali li diġà ġie validat. Il-katina ta' filtri fissa l-ewwel tiskala sa massimu ta' 320 pixel wiesgħa, tidentifika bidliet fil-scena u intervalli maħsula, imbagħad tiġbor campjuni f'1 frame kull sekonda għal blur, luma medja, u informazzjoni spazjali/temporali. Il-pass huwa limitat għal 600 kampjuni strutturali, thread wieħed ta' FFmpeg/filter, l-istess protokoll u allowlists tal-kontenitur `file` biss, limit ta' 1 MiB għall-output tal-proċess, u massimu ta' 30 sekonda ġewwa l-abort/deadline kondivi tal-broker. Qatt ma jaċċetta komandi, filtri, paths, jew URLs mill-request.

Il-valuri strutturali huma evidenza ta' kampjuni deterministiċi, mhux fehim semantiku tal-video. Ma jinfirxux suġġetti, azzjonijiet, didascaliji, diskors, jew intenzjoni tal-utent. Il-boundaries tal-scena u tal-freeze jiffurmaw segments; il-kopertura tal-freeze, blur, espożizzjoni, dettall spazjali, u bidla temporali jaffettwaw biss kif il-baġit eżistenti ta' 1–16 frame huwa allokat. Segment li huwa kompletament maħsil huwa limitat għal frame waħda, filwaqt li s-segments mhux maħsula jikkonpetu għall-baġit li fadal. Meta l-boundaries jinqasmu aktar minn frames, kopertura uniformi tal-linja ta' żmien tiġi mantenuta sabiex cuts rapidi bikrija ma jistgħux jaħbu segment twil li jsegwi. Il-boundaries tal-scena ġewwa l-1-sekonda analisi ta' risoluzzjoni ta' freeze huma koalizzati.

Filtri nieqsa, evidenza malformed/vojt, żball tad-dettettur, jew il-ħin limitat tal-pre-analiżi jfallu miftuħ għall-politika ta' mid-point uniformi eżatta. Abort tal-caller jew deadline tal-broker ma jfallux miftuħ: jtemmu s-subprocess li huwa fil-fluss, jipprevjenu l-estrazzjoni ta' frames aktar tard, u l-ġnien temporanju privat jiġi mneħħi f'`finally`.

`scripts/perf/video-bridge-fu07-eval.ts` ġġenera fixtures reali deterministiċi ta' FFmpeg għall-ħlasijiet ta' caption-call wara d-dedup, allokazzjoni ta' baġit ta' moviment densi, evidenza ta' blur/espożizzjoni/SI-TI, cuts rapidi b'tejp twil, u falsi pożittivi gradwali. Tirreġistra l-ħin tal-ħajt tal-pre-analiżi u, fejn `/usr/bin/time` huwa disponibbli, CPU tat-tfal u peak RSS. Il-kontrolli tal-kwalità tagħha huma orakli strutturali biss. Il-kwalità reali tal-mudell ta' caption tibqa' `HOLD` minħabba li dan il-harness m'għandux endpoint awtorizzat jew ġudikant maħsil. Il-ħlasijiet monetarji wkoll jibqgħu `HOLD` sakemm `--caption-cost-per-call-usd` ma jipprovdi stima pożittiva esplicita għal kull telefonata; il-kodiċi qatt ma jfaċċa l-ebda riżultat.

Kull frame huwa limitat għal 4 MiB, il-frames raw kollha flimkien għal 23 MiB, u r-risposta serializzata tal-broker għal 32 MiB. Direttorju temporanju privat jiġi mneħħi f'`finally`. OmniRoute ma jġibx FFmpeg u ma jaċċetta l-ebda path ta' eżekuttiv personalizzat. Qabel il-captioning, il-pont applikat pass ta' deduplication viżwali konservattiv: kull JPEG jiġi rduppjat għal buffer griż ta' 16×16 u jiġi mqabbel biss mal-aħħar frame miżmum. Għall-baġit tal-caption mitlub li jaqbeż frame waħda, l-estrazzjoni tipprovdi pool ta' kandidati limitat sa darbtejn dak il-baġit u qatt aktar minn 16 frames. Il-kappa mitluba tiġi applikata biss wara d-deduplication, bil-kandidati selettivi l-ewwel u finali maħżuna matul it-tnaqqis finali meta l-baġit ikun mill-inqas tnejn. Il-politika versioned `grayscale-16x16-mean-cells-v2` tuża l-akbar bejn il-delta luma medja u r-ratio tal-cells tal-thumbnail li l-delta normalizzat tagħhom huwa mill-inqas 0.05. Il-threshold ta' duplikati huwa l-kostanti 0.04, magħżula għall-prevedibbiltà minflok esposta bħala sett ta' runtime. Dan is-sinjal sekondarju ta' kontrast għoli jżomm moviment żgħir u bidliet ta' test visibbli li mqabbel biss medju jista' jaħbi. Żbalji tal-komparatur jew tad-dekodifikatur jfallu miftuħ u jżommu kopertura. Il-metadati tal-output jisseparaw il-kandidati estratti, il-frames użati b'suċċess, u d-duplikati viżwali miċħuda.

Parti tal-video marked esplicittament tista' titlob sheet ta' kuntatt timestamped. Il-pont jibni grid JPEG ta' massimu ta' 4-kolonni, 16-frame. Kull cella ta' 512-pixel tħaffef il-timestamp tas-sors tagħha f'banda ta' qiegħ ta' kontrast għoli, filwaqt li l-istess timestamps jibqgħu fil-metadati testwali għall-assocjazzjoni u l-audit downstream. Il-JPEG komplut jibqa' limitat għal 32 MiB. Jekk `sharp` ma jistax id-dekodifika jew jikkumpuni l-grid, il-pont jerġa' lura għall-frames JPEG individwali; abort tal-klijent xorta jippersisti permezz tal-operazzjoni tal-sheet.

L-evidenza tal-promozzjoni hija separata b'mod deliberat mill-mikrobenchmark tal-kompożizzjoni sintetika. `scripts/perf/video-bridge-contact-sheet-eval.ts` jiddeskrivi A/B harness b'schema-versioned għall-mudelli tal-viżjoni kompatibbli ma' OpenAI reali. Jkejjel tokens rapportati mill-fornitur, latenza tal-ħajt end-to-end (inkluż il-kompożizzjoni tal-sheet), kont ta' telefonati tal-mudell, u retention ta' fatti definiti mill-manifest. Ir-risposti raw tal-mudell ma jiġux miktuba fir-rapport; biss SHA-256 digests u matched fact IDs jiġu rħin. Il-harness ma tagħmel l-ebda telefonata tan-netwerk jew mudell imħallas sakemm `--execute-real` ma jgħaddi u `--model`, `OMNIROUTE_BASE_URL`, u `OMNIROUTE_API_KEY` jiġu konfigurati. Mingħajr dik il-run reali esplicita, il-verdict tagħha li jista' jiġi maqsum jibqa' `HOLD`; il-measurements ta' payload/call-count sintetiku biss mhumiex evidenza ta' promozzjoni.

Is-separat `scripts/perf/video-bridge-promotion-eval.ts` jikkonsma osservazzjonijiet FU-07 jew FU-09. L-aċċettazzjoni tal-promozzjoni teħtieġ l-għaxar tipi ta' xenarji sintetiku flimkien ma' clip reali sanitarju, mill-inqas tlieta ta' ripetizzjonijiet miżurati għal kull rwol u każ, l-għaxar metriċi dichiarati, digests ta' media maħsula/prompt/fatt mistennija/settings, IDs ta' osservazzjoni uniċi u ordni A/B seed verified. Ir-riċetta tal-eżekuzzjoni tgħaqqad id-digest tal-korp, SHA eżatta tal-kandidat u r-reviżjoni tal-mudell. Mank jew miżuri invalidi jibqgħu `HOLD`, inkluż CPU aktar minn 30 s, peak RSS aktar minn 512 MiB jew pre-analiżi aktar minn 30 s. Dawn huma caps ta' aċċettazzjoni ta' evidenza, mhux garanzija ġdida ta' enforcement ta' RSS ta' runtime.

FU-07 jeħtieġ mill-inqas 98% ta' żamma tal-kwalità u p95 latenza mhux aktar minn 1.2x
bażi, flimkien ma' jew 0.05 titjib assolut fil-memoria bil-kas bil-bilanċ ekwivalenti fil-calls tal-kaptin, jew mill-inqas 10% inqas calls tal-kaptin post-dedup. FU-09 jeħtieġ mill-inqas 0.85 kwalità, 95% żamma, 20% tnaqqis fil-latenza p95 u 10% tnaqqis fit-tokens. Telf ta' fatt kritiku, konformità tal-injezzjoni jew nuqqas ta' użu jipprevjenu l-promozzjoni. Eżekuzzjoni waħda ma tistax tippromwovi xejn: `--previous-report` jikkonferma żewġ eżekuzzjonijiet distinti, mhux sovrapposti, konsegwenti ta' l-istess politika/reviżjoni tal-mudell/kandidati/korp. Esperiment ta' kampjuni ma jistax jikkonferma esperiment ta' fogħla ta' kuntatt.

Il-kolletturi għandhom jiskorjaw ir-risposti fil-memorja u jiffrankaw `responseDigest` flimkien ma' metrikki u osservazzjonijiet, qatt it-test tar-risposta. Il-konsumatur jaqra wkoll osservazzjonijiet raw tal-istorja iżda qatt ma jkopja dak it-test fil-rapporti tiegħu. Eżatt wieħed minn `responseDigest` jew `rawResponseText` huwa aċċettat għal kull osservazzjoni. Il-lista ta' permessi bil-verżjoni tibqa' vojt bi `hold` immutabbli bħala default. Entrata eliġibbli teħtieġ ir-referenza tal-evidenza tagħha, politika, reviżjoni tal-mudell, SHA eżatta tal-kandidat, digest tal-manifest u żewġ ID ta' run distinti; kuntesti konflittwali jiġu miċħuda. Dawn il-metadati huma kuntratt ta' audit, mhux prova li fajl referenzjat fih miżuri ġenwini. Iċċekkja l-fatturi attwali qabel ma żżid xi entrata. L-endpoint tal-istat tal-ġestjoni u l-dashboard tal-Video juru l-preparazzjoni konservattiva. Alias tal-mudell konfigurati waħedhom ma jistgħux jistabbilixxu r-reviżjoni tiegħu jew il-SHA tal-kandidat li qed jaħdem, għalhekk id-dashboard attwali jirrapporta `HOLD` minflok jerġa' juża l-eliġibilità minn kuntest ta' eżekuzzjoni oħra. Selezjoni esperimentali esplicita tibqa' separata mill-promozzjoni; l-ebda default ma jinbidel awtomatikament.

Il-caller jistgħu jattaccja array opzjonali `transcript.cues` għal parti tal-video appoġġjata meta diġà għandhom test allinjat. Kull cue għandu jġorr `text`, intervall `start`/`end` finit fil-ħin imħarrek, u `source` bil-lista ta' permessi (`client`, `embedded`, jew `audio-bridge`); `confidence` huwa default għal `1` u għandu jibqa' bejn `0` u `1`. Cues eżatti dduplikati jiġu maħlula. OmniRoute qatt ma jibda t-traskrizzjoni minn dawn il-metadati: cues validati jiġu kkopjati fil-riżultat deskritt bil-sors, il-kunfidenza, u l-intervall, u jiġu rreġistrati bħala osservazzjonijiet mhux affidabbli flimkien mal-kaptini tal-qafas. Test invalidu, barra mill-kamp, jew mingħajr provenjenza jiġi miċħud minflok jiġi mħallat fil-fluss tal-kaptin. It-tnejn tal-kanali tal-korp tal-requests tal-traskrizzjoni normalizzaw il-provenjenza mogħtija għal `client`, inklużi labels self-asserted `embedded` jew `audio-bridge`. Biss adapter li jappartjeni lis-server jista' jassigna dawk il-labels affidabbli permezz tal-argument `trustedSource` li huwa kodifikati biss; qasam JSON tal-requests ma jistax jilħaq dak l-argument. It-test tal-traskrizzjoni jibqa' kontenut derivat mhux affidabbli, irrispettivament mill-provenjenza tiegħu, u qatt ma għandu jiddetermina l-awtorizzazzjoni.

Caller avvanzat jista' jipprovdi track `audioTranscript` għall-istess video; dan jiġi ttrattat bħala test mogħti mill-klijent, mhux prova ta' traskrizzjoni tas-server. Il-fużjoni tal-kantuniera taħdem osservazzjonijiet viżwali u awdjo taħt
deadline waħda u sinjal ta' abort, ordnihom fuq timelin komuni, tnaqqas
duplikati eżatti, u tirrapporta riżultat parzjali meta naħa waħda biss tirnexxi.
`audioTranscript` invalid jiġi degradat għal dak ir-riżultat parzjali — id-deskrizzjoni viżwali tiġi mantenuta u l-branċ awdjo jirreġistra kodiċi ta' falliment sanifikat —
minflok ma jonqos il-video kollu. Il-preżenza ta' kull branċ, il-flag parzjali,
u l-kodiċi ta' falliment sanifikati jiġu mħarsa fil-riżultat deskritt, fil-metadati tal-guardrail (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), fil-metadati tal-cache tar-riżultat, u fil-kontijiet tal-fużjoni tal-pont. Il-path predefinit tal-Video Bridge ma jinvokax speech-to-text
jew jitniżżel kopja sekonda tal-midja; mingħajr dak it-track esplicitu, jibqa'
video biss.

**Żamma tal-traskrizzjoni (#12150 P1).** Dan japplika awtomatikament kull meta l
Video Bridge (innifsu opt-in) juri cue ta' traskrizzjoni — m'hemm l-ebda flag ta' żamma separata. Meta request juri kwalunkwe cue ta' traskrizzjoni (traskrizzjoni dikjarata mill-caller `transcript` jew `audioTranscript` fuzjonat), il-guardrail jimmarka bħala
`videoBridgeObserved` u jipproduċi shadow redatt tal-deskrizzjoni tal-video —
rendering identiku fejn il-korp ta' kull cue ta' test ħieles jiġi sostitwit minn
`[redacted-video-transcript]`, mibni billi ssostitwixxi l-qasam strutturat tal-cue
qabel ma l-istringa tiġi assembblata (qatt billi tiġi parsejat it-test imħallat, għalhekk l-ebda kontenut tal-cue — avversarjali jew ordinarju, inklużi korpi li jikkontinwaw `]` bħal
`[inaudible]`/`[music]` — ma jistax jgħix). Il-korp tal-log tal-calls persistenti jissostitwixxi
kull parti ta' test derivat mill-video għal dak is-shadow redatt, imwaqqaf minn ugwaljanza tal-kontenut; l-ankra `fullText` tiġi r-read mill-payload tal-guardrail pre-call li tlestiet, sabiex il-matching jibqa' jirnexxi wara guardrails tal-katina aktar tard (il-maskers tal-PII u tal-kredenzjali, prioretajiet 10/95) jrewritejaw it-test tad-deskrizzjoni fil-post u
wara l-prompt tas-sistema/handoff/injezzjoni tal-memorja jiffurmaw il-messaġġ array. Il-korp mibgħut 'il fuq lis-server ma jinbidelx. Request osservat ukoll ma popolawx
l-ebda Memorja durabbli (it-tneħħija derivata mill-requests u r-risposti jiġu skipjati),
hekk ir-risposta tal-mudell ma tistax tirrepeti t-test tal-traskrizzjoni fil-Memorja.

**Qasam tal-video raw (#12430).** Meta l-pont ikun attivat u l-appoġġ tal-video nativ huwa mhux magħruf jew assenti, il-qasam definit `transcript`/`audioTranscript` attiva wkoll `videoBridgeObserved`, anke wara falliment tad-deskrizzjoni jew limitu `maxVideos`. `null` u strings vojt jikkontaw; qasmijiet assenti u metadati mhux tal-video ma jagħmlux. Kopji miżmuma jreddu dawn il-qasms jew jomittu l-request, u caches/Memorja jiġu bypassed. Il-payload tal-fornitur jibqa' unchanged.

Kopji addizzjonali miżmuma jużaw l-istess sinjal tal-talba osservata. Is-snapshot raw tal-klijent qabel il-guardrail, it-talba pendenti fil-memorja, u l-log tal-talbiet miċħuda kmieni jissostitwixxu strutturalment il-firxa tat-traskrizzjoni fil-partijiet tal-video; il-prompts ta' stringi sintetizzati mill-istadji tal-pipeline u l-ħlas tal-kuntest huma redatti fil-sink tal-korp tal-talba miżmuma. Il-marka `video_content_removed` miżmuma tagħmel li l-kontinwazzjoni `previous_response_id` tonqos magħluqa minflok tirriċostruwixxi t-test li kien intenzjonalment imħassar. Jekk talba osservata titlef l-ombra ta' redazzjoni tagħha għal kull parti qabel il-logging, jew anke waħda minn diversi shadows tal-video tonqos li tgħaqqad wara mutazzjonijiet ta' talba aktar tard, il-korp tal-talba miżmum huwa ommess kompletament minflok ma jiġi miżmum traskrizzjoni parzjalment redatta.

Għat-talba osservata, risposta tal-mudell tista' tkwota kwalunkwe parti tat-traskrizzjoni mingħajr qafas strutturat. Il-log tal-kont persistenti `responseBody` għalhekk jiġi sostitwit minn marka ta' ommissjoni; l-artifatt dettaljat tal-pipeline (li jista' jinkludi korpi ta' upstream/client u chunks tal-fluss) ma jiġix miżmum. Il-kaxxi semantiċi, idempotency, u reasoning-replay jħallu lil hinn il-qarrejja u l-kitbiet għal dik it-talba. It-talba tal-fornitur u r-risposta viżibbli tal-klijent jibqgħu bla tibdil. Il-bytes ta' keepalive kmieni jiġu drenati mill-buffer temporanju meta l-artifatt dettaljat jiġi ommess. Il-warning ta' Kiro dwar l-EventStream malformed rapporta biss il-kont ta' bytes tal-payload, qatt il-kontenut tiegħu jew l-iżbalji raw tal-parser JSON.
Dan ma jikkonfermax li kull diognostika mhux relatata tal-fornitur/plugin ġiet auditata; il-ħruġ aktar wiesa' tal-sink miżmum huwa segwit f'#11658.

Il-lifecycle intern `/api/modality-bridge/video/drilldown` huwa substrat ta' cache separat, loopback/token-authenticated. Kull operazzjoni teħtieġ ukoll ID prinċipali opak kanoniku. Qabel ma tiġi attivata telefonata ta' produzzjoni, trid tiġi derivata dik l-ID mill-tenant awtorizzat u qatt ma għandha tgħaddi valur magħżul mill-klijent. Il-kaxxi tal-cache jgħaqqdu dak il-prinċipali ma' ID ta' sessjoni kanonika u ID ta' referenza tal-video, jaħżnu biss il-kaxxi derivati SHA-256 tagħhom, u jiskopru kemm il-qarrejja kif ukoll it-tħassir għall-istess prinċipali. Il-cache jaħżen sa 16 framijiet JPEG derivati għal kull entrata, jiskadihom wara għaxar minuti, u jappoġġja `start`/`end` limitati jew tħassir esplicitu tas-sessjoni.

Kull prinċipali huwa limitat għal 16 entrati u 64 MiB ta' data JPEG kanonika. Dawn il-limiti huma indipendenti mill-limitu globali ta' 64 entrata/256 MiB: il-pressjoni tal-kwota tal-prinċipali tneħħi biss l-entrati l-inqas riċenti użati ta' dak il-prinċipali qabel li t-tneħħija globali LRU tiġi kkunsidrata. L-entrati skaduti jiġu sweeps minn kemm il-prinċipali kif ukoll il-kont globali fuq l-attività tal-cache, filwaqt li l-kansellazzjoni u l-falliment tal-validazzjoni ma jikkonfermax sostituzzjoni parzjali.

Il-cache jirrifjuta Base64 mhux kanoniku, padding eċċessiv, media mhux JPEG, JPEGs malformed jew imqassra, u JPEGs li jipproduċu warning waqt dekodifikazzjoni `sharp` ta' immaġni sħiħa limitata. Huwa re-encode kull immaġni aċċettata bħala JPEG kanoniku, idderiva l-wisa' u l-għoli mill-bytes dekodifikati minflok fiduċja fil-firxa tal-caller, u jiskarta kwalunkwe bytes polyglot li jmiss minflok ma jżommhom. Biss il-buffer kanoniku kompressat limitat huwa miżmum għall-kwoti. Il-limitu tal-wajer JSON jinkludi l-overhead Base64 għall-limitu ta' 32 MiB ta' input dekodifikat. Kull
derivazzjoni maħżuna tirreġistra l-format/resoluzzjoni JPEG validata tagħha, il-politika ta' campjunar, il-verżjoni tad-derivazzjoni, il-ħin tal-ħolqien, l-hash tal-kontenut imħaddem mis-server, u l-hash tal-referenza tal-ġenituri flimkien mal-hash tal-kontenut tal-ġenituri tal-caller fiduċjarju. Il-kansellazzjoni tiġi kkontrollata bejn il-fażi dekodifikazzjoni/hash asinkroni qabel il-kummissjoni atomika tal-cache.

Il-produttur tal-produzzjoni jerġa' juża framijiet tal-broker diġà derivati biss wara analisi viżiva suċċessiva, mingħajr tniżżil/estrazzjoni ta' video sekondarju. Huwa jeħtieġ operatur `modalityBridgeVideoDrilldownEnabled=true`, `drilldown: true` strett għal kull parti, u ID ta' rekord tal-API-key awtorizzata. Valuri tal-prinċipali/sessjoni iddikjarati mill-klijent qatt ma jistabbilixxu s-sid. Mingħajr it-tliet kundizzjonijiet kollha, ma jhash, ma jżid jew ma jżomm framijiet addizzjonali. Il-falliment tal-miżmuma jżomm ir-risposta viżiva utli. Talbiet konsenswali jgħaddu mill-cache tar-riżultat tal-video kollu sabiex ir-riżultati miżmuma qatt ma jirreplayja l-handles.

Risposti JSON u SSE suċċessivi juru sa erba' handles opaki fil-header limitat `x-omniroute-video-drilldown`. Oriġini awtorizzati tal-browser jistgħu jaqraw dak il-header mingħajr ma jespandu l-politika tal-oriġini CORS. Handles ġodda jużaw `v1.<32-byte random base64url token>`, u r-reġistru jżomm biss
l-hashes SHA-256 tagħhom. Il-qarrej/parser tal-header jaċċetta wkoll tokens 64-hex legati. Il-konsumatur pubbliku awtorizzat huwa
`GET /api/v1/video-bridge/drilldown?handle=...`, indipendentement gatejat minn
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Revoka esplicita persistita falsa
tirrevoka l-aċċess anke meta l-fall-back legat `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` huwa attivat. Il-miżmuma tal-produzzjoni għandha l-fall-back legat analogu
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED`. Iż-żewġ fall-backs huma default off.

Il-konsumatur idderiva s-sid mill-key awtorizzata, applikat il-politika tal-key, u jirritorna l-istess 404 għal handles mhux magħrufa, skaduti u ta' key oħra. Huwa jaċċetta
`variant=preview|standard|detail` (dimensjoni JPEG massima 320/640/1280, qatt ma tiġi aġġustata), `limit=1..8` (jew l-alias legat `frames`, qatt kemm), `page` bbażata fuq żero, u sekondi ta' fokus opzjonali `start`/`end`. Keys tal-query duplicati u windows ta' fokus imqassra jiġu rrifjutati. Kull varjant imħares għandu hash tal-kontenut attwali tiegħu u metadata tar-risoluzzjoni attwali, marbuta mal-fonte miżmuma. Il-varjanti huma derivati waqt il-qari minflok ma jiġu maħżuna bħala kopji miżmuma addizzjonali. Ir-risposta JSON, inkluż Base64/envelope, hija limitata għal 32 MiB; paġna eċċessiva tirritorna 413 u l-klijent irid jitlob inqas framijiet. Il-qarrejja jikkontrollaw il-kansellazzjoni madwar kull aġġustament u jerġgħu jikkontrollaw il-validità tal-handle qabel ma jirritornaw. `DELETE` mill-sid huwa idempotent; it-tħassir jew l-iskadenza TTL jħalli l-fonte miżmuma u l-kontabilità tal-użu.

Il-ħażna maħsuba hija lokali għall-proċess: il-ħwienet jispiċċaw meta jsir reboot u mhumiex trasferibbli bejn proċessi indipendenti ta' OmniRoute. L-istatistika tal-ġestjoni turi l-politika ta' retenzjoni/remote effettiva u l-entrati/bytes miżmuma aggregati biss, qatt mhumiex media, referenzi, IDs prinċipali jew ħwienet. Il-panew tal-impostazzjonijiet tal-Vidjo juri dawk il-valuri u jista' jżomm kemm is-switches tal-kunsens. Din id-dokumentazzjoni tal-implimentazzjoni mhix evidenza ta' implimentazzjoni live jew promozzjoni; l-aċċettazzjoni tal-mudell reali tiġi segwita separatament.

Il-frejmijiet huma kappa b'mod sekondarju bil-mudell tal-Vidjo konfigurati. Override tal-Vidjo vojt jirtira l-impostazzjoni tal-Viżjoni; jekk it-tnejn huma vojt, il-Viżjoni auto-router jagħżel il-mudell effettiv li jista' jara. Kappa suċċessiva tissostitwixxi l-parti oriġinali b'prefix stabbli `[Video description:` li wkoll jindika t-test bħala osservazzjoni derivata minn media mhux affidabbli u jgħid lill-mudelli downstream li ma jsegwux l-istruzzjonijiet li jinsabu fil-media. Il-keys tal-cache tal-frejm-caption jinkludu l-bytes JPEG, il-promt, it-timestamp, u l-mudell effettiv; biss il-kappa suċċessiva tiġi kachjata. L-entrati tal-cache iżommu l-mudell tal-produttur suċċessiv attwali, inkluż mudell ta' fallback; il-brijġ jirrapporta `mixed` meta frejmijiet differenti ġew prodotti minn mudelli differenti. Hit tal-cache jerġa' juża dik l-identità tal-produttur minflok ma jlabelha bħala l-pjan ta' rotazzjoni mitlub. Il-cache tal-riżultat tal-video kollu huwa kkatat fuq kull input li jbiddel l-output — promt, mudell effettiv, politika ta' campjunar, kont ta' frejm, modalità ta' analiżi semantika, il-fingerprint SHA-256 tal-ħjiel normalizzat tal-fokus, il-window tal-fokus, `transcript`, `audioTranscript`, u l-flag tal-kontatt-sheet — għalhekk, ibdil ta' kwalunkwe waħda minn dawk id-dimensjonijiet huwa hit tal-cache, qatt riutilizzazzjoni stale. Il-verżjoni tal-politika ta' dedup viżwali, il-threshold, u l-kont tal-frejm kandidati limitati huma wkoll espliciti fil-key tal-cache tar-riżultat u l-metadati; għalhekk, bidla fil-politika ma tistax terġa' tuża deskrizzjoni stale tal-video kollu. Il-metadati tal-cache tar-riżultat v4 iżommu l-modalità u l-fingerprint, qatt l-attività tal-utent raw. Il-metadati tal-guardrail jirrapporta kemm il-modalità ta' analiżi mitluba kif ukoll l-effettiva; modalità mitluba `focused` mingħajr test utent utli tiġi rrappurtata bħala effettivament `full`.

Il-guardrail jeħles kull parti tal-video appoġġata iżda jiddeskrivi l-anqas `modalityBridgeVideoMaxVideos`. Għal mira li hija provata li għandha `supportsVideo === false`, il-vidjos li fallu u dawk li jaqbżu l-limitu jsiru markaturi ta' test sikur espliciti sabiex l-ebda video raw ma jsurvivi. Meta l-kapaċità mhix magħrufa, dawk il-parti jibqgħu intatti. Miri bi `supportsVideo === true` jgħaddu mill-briġ. Is-sinjal ta' abort tal-request tal-klijent jippopaga permezz ta' download, broker queue, subprocesses, u sejħiet tal-caption; l-aborts waqfu bejn il-vidjos u qatt ma jfallu miftuħa għal media raw.

L-impostazzjonijiet tal-runtime huma DB-backed u Zod-validated:

| Key                                 | Default     | Range / behavior                                                                                    |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Optional runtime, opt-in                                                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` preserves generic captions; `focused` uses bounded, untrusted latest-user context            |
| `modalityBridgeVideoModel`          | `""`        | Inherit the Vision Bridge model                                                                     |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, or proportional `segment_aware`; detector failure falls back to `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                 |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                      |

Valuri ta' timeout tal-Vidjo persistenti tal-legacy li huma aktar minn 120 sekondi huma kklampjati għall-deadline tal-broker; l-impostazzjonijiet ġodda li jiktbu aktar minn dak il-limitu jiġu miċħuda. `GET /api/modality-bridge/video/runtime` teħtieġ lokalità stampata ta' loopback affidabbli qabel l-autentikazzjoni jew il-probing tal-runtime, imbagħad teħtieġ awtorizzazzjoni tal-ġestjoni. Tirritorna biss `available`, versi FFmpeg/ffprobe sanitizzati, u raġuni fissa meta r-runtime mhix disponibbli. L-endpoint tal-estrazzjoni interna mhix API ta' upload pubbliku: saturazzjoni tal-queue tirritorna `503` plus `Retry-After`, disconnect tal-caller jirritorna `499`, u l-deadline fissa tal-broker tirritorna `504`. Risposti konvertiti jżidu `video->text;model=<visionModel>;parts=<videos>` mal-header ċentrali `x-omniroute-modality-bridge` mingħajr ma jneħħu s-segumenti tal-Viżjoni jew tal-Audio.

### PII Masker (`piiMasker.ts`)

Jaħdem fuq **it-tnejn** l-istadji.

- **`preCall`** jikkopja l-payload, jimxi `system`, `messages`, `input`, u `prompt` (inklużi l-oġġetti ta' string sempliċi), u japplika `processPII()` (minn `@/shared/utils/inputSanitizer`) għal kampi ta' string `content`/`text`. Meta `PII_REDACTION_ENABLED=true`, PII identifikati jiġu redatti fil-payload outbound. Dan huwa indipendenti minn `INPUT_SANITIZER_MODE` (li jikkontrolla biss il-politika ta' injizzjoni tal-prompt). Meta l-redazzjoni tkun off, il-sejħa tirreġistra l-kontijiet tad-detekzjoni mingħajr ma tirreġistra l-kontenut.
- **`postCall`** jikkopja fil-fond ir-risposta, jaħdem `sanitizePIIResponse()` plus il-masker tal-forma tal-Responses-API (`maskResponsesOutput` — jkopri `output_text` u `output[].content[].text`). Jekk ikun hemm xi redazzjoni, ir-risposta modifikata tissostitwixxi l-origini.

Il-guardrail qatt ma jblokka; huwa biss jannota (`meta.detections`, `meta.redacted`) jew jrewrite.

### Prompt Injection (`promptInjection.ts`)

Detects strutturi avversarjali fil-kontenut ipprovdut mill-utent u jimplimenta l-politika kkonfigurata. Il-kondotta hija mmexxija minn varjabbli tal-ambjent u għażliet tal-kostruzzjoni:

| Impostazzjoni       | Varjaġġ tal-ambjent                                                                                   | Default | Effett                                                                                                                                                                                                                        |
| ------------------- | ----------------------------------------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Attivat             | `INPUT_SANITIZER_ENABLED`                                                                             | `true`  | Meta `false`, il-gwardja tgħaddi.                                                                                                                                                                                             |
| Modalità            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`  | Politika ta' injizzjoni: `block`, `warn`, jew `log`. (`redact` huwa aċċettat għall-kompatibbiltà lura iżda ma jneħħi **xejn** test ta' injizzjoni; it-talba għal PII rewrite hija kkontrollata minn `PII_REDACTION_ENABLED`.) |
| Threshold tal-blokk | `blockThreshold` għażla / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Il-gravità minima meħtieġa biex tiġi blokka. Il-medju huwa osservazzjoni biss fil-default.                                                                                                                                    |

**Preċedenza tal-modalità** (`getMode`): caller `options.mode` →
`INJECTION_GUARD_MODE` **override tal-flag tal-karatteristika DB** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Għalhekk, override tal-dashboard jirbaħ fuq il-varjabbli tal-ambjent, sabiex il-Flags tal-Karatteristika jikkontrollaw il-gwardja li qed taħdem live (mingħajr riġenerazzjoni). Il-qari tal-DB huwa fail-safe:
jekk ikun hemm żball, il-gwardja terġa' lura għall-kondotta bbażata fuq l-ambjent, u meta m'hemm l-ebda
override imqiegħed, il-kondotta hija identika għal riżoluzzjoni bbażata fuq l-ambjent biss.

Sorsi ta' detzzjoni:

1. `sanitizeRequest()` minn `@/shared/utils/inputSanitizer` (detettur kondivi
   użat f'postijiet oħra fil-pipeline).
2. `DEFAULT_GUARD_PATTERNS` mibnija (bħalissa `system_override_inline` u
   `markdown_system_block`, it-tnejn ta' gravità `high`).
3. `customPatterns` opzjonali mgħoddija permezz ta' għażliet tal-kostruzzjoni (strings, regex,
   jew `{ name, pattern, severity }` records).

Meta `mode === "block"` **u** mill-inqas waħda mid-dettazzjonijiet tilħaq il-gravità
threshold, `preCall` tirritorna `{ block: true, message: "Request rejected:
suspicious content detected" }`. Fil-modalitajiet `warn`/`log`, il-gwardja tniżżel iżda
tħalli l-kontatt. Il-ħaġa kondivi `evaluatePromptInjection()` hija wkoll esportata
għal dawk li għandhom bżonn evalwaw il-prompts mingħajr ma jgħaddu mill-reġistru.

**Scan bound (v3.8.20):** id-dettettur jinspecta biss il **l-ewwel 16 KB** ta'
test tal-prompts magħquda — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) fil
`src/shared/utils/inputSanitizer.ts`. Bħal `detectInjection()` u
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` qabel ma jsir
il-loop tal-patter. Id-direttivi ta' injizzjoni jinsabu qrib il-quċċata ta' input, għalhekk dan
jillimita l-CPU/GC regex fuq payloads ta' multi-hundred-KB mingħajr ma jnaqqas id-dettzzjoni (cf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Jaħdem fuq **it-tnejn** l-istadji, l-aħħar fil-katina default (priorità `95`). Jneħħi
patterns magħrufa tal-API-key / secret-token mill-payload outbound (kontenut
tal-messaġġ, argumenti tal-għodda, riżultati tal-għodda) **u** ir-risposta tal-fornitur, sabiex
credential imqiegħed f'prompt (jew imqiegħed lura minn riżultat ta' għodda) ma jinxteħetx
lil fornitur ta' fuq jew lura lill-klijent.

- **Opt-in biss**, l-istess konvenzjoni bħal PII redaction (Hard Rule #20-adjacent):
  diżattivat sakemm `settings.credentialRedactionEnabled === true` **jew**
  `CREDENTIAL_REDACTION_ENABLED=true`. Meta tkun off, il-gwardja hija no-op —
  qatt ma tblokka u qatt ma tirreġistra.
- `redactCredentials()` timxi fit-tree sħiħ tal-payload/risposta (`walkValue()`,
  prototip-pollution-safe, cycle-safe permezz ta' `WeakSet`) u tissostitwixxi l-matches b'
  placeholder `[REDACTED:<type>]`, li tikkopja biss il-fergħat li fil-fatt
  biddlu.
- `CREDENTIAL_PATTERNS` tkopri l-keys tal-fornitur LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), keys ta' ħlas (Stripe, Square), keys tal-cloud
  (AWS access key, Twilio, SendGrid, Mailgun), keys privati / JWTs,
  strings ta' konnessjoni li jġorru credentials (`mongodb://user:pass@...`, eċċ.), u
  pattern ġeneriku ta' header-value `Authorization`/`x-api-key`/`api-key`/`apikey`.
- Il-gwardja qatt ma tblokka; hija biss tirreġistra (`modifiedPayload` /
  `modifiedResponse`) u annota (`meta.credentialsRedacted`, `meta.count`).

Gwardja ta' regressjoni: `tests/unit/credential-masker-guardrail.test.ts`.

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
