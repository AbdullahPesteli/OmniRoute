# Guardrails (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Źródło prawdy:** `src/lib/guardrails/`
> **Ostatnia aktualizacja:** 2026-08-29 — v3.8.51 (Pochodzenie transkrypcji Video Bridge jest deklarowane przez dzwoniącego,
> jeszcze nie zweryfikowane przez serwer — wyjaśniono zgodnie z #11661)

Guardrails wymuszają bezpieczeństwo, politykę i transformacje treści na granicy
między OmniRoute a dostawcami upstream. Każdy guardrail może kontrolować (i
opcjonalnie odrzucać, przekształcać lub dodawać adnotacje) ładunki żądań (`preCall`)
oraz odpowiedzi upstream (`postCall`).

System działa w trybie **fail-open**: jeśli guardrail zgłosi błąd podczas wykonywania,
rejestr zapisuje błąd i kontynuuje pracę z następnym guardrailem, zamiast przerywać
żądanie. Blokowanie jest jawną decyzją (`block: true`), nigdy przypadkiem.

## Wbudowane Ochrony

Rejestr automatycznie ładuje sześć ochron w kolejności priorytetu podczas importu
(zobacz `registry.ts` → `registerDefaultGuardrails()`):

| Priorytet | Nazwa               | Etap(y)        | Plik                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niższe numery priorytetów działają **pierwsze**.

### Most Wzrokowy (`visionBridge.ts`) — Most Modalności PR-1

Przechwytuje żądania zawierające obrazy skierowane do **modeli niewzrokowych** i albo
przekierowuje całe żądanie do modelu obsługującego wzrok, albo zastępuje części obrazu
opisami tekstowymi generowanymi przez konfigurowalny model wzrokowy przed
wywołaniem upstream. Umożliwia to dostawcom obsługującym tylko tekst
przezroczyste przetwarzanie multimodalnych ładunków.

Przepływ:

1. Pomiń, jeśli docelowy model już obsługuje wzrok (chyba że znajduje się na
   liście wymuszonego mostu `isVisionBridgeForcedModel`).
2. Wyodrębnij części obrazu za pomocą `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), która deleguje do **zunifikowanego detektora
   mediów** `detectMediaParts()` w `open-sse/utils/mediaParts.ts` — jedynego
   źródła prawdy dzielonego z filtrem kompatybilności combo.
   Wyodrębnienie jest dozwolone tylko dla najwyższego poziomu części kształtów,
   które `replaceImageParts` może wstawić z powrotem (kontrakt extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, oraz Responses API `input_image`. Zagnieżdżone trafienia i
   kształty tylko wskaźnikowe są materiałem do filtrowania combo i nigdy nie są
   wyodrębniane. Pomiń, jeśli nic nie znaleziono.
3. Rozwiąż konfigurację czasu wykonania za pomocą `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nowe klucze ustawień
   `modalityBridge*` wygrywają; klucze legacy `visionBridge*` pozostają jako
   **jedno-cykliczna rezerwa** (okno wycofania). Pomiń przed jakimkolwiek
   przetwarzaniem mediów, gdy most jest wyłączony.
4. Selekcja trybu (`modalityBridgeVisionMode`, zobacz tabelę poniżej) decyduje
   o przekierowaniu vs opisie. Przekierowanie zwraca `modifiedPayload` z
   zamienionym tylko `model`, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Ścieżka opisu: ogranicz obrazy do `maxImages`, skomponuj zadaniowy prompt,
   skonsultuj pamięć podręczną opisów, wywołaj model wzrokowy **w równoległości**
   (`Promise.allSettled`), i wstaw `[Image N]: <description>` tekstowe części w
   ich miejsce. Nieudany opis zwraca `null`, a oryginalna część obrazu jest
   **zachowana** (#4012) — z wyjątkiem ścieżki opisu combo, gdy każdy
   opis się nie powiódł, gdzie potwierdzony upstream niewzrokowy otrzymuje
   stub `(unavailable — no vision-capable provider connected)` zamiast (#8430).
6. Zwróć `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selekcja trybu (`modalityBridgeVisionMode`)

| Tryb       | Domyślny | Zachowanie                                                                                                                                                                                                                                                                                       |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔        | Legacy heurystyka, nietknięta (#6640/#7204): modele non-combo/`auto/` przekierowują do najlepszego modelu wzrokowego, chyba że oryginalny model już ma użyteczne poświadczenia (wtedy opisuje); cele combo zawsze opisują.                                                                       |
| `describe` |          | Zawsze opisuj — blok przekierowania jest całkowicie pomijany; wybrany przez użytkownika model zawsze odpowiada.                                                                                                                                                                                  |
| `reroute`  |          | Wymuś przekierowanie: ochrona modelu z poświadczeniami jest pomijana. Ochrona poświadczeń dla celu przekierowania wciąż obowiązuje — gdy nie istnieje użyteczny cel wzrokowy, żądanie przechodzi do opisu, więc surowe obrazy nigdy nie docierają do backendu obsługującego tylko tekst (#8430). |

Wymuszone tryby przerywają **przed** uruchomieniem heurystyki auto; zachowanie `auto`
jest identyczne bajtowo z ochroną przed PR-1.

#### Zakres klucza API (`visionBridgeKeyScope.ts`)

Gdy klucz API wywołującego ogranicza `allowedConnections`, pule kwot
(`allowedQuotas`) lub modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most wybiera tylko
modele przekierowania i opisu, które klucz może używać, na połączeniach, które klucz może
używać. Wywołanie opisu zawsze przechodzi przez samopętnię OmniRoute z
nagłówkiem `x-omniroute-self-loop-key-id`, więc otrzymujące żądanie czatu
wymusza politykę połączenia i modelu tego klucza ponownie. `enforceApiKeyPolicy()`
szanuje ten nagłówek tylko razem z nośnikiem samopętli, więc może tylko
zawęzić dostęp, a identyfikator, który nie jest rozwiązywany, jest odrzucany.

Jeśli żaden model wzrokowy nie jest dozwolony dla klucza, ścieżka opisu ustępuje,
a żądanie przechodzi bez zmian, to samo zachowanie fail-open, co wyłączona
ochrona (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Żądania bez klucza oraz klucze bez tych ograniczeń zachowują się dokładnie jak
wcześniej.

#### Zadaniowy opis promptu (`modalityBridgeVisionTaskAware`)

Domyślnie **prawda**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) dodaje
tekst **ostatniej wiadomości użytkownika** (przycięty do 500 znaków) do podstawowego
zapytania opisowego, kierując opis w stronę tego, o co użytkownik faktycznie pytał
(wzorzec codex-vision-proxy) i prosząc model wizji o transkrypcję widocznego
tekstu. Gdy flaga jest wyłączona — lub nie ma tekstu użytkownika — podstawowe
zapytanie jest używane bez zmian.

Własne zapytanie zgodne z OpenAI pętli samodzielnego opisu (`callVisionModelSingle()`
w `visionBridgeHelpers.ts`) zawsze żąda `image_url.detail: "high"` —
bezwarunkowo, dla każdego wywołującego/dostawcy, nie jest uzależnione od żadnego sygnału
klienta. Próbkowanie o niskiej szczegółowości obniża dokładność OCR dla dokładnie
tego zadania transkrypcyjnego, o które prosi to zapytanie, więc wywołanie opisu
zawsze żąda wysokiej szczegółowości, niezależnie od poziomu szczegółowości, który
użyto w oryginalnym przychodzącym zapytaniu. Dotyczy to tylko wewnętrznego ciała
zapytania opisu; nie zmienia to, jak OmniRoute przekazuje własne `image_url.detail`
wywołującego w głównym zapytaniu — ten domyślny jest stosowany osobno i tylko dla
wykrytych klientów OpenCode, w `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Oddział formatu wire Anthropic pętli samodzielnego opisu nie ma pola `detail`
i nie jest dotknięty żadnym z domyślnych ustawień.

#### Limit wyjścia opisu (`modalityBridgeVisionMaxChars`)

| Klucz                          | Domyślnie | Zakres            |
| ------------------------------ | --------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`       | `0` lub 100–50000 |

`0` (domyślnie) oznacza **brak limitu** — opis zwrócony przez
`callVisionModel()` jest przekazywany bez modyfikacji, zachowując istniejące
zachowanie. Każda wartość w zakresie 100–50000 przycina opis z sufiksem `…`
zanim zostanie wstawiony jako `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` w `src/lib/guardrails/visionBridge.ts`).
Zwiększ to dla zadań OCR o dużej szczegółowości, gdzie model downstream potrzebuje
pełnej transkrypcji; zmniejsz, aby ograniczyć użycie tokenów w gadatliwych modelach wizji.
Pole na pulpicie znajduje się na zakładce Wizja w panelu Zaawansowane
(`modality-bridge-max-chars` w `ModalityBridgeVisionTab.tsx`) i ogranicza każdą
wartość między 1 a 99 do dolnej granicy 100, pozostawiając wyraźne `0`
nietknięte — `0` jest ważną wartością Zod w swoim własnym prawie
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a nie tylko
"nieustawionym" domyślnym.

#### Cache opisu (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL w pamięci dla wyjść opisu, współdzielony w całym procesie.
Klucz = `sha256(imageRef + composedPrompt + configuredBridgeModel)` z
ramkowaniem długości-prefiksowej (bez kolizji granic pól). Składnik modelu to
**skonfigurowany** model mostu, a nie model, który faktycznie odpowiedział —
`callVisionModel` może wewnętrznie przechodzić do alternatywy, a kluczowanie według
prób byłoby fragmentacją cache. Nieudane opisy nigdy nie są buforowane. Ustawienia:

| Klucz                           | Domyślnie | Zakres  |
| ------------------------------- | --------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`    | —       |
| `modalityBridgeCacheTtlMinutes` | `60`      | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`     | 10–5000 |

#### Normalizacja obrazów zdalnych (pętla samodzielnego opisu/pobieranie base64)

Gdy most pobiera **zdalny** obraz samodzielnie — samodzielne wywołanie opisu
Anthropic i konwersja base64 formatu wire claude
(`ensureBase64ImagesForClaudeWire`), oba za pośrednictwem
`fetchRemoteImageAsDataUri()` w `visionBridgeHelpers.ts` — wynikowy URI danych
jest przekazywany przez `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) zanim zostanie osadzony w zapytaniu modelu wizji.
Obrazy o zbyt dużych rozmiarach są zmniejszane do **2048px długiego boku**
(co odpowiada limitowi zmiany rozmiaru, który OpenAI/Anthropic już stosują po stronie serwera),
co zmniejsza ilość przesyłanych bajtów/opóźnienie bez zmiany tego, co widzi model wizji.
Zmiana rozmiaru używa `sharp`, ładowanego za pomocą dynamicznego importu: na platformie,
gdzie jego natywna binarka nie ładuje się, `normalizeDataUri()` **nigdy nie zgłasza błędów** —
przechodzi do przekazywania oryginalnych bajtów, więc ścieżka opisu/konwersji base64
zawsze działa. Bajty, które nie są obrazami (pobranie, które nie zwróciło
rozszyfrowywalnego obrazu) są również przekazywane bez zmian. Ta normalizacja
jest ograniczona do obrazów, które most pobiera dla swojego własnego wywołania —
nigdy nie jest stosowana do surowego ładunku przekazywanego przez wywołującego,
zgodnie z zasadą mutacji tylko na zasadzie opt-in (Twarda zasada #20).

#### Schemat ustawień + migracja

Nowe klucze `modalityBridge*` są walidowane przez Zod w `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*`, oraz grupa
`modalityBridgeAudio*` używana przez Most Audio. Migracja
`141_modality_bridge_settings.sql` kopiuje istniejące wartości
`visionBridge*` do odpowiadających nowych kluczy (idempotentna, nigdy nie nadpisuje
ustawionej przez operatora wartości `modalityBridge*`); klucze dziedziczne pozostają
akceptowane jako zapas do odczytu przez jeden cykl wydania.

#### Nagłówek przejrzystości + statystyki

Odpowiedzi przekształcone przez opis niosą
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(zbudowane przez `buildModalityBridgeHeader()` w `modalityBridge/bridgeStats.ts`,
oznakowane przez `withModalityBridgeHeader()` w `src/sse/handlers/chatHelpers.ts`).
Przekierowane zapytania nie mają **żadnego** nagłówka — ładunek pozostał nietknięty,
a zamiana modelu jest już widoczna w polu `model` ciała odpowiedzi.

`GET /api/modality-bridge/stats` (autoryzacja zarządzania, ten sam poziom co
`GET /api/settings`) zwraca w pamięci liczniki dla każdej modalności
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` dla `vision`, `audio` i
`video`. `averageLatencyMs` używa `latencySamples`, a nie wszystkich prób, jako
swojego mianownika; operacja bez pomiaru nie wytwarza próbki o zerowym czasie
trwania. `bridged` pozostaje zgodnym wstecznie aliasem dla udanych
konwersji; nieudane próby nie zwiększają go.
Liczniki są resetowane przy ponownym uruchomieniu procesu z założenia
(telemetria, nie księgowość).

#### Konfiguracja pulpitu

Dedykowana strona pulpitu to
`/dashboard/settings/modality-bridge`. Jej zakładki `Vision`, `Audio`
i `Video` zachowują parametry zapytania podczas zmiany wartości `tab`.
Zakładka Vision ujawnia możliwość włączenia, tryb, wybór modelu (w tym
automatyczny domyślny), kontekstowe podpowiedzi, zaawansowane limity
czasu/obrazu/długości opisu/pamięci podręcznej, liczniki
czasowe oraz zabezpieczone żądanie próbki. Zakładka Audio jest również aktywna:
ujawnia możliwość włączenia, wybór modelu tylko STT z Auto, limity czasu/max-clip,
liczniki audio oraz test próbki `input_audio`. Zakładka Video jest funkcjonalna:
raportuje stan uruchomienia FFmpeg/ffprobe — jeden z czterech wyraźnych stanów UI
(`unknown`, gdy próba jest w toku lub nie mogła się zakończyć, `restricted` na
hoście pulpitu, który nie jest pętlą zwrotną, gdzie próba jest pomijana po stronie
klienta, `unavailable`, gdy została zbadana i potwierdzono brak, lub `available`
z wersjami FFmpeg/ffprobe) — utrzymuje limity enable/model/frame/video/timeout,
filtruje wybór modelu do modeli zdolnych do wizji i ujawnia liczniki wideo.

Dawna karta Vision Bridge w ustawieniach AI jest linkiem do
nowej strony; nie posiada już drugiej kopii formularza. Media Providers również
łączy przepływy Image-to-Text i Speech-to-Text z odpowiednimi zakładkami Modality
Bridge, nie usuwając istniejącego placu zabaw Speech-to-Text.

**Ominięcie przyjęcia samopętli:** gdy wywołanie describe przechodzi przez
własną samopętlę OmniRoute `/v1` (model dostawcy niestandardowy), sub-zapytanie
wysyła `x-omniroute-admission-bypass: internal` i jest uwierzytelniane
za pomocą rozwiązanej samopętli — lokalny `sk_omniroute` w trybie lokalnym lub
operator skonfigurowany `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env key (#1350),
więc wdrożenia `REQUIRE_API_KEY=true` mogą nadal wykonywać wywołanie describe.
Ominięcie jest honorowane tylko dla tych dokładnych poświadczeń, więc zewnętrzni
klienci nie mogą używać nagłówka do pomijania przyjęcia.

Domyślne ustawienia legacy znajdują się w `src/shared/constants/visionBridgeDefaults.ts`;
nowe domyślne ustawienia trybu/świadomości zadania/pamięci podręcznej oraz
resolver ustawień znajdują się w `src/shared/constants/modalityBridgeDefaults.ts`.
Zabezpieczenie ujawnia opcję konstruktora `deps`, aby testy mogły wstrzykiwać
fałszywe implementacje `getSettings` i `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Przechwytuje żądania czatu zawierające audio, zanim dotrą do celu, który nie jest
znany z akceptowania wejścia audio. Nigdy nie przekierowuje żądania czatu: części
audio są transkrybowane przez istniejący punkt końcowy wieloczęściowy zgodny z
OpenAI, a wybrany model czatu kontynuuje z transkryptami tekstowymi.

Przebieg:

1. Rozwiąż `supportsAudio` przez `getResolvedModelCapabilities()`. Wyraźne
   metadane rejestru dostawców mają pierwszeństwo, następnie statyczne metadane
   modelu, a następnie zsynchronizowane `modalities_input`. Zadeklarowana lista
   wejściowa bez `audio` to `false`; brak dowodów na zdolność pozostaje `null`.
   Zarówno `false`, jak i `null` aktywują konserwatywny most, podczas gdy `true`
   go omija.
2. Rozwiąż ustawienia `modalityBridgeAudio*` i wyodrębnij części audio
   na najwyższym poziomie, które można połączyć z każdej wiadomości przez
   wspólny detektor `detectMediaParts()`. Obsługiwane kształty przewodów to
   OpenAI `input_audio`, `audio_url` oraz `source.media_type: "audio/*"`.
   Zagnieżdżone audio jest wykrywane do routingu, ale nie jest usuwane przez
   ścieżkę łączenia. Praca jest ograniczona przez `modalityBridgeAudioMaxClips`;
   późniejsze części pozostają nietknięte.
3. Uznaj skonfigurowany `provider/model`, lub pozwól `selectAudioBridgeModel()`
   przejść przez `AUDIO_TRANSCRIPTION_PROVIDERS` w stabilnej kolejności katalogu
   i wybrać pierwszy model z użytecznymi aktywnymi poświadczeniami dostawcy.
4. `callAudioTranscription()` konwertuje audio w formacie base64/data-URI na
   wieloczęściowy `file`, lub pobiera zdalny `audio_url` przez publicznie
   dostępny outbound guard z przypinaniem DNS i limitem 25 MB. Następnie
   wysyła POST z plikiem i wybranym modelem do lokalnej samopętli `/v1/audio/transcriptions`,
   uwierzytelnionej za pomocą `resolveSelfLoopBearer()`. Istniejąca trasa transkrypcyjna
   wykonuje normalne wyszukiwanie poświadczeń, obsługę cooldown/rate-limit oraz
   dyspozycję dostawcy.
5. Udane wywołania zastępują swoje części `[Audio N]: <transcript>`. Wywołania
   są uruchamiane z `Promise.allSettled`: indywidualna awaria zachowuje oryginalną
   część audio (#4012 kontrakt). Jeśli każde wywołanie zawiedzie, a cel okaże się
   `supportsAudio === false`, części stają się
   `[Audio N]: (niedostępne — brak połączonego dostawcy STT)` (#8430 kontrakt). Dla
   nieznanego celu (`null`), wynik z wszystkimi awariami pozostaje nietknięty. Udowodniony
   cel tylko tekstowy bez użytecznych poświadczeń STT otrzymuje ten sam wyraźny
   stub bez wydawania wywołania sieciowego.

Udane transkrypty korzystają z ogólnoprocesowego cache LRU/TTL Modality Bridge.
Klucz łączy odniesienie audio, stabilną etykietę operacji `audio-transcription`
i wybrany model STT; nieudane próby nigdy nie są buforowane. Próby audio aktualizują
wspólne liczniki `bridged`, `cacheHits`, `failures` i `lastUsedAt`.
Przekształcone odpowiedzi zawierają
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nietknięte
żądania nie otrzymują segmentu Audio Bridge.

Ustawienia czasu działania są oparte na DB i walidowane przez Zod:

| Klucz                         | Domyślny | Zakres          |
| ----------------------------- | -------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —               |
| `modalityBridgeAudioModel`    | `""`     | Auto lub STT ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10            |

Wspólna pamięć podręczna pozostaje kontrolowana przez `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` oraz `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Przechwytuje najwyższe części wideo w Chat Completions `messages` i odpowiedziach
API `input` przed wywołaniem celu bez znanej natywnej obsługi wideo.
Obsługiwane kształty to `input_video`, `video_url`, `video_source`, adresy URL HTTPS
oraz `data:video/*;base64,...` URI danych. Zwykłe nazwy plików w tekście nie są traktowane
jako wideo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) odpowiada za przechodzenie przez żądanie,
sprawdzanie możliwości/polityki, agregację na poziomie żądania oraz ładunek odpowiedzi.
Prace związane z wideo — pozyskiwanie, pamięć podręczna całkowitych wyników, opis sekwencji
klatek (która łączy dowolny zadeklarowany przez wywołującego transkrypt audio) oraz metryki/abort/cleanup
na poziomie próby — są ukryte za `processVideoPart` w
`videoBridgePipeline.ts`, wywoływane raz na część wideo wewnątrz pętli `preCall`.
Ten moduł definiuje również wyraźne granice portów `VideoMediaBrokerPort`
(pozyskiwanie bajtów i ekstrakcja próbkowanych klatek), `VideoAudioTranscriptionPort`
(łączenie zadeklarowanego przez wywołującego transkryptu audio z próbkowanymi podpisami) oraz
`VideoDrilldownPort` (dziedziczony kształt surowego magazynu). Produkcja STT i retencja klatek
są zbudowane wokół opisującego portu przez `createVideoSttAdapter` i
`createVideoDrilldownAdapter`; ten ostatni korzysta ze wspólnego cyklu życia z nieprzezroczystym uchwytem.

Publiczna ścieżka żądania `/v1` nigdy nie importuje ani nie wywołuje podprocesu. Zdalne
wideo jest pobierane w granicach 50 MiB; wideo w formacie base64 inline ma
konserwatywny limit 36 MiB po dekodowaniu na wideo, aby model/wiadomości/ramka
mogły pozostać w publicznym limicie przyjęcia żądania JSON wynoszącym 50 MiB. Długość inline
i oszacowania rozmiaru po dekodowaniu są sprawdzane przed alokacją. HTTPS jest
wymagane na początkowym zdalnym URL i każdym przekierowaniu, korzystając z istniejącego
publicznego tylko zabezpieczenia wychodzącego z przypinaniem DNS. Bajty następnie przekraczają
dokładną wewnętrzną granicę brokera `POST /api/modality-bridge/video/extract`. Ta trasa jest zarówno
`LOCAL_ONLY`, jak i `SPAWN_CAPABLE`, akceptuje tylko uwierzytelnione żądanie
zaufanego loopback na poziomie procesu i nigdy nie akceptuje URL, ścieżki systemu plików,
wykonywalnego pliku ani listy argumentów. Pipeline rozmiaru ciała API i inkrementalny
czytnik ciała handlera niezależnie egzekwują limit wejściowy brokera wynoszący 50 MiB. Jego ograniczona kolejka
uruchamia jedną ekstrakcję na raz, pozwala na cztery oczekujące zadania i ogranicza
oczekujące wejście do 100 MiB.

Wewnątrz brokera `ffprobe` odczytuje prywatny lokalny plik; stała lista formatów
dozwolonych wyklucza formaty playlist i manifestów. Dla dozwolonych kontenerów rodziny MOV
zewnętrzne odniesienia danych MOV pozostają domyślnie wyłączone, a stałe polecenie
nie optuje w nie. Zarówno `ffprobe`, jak i `ffmpeg` korzystają z
listy dozwolonych protokołów tylko `file`, jednego wątku, stałych tablic argumentów, bez powłoki
i wykonywalnych plików rozwiązywanych z `PATH`. Strumienie pokrycia z dołączonym obrazem nie są
kandydatami do odtwarzania. Wszystkie strumienie do odtwarzania muszą spełniać limity, a
wyraźny domyślny strumień jest preferowany przed deterministycznym najniższym indeksem
zapasu. Wideo jest ograniczone do 600 sekund, 8192 pikseli na wymiar i
33 554 432 pikseli źródłowych. FFmpeg próbuje 1–16 środkowych klatek JPEG, skaluje długi brzeg
do maksymalnie 1024 pikseli bez powiększania mniejszych wejść i
nigdy nie otrzymuje URL. Próbkowanie jest domyślnie `uniform`. Opcjonalne
polityki `scene_aware` i eksperymentalne `segment_aware` wykonują jedno dodatkowe
stałe przejście FFmpeg nad już zweryfikowanym lokalnym strumieniem, wybierają ograniczone
czasy znaczników scen `showinfo` i deterministycznie wracają do tych samych
jednorodnych środków w przypadku niepowodzenia detektora, przekroczenia czasu, źle sformatowanego wyjścia lub pustego
zbioru kandydatów. Tryb świadomy segmentu przydziela próbki środkowe proporcjonalnie do
zweryfikowanych interwałów scen; dowody świadome segmentu i zachowanie zapasowe są
szczegółowo opisane poniżej. Twardy limit 16 klatek jest
stosowany po wyborze w każdej polityce. Gdy żądanie świadome sceny ma tylko
budżet jednego kadru, używa jednorodnego środka aktywnego pełnego wideo lub okna
fokusa i zgłasza `policyEffective: uniform`: pojedyncza wybrana klatka sceny
nie może zachować obu końców czasowych. Wywołujący może opcjonalnie dostarczyć
ograniczone okno fokusa (`start`/`end` sekundy); granice są ograniczone do
czas trwania mediów, odwrócone lub nieskończone okna są odrzucane, a wszystkie polityki
próbkowania są wykonywane tylko wewnątrz znormalizowanego interwału. Wynikowe
okno jest uwzględniane w metadanych próbkowania i w nieufnym prefiksie opisu,
aby modele downstream mogły odróżnić skoncentrowany fragment od pełnej
osi czasu.

Skupienie na podpisach semantycznych jest osobnym, wyraźnym ustawieniem. Domyślny tryb analizy
`full` zachowuje istniejący prompt klatki i nigdy nie przesyła tekstu żądania do modelu podpisów. W trybie
`focused` mostek odczytuje tylko najnowszy niepusty `text`/`input_text` stworzony przez użytkownika
z tego samego kontenera Chat lub Responses, normalizuje go do NFC, redukuje znaki kontrolne i białe znaki
oraz ogranicza do 500 punktów kodowych Unicode. Pusty wynik wraca do
dokładnego promptu `full`. Użyteczna wskazówka jest serializowana jako JSON w dedykowanym
bloku kontekstu użytkownika nieufnego i może tylko priorytetyzować obserwowalne szczegóły; nie
może nadpisywać osobnego ostrzeżenia przed podążaniem za instrukcjami widocznymi
lub słyszalnymi w mediach. Skupienie tekstowe nigdy nie wywnioskuje `start`/`end` ani nie zmieni
próbkownika czasowego.

#### FU-07 dowody segmentów strukturalnych

`segment_aware` wykorzystuje jeden ograniczony przebieg wstępnej analizy nad już zwalidowanym lokalnym strumieniem wideo. Stały łańcuch filtrów najpierw skaluje do maksymalnie 320 pikseli szerokości, wykrywa zmiany scen i zamrożone interwały, a następnie próbuje z częstotliwością 1 klatka na sekundę dla rozmycia, średniej luminancji oraz informacji przestrzennych/czasowych. Przebieg jest ograniczony do 600 próbek strukturalnych, jednego wątku FFmpeg/filter, tego samego protokołu i listy dozwolonych kontenerów tylko dla `file`, ograniczenia wyjścia procesu do 1 MiB oraz maksymalnie 30 sekund w ramach wspólnego przerywania/terminu brokera. Nigdy nie akceptuje polecenia, filtru, ścieżki ani URL z żądania.

Wartości strukturalne są deterministycznymi dowodami próbkowania, a nie semantycznym rozumieniem wideo. Nie wnioskowały o podmiotach, działaniach, napisach, mowie ani intencjach użytkownika. Granice scen i zamrożeń tworzą segmenty; pokrycie zamrożenia, rozmycie, ekspozycja, szczegóły przestrzenne i zmiany czasowe wpływają jedynie na to, jak istniejący budżet 1–16 klatek jest alokowany. Całkowicie zamrożony segment jest ograniczony do jednej klatki, podczas gdy segmenty niezamrożone konkurują o pozostały budżet. Gdy granice przewyższają klatki, zachowywana jest jednolita pokrycie osi czasu, aby szybkie wczesne cięcia nie mogły ukryć długiego segmentu końcowego. Granice scen w obrębie 1-sekundowej rozdzielczości analizy granicy zamrożenia są łączone.

Brakujące filtry, źle sformułowane/puste dowody, błąd detektora lub ograniczony czas wstępnej analizy kończą się otwarciem na dokładną politykę jednolitego środka. Przerwanie przez wywołującego lub termin brokera nie kończy się otwarciem: przerywa bieżący podproces, uniemożliwia późniejsze wydobycie klatek, a prywatne tymczasowe drzewo jest usuwane w `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuje deterministyczne rzeczywiste elementy FFmpeg dla oszczędności po deduplikacji napisów, alokacji budżetu na gęsty ruch, dowodów rozmycia/ekspozycji/SI-TI, szybkich cięć z długim ogonem oraz fałszywych pozytywów przy stopniowym zaniku. Rejestruje czas ściany wstępnej analizy i, gdzie dostępne jest `/usr/bin/time`, CPU dziecka oraz szczytowy RSS. Jego kontrole jakości są tylko oraklami strukturalnymi. Rzeczywista jakość modelu napisów pozostaje `HOLD`, ponieważ ten system nie ma autoryzowanego punktu końcowego ani zamrożonego sędziego. Oszczędności finansowe również pozostają `HOLD`, chyba że `--caption-cost-per-call-usd` dostarcza wyraźnej pozytywnej szacunkowej wartości na wywołanie; skrypt nigdy nie fałszuje żadnego wyniku.

Każda klatka jest ograniczona do 4 MiB, wszystkie surowe klatki razem do 23 MiB, a zserializowana odpowiedź brokera do 32 MiB. Prywatny tymczasowy katalog jest usuwany w `finally`. OmniRoute nie pakuje FFmpeg i nie akceptuje niestandardowej ścieżki do pliku wykonywalnego. Przed dodawaniem napisów, mostek stosuje konserwatywny przebieg wizualnej deduplikacji: każdy JPEG jest redukowany do bufora w odcieniach szarości 16×16 i porównywany tylko z ostatnią zachowaną klatką. Dla żądanego budżetu napisów powyżej jednej klatki, wydobycie dostarcza ograniczoną pulę kandydatów do maksymalnie dwukrotności tego budżetu i nigdy więcej niż 16 klatek. Żądany limit jest stosowany dopiero po deduplikacji, przy czym pierwsze i ostatnie wybrane kandydaci są zachowywani podczas ostatecznego wygładzania, gdy budżet wynosi co najmniej dwa. Wersjonowana polityka `grayscale-16x16-mean-cells-v2` wykorzystuje większą z różnicy średniej luminancji i stosunku komórek miniatur, których znormalizowana różnica wynosi co najmniej 0.05. Próg duplikacji to stała 0.04, wybrana dla przewidywalności, a nie ujawniona jako ustawienie w czasie wykonywania. Ten wtórny sygnał o wysokim kontraście zachowuje małe ruchy i widoczne zmiany tekstu, które porównanie tylko średnie może ukryć. Błędy komparatora lub dekodera kończą się otwarciem i zachowują pokrycie. Metadane wyjściowe oddzielają wydobytych kandydatów, pomyślnie użyte klatki oraz wizualne duplikaty, które zostały odrzucone.

Wyraźnie oznaczona część wideo może żądać znacznikowanej kartki kontaktowej. Mostek buduje maksymalnie siatkę JPEG o 4 kolumnach i 16 klatkach. Każda komórka o rozmiarze 512 pikseli umieszcza swój znacznik czasowy w wysokokontrastowym dolnym pasku, podczas gdy te same znaczniki czasowe pozostają w metadanych tekstowych do późniejszego powiązania i audytu. Cały JPEG pozostaje ograniczony do 32 MiB. Jeśli `sharp` nie może zdekodować ani skomponować siatki, mostek przechodzi do pojedynczych klatek JPEG; przerwanie klienta nadal propaguje się przez operację kartki.

Dowody promocji są celowo oddzielone od syntetycznego mikrobenchmarku kompozycji. `scripts/perf/video-bridge-contact-sheet-eval.ts` definiuje wersjonowany schemat A/B dla rzeczywistych modeli wizji zgodnych z OpenAI. Mierzy zgłoszone przez dostawcę tokeny, opóźnienie ściany end-to-end (w tym kompozycję kartki), liczbę wywołań modelu oraz zachowanie faktów zdefiniowane w manifeście. Surowe odpowiedzi modelu nie są zapisywane w raporcie; tylko sumy kontrolne SHA-256 i dopasowane identyfikatory faktów są zachowywane. System nie wykonuje żadnych wywołań sieciowych ani płatnych modeli, chyba że `--execute-real` jest przekazywane, a `--model`, `OMNIROUTE_BASE_URL` i `OMNIROUTE_API_KEY` są skonfigurowane. Bez tego wyraźnego rzeczywistego uruchomienia, jego czytelny maszynowo werdykt pozostaje `HOLD`; pomiary syntetycznego ładunku/liczby wywołań same w sobie nie są dowodem promocji.

Oddzielny `scripts/perf/video-bridge-promotion-eval.ts` przetwarza obserwacje FU-07 lub FU-09. Przyjęcie promocji wymaga wszystkich ośmiu syntetycznych rodzajów scenariuszy oraz oczyszczonego rzeczywistego klipu, co najmniej trzech mierzonych powtórzeń na rolę i przypadek, wszystkich dziesięciu zadeklarowanych metryk, podsumowań mediów/promptów/oczekiwanych faktów/ustawień, unikalnych identyfikatorów obserwacji oraz zweryfikowanej zasady A/B. Paragon wykonania wiąże podsumowanie korpusu, dokładny SHA kandydata i rewizję modelu. Brakujące lub nieprawidłowe pomiary pozostają `HOLD`, w tym CPU powyżej 30 s, szczytowy RSS powyżej 512 MiB lub wstępna analiza powyżej 30 s. To są limity przyjęcia dowodów, a nie nowa gwarancja egzekwowania RSS w czasie wykonywania.

FU-07 wymaga co najmniej 98% retencji jakości i latencji p95 nie większej niż 1.2x
bazowa, plus albo 0.05 absolutnej poprawy średniego przypomnienia zrównoważonego przypadków przy
równoważnych średnich wywołaniach podpisów, albo co najmniej 10% mniej średnich wywołań podpisów po
deduplikacji. FU-09 wymaga co najmniej 0.85 jakości, 95% retencji, 20% redukcji latencji p95
i 10% redukcji tokenów. Utrata krytycznych faktów, zgodność z wstrzyknięciem lub
brak użycia uniemożliwia promocję. Jedno wykonanie nie może promować niczego:
`--previous-report` potwierdza dwa odrębne, niepokrywające się, kolejno
kwalifikujące się wykonania tej samej polityki/wersji modelu/kandydata/korpusu. Eksperyment
próbkowania nie może potwierdzić eksperymentu z arkuszem kontaktowym.

Kolekcjonery powinny oceniać odpowiedzi w pamięci i zapisywać `responseDigest` oraz
metryki i powiązania obserwacji, nigdy tekst odpowiedzi. Konsument również odczytuje
dziedziczne surowe obserwacje, ale nigdy nie kopiuje tego tekstu do swoich raportów. Dokładnie
jeden z `responseDigest` lub `rawResponseText` jest akceptowany dla każdej obserwacji.
Wersjonowana lista dozwolonych pozostaje pusta z niezmiennym domyślnym `hold`. Kwalifikujący się
element wymaga odniesienia do dowodu, polityki, wersji modelu, dokładnego
SHA kandydata, skrótu manifestu i dwóch odrębnych identyfikatorów uruchomienia; sprzeczne konteksty
są odrzucane. Te metadane są umową audytową, a nie dowodem, że odniesiony
plik zawiera autentyczne pomiary. Przejrzyj rzeczywiste dowody przed dodaniem
jakiegokolwiek wpisu. Punkt końcowy statystyk zarządzania i pulpit nawigacyjny Video ujawniają
konserwatywną gotowość. Samo skonfigurowane alias modelu nie ustala jego wersji ani
SHA bieżącego kandydata, więc bieżący pulpit zgłasza `HOLD` zamiast
ponownie używać kwalifikowalności z innego kontekstu wykonania. Wyraźny wybór eksperymentalny
pozostaje oddzielony od promocji; żaden domyślny nie jest automatycznie zmieniany.

Wywołujący mogą dołączyć opcjonalną tablicę `transcript.cues` do wspieranego fragmentu
wideo, gdy już posiadają wyrównany tekst. Każdy sygnał musi zawierać `text`, skończony
interwał `start`/`end` wewnątrz badanej długości oraz dozwolone `source`
(`client`, `embedded` lub `audio-bridge`); `confidence` domyślnie wynosi
`1` i musi pozostawać między `0` a `1`. Dokładne duplikaty sygnałów są łączone.
OmniRoute nigdy nie rozpoczyna transkrypcji z tych metadanych: zweryfikowane sygnały są
kopiowane do opisanego wyniku z źródłem, pewnością i interwałem, i są renderowane jako
niewiarygodne obserwacje obok podpisów klatek. Nieprawidłowy, poza zakresem lub
bezproweniencyjny tekst jest odrzucany, a nie mieszany z strumieniem podpisów. Oba kanały
transkryptu w ciele żądania normalizują dostarczoną proweniencję do `client`, w tym
samoasertowane etykiety `embedded` lub `audio-bridge`. Tylko adapter należący do serwera
może przypisać te zaufane etykiety przez argument `trustedSource` tylko w kodzie; pole JSON
żądania nie może dotrzeć do tego argumentu. Tekst transkryptu pozostaje niewiarygodną treścią
pochodzącą z mediów, niezależnie od jego proweniencji, i nigdy nie może decydować o
autoryzacji.

Zaawansowany wywołujący może dostarczyć ścieżkę `audioTranscript` dla tego samego wideo;
jest traktowana jako tekst dostarczony przez klienta, a nie dowód transkrypcji serwera.
Szew fuzji uruchamia wizualne i audioobserwacje pod
jednym terminem i sygnałem przerwania, porządkuje je na wspólnej osi czasu, łączy
dokładne duplikaty i zgłasza częściowy wynik, gdy tylko jedna strona odniesie sukces.
Nieprawidłowy `audioTranscript` degraduje do tego częściowego wyniku — wizualny
opis jest zachowywany, a gałąź audio rejestruje zsanitowany kod błędu —
zamiast niepowodzenia całego wideo. Dostępność na gałąź, flaga częściowa
i zsanitowane kody błędów są zachowywane w opisanym wyniku, w
metadanych zabezpieczeń (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), w metadanych pamięci podręcznej wyników oraz w licznikach fuzji mostu.
Domyślna ścieżka Video Bridge nie wywołuje mowy na tekst
ani nie pobiera drugiej kopii mediów; bez tej wyraźnej ścieżki pozostaje
tylko wideo.

**Retencja transkryptu (#12150 P1).** To stosuje się automatycznie, gdy
Video Bridge (samo w sobie opt-in) renderuje sygnał transkryptu — nie ma osobnej
flagi retencji. Gdy żądanie renderuje jakikolwiek sygnał transkryptu (deklarowany przez wywołującego
`transcript` lub zintegrowany `audioTranscript`), bariera oznacza go
`videoBridgeObserved` i produkuje redagowany cień opisu wideo —
identyczne renderowanie, w którym ciało wolnego tekstu każdego sygnału jest zastępowane
`[redacted-video-transcript]`, zbudowane przez zastąpienie strukturalnego pola sygnału
przed złożeniem ciągu (nigdy przez analizowanie spłaszczonego tekstu, więc żaden
zawartość sygnału — wrogie lub zwyczajne, w tym ciała zawierające `]`, takie jak
`[niesłyszalne]`/`[muzyka]` — nie może przetrwać). Utrwalony dziennik wywołań zamienia
każdą część tekstu pochodzącego z wideo na ten redagowany cień, dopasowany przez równość
zawartości; kotwica `fullText` jest ponownie odczytywana z zakończonego ładunku
barierowego przed wywołaniem, więc dopasowanie nadal się udaje po późniejszych barierach
łańcuchowych (maski PII i poświadczeń, priorytety 10/95) przepisują tekst opisu w miejscu i
po systemowym podpowiedzi/przekazaniu/wstrzyknięciu pamięci przekształcają tablicę wiadomości. Ciało
wysłane w górę do modelu pozostaje niezmienione. Obserwowane żądanie również nie
zapełnia trwałej pamięci (oba wyodrębnienia pochodzące z żądania i odpowiedzi są pomijane),
więc odpowiedź modelu nie może powtórzyć tekstu transkryptu w pamięci.

**Pola surowego wideo (#12430).** Gdy most jest włączony, a natywne wsparcie wideo jest nieznane lub
nieobecne, zdefiniowane pola `transcript`/`audioTranscript` również aktywują `videoBridgeObserved`,
nawet po niepowodzeniu opisu lub limicie `maxVideos`. `null` i puste ciągi się liczą; nieobecne pola
i metadane nie-wideo nie. Zachowane kopie redagują te pola lub pomijają żądanie, a pamięci/pamięci podręcznej są pomijane.

Na tych ścieżkach awaryjnych, ważne wskazówki wywołującego stają się wspieranymi częściami `text`/`input_text`, a nie niestandardowymi polami dostawcy. Obie dostarczone przez żądanie ścieżki pozostają jako nieufne obserwacje `client`, z wyraźnym ostrzeżeniem, że wideo nie zostało opisane, a znaczniki czasowe nie zostały zweryfikowane w stosunku do mediów. Obecne budżety 256-wskazówkowe/64-KiB całkowite i na wskazówkę mają zastosowanie do obu ścieżek razem; znaczniki czasowe muszą mieścić się w 600-sekundowym limicie brokera oraz w dowolnym dostarczonym oknie skupienia. Nieprawidłowe ścieżki są odrzucane, a nie przesyłane jako dowolny tekst; ważny odpowiednik może być nadal używany, chyba że ich łączny budżet zostanie przekroczony. Puste/puste pola nie dodają tekstu. Żaden pobór mediów ani transkrypcja nie jest dodawana przez tę awaryjną ścieżkę. Pola rozszerzenia transkryptu są usuwane z awaryjnego nośnika wideo oraz jego obiektów `video_url`/`source`. Lista dozwolonych połączeń OpenAI pozostaje surowa; nieznane natywne nośniki wideo pozostają dostępne, a znane cele tylko tekstowe mają bezpieczne znaczniki. Strukturalne cienie redakcji chronią dołączony tekst transkryptu, podczas gdy oryginalne żądanie należące do wywołującego pozostaje niezmienione. Natywnie wspierane cele i wyłączone mosty zachowują swoje dotychczasowe zachowanie omijające.

Dodatkowe zachowane kopie używają tego samego sygnału obserwowanego żądania. Surowy zrzut żądania klienta przed zabezpieczeniem, oczekujące żądanie w pamięci oraz wczesny dziennik odrzuconych żądań strukturalnie zastępują pola transkryptu w częściach wideo; ciągi poleceń syntetyzowane przez etapy pipeline i przekazywanie kontekstu są redagowane w miejscu ciała żądania, które zostało zachowane. Utrzymywany znacznik `video_content_removed` powoduje, że kontynuacja `previous_response_id` kończy się niepowodzeniem, zamiast rekonstruować tekst, który został celowo odrzucony. Jeśli obserwowane żądanie traci swój cień redakcji na część przed zapisaniem, lub nawet jeden z kilku cieni wideo nie pasuje po późniejszych mutacjach żądania, zachowane ciało żądania jest całkowicie pomijane zamiast zachowywać częściowo zredagowany transkrypt.

Dla obserwowanego żądania, odpowiedź modelu może cytować dowolną część transkryptu bez strukturalnej granicy wskazówki. Jego zachowany dziennik połączeń `responseBody` jest zatem zastępowany przez znacznik pominięcia; szczegółowy artefakt pipeline (który może obejmować ciała upstream/klienta i fragmenty strumienia) nie jest zachowywany. Pamięci podręczne semantyczne, idempotencyjne i odtwarzania rozumowania omijają odczyty i zapisy dla tego żądania. Żądanie dostawcy i widoczna odpowiedź klienta pozostają niezmienione. Wczesne bajty keepalive są usuwane z tymczasowego bufora, gdy szczegółowy artefakt jest pomijany. Ostrzeżenie Kiro o źle sformułowanym EventStream raportuje tylko liczbę bajtów ładunku, nigdy jego zawartość ani surowy błąd parsera JSON.
To nie twierdzi, że każda niezwiązana diagnostyka dostawcy/wtyczki została audytowana; szersze zamiatanie zachowanych zlewów jest śledzone w #11658.

Wewnętrzny cykl życia `/api/modality-bridge/video/drilldown` jest oddzielnym, pętlą/uwierzytelnionym podłożem pamięci podręcznej. Każda operacja wymaga również kanonicznego, nieprzezroczystego identyfikatora głównego. Zanim wywołujący produkcji zostanie włączony, musi wyprowadzić ten identyfikator z uwierzytelnionego najemcy i nigdy nie może przesyłać wartości wybranej przez klienta. Klucze pamięci podręcznej wiążą tego głównego z kanonicznymi identyfikatorami sesji i odniesienia wideo, przechowują tylko ich klucze pochodne SHA-256 i ograniczają zarówno odczyty, jak i usunięcia do tego samego głównego. Pamięć podręczna przechowuje maksymalnie 16 pochodnych klatek JPEG na wpis, wygasza je po dziesięciu minutach i wspiera ograniczone odczyty `start`/`end` lub jawne usunięcie sesji.

Każdy główny jest ograniczony do 16 wpisów i 64 MiB kanonicznych danych JPEG. Te limity są niezależne od globalnego limitu 64 wpisów/256 MiB: presja kwoty głównej usuwa tylko najmniej używane wpisy tego głównego, zanim rozważona zostanie globalna ewikcja LRU. Wygasłe wpisy są usuwane zarówno z głównego, jak i globalnego rozrachunku w przypadku aktywności pamięci podręcznej, podczas gdy anulowanie i niepowodzenie walidacji nie powodują częściowej wymiany.

Pamięć podręczna odrzuca niekanoniczny Base64, nadmiarowe wypełnienie, media nie-JPEG, źle sformułowane lub obcięte JPEG oraz JPEG, które generują ostrzeżenie podczas ograniczonego pełnoobrazowego dekodowania `sharp`. Ponownie koduje każdy zaakceptowany obraz jako kanoniczny JPEG, wyprowadza szerokość i wysokość z dekodowanych bajtów zamiast ufać polom wywołującego, i odrzuca wszelkie końcowe bajty poliglotów zamiast je zachowywać. Tylko ograniczony kanoniczny skompresowany bufor jest obciążany obydwoma kwotami. Limit JSON wire obejmuje narzut Base64 dla 32 MiB limitu odczytu zdekodowanego. Każda
przechowywana derivacja rejestruje swój zweryfikowany format/rozdzielczość JPEG, politykę próbkowania, wersję pochodzenia, czas utworzenia, serwerowo obliczony hash treści oraz zhashowany odniesienie rodzica plus hash treści rodzica zaufanego wywołującego. Anulowanie jest sprawdzane między asynchronicznymi fazami dekodowania/hashowania przed atomowym zatwierdzeniem pamięci podręcznej.

Producent produkcji ponownie wykorzystuje już wyprowadzone ramki brokera tylko po pomyślnej analizie wizualnej, bez drugiego pobierania/ekstrakcji wideo. Wymaga operatora `modalityBridgeVideoDrilldownEnabled=true`, surowego `drilldown: true` na część oraz uwierzytelnionego identyfikatora rekordu klucza API. Wartości główne/sesji zadeklarowane przez klienta nigdy nie ustanawiają własności. Bez wszystkich trzech warunków nie hashuje, nie zmienia rozmiaru ani nie zachowuje dodatkowych klatek. Niepowodzenie w zachowaniu chroni użyteczną odpowiedź wizualną. Zgłoszone żądania omijają pamięć podręczną wyników całego wideo, więc wyniki w pamięci podręcznej nigdy nie odtwarzają uchwytów.

Sukcesywne odpowiedzi JSON i SSE ujawniają maksymalnie cztery nieprzezroczyste uchwyty w ograniczonym nagłówku `x-omniroute-video-drilldown`. Autoryzowane pochodzenia przeglądarek mogą odczytywać ten nagłówek bez poszerzania polityki CORS. Nowe uchwyty używają `v1.<32-bajtowy losowy token base64url>`, a rejestr zachowuje tylko ich hashe SHA-256. Odczytywacz/parsing nagłówków akceptuje również legacy 64-hex tokeny. Uwierzytelniony publiczny konsument to `GET /api/v1/video-bridge/drilldown?handle=...`, niezależnie kontrolowany przez `modalityBridgeVideoDrilldownRemoteEnabled=true`. Wyraźne trwałe fałszywe cofa dostęp, nawet gdy włączona jest legacy `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env fallback. Produkcyjna retencja ma analogiczny legacy `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Oba fallbacki domyślnie są wyłączone.

Konsument czerpie własność z uwierzytelnionego klucza, stosuje politykę klucza i zwraca ten sam 404 dla nieznanych, wygasłych i uchwytów innego klucza. Akceptuje `variant=preview|standard|detail` (maksymalne wymiary JPEG 320/640/1280, nigdy nie powiększane), `limit=1..8` (lub legacy `frames` alias, nigdy oba), zero-based `page` oraz opcjonalne sekundy skupienia `start`/`end`. Duplikaty kluczy zapytania i odwrócone okna skupienia są odrzucane. Każda zwrócona wariant ma hash swojej rzeczywistej zawartości i metadanych rozdzielczości, powiązanych z zachowanym źródłem. Warianty są generowane przy odczycie, a nie przechowywane jako dodatkowe zachowane kopie. Odpowiedź JSON, w tym Base64/envelope, jest ograniczona do 32 MiB; zbyt duża strona zwraca 413, a klient musi zażądać mniejszej liczby klatek. Odczyty sprawdzają anulowanie wokół każdego zmniejszenia rozmiaru i ponownie sprawdzają ważność uchwytu przed zwróceniem. `DELETE` przez właściciela jest idempotentne; usunięcie lub wygaśnięcie TTL zwalnia zachowane źródło i księgowość użytkowania.

Wspólny magazyn jest lokalny dla procesu: uchwyty wygasają po restarcie i nie są przenoszone między niezależnymi procesami OmniRoute. Statystyki zarządzania ujawniają skuteczną politykę retencji/zdalną oraz agregowane zachowane wpisy/bajty, nigdy media, odniesienia, identyfikatory główne ani uchwyty. Panel ustawień wideo pokazuje te wartości i może zachować oba przełączniki zgody. Ta dokumentacja implementacyjna nie jest dowodem na wdrożenie na żywo ani promocję; akceptacja rzeczywistego modelu jest śledzona oddzielnie.

Klatki są podpisywane sekwencyjnie z skonfigurowanym modelem Wideo. Pusty nadpis Wideo dziedziczy ustawienie Wizji; jeśli oba są puste, auto-router Wizji wybiera skuteczny model zdolny do wizji. Udane podpisy zastępują oryginalną część stabilnym prefiksem `[Opis wideo:`, który również oznacza tekst jako nieufne obserwacje pochodzące z mediów i informuje modele downstream, aby nie podążały za instrukcjami znalezionymi w mediach. Klucze pamięci podręcznej podpisów klatek zawierają bajty JPEG, podpowiedź, znacznik czasu i skuteczny model; tylko udane podpisy są buforowane. Wpisy pamięci podręcznej zachowują rzeczywisty udany model producenta, w tym model zapasowy; mostek zgłasza `mixed`, gdy różne klatki były produkowane przez różne modele. Trafienie w pamięci podręcznej ponownie wykorzystuje tożsamość producenta zamiast oznaczać ją jako żądany plan routingu. Pamięć podręczna wyników całego wideo jest kluczem na każdym wejściu, które zmienia wyjście — podpowiedź, skuteczny model, polityka próbkowania, liczba klatek, tryb analizy semantycznej, SHA-256 odcisk palca znormalizowanej podpowiedzi skupienia, okno skupienia, `transcript`, `audioTranscript` oraz flaga kontakt-sheet — więc zmiana dowolnego z tych wymiarów to nietrafienie w pamięci podręcznej, nigdy przestarzałe ponowne użycie. Wersja polityki wizualnej deduplikacji, próg i ograniczona liczba klatek kandydatów są również jawne w kluczu pamięci podręcznej wyników i metadanych; zmiana polityki nie może zatem ponownie wykorzystać przestarzałego opisu całego wideo. Metadane pamięci podręcznej wyników v4 zachowują tryb i odcisk palca, nigdy surowe zadanie użytkownika. Metadane guardrail zgłaszają zarówno żądane, jak i skuteczne tryby analizy; żądany tryb `focused` bez użytecznego tekstu użytkownika jest zgłaszany jako skutecznie `full`.

Guardrail wyodrębnia każdą wspieraną część wideo, ale nie opisuje więcej niż `modalityBridgeVideoMaxVideos`. Dla celu, który udowodniono, że ma `supportsVideo === false`, nieudane i przekraczające limit wideo stają się wyraźnymi bezpiecznymi znacznikami tekstowymi, więc żadne surowe wideo nie przetrwa. Gdy zdolność jest nieznana, te części zachowują swój nośnik wideo; wszelkie zapasowe transkrypty podążają za ograniczoną konwersją tekstu powyżej. Cele z `supportsVideo === true` omijają mostek. Sygnał anulowania żądania klienta propaguje się przez pobieranie, kolejkę brokera, podprocesy i wywołania podpisów; anulowania zatrzymują się między wideo i nigdy nie otwierają się na surowe media.

Ustawienia czasu wykonywania są oparte na DB i walidowane przez Zod:

| Klucz                               | Domyślnie   | Zakres / zachowanie                                                                                        |
| ----------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Opcjonalny czas wykonywania, opt-in                                                                        |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` zachowuje ogólne podpisy; `focused` używa ograniczonego, nieufnego kontekstu ostatniego użytkownika |
| `modalityBridgeVideoModel`          | `""`        | Dziedziczy model Mostka Wizji                                                                              |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                       |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` lub proporcjonalny `segment_aware`; awaria detektora przechodzi na `uniform`      |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                        |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                             |

Legacy utrwalone wartości czasu oczekiwania wideo powyżej 120 sekund są ograniczane do
terminu brokera; nowe ustawienia powyżej tego limitu są odrzucane.
`GET /api/modality-bridge/video/runtime` wymaga zaufanego stemplowanego lokalnie
połączenia przed uwierzytelnieniem lub badaniem czasu działania, a następnie wymaga
uwierzytelnienia zarządzania. Zwraca tylko `available`, oczyszczone wersje FFmpeg/ffprobe
i stały powód, gdy czas działania jest niedostępny. Wewnętrzny punkt końcowy ekstrakcji nie jest
publicznym API przesyłania: nasycenie kolejki zwraca `503` plus `Retry-After`, rozłączenie
wywołującego zwraca `499`, a stały termin brokera zwraca `504`. Przekształcone odpowiedzi
dodają `video->text;model=<visionModel>;parts=<videos>` do centralnego
nagłówka `x-omniroute-modality-bridge` bez usuwania segmentów Wizji lub Dźwięku.

### Masker PII (`piiMasker.ts`)

Działa na **obu** etapach.

- **`preCall`** klonuje ładunek, przechodzi przez `system`, `messages`, `input` i
  `prompt` (w tym zwykłe elementy tekstowe) i stosuje `processPII()` (z
  `@/shared/utils/inputSanitizer`) do pól tekstowych `content`/`text`. Gdy
  `PII_REDACTION_ENABLED=true`, wykryte PII jest redagowane w wychodzącym
  ładunku. Jest to niezależne od `INPUT_SANITIZER_MODE` (które kontroluje
  politykę wstrzykiwania promptów). Gdy redakcja jest wyłączona, rejestruje
  liczby wykryć bez przepisywania treści.
- **`postCall`** głęboko klonuje odpowiedź, uruchamia `sanitizePIIResponse()` oraz
  maskera kształtu API Odpowiedzi (`maskResponsesOutput` — obejmuje
  `output_text` i `output[].content[].text`). Jeśli wystąpi jakakolwiek redakcja,
  zmodyfikowana odpowiedź zastępuje oryginalną.

Bariera nigdy nie blokuje; tylko anotuje (`meta.detections`,
`meta.redacted`) lub przepisywuje.

### Wstrzykiwanie Promptów (`promptInjection.ts`)

Wykrywa struktury adwersarialne w dostarczonej przez użytkownika treści i egzekwuje
skonfigurowaną politykę. Zachowanie jest napędzane przez zmienne środowiskowe i opcje
konstruktora:

| Ustawienie   | Zmienna środowiskowa                                                                                 | Domyślnie | Efekt                                                                                                                                                                                                                      |
| ------------ | ---------------------------------------------------------------------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Włączone     | `INPUT_SANITIZER_ENABLED`                                                                            | `true`    | Gdy `false`, bariera działa w trybie skróconym.                                                                                                                                                                            |
| Tryb         | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`    | Polityka wstrzykiwania: `block`, `warn` lub `log`. (`redact` jest akceptowane dla zgodności wstecznej, ale **nie** usuwa tekstu wstrzykiwania; żądanie przepisywania PII jest kontrolowane przez `PII_REDACTION_ENABLED`.) |
| Próg blokady | opcja `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`    | Minimalna powaga wymagana do zablokowania. Średnia jest domyślnie tylko do obserwacji.                                                                                                                                     |

**Priorytet trybu** (`getMode`): `options.mode` wywołującego →
`INJECTION_GUARD_MODE` **przełącznik flagi funkcji DB** (Dashboard → Ustawienia →
Flagi funkcji) → zmienna środowiskowa `INJECTION_GUARD_MODE` → zmienna środowiskowa `INPUT_SANITIZER_MODE` →
`warn`. Przełącznik na pulpicie wygrywa więc nad zmiennymi środowiskowymi, więc UI Flagi
Funkcji kontroluje działającą barierę na żywo (bez ponownego uruchamiania). Odczyt z DB jest bezpieczny:
jeśli wystąpi błąd, bariera wraca do zachowania opartego na zmiennych środowiskowych, a gdy nie
ustawiono przełącznika, zachowanie jest identyczne z rozwiązaniem opartym tylko na zmiennych środowiskowych.

Źródła wykrywania:

1. `sanitizeRequest()` z `@/shared/utils/inputSanitizer` (wspólny zestaw detektorów
   używany w innych miejscach w pipeline).
2. Wbudowane `DEFAULT_GUARD_PATTERNS` (aktualnie `system_override_inline` i
   `markdown_system_block`, obie o wysokiej powadze).
3. Opcjonalne `customPatterns` przekazywane przez opcje konstruktora (ciągi, regex,
   lub rekordy `{ name, pattern, severity }`).

Gdy `mode === "block"` **i** przynajmniej jedno wykrycie spełnia próg
powagi, `preCall` zwraca `{ block: true, message: "Żądanie odrzucone:
wykryto podejrzaną treść" }`. W trybach `warn`/`log` bariera rejestruje, ale
pozwala na wywołanie. Wspólny pomocnik `evaluatePromptInjection()` jest również eksportowany
dla wywołujących, którzy muszą ocenić prompt bez przechodzenia przez rejestr.

**Zakres skanowania (v3.8.20):** detektor bada tylko **pierwsze 16 KB**
połączonego tekstu promptu — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtów) w
`src/shared/utils/inputSanitizer.ts`. Zarówno `detectInjection()`, jak i
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` przed uruchomieniem
pętli wzorców. Dyrektywy wstrzykiwania znajdują się blisko początku wejścia, więc to
ogranicza CPU/GC regex w ładunkach o wielkości setek KB bez osłabiania wykrywania (por.
#3932, #4041).

### Masker Poświadczeń (`credentialMasker.ts`)

Działa na **obu** etapach, jako ostatni w domyślnej kolejności (priorytet `95`). Redaguje
znane wzory kluczy API / tokenów sekretów z wychodzącego
ładunku (treść wiadomości, argumenty wywołania narzędzi, wyniki narzędzi) **i** odpowiedzi dostawcy, aby
poświadczenie wklejone do promptu (lub zwrócone przez wynik narzędzia) nie zostało ujawnione
dostawcy upstream ani z powrotem do klienta.

- **Tylko na zasadzie opt-in**, ta sama konwencja co redakcja PII (Twarda zasada #20-adjacent):
  wyłączona, chyba że `settings.credentialRedactionEnabled === true` **lub**
  `CREDENTIAL_REDACTION_ENABLED=true`. Gdy jest wyłączona, bariera nie działa —
  nigdy nie blokuje i nigdy nie przepisuje.
- `redactCredentials()` przechodzi przez pełne drzewo ładunku/odpowiedzi (`walkValue()`,
  bezpieczne dla zanieczyszczenia prototypu, bezpieczne cyklicznie dzięki `WeakSet`) i zastępuje
  dopasowania miejscem zastępczym `[REDACTED:<typ>]`, klonując tylko te gałęzie, które
  faktycznie się zmieniły.
- `CREDENTIAL_PATTERNS` obejmuje klucze dostawców LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokeny VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), klucze płatności (Stripe, Square), klucze
  chmurowe (klucz dostępu AWS, Twilio, SendGrid, Mailgun), klucze prywatne / JWT,
  ciągi połączeń zawierające dane uwierzytelniające (`mongodb://user:pass@...`, itd.), oraz
  ogólny wzór nagłówka `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Klucze w kształcie nagłówka (`authorization`, `x-api-key`, `api-key`,
  `apikey`) są redagowane strukturalnie (tylko wartość, prefiks schematu jak
  `Bearer `/`Basic ` zachowany) zamiast za pomocą ogólnego wyrażenia regularnego.
- Bariera nigdy nie blokuje; tylko przepisuje (`modifiedPayload` /
  `modifiedResponse`) i anotuje (`meta.credentialsRedacted`, `meta.count`).

Guard regresji: `tests/unit/credential-masker-guardrail.test.ts`.

## Podstawowy Kontrakt (`base.ts`)

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
  block?: boolean; // true przerywa łańcuch
  message?: string; // wyświetlane przy blokowaniu
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // zwracane przez preCall w celu przepisania żądania
  modifiedResponse?: TValue; // zwracane przez postCall w celu przepisania odpowiedzi
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

Guardrail sygnalizuje "brak zmian" przez zwrócenie `void`, `{}` lub
`{ block: false }`. Zwrócenie `modifiedPayload`/`modifiedResponse` zastępuje
wartość przepływającą przez łańcuch dla dalszych guardrails.
`signal?: AbortSignal` przenosi cykl życia wywołującego do guardrails. Przerwanie żądania to celowe wyjątek fail-open: mosty medialne przestają działać i sprzątają bez przywracania surowych mediów do celu, o którym wiadomo, że go nie obsługuje.

## Rejestr (`registry.ts`)

Singleton `guardrailRegistry` udostępnia:

- `register(guardrail)` — dodaje (lub zastępuje według znormalizowanej nazwy) zabezpieczenie i
  ponownie sortuje według rosnącego `priority`.
- `clear()` / `list()` — pomocnicze funkcje administracyjne.
- `runPreCallHooks(payload, context)` — iteruje aktywne zabezpieczenia, przekazuje
  `payload` przez `modifiedPayload` i zatrzymuje się przy pierwszym `block: true`.
- `runPostCallHooks(response, context)` — ten sam przepływ po stronie odpowiedzi.
- `resetGuardrailsForTests({ registerDefaults })` — czyści stan i opcjonalnie
  ponownie rejestruje wartości domyślne dla czystej izolacji testów.

Oba uruchamiacze zwracają `{ blocked, payload|response, results, guardrail?, message? }`,
gdzie `results` to tablica rekordów `GuardrailExecutionResult`, które zawierają
pola `blocked`, `skipped`, `modified`, `error` i `meta` dla każdego zabezpieczenia,
przydatne do śledzenia.

### Wyłączanie zabezpieczeń na żądanie

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agreguje
zdeduplikowaną listę nazw zabezpieczeń, które powinny zostać pominięte dla bieżącego
żądania. Źródła (wszystkie opcjonalne, wszystkie połączone):

- `apiKeyInfo.disabledGuardrails`
- Treść żądania `disabledGuardrails` (najwyższy poziom)
- Treść żądania `metadata.disabledGuardrails`
- Nagłówek `x-omniroute-disabled-guardrails` (lub starszy
  `x-disabled-guardrails`)

Wartości mogą być tablicami ciągów znaków lub ciągiem znaków oddzielonych przecinkami; nazwy są
normalizowane do małych liter w formacie kebab-case (`pii_masker` → `pii-masker`). Wynik
jest przekazywany przez `context.disabledGuardrails` do rejestru, który pomija
pasujące zabezpieczenia (`skipped: true` w `results`).

## Kolejność wykonania

Dla każdego żądania przechodzącego przez `src/sse/handlers/chat.ts` oraz
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` buduje listę pomijanych elementów z klucza API, treści (body)
   oraz nagłówków.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` uruchamia mechanizmy zabezpieczające (guardrails) w rosnącym
   porządku priorytetów:
   - Wyłączone zabezpieczenia są rejestrowane jako `skipped`.
   - Metoda `preCall` każdego zabezpieczenia może przepisać ładunek (payload) za pomocą `modifiedPayload`.
   - Pierwsze wystąpienie `block: true` przerywa łańcuch, a obsługa zwraca
     odpowiedź odrzucenia przez mechanizm zabezpieczający.
3. Potencjalnie przepisywany ładunek trafia do routingu hybrydowego (combo routing) oraz
   wysyłki nadrzędnej (upstream dispatch).
4. Po skompletowaniu odpowiedzi, `guardrailRegistry.runPostCallHooks(...)`
   uruchamia ten sam łańcuch dla odpowiedzi. Wystąpienie `block: true` w tym miejscu odrzuca
   odpowiedź nadrzędną.

Zabezpieczenia, które zgłaszają błędy, są rejestrowane z wpisem `error: <message>` i logowane przez
`logger.warn`, ale łańcuch jest kontynuowany — zgodnie z założeniem o otwartości na awarię (fail-open).

## Konfiguracja

Zmienne środowiskowe odczytywane przez wbudowane mechanizmy zabezpieczające:

| Zmienna                               | Używana przez             | Efekt                                                                                                                |
| ------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Ustawienie `false` wyłącza wykrywanie całkowicie.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Polityka wstrzykiwania: `warn`, `block` lub `log`. Starsza wartość `redact` nie modyfikuje tekstu wstrzyknięcia.     |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Tryb dla osłony wstrzyknięć; również flaga funkcji bazy danych, która **nadpisuje** zmienne środowiskowe (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Minimalny poziom ważności odrzucany przez `MODE=block`: `high` (domyślnie), `medium` lub `low`.                      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Starszy alias dla `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                 |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Gdy `true`, dane PII w żądaniu są maskowane (niezależnie od trybu wstrzykiwania).                                    |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Steruje zachowaniem maskera po stronie odpowiedzi.                                                                   |

Zabezpieczenia Modality Bridge odczytują konfigurację wykonawczą z magazynu ustawień
opartego na bazie danych (`getSettings()`), a nie ze zmiennych środowiskowych. Kluczami głównymi dla wizji są
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` oraz
`modalityBridgeCacheMaxEntries`. Starsze klucze
`visionBridge*` są akceptowane tylko jako udokumentowane rozwiązanie zapasowe (fallback) odczytu na jeden cykl;
zapisy z panelu sterowania (dashboard) używają kluczy głównych. Wartości domyślne oraz moduł rozstrzygający mechanizm zapasowy znajdują się w
`src/shared/constants/modalityBridgeDefaults.ts`, a starsze stałe są zachowane w
`src/shared/constants/visionBridgeDefaults.ts`.

Audio używa ustawień `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` i `modalityBridgeAudioMaxClips`, a także współdzielonych
ustawień `modalityBridgeCache*`. Audio nie posiada mechanizmu zapasowego dla starszych kluczy, ponieważ te
klucze zostały wprowadzone wraz ze schematem Modality Bridge.

Wideo używa ustawień `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` oraz
`modalityBridgeVideoTimeout`, a także współdzielonych ustawień `modalityBridgeCache*`.
Jest domyślnie wyłączone, ponieważ pakiety FFmpeg/ffprobe są opcjonalnymi zależnościami operacyjnymi,
a tworzenie podpisów klatek (frame captioning) zwiększa opóźnienie oraz koszt modelu.

## Niestandardowe Guardraile

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

Kroki:

1.  Utwórz `src/lib/guardrails/myGuardrail.ts` rozszerzający `BaseGuardrail`.
2.  Zaimplementuj `preCall` i/lub `postCall`.
3.  Zarejestruj podczas importu (push z `registerDefaultGuardrails`) lub
    wywołaj `guardrailRegistry.register(...)` w czasie wykonania — rejestr zastępuje
    każdy poprzedni guardrail o tej samej znormalizowanej nazwie.
4.  Dodaj testy w `tests/unit/` (istniejące przykłady:
    `tests/unit/guardrails-registry.test.ts`,
    `tests/unit/prompt-injection-guard.test.ts`,
    `tests/unit/guardrails/visionBridge.test.ts`).

## Testowanie

Użyj `resetGuardrailsForTests()` między testami, aby rozpocząć od znanego stanu.
Przekaż `{ registerDefaults: false }`, aby rozpocząć z pustym rejestrem i
zarejestrować tylko testowane guardraile. Vision Bridge akceptuje wstrzykiwanie zależności
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge udostępnia
równoważne punkty dla ustawień, możliwości, wyboru modelu STT, sprawdzania poświadczeń
i transkrypcji. Testy mogą zatem ćwiczyć oba przepływy bez dostępu do bazy danych
lub sieci.

## Zobacz także

- `src/lib/guardrails/` — implementacja
- `src/shared/utils/inputSanitizer.ts` — współdzielony detektor, który zasila
  ochronę przed wstrzykiwaniem promptów i maskowanie PII
- `src/shared/constants/visionBridgeDefaults.ts` — domyślne ustawienia Vision Bridge i
  lista modeli wymuszonego mostkowania
- `src/shared/constants/modalityBridgeDefaults.ts` — współdzielone domyślne ustawienia środowiska wykonawczego Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — warstwa ortogonalna (wyłącznik obwodu, czasy odnowienia)
- `docs/reference/ENVIRONMENT.md` — pełne odniesienie do zmiennych środowiskowych

## Pokrycie tras przez injection-guard i red-team (Faza 8 · Blok D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) obejmuje wszystkie trasy,
które akceptują prompty użytkownika. Szanuje `INJECTION_GUARD_MODE` (domyślnie `warn` = tylko logowanie;
`block` = zwraca HTTP 400 `SECURITY_001`).

| Typ                | Trasy                                                                                                                                                | Tryb domyślny |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Tekst (istniejący) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generatywny        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Dane               | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Ekstrakcja tekstu (`extractMessageContents`) obejmuje `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nocne, `nightly-llm-security.yml`):** promptfoo waliduje, że każda trasa blokuje
korpus OWASP-LLM w `INJECTION_GUARD_MODE=block`; garak uruchamia sondy (pomija bez sekretu).
`moderations` jest uwzględnione dla spójności — operatorzy w trybie blokowania mogą je wyłączyć za pomocą
`resolveDisabledGuardrails`.

Nocny workflow (`.github/workflows/nightly-llm-security.yml`, cron + ręczne
uruchamianie) ma dwa zadania:

- **`promptfoo-guard` (blokujące)** — uruchamia `promptfoo eval -c promptfooconfig.yaml`
  z `INJECTION_GUARD_MODE=block`. Każdy przypadek adversarialny (np. "ignoruj wszystkie
  poprzednie instrukcje...", jailbreaki w stylu DAN) potwierdza, że odpowiedź zawiera
  `error.code === "SECURITY_001"`, tzn. że guard faktycznie odrzucił żądanie.
- **`garak` (doradcze)** — uruchamia garak `--probes promptinject,dan,leakreplay`
  przeciwko lokalnej instancji OmniRoute (`http://localhost:20128/v1`). Zależne od
  sekretu dostawcy (`PROMPTFOO_PROVIDER_KEY`); pomija się elegancko i jest sufiksowane
  `|| true`, więc raportuje bez powodowania błędu CI.

Pokrycie pomocnika guard (`createInjectionGuard` / `withInjectionGuard`)
obejmuje każdą trasę `/v1` zawierającą prompt; tekst promptu jest pobierany z
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` przez
`extractMessageContents()` w `src/shared/utils/inputSanitizer.ts`.
