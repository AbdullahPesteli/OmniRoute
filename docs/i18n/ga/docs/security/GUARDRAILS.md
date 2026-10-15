# Guardrails (Gaeilge)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Foinse na fírinne:** `src/lib/guardrails/`
> **Nuashonraithe is déanaí:** 2026-08-29 — v3.8.51 (Is é an glaoiteoir a dhearbhaíonn bunús thras-scríbhinn Video Bridge,
> níl sé fíoraithe ag an bhfreastalaí fós — soiléirithe de réir #11661)

Forfheidhmíonn ráillí cosanta sábháilteacht, polasaí, agus claochluithe ábhair ag an teorainn idir OmniRoute agus soláthraithe in aghaidh an tsrutha. Is féidir le gach ráille cosanta pálastaí iarratais (`preCall`) agus freagraí in aghaidh an tsrutha (`postCall`) a iniúchadh (agus, de rogha air sin, diúltú dóibh, iad a chlaochlú, nó nótaí a chur leo).

Is córas **teip-oscailte** é: má chaitheann ráille cosanta earráid le linn forghníomhaithe, déanann an chlárlann an earráid a thaifeadadh agus leanann sí ar aghaidh leis an gcéad ráille cosanta eile in ionad teip a chur ar an iarratas. Is cinneadh sainráite é blocáil (`block: true`), ní tharlaíonn sé de thaisme riamh.

## Cosaint Laistigh

Lódáiltear sé cosaintí laistigh de shíor ar ord tosaíochta nuair a importáiltear iad
(féach `registry.ts` → `registerDefaultGuardrails()`):

| Tosaíocht | Ainm                | Stáit(í)       | Comhad                |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Ritheann líon na tosaíochta níos ísle **ar dtús**.

### Droichead Radharc (`visionBridge.ts`) — Droichead Modh PR-1

Tógann sé ar na hiarratais a bhfuil íomhánna acu atá dírithe ar **móidí nach bhfuil radharc acu** agus athraíonn sé an t-iarratas iomlán chuig móid a bhfuil radharc aige nó cuireann sé na codanna íomhá le cur síos téacs a tháirgtear ag móid radharc inathraithe sula dtéann an glao suas. Ligeann sé do sholáthraithe téacs amháin déileáil go trédhearcach le hualach il-mhodh.

Sreabhadh:

1. Éalaigh má tá an móid sprioc cheana féin ag tacú le radharc (mura bhfuil sé le feiceáil sa liosta droichead éigeandála `isVisionBridgeForcedModel`).
2. Bain na codanna íomhá trí `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), a dhéileálann leis an **detector meán comhoibrithe** `detectMediaParts()` i `open-sse/utils/mediaParts.ts` — an t-aon fhoinse fírinne a roinneann an scagaire comhoibrithe.
   Tá an t-eisiúint ceadaithe do na codanna barr leibhéal de na cruthanna
   a d'fhéadfadh `replaceImageParts` a chur ar ais (an conradh extract↔replace): OpenAI
   `image_url`, bunús base64 Anthropic `source.type:"base64"`, URL Anthropic
   `source.type:"url"`, agus API na Freagraí `input_image`. Ní thógtar builleanna neadaithe agus
   cruthanna le comhartha amháin mar ábhar scagaire comhoibrithe agus ní thógtar iad riamh.
   Éalaigh má níl aon rud le fáil.
3. Réitigh na socruithe reatha trí `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): buaileann na socruithe nua `modalityBridge*`
   eochracha; fanann na heochracha sean-`visionBridge*` mar **tacaíocht laistigh de chiorcal amháin**
   (fuinneog rolla). Éalaigh sula dtéann aon thrasnú meán nuair atá an droichead dí-íoctha.
4. Déanann an rogha móid (`modalityBridgeVisionMode`, féach an tábla thíos) cinneadh
   maidir le reroute vs describe. Taispeánann reroute `modifiedPayload` le `model`
   a mhalartú, chomh maith le meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Conas a dhéantar cur síos: cuireann sé íomhánna ag `maxImages`, comhoibríonn sé an t-iarratas atá feasach ar an tasc,
   comhoibríonn sé leis an gcache cur síos, glaoigh ar an móid radharc **i gcomhthráth**
   (`Promise.allSettled`), agus cuireann sé `[Image N]: <description>` na codanna téacs ina n-áit. Taispeánann cur síos teip `null` agus coimeádtar an codanna íomhá bunaidh **(4012)**
   — ach amháin ar an mbealach cur síos comhoibrithe nuair a theip gach cur síos, áit a bhfaigheann upstream nach bhfuil radharc
   stub `(unavailable — no vision-capable provider connected)` in ionad (8430).
6. Tuairisceoidh `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Rogha móid (`modalityBridgeVisionMode`)

| Mód        | Réamhshocrú | Iompar                                                                                                                                                                                                                                                                                                      |
| ---------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔           | Heuristic sean, gan teagmháil (#6640/#7204): ní dhéantar reroute ar mhóidí nach bhfuil comhoibrithe/`auto/` ach amháin chuig an móid radharc is fearr mura bhfuil creidiúnachtaí inúsáidte ag an móid bunaidh (ansin déan cur síos); tá spriocanna comhoibrithe i gcónaí ag déanamh cur síos.               |
| `describe` |             | Déan cur síos i gcónaí — éalaítear an bloic reroute go hiomlán; freagraíonn an móid a roghnaigh an t-úsáideoir i gcónaí.                                                                                                                                                                                    |
| `reroute`  |             | Reroute éigeandála: éalaítear an cosaint móid creidiúnachta. Tá an cosaint creidiúnachta **sprioc** reroute fós i bhfeidhm — nuair nach bhfuil sprioc radharc inúsáidte ann, téann an t-iarratas tríd chun cur síos a dhéanamh ionas nach sroicheann íomhánna amh ach amháin ar chúlra téacs amháin (8430). |

Éilíonn móidí éigeandála **roimh** go rithfidh an heuristic uathoibríoch; tá iompar `auto`
comhoiriúnach le byte leis an droichead roimhe PR-1.

#### Raon eochair API (`visionBridgeKeyScope.ts`)

Nuair a shocraíonn eochair API an gcallaire `allowedConnections`, pools cota
(`allowedQuotas`) nó móidí (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), ní roghnaíonn an droichead ach
móidí reroute agus cur síos a d'fhéadfadh an eochair a úsáid, ar na conneachtaí a d'fhéadfadh an eochair
a úsáid. Téann an glao cur síos ansin tríd an gself-loop OmniRoute i gcónaí le
an ceangaltán `x-omniroute-self-loop-key-id`, ionas go ndéantar an t-iarratas comhoibrithe a
fhorchur arís ar pholasaí conneachta agus móid na heochair sin. Cuireann `enforceApiKeyPolicy()`
onóir don cheangaltán sin ach amháin le chéile leis an bearer self-loop, ionas gur féidir leis ach
rochtain a chaolú, agus cuireadh ar ceal id nach réitíonn.

Mura bhfuil aon mhóid radharc ceadaithe don eochair, éalaíonn an bealach cur síos agus
tá an t-iarratas ag dul tríd gan athrú, an comhoibriú teip mar a bheadh cosaint laistigh de (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Ní dhéanann iarratais gan eochair, agus eochair gan na srianta seo, aon rud ach mar a bhí roimhe seo.

#### Iarratas cur síos atá feasach ar an tasc (`modalityBridgeVisionTaskAware`)

Default **fíor**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) cuireann
téacs an **mesáiste deireanach ó úsáideoir** (truncated go 500 chars) leis an
bunphrompt cur síos, ag treorú an cur síos i dtreo cad a d'iarr an
úsáideoir go deimhin (patrún codex-vision-proxy) agus ag iarraidh ar an
módúl radharc téacs a tharchur. Leis an gcruth ar siúl — nó gan téacs
úsáideora — úsáidtear an bunphrompt gan athrú.

Déantar iarratas comhoiriúnach le OpenAI ar an gcuairteoir féin
(`callVisionModelSingle()` i `visionBridgeHelpers.ts`) i gcónaí a iarraidh
`image_url.detail: "high"` — gan coinníoll, do gach glaoiteoir/soláthraí,
níl sé gafa le comhartha cliant ar bith. Déanann sampláil íseal-dhéanamh
laghdú ar chruinneas OCR don tasc tarchur téacs go díreach a iarrann an
promt seo, mar sin iarrann an glao cur síos féin i gcónaí ard-dhéanamh
neamhspleách ar leibhéal na sonraí a úsáideadh sa iarratas isteach bunaidh.
Níl sé seo ach ag tionchar ar an gcorp iarratais cur síos inmheánach; ní
athraíonn sé conas a tharchuireann OmniRoute `image_url.detail` an
glaoiteora ar an iarratas príomha — cuireann an réamhshocrú sin i bhfeidhm
go neamhspleách, agus amháin do chliaint OpenCode a bhronntar, i
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Níl réimse `detail` ag craobh formáid sreang Anthropic den chluiche
cur síos féin agus níl sé faoi thionchar ag an dá réamhshocrú.

#### Teorainn aschuir cur síos (`modalityBridgeVisionMaxChars`)

| Eochair                        | Réamhshocrú | Raon             |
| ------------------------------ | ----------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`         | `0` nó 100–50000 |

Is é `0` (réamhshocrú) **níl teorainn** — cuireadh an cur síos a
tháinig ó `callVisionModel()` trí, ag coimeád an iompar atá ann cheana.
Cuireann aon luach sa raon 100–50000 teorainn ar an cur síos le
suffix `…` sula gcuirtear ar ais é mar `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` i `src/lib/guardrails/visionBridge.ts`).
Ardaigh é seo do thascanna OCR atá trom le sonraí áit a bhfuil
teastaíonn an tarchur iomlán ón múnla síos; ísliú é chun úsáid
tócaine a theorannú ar mhúnlaí radharc garr. Tá an réimse painéil
dáileach ar phainéal Casta na gCluichí Radharc
(`modality-bridge-max-chars` i `ModalityBridgeVisionTab.tsx`) agus
cuireann sé aon luach idir 1 agus 99 suas go dtí an 100 urlár
ag fágáil `0` soiléir gan teagmháil — is luach bailí Zod é `0`
i d'aon cheart (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`),
níl sé ach an réamhshocrú "neamhsocraithe".

#### Caching cur síos (`modalityBridge/bridgeCache.ts`)

LRU + TTL cache i gcuimhne do aschuir cur síos, roinnte ar fud an
próisis. Eochair = `sha256(imageRef + composedPrompt + configuredBridgeModel)` le
framing fad-prefix (gan comhoiriúnachtaí teorann réimse). Is é an
comhpháirt múnla an múnla **socraithe** droichead, ní an múnla a
fhreagair go deimhin — d'fhéadfadh `callVisionModel` dul ar ais go
hiondúil, agus bheadh sé ag eagrú de réir iarracht a bheadh ag
scoilteadh an chache. Ní chaitear cur síos a theipeann. Socruithe:

| Eochair                         | Réamhshocrú | Raon    |
| ------------------------------- | ----------- | ------- |
| `modalityBridgeCacheEnabled`    | `fíor`      | —       |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000 |

#### Normalú íomhá iargúlta (cur síos/aistriú base64)

Nuair a fhaigheann an droichead íomhá **iargúlta** féin — an
gcall cur síos Anthropic féin agus an aistriú base64
(`ensureBase64ImagesForClaudeWire`), araon trí
`fetchRemoteImageAsDataUri()` i `visionBridgeHelpers.ts` — cuireann an
URI sonraí a thagann as `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) sula gcuirtear é i
d'iarratas an múnla radharc. Déantar íomhánna ró-mhóra a laghdú go
**2048px ar an imeall fada** (ag comhoiriúnú leis an gcap
athraigh OpenAI/Anthropic a chuireann i bhfeidhm ar an freastalaí),
a laghdóidh byteanna/latency a uaslódáil gan athrú ar cad a fheiceann
an múnla radharc. Úsáideann an laghdú `sharp`, a luchtófar trí
iontráil dinimiciúil: ar ardán ina n-éireoidh a dhíobhálach
nádúrtha, ní **throid** `normalizeDataUri()` — téann sé ar ais
go dtí pastróth na byteanna bunaidh, mar sin coimeádann an
cur síos/aistriú base64 an cosán ag obair. Pasáitear byteanna
níl-íomhá (glao a d'fhill nach raibh íomhá in ann a dhéantar a
dhíghlasáil) freisin gan teagmháil. Tá an normalú seo
scoite do íomhánna a fhaigheann an droichead dá gcuairteoir féin —
ní chuirtear i bhfeidhm ar phacáiste pastróth amh an gcallóire, ag
comhoiriúnú leis an bprionsabal athraithe opt-in amháin (Príomh-Riail #20).

#### Scéim socruithe + aistriú

Tá na heochracha nua `modalityBridge*` bailíochtaithe ag Zod i
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
an trio `modalityBridgeCache*`, agus an grúpa `modalityBridgeAudio*`
a úsáidtear ag an Droichead Audio. Aistríonn `141_modality_bridge_settings.sql`
luachanna seanchaite `visionBridge*` atá ann cheana go dtí na heochracha nua
comhoiriúnacha (idempotent, ní scriosann sé luach `modalityBridge*`
a socraítear ag oibrí); fanann na heochracha seanchaite á n-údarú mar
thaca léitheoireachta ar feadh timthriall scaoilte amháin.

#### Ceannlínte trédhearcachta + stats

Tugann freagraí a athraítear cur síos
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(a tógadh ag `buildModalityBridgeHeader()` i `modalityBridge/bridgeStats.ts`,
a shíniú ag `withModalityBridgeHeader()` i `src/sse/handlers/chatHelpers.ts`).
Ní fhaigheann iarratais a d'athraigh **ní** ceannlínte — bhí an
pacáiste gan teagmháil agus tá an malartú múnla le feiceáil cheana
i réimse `model` an choirp freagartha.

`GET /api/modality-bridge/stats` (údarás bainistíochta, an céim chéanna le
`GET /api/settings`) a fhilleann na comhoibrithe in-mheabhrach per-modality
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` do `vision`, `audio`, agus
`video`. Úsáideann `averageLatencyMs` `latencySamples`, ní gach iarracht, mar a
bhfuil a denominator; ní dhéanann oibríocht gan am sampla de zero-millisecond a
ghiniúint. Fanann `bridged` mar an t-ainm a bhfuil comhoiriúnacht ar fáil do
convertaí rathúla; ní chuireann iarrachtaí teip air.

Athraítear na comhoibrithe ar aththosú an phróisis dearaidh
(telemetry, ní cuntas).

#### Conradh an Dashboard

Is é an leathanach dashboard tiomnaithe
`/dashboard/settings/modality-bridge`. Coinníonn a URL-aitheanta na paraiméadair
cuardaigh agus tú ag athrú luach an `tab`. Nochtann an tab Vision an
cumas, an mód, rogha samhlacha (lena n-áirítear an réamhshocraithe uathoibríoch),
cuireadh aird ar thasc, teorainneacha ama/íomhá/cur síos/aischóirithe, comhoibrithe
rithim, agus iarratas samplach cosanta. Tá an tab Audio beo freisin: nochtann sé
an cumas, rogha samhlacha STT amháin le Auto, teorainneacha ama/max-clip, comhoibrithe
guth, agus tástáil samplach `input_audio`. Tá an tab Video feidhmiúil: tuairiscíonn sé
staid rithim FFmpeg/ffprobe — laistigh de cheithre stát UI soiléir (`unknown` agus
an probe á sheoladh nó nach féidir é a chríochnú, `restricted` ar óstach dashboard
nach bhfuil ar loopback áit a scipeáiltear an probe ar an gcliant, `unavailable`
nuair a dhéantar probe agus a dhearbhú go bhfuil sé in easnamh, nó `available` le
leagan FFmpeg/ffprobe) — coinníonn sé teorainneacha enable/model/frame/video/timeout,
scagann sé an rogha samhlacha go samhlacha atá in ann radharc, agus nochtann sé
comhoibrithe físe.

Is nasc comhoiriúnachta é an cárta Vision Bridge roimhe seo faoi shocruithe AI
do na leathanach nua; ní bhíonn cóip eile den fhoirm aige a thuilleadh. Déanann
Soláthraithe Meán nasc freisin le hoibrithe Íomhá-go-Teanga agus Comhrá-go-Teanga
go na tabanna Modality Bridge comhoiriúnacha gan an páirc Comhrá-go-Teanga atá
ann cheana a bhaint.

**Bóthar a admháil féin-loop:** nuair a sheoltar an glao cur síos trí
OmniRoute's `/v1` féin-loop (múnla soláthraí neamhchaighdeánach), seolann an
sub-iarratas `x-omniroute-admission-bypass: internal` agus déantar é a
údarú leis an gcreidiúnacht féin-loop a réitítear — an `sk_omniroute` áitiúil
i mód áitiúil, nó an eochair env a shocraítear ag an oibreoir `OMNIROUTE_API_KEY`
/ `ROUTER_API_KEY` (#1350) ionas go bhféadfadh déantóirí `REQUIRE_API_KEY=true`
an glao cur síos a rith. Ní ghlactar leis an mbóthar ach do na creidiúnachtaí
sínte sin, mar sin ní féidir le cliaint seachtracha an ceann a úsáid chun
admháil a scipeáil.

Maireann na réamhshocruithe sean i `src/shared/constants/visionBridgeDefaults.ts`;
maireann na réamhshocruithe nua/mód-tasc/aischóirithe agus an réitigh socruithe i
`src/shared/constants/modalityBridgeDefaults.ts`. Nochtann an cosantóir
rogha `deps` do thógáil ionas go bhféadfadh tástálacha a chur isteach ar
fhoirneacha bréagacha `getSettings` agus `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Cuireann sé cosc ar iarratais comhrá a bhfuil guth acu sula sroicheann siad
sprioc nach bhfuil ar eolas a ghlacann ionchur guth. Ní athraíonn sé an
iarratas comhrá: tras-scríobhann na codanna guth trí an pointe deireadh
multíphart atá comhoiriúnach le OpenAI atá ann cheana agus leanann an samhlacha
comhrá roghnaithe le trascríobhanna téacs.

Sreabhadh:

1. Réitigh `supportsAudio` trí `getResolvedModelCapabilities()`. Buaileann
   sonraí meitidí cláraithe soláthraí, ansin sonraí samhlacha staiticiúla, ansin
   `modalities_input` comhoiriúnaithe. Is `false` atá i liosta ionchur a
   dhéantar a dhearbhú gan `audio`; ní fanann aon fhianaise cumais `null`. Gníomhóidh
   an droichead coimeádach le `false` agus `null`, agus bypassóidh sé le `true`.
2. Réitigh socruithe `modalityBridgeAudio*` agus extractáil codanna guth
   is féidir a splicing ó gach teachtaireacht trí an detector comhoíche `detectMediaParts()`.
   Is iad na cruthanna sreang a tacaítear ná OpenAI `input_audio`, `audio_url`, agus
   `source.media_type: "audio/*"`. Déantar guth neadaithe a bhrath le haghaidh
   bealaigh ach ní baintear é trí an cosán splicing. Tá an obair teoranta ag
   `modalityBridgeAudioMaxClips`; fanann codanna níos déanaí neamhshocraithe.
3. Comhlíon socrú `provider/model` a shocraítear, nó lig `selectAudioBridgeModel()`
   siúl trí `AUDIO_TRANSCRIPTION_PROVIDERS` i gcruth ord catalog cobhsaí agus
   roghnaigh an chéad samhlacha le creidiúnacht soláthraí gníomhach inúsáidte.
4. `callAudioTranscription()` a thiontaíonn guth base64/data-URI go
   `file` multíphart, nó íoslódálann `audio_url` iargúlta trí an cosantóir
   poiblí amháin le DNS pinning agus teorainn 25 MB. Ansin POSTann sé an comhad
   agus an samhlacha roghnaithe chuig an `/v1/audio/transcriptions` féin-loop áitiúil,
   a údarú le `resolveSelfLoopBearer()`. Déanann an bealach trascríobh atá ann
   cheana gníomhú ar lorg creidiúnachta gnáth, láimhseáil cooldown/ráta-límite,
   agus seoladh soláthraí.
5. Athraíonn glao rathúla a gcuid codanna le `[Audio N]: <transcript>`. Ritheann
   glao le `Promise.allSettled`: coimeádann teip aonair an codanna guth
   bunaidh (#4012 conradh). Má theipeann ar gach glao agus tá an sprioc cruthaithe
   `supportsAudio === false`, déantar na codanna a
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 conradh). Do
   sprioc nach bhfuil ar eolas (`null`), fanann toradh uile-teip neamhshocraithe.
   Faigheann sprioc cruthaithe téacs amháin gan creidiúnacht STT inúsáidte an
   stub soiléir céanna gan glao líonra a eisiúint.

Úsáideann trascríobhanna rathúla an Modality Bridge LRU/TTL cache ar fud an
phróisis. Comhcheanglaíonn an eochair an tagairt guth, an lipéad oibríochta
`audio-transcription` cobhsaí, agus an samhlacha STT roghnaithe; ní stóráiltear
teipeanna. Nuashonraíonn iarrachtaí guth na comhoibrithe `bridged`, `cacheHits`,
`failures`, agus `lastUsedAt`. Iarratais a athraítear a iompar
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; ní
faigheann iarratais neamhshocraithe aon chuid Audio Bridge.

Tá socruithe rithim bunaithe ar DB agus bailí le Zod:

| Eochair                       | Réamhshocrú | Raon           |
| ----------------------------- | ----------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`      | —              |
| `modalityBridgeAudioModel`    | `""`        | Auto nó STT ID |
| `modalityBridgeAudioTimeout`  | `60000`     | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`         | 1–10           |

Fanann an comhoiriúnacht roinnte faoi smacht ag `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, agus `modalityBridgeCacheMaxEntries`.

### Droichead Físe (`videoBridge.ts`, `videoBridgePipeline.ts`)

Tógann sé na codanna físe ar leibhéal barr i gComhoiriúnachtaí Comhrá `messages` agus
Freagraí API `input` sula gcuirtear glaoch ar sprioc gan tacaíocht físe dúchasach
aithne. Tá na cruthanna tacaíochta `input_video`, `video_url`, `video_source`, URLanna HTTPS,
agus `data:video/*;base64,...` URIs sonraí. Ní dhéantar comhoiriúnachtaí comhoiriúnachta
a chóireáil mar fhíse.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) a bhainistíonn trasnú iarratais, an
seiceáil ar chumas/polasaí, comhoibriú in aghaidh an iarratais, agus an t-ualach freagartha.
Obair ar gach físe — faighte, an comhoiriúnacht iomlán, cur síos ar shraith
fráma (a chomhleáíonn aon trascríobh fuaime a d'fhógair an glao), agus méadrachtaí/cur
ar ceal/níos glaine in aghaidh an iarracht — tá sé i bhfolach taobh thiar de `processVideoPart`
i `videoBridgePipeline.ts`, a gcalltar uair amháin in aghaidh gach codanna físe laistigh
de chiorcal `preCall`. Sainmhíníonn an modúl freisin na teorainneacha port soiléire `VideoMediaBrokerPort`
(a fhaigheann byteanna agus a tharraingíonn frámaí sampláilte), `VideoAudioTranscriptionPort`
(a chomhleáíonn trascríobh fuaime a d'fhógair an glao leis na fo-caption sampláilte), agus
`VideoDrilldownPort` (an cruth stórála amh oidhreachta). Déantar STT táirge agus coimeád
fráma a chomhdhéanamh timpeall an phort atá ag cur síos tríd `createVideoSttAdapter` agus
`createVideoDrilldownAdapter`; úsáideann an dara ceann an timthriall láimhseála opaque roinnte.

Ní dhéanann an cosán iarratais poiblí `/v1` riamh allmhairiú nó glaoch ar fho-proscess.
Tugtar físeanna iargúlta faoi bhun 50 MiB; tá teorainn chaighdeánach 36 MiB ag físeanna
base64 inlíne in aghaidh gach físe ionas go bhféadfadh an múnla/messages/foirmiú
fanacht laistigh de theorainn admhála iarratais JSON poiblí de 50 MiB. Déantar
meastacháin ar fhad inlíne agus méid dí-chódaithe a sheiceáil sula ndéantar
roinnt. Éilítear HTTPS ar an URL iargúlta tosaigh agus gach athsheoladh, ag
úsáid an chosanta poiblí amháin atá ann cheana le DNS pinning. Téann na byteanna ansin
trí theorainn broker `POST /api/modality-bridge/video/extract` laistigh. Tá an cosán sin
`LOCAL_ONLY` agus `SPAWN_CAPABLE`, glacann sé ach iarratas aitheanta, muiníneach
i gcuimhne ar an bpróiseas, agus ní ghlacann sé riamh le URL, cosán comhoiriúnachta,
comhoiriúnacht, nó liosta argóintí. Cuireann an píblíne méid comhlacht API agus
léitheoir comhlacht de réir a chéile an teorainn ionchuir broker 50 MiB i bhfeidhm go neamhspleách.
Ritheann a queue teoranta extraction amháin ag an am, ligeann sé ceithre jab atá ag fanacht,
agus cuireann sé teorainn ar ionchur atá ag fanacht ag 100 MiB.

Laistigh den broker, léann `ffprobe` comhad áitiúil príobháideach; eisiamh na cruthanna
aithint atá ann cheana. Maidir le comhoiriúnachtaí MOV-teaghlaigh ceadaithe, fanann
tagairtí sonraí MOV iargúlta díghníomhachtaithe de réir réamhshocrú, agus ní roghnaíonn
an t-ordú socraithe iad. Úsáideann `ffprobe` agus `ffmpeg` an liosta ceadaithe
protocola `file`-amháin, snáithe amháin, comhoiriúnachtaí argóintí socraithe, gan
shel, agus comhoiriúnachtaí a réitítear ó `PATH`. Ní bhíonn sruthanna clúdach pictiúr
ceangailte in ann a bheith ina gcórais in ann a imirt. Caithfidh gach sruth in ann a imirt
na teorainneacha a shásamh, agus is fearr sruth réamhshocraithe soiléir roimh an
tírdhreach is ísle a chinneadh. Tá físeanna teoranta do 600 soicind, 8,192 picteilín in aghaidh
an diméana, agus 33,554,432 picteilín foinsí. Samplaíonn FFmpeg 1–16 frámaí JPEG
lárnacha, laghdaíonn sé an taobh fada go 1,024 picteilín ar a mhéad gan suasclaochadh
ionchur níos lú, agus ní fhaigheann sé riamh URL. Is `uniform` é an sampláil de réir
réamhshocrú. Déanann na polasaithe roghnaithe `scene_aware` agus `segment_aware`
pas FFmpeg breise socraithe thar an sruth áitiúil a bhfuil bailíocht curtha air cheana,
roghnaíonn siad amanna `showinfo` teoranta, agus téann siad ar ais go cinntitheach
go dtí na lárnaigh aonfhoirmeacha céanna ar theip ar an gconraitheoir, am
níos faide, aschur míshláintiúil, nó socrú folamh. Déanann an modh atá ar an eolas
faoi na codanna lárnacha a shannadh go comhréireach le hidirbhlianta na radharc
bailithe; tá fianaise agus iompar a thagann ar an eolas faoi na codanna lárnacha
curtha síos thíos. Cuireann an teorainn 16-fráma crua i bhfeidhm tar éis roghnú
i ngach polasaí. Nuair a bhíonn iarratas ar eolas faoi radharc amháin le buiséid
fráma amháin, úsáideann sé an lárnach aonfhoirmeach de na físeanna iomlána gníomhacha
nó fuinneog fócas agus tuairiscíonn sé `policyEffective: uniform`: ní féidir le
fráma radharc amháin a choinneáil ar na deireadh ama. D'fhéadfadh glaoiteoir a sholáthar
roghnach fuinneog fócas teoranta (`start`/`end` soicind); cuireann na teorainneacha
ar an meán, cuireann fuinneoga a mhalartaítear nó neamh-theoranta ar ceal, agus
déantar na polasaithe samplála go léir laistigh den idirbhliain normalized amháin.
Tugtar an fuinneog a thagann as seo isteach i meastachán samplála agus sa réamhrá
níos mó a bhfuil muinín ann ionas go bhféadfadh múnlaí anuas a bheith in ann
difriúil a dhéanamh idir sliocht fócasach agus an líne ama iomlán.

Is socrú ar leith é fócas ar ailtireacht shémantach. Coinníonn an mód anailíse
réamhshocraithe `full` an t-iarratas fráma atá ann cheana agus ní chuireann sé
téacs iarratais ar aghaidh chuig an múnla ailtire. I mód `focused`, léann an droichead
ach an `text`/`input_text` is déanaí a scríobh an úsáideoir nach bhfuil folamh
ó na comhoiriúnachtaí Comhrá nó Freagraí céanna, déanann sé normalú air go NFC,
cuireann sé carachtair rialaithe agus spás bán le chéile, agus cuireann sé teorainn
ar 500 pointe cód Unicode. Titeann toradh folamh ar an `full` iarratas cruinn.
Tugtar le fios go bhfuil leideanna inúsáidte serialaithe mar JSON i bbloc
neamhoifigiúil úsáideora ar leith agus d'fhéadfadh sé ach tosaíocht a thabhairt do
shonraí infheicthe; ní féidir leis an leideanna a shárú an rabhadh ar leith
i gcoinne treoracha atá le feiceáil nó le cloisteáil sa mheán. Ní dhéanann fócas
téacs riamh tuairim a thabhairt ar `start`/`end` nó athrú ar an samplóir
ama.

#### FU-07 fianaise codanna struchtúracha

`segment_aware` úsáideann pas réamh-anailíse teoranta amháin ar an sruth físe áitiúil a bhfuil sé bailí cheana. Tosaíonn an slabhra scagaire shocraithe le scála a dhéanamh go 320 picteilín ar a mhéad, ag brath athruithe radhairc agus tréimhsí reoite, ansin samplaíonn sé ag 1 frám in aghaidh an tsoicind le haghaidh doimhneachta, luma meán, agus eolas spásúil/aimseartha. Tá an pas teoranta do 600 sampla struchtúrach, snáithe FFmpeg/scagaire amháin, an prótacal agus liostaí ceadúnas `file`-amháin, teorann aschur próiseas 1 MiB, agus ar a mhéad 30 soicind laistigh de na hiontrálacha roinnte/teorainneacha an brocaire. Ní ghlacann sé riamh le hordú, scagaire, cosán, nó URL ón iarratas.

Is fianaise samplála cinntitheach atá sna luachanna struchtúracha, ní tuiscint físe seimeantaic. Ní dhéanann siad tuairimí ar ábhair, gníomhartha, teidil, cainte, nó intinn úsáideora. Cruthaíonn teorainneacha radharc agus reo na codanna; ní dhéanann clúdach reoite, doimhneacht, nochtadh, mionsonraí spásúla, agus athrú ama ach tionchar a imirt ar conas a roinntear an buiséid 1–16 frám. Tá teorainn ar an gcuan reoite go frám amháin, agus comhoibríonn na codanna neamh-reoite don bhuiséad atá fágtha. Nuair a bhíonn teorainneacha níos mó ná frámanna, coimeádtar clúdach ama comhoiriúnach ionas nach féidir le gearrthóga luath tapa a cheilt codanna fada. Déantar teorainneacha radharc laistigh de réiteach anailíse 1-soicind teorainneacha reoite a chomhtháthú.

Ní ghlacann scagairí atá in easnamh, fianaise mhalartach/folamh, earráid braiteora, nó an teorann ama réamh-anailíse a theipeann ar oscailt go polasaí lár na comhoiriúnachta. Ní théann abort glao nó teorainn brocaire ar oscailt: críochnaíonn sé an fo-phróiseas atá ar siúl, cuireann sé cosc ar aschur frámanna níos déanaí, agus baintear an crann príobháideach sealadach i `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` cruthaíonn sé áitribh FFmpeg réalaíoch cinntitheach do shábháladh ar chásanna teidil tar éis dedup, roinn buiséid gluaiseachta dlúth, fianaise doimhneachta/nochtadh/SI-TI, gearrthóga tapa le tail fada, agus dearbhuithe bréagacha le fade gasta. Taifeadann sé am balla réamh-anailíse agus, áit a bhfuil `/usr/bin/time` ar fáil, CPU páistí agus RSS barr. Ní bhíonn a sheiceáil cáilíochta ach oracles struchtúracha amháin. Fanann cáilíocht an mhúnla teidil `HOLD` mar níl deireadh ceadaithe ag an harness seo nó breitheamh reoite. Fanann na sábháladh airgeadais freisin `HOLD` mura soláthraíonn `--caption-cost-per-call-usd` meastachán dearfach ar leith in aghaidh an gcall; ní dhéanann an script aon toradh a chruthú.

Tá gach frám teoranta do 4 MiB, gach frám amh le chéile go 23 MiB, agus freagra an brocaire serialaithe go 32 MiB. Baintear an comhoibriú sealadach príobháideach i `finally`. Ní chuireann OmniRoute FFmpeg le chéile agus ní ghlacann sé le cosán feidhmchláir saincheaptha. Sula ndéantar teidil, cuireann an droichead pas dé-dhíobhálach conservatóir i bhfeidhm: laghdaítear gach JPEG go bufer grayscale 16×16 agus comparáidítear é ach leis an frám deireanach a choinnítear. Maidir le buiséid teidil a iarrtar os cionn frám amháin, soláthraíonn aschur linnte comhoiriúnachta teoranta suas le dhá oiread an bhuiséid sin agus riamh níos mó ná 16 frám. Cuireann an teorainn iarrtha i bhfeidhm ach tar éis deduplication, le na chéad agus na hiarratais deireanacha a chaomhnú le linn na caolaíochta deiridh nuair atá an buiséid ar a laghad dhá. Úsáideann an polasaí leagan `grayscale-16x16-mean-cells-v2` an méid is mó de luma delta meán agus an cóimheas de chillí thomhaiste a bhfuil a delta normalaithe ar a laghad 0.05. Is é an leibhéal dúblach an 0.04 seasta, a roghnaíodh le haghaidh tuiscint seachas a bheith nochtaithe mar shocrú rith. Coimeádann an comhartha ard-chontrasta seo gluaiseacht bheag agus athruithe téacs infheicthe a d'fhéadfadh comparáid amháin le meán a cheilt. Teipeann earráidí comparáideora nó deacra ar oscailt agus coimeádann siad clúdach. Scarann an meiteashonraí aschur na hiarratais a asbhaítear, frámanna a úsáideadh go rathúil, agus dúblóidí amhairc a thit.

D'fhéadfadh cuid físe a mharcáil go soiléir iarratas a dhéanamh ar shíniú ama. Tógann an droichead gríd JPEG le 4 colún, 16 frám ar a mhéad. Dóitear gach chill 512-picteilín a shíniú ama isteach i banda íochtair ard-chontrasta, agus fanann na comhoiriúnachtaí céanna i meiteashonraí téacs le haghaidh comhoiriúnachta agus iniúchadh síos an líne. Fanann an JPEG iomlán teoranta go 32 MiB. Mura féidir le `sharp` an gríd a dhéantar nó a chomhoiriúnú, téann an droichead ar ais chuig na frámanna JPEG aonair; scaoileann abort cliant fós tríd an oibríocht ghrid.

Tá fianaise ardaithe go sonrach ar leithligh ó na microbenchmark comhoiriúnachta sintéiseach. `scripts/perf/video-bridge-contact-sheet-eval.ts` sainmhíníonn harness A/B le leagan scéime do mhúnlaí fís atá comhoiriúnach le OpenAI. Tomhaiseann sé na comhoiriúnachtaí a thuairiscítear ag an soláthraí, moill balla deireadh go deireadh (lena n-áirítear comhoiriúnacht ghrid), líon na gcall múnla, agus coimeád fianaise a shainmhínítear sa mhainistir. Ní scríobhann freagraí múnla amh chuig an tuarascáil; ní coimeádtar ach digests SHA-256 agus IDanna fianaise comhoiriúnachta. Ní dhéanann an harness glao líonra nó múnla íoctha mura gcuirtear `--execute-real` agus `--model`, `OMNIROUTE_BASE_URL`, agus `OMNIROUTE_API_KEY` ar bun. Gan an rith réalaíoch sin, fanann a breithiúnas inléite meaisín `HOLD`; ní hé na tomhais a bhaineann le lucht a gcall/tonn amháin fianaise ardaithe.

Tógann an `scripts/perf/video-bridge-promotion-eval.ts` ar aird breathnóireachtaí FU-07 nó FU-09. Teastaíonn admháil ardaithe do gach ocht gcineál scéime sintéiseach agus clip fíor glan, ar a laghad trí athrá tomhaiste in aghaidh an ról agus cás, na deich mholtaí a fhógraítear, digestanna meán/reoite/teagmhála/sonraí a bhíothas ag súil leo, IDanna breathnóireachta uathúla agus ord A/B a dheimhníodh. Ceanglaíonn an faomhadh feidhm an digest corpas, SHA beacht na hiarratais agus athbhreithniú múnla. Fanann tomhais atá in easnamh nó mhalartach `HOLD`, lena n-áirítear CPU os cionn 30 s, RSS barr os cionn 512 MiB nó réamh-anailís os cionn 30 s. Is iad seo na teorainneacha admhála fianaise, ní ráthaíocht nua maidir le forfheidhmiú RSS rith.

FU-07 éilíonn ar a laghad 98% coimeád cáilíochta agus p95 moill nach bhfuil níos mó ná 1.2x
bunlíne, chomh maith le 0.05 feabhsú ar an meán cuimhne cás-bailí ag
gcallaí meán comhoiriúnachta, nó ar a laghad 10% níos lú gcallaí comhoiriúnachta
post-dedup. Éilíonn FU-09 ar a laghad 0.85 cáilíocht, 95% coimeád, 20% laghdú p95
moille agus 10% laghdú ar thóca. Cuireann caillteanas criticiúil-fíric, comhoiriúnacht
iontrála nó úsáid atá in easnamh cosc ar chur chun cinn. Ní féidir le haon
fheidhmíocht rud ar bith a chur chun cinn: `--previous-report` deimhníonn dhá
fheidhmíocht shonraithe, nach bhfuil overlapping, atá incháilithe go comhoiriúnach
de réir an pholasaí/múnla athbhreithnithe/ionadaí/corpais céanna. Ní féidir le
turgnamh samplála deimhniú turgnamh gníomhach.

Ba chóir do chruinnithe scór a thabhairt do fhreagair i gcuimhne agus `responseDigest`
a shábháil chomh maith le méadrachtaí agus ceangail breathnóireachta, riamh téacs
freagartha. Léann an tomhaltóir freisin breathnóireachtaí amh traidisiúnta ach
ní dhéanann sé cóip den téacs sin ina thuairiscí. Glactar le díreach amháin de
`responseDigest` nó `rawResponseText` do gach breathnóireacht. Fanann an
liosta ceadaithe leagan leamh le `hold` neamh-athraithe. Éilíonn iontráil
incháilithe a tagairt fianaise, polasaí, athbhreithniú múnla, SHA ionadaí
beacht, digest manifest agus dhá ID rith shonraithe; cuireadh ar ceal comhoirdh
confláite. Is conradh iniúchta atá sna meiteadata seo, ní fianaise go bhfuil
comhad tagartha ag cur tomhais fhíor. Déan athbhreithniú ar na faighteanna
fíor sula gcuirtear aon iontráil leis. Nochtann an pointe cruthúnas stats
bainistíochta agus painéal Video leibhéal coimeádta coimeádta. Ní dhéanann
alias múnla socraithe amháin a shocrú a athbhreithniú nó SHA an ionadaí a
rith, mar sin tuairiscíonn an painéal reatha `HOLD` seachas
incháilitheacht a athúsáid ó chomhthéacs feidhmiúcháin eile. Fanann roghnú
turgnamhach soiléir ar leithligh ó chur chun cinn; ní athraítear aon
réamhshocrú go huathoibríoch.

Féadfaidh glaoiteoirí gnáth `transcript.cues` a cheangal le páirt físe tacaíochta
nuair atá téacs comhoiriúnach acu cheana. Caithfidh gach cue `text`, eatraimh
`start`/`end` teoranta laistigh den tréimhse a scrúdaítear, agus `source`
(`client`, `embedded`, nó `audio-bridge`) atá ar an liosta ceadaithe; tá
`confidence` réamhshocraithe go `1` agus caithfidh sé fanacht idir `0` agus `1`.
Cuireann cues díreach comhoiriúnach le chéile. Ní thosaíonn OmniRoute
trascríobh ó na meiteadata seo: cóipeann cues bailí isteach sa toradh
curtha síos le foinse, muinín, agus eatramh, agus déantar iad a chur i
gcrích mar breathnóireachtaí neamhiontaofa in éineacht le gcallaí an
chraolta. Cuirtear téacs neamhbhailí, lasmuigh de raon, nó gan foinse
ar ceal seachas a mheascadh isteach sa sruth gcallaí. Normalizes an dá
chainéal transcript-body an foinse a sholáthraítear go `client`, lena n-áirítear
labels féin-aistrithe `embedded` nó `audio-bridge`. Ní féidir ach
adaptóir a bhaineann le freastalaí na lipéid iontaofa sin a shannadh trí
an argóint `trustedSource` atá bunaithe ar chód amháin; ní féidir le
réimse JSON iarratais an argóint sin a bhaint. Fanann téacs trascríobh
mar ábhar neamhiontaofa a tháinig ó na meáin, beag beann ar a foinse,
agus níor chóir go gcuirfeadh sé ar bun údarás.

Féadfaidh glaoiteoir ardleibhéil `audioTranscript` a sholáthar do
an físe céanna; déantar é a chóireáil mar théacs a sholáthraíonn an
cliant, ní fianaise ar trascríobh freastalaí. Ritheann an seam
fúis breathnóireachtaí amhairc agus guth faoi
laige amháin agus comhartha abort, ordóidh siad ar líne ama coiteann,
cuirfidh siad le chéile comhoiriúnachtaí díreach, agus tuairiscíonn siad
toradh páirteach nuair a éiríonn le taobh amháin amháin. Déanann
`audioTranscript` neamhbhailí laghdú go dtí an toradh páirteach — coimeádtar
an cur síos amhairc agus taifeadann an craobh guth cód teip shanraithe —
seachas teip an fhíse ar fad. Coimeádtar ar fáil in aghaidh na craobh,
an bratach páirteach, agus na cóid teip shanraithe sa toradh curtha
described, sna meiteadata guardrail (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), sna meiteadata cache-toradh, agus sna
comhoiriúnachtaí fúis. Ní gníomhóidh an cosán Video Bridge réamhshocrú
guth-go- téacs nó íoslódáil cóip meán dara; gan an track soiléir sin,
fanann sé mar físe amháin.

**Coimeád trascríobh (#12150 P1).** Cuireann sé seo i bhfeidhm go huathoibríoch
aon uair a dhéanann an Video Bridge (féin opt-in) cue trascríobh a
ghearradh — níl bratach coimeádta ar leith. Nuair a dhéanann iarratas
cue trascríobh ar bith a ghabháil (a `transcript` a dhlúthóidh an glaoiteoir
nó `audioTranscript` a fuarthas), marcann an guardrail é
`videoBridgeObserved` agus táirgeann sé scáth redacted de
an cur síos físe — tá léiriú comhoiriúnach ina bhfuil gach comhoiriúnacht
tá corp téacs saor a athraítear le ` [redacted-video-transcript]`, a tógadh
trí chur in ionad an réimse cue struchtúrtha sula gcuirtear an
sreang le chéile (ní trí pharsáil an téacs flattened, mar sin ní féidir
le haon ábhar cue — adversarial nó gnáth, lena n-áirítear comhoiriúnachtaí
a bhfuil `]` acu mar ` [inaudible]`/`[music]` — maireachtáil). Athraíonn
an comhad iarratais loga gníomhachtaigh gach cuid téacs a tháinig ó
an físe sin don scáth redacted, comhoiriúnaithe de réir comhoiriúnachta;
tá an t-anchóir `fullText` á léamh arís ó na comhoiriúnachtaí
guardrail réamhchruinnithe críochnaithe, mar sin fanann an comhoiriúnacht
ag éirí go rathúil tar éis do na guardrails slabhra níos déanaí (na
PII agus na maskers creidiúnachta, tosaíochtaí 10/95) an téacs curtha
in ionad agus tar éis do na hiontrálacha córais/athchur/iontrálacha
cuimhne a athshocrú an t-aistriúchán teachtaireachta. Fanann an comhad
a sheoltar suas chuig an múnla gan athrú. Ní líonann iarratas breathnóireachta
nó aon chuimhne buan (tá an dá extraction a tháinig ó iarratas agus freagartha
scoite), mar sin ní féidir freagra an mhúnla a athrá téacs trascríobh
i gCuimhne.

**Réimsí físe amh (#12430).** Nuair atá an droichead gníomhach agus nach bhfuil
tacaíocht físe dúchasach ar eolas nó ar fáil, gníomhóidh réimsí
`transcript`/`audioTranscript` freisin `videoBridgeObserved`, fiú tar éis
teip cur síos nó teorainn `maxVideos`. Comhoiriúnachtaí `null` agus
sreangáin folamh; ní áireamh na réimsí atá in easnamh agus na
meiteadata neamh-físe. Déanann cóipeanna coimeádta na réimsí seo a
redact nó cuireann siad an iarratas as an áireamh, agus déantar
cache/Memory a bhóthar.

Ar na cosáin athchóirithe sin, éiríonn ciontaí glaoite bailí mar chuidí tacaithe `text`/`input_text` seachas réimsí soláthraithe neamhchaighdeánacha. Fanann an dá thraein a sholáthraítear le hiarratas mar fhíor-obair `client`, le rabhadh soiléir nach raibh an físeán curtha in iúl agus nach raibh na hamstampaí fíoraithe i gcoinne na meán. Cuireann an buiséad atá ann cheana 256-cue/64-KiB ar fáil ar fud na dtráchtanna beirt; caithfidh na hamstampaí comhoiriúnacht a bheith acu le huaslaghdán 600-soicind an bróicéir agus aon fhuinneog fócas a sholáthraítear. Diúltaíodh na traein neamhbhailí, ní dhéantar iad a chur ar aghaidh mar théacs randamach; d'fhéadfadh deartháir bailí a bheith in úsáid fós mura gcuirtear a bhuiséad comhoibrithe thar an teorainn. Ní chuirtear aon théacs leis na réimsí folamh/nil. Ní chuirtear aon fhéachaint ar na meáin nó trascríobh leis an athchóiriú seo. Tógann réimsí síneadh trascríobh as an iompróir físe athchóirithe agus a `video_url`/`source` réimsí. Fanann an liosta ceadaithe OpenAI dian; fanann iompróirí físe neamh-eolach ar fáil agus coimeádann spriocanna téacs amháin a bhfuil marcanna sábháilte orthu.

Cosnaíonn scáthanna deargachta struchtúrtha an téacs trascríobh a chuirtear leis, agus fanann an t-iarratas a bhaineann le glaoite bunaidh gan athrú. Úsáideann cóipeanna breise a choinnítear an comhartha iarratais a breathnaíodh. Athraíonn an snapshot iarratais cliant roimhe seo, an iarratas atá ag fanacht i gcuimhne, agus an log iarratais a diúltaíodh go luath réimsí trascríobh i gcuidí físe; déantar na comhoiriúnachtaí sreabhadh a shintéisiú ag céimeanna an phíobáin agus aistriú comhthéacs a dhíothú ag an gcuirtear an corp iarratais. Déanann an marcóir `video_content_removed` go n-éireoidh le leanúint `previous_response_id` a dhúnadh seachas téacs a aththógáil a diúltaíodh go hionraic. Má chailleann iarratas a breathnaíodh a scáth deargachta in aghaidh gach cuid sula ndéantar logáil, nó fiú má theipeann ar cheann de na scáthanna físe a comhoiriúnacht a chomhlíonadh tar éis athruithe ar iarratais níos déanaí, déantar an corp iarratais a choinneáil go hiomlán seachas a choinneáil trascríobh páirteach.

Maidir le hiarratas a breathnaíodh, d'fhéadfadh freagra samhail aon chuid den trascríobh a lua gan teorainn struchtúrtha cue. Mar sin, athraítear a `responseBody` log gcallaigh a choinnítear; ní coimeádtar an t-ealaín phíobáin mionsonraithe (a d'fhéadfadh comhoiriúnachtaí suas/sreabhadh cliant agus sliseanna sreabhadh a áireamh) . Déanann na cachaí le haghaidh brí, idempotency, agus ath-imirt réasúnachta léitheoireacht agus scríobh do sin iarratas. Fanann iarratas an soláthraí agus freagra infheicthe don chliant gan athrú. Déantar na byteanna keepalive luatha a dhraenáil ón mbufair sealadach nuair a dhéantar an t-ealaín mionsonraithe a dhíothú. Tuairiscíonn foláireamh EventStream míthreorach Kiro ach an comhoiriúnacht byte a thomhas, riamh a áireamh a ábhar nó earráid amh an JSON parser.

Ní éilíonn sé go bhfuil gach diagnóis soláthraithe/pluiméireachta neamhbhailí curtha faoi scrúdú; tá an sweep coimeádta níos leithne rianaithe i #11658.

Is bunús cache ar leith é an timthriall `/api/modality-bridge/video/drilldown`, atá ceangailte le haitheantas luais/teagmhála. Éilíonn gach oibríocht ID príomhchinnte opaca caighdeánach. Sula gcuirtear glaoite táirgeachta ar fáil, caithfidh sé an ID sin a bhaint as an gconradh aitheanta agus níor chóir dó riamh luach a roghnaíodh ag an gcliant a chur ar aghaidh. Ceanglaíonn eochracha cache an príomhchinnte le seisiúin caighdeánacha agus IDanna tagartha físe, stórann ach a eochracha a dhéantar as SHA-256, agus scópaíonn sé léitheoireachtaí agus scriosadh don phríomhchinnte céanna. Stórann an cache ar a mhéad 16 fráma JPEG a dhéantar as gach iontráil, a éiríonn tar éis deich nóiméad, agus tacaíonn sé le léitheoireachtaí `start`/`end` teoranta nó scriosadh seisiúin soiléir.

Tá gach príomhchinnte teoranta do 16 iontráil agus 64 MiB de shonraí JPEG caighdeánacha. Tá na teorainneacha sin neamhspleácha ó uasteorainn 64-iontráil/256 MiB domhanda: cuireann brú cota príomhchinnte as an áireamh is lú a úsáidtear le déanaí sula gcuirtear as an áireamh LRU domhanda. Déantar iontrálacha a éag a ghlanadh ó chuntais an phríomhchinnte agus an domhain ar ghníomhaíocht an chache, agus ní dhéanann cealadh agus teip bailíochta athsholáthar páirteach.

Diúltaíonn an cache do Bhunús neamhchaighdeánach Base64, padding iomarcach, meáin neamh-JPEG, JPEGanna míthreoracha nó gearrtha, agus JPEGanna a chuireann foláireamh le linn deighleog `sharp` iomlán teoranta. Athdhéantar gach íomhá a ghlacadh mar JPEG caighdeánach, faightear leathan agus airde ó na byteanna a dhéantar, seachas muinín a bheith ag na réimsí glaoite, agus cuireann sé aon byteanna polyglot a leanann ar aghaidh as. Ní ghearrtar ach an bufer comhoiriúnach caighdeánach comhoiriúnach ar na cotaí. Áirítear ar theorann JSON an t-uaslaghdán Base64 don 32 MiB uasteorainn ionchur-deoidh. Rianaíonn gach
derivation stóráilte a bhformáid/resolution JPEG a fhíorú, polasaí samplála, leagan derivation, am cruthaithe, hash ábhar a ríomhaítear ag an freastalaí, agus hash tagartha tuismitheora chomh maith le hash ábhar tuismitheora an gcallaigh atá iontaofa. Déantar cealadh a sheiceáil idir céimeanna deighleog/hash asynchrónach sula ndéantar an comhoiriúnacht cache adhmaid.

Úsáideann an táirgeoir táirgeachta frámaí bróicéir a dhéantar cheana ach amháin tar éis anailís amhairc rathúil, gan aon íoslódáil/aistriú físe eile. Éilíonn sé `modalityBridgeVideoDrilldownEnabled=true` ó oibrí, `drilldown: true` do gach cuid, agus ID taifead eochair API aitheanta. Ní shocróidh luachanna príomhchinnte/seisiúin a dhearbhóidh an cliant riamh úinéireacht. Gan na trí choinníoll sin, ní dhéanann sé hash, athraigh méid nó coimeád frámaí breise. Coimeád teip coimeádann an freagra amhairc inúsáidte. Déanann iarratais a cheadaítear an cache toradh físe iomláin a shárú ionas nach gcuirtear toradh coimeádta ar aghaidh riamh.

Éiríonn le freagraí JSON agus SSE ceithre láimhseáil opaca ar a mhéad a nochtar sa chláir `x-omniroute-video-drilldown`. Is féidir le bunúsanna brabhsálaí údaraithe an clár sin a léamh gan polasaí bunaidh CORS a leathnú. Úsáideann láimhseálacha nua `v1.<32-byte random base64url token>`, agus coimeádtar ach a n-íomhánna SHA-256. Glacann an léitheoir/an parseoir clár freisin le laige 64-hex. Is é an tomhaltóir poiblí a bhfuil údarú aige `GET /api/v1/video-bridge/drilldown?handle=...`, atá faoi ghlas go neamhspleách ag `modalityBridgeVideoDrilldownRemoteEnabled=true`. Cuireann bréagchurtha ar fáil rochtain ar ceal fiú nuair a bhíonn an laige `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` gníomhach. Tá an coimeád táirgeachta ag an laige comhoiriúnach `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED`. Tá an dá laige as gnáth.

Tógann an tomhaltóir údarás ón eochair údaraithe, cuireann sé polasaí eochair i bhfeidhm, agus tugann sé an 404 céanna do láimhseálacha anaithnid, a chaoileadh agus láimhseálacha eochair eile. Glacann sé le `variant=preview|standard|detail` (toisí JPEG uasta 320/640/1280, riamh suascláraithe), `limit=1..8` (nó an laige sean `frames`, riamh araon), `page` bunaithe ar nialas, agus sochair `start`/`end` soicind. Cuirtear eochracha fiosrúcháin dúblacha agus fuinneoga fócas athraithe ar ceal. Tá hash ag gach leagan a dhoirteadh a bhaineann lena ábhar fíor agus le miondealbhú réalaíochta, nasctha leis an fhoinse coimeádta. Déantar leaganacha a thógáil ar léamh seachas a stóráil mar chóipeanna coimeádta breise. Tá an freagra JSON, lena n-áirítear Base64/envelope, teoranta ag 32 MiB; cuireann leathanach ró-mhór 413 ar ais agus caithfidh an cliant iarratas a dhéanamh ar níos lú frámaí. Déanann léamha seiceáil ar chealú timpeall ar gach athrú méid agus seiceáil ar dhlíthe láimhseála sula dtugtar ar ais. Is idempotent é `DELETE` ag an úinéir; scaoileann scriosadh nó éag an fhoinse coimeádta agus an cuntas úsáide.

Is áitiúil é an stór comhoibrithe: éiríonn láimhseálacha ar aththosú agus ní féidir iad a aistriú idir próisis OmniRoute neamhspleácha. Nochtann staitisticí bainistíochta polasaí coimeádta/cianda éifeachtach agus iontrálacha/byteanna coimeádta comhoibrithe, riamh na meáin, tagairtí, IDanna príomha nó láimhseálacha. Taispeánann painéal socruithe na fíorluachanna agus is féidir leis an dá chluas a choimeád. Ní hé an doiciméadú cur i bhfeidhm seo fianaise ar imscaradh beo nó ar chur chun cinn; tá glacadh le samhlacha fíor rianaithe go neamhspleách.

Tugtar leaganacha le himeachtaí le chéile leis an múnla Video atá cumraithe. Oidhreachtíonn laige Video folamh an socrú Vision; má tá an dá laige folamh, roghnaíonn an auto-router Vision an múnla éifeachtach atá in ann fís. Athraíonn leaganacha rathúla an chuid bhunaidh le réamhrá seasta `[Video description:` a chuireann marc ar an téacs mar breathnóireacht neamhiontaofa atá bunaithe ar mheáin agus a insíonn do mhúnlaí anuas gan na treoracha a fuarthas sa mheán a leanúint. Áirítear eochracha cache le leaganacha le JPEG byteanna, gníomh, am, agus múnla éifeachtach; ní stóráiltear ach leaganacha rathúla. Coimeádann iontrálacha cache an múnla táirgeora rathúil, lena n-áirítear múnla cúnta; tuairiscíonn an droichead `mixed` nuair a tháinig frámaí éagsúla ó mhúnlaí éagsúla. Úsáideann buille ccache an t-aithint táirgeora sin in ionad é a athainmniú mar an plean bealaigh a iarradh. Tá an ccache toradh ar an iomlán físe bunaithe ar gach ionchur a athraíonn an toradh — gníomh, múnla éifeachtach, polasaí samplála, comhoibriú fráma, mód anailíse seimeanta, fingerprint SHA-256 an leideanna fócasaithe normalaithe, fuinneoige fócas, `transcript`, `audioTranscript`, agus an bratach gníomhaireachta — mar sin tá athrú ar aon cheann de na dimenzí sin mar chás ccache caillte, riamh athúsáid seana. Tá leagan, leibhéal, agus comhoiriúnacht an pholasaí de-dhúblála amhairc leagtha amach go soiléir i gcnaipe ccache toradh agus miondealbhú; mar sin ní féidir le hathrú polasaí athúsáid cur síos seana ar an iomlán físe. Coimeádann miondealbhú ccache toradh v4 an mód agus an fingerprint, riamh an tasc úsáideora amh. Tuairiscíonn miondealbhú cosanta an dá mhód anailíse a iarradh agus a éifeachtach; tuairiscítear mód `focused` a iarradh gan téacs úsáideora inúsáidte mar `full` go héifeachtach.

Tógann an cosantóir gach cuid físe tacaíochta ach ní dhéanann sé cur síos ar níos mó ná `modalityBridgeVideoMaxVideos`. Maidir le sprioc a bhfuil sé cruthaithe go bhfuil `supportsVideo === false`, éiríonn físeáin a theipeann agus a sháróidh an teorainn mar mharcóirí téacs sábháilte soiléir ionas nach maireann físeán amh. Nuair a bhíonn an cumas anaithnid, coimeádann na codanna sin a iompróir físe; leanann aon laige aistriúcháin an comhoiriúnacht téacs teoranta thuas. Éiríonn spriocanna le `supportsVideo === true` an droichead a shárú. Scaipeann comhartha cealú iarratais an chliant trí íoslódáil, gréasán bróicéir, fo-chórais, agus gcalltaí leagan; stopann cealuithe idir físeáin agus ní théann siad ar oscailt go meáin amh.

Tá socruithe rith bunaithe ar DB agus bailí le Zod:

| Eochair                             | Réamhshocrú | Raon / iompar                                                                                                     |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Optional runtime, opt-in                                                                                          |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` coimeádann leaganacha ginearálta; `focused` úsáideann comhoiriúnacht, neamhiontaofa an úsáideora is déanaí |
| `modalityBridgeVideoModel`          | `""`        | Oidhreachtíonn múnla an Droichead Vision                                                                          |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                              |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, nó `segment_aware` comhoiriúnach; teipeanna braiteora ar ais chuig `uniform`            |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                               |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                    |

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

Rithíonn sé ar **an dá** chéim.

- **`preCall`** cloneann sé an payload, siúlann sé `system`, `messages`, `input`, agus
  `prompt` (lena n-áirítear míreanna sreang gnáth), agus cuireann sé `processPII()` (ó
  `@/shared/utils/inputSanitizer`) i bhfeidhm ar na réimsí sreang `content`/`text`. Nuair
  atá `PII_REDACTION_ENABLED=true`, déantar PII a bhrú ar shiúl sa payload amach. Tá sé seo neamhspleách ar `INPUT_SANITIZER_MODE` (a rialaíonn ach polasaí ionchur-prompts). Nuair atá an brú ar shiúl, taifeadann an glao na comhoibrithe braite gan ábhar a scríobh ar ais.
- **`postCall`** cloneanna sé go domhain an freagra, rithíonn sé `sanitizePIIResponse()` plus
  an masker cruth-API na Freagraí (`maskResponsesOutput` — clúdaíonn
  `output_text` agus `output[].content[].text`). Má tharlaíonn aon bhrú ar shiúl, cuireann an
  freagra modified an freagra bunaidh in ionad.

Ní bhacann an guardrail riamh; ní dhéanann sé ach nótaí a chur le (`meta.detections`,
`meta.redacted`) nó a scríobh ar ais.

### Prompt Injection (`promptInjection.ts`)

Braiteann sé struchtúir frithsheasmhacha i n-ábhar a sholáthraíonn an úsáideoir agus éilíonn sé an
polasaí atá cumraithe. Tá an iompar tiomáinte ag athróg timpeallachta agus roghanna conraitheora:

| Socrú            | Athróg timpeallachta                                                                                 | Réamhshocrú | Éifeacht                                                                                                                                                                                                                     |
| ---------------- | ---------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cumasaigh        | `INPUT_SANITIZER_ENABLED`                                                                            | `true`      | Nuair atá `false`, cuireann an guardrail gearr-chuaird.                                                                                                                                                                      |
| Mód              | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`      | Polasaí ionchur: `block`, `warn`, nó `log`. (tá `redact` inghlactha le haghaidh comhoiriúnachta ach ní dhéanann sé **ní** téacs ionchur a bhaint; tá an iarraidh PII a scríobh ar ais rialaithe ag `PII_REDACTION_ENABLED`.) |
| Teorainn blocála | `blockThreshold` rogha / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`      | Is é an déine íosta atá ag teastáil chun blocáil a dhéanamh. Is éard atá i gceist le meán ná breathnú amháin ag an réamhshocrú.                                                                                              |

**Tosaíocht mód** (`getMode`): glaoiteoir `options.mode` →
`INJECTION_GUARD_MODE` **DB feature-flag override** (Dashboard → Socruithe →
Bratacha Gné) → `INJECTION_GUARD_MODE` athróg → `INPUT_SANITIZER_MODE` athróg →
`warn`. Mar sin, buaileann forghníomhú dashboard an athróg timpeallachta, mar sin rialíonn an UI Bratacha Gné an guard a reáchtáil go beo (gan aththosú). Tá an léamh DB sábháilte ó thaobh teipeanna:
má tharlaíonn earráid, téann an guard ar ais chuig an iompar bunaithe ar an athróg timpeallachta, agus nuair nach bhfuil forghníomhú socraithe, tá an iompar comhoiriúnach le réiteach bunaithe ar an athróg timpeallachta.

Foinsí braite:

1. `sanitizeRequest()` ó `@/shared/utils/inputSanitizer` (socraítear braiteoir
   roinnte a úsáidtear in áiteanna eile sa phíblíne).
2. `DEFAULT_GUARD_PATTERNS` atá tógtha isteach (faoi láthair `system_override_inline` agus
   `markdown_system_block`, beirt le déine `high`).
3. `customPatterns` roghnach a cuireadh isteach trí roghanna conraitheora (sreang, regex,
   nó `{ name, pattern, severity }` taifid).

Nuair atá `mode === "block"` **agus** go gcomhlíonann braite amháin an déine
teorainn, cuireann `preCall` ar ais `{ block: true, message: "Request rejected:
suspicious content detected" }`. I módanna `warn`/`log`, logaíonn an guardrail ach
ceadaíonn sé an glao. Tá an cabhair roinnte `evaluatePromptInjection()` ar fáil freisin
do na glaoiteoirí a theastaíonn uathu chun luí a mheas gan dul tríd an gclár.

**Scan bound (v3.8.20):** ní scrúdaíonn an braiteoir ach an **16 KB** **céadta** de
téacs luí comhoibrithe — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) i
`src/shared/utils/inputSanitizer.ts`. Déanann `detectInjection()` agus
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` sula rithtear
an timthriall patrún. Suíonn treoracha ionchur in aice leis an mbarr de ionchur, mar sin cuireann sé teorainn ar CPU/GC regex ar payloads il-hundred-KB gan laige a chur ar bhrath (cf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Rithíonn sé ar **an dá** chéim, deireanach sa shlabhra réamhshocraithe (tosaíocht `95`). Déanann sé
brú ar shiúl patrúin eochair API / rún-tóken a bhfuil aithne orthu ón payload amach (ábhar
teachtaire, argóintí glao uirlis, torthaí uirlis) **agus** freagra an soláthraí, ionas nach
gcuirtear creidiúnacht a gcuirtear isteach i luí (nó a gcuirtear ar ais ag torthaí uirlis) i gcontúirt
don soláthraí suas nó ar ais chuig an gcliant.

- **Opt-in amháin**, an comhoibriú céanna le redaction PII (Riail Chrua #20-tionchar):
  diúltaithe mura bhfuil `settings.credentialRedactionEnabled === true` **nó**
  `CREDENTIAL_REDACTION_ENABLED=true`. Leis sin as, níl an coscán ag obair —
  ní dhéanann sé bac riamh agus ní scríobhann sé ar ais riamh.
- `redactCredentials()` siúlann an cruth iomlán / freagra crann (`walkValue()`,
  sábháilte ó pollution prótótype, sábháilte ó chiorcail trí `WeakSet`) agus cuireann sé
  comhoiriúnachtaí in ionad le
  `[REDACTED:<type>]` ionad, ag clónáil ach na craobhacha a d'athraigh i ndáiríre.
- Coverann `CREDENTIAL_PATTERNS` eochracha soláthraithe LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), toic VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), eochracha íocaíochta (Stripe, Square), eochracha
  scamall (eochair rochtana AWS, Twilio, SendGrid, Mailgun), eochracha príobháideacha / JWTanna,
  sreanganna ceangail a bhfuil creidiúnachtaí acu (`mongodb://user:pass@...`, etc.), agus
  patrún ginearálta `Authorization`/`x-api-key`/`api-key`/`apikey`
  luach. Tá eochracha cruthaithe le haghaidh ceangail (`authorization`, `x-api-key`, `api-key`,
  `apikey`) redacted go struchtúrach (luach amháin, réamhchúram scéime cosúil le
  `Bearer `/`Basic ` coimeádta) seachas trí na gnáth téacs regex.
- Ní dhéanann an coscán bac riamh; ní dhéanann sé ach scríobh ar ais (`modifiedPayload` /
  `modifiedResponse`) agus comhoiriúnachtaí (`meta.credentialsRedacted`, `meta.count`).

Cosc ar athruithe: `tests/unit/credential-masker-guardrail.test.ts`.

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
