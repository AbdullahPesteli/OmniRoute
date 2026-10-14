# Guardrails (Eesti)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Tõeallikas:** `src/lib/guardrails/`
> **Viimati uuendatud:** 2026-08-29 — v3.8.51 (Video Bridge'i transkriptsiooni päritolu deklareerib kutsuja,
> server ei ole seda veel kontrollinud — täpsustatud vastavalt #11661-le)

Kaitsepiirded rakendavad ohutust, poliitikaid ja sisuteisendusi OmniRoute'i ning
ülesvoolu teenusepakkujate vahelisel piiril. Iga kaitsepiire saab kontrollida (ja
valikuliselt tagasi lükata, teisendada või annoteerida) päringu andmekogumeid (`preCall`) ja
ülesvoolu vastuseid (`postCall`).

Süsteem on **tõrke korral läbilaskev**: kui kaitsepiire tekitab käitamisel erindi, salvestab register
vea ja jätkab järgmise kaitsepiirdega, selle asemel et päring nurjata.
Blokeerimine on teadlik otsus (`block: true`), mitte kunagi juhus.

## Sisseehitatud Kaitsepiirded

Registri automaatne laadimine kuue kaitsepiirdega prioriteedi järjekorras impordi ajal
(vaata `registry.ts` → `registerDefaultGuardrails()`):

| Prioriteet | Nimi                | Etapp(id)      | Fail                  |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Madalamad prioriteedinumbrid käivituvad **esimesena**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Interceptib pildiga seotud päringud, mis on suunatud **mitte-visioonimudelitele** ja kas
suunab kogu päringu visioonivõimelisele mudelile või asendab pildiosad tekstikirjeldustega, mis on toodetud konfigureeritava visioonimudeli poolt enne
ülemise päringu tegemist. See võimaldab ainult tekstipõhistel pakkujatel läbipaistvalt hallata
multimodaalseid koormusi.

Protsess:

1. Jäta vahele, kui sihtmudel toetab juba visiooni (kui see ei ole sunnitud sillal `isVisionBridgeForcedModel`).
2. Ekstraheerige pildiosad `extractImageParts(messages)` kaudu
   (`visionBridgeHelpers.ts`), mis delegeerib **ühtse meedia
   detektori** `detectMediaParts()` funktsioonile `open-sse/utils/mediaParts.ts` — ainus tõe allikas, mis on jagatud koos kombinatsioonide ühilduvuse filtriga.
   Ekstraheerimine on lubatud ainult peamistele osadele, mida
   `replaceImageParts` saab tagasi lõigata (ekstraheerimise↔asendamise leping): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, ja Responses API `input_image`. Pesastatud tabamused ja
   ainult indikaatorvormid on kombinatsioonifiltri materjal ja neid ei ekstraheerita kunagi.
   Jäta vahele, kui midagi ei leitud.
3. Lahenda käituskeskkonna konfiguratsioon `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): uued `modalityBridge*`
   seadistuste võtmed võidavad; vanad `visionBridge*` võtmed jäävad **ühetsükliseks
   varukoopiks** (tagasivõtmise aken). Jäta vahele enne igasugust meedia läbimist, kui
   sild on keelatud.
4. Režiimi valija (`modalityBridgeVisionMode`, vaata allolevat tabelit) otsustab
   suunamise vs kirjeldamise. Suunamine tagastab `modifiedPayload`, kus on ainult `model`
   vahetatud, pluss meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Kirjeldamise tee: piirake pilte `maxImages`-iga, koostage ülesande teadlik
   prompt, konsulteerige kirjeldamise vahehoidla, kutsuge visioonimudelit **paralleelselt**
   (`Promise.allSettled`), ja süstige `[Image N]: <description>` tekstiosad nende
   asemele. Ebaõnnestunud kirjeldamine annab `null` ja originaalne pildiosa on
   **säilinud** (#4012) — välja arvatud kombinatsioonide kirjeldamise teel, kui iga
   kirjeldamine ebaõnnestus, kus kinnitatud mitte-visioon ülemine saab
   `(unavailable — no vision-capable provider connected)` stubi asemel (#8430).
6. Tagastage `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Režiimi valija (`modalityBridgeVisionMode`)

| Režiim     | Vaikimisi | Käitumine                                                                                                                                                                                                                                                                     |
| ---------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔         | Vanem heuristika, muutmata (#6640/#7204): mitte-kombineeritud/`auto/` mudelid suunatakse parimale visioonimudelile, välja arvatud juhul, kui algne mudelil on juba kasutatavad mandaadid (siis kirjeldatakse); kombinatsioonide sihtmärgid kirjeldavad alati.                 |
| `describe` |           | Kirjeldage alati — suunamise plokk jäetakse täielikult vahele; kasutaja valitud mudel vastab alati.                                                                                                                                                                           |
| `reroute`  |           | Sunnitud suunamine: hoia-mandaadiga mudeli kaitse jäetakse vahele. Suunamise-**siht** mandaadi kaitse kehtib endiselt — kui ei ole kasutatavat visioonisihtmuda, langeb päring kirjeldamisele, nii et toored pildid ei jõua kunagi ainult tekstipõhisesse tagasiside (#8430). |

Sunnitud režiimid lühendavad **enne** automaatse heuristika käivitumist; `auto` käitumine
on bititasemel identne pre-PR-1 kaitsepiirdega.

#### API-võtme ulatus (`visionBridgeKeyScope.ts`)

Kui kutsuja API võti piirab `allowedConnections`, kvoodi basseinid
(`allowedQuotas`) või mudelid (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), valib sild ainult
suunamise ja kirjeldamise mudelid, mida võti võib kasutada, ühendustes, mida võti võib
kasutada. Kirjeldamise kõne läbib alati OmniRoute ise-silmuse koos
`x-omniroute-self-loop-key-id` päisega, nii et vastuvõttev vestluspäring
kehtestab selle võtme ühenduse ja mudeli poliitika uuesti. `enforceApiKeyPolicy()`
austab seda päist ainult koos ise-silmuse kandjaga, nii et see võib ainult
juurdepääsu kitsendada, ja id, mis ei lahenda, lükatakse tagasi.

Kui võtme jaoks ei ole lubatud visioonimudelit, astub kirjeldamise tee kõrvale ja
päring läbib muutumatuna, sama ebaõnnestumise avatud käitumine nagu keelatud
kaitsepiire (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Päringud ilma võtmeta ja võtmed, millel ei ole neid piiranguid, käituvad täpselt nagu
enne.

#### Ülesande teadlik kirjeldamise prompt (`modalityBridgeVisionTaskAware`)

Vaikimisi **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) lisab
**viimase kasutaja sõnumi** teksti (lühendatud 500 tähemärgini) baaskirjelduse
promptile, suunates kirjelduse sellele, mida kasutaja tegelikult küsis
(codex-vision-proxy muster) ja paludes visioonimudelil transkribeerida nähtav
tekst. Kui lipp on välja lülitatud — või kui kasutaja teksti ei ole — kasutatakse
baasprompti muutumatult.

Kirjelduse enda OpenAI ühilduv päring (`callVisionModelSingle()`
`visionBridgeHelpers.ts`-is) küsib alati `image_url.detail: "high"` —
tingimusteta, iga kutsuja/teenusepakkuja jaoks, mitte sõltuvalt kliendi signaalist.
Madala detailitasemega proovide võtmine halvendab OCR täpsust just selle
teksti-transkribeerimise ülesande jaoks, mida see prompt küsib, seega
kirjelduse päring küsib alati kõrget detailitaset, sõltumata sellest, millist
detailitaset algne sissetulev päring kasutas. See mõjutab ainult sisemist
kirjelduse päringu keha; see ei muuda, kuidas OmniRoute edastab kutsuja
oma `image_url.detail` põhiküsimuses — see vaikeseade rakendatakse eraldi ja
ainult tuvastatud OpenCode klientide jaoks, `defaultImageDetail()`-is
(`open-sse/handlers/chatCore/upstreamBody.ts`). Anthropic wire-format
haru kirjelduse enda silmusest ei oma `detail` välja ja ei ole kumbagi
vaikeseadet mõjutatud.

#### Kirjelduse väljundi piirang (`modalityBridgeVisionMaxChars`)

| Võti                           | Vaikimisi | Vahemik           |
| ------------------------------ | --------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`       | `0` või 100–50000 |

`0` (vaikimisi) tähendab **ilma piiranguta** — `callVisionModel()`-i tagastatud
kirjeldus edastatakse muutumatult, säilitades olemasoleva käitumise. Iga väärtus
vahemikus 100–50000 lühendab kirjelduse `…` sufiksiga enne, kui see
spliced back `[Image N]: <description>`-ina
(`VisionBridgeGuardrail.preCall()` `src/lib/guardrails/visionBridge.ts`-is).
Suurendage seda detailirohkete OCR ülesannete jaoks, kus allavoolu mudel vajab
täielikku transkriptsiooni; vähendage seda, et piirata tokenite kasutamist
kõnelevatel visioonimudelitel. Juhtpaneeli väli asub Vision vahekaartide
Täpsem paneel (`modality-bridge-max-chars` `ModalityBridgeVisionTab.tsx`-is)
ja piirab igasuguseid väärtusi vahemikus 1 kuni 99 100 põrandani, jättes
selge `0` muutumatuks — `0` on kehtiv Zod väärtus omaette
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), mitte
ainult "seadmata" vaikeseade.

#### Kirjelduse vahemälu (`modalityBridge/bridgeCache.ts`)

Mälu LRU + TTL vahemälu kirjelduse väljundite jaoks, jagatud protsessi ulatuses.
Võti = `sha256(imageRef + composedPrompt + configuredBridgeModel)` pikkuse-eelne
raamimine (ilma välja-piiri kokkupõrgeteta). Mudeli komponent on
**konfigureeritud** sildmudel, mitte mudel, mis tegelikult vastas —
`callVisionModel` võib sisemiselt tagasi langeda ja katse järgi võtmine
fragmenteeriks vahemälu. Ebaõnnestunud kirjeldusi ei salvestata kunagi. Seaded:

| Võti                            | Vaikimisi | Vahemik |
| ------------------------------- | --------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`    | —       |
| `modalityBridgeCacheTtlMinutes` | `60`      | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`     | 10–5000 |

#### Kaugpildi normaliseerimine (enda silmus kirjelda/base64 hankimine)

Kui sild hankib **kaug** pilti ise — Anthropic kirjelduse enda kutsumine ja
claude-wire-format base64 konversioon (`ensureBase64ImagesForClaudeWire`),
mõlemad läbi `fetchRemoteImageAsDataUri()` `visionBridgeHelpers.ts`-is —
tulemuslik andme URI edastatakse läbi `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) enne, kui see sisestatakse visioonimudeli
päringusse. Üksikasjalikud pildid vähendatakse **2048px pika servani**
(kooskõlas OpenAI/Anthropic juba serveripoolsete suuruse piirangutega), mis
vähendab üleslaadimise baite/latentsust, ilma et see muudaks, mida visioonimudel
näeb. Suuruse muutmine kasutab `sharp`, mis laaditakse dünaamilise impordi kaudu:
platvormil, kus selle kohalik binaar ei laadi, `normalizeDataUri()` **ei viska
kunagi** — see langeb tagasi algsete baitide edastamisele, nii et kirjelduse/base64
konversiooni tee töötab alati. Mitte-pildi baidid (hankimine, mis ei tagastanud
dekodeeritavat pilti) edastatakse samuti muutumatult. See normaliseerimine on
piiratud piltidele, mida sild hankib oma enda kutsumise jaoks — seda ei rakendata
kunagi kutsuja toore edastamise koormusele, kooskõlas ainult opt-in-muutmise
printsiibiga (Hard Rule #20).

#### Seadete skeem + migratsioon

Uued `modalityBridge*` võtmed on Zod-iga valideeritud `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*` trio ja
`modalityBridgeAudio*` grupp, mida kasutab Audio Bridge. Migratsioon
`141_modality_bridge_settings.sql` kopeerib olemasolevad pärand
`visionBridge*` väärtused vastavatesse uutesse võtmetesse (idempotentne, ei
ülekirjuta kunagi operaatori seadistatud `modalityBridge*` väärtust); pärand
võtmed jäävad aktsepteerituks lugemiseks varu ühe väljaandmise tsükli jooksul.

#### Läbipaistvuse päis + statistika

Kirjeldatud muudetud vastused sisaldavad
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(koostatud `buildModalityBridgeHeader()`-is `modalityBridge/bridgeStats.ts`,
tembeldatud `withModalityBridgeHeader()`-is `src/sse/handlers/chatHelpers.ts`).
Ümber suunatud päringud ei saa **ühtki** päist — koormus jäi muutumatuks ja
mudeli vahetus on juba nähtav vastuse keha `model` väljas.

`GET /api/modality-bridge/stats` (halduse autentimine, sama tase kui
`GET /api/settings`) tagastab mälus olevad per-modality loendurid
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` `vision`, `audio` ja
`video` jaoks. `averageLatencyMs` kasutab `latencySamples`, mitte kõiki katseid, kui
nimetajat; operatsioon, millel pole ajastust, ei loo null-millisekundilist
näidist. `bridged` jääb tagurpidi ühilduvaks alias'eks eduka
muundamise jaoks; ebaõnnestunud katsed ei suurenda seda.
Loendurid lähtestatakse protsessi taaskäivitamisel disaini järgi
(telemeetria, mitte raamatupidamine).

#### Armatuurlaua konfiguratsioon

Pühendatud armatuurlaua leht on
`/dashboard/settings/modality-bridge`. Selle URL-iga `Vision`, `Audio`,
ja `Video` vahekaartide query parameetrid säilivad vahekaartide `tab` väärtuse vahetamisel.
Vision vahekaart avab lubamise, režiimi, mudeli valiku (sealhulgas automaatse
vaikimisi), ülesande teadlikud küsimised, täiustatud aja/pildi/kirjelduse pikkuse/mälu
piirangud, tööaeg
loendurid ja kaitstud näidise taotlus. Audio vahekaart on samuti aktiivne: see avab
lubamise, STT-ainult mudeli valija Auto, aja/max-clip piirangud, audio
loendurid ja `input_audio` näidistesti. Video vahekaart on funktsionaalne: see teatab
FFmpeg/ffprobe tööaja olekust — üks neljast selgest UI olekust (`unknown`, kui
probe on lennul või ei saanud lõpetada, `restricted` mitte-loopback
armatuurlaua hostil, kus probe jäetakse kliendi poolelt vahele, `unavailable`, kui
probe on uuritud ja kinnitatud puuduvaks, või `available` koos FFmpeg/ffprobe versioonidega) — säilitab
lubamise/mudeli/raami/video/aja piirangud, filtreerib mudeli valijat visioonivõimeliste
mudelite jaoks ja avab video loendurid.

Endine Vision Bridge kaart AI seadetes on ühilduvuse link
uuele lehele; see ei oma enam teist koopiat vormist. Meedia pakkujad
seovad samuti Pilt-teksti ja Kõne-teksti töövood vastavate Modality
Bridge vahekaartidega, eemaldamata olemasolevat Kõne-teksti mänguväljakut.

**Iseloomuliku ringluse lubamine:** kui kirjeldamise kõne suunatakse läbi OmniRoute'i
enda `/v1` iseloomuliku ringluse (mitte-standardne pakkuja mudel), saadab
alam-päring `x-omniroute-admission-bypass: internal` ja autentitakse lahendatud
iseloomuliku ringluse akreditiiviga — kohalik `sk_omniroute` sentinels kohalikus režiimis või
operaatori konfigureeritud `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` keskkonna muutuja (#1350), et
`REQUIRE_API_KEY=true` juurutused saaksid endiselt kirjeldamise kõnet käivitada. Lubamine
kehtib ainult nende täpsete akreditiivide jaoks, seega ei saa välist kliendid
kasutada päist, et mööda minna lubamisest.

Päranddefaults asuvad `src/shared/constants/visionBridgeDefaults.ts`; uued
režiimi/ülesande-teadlikud/mälu defaults ja seadete lahendaja asuvad
`src/shared/constants/modalityBridgeDefaults.ts`. Kaitsepiire avab
`deps` konstruktorivaliku, et testid saaksid süstida vale `getSettings` ja
`callVisionModel` rakendusi.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Katsed audio sisaldavate vestluspäringute pealt, enne kui need jõuavad sihtkohta, mis ei ole
tuntud audio sisendi aktsepteerimiseks. See ei suuna vestluspäringut ümber: audio osad
transkribeeritakse olemasoleva OpenAI ühilduva mitmeosalise lõpp-punkti kaudu ja
valitud vestlusmudel jätkab tekstiliste transkriptsioonidega.

Protsess:

1. Lahenda `supportsAudio` kaudu `getResolvedModelCapabilities()`. Selged
   pakkuja-registeri metaandmed võidavad, seejärel staatilised mudeli metaandmed, seejärel sünkroniseeritud
   `modalities_input`. Deklareeritud sisendloend ilma `audio` on `false`; ei
   jää mingit võimekuse tõendit `null`. Nii `false` kui ka `null` aktiveerivad
   konservatiivse silla, samas kui `true` möödub sellest.
2. Lahenda `modalityBridgeAudio*` seaded ja eralda splicetavad tipp-taseme
   audio osad igast sõnumist läbi jagatud `detectMediaParts()`
   detektori. Toetatud juhtme kujud on OpenAI `input_audio`, `audio_url` ja
   `source.media_type: "audio/*"`. Pesastatud audio tuvastatakse suunamiseks, kuid ei
   eemaldata splicing teelt. Töö on piiratud `modalityBridgeAudioMaxClips`-iga;
   hilisemad osad jäävad puutumatuks.
3. Austa konfigureeritud `provider/model`, või lase `selectAudioBridgeModel()` kõndida
   `AUDIO_TRANSCRIPTION_PROVIDERS` stabiilses katalooge järjekorras ja valida esimene
   mudel, millel on kasutatav aktiivne pakkuja akreditiiv.
4. `callAudioTranscription()` muundab base64/data-URI audio mitmeosalise
   `file`, või allalaadib kaug-`audio_url` läbi ainult avaliku väljamineva
   kaitse koos DNS pinning'uga ja 25 MB piiranguga. Seejärel POSTib faili ja valitud
   mudeli kohalikku `/v1/audio/transcriptions` iseloomulikku ringlusse, autentitakse
   `resolveSelfLoopBearer()` kaudu. Olemasolev transkriptsiooni marsruut teostab normaalset
   akreditiivi otsingut, jahutuse/kiiruspiirangute käsitlemist ja pakkuja edastamist.
5. Edulood asendavad oma osad `[Audio N]: <transcript>`. Kõned
   töötavad `Promise.allSettled`: individuaalne ebaõnnestumine säilitab algse
   audio osa (#4012 leping). Kui iga kõne ebaõnnestub ja sihtkoht on tõestatud
   `supportsAudio === false`, muutuvad osad
   `[Audio N]: (puudub — ei ole STT pakkujat ühendatud)` (#8430 leping). Tundmatu
   sihtkoha (`null`) puhul jääb kõik ebaõnnestumise tulemus puutumatuks. Tõestatud
   tekst-ainult sihtkoht, millel ei ole kasutatavat STT akreditiivi, saab sama selge
   stub'i, ilma et oleks vaja võrgu kõnet teha.

Edukad transkriptsioonid kasutavad protsessi ulatuses Modality Bridge LRU/TTL vahemälu. Võti
kombineerib audio viite, stabiilse `audio-transcription` operatsiooni
sildi ja valitud STT mudeli; ebaõnnestumisi ei salvestata kunagi. Audio katsed uuendavad
jagatud `bridged`, `cacheHits`, `failures` ja `lastUsedAt` loendureid.
Muudetud vastused sisaldavad
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; puutumatud
päringud ei saa Audio Bridge segmenti.

Tööaeg seaded on DB-toetatud ja Zod-validateeritud:

| Võti                          | Vaikimisi | Vahemik         |
| ----------------------------- | --------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`    | —               |
| `modalityBridgeAudioModel`    | `""`      | Auto või STT ID |
| `modalityBridgeAudioTimeout`  | `60000`   | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`       | 1–10            |

Jagatud vahemälu jääb kontrolli alla `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ja `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Interceptib tipp-taseme video osi Chat Completions `messages` ja Responses
API `input` enne, kui sihtmärk, millel pole teadaolevat natiivset video tuge, on kutsutud.
Toetatud vormid on `input_video`, `video_url`, `video_source`, HTTPS URL-id,
ja `data:video/*;base64,...` andme-URI-d. Tavalisi failinimesid tekstis ei käsitleta
kui videot.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) vastutab päringu läbimise,
võime/poliitika kontrollimise, päringupõhise kogumise ja vastuse koormuse eest.
Iga video töö — omandamine, kogu tulemuse vahemälu, kaadriseeria kirjeldamine
(kus liidetakse kõik kõneleja deklareeritud helitranskriptsioonid) ja katse
mõõdikud/katkestamine/puhastamine — on peidetud `processVideoPart` taga
`videoBridgePipeline.ts`-is, mida kutsutakse kord iga video osa jooksul `preCall`
tsüklis. See moodul määratleb ka selged sadama piirid `VideoMediaBrokerPort`
(baitide omandamine ja proovikaadrite eraldamine), `VideoAudioTranscriptionPort`
(kus liidetakse kõneleja deklareeritud helitranskriptsioon proovitud pealdistega) ja
`VideoDrilldownPort` (pärandlik toorandmete kuju). Tootmis-STT ja kaadri säilitamine
on koostatud kirjeldava sadama ümber `createVideoSttAdapter` ja
`createVideoDrilldownAdapter` kaudu; viimane kasutab jagatud opak-handle elutsüklit.

Avalik `/v1` päringu tee ei impordi ega kutsu alamsüsteemi. Kaugvideod
laaditakse alla 50 MiB piiranguga; inline base64 videod omavad
konservatiivset 36 MiB dekodeeritud per-video piiri, et mudel/sõnumid/raamistiku
ümbris saaks jääda avaliku JSON päringu vastuvõtu piirangusse 50 MiB. Inline
pikkuse ja dekodeeritud suuruse hinnangud kontrollitakse enne eraldamist. HTTPS on
nõutav algse kaug-URL-i ja iga ümbersuunamise puhul, kasutades olemasolevat
avaliku ainult väljamineku kaitset koos DNS kinnitamisega. Baitide kaudu ületatakse
täpset sisemist `POST /api/modality-bridge/video/extract` vahendaja piiri. See marsruut on
nii `LOCAL_ONLY` kui ka `SPAWN_CAPABLE`, aktsepteerib ainult protsessipõhist
autentitud, usaldusväärset tagasisuunatud päringut ja ei aktsepteeri kunagi URL-i,
failisüsteemi teed, täidetavat või argumentide loendit. API keha suuruse torustik ja
käitleja järkjärguline keha lugeja jõustavad iseseisvalt 50 MiB vahendaja sisendi piiri.
Selle piiratud järjekord töötab ühe eraldamise kaupa, lubab neli ootel tööd ja piirab
ootel sisendi 100 MiB.

Vahendaja sees loeb `ffprobe` privaatset kohalikku faili; fikseeritud formaadi
lubamisloend välistab mängu- ja manifestiformaadid. Lubatud MOV-perekonna
konteinerite puhul jäävad välistatud MOV andmete viidatud vaikimisi ja fikseeritud
käsk ei liitu nendega. Nii `ffprobe` kui ka `ffmpeg` kasutavad
`file`-ainult protokolli lubamisloendit, ühte lõime, fikseeritud argumentide massiive,
ilma shellita ja täidetavaid, mis on lahendatud `PATH`-ist. Kinnitatud pildi katte
voogusid ei saa mängida. Kõik mängitavad vood peavad vastama piirangutele ja
eelistatakse selge vaikimisi voog enne määratlemata madalaima indeksi
tagasipöördumist. Videod on piiratud 600 sekundiga, 8,192 piksliga mõõtme kohta ja
33,554,432 allika piksliga. FFmpeg proovib 1–16 keskpunkti JPEG kaadreid, vähendab
pika serva maksimaalselt 1,024 pikslini ilma väiksemaid sisendeid suurendamata ja
ei saa kunagi URL-i. Proovimine on vaikimisi `uniform`. Valikuline
`scene_aware` ja eksperimentaalne `segment_aware` poliitika teevad ühe täiendava
fikseeritud FFmpeg läbimise juba valideeritud kohalikul voolul, valivad piiratud
`showinfo` stseenide ajatempleid ja tagastavad deterministlikult samad
ühtlased keskpunktid detektori tõrke, ajaülevaate, vale väljundi või tühja
kandidaadi komplekti korral. Segment-tundlik režiim eraldab keskpunkti proove
proportsionaalselt valideeritud stseenide intervallidega; segment-tundlikud tõendid
ja tagasipöördumise käitumine on allpool üksikasjalikult kirjeldatud. Ranget 16-kaadri piiri
rakendatakse pärast valikut igas poliitikas. Kui stseenitundlik päringul on ainult
ühe kaadri eelarve, kasutab see aktiivse täisvideo või fookusakna ühtlast
keskpunkti ja teatab `policyEffective: uniform`: üks valitud stseenikaader
ei saa säilitada mõlemat ajaliselt lõppu. Kõneleja võib valikuliselt anda
piiratud fookusakna (`start`/`end` sekundid); piirid on piiratud meedia
kestvusega, pööratud või mittepiiratud aknad lükatakse tagasi ja kõik proovimise
poliitikad viiakse läbi ainult normaliseeritud intervallis. Tulemuseks olev
aken on kaasatud proovimise metaandmetesse ja usaldusväärsesse kirjeldus
prefiksisse, et allavoolu mudelid saaksid eristada fookustatud väljavõtet
täielikust ajajoont.

Semantilise pealkirja fookus on eraldi, selge seadistus. Vaikimisi `full`
analüüsirežiim säilitab olemasoleva kaadrikutsumise ja ei edasta kunagi päringu
teksti pealkirjamudelile. `focused` režiimis loeb sild, ainult viimast
mitte-tühja kasutaja autoritud `text`/`input_text` samast Chat või Responses
konteinerist, normaliseerib selle NFC-ks, kokku kukutab juhtimismärgid ja
tühikud ning piirab seda 500 Unicode koodipunktiga. Tühine tulemus tagastatakse
täpselt `full` kutsena. Kasutatav vihje serialiseeritakse JSON-ina
pühendatud usaldusväärse kasutaja konteksti plokis ja võib ainult prioriseerida
täheldatavaid detaile; see ei saa ületada eraldi hoiatust järgida juhiseid,
mis on nähtavad või kuuldavad meedias. Tekstuaalne fookus ei tuleta
`start`/`end` ega muuda ajaliselt proovima.

#### FU-07 struktuurne segmentide tõend

`segment_aware` kasutab ühte piiratud eelanalüüsi läbimist juba valideeritud kohaliku videovoo üle. Fikseeritud filtrite ahel skaleerib esmalt maksimaalselt 320 pikslit laiuselt, tuvastab stseenimuutused ja külmunud intervallid, seejärel proovib 1 kaadrit sekundis hägususe, keskmise luma ja ruumilise/aegse teabe jaoks. Läbimine on piiratud 600 struktuurse proovi, ühe FFmpeg/filteri lõime, sama `file`-ainult protokolli ja konteineri lubatud nimekirjade, 1 MiB protsessi väljundi piiranguga ning maksimaalselt 30 sekundiga maakleri jagatud katkestuse/tähtaega. See ei aktsepteeri kunagi käsku, filtrit, teed ega URL-i päringust.

Struktuursed väärtused on deterministlikud proovide tõendid, mitte semantilised video mõistmised. Need ei järeldada subjekte, tegevusi, pealkirju, kõnet ega kasutaja kavatsust. Stseeni ja külmumise piirid moodustavad segmente; külmumise katvus, hägus, eksponeerimine, ruumiline detail ja ajamuutus mõjutavad ainult seda, kuidas olemasolev 1–16 kaadri eelarve jaotatakse. Täiesti külmunud segment on piiratud ühe kaadriga, samas kui mitte-külmunud segmendid konkureerivad ülejäänud eelarve pärast. Kui piirid ületavad kaadreid, säilitatakse ühtlane ajaskaala katvus, et kiired varased lõiked ei saaks varjata pikka järgnevat segmenti. Stseenipiirid, mis asuvad 1-sekundilise analüüsi resolutsioonis külmumise piiri sees, koondatakse.

Puuduvad filtrid, valesti vormindatud/tühjad tõendid, detektori viga või piiratud eelanalüüsi tähtaeg ebaõnnestuvad avatud täpselt ühtlase keskmise poliitika järgi. Kõne katkestamine või maakleri tähtaeg ei ebaõnnestu avatud: see lõpetab õhus oleva alamprotsessi, takistab hilisema kaadri ekstraktsiooni ja privaatne ajutine puu eemaldatakse `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genereerib deterministlikud reaalsed FFmpeg fiktiivid post-dedup pealkirja-kõne säästmiseks, tiheda liikumise eelarve jaotamiseks, hägususe/eksponeerimise/SI-TI tõendite jaoks, kiirete lõikude jaoks pika sabaga ja järkjärgulise hägustumise vale positiivsete jaoks. See salvestab eelanalüüsi seinaaja ja, kus `/usr/bin/time` on saadaval, lapse CPU ja tipptasemel RSS. Selle kvaliteedikontrollid on ainult struktuursed oraaklid. Reaalse pealkirja mudeli kvaliteet jääb `HOLD`, kuna see rakendus ei oma volitatud lõpp-punkti ega külmunud kohtunikku. Raha säästud jäävad samuti `HOLD`, kui `--caption-cost-per-call-usd` ei paku selget positiivset per-kõne hinnangut; skript ei valeta kumbagi tulemust.

Iga kaader on piiratud 4 MiB, kõik toored kaadrid kokku 23 MiB ja serialiseeritud maakleri vastus 32 MiB. Privaatne ajutine kataloog eemaldatakse `finally`. OmniRoute ei paki FFmpeg-i ja ei aktsepteeri kohandatud täidetava tee. Enne pealkirjastamist rakendab sild konservatiivse visuaalse deduplication läbimise: iga JPEG vähendatakse 16×16 halltooni puhvri ja võrreldakse ainult viimase säilitatud kaadriga. Kui nõutud pealkirja eelarve ületab ühe kaadri, annab ekstraktsioon piiratud kandidaadi basseini, mis on kuni kaks korda suurem sellest eelarvest ja mitte kunagi rohkem kui 16 kaadrit. Nõutud piirang rakendatakse ainult pärast deduplicationit, kusjuures esimesed ja viimased valitud kandidaadid säilitatakse lõplikul hõrenemisel, kui eelarve on vähemalt kaks. Versioonitud `grayscale-16x16-mean-cells-v2` poliitika kasutab suuremat keskmise luma delta ja thumbnaili rakkude suhet, mille normaliseeritud delta on vähemalt 0.05. Duplikaadi lävi on konstant 0.04, valitud ennustatavuse tõttu, mitte avaldatud jooksva seadistuse seadistuseks. See sekundaarne kõrge kontrastsuse signaal säilitab väikese liikumise ja nähtava teksti muutused, mida ainult keskmise võrdlemisega varjata saab. Võrdleja või dekooderi vead ebaõnnestuvad avatud ja säilitavad katvuse. Väljundi metaandmed eraldavad ekstraktitud kandidaadid, edukalt kasutatud kaadrid ja visuaalsed duplikaadid, mis on maha jäetud.

Selgelt märgitud videoosa võib taotleda ajastatud kontaktlehte. Sild koostab maksimaalselt 4-samba, 16-kaadrise JPEG ruudu. Iga 512-piksline rakk põletab oma allika ajastuse kõrge kontrastsuse alumisse riba, samas kui samad ajastused jäävad tekstilisse metaandmesse edasise seose ja auditi jaoks. Täielik JPEG jääb piiratud 32 MiB. Kui `sharp` ei suuda ruutu dekodeerida või koostada, tagastab sild individuaalsed JPEG kaadrid; kliendi katkestamine levib siiski läbi lehe operatsiooni.

Edendamise tõendid on teadlikult eraldi sünteetilisest koostamisest mikrobenchmarkist. `scripts/perf/video-bridge-contact-sheet-eval.ts` määratleb skeemi-versiooniga A/B rakenduse reaalse OpenAI ühilduva visioonimudeli jaoks. See mõõdab teenusepakkuja teatatud tokeneid, lõpust lõpuni seina latentsust (sealhulgas lehe koostamine), mudeli-kõne arvu ja manifestiga määratletud fakti säilitamist. Toored mudeli vastused ei kirjutata aruandesse; ainult SHA-256 kokkuvõtted ja vastavad fakti ID-d säilitatakse. Rakendus ei tee ühtegi võrgu- või tasulise mudeli kõnet, välja arvatud juhul, kui `--execute-real` on edastatud ja `--model`, `OMNIROUTE_BASE_URL` ja `OMNIROUTE_API_KEY` on konfigureeritud. Ilma selle selge reaalse käitamiseta jääb selle masinaga loetav otsus `HOLD`; sünteetilised koormuse/kõne-arvu mõõtmised üksi ei ole edendamise tõendid.

Erinev `scripts/perf/video-bridge-promotion-eval.ts` tarbib FU-07 või FU-09 tähelepanekuid. Edendamise vastuvõtt nõuab kõiki kaheksat sünteetilist stsenaariumi tüüpi pluss sanitiseeritud reaalset klippi, vähemalt kolme mõõdetud kordust iga rolli ja juhtumi jaoks, kõiki kümmet deklareeritud mõõdikut, külmunud meedia/käsk/oodatud-fakti/seadistuste kokkuvõtteid, unikaalse tähelepaneku ID-d ja kontrollitud seemne A/B järjekorda. Täitmise kviitung seob korpuse kokkuvõtte, täpse kandidaadi SHA ja mudeli versiooni. Puuduvad või kehtetud mõõtmised jäävad `HOLD`, sealhulgas CPU üle 30 s, tipptasemel RSS üle 512 MiB või eelanalüüs üle 30 s. Need on tõendite vastuvõtu piirangud, mitte uus jooksva RSS jõustamise garantii.

FU-07 nõuab vähemalt 98% kvaliteedi säilitamist ja p95 latentsust mitte rohkem kui 1.2x
baasi, pluss kas 0.05 absoluutne juhtumite tasakaalustatud keskmise meenutamise paranemine
võrdsete keskmiste pealkirjade kõnede korral või vähemalt 10% vähem keskmisi post-dedup pealkirjade
kõnesid. FU-09 nõuab vähemalt 0.85 kvaliteeti, 95% säilitamist, 20% p95 latentsuse
vähenemist ja 10% tokenite vähenemist. Kriitiline faktikaotus, süstimise vastavus või
puuduv kasutamine takistab edutamist. Üks täitmine ei saa midagi edutada:
`--previous-report` kinnitab kahte eristuvat, mitteühtivat, järjestikust
sobivat täitmist sama poliitika/mudeli versiooni/kandidaadi/korpuse jaoks.
Proovide katse ei saa kinnitada kontaktlehe katset.

Kogujad peaksid hindama vastuseid mälus ja salvestama `responseDigest` pluss
mõõdikud ja vaatlus sidumised, mitte kunagi vastuse teksti. Tarbija loeb
ka pärandlikke tooreid vaatlusandmeid, kuid ei kopeeri seda teksti oma aruannetesse. Täpselt
üks `responseDigest` või `rawResponseText` on iga vaatlus jaoks aktsepteeritud.
Versioonitud lubade nimekiri jääb tühjaks koos muutumatute `hold` vaikeväärtusega. Sobiv
kandidaat nõuab oma tõendite viidet, poliitikat, mudeli versiooni, täpset
kandidaadi SHA-d, manifesti digest'i ja kahte eristuvat jooksu ID-d; vastuolulised
kontekstid lükatakse tagasi. Need metaandmed on auditi leping, mitte tõend, et viidatud
fail sisaldab ehtsaid mõõtmisi. Kontrollige tegelikke kviitungeid enne
iga sissekande lisamist. Juhtimise statistika lõpp-punkt ja Video armatuurlaud
näitavad konservatiivset valmidust. Ainult konfigureeritud mudeli alias ei
määra selle versiooni ega jooksva kandidaadi SHA-d, seega praegune armatuurlaud
raporteerib `HOLD` pigem kui kasutab teise täitmise konteksti sobivust. Selge
eksperimentaalne valik jääb edutamisest eraldi; vaikimisi ei muudeta automaatselt.

Kutsujad võivad lisada valikulise `transcript.cues` massiivi toetatud video
osale, kui nad juba omavad joondatud teksti. Iga vihje peab sisaldama `text`, lõplikku
`start`/`end` intervalli uuritud kestuse sees ja valitud `source` (`client`, `embedded` või
`audio-bridge`); `confidence` vaikeväärtus on `1` ja peab jääma vahemikku `0` ja `1`.
Täpsed duplikaadid koondatakse. OmniRoute ei alusta transkriptsiooni sellest metaandmest:
kehtestatud vihjed kopeeritakse kirjeldatud tulemusse koos allika, usaldusväärsuse ja
intervalliga ning neid esitatakse usaldamatute vaatlustena koos raamipealkirjadega. Kehtetu,
vahemikust väljas või päritoluta tekst lükatakse tagasi, mitte ei segata pealkirjade voogu.
Mõlemad päringu keha transkriptsiooni kanalid normaliseerivad esitatud
päritolu `client`, sealhulgas ise kinnitatud `embedded` või `audio-bridge`
sildid. Ainult serveri omanduses olev adapter saab määrata need usaldusväärsed sildid
ainult koodi kaudu `trustedSource` argumendiga; päringu JSON väli ei saa
sellele argumendile juurde pääseda. Transkriptsiooni tekst jääb usaldamatuks meedia
tuletatud sisuks, sõltumata selle päritolust, ja ei tohi kunagi määrata autoriseerimist.

Küps kutsuja võib esitada `audioTranscript` raja sama video jaoks;
seda käsitletakse kliendi esitatud tekstina, mitte serveri transkriptsiooni tõendina.
Fusiooni õmblus käivitab visuaalsed ja helivaatlused ühe tähtaega ja katkestusmärguande
alla, tellib need ühisel ajakaval, koondab täpsed duplikaadid ja raporteerib osalise
tulemuse, kui ainult üks külg õnnestub. Kehtetu `audioTranscript` degradeerub
sellele osalisele tulemusele — visuaalne kirjeldus hoitakse ja helikülg salvestab
sanitiseeritud tõrkekoodi — selle asemel, et kogu videot ebaõnnestuda. Iga haru
saadavus, osaline lipp ja sanitiseeritud tõrkekoodid säilitatakse kirjeldatud
tulemuses, kaitsemetaandmetes (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), tulemuste vahemälu metaandmetes ja sildade
fusiooni loendurites. Vaikimisi Video Bridge rada ei aktiveeri kõneteksti
ega laadi teist meedia koopiat; ilma selle selge rajata jääb see ainult
videoks.

**Transkriptsiooni säilitamine (#12150 P1).** See kehtib automaatselt, kui
Video Bridge (isegi opt-in) renderdab transkriptsiooni vihje — eraldi
säilitamise lippu ei ole. Kui päring renderdab mis tahes transkriptsiooni vihje (kutsuja
deklaritud `transcript` või fusioonitud `audioTranscript`), märgib kaitse
selle `videoBridgeObserved` ja toodab redigeeritud vari video kirjeldusest —
identne renderdus, kus iga vihje vaba teksti keha asendatakse
`[redacted-video-transcript]`, mis on koostatud struktureeritud vihje välja
asendamise teel enne stringi kokkupanekut (kunagi mitte tasandatud teksti
parsimise kaudu, seega ei saa ükski vihje sisu — vaenulik või tavaline, sealhulgas
kehad, mis sisaldavad `]`, nagu `[inaudible]`/`[music]` — ellu jääda). Püsiv
kõne-logi päringu keha vahetab iga video tuletatud teksti osa selle redigeeritud
variandi vastu, mis on vastavuses sisu võrdsusega; `fullText` ankur loetakse
uuesti lõpetatud eel-kõne kaitsekoormusest, seega vastavus õnnestub ka hilisemate
ahelate kaitse (PII ja tunnustuse maskeerijad, prioriteedid 10/95) kirjutavad
kirjelduse teksti kohapeal ja pärast süsteemi-käsku/üleminekut/mälu süstimist
kujundavad sõnumi massiivi. Ülesanne, mis saadetakse mudelile, jääb muutumatuks.
Kinnitatud päring ei täida ka püsivat Mälu (nii päringu- kui ka vastuse tuletamine
jäetakse vahele), seega ei saa mudeli enda vastus peegeldada transkriptsiooni teksti
Mälu.

**Toored video väljad (#12430).** Kui sild on aktiveeritud ja kohalik video tugi on
teadmata või puudub, aktiveerivad määratud `transcript`/`audioTranscript` väljad
ka `videoBridgeObserved`, isegi pärast kirjelduse ebaõnnestumist või `maxVideos`
piiri. `null` ja tühjad stringid loetakse; puuduvad väljad ja mitte-video
metaandmed ei loeta. Säilitatud koopiad redigeerivad need väljad või jätavad
päringu välja, ja vahemälu/Mälu jäetakse vahele. Pakkuja koormus jääb
muutumatuks.

Lisatud säilitatud koopiad kasutavad sama jälgitud päringu signaali. Toores
enne-äärise kliendi-päringu hetkeseis, mälus ootel päring ja varajane
tagasi lükatud päringu logi asendavad struktuurselt video osade transkriptsiooni
väljad; stringi käsud, mis on sünteesitud toru etappide ja konteksti edastamise
käigus, on redigeeritud püsiva päringu keha sihtpunktis. Püsiv `video_content_removed`
märkeruut muudab `previous_response_id` jätkamise ebaõnnestumiseks, mitte
taaskonstruktsiooniks tekstiks, mis oli tahtlikult kõrvale jäetud. Kui jälgitud
päring kaotab oma osade kaupa redigeerimise varju enne logimist, või isegi kui
üks mitmest video varjust ei vasta hilisemate päringu muutuste järel, jäetakse
säilitatud päringu keha täielikult välja, selle asemel et säilitada osaliselt
redigeeritud transkriptsioon.

Jälgitud päringu puhul võib mudeli vastus tsiteerida mis tahes osa
transkriptsioonist ilma struktureeritud vihje piirita. Seetõttu asendatakse
püsiv kõne-logi `responseBody` puudumise märkeruuduga; detailne
toru artefakt (mis võib sisaldada ülemise/kliendi kehi ja voogude osi)
ei ole säilitatud. Semantilised, idempotentsuse ja mõtlemise taasesituse
vahemälud mööduvad selle päringu lugemisest ja kirjutamisest. Pakkuja päring
ja kliendile nähtav vastus jäävad muutumatuks. Varajased keepalive bait
tühjendatakse ajutisest puhvrist, kui detailne artefakt on välja jäetud. Kiro
vale EventStream hoiatus teatab ainult koormuse baitide arvust, mitte kunagi
selle sisust või JSON parseri toorest veast.
See ei väida, et iga mitteseotud pakkuja/plugin diagnostika on auditeeritud;
laiem säilitatud sihtpunktide puhastus on jälgitud #11658.

Sisemine `/api/modality-bridge/video/drilldown` elutsükkel on eraldi,
tagasiside/token-autentimise vahemälu alus. Iga toiming nõuab ka
kanonilist läbipaistmatut peamist ID-d. Enne tootmis-kõneleja lubamist peab
see tuletama selle ID autentitud üürnikust ja ei tohi kunagi edastada
kliendi valitud väärtust. Vahemälu võtmed seovad selle peamise kanoniliste
sessiooni ja video viidete ID-dega, salvestavad ainult nende SHA-256 tuletatud
võtmed ning piiravad nii lugemist kui ka kustutamist samale peamisele. Vahemälu
salvestab maksimaalselt 16 tuletatud JPEG raami iga sissekande kohta, aegub
need kümne minuti pärast ja toetab piiratud `start`/`end` lugemist või
selget sessiooni kustutamist.

Iga peamine on piiratud 16 sissekande ja 64 MiB kanonilise JPEG andmetega. Need
piirangud on sõltumatud globaalsest 64-sissekande/256 MiB laest: peamise
kvota surve eemaldab ainult selle peamise kõige hiljuti kasutatud sissekanded
enne globaalse LRU eemaldamise kaalumist. Aegunud sissekanded eemaldatakse
nii peamisest kui ka globaalsetest arvestustest vahemälu tegevuse käigus,
samal ajal kui tühistamine ja valideerimise ebaõnnestumine ei kinnita
osalist asendamist.

Vahemälu lükkab tagasi mitte-kanonilise Base64, liigse täienduse, mitte-JPEG
meedia, vale või lühendatud JPEG-d ja JPEG-d, mis tekitavad hoiatuse
piiratud täispildi `sharp` dekodeerimise ajal. See kodeerib iga aktsepteeritud
pildi kanoniliseks JPEG-ks, tuletab laius ja kõrgus dekodeeritud baitidest
asemel, et usaldada kõneleja välju, ja loobub igasugustest lõpp-poli-glot
baitidest, selle asemel et neid säilitada. Ainult piiratud kanoniline
kompressitud puhver arvestatakse mõlema kvoodi jaoks. JSON-i traadi piirang
kaasab Base64 ülejäägi 32 MiB dekodeeritud sisendi lae jaoks. Iga
salvestatud tuletamine registreerib oma valideeritud JPEG formaadi/resolutsiooni,
proovivõtu poliitika, tuletamise versiooni, loomise aja, serveri arvutatud
sisu hash'i ja hashitud vanema viite pluss usaldusväärse kõneleja vanema
sisu hash. Tühistamine kontrollitakse asünkroonsete dekodeerimise/hash
faaside vahel enne aatomilist vahemälu kinnitamist.

Tootmis tootja kasutab juba tuletatud maakleriraame ainult pärast
eduka visuaalanalüüsi, ilma teise video allalaadimise/ekstraktsioonita. See
nõuab operaatori `modalityBridgeVideoDrilldownEnabled=true`, ranget
osade kaupa `drilldown: true` ja autentitud API-võtme kirje ID-d. Kliendi
deklaritud peamine/sessiooni väärtused ei loo kunagi omandiõigust. Ilma
kõigi kolme tingimuseta ei hashita, muudetud ega säilitata täiendavaid raame.
Säilitamise ebaõnnestumine säilitab kasutatava visuaalse vastuse. Nõusolekuga
päringud mööduvad kogu video tulemuste vahemälust, nii et vahemälus olevad
tulemused ei taasesita käepidemeid.

Edulood JSON ja SSE vastused paljastavad maksimaalselt neli läbipaistmatut
käepidet piiratud `x-omniroute-video-drilldown` päises. Volitatud brauseri
allikad saavad seda päist lugeda ilma CORS allika poliitika laiendamata. Uued
käepidemed kasutavad `v1.<32-byte random base64url token>`, ja registris
säilitatakse ainult nende SHA-256 hashid. Lugemise/päise parser aktsepteerib
ka pärand 64-hex käepidemeid. Autentitud avalik tarbija on
`GET /api/v1/video-bridge/drilldown?handle=...`, iseseisvalt piiratud
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Selgelt säilitatud vale
tühistab juurdepääsu isegi siis, kui pärand `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED`
keskkonna tagasivõtmine on lubatud. Tootmis säilitamisel on analoogne
pärand `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` tagasivõtmine. Mõlemad
tagasivõtmised on vaikimisi välja lülitatud.

Tarbija tuletab omandiõigust autentitud võtme põhjal, rakendab võtme poliitikat
ja tagastab sama 404 tundmatute, aegunud ja teise võtme käepidemete jaoks. See
aktsepteerib `variant=preview|standard|detail` (maksimaalne JPEG mõõde 320/640/1280,
kunagi mitte suurendatud), `limit=1..8` (või pärandi `frames` alias, mitte kunagi
mõlemad), null-põhine `page` ja valikuline `start`/`end` fookuse sekundid.
Duplikaat päringu võtmed ja pööratud fookusaknad lükatakse tagasi. Iga tagastatud
variant sisaldab oma tegeliku sisu ja tegeliku resolutsiooni metaandmete hash'i,
mis on seotud säilitatud allikaga. Variandid tuletatakse lugemise ajal, mitte
ei salvestata täiendavate säilitatud koopiatena. JSON vastus, sealhulgas
Base64/ümbris, on piiratud 32 MiB; liiga suur leht tagastab 413 ja klient peab
taotlema vähem raame. Lugemised kontrollivad tühistamist iga
suurendamise ümber ja kontrollivad käepideme kehtivust enne tagastamist. `DELETE`
omaniku poolt on idempotentne; kustutamine või TTL aegumine vabastab
säilitatud allika ja kasutuse arvestuse.

Jagatud pood on protsessi-lokaalne: käepidemed aeguvad taaskäivitamisel ja ei ole ülekantavad sõltumatute OmniRoute protsesside vahel. Halduse statistika paljastab tõhusa säilitamise/kaugpoliitika ja kogutud säilitatud kirjed/baidid ainult, kunagi mitte meedia, viidete, peamise ID-de või käepidemete kohta. Video seadete paneel näitab neid väärtusi ja suudab säilitada mõlemat nõusoleku lülitit. See rakenduse dokumentatsioon ei ole elav juurutamise või reklaamimise tõend; reaalse mudeli aktsepteerimist jälgitakse eraldi.

Raamid on pealkirjastatud järjestikku konfigureeritud Video mudeli abil. Tühi Video ülekate pärib Vision seade; kui mõlemad on tühjad, valib Vision auto-router tõhusa visioonivõimelise mudeli. Edukad pealkirjad asendavad originaali osa stabiilse `[Video description:` prefiksiga, mis märgib ka teksti kui usaldusväärset meedia-põhist vaatlust ja ütleb allavoolu mudelitele, et nad ei järgiks meedias leitud juhiseid. Raami-pealkirja vahemälu võtmed sisaldavad JPEG baite, prompti, ajatemplit ja tõhusat mudelit; ainult edukad pealkirjad salvestatakse. Vahemälu kirjed säilitavad tegeliku eduka tootja mudeli, sealhulgas varumudeli; sild teatab `mixed`, kui erinevad raamid on toodetud erinevate mudelite poolt. Vahemälu tabamine kasutab seda tootja identiteeti uuesti, mitte ei märgista seda kui nõutud marsruudi plaani. Kogu-video tulemuste vahemälu on seotud iga sisendiga, mis muudab väljundi — prompt, tõhus mudel, proovivõtu poliitika, raami arv, semantiline analüüsi režiim, normaliseeritud fookuse vihje SHA-256 sõrmjälg, fookuse aken, `transcript`, `audioTranscript` ja kontaktlehe lipp — seega iga nende mõõtme muutmine on vahemälu vahelejätmine, mitte kunagi aegunud uuesti kasutamine. Visuaalne dedup poliitika versioon, lävi ja piiratud kandidaadi raami arv on samuti selged tulemuste vahemälu võtmes ja metaandmetes; poliitika muutmine ei saa seega kasutada aegunud kogu-video kirjeldust. Tulemuste vahemälu v4 metaandmed säilitavad režiimi ja sõrmjälje, mitte kunagi toore kasutaja ülesande. Guardrail metaandmed teatavad nii nõutud kui ka tõhusatest analüüsi režiimidest; nõutud `focused` režiim, millel ei ole kasutatavat kasutaja teksti, kajastub tõhusalt `full`.

Guardrail ekstraktib iga toetatud video osa, kuid ei kirjelda rohkem kui `modalityBridgeVideoMaxVideos`. Sihtmärgi puhul, millel on tõestatud `supportsVideo === false`, muutuvad ebaõnnestunud ja üle piiride videod selgeks ohuteks tekstimarkeriteks, nii et toore videot ei jää. Kui võimekus on teadmata, jäävad need osad puutumatuks. Sihtmärgid, millel on `supportsVideo === true`, ületavad silda. Kliendi taotluse katkestamise signaal levib allalaadimise, vahendaja järjekorra, alamprotsesside ja pealkirja kõnede kaudu; katkestused peatavad videode vahel ja ei ebaõnnestu kunagi toore meedia avamiseks.

Käitusaja seaded on DB-toega ja Zod-validateeritud:

| Võti                                | Vaikimisi   | Vahemik / käitumine                                                                                        |
| ----------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Valikuline käitusaja, opt-in                                                                               |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` säilitab üldised pealkirjad; `focused` kasutab piiratud, usaldusväärset viimase kasutaja konteksti  |
| `modalityBridgeVideoModel`          | `""`        | Pärib Vision Bridge mudeli                                                                                 |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                       |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` või proportsionaalne `segment_aware`; detektori ebaõnnestumine tagastab `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                        |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                             |

Ajaloolised püsivad Video aegumise väärtused üle 120 sekundi on piiratud vahendaja tähtaega; uued seaded, mis ületavad seda piiri, lükatakse tagasi. `GET /api/modality-bridge/video/runtime` nõuab usaldusväärset templated loopback lokaalsust enne autentimist või käitusaja uurimist, seejärel nõuab halduse autentimist. See tagastab ainult `available`, sanitiseeritud FFmpeg/ffprobe versioonid ja fikseeritud põhjuse, kui käitusaja ei ole saadaval. Sisemine ekstraktsiooni lõpp-punkt ei ole avalik üleslaadimise API: järjekorra küllastus tagastab `503` pluss `Retry-After`, kõne katkestamine tagastab `499` ja fikseeritud vahendaja tähtaeg tagastab `504`. Muudetud vastused lisavad `video->text;model=<visionModel>;parts=<videos>` kesksele `x-omniroute-modality-bridge` päisele, eemaldamata Vision või Audio segmente.

### PII Masker (`piiMasker.ts`)

Töötleb **mõlemas** etapis.

- **`preCall`** kloonib koormuse, kõnnib `system`, `messages`, `input` ja `prompt` (sealhulgas tavalised stringi elemendid) ning rakendab `processPII()` (alates `@/shared/utils/inputSanitizer`) stringi `content`/`text` väljadele. Kui `PII_REDACTION_ENABLED=true`, siis tuvastatud PII on väljaminevas koormuses redigeeritud. See on sõltumatu `INPUT_SANITIZER_MODE` (mis kontrollib ainult prompti sisestamise poliitikat). Kui redigeerimine on välja lülitatud, salvestab kõne tuvastamise arveid ilma sisu ümber kirjutamata.
- **`postCall`** sügavalt kloonib vastuse, käivitab `sanitizePIIResponse()` pluss vastuste API-kuju maskeri (`maskResponsesOutput` — katab `output_text` ja `output[].content[].text`). Kui toimub mõni redigeerimine, asendab muudetud vastus originaali.

Guardrail ei blokeeri kunagi; see ainult annotatsioonib (`meta.detections`, `meta.redacted`) või kirjutab ümber.

### Prompt Injection (`promptInjection.ts`)

Tuvastab vaenulikke struktuure kasutaja esitatud sisus ja rakendab
konfigureeritud poliitikat. Käitumine sõltub keskkonnamuutujatest ja konstruktorivalikutest:

| Seade               | Keskkonnamuutuja                                                                                     | Vaikimisi | Mõju                                                                                                                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lubatud             | `INPUT_SANITIZER_ENABLED`                                                                            | `true`    | Kui `false`, siis kaitse lühendab.                                                                                                                                                          |
| Režiim              | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`    | Süstimise poliitika: `block`, `warn` või `log`. (`redact` on tagasipööramise ühilduv, kuid ei eemalda süstimise teksti; PII ümberkirjutamine on kontrollitud `PII_REDACTION_ENABLED` abil.) |
| Blokeerimise künnis | `blockThreshold` valik / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`    | Minimaalne tõsidus, mis on vajalik blokeerimiseks. Keskmine on vaikimisi ainult jälgimiseks.                                                                                                |

**Režiimi eelõigus** (`getMode`): kutsuja `options.mode` →
`INJECTION_GUARD_MODE` **DB funktsioonilippude ülekirjutamine** (Dashboard → Seaded →
Funktsioonilippude haldamine) → `INJECTION_GUARD_MODE` keskkonnamuutuja → `INPUT_SANITIZER_MODE` keskkonnamuutuja →
`warn`. Seega võidab juhtpaneeli ülekirjutamine keskkonnamuutujad, nii et Funktsioonilippude UI kontrollib jooksvaid kaitsemehhanisme reaalajas (ilma taaskäivitamiseta). DB lugemine on vigade suhtes turvaline:
kui see ebaõnnestub, tagastab kaitse keskkonnapõhise käitumise ja kui ülekirjutust ei ole seadistatud, on käitumine identne ainult keskkonna lahendusega.

Tuvastamise allikad:

1. `sanitizeRequest()` failist `@/shared/utils/inputSanitizer` (jagatud detektor
   komplekt, mida kasutatakse mujal torustikus).
2. Sisseehitatud `DEFAULT_GUARD_PATTERNS` (praegu `system_override_inline` ja
   `markdown_system_block`, mõlemad `high` tõsidusega).
3. Valikuline `customPatterns`, mis edastatakse konstruktorivalikute kaudu (stringid, regex,
   või `{ name, pattern, severity }` kirjed).

Kui `mode === "block"` **ja** vähemalt üks tuvastamine vastab tõsiduse
künnisele, tagastab `preCall` `{ block: true, message: "Päring tagasi lükatud:
kahtlane sisu tuvastatud" }`. Režiimides `warn`/`log` logib kaitse, kuid
lubab kõne. Jagatud abimees `evaluatePromptInjection()` on samuti eksporditud
kutsujatele, kes peavad hindama käske ilma registri kaudu minemata.

**Skaneerimise piirang (v3.8.20):** detektor kontrollib ainult **esimese 16 KB**
liidetud käsu tekstist — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 baiti)
failis `src/shared/utils/inputSanitizer.ts`. Nii `detectInjection()` kui
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` enne mustri tsükli käivitamist.
Süstimise direktiivid asuvad sisendi ülaosas, seega piirab see regex CPU/GC
mitusada KB koormuste puhul, ilma et tuvastamine nõrgeneks (vt #3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Töötleb **mõlemas** etapis, viimane vaikimisi ahelas (prioriteet `95`). Eemaldab
tuntud API-võtme / salajase märgise mustrid väljaminevas koormuses (sõnumi
sisu, tööriista kutsumise argumendid, tööriista tulemused) **ja** pakkuja vastuses, nii et
krediitkaart, mis on käsu sisse kleepitud (või tööriista tulemuse kaudu tagasi kajastatud), ei leki
ülesvoolu pakkujale ega tagasi kliendile.

- **Ainult valikuline**, sama konventsioon nagu PII eemaldamine (Hard Rule #20-naaber):
  keelatud, kui `settings.credentialRedactionEnabled === true` **või**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kui see on välja lülitatud, on kaitse mitteaktiivne —
  see ei blokeeri kunagi ja ei ümberkirjuta kunagi.
- `redactCredentials()` läbib kogu koormuse/vastuse puu (`walkValue()`,
  prototüübi saastumise ohutu, tsükli ohutu `WeakSet` kaudu) ja asendab vasteid
  `[REDACTED:<type>]` kohatäitega, kloonides ainult need oksad, mis tegelikult
  muutusid.
- `CREDENTIAL_PATTERNS` katab LLM pakkuja võtmed (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokenid (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maksevõtmed (Stripe, Square), pilve
  võtmed (AWS juurdepääsuvõti, Twilio, SendGrid, Mailgun), privaatvõtmed / JWT-d,
  krediiti sisaldavad ühendusstringid (`mongodb://user:pass@...` jne) ja
  üldine `Authorization`/`x-api-key`/`api-key`/`apikey` päise-väärtuse
  muster. Päise kujul olevad võtmed (`authorization`, `x-api-key`, `api-key`,
  `apikey`) eemaldatakse struktuurselt (ainult väärtus, skeemi eelosa nagu
  `Bearer `/`Basic ` säilitatakse) mitte üldise tekstiregexi kaudu.
- Kaitse ei blokeeri kunagi; see ainult ümberkirjutab (`modifiedPayload` /
  `modifiedResponse`) ja annotatsioonid (`meta.credentialsRedacted`, `meta.count`).

Tagasivõtmise kaitse: `tests/unit/credential-masker-guardrail.test.ts`.

## Baasleping (`base.ts`)

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
  block?: boolean; // true katkestab ahela kohe
  message?: string; // kuvatakse blokeerimisel
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // tagastatakse preCall poolt päringu ümberkirjutamiseks
  modifiedResponse?: TValue; // tagastatakse postCall poolt vastuse ümberkirjutamiseks
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

Kaitsepiire annab „muudatus puudub” märku, tagastades kas `void`, `{}` või
`{ block: false }`. Väärtuse `modifiedPayload`/`modifiedResponse` tagastamine asendab
ahelas allavoolu kaitsepiiretele edastatava väärtuse.
`signal?: AbortSignal` edastab kutsuja elutsükli kaitsepiiretesse. Päringu katkestamine on tahtlik tõrke korral jätkamise erand: meediasillad peatavad töö ja puhastavad ressursid, taastamata töötlemata meediat sihtkohale, mis teadaolevalt seda ei toeta.

## Register (`registry.ts`)

Üksikeksemplar `guardrailRegistry` võimaldab järgmist:

- `register(guardrail)` — lisab kaitsepiirde (või asendab selle normaliseeritud nime alusel) ja
  sordib uuesti kasvava `priority` järgi.
- `clear()` / `list()` — haldusabimeetodid.
- `runPreCallHooks(payload, context)` — läbib aktiivsed kaitsepiirded, edastab
  lasti läbi `modifiedPayload` ja peatub esimese `block: true` korral.
- `runPostCallHooks(response, context)` — sama voog vastuse poolel.
- `resetGuardrailsForTests({ registerDefaults })` — tühjendab oleku ja soovi korral
  registreerib vaikeseaded uuesti, et tagada testide puhas isoleeritus.

Mõlemad käitajad tagastavad `{ blocked, payload|response, results, guardrail?, message? }`,
kus `results` on kirjete `GuardrailExecutionResult` massiiv, mis sisaldab
iga kaitsepiirde välju `blocked`, `skipped`, `modified`, `error` ja `meta`,
mis on kasulikud jälitamiseks.

### Kaitsepiirete keelamine päringupõhiselt

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` koondab
duplikaatideta loendi kaitsepiirete nimedest, mis tuleb praeguse
päringu puhul vahele jätta. Allikad (kõik valikulised, kõik ühendatakse):

- `apiKeyInfo.disabledGuardrails`
- Päringu keha `disabledGuardrails` (tipptasemel)
- Päringu keha `metadata.disabledGuardrails`
- Päis `x-omniroute-disabled-guardrails` (või pärandvormingus
  `x-disabled-guardrails`)

Väärtused võivad olla stringide massiivid või komadega eraldatud string; nimed
normaliseeritakse väiketähtedega kebab-kirjapilti (`pii_masker` → `pii-masker`). Tulemus
edastatakse registrile `context.disabledGuardrails` kaudu, mis jätab
sobivad kaitsepiirded vahele (`skipped: true` väljal `results`).

## Käivitusjärjekord

Iga päringu puhul, mis liigub läbi `src/sse/handlers/chat.ts` ja
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` koostab API võtme, päringu keha ja päiste
   põhjal vahelejäetavate kaitsepiirete loendi.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` käivitab kaitsepiirded prioriteedi
   kasvavas järjekorras:
   - Keelatud kaitsepiirded märgitakse olekuga `skipped`.
   - Iga kaitsepiirde `preCall` võib `modifiedPayload` kaudu andmekoormuse ümber kirjutada.
   - Esimene `block: true` katkestab ahela ja töötleja tagastab
     kaitsepiirde tagasilükkamisvastuse.
3. (Võimalikult ümber kirjutatud) andmekoormus liigub kombineeritud marsruutimise ja
   ülesvoolu saatmise etappi.
4. Pärast vastuse koostamist käivitab `guardrailRegistry.runPostCallHooks(...)`
   vastuse jaoks sama ahela. Siinne `block: true` kõrvaldab ülesvoolu
   vastuse.

Erindi visanud kaitsepiirded registreeritakse kujul `error: <message>` ja logitakse
`logger.warn` kaudu, kuid ahela täitmine jätkub — see on kavandatud tõrke korral lubama.

## Konfiguratsioon

Sisseehitatud kaitsepiirete loetavad keskkonnamuutujad:

| Muutuja                               | Kasutaja                 | Mõju                                                                                                    |
| ------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Tuvastamise täielikuks keelamiseks määrake väärtuseks `false`.                                          |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Süstimise poliitika: `warn`, `block` või `log`. Pärandväärtus `redact` ei kirjuta süstimisteksti ümber. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Süstimiskaitse režiim; ühtlasi DB funktsioonilipp, mis **alistab** keskkonnamuutujad (DB > ENV).        |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | Minimaalne raskusaste, mille `MODE=block` tagasi lükkab: `high` (vaikimisi), `medium` või `low`.        |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | Muutuja `INPUT_SANITIZER_BLOCK_THRESHOLD` pärandalias.                                                  |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | Kui väärtus on `true`, redigeeritakse päringu isikuandmed (süstimisrežiimist sõltumatult).              |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (allavoolu) | Juhib vastusepoolse maskeri käitumist.                                                                  |

Modality Bridge'i kaitsepiirded loevad käitusaegset konfiguratsiooni DB-põhisest
sätete hoidlast (`getSettings()`), mitte keskkonnamuutujatest. Visioni peamised võtmed on
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ja
`modalityBridgeCacheMaxEntries`. Pärandvõtmeid
`visionBridge*` aktsepteeritakse ainult dokumenteeritud ühe tsükli pikkuse lugemise
varuvariandina; juhtpaneel kirjutab peamistesse võtmetesse. Vaikeväärtused ja varuvariandi
lahendaja asuvad failis `src/shared/constants/modalityBridgeDefaults.ts`, pärand-
konstandid on säilitatud failis `src/shared/constants/visionBridgeDefaults.ts`.

Audio kasutab võtmeid `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` ja `modalityBridgeAudioMaxClips` ning lisaks jagatud
`modalityBridgeCache*` sätteid. Audiol puudub pärandvõtmete varuvariant, sest need
võtmed võeti kasutusele koos Modality Bridge'i skeemiga.

Video kasutab võtmeid `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` ja
`modalityBridgeVideoTimeout` ning lisaks jagatud `modalityBridgeCache*` sätteid.
See on vaikimisi keelatud, sest FFmpeg/ffprobe on valikulised käituskeskkonna
sõltuvused ning kaadrite kirjeldamine lisab viivitust ja mudeli kasutamise kulu.

## Kohandatud kaitsepiirded

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

Sammud:

1. Looge `src/lib/guardrails/myGuardrail.ts`, mis laiendab klassi `BaseGuardrail`.
2. Rakendage `preCall` ja/või `postCall`.
3. Registreerige kas importimise ajal (lisage funktsioonist `registerDefaultGuardrails`) või
   kutsuge käitusajal välja `guardrailRegistry.register(...)` — register asendab
   kõik varasemad sama normaliseeritud nimega kaitsepiirded.
4. Lisage testid kataloogi `tests/unit/` (olemasolevad näited:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testimine

Kasutage testide vahel funktsiooni `resetGuardrailsForTests()`, et alustada teadaolevast olekust.
Tühja registriga alustamiseks edastage `{ registerDefaults: false }` ja
registreerige ainult testitavad kaitsepiirded. Vision Bridge toetab sõltuvuste
sisestamist (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge pakub
samaväärseid liideseid seadete, võimekuste, STT-mudeli valimise, mandaatide
kontrollimise ja transkribeerimise jaoks. Seega saavad testid kontrollida mõlemat
voogu ilma andmebaasi- või võrgujuurdepääsuta.

## Vaadake ka

- `src/lib/guardrails/` — teostus
- `src/shared/utils/inputSanitizer.ts` — ühine tuvastaja, millel põhinevad
  promptisüsti tuvastamine ja isikuandmete maskeerimine
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge'i vaikeväärtused ja
  sunnitud sillaga mudelite loend
- `src/shared/constants/modalityBridgeDefaults.ts` — Visioni/Audio ühised käitusaja vaikeväärtused
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonaalne kiht (kaitselüliti, ooteajad)
- `docs/reference/ENVIRONMENT.md` — keskkonnamuutujate täielik teatmik

## Süstikaitse marsruutide katvus ja red-team-testimine (8. etapp · plokk D)

Süstikaitse (`createInjectionGuard` / `withInjectionGuard`) hõlmab kõiki marsruute,
mis võtavad vastu kasutaja prompte. See järgib muutujat `INJECTION_GUARD_MODE` (vaikimisi `warn` = ainult logimine;
`block` = tagastab HTTP 400 `SECURITY_001`).

| Tüüp               | Marsruudid                                                                                                                                           | Vaikerežiim |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Tekst (olemasolev) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn        |
| Genereeriv         | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn        |
| Andmed             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn        |

Teksti eraldamine (`extractMessageContents`) hõlmab välju `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team-testimine (igal ööl, `nightly-llm-security.yml`):** promptfoo kontrollib, et iga marsruut blokeeriks
OWASP-LLM-i korpuse režiimis `INJECTION_GUARD_MODE=block`; garak käitab sonde (jäetakse saladuse puudumisel vahele).
`moderations` on järjepidevuse huvides kaasatud — plokirežiimi operaatorid saavad selle funktsiooni
`resolveDisabledGuardrails` kaudu erandiks määrata.

Igaöisel töövoolel (`.github/workflows/nightly-llm-security.yml`, cron + käsitsi
käivitamine) on kaks tööd:

- **`promptfoo-guard` (blokeeriv)** — käitab käsku `promptfoo eval -c promptfooconfig.yaml`
  režiimiga `INJECTION_GUARD_MODE=block`. Iga ründejuhtum (nt „ignoreeri kõiki
  varasemaid juhiseid…“, DAN-stiilis turvapiirangutest möödahiilimised) kontrollib, et vastus sisaldaks
  `error.code === "SECURITY_001"`, st et kaitse lükkas päringu tegelikult tagasi.
- **`garak` (nõuandev)** — käitab garakit võtmega `--probes promptinject,dan,leakreplay`
  kohaliku OmniRoute'i eksemplari (`http://localhost:20128/v1`) suhtes. Käivitamine sõltub
  teenusepakkuja saladusest (`PROMPTFOO_PROVIDER_KEY`); selle puudumisel jäetakse töö korrektselt vahele ja sellele on lisatud
  `|| true`, mistõttu esitatakse aruanne ilma CI-d nurjamata.

Kaitse abifunktsiooni (`createInjectionGuard` / `withInjectionGuard`)
katvus hõlmab kõiki prompte kandvaid `/v1` marsruute; prompti tekst võetakse väljadest
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` funktsiooniga
`extractMessageContents()` failis `src/shared/utils/inputSanitizer.ts`.
