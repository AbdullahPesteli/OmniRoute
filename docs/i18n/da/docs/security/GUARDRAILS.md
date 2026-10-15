# Guardrails (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sandhedskilde:** `src/lib/guardrails/`
> **Senest opdateret:** 2026-08-29 — v3.8.51 (herkomsten af Video Bridge-transskriptioner deklareres af kalderen,
> men er endnu ikke verificeret af serveren — præciseret i henhold til #11661)

Guardrails håndhæver sikkerhed, politikker og indholdstransformationer ved grænsen
mellem OmniRoute og upstream-udbydere. Hver guardrail kan inspicere (og
eventuelt afvise, transformere eller annotere) request-payloads (`preCall`) og
upstream-svar (`postCall`).

Systemet er **fail-open**: Hvis en guardrail kaster en fejl under kørsel, registrerer
registreringsdatabasen fejlen og fortsætter med den næste guardrail i stedet for at lade
requesten fejle. Blokering er en eksplicit beslutning (`block: true`), aldrig et uheld.

## Indbyggede Beskyttelsesforanstaltninger

Registreringen indlæser automatisk seks beskyttelsesforanstaltninger i prioritetsrækkefølge ved import
(se `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Navn                | Fase(r)        | Fil                   |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lavere prioritetstal kører **først**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Intercepts billedbærende anmodninger rettet mod **ikke-vision modeller** og enten
omdirigerer hele anmodningen til en vision-kompatibel model eller erstatter billeddele
med tekstbeskrivelser produceret af en konfigurerbar vision model før
den opadgående kald. Dette lader tekst-only leverandører håndtere
multimodale payloads gennemsigtigt.

Flow:

1. Spring over, hvis målmodellen allerede understøtter vision (medmindre den optræder i
   den tvungne bro-liste `isVisionBridgeForcedModel`).
2. Uddrag billeddele via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), som delegerer til **den forenede mediedetektor**
   `detectMediaParts()` i `open-sse/utils/mediaParts.ts` — den
   eneste sandhedskilde delt med kombinationskompatibilitetsfilteret.
   Uddragning er tilladt til topniveau dele af de former,
   `replaceImageParts` kan splices tilbage (udtræk↔erstatningskontrakt): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, og Responses API `input_image`. Næstede hits og
   indikator-only former er kombinationsfiltermateriale og bliver aldrig udtrukket.
   Spring over, hvis ingen findes.
3. Løs runtime-konfiguration via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nye `modalityBridge*`
   indstillingsnøgler vinder; legacy `visionBridge*` nøgler forbliver en **én-cyklus
   tilbagefald** (rollback vindue). Spring over før nogen medietransmission, når
   broen er deaktiveret.
4. Modevælger (`modalityBridgeVisionMode`, se tabel nedenfor) beslutter
   omdirigering vs beskrivelse. Omdirigering returnerer `modifiedPayload` med kun `model`
   byttet, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beskrivelsesvej: begræns billeder til `maxImages`, komponer den opgavebevidste prompt,
   konsulter beskrivelsescache, kald vision modellen **parallelt**
   (`Promise.allSettled`), og injicer `[Image N]: <description>` tekstdele på
   deres plads. En mislykket beskrivelse giver `null`, og den originale billeddel er
   **beholdt** (#4012) — undtagen på kombinationsbeskrivelsesvejen, når hver
   beskrivelse mislykkedes, hvor en bekræftet ikke-vision opadgående får en
   `(unavailable — no vision-capable provider connected)` stub i stedet (#8430).
6. Returner `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Modevælger (`modalityBridgeVisionMode`)

| Mode       | Standard | Adfærd                                                                                                                                                                                                                                                                              |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Legacy heuristik, urørt (#6640/#7204): ikke-kombination/`auto/` modeller omdirigerer til den bedste vision model, medmindre den oprindelige model allerede har brugbare legitimationsoplysninger (så beskriver); kombinationsmål beskriver altid.                                   |
| `describe` |          | Beskriv altid — omdirigeringsblokken springes helt over; brugerens valgte model svarer altid.                                                                                                                                                                                       |
| `reroute`  |          | Tving omdirigering: beskyttelsen af den credentialed-model omgås. Omdirigering-**mål** legitimationsbeskyttelsen gælder stadig — når der ikke findes nogen brugbar vision mål, falder anmodningen igennem til beskrivelse, så rå billeder aldrig når en tekst-only backend (#8430). |

Tvangsmodi kortslutter **før** den automatiske heuristik kører; `auto` adfærd
er byte-identisk med den pre-PR-1 beskyttelsesforanstaltning.

#### API-nøgle omfang (`visionBridgeKeyScope.ts`)

Når opkalderens API-nøgle begrænser `allowedConnections`, kvote-puljer
(`allowedQuotas`) eller modeller (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), vælger broen kun
omdirigerings- og beskrivelsesmodeller, som nøglen må bruge, på forbindelser, som nøglen må
bruge. Beskrivelsesopkaldet går derefter altid gennem OmniRoute selvsløjfen med
`x-omniroute-self-loop-key-id` headeren, så den modtagende chat-anmodning
håndhæver den nøgles forbindelse og modelpolitik igen. `enforceApiKeyPolicy()`
ærer kun den header sammen med selvsløjfe-bæreren, så den kan kun
indsnævre adgangen, og en id, der ikke kan løses, bliver afvist.

Hvis ingen vision model er tilladt for nøglen, træder beskrivelsesvejen til side, og
anmodningen passerer uændret, den samme fail-open adfærd som en deaktiveret
beskyttelsesforanstaltning (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Anmodninger uden en nøgle, og nøgler uden disse begrænsninger, opfører sig præcist som
før.

#### Opgavebevidst beskrivelsesprompt (`modalityBridgeVisionTaskAware`)

Default **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) tilføjer
teksten fra **den sidste brugermeddelelse** (afkortet til 500 tegn) til den
grundlæggende beskrivelsesprompt, hvilket styrer beskrivelsen mod hvad brugeren
faktisk spurgte om (codex-vision-proxy mønster) og beder visionsmodellen om at
transkribere synlig tekst. Med flaget slået fra — eller ingen brugermeddelelse —
bruges den grundlæggende prompt uændret.

Beskriv selv-loopens egen OpenAI-kompatible anmodning (`callVisionModelSingle()`
i `visionBridgeHelpers.ts`) anmoder altid om `image_url.detail: "high"` —
ubetinget, for hver opkalder/udbyder, ikke låst af noget klient signal.
Lav-detalje sampling forringer OCR nøjagtigheden for netop den
tekst-transkription opgave, som denne prompt beder om, så beskrivelsesopkaldet
selv beder altid om høj detalje uanset hvilket detaljeniveau den oprindelige
indgående anmodning brugte. Dette påvirker kun den interne beskrivelsesanmodnings
krop; det ændrer ikke, hvordan OmniRoute videresender opkalderens egen
`image_url.detail` i den primære anmodning — den standard anvendes separat,
og kun for detekterede OpenCode-klienter, i `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Den Anthropic wire-format
gren af beskrivelses selv-loop har ikke noget `detail` felt og påvirkes ikke af
nogen standard.

#### Beskriv output cap (`modalityBridgeVisionMaxChars`)

| Nøgle                          | Standard | Område              |
| ------------------------------ | -------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` eller 100–50000 |

`0` (standard) betyder **ingen grænse** — beskrivelsen returneret af
`callVisionModel()` sendes igennem uændret, hvilket bevarer den eksisterende
adfærd. Enhver værdi i området 100–50000 afkorter beskrivelsen med en `…`
suffiks, før den bliver indsat tilbage som `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` i `src/lib/guardrails/visionBridge.ts`).
Hæv dette for detaljerede OCR-opgaver, hvor den nedstrøms model har brug for den
fulde transkription; sænk det for at begrænse tokenbrug på snakkesalige
visionsmodeller. Dashboardfeltet findes på Vision-fanens Avanceret panel
(`modality-bridge-max-chars` i `ModalityBridgeVisionTab.tsx`) og begrænser
enhver værdi mellem 1 og 99 op til 100 gulvet, mens en eksplicit `0`
forbliver urørt — `0` er en gyldig Zod-værdi i sig selv
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ikke blot
den "usatte" standard.

#### Beskriv cache (`modalityBridge/bridgeCache.ts`)

In-memory LRU + TTL cache til beskrivelsesoutput, delt proces-bredt.
Nøgle = `sha256(imageRef + composedPrompt + configuredBridgeModel)` med
længde-præfiks indramning (ingen felt-grænse kollisioner). Modelkomponenten er
den **konfigurerede** bro-model, ikke den model, der faktisk svarede —
`callVisionModel` kan falde tilbage internt, og at nøgle pr. forsøg ville
fragmentere cachen. Mislykkede beskrivelser caches aldrig. Indstillinger:

| Nøgle                           | Standard | Område  |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Fjernbillede normalisering (selv-loop beskriv/base64 hentning)

Når broen henter et **fjernt** billede selv — den Anthropic beskriv
selv-anmodning og claude-wire-format base64 konvertering
(`ensureBase64ImagesForClaudeWire`), begge via
`fetchRemoteImageAsDataUri()` i `visionBridgeHelpers.ts` — sendes den resulterende
data URI gennem `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) før den bliver indlejret i
visionsmodelanmodningen. Overdimensionerede billeder nedskaleres til en
**2048px lang kant** (matcher den resize cap OpenAI/Anthropic allerede
anvender server-side), hvilket reducerer upload bytes/latens uden at ændre
hvad visionsmodellen ser. Resize bruger `sharp`, indlæst via dynamisk import:
på en platform hvor dens native binære fil ikke kan indlæses, kaster
`normalizeDataUri()` **aldrig** — det falder tilbage til en passthrough af de
oprindelige bytes, så beskriv/base64-konverteringsstien altid forbliver
funktionel. Ikke-billede bytes (en hentning, der ikke returnerede et
decoderbart billede) sendes også igennem uændret. Denne normalisering er
afgrænset til billeder, som broen henter til sin egen selv-anmodning — den
anvendes aldrig på opkalderens rå passthrough payload, i overensstemmelse med
opt-in-only mutationsprincippet (Hard Rule #20).

#### Indstillingsskema + migration

De nye `modalityBridge*` nøgler er Zod-validerede i `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, den `modalityBridgeCache*` trio, og
`modalityBridgeAudio*` gruppen, der bruges af Audio Bridge. Migration
`141_modality_bridge_settings.sql` kopierer eksisterende legacy
`visionBridge*` værdier til de matchende nye nøgler (idempotent, overskriver
aldrig en operatør-sat `modalityBridge*` værdi); de legacy nøgler forbliver
accepteret som en læse-fald tilbage i en udgivelsescylcus.

#### Transparens header + stats

Beskriv-transformerede svar bærer
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(opbygget af `buildModalityBridgeHeader()` i `modalityBridge/bridgeStats.ts`,
stemplet af `withModalityBridgeHeader()` i `src/sse/handlers/chatHelpers.ts`).
Omdirigerede anmodninger får **ingen** header — payloaden var uændret, og
modelbyttet er allerede synligt i svarlegemets `model` felt.

`GET /api/modality-bridge/stats` (administrationsautentificering, samme niveau som
`GET /api/settings`) returnerer de in-memory per-modality tællere
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` for `vision`, `audio` og
`video`. `averageLatencyMs` bruger `latencySamples`, ikke alle forsøg, som sin
nævner; en operation uden timing fremstiller ikke et nul-millisekund
sample. `bridged` forbliver det bagudkompatible alias for succesfulde
konverteringer; mislykkede forsøg øger ikke dette.
Tællere nulstilles ved procesgenstart efter design
(telemetri, ikke regnskab).

#### Dashboard konfiguration

Den dedikerede dashboard-side er
`/dashboard/settings/modality-bridge`. Dens URL-adresserbare `Vision`, `Audio`,
og `Video` faner bevarer forespørgselsparametre, mens de skifter `tab` værdi.
Vision-fanen afslører aktivering, tilstand, modelvalg (inklusive den automatiske
standard), opgavebevidst prompting, avancerede timeout/billede/beskrivelse-længde/cache
grænser, runtime
tællere og en beskyttet sample-anmodning. Audio-fanen er også aktiv: den afslører
aktivering, en STT-enkelt modelvælger med Auto, timeout/max-clip grænser, lyd
tællere og en `input_audio` sample test. Video-fanen er funktionel: den rapporterer
FFmpeg/ffprobe runtime-tilstand — en af fire eksplicitte UI-tilstande (`unknown` mens
proben er i flyvning eller ikke kunne fuldføres, `restricted` på en ikke-loopback
dashboard-vært, hvor proben springes over på klientsiden, `unavailable` når den er
proberet og bekræftet manglende, eller `available` med FFmpeg/ffprobe versioner) —
bevarer enable/model/frame/video/timeout grænser, filtrerer modelvælgeren til
vision-kompatible modeller og afslører video tællere.

Det tidligere Vision Bridge-kort under AI-indstillinger er et kompatibilitetslink til den
nye side; det ejer ikke længere en anden kopi af formularen. Medieudbydere linker også
Image-to-Text og Speech-to-Text workflows til de tilsvarende Modality
Bridge faner uden at fjerne den eksisterende Speech-to-Text legeplads.

**Selv-loop adgangs-bypass:** når beskrivelsesopkaldet ruter gennem OmniRoute's
egen `/v1` selv-loop (ikke-standard udbyder model), sender sub-anmodningen
`x-omniroute-admission-bypass: internal` og er autentificeret med den løste
selv-loop legitimationsoplysning — den lokale `sk_omniroute` sentinel i lokal tilstand, eller den
operatorkonfigurerede `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env nøgle (#1350), så
`REQUIRE_API_KEY=true` implementeringer stadig kan køre beskrivelsesopkaldet. Bypass
anerkendes kun for disse præcise legitimationsoplysninger, så eksterne klienter kan ikke
bruge headeren til at springe adgang over.

Legacy standarder findes i `src/shared/constants/visionBridgeDefaults.ts`; de
nye mode/opgavebevidste/cache standarder og indstillingsløseren findes i
`src/shared/constants/modalityBridgeDefaults.ts`. Beskyttelsesbarrieren afslører en
`deps` konstruktørmulighed, så tests kan injicere falske `getSettings` og
`callVisionModel` implementeringer.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Intercepts lydbærende chat-anmodninger, før de når et mål, der ikke er
kendt for at acceptere lydinput. Den omdirigerer aldrig chat-anmodningen: lyddele
bliver transskriberet gennem den eksisterende OpenAI-kompatible multipart-endpoint, og den
valgte chatmodel fortsætter med teksttranskriptioner.

Flow:

1. Løs `supportsAudio` gennem `getResolvedModelCapabilities()`. Eksplícit
   udbyder-register metadata vinder, derefter statisk modelmetadata, derefter synkroniseret
   `modalities_input`. En erklæret inputliste uden `audio` er `false`; ingen
   kapabilitetsevidens forbliver `null`. Både `false` og `null` aktiverer den
   konservative bro, mens `true` omgår den.
2. Løs `modalityBridgeAudio*` indstillinger og udtræk spliceable top-level
   lyddele fra hver besked gennem den delte `detectMediaParts()`
   detektor. Understøttede wire former er OpenAI `input_audio`, `audio_url`, og
   `source.media_type: "audio/*"`. Næstet lyd opdages til routing, men fjernes ikke
   af splice-stien. Arbejdet er begrænset af `modalityBridgeAudioMaxClips`;
   senere dele forbliver urørte.
3. Ær en konfigureret `provider/model`, eller lad `selectAudioBridgeModel()` gå
   `AUDIO_TRANSCRIPTION_PROVIDERS` i stabil katalog rækkefølge og vælge den første
   model med en brugbar aktiv udbyder legitimationsoplysning.
4. `callAudioTranscription()` konverterer base64/data-URI lyd til en multipart
   `file`, eller downloader en fjern `audio_url` gennem den offentlige-only outbound
   beskyttelse med DNS pinning og en 25 MB grænse. Den POST'er derefter filen og den valgte
   model til den lokale `/v1/audio/transcriptions` selv-loop, autentificeret med
   `resolveSelfLoopBearer()`. Den eksisterende transskriptionsrute udfører normal
   legitimationsoplysning opslag, cooldown/rate-limit håndtering og udbyder dispatch.
5. Succesfulde opkald erstatter deres dele med `[Audio N]: <transcript>`. Opkald
   kører med `Promise.allSettled`: en individuel fejl bevarer den originale
   lyddel (#4012 kontrakt). Hvis hvert opkald fejler, og målet er bevist
   `supportsAudio === false`, bliver delene til
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 kontrakt). For
   et ukendt mål (`null`), forbliver et alt-fejl resultat urørt. Et bevist
   tekst-only mål uden brugbar STT legitimationsoplysning modtager den samme eksplicitte
   stub uden at udstede et netværksopkald.

Succesfulde transkriptioner bruger den proces-bredde Modality Bridge LRU/TTL cache. Nøglen
kombinerer lydreferencen, den stabile `audio-transcription` operation
etiket og den valgte STT model; fejl caches aldrig. Lydforsøg opdaterer
de delte `bridged`, `cacheHits`, `failures` og `lastUsedAt` tællere.
Transformerede svar bærer
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; urørte
anmodninger modtager ikke et Audio Bridge segment.

Runtime indstillinger er DB-baserede og Zod-validerede:

| Nøgle                         | Standard | Område            |
| ----------------------------- | -------- | ----------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                 |
| `modalityBridgeAudioModel`    | `""`     | Auto eller STT ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000       |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10              |

Den delte cache forbliver styret af `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, og `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepts topniveau video dele i Chat Completions `messages` og Responses
API `input`, før et mål uden kendt indfødt video support kaldes.
Understøttede former er `input_video`, `video_url`, `video_source`, HTTPS URLs,
og `data:video/*;base64,...` data URIs. Almindelige filnavne i tekst behandles ikke
som video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ejer anmodningsgennemgang,
kapabilitet/politik kontrol, per-anmodning aggregation, og respons payload.
Per-video arbejde — erhvervelse, hele resultat cachen, beskrivelse af en frame
sekvens (som fusionerer enhver caller-deklaret audio transkript), og per-forsøg
metrics/abort/rengøring — er skjult bag `processVideoPart` i
`videoBridgePipeline.ts`, kaldt én gang per video del inde i `preCall`'s loop.
Det modul definerer også de eksplicitte portgrænser `VideoMediaBrokerPort`
(til erhvervelse af bytes og udtrækning af samplede frames), `VideoAudioTranscriptionPort`
(fusionering af en caller-deklaret audio transkript med de samplede undertekster), og
`VideoDrilldownPort` (den legacy rå-lager form). Produktion STT og frame retention
er sammensat omkring den beskrivende port gennem `createVideoSttAdapter` og
`createVideoDrilldownAdapter`; sidstnævnte bruger den delte opaque-handle livscyklus.

Den offentlige `/v1` anmodningssti importerer eller påkalder aldrig en subprocess. Fjernt
videoer downloades under en 50 MiB grænse; inline base64 videoer har en
konservativ 36 MiB dekodet per-video cap, så modellen/meldinger/indramningskuvert
kan forblive inden for den offentlige JSON anmodningsadgangsgrænse på 50 MiB. Inline
længde og dekodet-størrelse estimater kontrolleres før tildeling. HTTPS er
påkrævet på den indledende fjernt URL og hver omdirigering, ved hjælp af den eksisterende
offentlige kun udgående beskyttelse med DNS pinning. Bytes krydser derefter den nøjagtige interne
`POST /api/modality-bridge/video/extract` broker grænse. Den rute er både
`LOCAL_ONLY` og `SPAWN_CAPABLE`, accepterer kun en per-proces autentificeret,
betroet-loopback anmodning, og accepterer aldrig en URL, filsystem sti, eksekverbar,
eller argumentliste. API body-størrelse pipeline og handlerens inkrementelle body
læser håndhæver uafhængigt en 50 MiB broker input cap. Dens begrænsede kø kører
én udtrækning ad gangen, tillader fire ventende opgaver, og sætter en grænse for ventende input på
100 MiB.

Inde i brokeren læser `ffprobe` en privat lokal fil; den faste format
tilladelsesliste udelukker playliste og manifest formater. For tilladte MOV-familie
containere forbliver eksterne MOV data referencer deaktiveret som standard, og den
faste kommando tilmelder sig ikke dem. Både `ffprobe` og `ffmpeg` bruger
`file`-kun protokol whitelist, én tråd, faste argument arrays, ingen shell,
og eksekverbare der er løst fra `PATH`. Vedhæftede-billede cover streams er ikke
spillbare kandidater. Alle spillbare streams skal opfylde grænserne, og en
eksplicit standard stream foretrækkes før den deterministiske laveste indeks
fallback. Videoer er begrænset til 600 sekunder, 8.192 pixels per dimension, og
33.554.432 kilde pixels. FFmpeg sample 1–16 midpoint JPEG frames, skalerer ned
den lange kant til højst 1.024 pixels uden at opskalere mindre inputs, og
modtager aldrig en URL. Sampling er `uniform` som standard. De valgfrie
`scene_aware` og eksperimentelle `segment_aware` politikker udfører én yderligere
fast FFmpeg passage over den allerede validerede lokale stream, vælger begrænsede
`showinfo` scene tidsstempler, og falder deterministisk tilbage til de samme
uniforme midtpunkter ved detektorfejl, timeout, fejlbehæftet output, eller et tomt
kandidatsæt. Segment-aware tilstand tildeler midtpunktsprøver proportionalt til
de validerede scene intervaller; segment-aware beviser og fallback adfærd er
detaljeret nedenfor. Den hårde 16-frame cap er
anvendt efter valg i hver politik. Når en scene-aware anmodning kun har et
én-frame budget, bruger den det uniforme midpoint af det aktive fuld-video eller fokus
vindue og rapporterer `policyEffective: uniform`: en enkelt valgt scene frame
kan ikke bevare begge temporale ender. En caller kan valgfrit give et
finit fokus vindue (`start`/`end` sekunder); grænserne er begrænset til mediets
varighed, omvendte eller ikke-finite vinduer afvises, og alle sampling
politikker udføres kun inden for det normaliserede interval. Det resulterende
vindue inkluderes i sampling metadata og i den ikke-betroede beskrivelse
præfiks, så downstream modeller kan skelne et fokuseret uddrag fra den fulde
tidslinje.

Semantisk underteksts fokus er en separat, eksplicit indstilling. Den
standard `full` analyse tilstand bevarer den eksisterende frame prompt og sender aldrig
anmodningstekst videre til undertekstmodellen. I `focused` tilstand læser broen kun den
seneste ikke-tomme brugerforfattede `text`/`input_text` fra den samme Chat eller Responses
container, normaliserer den til NFC, kollapser kontroltegn og whitespace,
og begrænser den til 500 Unicode kodepunkter. Et tomt resultat falder tilbage til den
præcise `full` prompt. Et brugbart hint serialiseres som JSON i en dedikeret
ikke-betroet-bruger-kontekst blok og må kun prioritere observerbare detaljer; det
kan ikke tilsidesætte den separate advarsel mod at følge instruktioner synlige
eller hørbare i mediet. Tekstligt fokus udleder aldrig `start`/`end` eller ændrer
den temporale sampler.

#### FU-07 strukturel segment bevis

`segment_aware` bruger en begrænset foranalysepassage over den allerede validerede lokale videostrøm. Den faste filterkæde skalerer først til højst 320 pixels bred, opdager sceneskift og frosne intervaller, og sampler derefter med 1 billede per sekund for sløring, gennemsnitlig luma og rumlig/temporal information. Passagen er begrænset til 600 strukturelle prøver, én FFmpeg/filter-tråd, den samme `file`-only protokol og container tilladelser, en 1 MiB proces-output grænse, og højst 30 sekunder inden for brokerens delte abort/deadline. Den accepterer aldrig en kommando, filter, sti eller URL fra anmodningen.

De strukturelle værdier er deterministiske prøver, ikke semantisk video forståelse. De udleder ikke emner, handlinger, undertekster, tale eller brugerintention. Scene- og frysegrænser danner segmenter; fryse dækning, sløring, eksponering, rumlig detalje og temporal ændring påvirker kun, hvordan det eksisterende 1–16 billede budget fordeles. Et helt frosset segment er begrænset til ét billede, mens ikke-frosne segmenter konkurrerer om det resterende budget. Når grænserne overstiger billederne, bevares ensartet tidslinjedækning, så hurtige tidlige klip ikke kan skjule et langt efterfølgende segment. Scenegrænser inden for den 1-sekunders analyseopløsning af en frysegrænse samles.

Manglende filtre, fejlagtige/tomme beviser, en detektorfejl eller den begrænsede foranalyse timeout fejler åbent til den præcise ensartede midpoint politik. En opkaldsabort eller broker deadline fejler ikke åbent: det afslutter den igangværende subprocess, forhindrer senere billedeudtrækning, og det private midlertidige træ fjernes i `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genererer deterministiske ægte FFmpeg fixtures til post-dedup undertekst-kald besparelser, tæt bevægelsesbudget tildeling, sløring/eksponering/SI-TI beviser, hurtige klip med en lang hale, og gradvise falske positiver. Den registrerer foranalyse vægttid og, hvor `/usr/bin/time` er tilgængelig, børns CPU og peak RSS. Dens kvalitetskontroller er kun strukturelle orakler. Ægte undertekst-model kvalitet forbliver `HOLD`, fordi dette system ikke har noget autoriseret endpoint eller frosset dommer. Monetære besparelser forbliver også `HOLD`, medmindre `--caption-cost-per-call-usd` leverer et eksplicit positivt pr. kald estimat; scriptet fabrikkerer aldrig noget resultat.

Hvert billede er begrænset til 4 MiB, alle rå billeder sammen til 23 MiB, og det serialiserede broker svar til 32 MiB. Et privat midlertidigt bibliotek fjernes i `finally`. OmniRoute pakker ikke FFmpeg og accepterer ikke en brugerdefineret eksekverbar sti. Før underteksterne anvendes, anvender broen en konservativ visuel deduplikeringspassage: hvert JPEG reduceres til en 16×16 gråtoner buffer og sammenlignes kun med det sidste billede, der er bevaret. For et anmodet undertekstbudget over ét billede, leverer udtrækning et begrænset kandidatpulje på op til det dobbelte af det budget og aldrig mere end 16 billeder. Den anmodede grænse anvendes kun efter deduplikeringsprocessen, med de første og sidste valgte kandidater bevaret under den endelige udtynding, når budgettet er mindst to. Den versionerede `grayscale-16x16-mean-cells-v2` politik bruger den større af gennemsnitlig luma delta og forholdet af miniatureceller, hvis normaliserede delta er mindst 0.05. Duplikat tærsklen er den konstante 0.04, valgt for forudsigelighed snarere end eksponeret som en runtime indstilling. Dette sekundære høj-kontrast signal bevarer små bevægelser og synlige tekstændringer, som en gennemsnitlig sammenligning kan skjule. Comparator- eller dekoderfejl fejler åbent og bevarer dækning. Output metadata adskiller udtrukne kandidater, succesfuldt brugte billeder og visuelle duplikater, der er droppet.

En eksplicit markeret videodel kan anmode om et tidsstemplet kontaktark. Broen bygger højst et 4-kolonne, 16-billede JPEG gitter. Hver 512-pixel celle brænder sit kilde tidsstempel ind i en høj-kontrast bundbånd, mens de samme tidsstempler forbliver i tekstuel metadata til downstream association og revision. Det komplette JPEG forbliver begrænset til 32 MiB. Hvis `sharp` ikke kan dekode eller sammensætte gitteret, falder broen tilbage til de individuelle JPEG billeder; en klientabort propagaterer stadig gennem arkoperationen.

Fremme beviser er bevidst adskilt fra den syntetiske kompositions mikrobenchmark. `scripts/perf/video-bridge-contact-sheet-eval.ts` definerer en skema-versioneret A/B-harness til ægte OpenAI-kompatible visionsmodeller. Den måler udbyder-rapporterede tokens, end-to-end vægttid (inklusive arkkomposition), model-kald antal og manifest-defineret faktabevaring. Rå model svar skrives ikke til rapporten; kun SHA-256 digester og matchede fakt IDs bevares. Harnessen foretager ikke netværks- eller betalte model kald, medmindre `--execute-real` er givet, og `--model`, `OMNIROUTE_BASE_URL` og `OMNIROUTE_API_KEY` er konfigureret. Uden det eksplicitte ægte kørsel forbliver dens maskinlæselige dom `HOLD`; syntetiske payload/kald-antal målinger alene er ikke fremme beviser.

Den separate `scripts/perf/video-bridge-promotion-eval.ts` forbruger FU-07 eller FU-09 observationer. Fremme optagelse kræver alle otte syntetiske scenarietyper plus et saniteret ægte klip, mindst tre målte gentagelser pr. rolle og sag, alle ti erklærede metrikker, frosne medier/prompt/forventede-fakt/indstillinger digester, unikke observations IDs og verificerede seedede A/B rækkefølge. Udførelseskvitteringen binder korpus digester, præcise kandidat SHA og modelrevision. Manglende eller ugyldige målinger forbliver `HOLD`, herunder CPU over 30 s, peak RSS over 512 MiB eller foranalyse over 30 s. Disse er bevis-optagelses grænser, ikke en ny runtime RSS håndhævelsesgaranti.

FU-07 kræver mindst 98% kvalitetsbevarelse og p95 latenstid ikke mere end 1,2x
baseline, plus enten en 0,05 absolut case-balanseret gennemsnitlig recall-forbedring ved
ækvivalente gennemsnitlige caption-opkald, eller mindst 10% færre gennemsnitlige post-dedup caption
opkald. FU-09 kræver mindst 0,85 kvalitet, 95% bevaring, 20% p95 latenstids
reduktion og 10% token reduktion. Kritisk faktatab, injektionsoverholdelse eller
manglende brug forhindrer promovering. Én udførelse kan ikke promovere noget:
`--previous-report` bekræfter to distinkte, ikke-overlappende, konsekutive
berettigede udførelser af den samme politik/modelrevision/kandidat/korpus. En
samplingeksperiment kan ikke bekræfte et kontaktarkeksperiment.

Samlerne bør bedømme svar i hukommelsen og gemme `responseDigest` plus
metrikker og observationsbindinger, aldrig svartekst. Forbrugeren læser også
legacy rå observationer, men kopierer aldrig den tekst ind i sine rapporter. Præcist
én af `responseDigest` eller `rawResponseText` accepteres for hver observation.
Den versionerede tilladelsesliste forbliver tom med en uforanderlig `hold` standard. En
berettiget post kræver sin evidensreference, politik, modelrevision, præcist
kandidat SHA, manifest digest og to distinkte kørsel ID'er; konfliktende kontekster
afvises. Disse metadata er en revisionskontrakt, ikke bevis for, at en refereret
fil indeholder ægte målinger. Gennemgå de faktiske kvitteringer, før du tilføjer
nogen post. Management stats endpoint og Video dashboard afslører konservativ
beredskab. En konfigureret modelalias alene etablerer ikke sin revision eller
den kørende kandidat SHA, så det nuværende dashboard rapporterer `HOLD` i stedet for
at genbruge berettigelse fra en anden udførelseskontekst. Eksplorativ eksperimentel
udvælgelse forbliver adskilt fra promovering; ingen standard ændres automatisk.

Opkalderne kan vedhæfte et valgfrit `transcript.cues` array til en understøttet video
del, når de allerede har justeret tekst. Hver cue skal bære `text`, et
afgrænset `start`/`end` interval inden for den undersøgte varighed, og en hvidlistet
`source` (`client`, `embedded` eller `audio-bridge`); `confidence` default til
`1` og skal forblive mellem `0` og `1`. Præcise duplikat cues sammenlægges.
OmniRoute starter aldrig transkription fra disse metadata: validerede cues
kopieres ind i det beskrevne resultat med kilde, tillid og interval, og
vises som ikke-pålidelige observationer sammen med frame captions. Ugyldig,
uden for rækkevidde, eller provenance-fri tekst afvises i stedet for at blive blandet ind i
caption-strømmen. Begge request-body transcript kanaler normaliserer leveret
proveniens til `client`, inklusive selv-asserted `embedded` eller `audio-bridge`
labels. Kun en server-ejet adapter kan tildele disse betroede labels gennem
den kode-only `trustedSource` argument; et request JSON felt kan ikke nå
det argument. Transcript tekst forbliver ikke-pålidelig medieafledt indhold,
uanset dens proveniens, og må aldrig bestemme autorisation.

En avanceret opkalder kan give et `audioTranscript` spor for den samme video;
det behandles som klientleveret tekst, ikke bevis for servertranskription.
Fusionssømmene kører visuelle og audio observationer under
én deadline og abortsignal, ordner dem på en fælles tidslinje, sammenlægger
præcise duplikater, og rapporterer et delvist resultat, når kun den ene side lykkes.
Et ugyldigt `audioTranscript` degraderes til det delvise resultat — den visuelle
beskrivelse bevares, og den audio gren registrerer en saniteret fejlkode —
i stedet for at fejle hele videoen. Per-gren tilgængelighed, den delvise flag,
og de saniterede fejlkoder bevares i det beskrevne resultat, i
guardrail metadata (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), i resultat-cache metadata, og i bro
fusion tællere. Den standard Video Bridge sti aktiverer ikke tale-til-tekst
eller downloader en anden mediekopi; uden det eksplicitte spor forbliver det
video-only.

**Transcript retention (#12150 P1).** Dette gælder automatisk, når som helst
Video Bridge (selv opt-in) gengiver en transcript cue — der er ingen separat
retentionsflag. Når en anmodning gengiver en hvilken som helst transcript cue (et caller-deklaret
`transcript` eller et fusioneret `audioTranscript`), markerer guardrail den
`videoBridgeObserved` og producerer en redigeret skygge af video beskrivelsen —
en identisk gengivelse, hvor hver cues fritekst krop er erstattet med
`[redacted-video-transcript]`, bygget ved at substituere det strukturerede cue felt
før strengen samles (aldrig ved at parse den fladede tekst, så ingen cue
indhold — modstridende eller almindeligt, inklusive kroppe der indeholder `]` såsom
`[inaudible]`/`[music]` — kan overleve). Den vedholdte call-log anmodningskrop bytter
hver video-afledt tekstdel for den redigerede skygge, matchet efter indhold
lighed; `fullText` ankeret læses igen fra den færdige pre-call guardrail
payload, så matchen stadig lykkes efter senere kæde guardrails (PII og
credential maskers, prioriteter 10/95) omskriver beskrivelsesteksten på stedet og
efter system-prompt/handoff/hukommelsesinjektion omformer meddelelsesarrayet. Den
krop, der sendes opstrøms til modellen, er uændret. En observeret anmodning befolker også
ingen holdbar Hukommelse (både request- og response-afledt ekstraktion springes),
så modellens eget svar kan ikke gentage transcript tekst ind i Hukommelsen.

**Raw video fields (#12430).** Når broen er aktiveret, og indfødt videosupport er ukendt eller fraværende, aktiverer definerede `transcript`/`audioTranscript` felter også `videoBridgeObserved`, selv efter beskrivelsesfejl eller en `maxVideos` grænse. `null` og tomme strenge tæller; fraværende felter og ikke-video metadata gør ikke. Bevarede kopier redigerer disse felter eller udelader anmodningen, og caches/Hukommelse omgås.

På disse fallback-stier bliver gyldige opkaldsindikationer understøttede `text`/`input_text` dele i stedet for ikke-standard leverandørfelter. Begge anmodede spor forbliver ubetroede `client` observationer, med en eksplicit advarsel om, at videoen ikke blev beskrevet, og tidsstempler ikke blev verificeret mod mediet. De eksisterende 256-indikator/64-KiB totale og per-indikator budgetter gælder for de to spor sammen; tidsstempler skal passe ind i mæglerens 600-sekunders loft og ethvert leveret fokusvindue. Ugyldige spor kasseres, ikke videresendes som vilkårlig tekst; et gyldigt søskende kan stadig bruges, medmindre deres samlede budget overskrides. Null/tomme felter tilføjer ingen tekst. Ingen mediefetch eller transkription tilføjes af denne fallback. Transkriptudvidelsesfelter fjernes fra fallback video bærerens og dens `video_url`/`source` objekter. OpenAI wire tilladelsesliste forbliver striks; ukendte-native video bærere forbliver tilgængelige, og kendte tekst-only mål holder sikre markører. Strukturerede redaktionsskygger beskytter den vedhæftede transkripttekst, mens den oprindelige opkaldsejers anmodning forbliver uændret. Native understøttede mål og deaktiverede broer bevarer deres eksisterende bypass-adfærd.

Yderligere bevarede kopier bruger det samme observerede-anmodningssignal. Det rå pre-guardrail klient-anmodningssnapshot, i-hukommelse ventende anmodning, og tidligt afviste-anmodningslog strukturelt erstatter transkriptfelter i video dele; streng prompts syntetiseret af pipeline faser og kontekst overdragelse bliver redigeret ved den vedholdte-anmodnings-krop sink. Den vedholdte `video_content_removed` markør får `previous_response_id` fortsættelse til at fejle lukket i stedet for at rekonstruere tekst, der blev intentionelt kasseret. Hvis en observeret anmodning mister sin per-del redaktionsskygge før logning, eller selv en af flere video skygger ikke matcher efter senere anmodningsmutationer, udelades den bevarede anmodningskrop helt i stedet for at bevare et delvist redigeret transkript.

For en observeret anmodning kan et modelrespons citere enhver del af transkriptet uden en struktureret indikation grænse. Dens vedholdte opkalds-log `responseBody` bliver derfor erstattet af en udeladelsesmarkør; det detaljerede pipeline artefakt (som kan inkludere upstream/klientkroppe og stream chunks) bliver ikke bevaret. Semantiske, idempotens, og ræsonnerings-genafspilnings caches omgår læsninger og skrivninger for den anmodning. Leverandøranmodningen og klient-synlige svar forbliver uændrede. Tidlige keepalive bytes drænes fra den midlertidige buffer, når det detaljerede artefakt udelades. Kiros fejlbehæftede EventStream advarsler rapporterer kun payload byte tællingen, aldrig indholdet eller JSON parserens rå fejl. Dette hævder ikke, at hver urelateret leverandør/plugin diagnose er blevet revideret; den bredere bevarede-sink feje er sporet i #11658.

Den interne `/api/modality-bridge/video/drilldown` livscyklus er et separat, loopback/token-godkendt cache substrat. Hver operation kræver også en kanonisk opak principal ID. Før en produktionsopkaldsafsender aktiveres, skal den udlede den ID fra den godkendte lejer og må aldrig videresende en klient-valgt værdi. Cache nøgler binder den principal til kanoniske session og video-referens IDs, gemmer kun deres SHA-256-afledte nøgler, og afgrænser både læsninger og sletning til den samme principal. Cachen gemmer højst 16 afledte JPEG rammer pr. post, udløber dem efter ti minutter, og understøtter afgrænsede `start`/`end` læsninger eller eksplicit session sletning.

Hver principal er begrænset til 16 poster og 64 MiB af kanoniske JPEG data. Disse grænser er uafhængige af det globale 64-poster/256 MiB loft: principal kvote pres fjerner kun den principals mindst for nylig brugte poster, før global LRU fjernelse overvejes. Udløbet poster fejes fra både principal og global regnskab ved cache aktivitet, mens annullering og valideringsfejl ikke forpligter en delvis erstatning.

Cachen afviser ikke-kanonisk Base64, overskydende padding, ikke-JPEG medier, fejlbehæftede eller afkortede JPEG'er, og JPEG'er, der producerer en advarsel under en afgrænset fuld-billede `sharp` dekodning. Den re-encoder hvert accepteret billede som en kanonisk JPEG, udleder bredde og højde fra de dekodede bytes i stedet for at stole på opkaldsfelter, og kasserer eventuelle efterfølgende polyglot bytes i stedet for at bevare dem. Kun den afgrænsede kanoniske komprimerede buffer bliver opkrævet til begge kvoter. JSON wire grænsen inkluderer Base64 overhead for det 32 MiB dekodede-input loft. Hver gemt afledning registrerer sit validerede JPEG format/opløsning, sampling politik, afledningsversion, oprettelsestid, server-beregnet indhold hash, og hashed parent reference plus den betroede opkalders parent-indhold hash. Annullering kontrolleres mellem asynkrone dekodnings/hash faser før den atomiske cache forpligtelse.

Den produktionsproducer genbruger allerede-afledte mægler rammer kun efter vellykket visuel analyse, uden anden video download/udtrækning. Det kræver operatør `modalityBridgeVideoDrilldownEnabled=true`, striks per-del `drilldown: true`, og en godkendt API-nøgle post ID. Klient-erklærede principal/session værdier etablerer aldrig ejerskab. Uden alle tre betingelser hash, ændrer størrelse eller bevarer yderligere rammer ikke. Bevaringsfejl bevarer det brugbare visuelle svar. Samtykkede anmodninger omgår hele-video resultat cachen, så cachede resultater aldrig genafspiller håndtag.

Successful JSON og SSE svar eksponerer højst fire opaque handles i den begrænsede
`x-omniroute-video-drilldown` header. Autoriserede browser oprindelser kan læse den header
uden at udvide CORS oprindelsespolitikken. Nye handles bruger `v1.<32-byte random base64url
token>`, og registreringen bevarer kun
deres SHA-256 hashes. Læseren/header parseren accepterer også legacy 64-hex tokens.
Den autentificerede offentlige forbruger er
`GET /api/v1/video-bridge/drilldown?handle=...`, uafhængigt gated af
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Eksplisit vedholdt false tilbagekalder
adgang, selv når den legacy `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env
fallback er aktiveret. Produktionsbeholdning har den analoge legacy
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Begge fallbacks er som standard deaktiveret.

Forbrugeren afleder ejerskab fra den autentificerede nøgle, anvender nøglepolitik og
returnerer den samme 404 for ukendte, udløbne og en anden nøgles handles. Den accepterer
`variant=preview|standard|detail` (maksimal JPEG dimension 320/640/1280, aldrig op-skaleret),
`limit=1..8` (eller den legacy `frames` alias, aldrig begge), nul-baseret `page`, og valgfri
`start`/`end` fokus sekunder. Duplikerede
forespørgselsnøgler og omvendte fokusvinduer bliver afvist. Hver returneret variant har en hash
af sit faktiske indhold og faktiske opløsningsmetadata, knyttet til den bevarede kilde.
Varianter afledes ved læsning snarere end opbevares som ekstra bevarede kopier. JSON
svaret, inklusive Base64/kuvert, er begrænset til 32 MiB; en for stor side returnerer
413, og klienten skal anmode om færre frames. Læsninger tjekker annullering omkring hver
ændring af størrelse og genkontrollerer handle gyldighed før returnering. `DELETE` af ejer er idempotent;
sletning eller TTL udløb frigiver den bevarede kilde og brugsregnskab.

Den delte lager er proces-lokal: handles udløber ved genstart og er ikke overførbare
mellem uafhængige OmniRoute processer. Ledelsesstatistikker eksponerer effektiv beholdning/
fjern politik og aggregerede bevarede poster/bytes kun, aldrig medier, referencer,
hoved-ID'er eller handles. Videoindstillingspanelet viser disse værdier og kan bevare
begge samtykke-switches. Denne implementeringsdokumentation er ikke live implementering eller
promoveringsbevis; real-model accept registreres separat.

Frames er undertekster sekventielt med den konfigurerede Video model. En tom
Video override arver Vision indstillingen; hvis begge er tomme, vælger Vision
auto-router den effektive vision-kapable model. Succesfulde undertekster
erstatte den originale del med et stabilt `[Video description:` præfiks, der også
mærker teksten som en ikke-pålidelig medie-afledt observation og fortæller downstream
modeller ikke at følge instruktioner fundet i mediet. Frame-undertekst cache nøgler
inkluderer JPEG bytes, prompt, tidsstempel og effektiv model; kun succesfulde
undertekster caches. Cache poster bevarer den faktiske succesfulde producent model,
inklusive en fallback model; broen rapporterer `mixed`, når forskellige frames
er produceret af forskellige modeller. Et cache hit genbruger den producent identitet
i stedet for at ommærke det som den anmodede routingplan. Hele-video resultat
cache er nøglebaseret på hver input, der ændrer output — prompt, effektiv
model, sampling politik, frame antal, semantisk analyse mode, SHA-256
fingeraftryk af den normaliserede fokus hint, fokus vindue, `transcript`,
`audioTranscript`, og kontakt-sheet flag — så ændring af nogen af disse
dimensioner er et cache miss, aldrig en stald genbrug. Den visuelle dedup politik
version, tærskel, og begrænset kandidat-frame antal er også eksplicit i
resultat-cache nøgle og metadata; en politikændring kan derfor ikke genbruge en stald
hele-video beskrivelse. Resultat-cache v4 metadata holder mode og
fingeraftryk, aldrig den rå brugeropgave. Guardrail metadata rapporterer både den
anmodede og effektive analyse mode; en anmodet `focused` mode uden
brugbar bruger tekst rapporteres som effektivt `full`.

Guardrail udtrækker hver understøttet video del, men beskriver ikke mere end
`modalityBridgeVideoMaxVideos`. For et mål, der er bevist at have
`supportsVideo === false`, bliver mislykkede og over-grænse videoer eksplicit sikre
tekstmarkører, så ingen rå video overlever. Når kapabilitet er ukendt, bevarer disse dele
deres video bærer; enhver fallback transcript følger den begrænsede tekst
konvertering ovenfor. Mål med `supportsVideo === true` omgår broen.
Klientanmodningens abortsignal propagerer gennem download, broker kø,
underprocesser, og undertekst kald; aborter stopper mellem videoer og fejler aldrig åbent
til rå medier.

Runtime indstillinger er DB-bakket og Zod-valideret:

| Nøgle                               | Standard    | Område / adfærd                                                                                             |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Valgfri runtime, opt-in                                                                                     |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` bevarer generiske undertekster; `focused` bruger begrænsede, ikke-pålidelige seneste-bruger kontekst |
| `modalityBridgeVideoModel`          | `""`        | Arv Vision Bridge model                                                                                     |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                        |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, eller proportional `segment_aware`; detektorfejl falder tilbage til `uniform`     |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                         |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                              |

Legacy vedholdte Video timeout værdier over 120 sekunder bliver begrænset til
broker deadline; nye indstillinger over denne grænse bliver afvist.
`GET /api/modality-bridge/video/runtime` kræver betroet stempel loopback
lokalitet før autentificering eller runtime probing, og kræver derefter
administrationsautentificering. Den returnerer kun `available`, rensede
FFmpeg/ffprobe versioner, og en fast grund, når runtime ikke er tilgængelig. Den interne
udtrækningsendpoint er ikke en offentlig upload API: kømæthed returnerer `503` plus
`Retry-After`, en opkaldsafbrydelse returnerer `499`, og den faste broker deadline
returnerer `504`. Konverterede svar tilføjer
`video->text;model=<visionModel>;parts=<videos>` til den centrale
`x-omniroute-modality-bridge` header uden at fjerne Vision eller Audio segmenter.

### PII Masker (`piiMasker.ts`)

Kører på **begge** stadier.

- **`preCall`** kloner payloaden, gennemgår `system`, `messages`, `input`, og
  `prompt` (inklusive almindelige strengelementer), og anvender `processPII()` (fra
  `@/shared/utils/inputSanitizer`) på streng `content`/`text` felter. Når
  `PII_REDACTION_ENABLED=true`, bliver detekteret PII redigeret i den udgående
  payload. Dette er uafhængigt af `INPUT_SANITIZER_MODE` (som kun kontrollerer
  prompt-injektionspolitik). Når redigering er slået fra, registrerer opkaldet
  detektionsantal uden at omskrive indholdet.
- **`postCall`** dybkloner svaret, kører `sanitizePIIResponse()` plus
  Responses-API-form maskereren (`maskResponsesOutput` — dækker
  `output_text` og `output[].content[].text`). Hvis der sker nogen redigering,
  erstatter det modificerede svar det originale.

Sikkerhedsstøtten blokerer aldrig; den annoterer kun (`meta.detections`,
`meta.redacted`) eller omskriver.

### Prompt Injection (`promptInjection.ts`)

Registrerer modstridende strukturer i brugerleveret indhold og håndhæver den
konfigurerede politik. Adfærden styres af miljøvariabler og konstruktørmuligheder:

| Indstilling      | Miljøvariabel                                                                                           | Standard | Effekt                                                                                                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Aktiveret        | `INPUT_SANITIZER_ENABLED`                                                                               | `true`   | Når `false`, kortslutter sikkerhedsstøtten.                                                                                                                                                            |
| Tilstand         | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                         | `warn`   | Injektionspolitik: `block`, `warn`, eller `log`. (`redact` accepteres for bagudkompatibilitet, men fjerner **ikke** injektions tekst; anmodning om PII omskrivning styres af `PII_REDACTION_ENABLED`.) |
| Blokeringsgrænse | `blockThreshold` mulighed / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Minimum alvorlighed krævet for at blokere. Medium er kun til observation som standard.                                                                                                                 |

**Tilstandsprioritet** (`getMode`): opkalder `options.mode` →
`INJECTION_GUARD_MODE` **DB funktionsflag overskrivning** (Dashboard → Indstillinger →
Funktionsflag) → `INJECTION_GUARD_MODE` miljø → `INPUT_SANITIZER_MODE` miljø →
`warn`. En dashboard-overskrivning vinder derfor over miljøvariablerne, så Funktions
flag UI kontrollerer den kørende sikkerhedsstøtte live (ingen genstart). DB-læsningen er fejlsikker:
hvis den fejler, falder sikkerhedsstøtten tilbage til den miljøbaserede adfærd, og når ingen
overskrivning er indstillet, er adfærden identisk med miljøkun opløsning.

Detektionskilder:

1. `sanitizeRequest()` fra `@/shared/utils/inputSanitizer` (delt detektor
   sæt brugt andre steder i pipeline).
2. Indbyggede `DEFAULT_GUARD_PATTERNS` (aktuelt `system_override_inline` og
   `markdown_system_block`, begge med `high` alvorlighed).
3. Valgfri `customPatterns` sendt via konstruktørmuligheder (strenge, regex,
   eller `{ name, pattern, severity }` poster).

Når `mode === "block"` **og** mindst én detektion opfylder alvorlighed
grænsen, returnerer `preCall` `{ block: true, message: "Anmodning afvist:
mistænkeligt indhold registreret" }`. I `warn`/`log` tilstande logger sikkerhedsstøtten, men
tillader opkaldet. Den delte hjælper `evaluatePromptInjection()` eksporteres også
til opkaldere, der har brug for at evaluere prompts uden at gå gennem registreringen.

**Scan grænse (v3.8.20):** detektoren inspicerer kun de **første 16 KB** af
sammensat prompt tekst — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) i
`src/shared/utils/inputSanitizer.ts`. Både `detectInjection()` og
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` før de kører
mønsterloopet. Injektionsdirektiver sidder nær toppen af en input, så dette
begrænser regex CPU/GC på multi-hundred-KB payloads uden at svække detektion (jf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Kører på **begge** stadier, sidst i standard kæden (prioritet `95`). Redigerer
velkendte API-nøgle / hemmelig-token mønstre fra den udgående
payload (beskedindhold, værktøjsopkaldsargumenter, værktøjsresultater) **og** leverandørsvaret, så en
legitimationsoplysning indsat i en prompt (eller ekkoet tilbage af et værktøjsresultat) ikke lækkes
til den opstrøms leverandør eller tilbage til klienten.

- **Kun opt-in**, samme konvention som PII-redigering (Hard Rule #20-adjacent):
  deaktiveret medmindre `settings.credentialRedactionEnabled === true` **eller**
  `CREDENTIAL_REDACTION_ENABLED=true`. Når det er slået fra, er beskyttelsen en no-op —
  den blokerer aldrig og omskriver aldrig.
- `redactCredentials()` gennemgår hele payload/response-træet (`walkValue()`,
  prototype-forurenings-sikker, cyklus-sikker via `WeakSet`) og erstatter matches med
  en `[REDACTED:<type>]` pladsholder, der kun kloner de grene, der faktisk
  er ændret.
- `CREDENTIAL_PATTERNS` dækker LLM-udbyder nøgler (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokens (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), betalingsnøgler (Stripe, Square), cloud
  nøgler (AWS adgangsnøgle, Twilio, SendGrid, Mailgun), private nøgler / JWT'er,
  credential-bærende forbindelsesstrenge (`mongodb://user:pass@...`, osv.), og
  et generisk `Authorization`/`x-api-key`/`api-key`/`apikey` header-værdi
  mønster. Header-formede nøgler (`authorization`, `x-api-key`, `api-key`,
  `apikey`) redigeres strukturelt (kun værdi, skema-præfiks som
  `Bearer `/`Basic ` bevaret) snarere end via den generiske tekst regex.
- Beskyttelsen blokerer aldrig; den omskriver kun (`modifiedPayload` /
  `modifiedResponse`) og annoterer (`meta.credentialsRedacted`, `meta.count`).

Regression beskyttelse: `tests/unit/credential-masker-guardrail.test.ts`.

## Basiskontrakt (`base.ts`)

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
  block?: boolean; // true afbryder kæden
  message?: string; // vises ved blokering
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returneres af preCall for at omskrive anmodningen
  modifiedResponse?: TValue; // returneres af postCall for at omskrive svaret
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

En guardrail signalerer "ingen ændring" ved at returnere enten `void`, `{}` eller
`{ block: false }`. Returnering af en `modifiedPayload`/`modifiedResponse` erstatter
den værdi, der løber gennem kæden til efterfølgende guardrails.
`signal?: AbortSignal` viderefører kalderens livscyklus til guardrails. En afbrudt anmodning er den bevidste fail-open-undtagelse: mediebroer stopper arbejdet og rydder op uden at gendanne rå medier til et mål, som med sikkerhed ikke understøtter dem.

## Register (`registry.ts`)

Singletonen `guardrailRegistry` eksponerer:

- `register(guardrail)` — tilføjer en guardrail (eller erstatter efter normaliseret navn) og
  sorterer igen efter stigende `priority`.
- `clear()` / `list()` — administrative hjælpefunktioner.
- `runPreCallHooks(payload, context)` — gennemløber aktive guardrails, fører
  payloaden gennem `modifiedPayload` og stopper ved den første `block: true`.
- `runPostCallHooks(response, context)` — samme forløb på svarsiden.
- `resetGuardrailsForTests({ registerDefaults })` — rydder tilstanden og
  genregistrerer eventuelt standarderne for ren testisolering.

Begge kørselsfunktioner returnerer `{ blocked, payload|response, results, guardrail?, message? }`,
hvor `results` er et array af `GuardrailExecutionResult`-poster, som indeholder
felterne `blocked`, `skipped`, `modified`, `error` og `meta` for hver guardrail,
hvilket er nyttigt til sporing.

### Deaktivering af guardrails pr. anmodning

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` samler en
duplikatfri liste over guardrail-navne, som skal springes over for den aktuelle
anmodning. Kilder (alle valgfrie, alle flettes):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` i anmodningens body (på øverste niveau)
- `metadata.disabledGuardrails` i anmodningens body
- Headeren `x-omniroute-disabled-guardrails` (eller den ældre
  `x-disabled-guardrails`)

Værdier kan være arrays af strenge eller en kommasepareret streng; navne
normaliseres til kebab-case med små bogstaver (`pii_masker` → `pii-masker`). Resultatet
videregives via `context.disabledGuardrails` til registret, som springer
matchende guardrails over (`skipped: true` i `results`).

## Udførelsesrækkefølge

For hver anmodning, der går gennem `src/sse/handlers/chat.ts` og
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` opbygger listen over elementer, der skal springes over, ud fra API-nøglen, body
   og headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` kører guardrails i stigende
   prioritetsrækkefølge:
   - Deaktiverede guardrails registreres som `skipped`.
   - Hver guardrails `preCall` kan omskrive payloaden via `modifiedPayload`.
   - Den første `block: true` afbryder kæden, og handleren returnerer
     et afvisningssvar fra den pågældende guardrail.
3. Den (potentielt omskrevne) payload sendes videre til kombinationsrouting og upstream-
   videresendelse.
4. Når svaret er samlet, kører `guardrailRegistry.runPostCallHooks(...)`
   den samme kæde på svaret. `block: true` her kasserer upstream-
   svaret.

Guardrails, der udløser fejl, registreres med `error: <message>` og logges via
`logger.warn`, men kæden fortsætter — den er bevidst designet til at være fail-open.

## Konfiguration

Miljøvariabler, der læses af de indbyggede guardrails:

| Variabel                              | Bruges af                 | Effekt                                                                                                           |
| ------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Angiv `false` for at deaktivere detektering fuldstændigt.                                                        |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Injektionspolitik: `warn`, `block` eller `log`. Den ældre værdi `redact` omskriver ikke injektionstekst.         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Tilstand for injektionsbeskyttelsen; også et DB-feature-flag, der **tilsidesætter** miljøvariablerne (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Den laveste alvorlighedsgrad, som `MODE=block` afviser: `high` (standard), `medium` eller `low`.                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Ældre alias for `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Når værdien er `true`, redigeres PII i anmodningen (uafhængigt af injektionstilstanden).                         |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Styrer maskeringsadfærden på svarsiden.                                                                          |

Modality Bridge-guardrails læser kørselskonfigurationen fra det DB-understøttede
indstillingslager (`getSettings()`), ikke fra miljøvariabler. Visions primære nøgler er
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` og
`modalityBridgeCacheMaxEntries`. De ældre
`visionBridge*`-nøgler accepteres kun som det dokumenterede læsefallback i én cyklus;
dashboardet skriver med de primære nøgler. Standardværdier og fallback-
resolveren findes i `src/shared/constants/modalityBridgeDefaults.ts`, mens ældre
konstanter er bevaret i `src/shared/constants/visionBridgeDefaults.ts`.

Lyd bruger `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` og `modalityBridgeAudioMaxClips` samt de delte
`modalityBridgeCache*`-indstillinger. Lyd har intet fallback til ældre nøgler, da disse
nøgler blev introduceret med Modality Bridge-skemaet.

Video bruger `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` og
`modalityBridgeVideoTimeout` samt de delte `modalityBridgeCache*`-indstillinger.
Funktionen er som standard deaktiveret, fordi FFmpeg/ffprobe er valgfrie driftsmæssige
afhængigheder, og billedtekstning af frames øger latenstid og modelomkostninger.

## Tilpassede guardrails

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

Trin:

1. Opret `src/lib/guardrails/myGuardrail.ts`, som udvider `BaseGuardrail`.
2. Implementer `preCall` og/eller `postCall`.
3. Registrer enten ved importtidspunktet (tilføj fra `registerDefaultGuardrails`), eller
   kald `guardrailRegistry.register(...)` under kørsel — registreringsdatabasen erstatter
   enhver tidligere guardrail med det samme normaliserede navn.
4. Tilføj test under `tests/unit/` (eksisterende eksempler:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Test

Brug `resetGuardrailsForTests()` mellem test for at starte fra en kendt tilstand.
Angiv `{ registerDefaults: false }` for at starte med en tom registreringsdatabase og
kun registrere de guardrails, der testes. Vision Bridge accepterer dependency
injection (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge eksponerer de
tilsvarende integrationspunkter for indstillinger, funktionalitet, valg af STT-model,
kontrol af legitimationsoplysninger og transskription. Test kan derfor afprøve begge
forløb uden adgang til database eller netværk.

## Se også

- `src/lib/guardrails/` — implementering
- `src/shared/utils/inputSanitizer.ts` — fælles detektor, som driver
  beskyttelse mod prompt-injektion og maskering af personhenførbare oplysninger
- `src/shared/constants/visionBridgeDefaults.ts` — standarder for Vision Bridge og
  modelliste for tvungen bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — fælles standarder for kørsel af Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalt lag (circuit breaker, nedkølingsperioder)
- `docs/reference/ENVIRONMENT.md` — komplet reference til miljøvariabler

## Rutedækning og red-team for injektionsbeskyttelsen (Fase 8 · Blok D)

Injektionsbeskyttelsen (`createInjectionGuard` / `withInjectionGuard`) dækker alle ruter,
der accepterer brugerprompter. Den respekterer `INJECTION_GUARD_MODE` (standardværdien `warn` = kun logning;
`block` = returnerer HTTP 400 `SECURITY_001`).

| Type                 | Ruter                                                                                                                                                | Standardtilstand |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Tekst (eksisterende) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn             |
| Generativ            | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn             |
| Data                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn             |

Tekstudtrækning (`extractMessageContents`) dækker `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (hver nat, `nightly-llm-security.yml`):** promptfoo validerer, at hver rute blokerer
OWASP-LLM-korpuset i `INJECTION_GUARD_MODE=block`; garak kører prober (springes over uden hemmelighed).
`moderations` er inkluderet for konsistens — operatører i blokeringstilstand kan undtage den via
`resolveDisabledGuardrails`.

Det natlige workflow (`.github/workflows/nightly-llm-security.yml`, cron + manuel
igangsættelse) har to jobs:

- **`promptfoo-guard` (blokerende)** — kører `promptfoo eval -c promptfooconfig.yaml`
  med `INJECTION_GUARD_MODE=block`. Hver adversarial test (f.eks. "ignore all
  previous instructions…", jailbreaks i DAN-stil) kontrollerer, at svaret indeholder
  `error.code === "SECURITY_001"`, dvs. at beskyttelsen faktisk afviste anmodningen.
- **`garak` (vejledende)** — kører garak `--probes promptinject,dan,leakreplay`
  mod en lokal OmniRoute-instans (`http://localhost:20128/v1`). Betinget af en
  udbyderhemmelighed (`PROMPTFOO_PROVIDER_KEY`); springes elegant over og har suffikset
  `|| true`, så jobbet rapporterer uden at få CI til at fejle.

Dækningen af hjælpefunktionen til beskyttelse (`createInjectionGuard` / `withInjectionGuard`)
omfatter alle promptbærende `/v1`-ruter; prompttekst hentes fra
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` af
`extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.
