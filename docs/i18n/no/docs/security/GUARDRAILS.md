# Guardrails (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sannhetskilde:** `src/lib/guardrails/`
> **Sist oppdatert:** 2026-08-29 — v3.8.51 (opprinnelsen til Video Bridge-transkripsjoner oppgis av kalleren,
> og er ennå ikke verifisert av serveren — presisert i henhold til #11661)

Sikkerhetsmekanismer håndhever sikkerhet, retningslinjer og innholdstransformasjoner i grensesnittet
mellom OmniRoute og oppstrømsleverandører. Hver sikkerhetsmekanisme kan inspisere (og
eventuelt avvise, transformere eller annotere) forespørselsnyttelaster (`preCall`) og
oppstrømssvar (`postCall`).

Systemet er **fail-open**: Hvis en sikkerhetsmekanisme utløser et unntak under kjøring, registrerer
registeret feilen og fortsetter med neste sikkerhetsmekanisme i stedet for å la
forespørselen mislykkes. Blokkering er en eksplisitt beslutning (`block: true`), aldri et uhell.

## Innebygde Beskyttelseslinjer

Registeret laster automatisk inn seks beskyttelseslinjer i prioritert rekkefølge ved import
(se `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Navn                | Fase(r)        | Fil                   |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lavere prioritetstall kjører **først**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Fanger opp bildeholdige forespørsel rettet mot **ikke-visjonsmodeller** og enten
omdirigerer hele forespørselen til en visjonskapabel modell eller erstatter bilde
delene med tekstbeskrivelser produsert av en konfigurerbar visjonsmodell før
den oppstrøms kallet. Dette lar tekstbare leverandører håndtere
multimodale nyttelaster på en gjennomsiktig måte.

Flyt:

1. Hopp over hvis målmodellen allerede støtter visjon (med mindre den vises i
   den tvungne brolisten `isVisionBridgeForcedModel`).
2. Ekstraher bilde deler via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), som delegerer til **unified media
   detector** `detectMediaParts()` i `open-sse/utils/mediaParts.ts` — den
   eneste sannhetskilden delt med kombinasjonskompatibilitetsfilteret.
   Ekstraksjon er tillatt til toppnivå deler av formene
   `replaceImageParts` kan sette tilbake (ekstraher↔erstatte kontrakt): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, og Responses API `input_image`. Nestede treff og
   indikatorbare former er kombinasjonsfiltermateriale og blir aldri ekstrahert.
   Hopp over hvis ingen funnet.
3. Løs runtime-konfigurasjon via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nye `modalityBridge*`
   innstillingsnøkler vinner; eldre `visionBridge*` nøkler forblir en **én-syklus
   tilbakefall** (tilbakekallingsvindu). Hopp over før noen medietransport når
   broen er deaktivert.
4. Modusvelger (`modalityBridgeVisionMode`, se tabellen nedenfor) bestemmer
   omdirigering vs beskrivelse. Omdirigering returnerer `modifiedPayload` med bare `model`
   byttet, pluss meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beskrivelsessti: begrens bilder til `maxImages`, komponer den oppgavebevisste prompten,
   konsulter beskrivelsesbufferen, kall visjonsmodellen **parallelt**
   (`Promise.allSettled`), og injiser `[Image N]: <description>` tekstdeler på
   deres plass. En mislykket beskrivelse gir `null` og den originale bilde delen er
   **bevart** (#4012) — unntatt på kombinasjonsbeskrivelsesstien når hver
   beskrivelse mislyktes, hvor en bekreftet ikke-visjon oppstrøm får en
   `(unavailable — no vision-capable provider connected)` stub i stedet (#8430).
6. Returner `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Modusvelger (`modalityBridgeVisionMode`)

| Modus      | Standard | Atferd                                                                                                                                                                                                                                                                                       |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Eldre heuristikk, urørt (#6640/#7204): ikke-kombinasjon/`auto/` modeller omdirigerer til den beste visjonsmodellen med mindre den originale modellen allerede har brukbare legitimasjoner (da beskriver); kombinasjonsmål beskriver alltid.                                                  |
| `describe` |          | Beskriv alltid — omdirigeringsblokken hoppes helt over; brukerens valgte modell svarer alltid.                                                                                                                                                                                               |
| `reroute`  |          | Tving omdirigering: beskyttelsen for å beholde legitimerte modeller omgås. Omdirigering-**mål** legitimasjonsbeskyttelsen gjelder fortsatt — når ingen brukbar visjon mål eksisterer, faller forespørselen gjennom til beskrivelse slik at rå bilder aldri når en tekstbare backend (#8430). |

Tvungne moduser kortslutter **før** den automatiske heuristikken kjører; `auto` atferd
er byte-identisk med den pre-PR-1 beskyttelseslinjen.

#### API-nøkkel omfang (`visionBridgeKeyScope.ts`)

Når anroperens API-nøkkel begrenser `allowedConnections`, kvote-pooler
(`allowedQuotas`) eller modeller (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), velger broen kun
omdirigerings- og beskrivelsesmodeller som nøkkelen kan bruke, på forbindelser nøkkelen kan
bruke. Beskrivelsesoppringningen går da alltid gjennom OmniRoute selvsløyfen med
`x-omniroute-self-loop-key-id` headeren, slik at den mottakende chat-forespørselen
håndhever den nøkkelens tilkoblings- og modellpolitikk igjen. `enforceApiKeyPolicy()`
hedrer den headeren kun sammen med selvsløyfen bæreren, så den kan kun
innskrenke tilgangen, og en id som ikke løser seg blir avvist.

Hvis ingen visjonsmodell er tillatt for nøkkelen, trer beskrivelsesveien til side og
forespørselen går gjennom uendret, den samme feil-åpen atferden som en deaktivert
beskyttelseslinje (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Forespørsel uten en nøkkel, og nøkler uten disse begrensningene, oppfører seg nøyaktig som
før.

#### Oppgavebevisst beskrivelsesprompt (`modalityBridgeVisionTaskAware`)

Default **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) legger til
teksten fra **den siste brukermeldingen** (forkortet til 500 tegn) til basis
beskrivelsesprompten, og styrer beskrivelsen mot det brukeren faktisk spurte om
(codex-vision-proxy-mønsteret) og ber visjonsmodellen om å transkribere synlig
tekst. Med flagget av — eller ingen brukertekst — brukes basisprompten uendret.

Beskriv selv-løkkens egen OpenAI-kompatible forespørsel (`callVisionModelSingle()`
i `visionBridgeHelpers.ts`) ber alltid om `image_url.detail: "high"` —
ubetinget, for hver oppringer/leverandør, ikke avhengig av noe klientsignal.
Lavdetaljprøvetaking reduserer OCR-nøyaktigheten for akkurat den teksttranskripsjonsoppgaven denne prompten ber om, så beskrivelsesanropet ber alltid om høy
detalj uavhengig av hvilket detaljnivå den opprinnelige innkommende forespørselen
brukte. Dette påvirker kun den interne beskrivelsesforespørselens kropp; det endrer
ikke hvordan OmniRoute videresender oppringerens egen `image_url.detail` på den
primære forespørselen — den standarden brukes separat, og kun for oppdagede
OpenCode-klienter, i `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Den
Anthropic wire-format-grenen av beskrivelses selv-løkken har ingen `detail`-felt
og påvirkes ikke av noen standard.

#### Beskriv utdata begrensning (`modalityBridgeVisionMaxChars`)

| Nøkkel                         | Standard | Område              |
| ------------------------------ | -------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` eller 100–50000 |

`0` (standard) betyr **ingen begrensning** — beskrivelsen som returneres av
`callVisionModel()` sendes gjennom uendret, og bevarer den eksisterende
atferden. Enhver verdi i området 100–50000 forkorter beskrivelsen med en
`…` suffiks før den settes tilbake som `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` i `src/lib/guardrails/visionBridge.ts`).
Øk dette for detaljrike OCR-oppgaver der den nedstrøms modellen trenger den
fullstendige transkripsjonen; senk det for å begrense tokenbruk på pratsomme
visjonsmodeller. Dashbordfeltet finnes på Vision-fanen i Avansert panel
(`modality-bridge-max-chars` i `ModalityBridgeVisionTab.tsx`) og begrenser enhver
verdi mellom 1 og 99 opp til 100-gulvet, samtidig som en eksplisitt `0`
forblir urørt — `0` er en gyldig Zod-verdi i seg selv
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ikke bare
den "usatte" standarden.

#### Beskriv cache (`modalityBridge/bridgeCache.ts`)

Minnebasert LRU + TTL cache for beskrivelsesutdata, delt prosess-bredt.
Nøkkel = `sha256(imageRef + composedPrompt + configuredBridgeModel)` med
lengde-prefiks innramming (ingen felt-grensekollisjoner). Modellkomponenten er
den **konfigurerte** bro-modellen, ikke modellen som faktisk svarte —
`callVisionModel` kan falle tilbake internt, og nøkkeling per forsøk ville
fragmentere cachen. Mislykkede beskrivelser blir aldri cachet. Innstillinger:

| Nøkkel                          | Standard | Område  |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Fjerndokumentnormalisering (selv-løkke beskriv/base64 henting)

Når broen henter et **fjerndokument** selv — den Anthropic beskrivelsen
selv-anrop og claude-wire-format base64-konvertering
(`ensureBase64ImagesForClaudeWire`), begge via
`fetchRemoteImageAsDataUri()` i `visionBridgeHelpers.ts` — blir den resulterende
data-URI sendt gjennom `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) før den blir innebygd i forespørselen til
visjonsmodellen. Overdimensjonerte bilder blir nedskalert til en **2048px lang kant**
(som matcher nedskaleringsgrensen OpenAI/Anthropic allerede bruker server-side),
som reduserer opplastingsbyte/latens uten å endre hva visjonsmodellen ser. Nedskalering
bruker `sharp`, lastet inn via dynamisk import: på en plattform der dens
native binærfil ikke klarer å lastes inn, **kaster ikke** `normalizeDataUri()` —
den faller tilbake til en passthrough av de originale byte, så beskriv/base64-konverterings
veien fungerer alltid. Ikke-bilde byte (en henting som ikke returnerte et
dekodbart bilde) blir også sendt gjennom urørt. Denne normaliseringen er
begrenset til bilder broen henter for sitt eget selv-anrop — den blir aldri
brukt på oppringerens rå passthrough-payload, i samsvar med
opt-in-only mutasjonsprinsippet (Hard Rule #20).

#### Innstillingsskjema + migrasjon

De nye `modalityBridge*` nøklene blir Zod-validerte i `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trioen `modalityBridgeCache*`, og gruppen
`modalityBridgeAudio*` brukt av Audio Bridge. Migrasjon
`141_modality_bridge_settings.sql` kopierer eksisterende legacy
`visionBridge*` verdier til de matchende nye nøklene (idempotent, overskriver aldri
en operatør-innstilt `modalityBridge*` verdi); de legacy nøklene forblir akseptert som en
lesefallback i en utgivelsessyklus.

#### Transparensheader + statistikk

Beskrivelses-transformerte svar bærer
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(bygget av `buildModalityBridgeHeader()` i `modalityBridge/bridgeStats.ts`,
stemplet av `withModalityBridgeHeader()` i `src/sse/handlers/chatHelpers.ts`).
Omdirigerte forespørsel får **ingen** header — payloaden var urørt og modellbyttet
er allerede synlig i responsens `model`-felt.

`GET /api/modality-bridge/stats` (administrasjonsautentisering, samme nivå som
`GET /api/settings`) returnerer de in-memory per-modality tellerne
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` for `vision`, `audio`, og
`video`. `averageLatencyMs` bruker `latencySamples`, ikke alle forsøk, som sin
nevner; en operasjon uten timing lager ikke et null-millisekund
prøve. `bridged` forblir det bakoverkompatible aliaset for vellykkede
konverteringer; mislykkede forsøk øker ikke dette.
Tellerne tilbakestilles ved prosessrestart etter design
(telemetri, ikke regnskap).

#### Dashboard-konfigurasjon

Den dedikerte dashboard-siden er
`/dashboard/settings/modality-bridge`. Dens URL-adresserbare `Vision`, `Audio`,
og `Video` faner bevarer spørringsparametere mens de bytter `tab`-verdi.
Vision-fanen eksponerer aktivering, modus, modellvalg (inkludert den automatiske
standarden), oppgavebevisst prompting, avanserte tidsavbrudd/bilde/beskrivelse-lengde/cache
grenser, kjøretid
tellere, og en beskyttet prøveforespørsel. Audio-fanen er også aktiv: den eksponerer
aktivering, en STT-eksklusiv modellvelger med Auto, tidsavbrudd/maks-klipp grenser, lyd
tellere, og en `input_audio` prøve test. Video-fanen er funksjonell: den rapporterer
FFmpeg/ffprobe kjøretidstilstand — en av fire eksplisitte UI-tilstander (`unknown` mens
proben er i flyt eller ikke kunne fullføres, `restricted` på en ikke-loopback
dashboard-vert hvor proben blir hoppet over på klientsiden, `unavailable` når den er
probert og bekreftet manglende, eller `available` med FFmpeg/ffprobe versjoner) — vedvarer
aktiver/modell/ramme/video/tidsavbrudd grenser, filtrerer modellvelgeren til
vision-kapable modeller, og eksponerer videotellere.

Det tidligere Vision Bridge-kortet under AI-innstillinger er en
kompatibilitetslenke til den nye siden; det eier ikke lenger en annen kopi av skjemaet. Media Providers
lenker også Image-to-Text og Speech-to-Text arbeidsflyter til de tilsvarende Modality
Bridge-fanene uten å fjerne den eksisterende Speech-to-Text lekeplassen.

**Selvsløyfe adgangsbypass:** når describe-anropet ruter gjennom OmniRoute sin
egen `/v1` selvsløyfe (ikke-standard leverandørmodell), sender
sub-forespørselen `x-omniroute-admission-bypass: internal` og blir autentisert med den
løste selvsløyfe-legitimasjonen — den lokale `sk_omniroute` sentinel i lokal modus, eller den
operatørkonfigurerte `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` miljønøkkelen (#1350) slik at
`REQUIRE_API_KEY=true` distribusjoner fortsatt kan kjøre describe-anropet. Bypasset
blir kun anerkjent for de eksakte legitimasjonene, så eksterne klienter kan ikke bruke
overskriften for å hoppe over adgang.

Legacy standarder finnes i `src/shared/constants/visionBridgeDefaults.ts`; de
nye modus/oppgavebevisste/cache standardene og innstillingsløseren finnes i
`src/shared/constants/modalityBridgeDefaults.ts`. Beskyttelsen eksponerer en
`deps` konstruktørmulighet slik at tester kan injisere falske `getSettings` og
`callVisionModel` implementeringer.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Fanger opp lydbærende chat-forespørsel før de når et mål som ikke er
kjent for å akseptere lydinngang. Den omdirigerer aldri chat-forespørselen: lyddelene blir
transkribert gjennom den eksisterende OpenAI-kompatible multipart-endepunktet og den
valgte chat-modellen fortsetter med teksttranskripsjoner.

Flyt:

1. Løs `supportsAudio` gjennom `getResolvedModelCapabilities()`. Eksplisitt
   leverandør-registermetadata vinner, deretter statisk modellmetadata, deretter synkronisert
   `modalities_input`. En erklært input-liste uten `audio` er `false`; ingen
   kapabilitetsbevis forblir `null`. Både `false` og `null` aktiverer den
   konservative broen, mens `true` omgår den.
2. Løs `modalityBridgeAudio*` innstillinger og trekk ut spliceable toppnivå
   lyd-deler fra hver melding gjennom den delte `detectMediaParts()`
   detektoren. Støttede ledningsformer er OpenAI `input_audio`, `audio_url`, og
   `source.media_type: "audio/*"`. Nestet lyd blir oppdaget for ruting, men ikke
   fjernet av splice-stien. Arbeidet er begrenset av `modalityBridgeAudioMaxClips`;
   senere deler forblir urørt.
3. Respekter en konfigurert `provider/model`, eller la `selectAudioBridgeModel()` gå
   gjennom `AUDIO_TRANSCRIPTION_PROVIDERS` i stabil katalogrekkefølge og velge den første
   modellen med en brukbar aktiv leverandørlegitimasjon.
4. `callAudioTranscription()` konverterer base64/data-URI lyd til en multipart
   `file`, eller laster ned en ekstern `audio_url` gjennom den offentlig-tilgjengelige utgående
   beskyttelsen med DNS-pinning og en 25 MB grense. Den POST-er deretter filen og den valgte
   modellen til den lokale `/v1/audio/transcriptions` selvsløyfen, autentisert med
   `resolveSelfLoopBearer()`. Den eksisterende transkripsjonsruten utfører normal
   legitimasjonssøk, nedkjøling/rate-limit håndtering, og leverandørdistribusjon.
5. Vellykkede anrop erstatter delene sine med `[Audio N]: <transcript>`. Anrop
   kjøres med `Promise.allSettled`: en individuell feil bevarer den originale
   lyddelen (#4012 kontrakt). Hvis hvert anrop mislykkes og målet er bevist
   `supportsAudio === false`, blir delene
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 kontrakt). For
   et ukjent mål (`null`), forblir et resultat med alle feil urørt. Et bevist
   tekst-eksklusivt mål uten brukbar STT-legitimasjon mottar den samme eksplisitte
   stubben uten å utstede et nettverksanrop.

Vellykkede transkripsjoner bruker den prosess-brede Modality Bridge LRU/TTL-cachen. Nøkkelen
kombinerer lydreferansen, den stabile `audio-transcription` operasjonsetiketten,
og valgt STT-modell; feil blir aldri cachet. Lydforsøk oppdaterer de delte
`bridged`, `cacheHits`, `failures`, og `lastUsedAt` tellerne.
Transformerte svar bærer
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; urørte
forespørsel mottar ikke et Audio Bridge-segment.

Kjøretidsinnstillinger er DB-backet og Zod-validert:

| Nøkkel                        | Standard | Område            |
| ----------------------------- | -------- | ----------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                 |
| `modalityBridgeAudioModel`    | `""`     | Auto eller STT ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000       |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10              |

Den delte cachen forblir kontrollert av `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, og `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Fanger toppnivå videodeler i Chat Completions `messages` og Responses
API `input` før et mål uten kjent innebygd videostøtte blir kalt.
Støttede former er `input_video`, `video_url`, `video_source`, HTTPS-URL-er,
og `data:video/*;base64,...` data-URI-er. Vanlige filnavn i tekst behandles ikke
som video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) eier forespørselstrafikk,
kapabilitet/policy-sjekk, per-forespørsel aggregasjon, og responspayload.
Per-video arbeid — anskaffelse, hele resultatcachen, beskrivelse av en rammesekvens
(som fusjonerer enhver caller-deklarert lydtranskripsjon), og per-forsøk
metrikker/abort/rengjøring — er skjult bak `processVideoPart` i
`videoBridgePipeline.ts`, kalt én gang per videodel inne i `preCall`-sløyfen.
Det modulen definerer også de eksplisitte portgrensene `VideoMediaBrokerPort`
(anskaffelse av bytes og utvinning av prøvede rammer), `VideoAudioTranscriptionPort`
(fusjonering av en caller-deklarert lydtranskripsjon med de prøvede bildetekstene), og
`VideoDrilldownPort` (den eldre rå-lagerformen). Produksjon STT og rammeretensjon
er sammensatt rundt den beskrivende porten gjennom `createVideoSttAdapter` og
`createVideoDrilldownAdapter`; sistnevnte bruker den delte opaque-handle livssyklusen.

Den offentlige `/v1` forespørselstien importerer eller påkaller aldri en
underdel. Fjerne videoer lastes ned under en grense på 50 MiB; inline base64 videoer har en
konservativ grense på 36 MiB dekodet per-video slik at modellen/meldingene/innpakningen
kan forbli innenfor den offentlige JSON forespørselens opptaksgrense på 50 MiB. Inline
lengde og dekodet-størrelse estimater sjekkes før tildeling. HTTPS er
påkrevd på den første eksterne URL-en og hver omdirigering, ved å bruke den eksisterende
offentlige utgående beskyttelsen med DNS-pinning. Bytes krysser deretter den nøyaktige interne
`POST /api/modality-bridge/video/extract` meglergrensen. Den ruten er både
`LOCAL_ONLY` og `SPAWN_CAPABLE`, aksepterer kun en per-prosess autentisert,
betrodd loopback forespørsel, og aksepterer aldri en URL, filsystembane, kjørbar,
eller argumentliste. API kroppsstørrelse-pipelinen og håndtererens inkrementelle kropp
leser håndhever uavhengig en 50 MiB megler inngangsgrense. Dens begrensede kø kjører
én utvinning om gangen, tillater fire ventende jobber, og begrenser ventende inngang til
100 MiB.

Inne i megleren leser `ffprobe` en privat lokal fil; den faste format
tillatelsen ekskluderer spilleliste- og manifestformater. For tillatte MOV-familie
containere forblir eksterne MOV-datareferanser deaktivert som standard, og den
faste kommandoen velger dem ikke. Både `ffprobe` og `ffmpeg` bruker
`file`-kun protokoll hvitelisten, én tråd, faste argumentarrayer, ingen shell,
og kjørbare som er løst fra `PATH`. Vedlagte bildecoverstrømmer er ikke
spillbare kandidater. Alle spillbare strømmer må tilfredsstille grensene, og en
eksplisitt standardstrøm foretrekkes før den deterministiske laveste indeksen
fallback. Videoer er begrenset til 600 sekunder, 8,192 piksler per dimensjon, og
33,554,432 kildepiksler. FFmpeg prøver 1–16 midtpunkt JPEG-rammer, skalerer ned
den lange kanten til maksimalt 1,024 piksler uten å oppskalere mindre innganger, og
mottar aldri en URL. Sampling er `uniform` som standard. De valgfrie
`scene_aware` og eksperimentelle `segment_aware` policyene utfører ett ekstra
fast FFmpeg-pass over den allerede validerte lokale strømmen, velger begrensede
`showinfo` scene tidsstempler, og faller deterministisk tilbake til de samme
uniforme midtpunktene ved detektorfailure, tidsavbrudd, feilformatert utdata, eller et tomt
kandidatssett. Segment-aware-modus allokerer midtpunktprøver proporsjonalt til
de validerte sceneintervallene; segment-aware bevis og fallback-atferd er
detaljert nedenfor. Den harde 16-rammegrensen er
applisert etter valg i hver policy. Når en scene-aware forespørsel har bare et
én-ramme budsjett, bruker den det uniforme midtpunktet av den aktive full-video eller fokus
vinduet og rapporterer `policyEffective: uniform`: en enkelt valgt scene ramme
kan ikke bevare begge temporale ender. En caller kan valgfritt gi et
begrenset fokusvindu (`start`/`end` sekunder); grensene er begrenset til medie
varighet, omvendte eller ikke-finite vinduer blir avvist, og alle sampling
policyer utføres kun innenfor det normaliserte intervallet. Det resulterende
vinduet inkluderes i sampling metadata og i den ikke-betrodd beskrivelsen
prefikset slik at nedstrømsmodeller kan skille et fokusert utdrag fra hele
tidslinjen.

Semantisk bildetekstfokus er en separat, eksplisitt innstilling. Den
standard `full` analysemodusen bevarer den eksisterende rammeprompten og sender aldri
forespørselstekst til bildetekstmodellen. I `focused` modus, leser broen kun den
nyeste ikke-tomme brukerforfattede `text`/`input_text` fra den samme Chat eller Responses
beholderen, normaliserer den til NFC, kollapser kontrolltegn og mellomrom,
og begrenser den til 500 Unicode kodepunkter. Et tomt resultat faller tilbake til den
eksakte `full` prompten. Et brukbart hint er serialisert som JSON i en dedikert
ikke-betrodd-bruker-kontekst blokk og kan kun prioritere observerbare detaljer; det
kan ikke overstyre den separate advarselen mot å følge instruksjoner synlige
eller hørbare i mediet. Tekstlig fokus infererer aldri `start`/`end` eller endrer
den temporale sampler.

#### FU-07 strukturell segmentbevis

`segment_aware` bruker en begrenset pre-analysepass over den allerede validerte lokale videostrømmen. Den faste filterkjeden skalerer først til maksimalt 320 piksler bred, oppdager sceneskift og fryste intervaller, og sampler deretter med 1 bilde per sekund for uskarphet, gjennomsnittlig luma og romlig/temporal informasjon. Passet er begrenset til 600 strukturelle prøver, én FFmpeg/filter-tråd, den samme `file`-bare protokollen og container tillatelser, en 1 MiB prosess-utdata grense, og maksimalt 30 sekunder inne i meglerens delte abort/frister. Den aksepterer aldri en kommando, filter, sti eller URL fra forespørselen.

De strukturelle verdiene er deterministiske prøver, ikke semantisk videoforståelse. De infererer ikke emner, handlinger, bildetekster, tale eller brukerintensjoner. Scene- og frysegrenser danner segmenter; fryse dekning, uskarphet, eksponering, romlig detalj og temporale endringer påvirker kun hvordan det eksisterende 1–16 bilde budsjettet fordeles. Et helt fryst segment er begrenset til ett bilde, mens ikke-fryste segmenter konkurrerer om det gjenværende budsjettet. Når grenser overstiger bilder, beholdes jevn tidslinje dekning slik at raske tidlige kutt ikke kan skjule et langt etterfølgende segment. Scenegrenser innenfor 1-sekunders analyseoppløsning av en frysegrense blir sammenslått.

Manglende filtre, feilaktige/tomme bevis, en detektorfeil, eller den begrensede pre-analyse tidsavbruddet feiler åpen til den eksakte jevne midtpunktpolitikken. En avbrytelse fra kaller eller meglerens frist feiler ikke åpen: den avslutter den pågående delprosessen, forhindrer senere bildeutvinning, og det private midlertidige treet blir fjernet i `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genererer deterministiske ekte FFmpeg-fikser for post-dedup bildetekstbesparelser, tett bevegelsesbudsjettfordeling, uskarphet/eksponering/SI-TI bevis, raske kutt med en lang hale, og gradvis-fade falske positiver. Den registrerer pre-analyse veggtid og, der `/usr/bin/time` er tilgjengelig, barne-CPU og topp RSS. Dens kvalitetskontroller er kun strukturelle orakler. Ekte bildetekst-modellkvalitet forblir `HOLD` fordi dette systemet ikke har noe autorisert endepunkt eller fryst dommer. Monetære besparelser forblir også `HOLD` med mindre `--caption-cost-per-call-usd` gir et eksplisitt positivt estimat per kall; skriptet fabrikkerer aldri noe resultat.

Hvert bilde er begrenset til 4 MiB, alle rå bilder sammen til 23 MiB, og den serialiserte meglerresponsen til 32 MiB. Et privat midlertidig katalog blir fjernet i `finally`. OmniRoute pakker ikke FFmpeg og aksepterer ikke en tilpasset kjørbar sti. Før bildeteksting, anvender broen en konservativ visuell dedupliseringspass: hvert JPEG reduseres til en 16×16 gråtonet buffer og sammenlignes kun med det siste bevarte bildet. For et forespurt bildetekstbudsjett over ett bilde, leverer utvinning et begrenset kandidatbasseng på opptil dobbelt så stort budsjett og aldri mer enn 16 bilder. Den forespurte grensen anvendes kun etter deduplisering, med de første og siste valgte kandidatene bevart under den endelige tynningen når budsjettet er minst to. Den versjonerte `grayscale-16x16-mean-cells-v2` politikken bruker den større av gjennomsnittlig luma delta og forholdet av miniatyrbilder hvis normaliserte delta er minst 0.05. Duplikatterskelen er den konstante 0.04, valgt for forutsigbarhet snarere enn eksponert som en kjøretidsinnstilling. Dette sekundære høy-kontrast signalet bevarer små bevegelser og synlige tekstendringer som en gjennomsnittlig sammenligning kan skjule. Sammenlignings- eller dekoderfeil feiler åpen og opprettholder dekning. Utdata metadata skiller utvunnede kandidater, vellykkede brukte bilder, og visuelle duplikater som er droppet.

En eksplisitt merket videodel kan be om et tidsstemplet kontaktark. Broen bygger maksimalt et 4-kolonne, 16-bilde JPEG rutenett. Hver 512-piksel celle brenner sin kilde tidsstempel inn i en høy-kontrast bunnstripe, mens de samme tidsstemplene forblir i tekstlig metadata for nedstrøms tilknytning og revisjon. Det komplette JPEG forblir begrenset til 32 MiB. Hvis `sharp` ikke kan dekode eller komponere rutenettet, faller broen tilbake til de individuelle JPEG-bildene; en klientabort sprer seg fortsatt gjennom arkoperasjonen.

Promosjonsbevis er bevisst adskilt fra den syntetiske komposisjons mikrobenchmarken. `scripts/perf/video-bridge-contact-sheet-eval.ts` definerer en skjema-versjonert A/B-harness for ekte OpenAI-kompatible visjonsmodeller. Den måler leverandør-rapporterede tokens, end-to-end veggtid (inkludert arkkomposisjon), modell-kall antall, og manifest-definerte faktabeholdninger. Rå modellresponsene skrives ikke til rapporten; kun SHA-256 digest og matchede fakt-IDer beholdes. Harnessen gjør ingen nettverks- eller betalte modellkall med mindre `--execute-real` er sendt og `--model`, `OMNIROUTE_BASE_URL`, og `OMNIROUTE_API_KEY` er konfigurert. Uten det eksplisitte ekte kjøringen, forblir dens maskinlesbare dom `HOLD`; syntetiske nyttelast/kall-antall målinger alene er ikke promosjonsbevis.

Den separate `scripts/perf/video-bridge-promotion-eval.ts` konsumerer FU-07 eller FU-09 observasjoner. Promosjonsopptak krever alle åtte syntetiske scenarioslag pluss en sanitert ekte klipp, minst tre målte repetisjoner per rolle og tilfelle, alle ti erklærte metrikker, fryst media/prompt/forventet-fakt/innstillinger digest, unike observasjons-IDer og verifisert seedet A/B-rekkefølge. Utførelseskvitteringen binder korpus digest, nøyaktig kandidat SHA og modellrevisjon. Manglende eller ugyldige målinger forblir `HOLD`, inkludert CPU over 30 s, topp RSS over 512 MiB eller pre-analyse over 30 s. Dette er bevis-opptaksgrenser, ikke en ny kjøretids RSS håndhevelsesgaranti.

FU-07 krever minst 98% kvalitetsbevaring og p95 latens ikke mer enn 1,2x
baseline, pluss enten en 0,05 absolutt case-balanced gjennomsnittlig tilbakekalling forbedring ved
tilsvarende gjennomsnittlige bildetekst-anrop, eller minst 10% færre gjennomsnittlige post-dedup bildetekst-anrop. FU-09 krever minst 0,85 kvalitet, 95% bevaring, 20% p95 latens
reduksjon og 10% token reduksjon. Kritisk faktatap, injeksjonskompatibilitet eller
manglende bruk hindrer opprykk. En utførelse kan ikke promotere noe:
`--previous-report` bekrefter to distinkte, ikke-overlappende, konsekutive
berettigede utførelser av samme policy/modell revisjon/kandidat/korpus. En
samplingeksperiment kan ikke bekrefte et kontaktarkeksperiment.

Samlerne bør vurdere svar i minnet og lagre `responseDigest` pluss
metrikker og observasjonsbindinger, aldri svartekst. Forbrukeren leser også
legacy råobservasjoner, men kopierer aldri den teksten inn i sine rapporter. Nøyaktig
ett av `responseDigest` eller `rawResponseText` aksepteres for hver observasjon.
Den versjonerte tillatelseslisten forblir tom med en uforanderlig `hold` standard. En
berettiget oppføring krever sin bevisreferanse, policy, modellrevisjon, nøyaktig
kandidat SHA, manifestdigest og to distinkte kjøre-ID-er; konfliktende kontekster
blir avvist. Disse metadataene er en revisjonskontrakt, ikke bevis på at en referert
fil inneholder ekte målinger. Gå gjennom de faktiske kvitteringene før du legger til
noen oppføring. Statistikkendepunktet for administrasjon og Video-dashboardet eksponerer konservativ
beredskap. En konfigurert modellalias alene etablerer ikke dens revisjon eller
den kjørende kandidat SHA, så det nåværende dashbordet rapporterer `HOLD` i stedet for
å gjenbruke berettigelse fra en annen utførelseskontekst. Eksplisitt eksperimentell
valg forblir adskilt fra opprykk; ingen standard endres automatisk.

Kallere kan legge ved et valgfritt `transcript.cues` array til en støttet videodel når de allerede har
justert tekst. Hver cue må inneholde `text`, et
begrenset `start`/`end` intervall innenfor den undersøkte varigheten, og en hvitelistet
`source` (`client`, `embedded`, eller `audio-bridge`); `confidence` er som standard
`1` og må forbli mellom `0` og `1`. Eksakte duplikat-cues blir slått sammen.
OmniRoute starter aldri transkripsjon fra disse metadataene: validerte cues blir
kopiert inn i det beskrevne resultatet med kilde, tillit og intervall, og
blir gjengitt som ikke-betrodd observasjoner sammen med rammebildetekstene. Ugyldig,
utenfor rekkevidde, eller provenance-fri tekst blir avvist i stedet for å blandes inn i
bildetekststrømmen. Begge forespørsel-kroppens transkripsjonskanaler normaliserer levert
proveniens til `client`, inkludert selv-assertive `embedded` eller `audio-bridge`
etiketter. Bare en server-eid adapter kan tildele disse betrodde etikettene gjennom
den kodebare `trustedSource` argumentet; et forespørsel JSON-felt kan ikke nå
det argumentet. Transkripttekst forblir ikke-betrodd medieavledet innhold,
uansett proveniens, og må aldri bestemme autorisasjon.

En avansert kallere kan gi en `audioTranscript` spor for den samme videoen;
det behandles som klient-levert tekst, ikke bevis på servertranskripsjon.
Fusjonsfugen kjører visuelle og lydobservasjoner under
ett frist og abortsignal, bestiller dem på en felles tidslinje, slår sammen
eksakte duplikater, og rapporterer et delvis resultat når bare en side lykkes.
En ugyldig `audioTranscript` degraderes til det delvise resultatet — den visuelle
beskrivelsen beholdes og lydgrenen registrerer en sanert feilkode —
i stedet for å feile hele videoen. Per-gren tilgjengelighet, den delvise flagget,
og de sanerte feilkodene bevares i det beskrevne resultatet, i
beskyttelsesmetadataene (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), i resultat-cache metadataene, og i brofusjons tellerne. Den
standard Video Bridge-stien påkaller ikke tale-til-tekst
eller laster ned en annen mediekopi; uten det eksplisitte sporet forblir det
video-only.

**Transkriptbevaring (#12150 P1).** Dette gjelder automatisk når som helst
Video Bridge (selv opt-in) gjengir en transkript cue — det er ingen separat
bevaringsflagg. Når en forespørsel gjengir en hvilken som helst transkript cue (et kall-deklarert
`transcript` eller en fusjonert `audioTranscript`), markerer beskyttelsen den
`videoBridgeObserved` og produserer en redigert skygge av videobeskrivelsen —
en identisk gjengivelse der hver cues fritekst-kropp er erstattet med
`[redacted-video-transcript]`, bygget ved å erstatte det strukturerte cue-feltet
før strengen settes sammen (aldri ved å analysere den flate teksten, så ingen cue
innhold — fiendtlige eller ordinære, inkludert kropper som inneholder `]` som
`[inaudible]`/`[music]` — kan overleve). Den vedvarende kall-logg forespørsel kroppen bytter
hver video-avledet tekstdel med den redigerte skyggen, matchet etter innhold
likhet; `fullText` ankeret leses på nytt fra den ferdige pre-kall beskyttelses
payloaden, så matchet fortsatt lykkes etter senere kjede beskyttelser (de PII og
legitimasjonsmaskerne, prioriteringer 10/95) omskriver beskrivelsesteksten på stedet og
etter system-prompt/overføring/minneinjeksjon omformer meldingsarrayet. Kroppen sendt oppstrøms til modellen er uendret. En observert forespørsel fyller også
ingen varig Minne (både forespørsel- og svar-avledet ekstraksjon blir hoppet over),
så modellens eget svar kan ikke gjenspeile transkripttekst inn i Minne.

**Rå videofelt (#12430).** Når broen er aktivert og innebygd videostøtte er ukjent eller fraværende, aktiverer definerte `transcript`/`audioTranscript` felt også `videoBridgeObserved`, selv etter beskrivelsesfeil eller en `maxVideos` grense. `null` og tomme strenger teller; fraværende felt og ikke-video metadata gjør det ikke. Beholdte kopier redigerer disse feltene eller utelater forespørselen, og cacher/Minne blir omgått. Leverandørpayloaden forblir uendret.

Ytterligere beholdte kopier bruker det samme observerte forespørselssignalet. Det rå pre-guardrail klientforespørselssnapshottet, den ventende forespørselen i minnet, og den tidlige loggen for avviste forespørsel er strukturelt erstatninger for transkriptfelt i videodeler; tekstprompter syntetisert av pipeline-faser og konteksthåndtering blir redigert ved den vedvarende forespørsel-kroppsenken. Den vedvarende `video_content_removed` markøren får `previous_response_id` fortsettelse til å feile lukket i stedet for å rekonstruere tekst som bevisst ble forkastet. Hvis en observert forespørsel mister sin per-del redaksjonsskygge før logging, eller selv om en av flere videoskygger ikke matcher etter senere forespørselmutasjoner, blir den beholdte forespørsel-kroppen utelatt helt i stedet for å beholde et delvis redigert transkript.

For en observert forespørsel kan et modellrespons sitere hvilken som helst del av transkriptet uten en strukturert cue-grense. Den vedvarende kall-loggen `responseBody` blir derfor erstattet med en utelatelsesmarkør; det detaljerte pipeline-artifaktet (som kan inkludere upstream/klientkropper og strømchunker) blir ikke beholdt. Semantiske, idempotens- og resonnement-replay cacher omgår lesinger og skrivinger for den forespørselen. Leverandørforespørselen og klient-synlige responsen forblir uendret. Tidlige keepalive-bytes blir drenert fra den midlertidige bufferen når det detaljerte artifaktet utelates. Kiros feilaktige EventStream-advarsel rapporterer kun antall byte i nyttelasten, aldri innholdet eller JSON-parserens råfeil. Dette påstår ikke at hver urelatert leverandør/plugin-diagnose har blitt revidert; den bredere beholdte-sink feiingen er sporet i #11658.

Den interne `/api/modality-bridge/video/drilldown` livssyklusen er et separat, loopback/token-autentisert cache-substrat. Hver operasjon krever også en kanonisk opak prinsipal-ID. Før en produksjonskaller aktiveres, må den utlede den ID-en fra den autentiserte leietakeren og må aldri videresende en klient-valgt verdi. Cache-nøkler binder den prinsipal til kanoniske sesjons- og video-referanse-ID-er, lagrer kun deres SHA-256-avledede nøkler, og avgrenser både lesinger og sletting til den samme prinsipal. Cachen lagrer maksimalt 16 avledede JPEG-rammer per oppføring, utløper dem etter ti minutter, og støtter begrensede `start`/`end` lesinger eller eksplisitt sesjonssletting.

Hver prinsipal er begrenset til 16 oppføringer og 64 MiB av kanoniske JPEG-data. Disse begrensningene er uavhengige av det globale 64-oppførings/256 MiB taket: prinsipal kvote press evakuerer kun den prinsipalens minst nylig brukte oppføringer før global LRU evakuering vurderes. Utløpte oppføringer feies fra både prinsipal og global regnskap ved cache-aktivitet, mens kansellering og valideringsfeil ikke forplikter en delvis erstatning.

Cachen avviser ikke-kanonisk Base64, overskuddspadding, ikke-JPEG media, feilaktige eller avkuttede JPEG-er, og JPEG-er som gir en advarsel under en begrenset full-bilde `sharp` dekoding. Den re-enkoder hvert akseptert bilde som en kanonisk JPEG, utleder bredde og høyde fra de dekodede byte i stedet for å stole på kallerfelt, og kaster eventuelle etterfølgende polyglot byte i stedet for å beholde dem. Bare den begrensede kanoniske komprimerte bufferen belastes til begge kvotene. JSON-wiregrensen inkluderer Base64-overhead for 32 MiB dekodet-inngangs taket. Hver lagret avledning registrerer sitt validerte JPEG-format/oppløsning, sampling-policy, avledningsversjon, opprettelsestid, server-beregnet innholdshash, og hashet foreldreferanse pluss den betrodde kallerens foreldres innholdshash. Kansellering sjekkes mellom asynkrone dekode/hash-faser før den atomiske cache-forpliktelsen.

Produksjonsprodusenten gjenbruker allerede-avledede megler-rammer kun etter vellykket visuell analyse, uten annen video nedlasting/ekstraksjon. Den krever operatør `modalityBridgeVideoDrilldownEnabled=true`, streng per-del `drilldown: true`, og en autentisert API-nøkkel registrerings-ID. Klient-erklærte prinsipal/sesjonsverdier etablerer aldri eierskap. Uten alle tre betingelsene hasher, endrer størrelse eller beholder den ikke ekstra rammer. Beholdningsfeil bevarer den brukbare visuelle responsen. Samtykkede forespørsel omgår hele-video resultat cachen slik at cachede resultater aldri gjentar håndtak.

Vellykkede JSON- og SSE-responser eksponerer maksimalt fire opake håndtak i den begrensede `x-omniroute-video-drilldown` headeren. Autoriserte nettleseropprinnelser kan lese den headeren uten å utvide CORS opprinnelsespolitikken. Nye håndtak bruker `v1.<32-byte random base64url token>`, og registeret beholder kun deres SHA-256 hasher. Leser/header-parseren aksepterer også eldre 64-heks tokens. Den autentiserte offentlige forbrukeren er `GET /api/v1/video-bridge/drilldown?handle=...`, uavhengig gated av `modalityBridgeVideoDrilldownRemoteEnabled=true`. Eksplisitt vedvarende falsk tilbakekaller tilgang selv når den eldre `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env fallback er aktivert. Produksjonsbeholdning har den analoge eldre `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Begge fallbackene er som standard av.

Forbrukeren utleder eierskap fra den autentiserte nøkkelen, anvender nøkkelpoli, og returnerer den samme 404 for ukjente, utløpte og andre nøkkers håndtak. Den aksepterer `variant=preview|standard|detail` (maksimal JPEG-dimensjon 320/640/1280, aldri oppskalert), `limit=1..8` (eller den eldre `frames` alias, aldri begge), null-basert `page`, og valgfrie `start`/`end` fokus sekunder. Dupliserte forespørsel nøkler og omvendte fokusvinduer blir avvist. Hver returnert variant har en hash av sitt faktiske innhold og faktisk oppløsning metadata, knyttet til den beholdte kilden. Varianter blir avledet ved lesing i stedet for lagret som ekstra beholdte kopier. JSON-responsen, inkludert Base64/konvolutt, er begrenset til 32 MiB; en overdimensjonert side returnerer 413 og klienten må be om færre rammer. Lesinger sjekker kansellering rundt hver størrelseendring og sjekker håndtak gyldighet før de returnerer. `DELETE` av eier er idempotent; sletting eller TTL-utløp frigjør den beholdte kilden og bruksregnskapet.

Den delte butikken er prosess-lokal: håndteringer utløper ved omstart og kan ikke overføres mellom uavhengige OmniRoute-prosesser. Administrasjonsstatistikkene viser effektiv oppbevarings-/fjernpolitikk og aggregerte beholdte oppføringer/byte, aldri media, referanser, hoved-ID-er eller håndteringer. Videoinnstillingspanelet viser disse verdiene og kan bevare begge samtykkebrytere. Denne implementeringsdokumentasjonen er ikke bevis på live distribusjon eller promotering; aksept av reelle modeller spores separat.

Rammer blir tekstet sekvensielt med den konfigurerte videomodellen. En tom videomulighet arver visjonsinnstillingen; hvis begge er tomme, velger visjonsauto-ruteren den effektive visjonskapable modellen. Vellykkede bildetekster erstatter den originale delen med et stabilt `[Video description:` prefiks som også markerer teksten som en ikke-betrodd medieavledet observasjon og forteller nedstrømsmodeller at de ikke skal følge instruksjoner funnet i mediet. Ramme-tekstcache-nøkler inkluderer JPEG-byte, prompt, tidsstempel og effektiv modell; kun vellykkede bildetekster blir cachet. Cacheoppføringer beholder den faktiske vellykkede produsentmodellen, inkludert en fallback-modell; broen rapporterer `mixed` når forskjellige rammer er produsert av forskjellige modeller. Et cachetreff gjenbruker den produsentidentiteten i stedet for å ommerke den som den forespurte rutingsplanen. Hele videoresultatet cachet er nøkkelen på hver input som endrer output — prompt, effektiv modell, samplingpolitikk, rammetall, semantisk analysemodus, SHA-256 fingeravtrykk av den normaliserte fokusledetråden, fokusvindu, `transcript`, `audioTranscript`, og kontaktarkflagget — så endring av noen av disse dimensjonene er et cache-miss, aldri en foreldet gjenbruk. Den visuelle dedup-policyversjonen, terskelen og begrenset kandidat-rammetall er også eksplisitte i resultat-cache-nøkkelen og metadataene; en policyendring kan derfor ikke gjenbruke en foreldet helvideo-beskrivelse. Resultat-cache v4 metadata beholder modus og fingeravtrykk, aldri den rå brukeroppgaven. Guardrail-metadata rapporterer både de forespurte og effektive analysemodusene; en forespurt `focused` modus uten brukbar brukertekst rapporteres som effektivt `full`.

Guardrail trekker ut hver støttet videodel, men beskriver ikke mer enn `modalityBridgeVideoMaxVideos`. For et mål som er bevist å ha `supportsVideo === false`, blir mislykkede og overgrensede videoer eksplisitte sikre tekstmarkører slik at ingen rå video overlever. Når kapabiliteten er ukjent, forblir de delene urørt. Mål med `supportsVideo === true` omgår broen. Klientforespørselens abortsignal sprer seg gjennom nedlasting, meglerkø, underprosesser og bildetekst-anrop; aborter stopper mellom videoer og feiler aldri å åpne for rå media.

Kjøretidsinnstillinger er DB-backet og Zod-validert:

| Nøkkel                              | Standard    | Område / oppførsel                                                                                       |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Valgfri kjøretid, opt-in                                                                                 |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` bevarer generiske bildetekster; `focused` bruker begrenset, ikke-betrodd siste bruker-kontekst    |
| `modalityBridgeVideoModel`          | `""`        | Arver Visjonsbro-modellen                                                                                |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, eller proporsjonal `segment_aware`; detektorsvikt faller tilbake til `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                           |

Legacy vedvarende videotidsverdier over 120 sekunder blir begrenset til meglerens frist; nye innstillingsskriv over den grensen blir avvist. `GET /api/modality-bridge/video/runtime` krever betrodd stemplet loopback-lokasjon før autentisering eller kjøretidsprobing, deretter krever det administrasjonsautentisering. Det returnerer kun `available`, sanitiserte FFmpeg/ffprobe versjoner, og en fast grunn når kjøretiden ikke er tilgjengelig. Den interne ekstraksjonsendepunktet er ikke et offentlig opplastings-API: kømetning returnerer `503` pluss `Retry-After`, en frakobling av anroper returnerer `499`, og den faste meglerfristen returnerer `504`. Konverterte svar legger til `video->text;model=<visionModel>;parts=<videos>` til den sentrale `x-omniroute-modality-bridge` headeren uten å fjerne Visjon eller Lydsegmenter.

### PII Masker (`piiMasker.ts`)

Kjører på **begge** stadier.

- **`preCall`** kloner nyttelasten, går gjennom `system`, `messages`, `input`, og `prompt` (inkludert enkle strengeelementer), og anvender `processPII()` (fra `@/shared/utils/inputSanitizer`) på strenge `content`/`text` felt. Når `PII_REDACTION_ENABLED=true`, blir oppdaget PII redigert i den utgående nyttelasten. Dette er uavhengig av `INPUT_SANITIZER_MODE` (som kun kontrollerer prompt-injeksjonspolitikk). Når redigering er av, registrerer anropet deteksjonsantall uten å omskrive innholdet.
- **`postCall`** dypkloner svaret, kjører `sanitizePIIResponse()` pluss Responses-API-formmaskeren (`maskResponsesOutput` — dekker `output_text` og `output[].content[].text`). Hvis noen redigering skjer, erstatter det modifiserte svaret det originale.

Guardrail blokkerer aldri; det annoterer bare (`meta.detections`, `meta.redacted`) eller omskriver.

### Prompt Injection (`promptInjection.ts`)

Oppdager motstridende strukturer i brukerleverte innhold og håndhever den konfigurerte policyen. Atferden styres av miljøvariabler og konstruktøralternativer:

| Innstilling        | Miljøvariabel                                                                                             | Standard | Effekt                                                                                                                                                                                                  |
| ------------------ | --------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktivert           | `INPUT_SANITIZER_ENABLED`                                                                                 | `true`   | Når `false`, kortslutter beskyttelsen.                                                                                                                                                                  |
| Modus              | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                           | `warn`   | Injeksjonspolicy: `block`, `warn`, eller `log`. (`redact` aksepteres for bakoverkompatibilitet, men fjerner **ikke** injeksjonstekst; forespørsel om PII-omskriving styres av `PII_REDACTION_ENABLED`.) |
| Blokkeringsterskel | `blockThreshold` alternativ / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Minimum alvorlighetsgrad som kreves for å blokkere. Medium er kun observasjon som standard.                                                                                                             |

**Modusprioritet** (`getMode`): kaller `options.mode` →
`INJECTION_GUARD_MODE` **DB-funksjonsflagg overstyring** (Dashboard → Innstillinger →
Funksjonsflagg) → `INJECTION_GUARD_MODE` miljø → `INPUT_SANITIZER_MODE` miljø →
`warn`. En dashboard-overstyring vinner derfor over miljøvariablene, så Funksjonsflagg UI kontrollerer den kjørende beskyttelsen live (ingen omstart). DB-lesingen er feilbeskyttet:
hvis det oppstår en feil, faller beskyttelsen tilbake til atferd basert på miljø, og når ingen overstyring er satt, er atferden identisk med miljøbasert oppløsning.

Deteksjonskilder:

1. `sanitizeRequest()` fra `@/shared/utils/inputSanitizer` (delt detektor
   sett brukt andre steder i pipeline).
2. Innebygde `DEFAULT_GUARD_PATTERNS` (for øyeblikket `system_override_inline` og
   `markdown_system_block`, begge med `high` alvorlighetsgrad).
3. Valgfri `customPatterns` sendt via konstruktøralternativer (strenger, regex,
   eller `{ name, pattern, severity }` poster).

Når `mode === "block"` **og** minst én deteksjon møter alvorlighetsgrensen,
returnerer `preCall` `{ block: true, message: "Forespørsel avvist: mistenkelig innhold oppdaget" }`. I `warn`/`log` moduser logger beskyttelsen, men tillater anropet. Den delte hjelpen `evaluatePromptInjection()` eksporteres også
for kaller som trenger å evaluere prompts uten å gå gjennom registeret.

**Skanningsgrense (v3.8.20):** detektoren inspiserer kun de **første 16 KB** av
sammenslått prompttekst — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) i
`src/shared/utils/inputSanitizer.ts`. Både `detectInjection()` og
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` før de kjører
mønsterløkken. Injeksjonsdirektiver ligger nær toppen av et input, så dette
begrenser regex CPU/GC på multi-hundre-KB nyttelaster uten å svekke deteksjonen (jf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Kjører på **begge** stadier, sist i standardkjeden (prioritet `95`). Fjerner
kjente API-nøkkel / hemmelig-token mønstre fra utgående nyttelast (meldingsinnhold, verktøy-anropsargumenter, verktøyresultater) **og** leverandørresponsen, slik at en
legitimasjon limt inn i en prompt (eller gjengitt av et verktøyresultat) ikke lekker
til den oppstrøms leverandøren eller tilbake til klienten.

- **Opt-in kun**, samme konvensjon som PII-fjerning (Hard Rule #20-nærstående):
  deaktivert med mindre `settings.credentialRedactionEnabled === true` **eller**
  `CREDENTIAL_REDACTION_ENABLED=true`. Når det er av, er beskyttelsen en no-op —
  den blokkerer aldri og omskriver aldri.
- `redactCredentials()` går gjennom hele nyttelast/response-treet (`walkValue()`,
  prototype-forurensningssikker, syklus-sikker via `WeakSet`) og erstatter treff med
  en `[REDACTED:<type>]` plassholder, kloner kun de grenene som faktisk
  endret seg.
- `CREDENTIAL_PATTERNS` dekker LLM-leverandørnøkler (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS-tokens (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), betalingsnøkler (Stripe, Square), sky
  nøkler (AWS tilgangsnøkkel, Twilio, SendGrid, Mailgun), private nøkler / JWT-er,
  legitimasjonsbærende tilkoblingsstrenger (`mongodb://user:pass@...`, osv.), og
  et generisk `Authorization`/`x-api-key`/`api-key`/`apikey` header-verdi
  mønster. Header-formede nøkler (`authorization`, `x-api-key`, `api-key`,
  `apikey`) blir strukturert redigert (kun verdi, skjema-prefiks som
  `Bearer `/`Basic ` bevart) i stedet for via den generiske tekst regex.
- Beskyttelsen blokkerer aldri; den omskriver kun (`modifiedPayload` /
  `modifiedResponse`) og annoterer (`meta.credentialsRedacted`, `meta.count`).

Regresjonsbeskyttelse: `tests/unit/credential-masker-guardrail.test.ts`.

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
  block?: boolean; // true kortslutter kjeden
  message?: string; // vises ved blokkering
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returneres av preCall for å omskrive forespørselen
  modifiedResponse?: TValue; // returneres av postCall for å omskrive svaret
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

En sikkerhetsmekanisme signaliserer «ingen endring» ved å returnere enten `void`, `{}` eller
`{ block: false }`. Hvis en `modifiedPayload`/`modifiedResponse` returneres, erstattes
verdien som flyter gjennom kjeden for etterfølgende sikkerhetsmekanismer.
`signal?: AbortSignal` viderefører livssyklusen til den som kaller, inn i sikkerhetsmekanismene. Avbrudd av en forespørsel er det tilsiktede fail-open-unntaket: mediebroer stopper arbeidet og rydder opp uten å gjenopprette råmedier til et mål som man vet ikke støtter dem.

## Register (`registry.ts`)

Singleton-objektet `guardrailRegistry` eksponerer:

- `register(guardrail)` — legger til en sikkerhetsmekanisme (eller erstatter etter normalisert navn) og
  sorterer på nytt etter stigende `priority`.
- `clear()` / `list()` — administrative hjelpefunksjoner.
- `runPreCallHooks(payload, context)` — itererer gjennom aktive sikkerhetsmekanismer, fører
  nyttelasten videre gjennom `modifiedPayload` og stopper ved den første `block: true`.
- `runPostCallHooks(response, context)` — samme flyt på svarsiden.
- `resetGuardrailsForTests({ registerDefaults })` — tømmer tilstanden og registrerer eventuelt
  standardinnstillingene på nytt for ren testisolasjon.

Begge kjørerne returnerer `{ blocked, payload|response, results, guardrail?, message? }`,
der `results` er en matrise med `GuardrailExecutionResult`-oppføringer som inneholder
feltene `blocked`, `skipped`, `modified`, `error` og `meta` per sikkerhetsmekanisme,
noe som er nyttig for sporing.

### Deaktivere sikkerhetsmekanismer per forespørsel

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` samler en
duplikatfri liste over navn på sikkerhetsmekanismer som skal hoppes over for den gjeldende
forespørselen. Kilder (alle valgfrie, alle slås sammen):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` i forespørselskroppen (på toppnivå)
- `metadata.disabledGuardrails` i forespørselskroppen
- Headeren `x-omniroute-disabled-guardrails` (eller den eldre
  `x-disabled-guardrails`)

Verdier kan være matriser med strenger eller en kommaseparert streng. Navn
normaliseres til kebab-case med små bokstaver (`pii_masker` → `pii-masker`). Resultatet
sendes via `context.disabledGuardrails` til registeret, som hopper over
samsvarende sikkerhetsmekanismer (`skipped: true` i `results`).

## Utførelsesrekkefølge

For hver forespørsel som går gjennom `src/sse/handlers/chat.ts` og
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` bygger listen over elementer som skal hoppes over, basert på API-nøkkel, body
   og headere.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` kjører sikkerhetsmekanismene i stigende
   prioritetsrekkefølge:
   - Deaktiverte sikkerhetsmekanismer registreres som `skipped`.
   - Hver sikkerhetsmekanismes `preCall` kan skrive om payloaden via `modifiedPayload`.
   - Den første `block: true` avbryter kjeden, og handleren returnerer
     et avvisningssvar fra sikkerhetsmekanismen.
3. Den (potensielt omskrevne) payloaden går videre til kombinasjonsruting og oppstrøms
   videresending.
4. Etter at svaret er satt sammen, kjører `guardrailRegistry.runPostCallHooks(...)`
   den samme kjeden på svaret. `block: true` her forkaster det oppstrøms
   svaret.

Sikkerhetsmekanismer som utløser unntak, registreres med `error: <message>` og logges via
`logger.warn`, men kjeden fortsetter — fail-open med hensikt.

## Konfigurasjon

Miljøvariabler som leses av de innebygde sikkerhetsmekanismene:

| Variabel                              | Brukes av                | Effekt                                                                                                                |
| ------------------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Sett til `false` for å deaktivere deteksjon fullstendig.                                                              |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Retningslinje for injeksjon: `warn`, `block` eller `log`. Den eldre verdien `redact` skriver ikke om injeksjonstekst. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Modus for injeksjonsbeskyttelsen; også et funksjonsflagg i databasen som **overstyrer** miljøvariablene (DB > ENV).   |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | Laveste alvorlighetsgrad som `MODE=block` avviser: `high` (standard), `medium` eller `low`.                           |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | Eldre alias for `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                    |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | Når satt til `true`, blir PII i forespørselen sladdet (uavhengig av injeksjonsmodus).                                 |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nedstrøms) | Styrer maskeringsatferd på svarsiden.                                                                                 |

Sikkerhetsmekanismene i Modality Bridge leser kjøretidskonfigurasjon fra det databasebaserte innstillingslageret
(`getSettings()`), ikke fra miljøvariabler. De primære nøklene for Vision er
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` og
`modalityBridgeCacheMaxEntries`. De eldre
`visionBridge*`-nøklene godtas bare som den dokumenterte reservemekanismen for lesing i én syklus;
skriving fra kontrollpanelet bruker de primære nøklene. Standardverdier og fallback-resolveren
finnes i `src/shared/constants/modalityBridgeDefaults.ts`, mens eldre
konstanter beholdes i `src/shared/constants/visionBridgeDefaults.ts`.

Audio bruker `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` og `modalityBridgeAudioMaxClips`, i tillegg til de delte
`modalityBridgeCache*`-innstillingene. Audio har ingen fallback til eldre nøkler fordi disse
nøklene ble introdusert med Modality Bridge-skjemaet.

Video bruker `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` og
`modalityBridgeVideoTimeout`, i tillegg til de delte `modalityBridgeCache*`-innstillingene.
Den er deaktivert som standard fordi FFmpeg/ffprobe er valgfrie driftsavhengigheter,
og teksting av bilderammer øker latensen og modellkostnaden.

## Egendefinerte sikkerhetsmekanismer

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

Trinn:

1. Opprett `src/lib/guardrails/myGuardrail.ts` som utvider `BaseGuardrail`.
2. Implementer `preCall` og/eller `postCall`.
3. Registrer enten ved importtidspunktet (legg til fra `registerDefaultGuardrails`), eller
   kall `guardrailRegistry.register(...)` under kjøring — registeret erstatter
   eventuelle tidligere sikkerhetsmekanismer med samme normaliserte navn.
4. Legg til tester under `tests/unit/` (eksisterende eksempler:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testing

Bruk `resetGuardrailsForTests()` mellom testene for å starte fra en kjent tilstand.
Send `{ registerDefaults: false }` for å starte med et tomt register og
registrere bare sikkerhetsmekanismene som testes. Vision Bridge støtter avhengighets-
injeksjon (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge tilbyr
tilsvarende koblingspunkter for innstillinger, funksjonalitet, valg av STT-modell, kontroll
av legitimasjon og transkribering. Testene kan derfor kjøre begge flytene uten tilgang
til database eller nettverk.

## Se også

- `src/lib/guardrails/` — implementasjon
- `src/shared/utils/inputSanitizer.ts` — delt detektor som driver
  beskyttelse mot promptinjeksjon og maskering av personopplysninger
- `src/shared/constants/visionBridgeDefaults.ts` — standardinnstillinger for Vision Bridge og
  modelliste for tvungen brokobling
- `src/shared/constants/modalityBridgeDefaults.ts` — delte standardinnstillinger for kjøring av Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalt lag (automatsikring, nedkjølingsperioder)
- `docs/reference/ENVIRONMENT.md` — fullstendig referanse for miljøvariabler

## Rutedekning og red-team-testing for injeksjonsbeskyttelse (fase 8 · blokk D)

Injeksjonsbeskyttelsen (`createInjectionGuard` / `withInjectionGuard`) dekker alle ruter
som godtar brukerprompter. Den tar hensyn til `INJECTION_GUARD_MODE` (standardverdien `warn` = bare logging;
`block` = returnerer HTTP 400 `SECURITY_001`).

| Type                 | Ruter                                                                                                                                                | Standardmodus |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Tekst (eksisterende) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generativ            | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Data                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Tekstuttrekk (`extractMessageContents`) dekker `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (hver natt, `nightly-llm-security.yml`):** promptfoo validerer at hver rute blokkerer
OWASP-LLM-korpuset i `INJECTION_GUARD_MODE=block`; garak kjører sonder (hoppes over uten hemmelighet).
`moderations` er inkludert for konsistens — operatører i blokkeringsmodus kan unnta den via
`resolveDisabledGuardrails`.

Den nattlige arbeidsflyten (`.github/workflows/nightly-llm-security.yml`, cron + manuell
utløsning) har to jobber:

- **`promptfoo-guard` (blokkerende)** — kjører `promptfoo eval -c promptfooconfig.yaml`
  med `INJECTION_GUARD_MODE=block`. Hvert angrepstilfelle (f.eks. «ignorer alle
  tidligere instruksjoner …», jailbreaks i DAN-stil) kontrollerer at svaret inneholder
  `error.code === "SECURITY_001"`, dvs. at sikkerhetsmekanismen faktisk avviste forespørselen.
- **`garak` (rådgivende)** — kjører garak `--probes promptinject,dan,leakreplay`
  mot en lokal OmniRoute-instans (`http://localhost:20128/v1`). Avhenger av en
  leverandørhemmelighet (`PROMPTFOO_PROVIDER_KEY`); hoppes kontrollert over og har suffikset
  `|| true`, slik at den rapporterer uten at CI feiler.

Dekningen av hjelpefunksjonen for beskyttelse (`createInjectionGuard` / `withInjectionGuard`)
omfatter alle `/v1`-ruter som inneholder prompter; prompttekst hentes fra
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` av
`extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.
