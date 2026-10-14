# Guardrails (Latviešu)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Patiesības avots:** `src/lib/guardrails/`
> **Pēdējoreiz atjaunināts:** 2026-08-29 — v3.8.51 (Video Bridge transkripta izcelsmi deklarē izsaucējs,
> serveris to vēl nepārbauda — precizēts saskaņā ar #11661)

Aizsargmehānismi nodrošina drošības, politiku un satura transformāciju ievērošanu uz robežas
starp OmniRoute un augšupējiem pakalpojumu sniedzējiem. Katrs aizsargmehānisms var pārbaudīt (un
pēc izvēles noraidīt, transformēt vai anotēt) pieprasījumu lietderīgo slodzi (`preCall`) un
augšupējās atbildes (`postCall`).

Sistēma ir **kļūmju gadījumā atvērta**: ja aizsargmehānisma izpildes laikā rodas izņēmums, reģistrs
reģistrē kļūdu un turpina ar nākamo aizsargmehānismu, nevis izraisa pieprasījuma
kļūmi. Bloķēšana ir apzināts lēmums (`block: true`), nevis nejaušība.

## Iebūvēti Aizsargi

Reģistrs automātiski ielādē sešus aizsargus prioritātes secībā importēšanas laikā
(skatīt `registry.ts` → `registerDefaultGuardrails()`):

| Prioritāte | Nosaukums           | Posms(-i)      | Faila nosaukums       |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Zemākas prioritātes numuri darbojas **vispirms**.

### Vision Bridge (`visionBridge.ts`) — Modalitātes Tilts PR-1

Intercepcē attēlu nesošas pieprasījumus, kas vērsti uz **ne-vīzijas modeļiem**, un vai nu
pārsūta visu pieprasījumu uz vīzijas spējīgu modeli, vai arī aizvieto attēlu
daļas ar tekstuālām aprakstiem, ko rada konfigurējams vīzijas modelis pirms
augšupejošā izsaukuma. Tas ļauj tikai teksta sniedzējiem caurspīdīgi apstrādāt
multimodālus slodzes.

Plūsma:

1. Izlaist, ja mērķa modelis jau atbalsta vīziju (ja vien tas neparādās
   piespiedu tiltu sarakstā `isVisionBridgeForcedModel`).
2. Izvilkt attēlu daļas, izmantojot `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), kas deleģē uz **apvienoto mediju
   detektoru** `detectMediaParts()` failā `open-sse/utils/mediaParts.ts` —
   vienīgais patiesības avots, kas kopīgs kombinētās saderības filtram.
   Izvilkšana ir atļauta tikai augstākā līmeņa daļām, kuras
   `replaceImageParts` var atkal pievienot (izvilkšanas↔aizvietošanas līgums): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, un Responses API `input_image`. Iekšējie trāpījumi un
   tikai indikatora formas ir kombinētā filtra materiāls un nekad netiek izvilkti.
   Izlaist, ja nekas nav atrasts.
3. Atrisināt izpildes konfigurāciju, izmantojot `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): jauni `modalityBridge*`
   iestatījumu atslēgas uzvar; vecās `visionBridge*` atslēgas paliek kā
   **viena cikla atpakaļgaitas** (atgādinājuma logs). Izlaist pirms jebkuras mediju
   pārvietošanas, kad tilts ir atslēgts.
4. Režīma selektors (`modalityBridgeVisionMode`, skatīt tabulu zemāk) nosaka
   pārsūtīšanu pret aprakstu. Pārsūtīšana atgriež `modifiedPayload` ar tikai
   `model` nomainītu, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Apraksta ceļš: ierobežot attēlus līdz `maxImages`, sastādīt uzdevumam
   atbilstošu uzvedni, konsultēties ar apraksta kešu, izsaukt vīzijas modeli
   **paralēli** (`Promise.allSettled`), un injicēt `[Image N]: <description>` tekstu
   to vietā. Neveiksmīgs apraksts dod `null`, un oriģinālā attēla daļa ir
   **saglabāta** (#4012) — izņemot kombinētā apraksta ceļā, kad katrs
   apraksts neizdevās, kur apstiprināts ne-vīzijas augšupejošais saņem
   `(unavailable — no vision-capable provider connected)` stubu (#8430).
6. Atgriezt `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Režīma selektors (`modalityBridgeVisionMode`)

| Režīms     | Noklusējums | Uzvedība                                                                                                                                                                                                                                                                                       |
| ---------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔           | Mantojuma heuristika, netraucēta (#6640/#7204): ne-kombinētie/`auto/` modeļi pārsūta uz labāko vīzijas modeli, ja vien oriģinālais modelis jau nav ieguvis izmantojamus akreditīvus (tad apraksta); kombinētie mērķi vienmēr apraksta.                                                         |
| `describe` |             | Vienmēr apraksta — pārsūtīšanas bloks tiek pilnībā izlaists; lietotāja izvēlētais modelis vienmēr atbild.                                                                                                                                                                                      |
| `reroute`  |             | Piespiedu pārsūtīšana: akreditēto modeļu aizsardzība tiek apietta. Pārsūtīšanas-**mērķa** akreditēšanas aizsardzība joprojām attiecas — kad nav izmantojama vīzijas mērķa, pieprasījums tiek novirzīts uz aprakstu, tādējādi neapstrādāti attēli nekad nenonāk tekstu tikai aizmugurē (#8430). |

Piespiedu režīmi īsā ceļā darbojas **pirms** automātiskās heuristikas; `auto` uzvedība
ir baitu identiska iepriekšējā PR-1 aizsargā.

#### API atslēgas apjoms (`visionBridgeKeyScope.ts`)

Kad izsaucēja API atslēga ierobežo `allowedConnections`, kvotu baseinus
(`allowedQuotas`) vai modeļus (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), tilts tikai
izvēlas pārsūtīšanas un apraksta modeļus, kurus atslēga var izmantot, uz savienojumiem, kurus atslēga var
izmanto. Apraksta izsaukums tad vienmēr iet cauri OmniRoute pašpārvietošanai ar
`x-omniroute-self-loop-key-id` galveni, tādējādi saņemošais čata pieprasījums
atkal ievēro šīs atslēgas savienojuma un modeļa politiku. `enforceApiKeyPolicy()`
godā šo galveni tikai kopā ar pašpārvietošanās nesēju, tādējādi tā var tikai
sašaurināt piekļuvi, un identifikators, kas neatrisina, tiek noraidīts.

Ja neviena vīzijas modeļa atslēga nav atļauta, apraksta ceļš atkāpjas un
pieprasījums tiek nodots nemainīts, tāda pati fail-open uzvedība kā atslēgtam
aizsargam (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Pieprasījumi bez atslēgas un atslēgas bez šiem ierobežojumiem uzvedas tieši tāpat kā
iepriekš.

#### Uzdevumam atbilstošs apraksta uzvednis (`modalityBridgeVisionTaskAware`)

Noklusējums **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) pievieno
**pēdējā lietotāja ziņojuma** tekstu (saīsinātu līdz 500 rakstzīmēm) bāzes
apraksta pieprasījumam, novirzot aprakstu uz to, ko lietotājs patiešām jautāja
(codex-vision-proxy modelis) un lūdzot redzes modeli transkribēt redzamo
tekstu. Ar izslēgtu karodziņu — vai bez lietotāja teksta — bāzes pieprasījums
tiek izmantots nemainīts.

Apraksta pašcikla OpenAI saderīgais pieprasījums (`callVisionModelSingle()`
failā `visionBridgeHelpers.ts`) vienmēr pieprasa `image_url.detail: "high"` —
neierobežoti, katram izsaucējam/piegādātājam, nebalstoties uz jebkuru klienta
signālu. Zemas detalizācijas paraugu ņemšana samazina OCR precizitāti tieši
tajā teksta transkripcijas uzdevumā, ko šis pieprasījums prasa, tāpēc apraksta
izsaukums vienmēr pieprasa augstu detalizāciju, neatkarīgi no tā, kādu
detalizācijas līmeni izmantoja sākotnējais ienākošais pieprasījums. Tas
ietekmē tikai iekšējo apraksta pieprasījuma ķermeni; tas nemaina to, kā
OmniRoute pārsūta izsaucēja paša `image_url.detail` primārajā pieprasījumā —
šis noklusējums tiek piemērots atsevišķi un tikai atklātajiem OpenCode
klientiem, `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic vadu formāta apraksta pašcikls nav `detail` lauks un netiek
ietekmēts ne no viena noklusējuma.

#### Apraksta izvades ierobežojums (`modalityBridgeVisionMaxChars`)

| Atslēga                        | Noklusējums | Diapazons         |
| ------------------------------ | ----------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`         | `0` vai 100–50000 |

`0` (noklusējums) nozīmē **nav ierobežojuma** — apraksts, ko atgriež
`callVisionModel()`, tiek nodots nemainīts, saglabājot esošo uzvedību. Jebkura
vērtība diapazonā no 100 līdz 50000 saīsina aprakstu ar `…` sufiksu pirms
tā tiek pievienots kā `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` failā `src/lib/guardrails/visionBridge.ts`).
Palieliniet šo vērtību detalizētiem OCR uzdevumiem, kur apakšējais modelis
nepieciešams pilnīgai transkripcijai; samaziniet to, lai ierobežotu tokenu
izmantošanu uz runīgajiem redzes modeļiem. Informācijas panelis atrodas
Redzes cilnes Papildu panelī (`modality-bridge-max-chars` failā
`ModalityBridgeVisionTab.tsx`) un ierobežo jebkuru vērtību starp 1 un 99
līdz 100 grīdai, vienlaikus atstājot skaidru `0` neskartu — `0` ir derīga
Zod vērtība pati par sevi
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nevis
vienkārši "neiestatīta" noklusējuma vērtība.

#### Apraksta kešatmiņa (`modalityBridge/bridgeCache.ts`)

LRU + TTL kešatmiņa apraksta izvadei, kopīga visai procesam.
Atslēga = `sha256(imageRef + composedPrompt + configuredBridgeModel)` ar
garuma prefiksa ietvaru (nav lauka robežu sadursmju). Modeļa komponents ir
**konfigurētais** tilta modelis, nevis modelis, kas faktiski atbildēja —
`callVisionModel` var iekšēji atgriezties, un atslēgošana pēc mēģinājuma
sadalītu kešatmiņu. Neizdevušies apraksti nekad netiek kešoti. Iestatījumi:

| Atslēga                         | Noklusējums | Diapazons |
| ------------------------------- | ----------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`      | —         |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000   |

#### Attālinātās attēlu normalizācija (pašcikla apraksts/base64 iegūšana)

Kad tilts iegūst **attālinātu** attēlu pats — Anthropic apraksta
pašizsaukums un claude-vadu formāta base64 konversija
(`ensureBase64ImagesForClaudeWire`), abi caur
`fetchRemoteImageAsDataUri()` failā `visionBridgeHelpers.ts` — rezultātā
iegūtais datu URI tiek nodots caur `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) pirms tā tiek iekļauta redzes modeļa
pieprasījumā. Pārmērīgi lieli attēli tiek samazināti līdz **2048px garajai
malai** (atbilst resize ierobežojumam, ko OpenAI/Anthropic jau piemēro
servera pusē), kas samazina augšupielādes baitus/latentumu, nemainot to,
ko redzes modelis redz. Izmēru maiņa izmanto `sharp`, kas tiek ielādēts caur
dinamisko importu: platformā, kur tās vietējais binārais fails neizdodas
ielādēt, `normalizeDataUri()` **nekad neizmet** — tas atgriežas pie
oriģinālo baitus, tāpēc apraksta/base64 konversijas ceļš vienmēr turpina
darboties. Ne-attēlu baitus (iegūšana, kas neatgrieza dekodējamu attēlu)
tiek arī nodoti caur neskartu. Šī normalizācija ir ierobežota uz attēliem,
kuras tilts iegūst savai pašizsaukšanai — tā nekad netiek piemērota
izsaucēja neapstrādātajai pārsūtīšanas slodzei, saskaņā ar
opt-in tikai mutācijas principu (Ciets noteikums #20).

#### Iestatījumu shēma + migrācija

Jaunās `modalityBridge*` atslēgas tiek Zod validētas `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*` trio, un
`modalityBridgeAudio*` grupa, ko izmanto Audio tilts. Migrācija
`141_modality_bridge_settings.sql` kopē esošās mantojuma
`visionBridge*` vērtības uz atbilstošajām jaunajām atslēgām (idempotenta,
nekad nepārraksta operatora iestatītu `modalityBridge*` vērtību); mantojuma
atslēgas paliek pieņemamas kā lasīšanas rezerves vienai izlaišanas ciklam.

#### Caurspīdīguma galvene + statistika

Apraksta pārvērstās atbildes satur
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(izveidota ar `buildModalityBridgeHeader()` failā `modalityBridge/bridgeStats.ts`,
apzīmogota ar `withModalityBridgeHeader()` failā `src/sse/handlers/chatHelpers.ts`).
Pārsūtītie pieprasījumi saņem **nav** galveni — slodze palika neskarta un
modeļa maiņa jau ir redzama atbildes ķermeņa `model` laukā.

`GET /api/modality-bridge/stats` (pārvaldības autentifikācija, tādā pašā līmenī kā
`GET /api/settings`) atgriež atmiņā esošos per-modalitātes skaitītājus
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` priekš `vision`, `audio` un
`video`. `averageLatencyMs` izmanto `latencySamples`, nevis visus mēģinājumus, kā
savu dalītāju; darbība bez laika mērījuma neizveido nulles milisekundes
paraugu. `bridged` paliek atpakaļsaderīgs alias veiksmīgām
konversijām; neveiksmīgi mēģinājumi to nepalielina.
Skaitītāji tiek atiestatīti procesa restartēšanas laikā pēc dizaina
(telemetrija, nevis grāmatvedība).

#### Informācijas paneļa konfigurācija

Veltītā informācijas paneļa lapa ir
`/dashboard/settings/modality-bridge`. Tās URL adresējamie `Vision`, `Audio`,
un `Video` cilnes saglabā vaicājuma parametrus, mainot `tab` vērtību.
Vision cilne atklāj iespējošanu, režīmu, modeļa izvēli (ieskaitot automātisko
noklusējumu), uzdevumam atbilstošu aicināšanu, uzlabotas laika/attēla/apraksta garuma/kešatmiņas
robežas, izpildes
skaitītājus un aizsargātu paraugu pieprasījumu. Audio cilne ir arī aktīva: tā atklāj
iespējošanu, STT tikai modeļa izvēli ar Auto, laika/noklusējuma ierobežojumus, audio
skaitītājus un `input_audio` paraugu testu. Video cilne ir funkcionāla: tā ziņo
par FFmpeg/ffprobe izpildes stāvokli — viens no četriem skaidriem UI stāvokļiem (`unknown`, kamēr
proba ir gaisā vai nevarēja pabeigt, `restricted` uz ne-loopback
informācijas paneļa hosta, kur probu izlaida klienta pusē, `unavailable`, kad probēts
un apstiprināts kā trūkstošs, vai `available` ar FFmpeg/ffprobe versijām) — saglabā
iespēju/modeli/rāmja/video/laika ierobežojumus, filtrē modeļa izvēli uz redzes spējīgiem
modeļiem un atklāj video skaitītājus.

Iepriekšējā Vision Bridge karte AI iestatījumos ir saderības saite uz
jauno lapu; tā vairs nepieder otrai formas kopijai. Mediju sniedzēji arī
saista Attēlu uz Tekstu un Runu uz Tekstu darba plūsmas ar attiecīgajām Modalitātes
Bridge cilnēm, neizņemot esošo Runu uz Tekstu spēļu laukumu.

**Pašcikla piekļuves apietšana:** kad apraksta izsaukums tiek novirzīts caur OmniRoute
paša `/v1` pašciklu (nestandarta sniedzēja modelis), apakšpieprasījums nosūta
`x-omniroute-admission-bypass: internal` un tiek autentificēts ar atrisināto
pašcikla akreditāciju — vietējais `sk_omniroute` sargs vietējā režīmā vai
operatora konfigurētais `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` vides atslēga (#1350), lai
`REQUIRE_API_KEY=true` izvietojumi joprojām varētu izpildīt apraksta izsaukumu. Apiet
tiek atzīts tikai šīm precīzajām akreditācijām, tāpēc ārējie klienti nevar izmantot
virsrakstu, lai izlaistu piekļuvi.

Mantojuma noklusējumi dzīvo `src/shared/constants/visionBridgeDefaults.ts`; jauni
režīmi/uzdevumiem atbilstoši/kešatmiņas noklusējumi un iestatījumu risinātājs dzīvo
`src/shared/constants/modalityBridgeDefaults.ts`. Aizsargjosla atklāj
`deps` konstruktora opciju, lai testi varētu injicēt viltotus `getSettings` un
`callVisionModel` īstenojumus.

### Audio Bridge (`audioBridge.ts`) — Modalitātes Bridge PR-3

Pārtrauc audio nesošos čata pieprasījumus pirms tie sasniedz mērķi, kas nav
zināms, ka pieņem audio ievadi. Tas nekad nenovirza čata pieprasījumu: audio daļas tiek
transkribētas caur esošo OpenAI saderīgo multipart galapunktu, un izvēlētais čata modelis turpina ar teksta transkriptiem.

Plūsma:

1. Atrisināt `supportsAudio` caur `getResolvedModelCapabilities()`. Skaidra
   sniedzēja reģistra metadati uzvar, tad statiskā modeļa metadati, tad sinhronizētie
   `modalities_input`. Deklarēta ievades saraksts bez `audio` ir `false`; nav
   spējas pierādījumu paliek `null`. Gan `false`, gan `null` aktivizē
   konservatīvo tiltu, kamēr `true` to apiet.
2. Atrisināt `modalityBridgeAudio*` iestatījumus un izvilkt splicējamas augstākā līmeņa
   audio daļas no katra ziņojuma caur kopīgo `detectMediaParts()`
   detektoru. Atbalstītās vadu formas ir OpenAI `input_audio`, `audio_url`, un
   `source.media_type: "audio/*"`. Iekšējais audio tiek atklāts maršrutēšanai, bet netiek
   noņemts ar splicēšanas ceļu. Darbs tiek ierobežots ar `modalityBridgeAudioMaxClips`;
   vēlākās daļas paliek neskartas.
3. Godāt konfigurētu `provider/model`, vai ļaut `selectAudioBridgeModel()` iziet
   `AUDIO_TRANSCRIPTION_PROVIDERS` stabilā katalogā un izvēlēties pirmo
   modeli ar izmantojamu aktīvu sniedzēja akreditāciju.
4. `callAudioTranscription()` pārvērš base64/data-URI audio par multipart
   `file`, vai lejupielādē attālu `audio_url` caur publiski tikai izejošo
   aizsardzību ar DNS piesaisti un 25 MB robežu. Tas pēc tam POSTo failu un izvēlēto
   modeli uz vietējo `/v1/audio/transcriptions` pašciklu, autentificējoties ar
   `resolveSelfLoopBearer()`. Esošais transkripcijas maršruts veic normālu
   akreditācijas meklēšanu, atdzišanas/likmes ierobežojumu apstrādi un sniedzēja nosūtīšanu.
5. Veiksmīgi izsaukumi aizvieto savas daļas ar `[Audio N]: <transcript>`. Izsaukumi
   tiek izpildīti ar `Promise.allSettled`: individuāla neveiksme saglabā to sākotnējo
   audio daļu (#4012 līgums). Ja katrs izsaukums neizdodas un mērķis ir pierādīts
   `supportsAudio === false`, daļas kļūst par
   `[Audio N]: (nepieejams — nav STT sniedzēja savienots)` (#8430 līgums). Nezināma mērķa gadījumā (`null`), visi neveiksmju rezultāti paliek neskarti. Pierādīts
   teksts tikai mērķis bez izmantojama STT akreditācijas saņem to pašu skaidro
   stubu, neizsūtot tīkla izsaukumu.

Veiksmīgas transkripcijas izmanto procesa plašo Modalitātes Bridge LRU/TTL kešatmiņu. Atslēga apvieno audio atsauci, stabilo `audio-transcription` operācijas
etiķeti un izvēlēto STT modeli; neveiksmes nekad netiek kešotas. Audio mēģinājumi atjaunina
kopīgos `bridged`, `cacheHits`, `failures`, un `lastUsedAt` skaitītājus.
Pārveidotās atbildes nes sevī
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; neskartie
pieprasījumi nesaņem Audio Bridge segmentu.

Izpildes iestatījumi ir DB atbalstīti un Zod validēti:

| Atslēga                       | Noklusējums | Diapazons       |
| ----------------------------- | ----------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`      | —               |
| `modalityBridgeAudioModel`    | `""`        | Auto vai STT ID |
| `modalityBridgeAudioTimeout`  | `60000`     | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`         | 1–10            |

Kopīgā kešatmiņa paliek kontrolēta ar `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` un `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Pārtrauc augstākā līmeņa video daļas Chat Completions `messages` un Responses
API `input` pirms tiek izsaukts mērķis, kuram nav zināmas vietējās video atbalsta.
Atbalstītās formas ir `input_video`, `video_url`, `video_source`, HTTPS URL,
un `data:video/*;base64,...` datu URI. Parastas failu nosaukumi tekstā netiek uzskatīti
par video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) pārvalda pieprasījuma pāreju,
spēju/politikas pārbaudi, katra pieprasījuma apvienošanu un atbildes datu kopu.
Katram video darbs — iegūšana, visu rezultātu kešatmiņa, kadru secības apraksts
(kas apvieno jebkuru izsaucēja deklarēto audio transkriptu), un katra mēģinājuma
metrikas/abortēšana/tīrīšana — ir slēpta aiz `processVideoPart`
`videoBridgePipeline.ts`, kas tiek izsaukta reizi par katru video daļu `preCall`
ciklā. Šis modulis arī nosaka skaidras porta robežas `VideoMediaBrokerPort`
(iegūstot baitus un izņemot paraugotus kadrus), `VideoAudioTranscriptionPort`
(apvienojot izsaucēja deklarēto audio transkriptu ar paraugotajiem subtitriem), un
`VideoDrilldownPort` (mantojuma neapstrādātā veikala forma). Ražošanas STT un kadru
saglabāšana ir veidota ap aprakstošo portu, izmantojot `createVideoSttAdapter` un
`createVideoDrilldownAdapter`; pēdējais izmanto kopīgo necaurspīdīgo roktura dzīves ciklu.

Publiskais `/v1` pieprasījuma ceļš nekad neimportē vai neizsauc apakšprocesu.
Attālinātie video tiek lejupielādēti ar 50 MiB ierobežojumu; iekļautie base64 video
ir ar konservatīvu 36 MiB dekodētu katra video ierobežojumu, lai modelis/ziņojumi/iekļaušanas
apvalks varētu palikt publiskā JSON pieprasījuma uzņemšanas ierobežojuma 50 MiB ietvaros.
Iekļautā garuma un dekodētā izmēra novērtējumi tiek pārbaudīti pirms piešķiršanas.
HTTPS ir obligāts sākotnējā attālinātajā URL un katrā pāradresē, izmantojot esošo
publisko tikai izejošo aizsardzību ar DNS piesaisti. Baiti tad šķērso precīzo iekšējo
`POST /api/modality-bridge/video/extract` brokeru robežu. Šis ceļš ir gan
`LOCAL_ONLY`, gan `SPAWN_CAPABLE`, pieņem tikai katra procesa autentificētu,
uzticamu atgriezenisko pieprasījumu un nekad nepieņem URL, failu sistēmas ceļu,
izpildāmo failu vai argumentu sarakstu. API ķermeņa izmēra caurule un apstrādātāja
pakāpeniska ķermeņa lasītājs neatkarīgi izpilda 50 MiB brokeru ievades ierobežojumu.
Tās ierobežotā rinda darbojas vienā ekstrakcijā vienlaicīgi, ļauj četrus gaidošus darbus
un ierobežo gaidošo ievadi līdz 100 MiB.

Brokerī `ffprobe` lasa privātu vietējo failu; fiksētā formāta
atļauju saraksts izslēdz atskaņošanas un manifestu formātus. Atļautiem MOV ģimenes
konteineriem ārējie MOV datu atsauces pēc noklusējuma paliek atslēgtas, un fiksētā
komanda neizvēlas tās. Gan `ffprobe`, gan `ffmpeg` izmanto
`file`-tikai protokola atļauju sarakstu, vienu pavedienu, fiksētas argumentu
masīvus, bez komandrindas un izpildāmos failus, kas atrasti `PATH`. Pievienotās
attēlu vāka straumes nav atskaņojamas kandidātes. Visām atskaņojamām straumēm
jāatbilst ierobežojumiem, un skaidri definēta noklusējuma straume ir priekšroka
pirms noteiktā zemākā indeksa rezerves. Video ir ierobežoti līdz 600 sekundēm,
8192 pikseļiem katrā dimensijā un 33,554,432 avota pikseļiem. FFmpeg paraugo
1–16 viduspunktu JPEG kadrus, samazina garo malu līdz maksimumam 1024 pikseļiem
bez mazāku ievades palielināšanas un nekad nesaņem URL. Paraugošana ir
`uniform` pēc noklusējuma. Papildus `scene_aware` un eksperimentālās
`segment_aware` politikas veic vienu papildu fiksētu FFmpeg pāreju pār jau
validēto vietējo straumi, izvēlas ierobežotas `showinfo` ainas laika zīmes
un noteikti atgriežas pie tām pašām vienveidīgajām viduspunkta, ja detektora
neveiksme, laika izsniegšana, nepareiza izeja vai tukša kandidātu kopa.
Segmentu apzināšanās režīms piešķir viduspunkta paraugus proporcionāli
validētajām ainas intervālam; segmentu apzināšanās pierādījumi un rezerves
uzvedība ir detalizēti aprakstīta zemāk. Cietais 16 kadrus ierobežojums tiek
piemērots pēc izvēles katrā politikā. Kad ainas apzināšanās pieprasījumam ir
tikai viena kadra budžets, tas izmanto aktīvā pilna video vai fokusa
logrāfijas vienveidīgo viduspunkta un ziņo `policyEffective: uniform`:
viena izvēlēta ainas kadra nevar saglabāt abus laika galus. Izsaucējs var
pēc izvēles nodrošināt ierobežotu fokusa logu (`start`/`end` sekundes);
robežas tiek ierobežotas līdz mediju ilgumam, apgrieztas vai neierobežotas logus
noraida, un visi paraugošanas politikas tiek veiktas tikai iekšpusē normalizētā
intervāla. Rezultātā loga informācija tiek iekļauta paraugošanas metadatos
un neuzticamā apraksta prefiksā, lai turpmākie modeļi varētu atšķirt
fokusētu izrakstu no pilnas laika līnijas.

Semantiskā subtitru fokusa ir atsevišķs, skaidrs iestatījums. Noklusējuma
`full` analīzes režīms saglabā esošo kadru aicinājumu un nekad nenodod
pieprasījuma tekstu subtitru modelim. `focused` režīmā tilts lasa tikai
jaunāko ne tukšo lietotāja rakstīto `text`/`input_text` no tā paša
Chat vai Responses konteineru, normalizē to uz NFC, sabrūk kontroles
rakstzīmes un atstarpi, un ierobežo to līdz 500 Unicode kodu punktiem.
Tukšs rezultāts atgriežas pie precīzā `full` aicinājuma. Izmantojams
norādījums tiek sērijveidā sagatavots kā JSON veltītā neuzticamā lietotāja
konteksta blokā un var tikai prioritizēt novērojamās detaļas; tas
nevar pārspēt atsevišķo brīdinājumu pret sekošanu instrukcijām, kas
ir redzamas vai dzirdamas medijos. Teksta fokuss nekad neizdara
`start`/`end` vai nemaina laika paraugu.

#### FU-07 strukturālo segmentu pierādījumi

`segment_aware` izmanto vienu ierobežotu priekšanalīzes pāreju pār jau validēto vietējo video straumi. Fiksētā filtru ķēde vispirms samazina platumu līdz maksimumam 320 pikseļiem, atklāj ainas izmaiņas un sasalšanas intervālus, pēc tam paraugo 1 kadru sekundē, lai iegūtu izplūšanu, vidējo lumu un telpisko/temporālo informāciju. Pāreja ir ierobežota līdz 600 strukturāliem paraugiem, vienai FFmpeg/filter pavedienam, tādam pašam `file`-vienīgi protokolam un konteineru atļauju sarakstiem, 1 MiB procesa izejas ierobežojumam un maksimums 30 sekundēm brokeru kopējā aborta/termiņa laikā. Tā nekad nepieņem komandu, filtru, ceļu vai URL no pieprasījuma.

Strukturālās vērtības ir deterministiskas paraugu pierādījumi, nevis semantiska video izpratne. Tās neizdara secinājumus par subjektiem, darbībām, parakstiem, runu vai lietotāja nodomu. Ainas un sasalšanas robežas veido segmentus; sasalšanas pārklājums, izplūšana, ekspozīcija, telpiskā detaļa un temporālā izmaiņa tikai ietekmē to, kā esošais 1–16 kadru budžets tiek sadalīts. Pilnībā sasaldēts segments ir ierobežots līdz vienam kadrim, kamēr nesasaldētie segmenti sacenšas par atlikušajiem budžeta līdzekļiem. Kad robežas pārsniedz kadrus, tiek saglabāta vienmērīga laika līnijas pārklājuma, lai ātri agrīni griezumi nevarētu noslēpt garu sekojošu segmentu. Ainas robežas 1 sekunžu analīzes izšķirtspējā ap sasalšanas robežu tiek apvienotas.

Trūkstoši filtri, nepareizi/formāti vai tukši pierādījumi, detektora kļūda vai ierobežotā priekšanalīzes laika izbeigšana atveras uz precīzo vienmērīgo viduspunktu politiku. Izsaucēja aborts vai brokera termiņš neizdara atvēršanu: tas pārtrauc lidojošo apakšprocesu, novērš vēlākas kadru izvilkšanas un privātā pagaidu koka noņemšanu `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` ģenerē deterministiskas reālas FFmpeg iekārtas pēc dedupācijas parakstu izsaukumu ietaupījumiem, blīvas kustības budžeta sadalījumu, izplūšanas/ekspozīcijas/SI-TI pierādījumus, ātrus griezumus ar garu asti un pakāpeniskas izbalēšanas viltus pozitīvus. Tas reģistrē priekšanalīzes sienas laiku un, kur `/usr/bin/time` ir pieejams, bērnu CPU un maksimālo RSS. Tās kvalitātes pārbaudes ir tikai strukturāli orākuli. Reālās parakstu modeļa kvalitāte paliek `HOLD`, jo šis rīks nav autorizēts galapunkts vai sasaldēts tiesnesis. Naudas ietaupījumi arī paliek `HOLD`, ja vien `--caption-cost-per-call-usd` nesniedz skaidru pozitīvu uz katru izsaukumu; skripts nekad neizgudro nevienu rezultātu.

Katrs kadrs ir ierobežots līdz 4 MiB, visi neapstrādātie kadri kopā līdz 23 MiB, un sērijveida brokera atbilde līdz 32 MiB. Privāta pagaidu direktorija tiek noņemta `finally`. OmniRoute nesavieno FFmpeg un nepieņem pielāgotu izpildāmo ceļu. Pirms parakstīšanas tilts veic konservatīvu vizuālo deduplication pāreju: katrs JPEG tiek samazināts līdz 16×16 pelēktoņu buferim un tiek salīdzināts tikai ar pēdējo saglabāto kadru. Pieprasītā parakstu budžeta, kas pārsniedz vienu kadru, izvilkšana nodrošina ierobežotu kandidātu baseinu līdz divreiz šim budžetam un nekad vairāk par 16 kadriem. Pieprasītais ierobežojums tiek piemērots tikai pēc deduplication, ar pirmajiem un pēdējiem izvēlētajiem kandidātiem saglabātiem pēdējā atšķaidīšanā, kad budžets ir vismaz divi. Versiju
`grayscale-16x16-mean-cells-v2` politika izmanto lielāko no vidējā luma delta un thumbnail šūnu attiecības, kuru normalizētais delta ir vismaz 0.05. Duplikātu slieksnis ir konstante 0.04, izvēlēta paredzamībai, nevis izpausta kā izpildes iestatījums. Šis sekundārais
augsta kontrasta signāls saglabā nelielas kustības un redzamu tekstu izmaiņas, kuras vidējā salīdzināšana var noslēpt. Salīdzinātāja vai dekodera kļūdas atveras un saglabā pārklājumu. Izejas metadati atdala izvilktos kandidātus, veiksmīgi izmantotos kadrus un vizuālos duplikātus, kas ir noraidīti.

Ekspluatīvi marķēta video daļa var pieprasīt laika zīmētu kontaktu lapu. Tilts veido maksimums 4 kolonnas, 16 kadru JPEG režģi. Katras 512 pikseļu šūnas avota laika zīmogs tiek iegravēts augsta kontrasta apakšējā joslā, kamēr tie paši laika zīmogi paliek tekstuālajos metadatos turpmākai asociācijai un revīzijai. Pilnīgais JPEG paliek ierobežots līdz 32 MiB. Ja `sharp` nevar dekodēt vai izveidot režģi, tilts atgriežas pie individuālajiem JPEG kadriem; klienta aborts joprojām izplatās caur lapas operāciju.

Veicināšanas pierādījumi ir apzināti atdalīti no sintētiskās kompozīcijas mikrobenchmark. `scripts/perf/video-bridge-contact-sheet-eval.ts` definē shēmas versiju A/B rīku reāliem OpenAI saderīgiem redzes modeļiem. Tas mēra pakalpojumu sniedzēja ziņotos tokenus, end-to-end sienas latentumu (ieskaitot lapas kompozīciju), modeļa izsaukumu skaitu un manifestā definēto faktu saglabāšanu. Neapstrādātas modeļa atbildes netiek rakstītas ziņojumā; tikai SHA-256 kopsavilkumi un atbilstošie faktu ID tiek saglabāti. Rīks neveic tīkla vai maksāto modeļa izsaukumu, ja vien `--execute-real` netiek nodots un `--model`, `OMNIROUTE_BASE_URL` un `OMNIROUTE_API_KEY` nav konfigurēti. Bez šī skaidrā reālā izpildes, tā mašīnā lasāmā sprieduma paliek `HOLD`; sintētiskās slodzes/izsaukumu skaitīšanas mērījumi vieni paši nav veicināšanas pierādījumi.

Atsevišķais `scripts/perf/video-bridge-promotion-eval.ts` patērē FU-07 vai FU-09 novērojumus. Veicināšanas uzņemšana prasa visus astoņus sintētiskos scenāriju veidus, kā arī sanitizētu reālu klipu, vismaz trīs mērītus atkārtojumus katram lomam un gadījumam, visus desmit deklarētos metriku, sasaldētus medijus/piedāvājumus/gaidāmo faktu/iestatījumu kopsavilkumus, unikālus novērošanas ID un pārbaudītu sēklu A/B secību. Izpildes kvīts sasaista korpusa kopsavilkumu, precīzu kandidāta SHA un modeļa versiju. Trūkstoši vai nederīgi mērījumi paliek `HOLD`, tostarp CPU virs 30 s, maksimālais RSS virs 512 MiB vai priekšanalīze virs 30 s. Šie ir pierādījumu uzņemšanas ierobežojumi, nevis jauns izpildes RSS izpildes garantijas.

FU-07 prasa vismaz 98% kvalitātes saglabāšanu un p95 latentumu ne vairāk kā 1.2x
pamatu, kā arī vai nu 0.05 absolūtu gadījumu līdzsvarotu vidējo atgūšanas uzlabošanu
ekvivalentos vidējos parakstu izsaukumos, vai vismaz 10% mazākus vidējos pēc
dubultošanas parakstu izsaukumus. FU-09 prasa vismaz 0.85 kvalitāti, 95%
saglabāšanu, 20% p95 latentuma samazinājumu un 10% token samazinājumu. Kritiskā
faktu zudums, injekcijas atbilstība vai trūkstoša izmantošana novērš
veicināšanu. Viena izpilde nevar veicināt neko:
`--previous-report` apstiprina divas atšķirīgas, nesakritušas, secīgi
piemērotas izpildes no tās pašas politikas/modela revīzijas/kandidāta/korpusa.
Paraugu eksperiments nevar apstiprināt kontaktu lapas eksperimentu.

Kolektoriem jānovērtē atbildes atmiņā un jāsaglabā `responseDigest` plus
metrikas un novērojumu saistības, nekad atbildes teksts. Patērētājs arī lasa
mantojuma neapstrādātās novērošanas, bet nekad nekopē šo tekstu savos
ziņojumos. Tieši viens no `responseDigest` vai `rawResponseText` tiek pieņemts
katram novērojumam. Versiju atļauju saraksts paliek tukšs ar nemainīgu
`hold` noklusējumu. Piemērotai ierakstam ir nepieciešama tā pierādījumu
atsauce, politika, modeļa revīzija, precīzs kandidāta SHA, manifestā
digest un divi atšķirīgi izpildes ID; pretrunīgi konteksti tiek noraidīti. Šie
metadati ir audits līgums, nevis pierādījums, ka atsauces fails satur
īstas mērījumus. Pārskatiet faktiskās kvītis pirms jebkura ieraksta pievienošanas.
Vadības statistikas galapunkts un Video informācijas panelis atklāj
konservatīvu gatavību. Konfigurēts modeļa alias pats par sevi nenosaka tā
revīziju vai darbojošā kandidāta SHA, tāpēc pašreizējais informācijas panelis
ziņo `HOLD`, nevis atkārtoti izmanto piemērotību no cita izpildes konteksta.
Izteikta eksperimentālā izvēle paliek atsevišķa no veicināšanas; nekas
noklusējuma automātiski netiek mainīts.

Izsaucēji var pievienot opciju `transcript.cues` masīvu atbalstītai video
daļai, kad viņi jau ir ieguvuši saskaņotu tekstu. Katram cue jānes `text`,
beidzams `start`/`end` intervāls iekšā pārbaudītajā ilgumā, un
atļautais `source` (`client`, `embedded`, vai `audio-bridge`); `confidence`
noklusējums ir `1` un tam jāpaliek starp `0` un `1`. Precīzi dublēti cues
tiek apvienoti. OmniRoute nekad nesāk transkripciju no šiem metadatiem:
validēti cues tiek kopēti aprakstītajā rezultātā ar avotu, pārliecību un
intervālu, un tiek attēloti kā neuzticami novērojumi līdzās rāmju
parakstiem. Nepareizs, ārpus diapazona vai bez izcelsmes teksts tiek noraidīts
nevis sajaukts ar parakstu straumi. Abi pieprasījuma ķermeņa transkriptu
kanāli normalizē nodrošināto izcelsmi uz `client`, ieskaitot pašu
apstiprinātos `embedded` vai `audio-bridge` etiķetes. Tikai servera
piederīgs adapteris var piešķirt šos uzticamos etiķetes caur
tikai-koda `trustedSource` argumentu; pieprasījuma JSON lauks nevar
sasniegt šo argumentu. Transkriptu teksts paliek neuzticams mediju
iegūts saturs, neatkarīgi no tā izcelsmes, un tam nekad nevajadzētu
noteikt autorizāciju.

Izsmalcināts izsaucējs var nodrošināt `audioTranscript` celiņu tam pašam
video; tas tiek uzskatīts par klienta nodrošinātu tekstu, nevis pierādījumu
par servera transkripciju. Fūzijas šuvē tiek veikti vizuālie un audio
novērojumi zem viena termiņa un aborta signāla, tos kārtot kopējā
laika skalā, apvienot precīzus dublējumus un ziņot par daļēju rezultātu,
ja tikai viena puse izdodas. Nepareizs `audioTranscript` degradējas līdz
šim daļējam rezultātam — vizuālais apraksts tiek saglabāts un audio
zars reģistrē sanitizētu kļūdas kodu — nevis neizdodas visu video.
Pēc-zara pieejamība, daļējā karogs un sanitizētie kļūdas kodi tiek
saglabāti aprakstītajā rezultātā, aizsargjoslas metadatos
(`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`),
rezultātu kešatmiņas metadatos un tilta fūzijas skaitītājos. Noklusējuma
Video Bridge ceļš neizsauc runu uz tekstu vai nenolasa otro mediju kopiju;
bez šī izteiktā celiņa tas paliek tikai video.

**Transkriptu saglabāšana (#12150 P1).** Tas automātiski attiecas, kad
Video Bridge (pašam opt-in) attēlo transkriptu cue — nav atsevišķa
saglabāšanas karoga. Kad pieprasījums attēlo jebkuru transkriptu cue
(izsaucēja deklarēts `transcript` vai sapludināts `audioTranscript`),
aizsargjosla to atzīmē kā `videoBridgeObserved` un rada rediģētu
ēnu video aprakstam — identisks attēlojums, kur katra cue brīvā teksta
ķermenis tiek aizstāts ar `[redacted-video-transcript]`, izveidots, aizstājot
strukturēto cue lauku pirms virknes salikšanas (nekad nevis analizējot
izlīdzināto tekstu, tāpēc neviens cue saturs — pretiniecisks vai parasts,
ieskaitot ķermeņus, kas satur `]`, piemēram, `[inaudible]`/`[music]` —
nevar izdzīvot). Saglabātā zvanu žurnāla pieprasījuma ķermenis apmaina
katru video iegūto teksta daļu ar šo rediģēto ēnu, saskaņojot pēc
saturu vienlīdzības; `fullText` enkurs tiek atkārtoti lasīts no
pabeigtā iepriekšējā zvana aizsargjoslas slodzes, tāpēc saskaņošana
joprojām izdodas pēc vēlākām ķēdes aizsargjoslām (PII un
akreditācijas maskēšanas, prioritātes 10/95) pārrakstot apraksta tekstu
vietā un pēc sistēmas-prompt/ nodošanas/ atmiņas injekcijas
pārveidojot ziņojumu masīvu. Ķermenis, kas nosūtīts augšup uz modeli,
paliek nemainīgs. Novērots pieprasījums arī nepievieno nekādu
noturīgu atmiņu (gan pieprasījuma, gan atbildes iegūšana tiek izlaista),
tāpēc modeļa paša atbilde nevar atspoguļot transkriptu tekstu atmiņā.

**Neapstrādāti video lauki (#12430).** Kad tilts ir iespējots un vietējā
video atbalsts ir nezināms vai trūkst, definētie `transcript`/`audioTranscript`
lauki arī aktivizē `videoBridgeObserved`, pat pēc apraksta neveiksmes vai
`maxVideos` ierobežojuma. `null` un tukši virsraksti skaitās; trūkstoši
lauki un ne-video metadati neskaitās. Saglabātās kopijas rediģē šos laukus
vai izslēdz pieprasījumu, un kešatmiņas/Atmiņa tiek apietas. Nodrošinātāja
slodze paliek nemainīga.

Papildu saglabātās kopijas izmanto to pašu novēroto pieprasījuma signālu. Neapstrādātais
priekšsargu klients pieprasījuma snapshots, atmiņā esošais gaidošais pieprasījums un agrīnais
noraidīto pieprasījumu žurnāls strukturāli aizstāj transkriptu laukus video daļās;
virkņu aicinājumi, ko sintezē cauruļu posmi un konteksta nodošana, tiek rediģēti
saglabātā pieprasījuma ķermeņa izsūknēšanas vietā. Saglabātais `video_content_removed` marķieris
padara `previous_response_id` turpinājumu neveiksmīgu, nevis atjauno
tekstus, kas tika apzināti izmesti. Ja novērots pieprasījums zaudē savu
daļas rediģēšanas ēnu pirms žurnāla ierakstīšanas, vai pat ja viens no vairākiem video ēnu
neatbilst pēc vēlākām pieprasījuma izmaiņām, saglabātais pieprasījuma ķermenis tiek
pilnībā izlaists, nevis saglabāts daļēji rediģēts transkripts.

Novērotam pieprasījumam modeļa atbilde var citēt jebkuru transkripta daļu bez strukturēta
norādes robežas. Tāpēc tā saglabātais zvana žurnāla `responseBody` tiek aizstāts ar
izlaides marķieri; detalizētais cauruļu artefakts (kas var ietvert augšupvērstus/klienta ķermeņus un straumēšanas fragmentus)
netiek saglabāts. Semantiskie, idempotences un racionālas atkārtošanas keši apiet
lasījumus un rakstus šim pieprasījumam. Pakalpojumu sniedzēja pieprasījums un klientam redzamā
atbilde paliek nemainīga. Agrīnie keepalive baiti tiek iztukšoti no pagaidu
bufera, kad detalizētais artefakts tiek izlaists. Kiro nepareizā EventStream
brīdinājuma ziņojums ziņo tikai par slodzes baitu skaitu, nekad par tās saturu vai JSON
parsera neapstrādāto kļūdu.
Tas neapgalvo, ka katrs nesaistīts pakalpojumu sniedzēja/plugin diagnostikas ir
pārbaudīts; plašāka saglabātā izsūknēšanas pārbaude tiek izsekota #11658.

Iekšējā `/api/modality-bridge/video/drilldown` dzīves cikls ir atsevišķa,
atgriezeniskā/žetonu autentificēta kešu substrāts. Katram darbībai ir nepieciešams
kanoniska necaurspīdīga galvenā ID. Pirms ražošanas izsaucēja aktivizēšanas tam jāizdara
šī ID no autentificētā nomnieka un tam nekad nevajadzētu pārsūtīt
klienta izvēlētu vērtību. Kešu atslēgas sasaista šo galveno ar kanoniskajām sesijas un
video atsauces ID, glabā tikai to SHA-256 iegūtos atslēgas, un ierobežo gan lasījumus
gan dzēšanu uz to pašu galveno. Kešs glabā ne vairāk kā 16 iegūtas JPEG
rāmjus katrā ierakstā, iznīcina tos pēc desmit minūtēm, un atbalsta ierobežotus
`start`/`end` lasījumus vai skaidru sesijas dzēšanu.

Katrs galvenais ir ierobežots līdz 16 ierakstiem un 64 MiB kanoniskajiem JPEG datiem. Šie
ierobežojumi ir neatkarīgi no globālā 64 ierakstu/256 MiB griestiem: galvenā kvotas
spiediens iznīcina tikai šī galvenā vismazāk nesen izmantotos ierakstus pirms globālās
LRU iznīcināšanas tiek apsvērta. Beidzies ieraksti tiek iztīrīti gan no galvenā, gan
globālās uzskaites kešu aktivitātes laikā, kamēr atcelšana un validācijas kļūme
neapstiprina daļēju aizvietošanu.

Kešs noraida nekanonisku Base64, pārmērīgu pildījumu, ne-JPEG mediju, nepareizus vai
sadrumstalotus JPEG, un JPEG, kas rada brīdinājumu ierobežotā pilna attēla `sharp`
dekodēšanas laikā. Tas atkārtoti kodē katru pieņemto attēlu kā kanonisku JPEG, iegūst platumu un augstumu
no dekodētajiem baitiem, nevis uzticoties izsaucēja laukiem, un iznīcina jebkādus pēdējos
poliglotu baitus, nevis tos saglabā. Tikai ierobežotais kanoniskais saspiestais buferis
tiek iekasēts abām kvotām. JSON vadu limits ietver Base64 pārpalikumus 32 MiB
dekodētā ievades griestā. Katrs
saglabātais iegūšanas ieraksts reģistrē savu apstiprināto JPEG formātu/izšķirtspēju, paraugu politiku,
iegūšanas versiju, izveides laiku, servera aprēķināto satura hash un hashojamo vecāku
atsauci, kā arī uzticama izsaucēja vecāku satura hash. Atcelšana tiek pārbaudīta
starp asinkronām dekodēšanas/hash fāzēm pirms atomiskās kešu apstiprināšanas.

Ražošanas ražotājs atkārtoti izmanto jau iegūtos brokeru rāmjus tikai pēc veiksmīgas
vizuālās analīzes, bez otrā video lejupielādes/izvilkšanas. Tas prasa operatora
`modalityBridgeVideoDrilldownEnabled=true`, stingru katras daļas `drilldown: true`, un
autentificētu API atslēgas ieraksta ID. Klienta deklarētās galvenās/sesijas vērtības nekad
neizveido īpašumtiesības. Bez visām trim nosacījumiem tas nesaspiest, nemaina izmēru vai nesaglabā
papildu rāmjus. Saglabāšanas neveiksme saglabā izmantojamo vizuālo atbildi. Piekrītie
pieprasījumi apiet visu video rezultātu kešu, tāpēc kešētie rezultāti nekad neatkārto rokturus.

Veiksmīgas JSON un SSE atbildes atklāj ne vairāk kā četrus necaurspīdīgus rokturus ierobežotajā
`x-omniroute-video-drilldown` galvenē. Autorizēti pārlūkprogrammu avoti var lasīt šo galveni
bez CORS avota politikas paplašināšanas. Jauni rokturi izmanto `v1.<32-byte random base64url
token>`, un reģistrs saglabā tikai
to SHA-256 hash. Lasītājs/galvenes parsers arī pieņem mantojuma 64-hex rokturus.
Autentificētais publiskais patērētājs ir
`GET /api/v1/video-bridge/drilldown?handle=...`, neatkarīgi kontrolēts ar
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Skaidri saglabāti nepatiesi atceļ
piekļuvi pat tad, ja mantojuma `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env
rezerves kopija ir aktivizēta. Ražošanas saglabāšana ir līdzīga mantojuma
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` rezerves kopijai. Abas rezerves kopijas pēc noklusējuma ir izslēgtas.

Patērētājs iegūst īpašumtiesības no autentificētās atslēgas, piemēro atslēgas politiku un
atgriež to pašu 404 nezināmiem, beigušiem un citas atslēgas rokturiem. Tas pieņem
`variant=preview|standard|detail` (maksimālais JPEG izmērs 320/640/1280, nekad nepalielināts),
`limit=1..8` (vai mantojuma `frames` alias, nekad abus), nulles bāzes `page`, un opcijas
`start`/`end` fokusa sekundes. Duplicētie
vaicājumu atslēgas un apgrieztie fokusa logi tiek noraidīti. Katrs atgrieztais variants satur hash
savu faktisko saturu un faktisko izšķirtspēju metadatus, kas saistīti ar saglabāto avotu.
Varianti tiek iegūti lasīšanas laikā, nevis glabāti kā papildu saglabātas kopijas. JSON
atbilde, tostarp Base64/iepakojums, ir ierobežota līdz 32 MiB; pārāk liels lappuse atgriež
413 un klients jāpieprasa mazāk rāmju. Lasījumi pārbauda atcelšanu ap katru
izmēra maiņu un atkārtoti pārbauda roktura derīgumu pirms atgriešanas. `DELETE` īpašniekam ir idempotents;
dzēšana vai TTL beigas atbrīvo saglabāto avotu un lietošanas uzskaiti.

Kopīgais veikals ir procesa lokāls: rokturi beidzas pēc restartēšanas un nav pārnēsājami starp neatkarīgiem OmniRoute procesiem. Pārvaldības statistika atklāj efektīvu saglabāšanas/tālvadības politiku un apkopotās saglabātās ierakstus/baitus, nekad ne mediju, atsauces, galveno ID vai rokturus. Video iestatījumu panelis parāda šīs vērtības un var saglabāt abus piekrišanas slēdžus. Šī īstenošanas dokumentācija nav tiešsaistes izvietošanas vai popularizēšanas pierādījums; reālā modeļa pieņemšana tiek izsekota atsevišķi.

Rāmji tiek parakstīti secīgi ar konfigurēto Video modeli. Tukšs Video pārsvars manto Vision iestatījumu; ja abi ir tukši, Vision automātiskais maršrutētājs izvēlas efektīvo redzes spējīgo modeli. Veiksmīgi paraksti aizvieto oriģinālo daļu ar stabilu `[Video description:` prefiksu, kas arī atzīmē tekstu kā neuzticamu mediju iegūtu novērojumu un norāda lejupvērstajiem modeļiem, lai nesekotu instrukcijām, kas atrastas medijos. Rāmja parakstu kešatmiņas atslēgas ietver JPEG baitus, aicinājumu, laika zīmogu un efektīvo modeli; tikai veiksmīgi paraksti tiek kešoti. Kešatmiņas ieraksti saglabā faktisko veiksmīgo ražotāja modeli, tostarp rezerves modeli; tilts ziņo par `mixed`, kad dažādi rāmji tika ražoti ar dažādiem modeļiem. Kešatmiņas trāpījums atkārtoti izmanto šo ražotāja identitāti, nevis pārsauc to par pieprasīto maršrutēšanas plānu. Visa video rezultātu kešatmiņa ir atslēgota uz katru ievadi, kas maina izeju — aicinājumu, efektīvo modeli, paraugu politiku, rāmju skaitu, semantiskās analīzes režīmu, normalizētā fokusa norādes SHA-256 pirkstu nospiedumu, fokusa logu, `transcript`, `audioTranscript` un kontaktu lapas karogu — tāpēc jebkura no šīm dimensijām maiņa ir kešatmiņas trūkums, nekad ne novecojusi atkārtota izmantošana. Vizualizācijas dublēšanas politikas versija, slieksnis un ierobežots kandidātu rāmju skaits ir arī skaidri norādīti rezultātu kešatmiņas atslēgā un metadatos; tādējādi politikas maiņa nevar atkārtoti izmantot novecojušu visa video aprakstu. Rezultātu kešatmiņas v4 metadati saglabā režīmu un pirkstu nospiedumu, nekad ne neapstrādātu lietotāja uzdevumu. Aizsardzības metadati ziņo gan par pieprasītajiem, gan efektīvajiem analīzes režīmiem; pieprasītais `focused` režīms bez izmantojama lietotāja teksta tiek ziņots kā efektīvi `full`.

Aizsardzība izņem katru atbalstītu video daļu, bet apraksta ne vairāk kā `modalityBridgeVideoMaxVideos`. Mērķiem, kas pierādīti ar `supportsVideo === false`, neizdotie un pārsniegti video kļūst par skaidriem drošiem teksta marķieriem, tāpēc neviens neapstrādāts video neizdzīvo. Kad iespējas nav zināmas, šīs daļas paliek neskartas. Mērķi ar `supportsVideo === true` apiet tiltu. Klienta pieprasījuma aborta signāls izplatās caur lejupielādi, brokeru rindu, apakšprocesiem un parakstu izsaukumiem; aborti apstājas starp video un nekad neizdodas atvērt neapstrādātiem medijiem.

Izpildes iestatījumi ir DB atbalstīti un Zod validēti:

| Atslēga                             | Noklusējums | Diapazons / uzvedība                                                                                     |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Papildus izpilde, opt-in                                                                                 |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` saglabā vispārīgus parakstus; `focused` izmanto ierobežotu, neuzticamu pēdējā lietotāja kontekstu |
| `modalityBridgeVideoModel`          | `""`        | Manto Vision Bridge modeli                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` vai proporcionāls `segment_aware`; detektora neveiksme atgriežas pie `uniform`  |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                           |

Mantojuma saglabātie Video laika ierobežojumi virs 120 sekundēm tiek ierobežoti līdz brokeru termiņam; jauni iestatījumi, kas pārsniedz šo ierobežojumu, tiek noraidīti. `GET /api/modality-bridge/video/runtime` prasa uzticamu zīmētu lokālo apgabalu pirms autentifikācijas vai izpildes pārbaudes, tad prasa pārvaldības autentifikāciju. Tas atgriež tikai `available`, sanitizētās FFmpeg/ffprobe versijas un fiksētu iemeslu, kad izpilde nav pieejama. Iekšējā ekstrakcijas galapunkts nav publiska augšupielādes API: rindas piesātinājums atgriež `503` plus `Retry-After`, izsaucēja atvienošana atgriež `499`, un fiksētais brokeru termiņš atgriež `504`. Pārveidotās atbildes pievieno `video->text;model=<visionModel>;parts=<videos>` centrālajam `x-omniroute-modality-bridge` galvene, neizņemot Vision vai Audio segmentus.

### PII Masker (`piiMasker.ts`)

Darbojas **abās** stadijās.

- **`preCall`** klonē slodzi, pārvietojas pa `system`, `messages`, `input` un `prompt` (ieskaitot vienkāršus virkņu elementus) un piemēro `processPII()` (no `@/shared/utils/inputSanitizer`) virkņu `content`/`text` laukiem. Kad `PII_REDACTION_ENABLED=true`, atklātā PII tiek izdzēsta izejošajā slodzē. Tas ir neatkarīgi no `INPUT_SANITIZER_MODE` (kas tikai kontrolē aicinājumu injekcijas politiku). Kad izdzēšana ir izslēgta, izsaukums reģistrē atklāšanas skaitļus, neizmainot saturu.
- **`postCall`** dziļi klonē atbildi, izpilda `sanitizePIIResponse()` plus atbilžu API formas maskētāju (`maskResponsesOutput` — aptver `output_text` un `output[].content[].text`). Ja notiek kāda izdzēšana, modificētā atbilde aizvieto oriģinālo.

Aizsardzība nekad nebloķē; tā tikai anotē (`meta.detections`, `meta.redacted`) vai pārraksta.

### Aicinājumu injekcija (`promptInjection.ts`)

Atklāj pretinieku struktūras lietotāja sniegtajā saturā un īsteno
konfigurēto politiku. Uzvedību nosaka vides mainīgie un konstruktora
opcijas:

| Iestatījums          | Vides mainīgais                                                                                       | Noklusējums | Efekts                                                                                                                                                                                              |
| -------------------- | ----------------------------------------------------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Iespējots            | `INPUT_SANITIZER_ENABLED`                                                                             | `true`      | Kad `false`, aizsargjosla tiek īstenota.                                                                                                                                                            |
| Režīms               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`      | Ievades politika: `block`, `warn` vai `log`. (`redact` tiek pieņemts atpakaļsaderībai, bet **ne** noņem ievades tekstu; pieprasījuma PII pārrakstīšana tiek kontrolēta ar `PII_REDACTION_ENABLED`.) |
| Bloķēšanas slieksnis | `blockThreshold` opcija / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`      | Minimālā nopietnība, kas nepieciešama bloķēšanai. Vidēja ir tikai novērošanai pēc noklusējuma.                                                                                                      |

**Režīma prioritāte** (`getMode`): izsaucēja `options.mode` →
`INJECTION_GUARD_MODE` **DB funkciju karoga pārrakstīšana** (Dashboard → Iestatījumi →
Funkciju karogi) → `INJECTION_GUARD_MODE` vides mainīgais → `INPUT_SANITIZER_MODE` vides mainīgais →
`warn`. Tādējādi dēļa pārrakstīšana uzvar vides mainīgos, tāpēc Funkciju
karogu UI kontrolē darbojošos aizsargu tiešsaistē (nav nepieciešama restartēšana). DB lasījums ir drošs:
ja tas kļūdās, aizsargs atgriežas pie vides balstītas uzvedības, un, kad nav
pārrakstīšanas, uzvedība ir identiska vides tikai risinājumam.

Atklāšanas avoti:

1. `sanitizeRequest()` no `@/shared/utils/inputSanitizer` (kopīgs detektors
   komplekts, kas tiek izmantots citur caur caurulīti).
2. Iebūvētie `DEFAULT_GUARD_PATTERNS` (pašlaik `system_override_inline` un
   `markdown_system_block`, abi `high` nopietnība).
3. Papildus `customPatterns`, kas tiek nodoti caur konstruktora opcijām (virknes, regex,
   vai `{ name, pattern, severity }` ieraksti).

Kad `mode === "block"` **un** vismaz viena atklāšana atbilst nopietnības
slieksnim, `preCall` atgriež `{ block: true, message: "Pieprasījums noraidīts:
aizdomīgs saturs atklāts" }`. `warn`/`log` režīmos aizsargjosla reģistrē, bet
atļauj izsaukumu. Kopīgais palīgs `evaluatePromptInjection()` ir arī eksportēts
izsaucējiem, kuriem nepieciešams novērtēt uzvednes bez reģistra izmantošanas.

**Skenēšanas ierobežojums (v3.8.20):** detektors pārbauda tikai **pirmos 16 KB**
apvienotā uzvednes teksta — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 baiti) `src/shared/utils/inputSanitizer.ts`. Gan `detectInjection()`, gan
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` pirms modeļu cikla izpildes. Ievades direktīvas atrodas tuvu ievades augšai, tāpēc tas
ierobežo regex CPU/GC uz vairāku simtu KB slodzēm, ne vājinot atklāšanu (sal. #3932, #4041).

### Akreditācijas maskētājs (`credentialMasker.ts`)

Darbojas **abos** posmos, pēdējais noklusējuma ķēdē (prioritāte `95`). Noņem
pazīstamus API atslēgu / slepeno tokenu modeļus no izejošās slodzes (ziņojuma
saturs, rīka izsaukuma argumenti, rīka rezultāti) **un** pakalpojumu sniedzēja atbildes, tāpēc
akreditācija, kas ielīmēta uzvednē (vai atgriezta ar rīka rezultātu), netiek nopludināta
uz augšupējo pakalpojumu sniedzēju vai atpakaļ uz klientu.

- **Iespējams tikai ar piekrišanu**, tāda pati konvencija kā PII pārrakstīšanai (Cieta noteikuma #20-blakus):
  atslēgts, ja `settings.credentialRedactionEnabled === true` **vai**
  `CREDENTIAL_REDACTION_ENABLED=true`. Ja tas ir izslēgts, aizsargjosla ir bezdarbīga —
  tā nekad nebloķē un nekad nepārraksta.
- `redactCredentials()` pārvietojas pa visu slodzi/atbildes koku (`walkValue()`,
  prototipa piesārņojuma drošs, ciklu drošs caur `WeakSet`) un aizvieto atbilstības ar
  `[REDACTED:<type>]` vietturi, klonējot tikai tās zarus, kas patiešām
  mainījās.
- `CREDENTIAL_PATTERNS` aptver LLM pakalpojumu sniedzēju atslēgas (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokenus (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maksājumu atslēgas (Stripe, Square), mākoņa
  atslēgas (AWS piekļuves atslēga, Twilio, SendGrid, Mailgun), privātās atslēgas / JWT,
  akreditāciju nesošas savienojuma virknes (`mongodb://user:pass@...`, utt.), un
  vispārēju `Authorization`/`x-api-key`/`api-key`/`apikey` galvenes-vērtības
  modeli. Galvenes formas atslēgas (`authorization`, `x-api-key`, `api-key`,
  `apikey`) tiek strukturāli noņemtas (tikai vērtība, shēmas prefikss kā
  `Bearer `/`Basic ` saglabāts) nevis caur vispārējo teksta regex.
- Aizsargjosla nekad nebloķē; tā tikai pārraksta (`modifiedPayload` /
  `modifiedResponse`) un anotē (`meta.credentialsRedacted`, `meta.count`).

Regresijas aizsargs: `tests/unit/credential-masker-guardrail.test.ts`.

## Pamatkontrakts (`base.ts`)

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
  block?: boolean; // true pārtrauc ķēdes izpildi
  message?: string; // tiek parādīts bloķēšanas gadījumā
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall atgriež šo vērtību, lai pārrakstītu pieprasījumu
  modifiedResponse?: TValue; // postCall atgriež šo vērtību, lai pārrakstītu atbildi
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

Drošības mehānisms norāda, ka „nav izmaiņu”, atgriežot `void`, `{}` vai
`{ block: false }`. Atgriežot `modifiedPayload`/`modifiedResponse`, tiek aizstāta
vērtība, kas ķēdē tiek nodota tālāk nākamajiem drošības mehānismiem.
`signal?: AbortSignal` nodod izsaucēja dzīves ciklu drošības mehānismiem. Pieprasījuma pārtraukšana ir apzināts atvērtas kļūmes izņēmums: multivides tilti pārtrauc darbu un veic tīrīšanu, neatjaunojot sākotnējo multividi mērķim, par kuru ir zināms, ka tas to neatbalsta.

## Reģistrs (`registry.ts`)

Vienīgā `guardrailRegistry` instance nodrošina:

- `register(guardrail)` — pievieno drošības mehānismu (vai aizstāj to pēc normalizētā nosaukuma) un
  atkārtoti sakārto pēc `priority` augošā secībā.
- `clear()` / `list()` — administratīvas palīgfunkcijas.
- `runPreCallHooks(payload, context)` — secīgi izpilda aktīvos drošības mehānismus, nododot
  lietderīgo slodzi caur `modifiedPayload`, un apstājas pie pirmā `block: true`.
- `runPostCallHooks(response, context)` — tāda pati plūsma atbildes pusē.
- `resetGuardrailsForTests({ registerDefaults })` — notīra stāvokli un pēc izvēles
  atkārtoti reģistrē noklusējuma mehānismus tīrai testu izolācijai.

Abas izpildfunkcijas atgriež `{ blocked, payload|response, results, guardrail?, message? }`,
kur `results` ir `GuardrailExecutionResult` ierakstu masīvs, kas ietver katra
drošības mehānisma laukus `blocked`, `skipped`, `modified`, `error` un `meta`,
kas ir noderīgi trasēšanai.

### Drošības mehānismu atspējošana katram pieprasījumam

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` apkopo
drošības mehānismu nosaukumu sarakstu bez dublikātiem, kuri pašreizējam
pieprasījumam ir jāizlaiž. Avoti (visi neobligāti, visi tiek apvienoti):

- `apiKeyInfo.disabledGuardrails`
- Pieprasījuma ķermeņa `disabledGuardrails` (augšējā līmenī)
- Pieprasījuma ķermeņa `metadata.disabledGuardrails`
- Galvene `x-omniroute-disabled-guardrails` (vai mantotā
  `x-disabled-guardrails`)

Vērtības var būt virkņu masīvi vai ar komatiem atdalīta virkne; nosaukumi tiek
normalizēti uz mazo burtu kebab-case formātu (`pii_masker` → `pii-masker`). Rezultāts
caur `context.disabledGuardrails` tiek nodots reģistram, kas izlaiž
atbilstošos drošības mehānismus (`skipped: true` laukā `results`).

## Izpildes secība

Katram pieprasījumam, kas tiek apstrādāts caur `src/sse/handlers/chat.ts` un
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` izveido izlaižamo aizsargmehānismu sarakstu no API atslēgas, pieprasījuma pamatteksta
   un galvenēm.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` izpilda aizsargmehānismus augošā
   prioritātes secībā:
   - Atspējotie aizsargmehānismi tiek reģistrēti kā `skipped`.
   - Katra aizsargmehānisma `preCall` var pārrakstīt lietderīgo slodzi, izmantojot `modifiedPayload`.
   - Pirmais `block: true` priekšlaicīgi pārtrauc ķēdi, un apstrādātājs atgriež
     aizsargmehānisma noraidījuma atbildi.
3. (Iespējams, pārrakstītā) lietderīgā slodze tiek nodota kombinētajai maršrutēšanai un augšupstraumes
   nosūtīšanai.
4. Pēc atbildes izveides `guardrailRegistry.runPostCallHooks(...)`
   izpilda to pašu ķēdi atbildei. `block: true` šajā posmā atmet augšupstraumes
   atbildi.

Aizsargmehānismi, kas izmet kļūdu, tiek reģistrēti ar `error: <message>` un ierakstīti žurnālā, izmantojot
`logger.warn`, taču ķēdes izpilde turpinās — pēc konstrukcijas kļūmes gadījumā pieprasījums tiek atļauts.

## Konfigurācija

Iebūvēto aizsargmehānismu nolasītie vides mainīgie:

| Mainīgais                             | Izmanto                     | Ietekme                                                                                                                    |
| ------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`          | Iestatiet uz `false`, lai pilnībā atspējotu noteikšanu.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`          | Injekciju politika: `warn`, `block` vai `log`. Mantotā vērtība `redact` nepārraksta injekcijas tekstu.                     |
| `INJECTION_GUARD_MODE`                | `prompt-injection`          | Injekciju aizsargmehānisma režīms; arī DB funkcionalitātes karodziņš, kas **ignorē un aizstāj** vides mainīgos (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`          | Minimālais nopietnības līmenis, kuru `MODE=block` noraida: `high` (noklusējums), `medium` vai `low`.                       |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`          | Mantots `INPUT_SANITIZER_BLOCK_THRESHOLD` aizstājvārds.                                                                    |
| `PII_REDACTION_ENABLED`               | `pii-masker`                | Ja vērtība ir `true`, pieprasījumā esošā PII tiek aizklāta (neatkarīgi no injekciju režīma).                               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (lejupstraume) | Kontrolē maskētāja darbību atbildes pusē.                                                                                  |

Modalitātes tilta aizsargmehānismi izpildlaika konfigurāciju nolasa no DB nodrošinātās iestatījumu
krātuves (`getSettings()`), nevis no vides mainīgajiem. Attēlu apstrādes primārās atslēgas ir
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` un
`modalityBridgeCacheMaxEntries`. Mantotās
`visionBridge*` atslēgas tiek pieņemtas tikai kā dokumentētā viena cikla lasīšanas
atkāpšanās iespēja; informācijas paneļa veiktajai rakstīšanai tiek izmantotas primārās atslēgas. Noklusējuma vērtības un atkāpšanās
risinātājs atrodas `src/shared/constants/modalityBridgeDefaults.ts`, bet mantotās
konstantes ir saglabātas failā `src/shared/constants/visionBridgeDefaults.ts`.

Audio apstrāde izmanto `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` un `modalityBridgeAudioMaxClips`, kā arī koplietotos
`modalityBridgeCache*` iestatījumus. Audio apstrādei nav mantoto atslēgu atkāpšanās iespējas, jo šīs
atslēgas tika ieviestas kopā ar Modalitātes tilta shēmu.

Video apstrāde izmanto `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` un
`modalityBridgeVideoTimeout`, kā arī koplietotos `modalityBridgeCache*` iestatījumus.
Tā pēc noklusējuma ir atspējota, jo FFmpeg/ffprobe ir neobligātas darbības
atkarības, bet kadru aprakstu ģenerēšana palielina latentumu un modeļa izmaksas.

## Pielāgotas aizsargbarjeras

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

Darbības:

1. Izveidojiet `src/lib/guardrails/myGuardrail.ts`, paplašinot `BaseGuardrail`.
2. Implementējiet `preCall` un/vai `postCall`.
3. Vai nu reģistrējiet importēšanas laikā (pievienojiet no `registerDefaultGuardrails`), vai
   izsauciet `guardrailRegistry.register(...)` izpildlaikā — reģistrs aizstāj
   jebkuru iepriekšējo aizsargbarjeru ar tādu pašu normalizēto nosaukumu.
4. Pievienojiet testus direktorijā `tests/unit/` (esošie piemēri:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testēšana

Starp testiem izmantojiet `resetGuardrailsForTests()`, lai sāktu no zināma stāvokļa.
Nododiet `{ registerDefaults: false }`, lai sāktu ar tukšu reģistru un
reģistrētu tikai testējamās aizsargbarjeras. Vision Bridge atbalsta atkarību
ievadīšanu (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge nodrošina
līdzvērtīgus paplašinājuma punktus iestatījumiem, iespējām, STT modeļa atlasei, akreditācijas datu
pārbaudēm un transkripcijai. Tādēļ testos var pārbaudīt abas plūsmas bez piekļuves
DB vai tīklam.

## Skatiet arī

- `src/lib/guardrails/` — implementācija
- `src/shared/utils/inputSanitizer.ts` — koplietots detektors, kas nodrošina
  uzvedņu injekciju noteikšanu un PII maskēšanu
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge noklusējuma vērtības un
  piespiedu tilta modeļu saraksts
- `src/shared/constants/modalityBridgeDefaults.ts` — koplietoti Vision/Audio izpildlaika noklusējumi
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonāls slānis (ķēdes pārtraucējs, nogaidīšanas periodi)
- `docs/reference/ENVIRONMENT.md` — pilna vides mainīgo atsauce

## Injekciju aizsarga maršrutu pārklājums un red-team testēšana (8. posms · D bloks)

Injekciju aizsargs (`createInjectionGuard` / `withInjectionGuard`) aptver visus maršrutus,
kas pieņem lietotāju uzvednes. Tas ievēro `INJECTION_GUARD_MODE` (noklusējuma vērtība `warn` = tikai reģistrē žurnālā;
`block` = atgriež HTTP 400 `SECURITY_001`).

| Tips            | Maršruti                                                                                                                                             | Noklusējuma režīms |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Teksts (esošie) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn               |
| Ģeneratīvie     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn               |
| Dati            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn               |

Teksta izgūšana (`extractMessageContents`) aptver `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testēšana (katru nakti, `nightly-llm-security.yml`):** promptfoo pārbauda, vai katrs maršruts bloķē
OWASP-LLM korpusu režīmā `INJECTION_GUARD_MODE=block`; garak izpilda pārbaudes (izlaiž, ja nav noslēpuma).
`moderations` ir iekļauts konsekvences labad — operatori bloķēšanas režīmā to var izslēgt, izmantojot
`resolveDisabledGuardrails`.

Nakts darbplūsmai (`.github/workflows/nightly-llm-security.yml`, cron + manuāla
palaišana) ir divi darbi:

- **`promptfoo-guard` (bloķējošs)** — izpilda `promptfoo eval -c promptfooconfig.yaml`
  ar `INJECTION_GUARD_MODE=block`. Katrs pretiniecisks gadījums (piemēram, "ignorē visus
  iepriekšējos norādījumus…", DAN stila ierobežojumu apiešanas mēģinājumi) pārbauda, vai atbilde satur
  `error.code === "SECURITY_001"`, proti, vai aizsargs patiešām noraidīja pieprasījumu.
- **`garak` (konsultatīvs)** — izpilda garak `--probes promptinject,dan,leakreplay`
  pret lokālu OmniRoute instanci (`http://localhost:20128/v1`). Tā izpilde ir atkarīga no
  pakalpojumu sniedzēja noslēpuma (`PROMPTFOO_PROVIDER_KEY`); ja tā nav, darbs tiek korekti izlaists, un tam ir pievienots
  `|| true`, tādēļ tas sniedz pārskatu, neizraisot CI kļūmi.

Aizsarga palīgfunkcijas (`createInjectionGuard` / `withInjectionGuard`) pārklājums
aptver katru `/v1` maršrutu, kas pieņem uzvednes; uzvednes teksts tiek iegūts no
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`, izmantojot
`extractMessageContents()` failā `src/shared/utils/inputSanitizer.ts`.
