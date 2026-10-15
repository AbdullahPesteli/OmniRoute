# Guardrails (Српски)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Извор истине:** `src/lib/guardrails/`
> **Последње ажурирање:** 2026-08-29 — v3.8.51 (порекло транскрипта за Video Bridge декларише позивалац,
> сервер га још увек не верификује — појашњено у складу са #11661)

Заштитне мере примењују безбедносна правила, смернице и трансформације садржаја на граници
између OmniRoute-а и узводних провајдера. Свака заштитна мера може да прегледа (и
опционо одбије, трансформише или анотира) садржаје захтева (`preCall`) и
узводне одговоре (`postCall`).

Систем је **fail-open**: ако заштитна мера баци изузетак током извршавања, регистар
бележи грешку и наставља са следећом заштитном мером уместо да захтев
прогласи неуспешним. Блокирање је изричита одлука (`block: true`), никада случајност.

## Ugrađene zaštite

Registracija automatski učitava šest zaštita po prioritetu prilikom uvoza
(pogledajte `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Ime                 | Faza(e)        | Datoteka              |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Brojevi sa nižim prioritetom se izvršavaju **prvi**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Presreće zahteve koji sadrže slike usmerene ka **modelima koji ne podržavaju viziju** i ili
preusmerava ceo zahtev ka modelu koji podržava viziju ili zamenjuje delove sa slikama
tekstualnim opisima koje proizvodi konfigurisani vizuelni model pre
uzlaznog poziva. Ovo omogućava provajderima koji rade samo sa tekstom da transparentno
obrađuju multimodalne podatke.

Tok:

1. Preskoči ako ciljni model već podržava viziju (osim ako se ne nalazi na
   listi prisilnih mostova `isVisionBridgeForcedModel`).
2. Izvuci delove slike putem `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), koji delegira na **ujedinjeni medijski
   detektor** `detectMediaParts()` u `open-sse/utils/mediaParts.ts` —
   jedini izvor istine koji se deli sa kombinovanim filterom kompatibilnosti.
   Ekstrakcija je dozvoljena samo za najviši nivo delova oblika
   koje `replaceImageParts` može ponovo spojiti (ugovor o ekstrakciji↔zameni): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, i Responses API `input_image`. Ugnježdene pogodbe i
   oblici koji su samo indikatori su materijal za kombinovani filter i nikada se ne
   izvode. Preskoči ako ništa nije pronađeno.
3. Reši runtime konfiguraciju putem `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): novi `modalityBridge*`
   ključevi podešavanja pobeđuju; stari `visionBridge*` ključevi ostaju kao
   **jednokratna rezervna opcija** (prozor za povratak). Preskoči pre bilo kakvog
   prolaska kroz medije kada je most onemogućen.
4. Selektor moda (`modalityBridgeVisionMode`, pogledajte tabelu ispod) odlučuje
   o preusmeravanju naspram opisivanja. Preusmeravanje vraća `modifiedPayload` sa
   samo zamenjenim `model`, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Put opisivanja: ograniči slike na `maxImages`, sastavi prompt koji je svestan zadatka,
   konsultuj keš za opisivanje, pozovi vizuelni model **paralelno**
   (`Promise.allSettled`), i umetni `[Image N]: <description>` tekstualne delove na
   njihovo mesto. Neuspešno opisivanje daje `null` i originalni deo slike je
   **sačuvan** (#4012) — osim na putu kombinovanog opisivanja kada je svako
   opisivanje neuspešno, gde potvrđeni ne-vizuelni uzlazni dobija
   `(unavailable — no vision-capable provider connected)` stub umesto (#8430).
6. Vraća `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selektor moda (`modalityBridgeVisionMode`)

| Mod        | Podrazumevano | Ponašanje                                                                                                                                                                                                                                                                                      |
| ---------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔             | Stara heuristika, nepromenjena (#6640/#7204): modeli koji nisu kombinovani/`auto/` preusmeravaju na najbolji vizuelni model osim ako originalni model već ima upotrebljive akreditive (onda opisuje); ciljevi kombinovanja uvek opisuju.                                                       |
| `describe` |               | Uvek opisuje — blok preusmeravanja se potpuno preskoči; model koji je korisnik odabrao uvek odgovara.                                                                                                                                                                                          |
| `reroute`  |               | Prisilno preusmeravanje: čuvar modela sa akreditivima se zaobilazi. Čuvar akreditiva za preusmeravanje-**cilj** i dalje važi — kada ne postoji upotrebljivi vizuelni cilj, zahtev se prebacuje na opisivanje tako da sirove slike nikada ne dosegnu backend koji radi samo sa tekstom (#8430). |

Prisilni modovi prekinu **pre** nego što se pokrene automatska heuristika; ponašanje `auto`
je identično bajt po bajt sa pre-PR-1 zaštitom.

#### Opseg API ključeva (`visionBridgeKeyScope.ts`)

Kada API ključ pozivaoca ograničava `allowedConnections`, kvote
(`allowedQuotas`) ili modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most bira samo
preusmeravanje i opisivanje modela koje ključ može koristiti, na vezama koje ključ može
koristiti. Poziv za opisivanje tada uvek prolazi kroz OmniRoute samopovratnu petlju sa
`x-omniroute-self-loop-key-id` zaglavljem, tako da primajući chat zahtev
ponovo sprovodi politiku veze i modela tog ključa. `enforceApiKeyPolicy()`
poštuje to zaglavlje samo zajedno sa samopovratnim nosiocem, tako da može samo
sužavati pristup, a id koji se ne rešava se odbacuje.

Ako nijedan vizuelni model nije dozvoljen za ključ, put opisivanja se povlači i
zahtev prolazi nepromenjen, isto ponašanje kao onemogućena zaštita (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Zahtevi bez ključa, i ključevi bez ovih ograničenja, ponašaju se tačno kao
pre.

#### Prompt za opisivanje svestan zadatka (`modalityBridgeVisionTaskAware`)

Podrazumevano **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) dodaje
tekst **poslednje korisničke poruke** (skraćene na 500 karaktera) osnovnom
opisnom promptu, usmeravajući opis ka onome što je korisnik zapravo tražio
(codex-vision-proxy obrazac) i tražeći od vizionog modela da transkribuje
vidljiv tekst. Kada je zastavica isključena — ili nema korisničkog teksta — koristi se
osnovni prompt bez izmena.

Zahtev za opisivanje samog self-loop-a koji je kompatibilan sa OpenAI (`callVisionModelSingle()`
u `visionBridgeHelpers.ts`) uvek zahteva `image_url.detail: "high"` —
bezuslovno, za svakog pozivaoca/providera, bez obzira na bilo koji signal klijenta.
Sampling sa niskim detaljima smanjuje tačnost OCR-a za tačno onaj zadatak
transkripcije teksta koji ovaj prompt zahteva, tako da sam poziv za opisivanje
uvek traži visoki detalj bez obzira na nivo detalja koji je prvobitni dolazni zahtev koristio. Ovo
uticati samo na unutrašnje telo zahteva za opisivanje; ne menja način na koji
OmniRoute prosleđuje `image_url.detail` pozivaoca na primarni zahtev —
ta podrazumevana vrednost se primenjuje odvojeno, i samo za otkrivene OpenCode klijente, u
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic wire-format grana samog self-loop-a za opisivanje nema polje `detail`
i nije pogođena ni jednom podrazumevanom vrednošću.

#### Ograničenje izlaza za opis (`modalityBridgeVisionMaxChars`)

| Ključ                          | Podrazumevano | Opseg             |
| ------------------------------ | ------------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`           | `0` ili 100–50000 |

`0` (podrazumevano) znači **bez ograničenja** — opis koji vraća
`callVisionModel()` se prosleđuje neizmenjen, čuvajući postojeće
ponašanje. Svaka vrednost u opsegu od 100 do 50000 skraćuje opis sa
`…` sufiksom pre nego što se ponovo spoji kao `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` u `src/lib/guardrails/visionBridge.ts`).
Povećajte ovo za zadatke OCR-a bogate detaljima gde downstream model treba
punu transkripciju; smanjite ga da ograničite korišćenje tokena na razgovorljivim
vizionim modelima. Polje na kontrolnoj tabli se nalazi na Naprednom panelu
Vizija taba (`modality-bridge-max-chars` u `ModalityBridgeVisionTab.tsx`) i
ograničava svaku vrednost između 1 i 99 na 100 dok ostavlja eksplicitnu `0`
nepromenjenom — `0` je validna Zod vrednost sama po sebi
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a ne samo
"nepostavljena" podrazumevana vrednost.

#### Keširanje opisa (`modalityBridge/bridgeCache.ts`)

Keširanje u memoriji LRU + TTL za izlaze opisa, deljeno širom procesa.
Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` sa
okvirima dužine-prefiksa (bez sudara granica polja). Model komponenta je
**konfigurisani** most model, a ne model koji je zapravo odgovorio —
`callVisionModel` može interno da se vrati, a ključenje po pokušaju bi
fragmentiralo keš. Neuspešni opisi nikada se ne keširaju. Podešavanja:

| Ključ                           | Podrazumevano | Opseg   |
| ------------------------------- | ------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`        | —       |
| `modalityBridgeCacheTtlMinutes` | `60`          | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`         | 10–5000 |

#### Normalizacija udaljenih slika (self-loop opis/bas64 preuzimanje)

Kada most preuzima **udaljenu** sliku — Anthropic opis
self-call i claude-wire-format konverzija u base64
(`ensureBase64ImagesForClaudeWire`), oba putem
`fetchRemoteImageAsDataUri()` u `visionBridgeHelpers.ts` — rezultantni podaci
URI se prosleđuju kroz `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) pre nego što budu ugrađeni u zahtev
vizionog modela. Prevelike slike se smanjuju na **2048px dužu ivicu**
(što odgovara ograničenju veličine koje OpenAI/Anthropic već primenjuju na serveru),
što smanjuje upload bajtove/latenciju bez promene onoga što vizioni model vidi.
Promena veličine koristi `sharp`, učitan putem dinamičkog uvoza: na platformi gde
njegova nativna binarna datoteka ne može da se učita, `normalizeDataUri()` **nikada ne baca**
grešku — vraća se na prolaz originalnih bajtova, tako da putanja za opis/bas64-konverziju
uvek nastavlja da funkcioniše. Bajtovi koji nisu slike (preuzimanje koje nije vratilo
decodabilnu sliku) takođe se prosleđuju nepromenjeni. Ova normalizacija se
ograničava na slike koje most preuzima za svoj vlastiti self-call — nikada se ne
primenjuje na sirovi payload pozivaoca, u skladu sa principom mutacije samo uz
pristanak (Hard Rule #20).

#### Šema podešavanja + migracija

Novi `modalityBridge*` ključevi su Zod-validirani u `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*`, i
grupa `modalityBridgeAudio*` koja se koristi od strane Audio Bridge-a. Migracija
`141_modality_bridge_settings.sql` kopira postojeće nasleđene
`visionBridge*` vrednosti u odgovarajuće nove ključeve (idempotentno, nikada ne prepisuje
vrednost `modalityBridge*` koju je postavio operator); nasleđeni ključevi ostaju
prihvaćeni kao fallback za čitanje tokom jednog ciklusa izdanja.

#### Transparentnost zaglavlja + statistika

Odgovori transformisani opisom nose
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(izgrađeno od strane `buildModalityBridgeHeader()` u `modalityBridge/bridgeStats.ts`,
označeno od strane `withModalityBridgeHeader()` u `src/sse/handlers/chatHelpers.ts`).
Preusmereni zahtevi ne dobijaju **nikakvo** zaglavlje — payload je ostao nepromenjen i
zamena modela je već vidljiva u polju `model` tela odgovora.

`GET /api/modality-bridge/stats` (menadžerska autentifikacija, isti nivo kao
`GET /api/settings`) vraća u memoriji per-modalne brojače
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` i
`video`. `averageLatencyMs` koristi `latencySamples`, a ne sve pokušaje, kao
svoj imenilac; operacija bez merenja ne stvara uzorak od nula milisekundi.
`bridged` ostaje unazad kompatibilni alias za uspešne
konverzije; neuspešni pokušaji ga ne povećavaju.
Brojači se resetuju pri ponovnom pokretanju procesa po dizajnu
(telemetrija, ne računovodstvo).

#### Konfiguracija kontrolne table

Posvećena stranica kontrolne table je
`/dashboard/settings/modality-bridge`. Njene URL-adresabilne kartice `Vision`, `Audio`,
i `Video` čuvaju parametre upita dok menjaju vrednost `tab`.
Kartica Vision otkriva omogućavanje, režim, izbor modela (uključujući automatski
podrazumevani), zadatku svestan prompt, napredne limite za vreme/imaž/dužinu opisa/keš,
runtime
brojače i zaštićeni zahtev za uzorak. Kartica Audio je takođe aktivna: otkriva
omogućavanje, STT-samo izbor modela sa Auto, limite za vreme/max-clip, audio
brojače i `input_audio` test uzorka. Kartica Video je funkcionalna: izveštava
o runtime stanju FFmpeg/ffprobe — jedan od četiri eksplicitna UI stanja (`unknown` dok
je proba u toku ili nije mogla da se završi, `restricted` na ne-loopback
hostu kontrolne table gde se proba preskoči na klijentskoj strani, `unavailable` kada je
proba izvršena i potvrđeno je da nedostaje, ili `available` sa verzijama FFmpeg/ffprobe) —
čuva
omogućene/model/frame/video/limite za vreme, filtrira izbor modela na modele
koji podržavaju viziju, i otkriva video brojače.

Bivša Vision Bridge kartica pod AI podešavanjima je kompatibilna veza ka
novoj stranici; više ne poseduje drugu kopiju forme. Media Providers takođe
povezuje Image-to-Text i Speech-to-Text radne tokove sa odgovarajućim Modality
Bridge karticama bez uklanjanja postojećeg Speech-to-Text igrališta.

**Zaobilaženje prijema samopovezivanja:** kada poziv za opis prolazi kroz
OmniRoute-ov vlastiti `/v1` samopovezivanje (ne-standardni model provajdera),
pod-zahtev šalje
`x-omniroute-admission-bypass: internal` i autentifikuje se sa rešenim
samopovezivanjem — lokalni `sk_omniroute` sentinel u lokalnom režimu, ili
operaterom konfigurisani `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env ključ (#1350) tako
da `REQUIRE_API_KEY=true` implementacije i dalje mogu izvršiti poziv za opis. Zaobilaženje
se poštuje samo za te tačne akreditive, tako da eksterni klijenti ne mogu koristiti
zaglavlje da preskoče prijem.

Legacijski podrazumevani podaci se nalaze u `src/shared/constants/visionBridgeDefaults.ts`;
novi podrazumevani podaci za režim/zadatak/keš i reševač podešavanja se nalaze u
`src/shared/constants/modalityBridgeDefaults.ts`. Ograda otkriva
`deps` opciju konstruktora tako da testovi mogu injektovati lažne `getSettings` i
`callVisionModel` implementacije.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Presreće audio-izvorne chat zahteve pre nego što stignu do cilja koji nije
poznat da prihvata audio ulaz. Nikada ne preusmerava chat zahtev: audio delovi se
transkribuju kroz postojeći OpenAI-kompatibilni multipart endpoint, a
izabrani chat model nastavlja sa tekstualnim transkriptima.

Tok:

1. Reši `supportsAudio` kroz `getResolvedModelCapabilities()`. Eksplicitni
   metapodaci registra provajdera pobeđuju, zatim statički metapodaci modela, zatim
   sinhronizovani `modalities_input`. Deklarisana lista ulaza bez `audio` je `false`;
   nijedan dokaz o sposobnosti ostaje `null`. I `false` i `null` aktiviraju
   konzervativni most, dok `true` zaobilazi.
2. Reši `modalityBridgeAudio*` podešavanja i izdvoji delove audio
   iz svake poruke kroz zajednički `detectMediaParts()`
   detektor. Podržani oblici su OpenAI `input_audio`, `audio_url`, i
   `source.media_type: "audio/*"`. Ugnježdeni audio se detektuje za usmeravanje, ali ne
   se uklanja putem splice puta. Rad je ograničen sa `modalityBridgeAudioMaxClips`;
   kasniji delovi ostaju netaknuti.
3. Poštuj konfigurisan `provider/model`, ili dozvoli `selectAudioBridgeModel()` da prođe
   kroz `AUDIO_TRANSCRIPTION_PROVIDERS` u stabilnom redosledu kataloga i izabere prvi
   model sa upotrebljivim aktivnim akreditivom provajdera.
4. `callAudioTranscription()` konvertuje base64/data-URI audio u multipart
   `file`, ili preuzima udaljeni `audio_url` kroz javno-isključivo izlazno
   obezbeđenje sa DNS pinovanjem i granicom od 25 MB. Zatim POST-uje datoteku i izabrani
   model na lokalno `/v1/audio/transcriptions` samopovezivanje, autentifikovano sa
   `resolveSelfLoopBearer()`. Postojeća ruta transkripcije obavlja normalno
   pretraživanje akreditiva, upravljanje hlađenjem/ograničenjem brzine, i slanje provajdera.
5. Uspešni pozivi zamenjuju svoje delove sa `[Audio N]: <transcript>`. Pozivi
   se izvršavaju sa `Promise.allSettled`: pojedinačni neuspeh čuva taj originalni
   audio deo (#4012 ugovor). Ako svaki poziv ne uspe i cilj se dokaže
   `supportsAudio === false`, delovi postaju
   `[Audio N]: (nedostupno — nijedan STT provajder nije povezan)` (#8430 ugovor). Za
   nepoznati cilj (`null`), rezultat sa svim neuspesima ostaje netaknut. Dokaženi
   cilj samo sa tekstom bez upotrebljivog STT akreditiva dobija isti eksplicitni
   stub bez izdavanja mrežnog poziva.

Uspešni transkripti koriste procesom široku Modality Bridge LRU/TTL keš. Ključ
kombinuje audio referencu, stabilnu oznaku operacije `audio-transcription`, i izabrani STT model; neuspehi se nikada ne keširaju. Audio pokušaji ažuriraju
zajedničke `bridged`, `cacheHits`, `failures`, i `lastUsedAt` brojače.
Transformisani odgovori nose
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; netaknuti
zahtevi ne dobijaju segment Audio Bridge.

Runtime podešavanja su DB-podržana i Zod-validirana:

| Ključ                         | Podrazumevano | Opseg           |
| ----------------------------- | ------------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`        | —               |
| `modalityBridgeAudioModel`    | `""`          | Auto ili STT ID |
| `modalityBridgeAudioTimeout`  | `60000`       | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`           | 1–10            |

Zajednički keš ostaje pod kontrolom `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` i `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Presreće delove videa na najvišem nivou u Chat Completions `messages` i Responses
API `input` pre nego što se pozove cilj bez poznate podrške za nativni video.
Podržani oblici su `input_video`, `video_url`, `video_source`, HTTPS URL-ovi,
i `data:video/*;base64,...` data URI. Obični nazivi datoteka u tekstu se ne tretiraju
kao video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) upravlja prelazom zahteva,
proverom sposobnosti/politike, agregacijom po zahtevu i payload-om odgovora.
Rad po videu — akvizicija, keš celokupnog rezultata, opisivanje sekvence
okvira (koja spaja bilo koji audio transkript koji je naveo pozivač), i
metrike/prekid/čišćenje po pokušaju — je skriven iza `processVideoPart` u
`videoBridgePipeline.ts`, pozvan jednom po delu videa unutar `preCall` petlje.
Ta modul takođe definiše eksplicitne port granice `VideoMediaBrokerPort`
(akvizicija bajtova i ekstrakcija uzorkovanih okvira), `VideoAudioTranscriptionPort`
(spajanje audio transkripta koji je naveo pozivač sa uzorkovanim titlovima), i
`VideoDrilldownPort` (nasleđeni oblik sirovog skladišta). Proizvodni STT i zadržavanje
okvira su sastavljeni oko opisa porta kroz `createVideoSttAdapter` i
`createVideoDrilldownAdapter`; potonji koristi zajednički životni ciklus
neprozirnog handle-a.

Javni `/v1` put zahteva nikada ne uvozi ili poziva podproces. Udaljeni
video snimci se preuzimaju pod granicom od 50 MiB; inline base64 video snimci imaju
konzervativni limit od 36 MiB dekodiranog po videu tako da model/poruke/okvir
mogu ostati unutar javnog JSON limita za prijem zahteva od 50 MiB. Inline
procene dužine i dekodirane veličine se proveravaju pre alokacije. HTTPS je
obavezan na inicijalnom udaljenom URL-u i svakom preusmeravanju, koristeći postojeći
javni izlazni zaštitni zid sa DNS pinovanjem. Bajtovi zatim prelaze tačno unutrašnju
granicu `POST /api/modality-bridge/video/extract`. Ta ruta je i
`LOCAL_ONLY` i `SPAWN_CAPABLE`, prihvata samo autentifikovani,
pouzdani loopback zahtev po procesu, i nikada ne prihvata URL, putanju do datoteke,
izvršnu datoteku ili listu argumenata. API pipeline za veličinu tela i
inkrementalni čitač tela rukovaoca nezavisno sprovode limit ulaza brokera od 50 MiB.
Njegova ograničena red čekanja pokreće jednu ekstrakciju u isto vreme, dozvoljava
četiri čekajuća posla, i postavlja limit čekajućeg ulaza na 100 MiB.

Unutar brokera, `ffprobe` čita privatnu lokalnu datoteku; fiksni format
lista dozvoljenih izuzima formate plejlista i manifest. Za dozvoljene MOV-familije
kontejnere, spoljne MOV reference podataka ostaju onemogućene po defaultu, i
fiksna komanda se ne uključuje u njih. I `ffprobe` i `ffmpeg` koriste
`file`-samo protokol bele liste, jednu nit, fiksne nizove argumenata, bez shell-a,
i izvršne datoteke rešene iz `PATH`. Priključene slike pokrivača nisu
playable kandidati. Svi playable stream-ovi moraju zadovoljiti limite, i
eksplicitni podrazumevani stream je preferiran pre determinističkog najnižeg indeksa
fallback-a. Video snimci su ograničeni na 600 sekundi, 8,192 piksela po dimenziji, i
33,554,432 izvornih piksela. FFmpeg uzima 1–16 srednjih JPEG okvira, smanjuje
dugu ivicu na najviše 1,024 piksela bez povećanja manjih ulaza, i
nikada ne prima URL. Uzimanje uzoraka je `uniform` po defaultu. Opcione
`scene_aware` i eksperimentalne `segment_aware` politike izvode jedan dodatni
fiksni FFmpeg prolaz preko već validiranog lokalnog stream-a, biraju ograničene
`showinfo` vremenske oznake scena, i deterministički se vraćaju na iste
uniformne sredine u slučaju neuspeha detektora, isteka vremena, neispravnog izlaza,
ili praznog skupa kandidata. Segment-aware režim alocira uzorke sredine proporcionalno
validiranim vremenskim intervalima scena; segment-aware dokazi i fallback ponašanje su
detaljno opisani u nastavku. Teška granica od 16 okvira se
primenjuje nakon selekcije u svakoj politici. Kada scena-svesni zahtev ima samo
budžet od jednog okvira, koristi uniformnu sredinu aktivnog celog videa ili fokusa
prozor i izveštava `policyEffective: uniform`: jedan izabrani okvir scene
ne može sačuvati oba vremenska kraja. Pozivač može opcionalno pružiti
ograničen fokus prozor (`start`/`end` sekunde); granice su ograničene na trajanje
medija, obrnuti ili neograničeni prozori se odbacuju, i sve politike uzorkovanja
se sprovode samo unutar normalizovanog intervala. Rezultantni
prozor je uključen u metapodatke uzorkovanja i u prefiks neproverenog opisa
tako da dolazni modeli mogu razlikovati fokusirani izvod od pune
vremenske linije.

Fokus na semantičke titlove je posebno, eksplicitno podešavanje. Podrazumevani `full`
analitički režim čuva postojeći okvir prompta i nikada ne prosleđuje tekst zahteva
modelu titlova. U `focused` režimu, most čita samo najnoviji
ne-prazan korisnički napisani `text`/`input_text` iz iste Chat ili Responses
kontejnera, normalizuje ga na NFC, sruši kontrolne karaktere i razmake,
i ograničava ga na 500 Unicode kodnih tačaka. Prazan rezultat se vraća na
tačno `full` prompt. Koristan nagoveštaj se serijalizuje kao JSON u
posvećenom bloku neproverenog korisničkog konteksta i može samo prioritizovati
vidljive detalje; ne može nadmašiti poseban upozorenje protiv praćenja
instrukcija vidljivih ili čujnih u mediju. Tekstualni fokus nikada ne inferira
`start`/`end` ili menja
temporalni uzorkivač.

#### FU-07 strukturni segment dokazi

`segment_aware` koristi jedan ograničen pre-analitički prolaz preko već validiranog lokalnog video toka. Fiksni lanac filtera prvo skalira na najviše 320 piksela širine, detektuje promene scena i zamrznute intervale, a zatim uzima uzorke na 1 frejm u sekundi za zamućenje, prosečnu lumu i prostorne/temporalne informacije. Prolaz je ograničen na 600 strukturnih uzoraka, jedan FFmpeg/filter nit, isti `file`-samo protokol i dozvoljene kontejnere, granicu izlaza procesa od 1 MiB, i najviše 30 sekundi unutar zajedničkog abort/deadline brokera. Nikada ne prihvata komandu, filter, putanju ili URL iz zahteva.

Strukturne vrednosti su deterministički uzorci dokaza, a ne semantičko razumevanje videa. Ne inferiraju subjekte, akcije, titlove, govor ili nameru korisnika. Granice scena i zamrzavanja formiraju segmente; pokrivenost zamrzavanja, zamućenje, osvetljenje, prostorna detaljnost i temporalna promena samo utiču na to kako se postojeći budžet od 1–16 frejmova raspodeljuje. Potpuno zamrznut segment je ograničen na jedan frejm, dok se nezamrznuti segmenti takmiče za preostali budžet. Kada granice nadmaše frejmove, zadržava se uniformna pokrivenost vremenske linije tako da brzi rani rezovi ne mogu sakriti dugi segment. Granice scena unutar 1-sekundne analitičke rezolucije granice zamrzavanja se spajaju.

Nedostajući filteri, neispravni/prazni dokazi, greška detektora ili ograničeno vreme pre-analize otvaraju se prema tačnoj uniformnoj srednjoj politici. Abort pozivatelja ili rok brokera ne otvaraju se: prekidaju podproces u toku, sprečavaju kasniju ekstrakciju frejmova, a privatno privremeno stablo se uklanja u `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generiše determinističke stvarne FFmpeg
fiksacije za post-dedup titlovanje, gustu alokaciju budžeta za pokret, dokaze o zamućenju/osvetljenju/SI-TI, brze rezove sa dugim repom i lažne pozitivne rezultate postepene fade. Beleži vreme zida pre-analize i, gde je `/usr/bin/time` dostupno, CPU deteta i vrh RSS. Njegove provere kvaliteta su samo strukturni orakuli. Kvalitet stvarnog modela titlova ostaje `HOLD` jer ovaj uređaj nema ovlašćeni krajnji tačku ili zamrznutog sudiju. Monetarne uštede takođe ostaju `HOLD` osim ako `--caption-cost-per-call-usd` ne obezbedi eksplicitnu pozitivnu procenu po pozivu; skripta nikada ne fabricira ni jedan rezultat.

Svaki frejm je ograničen na 4 MiB, svi sirovi frejmovi zajedno na 23 MiB, a serijalizovani odgovor brokera na 32 MiB. Privatni privremeni direktorijum se uklanja u `finally`. OmniRoute ne bundluje FFmpeg i ne prihvata prilagođenu putanju izvršnog fajla. Pre titlovanja, most primenjuje konzervativni vizuelni deduplifikacioni prolaz: svaki JPEG se smanjuje na 16×16 grayscale bafer i upoređuje se samo sa poslednjim zadržanim frejmom. Za traženi budžet titlova iznad jednog frejma, ekstrakcija obezbeđuje
ograničeni skup kandidata do dvostruko tog budžeta i nikada više od 16 frejmova. Traženi limit se primenjuje samo nakon deduplifikacije, pri čemu se prvi i poslednji izabrani kandidati čuvaju tokom konačnog pročišćavanja kada je budžet najmanje dva. Verzijska
`grayscale-16x16-mean-cells-v2` politika koristi veći od prosečnog luma delta i
odnos ćelija sličica čija je normalizovana delta najmanje 0.05. Prag za duplikate je konstantan 0.04, izabran zbog predvidljivosti, a ne izložen kao podešavanje u vreme izvršenja. Ovaj sekundarni
signal visokog kontrasta čuva male pokrete i promene vidljivog teksta koje upoređivanje samo sa prosekom može sakriti. Greške komparatora ili dekodera se otvaraju i zadržavaju pokrivenost. Izlazni metapodaci razdvaja ekstraktovane kandidate, uspešno korišćene frejmove i vizuelne duplikate koji su odbijeni.

Eksplicitno označeni deo videa može zatražiti vremenski označen kontakt list. Most gradi najviše 4-kolumnu, 16-frejm JPEG mrežu. Svaka ćelija od 512 piksela upisuje svoj izvorni vremenski pečat u visoko-kontrastnu donju traku, dok isti vremenski pečati ostaju u tekstualnim metapodacima za kasniju asocijaciju i reviziju. Kompletan JPEG ostaje ograničen na 32 MiB. Ako `sharp` ne može da dekodira ili sastavi mrežu, most se vraća na pojedinačne JPEG frejmove; abort klijenta se i dalje propagira kroz operaciju lista.

Dokazi o promociji su namerno odvojeni od sintetičkog sastava mikrobenchmarka. `scripts/perf/video-bridge-contact-sheet-eval.ts` definiše shemu verzionog A/B uređaja za stvarne OpenAI-kompatibilne vizione modele. Mera izveštava o tokenima koje je prijavio provajder, end-to-end latenciji zida (uključujući sastavljanje lista), broju poziva modela i očuvanju činjenica definisanih manifestom. Sirovi odgovori modela se ne upisuju u izveštaj; samo SHA-256 sažeci i usklađeni ID-ovi činjenica se čuvaju. Uređaj ne pravi mrežne ili plaćene pozive modelu osim ako nije prosleđen `--execute-real` i konfigurisan `--model`, `OMNIROUTE_BASE_URL` i `OMNIROUTE_API_KEY`. Bez tog eksplicitnog stvarnog izvođenja, njegov mašinski čitljiv presud ostaje `HOLD`; mere sintetičkog tereta/broja poziva same nisu dokazi o promociji.

Odvojeni `scripts/perf/video-bridge-promotion-eval.ts` koristi FU-07 ili
FU-09 posmatranja. Prihvat promocije zahteva svih osam sintetičkih scenarija plus sanirani stvarni isječak, najmanje tri mjerene ponavljanja po ulozi i slučaju, svih deset deklarisanih metrika, sažetke zamrznutih medija/prompt/ očekivanih činjenica/podešavanja, jedinstvene ID-ove posmatranja i verifikovani zasijani A/B redosled. Potvrda izvršenja vezuje sažetak korpusa, tačan SHA kandidata i reviziju modela. Nedostajući ili nevažeći merenja ostaju `HOLD`, uključujući CPU iznad 30 s, vrh RSS iznad 512 MiB ili pre-analizu iznad 30 s. Ovo su granice za prihvatanje dokaza, a ne nova garancija za sprovođenje RSS u vreme izvršenja.

FU-07 захтева најмање 98% задржавања квалитета и p95 латенцију не већу од 1.2x
основне вредности, плус или 0.05 апсолутно уравнотежено побољшање средњег
повратка на случајеве при еквивалентним позивима за описе, или најмање 10%
мање средњих позива за описе после дуплирања. FU-09 захтева најмање 0.85
квалитета, 95% задржавања, 20% смањења p95 латенције и 10% смањења
токена. Губитак критичних факата, усаглашеност убризгавања или
недостајућа употреба спречавају промоцију. Једно извршење не може
промовисати ништа: `--previous-report` потврђује два различита,
непреклапајућа, узастопно подобна извршења исте политике/модела
ревизије/кандидата/корпуса. Експеримент узорковања не може потврдити
експеримент контакт-табле.

Прикупљачи треба да оцене одговоре у меморији и сачувају `responseDigest`
плус метрике и обавезе посматрања, никада текст одговора. Потрошач такође
чита легатне сирове опсервације, али никада не копира тај текст у своје
извештаје. Тачно један од `responseDigest` или `rawResponseText` се
прихвата за сваку опсервацију. Верзионисана дозвола остаје празна са
непомичним подразумеваним `hold`. Подобан унос захтева своју референцу
доказа, политику, ревизију модела, тачан кандидат SHA, манифестни
дигест и два различита ID извршења; конфликтни контексти се одбацују.
Ови метаподаци су уговор о ревизији, а не доказ да референтна датотека
садржи истинска мерења. Прегледајте стварне рачуне пре него што
додате било који унос. Статистички крај управљања и Видео контролна
табла откривају конзервативну спремност. Конфигурисани алијас модела
сам по себи не успоставља његову ревизију или текући кандидат SHA, тако
да тренутна контролна табла извештава `HOLD` уместо да поново користи
подобност из другог контекста извршења. Јасно експериментално
избор остаје одвојен од промоције; ниједан подразумевани неће бити
аутоматски промењен.

Позиватељи могу прикључити опционални `transcript.cues` низ на
подржани видео део када већ поседују усаглашен текст. Сваки знак
мора носити `text`, коначан `start`/`end` интервал унутар
испитиваног трајања, и белу листу `source` (`client`, `embedded`,
или `audio-bridge`); `confidence` подразумевано износи `1` и
мора остати између `0` и `1`. Тачно дуплирани знакови се
смањују. OmniRoute никада не започиње транскрипцију из ових
метаподатака: валидирани знакови се копирају у описани резултат
са извором, поверењем и интервалом, и приказују се као
неповерљиве опсервације поред описа оквира. Неважећи,
изван опсега, или текст без порекла се одбацује уместо да
буде смешан у ток описа. Обе канале транскрипта у телу
захтева нормализују испоручено порекло на `client`, укључујући
само-утврђене `embedded` или `audio-bridge` ознаке. Само
адаптер у власништву сервера може доделити те поверљиве
ознаке преко аргумента само-кода `trustedSource`; поље
JSON захтева не може достићи тај аргумент. Текст транскрипта
остaje неповерљиви садржај из медија, без обзира на његово
порекло, и никада не сме одредити овлашћење.

Напредни позиватељ може обезбедити `audioTranscript` траку
за исти видео; она се третира као текст који је обезбедио
клијент, а не доказ о транскрипцији сервера. Спојна
шевка покреће визуелне и аудио опсервације под
једним роком и сигналом за прекид, наређује их на
заједничкој временској линији, смањује тачна дупликате,
и извештава делимичан резултат када само једна страна
успеха. Неважећи `audioTranscript` деградира на тај делимичан
резултат — визуелни опис се чува, а аудио грана
записује санитизовани код грешке — уместо да не успе
цео видео. По-грани доступност, делимична ознака,
и санитизовани кодови грешака се чувају у описаном
резултату, у метаподацима за заштиту (`audioFusionRuns`/
`audioFusionPartials`/`audioFusionFailureCodes`), у метаподацима
резервне меморије, и у бројаčима спајања. Подразумевана
путања Видео Бриджа не позива говор у тексту
или не преузима другу копију медија; без те експлицитне
траке, остаје само видео.

**Задржавање транскрипта (#12150 P1).** Ово се аутоматски
примјењује кад год Видео Бридж (сам по себи опција)
изврши транскриптни знак — не постоји одвојена
ознака за задржавање. Када захтев изврши било који
транскриптни знак (позиватељем декларисан `transcript`
или спојени `audioTranscript`), заштитна ограда га
означава као `videoBridgeObserved` и производи
редиговану сенку видео описа — идентичан приказ
у којем је сваки знак слободног текста замењен
са `[redacted-video-transcript]`, састављен заменом
структурног поља знака пре него што се низ састави
(никада парсирањем поравнатог текста, тако да ниједан
садржај знака — противнички или обичан, укључујући
тела која садрже `]` као што су `[inaudible]`/`[music]`
— не може опстати). Персистирано тело захтева
замењује сваку текстуалну компоненту изведену из
видеа за ту редиговану сенку, усклађену по
једнакости садржаја; `fullText` анкор се поново чита
из завршеног пред-захтевног терета заштитне ограде,
тако да се подударање и даље успева након каснијих
ланчаних заштитних ограда (PII и маскирање
акредитација, приоритети 10/95) преписују текст
описа на месту и након системског упита/преноса/
убrizгавања меморије преобликују низ порука. Тело
послато узводно моделу остаје непромењено. Опсервација
захтева такође не попуњава трајну Меморију (обе
екстракције из захтева и одговора се прескачу),
тако да одговор модела не може одразити текст
транскрипта у Меморији.

**Сирови видео поља (#12430).** Када је мост
омогућен и подршка за нативни видео је непозната
или одсутна, дефинисана поља `transcript`/`audioTranscript`
такође активирају `videoBridgeObserved`, чак и након
неуспеха описивања или `maxVideos` лимита. `null`
и празни низови се рачунају; одсутна поља и
не-видео метаподаци не. Задржане копије редигују
та поља или изостављају захтев, а кешеви/
Меморија се заобилазе.

Na tim alternativnim putevima, validni pozivi postaju podržani `text`/`input_text` delovi umesto nestandardnih polja provajdera. Oba traka koja su dostavljena u zahtevu ostaju nepouzdane `client` opservacije, uz eksplicitno upozorenje da video nije opisan i da vremenski oznaci nisu verifikovani u odnosu na medij. Postojeći budžeti od 256 cue/64-KiB ukupno i po cue-u primenjuju se na obe trake zajedno; vremenski oznaci moraju stati u brokerovih 600 sekundi i bilo koji dostavljeni fokus prozor. Nevalidne trake se odbacuju, ne prosleđuju se kao proizvoljan tekst; validni brat može i dalje biti korišćen osim ako njihov kombinovani budžet nije premašen. Null/prazna polja ne dodaju tekst. Ova alternativna opcija ne dodaje nikakvo preuzimanje medija ili transkripciju. Polja za proširenje transkripta se uklanjaju iz alternativnog video nosioca i njegovih `video_url`/`source` objekata. OpenAI wire allowlist ostaje stroga; nepoznati-nativni video nosioci ostaju dostupni, a poznati ciljevi samo za tekst zadržavaju sigurne oznake. Strukturalne senke redakcije štite dodatni tekst transkripta, dok originalni zahtev koji poseduje pozivatelj ostaje nepromenjen. Nativno podržani ciljevi i onemogućeni mostovi zadržavaju svoje postojeće ponašanje za zaobilaženje.

Dodatne zadržane kopije koriste isti signal posmatranog zahteva. Siromašni pre-guardrail snapshot klijentskog zahteva, u memoriji čekajući zahtev, i rana odbijena loga zahteva strukturno zamenjuju polja transkripta u video delovima; string prompti sintetizovani od strane faza pipeline-a i kontekstualnog predavanja su redigovani na sinku sa sačuvanim telom zahteva. Sačuvani marker `video_content_removed` čini da `previous_response_id` nastavak ne uspe zatvoren umesto da rekonstruiše tekst koji je namerno odbacen. Ako posmatrani zahtev izgubi svoju senku redakcije po delu pre logovanja, ili čak jedna od nekoliko video senki ne uspe da se poklapa nakon kasnijih mutacija zahteva, sačuvano telo zahteva se potpuno izostavlja umesto da zadrži delimično redigovani transkript.

Za posmatrani zahtev, odgovor modela može citirati bilo koji deo transkripta bez strukturirane granice cue-a. Njegov sačuvani log poziva `responseBody` se stoga zamenjuje markerom za izostavljanje; detaljni artefakt pipeline-a (koji može uključivati gornje/klijentske delove i delove strima) se ne čuva. Semantički, idempotentni i kešovi za ponavljanje rezonovanja zaobilaze čitanja i pisanja za taj zahtev. Zahtev provajdera i klijentom vidljiv odgovor ostaju nepromenjeni. Rani keepalive bajtovi se ispuštaju iz privremenog bafera kada je detaljni artefakt izostavljen. Kirovo nepravilno upozorenje na EventStream izveštava samo o broju bajtova u payload-u, nikada o njegovom sadržaju ili sirovom greškom JSON parsera. Ovo ne tvrdi da je svaki nepovezani dijagnostički alat provajdera/plugin-a pregledan; širi pregled zadržanih sudova se prati u #11658.

Unutrašnji `/api/modality-bridge/video/drilldown` životni ciklus je odvojen, loopback/token-autentifikovani keš supstrat. Svaka operacija takođe zahteva kanonski neprozirni ID glavnog subjekta. Pre nego što se omogući pozivatelj u produkciji, mora izvesti taj ID iz autentifikovanog zakupca i nikada ne sme proslediti vrednost koju je izabrao klijent. Ključevi keša povezuju tog glavnog subjekta sa kanonskim sesijama i ID-evima video-reference, čuvaju samo njihove SHA-256-izvedene ključeve, i ograničavaju i čitanja i brisanje na istog glavnog subjekta. Keš čuva najviše 16 izvedenih JPEG okvira po unosu, ističe ih nakon deset minuta, i podržava ograničena `start`/`end` čitanja ili eksplicitno brisanje sesije.

Svaki glavni subjekt je ograničen na 16 unosa i 64 MiB kanonskih JPEG podataka. Ta ograničenja su nezavisna od globalnog plafona od 64 unosa/256 MiB: pritisak kvote glavnog subjekta izbacuje samo najređe korišćene unose tog glavnog subjekta pre nego što se razmatra globalno LRU izbacivanje. Istečeni unosi se uklanjaju iz oba glavna subjekta i globalnog računovodstva na aktivnost keša, dok otkazivanje i neuspeh validacije ne izvršavaju delimičnu zamenu.

Keš odbacuje nekanonski Base64, višak punjenja, ne-JPEG medije, nepravilne ili skraćene JPEG-ove, i JPEG-ove koji proizvode upozorenje tokom ograničenog punog `sharp` dekodiranja slike. Ponovo kodira svaku prihvaćenu sliku kao kanonski JPEG, izvodi širinu i visinu iz dekodiranih bajtova umesto da veruje poljima pozivatelja, i odbacuje sve završne poliglotne bajtove umesto da ih zadrži. Samo je ograničeni kanonski kompresovani bafer naplaćen obema kvotama. JSON wire limit uključuje Base64 prekomernu težinu za plafon od 32 MiB dekodiranog ulaza. Svaka
sačuvana derivacija beleži svoj validirani JPEG format/rezoluciju, politiku uzorkovanja,
verziju derivacije, vreme kreiranja, serverom izračunati hash sadržaja, i hash roditeljskog
reference plus hash roditeljskog sadržaja pouzdanog pozivatelja. Otkazivanje se proverava između asinkronih faza dekodiranja/hash-a pre atomskog komitovanja keša.

Proizvođač u produkciji ponovo koristi već izvedene broker okvire samo nakon uspešne vizuelne analize, bez drugog preuzimanja/ekstrakcije videa. Zahteva operatora `modalityBridgeVideoDrilldownEnabled=true`, strogo po delu `drilldown: true`, i autentifikovani ID zapisa API ključa. Klijentom deklarisane vrednosti glavnog subjekta/sesije nikada ne uspostavljaju vlasništvo. Bez sve tri uslove ne vrši hash, promena veličine ili zadržavanje dodatnih okvira. Neuspeh zadržavanja čuva upotrebljiv vizuelni odgovor. Zahtevi koji su odobreni zaobiđu keš rezultata celog videa tako da keširani rezultati nikada ne ponavljaju rukovanje.

Успешни JSON и SSE одговори излажу највише четири непрозирна хендла у ограниченом
`x-omniroute-video-drilldown` заглављу. Овлашћени прегледачи могу читати то заглавље
без ширења CORS политике порекла. Нови хендлови користе `v1.<32-byte random base64url
token>`, а регистар задржава само
њихове SHA-256 хешеве. Читач/парсер заглавља такође прихвата наследне 64-hex токене.
Аутентификовани јавни потрошач је
`GET /api/v1/video-bridge/drilldown?handle=...`, независно контролисан
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Експлицитно упориште false одузима
приступ чак и када је наследни `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env
резервни укључен. Производна задржавања имају аналогно наследно
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` резервно. Обе резервне опције су подразумевано искључене.

Потрошач извлачи власништво из аутентификованог кључа, примењује политику кључа и
враћа исти 404 за непознате, истекле и хендлове другог кључа. Прихвата
`variant=preview|standard|detail` (максимална JPEG димензија 320/640/1280, никада не увећана),
`limit=1..8` (или наследни `frames` алијас, никада оба), нулом базирану `page`, и опционалне
`start`/`end` секунде фокуса. Дупли
кључеви упита и обрнути фокус прозори се одбацују. Свакој враћеној варијанти припада хеш
њеног стварног садржаја и метаподатака о стварној резолуцији, повезаних са задржаним извором.
Варијанте се извлаче при читању, а не чувају као додатне задржане копије. JSON
одговор, укључујући Base64/envelope, је ограничен на 32 MiB; страница прекомерне величине враћа
413 и клијент мора затражити мање фрејмова. Читања проверавају отказивање око сваког
промене величине и поново проверавају валидност хендла пре него што врате. `DELETE` од стране власника је идемпотентно;
брисање или истек TTL ослобађа задржан извор и рачунање употребе.

Дељена продавница је локална за процес: хендлови истичу при поновном покретању и нису преносиви
између независних OmniRoute процеса. Статистике управљања излажу ефективну политику задржавања/
даљинског управљања и агрегиране задржане уносе/бајтове само, никада медије, референце,
идентитете или хендлове. Поставке видео панела показују те вредности и могу задржати
обе прелазне прекидаче. Ова документација о имплементацији није доказ о живој распореду или
промоцији; прихватање реалног модела се прати одвојено.

Фрејмови су потписани секвенцијално са конфигурисаним Видео моделом. Празан
Видео превазилази подешавање Визије; ако су оба празна, Визија
аутоматски бира ефективни модел способан за визију. Успешни натписи
замењују оригинални део са стабилним `[Video description:` префиксом који такође
означава текст као непоуздану медијску посматрачку и каже каснијим
моделима да не прате упутства пронађена у медију. Кључеви кеша за натписе фрејмова
укључују JPEG бајтове, упит, временску ознаку и ефективни модел; само успешни
натписи се кеширају. Кеш уноси задржавају стварни успешни модел произвођача,
укључујући резервни модел; мост извештава `mixed` када су различити фрејмови
произведени од различитих модела. Удар у кешу поново користи ту идентитет произвођача
уместо да га преименује као тражени план маршрутизације. Кеш целог видеа
је кључан за сваки унос који мења излаз — упит, ефективни
модел, политика узорковања, број фрејмова, режим семантичке анализе, SHA-256
отисак нормализованог фокуса, фокус прозор, `transcript`,
`audioTranscript`, и заставицу контакт листе — тако да промена било које од тих
димензија представља промашај кеша, никада застарелу поновну употребу. Верзија
политике визуелне дупликације, праг и ограничени број кандидата за фрејмове су такође експлицитни у
кључу кеша резултата и метаподацима; променом политике стога не може поново користити застарелу
опис целог видеа. Метап podaci кеша резултата v4 чувају режим и
отисак, никада сирови кориснички задатак. Метап podaci за заштиту извештавају и о
траженим и ефективним режимима анализе; тражени режим `focused` без
употребљивог корисничког текста се извештава као ефективно `full`.

Заштита извлачи сваку подржану видео компоненту, али не описује више од
`modalityBridgeVideoMaxVideos`. За циљ који је доказано
`supportsVideo === false`, неуспешни и прекомерни видеа постају експлицитни сигурни
текстуални маркери тако да ниједан сирови видео не преживи. Када је способност непозната, те компоненте
задржавају свој видео носач; било који резервни транскрипт следи горе наведено ограничено
претварање текста. Циљеви са `supportsVideo === true` заобилазе мост.
Сигнал за прекид захтева клијента преноси се кроз преузимање, брокерску ред,
подпроцесе и позиве за натписе; прекиди се заустављају између видеа и никада не успевају да отворе
за сирове медије.

Подешавања у раду су подржана од стране БД и верификована од стране Зод-а:

| Кључ                                | Подразумевано | Опсег / понашање                                                                                      |
| ----------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`       | Опционално у раду, укључивање                                                                         |
| `modalityBridgeVideoAnalysisMode`   | `"full"`      | `full` чува опште натписе; `focused` користи ограничени, непоуздани контекст последњег корисника      |
| `modalityBridgeVideoModel`          | `""`          | Наслеђује модел Визије Бриджа                                                                         |
| `modalityBridgeVideoFrameCount`     | `8`           | 1–16                                                                                                  |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`   | `uniform`, `scene_aware`, или пропорционални `segment_aware`; неуспех детектора се враћа на `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`           | 1–4                                                                                                   |
| `modalityBridgeVideoTimeout`        | `120000`      | 1000–120000 ms                                                                                        |

Legacy sačuvane vrednosti vremena za video iznad 120 sekundi su ograničene na
rok brokera; nova podešavanja iznad tog limita se odbacuju.
`GET /api/modality-bridge/video/runtime` zahteva pouzdanu pečatiranu loopback
lokalizaciju pre autentifikacije ili runtime ispitivanja, zatim zahteva
menadžersku autentifikaciju. Vraća samo `available`, sanirane verzije FFmpeg/ffprobe,
i fiksni razlog kada runtime nije dostupan. Interni ekstrakcioni endpoint nije
javna upload API: zasićenje reda vraća `503` plus `Retry-After`, prekid veze
vraća `499`, a fiksni rok brokera vraća `504`. Konvertovani odgovori dodaju
`video->text;model=<visionModel>;parts=<videos>` u centralni
`x-omniroute-modality-bridge` header bez uklanjanja Vision ili Audio segmenata.

### PII Masker (`piiMasker.ts`)

Radi na **oba** stepena.

- **`preCall`** klonira payload, prolazi kroz `system`, `messages`, `input` i
  `prompt` (uključujući obične string stavke), i primenjuje `processPII()` (iz
  `@/shared/utils/inputSanitizer`) na string `content`/`text` polja. Kada
  `PII_REDACTION_ENABLED=true`, otkriveni PII se rediguje u izlaznom
  payload-u. Ovo je nezavisno od `INPUT_SANITIZER_MODE` (koji samo kontroliše
  politiku injekcije prompta). Kada je redigovanje isključeno, poziv beleži
  brojeve detekcije bez prepisivanja sadržaja.
- **`postCall`** duboko klonira odgovor, pokreće `sanitizePIIResponse()` plus
  masker oblika Responses-API (`maskResponsesOutput` — pokriva
  `output_text` i `output[].content[].text`). Ako dođe do bilo kakvog
  redigovanja, izmenjeni odgovor zamenjuje original.

Zaštitna ograda nikada ne blokira; samo anotira (`meta.detections`,
`meta.redacted`) ili prepisuje.

### Prompt Injection (`promptInjection.ts`)

Otkriva neprijateljske strukture u sadržaju koji je obezbedio korisnik i sprovodi
konfigurisanu politiku. Ponašanje se upravlja promenljivim okruženja i opcijama
konstruktora:

| Podešavanje  | Env var                                                                                               | Podrazumevano | Efekat                                                                                                                                                                                           |
| ------------ | ----------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Omogućeno    | `INPUT_SANITIZER_ENABLED`                                                                             | `true`        | Kada je `false`, zaštitna ograda se kratko prekida.                                                                                                                                              |
| Mod          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`        | Politika injekcije: `block`, `warn`, ili `log`. (`redact` je prihvaćen za unazad kompatibilnost, ali ne uklanja tekst injekcije; zahtev za prepisivanje PII kontroliše `PII_REDACTION_ENABLED`.) |
| Prag blokade | `blockThreshold` opcija / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`        | Minimalna ozbiljnost potrebna za blokiranje. Srednja je samo za posmatranje po podrazumevanju.                                                                                                   |

**Prioritet moda** (`getMode`): pozivatelj `options.mode` →
`INJECTION_GUARD_MODE` **DB feature-flag override** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Dakle, override na dashboard-u pobediće nad promenljivim okruženja, tako da UI za Feature Flags kontroliše aktivnu zaštitu uživo (bez ponovnog pokretanja). Čitanje iz DB-a je fail-safe:
ako dođe do greške, zaštitna ograda se vraća na ponašanje zasnovano na okruženju, a kada nije postavljen override, ponašanje je identično samo rešenju zasnovanom na okruženju.

Izvori detekcije:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (deljeni detektor
   set korišćen na drugim mestima u pipeline-u).
2. Ugrađeni `DEFAULT_GUARD_PATTERNS` (trenutno `system_override_inline` i
   `markdown_system_block`, oba `high` ozbiljnosti).
3. Opcioni `customPatterns` prosleđeni putem opcija konstruktora (stringovi, regex,
   ili `{ name, pattern, severity }` zapisi).

Kada `mode === "block"` **i** barem jedna detekcija ispunjava prag
ozbiljnosti, `preCall` vraća `{ block: true, message: "Zahtev odbijen:
otkriven sumnjiv sadržaj" }`. U `warn`/`log` modovima zaštitna ograda beleži ali
dozvoljava poziv. Deljeni pomoćnik `evaluatePromptInjection()` je takođe izvezen
za pozivače koji trebaju da procene promptove bez prolaska kroz registar.

**Granica skeniranja (v3.8.20):** detektor samo ispituje **prvih 16 KB**
spojenog teksta prompta — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajta) u
`src/shared/utils/inputSanitizer.ts`. I `detectInjection()` i
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` pre pokretanja
petlje uzorka. Direktive injekcije se nalaze blizu vrha ulaza, tako da ovo
ograničava CPU/GC regex na višestotinama-KB payload-ima bez slabljenja detekcije (uporedi
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Radi na **oba** stepena, poslednji u podrazumevanom lancu (prioritet `95`). Rediguje
poznate obrasce API-ključeva / tajnih tokena iz izlaznog payload-a (sadržaj poruke,
argumenti poziva alata, rezultati alata) **i** odgovora provajdera, tako da
akreditiv nalepljen u prompt (ili ponovo prikazan od strane rezultata alata) ne bude otkriven
gore navedenom provajderu ili nazad klijentu.

- **Samo uz pristanak**, ista konvencija kao i PII redakcija (Stroga pravila #20-povezana):
  onemogućeno osim ako je `settings.credentialRedactionEnabled === true` **ili**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kada je isključeno, zaštitna mera je bez efekta —
  nikada ne blokira i nikada ne prepravlja.
- `redactCredentials()` prolazi kroz celu strukturu podataka/odgovora (`walkValue()`,
  sigurno za prototipne zagađenja, sigurno za cikluse putem `WeakSet`) i zamenjuje podudaranja sa
  `[REDACTED:<type>]` oznakom, klonirajući samo grane koje su se zapravo
  promenile.
- `CREDENTIAL_PATTERNS` pokriva ključeve LLM provajdera (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokene (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ključeve za plaćanje (Stripe, Square), ključeve za oblak
  (AWS pristupni ključ, Twilio, SendGrid, Mailgun), privatne ključeve / JWT-ove,
  veze sa podacima koje sadrže akreditive (`mongodb://user:pass@...`, itd.), i
  generički obrazac `Authorization`/`x-api-key`/`api-key`/`apikey`
  zaglavlja. Ključevi u obliku zaglavlja (`authorization`, `x-api-key`, `api-key`,
  `apikey`) se rediguju strukturno (samo vrednost, prefiks šeme kao
  `Bearer `/`Basic ` očuvan) umesto putem generičkog tekstualnog regex-a.
- Zaštitna mera nikada ne blokira; samo prepravlja (`modifiedPayload` /
  `modifiedResponse`) i anotira (`meta.credentialsRedacted`, `meta.count`).

Regresiona zaštita: `tests/unit/credential-masker-guardrail.test.ts`.

## Основни уговор (`base.ts`)

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
  block?: boolean; // true тренутно прекида ланац
  message?: string; // приказује се приликом блокирања
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // враћа га preCall ради измене захтева
  modifiedResponse?: TValue; // враћа га postCall ради измене одговора
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

Заштитни механизам сигнализира „без измена“ враћањем вредности `void`, `{}` или
`{ block: false }`. Враћање `modifiedPayload`/`modifiedResponse` замењује
вредност која се прослеђује кроз ланац наредним заштитним механизмима.
`signal?: AbortSignal` преноси животни циклус позиваоца у заштитне механизме. Прекид захтева је намерни fail-open изузетак: медијски мостови заустављају рад и обављају чишћење без враћања необрађеног медијског садржаја одредишту за које се зна да га не подржава.

## Регистар (`registry.ts`)

Синглтон `guardrailRegistry` излаже:

- `register(guardrail)` — додаје заштитни механизам (или га замењује на основу нормализованог назива) и
  поново сортира према растућој вредности `priority`.
- `clear()` / `list()` — административне помоћне функције.
- `runPreCallHooks(payload, context)` — пролази кроз активне заштитне механизме, прослеђује
  payload кроз `modifiedPayload` и зауставља се на првом `block: true`.
- `runPostCallHooks(response, context)` — исти ток на страни одговора.
- `resetGuardrailsForTests({ registerDefaults })` — брише стање и опционо
  поново региструје подразумеване механизме ради чисте изолације тестова.

Оба покретача враћају `{ blocked, payload|response, results, guardrail?, message? }`,
где је `results` низ записа `GuardrailExecutionResult` који садрже
поља `blocked`, `skipped`, `modified`, `error` и `meta` за сваки заштитни механизам,
што је корисно за праћење.

### Онемогућавање заштитних механизама по захтеву

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` обједињује
листу назива заштитних механизама без дупликата које треба прескочити за тренутни
захтев. Извори (сви су опциони и сви се обједињују):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` у телу захтева (на највишем нивоу)
- `metadata.disabledGuardrails` у телу захтева
- Заглавље `x-omniroute-disabled-guardrails` (или застарело
  `x-disabled-guardrails`)

Вредности могу бити низови стрингова или стринг са вредностима раздвојеним зарезима; називи се
нормализују на мала слова у kebab-case формату (`pii_masker` → `pii-masker`). Резултат
се прослеђује преко `context.disabledGuardrails` регистру, који прескаче
одговарајуће заштитне механизме (`skipped: true` у `results`).

## Редослед извршавања

За сваки захтев који пролази кроз `src/sse/handlers/chat.ts` и
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` саставља листу за прескакање на основу API кључа, тела
   и заглавља.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` покреће заштитне механизме према растућем
   редоследу приоритета:
   - Онемогућени заштитни механизми се евидентирају као `skipped`.
   - `preCall` сваког заштитног механизма може да измени корисни садржај помоћу `modifiedPayload`.
   - Први `block: true` прекида ланац, а обрађивач враћа
     одговор о одбијању од стране заштитног механизма.
3. Корисни садржај (који је можда измењен) прослеђује се комбинованом рутирању и
   отпремању узводном сервису.
4. Након састављања одговора, `guardrailRegistry.runPostCallHooks(...)`
   покреће исти ланац над одговором. `block: true` у овој фази одбацује одговор
   узводног сервиса.

Заштитни механизми који баце изузетак евидентирају се са `error: <message>` и бележе путем
`logger.warn`, али се ланац наставља — систем је намерно пројектован да настави рад у случају грешке.

## Конфигурација

Променљиве окружења које читају уграђени заштитни механизми:

| Променљива                            | Користи је              | Ефекат                                                                                                                 |
| ------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Поставите на `false` да бисте потпуно онемогућили откривање.                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Политика за убризгавање: `warn`, `block` или `log`. Застарела вредност `redact` не мења текст убризгавања.             |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Режим заштите од убризгавања; такође DB заставица функције која **има предност** над променљивама окружења (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | Минимална озбиљност коју `MODE=block` одбија: `high` (подразумевано), `medium` или `low`.                              |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Застарели алијас за `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                 |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Када је `true`, PII подаци у захтеву се редигују (независно од режима за убризгавање).                                 |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (низводно) | Контролише понашање маскирања на страни одговора.                                                                      |

Заштитни механизми Modality Bridge-а читају конфигурацију у време извршавања из складишта
подешавања заснованог на бази података (`getSettings()`), а не из променљивих окружења. Примарни кључеви за Vision су
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` и
`modalityBridgeCacheMaxEntries`. Застарели
`visionBridge*` кључеви прихватају се само као документована резервна опција за читање током једног циклуса;
контролна табла уписује примарне кључеве. Подразумеване вредности и механизам за разрешавање резервних вредности
налазе се у `src/shared/constants/modalityBridgeDefaults.ts`, док су застареле
константе задржане у `src/shared/constants/visionBridgeDefaults.ts`.

Audio користи `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` и `modalityBridgeAudioMaxClips`, као и дељена
`modalityBridgeCache*` подешавања. Audio нема резервну подршку за застареле кључеве јер су ови
кључеви уведени са Modality Bridge шемом.

Video користи `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` и
`modalityBridgeVideoTimeout`, као и дељена `modalityBridgeCache*` подешавања.
Подразумевано је онемогућен јер су FFmpeg/ffprobe опционе оперативне
зависности, а описивање кадрова повећава кашњење и трошкове модела.

## Прилагођени заштитни механизми

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

Кораци:

1. Направите `src/lib/guardrails/myGuardrail.ts` који проширује `BaseGuardrail`.
2. Имплементирајте `preCall` и/или `postCall`.
3. Или га региструјте приликом увоза (додавањем из `registerDefaultGuardrails`) или
   позовите `guardrailRegistry.register(...)` током извршавања — регистар замењује
   сваки претходни заштитни механизам са истим нормализованим називом.
4. Додајте тестове у `tests/unit/` (постојећи примери:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Тестирање

Користите `resetGuardrailsForTests()` између тестова како бисте започели из познатог стања.
Проследите `{ registerDefaults: false }` да бисте започели са празним регистром и
регистровали само заштитне механизме који се тестирају. Vision Bridge прихвата убризгавање
зависности (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge излаже
еквивалентне тачке раздвајања за подешавања, могућности, избор STT модела, проверу
акредитива и транскрипцију. Тестови стога могу да провере оба тока без приступа бази
података или мрежи.

## Погледајте и

- `src/lib/guardrails/` — имплементација
- `src/shared/utils/inputSanitizer.ts` — дељени детектор на којем се заснивају
  откривање убризгавања упита и маскирање личних података
- `src/shared/constants/visionBridgeDefaults.ts` — подразумеване вредности за Vision Bridge и
  листа модела са принудним премошћавањем
- `src/shared/constants/modalityBridgeDefaults.ts` — дељене подразумеване вредности извршавања за Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ортогонални слој (прекидач кола, периоди мировања)
- `docs/reference/ENVIRONMENT.md` — потпуна референца променљивих окружења

## Покривеност рута заштитом од убризгавања и red-team тестирање (Фаза 8 · Блок D)

Заштита од убризгавања (`createInjectionGuard` / `withInjectionGuard`) покрива све руте
које прихватају корисничке упите. Поштује `INJECTION_GUARD_MODE` (подразумевано `warn` = само евидентирање;
`block` = враћа HTTP 400 `SECURITY_001`).

| Тип               | Руте                                                                                                                                                 | Подразумевани режим |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Текст (постојеће) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Генеративне       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Подаци            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

Издвајање текста (`extractMessageContents`) обухвата `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (сваке ноћи, `nightly-llm-security.yml`):** promptfoo проверава да свака рута блокира
OWASP-LLM корпус када је `INJECTION_GUARD_MODE=block`; garak покреће пробе (прескаче се без тајне).
`moderations` је укључен ради доследности — оператори у режиму блокирања могу га изузети путем
`resolveDisabledGuardrails`.

Ноћни ток рада (`.github/workflows/nightly-llm-security.yml`, cron + ручно
покретање) има два задатка:

- **`promptfoo-guard` (блокирајући)** — покреће `promptfoo eval -c promptfooconfig.yaml`
  са `INJECTION_GUARD_MODE=block`. Сваки супарнички случај (нпр. „игнориши сва
  претходна упутства…“, покушаји заобилажења ограничења у DAN стилу) потврђује да одговор садржи
  `error.code === "SECURITY_001"`, односно да је заштита заиста одбила захтев.
- **`garak` (саветодавни)** — покреће garak `--probes promptinject,dan,leakreplay`
  над локалном OmniRoute инстанцом (`http://localhost:20128/v1`). Условљен је
  тајном добављача (`PROMPTFOO_PROVIDER_KEY`); безбедно се прескаче и има суфикс
  `|| true`, тако да извештава без обарања CI процеса.

Покривеност помоћне функције заштите (`createInjectionGuard` / `withInjectionGuard`)
обухвата сваку `/v1` руту која прихвата упите; текст упита се преузима из
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` помоћу
`extractMessageContents()` у `src/shared/utils/inputSanitizer.ts`.
