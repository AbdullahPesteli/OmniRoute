# Guardrails (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sanningskälla:** `src/lib/guardrails/`
> **Senast uppdaterad:** 2026-08-29 — v3.8.51 (Video Bridge-transkriptets ursprung deklareras av anroparen,
> ännu inte serververifierat — förtydligat enligt #11661)

Guardrails upprätthåller säkerhet, policy och innehållstransformationer vid gränsen
mellan OmniRoute och uppströmsleverantörer. Varje guardrail kan inspektera (och
valfritt avvisa, transformera eller kommentera) begärans nyttolaster (`preCall`) och
uppströms svar (`postCall`).

Systemet är **fail-open**: om en guardrail kastar ett fel under exekvering,
registrerar registret felet och fortsätter med nästa guardrail istället för att
misslyckas med begäran. Blockering är ett explicit beslut (`block: true`),
aldrig en olycka.

## Inbyggda Skyddsräcken

Registreringen laddar automatiskt sex skyddsräcken i prioritetsordning vid import
(se `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Namn                | Steg(en)       | Fil                   |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lägre prioritetstal körs **först**.

### Vision Bridge (`visionBridge.ts`) — Modalitetsbro PR-1

Fångar bildbärande förfrågningar riktade mot **icke-visionsmodeller** och antingen
omdirigerar hela förfrågan till en visionskapabel modell eller ersätter bilddelarna
med textbeskrivningar som produceras av en konfigurerbar visionsmodell innan
den uppströms anropet. Detta gör att textbaserade leverantörer kan hantera
multimodala nyttolaster på ett transparent sätt.

Flöde:

1. Hoppa över om målmodellen redan stöder vision (om den inte finns i
   den tvingade bro-listan `isVisionBridgeForcedModel`).
2. Extrahera bilddelar via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), som delegerar till **den enhetliga mediadetektorn**
   `detectMediaParts()` i `open-sse/utils/mediaParts.ts` — den
   enda sanningskällan som delas med kombinationskompatibilitetsfiltret.
   Extraktion är tillåten för toppnivådelar av formerna
   `replaceImageParts` kan klippa tillbaka (kontraktet för extrahera↔ersätta): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, och Responses API `input_image`. Nästlade träffar och
   indikator-endast former är material för kombinationsfilter och extraheras aldrig.
   Hoppa över om inga hittas.
3. Lös körningskonfiguration via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nya `modalityBridge*`
   inställningsnycklar vinner; äldre `visionBridge*` nycklar förblir en **en-cykel
   återställning** (återställningsfönster). Hoppa över innan någon medietransitering när
   bron är inaktiverad.
4. Modusväljare (`modalityBridgeVisionMode`, se tabellen nedan) avgör
   omdirigera vs beskriva. Omdirigera returnerar `modifiedPayload` med endast `model`
   utbytt, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beskrivningsväg: begränsa bilder till `maxImages`, komponer den
   uppgiftsmedvetna prompten, konsultera beskrivningscachen, anropa visionsmodellen
   **parallellt** (`Promise.allSettled`), och injicera `[Image N]: <description>` textdelar på
   deras plats. En misslyckad beskrivning ger `null` och den ursprungliga bilddelen
   är **bevarad** (#4012) — utom på den kombinerade beskrivningsvägen när varje
   beskrivning misslyckades, där en bekräftad icke-visionsuppströms får en
   `(unavailable — no vision-capable provider connected)` stub istället (#8430).
6. Returnera `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Modusväljare (`modalityBridgeVisionMode`)

| Modus      | Standard | Beteende                                                                                                                                                                                                                                                                     |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Äldre heuristik, oförändrad (#6640/#7204): icke-kombinations/`auto/` modeller omdirigerar till den bästa visionsmodellen om inte den ursprungliga modellen redan har användbara autentiseringsuppgifter (då beskriver); kombinationsmål beskriver alltid.                    |
| `describe` |          | Beskriv alltid — omdirigeringsblocket hoppar helt över; användarens valda modell svarar alltid.                                                                                                                                                                              |
| `reroute`  |          | Tvinga omdirigering: skyddet för att behålla autentiserade modeller kringgås. Skyddet för omdirigerings-**mål** gäller fortfarande — när ingen användbar visionsmål finns, faller förfrågan igenom till beskrivning så råa bilder aldrig når en textbaserad backend (#8430). |

Tvingade lägen kortsluter **innan** den automatiska heuristiken körs; `auto` beteende
är byte-identiskt med det pre-PR-1 skyddsräcket.

#### API-nyckelområde (`visionBridgeKeyScope.ts`)

När anroparens API-nyckel begränsar `allowedConnections`, kvotpooler
(`allowedQuotas`) eller modeller (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), väljer bron endast
omdirigera och beskriva modeller som nyckeln kan använda, på anslutningar som nyckeln kan
använda. Beskrivningsanropet går då alltid genom OmniRoute självloop med
`x-omniroute-self-loop-key-id`-huvudet, så den mottagande chattförfrågan
tillämpas den nyckelns anslutnings- och modellpolicy igen. `enforceApiKeyPolicy()`
respekterar det huvudet endast tillsammans med självloopens bärande, så det kan endast
snäva åt åtkomsten, och en id som inte kan lösas avvisas.

Om ingen visionsmodell är tillåten för nyckeln, träder beskrivningsvägen åt sidan och
förfrågan passerar oförändrad, samma fail-open beteende som ett inaktiverat
skyddsräcke (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Förfrågningar utan nyckel, och nycklar utan dessa begränsningar, beter sig exakt som
tidigare.

#### Uppgiftsmedveten beskrivningsprompt (`modalityBridgeVisionTaskAware`)

Standard **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) lägger till
texten från det **sista användar meddelandet** (avkortat till 500 tecken) till basen
beskriv prompt, vilket styr beskrivningen mot vad användaren faktiskt frågade
(codex-vision-proxy-mönster) och ber visionmodellen att transkribera synlig
text. Med flaggan av — eller ingen användartext — används basprompten oförändrad.

Beskriv självloopens egen OpenAI-kompatibla begäran (`callVisionModelSingle()`
i `visionBridgeHelpers.ts`) begär alltid `image_url.detail: "high"` —
villkorslöst, för varje anropar/leverantör, inte låst på något klient signal.
Lågdetaljprovtagning försämrar OCR-precisionen för exakt den texttranskription
uppgiften som denna prompt ber om, så beskrivningsanropet ber alltid om hög
detalj oavsett vilken detaljnivå den ursprungliga inkommande begäran använde. Detta
påverkar endast den interna beskrivningsbegäran; det ändrar inte hur
OmniRoute vidarebefordrar anroparens egen `image_url.detail` på den primära begäran —
det standardvärdet tillämpas separat, och endast för upptäckta OpenCode-klienter, i
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Den
Anthropic wire-format-grenen av beskriv självloop har inget `detail`-fält
och påverkas inte av något standard.

#### Beskriv utdata cap (`modalityBridgeVisionMaxChars`)

| Nyckel                         | Standard | Omfång              |
| ------------------------------ | -------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` eller 100–50000 |

`0` (standard) betyder **ingen begränsning** — beskrivningen som returneras av
`callVisionModel()` passerar oförändrad, vilket bevarar det befintliga
beteendet. Värden i intervallet 100–50000 avkortar beskrivningen med en
`…` suffix innan den sätts tillbaka som `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` i `src/lib/guardrails/visionBridge.ts`).
Höj detta för detalj-tunga OCR-uppgifter där den nedströms modellen behöver den
fullständiga transkriptionen; sänk det för att begränsa tokenanvändning på pratiga
visionmodeller. Dashboardfältet finns på Vision-flikens Avancerade panel
(`modality-bridge-max-chars` i `ModalityBridgeVisionTab.tsx`) och begränsar
alla värden mellan 1 och 99 upp till 100-golvet medan ett explicit `0`
förblir orört — `0` är ett giltigt Zod-värde i sig
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), inte bara
den "osatta" standarden.

#### Beskriv cache (`modalityBridge/bridgeCache.ts`)

I minnet LRU + TTL-cache för beskrivningsutdata, delad process-omfattande.
Nyckel = `sha256(imageRef + composedPrompt + configuredBridgeModel)` med
längd-prefix inramning (inga fält-gränskollisioner). Modellkomponenten är
den **konfigurerade** bryggmodellen, inte modellen som faktiskt svarade —
`callVisionModel` kan falla tillbaka internt, och nyckling per försök skulle
fragmentera cachen. Misslyckade beskrivningar cachas aldrig. Inställningar:

| Nyckel                          | Standard | Omfång  |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Fjärrbildnormalisering (självloop beskriv/base64 hämtning)

När bryggan hämtar en **fjärr** bild själv — den Anthropic beskriv
själv-anropet och claude-wire-format base64-konverteringen
(`ensureBase64ImagesForClaudeWire`), båda via
`fetchRemoteImageAsDataUri()` i `visionBridgeHelpers.ts` — passerar den resulterande
data-URI genom `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) innan den sätts in i vision-modellens
begäran. Överdimensionerade bilder skalas ner till en **2048px lång kant** (som
matchar den storleksbegränsning OpenAI/Anthropic redan tillämpar server-sidan), vilket
minskar uppladdningsbyte/latenstid utan att ändra vad visionmodellen ser. Omformatering
använder `sharp`, laddad via dynamisk import: på en plattform där dess inbyggda
binärfil misslyckas att laddas, kastar `normalizeDataUri()` **aldrig** — den faller tillbaka
till en passthrough av de ursprungliga bytena, så beskrivnings/base64-konverterings
vägen fortsätter alltid att fungera. Icke-bildbyten (en hämtning som inte returnerade en
avkodbar bild) passerar också oförändrad. Denna normalisering är avgränsad till bilder som
bryggan hämtar för sitt eget själv-anrop — den tillämpas aldrig på anroparens råa passthrough
payload, i enlighet med opt-in-endast mutationsprincipen (Hård Regel #20).

#### Inställningsschema + migration

De nya `modalityBridge*` nycklarna valideras med Zod i `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, den `modalityBridgeCache*` trio, och
`modalityBridgeAudio*` gruppen som används av Audio Bridge. Migration
`141_modality_bridge_settings.sql` kopierar befintliga legacy
`visionBridge*` värden till de matchande nya nycklarna (idempotent, skriver aldrig över
ett operatörs-inställt `modalityBridge*` värde); de legacy nycklarna förblir accepterade som en
läsfallback för en releasecykel.

#### Transparenshuvud + statistik

Beskriv-transformerade svar bär
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(byggd av `buildModalityBridgeHeader()` i `modalityBridge/bridgeStats.ts`,
stämplad av `withModalityBridgeHeader()` i `src/sse/handlers/chatHelpers.ts`).
Omledda begärningar får **inga** huvuden — payloaden var oförändrad och modellbytet
är redan synligt i svarets `model` fält.

`GET /api/modality-bridge/stats` (hantering av autentisering, samma nivå som
`GET /api/settings`) returnerar de in-memory per-modality räknarna
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` för `vision`, `audio` och
`video`. `averageLatencyMs` använder `latencySamples`, inte alla försök, som sin
nämnare; en operation utan tidsmätning skapar inte ett noll-millisekund
prov. `bridged` förblir det bakåtkompatibla aliaset för lyckade
konverteringar; misslyckade försök ökar inte det.
Räknarna återställs vid processstart enligt design
(telemetri, inte redovisning).

#### Dashboard-konfiguration

Den dedikerade dashboard-sidan är
`/dashboard/settings/modality-bridge`. Dess URL-adressbara flikar `Vision`, `Audio`,
och `Video` bevarar frågeparametrar medan de byter `tab`-värde.
Vision-fliken visar aktivering, läge, modellval (inklusive den automatiska
standarden), uppgiftsmedveten prompting, avancerade tidsgränser/bild/beskrivningslängd/cache
gränser, körning
räknare och en skyddad provförfrågan. Audio-fliken är också aktiv: den visar
aktivering, en STT-endast modellväljare med Auto, tidsgräns/max-klippgränser, ljud
räknare och ett `input_audio` provtest. Video-fliken är funktionell: den rapporterar
FFmpeg/ffprobe körningstillstånd — en av fyra explicita UI-tillstånd (`unknown` medan
proben är i flyg eller kunde inte slutföras, `restricted` på en icke-loopback
dashboard-värd där proben hoppas över klient-sidan, `unavailable` när den har
probat och bekräftats saknas, eller `available` med FFmpeg/ffprobe-versionerna) — kvarstår
aktivera/modell/ram/video/tidsgränser, filtrerar modellväljaren till vision-kompatibla
modeller och visar videoräknare.

Det tidigare Vision Bridge-kortet under AI-inställningar är en kompatibilitetslänk till den
nya sidan; det äger inte längre en andra kopia av formuläret. Media Providers länkar också
Image-to-Text och Speech-to-Text arbetsflöden till motsvarande Modality
Bridge-flikar utan att ta bort den befintliga Speech-to-Text-lekplatsen.

**Självloopens godkännande omgås:** när describe-anropet går genom OmniRoute's
egen `/v1` självloop (icke-standard leverantörsmodell), skickar del-förfrågan
`x-omniroute-admission-bypass: internal` och autentiseras med den lösta
självloopens referens — den lokala `sk_omniroute` sentinel i lokal läge, eller den
operatörskonfigurerade `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` miljönyckeln (#1350) så
`REQUIRE_API_KEY=true` distributioner fortfarande kan köra describe-anropet. Omgången
erkänns endast för dessa exakta referenser, så externa klienter kan inte använda
huvudet för att hoppa över godkännande.

Legacy-standarder finns i `src/shared/constants/visionBridgeDefaults.ts`; de
nya läge/uppgiftsmedvetna/cache-standarderna och inställningslösaren finns i
`src/shared/constants/modalityBridgeDefaults.ts`. Skyddsräcket exponerar en
`deps` konstruktörsalternativ så tester kan injicera falska `getSettings` och
`callVisionModel` implementationer.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Fångar ljudbärande chattförfrågningar innan de når ett mål som inte
är känt för att acceptera ljudinmatning. Den omdirigerar aldrig chattförfrågan: ljuddelar
transkriberas genom den befintliga OpenAI-kompatibla multipart-endpointen och den
valda chattmodellen fortsätter med texttranskript.

Flöde:

1. Lös `supportsAudio` genom `getResolvedModelCapabilities()`. Explicit
   leverantörsregistermetadata vinner, sedan statisk modellmetadata, sedan synkroniserad
   `modalities_input`. En deklarerad inmatningslista utan `audio` är `false`; ingen
   kapabilitetsbevis förblir `null`. Både `false` och `null` aktiverar den
   konservativa bron, medan `true` omgår den.
2. Lös `modalityBridgeAudio*` inställningar och extrahera splicebara toppnivå
   ljuddelar från varje meddelande genom den delade `detectMediaParts()`
   detektorn. Stödda trådar är OpenAI `input_audio`, `audio_url`, och
   `source.media_type: "audio/*"`. Nästa ljud upptäckts för routing men tas inte
   bort av splice-vägen. Arbetet begränsas av `modalityBridgeAudioMaxClips`;
   senare delar förblir orörda.
3. Respektera en konfigurerad `provider/model`, eller låt `selectAudioBridgeModel()` gå
   igenom `AUDIO_TRANSCRIPTION_PROVIDERS` i stabil katalogordning och välja den första
   modellen med en användbar aktiv leverantörsreferens.
4. `callAudioTranscription()` konverterar base64/data-URI ljud till en multipart
   `file`, eller laddar ner en fjärr `audio_url` genom den offentliga endast utgående
   skyddet med DNS-pinning och en 25 MB gräns. Den POSTar sedan filen och den valda
   modellen till den lokala `/v1/audio/transcriptions` självloopen, autentiserad med
   `resolveSelfLoopBearer()`. Den befintliga transkriptionsrouten utför normal
   referenssökning, cooldown/rate-limit hantering och leverantörsdispatch.
5. Lyckade anrop ersätter sina delar med `[Audio N]: <transcript>`. Anrop
   körs med `Promise.allSettled`: ett individuellt misslyckande bevarar den ursprungliga
   ljuddelen (#4012 kontrakt). Om varje anrop misslyckas och målet bevisas
   `supportsAudio === false`, blir delarna
   `[Audio N]: (otillgänglig — ingen STT-leverantör ansluten)` (#8430 kontrakt). För
   ett okänt mål (`null`), förblir ett allt-misslyckande resultat orört. Ett bevisat
   text-endast mål utan användbar STT-referens får samma explicita stub utan att utfärda ett nätverksanrop.

Lyckade transkript använder den processomfattande Modality Bridge LRU/TTL-cachen. Nyckeln
kombinerar ljudreferensen, den stabila `audio-transcription` operationsetiketten,
och vald STT-modell; misslyckanden cachas aldrig. Ljudförsök uppdaterar
de delade `bridged`, `cacheHits`, `failures` och `lastUsedAt` räknarna.
Transformera svar bär
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; orörda
förfrågningar får inte en Audio Bridge-segment.

Körningsinställningar är DB-backade och Zod-validerade:

| Nyckel                        | Standard | Område            |
| ----------------------------- | -------- | ----------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                 |
| `modalityBridgeAudioModel`    | `""`     | Auto eller STT ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000       |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10              |

Den delade cachen kontrolleras av `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` och `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Fångar översta nivåns videodelar i Chat Completions `messages` och Responses
API `input` innan en måltavla utan känd inbyggd videosupport anropas.
Stödda former är `input_video`, `video_url`, `video_source`, HTTPS-URL:er,
och `data:video/*;base64,...` data-URI:er. Vanliga filnamn i text behandlas inte
som video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ansvarar för begärans traversering,
kapabilitets-/policykontroll, aggregering per begäran och svarspayload.
Per-video arbete — förvärv, hela resultatcachen, beskrivning av en ramsekvens
(som sammanfogar en anropad ljudtranskript), och per-försök
metrik/abort/rensning — döljs bakom `processVideoPart` i
`videoBridgePipeline.ts`, som anropas en gång per videodel inuti `preCall`'s loop.
Den modulen definierar också de explicita portgränserna `VideoMediaBrokerPort`
(förvärv av byte och extrahering av samplade ramar), `VideoAudioTranscriptionPort`
(sammanfoga en anropad ljudtranskript med de samplade undertexterna), och
`VideoDrilldownPort` (den äldre råbutiksformen). Produktions STT och ramretention
komponeras runt den beskrivande porten genom `createVideoSttAdapter` och
`createVideoDrilldownAdapter`; den senare använder den delade opaka hanteringslivscykeln.

Den offentliga `/v1` begärans väg importerar eller anropar aldrig en subprocess. Fjärrvideor
laddas ner under en gräns på 50 MiB; inlinje base64-videor har en
konservativ gräns på 36 MiB dekodad per-video så att modellen/meddelanden/raminbäddningen
kan förbli inom den offentliga JSON-begärans antagningsgränsen på 50 MiB. Inline
längd och dekodad storleksuppskattningar kontrolleras innan allokering. HTTPS är
krävs på den initiala fjärr-URL:en och varje omdirigering, med hjälp av den befintliga
offentliga endast utgående skyddet med DNS-pinning. Bytes korsar sedan den exakta interna
`POST /api/modality-bridge/video/extract` broker-gränsen. Den vägen är både
`LOCAL_ONLY` och `SPAWN_CAPABLE`, accepterar endast en per-process autentiserad,
betrodd loopback-begäran, och accepterar aldrig en URL, filsystemssökväg, körbar,
eller argumentlista. API kroppsstorlekspipeline och hanterarens inkrementella kropp
läsare upprätthåller oberoende en gräns på 50 MiB för broker-inmatning. Dess begränsade kö
kör en extraktion i taget, tillåter fyra väntande jobb, och begränsar väntande inmatning till
100 MiB.

Inuti brokern läser `ffprobe` en privat lokal fil; den fasta format
tillåtelselistan utesluter spellista- och manifestformat. För tillåtna MOV-familj
behållare förblir externa MOV-datareferenser inaktiverade som standard, och den
fasta kommandot väljer inte att delta i dem. Både `ffprobe` och `ffmpeg` använder
`file`-endast protokollvitlistan, en tråd, fasta argumentarrayer, ingen shell,
och körbara som löses från `PATH`. Bildupplagsströmmande omslag är inte
spelbara kandidater. Alla spelbara strömmar måste uppfylla gränserna, och en
explisit standardström föredras före den deterministiska lägsta index
fallback. Videor är begränsade till 600 sekunder, 8,192 pixlar per dimension, och
33,554,432 källpixlar. FFmpeg samplar 1–16 mittpunkt JPEG-ramar, skalar ner
den långa kanten till högst 1,024 pixlar utan att uppskala mindre inmatningar, och
mottar aldrig en URL. Sampling är `uniform` som standard. De valfria
`scene_aware` och experimentella `segment_aware` policyerna utför en ytterligare
fast FFmpeg-pass över den redan validerade lokala strömmen, väljer begränsade
`showinfo` scenstämplar, och faller deterministiskt tillbaka till samma
uniforma mittpunkter vid detektorfel, timeout, felaktig utdata eller en tom
kandidatsats. Segment-aware-läget allokerar mittpunktssampling proportionellt till
de validerade scenintervallen; segment-aware bevis och fallback-beteende
beskrivs nedan. Den hårda 16-ramarsgränsen tillämpas
efter urval i varje policy. När en scen-aware begäran har endast en
en-ramarsbudget, använder den den uniforma mittpunkten av den aktiva full-video eller fokus
fönster och rapporterar `policyEffective: uniform`: en enda vald scenram
kan inte bevara båda temporala ändar. En anropare kan valfritt tillhandahålla ett
ändligt fokusfönster (`start`/`end` sekunder); gränserna kläms till mediets
varaktighet, omvända eller icke-ändliga fönster avvisas, och alla samplings
policyer utförs endast inom det normaliserade intervallet. Det resulterande
fönstret ingår i samplingsmetadata och i den icke-betrodda beskrivningen
prefix så att nedströmsmodeller kan särskilja ett fokuserat utdrag från hela
tidslinjen.

Semantisk undertextfokus är en separat, explicit inställning. Den
standard `full` analysläget bevarar den befintliga ramprompten och vidarebefordrar
aldrig begärningstext till undertextmodellen. I `focused` läge läser bron endast den senaste
icke-tomma användarskrivna `text`/`input_text` från samma Chat eller Responses
behållare, normaliserar den till NFC, kollapsar kontrolltecken och vita utrymmen,
och begränsar den till 500 Unicode-kodpunkter. Ett tomt resultat faller tillbaka till den
exakta `full` prompten. En användbar ledtråd serialiseras som JSON i en dedikerad
icke-betrodd-användarkontextblock och får endast prioritera observerbara detaljer; den
kan inte åsidosätta den separata varningen mot att följa instruktioner som är synliga
eller hörbara i mediet. Textfokus härleder aldrig `start`/`end` eller ändrar
den temporala samplern.

#### FU-07 strukturell segmentbevis

`segment_aware` använder en begränsad föranalyspass över den redan validerade lokala videoströmmen. Den fasta filterkedjan skalar först till högst 320 pixlar bred, upptäcker scenförändringar och frysta intervall, och samplar sedan med 1 bildruta per sekund för suddighet, genomsnittlig luma och spatial/temporal information. Passet är begränsat till 600 strukturella prover, en FFmpeg/filtertråd, samma `file`-endast protokoll och containernallowlistor, en 1 MiB process-output-gräns, och högst 30 sekunder inom mäklarens delade avbrytande/deadline. Den accepterar aldrig ett kommando, filter, sökväg eller URL från begäran.

De strukturella värdena är deterministiska samplingsbevis, inte semantisk videoförståelse. De infererar inte ämnen, handlingar, bildtexter, tal eller användarintention. Scen- och fryskanter bildar segment; fryskcoverage, suddighet, exponering, spatial detalj och temporala förändringar påverkar endast hur den befintliga 1–16 bildruta budgeten fördelas. Ett helt fryst segment är begränsat till en bildruta, medan icke-frysta segment tävlar om den återstående budgeten. När kanter överstiger bildrutor, behålls en enhetlig tidslinje täckning så att snabba tidiga klipp inte kan dölja ett långt efterföljande segment. Scenkanter inom den 1-sekunders analysupplösningen av en fryskant sammanslås.

Saknade filter, felaktiga/tomma bevis, ett detektorfel, eller den begränsade föranalysens timeout misslyckas öppet till den exakta enhetliga mittpunktspolicyn. Ett avbrytande från anroparen eller mäklarens deadline misslyckas inte öppet: det avslutar den pågående subprocessen, förhindrar senare bildrutaextraktion, och det privata temporära trädet tas bort i `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genererar deterministiska verkliga FFmpeg-fixeringar för post-dedup bildtext-kostnadsbesparingar, tät rörelsebudgetfördelning, suddighet/exponering/SI-TI-bevis, snabba klipp med en lång svans, och gradvis-fade falska positiva. Den registrerar föranalysens väggtid och, där `/usr/bin/time` är tillgängligt, barn-CPU och topp RSS. Dess kvalitetskontroller är endast strukturella orakler. Verklig bildtext-modellkvalitet förblir `HOLD` eftersom denna utrustning inte har någon auktoriserad slutpunkt eller fryst domare. Monetära besparingar förblir också `HOLD` om inte `--caption-cost-per-call-usd` tillhandahåller en explicit positiv uppskattning per samtal; skriptet fabricerar aldrig något av resultaten.

Varje bildruta är begränsad till 4 MiB, alla råa bildrutor tillsammans till 23 MiB, och det serialiserade mäklarresponsen till 32 MiB. En privat temporär katalog tas bort i `finally`. OmniRoute paketerar inte FFmpeg och accepterar inte en anpassad körbar sökväg. Innan bildtextning tillämpar bron en konservativ visuell dedupliceringspass: varje JPEG reduceras till en 16×16 gråskala-buffer och jämförs endast med den senaste behållna bildrutan. För en begärd bildtextbudget över en bildruta, tillhandahåller extraktionen en begränsad kandidatpool på upp till dubbelt så stor budget och aldrig mer än 16 bildrutor. Den begärda gränsen tillämpas endast efter deduplicering, med de första och sista valda kandidaterna bevarade under den slutliga tunnandet när budgeten är minst två. Den versionerade `grayscale-16x16-mean-cells-v2` policyn använder den större av medel luma delta och förhållandet av miniatyrcellar vars normaliserade delta är minst 0.05. Duplicattröskeln är den konstanta 0.04, vald för förutsägbarhet snarare än exponerad som en runtime-inställning. Denna sekundära högkontrastsignal bevarar små rörelser och synliga textförändringar som enbart medel-jämförelse kan dölja. Jämförare eller avkodarefel misslyckas öppet och behåller täckning. Utdata metadata separerar extraherade kandidater, framgångsrikt använda bildrutor, och visuella dubbletter som tas bort.

En uttryckligen markerad videodel kan begära ett tidsstämplat kontaktblad. Bron bygger högst ett 4-kolumners, 16-bildruters JPEG-galler. Varje 512-pixelcell bränner sin källtidsstämpel i en högkontrast bottenband, medan samma tidsstämplar förblir i textmetadata för nedströms koppling och revision. Den kompletta JPEG förblir begränsad till 32 MiB. Om `sharp` inte kan avkoda eller komponera galleriet, faller bron tillbaka till de individuella JPEG-bildrutorna; en klientavbrytning sprider sig fortfarande genom bladoperationen.

Främjande bevis är avsiktligt separerat från den syntetiska kompositionsmikrobänken. `scripts/perf/video-bridge-contact-sheet-eval.ts` definierar en schema-versionerad A/B-harness för verkliga OpenAI-kompatibla visionsmodeller. Den mäter leverantörsrapporterade tokens, end-to-end vägglatens (inklusive bladkomposition), modell-anropantal, och manifest-definierad faktabevarande. Råa modellrespons skrivs inte till rapporten; endast SHA-256-digester och matchade fakt-ID:n bevaras. Utrustningen gör inga nätverks- eller betalda modellanrop om inte `--execute-real` passerar och `--model`, `OMNIROUTE_BASE_URL`, och `OMNIROUTE_API_KEY` är konfigurerade. Utan den explicita verkliga körningen förblir dess maskinläsbara domslut `HOLD`; syntetiska payload/anropantal mätningar ensamma är inte främjande bevis.

Den separata `scripts/perf/video-bridge-promotion-eval.ts` konsumerar FU-07 eller FU-09 observationer. Främjande antagande kräver alla åtta syntetiska scenariokategorier plus en sanerad verklig klipp, minst tre mätta upprepningar per roll och fall, alla tio deklarerade mått, frysta media/prompt/förväntade-fakt/settings-digester, unika observations-ID:n och verifierad seedad A/B-ordning. Exekveringskvittot binder corpus-digest, exakt kandidat-SHA och modellrevision. Saknade eller ogiltiga mätningar förblir `HOLD`, inklusive CPU över 30 s, topp RSS över 512 MiB eller föranalys över 30 s. Dessa är bevis-antagningsgränser, inte en ny runtime RSS-verkställighetsgaranti.

FU-07 kräver minst 98% kvalitetsbevarande och p95-latens högst 1,2x baslinje, plus antingen en 0,05 absolut fallbalanserad medelåterkallningsförbättring vid motsvarande medelbildanrop, eller minst 10% färre medelpost-deduplicerade bildanrop. FU-09 kräver minst 0,85 kvalitet, 95% bevarande, 20% p95-latensreduktion och 10% tokenreduktion. Kritisk faktaförlust, injektionsöverensstämmelse eller saknad användning förhindrar befordran. En exekvering kan inte befordra något: `--previous-report` bekräftar två distinkta, icke-överlappande, konsekutivt berättigade exekveringar av samma policy/modellrevision/kandidat/korpus. Ett urvalsexperiment kan inte bekräfta ett kontaktbladsexperiment.

Samlarna bör poängsätta svar i minnet och spara `responseDigest` plus mätvärden och observationsbindningar, aldrig svarstext. Konsumenten läser också äldre råobservationer men kopierar aldrig den texten till sina rapporter. Exakt en av `responseDigest` eller `rawResponseText` accepteras för varje observation. Den versionerade tillåtna listan förblir tom med en oföränderlig `hold` standard. En berättigad post kräver sin bevisreferens, policy, modellrevision, exakt kandidat SHA, manifestdigest och två distinkta kör-ID; konfliktande kontexter avvisas. Dessa metadata är ett revisionskontrakt, inte bevis på att en refererad fil innehåller äkta mätningar. Granska de faktiska kvittona innan du lägger till någon post. Hanteringsstatistikens slutpunkt och Video-instrumentpanelen avslöjar konservativ beredskap. En konfigurerad modellalias ensam etablerar inte dess revision eller den körande kandidatens SHA, så den aktuella instrumentpanelen rapporterar `HOLD` istället för att återanvända berättigande från en annan exekveringskontext. Explicit experimentell urval förblir separat från befordran; ingen standard ändras automatiskt.

Anroparna kan bifoga en valfri `transcript.cues`-array till en stödd videodel när de redan har anpassad text. Varje cue måste ha `text`, ett begränsat `start`/`end`-intervall inom den undersökta varaktigheten, och en vitlistad `source` (`client`, `embedded`, eller `audio-bridge`); `confidence` har som standard `1` och måste förbli mellan `0` och `1`. Exakta dubblettcues slås ihop. OmniRoute startar aldrig transkription från dessa metadata: validerade cues kopieras in i det beskrivna resultatet med källa, förtroende och intervall, och renderas som otillförlitliga observationer tillsammans med bildtexterna. Ogiltig, utanför räckvidd, eller ursprungsfri text avvisas istället för att blandas in i bildtextströmmen. Båda begärningskroppens transkriptkanaler normaliserar tillhandahållen ursprung till `client`, inklusive självbevisade `embedded` eller `audio-bridge`-etiketter. Endast en serverägd adapter kan tilldela dessa betrodda etiketter genom det kodendast `trustedSource`-argumentet; ett begärnings-JSON-fält kan inte nå det argumentet. Transkripttext förblir otillförlitligt medieavledt innehåll, oavsett dess ursprung, och får aldrig bestämma auktorisation.

En avancerad anropar kan tillhandahålla en `audioTranscript`-spår för samma video; det behandlas som klient-tillhandahållen text, inte bevis på servertranskription. Fusionssömmen kör visuella och ljudobservationer under en deadline och abortsignal, ordnar dem på en gemensam tidslinje, slår ihop exakta dubbletter, och rapporterar ett delresultat när endast en sida lyckas. En ogiltig `audioTranscript` degraderas till det delresultatet — den visuella beskrivningen behålls och ljudgrenen registrerar en sanerad felkod — istället för att misslyckas med hela videon. Per-gren tillgänglighet, delflaggan och de sanerade felkoderna bevaras i det beskrivna resultatet, i skyddsmaterialet (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), i resultat-cachemetadata och i brofusionräknarna. Den standardiserade Video Bridge-sökvägen aktiverar inte tal-till-text eller laddar ner en andra mediekopia; utan det explicita spåret förblir det endast video.

**Transkriptbevarande (#12150 P1).** Detta tillämpas automatiskt när Video Bridge (själv opt-in) renderar en transkriptcue — det finns ingen separat bevarande-flagg. När en begäran renderar någon transkriptcue (en anropar-deklarerad `transcript` eller en fusionerad `audioTranscript`), markerar skyddet den som `videoBridgeObserved` och producerar en redigerad skugga av videobeskrivningen — en identisk rendering där varje cues fritekstkropp ersätts med `[redacted-video-transcript]`, byggd genom att ersätta det strukturerade cue-fältet innan strängen sätts ihop (aldrig genom att parsa den plattade texten, så inget cue-innehåll — fientligt eller vanligt, inklusive kroppar som innehåller `]` såsom `[inaudible]`/`[music]` — kan överleva). Den bevarade begärningsloggkroppen byter ut varje videoavledd textdel mot den redigerade skuggan, matchad efter innehållslikhet; `fullText`-ankaret läses om från den färdiga pre-call skyddskroppen, så matchningen lyckas fortfarande efter senare kedjeskydd (PII och autentiseringsmasker, prioritet 10/95) skriver om beskrivningstexten på plats och efter systemprompt/överlåtelse/minnesinjektion omformar meddelandearrayen. Kroppen som skickas uppströms till modellen är oförändrad. En observerad begäran fyller inte heller något hållbart minne (både begärnings- och svaravledda extraktioner hoppar över), så modellens eget svar kan inte återge transkripttext i minnet.

**Råvideofält (#12430).** När bron är aktiverad och inbyggt videosupport är okänt eller frånvarande, aktiverar definierade `transcript`/`audioTranscript`-fält också `videoBridgeObserved`, även efter beskrivningsfel eller en `maxVideos`-gräns. `null` och tomma strängar räknas; frånvarande fält och icke-videometadata gör det inte. Bevarade kopior redigerar dessa fält eller utelämnar begäran, och cache/minne omgås.

På dessa fallback-vägar blir giltiga anroparledtrådar stödda `text`/`input_text` delar snarare än icke-standardiserade leverantörsfält. Båda begärda spåren förblir otillförlitliga `client` observationer, med en tydlig varning om att videon inte har beskrivits och tidsstämplar inte har verifierats mot mediet. Den befintliga budgeten på 256 ledtrådar/64-KiB totalt och per ledtråd gäller för de två spåren tillsammans; tidsstämplar måste passa mäklarens 600-sekunders tak och eventuellt angiven fokusfönster. Ogiltiga spår kasseras, inte vidarebefordras som godtycklig text; en giltig syskon kan fortfarande användas om deras sammanlagda budget inte överskrids. Null/tomma fält lägger inte till någon text. Ingen mediefetch eller transkription läggs till av denna fallback. Transkriptionsutvidgningsfält tas bort från fallback-videobäraren och dess `video_url`/`source` objekt. OpenAI:s wire tillåtelselista förblir strikt; okända inhemska videobärare förblir tillgängliga och kända text-endast mål behåller säkra markörer. Strukturerade redaktionsskuggor skyddar den bifogade transkripttexten, medan den ursprungliga anroparägda begäran förblir oförändrad. Inhemskt stödda mål och inaktiverade broar behåller sitt befintliga bypass-beteende.

Ytterligare behållna kopior använder samma observerade-begärans signal. Den råa pre-guardrail klientbegärans ögonblicksbild, i minnet väntande begäran, och tidig avvisad begäran logg strukturellt ersätter transkriptionsfält i videodelar; strängprompter som syntetiseras av pipeline-steg och kontextöverföring redigeras vid den beständiga begäran-kroppens sänka. Den beständiga `video_content_removed` markören gör att `previous_response_id` fortsättning misslyckas stängt snarare än att rekonstruera text som avsiktligt kasserades. Om en observerad begäran förlorar sin per-del redaktionsskugga innan loggning, eller till och med en av flera videoskuggor misslyckas med att matcha efter senare begärans mutationer, utelämnas den behållna begäran-kroppen helt istället för att behålla ett delvis redigerat transkript.

För en observerad begäran kan ett modell-svar citera vilken del av transkriptet som helst utan en strukturerad ledtrådsgräns. Dess beständiga anrops-logg `responseBody` ersätts därför av en utelämningsmarkör; den detaljerade pipeline-artikeln (som kan inkludera uppströms/klient-kroppar och strömsegment) behålls inte. Semantiska, idempotens- och resonemangsåterspelningscachear kringgår läsningar och skrivningar för den begäran. Leverantörens begäran och klient-synliga svar förblir oförändrade. Tidiga keepalive-bytes dräneras från den temporära bufferten när den detaljerade artikeln utelämnas. Kiros felaktiga EventStream-varning rapporterar endast nyttolastens byteantal, aldrig dess innehåll eller JSON-parserns råa fel. Detta påstår inte att varje orelaterad leverantör/plugin-diagnos har granskats; den bredare behållna-sänks svep spåras i #11658.

Den interna `/api/modality-bridge/video/drilldown` livscykeln är ett separat, loopback/token-autentiserat cache-substrat. Varje operation kräver också en kanonisk opak huvud-ID. Innan en produktionsanropar aktiveras måste den härleda det ID:t från den autentiserade hyresgästen och får aldrig vidarebefordra ett klientvalt värde. Cache-nycklar binder den principen till kanoniska session- och video-referens-ID:n, lagrar endast deras SHA-256-härledda nycklar, och avgränsar både läsningar och radering till samma princip. Cachen lagrar högst 16 härledda JPEG-ramar per post, går ut efter tio minuter och stöder begränsade `start`/`end` läsningar eller explicit sessionsradering.

Varje princip är begränsad till 16 poster och 64 MiB av kanoniska JPEG-data. Dessa gränser är oberoende av det globala 64-poster/256 MiB taket: principens kvottryck avvisar endast den principens minst nyligen använda poster innan global LRU-avvisning övervägs. Utgångna poster sveps bort från både princip och global redovisning vid cache-aktivitet, medan avbokning och valideringsfel inte åtar en partiell ersättning.

Cachen avvisar icke-kanonisk Base64, överflödig padding, icke-JPEG media, felaktiga eller avklippta JPEG:er, och JPEG:er som ger en varning under en begränsad fullbilds `sharp` avkodning. Den omkodar varje accepterad bild som en kanonisk JPEG, härleder bredd och höjd från de avkodade bytena istället för att lita på anroparfält, och kassera eventuella efterföljande polyglot-bytes istället för att behålla dem. Endast den begränsade kanoniska komprimerade bufferten debiteras båda kvoter. JSON-wire-gränsen inkluderar Base64-överhead för det 32 MiB avkodade-ingångstaket. Varje lagrad härledning registrerar sitt validerade JPEG-format/upplösning, provtagningspolicy, härdningsversion, skapelsestid, serverberäknad innehållshash och hashad förälderreferens plus den betrodda anroparens förälder-innehållshash. Avbokning kontrolleras mellan asynkrona avkodnings-/hash-faser innan den atomiska cache-åtagandet.

Produktionens producent återanvänder redan-härledda mäklarramar endast efter framgångsrik visuell analys, utan nedladdning/utvinning av en andra video. Det kräver operatör `modalityBridgeVideoDrilldownEnabled=true`, strikt per-del `drilldown: true`, och en autentiserad API-nyckel post-ID. Klientdeklarerade princip/session-värden etablerar aldrig ägande. Utan alla tre villkoren hash, ändrar eller behåller det inga ytterligare ramar. Bevarande av misslyckande bevarar det användbara visuella svaret. Samtyckta begärningar kringgår hela-videons resultatcache så cachade resultat återspelar aldrig hanterare.

Framgångsrika JSON- och SSE-svar exponerar högst fyra opaka handtag i den begränsade
`x-omniroute-video-drilldown`-huvudet. Auktoriserade webbläsarursprung kan läsa det huvudet
utan att bredda CORS-originpolicyn. Nya handtag använder `v1.<32-byte random base64url
token>`, och registret behåller endast
deras SHA-256-hashar. Läsaren/huvudparseraren accepterar också äldre 64-hex-token.
Den autentiserade offentliga konsumenten är
`GET /api/v1/video-bridge/drilldown?handle=...`, oberoende kontrollerad av
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Explicit kvarhållen falsk återkallar
åtkomst även när den äldre `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env
fallback är aktiverad. Produktionsbevarande har den motsvarande äldre
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Båda fallbackarna är som standard av.

Konsumenten härleder ägande från den autentiserade nyckeln, tillämpar nyckelpolicy och
returnerar samma 404 för okända, utgångna och andra nycklars handtag. Den accepterar
`variant=preview|standard|detail` (maximal JPEG-dimension 320/640/1280, aldrig uppskalad),
`limit=1..8` (eller den äldre `frames` alias, aldrig båda), nollbaserad `page`, och valfria
`start`/`end` fokussekunder. Duplicerade
frågeckey och omvända fokusfönster avvisas. Varje returnerad variant har en hash
av sitt faktiska innehåll och faktisk upplösningsmetadata, kopplad till den kvarhållna källan.
Varianter härleds vid läsning snarare än lagras som extra kvarhållna kopior. JSON
svaret, inklusive Base64/kuvert, är begränsat till 32 MiB; en överdimensionerad sida returnerar
413 och klienten måste begära färre ramar. Läsningar kontrollerar avbokning runt varje
ändring av storlek och kontrollerar giltigheten av handtaget innan de returnerar. `DELETE` av ägaren är idempotent;
borttagning eller TTL-utgång frigör den kvarhållna källan och användningsredovisningen.

Den delade lagringen är processlokal: handtag går ut vid omstart och är inte överförbara
mellan oberoende OmniRoute-processer. Hanteringsstatistik exponerar effektiv kvarhållning/
fjärrpolicy och aggregerade kvarhållna poster/byte endast, aldrig media, referenser,
huvud-ID eller handtag. Videoinställningspanelen visar dessa värden och kan kvarhålla
båda samtyckeskontrollerna. Denna implementationsdokumentation är inte bevis på live-distribution eller
marknadsföring; verklig modellacceptans spåras separat.

Ramar är textade sekventiellt med den konfigurerade Videomodellen. En tom
Video-överskrivning ärver Vision-inställningen; om båda är tomma väljer Vision
auto-router den effektiva vision-kapabla modellen. Framgångsrika texter
ersätter den ursprungliga delen med ett stabilt `[Video description:` prefix som också
markerar texten som en otillförlitlig media-härledd observation och säger till nedströms
modeller att inte följa instruktioner som finns i media. Cache-nycklar för ramtextning
inkluderar JPEG-bytes, prompt, tidsstämpel och effektiv modell; endast framgångsrika
texter cachas. Cache-poster behåller den faktiska framgångsrika producentmodellen,
inklusive en fallback-modell; bron rapporterar `mixed` när olika ramar
producerades av olika modeller. En cacheträff återanvänder den producentidentiteten
istället för att ometikettera den som den begärda ruttplanen. Hela videons resultat
cache är nycklad på varje indata som ändrar utdata — prompt, effektiv
modell, samplingpolicy, ramantal, semantisk analysläge, SHA-256
fingeravtryck av den normaliserade fokusledtråden, fokusfönster, `transcript`,
`audioTranscript`, och kontaktbladflaggan — så att ändra någon av dessa
dimensioner är en cachemiss, aldrig en gammal återanvändning. Den visuella dedup-policy
versionen, tröskeln och begränsad kandidat-ramantal är också explicita i
resultat-cache-nyckeln och metadata; en policyändring kan därför inte återanvända en gammal
hela-videobeskrivning. Resultat-cache v4 metadata behåller läget och
fingeravtrycket, aldrig den råa användartasken. Guardrail-metadata rapporterar både den
begärda och effektiva analyslägen; ett begärt `focused` läge utan
användbar användartext rapporteras som effektivt `full`.

Guardrail extraherar varje stödd videodel men beskriver inte mer än
`modalityBridgeVideoMaxVideos`. För ett mål som visat sig ha
`supportsVideo === false`, blir misslyckade och övergränsade videor explicita säkra
textmarkörer så att ingen rå video överlever. När kapabiliteten är okänd, behåller dessa delar
sin videobärare; varje fallback-transkript följer den begränsade text
konverteringen ovan. Mål med `supportsVideo === true` omgår bron.
Klientens begäran avbryta signal sprider sig genom nedladdning, mäklarkö,
underprocesser och textningsanrop; avbokningar stoppar mellan videor och misslyckas aldrig öppet
till rå media.

Körinställningar är DB-backade och Zod-validerade:

| Nyckel                              | Standard    | Område / beteende                                                                                         |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Valfri körning, opt-in                                                                                    |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` bevarar generiska texter; `focused` använder begränsad, otillförlitlig senaste användarkontext     |
| `modalityBridgeVideoModel`          | `""`        | Ärva Vision Bridge-modellen                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                      |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, eller proportionell `segment_aware`; detektorfel faller tillbaka till `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                       |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                            |

Legacy bevarade Video timeout-värden över 120 sekunder begränsas till
mäklarens deadline; nya inställningar som överskrider den gränsen avvisas.
`GET /api/modality-bridge/video/runtime` kräver betrodd stämplad loopback
lokalitet före autentisering eller runtime-probing, och kräver sedan
hanteringsautentisering. Den returnerar endast `available`, sanerade FFmpeg/ffprobe-versioner, och en fast
orsak när runtime inte är tillgänglig. Den interna extraktionspunkten är inte
en offentlig uppladdnings-API: kömättnad returnerar `503` plus `Retry-After`, en
anropardisconnection returnerar `499`, och den fasta mäklarens deadline returnerar `504`. Konverterade svar lägger
till `video->text;model=<visionModel>;parts=<videos>` till den centrala
`x-omniroute-modality-bridge`-huvudet utan att ta bort Vision- eller Audio-segment.

### PII Masker (`piiMasker.ts`)

Körs på **båda** stadier.

- **`preCall`** klonar payloaden, går igenom `system`, `messages`, `input` och
  `prompt` (inklusive vanliga strängobjekt), och tillämpar `processPII()` (från
  `@/shared/utils/inputSanitizer`) på sträng `content`/`text`-fält. När
  `PII_REDACTION_ENABLED=true`, redigeras upptäckta PII i den utgående
  payloaden. Detta är oberoende av `INPUT_SANITIZER_MODE` (som endast kontrollerar
  prompt-injektionspolicy). När redigering är avstängd registrerar anropet detekterings
  antal utan att skriva om innehållet.
- **`postCall`** djupklonar svaret, kör `sanitizePIIResponse()` plus
  Responses-API-formmasker (`maskResponsesOutput` — täcker
  `output_text` och `output[].content[].text`). Om någon redigering sker, ersätter
  det modifierade svaret det ursprungliga.

Skyddsräcket blockerar aldrig; det annoterar endast (`meta.detections`,
`meta.redacted`) eller skriver om.

### Prompt Injection (`promptInjection.ts`)

Upptäcker fientliga strukturer i användartillhandahållet innehåll och verkställer den
konfigurerade policyn. Beteendet styrs av miljövariabler och konstruktörsalternativ:

| Inställning  | Miljövariabel                                                                                             | Standard | Effekt                                                                                                                                                                                          |
| ------------ | --------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiverad    | `INPUT_SANITIZER_ENABLED`                                                                                 | `true`   | När `false`, kortsluter skyddsräcket.                                                                                                                                                           |
| Läge         | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                           | `warn`   | Injektionspolicy: `block`, `warn` eller `log`. (`redact` accepteras för bakåtkompatibilitet men tar **inte** bort injektionstext; begäran om PII-omskrivning styrs av `PII_REDACTION_ENABLED`.) |
| Blocktröskel | `blockThreshold` alternativ / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Minsta svårighetsgrad som krävs för att blockera. Medium är endast observationsläge som standard.                                                                                               |

**Lägesprioritet** (`getMode`): anropare `options.mode` →
`INJECTION_GUARD_MODE` **DB-funktion-flaggöverskrivning** (Dashboard → Inställningar →
Funktion Flaggor) → `INJECTION_GUARD_MODE` miljö → `INPUT_SANITIZER_MODE` miljö →
`warn`. En överskrivning från instrumentpanelen vinner därför över miljövariablerna, så UI för Funktion Flaggor kontrollerar det körande skyddsräcket live (ingen omstart). DB-läsningen är fail-safe:
om det uppstår ett fel, faller skyddsräcket tillbaka till det miljöbaserade beteendet, och när ingen
överskrivning är inställd är beteendet identiskt med miljöendast upplösning.

Detekteringskällor:

1. `sanitizeRequest()` från `@/shared/utils/inputSanitizer` (delad detektor
   uppsättning som används på andra ställen i pipeline).
2. Inbyggda `DEFAULT_GUARD_PATTERNS` (för närvarande `system_override_inline` och
   `markdown_system_block`, båda med `high` svårighetsgrad).
3. Valfria `customPatterns` som skickas via konstruktörsalternativ (strängar, regex,
   eller `{ name, pattern, severity }` poster).

När `mode === "block"` **och** minst en detektion uppfyller svårighetsgränsen,
returnerar `preCall` `{ block: true, message: "Begäran avvisad: misstänkt innehåll upptäckt" }`. I `warn`/`log` lägen loggar skyddsräcket men
tillåter anropet. Den delade hjälpen `evaluatePromptInjection()` exporteras också
för anropare som behöver utvärdera prompts utan att gå igenom registret.

**Scan bound (v3.8.20):** detektorn inspekterar endast de **första 16 KB** av
sammanfogad prompttext — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) i
`src/shared/utils/inputSanitizer.ts`. Både `detectInjection()` och
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` innan de kör
mönsterloopen. Injektionsdirektiv ligger nära toppen av en inmatning, så detta
begränsar regex CPU/GC på flera hundra KB payloads utan att försvaga detektionen (jmf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Körs på **båda** stadier, sist i standardkedjan (prioritet `95`). Redigerar
välkända API-nyckel / hemlig-token-mönster från den utgående payloaden (meddelande
innehåll, verktygsanropsargument, verktygsresultat) **och** leverantörens svar, så en
credential som klistras in i en prompt (eller ekas tillbaka av ett verktygsresultat) läcker inte
till den uppströms leverantören eller tillbaka till klienten.

- **Endast opt-in**, samma konvention som PII-redigering (Hård regel #20-nära):
  inaktiverad om inte `settings.credentialRedactionEnabled === true` **eller**
  `CREDENTIAL_REDACTION_ENABLED=true`. När den är avstängd, är skyddet en no-op —
  det blockerar aldrig och skriver aldrig om.
- `redactCredentials()` går igenom hela payload/respons-trädet (`walkValue()`,
  prototypföroreningssäker, cykelsäker via `WeakSet`) och ersätter träffar med
  en `[REDACTED:<type>]` platshållare, klonar endast de grenar som faktiskt
  har ändrats.
- `CREDENTIAL_PATTERNS` täcker LLM-leverantörsnycklar (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS-token (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), betalningsnycklar (Stripe, Square), moln
  nycklar (AWS access key, Twilio, SendGrid, Mailgun), privata nycklar / JWT:er,
  anslutningssträngar med autentiseringsuppgifter (`mongodb://user:pass@...`, etc.), och
  ett generiskt `Authorization`/`x-api-key`/`api-key`/`apikey` header-värde
  mönster. Header-formade nycklar (`authorization`, `x-api-key`, `api-key`,
  `apikey`) redigeras strukturellt (endast värde, schema-prefix som
  `Bearer `/`Basic ` bevaras) snarare än via det generiska text-regexet.
- Skyddet blockerar aldrig; det skriver endast om (`modifiedPayload` /
  `modifiedResponse`) och annoterar (`meta.credentialsRedacted`, `meta.count`).

Regression skydd: `tests/unit/credential-masker-guardrail.test.ts`.

## Baskontrakt (`base.ts`)

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
  block?: boolean; // true kortsluter kedjan
  message?: string; // visas vid blockering
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returneras av preCall för att skriva om begäran
  modifiedResponse?: TValue; // returneras av postCall för att skriva om svaret
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

En "guardrail" signalerar "ingen ändring" genom att returnera antingen `void`, `{}`, eller
`{ block: false }`. Att returnera en `modifiedPayload`/`modifiedResponse` ersätter
värdet som flödar genom kedjan för nedströms "guardrails".
`signal?: AbortSignal` överför anroparens livscykel till "guardrails". En avbruten begäran är det avsiktliga "fail-open"-undantaget: mediabryggor stoppar arbetet och rensar upp utan att återställa råmedia till ett mål som inte förväntas stödja det.

## Register (`registry.ts`)

Singleton-objektet `guardrailRegistry` exponerar:

- `register(guardrail)` — lägger till (eller ersätter med normaliserat namn) en "guardrail" och
  sorterar om efter stigande `priority`.
- `clear()` / `list()` — administrativa hjälpfunktioner.
- `runPreCallHooks(payload, context)` — itererar aktiva "guardrails", skickar
  "payload" genom `modifiedPayload`, och stoppar vid den första `block: true`.
- `runPostCallHooks(response, context)` — samma flöde på svarsidan.
- `resetGuardrailsForTests({ registerDefaults })` — rensar tillstånd och registrerar
  valfritt om standardinställningarna för ren testisolering.

Båda körarna returnerar `{ blocked, payload|response, results, guardrail?, message? }`
där `results` är en array av `GuardrailExecutionResult`-poster som inkluderar
`blocked`, `skipped`, `modified`, `error` och `meta`-fält per "guardrail",
användbara för spårning.

### Inaktivera Guardrails per Begäran

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` aggregerar en
avdubblerad lista över "guardrail"-namn som ska hoppas över för den aktuella
begäran. Källor (alla valfria, alla sammanfogade):

- `apiKeyInfo.disabledGuardrails`
- Begärans kropp `disabledGuardrails` (högsta nivån)
- Begärans kropp `metadata.disabledGuardrails`
- Rubrik `x-omniroute-disabled-guardrails` (eller äldre
  `x-disabled-guardrails`)

Värden kan vara arrayer av strängar eller en kommaavgränsad sträng; namn
normaliseras till gemener kebab-case (`pii_masker` → `pii-masker`). Resultatet
skickas via `context.disabledGuardrails` till registret, som hoppar över
matchande "guardrails" (`skipped: true` i `results`).

## Exekveringsordning

För varje förfrågan som flödar genom `src/sse/handlers/chat.ts` och
`open-sse/handlers/chatCore.ts`:

1.  `resolveDisabledGuardrails(...)` bygger hopplistan från API-nyckel, brödtext
    och rubriker.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` kör skyddsräcken i stigande
    prioritetsordning:
    - Inaktiverade skyddsräcken registreras som `skipped`.
    - Varje skyddsräckes `preCall` kan skriva om nyttolasten via `modifiedPayload`.
    - Den första `block: true` kortsluter kedjan och hanteraren returnerar
      ett avvisningssvar från skyddsräcket.
3.  Den (potentiellt omskrivna) nyttolasten flödar in i kombinationsdirigering och uppströms
    vidarebefordran.
4.  Efter att svaret har sammanställts kör `guardrailRegistry.runPostCallHooks(...)`
    samma kedja på svaret. `block: true` här släpper det uppströms
    svaret.

Skyddsräcken som kastar ett fel registreras med `error: <message>` och loggas via
`logger.warn`, men kedjan fortsätter – fail-open per design.

## Konfiguration

Miljövariabler som läses av de inbyggda skyddsräckena:

| Variabel                              | Används av               | Effekt                                                                                                   |
| :------------------------------------ | :----------------------- | :------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Sätt `false` för att helt inaktivera detektering.                                                        |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Injektionspolicy: `warn`, `block` eller `log`. Det äldre värdet `redact` skriver inte om injektionstext. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Läge för injektionsskyddet; även en DB-funktionsflagga som **åsidosätter** miljövariablerna (DB > ENV).  |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | Minsta allvarlighetsgrad som `MODE=block` avvisar: `high` (standard), `medium` eller `low`.              |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | Äldre alias för `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                       |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | När `true` redigeras PII i förfrågan (oberoende av injektionsläge).                                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nedströms) | Styr maskeringsbeteendet på svarssidan.                                                                  |

Modality Bridge-skyddsräckena läser körningskonfiguration från den DB-stödda inställningsbutiken
(`getSettings()`), inte miljövariabler. Visions primära nycklar är
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` och
`modalityBridgeCacheMaxEntries`. De äldre
`visionBridge*`-nycklarna accepteras endast som den dokumenterade en-cykels läs-
fallbacken; instrumentpanelsskrivningar använder de primära nycklarna. Standardvärden och fallback-
upplösaren finns i `src/shared/constants/modalityBridgeDefaults.ts`, med äldre
konstanter bevarade i `src/shared/constants/visionBridgeDefaults.ts`.

Ljud använder `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` och `modalityBridgeAudioMaxClips`, plus de delade
`modalityBridgeCache*`-inställningarna. Ljud har ingen fallback för äldre nycklar eftersom dessa
nycklar introducerades med Modality Bridge-schemat.

Video använder `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` och
`modalityBridgeVideoTimeout`, plus de delade `modalityBridgeCache*`-inställningarna.
Det är inaktiverat som standard eftersom FFmpeg/ffprobe är valfria operativa
beroenden och bildtextning av ramar lägger till latens och modellkostnad.

## Anpassade Guardrails

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

Steg:

1.  Skapa `src/lib/guardrails/myGuardrail.ts` som utökar `BaseGuardrail`.
2.  Implementera `preCall` och/eller `postCall`.
3.  Registrera antingen vid importtillfället (push från `registerDefaultGuardrails`) eller
    anropa `guardrailRegistry.register(...)` vid körning – registret ersätter
    alla tidigare guardrails med samma normaliserade namn.
4.  Lägg till tester under `tests/unit/` (befintliga exempel:
    `tests/unit/guardrails-registry.test.ts`,
    `tests/unit/prompt-injection-guard.test.ts`,
    `tests/unit/guardrails/visionBridge.test.ts`).

## Testning

Använd `resetGuardrailsForTests()` mellan tester för att starta från ett känt tillstånd.
Skicka `{ registerDefaults: false }` för att starta med ett tomt register och
registrera endast de guardrails som testas. Vision Bridge accepterar beroendeinjektion
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge exponerar motsvarande
gränssnitt för inställningar, funktioner, STT-modellval, autentiseringskontroller och transkription.
Tester kan därför utföra båda flödena utan DB- eller nätverksåtkomst.

## Se även

- `src/lib/guardrails/` — implementering
- `src/shared/utils/inputSanitizer.ts` — delad detektor som driver
  prompt-injektion och PII-maskering
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge standardinställningar och
  lista över tvingade-bryggmodeller
- `src/shared/constants/modalityBridgeDefaults.ts` — delade Vision/Audio körningsstandardinställningar
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalt lager (strömbrytare, nedkylningstider)
- `docs/reference/ENVIRONMENT.md` — fullständig referens för miljövariabler

## Täckning av injektionsskyddsrutter & red-team (Fas 8 · Block D)

Injektionsskyddet (`createInjectionGuard` / `withInjectionGuard`) täcker alla rutter
som accepterar användarprompter. Det respekterar `INJECTION_GUARD_MODE` (standard `warn` = logga endast;
`block` = returnerar HTTP 400 `SECURITY_001`).

| Typ              | Rutter                                                                                                                                               | Standardläge |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :----------- |
| Text (befintlig) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | varna        |
| Generativ        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | varna        |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | varna        |

Textutvinning (`extractMessageContents`) täcker `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nattlig, `nightly-llm-security.yml`):** promptfoo validerar att varje rutt blockerar
OWASP-LLM-korpusen i `INJECTION_GUARD_MODE=block`; garak kör sonder (hoppar över utan hemlighet).
`moderations` inkluderas för konsekvens – operatörer i block-läge kan undanta den via
`resolveDisabledGuardrails`.

Det nattliga arbetsflödet (`.github/workflows/nightly-llm-security.yml`, cron + manuell
dispatch) har två jobb:

- **`promptfoo-guard` (blockerande)** – kör `promptfoo eval -c promptfooconfig.yaml`
  med `INJECTION_GUARD_MODE=block`. Varje fientligt fall (t.ex. "ignorera alla
  tidigare instruktioner...", DAN-liknande jailbreaks) bekräftar att svaret innehåller
  `error.code === "SECURITY_001"`, dvs. att skyddet faktiskt avvisade begäran.
- **`garak` (rådgivande)** – kör garak `--probes promptinject,dan,leakreplay`
  mot en lokal OmniRoute-instans (`http://localhost:20128/v1`). Begränsas av en
  leverantörshemlighet (`PROMPTFOO_PROVIDER_KEY`); hoppar över graciöst och är suffixerat
  `|| true`, så det rapporterar utan att CI misslyckas.

Täckningen av skyddshjälpen (`createInjectionGuard` / `withInjectionGuard`)
spänner över varje promptbärande `/v1`-rutt; prompttext hämtas från
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` av
`extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.
