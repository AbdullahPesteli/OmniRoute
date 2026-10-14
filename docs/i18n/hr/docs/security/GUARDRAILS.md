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

## Ugrađene zaštitne mjere

Registri automatski učitava šest zaštitnih mjera prema prioritetnom redu prilikom uvoza
(pogledajte `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Naziv               | Faza(e)        | Datoteka              |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niži prioritetni brojevi se izvršavaju **prvi**.

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
   koji se dijeli s kombiniranim filtrima kompatibilnosti.
   Izdvajanje je dopušteno samo za dijelove oblika na najvišoj razini
   koje `replaceImageParts` može ponovno spojiti (ugovor o izdavanju↔zamjeni): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, i Responses API `input_image`. Ugniježđeni hitovi i
   oblici koji su samo indikatori su materijal za kombinirani filtar i nikada se ne
   izdvajaju. Preskoči ako ništa nije pronađeno.
3. Riješi konfiguraciju u vrijeme izvođenja putem `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nove `modalityBridge*`
   postavke ključeva pobjeđuju; naslijeđeni `visionBridge*` ključevi ostaju
   **jednokratna povratna informacija** (prozor za povratak). Preskoči prije bilo
   kakvog prolaska medija kada je most onemogućen.
4. Odabir načina (`modalityBridgeVisionMode`, pogledajte tablicu u nastavku) odlučuje
   o preusmjeravanju naspram opisivanja. Preusmjeravanje vraća `modifiedPayload` s
   samo zamijenjenim `model`, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Put opisivanja: ograniči slike na `maxImages`, sastavi zadatak-svjestan upit,
   konzultiraj predmemoriju opisa, pozovi vizijski model **paralelno**
   (`Promise.allSettled`), i umetni `[Image N]: <description>` tekstualne dijelove na
   njihovo mjesto. Neuspješno opisivanje daje `null` i izvorni dio slike se
   **čuva** (#4012) — osim na putu kombiniranog opisivanja kada je svako
   opisivanje neuspješno, gdje potvrđeni ne-vizijski uzvodni dobiva
   `(nedostupno — nijedan pružatelj sposoban za viziju nije povezan)` stub umjesto (#8430).
6. Vraća `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Odabir načina (`modalityBridgeVisionMode`)

| Način      | Zadano | Ponašanje                                                                                                                                                                                                                                                                                             |
| ---------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Naslijeđena heuristika, nepromijenjena (#6640/#7204): ne-kombinirani/`auto/` modeli preusmjeravaju na najbolji vizijski model osim ako izvorni model već nema upotrebljive vjerodajnice (onda opisuje); ciljevi kombinacije uvijek opisuju.                                                           |
| `describe` |        | Uvijek opisuj — blok preusmjeravanja se potpuno preskoči; model koji je korisnik odabrao uvijek odgovara.                                                                                                                                                                                             |
| `reroute`  |        | Prisilno preusmjeravanje: čuvar modela s vjerodajnicama se zaobilazi. Čuvar vjerodajnica za preusmjeravanje-**cilj** i dalje se primjenjuje — kada ne postoji upotrebljivi vizijski cilj, zahtjev pada na opisivanje tako da sirove slike nikada ne dosegnu backend koji radi samo s tekstom (#8430). |

Prisilni načini prekinu **prije** nego što se automatska heuristika izvrši; ponašanje `auto`
je identično bajt po bajt s pre-PR-1 zaštitnom mjerom.

#### Opseg API ključa (`visionBridgeKeyScope.ts`)

Kada API ključ pozivaoca ograničava `allowedConnections`, kvote
(`allowedQuotas`) ili modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most
biraju samo preusmjeravanje i opisivanje modele koje ključ može koristiti, na
veze koje ključ može koristiti. Poziv za opisivanje tada uvijek prolazi kroz
OmniRoute samopovratnu petlju s `x-omniroute-self-loop-key-id` zaglavljem, tako da
primalac zahtjeva za chat ponovno provodi politiku veze i modela tog ključa. `enforceApiKeyPolicy()`
poštuje to zaglavlje samo zajedno s nositeljem samopovratne petlje, tako da može
samo suziti pristup, a id koji se ne može riješiti se odbija.

Ako nijedan vizijski model nije dopušten za ključ, put opisivanja se povlači i
zahtjev prolazi nepromijenjen, isto ponašanje kao onemogućena zaštitna mjera
(meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Zahtjevi bez ključa, i ključevi bez ovih ograničenja, ponašaju se točno kao
prije.

#### Upit za opisivanje svjestan zadatka (`modalityBridgeVisionTaskAware`)

Default **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) dodaje
tekst **posljednje korisničke poruke** (skraćene na 500 znakova) osnovnom
opisnom promptu, usmjeravajući opis prema onome što je korisnik zapravo
pitao (codex-vision-proxy obrazac) i tražeći od vizijskog modela da
transkribira vidljivi tekst. Kada je zastavica isključena — ili nema
korisničkog teksta — osnovni prompt se koristi nepromijenjen.

Opis vlastitog self-loopa OpenAI-kompatibilnog zahtjeva (`callVisionModelSingle()`
u `visionBridgeHelpers.ts`) uvijek zahtijeva `image_url.detail: "high"` —
bezuvjetno, za svakog pozivatelja/providera, neovisno o bilo kojem
signaliziranju klijenta. Uzorkovanje niske detaljnosti smanjuje točnost OCR-a
za točno onaj zadatak transkripcije teksta za koji ovaj prompt traži, tako da
sam opisni poziv uvijek traži visoku detaljnost bez obzira na razinu detalja
koju je izvorni dolazni zahtjev koristio. Ovo utječe samo na unutarnje tijelo
opisnog zahtjeva; ne mijenja način na koji OmniRoute prosljeđuje vlastiti
`image_url.detail` pozivatelja na primarni zahtjev — ta se zadana vrijednost
primjenjuje odvojeno, i to samo za otkrivene OpenCode klijente, u
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic wire-format grana opisnog self-loopa nema `detail` polje i nije
pod utjecajem niti jednog od zadataka.

#### Ograničenje izlaza opisa (`modalityBridgeVisionMaxChars`)

| Ključ                          | Zadano | Raspon            |
| ------------------------------ | ------ | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` ili 100–50000 |

`0` (zadano) znači **bez ograničenja** — opis koji se vraća iz
`callVisionModel()` prolazi neizmijenjen, čuvajući postojeće ponašanje.
Svaka vrijednost u rasponu od 100–50000 skraćuje opis s `…` sufiksom prije
nego što se ponovno spoji kao `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` u `src/lib/guardrails/visionBridge.ts`).
Povećajte ovo za zadatke OCR-a bogate detaljima gdje downstream model treba
potpunu transkripciju; smanjite ga kako biste ograničili korištenje tokena
na razgovorljive vizijske modele. Polje na nadzornoj ploči nalazi se na
Naprednoj ploči kartice Vizija (`modality-bridge-max-chars` u
`ModalityBridgeVisionTab.tsx`) i ograničava svaku vrijednost između 1 i 99
na 100, dok ostavlja eksplicitni `0` netaknut — `0` je valjana Zod
vrijednost sama po sebi
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ne samo
"nepostavljena" zadana vrijednost.

#### Predmemorija opisa (`modalityBridge/bridgeCache.ts`)

LRU + TTL predmemorija u memoriji za izlaze opisa, dijeljena na razini
procesa. Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)`
s okvirom duljinskog prefiksa (bez sudara na granicama polja). Komponenta
modela je **konfigurirani** mostovni model, a ne model koji je zapravo
odgovorio — `callVisionModel` može interno pasti, a ključanje po pokušaju
bi fragmentiralo predmemoriju. Neuspješni opisi nikada se ne predmemoriraju.
Postavke:

| Ključ                           | Zadano | Raspon  |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Normalizacija udaljene slike (self-loop opis/base64 dohvat)

Kada most sam dohvaća **udaljenu** sliku — Anthropic opisni self-poziv i
claude-wire-format base64 konverzija
(`ensureBase64ImagesForClaudeWire`), oboje putem
`fetchRemoteImageAsDataUri()` u `visionBridgeHelpers.ts` — rezultantni
data URI prolazi kroz `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) prije nego što bude ugrađen u zahtjev
vizijskog modela. Prevelike slike se smanjuju na **2048px dugu stranu**
(što odgovara ograničenju promjene veličine koje OpenAI/Anthropic već
primjenjuju na strani poslužitelja), što smanjuje upload bajtova/latenciju
bez promjene onoga što vizijski model vidi. Promjena veličine koristi `sharp`,
učitan putem dinamičkog uvoza: na platformi gdje se njegov izvorni binarni
datoteka ne može učitati, `normalizeDataUri()` **nikada ne baca** iznimku —
pada na prolaz originalnih bajtova, tako da put opis/base64-konverzije
uvijek nastavlja raditi. Bajtovi koji nisu slike (dohvat koji nije vratio
dekodabilnu sliku) također se prosljeđuju netaknuti. Ova normalizacija
je ograničena na slike koje most dohvaća za vlastiti self-poziv — nikada se ne
primjenjuje na sirovi payload pozivatelja, u skladu s načelom mutacije
samo uz pristup (Hard Rule #20).

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
(izgrađen od `buildModalityBridgeHeader()` u `modalityBridge/bridgeStats.ts`,
označen od `withModalityBridgeHeader()` u `src/sse/handlers/chatHelpers.ts`).
Preusmjereni zahtjevi ne dobivaju **nikakav** header — payload je ostao netaknut
i zamjena modela već je vidljiva u polju `model` tijela odgovora.

`GET /api/modality-bridge/stats` (upravljanje autentifikacijom, ista razina kao
`GET /api/settings`) vraća u memoriji po-modalitetske brojače
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
brojače i zaštićeni zahtjev uzorka. Kartica Audio je također aktivna: otkriva
omogućavanje, odabir modela samo za STT s Automatskim, limite vremena/max-clip,
audio
brojače i test uzorka `input_audio`. Kartica Video je funkcionalna: izvještava
o runtime stanju FFmpeg/ffprobe — jedan od četiri eksplicitna UI stanja (`unknown` dok
je probiranje u tijeku ili nije moglo završiti, `restricted` na hostu nadzorne
ploče koji nije loopback gdje se probiranje preskoči na strani klijenta, `unavailable`
jednom kada je probano i potvrđeno da nedostaje, ili `available` s verzijama
FFmpeg/ffprobe) — zadržava
omogućavanje/model/frame/video/limite vremena, filtrira odabir modela na
modele sposobne za viziju i otkriva video brojače.

Bivša kartica Vision Bridge pod AI postavkama je poveznica za kompatibilnost na
novu stranicu; više ne posjeduje drugu kopiju obrasca. Media Providers također
povezuje Image-to-Text i Speech-to-Text radne tokove s odgovarajućim Modality
Bridge karticama bez uklanjanja postojećeg Speech-to-Text igrališta.

**Zaobilaženje prijema samopovratka:** kada poziv za opis prolazi kroz
OmniRouteov vlastiti `/v1` samopovratak (nestandardni model pružatelja), podzahtjev
šalje `x-omniroute-admission-bypass: internal` i autentificira se s
riješenim samopovratnim vjerodajnicama — lokalni `sk_omniroute` sentinel u lokalnom
načinu rada, ili operaterom konfigurirani `OMNIROUTE_API_KEY` / `ROUTER_API_KEY`
env ključ (#1350) tako da `REQUIRE_API_KEY=true` implementacije još uvijek mogu
izvršiti poziv za opis. Zaobilaženje se poštuje samo za te točne vjerodajnice, tako
da vanjski klijenti ne mogu koristiti zaglavlje za preskakanje prijema.

Naslijeđeni zadani postavci nalaze se u `src/shared/constants/visionBridgeDefaults.ts`;
nove postavke zadatka/načina/keša i rješavač postavki nalaze se u
`src/shared/constants/modalityBridgeDefaults.ts`. Ograda otkriva
`deps` opciju konstruktora tako da testovi mogu ubrizgati lažne
`getSettings` i `callVisionModel` implementacije.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Presreće audio-izvorne chat zahtjeve prije nego što dođu do cilja koji nije
poznat da prihvaća audio ulaz. Nikada ne preusmjerava chat zahtjev: audio dijelovi
se transkribiraju putem postojećeg OpenAI-kompatibilnog multipart krajnjeg
točke, a odabrani chat model nastavlja s tekstualnim transkriptima.

Tok:

1. Riješi `supportsAudio` putem `getResolvedModelCapabilities()`. Eksplicitni
   metapodaci registra pružatelja pobjeđuju, zatim statički metapodaci modela,
   zatim sinkronizirani `modalities_input`. Deklarirani popis ulaza bez `audio` je
   `false`; nijedan dokaz o sposobnosti ostaje `null`. I `false` i `null` aktiviraju
   konzervativni most, dok `true` zaobilazi.
2. Riješi `modalityBridgeAudio*` postavke i izdvoji dijelove audio
   poruka iz svake poruke putem zajedničkog `detectMediaParts()`
   detektora. Podržani oblici žice su OpenAI `input_audio`, `audio_url` i
   `source.media_type: "audio/*"`. Ugniježdeni audio se otkriva za usmjeravanje, ali
   se ne uklanja putem splice puta. Rad je ograničen s `modalityBridgeAudioMaxClips`;
   kasniji dijelovi ostaju netaknuti.
3. Poštuj konfigurirani `provider/model`, ili dopusti `selectAudioBridgeModel()`
   da prođe kroz `AUDIO_TRANSCRIPTION_PROVIDERS` u stabilnom katalogu i odabere prvi
   model s upotrebljivom aktivnom vjerodajnicom pružatelja.
4. `callAudioTranscription()` pretvara base64/data-URI audio u multipart
   `file`, ili preuzima udaljeni `audio_url` putem javnog izlaznog
   zaštitnika s DNS pinningom i granicom od 25 MB. Zatim POST-a datoteku i
   odabrani model na lokalni `/v1/audio/transcriptions` samopovratak, autentificiran
   s `resolveSelfLoopBearer()`. Postojeća ruta transkripcije obavlja normalno
   pretraživanje vjerodajnica, upravljanje hlađenjem/ograničenjem brzine i
   raspodjelu pružatelja.
5. Uspješni pozivi zamjenjuju svoje dijelove s `[Audio N]: <transcript>`. Pozivi
   se izvršavaju s `Promise.allSettled`: pojedinačni neuspjeh čuva taj izvorni
   audio dio (#4012 ugovor). Ako svaki poziv ne uspije i cilj se dokaže
   `supportsAudio === false`, dijelovi postaju
   `[Audio N]: (nedostupno — nema povezanog STT pružatelja)` (#8430 ugovor). Za
   nepoznati cilj (`null`), rezultat svih neuspjeha ostaje netaknut. Dokaženi
   cilj samo za tekst bez upotrebljive STT vjerodajnice prima isti eksplicitni
   stub bez izdavanja mrežnog poziva.

Uspješni transkripti koriste procesom široki Modality Bridge LRU/TTL cache. Ključ
kombinira audio referencu, stabilnu oznaku operacije `audio-transcription` i
odabrani STT model; neuspjesi se nikada ne keširaju. Audio pokušaji ažuriraju
zajedničke `bridged`, `cacheHits`, `failures` i `lastUsedAt` brojače.
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

Zajednički cache ostaje pod kontrolom `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` i `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Presreće vrhunske video dijelove u Chat Completions `messages` i Responses
API `input` prije nego što se pozove cilj bez poznate podrške za nativni video.
Podržani oblici su `input_video`, `video_url`, `video_source`, HTTPS URL-ovi,
i `data:video/*;base64,...` data URI. Obični nazivi datoteka u tekstu se ne tretiraju
kao video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) upravlja prolaskom zahtjeva,
provjerom sposobnosti/politike, agregacijom po zahtjevu i payload-om odgovora.
Rad po videu — akvizicija, cache cijelih rezultata, opisivanje sekvence okvira
(koja spaja bilo koji audio transkript koji je proglasio pozivatelj), i metrike/prekid/čišćenje po pokušaju — skriven je iza `processVideoPart` u
`videoBridgePipeline.ts`, pozvan jednom po video dijelu unutar `preCall` petlje.
Ta modul također definira eksplicitne granice portova `VideoMediaBrokerPort`
(akvizicija bajtova i ekstrakcija uzorkovanih okvira), `VideoAudioTranscriptionPort`
(spajanje audio transkripta koji je proglasio pozivatelj s uzorkovanim titlovima), i
`VideoDrilldownPort` (nasljedni oblik sirovog spremišta). Proizvodni STT i zadržavanje okvira
sastavljeni su oko opisa porta kroz `createVideoSttAdapter` i
`createVideoDrilldownAdapter`; potonji koristi zajednički neprozirni životni ciklus.

Javni `/v1` put zahtjeva nikada ne uvozi niti poziva podproces. Udaljeni
videozapisi se preuzimaju pod granicom od 50 MiB; inline base64 videozapisi imaju
konzervativni limit od 36 MiB dekodiranog po videu kako bi model/poruke/okvir
ostali unutar javnog JSON zahtjeva za prijem od 50 MiB. Inline
procjene duljine i dekodirane veličine provjeravaju se prije alokacije. HTTPS je
obavezan na početnom udaljenom URL-u i svakom preusmjeravanju, koristeći postojeću
javnu samo-izlaznu zaštitu s DNS pinningom. Bajtovi tada prelaze točno unutarnju
`POST /api/modality-bridge/video/extract` granicu brokera. Ta ruta je i
`LOCAL_ONLY` i `SPAWN_CAPABLE`, prihvaća samo autentificirani,
pouzdani loopback zahtjev po procesu, i nikada ne prihvaća URL, putanju datoteke, izvršnu datoteku,
ili popis argumenata. API tijelo veličine cjevovod i inkrementalni čitač tijela
handler-a neovisno provode limit ulaza brokera od 50 MiB. Njegova ograničena
red čekanja pokreće jednu ekstrakciju u isto vrijeme, dopušta četiri čekajuća posla,
i ograničava čekajući ulaz na 100 MiB.

Unutar brokera, `ffprobe` čita privatnu lokalnu datoteku; fiksni format
lista dopuštenih izuzima formate popisa i manifesta. Za dopuštene MOV-obitelji
kontejnere, vanjske MOV reference podataka ostaju onemogućene prema zadanim postavkama, a
fiksna naredba se ne uključuje u njih. I `ffprobe` i `ffmpeg` koriste
`file`-samo protokol bijele liste, jednu nit, fiksne nizove argumenata, bez ljuske,
i izvršne datoteke riješene iz `PATH`. Priključene slike pokrivača nisu
igrive kandidate. Svi igrivi streamovi moraju zadovoljiti limite, a
eksplicitni zadani stream je preferiran prije determinističkog najnižeg indeksa
rezervnog rješenja. Videozapisi su ograničeni na 600 sekundi, 8,192 piksela po dimenziji, i
33,554,432 izvornih piksela. FFmpeg uzima uzorke 1–16 srednjih JPEG okvira, smanjuje
dugu stranu na najviše 1,024 piksela bez povećanja manjih ulaza, i
nikada ne prima URL. Uzorkovanje je prema zadanim postavkama `uniform`. Opcionalne
`scene_aware` i eksperimentalne `segment_aware` politike izvode jedan dodatni
fiksni FFmpeg prolaz preko već validiranog lokalnog streama, odabiru ograničene
`showinfo` vremenske oznake scena, i deterministički se vraćaju na iste
uniformne sredine u slučaju neuspjeha detektora, isteka vremena, neispravnog izlaza, ili praznog
skupa kandidata. Segment-aware način alocira uzorke sredine proporcionalno
validiranim vremenskim intervalima scena; segment-aware dokazi i ponašanje rezervnog rješenja su
detaljno opisani u nastavku. Teška granica od 16 okvira se
primjenjuje nakon odabira u svakoj politici. Kada zahtjev koji je svjestan scene ima samo
jedan okvirni budžet, koristi uniformnu sredinu aktivnog cijelog videa ili fokusa
prozora i izvještava `policyEffective: uniform`: jedan odabrani okvir scene
ne može sačuvati oba vremenska kraja. Pozivatelj može opcionalno pružiti
konačni fokus prozor (`start`/`end` sekunde); granice su ograničene na trajanje medija,
obrnuti ili neograničeni prozori se odbacuju, a sve politike uzorkovanja se provode
samo unutar normaliziranog intervala. Rezultantni
prozor je uključen u metapodatke uzorkovanja i u neprovjereni opis
prefiksa kako bi dolje modeli mogli razlikovati fokusirani izvadak od cijelog
vremenskog okvira.

Fokus semantičkih titlova je zasebna, eksplicitna postavka. Zadani `full`
način analize čuva postojeći okvirni prompt i nikada ne prosljeđuje tekst zahtjeva
modelu titlova. U `focused` načinu, most čita samo najnoviji
ne-prazni korisnički autorirani `text`/`input_text` iz istog Chat ili Responses
kontejnera, normalizira ga na NFC, kolapsira kontrolne znakove i razmake,
i ograničava ga na 500 Unicode kodnih točaka. Prazan rezultat se vraća na
točno `full` prompt. Korisna naznaka se serijalizira kao JSON u
posvećenoj neprovjerenoj korisničkoj kontekstu i može samo prioritizirati
vidljive detalje; ne može nadjačati zasebno upozorenje protiv slijediti upute vidljive
ili čujne u mediju. Tekstualni fokus nikada ne inferira `start`/`end` ili mijenja
temporalni uzorkivač.

#### FU-07 strukturni segmentni dokazi

`segment_aware` koristi jedan ograničeni pre-analitički prolaz preko već validiranog lokalnog video streama. Fiksni lanac filtara prvo skalira na najviše 320 piksela širine, detektira promjene scena i zamrznute intervale, a zatim uzima uzorke na 1 frame u sekundi za zamućenje, prosječnu lumu i prostorne/temporalne informacije. Prolaz je ograničen na 600 strukturnih uzoraka, jedan FFmpeg/filter nit, isti `file`-samo protokol i dozvole kontejnera, granicu izlaza procesa od 1 MiB, i najviše 30 sekundi unutar zajedničkog prekida/rokova brokera. Nikada ne prihvaća naredbu, filtar, putanju ili URL iz zahtjeva.

Strukturne vrijednosti su deterministički uzorci dokaza, a ne semantičko razumijevanje videa. Ne inferiraju subjekte, radnje, natpise, govor ili namjeru korisnika. Granice scena i zamrzavanja formiraju segmente; pokrivenost zamrzavanja, zamućenje, izloženost, prostorna detaljnost i temporalna promjena samo utječu na to kako se postojeći budžet od 1–16 framea raspoređuje. Potpuno zamrznuti segment je ograničen na jedan frame, dok se nezamrznuti segmenti natječu za preostali budžet. Kada granice nadmaše frameove, zadržava se uniformna pokrivenost vremenske linije tako da brzi rani rezovi ne mogu sakriti dugi segment. Granice scena unutar 1-sekundne analitičke rezolucije granice zamrzavanja se spajaju.

Nedostajući filtri, neispravni/prazni dokazi, greška detektora ili ograničeno vrijeme pre-analize neuspješno se otvaraju prema točnoj uniformnoj srednjoj politici. Prekid poziva ili rok brokera ne neuspijeva otvoreno: prekida podproces u tijeku, sprječava kasniju ekstrakciju frameova, a privatno privremeno stablo se uklanja u `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generira determinističke stvarne FFmpeg
fiksacije za uštede nakon deduplifikacije natpisa, raspodjelu budžeta za gusti pokret,
dokaze o zamućenju/izloženosti/SI-TI, brze rezove s dugim repom i lažne pozitivne
rezultate postupnog izbljeđivanja. Bilježi vrijeme zidne analize i, gdje je `/usr/bin/time`
dostupan, CPU djece i vrhunsku RSS. Njegove provjere kvalitete su samo strukturni orakuli.
Stvarna kvaliteta modela natpisa ostaje `HOLD` jer ovaj uređaj nema
ovlašteni krajnji točku ili zamrznutog suca. Novčane uštede također ostaju `HOLD`
osim ako `--caption-cost-per-call-usd` ne pruži eksplicitnu pozitivnu procjenu po pozivu; skripta nikada ne fabricira niti jedan rezultat.

Svaki frame je ograničen na 4 MiB, svi sirovi frameovi zajedno na 23 MiB, a
serijalizirani odgovor brokera na 32 MiB. Privatni privremeni direktorij se uklanja
u `finally`. OmniRoute ne bundla FFmpeg i ne prihvaća prilagođenu putanju izvršne datoteke. Prije titlovanja, most primjenjuje konzervativni vizualni
deduplifikacijski prolaz: svaki JPEG se smanjuje na 16×16 sivu
bafer i uspoređuje se samo s posljednjim zadržanim frameom. Za zatraženi budžet
natpisa iznad jednog framea, ekstrakcija osigurava
ograničeni skup kandidata do dvostruko tog budžeta i nikada više od 16 frameova.
Zatraženi limit se primjenjuje samo nakon deduplifikacije, s prvim i konačnim
odabranim kandidatima sačuvanim tijekom konačnog prorjeđivanja kada je budžet barem
dva. Verzijska
`grayscale-16x16-mean-cells-v2` politika koristi veći od prosječnog delta luma i
omjer thumbnail ćelija čija je normalizirana delta barem 0.05. Prag dupliciranja je konstantan 0.04, odabran zbog predvidljivosti, a ne izložen kao postavka u vrijeme izvođenja. Ovaj sekundarni
signal visokog kontrasta čuva male pokrete i promjene vidljivog teksta koje
samo prosječna usporedba može sakriti. Greške komparatora ili dekodera neuspješno se otvaraju i zadržavaju pokrivenost. Izlazni metapodaci odvajaju ekstraktirane kandidate, uspješno korištene
frameove i vizualne duplikate koji su odbačeni.

Izričito označeni dio videa može zatražiti vremenski označen kontaktni list. Most gradi najviše 4-kolumnu, 16-frame JPEG mrežu. Svaka ćelija od 512 piksela upisuje
svoj izvorni vremenski pečat u visoko-kontrastnu donju traku, dok isti vremenski pečati
ostaju u tekstualnim metapodacima za kasniju asocijaciju i reviziju. Potpuni
JPEG ostaje ograničen na 32 MiB. Ako `sharp` ne može dekodirati ili sastaviti mrežu, most se vraća na pojedinačne JPEG frameove; prekid klijenta se i dalje propagira kroz operaciju lista.

Dokazi o promociji su namjerno odvojeni od sintetičkog sastava
mikrobenchmarka. `scripts/perf/video-bridge-contact-sheet-eval.ts` definira
shemu-verzijski A/B uređaj za stvarne OpenAI-kompatibilne vizijske modele. Mjeri
tokena koje izvještava pružatelj, end-to-end zidnu latenciju (uključujući sastavljanje lista),
broj poziva modela i manifestom definiranu zadržavanje činjenica. Sirovi odgovori modela se ne
upisuju u izvještaj; samo SHA-256 sažeci i podudarani ID-ovi činjenica se zadržavaju. Uređaj ne izvršava mrežni ili plaćeni poziv modela osim ako je `--execute-real` proslijeđen i
`--model`, `OMNIROUTE_BASE_URL`, i `OMNIROUTE_API_KEY` su konfigurirani. Bez
tog eksplicitnog stvarnog izvođenja, njegov strojno čitljiv presud ostaje `HOLD`; mjerenja sintetičkog tereta/broja poziva sama po sebi nisu dokazi o promociji.

Odvojeni `scripts/perf/video-bridge-promotion-eval.ts` konzumira FU-07 ili
FU-09 opažanja. Prihvaćanje promocije zahtijeva svih osam sintetičkih scenarija
plus sanirani stvarni isječak, najmanje tri mjerene ponavljanja po ulozi
i slučaju, svih deset deklariranih metrika, zamrznutih medija/prompta/očekivanih-činjenica/postavki
sažetaka, jedinstvenih ID-ova opažanja i verificiranog zasađenog A/B reda. Potvrda izvršenja
vezuje sažetak korpusa, točan SHA kandidata i reviziju modela. Nedostajući
ili neispravna mjerenja ostaju `HOLD`, uključujući CPU iznad 30 s, vrhunsku RSS iznad
512 MiB ili pre-analizu iznad 30 s. Ovo su granice za prihvaćanje dokaza, a ne nova
jamstva za provođenje RSS u vrijeme izvođenja.

FU-07 zahtijeva najmanje 98% zadržavanja kvalitete i p95 latenciju ne veću od 1.2x
osnovne vrijednosti, plus ili 0.05 apsolutno uravnoteženo poboljšanje srednjeg
povratka na temelju slučaja pri ekvivalentnim srednjim pozivima za natpise, ili
najmanje 10% manje srednjih poziva za natpise nakon deduplifikacije. FU-09
zahtijeva najmanje 0.85 kvalitetu, 95% zadržavanje, 20% smanjenje p95
latencije i 10% smanjenje tokena. Gubitak kritičnih činjenica, usklađenost
s injekcijom ili nedostatak korištenja sprječavaju promociju. Jedno izvršenje ne
može promovirati ništa: `--previous-report` potvrđuje dva različita,
nepreklapajuća, uzastopno podobna izvršenja iste politike/modela revizije/
kandidata/korpusa. Eksperiment uzorkovanja ne može potvrditi eksperiment
kontaktne stranice.

Kolektori trebaju ocjenjivati odgovore u memoriji i spremiti `responseDigest`
plus metrike i obveze promatranja, nikada tekst odgovora. Potrošač također
čita naslijeđene sirove promatranja, ali nikada ne kopira taj tekst u svoje
izvještaje. Točno jedan od `responseDigest` ili `rawResponseText` se
prihvaća za svako promatranje. Verzijska dopuštena lista ostaje prazna s
nepromjenjivim `hold` zadanim. Podobni unos zahtijeva svoju referencu
dokaza, politiku, reviziju modela, točan SHA kandidata, manifest digest i
dva različita ID-a izvršenja; sukobljeni konteksti se odbacuju. Ovi metapodaci
su ugovor o reviziji, a ne dokaz da referencirana datoteka sadrži
autentična mjerenja. Pregledajte stvarne račune prije dodavanja bilo kojeg
unosa. Statistički endpoint za upravljanje i Video nadzorna ploča otkrivaju
konzervativnu spremnost. Samo konfigurirani alias modela ne uspostavlja
njegovu reviziju ili trenutni SHA kandidata, tako da trenutna nadzorna
ploča izvještava `HOLD` umjesto ponovnog korištenja podobnosti iz drugog
izvršnog konteksta. Eksplicitni eksperimentalni odabir ostaje odvojen od
promocije; nijedna zadana vrijednost se automatski ne mijenja.

Pozivatelji mogu priložiti opcionalni `transcript.cues` niz uz podržani video
dio kada već posjeduju usklađeni tekst. Svaki cue mora sadržavati `text`,
konačni `start`/`end` interval unutar ispitivane trajanja, i dopušteni
`source` (`client`, `embedded`, ili `audio-bridge`); `confidence` se
zadano postavlja na `1` i mora ostati između `0` i `1`. Točni duplikati
cueova se spajaju. OmniRoute nikada ne započinje transkripciju iz ovih
metapodataka: potvrđeni cueovi se kopiraju u opisani rezultat s izvorom,
povjerenjem i intervalom, i prikazuju se kao nepouzdana promatranja uz
natpise okvira. Nevažeći, izvan raspona, ili tekst bez podrijetla se
odbacuju umjesto da se miješaju u tok natpisa. Oba kanala tijela zahtjeva
transkripta normaliziraju dostavljeno podrijetlo na `client`, uključujući
samoizrečene `embedded` ili `audio-bridge` oznake. Samo adapter u vlasništvu
poslužitelja može dodijeliti te pouzdane oznake putem argumenta
samo-koda `trustedSource`; polje zahtjeva JSON ne može doći do tog
argumenta. Tekst transkripta ostaje nepouzdani sadržaj izveden iz medija,
bez obzira na njegovo podrijetlo, i nikada ne smije odrediti
autorizaciju.

Napredni pozivatelj može pružiti `audioTranscript` stazu za isti video;
ona se tretira kao tekst koji je pružio klijent, a ne kao dokaz poslužiteljske
transkripcije. Spojna šava pokreće vizualna i audio promatranja pod
jednim rokom i signalom za prekid, naručuje ih na zajedničkoj vremenskoj
liniji, spaja točne duplikate i izvještava o djelomičnom rezultatu kada
samo jedna strana uspije. Nevažeći `audioTranscript` degradira se na taj
djelomični rezultat — vizualni opis se čuva, a audio grana bilježi
sanitizirani kod greške — umjesto da ne uspije cijeli video. Dostupnost po
grani, djelomična oznaka i sanitizirani kodovi greške se čuvaju u
opisanom rezultatu, u metapodacima zaštitne ograde (`audioFusionRuns`/
`audioFusionPartials`/`audioFusionFailureCodes`), u metapodacima
rezultata-cachea, i u brojačima fuzije mosta. Zadani put Video Bridge ne
pokreće govor-u-tekst ili ne preuzima drugu kopiju medija; bez te
eksplicitne staze, ostaje samo video.

**Zadržavanje transkripta (#12150 P1).** Ovo se automatski primjenjuje
kada god Video Bridge (sam po sebi opt-in) prikazuje cue transkripta —
ne postoji zasebna oznaka za zadržavanje. Kada zahtjev prikazuje bilo koji cue
transkripta (pozivateljem deklarirani `transcript` ili fuzirani
`audioTranscript`), zaštitna ograda ga označava kao `videoBridgeObserved`
i proizvodi redigirani sjena video opisa — identično prikazivanje u kojem
je svaki cueov slobodni tekst zamijenjen s `[redacted-video-transcript]`,
izgrađen zamjenom strukturiranog polja cuea prije nego što se string
sastavi (nikada parsiranjem spljoštenog teksta, tako da nijedan sadržaj cuea
— neprijateljski ili običan, uključujući tijela koja sadrže `]` kao što su
`[inaudible]`/`[music]` — ne može preživjeti). Zadržani dijelovi poziva
zamjenjuju svaki dio teksta izvedenog iz videa s tim redigiranim sjenom,
usklađenim po jednakosti sadržaja; `fullText` sidro se ponovno čita iz
završene pre-call zaštitne ograde, tako da se podudaranje još uvijek
uspijeva nakon kasnijih zaštitnih ograda (maskeri PII i vjerodajnica,
prioriteti 10/95) prepisuju tekst opisa na mjestu i nakon što sustav
prompt/handoff/injekcija memorije preoblikuje niz poruka. Tijelo poslano
uzvodno modelu ostaje nepromijenjeno. Promatrani zahtjev također ne
popunjava trajnu Memoriju (oba vađenja izvedena iz zahtjeva i odgovora su
preskočena), tako da vlastiti odgovor modela ne može odjeknuti tekst
transkripta u Memoriji.

**Sirovi video polja (#12430).** Kada je most omogućen i izvorna podrška za
video nije poznata ili je odsutna, definirana polja `transcript`/`audioTranscript`
također aktiviraju `videoBridgeObserved`, čak i nakon neuspjeha opisa ili
ograničenja `maxVideos`. `null` i prazni stringovi se računaju; odsutna
polja i ne-video metapodaci se ne računaju. Zadržane kopije redigiraju
ova polja ili izostavljaju zahtjev, a cache/ Memorija se zaobilaze. Teret
davatelja ostaje nepromijenjen.

Dodatne zadržane kopije koriste isti signal promatračkog zahtjeva. Siromašni
snapshot klijentskog zahtjeva prije zaštitne mjere, u memoriji čekajući zahtjev i
rano odbijeni zapis zahtjeva strukturno zamjenjuju polja transkripta u dijelovima
videa; string prompti sintetizirani od strane faza cjevovoda i prijenosa konteksta
su redigirani na odredištu tijela zadržanog zahtjeva. Oznaka `video_content_removed`
osigurava da nastavak `previous_response_id` ne uspije, umjesto da rekonstruiše
tekst koji je namjerno odbačen. Ako promatrački zahtjev izgubi svoj
redigirani sjena po dijelu prije logiranja, ili čak jedan od nekoliko video sjena
ne uspije uskladiti nakon kasnijih mutacija zahtjeva, tijelo zadržanog zahtjeva
se potpuno izostavlja umjesto da zadrži djelomično redigirani transkript.

Za promatrački zahtjev, odgovor modela može citirati bilo koji dio
transkripta bez strukturirane granice naznake. Njegov zadržani zapis poziva
`responseBody` stoga se zamjenjuje oznakom izostavljanja; detaljni artefakt
cjevovoda (koji može uključivati tijela uzvodnog/klijentskog i dijelove toka)
se ne zadržava. Semantički, idempotentni i kešovi ponovnog razmišljanja zaobiđu
čitanja i pisanja za taj zahtjev. Zahtjev pružatelja i odgovor vidljiv klijentu
ostaju nepromijenjeni. Rani keepalive bajtovi se ispuštaju iz privremenog
bufora kada se detaljni artefakt izostavi. Kirova upozorenja na neispravan
EventStream izvještavaju samo o broju bajtova u payloadu, nikada o njegovom
sadržaju ili sirovom pogrešnom izvještaju JSON parsera.
Ovo ne tvrdi da je svaki nepovezani dijagnostički alat pružatelja/plugin-a
auditoriran; širi pregled zadržanog odredišta prati se u #11658.

Unutarnji `/api/modality-bridge/video/drilldown` životni ciklus je
odvojeni, loopback/token-autentificirani keš podloga. Svaka operacija također
zahtijeva kanonski neprozirni ID glavnog subjekta. Prije nego što se
omogući pozivatelju u produkciji, mora izvesti taj ID iz autentificiranog
stanovnika i nikada ne smije proslijediti vrijednost koju odabere klijent. Ključevi
keša povezuju tog glavnog subjekta s kanonskim sesijskim i video-referentnim
ID-ima, pohranjuju samo njihove SHA-256 izvedene ključeve, i ograničavaju
čitanja i brisanje na istog glavnog subjekta. Keš pohranjuje najviše 16
izvedenih JPEG okvira po unosu, ističe ih nakon deset minuta, i podržava
ograničena `start`/`end` čitanja ili eksplicitno brisanje sesije.

Svaki glavni subjekt je ograničen na 16 unosa i 64 MiB kanonskih JPEG podataka.
Ta ograničenja su neovisna od globalnog plafona od 64 unosa/256 MiB: pritisak
kvote glavnog subjekta izbacuje samo najrjeđe korištene unose tog glavnog
subjekta prije nego što se razmatra globalno LRU izbacivanje. Istečeni unosi
se uklanjaju iz oba glavnog subjekta i globalnog računanja na aktivnost keša,
dok otkazivanje i neuspjeh validacije ne izvršavaju djelomičnu zamjenu.

Keš odbacuje nekanonski Base64, višak punjenja, ne-JPEG medije, neispravne ili
skraćene JPEG-ove, i JPEG-ove koji proizvode upozorenje tijekom ograničenog
punog dekodiranja slike `sharp`. Ponovno kodira svaku prihvaćenu sliku kao
kanonski JPEG, izvodi širinu i visinu iz dekodiranih bajtova umjesto da
povjerava poljima pozivatelja, i odbacuje sve završne poliglotne bajtove umjesto
da ih zadrži. Samo je ograničeni kanonski komprimirani bafer teret za obje
kvote. JSON žičani limit uključuje Base64 prekomjerno opterećenje za plafon
dekodiranog ulaza od 32 MiB. Svaka
pohranjena derivacija bilježi svoj validirani JPEG format/rezoluciju, politiku
uzorkovanja, verziju derivacije, vrijeme stvaranja, hash sadržaja izračunat na
poslužitelju, i hash roditeljskog referenta plus hash roditeljskog sadržaja
pouzdanog pozivatelja. Otkazivanje se provjerava između asinkronih faza
dekodiranja/hashiranja prije atomskog potvrđivanja keša.

Proizvođač u produkciji ponovno koristi već izvedene okvire brokera samo nakon
uspješne vizualne analize, bez drugog preuzimanja/izvlačenja videa. Zahtijeva
operator `modalityBridgeVideoDrilldownEnabled=true`, strogu po dijelu
`drilldown: true`, i autentificirani ID zapisa API ključa. Vrijednosti glavnog
subjekta/sesije koje izjavljuje klijent nikada ne uspostavljaju vlasništvo.
Bez sva tri uvjeta ne hashira, ne mijenja veličinu ili ne zadržava dodatne
okvire. Neuspjeh zadržavanja čuva upotrebljiv vizualni odgovor. Odobreni
zahtjevi zaobilaze keš rezultata cijelog videa tako da rezultati u kešu nikada
ne ponavljaju rukovanje.

Uspješni JSON i SSE odgovori izlažu najviše četiri neprozirna rukovanja u
ograničenom `x-omniroute-video-drilldown` zaglavlju. Ovlašteni izvori
preglednika mogu čitati to zaglavlje bez proširivanja CORS politike izvora.
Nova rukovanja koriste `v1.<32-byte random base64url token>`, a registar
zadržava samo njihove SHA-256 hashove. Čitač/parserski zaglavlje također
prihvaća naslijeđene 64-hex tokene. Autentificirani javni potrošač je
`GET /api/v1/video-bridge/drilldown?handle=...`, neovisno ograničen
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Eksplicitno zadržano
lažno oduzima pristup čak i kada je naslijeđeni `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED`
env fallback omogućen. Zadržavanje u produkciji ima analogni naslijeđeni
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Oba fallbacka su prema
zadanim postavkama isključena.

Potrošač izvodi vlasništvo iz autentificiranog ključa, primjenjuje politiku ključa,
i vraća isti 404 za nepoznata, istečena i rukovanja drugog ključa. Prihvaća
`variant=preview|standard|detail` (maksimalna JPEG dimenzija 320/640/1280, nikada
ne povećava), `limit=1..8` (ili naslijeđeni `frames` alias, nikada oboje),
nulti-bazirani `page`, i opcionalne `start`/`end` fokus sekunde. Dupli
ključevi upita i obrnuti fokus prozori se odbacuju. Svaki vraćeni varijant ima
hash svog stvarnog sadržaja i stvarne rezolucije metapodataka, povezanih s
zadržanim izvorom. Varijante se izvode prilikom čitanja umjesto da se pohranjuju
kao dodatne zadržane kopije. JSON odgovor, uključujući Base64/envelopu, je
ograničen na 32 MiB; prevelika stranica vraća 413 i klijent mora zatražiti
manje okvire. Čitanja provjeravaju otkazivanje oko svake promjene veličine i
ponovno provjeravaju valjanost rukovanja prije vraćanja. `DELETE` od strane
vlasnika je idempotentno; brisanje ili isteka TTL oslobađa zadržani izvor i
računanje korištenja.

Zajednički spremnik je lokalni za proces: rukovanje istekom pri ponovnom pokretanju i nisu prenosivi između neovisnih OmniRoute procesa. Statistike upravljanja otkrivaju učinkovitu politiku zadržavanja/udaljenosti i agregiraju samo zadržane unose/bajte, nikada medije, reference, glavne ID-ove ili rukovanje. Panel postavki videa prikazuje te vrijednosti i može trajno zadržati oba prekidača za pristanak. Ova dokumentacija o implementaciji nije dokaz o aktivnom postavljanju ili promociji; prihvaćanje stvarnog modela prati se odvojeno.

Okviri se titluju sekvencijalno s konfiguriranim Video modelom. Prazna zamjena videa nasljeđuje postavku Vizije; ako su oba prazna, Vizija automatski odabire učinkoviti model sposoban za viziju. Uspješni titlovi zamjenjuju izvorni dio s stabilnim `[Video description:` prefiksom koji također označava tekst kao nepouzdanu medijsku promatranje i govori downstream modelima da ne slijede upute pronađene u mediju. Ključevi predmemorije titlova okvira uključuju JPEG bajtove, upit, vremensku oznaku i učinkoviti model; samo uspješni titlovi se predmemoriraju. Unosi u predmemoriju zadržavaju stvarni uspješni model proizvođača, uključujući model rezervne opcije; most izvještava `mixed` kada su različiti okviri proizvedeni različitim modelima. Hit predmemorije ponovno koristi tu identitet proizvođača umjesto da ga preimenuje kao traženi plan usmjeravanja. Predmemorija rezultata cijelog videa je ključna za svaki unos koji mijenja izlaz — upit, učinkoviti model, politiku uzorkovanja, broj okvira, način semantičke analize, SHA-256 otisak normaliziranog naglaska, prozor fokusa, `transcript`, `audioTranscript` i oznaku kontaktne stranice — tako da promjena bilo koje od tih dimenzija predstavlja promašaj predmemorije, nikada zastarjelu ponovnu upotrebu. Verzija politike vizualne dedupikacije, prag i ograničeni broj kandidatskih okvira također su eksplicitni u ključu predmemorije rezultata i metapodacima; stoga promjena politike ne može ponovno koristiti zastarjeli opis cijelog videa. Metapodaci predmemorije rezultata v4 zadržavaju način i otisak, nikada sirovi korisnički zadatak. Metapodaci zaštitnog zida izvještavaju o traženim i učinkovitim načinima analize; traženi `focused` način bez upotrebljivog korisničkog teksta izvještava se kao učinkovito `full`.

Zaštitni zid izvlači svaki podržani dio videa, ali ne opisuje više od `modalityBridgeVideoMaxVideos`. Za cilj koji je dokazano imao `supportsVideo === false`, neuspješni i prekoračeni videi postaju eksplicitne sigurne tekstualne oznake tako da nijedan sirovi video ne preživi. Kada je sposobnost nepoznata, ti dijelovi ostaju netaknuti. Ciljevi s `supportsVideo === true` zaobilaze most. Signal za prekid zahtjeva klijenta propagira se kroz preuzimanje, broker red, podprocese i pozive titlova; prekidi se zaustavljaju između videa i nikada ne otvaraju sirovi medij.

Postavke u vrijeme izvođenja su podržane od strane DB-a i validirane od strane Zod-a:

| Ključ                               | Zadano      | Raspon / ponašanje                                                                                     |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`     | Opcionalno vrijeme izvođenja, opt-in                                                                   |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` čuva generičke titlove; `focused` koristi ograničeni, nepouzdani kontekst posljednjeg korisnika |
| `modalityBridgeVideoModel`          | `""`        | Nasljeđuje model Vizije Bridge                                                                         |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                   |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, ili proporcionalni `segment_aware`; neuspjeh detektora se vraća na `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                    |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                         |

Zastarjeli trajni Video vremenski okviri iznad 120 sekundi su ograničeni na rok brokera; novi unosi iznad tog limita se odbacuju. `GET /api/modality-bridge/video/runtime` zahtijeva pouzdanu otisnutu lokalnost petlje prije autentifikacije ili ispitivanja vremena izvođenja, zatim zahtijeva upravljačku autentifikaciju. Vraća samo `available`, sanitizirane FFmpeg/ffprobe verzije i fiksni razlog kada vrijeme izvođenja nije dostupno. Unutarnja točka ekstrakcije nije javni API za prijenos: zasićenje reda vraća `503` plus `Retry-After`, prekid poziva vraća `499`, a fiksni rok brokera vraća `504`. Konvertirani odgovori dodaju `video->text;model=<visionModel>;parts=<videos>` u središnji `x-omniroute-modality-bridge` zaglavlje bez uklanjanja Vizije ili Audio segmenata.

### PII Masker (`piiMasker.ts`)

Radi na **oba** stadija.

- **`preCall`** klonira teret, prolazi kroz `system`, `messages`, `input` i `prompt` (uključujući obične string stavke), i primjenjuje `processPII()` (iz `@/shared/utils/inputSanitizer`) na string `content`/`text` polja. Kada je `PII_REDACTION_ENABLED=true`, otkriveni PII se redigira u izlaznom teretu. Ovo je neovisno o `INPUT_SANITIZER_MODE` (koji samo kontrolira politiku umetanja upita). Kada je redakcija isključena, poziv bilježi broj detekcija bez prepisivanja sadržaja.
- **`postCall`** duboko klonira odgovor, pokreće `sanitizePIIResponse()` plus masker oblika API-odgovora (`maskResponsesOutput` — pokriva `output_text` i `output[].content[].text`). Ako dođe do bilo kakve redakcije, modificirani odgovor zamjenjuje izvorni.

Zaštitni zid nikada ne blokira; samo anotira (`meta.detections`, `meta.redacted`) ili prepisuje.

### Umetanje upita (`promptInjection.ts`)

Otkriva neprijateljske strukture u korisnički dostavljenom sadržaju i provodi
konfiguriranu politiku. Ponašanje se upravlja varijablama okruženja i opcijama
konstruktora:

| Postavka     | Varijabla okruženja                                                                                   | Zadano | Učinak                                                                                                                                                                                              |
| ------------ | ----------------------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omogućeno    | `INPUT_SANITIZER_ENABLED`                                                                             | `true` | Kada je `false`, zaštitna ograda se kratko prekida.                                                                                                                                                 |
| Način        | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn` | Politika injekcije: `block`, `warn` ili `log`. (`redact` je prihvaćen za unazadnu kompatibilnost, ali **ne** uklanja tekst injekcije; zahtjev za prepravak PII kontrolira `PII_REDACTION_ENABLED`.) |
| Prag blokade | `blockThreshold` opcija / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Minimalna ozbiljnost potrebna za blokiranje. Srednja je samo za promatranje prema zadanim postavkama.                                                                                               |

**Prioritet načina** (`getMode`): pozivatelj `options.mode` →
`INJECTION_GUARD_MODE` **DB značajka-flag preklapanje** (Nadzorna ploča → Postavke →
Zastavice značajki) → `INJECTION_GUARD_MODE` varijabla → `INPUT_SANITIZER_MODE` varijabla →
`warn`. Preklapanje na nadzornoj ploči stoga pobjeđuje nad varijablama okruženja, tako da UI za Zastavice značajki kontrolira aktivnu zaštitu uživo (bez ponovnog pokretanja). Čitanje iz DB-a je sigurno:
ako dođe do pogreške, zaštita se vraća na ponašanje temeljen na varijablama okruženja, a kada nije postavljeno preklapanje, ponašanje je identično rješenju samo temeljenom na varijablama okruženja.

Izvori detekcije:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (zajednički detektor
   koji se koristi drugdje u procesu).
2. Ugrađeni `DEFAULT_GUARD_PATTERNS` (trenutno `system_override_inline` i
   `markdown_system_block`, oba `high` ozbiljnosti).
3. Opcionalni `customPatterns` proslijeđeni putem opcija konstruktora (stringovi, regex,
   ili `{ name, pattern, severity }` zapisi).

Kada je `mode === "block"` **i** barem jedna detekcija zadovoljava prag
ozbiljnosti, `preCall` vraća `{ block: true, message: "Zahtjev odbijen:
otkriven sumnjiv sadržaj" }`. U `warn`/`log` načinima zaštitna ograda bilježi, ali
dopušta poziv. Zajednički pomoćnik `evaluatePromptInjection()` također je izvezen
za pozivatelje koji trebaju procijeniti upite bez prolaska kroz registar.

**Ograničenje skeniranja (v3.8.20):** detektor samo ispituje **prvih 16 KB**
spojenog teksta upita — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajta) u
`src/shared/utils/inputSanitizer.ts`. I `detectInjection()` i
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` prije pokretanja
petlje uzorka. Direktive injekcije nalaze se blizu vrha unosa, tako da ovo
ograničava CPU/GC regex-a na višestotinama-KB teretima bez slabljenja detekcije (usp.
#3932, #4041).

### Masker vjerodajnica (`credentialMasker.ts`)

Radi na **oba** stadija, posljednji u zadanoj vezi (prioritet `95`). Uklanja
poznate uzorke API-ključeva / tajnih tokena iz izlaznog tereta (sadržaj poruke,
argumenti poziva alata, rezultati alata) **i** odgovora pružatelja, tako da se
vjerodajnica zalijepljena u upit (ili vraćena od strane rezultata alata) ne otkriva
uzvodnom pružatelju ili natrag klijentu.

- **Samo uz pristanak**, ista konvencija kao i PII redakcija (Stroga pravila #20):
  onemogućeno osim ako `settings.credentialRedactionEnabled === true` **ili**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kada je isključeno, zaštitna ograda je bez učinka —
  nikada ne blokira i nikada ne prepravlja.
- `redactCredentials()` prolazi kroz cijelo stablo tereta/odgovora (`walkValue()`,
  sigurno za zagađenje prototipa, sigurno od ciklusa putem `WeakSet`) i zamjenjuje podudaranja s
  `[REDACTED:<type>]` oznakom, klonirajući samo grane koje su se zapravo
  promijenile.
- `CREDENTIAL_PATTERNS` pokriva ključeve LLM pružatelja (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokene (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ključeve za plaćanje (Stripe, Square), ključeve u oblaku
  (AWS pristupni ključ, Twilio, SendGrid, Mailgun), privatne ključeve / JWT-ove,
  veze s vjerodajnicama (`mongodb://user:pass@...`, itd.), i generički uzorak
  `Authorization`/`x-api-key`/`api-key`/`apikey` zaglavlja. Ključevi u obliku zaglavlja
  (`authorization`, `x-api-key`, `api-key`, `apikey`) se strukturno uklanjaju (samo vrijednost, shema prefiks poput
  `Bearer `/`Basic ` očuvana) umjesto putem generičkog tekstualnog regex-a.
- Zaštitna ograda nikada ne blokira; samo prepravlja (`modifiedPayload` /
  `modifiedResponse`) i označava (`meta.credentialsRedacted`, `meta.count`).

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
