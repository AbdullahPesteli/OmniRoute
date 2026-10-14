# Guardrails (Gaeilge)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Foinse na fírinne:** `src/lib/guardrails/`
> **Nuashonraithe is déanaí:** 2026-08-29 — v3.8.51 (Is é an glaoiteoir a dhearbhaíonn bunús thras-scríbhinn Video Bridge,
> níl sé fíoraithe ag an bhfreastalaí fós — soiléirithe de réir #11661)

Forfheidhmíonn ráillí cosanta sábháilteacht, polasaí, agus claochluithe ábhair ag an teorainn idir OmniRoute agus soláthraithe in aghaidh an tsrutha. Is féidir le gach ráille cosanta pálastaí iarratais (`preCall`) agus freagraí in aghaidh an tsrutha (`postCall`) a iniúchadh (agus, de rogha air sin, diúltú dóibh, iad a chlaochlú, nó nótaí a chur leo).

Is córas **teip-oscailte** é: má chaitheann ráille cosanta earráid le linn forghníomhaithe, déanann an chlárlann an earráid a thaifeadadh agus leanann sí ar aghaidh leis an gcéad ráille cosanta eile in ionad teip a chur ar an iarratas. Is cinneadh sainráite é blocáil (`block: true`), ní tharlaíonn sé de thaisme riamh.

## Cosaint Laistigh

Lódáiltear sé cosaintí laistigh de shé ord tosaíochta ar allamuigh
(féach `registry.ts` → `registerDefaultGuardrails()`):

| Tosaíocht | Ainm                | Stáit(í)       | Comhad                |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Láimhdeachtaí le huimhreacha tosaíochta níos ísle a rith **ar dtús**.

### Droichead Radharc (`visionBridge.ts`) — Droichead Modh PR-1

Tógann sé isteach iarratais atá ag iompar íomhánna atá dírithe ar **móidí nach bhfuil radharc acu** agus athraíonn sé an t-iarratas iomlán chuig mód radharc-ábhar nó cuireann sé na codanna íomhá le cur síos téacs a tháirgtear ag mód radharc inathraithe sula ndéantar an glao suas. Ligeann sé do sholáthraithe téacs amháin déileáil go trédhearcach le hualach il-mhodh.

Sruth:

1. Skoip má tá an múnla sprioc cheana féin ag tacú le radharc (mura bhfuil sé le feiceáil sa liosta droichead éigeandála `isVisionBridgeForcedModel`).
2. Extract codanna íomhá trí `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), a dhéileálann le **detector meán comhoibrithe** `detectMediaParts()` i `open-sse/utils/mediaParts.ts` — an t-aon fhoinse fírinne a roinneann an scagaire comhoibrithe.
   Tá an t-extraction ceadaithe do na codanna barr-leibhéil de na cruthanna
   a féidir le `replaceImageParts` a chur ar ais (an conradh extract↔replace): OpenAI
   `image_url`, bunús base64 Anthropic `source.type:"base64"`, URL Anthropic
   `source.type:"url"`, agus API na gFreagraí `input_image`. Ní thógtar builleanna neadaithe agus
   cruthanna le comhartha amháin mar ábhar scagaire comhoibrithe agus ní thógtar iad riamh.
   Skoip má tá aon rud le fáil.
3. Réitigh socruithe reatha trí `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): buaileann eochracha nua socruithe `modalityBridge*`;
   fanann eochracha sean-`visionBridge*` mar **tacaíocht laistigh de chiorcal amháin**
   (fuinneog rollback). Skoip roimh aon thrasnú meán nuair atá an droichead dí-íoctha.
4. Roghnóir mód (`modalityBridgeVisionMode`, féach an tábla thíos) a chinneann
   athrú vs cur síos. Athraíonn athrú `modifiedPayload` le `model`
   a mhalartú, chomh maith le meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Conas cur síos: cuireann sé íomhánna ag `maxImages`, comhoibríonn sé an t-iarratas atá feasach ar an tasc,
   comhoibríonn sé leis an gcófra cur síos, glaonn sé ar an mód radharc **i gcomhthráth**
   (`Promise.allSettled`), agus cuireann sé `[Image N]: <description>` codanna téacs ina n-áit.
   Tógann cur síos teip `null` agus coimeádtar an codanna íomhá bunaidh **(4012)**
   — ach amháin ar an gcosán cur síos comhoibrithe nuair a theip gach cur síos, áit a bhfaigheann
   an t-iarratas neamh-radharc a dhearbhú `(unavailable — no vision-capable provider connected)` mar stubb in ionad (8430).
6. Tuairisceán `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Roghnóir mód (`modalityBridgeVisionMode`)

| Mód        | Réamhshocrú | Iompar                                                                                                                                                                                                                                                                                        |
| ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔           | Heuristic sean, gan teagmháil (#6640/#7204): ní dhéantar múnlaí neamh-comhoibrithe/`auto/` a athrú chuig an mód radharc is fearr mura bhfuil creidiúnachtaí inúsáidte ag an múnla bunaidh (ansin déan cur síos); tá spriocanna comhoibrithe i gcónaí ag déanamh cur síos.                     |
| `describe` |             | Déan cur síos i gcónaí — skipítear an bloc athrú go hiomlán; freagraíonn an múnla a roghnaigh an t-úsáideoir i gcónaí.                                                                                                                                                                        |
| `reroute`  |             | Athraigh go láidir: bypassítear an cosaint múnla creidiúnaithe. Fanann cosaint creidiúnachta an sprioc-athraithe i bhfeidhm — nuair nach bhfuil sprioc radharc inúsáidte ann, téann an t-iarratas tríd chun cur síos a dhéanamh ionas nach sroicheann íomhánna amh cúlra téacs amháin (8430). |

Cuireann módanna éigeandála **roimh** an heuristic uathoibríoch rith; tá iompar `auto`
comhoiriúnach le byte leis an gcosaint roimhe PR-1.

#### Raon eochair API (`visionBridgeKeyScope.ts`)

Nuair a shocraíonn eochair API an gcallaire `allowedConnections`, poolaí cota
(`allowedQuotas`) nó múnlaí (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), ní roghnaíonn an droichead ach
múnlaí athraithe agus cur síos a d'fhéadfadh an eochair a úsáid, ar na conneachtaí a d'fhéadfadh an eochair
a úsáid. Téann an glao cur síos ansin tríd an gself-loop OmniRoute i gcónaí le
an ceangaltán `x-omniroute-self-loop-key-id`, ionas go n-íocann an t-iarratas comhoibrithe sin
polasaí conneachta agus múnla an eochair arís. Cuireann `enforceApiKeyPolicy()`
an ceangaltán sin san áireamh ach amháin le bearers an self-loop, ionas gur féidir leis ach
rochtain a laghdú, agus cuireadh id a théann i bhfeidhm a dhiúltar.

Mura bhfuil múnla radharc ceadaithe don eochair, téann an cosán cur síos ar leataobh agus
tá an t-iarratas ag dul tríd gan athrú, an iompar fail-open céanna le cosaint dí-íoctha (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Ní dhéanann iarratais gan eochair, agus eochair gan na srianta seo, aon rud ach mar a bhí roimhe.

#### Iarratas cur síos atá feasach ar an tasc (`modalityBridgeVisionTaskAware`)

Default **fíor**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) cuireann
téacs an **mesáiste deireanach ó úsáideoir** (truncated go 500 chars) leis an
bónas cur síos, ag treorú an cur síos i dtreo cad a d'iarr an t-úsáideoir
(patrún codex-vision-proxy) agus ag iarraidh ar an múnla radharc an téacs
infheicthe a thrascríobh. Leis an gcruth lasc — nó gan téacs úsáideora —
úsáidtear an bónas cur síos gan athrú.

Déantar an iarratas féin ar an OpenAI comhoiriúnach de chruach na cur
cur síos (`callVisionModelSingle()` i `visionBridgeHelpers.ts`) i gcónaí
iarratas `image_url.detail: "high"` — gan coinníoll, do gach gcallaire/soláthraí,
níl sé gafa le comhartha cliant ar bith. Déanann sampláil íseal-dhéanamh
laghdú ar chruinneas OCR don tasc trascríobh téacs go díreach a iarrann an
bónas cur síos, mar sin iarrann an gcall cur síos féin i gcónaí ard
dheatail beag beann ar leibhéal na sonraí a úsáideadh sa iarratas isteach
bunaidh. Tógann sé seo isteach an comhlacht iarratais inmheánach cur síos;
ní athraíonn sé conas a tharchuireann OmniRoute `image_url.detail` an
gcallaire ar an iarratas príomha — tá an réamhshocrú curtha i bhfeidhm go
neamhspleách, agus amháin do chliaint OpenCode a bhronntar, i
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Níl
gach comhoiriúnacht leagan sreang na cur síos féin ag an gcruth
`detail` agus níl sé faoi thionchar ag an réamhshocrú.

#### Teorainn aschuir cur síos (`modalityBridgeVisionMaxChars`)

| Eochair                        | Réamhshocrú | Raon             |
| ------------------------------ | ----------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`         | `0` nó 100–50000 |

Is é `0` (réamhshocrú) **níl teorainn** — cuireadh an cur síos a
tháinig ó `callVisionModel()` tríd gan athrú, ag coimeád an iompar
atá ann cheana. Cuireann aon luach sa raon 100–50000 teorainn ar an
cur síos le suffix `…` sula gcuirtear ar ais é mar `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` i `src/lib/guardrails/visionBridge.ts`).
Ardaigh é seo do thascanna OCR atá trom le sonraí áit a bhfuil
teastaíonn an trascríobh iomlán ón múnla síos. Ísligh é chun úsáid
tóken a theorannú ar mhúnlaí radharc garr. Tá an réimse painéil
dashboard suite ar phainéal Advanced na clibe Vision
(`modality-bridge-max-chars` i `ModalityBridgeVisionTab.tsx`) agus
cuireann sé aon luach idir 1 agus 99 suas go dtí an 100 urlár
ag fágáil `0` soiléir gan athrú — is luach bailí Zod é `0` ina
shon féin (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`),
níl sé ach an réamhshocrú "neamhoifigiúil".

#### Caching cur síos (`modalityBridge/bridgeCache.ts`)

LRU + TTL cache i gcuimhne do aschuir cur síos, roinnte ar fud an
próisis. Eochair = `sha256(imageRef + composedPrompt + configuredBridgeModel)`
le frámáil fad-prefix (gan comhoiriúnachtaí teorann na réimsí). Is é
an comhoiriúnacht múnla an múnla **socraithe** bridge, ní an múnla
a d'fhreagair i ndáiríre — d'fhéadfadh `callVisionModel` dul ar ais
go laistigh, agus bheadh sé ag eagrú de réir iarracht a bheadh
ag cur an cache i gcion. Ní chaitear cur síos a theipeann. Socruithe:

| Eochair                         | Réamhshocrú | Raon    |
| ------------------------------- | ----------- | ------- |
| `modalityBridgeCacheEnabled`    | `fíor`      | —       |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000 |

#### Normalú íomhá iargúlta (cur síos féin/íoslódáil base64)

Nuair a fhaigheann an bridge íomhá **iargúlta** féin — an cur síos
féin-iarracht Anthropic agus an comhoiriúnacht leagan sreang claude
base64 (`ensureBase64ImagesForClaudeWire`), beirt trí
`fetchRemoteImageAsDataUri()` i `visionBridgeHelpers.ts` — cuireadh an
URI sonraí a tháinig as `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) sula gcuirtear é i d'iarratas
an múnla radharc. Déantar íomhánna ró-mhóra a laghdú go **2048px
ar an taobh fada** (ag comhoiriúnú leis an teorainn athraigh a
chuireann OpenAI/Anthropic i bhfeidhm ar an freastalaí), a ghearrann
na byteanna/latency a uaslódáil gan athrú ar cad a fheiceann an
múnla radharc. Úsáideann an laghdú `sharp`, a luchtú trí
iontráil dinimiciúil: ar ardán ina n-éireoidh a bhinéar dúchasach
le híoslód, ní **throid** `normalizeDataUri()` — téann sé ar ais
go dtí pastrí na byteanna bunaidh, mar sin coimeádann an cosán
cur síos/base64-conversion ag obair i gcónaí. Déantar byteanna
níl-íomhá (íoslódáil nach dtuairiscíonn íomhá inchoigeartaithe) a
tharchur tríd gan athrú. Tá an normalú seo teoranta do
íomhánna a fhaigheann an bridge dá gcur síos féin — ní cuireadh
i bhfeidhm ar phacáiste pastrí amh an gcallaire, comhoiriúnach leis
an prionsabal athraithe opt-in amháin (Príomhriail #20).

#### Scéim socruithe + aistriú

Tá na heochracha nua `modalityBridge*` bailithe ag Zod i
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
an trio `modalityBridgeCache*`, agus an grúpa `modalityBridgeAudio*`
a úsáidtear ag an Audio Bridge. Aistriú `141_modality_bridge_settings.sql`
cuireann luachanna seanchaite `visionBridge*` atá ann cheana chuig
na heochracha nua comhoiriúnacha (idempotent, ní scriosann sé
luach `modalityBridge*` a shocraigh oibreoir); fanann na heochracha
seanchaite á nglacadh mar thacaíocht léitheoireachta ar feadh
ciorcal scaoilte amháin.

#### Ceannlínte trédhearcachta + staitisticí

Tugann freagraí a athraítear cur síos
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(a tógadh ag `buildModalityBridgeHeader()` i `modalityBridge/bridgeStats.ts`,
a shínigh `withModalityBridgeHeader()` i `src/sse/handlers/chatHelpers.ts`).
Ní fhaigheann iarratais a athsheoladh **aon** cheannlínte — níor
athraíodh an pacáiste agus tá an mhalartú múnla le feiceáil cheana
i réimse `model` an chomhlachta freagartha.

`GET /api/modality-bridge/stats` (údarás bainistíochta, an céim chéanna le
`GET /api/settings`) a fhilleann na comhoibrithe in-mheabhrach per-modality
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` do `vision`, `audio`, agus
`video`. Úsáideann `averageLatencyMs` `latencySamples`, ní gach iarracht, mar a
bhfuil a denominator; ní dhéanann oibríocht gan am sampla de zero-millisecond
a chruthú. Fanann `bridged` mar an t-ainm a bhfuil comhoiriúnacht ar fáil do
convertaí rathúla; ní chuireann iarrachtaí teip air.

Athraítear na comhoibrithe ar aththosú an phróisis dearaidh
(telemetry, ní cuntas).

#### Conradh an dashboard

Tá an leathanach dashboard tiomnaithe ag
`/dashboard/settings/modality-bridge`. Coinníonn a URL-adhraigh na paraiméadair
cuardaigh agus tú ag athrú luach an `tab`. Nochtann an tab Vision an
enablement, mód, roghnú múnla (lena n-áirítear an réamhshocraithe uathoibríoch),
cuireadh aird ar thasc, teorainneacha ama/íomhá/cur síos/aischóirithe, comhoibrithe
rithim, agus iarratas samplach cosanta. Tá an tab Audio beo freisin: nochtann sé
enablement, rogha múnla STT amháin le Auto, teorainneacha ama/max-clip, comhoibrithe
guth, agus tástáil samplach `input_audio`. Tá an tab Video feidhmiúil: tuairiscíonn sé
staid rithim FFmpeg/ffprobe — laistigh de cheithre stát UI soiléire (`unknown` agus
an probe á sheoladh nó nach féidir é a chríochnú, `restricted` ar óstach dashboard
nach bhfuil ag dul ar ais áit a gcuirtear an probe in eagar ar thaobh an chliaint,
`unavailable` nuair a bhíonn an probe críochnaithe agus dearbhaithe mar chaillte, nó
`available` le leagan FFmpeg/ffprobe) — coinníonn sé teorainneacha enable/múnla/frames/video/am, scagann sé an rogha múnla go múnlaí atá in ann fís, agus nochtann sé comhoibrithe físe.

Tá an cárta Vision Bridge roimhe seo faoi shocruithe AI mar nasc comhoiriúnachta leis
an leathanach nua; ní bhíonn cóip dhó de na foirmeacha aige a thuilleadh. Cuireann
Soláthraithe Meán nasc freisin le hoibrithe Íomhá-go-Teanga agus Teanga-go-Teanga
go dtí na tabanna Modality Bridge comhoiriúnacha gan na páirceanna atá ann cheana
a bhaint.

**Bóthar isteach féin-loop a shárú:** nuair a sheoltar an glao cur síos trí
`/v1` féin-loop OmniRoute (múnla soláthraí neamhchaighdeánach), seolann an sub-iarratas
`x-omniroute-admission-bypass: internal` agus tá sé bailithe le creidiúnacht
féin-loop a réitítear — an `sk_omniroute` ábhar i mód áitiúil, nó an
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` eochair env a shocraítear ag an oibreoir
(#1350) ionas gur féidir le deployment `REQUIRE_API_KEY=true` an glao cur síos a
rith. Ní ghlactar leis an bóthar isteach ach do na creidiúnachtaí sin go díreach,
mar sin ní féidir le cliaint seachtracha an ceann scríbe a úsáid chun an
t-údarás a scipeáil.

Maireann na réamhshocruithe sean i `src/shared/constants/visionBridgeDefaults.ts`;
maireann na socruithe nua atá ag brath ar mhód/tasc/cache agus an réiteach socruithe i
`src/shared/constants/modalityBridgeDefaults.ts`. Nochtann an cosantóir rogha
constróid `deps` ionas gur féidir le tástálaithe cur isteach ar `getSettings` bréagach
agus `callVisionModel` a chur i bhfeidhm.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Cuireann sé cosc ar iarratais comhoibrithe guth a shocrú sula sroicheann siad
sprioc nach bhfuil ar eolas a ghlacann ionchur guth. Ní athraíonn sé an
iarratas comhoibrithe: tras-scríobhann na codanna guth trí na pointeanna
multíphart atá comhoiriúnach le OpenAI atá ann cheana agus leanann an múnla comhoibrithe
roghnaithe le tras-scríobhanna téacs.

Sruth:

1. Réitigh `supportsAudio` trí `getResolvedModelCapabilities()`. Buaileann
   sonraí miontuairiscí soláthraí, ansin sonraí múnla staiticiúla, ansin
   `modalities_input` comhoiriúnaithe. Is `false` atá i liosta ionchur a
   deir nach bhfuil `audio`; ní fanann aon fhianaise cumais `null`. Gníomhóidh
   an droichead coimeádach le `false` agus `null`, agus bypassóidh sé le
   `true`.
2. Réitigh socruithe `modalityBridgeAudio*` agus extractáil codanna guth
   barr-leibhéal inchoigeartaithe ó gach teachtaireacht trí na
   `detectMediaParts()` detector comhoibrithe. Is iad na cruthanna sreang a
   tacaítear ná OpenAI `input_audio`, `audio_url`, agus
   `source.media_type: "audio/*"`. Déantar guth neadaithe a bhrath le haghaidh
   bealaigh ach ní baintear é as an mbealach splice. Tá an obair teoranta ag
   `modalityBridgeAudioMaxClips`; fanann codanna níos déanaí gan athrú.
3. Comhlíon socrú `provider/model` a shocraítear, nó lig `selectAudioBridgeModel()`
   siúl tríd an `AUDIO_TRANSCRIPTION_PROVIDERS` i gcruth ord catalog cobhsaí agus
   roghnaigh an chéad mhúnla le creidiúnacht soláthraí gníomhach inúsáidte.
4. Cuireann `callAudioTranscription()` guth base64/data-URI a thiontú go
   `file` multíphart, nó íoslódáil `audio_url` iargúlta trí na cosantóirí
   poiblí amháin le DNS pinning agus teorainn 25 MB. Ansin POSTann sé an comhoibriú
   agus an múnla roghnaithe chuig an féin-loop áitiúil `/v1/audio/transcriptions`,
   a bailítear le `resolveSelfLoopBearer()`. Déanann an bealach tras-scríobh atá ann
   cheana gníomhachtaí gnáth creidiúnachta, láimhseáil cooldown/ráta, agus
   seoladh soláthraí.
5. Athraíonn glao rathúla a gcuid codanna le `[Audio N]: <transcript>`. Ritheann
   glao le `Promise.allSettled`: coimeádtar teip aonair ar an gcodanna guth
   bunaidh (#4012 conradh). Má theipeann ar gach glao agus tá an sprioc cruthaithe
   `supportsAudio === false`, déantar na codanna a
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 conradh). Do
   sprioc nach bhfuil ar eolas (`null`), fanann toradh uile-teip gan athrú. Faigheann
   sprioc téacs amháin cruthaithe le creidiúnacht STT inúsáidte an stubb soiléir
   céanna gan glao líonra a eisiúint.

Úsáideann tras-scríobhanna rathúla an Modality Bridge LRU/TTL cache ar fud an
phróisis. Comhcheanglaíonn an eochair an tagairt guth, an lipéad oibríochta
`audio-transcription` cobhsaí, agus an múnla STT roghnaithe; ní stóráiltear teipeanna
aon uair. Nuashonraíonn iarrachtaí guth na comhoibrithe `bridged`, `cacheHits`,
`failures`, agus `lastUsedAt`. Iarratais a thiontú a iompar
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; ní fhaigheann
iarratais nach bhfuil athraithe aon chuid Audio Bridge.

Tá socruithe rithim bunaithe ar DB agus bailithe le Zod:

| Eochair                       | Réamhshocrú | Raon           |
| ----------------------------- | ----------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`      | —              |
| `modalityBridgeAudioModel`    | `""`        | Auto nó STT ID |
| `modalityBridgeAudioTimeout`  | `60000`     | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`         | 1–10           |

Fanann an cache roinnte faoi smacht ag `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, agus `modalityBridgeCacheMaxEntries`.

### Droichead Físe (`videoBridge.ts`, `videoBridgePipeline.ts`)

Gabhann sé na codanna físe barr-leibhéil i gComhoibrithe Comhoibrithe `messages` agus
Freagraí API `input` sula gcuirtear glao ar sprioc nach bhfuil tacaíocht dhúchasach físe aige.
Is iad na cruthanna tacaíochta `input_video`, `video_url`, `video_source`, URLanna HTTPS,
agus `data:video/*;base64,...` URIanna sonraí. Ní dhéantar comhoibrithe comhoibrithe
a chóireáil mar fhíse.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) a bhainistíonn trasnú iarratais, an
seiceáil cumais/polaiteachta, comhoibriú in aghaidh gach iarratais, agus an
lódáil freagartha. Obair gach físe — faighte, an ccache toradh iomlán, ag cur síos ar
seicheamh fráma (a chomhleáíonn aon trascríobh fuaime a d'fhógair an glao), agus
méid/cur i gcrích/cleanup in aghaidh gach iarracht — atá i bhfolach taobh thiar de
`processVideoPart` i `videoBridgePipeline.ts`, a gcalltar uair amháin in aghaidh
gach codanna físe laistigh de chiorcal `preCall`. Sainmhíníonn an modúl freisin
na teorainneacha port sainmhínithe `VideoMediaBrokerPort` (ag fáil byteanna agus ag
baint amach frámaí sampláilte), `VideoAudioTranscriptionPort` (ag comhtháthú trascríobh
fuaime a d'fhógair an glao leis na gclónna sampláilte), agus `VideoDrilldownPort`
(foirm an stór laige). Déantar STT táirgeachta agus coimeád fráma a chomhoibriú
thart ar an bport a dhéantar cur síos air trí `createVideoSttAdapter` agus
`createVideoDrilldownAdapter`; úsáideann an dara ceann an timthriall láimhseála
opaque roinnte.

Ní thagann an cosán iarratais poiblí `/v1` riamh isteach nó gníomhachtaigh fo-proces.
Tugtar físeanna iargúlta faoi bhun 50 MiB; tá teorainn 36 MiB de réir a chéile ag
físeanna base64 inlíne, ionas go bhféadfadh an múnla/messages/envelope
fócas a choinneáil laistigh de theorainn admhála iarratais JSON poiblí de 50 MiB.
Déantar seiceáladh ar thuarascálacha fad agus méid deichniúil roimh an leithdháileadh.
Éilítear HTTPS ar an URL iargúlta tosaigh agus gach athsheoladh, ag úsáid an
gcosanta poiblí amháin atá ann cheana le DNS pinning. Taistealaíonn na byteanna ansin
trasna an teorainn broker `POST /api/modality-bridge/video/extract` go díreach.
Tá an cosán sin `LOCAL_ONLY` agus `SPAWN_CAPABLE`, glacann sé ach iarratas
údaraithe, muiníneach, ar ais i gcruth, agus ní ghlacann sé riamh URL, cosán
comhoibrithe, comhoibriú, nó liosta argóintí. Cuireann an píblíne méid comhlacht
API agus léitheoir comhlacht méadaithe an láimhseálaí teorainn 50 MiB ar ionchur
an broker. Ritheann a chluais theoranta extraction amháin ag an am, ceadaíonn
ceithre jabanna atá ag fanacht, agus cuireann sé teorainn ar ionchur atá ag fanacht
ag 100 MiB.

Laistigh den broker, léann `ffprobe` comhad áitiúil príobháideach; tá an
liosta foirmiúcháin socraithe ag eisiamh foirmeacha liosta agus comhoibrithe.
Maidir le comhoibrithe MOV-teaghlaigh ceadaithe, fanann tagairtí sonraí MOV
eachtracha díghníomhachtaithe de réir réamhshocraithe, agus ní roghnaíonn an
ordú socraithe iad. Úsáideann `ffprobe` agus `ffmpeg` an liosta ceada
protocola `file`-amháin, snáithe amháin, comhoibrithe socraithe, gan shell,
agus comhoibrithe a réitítear ó `PATH`. Ní bhíonn sruthanna clúdach pictiúr
ceangailte in ann a bheith ina n-iarrthóirí in ann a imirt. Caithfidh gach
sruth in ann a imirt freastal ar na teorainneacha, agus is fearr sruth
sainmhínithe soiléir roimh an íseal-index cinntitheach. Tá físeanna teoranta
do 600 soicind, 8,192 picteilín in aghaidh an diméana, agus 33,554,432 picteilín
foinsí. Samplaíonn FFmpeg 1–16 frámaí JPEG lár, scálaíonn sé síos an
móthúchán fada go 1,024 picteilín ar a mhéad gan ardú ar ionchur níos lú,
agus ní fhaigheann sé riamh URL. Is `uniform` an sampláil de réir réamhshocraithe.
Déantar na polasaithe roghnacha `scene_aware` agus `segment_aware` pas FFmpeg
sócmhainne amháin breise a dhéanamh ar an sruth áitiúil a bhfuil bailíocht
déanta air cheana, roghnaíonn sé amanna `showinfo` teoranta, agus téann sé ar ais
cinntitheach chuig na lár lárnaigh aonfhoirmeacha céanna ar theip ar an
detector, am a chaitheamh, aschur mí-oiriúnach, nó socrú folamh.
Rogha samplála a bhaineann le codanna a leithdháileann samplaí lárnaigh go
proporcional do na hidirbhéil radharc a bhfuil bailíocht déanta orthu; tá
fianaise a bhaineann le codanna agus iompar a théann ar ais leagtha amach thíos.
Cuireann an teorainn 16-fráma crua i bhfeidhm tar éis roghnú i ngach polasaí.
Nuair a bhíonn iarratas a bhaineann le radharc ag baint úsáide as ach buiséad
fráma amháin, úsáideann sé an lár lárnaigh de na físeanna iomlána gníomhacha nó
fuinneog fócas agus tuairiscíonn sé `policyEffective: uniform`: ní féidir
fráma radhairc aonair a choinneáil ar na dá thaobh ama. D'fhéadfadh glao
roghnach fuinneog fócas teoranta a sholáthar (`start`/`end` soicind); tá na
teorainneacha comhoiriúnaithe le fad na meán, cuireadh fuinneoga a chasadh
nó neamh-theoranta ar ceal, agus déantar na polasaithe samplála go léir
laistigh den idirbhéil normalized amháin. Cuimsítear an fuinneog a thagann
as seo i metadata samplála agus i bpríomhchóip neamhiontaofa ionas go bhféadfadh
múnlaí anuas a bheith in ann a dhíothú a bhfuil fócas ar an mionlach ó
an líne iomlán.

Is socrú ar leith, soiléir é fócas ar an gclónna. Coimeádann an mód
anailíse `full` réamhshocrú an phrómpa fráma atá ann cheana agus ní
ghearrann sé téacs iarratais chuig an múnla clónna. I mód `focused`, léann
an droichead ach an `text`/`input_text` is déanaí a scríobh an úsáideoir
nach bhfuil folamh ó chontae Comhoibrithe nó Freagraí, déantar é a normalizeadh
go NFC, a chruasann carachtair rialaithe agus spás, agus a theorannú do 500
pointe cód Unicode. Titeann toradh folamh ar an bprómpa `full` go díreach.
Déantar leideanna inúsáidte a shíniú mar JSON i bbloc neamhiontaofa úsáideora
tiomnaithe agus d'fhéadfadh sé ach sonraí infheicthe a chur chun tosaigh; ní
féidir leis an rabhadh ar leith a bhaineann le treoracha a leanúint a bheith
infheicthe nó inbhéartaigh sa mheán a shárú. Ní dhéanann fócas téacs
`start`/`end` a infheistiú nó a athrú ar an samplála ama.

#### FU-07 fianaise codanna struchtúracha

`segment_aware` úsáideann pas réamh-anailíse teoranta amháin ar an sruth físe áitiúil a bhfuil sé bailí cheana féin. Cuireann an slabhra scagaire socraithe an scála ar a laghad 320 picteilín leathan, faigheann sé athruithe radharc agus eatraimh reoite, ansin samplaíonn sé ag 1 fráma in aghaidh an tsoicind le haghaidh doimhneachta, luma meán, agus eolas spásúil/aimseartha. Tá an pas teoranta do 600 sampla struchtúrach, snáithe FFmpeg/scagaire amháin, an prótacal agus liostaí ceadúnas `file`-amháin, teorann aschur próiseas 1 MiB, agus ar a laghad 30 soicind laistigh de dhroichead an bhróicéir roinnte. Ní ghlacann sé riamh le hordú, scagaire, cosán, nó URL ón iarratas.

Is cruthúnas samplála cinntitheach na luachanna struchtúracha, ní tuiscint físe seimeantach. Ní dhéanann siad tuairimí ar ábhair, gníomhartha, teidil, cainte, nó intinn úsáideora. Cruthaíonn teorainneacha radharc agus reo na codanna; ní dhéanann clúdach reoite, doimhneacht, nochtadh, mionsonraí spásúla, agus athrú ama ach tionchar a imirt ar conas a roinntear an buiséad 1–16 fráma. Tá teorainn ag codanna go hiomlán reoite ar fráma amháin, agus comhoibríonn codanna neamh-reoite ar an mbuiséad atá fágtha. Nuair a bhíonn teorainneacha níos mó ná frámaí, coimeádtar clúdach ama comhoiriúnach ionas nach féidir le gearrthóga luath tapa a cheilt codanna fada trailing. Comhoibríonn teorainneacha radharc laistigh de réiteach anailíse 1-soicind teorainn reoite.

Teipeann ar scagairí atá in easnamh, cruthúnas míchuí/folamh, earráid braiteora, nó an teorann ama réamh-anailíse a theipeann oscailte chuig an bpolasaí lár comhoiriúnach. Ní théann abort gcallaire nó deiridh an bhróicéir oscailte: cuireann sé deireadh leis an subpróiseas atá ar siúl, cuireann sé cosc ar aschur frámaí ina dhiaidh sin, agus baintear an crann príobháideach sealadach i `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` cruthaíonn sé feistí FFmpeg réalaíoch cinntitheach do shábháil ar choinníollacha teidil tar éis dedup, roinnte buiséid gluaiseachta dlúth, cruthúnas doimhneachta/nochtadh/SI-TI, gearrthóga tapa le tail fada, agus bréagchinnteachtaí le fade gasta. Taifeadann sé am balla réamh-anailíse agus, nuair atá `/usr/bin/time` ar fáil, CPU leanaí agus RSS barr. Is oracles struchtúracha amháin atá ina sheiceáil cáilíochta. Fanann cáilíocht an mhúnla teidil `HOLD` mar níl deireadh ceadaithe ag an harness seo nó breitheamh reoite. Fanann sábháil airgid freisin `HOLD` mura sholáthraíonn `--caption-cost-per-call-usd` meastachán dearfach ar leith in aghaidh an gcallaire; ní dhéanann an script aon toradh a chruthú.

Tá gach fráma teoranta do 4 MiB, gach fráma amh le chéile do 23 MiB, agus freagra an bhróicéir serialáilte do 32 MiB. Baintear an comhoibriú príobháideach sealadach i `finally`. Ní chuireann OmniRoute FFmpeg le chéile agus ní ghlacann sé le cosán feidhmeanta saincheaptha. Sula ndéantar teidil, cuireann an droichead pas de-deduplication amhairc coimeádta i bhfeidhm: laghdaítear gach JPEG go bufer grayscale 16×16 agus comparáidítear é ach leis an fráma deireanach a choinnítear. Maidir le buiséad teidil a iarrtar os cionn fráma amháin, soláthraíonn aschur linnte comhoiriúnach suas le dhá uair an buiséad sin agus ní rachaidh sé níos mó ná 16 fráma. Cuireann an teorainn iarrtha i bhfeidhm ach tar éis de-deduplication, le na chéad agus na hiomláine a roghnaítear a chaomhnú le linn an thinning deiridh nuair atá an buiséad ar a laghad dhá. Úsáideann an polasaí `grayscale-16x16-mean-cells-v2` an méid níos mó de luma delta meán agus an cóimheas de chealla thonn a bhfuil a delta normalized ar a laghad 0.05. Is é an leibhéal dúblach an 0.04 seasta, a roghnaíodh le haghaidh tuiscint seachas a bheith nochtaithe mar shocrú ama. Coimeádann an comhartha ard-chontrasta seo gluaiseachtaí beaga agus athruithe téacs infheicthe a d'fhéadfadh comparáid amháin le meán a cheilt. Teipeann ar earráidí comparáideora nó deighilteora oscailte agus coimeádann siad clúdach. Scarann an metadata aschur na hiarrthóirí a asbhaítear, na frámaí a úsáideadh go rathúil, agus na dúblacha amhairc a chaitear.

Féadfaidh cuid físe a marcáil go soiléir iarratas a dhéanamh ar shíntíomhaireacht ama. Tógann an droichead ar a laghad gríd JPEG 4-colún, 16-fráma. Dóitear gach cealla 512-picteilín a timestamp foinsí isteach i band íochtarach ard-chontrasta, agus fanann na timestamps céanna i metadata téacsúil le haghaidh comhoiriúnachta agus iniúchta síos an sruth. Fanann an JPEG iomlán teoranta do 32 MiB. Mura féidir le `sharp` an gríd a dhéantar nó a chomhoibriú, téann an droichead ar ais chuig na frámaí JPEG aonair; leanann abort cliant fós tríd an oibríocht shíntíomhaireacht.

Tá cruthúnas ardaithe go sonrach ar leith ó mhicreabheithis comhoibrithe. Déanann `scripts/perf/video-bridge-contact-sheet-eval.ts` scéim leagan A/B a shainmhíniú do mhúnlaí fís atá comhoiriúnach le OpenAI. Tomhaiseann sé na comhoibrithe a thuairiscítear, moill balla deireadh go deireadh (lena n-áirítear comhoiriúnacht an tsíntíomhaireacht), líon gcallaire múnla, agus coimeád faisnéise a shainmhínítear. Ní scríobhann freagraí múnla amh chuig an tuarascáil; ní coimeádtar ach digests SHA-256 agus IDanna fíoraithe. Ní dhéanann an harness gcallaire líonra nó múnla íoctha mura gcuirtear `--execute-real` agus má tá `--model`, `OMNIROUTE_BASE_URL`, agus `OMNIROUTE_API_KEY` socraithe. Gan an rith réalaíoch sin a shonrú, fanann a breithniú inléite meaisín `HOLD`; ní hé tomhais a bhaineann le lucht a gcallaire/áireamh amháin cruthúnas ardaithe.

Tógann an `scripts/perf/video-bridge-promotion-eval.ts` ar fhíorachtaí FU-07 nó FU-09. Teastaíonn admháil ardaithe ar na hocht gcineál scéimeanna sintéiseacha uile agus clip fíor glan, ar a laghad trí athrá tomhaiste in aghaidh ról agus cás, na deich mholtaí a fógraíodh, digests meán/teagmhála/ionchais/foghlaim reoite, IDanna breathnóireachta uathúla agus ord A/B a fhíorú. Ceanglaíonn an tuairisc feidhme an digest corpus, SHA beacht an iarrthóra agus athbhreithniú múnla. Fanann tomhais atá in easnamh nó míchuí `HOLD`, lena n-áirítear CPU os cionn 30 s, RSS barr os cionn 512 MiB nó réamh-anailís os cionn 30 s. Is iad seo na teorainneacha admhála cruthúnas, ní ráthaíocht nua maidir le hiontráil RSS ama.

FU-07 éilíonn ar a laghad 98% coigeartú cáilíochta agus p95 moill nach bhfuil níos mó ná 1.2x
bunlíne, chomh maith le 0.05 feabhsú ar an meán cuimhneacháin cás-bhalansáilte ag
gcalltaí meán comhoiriúnacha, nó ar a laghad 10% níos lú gcalltaí cuimhneacháin
post-dedup. Éilíonn FU-09 ar a laghad 0.85 cáilíocht, 95% coigeartú, 20% laghdú p95
moille agus 10% laghdú ar na comhoibrithe. Cuireann caillteanas criticiúil-fíric, comhoiriúnacht insteallta nó
úsáid atá in easnamh cosc ar chur chun cinn. Ní féidir le haon fheidhmíocht rud ar bith a chur chun cinn:
`--previous-report` deimhníonn dhá fheidhmíocht shonraithe, neamh-íoctha, atá incháilithe go comhoiriúnach
de réir an pholasaí/múnla athbhreithnithe/ionadaí/corpais céanna. Ní féidir le
turgnamh samplála deimhniú turgnamh leathanach teagmhála.

Ba chóir do chruinnithe scór a thabhairt do fhreagairtí i gcuimhne agus `responseDigest` a shábháil chomh maith le
méid agus ceangail breathnóireachta, riamh téacs freagartha. Léann an tomhaltóir freisin
breathnóireachtaí amh traidisiúnta ach ní chóipeann sé an téacs sin isteach ina thuairiscí. Glactar le
nó amháin de `responseDigest` nó `rawResponseText` do gach breathnóireacht.
Fanann an liosta ceadaithe leaganacha folamh le `hold` mar réamhshocrú neamh-athraithe. Éilíonn
iontráil incháilithe a tagairt fianaise, polasaí, athbhreithniú múnla, SHA ionadaí cruinn, digest manifest agus dhá ID rith shonraithe; cuireadh siar comhoirdh le chéile. Is conradh iniúchta atá sna meiteashonraí seo, ní fianaise go bhfuil comhad tagartha ag cur tomhais fíor. Déan athbhreithniú ar na faighteanna iarbhír sula gcuirtear
aon iontráil leis. Nochtann an pointe deireadh staitisticí bainistíochta agus painéal físe leibhéal coimeádta coimeádta. Ní dhéanann alias múnla socraithe amháin a shocrú a athbhreithniú nó
an SHA ionadaí atá ag rith, mar sin tuairiscíonn an painéal reatha `HOLD` seachas
úsáid a bhaint as incháilitheacht ó chomhthéacs feidhmiúcháin eile. Fanann roghnú turgnamhach soiléir ar leithligh ó chur chun cinn; ní athraítear réamhshocrú go huathoibríoch.

Féadfaidh glaoiteoirí ceangail a dhéanamh le haon `transcript.cues` roghnach do chuid
físe tacaíochta nuair atá téacs comhoiriúnach acu cheana. Caithfidh gach cue `text`, interval `start`/`end` teoranta laistigh den tréimhse a scrúdaítear, agus `source` atá liostaithe (`client`, `embedded`, nó `audio-bridge`); tá `confidence` réamhshocraithe go
`1` agus caithfidh sé fanacht idir `0` agus `1`. Cuireann cúisí dúblacha cruinne le chéile.
Ní thosaíonn OmniRoute trascríobh ó na meiteashonraí seo: cóipeann cúisí bailí isteach sa toradh cur síos le foinse, muinín, agus interval, agus
tá siad á gcur i láthair mar breathnóireachtaí neamhiontaofa in éineacht le gcalltaí an chláir. Cuirtear téacs neamhbhailí, lasmuigh de raon, nó gan foinse ar ceal seachas a mheascadh isteach sa
sruth gcalltaí. Normalizes an dá chainéal trascríobh comhoiriúnach an foinse a sholáthraítear go `client`, lena n-áirítear `embedded` nó `audio-bridge`
glaonna a dhearbhaigh féin. Ní féidir ach oiriúnóir atá ag freastal ar an freastalaí na gclónna iontaofa sin a shannadh trí
an argóint `trustedSource` atá dírithe ar chód amháin; ní féidir le réimse JSON iarratais teacht ar
an argóint sin. Fanann téacs trascríobh mar ábhar neamhiontaofa a tháinig ó na meáin,
neamhspleách ar a foinse, agus níor chóir go gcuirfeadh sé ar fáil údarás.

Féadfaidh glaoiteoir ardleibhéil `audioTranscript` a sholáthar do na físeanna céanna;
tógtar é mar théacs a sholáthraíonn an cliant, ní fianaise ar trascríobh freastalaí.
Ritheann an seam comhoiriúnachta breathnóireachtaí amhairc agus fuaime faoi
duine deiridh agus comhartha abort, ordaíonn siad ar líne ama coiteann, cuireann siad
cúisí dúblacha cruinne le chéile, agus tuairiscíonn siad toradh páirteach nuair a éiríonn le taobh amháin amháin.
Déantar `audioTranscript` neamhbhailí a laghdú go dtí an toradh páirteach sin — coimeádtar an
cur síos amhairc agus taifeadann an craobh fuaime cód teip shanitithe —
seachas teip a chur ar an bhfíseán iomlán. Fanann infhaighteacht gach craobh, an bratach páirteach,
agus na cóid teip shanitithe i gcuimhne sa toradh cur síos, sna
meiteashonraí cosanta (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), i meiteashonraí an chache toradh, agus i gcomhoiriúnachtaí comhoiriúnachta. Ní ghníomhaíonn an cosán Réimse Físe Réamhshocrú guth-go- téacs
nó íoslódáil cóip meán dara; gan an trascríobh soiléir sin, fanann sé
físe amháin.

**Coigeartú trascríobh (#12150 P1).** Cuireann sé seo i bhfeidhm go huathoibríoch nuair a
gineann an Droichead Físe (féin opt-in) cue trascríobh — níl aon bratach coigeartú ar leith. Nuair a gineann iarratas aon cue trascríobh (a
dhearbhaigh glaoiteoir `transcript` nó `audioTranscript` comhoiriúnaithe), marcann an cosantóir é
`videoBridgeObserved` agus táirgeann sé scáth redacted de chur síos an fhíse —
tá sé mar an gcéanna ina gcuirtear comhoiriúnacht gach cue ar an gcomhoiriúnacht téacs saor in aisce le
`[redacted-video-transcript]`, a tógadh trí chur in ionad an réimse cue struchtúrtha
sula gcuirtear an sreang le chéile (ní trí pharsáil an téacs flattened, mar sin ní féidir aon ábhar cue —
comhoiriúnach nó gnáth, lena n-áirítear comhoiriúnachtaí a bhfuil `]` acu mar
`[inaudible]`/`[music]` — a mhaireann). Athraíonn an comhoiriúnacht a shábháil
gach cuid téacs a tháinig ó na físeanna don scáth redacted sin, comhoiriúnaithe de réir comhoiriúnachta
comhoiriúnachta; athléirítear an t-anchóir `fullText` ó na comhoiriúnachtaí cosanta réamhchóirithe, mar sin fanann an comhoiriúnacht ag éirí tar éis cosantóirí slabhra níos déanaí (na maskers PII agus creidiúnachta, tosaíochtaí 10/95) a scríobhann an téacs cur síos in áit agus
tar éis gníomhartha cuidiú/aistriúcháin/insteallta cuimhne a athshainíonn an comhoiriúnacht teachtaireachta. Fanann an comhoiriúnacht a sheoltar suas chuig an múnla mar atá. Ligeann iarratas breathnóireachta freisin
níl aon Cuimhne buan (tá an t-eisiúint a tháinig ó iarratais agus freagairtí araon
easnamhach), mar sin ní féidir freagra féin an múnla trascríobh téacs a chur ar ais i gCuimhne.

**Réimsí físe amh (#12430).** Nuair atá an droichead gníomhach agus nach bhfuil tacaíocht físe dúchasach ar eolas nó ar fáil, gníomhachtar réimsí `transcript`/`audioTranscript` freisin `videoBridgeObserved`, fiú tar éis teip cur síos nó teorainn `maxVideos`. Comhoiriúnachtaí `null` agus sreangáin folamh; ní áireamhann réimsí atá in easnamh agus meiteashonraí neamh-físe. Cuireann cóipeanna coimeádta na réimsí seo ar ceal nó
cuirtear an t-iarratas as an áireamh, agus déantar cásanna/ Cuimhne a shárú. Fanann an t-íoschóip soláthraithe mar atá.

### Cóip bhreise atá coimeádta

Úsáideann cóip bhreise atá coimeádta an comhartha iarratais atá feicthe. Athraíonn an snapshot iarratais cliant réamh-gharda, an iarratas atá le cur i gcrích atá i gcuimhne, agus an log iarratais a diúltaíodh go luath na réimsí trascríobh i gcuidí físe; déantar na comhoibrithe téacs a shintéisiú ag céimeanna an phíobáin agus déantar iad a scriosadh ag an gcuan coimeádta iarratais. Déanann an marcóir `video_content_removed` a chinntiú go n-éireoidh le leanúint `previous_response_id` a bheith dúnta seachas téacs a aththógáil a cuireadh ar ceal go diongbháilte. Má chailleann iarratas atá feicthe a scáth diúltaithe in aghaidh gach cuid sula ndéantar logáil, nó fiú má theipeann ar cheann de na scáthanna físe a comhoiriúnú tar éis athruithe ar iarratais níos déanaí, cuireadh an corp iarratais coimeádta as an áireamh go hiomlán seachas coimeád a dhéanamh ar trascríobh páirteach a diúltaíodh.

### Freagra samhail

Maidir le hiarratas atá feicthe, d'fhéadfadh freagra samhail aon chuid den trascríobh a lua gan teorainn struchtúrach. Mar sin, cuireadh an `responseBody` log gcall a choimeádta in ionad marcóir as. Ní coimeádtar an t-ealaín phíobáin mionsonraithe (a d'fhéadfadh comhoibrithe suas/cliant agus píosaí sruth a áireamh). Déanann na cachaí seimeantacha, idempotency, agus ath-imirt réasúnaíochta léamh agus scríobh a sheachaint don iarratas sin. Fanann iarratas an soláthraí agus freagra infheicthe don chliant gan athrú. Déantar na byteanna keepalive luatha a dhraenáil ón mbufair shealadach nuair a dhéantar an t-ealaín mionsonraithe a scriosadh. Tuairiscíonn rabhadh EventStream mífhoirméad Kiro ach an comhoibriú byte a bhí ann, riamh a ábhar nó earráid amh an parseora JSON.

### Cúram laige

Ní éilíonn sé go ndearnadh iniúchadh ar gach diagnóis soláthraí/plugin nach bhfuil gaolmhar; tá an sweep coimeádta níos leithne rianaithe i #11658.

### Timthriall /api/modality-bridge/video/drilldown

Is bunús cache ar leith é timthriall `/api/modality-bridge/video/drilldown`, atá comhoiriúnaithe le loopback/token. Éilíonn gach oibríocht ID prionsabal opaca caighdeánach. Sula gcuirtear glao táirge ar fáil, caithfidh sé an ID sin a bhaint as an gconradh aitheanta agus ní mór dó riamh luach a roghnaíodh ag an gcliant a chur ar aghaidh. Ceanglaíonn eochracha cache an prionsabal sin le seisiúin caighdeánacha agus IDanna tagartha físe, stóráil ach a eochracha a derived ó SHA-256, agus scóipíonn sé léamha agus scriosadh don prionsabal céanna. Stórálann an cache ar a mhéad 16 fráma JPEG a derived in aghaidh an iontrála, a chailleann iad tar éis deich nóiméad, agus tacaíonn sé le léamha `start`/`end` teoranta nó scriosadh seisiúin soiléir.

### Teorainneacha prionsabal

Tá gach prionsabal teoranta do 16 iontráil agus 64 MiB de shonraí JPEG caighdeánacha. Níl na teorainneacha sin neamhspleácha ón gcuibhreacha domhanda 64-iontráil/256 MiB: brú cota prionsabal a dhíothóidh ach iontrálacha is lú a úsáidtear le déanaí an prionsabal sin sula gcuirtear san áireamh díothú LRU domhanda. Déantar iontrálacha a chailleadh ó chuntais an phrionsabail agus an domhain ar ghníomhaíocht an chache, agus ní dhéanann cealadh agus teip bailíocht a chur ar iontráil páirteach.

### Glacadh le hiontrálacha

Ní ghlacann an cache le Base64 neamhchaighdeánach, padding iomarcach, meáin neamh-JPEG, JPEG mífhoirméad nó gearrtha, agus JPEGanna a dhéanann rabhadh le linn deighleog `sharp` íomhá iomlán teoranta. Athchóirithear gach íomhá a ghlactar mar JPEG caighdeánach, faightear leathan agus airde ó na byteanna a dhéantar deighleog seachas muinín a bheith ag na réimsí glao, agus cuireadh aon byteanna polyglot a thagann ar deireadh as seachas iad a choinneáil. Ní hionann ach an bufer comhoiriúnach caighdeánach comhoiriúnach a ghearrtar ar an dá chota. Áirítear ar theorainn sreang JSON an t-uas-ardú Base64 don 32 MiB de ch nótaí a dhéantar. Gach
derivation stóráilte a thaifeadann a bhformáid JPEG bailí/roghanna, polasaí samplála, leagan derivation, am cruthaithe, hash ábhar a ríomhaítear ag an freastalaí, agus hash tagartha tuismitheora a chinnteoidh an glao a chinnteoidh. Déantar cealadh a sheiceáil idir céimeanna deighleog/hash asynchrónach sula gcuirtear an cache comhoiriúnach.

### Athúsáid frámaí

Athúsáidíonn an táirge táirgeoirí frámaí brocaire a dhéantar cheana féin ach amháin tar éis anailís fhíse rathúil, gan aon íoslódáil/aistriú físe eile. Éilíonn sé `modalityBridgeVideoDrilldownEnabled=true`, `drilldown: true` do gach cuid, agus ID taifead API aitheanta. Ní shocróidh luachanna prionsabal/seisiúin a dhlúthófar ag an gcliant riamh úinéireacht. Gan na trí choinníoll sin, ní dhéanann sé hash, athmhúnlú ná coimeád frámaí breise. Coimeád teip a chaomhnóidh an freagra amhairc inúsáidte. Seachnaíonn iarratais aontaithe an cache toradh físe iomlán ionas nach gcuirtear toradh a coimeádtar ar ais.

### Freagraí JSON agus SSE

Nochtann freagraí JSON agus SSE rathúla ar a mhéad ceithre láimhseáil opaca sa chloigín teoranta `x-omniroute-video-drilldown`. Is féidir le bunúsanna brabhsála údaraithe an cló a léamh gan an polasaí bunús CORS a leathnú. Úsáideann láimhseálacha nua `v1.<32-byte random base64url token>`, agus coimeádann an clár ach a SHA-256 hashes. Glacann an léitheoir/an parseora cló le 64-hex láimhseálacha sean. Is é an tomhaltóir poiblí aitheanta `GET /api/v1/video-bridge/drilldown?handle=...`, atá faoi ghlas go neamhspleách ag `modalityBridgeVideoDrilldownRemoteEnabled=true`. Cuireann briseadh aontaithe soiléir rochtain ar ceal fiú nuair a bhíonn an `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env
fallback gníomhach. Tá an coimeád táirgeachta ag an gcoimeád sean `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Tá an dá fallback as gníomh mar ghnáth.

### Úinéireacht

Baineann an tomhaltóir úinéireacht as an eochair aitheanta, cuireann sé polasaí eochair i bhfeidhm, agus tugann sé an 404 céanna do láimhseálacha nach bhfuil ar eolas, atá in éag agus atá ag eochair eile. Glacann sé le `variant=preview|standard|detail` (toisí JPEG uasta 320/640/1280, riamh suascláraithe), `limit=1..8` (nó an alias sean `frames`, riamh ní beirt), `page` bunúsach, agus sochair `start`/`end` soicind. Cuireann eochracha ceiste dúblacha agus fuinneoga fócas a mhalartú as. Tá hash ag gach leagan a d'fhill a ábhar fíor agus mionsonraí réitigh, nasctha leis an gcuan coimeádta. Déantar leaganacha a bhaint ar léamh seachas a stóráil mar chóip coimeádta breise. Tá an freagra JSON, lena n-áirítear Base64/envelope, teoranta do 32 MiB; cuireann leathanach ró-mhór 413 ar ais agus caithfidh an cliant iarratas a dhéanamh ar níos lú frámaí. Déanann léamha seiceáil cealadh timpeall gach athmhúnlú agus seiceáil ar bhailíocht láimhseála sula gcuirtear ar ais. Is idempotent é `DELETE` ag úinéir; scaoiltear an cuan coimeádta agus an cuntas úsáide nuair a scriostar nó a éagann TTL.

Tá an siopa comhoibritheach áitiúil don phróiseas: éiríonn láimhseachtaí as arís agus ní féidir iad a aistriú idir próisis OmniRoute neamhspleácha. Nochtann na staitisticí bainistíochta polasaí coimeádta/cianda éifeachtach agus comhoibríonn iontrálacha/byteanna coimeádta amháin, riamh na meáin, tagairtí, IDanna príomh nó láimhseachtaí. Taispeánann painéal na socruithe Video na luachanna sin agus is féidir leis an dá chasadh comhoibrithe a choinneáil. Ní hé seo an doiciméadú cur i bhfeidhm a bhaineann le deployment beo nó le fógraíocht; rianítear glacadh an mhúnla fíor go neamhspleách.

Tugtar teidil ar na frámaí go seicheamhach leis an múnla Video atá cumraithe. Oidhreacht folamh Video an socrú Vision; má tá an dá cheann folamh, roghnaíonn an auto-router Vision an múnla atá in ann radharc éifeachtach. Cuireann teidil rathúla an chuid bhunaidh in ionad le réamhfhocal cobhsaí `[Video description:` a chuireann marc ar an téacs mar breathnóireacht a tháinig ó na meáin nach bhfuil muinín ann agus a deir le múnlaí anuas gan na treoracha a fháil i láthair na meán. Áirítear ar eochracha cache teidil fráma JPEG na byteanna, an t-iarratas, an t-am, agus an múnla éifeachtach; ní stóráiltear ach teidil rathúla. Coinníonn iontrálacha cache an múnla táirgeora rathúil, lena n-áirítear múnla cúnta; tuairiscíonn an droichead `mixed` nuair a tháinig frámaí éagsúla ó mhúnlaí éagsúla. Úsáideann buille ccache an t-aithint táirgeora sin in ionad é a athainmniú mar an plean routing a iarradh. Tá an ccache toradh ar an bhfíseán iomlán bunaithe ar gach ionchur a athraíonn an toradh — iarratas, múnla éifeachtach, polasaí samplála, comhoibriú fráma, mód anailíse sémantach, an fingerprint SHA-256 de na comhoiriúnachtaí gnáthaithe, fuinneog fócas, `transcript`, `audioTranscript`, agus an bratach ghréasáin teagmhála — mar sin tá athrú ar aon cheann de na dimenzíona sin ina chaillteanas ccache, riamh athúsáid seanfhíseán. Tá leagan, leibhéal, agus comhoibriú fráma teoranta polasaí dedup visual le feiceáil go soiléir sa eochair ccache toradh agus sa mheitheal; mar sin ní féidir le hathrú polasaí seanfhíseán a athúsáid. Coinníonn mheitheal ccache toradh v4 an mód agus an fingerprint, riamh an tasc úsáideora amh. Tuairiscíonn mheitheal garda an dá mhód anailíse a iarradh agus a éifeachtach; tuairiscítear mód `focused` a iarradh gan téacs úsáideora inúsáidte mar `full` go héifeachtach.

Tógann an garda gach cuid físeán tacaíochta ach ní dhéanann sé cur síos ar níos mó ná `modalityBridgeVideoMaxVideos`. Maidir le sprioc a bhfuil `supportsVideo === false`, éiríonn físeáin theipte agus os cionn teorainneacha mar mharcóirí téacs sábháilte, mar sin ní maireann físeán amh. Nuair atá an cumas anaithnid, fanann na codanna sin neamhghníomhaithe. Bypasses na spriocanna le `supportsVideo === true` an droichead. Leathnaíonn an comhartha gníomhachtaithe iarratais cliant tríd an íoslódáil, an gnáthchórais bróicéir, fo-chórais, agus glaonna teidil; stopann na gníomhachtaí idir físeáin agus ní theipeann siad riamh ar na meáin amh.

Tá na socruithe runtime bunaithe ar DB agus bailí le Zod:

| Eochair                             | Réamhshocrú | Raon / iompar                                                                                                                 |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Optional runtime, opt-in                                                                                                      |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | Coimeádann `full` teidil ginearálta; úsáideann `focused` comhoibriú teoranta, neamhiontaofa le comhoibriú úsáideora is déanaí |
| `modalityBridgeVideoModel`          | `""`        | Oidhreacht an mhúnla Bridge Vision                                                                                            |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                          |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, nó `segment_aware` comhoiriúnach; teipeanna braiteora a thagann ar ais go `uniform`                 |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                           |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                                |

Tá luachanna timeout Video a chaomhnófar ó na laethanta atá os cionn 120 soicind comhoibrithe le teorainn an bhróicéir; cuireadh cosc ar shocrú nua a scríobh os cionn an teorainn sin. Éilíonn `GET /api/modality-bridge/video/runtime` áitiúlacht muiníne a bhfuil stampáilte ar ais sula ndéantar bailíochtú nó próbáil runtime, ansin éilíonn sé bailíochtú bainistíochta. Taispeánann sé ach `available`, leaganacha FFmpeg/ffprobe glan, agus cúis shocraithe nuair nach bhfuil an runtime ar fáil. Ní hé an pointe extraction inmheánach API uaslódála poiblí: cuireann sásamh an gnáthchórais `503` le `Retry-After`, cuireann disconneacht an gcallaire `499`, agus cuireann an teorainn shocraithe bróicéir `504`. Cuireann freagraí aistrithe `video->text;model=<visionModel>;parts=<videos>` leis an gceannlínte lárnach `x-omniroute-modality-bridge` gan Vision nó Audio a bhaint.

### PII Masker (`piiMasker.ts`)

Oibríonn sé ar **an dá** chéim.

- **`preCall`** a dhéanann cóip den phacáiste, siúlann sé `system`, `messages`, `input`, agus `prompt` (lena n-áirítear míreanna sreang gnáth), agus cuireann sé i bhfeidhm `processPII()` (ó `@/shared/utils/inputSanitizer`) ar na réimsí téacs `content`/`text`. Nuair atá `PII_REDACTION_ENABLED=true`, déantar PII a bhrú ar ais sa phacáiste amach. Tá sé neamhspleách ar `INPUT_SANITIZER_MODE` (a rialaíonn ach polasaí ionchur-prompts). Nuair atá an bhrú ar ais as, coimeádann an glao comhoiriúnachtaí na comhoiriúnachtaí gan ábhar a athscríobh.
- **`postCall`** a dhéanann cóip dhomhain den fhreagra, rith `sanitizePIIResponse()` agus an masker cruth-API na freagraí (`maskResponsesOutput` — clúdaíonn sé `output_text` agus `output[].content[].text`). Má tharlaíonn aon bhrú ar ais, cuireann an freagra modified an t-údarás bunaidh in ionad.

Ní dhéanann an garda bac; ní dhéanann sé ach miontuairisc (`meta.detections`, `meta.redacted`) nó athscríobh.

### Prompt Injection (`promptInjection.ts`)

Detects struchtúir frithsheasmhacha i gcontéine a sholáthraíonn an úsáideoir agus forordaíonn an polasaí a chumadh. Tá iompar tiomáinte ag comhoibrithe timpeallachta agus roghanna conraitheora:

| Socrú            | Comhoibriú timpeallachta                                                                             | Réamhshocrú | Éifeacht                                                                                                                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gníomhachtaithe  | `INPUT_SANITIZER_ENABLED`                                                                            | `true`      | Nuair atá sé `false`, cuireann an guardrail gníomh ar ceal.                                                                                                                                                   |
| Mód              | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`      | Polasaí insteallta: `block`, `warn`, nó `log`. (Tacaítear `redact` le haghaidh comhoiriúnachta ach ní dhéanann sé **ní** a bhaint as an téacs insteallta; rialtar athscríobh PII ag `PII_REDACTION_ENABLED`.) |
| Teorainn blocála | `blockThreshold` rogha / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`      | Ísealchaighdeán is gá chun blocáil a dhéanamh. Is éigeandáil amháin a bhíonn ag faire ar an meán.                                                                                                             |

**Tosaíocht mód** (`getMode`): glaoiteoir `options.mode` →
`INJECTION_GUARD_MODE` **gníomhachtú gné DB** (Dashboard → Socruithe →
Gnéithe) → `INJECTION_GUARD_MODE` comhoibriú → `INPUT_SANITIZER_MODE` comhoibriú →
`warn`. Mar sin, tá gníomhachtú ar an dashboard níos láidre ná na comhoibrithe timpeallachta, mar sin rialíonn an UI Gnéithe an guard beo (gan aththosú). Tá an léamh DB sábháilte ó thaobh teipe: má tharlaíonn earráid, téann an guard ar ais chuig an iompar bunaithe ar na comhoibrithe timpeallachta, agus nuair nach bhfuil gníomhachtú socraithe, tá an iompar comhoiriúnach le réiteach bunaithe ar na comhoibrithe timpeallachta.

Foinsí braite:

1. `sanitizeRequest()` ó `@/shared/utils/inputSanitizer` (sraith braiteora comhoibrithe a úsáidtear in áiteanna eile sa phíblíne).
2. `DEFAULT_GUARD_PATTERNS` atá comhoiriúnach (faoi láthair `system_override_inline` agus `markdown_system_block`, an dá cheann le déine `high`).
3. `customPatterns` roghnach a cuireadh isteach trí roghanna conraitheora (sraitheanna, regex, nó `{ name, pattern, severity }` taifid).

Nuair atá `mode === "block"` **agus** go bhfuil ar a laghad braite amháin ag comhlíonadh an teorainn déine, cuireann `preCall` ar ais `{ block: true, message: "Request rejected: suspicious content detected" }`. I módanna `warn`/`log` logálann an guardrail ach ceadaíonn an glao. Tá an cabhair comhoibrithe `evaluatePromptInjection()` ar fáil freisin do na glaoiteoirí a theastaíonn uathu chun luachanna a mheas gan dul tríd an gclár.

**Scan bound (v3.8.20):** ní dhéanann an braiteoir ach iniúchadh ar an **16 KB** **ar dtús** de théacs luacha comhoibrithe — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) i `src/shared/utils/inputSanitizer.ts`. Déanann `detectInjection()` agus `evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` sula rithtear an timthriall patrún. Suíonn treoracha insteallta in aice leis an mbarr de ionchur, mar sin cuireann sé teorainn ar CPU/GC regex ar phacáistí il-hundred-KB gan laige a chur ar an mbrat (cf. #3932, #4041).

### Masker Creidiúnachta (`credentialMasker.ts`)

Oibríonn sé ar **an dá** chéim, deiridh sa shlabhra réamhshocraithe (tosaíocht `95`). Déanann sé redaction ar phatrúin eochair API / tocan rúnda a bhfuil aithne orthu ó na pacáistí amach (ábhar teachtaireachta, argóintí glao uirlis, torthaí uirlis) **agus** freagra an soláthraí, mar sin ní scaoiltear creidiúnacht a cuireadh isteach i luach (nó a dhoirteadh ar ais ag torthaí uirlis) chuig an soláthraí sruthlínte nó ar ais chuig an gcliant.

- **Opt-in amháin**, an comhoibriú céanna le redaction PII (Riail Chrua #20-leanúnach):
  díghníomhachtaithe mura bhfuil `settings.credentialRedactionEnabled === true` **nó**
  `CREDENTIAL_REDACTION_ENABLED=true`. Leis sin as, tá an guardrail mar no-op —
  ní dhéanann sé blocáil riamh agus ní dhéanann sé athscríobh riamh.
- Déanann `redactCredentials()` siúl ar an gcrann iomlán pacáiste/freagra (`walkValue()`,
  sábháilte ó thruailliú protótype, sábháilte ó chiorcail trí `WeakSet`) agus cuireann sé comhoiriúnachtaí in ionad le
  leagan [REDACTED:<type>], ag clónáil ach na craobhacha a d'athraigh i ndáiríre.
- Clúdaíonn `CREDENTIAL_PATTERNS` eochracha soláthraithe LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tocan VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), eochracha íocaíochta (Stripe, Square), eochracha scamall (eochair rochtana AWS, Twilio, SendGrid, Mailgun), eochracha príobháideacha / JWTanna,
  sreanganna ceangail a bhfuil creidiúnachtaí acu (`mongodb://user:pass@...`, srl.), agus
  patrún ginearálta `Authorization`/`x-api-key`/`api-key`/`apikey` luach ceanntásc.
- Ní dhéanann an guardrail blocáil riamh; ní dhéanann sé ach athscríobh (`modifiedPayload` /
  `modifiedResponse`) agus comhoiriúnachtaí (`meta.credentialsRedacted`, `meta.count`).

Guard frith-athraithe: `tests/unit/credential-masker-guardrail.test.ts`.

## Conradh Bunúsach (`base.ts`)

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
  block?: boolean; // cuireann true an slabhra ar stop
  message?: string; // taispeántar nuair a bhíonn blocáil
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // a dhoirteadh ag preCall chun an iarratas a athscríobh
  modifiedResponse?: TValue; // a dhoirteadh ag postCall chun an freagra a athscríobh
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

Tugann guardrail "gan athrú" le tuiscint trí `void`, `{}`, nó
`{ block: false }` a thabhairt ar ais. Cuireann a bheith ag tabhairt `modifiedPayload`/`modifiedResponse` in ionad
an luach a shreabhann tríd an slabhra do guardrails anuas.
`signal?: AbortSignal` a thógann saol an gcallaire isteach i guardrails. Is é an t-aistriú iarratais an eisceacht fail-open a bhí beartaithe: stopann na droichid meán oibriú agus glanann siad suas gan an meán amh a chur ar ais chuig sprioc a bhfuil a fhios nach dtacaíonn sé leis.

## Clárlann (`registry.ts`)

Nochtann an t-aonán `guardrailRegistry`:

- `register(guardrail)` — cuireann sé garda-ráille leis (nó cuireann sé ceann eile ina áit de réir ainm normalaithe) agus ath-shórtálann sé de réir `priority` ardaitheach.
- `clear()` / `list()` — cúntóirí riaracháin.
- `runPreCallHooks(payload, context)` — déanann sé athrá ar gharda-ráillí gníomhacha, snáitheann sé an t-ualach tríd an `modifiedPayload`, agus stopann sé ar an gcéad `block: true`.
- `runPostCallHooks(response, context)` — an sreabhadh céanna ar thaobh an fhreagra.
- `resetGuardrailsForTests({ registerDefaults })` — glanann sé an staid agus, go roghnach, athchláraíonn sé na réamhshocruithe le haghaidh aonrú tástála glan.

Tugann an dá reathaí `{ blocked, payload|response, results, guardrail?, message? }` ar ais, áit a bhfuil `results` ina eagar de thaifid `GuardrailExecutionResult` a chuimsíonn réimsí `blocked`, `skipped`, `modified`, `error`, agus `meta` in aghaidh an gharda-ráille, atá úsáideach le haghaidh rianú.

### Garda-ráillí a Dhíchumasú in aghaidh an Iarratais

Déanann `resolveDisabledGuardrails({ apiKeyInfo, body, headers })` liosta dí-dhúbailte d'ainmneacha garda-ráillí a bhailiú ar cheart iad a scipeáil don iarratas reatha. Foinsí (gach ceann roghnach, gach ceann cumaiscthe):

- `apiKeyInfo.disabledGuardrails`
- Comhlacht iarratais `disabledGuardrails` (barrleibhéal)
- Comhlacht iarratais `metadata.disabledGuardrails`
- Ceanntásc `x-omniroute-disabled-guardrails` (nó an ceann oidhreachta `x-disabled-guardrails`)

Féadfaidh na luachanna a bheith ina n-eagar teaghrán nó ina dteaghrán scartha le camóg; déantar ainmneacha a normalú go cás íochtair kebab-case (`pii_masker` → `pii-masker`). Cuirtear an toradh tríd an `context.disabledGuardrails` chuig an gclárlann, a scipeálann garda-ráillí meaitseála (`skipped: true` i `results`).

## Ord Feidhmithe

Maidir le gach iarratas a théann trí `src/sse/handlers/chat.ts` agus
`open-sse/handlers/chatCore.ts`:

1.  Tógann `resolveDisabledGuardrails(...)` an liosta scipeála ón eochair API, ón gcorp,
    agus ó na ceanntásca.
2.  Ritheann `guardrailRegistry.runPreCallHooks(body, ctx)` na ráillí cosanta in ord tosaíochta ardaitheach:
    - Déantar ráillí cosanta díchumasaithe a thaifeadadh mar `skipped`.
    - Féadfaidh `preCall` gach ráille cosanta an t-ualach pá a athscríobh trí `modifiedPayload`.
    - Gearrann an chéad `block: true` an slabhra agus cuireann an láimhseálaí freagra diúltaithe ráille cosanta ar ais.
3.  Sreabhann an t-ualach pá (a d'fhéadfadh a bheith athscríofa) isteach i ródú teaglama agus i seoladh in aghaidh an tsrutha.
4.  Tar éis an freagra a chur le chéile, ritheann `guardrailRegistry.runPostCallHooks(...)`
    an slabhra céanna ar an bhfreagra. Scaoileann `block: true` an freagra in aghaidh an tsrutha anseo.

Déantar ráillí cosanta a chaitheann earráid a thaifeadadh le `error: <message>` agus a logáil trí
`logger.warn`, ach leanann an slabhra ar aghaidh — teip-oscailte de réir dearaidh.

## Cumraíocht

Athróga comhshaoil a léann na ráillí cosanta ionsuite:

| Variable                              | Used by                   | Effect                                                                                                          |
| :------------------------------------ | :------------------------ | :-------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Socraigh `false` chun braite a dhíchumasú go hiomlán.                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Beartas insteallta: `warn`, `block`, nó `log`. Ní athscríobhann an luach oidhreachta `redact` téacs insteallta. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Mód don gharda insteallta; bratach gné DB freisin a **sháraíonn** na hathróga comhshaoil (DB > ENV).            |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Íos-déine a dhiúltaíonn `MODE=block`: `high` (réamhshocrú), `medium`, nó `low`.                                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Ailias oidhreachta do `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                        |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Nuair atá `true`, déantar PII an iarratais a eagrú (neamhspleách ar mhodh insteallta).                          |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Rialaíonn sé iompar an mhascóra ar thaobh an fhreagra.                                                          |

Léann ráillí cosanta an Modality Bridge cumraíocht reatha ón stór socruithe atá bunaithe ar DB
(`getSettings()`), ní ó athróga comhshaoil. Is iad príomheochracha Vision ná
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, agus
`modalityBridgeCacheMaxEntries`. Ní ghlactar leis na heochracha oidhreachta
`visionBridge*` ach amháin mar an t-aischur léitheoireachta aon-timthriallta
doiciméadaithe; úsáideann scríbhinní painéil na príomheochracha. Tá na réamhshocruithe agus an
réiteoir aischuir lonnaithe i `src/shared/constants/modalityBridgeDefaults.ts`, le
tairisigh oidhreachta coinnithe i `src/shared/constants/visionBridgeDefaults.ts`.

Úsáideann Fuaime `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, agus `modalityBridgeAudioMaxClips`, chomh maith leis na socruithe
comhroinnte `modalityBridgeCache*`. Níl aon aischur eochrach oidhreachta ag Fuaime toisc gur
tugadh na heochracha seo isteach le scéimre an Modality Bridge.

Úsáideann Físeán `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, agus
`modalityBridgeVideoTimeout`, chomh maith leis na socruithe comhroinnte `modalityBridgeCache*`.
Tá sé díchumasaithe de réir réamhshocraithe toisc gur spleáchais oibríochtúla roghnacha iad
FFmpeg/ffprobe agus go gcuireann fotheidealú fráma moill agus costas samhail leis.

## Cosaintí Saincheaptha

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

Céimeanna:

1.  Cruthaigh `src/lib/guardrails/myGuardrail.ts` ag leathnú `BaseGuardrail`.
2.  Cuir `preCall` agus/nó `postCall` i bhfeidhm.
3.  Cláraigh ag am iompórtála (brúigh ó `registerDefaultGuardrails`) nó glaoigh ar `guardrailRegistry.register(...)` ag am rite — cuirfidh an clárlann aon chosaint roimhe seo leis an ainm normalaithe céanna in ionad.
4.  Cuir tástálacha leis faoi `tests/unit/` (samplaí atá ann cheana:
    `tests/unit/guardrails-registry.test.ts`,
    `tests/unit/prompt-injection-guard.test.ts`,
    `tests/unit/guardrails/visionBridge.test.ts`).

## Tástáil

Úsáid `resetGuardrailsForTests()` idir tástálacha chun tús a chur le staid aitheanta. Cuir `{ registerDefaults: false }` ar aghaidh chun tús a chur le clárlann fholamh agus chun na cosaintí atá á dtástáil amháin a chlárú. Glacann Vision Bridge le hinstealladh spleáchais (`deps.getSettings`, `deps.callVisionModel`); nochtann Audio Bridge na hailt chomhionanna le haghaidh socruithe, cumais, roghnú samhail STT, seiceálacha dintiúir, agus trascríobh. Is féidir le tástálacha an dá shreabhadh a fheidhmiú dá bhrí sin gan rochtain ar DB nó ar líonra.

## Féach Freisin

- `src/lib/guardrails/` — cur i bhfeidhm
- `src/shared/utils/inputSanitizer.ts` — brathadóir comhroinnte a chumhachtaíonn instealladh pras agus mascáil PII
- `src/shared/constants/visionBridgeDefaults.ts` — réamhshocruithe Vision Bridge agus liosta samhlacha droichid éigeantacha
- `src/shared/constants/modalityBridgeDefaults.ts` — réamhshocruithe comhroinnte ama rite Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ciseal ortagánach (scoradán ciorcaid, fuarú)
- `docs/reference/ENVIRONMENT.md` — tagairt iomlán do athróga comhshaoil

## Clúdach bealaigh cosanta insteallta & foireann dhearg (Céim 8 · Bloc D)

Clúdaíonn an cosantóir insteallta (`createInjectionGuard` / `withInjectionGuard`) gach bealach a ghlacann le prasanna úsáideora. Tugann sé ómós do `INJECTION_GUARD_MODE` (réamhshocrú `warn` = logáil amháin; `block` = seolann sé ar ais HTTP 400 `SECURITY_001`).

| Cineál                 | Bealaí                                                                                                                                               | Mód réamhshocraithe |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Téacs (atá ann cheana) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Giniúnach              | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Sonraí                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

Clúdaíonn eastóscadh téacs (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Foireann dhearg (oíche, `nightly-llm-security.yml`):** fíoraíonn promptfoo go gcuireann gach bealach bac ar an gcorp OWASP-LLM i `INJECTION_GUARD_MODE=block`; ritheann garak taiscéalaithe (scipeann sé gan rún). Cuirtear `moderations` san áireamh ar mhaithe le comhsheasmhacht — is féidir le hoibreoirí i mód bloc é a dhíolmhú trí `resolveDisabledGuardrails`.

Tá dhá phost ag an sreabhadh oibre oíche (`.github/workflows/nightly-llm-security.yml`, cron + seoladh láimhe):

- **`promptfoo-guard` (blocáil)** — ritheann sé `promptfoo eval -c promptfooconfig.yaml` le `INJECTION_GUARD_MODE=block`. Dearbhaíonn gach cás frithsheasmhach (m.sh. "déan neamhaird de gach treoir roimhe seo…", jailbreaks stíl DAN) go bhfuil `error.code === "SECURITY_001"` sa fhreagra, i.e. gur dhiúltaigh an cosantóir an t-iarratas i ndáiríre.
- **`garak` (comhairleach)** — ritheann sé garak `--probes promptinject,dan,leakreplay` i gcoinne cás áitiúil OmniRoute (`http://localhost:20128/v1`). Geataithe ar rún soláthraí (`PROMPTFOO_PROVIDER_KEY`); scipeann sé go galánta agus tá an iarmhír `|| true` leis, ionas go dtuairiscíonn sé gan teip CI.

Clúdaíonn clúdach an chúntóra cosanta (`createInjectionGuard` / `withInjectionGuard`) gach bealach `/v1` a iompraíonn prasanna; tarraingítear téacs an phrais ó `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ag `extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.
