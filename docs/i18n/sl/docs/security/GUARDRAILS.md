# Guardrails (Slovenščina)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Vir resnice:** `src/lib/guardrails/`
> **Nazadnje posodobljeno:** 2026-08-29 — v3.8.51 (izvor prepisa Video Bridge določi klicatelj,
> strežnik pa ga še ne preverja — pojasnjeno skladno z #11661)

Varovala uveljavljajo varnost, pravilnike in preoblikovanje vsebine na meji
med OmniRoute in ponudniki v zaledju. Vsako varovalo lahko pregleda (in
po želji zavrne, preoblikuje ali opremi z opombami) koristne vsebine zahtev (`preCall`) ter
odzive iz zaledja (`postCall`).

Sistem je zasnovan tako, da ob napaki **dovoli nadaljevanje**: če varovalo med izvajanjem sproži izjemo, register
zabeleži napako in nadaljuje z naslednjim varovalom, namesto da bi
zahteva spodletela. Blokiranje je izrecna odločitev (`block: true`), nikoli naključje.

## Vgrajeni varnostni mehanizmi

Registracija samodejno naloži šest varnostnih mehanizmov v prioritetnem vrstnem redu ob uvozu
(glej `registry.ts` → `registerDefaultGuardrails()`):

| Prioriteta | Ime                 | Faza(e)        | Datoteka              |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nižje številke prioritete se izvajajo **prvi**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Zajame zahteve, ki vsebujejo slike, namenjene **modelom brez vida**, in bodisi
preusmeri celotno zahtevo na model, ki podpira vid, bodisi nadomesti dele z
opisom slik, ki jih ustvari konfigurabilni vizualni model pred
zgornjim klicem. To omogoča, da ponudniki, ki podpirajo samo besedilo, brez težav obravnavajo
multimodalne vsebine.

Potek:

1. Preskoči, če ciljni model že podpira vid (razen če se pojavi na
   seznamu prisilnih mostov `isVisionBridgeForcedModel`).
2. Izvleči dele slik preko `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ki delegira na **enotnega medijskega
   detektorja** `detectMediaParts()` v `open-sse/utils/mediaParts.ts` —
   edini vir resnice, ki ga deli filter združljive združbe.
   Izvlečenje je dovoljeno le za vrhnje dele oblik,
   ki jih lahko `replaceImageParts` ponovno vstavi (pogodba o izvlečenju↔zamenjavi): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, in Responses API `input_image`. Vloženi zadetki in
   oblike, ki so samo indikatorji, so material za filter združbe in nikoli niso izvlečeni.
   Preskoči, če nič ni najdeno.
3. Razreši nastavitve izvajanja preko `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nove `modalityBridge*`
   nastavitvene ključe zmagajo; dediščni `visionBridge*` ključi ostanejo **enociklični
   povratni** (okno za povratno zanko). Preskoči pred kakršnimikoli medijskimi prehodi, ko je
   most onemogočen.
4. Izbirnik načina (`modalityBridgeVisionMode`, glej tabelo spodaj) odloča
   o preusmeritvi ali opisu. Preusmeritev vrne `modifiedPayload` z le zamenjanim `model`,
   plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Pot opisa: omeji slike na `maxImages`, sestavi nalogo, ki je ozaveščena o nalogi,
   posvetuj se s predpomnilnikom opisov, pokliči vizualni model **vzporedno**
   (`Promise.allSettled`), in injiciraj `[Image N]: <description>` besedilne dele na
   njihovo mesto. Neuspešen opis vrne `null` in izvirni del slike je
   **ohranjen** (#4012) — razen na poti združevanja opisov, ko je vsak
   opis neuspešen, kjer potrjen ne-vizualni zgornji del dobi
   `(unavailable — no vision-capable provider connected)` stub namesto (#8430).
6. Vrni `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Izbirnik načina (`modalityBridgeVisionMode`)

| Način      | Privzeto | Obnašanje                                                                                                                                                                                                                                                                                 |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Dediščna heuristika, nedotaknjena (#6640/#7204): modeli brez združbe/`auto/` preusmerijo na najboljši vizualni model, razen če ima izvirni model že uporabne poverilnice (potem opisuje); cilji združbe vedno opisujejo.                                                                  |
| `describe` |          | Vedno opisuj — blok preusmeritve se popolnoma preskoči; izbrani model uporabnika vedno odgovori.                                                                                                                                                                                          |
| `reroute`  |          | Prisilna preusmeritev: varnostni mehanizem za ohranjanje poverilnic modela se obide. Varnostni mehanizem za preusmeritev-**cilj** še vedno velja — ko ne obstaja uporaben vizualni cilj, zahteva preide na opis, tako da surove slike nikoli ne dosežejo samo besedilnega ozadja (#8430). |

Prisilni načini prekinjajo **pred** izvajanjem avtomatske heuristike; obnašanje `auto`
je byte-identično prejšnjemu varnostnemu mehanizmu PR-1.

#### Obseg API ključa (`visionBridgeKeyScope.ts`)

Ko API ključ klicatelja omejuje `allowedConnections`, bazene kvot
(`allowedQuotas`) ali modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most izbere le
preusmeritvene in opisne modele, ki jih ključ lahko uporablja, na povezavah, ki jih ključ lahko
uporablja. Klic za opis nato vedno poteka skozi OmniRoute samopovezavo z
glavo `x-omniroute-self-loop-key-id`, tako da prejemna zahteva za klepet
ponovno uveljavlja politiko povezave in modela tega ključa. `enforceApiKeyPolicy()`
upošteva to glavo le skupaj s samopovezovalnim nosilcem, tako da lahko le
omeji dostop, in ID, ki se ne razreši, je zavrnjen.

Če za ključ ni dovoljen noben vizualni model, se pot opisa umakne in
zahteva preide nespremenjena, enako obnašanje kot onemogočen varnostni mehanizem (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Zahteve brez ključa in ključi brez teh omejitev se obnašajo natančno kot prej.

#### Naloga ozaveščen opisni poziv (`modalityBridgeVisionTaskAware`)

Privzeto **resnično**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) doda
besedilo **zadnje uporabniške sporočila** (skrajšano na 500 znakov) osnovnemu
opisnemu pozivu, usmerja opis v smer, kar je uporabnik dejansko vprašal
(codex-vision-proxy vzorec) in prosi vizijski model, da prepiše vidno
besedilo. Ko je zastavica izklopljena — ali ni uporabniškega besedila — se
osnovni poziv uporabi nespremenjen.

Opis samocikla OpenAI-compatibilnega zahtevka (`callVisionModelSingle()`
v `visionBridgeHelpers.ts`) vedno zahteva `image_url.detail: "high"` —
nepogojno, za vsakega klicatelja/ponudnika, ne glede na kakršen koli signal
stranke. Nizka podrobnost vzorčenja zmanjšuje natančnost OCR za natančno
nalogo prepisovanja besedila, ki jo ta poziv zahteva, zato opisni klic
vedno zahteva visoko podrobnost ne glede na to, kakšno raven podrobnosti je
uporabil prvotni prihajajoči zahtevek. To vpliva le na notranje telo
zahtevka za opis; ne spremeni, kako OmniRoute posreduje lastno
`image_url.detail` na primarni zahtevek — ta privzeti parameter se
uporabi ločeno, in le za zaznane OpenCode stranke, v
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic žični format veje opisnega samocikla nima polja `detail` in ni
podvržen nobenemu privzetemu.

#### Omejitev izhoda opisa (`modalityBridgeVisionMaxChars`)

| Ključ                          | Privzeto | Obseg             |
| ------------------------------ | -------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` ali 100–50000 |

`0` (privzeto) pomeni **brez omejitve** — opis, ki ga vrne
`callVisionModel()`, se prenese nespremenjen, kar ohranja obstoječe
vedenje. Vsaka vrednost v razponu 100–50000 skrajša opis z
`…` pripono, preden se ponovno vključi kot `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` v `src/lib/guardrails/visionBridge.ts`).
Povečajte to za naloge OCR z veliko podrobnostmi, kjer model
v nadaljevanju potrebuje celoten prepis; zmanjšajte ga, da omejite
uporabo tokenov pri pogovornih vizijskih modelih. Polje nadzorne plošče
se nahaja na napredni plošči z zavihka Vision
(`modality-bridge-max-chars` v `ModalityBridgeVisionTab.tsx`) in omeji
vsako vrednost med 1 in 99 na 100, medtem ko pusti eksplicitno `0`
nepoškodovano — `0` je veljavna Zod vrednost sama po sebi
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ne
le "ne nastavljen" privzeti.

#### Predpomnilnik opisa (`modalityBridge/bridgeCache.ts`)

V pomnilniku LRU + TTL predpomnilnik za izhode opisov, deljen po celotnem
procesu. Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)`
z okvirjem dolžine-prefiksa (brez trkov na mejah polja). Model komponenta je
**konfiguriran** mostovni model, ne model, ki je dejansko odgovoril —
`callVisionModel` se lahko interno vrne, in ključevanje po poskusu bi
fragmentiralo predpomnilnik. Neuspešni opisi nikoli niso predpomnjeni. Nastavitve:

| Ključ                           | Privzeto | Obseg   |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Normalizacija oddaljenih slik (samocikel opis/base64 pridobitev)

Ko most pridobi **oddaljeno** sliko sam — samoklic opisa Anthropic in
pretvorba claude-wire-format base64
(`ensureBase64ImagesForClaudeWire`), oboje preko
`fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` — se
pridobljeni podatkovni URI prenese skozi `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) preden se vključi v zahtevek
vizijskega modela. Prevelike slike se zmanjšajo na **2048px dolgi rob**
(kar ustreza omejitvi velikosti, ki jo OpenAI/Anthropic že uporabljata
na strežniški strani), kar zmanjša število prenesenih bajtov/latenco
brez spreminjanja tega, kar vidi vizijski model. Zmanjšanje uporablja
`sharp`, naložen preko dinamičnega uvoza: na platformi, kjer se
njegova izvorna binarna datoteka ne naloži, `normalizeDataUri()` **nikoli
ne vrže napake** — vrne se na prenos izvirnih bajtov, tako da pot
opis/base64-pretvorbe vedno deluje. Bajti, ki niso slike (pridobitev, ki
ni vrnila dekodirne slike), se prav tako prenesejo nespremenjeni. Ta
normalizacija je omejena na slike, ki jih most pridobi za svoj
samoklic — nikoli se ne uporabi na surovem prenosnem tovoru klicatelja,
kar je v skladu s principom mutacije le po izbiri (Trda pravila #20).

#### Shema nastavitev + migracija

Novi ključi `modalityBridge*` so Zod-validirani v `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trojica `modalityBridgeCache*`, in
skupina `modalityBridgeAudio*`, ki jo uporablja Audio Bridge. Migracija
`141_modality_bridge_settings.sql` kopira obstoječe dediščinske
`visionBridge*` vrednosti v ustrezne nove ključe (idempotentno, nikoli ne
prepiše vrednosti `modalityBridge*`, ki jo je nastavil operater); dediščinski
ključi ostanejo sprejeti kot bralna rezervna možnost za en cikel izdaje.

#### Glava preglednosti + statistika

Odgovori, ki so bili spremenjeni z opisom, nosijo
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(ustvarjeno z `buildModalityBridgeHeader()` v `modalityBridge/bridgeStats.ts`,
označeno z `withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`).
Preusmerjeni zahtevki ne dobijo **nobene** glave — tovor ni bil
spremenjen in zamenjava modela je že vidna v polju `model` v telesu
odgovora.

`GET /api/modality-bridge/stats` (avtorizacija za upravljanje, enaka ravni kot
`GET /api/settings`) vrne v pomnilniku shranjene števce po modalnostih
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` in
`video`. `averageLatencyMs` uporablja `latencySamples`, ne vseh poskusov, kot
svoj imenovalec; operacija brez časovne oznake ne ustvari vzorca z nič
milisekundami. `bridged` ostaja nazaj združljiv vzdevek za uspešne
pretvorbe; neuspešni poskusi ga ne povečajo.
Števci se ponastavijo ob ponovnem zagonu procesa po zasnovi
(telemetrija, ne računovodstvo).

#### Konfiguracija nadzorne plošče

Posvečena stran nadzorne plošče je
`/dashboard/settings/modality-bridge`. Njene URL-naslovljive zavihke `Vision`, `Audio`
in `Video` ohranijo parametre poizvedbe med preklapljanjem vrednosti `tab`.
Zavihek Vision razkriva omogočanje, način, izbiro modela (vključno z
avtomatskim privzetim), nalogam prilagojeno pozivanje, napredne omejitve
časovnika/slike/dolžine opisa/keša, števce
v času izvajanja in zaščiteno zahtevo za vzorec. Zavihek Audio je prav tako
aktiven: razkriva omogočanje, izbiro modela samo za STT z Auto, omejitve
časovnika/max-clip, avdio števce in test vzorca `input_audio`. Zavihek Video
je funkcionalen: poroča o stanju izvajanja FFmpeg/ffprobe — ena od štirih
izrecnih stanj UI (`unknown`, medtem ko je preiskava v teku ali ni mogla
zaključiti, `restricted` na gostitelju nadzorne plošče, ki ni v zanki, kjer
je preiskava preskočena na strani odjemalca, `unavailable`, ko je preiskava
potrjena kot manjkajoča, ali `available` z različicami FFmpeg/ffprobe) — ohranja
omejitve omogočanja/modela/okvira/video/časovnika, filtrira izbiro modela na
modele, ki podpirajo vizijo, in razkriva video števce.

Prejšnja kartica Vision Bridge pod nastavitvami AI je povezava za
združljivost na novo stran; ne obdrži več druge kopije obrazca. Medijski
ponudniki prav tako povezujejo delovne tokove Slika-v-tekst in Govor-v-tekst
na ustrezne zavihke Modality Bridge, ne da bi odstranili obstoječi
igrišče za Govor-v-tekst.

**Obhod sprejema samopovezave:** ko klic za opis preusmeri skozi
OmniRoute-ovo lastno `/v1` samopovezavo (nestandardni model ponudnika),
podpoizvedba pošlje `x-omniroute-admission-bypass: internal` in je
avtorizirana z rešenim samopovezovalnim poverilom — lokalnim `sk_omniroute`
stražarjem v lokalnem načinu ali operaterjem konfiguriranim `OMNIROUTE_API_KEY` /
`ROUTER_API_KEY` env ključem (#1350), tako da lahko `REQUIRE_API_KEY=true`
implementacije še vedno izvajajo klic za opis. Obhod se upošteva le za
ta natančna poverila, tako da zunanji odjemalci ne morejo uporabiti
glave za preskočitev sprejema.

Zgodnji privzeti nastavitve živijo v `src/shared/constants/visionBridgeDefaults.ts`;
novi privzeti načini/naloge/keši in rešitelj nastavitev živijo v
`src/shared/constants/modalityBridgeDefaults.ts`. Varovalka razkriva
možnost konstruktorja `deps`, tako da lahko testi injicirajo lažne
izvedbe `getSettings` in `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Zajema avdio-vezane zahteve za klepet, preden dosežejo cilj, za katerega
ni znano, da sprejema avdio vhod. Nikoli ne preusmeri zahteve za klepet:
avdio deli se prepisujejo prek obstoječega večdelnega končnega
točke, združljivega z OpenAI, in izbrani model klepeta nadaljuje z
besedilnimi transkripti.

Potek:

1. Razreši `supportsAudio` prek `getResolvedModelCapabilities()`. Izrecni
   metapodatki registra ponudnikov zmagajo, nato statični metapodatki modela,
   nato sinhronizirani `modalities_input`. Deklariran seznam vhodov brez
   `audio` je `false`; nobenih dokazov o zmogljivosti ostane `null`. Tako `false`
   kot `null` aktivirata konzervativni most, medtem ko `true` obide.
2. Razreši nastavitve `modalityBridgeAudio*` in izvleči deljive
   vrhnje avdio dele iz vsake sporočila prek skupnega detektorja
   `detectMediaParts()`. Podprte oblike žice so OpenAI `input_audio`,
   `audio_url` in `source.media_type: "audio/*"`. Vgrajen avdio se zazna za
   usmerjanje, vendar ga pot za deljenje ne odstrani. Delo je omejeno z
   `modalityBridgeAudioMaxClips`; kasnejši deli ostanejo nedotaknjeni.
3. Upoštevaj konfiguriran `provider/model`, ali pa naj `selectAudioBridgeModel()`
   prehodi `AUDIO_TRANSCRIPTION_PROVIDERS` v stabilnem katalogu in izbere prvi
   model z uporabnim aktivnim poverilom ponudnika.
4. `callAudioTranscription()` pretvori base64/data-URI avdio v večdelni
   `file`, ali prenese oddaljeni `audio_url` prek javno dostopnega izhodnega
   stražarja z DNS pinningom in omejitvijo 25 MB. Nato pošlje datoteko in
   izbrani model na lokalno `/v1/audio/transcriptions` samopovezavo, avtorizirano
   z `resolveSelfLoopBearer()`. Obstoječa pot transkripcije izvaja normalno
   iskanje poveril, upravljanje cooldown/omejitev hitrosti in razporeditev
   ponudnikov.
5. Uspešni klici zamenjajo svoje dele z `[Audio N]: <transcript>`. Klici
   se izvajajo z `Promise.allSettled`: posamezni neuspeh ohrani izvirni
   avdio del (#4012 pogodba). Če vsak klic ne uspe in je cilj dokazano
   `supportsAudio === false`, deli postanejo
   `[Audio N]: (nedostopno — noben STT ponudnik povezan)` (#8430 pogodba). Za
   neznan cilj (`null`) ostane rezultat vseh neuspehov nedotaknjen. Dokazan
   cilj, ki podpira le besedilo brez uporabnega STT poverila, prejme
   enak izrecen stub brez izdaje omrežnega klica.

Uspešne transkripcije uporabljajo procesno široko LRU/TTL predpomnilnik Modality Bridge.
Ključ združuje referenco avdia, stabilno oznako operacije `audio-transcription`
in izbrani STT model; neuspehi nikoli niso predpomnjeni. Avdio poskusi
posodabljajo skupne števce `bridged`, `cacheHits`, `failures` in `lastUsedAt`.
Pretvorjeni odgovori nosijo
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nedotaknjene
zahteve ne prejemajo segmenta Audio Bridge.

Nastavitve v času izvajanja so podprte z bazo podatkov in validirane z Zod:

| Ključ                         | Privzeto | Obseg           |
| ----------------------------- | -------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —               |
| `modalityBridgeAudioModel`    | `""`     | Avto ali STT ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10            |

Skupna predpomnilnik ostaja nadzorovana z `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` in `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Zajame vrhnje video dele v Chat Completions `messages` in Responses
API `input`, preden je klicana tarča brez znane nativne podpore za video.
Podprte oblike so `input_video`, `video_url`, `video_source`, HTTPS URL,
in `data:video/*;base64,...` podatkovni URI. Navadna imena datotek v besedilu niso obravnavana
kot video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) upravlja prehod zahtevka,
preverjanje zmožnosti/politike, agregacijo na podlagi zahtevka in
payload odgovora. Delo na posameznem videu — pridobitev, predpomnilnik celotnega rezultata,
opis zaporedja sličic (ki združi katerokoli avdio transkripcijo, ki jo je razglasil klicatelj),
in metrike/preklic/čiščenje na podlagi poskusa — je skrito za `processVideoPart` v
`videoBridgePipeline.ts`, ki se pokliče enkrat na video del znotraj zanke `preCall`.
Ta modul prav tako definira eksplicitne mejne portne vrednosti `VideoMediaBrokerPort`
(pridobivanje bajtov in ekstrakcija vzorčenih sličic), `VideoAudioTranscriptionPort`
(združevanje avdio transkripcije, ki jo je razglasil klicatelj, z vzorčenimi podnapisi), in
`VideoDrilldownPort` (obliko starega surovega skladišča). Proizvodni STT in zadrževanje sličic
so sestavljeni okoli opisnega porta preko `createVideoSttAdapter` in
`createVideoDrilldownAdapter`; slednji uporablja skupno neprosojno-handle življenjsko dobo.

Javni `/v1` pot zahtevka nikoli ne uvaža ali kliče podprocesa. Oddaljeni
videi se prenašajo pod mejo 50 MiB; vgrajeni base64 videi imajo
konservativno omejitev 36 MiB dekodiranega na video, tako da model/sporočila/okvir
lahko ostanejo znotraj javne JSON omejitve sprejema zahtevka 50 MiB. Dolžina vgrajenega
in ocene dekodirane velikosti se preverjajo pred dodelitvijo. HTTPS je
zahtevan na začetnem oddaljenem URL-ju in vsakem preusmeritvi, pri čemer se uporablja
obstoječi javni izhodni varovalni mehanizem z DNS pinningom. Bajti nato prečkajo natančno notranjo
`POST /api/modality-bridge/video/extract` mejo posrednika. Ta pot je tako
`LOCAL_ONLY` kot `SPAWN_CAPABLE`, sprejema le overjen, zaupanja vreden klic
na podlagi procesa in nikoli ne sprejema URL, poti do datotek, izvršljivih
datotek ali seznama argumentov. Cevovod velikosti telesa API in postopkovni
inkrementalni bralnik telesa neodvisno uveljavljata omejitev vnosa posrednika 50 MiB.
Njegova omejena vrsta deluje na enem ekstrakcijskem postopku naenkrat, omogoča štiri
čakajoče naloge in omejuje čakajoči vhod na 100 MiB.

Znotraj posrednika `ffprobe` bere zasebno lokalno datoteko; fiksni format
seznamov dovoljenih izključuje predvajalne in manifestne formate. Za dovoljene MOV-družinske
kontejnerje ostanejo zunanje MOV podatkovne reference privzeto onemogočene, in
fiksna ukazna vrstica se ne odloči za njih. Tako `ffprobe` kot `ffmpeg` uporabljata
le `file` protokol bele liste, eno nit, fiksne tabele argumentov, brez lupine,
in izvršljive datoteke, ki so rešene iz `PATH`. Priključene slike pokrovnih tokov niso
predvajalne kandidate. Vse predvajalne tokove morajo izpolnjevati omejitve, in
izrecen privzeti tok je prednosten pred determinističnim najnižjim indeksom
rezervne možnosti. Videi so omejeni na 600 sekund, 8,192 slikovnih pik na dimenzijo, in
33,554,432 izvornih slikovnih pik. FFmpeg vzorči 1–16 sredinskih JPEG sličic, zmanjša
dolgo stran na največ 1,024 slikovnih pik brez povečanja manjših vhodov, in
nikoli ne prejme URL. Vzorčenje je privzeto `uniform`. Neobvezne
`scene_aware` in eksperimentalne `segment_aware` politike opravijo en dodaten
fiksni FFmpeg prehod nad že validiranim lokalnim tokom, izberejo omejene
`showinfo` časovne žige prizorov, in deterministično preklopijo na iste
uniformne sredinske točke ob neuspehu detektorja, časovni omejitvi, slabo oblikovanem izhodu, ali praznem
naboru kandidatov. Način, ki je zavedajoč segmentov, dodeli vzorce sredine sorazmerno
validiranim časovnim intervalom prizorov; dokazi, ki so zavedajoči segmenti, in obnašanje
rezervne možnosti so podrobno opisani spodaj. Trda omejitev 16-sličic se
uporabi po izbiri v vsaki politiki. Ko ima zahteva, ki je zavedajoča prizorov, le
proračun za eno sličico, uporablja uniformno sredino aktivnega celotnega videa ali fokusa
okna in poroča `policyEffective: uniform`: ena izbrana sličica prizora
ne more ohraniti obeh časovnih koncev. Klicatelj lahko neobvezno zagotovi
končno fokusno okno (`start`/`end` sekund); meje so omejene na trajanje medija,
obrnjena ali neskončna okna so zavrnjena, in vse politike vzorčenja se izvajajo
le znotraj normaliziranega intervala. Rezultantno okno je vključeno v metapodatke vzorčenja
in v nepreverjen opisni predpono, tako da lahko spodnji modeli razlikujejo osredotočen
izvleček od celotnega časovnega razporeda.

Osredotočenost semantičnih podnapisov je ločena, eksplicitna nastavitev. Privzeti
`full` način analize ohranja obstoječi okvirni poziv in nikoli ne posreduje besedila
zahteve modelu podnapisov. V `focused` načinu most prebere le najnovejše
neprazno uporabniško avtorsko `text`/`input_text` iz istega Chat ali Responses
kontejnerja, ga normalizira na NFC, združi kontrolne znake in presledke,
in omeji na 500 Unicode kodnih točk. Prazen rezultat se vrne na
natančen `full` poziv. Uporaben namig je serializiran kot JSON v
posebnem bloku nepreverjenega uporabniškega konteksta in lahko le daje prednost
opaznim podrobnostim; ne more nadomestiti ločenega opozorila proti sledenju
navodilom, ki so vidna ali slišna v mediju. Besedilna osredotočenost nikoli ne
izvaja `start`/`end` ali spreminja časovnega vzorčevalnika.

#### FU-07 strukturni segmentni dokazi

`segment_aware` uporablja en omejen predanalizni prehod nad že validiranim lokalnim video tokom. Fiksna filtrirna veriga najprej skalira na največ 320 pikslov širine, zazna spremembe prizorov in zamrznjene intervale, nato pa vzorči pri 1 sličici na sekundo za zameglitev, povprečno lumo in prostorske/časovne informacije. Prehod je omejen na 600 strukturnih vzorcev, eno FFmpeg/filter nit, isti `file`-only protokol in dovoljenja za kontejnerje, omejitev izhoda procesa na 1 MiB in največ 30 sekund znotraj deljenega preklica/rok brokerja. Nikoli ne sprejme ukaza, filtra, poti ali URL-ja iz zahteve.

Strukturne vrednosti so deterministični vzorčni dokazi, ne pa semantično razumevanje videa. Ne sklepajo o predmetih, dejanjih, napisih, govoru ali namenu uporabnika. Meje prizorov in zamrznitev oblikujejo segmente; pokritost zamrznitve, zameglitev, osvetlitev, prostorske podrobnosti in časovne spremembe vplivajo le na to, kako se obstoječi proračun 1–16 sličic razporedi. Popolnoma zamrznjen segment je omejen na eno sličico, medtem ko se nezamrznjeni segmenti borijo za preostali proračun. Ko meje presegajo sličice, se ohrani enotna pokritost časovnice, tako da hitri zgodnji rezi ne morejo skriti dolgega sledilnega segmenta. Meje prizorov znotraj 1-sekundne analitične ločljivosti meje zamrznitve se združijo.

Manjkajoči filtri, slabo oblikovani/prazni dokazi, napaka detektorja ali omejitev predanalize se odprejo na točno enotno srednjo politiko. Preklic klicatelja ali rok brokerja se ne odpre: prekine v teku podproces, prepreči kasnejše pridobivanje sličic in zasebno začasno drevo se odstrani v `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generira deterministične realne FFmpeg naprave za prihranke po deduplikaciji, dodelitev proračuna za gosto gibanje, dokaze o zameglitvi/osvetlitvi/SI-TI, hitre reze z dolgim repom in lažne pozitivne rezultate postopnega bledenja. Zabeleži čas stene predanalize in, kjer je `/usr/bin/time` na voljo, otroški CPU in vrh RSS. Njegove kakovostne preveritve so le strukturni oraklji. Kakovost realnega modela napisov ostaja `HOLD`, ker ta naprava nima pooblaščenega končnega ali zamrznjenega sodnika. Finančni prihranki prav tako ostajajo `HOLD`, razen če `--caption-cost-per-call-usd` zagotovi izrecno pozitivno oceno na klic; skripta nikoli ne izmišlja nobenega rezultata.

Vsaka sličica je omejena na 4 MiB, vse surove sličice skupaj na 23 MiB, in serilizirani odgovor brokerja na 32 MiB. Zasebni začasni imenik se odstrani v `finally`. OmniRoute ne združuje FFmpeg in ne sprejema prilagojene poti do izvršljive datoteke. Pred napisovanjem most uporabi konzervativen prehod vizualne deduplikacije: vsak JPEG se zmanjša na 16×16 sivinsko območje in se primerja le z zadnjo ohranjeno sličico. Za zahtevani proračun napisov nad eno sličico, pridobitev zagotavlja omejen nabor kandidatov do dvakrat tega proračuna in nikoli več kot 16 sličic. Zahtevana omejitev se uporabi šele po deduplikaciji, pri čemer se prvi in končni izbrani kandidati ohranijo med končnim redčenjem, ko je proračun vsaj dva. Različica
`grayscale-16x16-mean-cells-v2` politika uporablja večjo od povprečnega luma delta in razmerja celic sličic, katerih normalizirani delta je vsaj 0.05. Prag za podvajanje je konstantna 0.04, izbrana zaradi predvidljivosti in ne izpostavljena kot nastavitev med izvajanjem. Ta sekundarni
visoko-kontrastni signal ohranja majhne gibe in spremembe vidnega besedila, ki jih lahko skrije le povprečna primerjava. Napake komparatorja ali dekoderja se odprejo in ohranijo pokritost. Izhodni metapodatki ločujejo pridobljene kandidate, uspešno uporabljene sličice in vizualne podvojitve, ki so bile odstranjene.

Izrecno označen del videa lahko zahteva časovno označeno kontaktno ploščo. Most gradi največ 4-stolpci, 16-sličični JPEG mrežo. Vsaka celica velikosti 512 pikslov vžge svoj izvorni časovni žig v visoko-kontrastni spodnji pas, medtem ko isti časovni žigi ostanejo v besedilnih metapodatkih za nadaljnje povezovanje in revizijo. Celoten JPEG ostaja omejen na 32 MiB. Če `sharp` ne more dekodirati ali sestaviti mreže, most preide na posamezne JPEG sličice; preklic stranke se še vedno širi skozi operacijo plošče.

Dokazi o promociji so namerno ločeni od sintetičnega mikrobenchmarka sestave. `scripts/perf/video-bridge-contact-sheet-eval.ts` definira shemo različice A/B za realne modele vizije, združljive z OpenAI. Meri tokene, ki jih poroča ponudnik, latenco stene od konca do konca (vključno s sestavo plošče), število klicev modela in ohranjanje dejstev, opredeljenih v manifestu. Surove odgovore modela ne zapiše v poročilo; ohranijo se le SHA-256 povzetki in ujemajoči se ID-ji dejstev. Naprava ne izvede nobenega omrežnega ali plačanega klica modela, razen če je `--execute-real` posredovan in `--model`, `OMNIROUTE_BASE_URL` in `OMNIROUTE_API_KEY` so konfigurirani. Brez tega izrecnega realnega izvajanja, njen strojno berljiv sklep ostaja `HOLD`; meritve sintetičnega tovora/klicev same niso dokazi o promociji.

Ločen `scripts/perf/video-bridge-promotion-eval.ts` porabi FU-07 ali FU-09 opazovanja. Sprejem promocije zahteva vseh osem sintetičnih scenarijev plus saniran pravi posnetek, vsaj tri izmerjene ponovitve na vlogo in primer, vseh deset razglašenih metrik, zamrznjene medije/prompt/pričakovane dejanske povzetke, edinstvene ID-je opazovanj in preverjen A/B vrstni red. Potrdilo o izvedbi povezuje povzetek korpusa, natančen SHA kandidata in revizijo modela. Manjkajoče ali neveljavne meritve ostajajo `HOLD`, vključno s CPU nad 30 s, vrhunskim RSS nad 512 MiB ali predanalizo nad 30 s. To so omejitve za sprejem dokazov, ne pa nova garancija za izvrševanje RSS.

FU-07 zahteva vsaj 98% ohranitve kakovosti in p95 latenco ne več kot 1.2x
osnovne vrednosti, poleg tega pa bodisi 0.05 absolutno uravnoteženo povprečno izboljšanje
spomina pri enakih povprečnih klicih za podpise, ali vsaj 10% manj povprečnih klicev
za podpise po deduplikaciji. FU-09 zahteva vsaj 0.85 kakovosti, 95% ohranitve,
20% zmanjšanja p95 latence in 10% zmanjšanja tokenov. Kritična izguba dejstev,
skladnost z injekcijami ali manjkajoča uporaba preprečuje promocijo. Ena izvedba ne more
promovirati ničesar: `--previous-report` potrjuje dve različni, nepokritni,
zaporedni upravičeni izvedbi iste politike/modela revizije/kandidata/korpusa.
Eksperiment vzorčenja ne more potrditi eksperimenta kontaktne slike.

Zbiralci naj ocenijo odgovore v pomnilniku in shranijo `responseDigest` ter
metrike in opazovalne povezave, nikoli pa besedila odgovora. Porabnik prav tako bere
dedne surove opazovanja, vendar nikoli ne kopira tega besedila v svoje poročila.
Sprejeta je natančno ena od `responseDigest` ali `rawResponseText` za vsako opazovanje.
Različica dovoljenega seznama ostaja prazna z nespremenljivim privzetim `hold`.
Upravičen vnos zahteva svojo referenco dokazov, politiko, revizijo modela, natančen
SHA kandidata, manifest digest in dve različni ID-ji izvedbe; nasprotujoči si konteksti
so zavrnjeni. Ti metapodatki so pogodba o reviziji, ne dokaz, da referenčna datoteka
vsebuje pristne meritve. Preglejte dejanske račune, preden dodate
kakršenkoli vnos. Statistični končni točki upravljanja in Video nadzorna plošča
razkrivajo konzervativno pripravljenost. Samo konfiguriran model alias ne vzpostavi
njegove revizije ali delujočega SHA kandidata, zato trenutna nadzorna plošča poroča
`HOLD` namesto da bi ponovno uporabila upravičenost iz drugega konteksta izvedbe.
Izrecna eksperimentalna izbira ostaja ločena od promocije; noben privzetek se
samodejno ne spremeni.

Klicatelji lahko priložijo neobvezno `transcript.cues` polje k podprti video
delu, ko že imajo usklajen tekst. Vsaka oznaka mora vsebovati `text`, končni
`start`/`end` interval znotraj preiskovane dolžine, in beljen `source`
(`client`, `embedded`, ali `audio-bridge`); `confidence` privzeto znaša
`1` in mora ostati med `0` in `1`. Natančne podvojene oznake so združene.
OmniRoute nikoli ne začne transkripcije iz teh metapodatkov: potrjene oznake so
kopirane v opisani rezultat z virom, zaupnostjo in intervalom ter so prikazane
kot nezanesljiva opazovanja ob okvirnih podpisih. Neveljavno, izven obsega ali
brez porekla besedilo je zavrnjeno namesto da bi bilo pomešano v tok podpisov.
Oba kanala transkripcije v telesu zahteve normalizirata dobavljeno poreklo na
`client`, vključno s samo-izjavljenimi `embedded` ali `audio-bridge`
oznakami. Le adapter, ki ga upravlja strežnik, lahko dodeli te zaupanja vredne
oznake preko argumenta `trustedSource`, ki je samo za kodo; polje JSON
zahteve ne more doseči tega argumenta. Besedilo transkripcije ostaja nezanesljiva
vsebina, pridobljena iz medijev, ne glede na njeno poreklo, in nikoli ne sme
določiti avtorizacije.

Napreden klicatelj lahko zagotovi `audioTranscript` sledi za isti video;
obravnava se kot besedilo, ki ga zagotovi stranka, ne kot dokaz strežniške
transkripcije. Fuzijski šiv izvaja vizualna in avdio opazovanja pod
eno časovno omejitvijo in signalom za prekinitev, jih razporedi na skupni
časovni premici, združi natančne podvojene in poroča o delnem rezultatu,
ko uspe samo ena stran. Neveljavni `audioTranscript` se zmanjša na ta delni
rezultat — vizualni opis se obdrži in avdio veja zabeleži sanirano kodo
napake — namesto da bi propadel celoten video. Na voljo po vejah, delna oznaka
in sanirane kode napak se ohranijo v opisanem rezultatu, v metapodatkih
varovalne ograje (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), v metapodatkih predpomnilnika rezultatov in v
številčnikih fuzije mostu. Privzeta pot Video Bridge ne sproži pretvorbe govora
v besedilo ali ne prenese druge kopije medija; brez te izrecne sledi ostane
samo video.

**Ohranjanje transkripcije (#12150 P1).** To se samodejno uporablja, kadar
Video Bridge (ki je sam po sebi opt-in) izvede transkripcijsko oznako — ni
ločene oznake za ohranjanje. Ko zahteva izvede katero koli transkripcijsko
oznake (klicatelj-deklarirana `transcript` ali fuzionirana `audioTranscript`),
varovalna ograja označi kot `videoBridgeObserved` in ustvari redigiran
sence video opisa — identična izvedba, v kateri je telo prostega besedila
vsake oznake zamenjano z `[redacted-video-transcript]`, zgrajeno z zamenjavo
strukturiranega polja oznake pred sestavljanjem niza (nikoli z razčlenjevanjem
poenostavljenega besedila, tako da nobena vsebina oznake — nasprotna ali običajna,
vključno z telesi, ki vsebujejo `]`, kot so `[inaudible]`/`[music]` — ne more
preživeti). Ohranjen dnevnik klicev zamenja vsak del besedila, pridobljenega iz
videov, s tem redigiranim senco, ujemajočim se po vsebinski enakosti;
`fullText` sidro se ponovno prebere iz končne predklicne varovalne ograje
payload, tako da se ujemanje še vedno uspe, potem ko kasnejše varovalne ograje
(prekrivanja PII in poverilnic, prioritete 10/95) prepišejo besedilo opisa
na mestu in po sistemskem pozivu/predaji/injekciji pomnilnika preoblikujejo
niz sporočil. Telo, poslano navzgor modelu, ostaja nespremenjeno. Opazovana
zahteva prav tako ne napolni trajnega pomnilnika (tako ekstrakcija iz
zahteve kot odgovora sta preskočeni), tako da odgovor modela ne more
ponoviti besedila transkripcije v pomnilniku.

**Surovi video polja (#12430).** Ko je most omogočen in podpora za
nativni video ni znana ali odsotna, definirana polja `transcript`/`audioTranscript`
tudi aktivirajo `videoBridgeObserved`, tudi po neuspehu opisa ali omejitvi
`maxVideos`. `null` in prazni nizi se štejejo; odsotna polja in ne-video
metapodatki ne. Ohranjene kopije redigirajo ta polja ali izpustijo zahtevo,
predpomnilniki/pomnilnik pa se obidejo. Vsebina ponudnika ostaja nespremenjena.

Dodatne zadržane kopije uporabljajo isti signal opazovanega zahtevka. Surov
snapshot zahtevka od odjemalca pred zaščitnim mehanizmom, v pomnilniku čakajoči zahtevek in zgodnji
zapis zavrnjenega zahtevka strukturno nadomestijo polja transkripta v video delih;
nizovne spodbude, sintetizirane s fazami cevovoda in predajo konteksta, so redigirane
na mestu trajnega zahtevka. Trajni marker `video_content_removed`
onemogoča nadaljevanje `previous_response_id`, namesto da bi rekonstruiral
besedilo, ki je bilo namerno zavrženo. Če opazovani zahtevek izgubi svoj
senčni redigiran del pred zapisom, ali celo če eden od več video senčnih delov
ne ustreza po kasnejših mutacijah zahtevka, se zadržani zahtevek telo
popolnoma izpusti namesto da bi zadržal delno redigiran transkript.

Za opazovani zahtevek lahko odgovor modela citira kateri koli del
transkripta brez strukturne meje. Njegov trajni zapis klica
`responseBody` je zato nadomeščen z markerjem za izpuščanje; podrobni
artifact cevovoda (ki lahko vključuje zgornje/odjemalske telesa in delčke toka)
ni zadržan. Semantični, idempotentni in ponovni predpomnilniki za razmišljanje obidejo
branja in zapise za ta zahtevek. Zahteva ponudnika in odgovor, viden od odjemalca,
ostaneta nespremenjena. Zgodnji bajti za ohranjanje se izčrpajo iz začasnega
pomnilnika, ko je podrobni artifact izpuščen. Kirova nepravilna opozorila o EventStream
poročajo le o številu bajtov v vsebini, nikoli o njeni vsebini ali surovi napaki
JSON parserja.
To ne trdi, da je bil vsak nepovezan diagnostični podatek ponudnika/plugin-a
auditoriran; širše čiščenje zadržanega odtoka je sledeno v #11658.

Notranji `/api/modality-bridge/video/drilldown` življenjski cikel je ločen,
ciklični/token-avtentikacijski predpomnilni substrat. Vsaka operacija prav tako zahteva
kanonično neprosojno glavno ID. Preden je omogočen klicatelj v produkciji, mora
izpeljati to ID iz avtentikiranega najemnika in nikoli ne sme posredovati
vrednosti, ki jo izbere odjemalec. Ključi predpomnilnika povezujejo to glavno ID
s kanoničnimi sejnimi in video-referenčnimi ID-ji, shranjujejo le njihove ključe,
izpeljane iz SHA-256, in omejujejo tako branja kot brisanje na isto glavno ID.
Predpomnilnik shrani največ 16 izpeljanih JPEG
sličic na vnos, jih poteši po desetih minutah in podpira omejena
`start`/`end` branja ali eksplicitno brisanje seje.

Vsaka glavna ID je omejena na 16 vnosov in 64 MiB kanoničnih JPEG podatkov. Te
omejitve so neodvisne od globalne omejitve 64-vnosov/256 MiB: pritisk na kvoto
glavne ID izloči le najmanj uporabljene vnose te glavne ID, preden se upošteva
globalno LRU izločanje. Potešeni vnosi se izločijo iz obeh glavnih ID in
globalnega računanja ob dejavnosti predpomnilnika, medtem ko preklic in neuspeh
validacije ne zavezujejo delne zamenjave.

Predpomnilnik zavrne nekanonični Base64, odvečno polnjenje, ne-JPEG medije, nepravilne ali
truncated JPEG slike, in JPEG slike, ki povzročajo opozorilo med omejenim
polnim dekodiranjem `sharp`. Vsako sprejeto sliko ponovno kodira kot kanonični JPEG, izpelje širino in višino
iz dekodiranih bajtov namesto da bi zaupala poljem klicatelja, in zavrže vse
končne poliglotne bajte namesto da bi jih zadržala. Le omejen kanonični stisnjen
pomnilnik se zaračuna obema kvotama. JSON omejitev za prenos vključuje Base64
presežek za 32 MiB
omejitev dekodiranega vnosa. Vsaka
shranjena izpeljava beleži svoj potrjen JPEG format/ločljivost, politiko vzorčenja,
različico izpeljave, čas ustvarjanja, strežniško izračunano vsebinsko hasho in hasho
starševskega referenčnega ter hasho starševske vsebine zaupanja vrednega klicatelja. Preklic se preveri
med asinhronimi fazami dekodiranja/hash pred atomskim zavezanjem predpomnilnika.

Proizvajalec v produkciji ponovno uporablja že izpeljane okvirje posrednika le po uspešni
vizualni analizi, brez drugega prenosa/izvlečenja videa. Zahteva operaterja
`modalityBridgeVideoDrilldownEnabled=true`, strogo po delih `drilldown: true`, in
avtentikacijski ID zapisa API-ključa. Vrednosti glavne ID/seje, ki jih razglasi odjemalec, nikoli
ne vzpostavijo lastništva. Brez vseh treh pogojev ne izračuna, ne spremeni velikosti ali ne zadrži
dodatnih okvirjev. Neuspeh pri zadržanju ohranja uporabni vizualni odgovor. Dovoljeni
zahtevki obidejo celoten predpomnilnik rezultatov videa, tako da shranjeni rezultati nikoli ne ponavljajo ročajev.

Uspešni JSON in SSE odgovori razkrivajo največ štiri neprosojne ročaje v omejenem
`x-omniroute-video-drilldown` glavi. Pooblaščeni izvorni brskalniki lahko berejo to glavo
brez širjenja CORS politike izvora. Novi ročaji uporabljajo `v1.<32-byte random base64url
token>`, in register zadržuje le
njihove SHA-256 hashe. Bralnik/parser glave prav tako sprejema dediščinske 64-hex ročaje.
Avtentikovani javni potrošnik je
`GET /api/v1/video-bridge/drilldown?handle=...`, neodvisno zaklenjen z
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Izrecno trajno lažno odvzema
dostop, tudi ko je omogočen dediščinski `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env
rezervni sistem. Proizvodno zadržanje ima analogni dediščinski
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` rezervni sistem. Obe rezervni sistemi sta privzeto izklopljeni.

Potrošnik izpelje lastništvo iz avtentikacijskega ključa, uporabi politiko ključa in
vrne enak 404 za neznane, potešene in druge ključe. Sprejema
`variant=preview|standard|detail` (maksimalna JPEG dimenzija 320/640/1280, nikoli ne povečana),
`limit=1..8` (ali dediščinski `frames` alias, nikoli oboje), ničelno osnovano `page`, in opcionalne
`start`/`end` sekunde fokusa. Podvojeni
ključi poizvedbe in obrnjena okna fokusa so zavrnjeni. Vsaka vrnjena različica ima hash
svoje dejanske vsebine in dejanske ločljivosti metapodatkov, povezanih z zadržanim virom.
Različice se izpeljejo ob branju namesto da bi bile shranjene kot dodatne zadržane kopije. JSON
odgovor, vključno z Base64/ovojnico, je omejen na 32 MiB; prevelika stran vrne
413 in odjemalec mora zahtevati manj okvirjev. Branja preverjajo preklic okoli vsake
spremembe velikosti in ponovno preverijo veljavnost ročaja pred vrnitvijo. `DELETE` s strani lastnika je idempotentno;
brisanje ali potek TTL sprosti zadržani vir in računanje uporabe.

Deljeni shranjevalnik je lokalno procesni: ročaji potečejo ob ponovnem zagonu in niso prenosljivi med neodvisnimi procesi OmniRoute. Statistika upravljanja razkriva učinkovito politiko zadrževanja/oddaljenosti in agregira le zadržane vnose/byte, nikoli medije, reference, ID-je glavnih uporabnikov ali ročaje. Plošča nastavitev videa prikazuje te vrednosti in lahko ohrani oba stikala za soglasje. Ta dokumentacija za implementacijo ni dokaz o živi namestitvi ali promociji; sprejem pravega modela se sledi ločeno.

Okviri so podnaslovljeni zaporedno s konfiguriranim modelom videa. Prazna preusmeritev videa podeduje nastavitev vizije; če sta oba prazna, avto-usmerjevalnik vizije izbere učinkovit model, ki podpira vizijo. Uspešni podnapisi nadomestijo izvirni del s stabilnim `[Video description:` predpono, ki tudi označuje besedilo kot nezanesljivo opazovanje, pridobljeno iz medija, in pove downstream modelom, naj ne sledijo navodilom, najdenim v mediju. Ključi predpomnilnika za podnapise okvirjev vključujejo JPEG byte, poziv, časovni žig in učinkovit model; le uspešni podnapisi se predpomnijo. Vnosi predpomnilnika ohranjajo dejanski uspešni model proizvajalca, vključno z rezervnim modelom; most poroča `mixed`, ko so različni okviri proizvedeni z različnimi modeli. Zadetek v predpomnilniku ponovno uporabi to identiteto proizvajalca namesto da bi jo preimenoval v zahtevani načrt usmerjanja. Predpomnilnik celotnega videa je ključan za vsak vhod, ki spremeni izhod — poziv, učinkovit model, politiko vzorčenja, število okvirjev, način semantične analize, SHA-256 prstni odtis normaliziranega namiga fokusa, okno fokusa, `transcript`, `audioTranscript` in zastavico kontaktne plošče — zato je sprememba katere koli od teh dimenzij zadetek v predpomnilniku, nikoli zastarela ponovna uporaba. Različica politike vizualne deduplicitete, prag in omejeno število kandidatnih okvirjev so prav tako izrecni v ključu in metapodatkih predpomnilnika rezultatov; sprememba politike torej ne more ponovno uporabiti zastarele opisa celotnega videa. Metapodatki predpomnilnika rezultatov v4 ohranjajo način in prstni odtis, nikoli suhe uporabniške naloge. Metapodatki zaščitne ograje poročajo o obeh zahtevanih in učinkovitih načinih analize; zahtevan način `focused` brez uporabnega besedila se poroča kot učinkovito `full`.

Zaščitna ograja izloči vsak podprt del videa, vendar ne opisuje več kot `modalityBridgeVideoMaxVideos`. Za cilj, za katerega je dokazano, da ima `supportsVideo === false`, neuspešni in prekomerni videi postanejo eksplicitni varni besedilni označevalci, tako da noben surov video ne preživi. Ko je zmožnost neznana, ti deli ostanejo nedotaknjeni. Cilji z `supportsVideo === true` obidejo most. Signal za prekinitev zahteve odjemalca se širi skozi prenos, čakalno vrsto posrednika, podprocese in klice podnapisov; prekinitve se ustavijo med videi in nikoli ne odpovejo odprto surovim medijem.

Nastavitve v času izvajanja so podprte z bazo podatkov in potrjene z Zod:

| Ključ                               | Privzeto    | Obseg / vedenje                                                                                        |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`     | Neobvezno izvajanje, opt-in                                                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` ohranja splošne podnapise; `focused` uporablja omejen, nezanesljiv kontekst zadnjega uporabnika |
| `modalityBridgeVideoModel`          | `""`        | Podeduj model Vision Bridge                                                                            |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                   |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` ali proporcionalni `segment_aware`; neuspeh detektorja se vrne na `uniform`   |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                    |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                         |

Zgodovinske vrednosti časovnega izteka videa, ki presegajo 120 sekund, so omejene na rok posrednika; novi zapisi nastavitev nad to mejo so zavrnjeni. `GET /api/modality-bridge/video/runtime` zahteva zaupno žigosano lokalno lokalnost pred avtentikacijo ali preizkušanjem v času izvajanja, nato zahteva avtentikacijo za upravljanje. Vrača le `available`, sanirane različice FFmpeg/ffprobe in fiksni razlog, ko izvajanje ni na voljo. Notranja točka za ekstrakcijo ni javni API za nalaganje: zasičenost čakalne vrste vrne `503` plus `Retry-After`, prekinitev klicatelja vrne `499`, in fiksni rok posrednika vrne `504`. Pretvorjeni odgovori dodajo `video->text;model=<visionModel>;parts=<videos>` v osrednji `x-omniroute-modality-bridge` glavi, ne da bi odstranili segmente vizije ali zvoka.

### PII Masker (`piiMasker.ts`)

Deluje na **obeh** stopnjah.

- **`preCall`** klonira payload, prehodi skozi `system`, `messages`, `input` in `prompt` (vključno s preprostimi niznimi elementi) ter uporabi `processPII()` (iz `@/shared/utils/inputSanitizer`) na poljih nizov `content`/`text`. Ko je `PII_REDACTION_ENABLED=true`, se zaznani PII izbriše v odhodnem payloadu. To je neodvisno od `INPUT_SANITIZER_MODE` (ki nadzira le politiko injiciranja pozivov). Ko je brisanje izklopljeno, klic beleži število zaznav brez prepisovanja vsebine.
- **`postCall`** globoko klonira odgovor, izvede `sanitizePIIResponse()` plus masker oblike Responses-API (`maskResponsesOutput` — pokriva `output_text` in `output[].content[].text`). Če pride do kakršnega koli brisanja, spremenjen odgovor nadomesti izvirnika.

Zaščitna ograja nikoli ne blokira; le označuje (`meta.detections`, `meta.redacted`) ali prepisuje.

### Vbrizgavanje pozivov (`promptInjection.ts`)

Odkrije nasprotne strukture v vsebini, ki jo zagotovi uporabnik, in izvršuje
konfigurirano politiko. Obnašanje je odvisno od okolijskih spremenljivk in možnosti
konstruktorja:

| Nastavitev  | Okoljska spremenljivka                                                                                 | Privzeto | Učinek                                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omogočeno   | `INPUT_SANITIZER_ENABLED`                                                                              | `true`   | Ko je `false`, varovalna pregrada se skrajša.                                                                                                                                       |
| Način       | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`   | Politika injiciranja: `block`, `warn` ali `log`. (`redact` je sprejet za nazaj, vendar **ne** odstrani injekcijskega besedila; zahteva prepis PII nadzira `PII_REDACTION_ENABLED`.) |
| Prašna meja | `blockThreshold` možnost / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Minimalna resnost, potrebna za blokiranje. Srednja je privzeto le za opazovanje.                                                                                                    |

**Prednost načina** (`getMode`): klicatelj `options.mode` →
`INJECTION_GUARD_MODE` **preklopna oznaka DB** (Nadzorna plošča → Nastavitve →
Oznake funkcij) → `INJECTION_GUARD_MODE` okoljska spremenljivka → `INPUT_SANITIZER_MODE` okoljska spremenljivka →
`warn`. Preklic na nadzorni plošči torej prevlada nad okoljskimi spremenljivkami, tako da uporabniški vmesnik Oznake funkcij nadzira delovanje varovalne pregrade v živo (brez ponovnega zagona). Branje iz DB je varno:
če pride do napake, se varovalna pregrada vrne na obnašanje, ki temelji na okolju, in ko ni nastavljena nobena
preklopna oznaka, je obnašanje identično rešitvi, ki temelji samo na okolju.

Viri zaznavanja:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (skupni detektor
   set, ki se uporablja drugje v procesu).
2. Vgrajeni `DEFAULT_GUARD_PATTERNS` (trenutno `system_override_inline` in
   `markdown_system_block`, oba z resnostjo `high`).
3. Neobvezni `customPatterns`, posredovani preko možnosti konstruktorja (nizi, regex,
   ali `{ name, pattern, severity }` zapisi).

Ko je `mode === "block"` **in** vsaj ena zaznava doseže prag resnosti,
`preCall` vrne `{ block: true, message: "Zahteva zavrnjena: zaznana sumljiva vsebina" }`. V načinih `warn`/`log` varovalna pregrada zabeleži, vendar
dovoli klic. Skupni pomočnik `evaluatePromptInjection()` je prav tako izvoziti
za klicatelje, ki morajo oceniti pozive brez prehoda skozi register.

**Obseg skeniranja (v3.8.20):** detektor pregleduje le **prvih 16 KB** združene besedilne vsebine — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtov) v
`src/shared/utils/inputSanitizer.ts`. Tako `detectInjection()` kot
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` pred izvajanjem
cikla vzorcev. Injekcijske direktive se nahajajo blizu vrha vnosa, tako da to
omejuje CPU/GC regex na večsto KB obremenitvah, ne da bi oslabilo zaznavanje (cf.
#3932, #4041).

### Masker poverilnic (`credentialMasker.ts`)

Deluje na **obeh** stopnjah, zadnji v privzeti verigi (prednost `95`). Odstrani
dobro znane vzorce API-ključa / skrivnega žetona iz izhodne obremenitve (vsebina
sporočila, argumenti klica orodja, rezultati orodja) **in** odgovora ponudnika, tako da
se poverilnica, prilepljena v poziv (ali vrnjena z rezultatom orodja), ne razkrije
zgornjemu ponudniku ali nazaj stranki.

- **Samo po izbiri**, enaka konvencija kot pri prepisu PII (Trda pravila #20-sosednje):
  onemogočeno, razen če `settings.credentialRedactionEnabled === true` **ali**
  `CREDENTIAL_REDACTION_ENABLED=true`. Ko je izklopljeno, varovalna pregrada ne deluje —
  nikoli ne blokira in nikoli ne prepisuje.
- `redactCredentials()` prehodi celotno drevo obremenitve/odgovora (`walkValue()`,
  varno pred onesnaženjem prototipa, varno pred cikli preko `WeakSet`) in nadomesti ujemanja z
  oznako `[REDACTED:<type>]`, klonira le veje, ki so se dejansko
  spremenile.
- `CREDENTIAL_PATTERNS` pokriva ključe ponudnikov LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS žetone (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), plačilne ključe (Stripe, Square), oblačne
  ključe (AWS dostopni ključ, Twilio, SendGrid, Mailgun), zasebne ključe / JWT,
  povezovalne nize, ki vsebujejo poverilnice (`mongodb://user:pass@...`, itd.), in
  splošni vzorec za vrednosti glave `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Ključi v obliki glave (`authorization`, `x-api-key`, `api-key`,
  `apikey`) so strukturno odstranjeni (samo vrednost, shema predpona, kot
  `Bearer `/`Basic ` ohranjena) namesto preko splošnega besedilnega regexa.
- Varovalna pregrada nikoli ne blokira; samo prepisuje (`modifiedPayload` /
  `modifiedResponse`) in označuje (`meta.credentialsRedacted`, `meta.count`).

Regresijska pregrada: `tests/unit/credential-masker-guardrail.test.ts`.

## Osnovna pogodba (`base.ts`)

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
  block?: boolean; // vrednost true prekine verigo
  message?: string; // prikazano ob blokiranju
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vrne preCall za preoblikovanje zahteve
  modifiedResponse?: TValue; // vrne postCall za preoblikovanje odgovora
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

Varovalo sporoči »brez spremembe« tako, da vrne `void`, `{}` ali
`{ block: false }`. Vrnitev `modifiedPayload`/`modifiedResponse` zamenja
vrednost, ki teče skozi verigo do naslednjih varoval.
`signal?: AbortSignal` posreduje življenjski cikel klicatelja varovalom. Prekinitev zahteve je namerna izjema s pristopom »fail-open«: predstavnostni mostovi ustavijo delo in počistijo vire, ne da bi obnovili neobdelano predstavnost za cilj, za katerega je znano, da je ne podpira.

## Register (`registry.ts`)

Edinec `guardrailRegistry` izpostavlja:

- `register(guardrail)` — doda varovalo (ali ga zamenja glede na normalizirano ime) in
  znova razvrsti varovala po naraščajoči vrednosti `priority`.
- `clear()` / `list()` — skrbniški pomožni funkciji.
- `runPreCallHooks(payload, context)` — gre skozi aktivna varovala, posreduje
  koristno vsebino prek `modifiedPayload` in se ustavi pri prvem `block: true`.
- `runPostCallHooks(response, context)` — enak potek na strani odgovora.
- `resetGuardrailsForTests({ registerDefaults })` — počisti stanje in po želji
  znova registrira privzete nastavitve za čisto izolacijo preizkusov.

Oba izvajalnika vrneta `{ blocked, payload|response, results, guardrail?, message? }`,
pri čemer je `results` polje zapisov `GuardrailExecutionResult`, ki vključujejo
polja `blocked`, `skipped`, `modified`, `error` in `meta` za vsako varovalo,
kar je uporabno za sledenje.

### Onemogočanje varoval za posamezno zahtevo

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` zbere
podvojenih vrednosti očiščen seznam imen varoval, ki jih je treba preskočiti za trenutno
zahtevo. Viri (vsi izbirni, vsi združeni):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` v telesu zahteve (na najvišji ravni)
- `metadata.disabledGuardrails` v telesu zahteve
- Glava `x-omniroute-disabled-guardrails` (ali starejša
  `x-disabled-guardrails`)

Vrednosti so lahko polja nizov ali niz, ločen z vejicami; imena so
normalizirana v male črke in zapis kebab-case (`pii_masker` → `pii-masker`). Rezultat
se prek `context.disabledGuardrails` posreduje registru, ki preskoči
ujemajoča se varovala (`skipped: true` v `results`).

## Vrstni red izvajanja

Za vsako zahtevo, ki teče skozi `src/sse/handlers/chat.ts` in
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` sestavi seznam za preskok na podlagi ključa API, telesa
   in glav.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` izvede varovalne mehanizme po naraščajočem
   vrstnem redu prioritete:
   - Onemogočeni varovalni mehanizmi so zabeleženi kot `skipped`.
   - `preCall` vsakega varovalnega mehanizma lahko prepiše koristno vsebino prek `modifiedPayload`.
   - Prvi `block: true` prekine verigo, obravnavalnik pa vrne
     odgovor o zavrnitvi s strani varovalnega mehanizma.
3. (Morebiti prepisana) koristna vsebina se posreduje kombiniranemu usmerjanju in
   pošiljanju nadrejenemu ponudniku.
4. Ko je odgovor sestavljen, `guardrailRegistry.runPostCallHooks(...)`
   izvede isto verigo nad odgovorom. `block: true` na tej točki zavrže odgovor
   nadrejenega ponudnika.

Varovalni mehanizmi, ki sprožijo izjemo, so zabeleženi z `error: <message>` in zapisani v dnevnik prek
`logger.warn`, vendar se veriga nadaljuje — zasnovano po načelu odprtega odpovedovanja.

## Konfiguracija

Spremenljivke okolja, ki jih berejo vgrajeni varovalni mehanizmi:

| Spremenljivka                         | Uporablja jo                 | Učinek                                                                                                                       |
| ------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`           | Nastavite na `false`, da zaznavanje v celoti onemogočite.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`           | Pravilnik za vrivanje: `warn`, `block` ali `log`. Podedovana vrednost `redact` ne prepisuje vrinjenega besedila.             |
| `INJECTION_GUARD_MODE`                | `prompt-injection`           | Način za zaščito pred vrivanjem; tudi zastavica funkcije v zbirki podatkov, ki **preglasi** spremenljivke okolja (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`           | Najnižja stopnja resnosti, ki jo `MODE=block` zavrne: `high` (privzeto), `medium` ali `low`.                                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`           | Podedovan vzdevek za `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                      |
| `PII_REDACTION_ENABLED`               | `pii-masker`                 | Ko je nastavljeno na `true`, se podatki PII v zahtevi zakrijejo (neodvisno od načina vrivanja).                              |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nadaljnji tok) | Nadzira vedenje prikrivanja na strani odgovora.                                                                              |

Varovalni mehanizmi Modality Bridge berejo izvajalno konfiguracijo iz shrambe
nastavitev, podprte z zbirko podatkov (`getSettings()`), in ne iz spremenljivk okolja. Primarni ključi za slikovni način so
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` in
`modalityBridgeCacheMaxEntries`. Podedovani ključi
`visionBridge*` so sprejeti samo kot dokumentiran nadomestni način branja za en cikel;
zapisi nadzorne plošče uporabljajo primarne ključe. Privzete vrednosti in razreševalnik nadomestnih vrednosti
so v `src/shared/constants/modalityBridgeDefaults.ts`, podedovane
konstante pa so ohranjene v `src/shared/constants/visionBridgeDefaults.ts`.

Zvok uporablja `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` in `modalityBridgeAudioMaxClips` ter skupne
nastavitve `modalityBridgeCache*`. Zvok nima nadomestnega branja podedovanih ključev, ker so bili ti
ključi uvedeni s shemo Modality Bridge.

Video uporablja `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` in
`modalityBridgeVideoTimeout` ter skupne nastavitve `modalityBridgeCache*`.
Privzeto je onemogočen, ker sta FFmpeg/ffprobe izbirni operativni
odvisnosti, opisovanje sličic pa poveča zakasnitev in stroške modela.

## Zaščitni mehanizmi po meri

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

Koraki:

1. Ustvarite `src/lib/guardrails/myGuardrail.ts`, ki razširja `BaseGuardrail`.
2. Implementirajte `preCall` in/ali `postCall`.
3. Registrirajte ga bodisi ob uvozu (dodajte ga iz `registerDefaultGuardrails`) bodisi
   med izvajanjem pokličite `guardrailRegistry.register(...)` — register zamenja
   vsak predhodni zaščitni mehanizem z enakim normaliziranim imenom.
4. Dodajte teste v `tests/unit/` (obstoječi primeri:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testiranje

Med testi uporabite `resetGuardrailsForTests()`, da začnete iz znanega stanja.
Posredujte `{ registerDefaults: false }`, da začnete s praznim registrom in
registrirate samo zaščitne mehanizme, ki jih testirate. Vision Bridge podpira vstavljanje
odvisnosti (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge ponuja
enakovredne priključne točke za nastavitve, zmogljivosti, izbiro modela STT, preverjanje
poverilnic in prepisovanje. Testi lahko zato preverjajo oba poteka brez dostopa do
podatkovne zbirke ali omrežja.

## Glejte tudi

- `src/lib/guardrails/` — implementacija
- `src/shared/utils/inputSanitizer.ts` — skupni detektor, ki omogoča
  zaznavanje vbrizgavanja pozivov in maskiranje osebno določljivih podatkov
- `src/shared/constants/visionBridgeDefaults.ts` — privzete nastavitve Vision Bridge in
  seznam modelov s prisilno uporabo mostu
- `src/shared/constants/modalityBridgeDefaults.ts` — skupne privzete nastavitve izvajalnega okolja Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — neodvisna plast (varovalka, obdobja mirovanja)
- `docs/reference/ENVIRONMENT.md` — celoten pregled spremenljivk okolja

## Pokritost poti z zaščito pred vbrizgavanjem in red-team testiranje (8. faza · sklop D)

Zaščita pred vbrizgavanjem (`createInjectionGuard` / `withInjectionGuard`) pokriva vse poti,
ki sprejemajo uporabniške pozive. Upošteva `INJECTION_GUARD_MODE` (privzeto `warn` = samo beleženje;
`block` = vrne HTTP 400 `SECURITY_001`).

| Vrsta                | Poti                                                                                                                                                 | Privzeti način |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Besedilo (obstoječe) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generativno          | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Podatki              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Izločanje besedila (`extractMessageContents`) pokriva `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testiranje (vsako noč, `nightly-llm-security.yml`):** promptfoo preverja, ali vsaka pot blokira
korpus OWASP-LLM v načinu `INJECTION_GUARD_MODE=block`; garak izvaja sonde (brez skrivnosti se preskoči).
Pot `moderations` je vključena zaradi doslednosti — upravljavci jo lahko v načinu blokiranja izvzamejo prek
`resolveDisabledGuardrails`.

Nočni delovni tok (`.github/workflows/nightly-llm-security.yml`, cron + ročni
zagon) ima dve opravili:

- **`promptfoo-guard` (blokirajoče)** — izvede `promptfoo eval -c promptfooconfig.yaml`
  z `INJECTION_GUARD_MODE=block`. Vsak nasprotniški primer (npr. »prezri vsa
  prejšnja navodila …«, poskusi pobega iz omejitev v slogu DAN) preveri, ali odgovor vsebuje
  `error.code === "SECURITY_001"`, tj. ali je zaščita dejansko zavrnila zahtevo.
- **`garak` (svetovalno)** — izvede garak `--probes promptinject,dan,leakreplay`
  proti lokalnemu primerku OmniRoute (`http://localhost:20128/v1`). Pogojeno je s
  skrivnostjo ponudnika (`PROMPTFOO_PROVIDER_KEY`); brez nje se elegantno preskoči, ukaz pa ima pripono
  `|| true`, zato poroča, ne da bi povzročil neuspeh CI.

Pokritost pomožne funkcije zaščite (`createInjectionGuard` / `withInjectionGuard`)
obsega vse poti `/v1`, ki sprejemajo pozive; besedilo poziva se pridobi iz
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` s funkcijo
`extractMessageContents()` v `src/shared/utils/inputSanitizer.ts`.
