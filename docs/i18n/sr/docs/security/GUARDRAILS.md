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

## Ugrađene zaštitne ograde

Registracija automatski učitava šest zaštitnih ograda po prioritetu prilikom uvoza
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

Presreće zahteve koji sadrže slike usmerene ka **modelima bez vizije** i ili
preusmerava ceo zahtev ka modelu koji podržava viziju ili zamenjuje delove sa
slikama tekstualnim opisima koje proizvodi konfigurisani model vizije pre
uzlaznog poziva. Ovo omogućava provajderima koji rade samo sa tekstom da
transparentno obrade multimodalne podatke.

Tok:

1. Preskoči ako ciljni model već podržava viziju (osim ako se ne pojavljuje na
   listi obaveznih mostova `isVisionBridgeForcedModel`).
2. Izvuci delove slike putem `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), koji delegira na **ujedinjeni detektor
   medija** `detectMediaParts()` u `open-sse/utils/mediaParts.ts` — jedini
   izvor istine koji se deli sa filterom kompatibilnosti kombinacija.
   Ekstrakcija je dozvoljena samo za delove oblika na najvišem nivou
   koje `replaceImageParts` može ponovo spojiti (ugovor o ekstrakciji↔zameni):
   OpenAI `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, i Responses API `input_image`. Ugnježdene
   pogodbe i oblici koji su samo indikatori su materijal za filter kombinacija i
   nikada se ne izvode. Preskoči ako ništa nije pronađeno.
3. Reši runtime konfiguraciju putem `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): novi `modalityBridge*`
   ključevi podešavanja pobedjuju; legacijski `visionBridge*` ključevi ostaju
   **jednokratna rezervna opcija** (prozor za povratak). Preskoči pre bilo
   kakvog prolaska kroz medije kada je most onemogućen.
4. Selektor moda (`modalityBridgeVisionMode`, pogledajte tabelu ispod) odlučuje
   o preusmeravanju naspram opisivanja. Preusmeravanje vraća `modifiedPayload`
   sa samo zamenjenim `model`, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Put opisivanja: ograniči slike na `maxImages`, sastavi prompt koji je svestan
   zadatka, konsultuj keš za opisivanje, pozovi model vizije **paralelno**
   (`Promise.allSettled`), i umetni tekstualne delove `[Image N]: <description>`
   na njihovo mesto. Neuspešno opisivanje daje `null` i originalni deo slike
   je **sačuvan** (#4012) — osim na putu za kombinovano opisivanje kada je
   svako opisivanje propalo, gde potvrđeni uzlazni bez vizije dobija
   `(unavailable — no vision-capable provider connected)` stub umesto (#8430).
6. Vraća `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selektor moda (`modalityBridgeVisionMode`)

| Mod        | Podrazumevano | Ponašanje                                                                                                                                                                                                                                                                                    |
| ---------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔             | Legačka heuristika, nepromenjena (#6640/#7204): modeli bez kombinacija/`auto/` preusmeravaju na najbolji model vizije osim ako originalni model već ima upotrebljive akreditive (onda opisuje); ciljevi kombinacija uvek opisuju.                                                            |
| `describe` |               | Uvek opisuj — blok preusmeravanja se potpuno preskoči; model koji je korisnik izabrao uvek odgovara.                                                                                                                                                                                         |
| `reroute`  |               | Prisilno preusmeravanje: čuvar modela sa akreditivima se zaobilazi. Čuvar akreditiva za preusmeravanje-**cilj** i dalje važi — kada ne postoji upotrebljivi cilj vizije, zahtev se prebacuje na opisivanje tako da sirove slike nikada ne dosegnu backend koji radi samo sa tekstom (#8430). |

Prisilni modovi prekinu **pre** nego što se pokrene automatska heuristika; `auto` ponašanje
je bajt-identično pre-PR-1 zaštitnoj ogradi.

#### Opseg API ključeva (`visionBridgeKeyScope.ts`)

Kada API ključ pozivaoca ograničava `allowedConnections`, kvote
(`allowedQuotas`) ili modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most bira samo
preusmeravanje i opisivanje modela koje ključ može koristiti, na vezama koje ključ može
koristiti. Poziv za opisivanje tada uvek prolazi kroz OmniRoute samopovratnu petlju sa
`x-omniroute-self-loop-key-id` zaglavljem, tako da primajući zahtev za chat
ponovo sprovodi politiku veze i modela tog ključa. `enforceApiKeyPolicy()`
poštuje to zaglavlje samo zajedno sa samopovratnim nosiocem, tako da može samo
sužavati pristup, a id koji se ne rešava se odbacuje.

Ako nijedan model vizije nije dozvoljen za ključ, put opisivanja se povlači i
zahtev prolazi nepromenjen, isto ponašanje kao onemogućena zaštitna ograda (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Zahtevi bez ključa, i ključevi bez ovih ograničenja, ponašaju se tačno kao
pre.

#### Prompt za opisivanje svestan zadatka (`modalityBridgeVisionTaskAware`)

Podrazumevano **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) dodaje
tekst **poslednje korisničke poruke** (skraćene na 500 karaktera) osnovnom
opisnom promptu, usmeravajući opis ka onome što je korisnik zapravo tražio
(codex-vision-proxy obrazac) i tražeći od vizionog modela da transkribuje
vidljivi tekst. Kada je oznaka isključena — ili nema korisničkog teksta — osnovni
prompt se koristi nepromenjen.

Zahtev za opis samopovratne petlje koji je kompatibilan sa OpenAI (`callVisionModelSingle()`
u `visionBridgeHelpers.ts`) uvek zahteva `image_url.detail: "high"` —
bezuslovno, za svakog pozivaoca/providera, ne zavisno od bilo kog klijentskog signala.
Uzorkovanje niskog detalja smanjuje tačnost OCR-a za tačno onaj zadatak
transkripcije teksta koji ovaj prompt zahteva, tako da sam poziv za opis uvek
zahteva visoki detalj bez obzira na nivo detalja koji je prvobitni dolazni zahtev koristio. Ovo
samo utiče na unutrašnje telo zahteva za opis; ne menja način na koji
OmniRoute prosleđuje `image_url.detail` pozivaoca na primarnom zahtevu —
ta podrazumevana vrednost se primenjuje odvojeno, i samo za otkrivene OpenCode klijente, u
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic wire-format grana samopovratne petlje za opis nema polje `detail`
i nije pogođena bilo kojim podrazumevanjem.

#### Ograničenje izlaza opisa (`modalityBridgeVisionMaxChars`)

| Ključ                          | Podrazumevano | Opseg             |
| ------------------------------ | ------------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`           | `0` ili 100–50000 |

`0` (podrazumevano) znači **bez ograničenja** — opis koji vraća
`callVisionModel()` se prosleđuje nepromenjen, čuvajući postojeće
ponašanje. Svaka vrednost u opsegu 100–50000 skraćuje opis sa
`…` sufiksom pre nego što se ponovo spoji kao `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` u `src/lib/guardrails/visionBridge.ts`).
Povećajte ovo za zadatke OCR-a bogate detaljima gde downstream model treba
potpunu transkripciju; smanjite ga da ograničite korišćenje tokena na
komunikativnim vizionim modelima. Polje na kontrolnoj tabli se nalazi na
Naprednom panelu taba Vizija
(`modality-bridge-max-chars` u `ModalityBridgeVisionTab.tsx`) i ograničava
svaku vrednost između 1 i 99 na 100 dok ostavlja eksplicitni `0`
nepromenjen — `0` je važeća Zod vrednost sama po sebi
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a ne samo
"nepostavljena" podrazumevana vrednost.

#### Keširanje opisa (`modalityBridge/bridgeCache.ts`)

Keširanje u memoriji LRU + TTL za izlaze opisa, deljeno na nivou procesa.
Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` sa
okvirima dužine-prefiksa (bez sudara na granicama polja). Model komponenta je
**konfigurisani** most model, a ne model koji je zapravo odgovorio —
`callVisionModel` može interno da se vrati, a ključanje po pokušaju bi
fragmentiralo keš. Neuspešni opisi se nikada ne keširaju. Podešavanja:

| Ključ                           | Podrazumevano | Opseg   |
| ------------------------------- | ------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`        | —       |
| `modalityBridgeCacheTtlMinutes` | `60`          | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`         | 10–5000 |

#### Normalizacija udaljenih slika (samopovratni opis/base64 preuzimanje)

Kada most preuzima **udaljenu** sliku — samopoziv za opis Anthropic
i konverzija claude-wire-format base64
(`ensureBase64ImagesForClaudeWire`), oba putem
`fetchRemoteImageAsDataUri()` u `visionBridgeHelpers.ts` — rezultantni podaci
URI se prosleđuju kroz `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) pre nego što budu ugrađeni u zahtev
vizionog modela. Prevelike slike se smanjuju na **2048px dužoj ivici**
(što odgovara ograničenju veličine koje OpenAI/Anthropic već primenjuju na
serverskoj strani), što smanjuje
broj bajtova/latenciju prilikom učitavanja bez promene onoga što vizioni model vidi.
Promena veličine koristi `sharp`, učitan putem dinamičkog uvoza: na platformi gde
njegova nativna binarna verzija ne može da se učita, `normalizeDataUri()` **nikada ne baca**
grešku — vraća se na prolaz originalnih bajtova, tako da putanja za opis/base64-konverziju
uvek nastavlja da funkcioniše. Bajtovi koji nisu slike (preuzimanje koje nije
vratilo dekodabilnu sliku) se takođe prosleđuju nepromenjeni. Ova normalizacija
je ograničena na slike koje most preuzima za svoj vlastiti samopoziv — nikada se
ne primenjuje na sirovi payload pozivaoca, u skladu sa principom
mutacije samo uz pristup (Hard Rule #20).

#### Šema podešavanja + migracija

Novi `modalityBridge*` ključevi su Zod-validirani u `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*`, i grupa
`modalityBridgeAudio*` koja se koristi od strane Audio Bridge-a. Migracija
`141_modality_bridge_settings.sql` kopira postojeće nasleđene
`visionBridge*` vrednosti u odgovarajuće nove ključeve (idempotentno, nikada ne prepisuje
vrednost `modalityBridge*` koju je postavio operater); nasleđeni ključevi ostaju prihvaćeni kao
fallback za čitanje tokom jednog ciklusa izdanja.

#### Header transparentnosti + statistika

Odgovori transformisani opisom nose
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(izgrađeno od strane `buildModalityBridgeHeader()` u `modalityBridge/bridgeStats.ts`,
označeno od strane `withModalityBridgeHeader()` u `src/sse/handlers/chatHelpers.ts`).
Preusmereni zahtevi ne dobijaju **nikakav** header — payload je ostao nepromenjen i zamena modela
je već vidljiva u polju `model` tela odgovora.

`GET /api/modality-bridge/stats` (menadžerska autentifikacija, isti nivo kao
`GET /api/settings`) vraća u memoriji per-modalne brojače
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` i
`video`. `averageLatencyMs` koristi `latencySamples`, a ne sve pokušaje, kao
svoj imenilac; operacija bez merenja ne stvara uzorak od nula milisekundi.
`bridged` ostaje unazad kompatibilni alias za uspešne
konverzije; neuspešni pokušaji ga ne povećavaju.
Brojači se resetuju prilikom ponovnog pokretanja procesa po dizajnu
(telemetrija, ne računovodstvo).

#### Konfiguracija kontrolne table

Posvećena stranica kontrolne table je
`/dashboard/settings/modality-bridge`. Njene URL-adresibilne kartice `Vision`, `Audio`,
i `Video` čuvaju parametre upita dok menjaju vrednost `tab`.
Kartica Vision otkriva omogućavanje, režim, izbor modela (uključujući automatski
podrazumevani), zadatku svestan poziv, napredne limite vremena/ima/opisa/keša,
runtime
brojače i zaštićeni zahtev za uzorak. Kartica Audio je takođe aktivna: otkriva
omogućavanje, STT-samo izbor modela sa Auto, limite vremena/max-clip, audio
brojače i `input_audio` test uzorka. Kartica Video je funkcionalna: izveštava
o FFmpeg/ffprobe runtime stanju — jedan od četiri eksplicitna UI stanja (`unknown` dok
je proba u toku ili nije mogla da se završi, `restricted` na ne-loopback
hostu kontrolne table gde se proba preskoči na klijentskoj strani, `unavailable` kada je
proba izvršena i potvrđena kao nedostajuća, ili `available` sa verzijama FFmpeg/ffprobe) —
traje
omogućavanje/model/frame/video/limite vremena, filtrira izbor modela na modele
koji podržavaju viziju, i otkriva video brojače.

Bivša Vision Bridge kartica pod AI podešavanjima je kompatibilna veza ka
novoj stranici; više ne poseduje drugu kopiju forme. Media Providers takođe
povezuje Image-to-Text i Speech-to-Text radne tokove sa odgovarajućim Modality
Bridge karticama bez uklanjanja postojećeg Speech-to-Text igrališta.

**Zaobilaženje prijema samopovezivanja:** kada poziv za opis prolazi kroz OmniRoute-ov
vlastiti `/v1` samopovezivanje (ne-standardni model provajdera), pod-zahtev šalje
`x-omniroute-admission-bypass: internal` i autentifikuje se sa rešenim
samopovezivanjem — lokalni `sk_omniroute` sentinel u lokalnom režimu, ili
operaterom konfigurisani `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env ključ (#1350) tako
da `REQUIRE_API_KEY=true` implementacije mogu i dalje izvršiti poziv za opis. Zaobilaženje
se poštuje samo za te tačne akreditive, tako da spoljni klijenti ne mogu koristiti
zaglavlje da preskoče prijem.

Nasleđeni podrazumevani podaci se nalaze u `src/shared/constants/visionBridgeDefaults.ts`;
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
   metapodaci registra provajdera pobeđuju, zatim statični metapodaci modela, zatim
   sinhronizovani `modalities_input`. Deklarisana lista ulaza bez `audio` je `false`;
   nijedan dokaz o sposobnosti ostaje `null`. I `false` i `null` aktiviraju
   konzervativni most, dok `true` zaobilazi.
2. Reši `modalityBridgeAudio*` podešavanja i izvuci delove audio
   iz svake poruke kroz zajednički `detectMediaParts()`
   detektor. Podržani oblici su OpenAI `input_audio`, `audio_url`, i
   `source.media_type: "audio/*"`. Ugnježdeni audio se detektuje za usmeravanje, ali ne
   se uklanja putem splice puta. Rad je ograničen sa `modalityBridgeAudioMaxClips`;
   kasniji delovi ostaju netaknuti.
3. Poštuj konfigurisan `provider/model`, ili dozvoli `selectAudioBridgeModel()` da prođe
   kroz `AUDIO_TRANSCRIPTION_PROVIDERS` u stabilnom redosledu kataloga i izabere prvi
   model sa upotrebljivim aktivnim akreditivom provajdera.
4. `callAudioTranscription()` konvertuje base64/data-URI audio u multipart
   `file`, ili preuzima udaljeni `audio_url` kroz javno- samo izlaznu
   ogradu sa DNS pinovanjem i granicom od 25 MB. Zatim POST-uje datoteku i izabrani
   model na lokalno `/v1/audio/transcriptions` samopovezivanje, autentifikovano sa
   `resolveSelfLoopBearer()`. Postojeća ruta transkripcije obavlja normalno
   pretraživanje akreditiva, upravljanje cooldown/rate-limit, i dispatch provajdera.
5. Uspešni pozivi zamenjuju svoje delove sa `[Audio N]: <transcript>`. Pozivi
   se izvršavaju sa `Promise.allSettled`: pojedinačni neuspeh čuva taj originalni
   audio deo (#4012 ugovor). Ako svaki poziv ne uspe i cilj se pokaže
   `supportsAudio === false`, delovi postaju
   `[Audio N]: (nedostupno — nijedan STT provajder povezan)` (#8430 ugovor). Za
   nepoznati cilj (`null`), rezultat sa svim neuspesima ostaje netaknut. Dokazani
   cilj samo sa tekstom bez upotrebljivog STT akreditiva dobija isti eksplicitni
   stub bez izdavanja mrežnog poziva.

Uspešni transkripti koriste procesom široku Modality Bridge LRU/TTL keš. Ključ
kombinuje audio referencu, stabilnu oznaku operacije `audio-transcription`, i izabrani STT model; neuspehi se nikada ne keširaju. Audio pokušaji ažuriraju
zajedničke `bridged`, `cacheHits`, `failures`, i `lastUsedAt` brojače.
Transformisani odgovori nose
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; netaknuti
zahtevi ne primaju segment Audio Bridge.

Runtime podešavanja su DB-podržana i Zod-validirana:

| Ključ                         | Podrazumevano | Opseg           |
| ----------------------------- | ------------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`        | —               |
| `modalityBridgeAudioModel`    | `""`          | Auto ili STT ID |
| `modalityBridgeAudioTimeout`  | `60000`       | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`           | 1–10            |

Zajednički keš ostaje pod kontrolom `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, i `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Presreće delove videa na najvišem nivou u Chat Completions `messages` i Responses
API `input` pre nego što se pozove cilj bez poznate podrške za nativni video.
Podržani oblici su `input_video`, `video_url`, `video_source`, HTTPS URL-ovi,
i `data:video/*;base64,...` data URI. Obični nazivi datoteka u tekstu se ne tretiraju
kao video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) upravlja prelazom zahteva,
proverom sposobnosti/politike, agregacijom po zahtevu, i payload-om odgovora.
Rad po videu — akvizicija, keš celog rezultata, opisivanje sekvence okvira
(koja spaja bilo koji audio transkript koji je pozivač deklarisao), i metrike/prekid/čišćenje po pokušaju —
je skriven iza `processVideoPart` u `videoBridgePipeline.ts`, poziva se jednom po delu videa unutar
`preCall` petlje. Taj modul takođe definiše eksplicitne granice portova `VideoMediaBrokerPort`
(akvizicija bajtova i ekstrakcija uzorkovanih okvira), `VideoAudioTranscriptionPort`
(spajanje audio transkripta koji je pozivač deklarisao sa uzorkovanim titlovima), i
`VideoDrilldownPort` (nasleđeni oblik sirovog skladišta). Proizvodni STT i zadržavanje okvira
se sastavljaju oko opisa portova kroz `createVideoSttAdapter` i
`createVideoDrilldownAdapter`; potonji koristi zajednički životni ciklus neprozirnog handle-a.

Javni `/v1` put zahteva nikada ne uvozi ili poziva podproces. Udaljeni
video se preuzima pod granicom od 50 MiB; inline base64 video ima
konzervativni limit od 36 MiB dekodiranog po videu tako da model/poruke/okvir
mogu ostati unutar javnog JSON limita za prijem zahteva od 50 MiB. Inline
dužina i procene dekodirane veličine se proveravaju pre alokacije. HTTPS je
obavezan na inicijalnom udaljenom URL-u i svakom preusmeravanju, koristeći postojeći
javni izlazni zaštitni zid sa DNS pinovanjem. Bajtovi zatim prelaze tačno unutrašnju
`POST /api/modality-bridge/video/extract` broker granicu. Ta ruta je i
`LOCAL_ONLY` i `SPAWN_CAPABLE`, prihvata samo autentifikovani,
pouzdani loopback zahtev po procesu, i nikada ne prihvata URL, putanju do datoteke, izvršnu datoteku,
ili listu argumenata. API pipeline za veličinu tela i inkrementalni čitač tela
handler-a nezavisno sprovode limit ulaza brokera od 50 MiB. Njegova ograničena
red čekanja pokreće jednu ekstrakciju u isto vreme, dozvoljava četiri čekajuća posla,
i postavlja limit na čekajući ulaz na 100 MiB.

Unutar brokera, `ffprobe` čita privatnu lokalnu datoteku; fiksni format
lista dozvoljenih izuzima formate plejlista i manifest. Za dozvoljene MOV-familije
kontejnere, spoljne MOV reference podataka ostaju onemogućene po defaultu, i
fiksna komanda se ne uključuje u njih. I `ffprobe` i `ffmpeg` koriste
`file`-samo protokol belešku, jednu nit, fiksne nizove argumenata, bez shell-a,
i izvršne datoteke rešene iz `PATH`. Priključene slike pokrivača nisu
playable kandidati. Svi playable stream-ovi moraju zadovoljiti limite, a
eksplicitni podrazumevani stream je preferiran pre determinističkog najnižeg indeksa
fallback-a. Video je ograničen na 600 sekundi, 8,192 piksela po dimenziji, i
33,554,432 izvorna piksela. FFmpeg uzima uzorke 1–16 srednjih JPEG okvira, smanjuje
dugu ivicu na najviše 1,024 piksela bez povećavanja manjih ulaza, i
nikada ne prima URL. Uzorkovanje je `uniform` po defaultu. Opcione
`scene_aware` i eksperimentalne `segment_aware` politike vrše jedan dodatni
fiksni FFmpeg prolaz preko već validiranog lokalnog stream-a, biraju ograničene
`showinfo` scene vremenske oznake, i deterministički se vraćaju na iste
uniformne srednje tačke u slučaju neuspeha detektora, isteka vremena,
neispravnog izlaza, ili praznog skupa kandidata. Segment-aware režim alocira uzorke srednjih tačaka proporcionalno
validiranim vremenskim intervalima scena; segment-aware dokazi i fallback ponašanje su
detaljno opisani u nastavku. Teška granica od 16 okvira se
primenjuje nakon selekcije u svakoj politici. Kada scena-svesni zahtev ima samo
budžet od jednog okvira, koristi uniformnu srednju tačku aktivnog celog videa ili fokusa
prozor i izveštava `policyEffective: uniform`: jedan izabrani okvir scene
ne može sačuvati oba vremenska kraja. Pozivač može opcionalno pružiti
konačni fokus prozor (`start`/`end` sekunde); granice su ograničene na trajanje medija,
obrnuti ili neograničeni prozori se odbacuju, i sve politike uzorkovanja se sprovode
samo unutar normalizovanog intervala. Rezultantni
prozor je uključen u uzorkovanje metapodataka i u neprovereni opis
prefiksa tako da downstream modeli mogu razlikovati fokusirani izvod od celog
vremenskog okvira.

Fokus na semantičke titlove je posebno, eksplicitno podešavanje. Podrazumevani `full`
analitički režim čuva postojeći okvir prompta i nikada ne prosleđuje tekst zahteva
modelu titlova. U `focused` režimu, most čita samo najnoviji
ne-prazan korisnički napisani `text`/`input_text` iz istog Chat ili Responses
kontejnera, normalizuje ga na NFC, sruši kontrolne karaktere i razmake,
i ograničava ga na 500 Unicode kodnih tačaka. Prazan rezultat se vraća na
tačno `full` prompt. Korisna naznaka se serijalizuje kao JSON u posvećenom
neproverenom korisničkom kontekstu i može samo prioritizovati observable detalje; ne
može nadmašiti posebnu upozorenje protiv praćenja uputstava vidljivih
ili čujnih u mediju. Tekstualni fokus nikada ne inferira `start`/`end` ili menja
temporalni uzorkivač.

#### FU-07 strukturni segment dokazi

`segment_aware` koristi jedan ograničen pre-analitički prolaz preko već validiranog lokalnog video toka. Fiksni lanac filtera prvo skalira na najviše 320 piksela širine, detektuje promene scena i zamrznute intervale, a zatim uzima uzorke na 1 frejm u sekundi za zamućenje, prosečnu luma i prostorne/temporalne informacije. Prolaz je ograničen na 600 strukturnih uzoraka, jedan FFmpeg/filter nit, isti `file`-samo protokol i dozvoljene kontejnere, granicu izlaza procesa od 1 MiB, i najviše 30 sekundi unutar zajedničkog prekida/rok brokera. Nikada ne prihvata komandu, filter, putanju ili URL iz zahteva.

Strukturne vrednosti su deterministički uzorci dokaza, a ne semantičko razumevanje videa. Ne inferiraju subjekte, akcije, natpise, govor ili nameru korisnika. Granice scena i zamrzavanja formiraju segmente; pokrivenost zamrzavanja, zamućenje, osvetljenje, prostorni detalj i temporalna promena samo utiču na to kako se postojeći budžet od 1–16 frejmova raspodeljuje. Potpuno zamrznut segment je ograničen na jedan frejm, dok se nezamrznuti segmenti takmiče za preostali budžet. Kada granice nadmaše frejmove, zadržava se uniformna pokrivenost vremenske linije tako da brzi rani rezovi ne mogu sakriti dugi segment. Granice scena unutar 1-sekundne analitičke rezolucije granice zamrzavanja se spajaju.

Nedostajući filteri, neispravni/prazni dokazi, greška detektora ili ograničeno vreme pre-analize otvaraju se prema tačnoj uniformnoj srednjoj politici. Prekid poziva ili rok brokera ne otvara se: prekida podproces u toku, sprečava kasniju ekstrakciju frejmova, a privatno privremeno stablo se uklanja u `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generiše determinističke stvarne FFmpeg
fiksacije za uštedu nakon deduplifikacije natpisa, raspodelu budžeta za gustu
kretanje, dokaze o zamućenju/osvetljenju/SI-TI, brze rezove sa dugim repom i
lažne pozitivne rezultate postepene fade. Beleži vreme zida pre-analize i, gde
je `/usr/bin/time` dostupno, CPU deteta i vrhunsku RSS. Njegove provere kvaliteta
su samo strukturni orakuli. Kvalitet stvarnog modela natpisa ostaje `HOLD`
jer ovaj uređaj nema ovlašćeni krajnji tačku ili zamrznutog sudiju. Monetarne uštede
takođe ostaju `HOLD` osim ako `--caption-cost-per-call-usd` ne obezbedi
eksplicitnu pozitivnu procenu po pozivu; skripta nikada ne fabricira nijedan rezultat.

Svaki frejm je ograničen na 4 MiB, svi sirovi frejmovi zajedno na 23 MiB, a
serijalizovani odgovor brokera na 32 MiB. Privatni privremeni direktorijum se
uklanja u `finally`. OmniRoute ne pakira FFmpeg i ne prihvata prilagođenu
izvršnu putanju. Pre nego što se doda natpis, most primenjuje konzervativni
vizuelni deduplifikacijski prolaz: svaki JPEG se smanjuje na 16×16
grayscale bafer i poredi se samo sa poslednjim zadržanim frejmom. Za
traženi budžet natpisa iznad jednog frejma, ekstrakcija obezbeđuje
ograničeni skup kandidata do dvostruko tog budžeta i nikada više od 16 frejmova.
Traženi limit se primenjuje samo nakon deduplifikacije, pri čemu se prvi i
konačno odabrani kandidati čuvaju tokom konačnog pročišćavanja kada je budžet
barem dva. Verzijska
`grayscale-16x16-mean-cells-v2` politika koristi veći od prosečnog luma delta i
odnos ćelija sličica čija je normalizovana delta najmanje 0.05. Prag za
duplikate je konstantan 0.04, izabran zbog predvidljivosti, a ne izložen kao
podešavanje u vreme izvršavanja. Ovaj sekundarni
signal visokog kontrasta čuva male pokrete i promene vidljivog teksta koje
može sakriti samo poređenje proseka. Greške komparatora ili dekodera
otvaraju se i zadržavaju pokrivenost. Izlazni metapodaci razdvaja
ekstraktovane kandidate, uspešno korišćene frejmove i vizuelne duplikate koji su
odbačeni.

Eksplicitno označeni deo videa može zatražiti vremenski označen kontakt list. Most
gradi najviše 4 kolone, 16-frejm JPEG mrežu. Svaka ćelija od 512 piksela
ugrađuje svoj izvorni vremenski pečat u visoko-kontrastnu donju traku, dok
isti vremenski pečati ostaju u tekstualnim metapodacima za kasniju asocijaciju i
reviziju. Kompletan JPEG ostaje ograničen na 32 MiB. Ako `sharp` ne može
dekodirati ili sastaviti mrežu, most se vraća na pojedinačne JPEG frejmove; prekid
klijenta se i dalje propagira kroz operaciju lista.

Dokazi o promociji su namerno odvojeni od sintetičkog sastava
mikrobenchmarka. `scripts/perf/video-bridge-contact-sheet-eval.ts` definiše
shemu verzioniranog A/B uređaja za stvarne OpenAI-kompatibilne vizione modele. Mera
je broj tokena koje izveštava provajder, latencija zida od kraja do kraja
(uključujući sastavljanje lista), broj poziva modela i zadržavanje činjenica
definisanih manifestom. Sirovi odgovori modela se ne upisuju u izveštaj; samo
SHA-256 sažeci i usklađeni ID-ovi činjenica se čuvaju. Uređaj ne pravi mrežni ili
plaćeni poziv modela osim ako nije prosleđen `--execute-real` i
konfigurisani `--model`, `OMNIROUTE_BASE_URL` i `OMNIROUTE_API_KEY`. Bez
tog eksplicitnog stvarnog izvođenja, njegov strojno čitljiv presud ostaje
`HOLD`; mere sintetičkog tereta/broja poziva same nisu dokazi o promociji.

Odvojeni `scripts/perf/video-bridge-promotion-eval.ts` koristi FU-07 ili
FU-09 posmatranja. Prihvat promocije zahteva svih osam sintetičkih scenarija
plus sanirani stvarni isječak, najmanje tri mjerene ponavljanja po ulozi
i slučaju, svih deset deklarisanih metrika, zamrznutih medija/prompta/očekivanih
činjenica/podešavanja sažetaka, jedinstvenih ID-ova posmatranja i verifikovanog
redosleda A/B. Potvrda izvršenja vezuje sažetak korpusa, tačan SHA kandidata i
reviziju modela. Nedostajući ili nevažeći merenja ostaju `HOLD`, uključujući CPU
iznad 30 s, vrhunsku RSS iznad 512 MiB ili pre-analizu iznad 30 s. Ovo su
ograničenja za prihvatanje dokaza, a ne nova garancija za sprovođenje RSS u
vreme izvršavanja.

FU-07 захтева најмање 98% задржавања квалитета и p95 латенцију не већу од 1.2x
базне линије, плус или 0.05 апсолутно уравнотежено побољшање просечног повратка на
еквивалентним просечним позивима за опис, или најмање 10% мање просечних позива за опис
после дуплирања. FU-09 захтева најмање 0.85 квалитета, 95% задржавања, 20% смањења p95 латенције
и 10% смањења токена. Критични губитак факата, усаглашеност убризгавања или
недостатак употребе спречавају промоцију. Једно извршење не може промовисати ништа:
`--previous-report` потврђује два различита, непреклапајућа, узастопно
елигибилна извршења исте политике/модела ревизије/kandidata/korpusa.
Експеримент узорковања не може потврдити експеримент контакт-табле.

Прикупљачи треба да оцене одговоре у меморији и сачувају `responseDigest` плус
метрике и обавезе посматрања, никада текст одговора. Потрошач такође чита
наследне сирове опсервације, али никада не копира тај текст у своје извештаје. Тачно
један од `responseDigest` или `rawResponseText` се прихвата за сваку опсервацију.
Верзионисана дозвола остаје празна са непомичним подразумеваним `hold`.
Елигибилни унос захтева своју референцу доказа, политику, ревизију модела, тачан
SHA кандидата, манифестни сажетак и два различита ID извршења; конфликтни контексти
су одбијени. Ове метаподатке представљају уговор о ревизији, а не доказ да референтна
датотека садржи истинска мерења. Прегледајте стварне рачуне пре него што додате
било који унос. Статистички крај управљања и Видео контролна табла откривају конзервативну
спремност. Конфигурисани алијас модела сам по себи не успоставља његову ревизију или
текући SHA кандидата, тако да тренутна контролна табла извештава `HOLD` уместо
да поново користи елигибилност из другог контекста извршења. Експлицитни експериментални
избор остаје одвојен од промоције; ниједан подразумевани неће бити аутоматски промењен.

Позиваоци могу прикључити опционални `transcript.cues` низ на подржани видео
део када већ поседују усаглашен текст. Сваки знак мора носити `text`,
фини `start`/`end` интервал унутар испитиваног трајања, и белу листу
`source` (`client`, `embedded`, или `audio-bridge`); `confidence` подразумевано
је `1` и мора остати између `0` и `1`. Тачно дуплирани знакови се спајају.
OmniRoute никада не почиње транскрипцију из ових метаподатака: валидирани знакови
се копирају у описани резултат са извором, поверењем и интервалом, и
приказују се као непоуздане опсервације поред натписа оквира. Неважећи,
изван опсега, или текст без порекла се одбацује уместо да се меша у
стрим натписа. Обе канале транскрипта у телу захтева нормализују
пружено порекло на `client`, укључујући самопотврђене `embedded` или `audio-bridge`
етикете. Само адаптер у власништву сервера може доделити те поуздане етикете
путем аргумента само за код `trustedSource`; поље JSON захтева не може
досегнути тај аргумент. Текст транскрипта остаје непоуздан садржај
изведен из медија, без обзира на његово порекло, и никада не сме одредити
ауторизацију.

Напредни позиваоци могу пружити `audioTranscript` траку за исти видео;
она се третира као текст који је обезбедио клијент, а не доказ о транскрипцији сервера.
Спојна шава покреће визуелне и аудио опсервације под
једним роком и сигналом за прекид, наређује их на заједничкој временској линији,
спаја тачна дупликата, и извештава делимичан резултат када само једна страна успе.
Неважећи `audioTranscript` деградира у тај делимичан резултат — визуелни
опис се чува, а аудио грана бележи санитизовани код грешке —
уместо да не успе цео видео. По-грани доступност, делимична ознака,
и санитизовани кодови грешака се чувају у описаном резултату, у
метаподацима за заштиту (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), у метаподацима кеша резултата, и у бројаčима спајања.
Подразумевана стаза Видео Бриджа не активира претварање говора у текст
или преузимање друге копије медија; без те експлицитне траке, остаје
само видео.

**Задржавање транскрипта (#12150 P1).** Ово се аутоматски примењује
када год Видео Бридж (сам по себи опција) рендерује транскриптни знак — не постоји
одвојена ознака за задржавање. Када захтев рендерује било који транскриптни знак
(позиваоцем декларисан `transcript` или спојени `audioTranscript`),
защитна ограда га обележава као `videoBridgeObserved` и производи
редиговану сенку видео описа — идентичан рендер у којем је тело сваког знака
замењено са `[redacted-video-transcript]`, састављено заменом структурног
полија знака пре него што се низ састави (никада парсирањем
изравнаног текста, тако да ниједан садржај знака — непријатељски или обичан,
укључујући тела која садрже `]` као што су `[inaudible]`/`[music]` — не може опстати).
Сачувани лог захтева замењује сваку текстуалну компоненту изведену из видео
са том редигованом сенком, усклађеном по једнакости садржаја; `fullText`
анкор се поново чита из завршеног пред-захтевног терета заштитне ограде,
тако да подударање и даље успева након каснијих заштитних ограда (PII и
маскирање акредитација, приоритети 10/95) прерађују текст описа на месту и
након системског упита/преноса/инјекције меморије преобликују низ порука.
Тело послато узводно моделу остаје непромењено. Опсервациони захтев такође не попуњава
трајну Меморију (обе екстракције из захтева и одговора су прескочене),
тако да одговор модела не може одразити текст транскрипта у Меморији.

**Сирови видео поља (#12430).** Када је мост омогућен и подршка за
нативни видео је непозната или одсутна, дефинисана поља `transcript`/`audioTranscript`
такође активирају `videoBridgeObserved`, чак и након неуспеха описивања или
ограничења `maxVideos`. `null` и празни низови се рачунају; одсутна поља и
не-видео метаподаци не. Задржане копије редигују ова поља или изостављају захтев,
а кешеви/Меморија се заобилазе. Пружање терета остаје непромењено.

Dodatne zadržane kopije koriste isti signal posmatranog zahteva. Siromašni
snapshot klijentskog zahteva pre zaštite, u memoriji čekajući zahtev, i rani
log odbijenih zahteva strukturno zamenjuju polja transkripta u video delovima;
string prompti sintetizovani od strane faza procesa i predaja konteksta su
izbrisani na mestu trajnog tela zahteva. Oznaka `video_content_removed` čini
da nastavak `previous_response_id` ne uspe, umesto da rekonstruiše tekst koji je
namerno odbacen. Ako posmatrani zahtev izgubi svoj senku redakcije po delovima
pre logovanja, ili čak jedna od nekoliko video senki ne uspe da se poklapa
nakon kasnijih mutacija zahteva, zadržano telo zahteva se potpuno izostavlja
umesto da zadrži delimično redigovani transkript.

Za posmatrani zahtev, odgovor modela može citirati bilo koji deo
transkripta bez strukturirane granice naznake. Njegov trajni log poziva
`responseBody` se stoga zamenjuje oznakom za izostavljanje; detaljni
artefakt procesa (koji može uključivati telo upstream/klijenta i delove toka)
se ne čuva. Semantički, idempotentni i kešovi za ponavljanje rezonovanja
zaobilaze čitanja i pisanja za taj zahtev. Zahtev provajdera i odgovor
vidljiv klijentu ostaju nepromenjeni. Rani keepalive bajtovi se ispuštaju iz
privremenog bafera kada se detaljni artefakt izostavlja. Kirova neispravna
EventStream upozorenja izveštava samo o broju bajtova u teretu, nikada o
njegovom sadržaju ili sirovom greškom JSON parsera.
Ovo ne tvrdi da je svaki nepovezani dijagnostički alat provajdera/plugin-a
proveren; širi pregled zadržanih sudova se prati u #11658.

Unutrašnji `/api/modality-bridge/video/drilldown` životni ciklus je
odvojeni, loopback/token-autentifikovani keš podloga. Svaka operacija takođe
zahteva kanonski neprozirni ID glavnog korisnika. Pre nego što se omogući
proizvodni poziv, mora izvesti taj ID iz autentifikovanog zakupca i nikada ne
sme proslediti vrednost koju je izabrao klijent. Ključevi keša povezuju tog
glavnog korisnika sa kanonskim sesijskim i video-referentnim ID-ima, čuvaju
samo njihove SHA-256 izvedene ključeve, i ograničavaju i čitanja i brisanje na
istog glavnog korisnika. Keš čuva najviše 16 izvedenih JPEG
okvira po unosu, ističe ih nakon deset minuta, i podržava ograničena
`start`/`end` čitanja ili eksplicitno brisanje sesije.

Svaki glavni korisnik je ograničen na 16 unosa i 64 MiB kanonskih JPEG podataka.
Ta ograničenja su nezavisna od globalnog plafona od 64 unosa/256 MiB: pritisak
kvote glavnog korisnika izbacuje samo najređe korišćene unose tog glavnog
korisnika pre nego što se razmatra globalno LRU izbacivanje. Istečeni unosi
se uklanjaju iz oba glavnog korisnika i globalnog računanja na aktivnost keša,
dok otkazivanje i neuspeh validacije ne izvršavaju delimičnu zamenu.

Keš odbacuje nekanonski Base64, višak popunjavanja, ne-JPEG medije, neispravne
ili skraćene JPEG-ove, i JPEG-ove koji proizvode upozorenje tokom ograničenog
punog `sharp` dekodiranja slike. Ponovo kodira svaku prihvaćenu sliku kao
kanonski JPEG, izvodi širinu i visinu iz dekodiranih bajtova umesto da veruje
poljima pozivaoca, i odbacuje sve završne poliglotne bajtove umesto da ih
zadrži. Samo je ograničeni kanonski kompresovani bafer naplaćen obema kvotama.
JSON ograničenje za prenos uključuje Base64 prekomernu težinu za plafon
dekodiranog ulaza od 32 MiB. Svaka
čuvana derivacija beleži svoj validirani JPEG format/rezoluciju, politiku
uzorkovanja, verziju derivacije, vreme kreiranja, serverom izračunati hash
sadržaja, i hash roditeljskog referenca plus hash roditeljskog sadržaja
proverenog pozivaoca. Otkazivanje se proverava između asinkronih faza
dekodiranja/hashiranja pre atomskog keš komitovanja.

Proizvodni proizvođač ponovo koristi već izvedene brokere samo nakon uspešne
vizuelne analize, bez drugog preuzimanja/ekstrakcije videa. Zahteva
operater `modalityBridgeVideoDrilldownEnabled=true`, strogo po delovima
`drilldown: true`, i autentifikovani ID zapisa API ključa. Klijentom
deklarisane vrednosti glavnog korisnika/sesije nikada ne uspostavljaju
vlasništvo. Bez sve tri uslove ne hashira, ne menja veličinu ili ne zadržava
dodatne okvire. Neuspeh zadržavanja čuva upotrebljiv vizuelni odgovor. Pristane
zahtevi zaobilaze keš rezultata celog videa tako da keširani rezultati nikada
ne ponovo koriste handle.

Uspešni JSON i SSE odgovori izlažu najviše četiri neprozirna handle-a u
ograničenom `x-omniroute-video-drilldown` header-u. Ovlašćeni izvori
pregledača mogu čitati taj header bez proširivanja CORS politike porekla. Novi
handle-ovi koriste `v1.<32-byte random base64url token>`, a registar čuva
samo njihove SHA-256 hash-eve. Čitač/parser header-a takođe prihvata
legacijske 64-hex tokene. Autentifikovani javni potrošač je
`GET /api/v1/video-bridge/drilldown?handle=...`, nezavisno ograničen
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Eksplicitno trajno
lažno opoziva pristup čak i kada je legacijski `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED`
env fallback omogućen. Proizvodno zadržavanje ima analogni legacijski
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Obe fallback opcije su
podrazumevano isključene.

Potrošač izvodi vlasništvo iz autentifikovanog ključa, primenjuje politiku ključa,
i vraća isti 404 za nepoznate, istečene i handle-ove drugog ključa. Prihvaća
`variant=preview|standard|detail` (maksimalna JPEG dimenzija 320/640/1280, nikada
ne povećava), `limit=1..8` (ili legacijski `frames` alias, nikada oboje),
nulti-bazirani `page`, i opcionalne `start`/`end` fokus sekunde. Duplikati
ključnih upita i obrnuti fokus prozori se odbacuju. Svaki vraćeni varijant
ima hash svog stvarnog sadržaja i stvarne rezolucije metapodataka, povezanih
sa zadržanim izvorom. Varijante se izvode prilikom čitanja umesto da se
čuvaju kao dodatne zadržane kopije. JSON odgovor, uključujući Base64/envelop,
je ograničen na 32 MiB; prevelika stranica vraća 413 i klijent mora zatražiti
manje okvire. Čitanja proveravaju otkazivanje oko svake promene veličine i
ponovo proveravaju validnost handle-a pre vraćanja. `DELETE` od strane
vlasnika je idempotentno; brisanje ili isteka TTL oslobađa zadržani izvor i
računanje upotrebe.

Podeljena prodavnica je lokalna za proces: rukovanje ističu prilikom ponovnog pokretanja i nisu prenosiva između nezavisnih OmniRoute procesa. Statistika upravljanja otkriva efikasnu politiku zadržavanja/udaljenosti i agregira samo zadržane unose/bajte, nikada medije, reference, glavne ID-ove ili rukovanje. Panel za podešavanje videa prikazuje te vrednosti i može da sačuva oba prekidača za pristanak. Ova dokumentacija o implementaciji nije dokaz o aktivnom postavljanju ili promociji; prihvatanje pravog modela se prati odvojeno.

Okviri se titluju sekvencijalno sa konfiguriranim Video modelom. Prazan Video preklapanje nasleđuje Vision podešavanje; ako su oba prazna, Vision auto-usmerivač bira efikasan model sposoban za viziju. Uspešni titlovi zamenjuju originalni deo sa stabilnim `[Video description:` prefiksom koji takođe označava tekst kao nepouzdanu medijsku posmatranje i govori nizvodnim modelima da ne prate uputstva pronađena u mediju. Ključevi keša za titlove okvira uključuju JPEG bajtove, prompt, vremensku oznaku i efikasan model; samo uspešni titlovi se keširaju. Unosi u keš zadržavaju stvarni uspešni model proizvođača, uključujući model rezervne opcije; most izveštava `mixed` kada su različiti okviri proizvedeni različitim modelima. Hit u kešu ponovo koristi tu identitet proizvođača umesto da ga preimenuje kao traženi plan usmeravanja. Keš rezultata celog videa je ključan za svaki unos koji menja izlaz — prompt, efikasan model, politiku uzorkovanja, broj okvira, način semantičke analize, SHA-256 otisak normalizovanog nagoveštaja fokusa, prozor fokusa, `transcript`, `audioTranscript`, i oznaku kontaktne stranice — tako da promena bilo koje od tih dimenzija predstavlja promašaj u kešu, nikada zastarelo ponavljanje. Verzija politike vizuelnog dedupiranja, prag i ograničen broj kandidatskih okvira su takođe eksplicitni u ključu i metapodacima keša rezultata; promena politike stoga ne može ponovo koristiti zastareli opis celog videa. Metapodaci keša rezultata v4 čuvaju način i otisak, nikada sirovi korisnički zadatak. Metapodaci zaštitne ograde izveštavaju o traženim i efikasnim načinima analize; traženi `focused` način bez upotrebljivog korisničkog teksta izveštava se kao efikasno `full`.

Zaštitna ograda izvlači svaki podržani deo videa, ali ne opisuje više od `modalityBridgeVideoMaxVideos`. Za cilj koji je dokazan da ima `supportsVideo === false`, neuspešni i prekomerni videi postaju eksplicitne sigurne tekstualne oznake tako da nijedan sirovi video ne preživi. Kada je sposobnost nepoznata, ti delovi ostaju netaknuti. Ciljevi sa `supportsVideo === true` zaobilaze most. Signal za abortiranje zahteva klijenta propagira se kroz preuzimanje, broker red, podprocese i pozive za titlove; aborti se zaustavljaju između videa i nikada ne otvaraju za sirove medije.

Podešavanja u vreme izvođenja su podržana DB-om i validirana Zod-om:

| Ključ                               | Podrazumevano | Opseg / ponašanje                                                                                     |
| ----------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`       | Opcionalno vreme izvođenja, opt-in                                                                    |
| `modalityBridgeVideoAnalysisMode`   | `"full"`      | `full` čuva generičke titlove; `focused` koristi ograničen, nepouzdani kontekst poslednjeg korisnika  |
| `modalityBridgeVideoModel`          | `""`          | Nasleđuje Vision Bridge model                                                                         |
| `modalityBridgeVideoFrameCount`     | `8`           | 1–16                                                                                                  |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`   | `uniform`, `scene_aware`, ili proporcionalni `segment_aware`; neuspeh detektora se vraća na `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`           | 1–4                                                                                                   |
| `modalityBridgeVideoTimeout`        | `120000`      | 1000–120000 ms                                                                                        |

Zastarele vrednosti vremena isteka videa iznad 120 sekundi su ograničene na rok brokera; novi unosi iznad tog limita se odbacuju. `GET /api/modality-bridge/video/runtime` zahteva pouzdanu pečatiranu loopback lokalnost pre autentifikacije ili ispitivanja vremena izvođenja, zatim zahteva upravljačku autentifikaciju. Vraća samo `available`, sanirane verzije FFmpeg/ffprobe, i fiksni razlog kada vreme izvođenja nije dostupno. Unutrašnja tačka ekstrakcije nije javni API za otpremanje: zasićenje reda vraća `503` plus `Retry-After`, prekid poziva vraća `499`, a fiksni rok brokera vraća `504`. Konvertovani odgovori dodaju `video->text;model=<visionModel>;parts=<videos>` u centralni `x-omniroute-modality-bridge` zaglavlje bez uklanjanja Vision ili Audio segmenata.

### PII Masker (`piiMasker.ts`)

Radi na **oba** stepena.

- **`preCall`** klonira payload, prolazi kroz `system`, `messages`, `input`, i `prompt` (uključujući obične string stavke), i primenjuje `processPII()` (iz `@/shared/utils/inputSanitizer`) na string `content`/`text` polja. Kada je `PII_REDACTION_ENABLED=true`, otkriveni PII se rediguje u izlaznom payload-u. Ovo je nezavisno od `INPUT_SANITIZER_MODE` (koji samo kontroliše politiku injekcije prompta). Kada je redigovanje isključeno, poziv beleži brojeve detekcije bez prepisivanja sadržaja.
- **`postCall`** duboko klonira odgovor, pokreće `sanitizePIIResponse()` plus masker oblika API-ja odgovora (`maskResponsesOutput` — pokriva `output_text` i `output[].content[].text`). Ako dođe do bilo kakvog redigovanja, izmenjeni odgovor zamenjuje original.

Zaštitna ograda nikada ne blokira; samo anotira (`meta.detections`, `meta.redacted`) ili prepisuje.

### Prompt Injection (`promptInjection.ts`)

Detektuje neprijateljske strukture u sadržaju koji je korisnik dostavio i sprovodi
konfigurisanu politiku. Ponašanje se upravlja promenljivim okruženja i opcijama
konstruktora:

| Podešavanje  | Env var                                                                                               | Podrazumevano | Efekat                                                                                                                                                                                                |
| ------------ | ----------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omogućeno    | `INPUT_SANITIZER_ENABLED`                                                                             | `true`        | Kada je `false`, zaštita se prekida.                                                                                                                                                                  |
| Mod          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`        | Politika injekcije: `block`, `warn`, ili `log`. (`redact` se prihvata zbog unazadne kompatibilnosti, ali **ne** uklanja tekst injekcije; zahtev za prepravku PII kontroliše `PII_REDACTION_ENABLED`.) |
| Prag blokade | `blockThreshold` opcija / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`        | Minimalna ozbiljnost potrebna za blokiranje. Srednja je samo za posmatranje po defaultu.                                                                                                              |

**Prioritet moda** (`getMode`): poziva `options.mode` →
`INJECTION_GUARD_MODE` **DB feature-flag override** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Dakle, nadjačavanje na kontrolnoj tabli ima prioritet nad promenljivim okruženja, tako da UI za Feature Flags kontroliše aktivnu zaštitu (bez ponovnog pokretanja). Čitanje iz DB-a je fail-safe:
ako dođe do greške, zaštita se vraća na ponašanje zasnovano na promenljivim okruženja, a kada nije postavljeno nikakvo nadjačavanje, ponašanje je identično rešenju samo na osnovu okruženja.

Izvori detekcije:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (deljeni detektor
   koji se koristi i drugde u procesu).
2. Ugrađeni `DEFAULT_GUARD_PATTERNS` (trenutno `system_override_inline` i
   `markdown_system_block`, oba `high` ozbiljnosti).
3. Opcioni `customPatterns` prosleđeni putem opcija konstruktora (stringovi, regex,
   ili `{ name, pattern, severity }` zapisi).

Kada je `mode === "block"` **i** barem jedna detekcija ispunjava prag
ozbiljnosti, `preCall` vraća `{ block: true, message: "Zahtev odbijen:
otkriven sumnjiv sadržaj" }`. U `warn`/`log` modovima zaštita beleži, ali
dozvoljava poziv. Deljeni pomoćnik `evaluatePromptInjection()` je takođe izvezen
za pozivaoce koji trebaju da procene upite bez prolaska kroz registar.

**Granica skeniranja (v3.8.20):** detektor samo ispituje **prvih 16 KB**
spojenog teksta upita — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajta) u
`src/shared/utils/inputSanitizer.ts`. I `detectInjection()` i
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` pre pokretanja
petlje obrazaca. Direktive injekcije se nalaze blizu vrha unosa, tako da ovo
ograničava CPU/GC regex na višestotinama-KB teretima bez slabljenja detekcije (uporedi
#3932, #4041).

### Masker kredencijala (`credentialMasker.ts`)

Radi na **oba** stepena, poslednji u podrazumevanom lancu (prioritet `95`). Uklanja
poznate obrasce API-ključeva / tajnih tokena iz izlaznog tereta (sadržaj poruke,
argumenti poziva alata, rezultati alata) **i** odgovora provajdera, tako da
kredencijal koji je lepljen u upit (ili vraćen od strane rezultata alata) ne bude otkriven
uzvodno provajderu ili nazad klijentu.

- **Samo na zahtev**, ista konvencija kao i za prepravku PII (Teško pravilo #20):
  onemogućeno osim ako `settings.credentialRedactionEnabled === true` **ili**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kada je isključeno, zaštita je bez efekta —
  nikada ne blokira i nikada ne prepravlja.
- `redactCredentials()` prolazi kroz celu strukturu tereta/odgovora (`walkValue()`,
  sigurno za zagađenje prototipa, sigurno za cikluse putem `WeakSet`) i zamenjuje podudaranja
  sa `[REDACTED:<type>]` oznakom, klonirajući samo grane koje su se zapravo
  promenile.
- `CREDENTIAL_PATTERNS` pokriva ključeve LLM provajdera (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokene (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ključeve za plaćanje (Stripe, Square), ključeve za
  oblak (AWS pristupni ključ, Twilio, SendGrid, Mailgun), privatne ključeve / JWT-ove,
  stringove za povezivanje koji sadrže kredencijale (`mongodb://user:pass@...`, itd.), i
  generički obrazac za `Authorization`/`x-api-key`/`api-key`/`apikey` zaglavlje-vrednost.
- Ključevi u obliku zaglavlja (`authorization`, `x-api-key`, `api-key`,
  `apikey`) se strukturno uklanjaju (samo vrednost, prefiks šeme kao
  `Bearer `/`Basic ` očuvan) umesto putem generičkog teksta regex.
- Zaštita nikada ne blokira; samo prepravlja (`modifiedPayload` /
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
