# Guardrails (Bosanski)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Izvor istine:** `src/lib/guardrails/`
> **Posljednje ažuriranje:** 2026-08-29 — v3.8.51 (Porijeklo transkripta Video Bridge-a je deklarisano od strane pozivaoca,
> još nije verifikovano od strane servera — pojašnjeno po #11661)

Zaštitne ograde (Guardrails) nameću sigurnost, politiku i transformacije sadržaja na granici
između OmniRoute-a i uzvodnih provajdera. Svaka zaštitna ograda može pregledati (i
opcionalno odbiti, transformisati ili anotirati) zahtjeve (`preCall`) i
uzvodne odgovore (`postCall`).

Sistem je **fail-open**: ako zaštitna ograda baci grešku tokom izvršavanja, registar
bilježi grešku i nastavlja sa sljedećom zaštitnom ogradom umjesto da odbije
zahtjev. Blokiranje je eksplicitna odluka (`block: true`), nikada slučajnost.

## Ugrađeni Guardrails

Registry automatski učitava šest guardrails u prioritetnom redoslijedu prilikom uvoza
(pogledajte `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Ime                 | Faza(e)        | Datoteka              |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niži prioritetni brojevi se izvršavaju **prvi**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Presreće zahtjeve koji sadrže slike usmjerene na **ne-vision modele** i ili
preusmjerava cijeli zahtjev na model sposoban za viziju ili zamjenjuje dijelove slike
tekstualnim opisima koje proizvodi konfigurabilni vizijski model prije
uzlaznog poziva. Ovo omogućava pružateljima koji rade samo s tekstom da transparentno
obrađuju multimodalne terete.

Tok:

1. Preskoči ako ciljni model već podržava viziju (osim ako se ne pojavljuje na
   listi prisilnih mostova `isVisionBridgeForcedModel`).
2. Izdvoji dijelove slike putem `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), koji delegira na **ujedinjeni medijski
   detektor** `detectMediaParts()` u `open-sse/utils/mediaParts.ts` — jedini
   izvor istine koji se dijeli s kombinovanim filterom kompatibilnosti.
   Izdvajanje je dozvoljeno samo za dijelove oblika na najvišoj razini
   koje `replaceImageParts` može ponovo spojiti (ugovor o izdvajanju↔zamjeni): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, i Responses API `input_image`. Ugniježđeni hitovi i
   oblici koji su samo indikatori su materijal za kombinovani filter i nikada se ne
   izdvajaju. Preskoči ako ništa nije pronađeno.
3. Riješi runtime konfiguraciju putem `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nove `modalityBridge*`
   postavke ključevi pobjeđuju; naslijeđeni `visionBridge*` ključevi ostaju kao
   **jednokratni povratak** (prozor za povratak). Preskoči prije bilo kakvog
   prolaska kroz medije kada je most onemogućen.
4. Odabir moda (`modalityBridgeVisionMode`, pogledajte tabelu ispod) odlučuje
   o preusmjeravanju naspram opisivanja. Preusmjeravanje vraća `modifiedPayload` s
   samo zamijenjenim `model`, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Put opisivanja: ograniči slike na `maxImages`, sastavi prompt svjestan zadatka,
   konsultuj cache za opisivanje, pozovi vizijski model **paralelno**
   (`Promise.allSettled`), i umetni `[Image N]: <description>` tekstualne dijelove na
   njihovo mjesto. Neuspješno opisivanje daje `null` i originalni dio slike je
   **sačuvan** (#4012) — osim na putu kombinovanog opisivanja kada je svako
   opisivanje neuspješno, gdje potvrđeni ne-vizijski uzlazni dobija
   `(unavailable — no vision-capable provider connected)` stub umjesto (#8430).
6. Vraća `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Odabir moda (`modalityBridgeVisionMode`)

| Mod        | Podrazumijevano | Ponašanje                                                                                                                                                                                                                                                                                                 |
| ---------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔               | Naslijeđena heuristika, nepromijenjena (#6640/#7204): ne-kombinovani/`auto/` modeli preusmjeravaju na najbolji vizijski model osim ako originalni model već nema upotrebljive akreditive (onda opisuje); ciljevi kombinovanja uvijek opisuju.                                                             |
| `describe` |                 | Uvijek opisuj — blok preusmjeravanja se potpuno preskoči; model koji je korisnik odabrao uvijek odgovara.                                                                                                                                                                                                 |
| `reroute`  |                 | Prisilno preusmjeravanje: čuvar modela s akreditivima se zaobilazi. Čuvar akreditiva za preusmjeravanje-**cilj** i dalje se primjenjuje — kada ne postoji upotrebljivi vizijski cilj, zahtjev se prebacuje na opisivanje tako da sirove slike nikada ne dosegnu backend koji radi samo s tekstom (#8430). |

Prisilni modovi skraćuju **prije** nego što se pokrene automatska heuristika; `auto` ponašanje
je bajt-identično pre-PR-1 guardrail-u.

#### Opseg API ključa (`visionBridgeKeyScope.ts`)

Kada API ključ pozivaoca ograničava `allowedConnections`, bazene kvota
(`allowedQuotas`) ili modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most bira samo
preusmjeravanje i opisivanje modele koje ključ može koristiti, na vezama koje ključ može
koristiti. Poziv za opisivanje tada uvijek prolazi kroz OmniRoute samopovratnu petlju s
`x-omniroute-self-loop-key-id` zaglavljem, tako da primajući chat zahtjev
ponovo provodi politiku veze i modela tog ključa. `enforceApiKeyPolicy()`
poštuje to zaglavlje samo zajedno s nosiocem samopovratne petlje, tako da može samo
sužavati pristup, a id koji se ne rješava se odbacuje.

Ako nijedan vizijski model nije dozvoljen za ključ, put opisivanja se povlači i
zahtjev prolazi nepromijenjen, isto ponašanje kao onemogućeni
guardrail (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Zahtjevi bez ključa, i ključevi bez ovih ograničenja, ponašaju se tačno kao
prije.

#### Prompt za opisivanje svjestan zadatka (`modalityBridgeVisionTaskAware`)

Default **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) dodaje
tekst **posljednje korisničke poruke** (skraćene na 500 znakova) osnovnom
opisnom promptu, usmjeravajući opis prema onome što je korisnik zapravo
pitao (codex-vision-proxy obrazac) i tražeći od vizionog modela da
transkribuje vidljivi tekst. Kada je zastavica isključena — ili nema
korisničkog teksta — osnovni prompt se koristi nepromijenjen.

Opis vlastitog OpenAI-kompatibilnog zahtjeva (`callVisionModelSingle()`
u `visionBridgeHelpers.ts`) uvijek traži `image_url.detail: "high"` —
bezuvjetno, za svakog pozivaoca/providera, ne zavisno od bilo kakvog
klijentskog signala. Uzorkovanje niskog detalja smanjuje tačnost OCR-a
za tačno onaj zadatak transkripcije teksta koji ovaj prompt traži, tako da
sam opisni poziv uvijek traži visoki detalj bez obzira na to koji nivo
detalja je korišten u originalnom dolaznom zahtjevu. Ovo utiče samo na
unutrašnje tijelo zahtjeva za opis; ne mijenja način na koji OmniRoute
prosljeđuje vlastiti `image_url.detail` pozivaoca na primarnom zahtjevu —
ta podrazumijevana vrijednost se primjenjuje odvojeno, i samo za
otkrivene OpenCode klijente, u `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic wire-format grana opisa vlastitog petlje nema `detail` polje
i nije pogođena ni jednom podrazumijevanom vrijednošću.

#### Ograničenje izlaza opisa (`modalityBridgeVisionMaxChars`)

| Ključ                          | Podrazumijevano | Opseg             |
| ------------------------------ | --------------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`             | `0` ili 100–50000 |

`0` (podrazumijevano) znači **bez ograničenja** — opis koji vraća
`callVisionModel()` se prosljeđuje neizmijenjen, čuvajući postojeće
ponašanje. Svaka vrijednost u opsegu 100–50000 skraćuje opis sa
`…` sufiksom prije nego što se ponovo spoji kao `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` u `src/lib/guardrails/visionBridge.ts`).
Povećajte ovo za zadatke OCR-a bogate detaljima gdje doljni model treba
potpunu transkripciju; smanjite ga da ograničite korištenje tokena na
pričljive vizione modele. Polje na kontrolnoj tabli se nalazi na
Naprednoj ploči kartice Vizija (`modality-bridge-max-chars` u
`ModalityBridgeVisionTab.tsx`) i ograničava svaku vrijednost između 1 i 99
na 100, dok ostavlja eksplicitnu `0` netaknutom — `0` je važeća Zod
vrijednost sama po sebi (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`),
a ne samo "nepostavljena" podrazumijevana vrijednost.

#### Keširanje opisa (`modalityBridge/bridgeCache.ts`)

Keširanje u memoriji LRU + TTL za izlaze opisa, dijeljeno na nivou procesa.
Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` sa
okvirima dužine-prefiksa (bez sudara granica polja). Model komponenta je
**konfigurirani** most model, a ne model koji je zapravo odgovorio —
`callVisionModel` može interno pasti nazad, a ključanje po pokušaju bi
fragmentiralo keš. Neuspješni opisi se nikada ne keširaju. Postavke:

| Ključ                           | Podrazumijevano | Opseg   |
| ------------------------------- | --------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`          | —       |
| `modalityBridgeCacheTtlMinutes` | `60`            | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`           | 10–5000 |

#### Normalizacija udaljene slike (samo-petlja opis/base64 preuzimanje)

Kada most sam preuzima **udaljenu** sliku — Anthropic opis
samo-poziv i claude-wire-format base64 konverzija
(`ensureBase64ImagesForClaudeWire`), oba putem
`fetchRemoteImageAsDataUri()` u `visionBridgeHelpers.ts` — rezultantni
data URI se prosljeđuje kroz `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) prije nego što bude ugrađen u
zahtjev vizionog modela. Prevelike slike se smanjuju na **2048px dužu ivicu**
(što odgovara ograničenju promjene veličine koje OpenAI/Anthropic već
primjenjuju na serverskoj strani), što smanjuje
bajtove/latenciju prilikom učitavanja bez promjene onoga što vizioni model
vidi. Promjena veličine koristi `sharp`, učitan putem dinamičkog
uvoza: na platformi gdje se njen izvorni binarni fajl ne može učitati,
`normalizeDataUri()` **nikada ne baca** — vraća se na prolaz
izvornih bajtova, tako da put opisa/base64-konverzije uvijek ostaje
funkcionalan. Bajtovi koji nisu slike (preuzimanje koje nije vratilo
dekodabilnu sliku) se takođe prosljeđuju neizmijenjeni. Ova
normalizacija se odnosi samo na slike koje most preuzima za svoj
vlastiti samo-poziv — nikada se ne primjenjuje na sirovi payload
pozivaoca, u skladu sa principom mutacije samo uz pristanak (Strogo pravilo #20).

#### Šema postavki + migracija

Novi `modalityBridge*` ključevi su Zod-validirani u `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*`, i grupa
`modalityBridgeAudio*` koja se koristi od strane Audio Mosta. Migracija
`141_modality_bridge_settings.sql` kopira postojeće naslijeđene
`visionBridge*` vrijednosti u odgovarajuće nove ključeve (idempotentno,
nikada ne prepisuje vrijednost `modalityBridge*` koju je postavio operater);
naslijeđeni ključevi ostaju prihvaćeni kao fallback za čitanje tokom jednog
ciklusa izdanja.

#### Transparentnost zaglavlja + statistika

Odgovori transformisani opisom nose
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(izgrađeno od strane `buildModalityBridgeHeader()` u
`modalityBridge/bridgeStats.ts`, otisnuto od strane `withModalityBridgeHeader()`
u `src/sse/handlers/chatHelpers.ts`). Ponovo usmjereni zahtjevi ne
dobijaju **nikakvo** zaglavlje — payload je ostao netaknut i zamjena modela
je već vidljiva u polju `model` tijela odgovora.

`GET /api/modality-bridge/stats` (upravljanje autentifikacijom, ista razina kao
`GET /api/settings`) vraća u memoriji po-modalitetske brojače
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` i
`video`. `averageLatencyMs` koristi `latencySamples`, a ne sve pokušaje, kao svoj
imenitelj; operacija bez mjerenja ne stvara uzorak od nula milisekundi.
`bridged` ostaje unazad kompatibilni alias za uspješne
konverzije; neuspjeli pokušaji ga ne povećavaju.
Brojači se resetiraju pri ponovnom pokretanju procesa po dizajnu
(telemetrija, ne računovodstvo).

#### Konfiguracija nadzorne ploče

Posvećena stranica nadzorne ploče je
`/dashboard/settings/modality-bridge`. Njene URL-adresabilne kartice `Vision`, `Audio`
i `Video` čuvaju parametre upita dok mijenjaju vrijednost `tab`.
Kartica Vision otkriva omogućavanje, način, odabir modela (uključujući automatski
zadani), promptove svjesne zadatka, napredne limite za vrijeme/izgled/opis-dužinu/cache,
runtime
brojače i zaštićeni zahtjev za uzorak. Kartica Audio je također aktivna: otkriva
omogućavanje, STT-samo odabirača modela s Auto, limite za vrijeme/max-clip, audio
brojače i test uzorka `input_audio`. Kartica Video je funkcionalna: izvještava
o runtime stanju FFmpeg/ffprobe — jedan od četiri eksplicitna UI stanja (`unknown` dok
je probiranje u toku ili nije moglo završiti, `restricted` na hostu nadzorne ploče koji
nije loopback gdje je probiranje preskočeno na klijentskoj strani, `unavailable` nakon
što je probano i potvrđeno kao nedostajuće, ili `available` s verzijama FFmpeg/ffprobe) —
traje
omogućavanje/model/frame/video/limite za vrijeme, filtrira odabirača modela na modele
sposobne za viziju, i otkriva video brojače.

Bivša kartica Vision Bridge pod AI postavkama je kompatibilna veza na
novu stranicu; više ne posjeduje drugu kopiju obrasca. Media Providers također
povezuje Image-to-Text i Speech-to-Text radne tokove s odgovarajućim Modality
Bridge karticama bez uklanjanja postojećeg Speech-to-Text igrališta.

**Zaobilaženje prijema samopovratka:** kada poziv za opis prolazi kroz OmniRouteov
vlastiti `/v1` samopovratak (nestandardni model pružatelja), pod-zahtjev šalje
`x-omniroute-admission-bypass: internal` i autentificira se s riješenim
samopovratnim vjerodajnicama — lokalni `sk_omniroute` sentinel u lokalnom modu, ili
operaterom konfigurirani `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env ključ (#1350) tako
da `REQUIRE_API_KEY=true` implementacije mogu još uvijek izvršiti poziv za opis. Zaobilaženje
se poštuje samo za te točne vjerodajnice, tako da vanjski klijenti ne mogu koristiti
zaglavlje za preskakanje prijema.

Nasljedni zadaci žive u `src/shared/constants/visionBridgeDefaults.ts`; novi
mod/aware/cache zadaci i rješenje postavki žive u
`src/shared/constants/modalityBridgeDefaults.ts`. Ograda otkriva
`deps` opciju konstruktora tako da testovi mogu ubrizgati lažne `getSettings` i
`callVisionModel` implementacije.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Presreće audio-izvorne chat zahtjeve prije nego što dođu do cilja koji nije
poznat da prihvata audio ulaz. Nikada ne preusmjerava chat zahtjev: audio dijelovi su
transkribovani putem postojećeg OpenAI-kompatibilnog multipart krajnjeg
tačke, a odabrani chat model nastavlja s tekstualnim transkriptima.

Tok:

1. Riješi `supportsAudio` kroz `getResolvedModelCapabilities()`. Eksplicitni
   metapodaci registra pružatelja pobjeđuju, zatim statički metapodaci modela, zatim
   sinkronizovani `modalities_input`. Deklarisana lista ulaza bez `audio` je `false`; nijedna
   evidencija sposobnosti ostaje `null`. I `false` i `null` aktiviraju
   konzervativni most, dok `true` zaobilazi.
2. Riješi `modalityBridgeAudio*` postavke i izvuči spliceable vrhunske
   audio dijelove iz svake poruke kroz zajednički `detectMediaParts()`
   detektor. Podržani oblici žice su OpenAI `input_audio`, `audio_url`, i
   `source.media_type: "audio/*"`. Ugniježdeni audio se otkriva za usmjeravanje, ali ne
   se uklanja putem splice puta. Rad je ograničen sa `modalityBridgeAudioMaxClips`;
   kasniji dijelovi ostaju netaknuti.
3. Poštuj konfigurirani `provider/model`, ili dopusti `selectAudioBridgeModel()` da
   prođe kroz `AUDIO_TRANSCRIPTION_PROVIDERS` u stabilnom katalogu i odabere prvi
   model s upotrebljivom aktivnom vjerodajnicom pružatelja.
4. `callAudioTranscription()` pretvara base64/data-URI audio u multipart
   `file`, ili preuzima udaljeni `audio_url` kroz javno-isključivo izlazno
   zaštitu s DNS pinningom i granicom od 25 MB. Zatim POST-uje datoteku i odabrani
   model na lokalni `/v1/audio/transcriptions` samopovratak, autentificiran s
   `resolveSelfLoopBearer()`. Postojeća ruta transkripcije obavlja normalno
   pretraživanje vjerodajnica, rukovanje cooldown/rate-limit, i dispatch pružatelja.
5. Uspješni pozivi zamjenjuju svoje dijelove s `[Audio N]: <transcript>`. Pozivi
   se izvršavaju s `Promise.allSettled`: pojedinačni neuspjeh čuva taj izvorni
   audio dio (#4012 ugovor). Ako svaki poziv ne uspije i cilj se dokaže
   `supportsAudio === false`, dijelovi postaju
   `[Audio N]: (nedostupno — nijedan STT pružatelj povezan)` (#8430 ugovor). Za
   nepoznati cilj (`null`), rezultat sa svim neuspjesima ostaje netaknut. Dokaženi
   cilj samo za tekst bez upotrebljive STT vjerodajnice prima isti eksplicitni
   stub bez izdavanja mrežnog poziva.

Uspješni transkripti koriste procesno široku Modality Bridge LRU/TTL cache. Ključ
kombinira audio referencu, stabilnu oznaku operacije `audio-transcription`, i odabrani
STT model; neuspjesi se nikada ne keširaju. Audio pokušaji ažuriraju
zajedničke `bridged`, `cacheHits`, `failures`, i `lastUsedAt` brojače.
Transformisani odgovori nose
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; netaknuti
zahtjevi ne primaju segment Audio Bridge.

Runtime postavke su DB-podržane i Zod-validirane:

| Ključ                         | Podrazumijevano | Opseg           |
| ----------------------------- | --------------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`          | —               |
| `modalityBridgeAudioModel`    | `""`            | Auto ili STT ID |
| `modalityBridgeAudioTimeout`  | `60000`         | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`             | 1–10            |

Zajednički keš ostaje pod kontrolom `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, i `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Presreće vrhunske video dijelove u Chat Completions `messages` i Responses
API `input` prije nego što se pozove cilj bez poznate nativne podrške za video.
Podržani oblici su `input_video`, `video_url`, `video_source`, HTTPS URL-ovi,
i `data:video/*;base64,...` data URI. Obični nazivi datoteka u tekstu se ne tretiraju
kao video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) upravlja prolazom zahtjeva,
provjerom sposobnosti/politike, agregacijom po zahtjevu, i payload-om odgovora.
Rad po videu — akvizicija, keš cijelog rezultata, opisivanje sekvence okvira
(koja spaja bilo koji audio transkript koji je proglasio pozivatelj), i metrike/prekid/čišćenje po pokušaju —
je skriven iza `processVideoPart` u `videoBridgePipeline.ts`, pozvan jednom po video dijelu unutar `preCall` petlje.
Ta modul također definiše eksplicitne granice portova `VideoMediaBrokerPort`
(akvizicija bajtova i ekstrakcija uzorkovanih okvira), `VideoAudioTranscriptionPort`
(spajanje audio transkripta koji je proglasio pozivatelj sa uzorkovanim titlovima), i
`VideoDrilldownPort` (nasljedni oblik sirovog skladišta). Proizvodni STT i zadržavanje okvira
su sastavljeni oko opisa porta kroz `createVideoSttAdapter` i
`createVideoDrilldownAdapter`; potonji koristi zajednički neprozirni životni ciklus.

Javni `/v1` put zahtjeva nikada ne uvozi ili poziva podproces. Udaljeni
video se preuzimaju pod granicom od 50 MiB; inline base64 video imaju
konzervativni limit od 36 MiB dekodiranog po videu kako bi model/poruke/okvir
ostali unutar javnog JSON zahtjeva za prijem od 50 MiB. Inline
procjene dužine i dekodirane veličine se provjeravaju prije alokacije. HTTPS je
obavezan na početnom udaljenom URL-u i svakoj preusmjeravanju, koristeći postojeći
javni samo izlazni čuvar sa DNS pinovanjem. Bajtovi zatim prelaze tačno unutrašnju
`POST /api/modality-bridge/video/extract` granicu brokera. Ta ruta je i
`LOCAL_ONLY` i `SPAWN_CAPABLE`, prihvata samo autentifikovani,
pouzdani loopback zahtjev po procesu, i nikada ne prihvata URL, putanju do datoteke, izvršnu datoteku,
ili listu argumenata. API tijelo veličine cjevovod i inkrementalni čitač tijela
handler-a nezavisno primenjuju limit ulaza brokera od 50 MiB. Njegova ograničena
red čekanja pokreće jednu ekstrakciju u isto vrijeme, dozvoljava četiri čekajuća posla,
i ograničava čekajući ulaz na 100 MiB.

Unutar brokera, `ffprobe` čita privatnu lokalnu datoteku; fiksni format
lista dozvoljenih isključuje formate plejlista i manifest. Za dozvoljene MOV-familije
kontejnere, vanjske MOV reference podataka ostaju onemogućene prema zadanim postavkama, a
fiksna komanda se ne uključuje u njih. I `ffprobe` i `ffmpeg` koriste
`file`-samo protokol bijele liste, jednu nit, fiksne nizove argumenata, bez ljuske,
i izvršne datoteke riješene iz `PATH`. Priključene slike pokrivača nisu
playable kandidati. Svi playable streamovi moraju zadovoljiti limite, a
eksplicitni zadani stream je preferiran prije determinističkog najnižeg indeksa
rezervnog rješenja. Video su ograničeni na 600 sekundi, 8,192 piksela po dimenziji, i
33,554,432 izvornih piksela. FFmpeg uzima uzorke 1–16 srednjih JPEG okvira, smanjuje
dugu ivicu na najviše 1,024 piksela bez povećanja manjih ulaza, i
nikada ne prima URL. Uzimanje uzoraka je `uniform` prema zadanim postavkama. Opcionalne
`scene_aware` i eksperimentalne `segment_aware` politike obavljaju jedan dodatni
fiksni FFmpeg prolaz preko već validiranog lokalnog streama, biraju ograničene
`showinfo` vremenske oznake scena, i deterministički se vraćaju na iste
uniformne sredine u slučaju neuspjeha detektora, prekida, neispravnog izlaza, ili praznog
skupa kandidata. Segment-aware način alocira uzorke sredine proporcionalno
validiranim vremenskim intervalima scena; segment-aware dokazi i ponašanje rezervnog rješenja su
detaljno opisani u nastavku. Teška granica od 16 okvira se
primjenjuje nakon odabira u svakoj politici. Kada zahtjev koji je svjestan scene ima samo
budžet od jednog okvira, koristi uniformnu sredinu aktivnog punog videa ili fokusa
prozora i izvještava `policyEffective: uniform`: jedan odabrani okvir scene
ne može sačuvati oba vremenska kraja. Pozivatelj može opcionalno pružiti
konačni fokus prozor (`start`/`end` sekunde); granice su ograničene na trajanje medija,
obrnuti ili neograničeni prozori se odbacuju, i sve politike uzorkovanja se obavljaju
samo unutar normalizovanog intervala. Rezultantni prozor je uključen u metapodatke uzorkovanja i u
nepouzdanom opisu prefiksa kako bi dolje modeli mogli razlikovati fokusirani izvadak od punog
vremenskog okvira.

Fokus semantičkih titlova je posebno, eksplicitno podešavanje. Zadani `full`
analitički način čuva postojeći okvir prompta i nikada ne prosljeđuje tekst zahtjeva
modelu titlova. U `focused` načinu, most čita samo najnoviji
ne-prazan korisnički napisani `text`/`input_text` iz istog Chat ili Responses
kontejnera, normalizuje ga na NFC, sruši kontrolne znakove i razmake,
i ograničava ga na 500 Unicode kodnih tačaka. Prazan rezultat se vraća na
tačno `full` prompt. Korisna naznaka se serijalizuje kao JSON u
posvećenom bloku nepouzdanog korisničkog konteksta i može samo prioritizovati
vidljive detalje; ne može nadjačati odvojeno upozorenje protiv praćenja uputstava
vidljivih ili čujnih u mediju. Tekstualni fokus nikada ne inferira `start`/`end` ili mijenja
temporalni uzorkivač.

#### FU-07 strukturni segment dokazi

`segment_aware` koristi jedan ograničen pre-analitički prolaz preko već validiranog lokalnog video toka. Fiksni lanac filtera prvo skalira na najviše 320 piksela širine, detektuje promjene scena i zamrznute intervale, zatim uzima uzorke na 1 frejm u sekundi za zamućenje, prosječnu luma i prostorne/temporalne informacije. Prolaz je ograničen na 600 strukturnih uzoraka, jedan FFmpeg/filter nit, isti `file`-samo protokol i dozvoljene kontejner liste, ograničenje izlaza procesa od 1 MiB, i najviše 30 sekundi unutar zajedničkog prekida/rok broker-a. Nikada ne prihvata komandu, filter, putanju ili URL iz zahtjeva.

Strukturne vrijednosti su deterministički uzorci dokaza, ne semantičko razumijevanje videa. Ne inferiraju subjekte, akcije, natpise, govor ili namjeru korisnika. Granice scena i zamrzavanja formiraju segmente; pokrivenost zamrzavanja, zamućenje, izloženost, prostorni detalj i temporalna promjena samo utiču na to kako se postojeći budžet od 1–16 frejmova raspoređuje. Potpuno zamrznut segment je ograničen na jedan frejm, dok se nezamrznuti segmenti takmiče za preostali budžet. Kada granice nadmaše frejmove, zadržava se uniformna pokrivenost vremenske linije tako da brzi rani rezovi ne mogu sakriti dugi segment. Granice scena unutar 1-sekundne analitičke rezolucije granice zamrzavanja se spajaju.

Nedostajući filteri, neispravni/prazni dokazi, greška detektora, ili ograničeno vrijeme pre-analize neuspješno otvaraju prema tačnoj uniformnoj srednjoj politici. Prekid poziva ili rok broker-a ne neuspješno otvaraju: prekida tekući podproces, sprečava kasniju ekstrakciju frejmova, a privatno privremeno stablo se uklanja u `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generiše determinističke stvarne FFmpeg
fiksacije za uštedu nakon deduplifikacije natpisa, raspodjelu budžeta gustog kretanja,
dokaze o zamućenju/izloženosti/SI-TI, brze rezove sa dugim repom, i lažne pozitivne
rezultate postepene fade. Bilježi vrijeme zida pre-analize i, gdje je `/usr/bin/time`
dostupan, CPU djece i vrhunsku RSS. Njegove provjere kvaliteta su samo strukturni orakuli.
Stvarna kvaliteta modela natpisa ostaje `HOLD` jer ovaj uređaj nema
ovlašteni krajnji tačku ili zamrznutog suca. Monetarne uštede također ostaju `HOLD`
osim ako `--caption-cost-per-call-usd` ne pruži eksplicitnu pozitivnu procjenu po pozivu; skripta nikada ne fabricira nijedan rezultat.

Svaki frejm je ograničen na 4 MiB, svi sirovi frejmovi zajedno na 23 MiB, a
serijalizovani odgovor broker-a na 32 MiB. Privatni privremeni direktorij se uklanja
u `finally`. OmniRoute ne bundla FFmpeg i ne prihvata prilagođenu
izvršnu putanju. Prije titlovanja, most primjenjuje konzervativni vizualni
deduplifikacijski prolaz: svaki JPEG se smanjuje na 16×16 sivu bafer i
upoređuje se samo sa posljednjim zadržanim frejmom. Za traženi budžet natpisa
iznad jednog frejma, ekstrakcija pruža
ograničeni bazen kandidata do dvostruko tog budžeta i nikada više od 16 frejmova.
Traženi limit se primjenjuje samo nakon deduplifikacije, pri čemu se prvi i konačni
odabrani kandidati čuvaju tokom konačnog prorjeđivanja kada je budžet najmanje
dva. Verzijski
`grayscale-16x16-mean-cells-v2` politika koristi veći od prosječnog luma delta i
omjer ćelija sličica čija je normalizovana delta najmanje 0.05. Prag duplikata je
konstantan 0.04, odabran zbog predvidljivosti, a ne izložen kao postavka
u vrijeme izvođenja. Ovaj sekundarni
signal visokog kontrasta čuva male pokrete i promjene vidljivog teksta koje
može sakriti samo prosječna usporedba. Greške komparatora ili dekodera neuspješno
otvaraju i zadržavaju pokrivenost. Izlazni metapodaci razdvaja ekstraktovane kandidate,
uspješno korištene frejmove, i vizualne duplikate koji su odbijeni.

Eksplicitno označeni dio videa može zatražiti vremenski označen kontaktni list. Most
gradi najviše 4-kolonu, 16-frejm JPEG mrežu. Svaka ćelija od 512 piksela
uključuje svoj izvorni vremenski pečat u visokom kontrastu donjoj traci, dok isti vremenski
pečati ostaju u tekstualnim metapodacima za kasniju asocijaciju i reviziju. Kompletan
JPEG ostaje ograničen na 32 MiB. Ako `sharp` ne može dekodirati ili sastaviti mrežu,
most se vraća na pojedinačne JPEG frejmove; prekid klijenta se i dalje prenosi
kroz operaciju lista.

Dokazi o promociji su namjerno odvojeni od sintetičke kompozicije
mikrobenchmarka. `scripts/perf/video-bridge-contact-sheet-eval.ts` definiše
shemu-verziju A/B uređaja za stvarne OpenAI-kompatibilne vizualne modele. Mjeri
tokena koje prijavljuje provajder, end-to-end latenciju zida (uključujući kompoziciju lista),
broj poziva modela, i manifestom definirano zadržavanje činjenica. Sirovi odgovori modela
se ne pišu u izvještaj; samo SHA-256 sažeci i usklađeni ID-ovi činjenica se zadržavaju. Uređaj ne
vrši mrežni ili plaćeni poziv modela osim ako `--execute-real` nije proslijeđen i
`--model`, `OMNIROUTE_BASE_URL`, i `OMNIROUTE_API_KEY` su konfigurirani. Bez
tog eksplicitnog stvarnog izvođenja, njegov strojno čitljiv presud ostaje `HOLD`; sintetička
mjerenja opterećenja/broja poziva sama po sebi nisu dokazi o promociji.

Odvojeni `scripts/perf/video-bridge-promotion-eval.ts` konzumira FU-07 ili
FU-09 opažanja. Prihvat promocije zahtijeva svih osam sintetičkih scenarija
plus sanirani stvarni isječak, najmanje tri mjerene ponavljanja po ulozi
i slučaju, svih deset deklarisanih metrika, zamrznutih medija/prompta/očekivanih-činjenica/postavki
sažetaka, jedinstvenih ID-ova opažanja i verificiranog zasijane A/B reda. Potvrda
izvršenja povezuje sažetak korpusa, tačan SHA kandidata i reviziju modela. Nedostajući
ili neispravna mjerenja ostaju `HOLD`, uključujući CPU iznad 30 s, vrhunsku RSS iznad
512 MiB ili pre-analizu iznad 30 s. Ovo su gornje granice za prihvatanje dokaza, a ne nova
garancija provođenja RSS u vrijeme izvođenja.

FU-07 zahtijeva najmanje 98% zadržavanja kvalitete i p95 latenciju ne veću od 1.2x
osnovne vrijednosti, plus ili 0.05 apsolutno uravnoteženo poboljšanje srednjeg
povratka na osnovu ekvivalentnih srednjih poziva za titlove, ili najmanje 10%
manje srednjih poziva za titlove nakon deduplifikacije. FU-09 zahtijeva
najmanje 0.85 kvalitetu, 95% zadržavanje, 20% smanjenje p95 latencije i 10%
smanjenje tokena. Gubitak kritičnih činjenica, usklađenost sa injekcijama ili
nedostatak korištenja sprječava promociju. Jedno izvršenje ne može promovirati
ništa: `--previous-report` potvrđuje dva različita, nepreklapajuća,
uzastopno podobna izvršenja iste politike/modela revizije/kandidata/korpusa.
Eksperiment uzorkovanja ne može potvrditi eksperiment kontaktne stranice.

Kolektori trebaju ocjenjivati odgovore u memoriji i sačuvati `responseDigest`
plus metrike i obaveze posmatranja, nikada tekst odgovora. Potrošač također
čita naslijeđene sirove posmatranja, ali nikada ne kopira taj tekst u svoje
izvještaje. Tačno jedan od `responseDigest` ili `rawResponseText` se
prihvata za svako posmatranje. Verzijska lista dozvoljenih ostaje prazna sa
nepromjenjivim `hold` podrazumijevanjem. Podobni unos zahtijeva svoj
referentni dokaz, politiku, reviziju modela, tačan SHA kandidata, manifest
digest i dva različita ID-a izvršenja; sukobljeni konteksti se odbacuju.
Ove metapodatke predstavljaju ugovor o reviziji, a ne dokaz da referencirani
fajl sadrži stvarna mjerenja. Pregledajte stvarne račune prije dodavanja
bilo kojeg unosa. Endpoint za upravljačke statistike i Video kontrolna tabla
otkrivaju konzervativnu spremnost. Konfigurirani alias modela sam po sebi ne
uspostavlja njegovu reviziju ili trenutni SHA kandidata, tako da trenutna
kontrolna tabla izvještava `HOLD` umjesto ponovnog korištenja podobnosti iz
drugog konteksta izvršenja. Eksplicitni eksperimentalni odabir ostaje
odvojen od promocije; nijedan podrazumijevani se automatski ne mijenja.

Pozivaoci mogu priložiti opcioni `transcript.cues` niz uz podržani video
dio kada već posjeduju usklađen tekst. Svaki cue mora nositi `text`, konačni
`start`/`end` interval unutar ispitivane trajanja, i bijelu listu `source`
(`client`, `embedded`, ili `audio-bridge`); `confidence` podrazumijeva
`1` i mora ostati između `0` i `1`. Tačno duplikatni cue-ovi se
spajaju. OmniRoute nikada ne započinje transkripciju iz ovih metapodataka:
validirani cue-ovi se kopiraju u opisani rezultat sa izvorom, povjerenjem i
intervalom, i prikazuju se kao nepouzdana posmatranja uz titlove okvira.
Nevažeći, van opsega, ili bez porijekla tekst se odbacuje umjesto da se
miješa u tok titlova. Oba kanala transkripcije tijela zahtjeva normalizuju
dostavljeno porijeklo na `client`, uključujući samo-izjavljene `embedded`
ili `audio-bridge` oznake. Samo adapter koji posjeduje server može dodijeliti
te pouzdane oznake putem samo kodnog `trustedSource` argumenta; JSON polje
za zahtjev ne može doći do tog argumenta. Tekst transkripta ostaje
nepouzdani sadržaj izveden iz medija, bez obzira na njegovo porijeklo, i
nikada ne smije odrediti autorizaciju.

Napredni pozivač može pružiti `audioTranscript` trag za isti video; on se
tretira kao tekst koji je pružio klijent, a ne kao dokaz serverove
transkripcije. Spojna šava pokreće vizualna i audio posmatranja pod
jednim rokom i signalom za prekid, naručuje ih na zajedničkoj vremenskoj
liniji, spaja tačne duplikate, i izvještava o djelomičnom rezultatu kada
samo jedna strana uspije. Nevažeći `audioTranscript` degradira na taj
djelomični rezultat — vizualni opis se čuva, a audio grana bilježi
sanitizovani kod greške — umjesto da ne uspije cijeli video. Dostupnost po
grani, djelomična oznaka, i sanitizovani kodovi greške se čuvaju u
opisanom rezultatu, u metapodacima zaštitne ograde (`audioFusionRuns`/
`audioFusionPartials`/`audioFusionFailureCodes`), u metapodacima
keširanja rezultata, i u brojačima fuzije mosta. Podrazumijevani put Video
Bridge ne pokreće govor-u-tekst ili ne preuzima drugu kopiju medija; bez
tog eksplicitnog traga, ostaje samo video.

**Zadržavanje transkripta (#12150 P1).** Ovo se automatski primjenjuje
kada god Video Bridge (sam po sebi opt-in) prikazuje cue za transkript —
nema zasebne oznake za zadržavanje. Kada zahtjev prikaže bilo koji cue za
transkript (pozivačem deklarisani `transcript` ili fuzirani `audioTranscript`),
zaštitna ograda ga označava kao `videoBridgeObserved` i proizvodi
redigovanu sjenu video opisa — identično prikazivanje u kojem je svakoj
cue-ovoj slobodnoj tekstualnoj tijelu zamijenjeno sa `[redacted-video-transcript]`,
izgrađeno zamjenom strukturiranog polja cue-a prije nego što se string
sastavi (nikada parsiranjem spljoštenog teksta, tako da nijedan sadržaj cue-a
— neprijateljski ili običan, uključujući tijela koja sadrže `]` kao što su
`[inaudible]`/`[music]` — ne može preživjeti). Sačuvani zapis poziva
tijela zahtjeva zamjenjuje svaki tekstualni dio izveden iz videa tom
redigovanom sjenom, usklađenom po jednakosti sadržaja; `fullText` sidro se
ponovo čita iz završene zaštitne ograde pre poziva, tako da se podudaranje
i dalje uspijeva nakon kasnijih zaštitnih ograda (PII i maskeri akreditiva,
prioriteti 10/95) prepisuju tekst opisa na licu mjesta i nakon sistemskog
upita/ predaje/ injekcije memorije preoblikuju niz poruka. Tijelo poslato
uzvodno modelu ostaje nepromijenjeno. Posmatrani zahtjev također ne
popunjava trajnu memoriju (oba ekstrakcija izvedena iz zahtjeva i
odgovora su preskočena), tako da odgovor modela ne može ponoviti tekst
transkripta u memoriji.

**Sirovi video polja (#12430).** Kada je most omogućen i izvorna podrška za
video je nepoznata ili odsutna, definirana `transcript`/`audioTranscript`
polja također aktiviraju `videoBridgeObserved`, čak i nakon neuspjeha
opisa ili `maxVideos` limita. `null` i prazni stringovi se broje; odsutna
polja i ne-video metapodaci se ne broje. Zadržane kopije rediguju ova
polja ili izostavljaju zahtjev, a keševi/Memorija se zaobilaze. Teret
provajdera ostaje nepromijenjen.

Dodatne zadržane kopije koriste isti signal posmatranog zahtjeva. Sirovi
snapshot klijentskog zahtjeva prije zaštitne mjere, zahtjev u memoriji koji čeka, i rana
evidencija odbijenih zahtjeva strukturno zamjenjuju polja transkripta u dijelovima videa;
string prompti sintetizirani od strane faza cjevovoda i predaja konteksta su redigirani
na mjestu tijela zadržanog zahtjeva. Oznaka `video_content_removed` čini da
nastavak `previous_response_id` ne uspije, umjesto da rekonstruiše
tekst koji je namjerno odbacen. Ako posmatrani zahtjev izgubi svoj
sjeni redigovani dio prije logiranja, ili čak jedan od nekoliko video sjena
ne uspije da se podudara nakon kasnijih mutacija zahtjeva, tijelo zadržanog zahtjeva se
potpuno izostavlja umjesto da zadrži djelomično redigovani transkript.

Za posmatrani zahtjev, odgovor modela može citirati bilo koji dio
transkripta bez strukturirane granice naznake. Njegov zadržani zapis poziva
`responseBody` se stoga zamjenjuje oznakom izostavljanja; detaljni
artefakt cjevovoda (koji može uključivati tijela uzvodnog/klijentskog i dijelove toka)
se ne zadržava. Semantički, idempotentni i kešovi za ponavljanje razmišljanja zaobilaze
čitanja i pisanja za taj zahtjev. Zahtjev pružatelja i odgovor vidljiv klijentu
ostaju nepromijenjeni. Rani keepalive bajtovi se ispuštaju iz privremenog
bufora kada se detaljni artefakt izostavi. Kirova upozorenja na neispravan EventStream
izvještavaju samo o broju bajtova u teretu, nikada o njegovom sadržaju ili sirovoj grešci
JSON parsera.
Ovo ne tvrdi da je svaki nepovezani dijagnostički alat pružatelja/plugin-a
auditoran; širi pregled zadržanog odlagališta se prati u #11658.

Unutrašnji `/api/modality-bridge/video/drilldown` životni ciklus je odvojen,
loopback/token-autentifikovani keš podloga. Svaka operacija također zahtijeva
kanonski neprozirni ID glavnog subjekta. Prije nego što se omogući pozivatelju u produkciji,
mora izvesti taj ID iz autentifikovanog zakupca i nikada ne smije proslijediti
vrijednost koju je odabrao klijent. Ključevi keša povezuju tog glavnog subjekta sa kanonskim ID-ima sesije i
video-reference, čuvaju samo njihove SHA-256 izvedene ključeve, i ograničavaju
i čitanja i brisanje na istog glavnog subjekta. Keš čuva najviše 16 izvedenih JPEG
okvira po unosu, ističe ih nakon deset minuta, i podržava ograničena
`start`/`end` čitanja ili eksplicitno brisanje sesije.

Svaki glavni subjekt je ograničen na 16 unosa i 64 MiB kanonskih JPEG podataka. Ta
ograničenja su neovisna od globalnog plafona od 64 unosa/256 MiB: pritisak kvote
glavnog subjekta izbacuje samo najmanje korištene unose tog glavnog subjekta prije nego što se razmotri
globalno LRU izbacivanje. Istečeni unosi se uklanjaju iz oba glavna subjekta i
globalnog računovodstva na aktivnost keša, dok otkazivanje i neuspjeh validacije ne
izvršavaju djelomičnu zamjenu.

Keš odbacuje nekanonski Base64, višak punjenja, ne-JPEG medije, neispravne ili
skraćene JPEG-ove, i JPEG-ove koji proizvode upozorenje tokom ograničenog punog
slike `sharp` dekodiranja. Ponovo kodira svaku prihvaćenu sliku kao kanonski JPEG, izvodi širinu i visinu
iz dekodiranih bajtova umjesto da vjeruje poljima pozivaoca, i odbacuje sve
trailing polyglot bajtove umjesto da ih zadrži. Samo je ograničeni kanonski kompresovani
bifer naplaćen obema kvotama. JSON ograničenje uključuje Base64 prekomjerno opterećenje za 32 MiB
plafon dekodiranog ulaza. Svaka
pohranjena derivacija bilježi svoj validirani JPEG format/rezoluciju, politiku uzorkovanja,
verziju derivacije, vrijeme kreiranja, hash sadržaja izračunat na serveru, i hash roditeljskog
reference plus hash roditeljskog sadržaja pouzdane pozivaoca. Otkazivanje se provjerava
između asinkronih faza dekodiranja/hashiranja prije atomskog keširanja.

Proizvođač u produkciji ponovo koristi već izvedene okvire brokera samo nakon uspješne
vizualne analize, bez drugog preuzimanja/ekstrakcije videa. Zahtijeva operator
`modalityBridgeVideoDrilldownEnabled=true`, strogu po-dijelu `drilldown: true`, i
autentifikovani ID zapisa API ključa. Vrijednosti glavnog subjekta/sesije koje je proklamovao klijent nikada
ne uspostavljaju vlasništvo. Bez svih tri uslova ne hashira, ne mijenja veličinu ili zadržava
dodatne okvire. Neuspjeh zadržavanja čuva upotrebljiv vizualni odgovor. Zatraženi
zahtjevi zaobiđu keš rezultata cijelog videa tako da rezultati u kešu nikada ne ponovo koriste handle.

Uspješni JSON i SSE odgovori izlažu najviše četiri neprozirna handle-a u ograničenom
`x-omniroute-video-drilldown` headeru. Ovlašteni izvori preglednika mogu čitati taj header
bez proširenja CORS politike porijekla. Novi handle-ovi koriste `v1.<32-byte random base64url
token>`, a registar zadržava samo
njihove SHA-256 hash-eve. Čitač/parser headera također prihvata naslijeđene 64-hex tokene.
Autentifikovani javni potrošač je
`GET /api/v1/video-bridge/drilldown?handle=...`, neovisno ograničen od
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Eksplicitno zadržano lažno oduzima
pristup čak i kada je naslijeđeni `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env
fallback omogućen. Zadržavanje u produkciji ima analogni naslijeđeni
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Oba fallback-a su prema zadatku isključena.

Potrošač izvodi vlasništvo iz autentifikovanog ključa, primjenjuje politiku ključa, i
vraća isti 404 za nepoznate, istečene i handle-ove drugog ključa. Prihvaća
`variant=preview|standard|detail` (maksimalna JPEG dimenzija 320/640/1280, nikada ne povećava),
`limit=1..8` (ili naslijeđeni `frames` alias, nikada oboje), nulti-bazirani `page`, i opcionalne
`start`/`end` fokus sekunde. Dupli
ključevi upita i obrnuti fokus prozori se odbacuju. Svaki vraćeni varijanta ima hash
svojeg stvarnog sadržaja i stvarne rezolucije metapodataka, povezanih sa zadržanim izvorom.
Varijante se izvode prilikom čitanja umjesto da se pohranjuju kao dodatne zadržane kopije. JSON
odgovor, uključujući Base64/envelopu, je ograničen na 32 MiB; prevelika stranica vraća
413 i klijent mora zatražiti manje okvire. Čitanja provjeravaju otkazivanje oko svake
promjene veličine i ponovo provjeravaju validnost handle-a prije vraćanja. `DELETE` od strane vlasnika je idempotentno;
brisanje ili isteka TTL oslobađa zadržani izvor i računovodstvo korištenja.

Zajednički skladište je lokalno za proces: rukovanje ističe prilikom ponovnog pokretanja i nije prenosivo između nezavisnih OmniRoute procesa. Statistike upravljanja otkrivaju efikasnu politiku zadržavanja/udaljenosti i agregiraju samo zadržane unose/bajte, nikada medije, reference, glavne ID-ove ili rukovanje. Panel za postavke videa prikazuje te vrijednosti i može trajno zadržati oba prekidača za pristanak. Ova dokumentacija o implementaciji nije dokaz o aktivnom postavljanju ili promociji; prihvatanje stvarnog modela se prati odvojeno.

Okviri su titlovani sekvencijalno sa konfiguriranim Video modelom. Prazan Video preklapanje nasljeđuje Vision postavku; ako su oba prazna, Vision auto-usmjerivač bira efikasan model sposoban za viziju. Uspješni titlovi zamjenjuju originalni dio sa stabilnim `[Video description:` prefiksom koji također označava tekst kao nepouzdanu medijsku posmatračku i govori downstream modelima da ne slijede upute pronađene u mediju. Ključevi keša za titlove okvira uključuju JPEG bajtove, prompt, vremensku oznaku i efikasan model; samo uspješni titlovi se keširaju. Unosi u keš zadržavaju stvarni uspješni model proizvođača, uključujući model rezervne opcije; most izvještava `mixed` kada su različiti okviri proizvedeni različitim modelima. Hit u kešu ponovo koristi tu identitet proizvođača umjesto da ga preimenuje kao traženi plan usmjeravanja. Keš rezultata za cijeli video je ključan na svakom unosu koji mijenja izlaz — prompt, efikasan model, politika uzorkovanja, broj okvira, način semantičke analize, SHA-256 otisak normalizovanog nagovještaja fokusa, prozor fokusa, `transcript`, `audioTranscript`, i oznaku kontaktne stranice — tako da promjena bilo koje od tih dimenzija predstavlja promašaj u kešu, nikada zastarjeli ponovni upotrebu. Verzija politike vizualne dedupikacije, prag i ograničen broj kandidatskih okvira su također eksplicitni u ključu i metapodacima rezultata keša; promjena politike stoga ne može ponovo koristiti zastarjeli opis cijelog videa. Metapodaci rezultata keša v4 čuvaju način i otisak, nikada sirovi korisnički zadatak. Metapodaci zaštitnog zida izvještavaju o traženim i efikasnim načinima analize; traženi `focused` način bez upotrebljivog korisničkog teksta se izvještava kao efikasno `full`.

Zaštitni zid izvlači svaki podržani dio videa, ali ne opisuje više od `modalityBridgeVideoMaxVideos`. Za cilj koji je dokazano imao `supportsVideo === false`, neuspješni i prekomjerni video postaju eksplicitni sigurni tekstualni oznake tako da nijedan sirovi video ne preživi. Kada je sposobnost nepoznata, ti dijelovi ostaju netaknuti. Ciljevi sa `supportsVideo === true` zaobilaze most. Signal za abortiranje klijentskog zahtjeva se širi kroz preuzimanje, broker red, podprocese i pozive za titlove; aborti se zaustavljaju između videa i nikada ne otvaraju za sirove medije.

Postavke u vrijeme izvođenja su DB-podržane i Zod-validirane:

| Ključ                               | Podrazumijevano | Opseg / ponašanje                                                                                      |
| ----------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`         | Opcionalno vrijeme izvođenja, opt-in                                                                   |
| `modalityBridgeVideoAnalysisMode`   | `"full"`        | `full` čuva generičke titlove; `focused` koristi ograničeni, nepouzdani kontekst posljednjeg korisnika |
| `modalityBridgeVideoModel`          | `""`            | Nasljeđuje Vision Bridge model                                                                         |
| `modalityBridgeVideoFrameCount`     | `8`             | 1–16                                                                                                   |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`     | `uniform`, `scene_aware`, ili proporcionalni `segment_aware`; neuspjeh detektora se vraća na `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`             | 1–4                                                                                                    |
| `modalityBridgeVideoTimeout`        | `120000`        | 1000–120000 ms                                                                                         |

Zastarjeli trajni Video timeout vrijednosti iznad 120 sekundi su ograničene na rok brokera; nova podešavanja iznad tog limita se odbacuju. `GET /api/modality-bridge/video/runtime` zahtijeva pouzdanu pečatnu loopback lokalnost prije autentifikacije ili ispitivanja vremena izvođenja, zatim zahtijeva upravljačku autentifikaciju. Vraća samo `available`, sanitizovane FFmpeg/ffprobe verzije, i fiksni razlog kada vrijeme izvođenja nije dostupno. Unutrašnja tačka ekstrakcije nije javni API za upload: zasićenje reda vraća `503` plus `Retry-After`, prekid poziva vraća `499`, a fiksni rok brokera vraća `504`. Konvertovani odgovori dodaju `video->text;model=<visionModel>;parts=<videos>` u centralni `x-omniroute-modality-bridge` zaglavlje bez uklanjanja Vision ili Audio segmenata.

### PII Masker (`piiMasker.ts`)

Radi na **oba** stadija.

- **`preCall`** klonira payload, prolazi kroz `system`, `messages`, `input`, i `prompt` (uključujući obične string stavke), i primjenjuje `processPII()` (iz `@/shared/utils/inputSanitizer`) na string `content`/`text` polja. Kada je `PII_REDACTION_ENABLED=true`, otkriveni PII se redigira u izlaznom payloadu. Ovo je nezavisno od `INPUT_SANITIZER_MODE` (koji samo kontroliše politiku injekcije prompta). Kada je redigiranje isključeno, poziv bilježi brojeve detekcije bez prepisivanja sadržaja.
- **`postCall`** duboko klonira odgovor, pokreće `sanitizePIIResponse()` plus masku oblika API-odgovora (`maskResponsesOutput` — pokriva `output_text` i `output[].content[].text`). Ako dođe do bilo kakvog redigiranja, modificirani odgovor zamjenjuje originalni.

Zaštitni zid nikada ne blokira; samo anotira (`meta.detections`, `meta.redacted`) ili prepisuje.

### Prompt Injection (`promptInjection.ts`)

Detektuje neprijateljske strukture u sadržaju koji korisnik dostavlja i provodi
konfiguriranu politiku. Ponašanje se upravlja varijablama okruženja i opcijama
konstruktora:

| Postavka     | Env var                                                                                               | Podrazumijevano | Efekat                                                                                                                                                                                        |
| ------------ | ----------------------------------------------------------------------------------------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omogućeno    | `INPUT_SANITIZER_ENABLED`                                                                             | `true`          | Kada je `false`, zaštitna ograda se kratko prekida.                                                                                                                                           |
| Način        | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`          | Politika injekcije: `block`, `warn` ili `log`. (`redact` je prihvaćen za unazad kompatibilnost, ali ne uklanja tekst injekcije; zahtjev za prepravku PII kontrolira `PII_REDACTION_ENABLED`.) |
| Prag blokade | `blockThreshold` opcija / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`          | Minimalna ozbiljnost potrebna za blokiranje. Srednja je samo za posmatranje prema zadanim postavkama.                                                                                         |

**Prioritet načina** (`getMode`): pozivatelj `options.mode` →
`INJECTION_GUARD_MODE` **DB funkcionalna zastava** (Dashboard → Postavke →
Funkcionalne zastave) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Dakle, nadogradnja na kontrolama nadzorne ploče pobjeđuje nad varijablama okruženja, tako da UI funkcionalne zastave upravlja aktivnom zaštitom (bez ponovnog pokretanja). Čitanje iz DB-a je sigurno:
ako dođe do greške, zaštita se vraća na ponašanje zasnovano na varijablama okruženja, a kada nije postavljena nijedna nadogradnja, ponašanje je identično samo rješenju zasnovanom na okruženju.

Izvori detekcije:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (zajednički detektor
   set korišten drugdje u lancu).
2. Ugrađeni `DEFAULT_GUARD_PATTERNS` (trenutno `system_override_inline` i
   `markdown_system_block`, oba `high` ozbiljnosti).
3. Opcionalni `customPatterns` proslijeđeni putem opcija konstruktora (stringovi, regex,
   ili `{ name, pattern, severity }` zapisi).

Kada je `mode === "block"` **i** barem jedna detekcija ispunjava prag
ozbiljnosti, `preCall` vraća `{ block: true, message: "Zahtjev odbijen:
otkriven sumnjiv sadržaj" }`. U `warn`/`log` načinima zaštitna ograda loguje, ali
dozvoljava poziv. Zajednički pomoćnik `evaluatePromptInjection()` je takođe izvezen
za pozivatelje koji trebaju procijeniti upite bez prolaska kroz registar.

**Granica skeniranja (v3.8.20):** detektor samo ispituje **prvih 16 KB**
spojenog teksta upita — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajta) u
`src/shared/utils/inputSanitizer.ts`. I `detectInjection()` i
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` prije pokretanja
petlje obrazaca. Direktive injekcije se nalaze blizu vrha unosa, tako da ovo
ograničava CPU/GC regex na višestotina-KB teretima bez slabljenja detekcije (up.
#3932, #4041).

### Masker kredencijala (`credentialMasker.ts`)

Radi na **oba** nivoa, posljednji u zadnjem lancu (prioritet `95`). Uklanja
poznate obrasce API ključeva / tajnih tokena iz izlaznog tereta (sadržaj poruke,
argumenti poziva alata, rezultati alata) **i** odgovora provajdera, tako da
kredencijal zalijepljen u upit (ili vraćen od strane rezultata alata) nije otkriven
uzvodno provajderu ili nazad klijentu.

- **Samo na zahtjev**, ista konvencija kao i PII redakcija (Teško pravilo #20-povezano):
  onemogućeno osim ako `settings.credentialRedactionEnabled === true` **ili**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kada je isključeno, zaštitna ograda je bez efekta —
  nikada ne blokira i nikada ne prepravlja.
- `redactCredentials()` prolazi kroz cijelo stablo tereta/odgovora (`walkValue()`,
  sigurno za zagađenje prototipa, sigurno od ciklusa putem `WeakSet`) i zamjenjuje podudaranja
  sa `[REDACTED:<type>]` oznakom, klonirajući samo grane koje su se zapravo
  promijenile.
- `CREDENTIAL_PATTERNS` pokriva ključeve LLM provajdera (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokene (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ključeve za plaćanje (Stripe, Square),
  ključeve za oblak (AWS pristupni ključ, Twilio, SendGrid, Mailgun), privatne ključeve / JWT-e,
  stringove veze koji sadrže kredencijale (`mongodb://user:pass@...`, itd.), i
  generički obrazac za `Authorization`/`x-api-key`/`api-key`/`apikey` zaglavlje-vrijednost.
- Ključevi oblikovani kao zaglavlja (`authorization`, `x-api-key`, `api-key`,
  `apikey`) se strukturno uklanjaju (samo vrijednost, shema prefiks kao
  `Bearer `/`Basic ` očuvana) umjesto putem generičkog tekstualnog regexa.
- Zaštitna ograda nikada ne blokira; samo prepravlja (`modifiedPayload` /
  `modifiedResponse`) i anotira (`meta.credentialsRedacted`, `meta.count`).

Regresiona zaštita: `tests/unit/credential-masker-guardrail.test.ts`.

## Osnovni Ugovor (`base.ts`)

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
  message?: string; // prikazuje se kada se blokira
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vraća se iz preCall za prepisivanje zahtjeva
  modifiedResponse?: TValue; // vraća se iz postCall za prepisivanje odgovora
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

Guardrail signalizira "nema promjene" vraćanjem ili `void`, `{}`, ili
`{ block: false }`. Vraćanje `modifiedPayload`/`modifiedResponse` zamjenjuje
vrijednost koja prolazi kroz lanac za downstream guardrails.
`signal?: AbortSignal` prenosi životni ciklus pozivaoca u guardrails. Abortiranje zahtjeva je namjerni fail-open izuzetak: medijski mostovi prestaju raditi i čiste se bez vraćanja sirovih medija na cilj za koji se zna da ga ne podržava.

## Registar (`registry.ts`)

Singleton `guardrailRegistry` izlaže:

- `register(guardrail)` — dodaje (ili zamjenjuje normaliziranim imenom) zaštitnu ogradu i
  ponovno sortira po rastućem `priority`.
- `clear()` / `list()` — administrativni pomoćnici.
- `runPreCallHooks(payload, context)` — iterira kroz aktivne zaštitne ograde, provlači
  `payload` kroz `modifiedPayload` i zaustavlja se na prvom `block: true`.
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
- Tijelo zahtjeva `disabledGuardrails` (na najvišem nivou)
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

1.  `resolveDisabledGuardrails(...)` gradi listu za preskakanje iz API ključa, tijela i zaglavlja.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` pokreće zaštitne ograde (guardrails) u rastućem redoslijedu prioriteta:
    - Onemogućene zaštitne ograde se bilježe kao `skipped`.
    - `preCall` svake zaštitne ograde može prepisati payload putem `modifiedPayload`.
    - Prvi `block: true` prekida lanac i rukovatelj vraća odgovor o odbijanju zaštitne ograde.
3.  (Potencijalno prepisan) payload ulazi u kombinovano rutiranje i uzvodno slanje.
4.  Nakon što je odgovor sastavljen, `guardrailRegistry.runPostCallHooks(...)` pokreće isti lanac na odgovoru. `block: true` ovdje odbacuje uzvodni odgovor.

Zaštitne ograde koje izbace grešku bilježe se sa `error: <message>` i loguju putem
`logger.warn`, ali lanac se nastavlja — dizajnirano da bude "fail-open".

## Konfiguracija

Varijable okruženja koje čitaju ugrađene zaštitne ograde:

| Varijabla                             | Koristi                 | Efekat                                                                                                                          |
| :------------------------------------ | :---------------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Postavite `false` da potpuno onemogućite detekciju.                                                                             |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Politika injekcije: `warn`, `block`, ili `log`. Stara vrijednost `redact` ne prepisuje tekst injekcije.                         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Način rada za zaštitu od injekcije; također zastavica funkcije baze podataka koja **nadjačava** varijable okruženja (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | Minimalna ozbiljnost koju `MODE=block` odbija: `high` (podrazumijevano), `medium`, ili `low`.                                   |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Stari alias za `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Kada je `true`, PII zahtjeva se rediguje (nezavisno od načina injekcije).                                                       |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nizvodno) | Kontroliše ponašanje maskera na strani odgovora.                                                                                |

Zaštitne ograde Modality Bridge čitaju konfiguraciju vremena izvođenja iz skladišta postavki podržanog bazom podataka (`getSettings()`), a ne iz varijabli okruženja. Primarni ključevi za Vision su
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, i
`modalityBridgeCacheMaxEntries`. Stari
`visionBridge*` ključevi su prihvaćeni samo kao dokumentovani jednociklični rezervni mehanizam za čitanje; upisi na kontrolnoj tabli koriste primarne ključeve. Podrazumijevane vrijednosti i rezervni rješavač nalaze se u `src/shared/constants/modalityBridgeDefaults.ts`, sa starim konstantama zadržanim u `src/shared/constants/visionBridgeDefaults.ts`.

Audio koristi `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, i `modalityBridgeAudioMaxClips`, plus zajedničke
`modalityBridgeCache*` postavke. Audio nema rezervni mehanizam za stare ključeve jer su ovi ključevi uvedeni sa Modality Bridge shemom.

Video koristi `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, i
`modalityBridgeVideoTimeout`, plus zajedničke `modalityBridgeCache*` postavke.
Podrazumijevano je onemogućeno jer su FFmpeg/ffprobe opcionalne operativne zavisnosti, a titlovanje okvira dodaje kašnjenje i troškove modela.

## Prilagođeni Guardrails

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

Koraci:

1.  Kreirajte `src/lib/guardrails/myGuardrail.ts` koji proširuje `BaseGuardrail`.
2.  Implementirajte `preCall` i/ili `postCall`.
3.  Registrujte prilikom uvoza (push iz `registerDefaultGuardrails`) ili
    pozovite `guardrailRegistry.register(...)` tokom izvršavanja — registar zamjenjuje
    bilo koji prethodni guardrail sa istim normalizovanim imenom.
4.  Dodajte testove pod `tests/unit/` (postojeći primjeri:
    `tests/unit/guardrails-registry.test.ts`,
    `tests/unit/prompt-injection-guard.test.ts`,
    `tests/unit/guardrails/visionBridge.test.ts`).

## Testiranje

Koristite `resetGuardrailsForTests()` između testova da biste počeli iz poznatog stanja.
Proslijedite `{ registerDefaults: false }` da biste počeli sa praznim registrom i
registrovali samo guardraile koji se testiraju. Vision Bridge prihvata ubrizgavanje zavisnosti
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge izlaže ekvivalentne šavove za postavke,
mogućnosti, odabir STT modela, provjere akreditiva i transkripciju. Testovi stoga mogu
izvršavati oba toka bez pristupa bazi podataka ili mreži.

## Pogledajte takođe

- `src/lib/guardrails/` — implementacija
- `src/shared/utils/inputSanitizer.ts` — dijeljeni detektor koji pokreće
  prompt-injection i PII maskiranje
- `src/shared/constants/visionBridgeDefaults.ts` — podrazumijevane postavke Vision Bridge-a i
  lista modela sa prisilnim premošćavanjem
- `src/shared/constants/modalityBridgeDefaults.ts` — dijeljene podrazumijevane postavke Vision/Audio runtime-a
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalni sloj (prekidač strujnog kruga, hlađenja)
- `docs/reference/ENVIRONMENT.md` — potpuna referenca varijabli okruženja

## Pokrivenost rute za zaštitu od ubrizgavanja i crveni tim (Faza 8 · Blok D)

Zaštita od ubrizgavanja (`createInjectionGuard` / `withInjectionGuard`) pokriva sve rute
koje prihvataju korisničke upite. Poštuje `INJECTION_GUARD_MODE` (podrazumijevano `warn` = samo bilježenje;
`block` = vraća HTTP 400 `SECURITY_001`).

| Tip               | Rute                                                                                                                                                 | Podrazumijevani način rada |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| Tekst (postojeći) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                       |
| Generativni       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                       |
| Podaci            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                       |

Ekstrakcija teksta (`extractMessageContents`) pokriva `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Crveni tim (noćno, `nightly-llm-security.yml`):** promptfoo provjerava da svaka ruta blokira
OWASP-LLM korpus u `INJECTION_GUARD_MODE=block`; garak pokreće sonde (preskače bez tajne).
`moderations` je uključen radi dosljednosti — operatori u blok-modu ga mogu izuzeti putem
`resolveDisabledGuardrails`.

Noćni radni tok (`.github/workflows/nightly-llm-security.yml`, cron + ručno
pokretanje) ima dva posla:

- **`promptfoo-guard` (blokiranje)** — pokreće `promptfoo eval -c promptfooconfig.yaml`
  sa `INJECTION_GUARD_MODE=block`. Svaki adversarijalni slučaj (npr. "zanemari sve
  prethodne instrukcije...", DAN-stil jailbreakovi) potvrđuje da odgovor nosi
  `error.code === "SECURITY_001"`, tj. da je zaštita zaista odbila zahtjev.
- **`garak` (savjetodavno)** — pokreće garak `--probes promptinject,dan,leakreplay`
  protiv lokalne OmniRoute instance (`http://localhost:20128/v1`). Ograničeno tajnom
  dobavljača (`PROMPTFOO_PROVIDER_KEY`); graciozno preskače i ima sufiks
  `|| true`, tako da izvještava bez pada CI-ja.

Pokrivenost pomoćnika za zaštitu (`createInjectionGuard` / `withInjectionGuard`)
obuhvata svaku `/v1` rutu koja nosi upit; tekst upita se izvlači iz
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomoću
`extractMessageContents()` u `src/shared/utils/inputSanitizer.ts`.
