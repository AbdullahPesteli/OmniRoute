# Guardrails (Hrvatski)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Izvor istine:** `src/lib/guardrails/`
> **Zadnje ažurirano:** 2026-08-29 — v3.8.51 (Podrijetlo transkripta Video Bridgea deklarira pozivatelj,
> još nije potvrđeno od strane poslužitelja — pojašnjeno prema #11661)

Guardrails (zaštitne ograde) provode sigurnost, pravila i transformacije sadržaja na granici
između OmniRoute-a i uzvodnih (upstream) pružatelja usluga. Svaki guardrail može pregledati (i
opcionalno odbiti, transformirati ili anotirati) terete zahtjeva (`preCall`) i
uzvodne odgovore (`postCall`).

Sustav je **fail-open**: ako guardrail izbaci pogrešku tijekom izvršavanja, registar
bilježi pogrešku i nastavlja sa sljedećim guardrailom umjesto prekidanja
zahtjeva. Blokiranje je eksplicitna odluka (`block: true`), nikada slučajnost.

## Ugrađene zaštitne ograde

Registri automatski učitava šest zaštitnih ograda prema prioritetnom redoslijedu prilikom uvoza
(pogledajte `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Ime                 | Faza(e)        | Datoteka              |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Brojevi s nižim prioritetom izvršavaju se **prvi**.

### Vision Bridge (`visionBridge.ts`) — Most modaliteta PR-1

Presreće zahtjeve koji sadrže slike usmjerene na **ne-vision modele** i ili
preusmjerava cijeli zahtjev na model sposoban za viziju ili zamjenjuje dijelove slike
tekstualnim opisima koje proizvodi konfigurabilni vizijski model prije
uzlaznog poziva. Ovo omogućuje pružateljima koji rade samo s tekstom da neprimjetno
obrađuju multimodalne terete.

Tok:

1. Preskoči ako ciljni model već podržava viziju (osim ako se ne pojavljuje na
   popisu prisilnih mostova `isVisionBridgeForcedModel`).
2. Izdvoji dijelove slike putem `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), koji delegira na **ujedinjeni detektor medija**
   `detectMediaParts()` u `open-sse/utils/mediaParts.ts` — jedini izvor istine
   koji se dijeli s kombiniranim filtrom kompatibilnosti.
   Izdvajanje je dopušteno samo za dijelove oblika na najvišoj razini
   koje `replaceImageParts` može ponovno spojiti (ugovor o izdvajanju↔zamjeni): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, i Responses API `input_image`. Ugniježđeni hitovi i
   oblici koji služe samo kao indikatori su materijal za kombinirani filtar i nikada
   se ne izdvajaju. Preskoči ako ništa nije pronađeno.
3. Riješi konfiguraciju u vrijeme izvođenja putem `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nove `modalityBridge*`
   postavke ključeva pobjeđuju; naslijeđeni `visionBridge*` ključevi ostaju
   **jednokratna rezervna opcija** (prozor za povratak). Preskoči prije bilo kakvog
   prolaska kroz medije kada je most onemogućen.
4. Odabir načina (`modalityBridgeVisionMode`, pogledajte tablicu u nastavku) odlučuje
   o preusmjeravanju naspram opisivanja. Preusmjeravanje vraća `modifiedPayload` s
   samo zamijenjenim `model`, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Put opisivanja: ograniči slike na `maxImages`, sastavi prompt svjestan zadatka,
   konzultiraj predmemoriju za opisivanje, pozovi vizijski model **paralelno**
   (`Promise.allSettled`), i umetni `[Image N]: <description>` tekstualne dijelove na
   njihovo mjesto. Neuspješno opisivanje rezultira `null` i izvorni dio slike se
   **očuva** (#4012) — osim na putu kombiniranog opisivanja kada je svako
   opisivanje neuspješno, gdje potvrđeni ne-vizijski uzvodni model dobiva
   `(unavailable — no vision-capable provider connected)` stub umjesto (#8430).
6. Vraća `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Odabir načina (`modalityBridgeVisionMode`)

| Način      | Zadano | Ponašanje                                                                                                                                                                                                                                                                                                         |
| ---------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Naslijeđena heuristika, nepromijenjena (#6640/#7204): ne-kombinirani/`auto/` modeli preusmjeravaju na najbolji vizijski model osim ako izvorni model već nema upotrebljive vjerodajnice (onda opisuje); ciljevi kombinacije uvijek opisuju.                                                                       |
| `describe` |        | Uvijek opisuj — blok preusmjeravanja se potpuno preskoči; model koji je korisnik odabrao uvijek odgovara.                                                                                                                                                                                                         |
| `reroute`  |        | Prisilno preusmjeravanje: čuvar za modele s vjerodajnicama se zaobilazi. Čuvar za vjerodajnice **cilja** preusmjeravanja i dalje se primjenjuje — kada ne postoji upotrebljivi vizijski cilj, zahtjev se prebacuje na opisivanje tako da sirove slike nikada ne dosegnu backend koji radi samo s tekstom (#8430). |

Prisilni načini prekinu **prije** nego što se automatska heuristika izvrši; ponašanje `auto`
je bajt-identično pre-PR-1 zaštitnoj ogradi.

#### Opseg API ključa (`visionBridgeKeyScope.ts`)

Kada API ključ pozivaoca ograničava `allowedConnections`, kvote
(`allowedQuotas`) ili modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most
biraju samo preusmjeravanje i opisivanje modela koje ključ može koristiti, na
veze koje ključ može koristiti. Poziv za opisivanje tada uvijek prolazi kroz
OmniRoute samopovratnu petlju s
`x-omniroute-self-loop-key-id` zaglavljem, tako da primajući chat zahtjev
ponovno provodi politiku veze i modela tog ključa. `enforceApiKeyPolicy()`
poštuje to zaglavlje samo zajedno s nositeljem samopovratne petlje, tako da može
samo suziti pristup, a ID koji se ne može riješiti se odbacuje.

Ako nijedan vizijski model nije dopušten za ključ, put opisivanja se povlači i
zahtjev prolazi nepromijenjen, isto ponašanje kao onemogućena zaštitna ograda
(meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Zahtjevi bez ključa, i ključevi bez ovih ograničenja, ponašaju se točno kao
prije.

#### Prompt za opisivanje svjestan zadatka (`modalityBridgeVisionTaskAware`)

Default **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) dodaje
tekst **zadnje korisničke poruke** (skraćene na 500 znakova) osnovnom
opisnom promptu, usmjeravajući opis prema onome što je korisnik zapravo
pitao (codex-vision-proxy obrazac) i tražeći od vizualnog modela da
transkribira vidljivi tekst. Kada je opcija isključena — ili nema korisničkog
teksta — osnovni prompt se koristi nepromijenjen.

Opis vlastitog OpenAI-kompatibilnog zahtjeva (`callVisionModelSingle()`
u `visionBridgeHelpers.ts`) uvijek zahtijeva `image_url.detail: "high"` —
bezuvjetno, za svakog pozivatelja/providera, neovisno o bilo kojem signalu
klijenta. Uzorkovanje niske detaljnosti smanjuje točnost OCR-a za
točno onaj zadatak transkripcije teksta za koji ovaj prompt traži, tako da
sam opisni poziv uvijek traži visoku detaljnost bez obzira na razinu
detaljnosti koju je izvorni dolazni zahtjev koristio. Ovo utječe samo na
unutarnje tijelo zahtjeva za opis; ne mijenja način na koji OmniRoute
prosljeđuje vlastiti `image_url.detail` pozivatelja na primarnom zahtjevu —
ta se zadana vrijednost primjenjuje odvojeno, i to samo za otkrivene
OpenCode klijente, u `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic wire-format grana opisa vlastitog petlje nema `detail` polje
i nije pogođena niti jednom zadatom vrijednošću.

#### Ograničenje izlaza opisa (`modalityBridgeVisionMaxChars`)

| Ključ                          | Zadano | Raspon            |
| ------------------------------ | ------ | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` ili 100–50000 |

`0` (zadano) znači **bez ograničenja** — opis koji se vraća iz
`callVisionModel()` prosljeđuje se neizmijenjen, čuvajući postojeće
ponašanje. Svaka vrijednost u rasponu od 100–50000 skraćuje opis s
`…` sufiksom prije nego što se ponovno spoji kao `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` u `src/lib/guardrails/visionBridge.ts`).
Povećajte ovo za zadatke OCR-a bogate detaljima gdje downstream model
treba punu transkripciju; smanjite ga kako biste ograničili korištenje
tokena na razgovorljive vizualne modele. Polje na nadzornoj ploči
nalazi se na Naprednoj ploči kartice Vizija
(`modality-bridge-max-chars` u `ModalityBridgeVisionTab.tsx`) i ograničava
bilo koju vrijednost između 1 i 99 na 100, dok ostavlja eksplicitni `0`
nepromijenjen — `0` je valjana Zod vrijednost sama po sebi
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a ne samo
"nepostavljena" zadana vrijednost.

#### Predmemorija opisa (`modalityBridge/bridgeCache.ts`)

LRU + TTL predmemorija u memoriji za izlaze opisa, dijeljena na razini procesa.
Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s
okvirima duljinskih prefiksa (bez sudara granica polja). Komponenta modela je
**konfigurirani** mostovni model, a ne model koji je zapravo odgovorio —
`callVisionModel` može se interno povući, a ključanje po pokušaju bi
fragmentiralo predmemoriju. Neuspjeli opisi nikada se ne predmemoriraju. Postavke:

| Ključ                           | Zadano | Raspon  |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Normalizacija udaljene slike (samo-petlja opis/base64 dohvat)

Kada most sam dohvaća **udaljenu** sliku — Anthropic opis
samo-poziv i claude-wire-format base64 konverzija
(`ensureBase64ImagesForClaudeWire`), oba putem
`fetchRemoteImageAsDataUri()` u `visionBridgeHelpers.ts` — rezultantni
data URI prolazi kroz `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) prije nego što bude ugrađen u zahtjev
vizualnog modela. Prevelike slike se smanjuju na **2048px dugu stranu**
(što odgovara ograničenju promjene veličine koje OpenAI/Anthropic već
primjenjuju na poslužiteljskoj strani), što smanjuje
bajtove/latenciju bez promjene onoga što vizualni model vidi. Promjena
veličine koristi `sharp`, učitan putem dinamičkog uvoza: na platformi
gdje se njegov izvorni binarni datoteka ne može učitati, `normalizeDataUri()`
**nikada ne baca** — vraća se na prosljeđivanje izvornih bajtova, tako da
put opisa/base64-konverzije uvijek nastavlja raditi. Bajtovi koji nisu slike
(dohvat koji nije vratio dekodabilnu sliku) također se prosljeđuju nepromijenjeni.
Ova normalizacija je ograničena na slike koje most dohvaća za svoj vlastiti
samo-poziv — nikada se ne primjenjuje na sirovi proslijeđeni teret
pozivatelja, u skladu s načelom mutacije samo uz pristup (Hard Rule #20).

#### Shema postavki + migracija

Novi `modalityBridge*` ključevi su Zod-validirani u `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trojka `modalityBridgeCache*`, i
grupa `modalityBridgeAudio*` koja se koristi od strane Audio Mosta. Migracija
`141_modality_bridge_settings.sql` kopira postojeće naslijeđene
`visionBridge*` vrijednosti u odgovarajuće nove ključeve (idempotentno, nikada
ne prepisuje vrijednost `modalityBridge*` koju je postavio operater); naslijeđeni
ključevi ostaju prihvaćeni kao fallback za čitanje tijekom jednog ciklusa
izdanja.

#### Header transparentnosti + statistika

Odgovori transformirani opisom nose
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(izgrađeno pomoću `buildModalityBridgeHeader()` u `modalityBridge/bridgeStats.ts`,
označeno s `withModalityBridgeHeader()` u `src/sse/handlers/chatHelpers.ts`).
Preusmjereni zahtjevi ne dobivaju **nikakav** header — teret je bio nepromijenjen
i zamjena modela već je vidljiva u polju `model` tijela odgovora.

`GET /api/modality-bridge/stats` (upravljanje autentifikacijom, ista razina kao
`GET /api/settings`) vraća u memoriji po-modalne brojače
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` i
`video`. `averageLatencyMs` koristi `latencySamples`, a ne sve pokušaje, kao svoj
imenitelj; operacija bez mjerenja ne stvara uzorak od nula milisekundi. `bridged`
ostaje unatrag kompatibilna oznaka za uspješne konverzije; neuspjeli pokušaji je ne
povećavaju.
Brojači se resetiraju pri ponovnom pokretanju procesa prema dizajnu
(telemetrija, ne računovodstvo).

#### Konfiguracija nadzorne ploče

Posvećena stranica nadzorne ploče je
`/dashboard/settings/modality-bridge`. Njene URL-adresabilne kartice `Vision`, `Audio`
i `Video` zadržavaju parametre upita dok mijenjaju vrijednost `tab`.
Kartica Vision otkriva omogućavanje, način, odabir modela (uključujući automatski
zadani), zadatku svjesno poticanje, napredne limite vremena/izvora/opisa/keša,
runtime
brojače i zaštićeni zahtjev za uzorkom. Kartica Audio je također aktivna: otkriva
omogućavanje, STT-samo odabir modela s Automatski, limite vremena/max-clip, audio
brojače i `input_audio` uzorak testa. Kartica Video je funkcionalna: izvještava
o FFmpeg/ffprobe runtime stanju — jedno od četiri eksplicitna UI stanja (`unknown` dok
je probiranje u tijeku ili nije moglo završiti, `restricted` na ne-loopback
hostu nadzorne ploče gdje se probiranje preskoči na klijentskoj strani, `unavailable` nakon
što je probano i potvrđeno kao nedostupno, ili `available` s verzijama FFmpeg/ffprobe) —
zadržava limite omogućavanja/modela/frame/video/vremena, filtrira odabir modela na
modele sposobne za viziju i otkriva video brojače.

Bivša Vision Bridge kartica pod AI postavkama je poveznica za kompatibilnost na
novu stranicu; više ne posjeduje drugu kopiju obrasca. Media Providers također
povezuje Image-to-Text i Speech-to-Text radne tokove s odgovarajućim Modality
Bridge karticama bez uklanjanja postojećeg Speech-to-Text igrališta.

**Zaobilaženje samopovratne prijave:** kada poziv za opis prolazi kroz OmniRouteovu
vlastitu `/v1` samopovratnu petlju (nestandardni model pružatelja), podzahtjev šalje
`x-omniroute-admission-bypass: internal` i autentificira se s riješenim
samopovratnim vjerodajnicama — lokalni `sk_omniroute` sentinel u lokalnom modu, ili
operaterom konfigurirani `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env ključ (#1350) tako
da `REQUIRE_API_KEY=true` implementacije i dalje mogu izvršiti poziv za opis. Zaobilaženje
se poštuje samo za te točne vjerodajnice, tako da vanjski klijenti ne mogu koristiti
zaglavlje za preskakanje prijave.

Nasljedni zadaci žive u `src/shared/constants/visionBridgeDefaults.ts`; novi
mod/jesenski svjesni/keš zadaci i rješenje postavki žive u
`src/shared/constants/modalityBridgeDefaults.ts`. Ograda otkriva
`deps` opciju konstruktora tako da testovi mogu umetnuti lažne `getSettings` i
`callVisionModel` implementacije.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Presreće audio-izvorne chat zahtjeve prije nego što stignu do cilja koji nije
poznat da prihvaća audio ulaz. Nikada ne preusmjerava chat zahtjev: audio dijelovi se
transkribiraju putem postojećeg OpenAI-kompatibilnog multipart krajnjeg
točke, a odabrani chat model nastavlja s tekstualnim transkriptima.

Tok:

1. Riješi `supportsAudio` putem `getResolvedModelCapabilities()`. Eksplicitni
   metapodaci registra pružatelja pobjeđuju, zatim statički metapodaci modela, zatim
   sinkronizirani `modalities_input`. Deklarirani popis ulaza bez `audio` je `false`;
   nijedna dokaz sposobnosti ostaje `null`. I `false` i `null` aktiviraju
   konzervativni most, dok `true` zaobilazi.
2. Riješi `modalityBridgeAudio*` postavke i izvuči dijelove audio
   dijela iz svake poruke putem zajedničkog `detectMediaParts()`
   detektora. Podržani oblici žice su OpenAI `input_audio`, `audio_url`, i
   `source.media_type: "audio/*"`. Ugniježdeni audio se otkriva za usmjeravanje, ali ne
   se uklanja putem splice puta. Rad je ograničen s `modalityBridgeAudioMaxClips`;
   kasniji dijelovi ostaju netaknuti.
3. Poštuj konfigurirani `provider/model`, ili dopusti `selectAudioBridgeModel()` da
   prođe kroz `AUDIO_TRANSCRIPTION_PROVIDERS` u stabilnom katalogu i odabere prvi
   model s upotrebljivom aktivnom vjerodajnicom pružatelja.
4. `callAudioTranscription()` pretvara base64/data-URI audio u multipart
   `file`, ili preuzima udaljeni `audio_url` putem javno dostupne izlazne
   ograde s DNS pinningom i granicom od 25 MB. Zatim POST-a datoteku i odabrani
   model na lokalnu `/v1/audio/transcriptions` samopovratnu petlju, autentificiranu s
   `resolveSelfLoopBearer()`. Postojeća ruta transkripcije obavlja normalno
   pretraživanje vjerodajnica, upravljanje hlađenjem/ograničenjem brzine i
   raspodjelu pružatelja.
5. Uspješni pozivi zamjenjuju svoje dijelove s `[Audio N]: <transkript>`. Pozivi
   se izvršavaju s `Promise.allSettled`: pojedinačni neuspjeh čuva taj izvorni
   audio dio (#4012 ugovor). Ako svaki poziv ne uspije i cilj se dokaže
   `supportsAudio === false`, dijelovi postaju
   `[Audio N]: (nedostupno — nema povezanog STT pružatelja)` (#8430 ugovor). Za
   nepoznati cilj (`null`), rezultat svih neuspjeha ostaje netaknut. Dokaženi
   cilj samo s tekstom bez upotrebljive STT vjerodajnice prima isti eksplicitni
   stub bez izdavanja mrežnog poziva.

Uspješni transkripti koriste procesno široku Modality Bridge LRU/TTL predmemoriju. Ključ
kombinira audio referencu, stabilnu oznaku operacije `audio-transcription` i odabrani STT
model; neuspjesi se nikada ne predmemoriraju. Audio pokušaji ažuriraju zajedničke
`bridged`, `cacheHits`, `failures` i `lastUsedAt` brojače.
Transformirani odgovori nose
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; netaknuti
zahtjevi ne primaju segment Audio Bridge.

Runtime postavke su DB-podržane i Zod-validirane:

| Ključ                         | Zadano  | Raspon          |
| ----------------------------- | ------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —               |
| `modalityBridgeAudioModel`    | `""`    | Auto ili STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10            |

Dijeljeni cache ostaje pod kontrolom `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` i `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Presreće vrhunske video dijelove u Chat Completions `messages` i Responses
API `input` prije nego što se pozove cilj bez poznate izvorne podrške za video.
Podržani oblici su `input_video`, `video_url`, `video_source`, HTTPS URL-ovi,
i `data:video/*;base64,...` data URI. Obični nazivi datoteka u tekstu se ne tretiraju
kao video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) upravlja prolazom zahtjeva,
provjerom sposobnosti/politike, agregacijom po zahtjevu i payload-om odgovora.
Rad po videu — akvizicija, cache cijelog rezultata, opisivanje sekvence okvira
(koja spaja bilo koji audio transkript koji je proglasio pozivatelj), i metrike/prekid/čišćenje po pokušaju —
je skriven iza `processVideoPart` u `videoBridgePipeline.ts`, pozvan jednom po video dijelu unutar `preCall` petlje.
Ta modul također definira eksplicitne granice portova `VideoMediaBrokerPort`
(akvizicija bajtova i ekstrakcija uzorkovanih okvira), `VideoAudioTranscriptionPort`
(spajanje audio transkripta koji je proglasio pozivatelj s uzorkovanim titlovima), i
`VideoDrilldownPort` (nasljedni oblik sirovog spremišta). Proizvodni STT i zadržavanje okvira
sastavljeni su oko opisa portova kroz `createVideoSttAdapter` i
`createVideoDrilldownAdapter`; potonji koristi zajednički neprozirni životni ciklus.

Javni `/v1` put zahtjeva nikada ne uvozi niti poziva podproces. Udaljeni
videozapisi se preuzimaju pod granicom od 50 MiB; inline base64 videozapisi imaju
konzervativni limit od 36 MiB dekodiranog po videu kako bi model/poruke/pakiranje
ostali unutar javnog JSON zahtjeva za prijem od 50 MiB. Inline
procjene duljine i dekodirane veličine provjeravaju se prije alokacije. HTTPS je
obavezan na početnom udaljenom URL-u i svakom preusmjeravanju, koristeći postojeću
javnu samo izlaznu zaštitu s DNS pinningom. Bajtovi tada prelaze točno unutarnju
`POST /api/modality-bridge/video/extract` granicu brokera. Ta ruta je i
`LOCAL_ONLY` i `SPAWN_CAPABLE`, prihvaća samo autentificirani,
pouzdani loopback zahtjev po procesu, i nikada ne prihvaća URL, putanju datoteke, izvršnu datoteku,
ili popis argumenata. API tijelo veličine cjevovoda i inkrementalni čitač tijela
handler-a neovisno provode limit ulaza brokera od 50 MiB. Njegova ograničena
red čekanja pokreće jednu ekstrakciju u isto vrijeme, dopušta četiri čekajuća posla,
i ograničava čekajući ulaz na 100 MiB.

Unutar brokera, `ffprobe` čita privatnu lokalnu datoteku; fiksni format
lista dopuštenih izuzima formate popisa i manifesta. Za dopuštene MOV-obitelji
kontejnera, vanjske MOV reference podataka ostaju onemogućene prema zadanim postavkama, a
fiksna naredba ne uključuje njih. I `ffprobe` i `ffmpeg` koriste
`file`-samo protokol bijele liste, jednu nit, fiksne nizove argumenata, bez ljuske,
i izvršne datoteke riješene iz `PATH`. Priključene slike pokrivača nisu
igrive kandidate. Svi igrivi streamovi moraju zadovoljiti limite, a
eksplicitni zadani stream je preferiran prije determinističkog najnižeg indeksa
rezervnog rješenja. Videozapisi su ograničeni na 600 sekundi, 8,192 piksela po dimenziji, i
33,554,432 izvornih piksela. FFmpeg uzorkuje 1–16 srednjih JPEG okvira, smanjuje
dugu stranu na najviše 1,024 piksela bez povećanja manjih ulaza, i
nikada ne prima URL. Uzorkovanje je prema zadanim postavkama `uniform`. Opcionalne
`scene_aware` i eksperimentalne `segment_aware` politike izvode jedan dodatni
fiksni FFmpeg prolaz preko već validiranog lokalnog streama, odabiru ograničene
`showinfo` vremenske oznake scena, i deterministički se vraćaju na iste
uniformne sredine u slučaju neuspjeha detektora, isteka vremena, neispravnog izlaza, ili praznog
skupa kandidata. Segment-aware način alocira uzorke sredine proporcionalno
validiranim vremenskim intervalima scena; segment-aware dokazi i ponašanje rezervnog rješenja su
detaljno opisani u nastavku. Strogi limit od 16 okvira se
primjenjuje nakon odabira u svakoj politici. Kada zahtjev koji je svjestan scena ima samo
jedan okvirni budžet, koristi uniformnu sredinu aktivnog punog videa ili fokalnog
prozora i izvještava `policyEffective: uniform`: jedan odabrani okvir scene
ne može sačuvati oba vremenska kraja. Pozivatelj može opcionalno pružiti
ograničeni fokalni prozor (`start`/`end` sekunde); granice su ograničene na trajanje
medija, obrnuti ili neograničeni prozori se odbacuju, a sve politike uzorkovanja
se provode samo unutar normaliziranog intervala. Rezultantni
prozor je uključen u metapodatke uzorkovanja i u prefiks neprovjerenog opisa
tako da downstream modeli mogu razlikovati fokusirani izvadak od pune
vremenske linije.

Fokus semantičkih titlova je zasebna, eksplicitna postavka. Zadani `full`
način analize čuva postojeći okvirni prompt i nikada ne prosljeđuje tekst zahtjeva
modelu titlova. U `focused` načinu, most čita samo najnoviji
neprazni korisnički napisani `text`/`input_text` iz istog Chat ili Responses
kontejnera, normalizira ga na NFC, smanjuje kontrolne znakove i razmake,
i ograničava ga na 500 Unicode kodnih točaka. Prazan rezultat se vraća na
točno `full` prompt. Korisna naznaka se serijalizira kao JSON u
posvećenom bloku neprovjerenog korisničkog konteksta i može samo prioritizirati
opservabilne detalje; ne može nadjačati zasebno upozorenje protiv slijedjenja
uputa vidljivih ili čujnih u mediju. Tekstualni fokus nikada ne inferira `start`/`end` ili mijenja
temporalni uzorkivač.

#### FU-07 strukturni segmentni dokazi

`segment_aware` koristi jedan ograničeni pre-analitički prolaz preko već validiranog lokalnog video streama. Fiksni lanac filtara prvo skalira na najviše 320 piksela širine, detektira promjene scena i zamrznute intervale, a zatim uzima uzorke na 1 sličicu u sekundi za zamućenje, prosječnu lumu i prostorne/temporalne informacije. Prolaz je ograničen na 600 strukturnih uzoraka, jedan FFmpeg/filter nit, isti `file`-samo protokol i container allowlists, ograničenje izlaza procesa od 1 MiB, i najviše 30 sekundi unutar zajedničkog prekida/rokova brokera. Nikada ne prihvaća naredbu, filtar, putanju ili URL iz zahtjeva.

Strukturne vrijednosti su deterministički uzorci dokaza, a ne semantičko razumijevanje videa. Ne inferiraju subjekte, radnje, natpise, govor ili namjeru korisnika. Granice scena i zamrzavanja formiraju segmente; pokrivenost zamrzavanja, zamućenje, izloženost, prostorna detaljnost i temporalna promjena samo utječu na to kako se postojeći budžet od 1–16 sličica raspoređuje. Potpuno zamrznuti segment je ograničen na jednu sličicu, dok se nezamrznuti segmenti natječu za preostali budžet. Kada granice nadmašuju sličice, zadržava se uniformna pokrivenost vremenske linije tako da brzi rani rezovi ne mogu sakriti dugi segment. Granice scena unutar 1-sekundne analitičke rezolucije granice zamrzavanja se spajaju.

Nedostajući filtri, neispravni/prazni dokazi, greška detektora ili ograničeno vrijeme pre-analize neuspješno se otvaraju prema točnoj uniformnoj srednjoj politici. Prekid poziva ili rok brokera ne neuspješno se otvara: prekida podproces u tijeku, sprječava kasniju ekstrakciju sličica, a privatno privremeno stablo se uklanja u `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generira determinističke stvarne FFmpeg
fiksacije za uštede nakon deduplifikacije natpisa, raspodjelu budžeta za gustu
kretanje, dokaze o zamućenju/izloženosti/SI-TI, brze rezove s dugim repom i
lažne pozitivne rezultate postupnog izbljeđivanja. Bilježi vrijeme zidne analize i,
gdje je `/usr/bin/time` dostupno, CPU djeteta i vrhunski RSS. Njegove provjere
kvalitete su samo strukturni orakuli. Stvarna kvaliteta modela natpisa ostaje
`HOLD` jer ovaj uređaj nema ovlašteni krajnji točku ili zamrznutog suca. Novčane
uštede također ostaju `HOLD` osim ako `--caption-cost-per-call-usd` ne
osigura eksplicitnu pozitivnu procjenu po pozivu; skripta nikada ne fabricira
ni jedan rezultat.

Svaka sličica je ograničena na 4 MiB, sve sirove sličice zajedno na 23 MiB, a
serijalizirani odgovor brokera na 32 MiB. Privatni privremeni direktorij se
uklanja u `finally`. OmniRoute ne bundla FFmpeg i ne prihvaća prilagođenu
putanju izvršne datoteke. Prije titlovanja, most primjenjuje konzervativni
vizualni deduplifikacijski prolaz: svaki JPEG se smanjuje na 16×16
grayscale bafer i uspoređuje se samo s posljednjom zadržanom sličicom. Za
zahtijevani budžet natpisa iznad jedne sličice, ekstrakcija osigurava
ograničeni skup kandidata do dvostruko tog budžeta i nikada više od 16
sličica. Zahtijevani limit se primjenjuje samo nakon deduplifikacije, s
prvim i konačnim odabranim kandidatima sačuvanim tijekom konačnog
pročišćavanja kada je budžet barem dva. Verzijska
`grayscale-16x16-mean-cells-v2` politika koristi veći od prosječnog luma
delta i omjer thumbnail ćelija čija je normalizirana delta barem 0.05. Prag
za dupliciranje je konstantan 0.04, odabran zbog predvidljivosti, a ne
izložen kao postavka u vrijeme izvođenja. Ovaj sekundarni
visoko-kontrastni signal čuva male pokrete i promjene vidljivog teksta koje
može sakriti samo prosječna usporedba. Greške komparatora ili dekodera
neuspješno se otvaraju i zadržavaju pokrivenost. Izlazni metapodaci
odvajaju ekstraktirane kandidate, uspješno korištene sličice i vizualne
duplikate koji su odbačeni.

Izričito označeni dio videa može zatražiti vremenski označen kontaktni list. Most
gradi najviše 4-kolumnu, 16-sličičnu JPEG mrežu. Svaka ćelija od 512 piksela
utisne svoj izvorni vremenski oznaku u visoko-kontrastnu donju traku, dok
iste vremenske oznake ostaju u tekstualnim metapodacima za kasniju
asocijaciju i reviziju. Potpuni JPEG ostaje ograničen na 32 MiB. Ako `sharp`
ne može dekodirati ili sastaviti mrežu, most se vraća na pojedinačne JPEG
sličice; prekid klijenta se još uvijek propagira kroz operaciju lista.

Dokazi o promociji su namjerno odvojeni od sintetičkog sastava
mikrobenchmarka. `scripts/perf/video-bridge-contact-sheet-eval.ts` definira
shemu-verzijski A/B uređaj za stvarne OpenAI-kompatibilne vizijske modele. Mjeri
tokena koje izvještava pružatelj, end-to-end zidnu latenciju (uključujući
sastavljanje lista), broj poziva modela i manifestom definiranu zadržavanje
činjenica. Sirove odgovore modela ne pišu se u izvještaj; samo SHA-256
digest i podudarnosti ID-a činjenica se zadržavaju. Uređaj ne izvršava
mrežni ili plaćeni poziv modela osim ako `--execute-real` nije proslijeđen i
`--model`, `OMNIROUTE_BASE_URL` i `OMNIROUTE_API_KEY` su konfigurirani.
Bez tog eksplicitnog stvarnog izvođenja, njegov strojno čitljiv presud ostaje
`HOLD`; mjerenja sintetičkog tereta/broja poziva sama nisu dokazi o
promociji.

Odvojeni `scripts/perf/video-bridge-promotion-eval.ts` konzumira FU-07 ili
FU-09 opažanja. Prihvaćanje promocije zahtijeva svih osam sintetičkih
scenarija plus sanirani stvarni isječak, najmanje tri mjerene ponavljanja po
rolama i slučajevima, svih deset deklariranih metrika, zamrznutih medija/
upita/očekivanih-činjenica/postavki digest, jedinstvenih ID-a opažanja i
verificiranih zasijavanih A/B redoslijeda. Potvrda izvršenja veže
digest korpusa, točan SHA kandidata i reviziju modela. Nedostajući ili
neispravna mjerenja ostaju `HOLD`, uključujući CPU iznad 30 s, vrhunski RSS
iznad 512 MiB ili pre-analizu iznad 30 s. Ovo su ograničenja za
prihvaćanje dokaza, a ne nova jamstva za provođenje RSS-a u vrijeme izvođenja.

FU-07 zahtijeva najmanje 98% zadržavanja kvalitete i p95 latenciju ne veću od 1.2x
osnovne vrijednosti, plus ili 0.05 apsolutno uravnoteženo poboljšanje srednjeg
povratka na temelju slučaja pri ekvivalentnim srednjim pozivima za natpise, ili
najmanje 10% manje srednjih poziva za natpise nakon deduplifikacije. FU-09
zahtijeva najmanje 0.85 kvalitete, 95% zadržavanja, 20% smanjenja p95
latencije i 10% smanjenja tokena. Gubitak kritičnih činjenica, usklađenost
s obvezama ili nedostajući korištenje sprječava promociju. Jedno izvršenje ne
može promovirati ništa: `--previous-report` potvrđuje dva različita,
nepreklapajuća, uzastopno podobna izvršenja iste politike/modela revizije/
kandidata/korpusa. Eksperiment uzorkovanja ne može potvrditi eksperiment
kontaktne stranice.

Kolektori trebaju ocjenjivati odgovore u memoriji i spremiti `responseDigest`
plus metrike i obveze promatranja, nikada tekst odgovora. Potrošač također
čita naslijeđene sirove promatranja, ali nikada ne kopira taj tekst u svoje
izvještaje. Točno jedan od `responseDigest` ili `rawResponseText` se
prihvaća za svako promatranje. Verzijska dopuštena lista ostaje prazna s
nepromjenjivim `hold` zadanim postavkama. Podobni unos zahtijeva svoj
referentni dokaz, politiku, reviziju modela, točan SHA kandidata, manifest
digest i dva različita ID-a izvršenja; sukobljeni konteksti se odbacuju. Ove
metapodatke predstavljaju ugovor o reviziji, a ne dokaz da referencirana
datoteka sadrži istinske mjere. Pregledajte stvarne račune prije dodavanja
bilo kojeg unosa. Endpoint za upravljanje statistikama i Video nadzorna
ploča otkrivaju konzervativnu spremnost. Konfigurirani alias modela sam po
sebi ne uspostavlja njegovu reviziju ili trenutni SHA kandidata, tako da
trenutna nadzorna ploča izvještava `HOLD` umjesto ponovnog korištenja
podobnosti iz drugog konteksta izvršenja. Eksplicitni eksperimentalni
odabir ostaje odvojen od promocije; nijedna zadana postavka se automatski
ne mijenja.

Pozivatelji mogu priložiti opcionalni `transcript.cues` niz uz podržani
video dio kada već posjeduju usklađeni tekst. Svaki cue mora sadržavati
`text`, konačni `start`/`end` interval unutar ispitivane trajanja, i
dopušteni `source` (`client`, `embedded`, ili `audio-bridge`); `confidence`
je prema zadanim postavkama `1` i mora ostati između `0` i `1`. Točni
duplikati cue-a se spajaju. OmniRoute nikada ne započinje transkripciju iz
ovih metapodataka: verificirani cue-ovi se kopiraju u opisani rezultat s
izvorom, povjerenjem i intervalom, i prikazuju se kao nepouzdana
promatranja uz natpise okvira. Nevažeći, izvan raspona, ili bez
provenijencije tekst se odbacuje umjesto da se miješa u tok natpisa. Oba
kanala tijela zahtjeva za transkript normaliziraju dostavljenu provenijencu
na `client`, uključujući samoproklamirane `embedded` ili `audio-bridge`
oznake. Samo adapter u vlasništvu poslužitelja može dodijeliti te
pouzdane oznake putem argumenta isključivo za kod `trustedSource`; polje
JSON zahtjeva ne može doći do tog argumenta. Tekst transkripta ostaje
nepouzdani sadržaj izveden iz medija, bez obzira na njegovu provenijencu,
i nikada ne smije odrediti autorizaciju.

Napredni pozivatelj može pružiti `audioTranscript` stazu za isti video;
ona se tretira kao tekst koji je pružio klijent, a ne kao dokaz poslužiteljske
transkripcije. Spojna šava pokreće vizualna i audio promatranja pod
jednim rokom i signalom za prekid, naručuje ih na zajedničkoj vremenskoj
liniji, spaja točne duplikate i izvještava o djelomičnom rezultatu kada
samo jedna strana uspije. Nevažeći `audioTranscript` degradira se na taj
djelomični rezultat — vizualni opis se čuva, a audio grana bilježi
sanitizirani kod neuspjeha — umjesto da ne uspije cijeli video. Dostupnost po
grani, djelomična oznaka i sanitizirani kodovi neuspjeha čuvaju se u
opisanom rezultatu, u metapodacima zaštitnog zida (`audioFusionRuns`/
`audioFusionPartials`/`audioFusionFailureCodes`), u metapodacima
predmemorije rezultata, i u brojačima fuzije mosta. Zadani put Video
Bridge ne pokreće pretvaranje govora u tekst ili preuzima drugu kopiju
medija; bez te eksplicitne staze, ostaje samo video.

**Zadržavanje transkripta (#12150 P1).** Ovo se automatski primjenjuje
kada god Video Bridge (sam po sebi opt-in) prikazuje cue transkripta —
ne postoji zasebna oznaka za zadržavanje. Kada zahtjev prikazuje bilo koji cue
transkripta (pozivateljem deklarirani `transcript` ili fuzirani
`audioTranscript`), zaštitni zid ga označava kao `videoBridgeObserved`
i proizvodi redigirani sjena video opisa — identično prikazivanje u kojem
je svaki cue-ov slobodni tekst tijela zamijenjen s `[redacted-video-transcript]`,
izgrađen zamjenom strukturiranog polja cue-a prije nego što se string
sastavi (nikada parsiranjem spljoštenog teksta, tako da nijedan sadržaj cue-a
— neprijateljski ili običan, uključujući tijela koja sadrže `]` kao što su
`[inaudible]`/`[music]` — ne može preživjeti). Trajni zapis tijela
zahtjeva zamjenjuje svaki dio teksta izvedenog iz videa s tim redigiranim
sjena, usklađenim po jednakosti sadržaja; `fullText` sidro se ponovno
čita iz završnog pre-call zaštitnog zida, tako da se podudaranje još uvijek
uspijeva nakon kasnijih zaštitnih zidova (maskeri PII i vjerodajnica, prioriteti
10/95) prepisuju tekst opisa na mjestu i nakon sustavnog poziva/ predaje/
injekcije memorije preoblikuju niz poruka. Tijelo poslano uzvodno modelu
ostaje nepromijenjeno. Promatrani zahtjev također ne popunjava trajnu
Memoriju (oba vađenja izvedenih iz zahtjeva i odgovora se preskoče),
tako da vlastiti odgovor modela ne može odjekivati tekst transkripta u
Memoriju.

**Sirovi video polja (#12430).** Kada je most omogućen i izvorna podrška za
video je nepoznata ili odsutna, definirana `transcript`/`audioTranscript`
polja također aktiviraju `videoBridgeObserved`, čak i nakon neuspjeha
opisa ili `maxVideos` limita. `null` i prazni stringovi se broje; odsutna
polja i ne-video metapodaci ne. Zadržane kopije redigiraju ova polja ili
izostavljaju zahtjev, a predmemorije/Memorija se zaobilaze.

Na tim rezervnim putanjama, valjani pozivi postaju podržani `text`/`input_text` dijelovi umjesto nestandardnih polja pružatelja. Obje staze koje dostavlja zahtjev ostaju nepouzdane `client` opservacije, uz izričito upozorenje da video nije opisan i da vremenske oznake nisu verificirane prema mediju. Postojeći budžeti od 256 cue/64-KiB ukupno i po cue-u primjenjuju se na obje staze zajedno; vremenske oznake moraju stati unutar brokerovog plafona od 600 sekundi i bilo kojeg dostavljenog prozora fokusa. Nevaljane staze se odbacuju, ne prosljeđuju se kao proizvoljan tekst; valjani brat još uvijek može biti korišten osim ako njihov kombinirani budžet nije premašen. Null/prazna polja ne dodaju tekst. Ova rezervna opcija ne dodaje nikakvo preuzimanje medija ili transkripciju. Polja za proširenje transkripta uklanjaju se iz rezervnog video nositelja i njegovih `video_url`/`source` objekata. OpenAI wire allowlist ostaje stroga; nepoznati izvorni video nositelji ostaju dostupni, a poznati ciljevi samo za tekst zadržavaju sigurne oznake. Strukturalne sjene redakcije štite dodani tekst transkripta, dok izvorni zahtjev koji posjeduje pozivatelj ostaje nepromijenjen. Izvorno podržani ciljevi i onemogućeni mostovi zadržavaju svoje postojeće ponašanje zaobiđanja.

Dodatne zadržane kopije koriste isti signal promatranog zahtjeva. Siromašni snimak zahtjeva klijenta prije zaštitne ograde, u memoriji čekajući zahtjev, i rani zapis odbijenog zahtjeva strukturno zamjenjuju polja transkripta u video dijelovima; string prompti sintetizirani od strane faza cjevovoda i prijenosa konteksta su redigirani na mjestu tijela zadržanog zahtjeva. Oznaka `video_content_removed` čini da nastavak `previous_response_id` ne uspije zatvoriti umjesto da rekonstruira tekst koji je namjerno odbijen. Ako promatrani zahtjev izgubi svoju sjenu redakcije po dijelu prije zapisivanja, ili čak jedna od nekoliko video sjena ne uspije odgovarati nakon kasnijih mutacija zahtjeva, zadržano tijelo zahtjeva se potpuno izostavlja umjesto da zadrži djelomično redigirani transkript.

Za promatrani zahtjev, odgovor modela može citirati bilo koji dio transkripta bez strukturirane granice cue-a. Njegov zadržani zapis poziva `responseBody` stoga se zamjenjuje oznakom izostavljanja; detaljni artefakt cjevovoda (koji može uključivati tijela uzvodnog/klijentskog i dijelove streama) se ne zadržava. Semantički, idempotentni i kešovi ponovnog razmišljanja zaobiđu čitanja i pisanja za taj zahtjev. Zahtjev pružatelja i odgovor vidljiv klijentu ostaju nepromijenjeni. Rani keepalive bajtovi se ispuštaju iz privremenog bafera kada se detaljni artefakt izostavi. Kirovo nepravilno upozorenje na EventStream izvještava samo o broju bajtova u payloadu, nikada o njegovom sadržaju ili sirovom pogrešnom JSON parseru. Ovo ne tvrdi da je svaki nepovezani dijagnostički alat pružatelja/plugin-a pregledan; širi pregled zadržanih odvodnih podataka prati se u #11658.

Unutarnji `/api/modality-bridge/video/drilldown` životni ciklus je odvojen, loopback/token-autentificirani keš podloga. Svaka operacija također zahtijeva kanonski neprozirni ID glavnog subjekta. Prije nego što se omogući proizvodni pozivatelj, mora izvesti taj ID iz autentificiranog zakupca i nikada ne smije proslijediti vrijednost koju odabere klijent. Ključevi keša povezuju tog glavnog subjekta s kanonskim sesijskim i video-referentnim ID-ima, pohranjuju samo njihove SHA-256-izvedene ključeve i ograničavaju čitanja i brisanje na istog glavnog subjekta. Keš pohranjuje najviše 16 izvedenih JPEG okvira po unosu, ističe ih nakon deset minuta i podržava ograničena `start`/`end` čitanja ili eksplicitno brisanje sesije.

Svaki glavni subjekt je ograničen na 16 unosa i 64 MiB kanonskih JPEG podataka. Ta ograničenja su neovisna od globalnog plafona od 64 unosa/256 MiB: pritisak kvote glavnog subjekta izbacuje samo najrjeđe korištene unose tog glavnog subjekta prije nego što se razmotri globalno LRU izbacivanje. Istečeni unosi se uklanjaju iz oba glavna subjekta i globalnog računovodstva na aktivnost keša, dok otkazivanje i neuspjeh validacije ne izvršavaju djelomičnu zamjenu.

Keš odbacuje nekanonski Base64, višak punjenja, ne-JPEG medije, nepravilne ili skraćene JPEG-ove, i JPEG-ove koji proizvode upozorenje tijekom ograničenog punog dekodiranja slike `sharp`. Ponovno kodira svaku prihvaćenu sliku kao kanonski JPEG, izvodi širinu i visinu iz dekodiranih bajtova umjesto da vjeruje poljima pozivatelja, i odbacuje sve završne poliglotne bajtove umjesto da ih zadrži. Samo je ograničeni kanonski komprimirani bafer teret za obje kvote. JSON wire limit uključuje Base64 preopterećenje za plafon od 32 MiB dekodiranog ulaza. Svaka
pohranjena derivacija bilježi svoj validirani JPEG format/rezoluciju, politiku uzorkovanja, verziju derivacije, vrijeme stvaranja, hash sadržaja izračunat na serveru, i hash roditeljskog referentnog plus hash roditeljskog sadržaja pouzdanog pozivatelja. Otkazivanje se provjerava između asinkronih faza dekodiranja/hashiranja prije atomskog potvrđivanja keša.

Proizvodni proizvođač ponovno koristi već izvedene broker okvire samo nakon uspješne vizualne analize, bez drugog preuzimanja/ekstrakcije videa. Zahtijeva operator `modalityBridgeVideoDrilldownEnabled=true`, strogo po dijelu `drilldown: true`, i autentificirani ID zapisa API ključa. Vrijednosti glavnog subjekta/sesije koje deklarira klijent nikada ne uspostavljaju vlasništvo. Bez sva tri uvjeta ne hashira, ne mijenja veličinu ili ne zadržava dodatne okvire. Neuspjeh zadržavanja čuva upotrebljiv vizualni odgovor. Zahtjevi s pristankom zaobilaze keš rezultata cijelog videa tako da pohranjeni rezultati nikada ne ponavljaju rukovanje.

Uspješni JSON i SSE odgovori izlažu najviše četiri neprozirne handle u ograničenom
`x-omniroute-video-drilldown` headeru. Ovlašteni izvori preglednika mogu čitati taj header
bez proširenja CORS politike porijekla. Novi handle koriste `v1.<32-byte random base64url
token>`, a registar zadržava samo
njihove SHA-256 hashove. Čitač/parser headera također prihvaća naslijeđene 64-hex tokene.
Autorizirani javni potrošač je
`GET /api/v1/video-bridge/drilldown?handle=...`, neovisno kontroliran od strane
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Eksplicitno trajno false opoziva
pristup čak i kada je naslijeđeni `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env
fallback omogućen. Proizvodna zadržavanja imaju analogni naslijeđeni
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Oba fallbacka su prema zadanim postavkama isključena.

Potrošač preuzima vlasništvo iz autoriziranog ključa, primjenjuje politiku ključeva i
vraća isti 404 za nepoznate, istečene i handle drugih ključeva. Prihvaća
`variant=preview|standard|detail` (maksimalna JPEG dimenzija 320/640/1280, nikada ne povećava),
`limit=1..8` (ili naslijeđeni `frames` alias, nikada oboje), nulti-bazirani `page`, i opcionalne
`start`/`end` fokus sekunde. Dupli
ključni upiti i obrnuti fokus prozori se odbacuju. Svaka vraćena varijanta ima hash
sadržaja i metapodatke stvarne rezolucije, povezane s zadržanim izvorom.
Varijante se izvode pri čitanju umjesto da se pohranjuju kao dodatne zadržane kopije. JSON
odgovor, uključujući Base64/envelope, ograničen je na 32 MiB; prevelika stranica vraća
413 i klijent mora zatražiti manje okvira. Čitanja provjeravaju otkazivanje oko svake
promjene veličine i ponovo provjeravaju valjanost handlea prije vraćanja. `DELETE` od strane vlasnika je idempotentan;
brisanje ili isteka TTL oslobađa zadržani izvor i računanje korištenja.

Zajednička pohrana je lokalna za proces: handle istječu pri ponovnom pokretanju i nisu prenosivi
između neovisnih OmniRoute procesa. Statistika upravljanja izlaže učinkovitu politiku zadržavanja/
daljinske politike i agregira zadržane unose/byteove samo, nikada medije, reference,
glavne ID-ove ili handle. Panel postavki videa prikazuje te vrijednosti i može trajno
zadržati oba prekidača za pristanak. Ova dokumentacija o implementaciji nije dokaz o
živom implementaciji ili promociji; prihvaćanje stvarnog modela prati se odvojeno.

Okviri su titlovani sekvencijalno s konfiguriranim Video modelom. Prazna
Video zamjena nasljeđuje Vision postavku; ako su oba prazna, Vision
auto-usmjerivač odabire učinkoviti model sposoban za viziju. Uspješni titlovi
zamjenjuju izvorni dio s stabilnim `[Video description:` prefiksom koji također
označava tekst kao nepouzdanu medijsku promatranje i govori downstream
modelima da ne slijede upute pronađene u mediju. Ključevi predmemorije titlova
uključuju JPEG byteove, prompt, vremensku oznaku i učinkoviti model; samo uspješni
titlovi se predmemoriraju. Unosi predmemorije zadržavaju stvarni uspješni model proizvođača,
uključujući fallback model; most izvještava `mixed` kada su različiti okviri
proizvedeni od strane različitih modela. Hit predmemorije ponovno koristi tu identitet
proizvođača umjesto da je preimenuje kao traženi plan usmjeravanja. Predmemorija rezultata
cijelog videa je ključna za svaki ulaz koji mijenja izlaz — prompt, učinkoviti
model, politika uzorkovanja, broj okvira, način semantičke analize, SHA-256
otisak normaliziranog fokusa, fokus prozor, `transcript`,
`audioTranscript`, i oznaku kontaktne stranice — tako da promjena bilo koje od tih
dimenzija predstavlja promašaj predmemorije, nikada zastarjelu ponovnu upotrebu. Verzija
politike vizualne deduplication, prag i ograničen broj kandidata-okvira također su eksplicitni u
ključu predmemorije rezultata i metapodacima; promjena politike stoga ne može ponovno koristiti zastarjeli
opis cijelog videa. Metapodaci predmemorije rezultata v4 zadržavaju način i
otisak, nikada sirovi korisnički zadatak. Metapodaci zaštitne ograde izvještavaju o
traženim i učinkovitim načinima analize; traženi `focused` način bez
upotrebljivog korisničkog teksta izvještava se kao učinkovito `full`.

Zaštitna ograda izvlači svaki podržani dio videa, ali ne opisuje više od
`modalityBridgeVideoMaxVideos`. Za cilj za koji je dokazano da ima
`supportsVideo === false`, neuspješni i prekomjerni videi postaju eksplicitni sigurni
tekstualni oznake tako da nijedan sirovi video ne preživi. Kada je sposobnost nepoznata, ti dijelovi
zadržavaju svoj video nositelj; svaki fallback transkript slijedi ograničenu konverziju teksta
iznad. Ciljevi s `supportsVideo === true` zaobilaze most.
Signal za prekid zahtjeva klijenta propagira se kroz preuzimanje, broker red,
podprocese i pozive titlova; prekidi se zaustavljaju između videa i nikada ne otvaraju
sirovim medijima.

Postavke u vrijeme izvođenja su DB-podržane i Zod-validirane:

| Ključ                               | Zadano      | Raspon / ponašanje                                                                                     |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`     | Opcionalno vrijeme izvođenja, opt-in                                                                   |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` čuva generičke titlove; `focused` koristi ograničeni, nepouzdani kontekst posljednjeg korisnika |
| `modalityBridgeVideoModel`          | `""`        | Naslijedi model Vision Bridge                                                                          |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                   |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, ili proporcionalni `segment_aware`; neuspjeh detektora vraća se na `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                    |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                         |

Legacy pohranjene vrijednosti vremena za Video iznad 120 sekundi su ograničene na
rok brokera; nova podešavanja iznad tog limita se odbacuju.
`GET /api/modality-bridge/video/runtime` zahtijeva pouzdanu označenu loopback
lokalnost prije autentifikacije ili ispitivanja vremena rada, a zatim zahtijeva
upravljanje autentifikacijom. Vraća samo `available`, sanitizirane verzije FFmpeg/ffprobe i fiksni
razlog kada vrijeme rada nije dostupno. Interni krajnji točka za ekstrakciju nije
javna API za učitavanje: zasićenje reda vraća `503` plus `Retry-After`, prekid veze
vraća `499`, a fiksni rok brokera vraća `504`. Konvertirani odgovori dodaju
`video->text;model=<visionModel>;parts=<videos>` u središnji
`x-omniroute-modality-bridge` zaglavlje bez uklanjanja Vision ili Audio segmenata.

### PII Masker (`piiMasker.ts`)

Radi na **oba** stadija.

- **`preCall`** klonira payload, prolazi kroz `system`, `messages`, `input` i
  `prompt` (uključujući obične string stavke), i primjenjuje `processPII()` (iz
  `@/shared/utils/inputSanitizer`) na string `content`/`text` polja. Kada
  `PII_REDACTION_ENABLED=true`, otkriveni PII se redigira u odlaznom
  payloadu. Ovo je neovisno o `INPUT_SANITIZER_MODE` (koji samo kontrolira
  politiku injekcije prompta). Kada je redakcija isključena, poziv bilježi broj
  otkrića bez prepisivanja sadržaja.
- **`postCall`** duboko klonira odgovor, pokreće `sanitizePIIResponse()` plus
  masker oblika Responses-API (`maskResponsesOutput` — pokriva
  `output_text` i `output[].content[].text`). Ako dođe do bilo kakve redakcije,
  modificirani odgovor zamjenjuje original.

Zaštitna ograda nikada ne blokira; samo označava (`meta.detections`,
`meta.redacted`) ili prepisuje.

### Prompt Injection (`promptInjection.ts`)

Otkriva neprijateljske strukture u sadržaju koji je dostavio korisnik i provodi
konfiguriranu politiku. Ponašanje se upravlja varijablama okruženja i opcijama
konstruktora:

| Postavka     | Env var                                                                                               | Zadano | Učinak                                                                                                                                                                                            |
| ------------ | ----------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omogućeno    | `INPUT_SANITIZER_ENABLED`                                                                             | `true` | Kada je `false`, zaštitna ograda se kratko prekida.                                                                                                                                               |
| Način        | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn` | Politika injekcije: `block`, `warn` ili `log`. (`redact` se prihvaća za unazadnu kompatibilnost, ali ne uklanja tekst injekcije; zahtjev za prepisivanje PII kontrolira `PII_REDACTION_ENABLED`.) |
| Prag blokade | `blockThreshold` opcija / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Minimalna ozbiljnost potrebna za blokiranje. Srednja je samo za promatranje prema zadanim postavkama.                                                                                             |

**Prioritet načina** (`getMode`): pozivatelj `options.mode` →
`INJECTION_GUARD_MODE` **DB značajka-flag preklapanje** (Dashboard → Postavke →
Zastavice značajki) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Dakle, preklapanje na nadzornoj ploči pobjeđuje nad varijablama okruženja, tako da UI zastavica značajki kontrolira aktivnu zaštitu uživo (bez ponovnog pokretanja). Čitanje iz DB-a je sigurno:
ako dođe do greške, zaštitna ograda se vraća na ponašanje temeljen na okruženju, a kada nije postavljeno preklapanje, ponašanje je identično rješenju samo na temelju okruženja.

Izvori otkrivanja:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (zajednički detektor
   set korišten drugdje u cjevovodu).
2. Ugrađeni `DEFAULT_GUARD_PATTERNS` (trenutno `system_override_inline` i
   `markdown_system_block`, oba `high` ozbiljnosti).
3. Opcionalni `customPatterns` proslijeđeni putem opcija konstruktora (stringovi, regex,
   ili `{ name, pattern, severity }` zapisi).

Kada `mode === "block"` **i** barem jedno otkriće zadovoljava prag
ozbiljnosti, `preCall` vraća `{ block: true, message: "Zahtjev odbijen:
otkriven sumnjiv sadržaj" }`. U `warn`/`log` načinima zaštitna ograda bilježi, ali
dopušta poziv. Zajednički pomoćnik `evaluatePromptInjection()` također je izvezen
za pozivatelje koji trebaju procijeniti upite bez prolaska kroz registar.

**Scan bound (v3.8.20):** detektor samo ispituje **prvih 16 KB** spojene tekstualne
upite — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajta) u
`src/shared/utils/inputSanitizer.ts`. I `detectInjection()` i
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` prije pokretanja
petlje uzorka. Direktive injekcije nalaze se blizu vrha ulaza, tako da ovo
ograničava CPU/GC regex na višestotinama-KB payloadima bez slabljenja otkrivanja (usp.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Radi na **oba** stadija, posljednji u zadanoj lancu (prioritet `95`). Redigira
poznate obrasce API-ključeva / tajnih tokena iz odlaznog payloada (sadržaj poruke,
argumenti poziva alata, rezultati alata) **i** odgovora pružatelja, tako da
akreditiv zalijepljen u upit (ili odjeknut od rezultata alata) ne bude otkriven
uzvodnom pružatelju ili natrag klijentu.

- **Samo uz pristanak**, ista konvencija kao i PII redakcija (Stroga pravila #20-pridružena):
  onemogućeno osim ako je `settings.credentialRedactionEnabled === true` **ili**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kada je isključeno, zaštitna mjera je neaktivna —
  nikada ne blokira i nikada ne prepisuje.
- `redactCredentials()` prolazi kroz cijelo stablo payload-a/odgovora (`walkValue()`,
  sigurno za prototipne zagađenja, sigurno za cikluse putem `WeakSet`) i zamjenjuje podudaranja s
  `[REDACTED:<type>]` oznakom, klonirajući samo grane koje su se zapravo
  promijenile.
- `CREDENTIAL_PATTERNS` pokriva ključeve LLM pružatelja (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokene (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ključeve za plaćanje (Stripe, Square), ključeve za oblak
  (AWS pristupni ključ, Twilio, SendGrid, Mailgun), privatne ključeve / JWT-ove,
  veze s ključevima za vjerodajnice (`mongodb://user:pass@...`, itd.), i
  generički obrazac `Authorization`/`x-api-key`/`api-key`/`apikey` zaglavlja. Ključevi u obliku zaglavlja
  (`authorization`, `x-api-key`, `api-key`, `apikey`) se redaktiraju strukturno (samo vrijednost, shema
  prefiks poput `Bearer `/`Basic ` očuvan) umjesto putem generičkog tekstualnog regex-a.
- Zaštitna mjera nikada ne blokira; samo prepisuje (`modifiedPayload` /
  `modifiedResponse`) i anotira (`meta.credentialsRedacted`, `meta.count`).

Regresijska zaštita: `tests/unit/credential-masker-guardrail.test.ts`.

## Osnovni ugovor (`base.ts`)

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
  block?: boolean; // true prekida lanac
  message?: string; // prikazuje se prilikom blokiranja
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vraća preCall za prepisivanje zahtjeva
  modifiedResponse?: TValue; // vraća postCall za prepisivanje odgovora
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

Zaštitna ograda signalizira "bez promjene" vraćanjem `void`, `{}`, ili
`{ block: false }`. Vraćanje `modifiedPayload`/`modifiedResponse` zamjenjuje
vrijednost koja prolazi kroz lanac za nizvodne zaštitne ograde.
`signal?: AbortSignal` prenosi životni ciklus pozivatelja u zaštitne ograde. Prekid zahtjeva je namjerna iznimka otvorenog kvara: medijski mostovi zaustavljaju rad i čišćenje bez vraćanja sirovih medija na cilj za koji se zna da ih ne podržava.

## Registar (`registry.ts`)

Singleton `guardrailRegistry` izlaže:

- `register(guardrail)` — dodaje (ili zamjenjuje normaliziranim imenom) zaštitnu ogradu i
  ponovno sortira po uzlaznom `priority`.
- `clear()` / `list()` — administrativni pomoćnici.
- `runPreCallHooks(payload, context)` — iterira aktivne zaštitne ograde, provlači
  payload kroz `modifiedPayload` i zaustavlja se na prvom `block: true`.
- `runPostCallHooks(response, context)` — isti tok na strani odgovora.
- `resetGuardrailsForTests({ registerDefaults })` — briše stanje i opcionalno
  ponovno registrira zadane vrijednosti za čistu izolaciju testova.

Oba pokretača vraćaju `{ blocked, payload|response, results, guardrail?, message? }`
gdje je `results` niz zapisa `GuardrailExecutionResult` koji uključuju
polja `blocked`, `skipped`, `modified`, `error` i `meta` po zaštitnoj ogradi,
korisna za praćenje.

### Onemogućavanje zaštitnih ograda po zahtjevu

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agregira
dedupliciranu listu imena zaštitnih ograda koje treba preskočiti za trenutni
zahtjev. Izvori (svi opcionalni, svi spojeni):

- `apiKeyInfo.disabledGuardrails`
- Tijelo zahtjeva `disabledGuardrails` (najviša razina)
- Tijelo zahtjeva `metadata.disabledGuardrails`
- Zaglavlje `x-omniroute-disabled-guardrails` (ili zastarjelo
  `x-disabled-guardrails`)

Vrijednosti mogu biti nizovi stringova ili string odvojen zarezima; imena su
normalizirana u mala slova kebab-case (`pii_masker` → `pii-masker`). Rezultat
se prosljeđuje kroz `context.disabledGuardrails` registru, koji preskače
odgovarajuće zaštitne ograde (`skipped: true` u `results`).

## Redoslijed izvršavanja

Za svaki zahtjev koji prolazi kroz `src/sse/handlers/chat.ts` i
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` gradi popis za preskakanje iz API ključa, tijela
   i zaglavlja.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` pokreće zaštitne ograde uzlaznim
   redoslijedom prioriteta:
   - Onemogućene zaštitne ograde bilježe se kao `skipped`.
   - `preCall` svake zaštitne ograde može prepisati teret putem `modifiedPayload`.
   - Prvi `block: true` kratko spaja lanac i rukovatelj vraća
     odgovor o odbijanju zaštitne ograde.
3. (Potencijalno prepisan) teret teče u kombinirano usmjeravanje i uzvodnu
   dispečersku službu.
4. Nakon što je odgovor sastavljen, `guardrailRegistry.runPostCallHooks(...)`
   pokreće isti lanac na odgovoru. `block: true` ovdje odbacuje uzvodni
   odgovor.

Zaštitne ograde koje bacaju iznimku bilježe se s `error: <message>` i bilježe putem
`logger.warn`, ali lanac se nastavlja — dizajnirano je da se otvara u slučaju kvara.

## Konfiguracija

Varijable okoline koje čitaju ugrađene zaštitne ograde:

| Varijabla                             | Koristi se od strane    | Učinak                                                                                                                           |
| :------------------------------------ | :---------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Postavite `false` da biste u potpunosti onemogućili detekciju.                                                                   |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Politika ubrizgavanja: `warn`, `block` ili `log`. Zastarjela vrijednost `redact` ne prepisuje tekst ubrizgavanja.                |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Način rada za zaštitu od ubrizgavanja; također zastavica značajke baze podataka koja **nadjačava** varijable okoline (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | Minimalna ozbiljnost koju `MODE=block` odbija: `high` (zadano), `medium` ili `low`.                                              |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Zastarjeli alias za `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                           |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Kada je `true`, PII zahtjeva se redigira (neovisno o načinu ubrizgavanja).                                                       |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nizvodno) | Kontrolira ponašanje maskera na strani odgovora.                                                                                 |

Zaštitne ograde Modality Bridgea čitaju konfiguraciju vremena izvođenja iz pohrane postavki podržane bazom podataka
(`getSettings()`), a ne iz varijabli okoline. Primarni ključevi za Vision su
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` i
`modalityBridgeCacheMaxEntries`. Zastarjeli
`visionBridge*` ključevi prihvaćaju se samo kao dokumentirani jednociklični
povratni mehanizam čitanja; pisanja na nadzornoj ploči koriste primarne ključeve. Zadane vrijednosti i povratni
mehanizam rješavanja nalaze se u `src/shared/constants/modalityBridgeDefaults.ts`, s
zastarjelim konstantama zadržanim u `src/shared/constants/visionBridgeDefaults.ts`.

Audio koristi `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` i `modalityBridgeAudioMaxClips`, plus zajedničke
`modalityBridgeCache*` postavke. Audio nema povratni mehanizam za zastarjele ključeve jer su ti
ključevi uvedeni sa shemom Modality Bridgea.

Video koristi `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` i
`modalityBridgeVideoTimeout`, plus zajedničke `modalityBridgeCache*` postavke.
Onemogućen je prema zadanim postavkama jer su FFmpeg/ffprobe opcionalne operativne
ovisnosti, a titlovanje okvira dodaje kašnjenje i troškove modela.

## Prilagođene zaštitne ograde

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Dnevni budžet prekoračen" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Koraci:

1. Stvorite `src/lib/guardrails/myGuardrail.ts` proširujući `BaseGuardrail`.
2. Implementirajte `preCall` i/ili `postCall`.
3. Registrirajte se prilikom uvoza (push iz `registerDefaultGuardrails`) ili
   pozovite `guardrailRegistry.register(...)` tijekom izvođenja — registar zamjenjuje
   bilo koju prethodnu zaštitnu ogradu s istim normaliziranim imenom.
4. Dodajte testove pod `tests/unit/` (postojeći primjeri:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testiranje

Koristite `resetGuardrailsForTests()` između testova za početak iz poznatog stanja.
Proslijedite `{ registerDefaults: false }` za početak s praznim registrom i
registrirajte samo zaštitne ograde koje se testiraju. Vision Bridge prihvaća ubrizgavanje ovisnosti
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge izlaže ekvivalentne šavove za postavke, mogućnosti, odabir STT modela, provjere vjerodajnica i transkripciju. Testovi stoga mogu vježbati oba toka bez pristupa bazi podataka ili mreži.

## Vidi također

- `src/lib/guardrails/` — implementacija
- `src/shared/utils/inputSanitizer.ts` — zajednički detektor koji pokreće
  ubrizgavanje upita i maskiranje PII
- `src/shared/constants/visionBridgeDefaults.ts` — zadane postavke Vision Bridgea i
  popis modela prisilnog premošćivanja
- `src/shared/constants/modalityBridgeDefaults.ts` — zajedničke zadane postavke Vision/Audio runtimea
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalni sloj (prekidač, hlađenja)
- `docs/reference/ENVIRONMENT.md` — potpuna referenca varijabli okoline

## Pokrivenost rute zaštite od ubrizgavanja i crveni tim (Faza 8 · Blok D)

Zaštita od ubrizgavanja (`createInjectionGuard` / `withInjectionGuard`) pokriva sve rute
koje prihvaćaju korisničke upite. Poštuje `INJECTION_GUARD_MODE` (zadano `warn` = samo zapisivanje;
`block` = vraća HTTP 400 `SECURITY_001`).

| Vrsta             | Rute                                                                                                                                                 | Zadani način rada |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Tekst (postojeći) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn              |
| Generativni       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn              |
| Podaci            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn              |

Ekstrakcija teksta (`extractMessageContents`) pokriva `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Crveni tim (noćni, `nightly-llm-security.yml`):** promptfoo provjerava da svaka ruta blokira
OWASP-LLM korpus u `INJECTION_GUARD_MODE=block`; garak pokreće sonde (preskače bez tajne).
`moderations` je uključen radi dosljednosti — operatori u blok-načinu mogu ga izuzeti putem
`resolveDisabledGuardrails`.

Noćni tijek rada (`.github/workflows/nightly-llm-security.yml`, cron + ručno
pokretanje) ima dva posla:

- **`promptfoo-guard` (blokiranje)** — pokreće `promptfoo eval -c promptfooconfig.yaml`
  s `INJECTION_GUARD_MODE=block`. Svaki adversarijalni slučaj (npr. "zanemari sve
  prethodne upute…", jailbreakovi u DAN stilu) potvrđuje da odgovor nosi
  `error.code === "SECURITY_001"`, tj. da je zaštita stvarno odbila zahtjev.
- **`garak` (savjetodavno)** — pokreće garak `--probes promptinject,dan,leakreplay`
  protiv lokalne OmniRoute instance (`http://localhost:20128/v1`). Ograničeno tajnom
  davatelja (`PROMPTFOO_PROVIDER_KEY`); graciozno preskače i ima sufiks
  `|| true`, tako da izvještava bez neuspjeha CI-ja.

Pokrivenost pomoćne funkcije zaštite (`createInjectionGuard` / `withInjectionGuard`)
obuhvaća svaku `/v1` rutu koja nosi upit; tekst upita se izvlači iz
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomoću
`extractMessageContents()` u `src/shared/utils/inputSanitizer.ts`.
