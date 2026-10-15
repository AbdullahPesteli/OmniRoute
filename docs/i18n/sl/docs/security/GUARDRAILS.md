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

Nižje številke prioritet se izvajajo **prvi**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Zajame zahteve, ki vsebujejo slike in so usmerjene na **model brez vizije**, ter bodisi
preusmeri celotno zahtevo na model, ki podpira vizijo, bodisi nadomesti dele z
opisom slik, ki jih ustvari konfigurabilni vizijski model pred
zgornjim klicem. To omogoča, da ponudniki, ki delujejo samo z besedilom, brez težav obravnavajo
multimodalne podatke.

Potek:

1. Preskoči, če ciljnega modela že podpira vizijo (razen če se pojavi na
   seznamu prisilnih mostov `isVisionBridgeForcedModel`).
2. Izvleči dele slik preko `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ki delegira na **enotnega medijskega
   detektorja** `detectMediaParts()` v `open-sse/utils/mediaParts.ts` —
   edini vir resnice, ki ga deli filter združljive združbe.
   Izvlečenje je dovoljeno le za vrhnje dele oblik,
   ki jih lahko `replaceImageParts` ponovno vključi (pogodba o izvlečenju↔zamenjavi): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, in Responses API `input_image`. Vložki, ki so gnezdeni, in
   oblike, ki so samo indikatorji, so material za filter združbe in nikoli niso izvlečeni.
   Preskoči, če nič ni najdeno.
3. Razreši nastavitve časa izvajanja preko `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nove `modalityBridge*`
   nastavitve ključi zmagajo; dediščni `visionBridge*` ključi ostanejo **enokratna
   rezervna možnost** (okno za povratno delovanje). Preskoči pred katerim koli prehodom medijev, ko je
   most onemogočen.
4. Izbirnik načina (`modalityBridgeVisionMode`, glej tabelo spodaj) odloča
   o preusmeritvi proti opisu. Preusmeritev vrne `modifiedPayload` z le zamenjanim `model`,
   plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Pot opisa: omeji slike na `maxImages`, sestavi nalogo, ki je ozaveščena o nalogi,
   posvetuj se s predpomnilnikom opisov, pokliči vizijski model **vzporedno**
   (`Promise.allSettled`), in injiciraj `[Image N]: <description>` besedilne dele na
   njihovo mesto. Neuspešen opis vrne `null` in izvirni del slike je
   **ohranjen** (#4012) — razen na poti kombiniranega opisa, ko je vsak
   opis neuspešen, kjer potrjen ne-vizijski zgornji del dobi
   `(unavailable — no vision-capable provider connected)` nadomestek (#8430).
6. Vrni `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Izbirnik načina (`modalityBridgeVisionMode`)

| Način      | Privzeto | Obnašanje                                                                                                                                                                                                                                                                                 |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Dediščna heuristika, nedotaknjena (#6640/#7204): modeli brez kombinacij/`auto/` preusmerijo na najboljši vizijski model, razen če ima izvirni model že uporabne poverilnice (potem opisuje); cilji kombinacij vedno opisujejo.                                                            |
| `describe` |          | Vedno opisuj — blok preusmeritve se popolnoma preskoči; izbrani model uporabnika vedno odgovori.                                                                                                                                                                                          |
| `reroute`  |          | Prisilna preusmeritev: varnostni mehanizem za ohranjanje poverilnic modela se obide. Varnostni mehanizem za preusmeritev-**cilj** še vedno velja — ko ne obstaja uporaben vizijski cilj, zahteva preide na opis, tako da surove slike nikoli ne dosežejo samo besedilnega ozadja (#8430). |

Prisilni načini prekinjajo **pred** izvajanjem avtomatske heuristike; obnašanje `auto`
je byte-identično prejšnjemu varnostnemu mehanizmu PR-1.

#### Obseg API ključa (`visionBridgeKeyScope.ts`)

Ko API ključ klicatelja omejuje `allowedConnections`, bazene kvot
(`allowedQuotas`) ali modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most izbere le
preusmeritev in opisne modele, ki jih ključ lahko uporablja, na povezavah, ki jih ključ lahko
uporablja. Klic za opis nato vedno poteka skozi samo-zanko OmniRoute z
glavo `x-omniroute-self-loop-key-id`, tako da prejemna zahteva za klepet
ponovno uveljavlja politiko povezave in modela tega ključa. `enforceApiKeyPolicy()`
upošteva to glavo le skupaj s nosilcem samo-zanke, tako da lahko le
omeji dostop, in ID, ki se ne razreši, je zavrnjen.

Če za ključ ni dovoljen noben vizijski model, se pot opisa umakne in
zahteva preide nespremenjena, enako obnašanje kot onemogočen varnostni mehanizem (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Zahteve brez ključa in ključi brez teh omejitev se obnašajo natančno kot prej.

#### Naloga, ki je ozaveščena o opisu (`modalityBridgeVisionTaskAware`)

Privzeto **resnično**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) doda
besedilo **zadnjega uporabniškega sporočila** (skrajšano na 500 znakov) osnovnemu
opisnemu pozivu, usmerja opis v smer, kar je uporabnik dejansko vprašal
(codex-vision-proxy vzorec) in prosi vizijski model, da prepiše vidno
besedilo. Ko je zastavica izklopljena — ali ni uporabniškega besedila — se
osnovni poziv uporabi nespremenjen.

Lastni OpenAI-kompatibilni zahtevek opisne samociklične funkcije (`callVisionModelSingle()`
v `visionBridgeHelpers.ts`) vedno zahteva `image_url.detail: "high"` —
nepogojno, za vsakega klicatelja/ponudnika, ne glede na kakršen koli signal
stranke. Nizka podrobnost vzorčenja zmanjšuje natančnost OCR za natančno
nalogo prepisovanja besedila, ki jo ta poziv zahteva, zato opisni klic
vedno zahteva visoko podrobnost ne glede na to, kakšno raven podrobnosti je
uporabil prvotni prihajajoči zahtevek. To vpliva le na notranje telo
zahtevka za opis; ne spremeni, kako OmniRoute posreduje lastno `image_url.detail`
na primarni zahtevek — ta privzeto se uporablja ločeno in le za zaznane
stranke OpenCode, v `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropicova žična oblika veje opisne samociklične funkcije nima polja `detail`
in ni prizadeta s katerim koli privzetim.

#### Omejitev izhoda opisa (`modalityBridgeVisionMaxChars`)

| Ključ                          | Privzeto | Obseg             |
| ------------------------------ | -------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` ali 100–50000 |

`0` (privzeto) pomeni **brez omejitve** — opis, ki ga vrne
`callVisionModel()`, se prenese nespremenjen, kar ohranja obstoječe
vedenje. Vsaka vrednost v razponu 100–50000 skrajša opis z
`…` pripono, preden se ponovno vključi kot `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` v `src/lib/guardrails/visionBridge.ts`).
Povečajte to za naloge OCR z veliko podrobnostmi, kjer model v nadaljevanju
potrebuje celoten prepis; zmanjšajte ga, da omejite uporabo žetonov na
govorljive vizijske modele. Polje nadzorne plošče se nahaja na
naprednem panelu zavihek Vision
(`modality-bridge-max-chars` v `ModalityBridgeVisionTab.tsx`) in omeji
vsako vrednost med 1 in 99 na 100, medtem ko pusti eksplicitno `0`
neprizadeto — `0` je veljavna Zod vrednost sama po sebi
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ne le
"ne nastavljen" privzeti.

#### Predpomnilnik opisa (`modalityBridge/bridgeCache.ts`)

V pomnilniku LRU + TTL predpomnilnik za izhode opisov, deljen po celotnem procesu.
Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` z
okvirjem dolžine-predpone (brez trkov na mejah polja). Model komponenta je
**konfiguriran** mostovni model, ne model, ki je dejansko odgovoril —
`callVisionModel` se lahko interno vrne, in ključevanje po poskusu bi
fragmentiralo predpomnilnik. Neuspešni opisi nikoli niso predpomnjeni. Nastavitve:

| Ključ                           | Privzeto | Obseg   |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Normalizacija oddaljenih slik (samociklični opis/bas64 pridobitev)

Ko most pridobi **oddaljeno** sliko sam — samoklic opisne funkcije Anthropic
in pretvorba claude-wire-format base64
(`ensureBase64ImagesForClaudeWire`), oboje preko
`fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` — se rezultantni
podatkovni URI prenese skozi `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) preden se vključi v zahtevek
vizijskega modela. Prevelike slike se zmanjšajo na **2048px dolgi rob**
(kar ustreza omejitvi za spremembo velikosti, ki jo OpenAI/Anthropic že
uporabljata na strežniški strani), kar zmanjša
bajte/latenco brez spremembe tega, kar vizijski model vidi. Sprememba velikosti
uporablja `sharp`, naložen preko dinamičnega uvoza: na platformi, kjer
njegova izvorna binarna datoteka ne uspe naložiti, `normalizeDataUri()` **nikoli ne vrže**
— vrne se na prehod izvirnih bajtov, tako da pot opisa/base64-pretvorbe
vedno deluje. Bajti, ki niso slike (pridobitev, ki ni vrnila
dekodirne slike), se prav tako prenesejo nespremenjeni. Ta normalizacija je
omejena na slike, ki jih most pridobi za svoj samoklic — nikoli se ne
uporabi na surovem prehodnem tovoru klicatelja, kar je v skladu z
načelom mutacije le po izbiri (Trda pravila #20).

#### Shema nastavitev + migracija

Nova `modalityBridge*` ključi so Zod-validirani v `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trojica `modalityBridgeCache*`, in
skupina `modalityBridgeAudio*`, ki jo uporablja Avdio most. Migracija
`141_modality_bridge_settings.sql` kopira obstoječe dediščine
`visionBridge*` vrednosti v ustrezne nove ključe (idempotentno, nikoli ne
prepiše vrednosti `modalityBridge*`, ki jo je nastavil operater); dediščinski
ključi ostanejo sprejeti kot bralna rezervna možnost za en cikel izdaje.

#### Glava preglednosti + statistika

Odgovori, ki so bili spremenjeni z opisom, nosijo
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(ustvarjeno z `buildModalityBridgeHeader()` v `modalityBridge/bridgeStats.ts`,
označeno z `withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`).
Preusmerjeni zahtevki ne dobijo **nobene** glave — tovor ni bil
spremenjen in zamenjava modela je že vidna na polju `model` v telesu odgovora.

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
in `Video` ohranijo poizvedbene parametre med preklapljanjem vrednosti `tab`.
Zavihek Vision razkriva omogočanje, način, izbiro modela (vključno z
avtomatskim privzetim), nalogam prilagojeno pozivanje, napredne omejitve
časovnega izteka/slike/dolžine opisa/keša, števce
v času izvajanja in zaščiteno zahtevo za vzorec. Zavihek Audio je prav tako
aktiven: razkriva omogočanje, izbiro modela samo za STT z Auto, omejitve
časovnega izteka/max-clip, avdio števce in test vzorca `input_audio`. Zavihek Video
je funkcionalen: poroča o stanju izvajanja FFmpeg/ffprobe — eden od štirih
izrecnih stanj UI (`unknown`, medtem ko je preiskava v teku ali ni mogla
zaključiti, `restricted` na gostitelju nadzorne plošče, ki ni v zanki, kjer
je preiskava preskočena na strani odjemalca, `unavailable`, ko je bila
preiskana in potrjena kot manjkajoča, ali `available` z različicami FFmpeg/ffprobe) —
ohranja omejitve omogočanja/modela/okvira/video/časovnega izteka, filtrira
izbiro modela na modele, ki podpirajo vizijo, in razkriva video števce.

Prejšnja kartica Vision Bridge pod nastavitvami AI je povezava za
združljivost z novo stranjo; več ne vsebuje druge kopije obrazca. Medijski
ponudniki prav tako povezujejo delovne tokove Slika-v-Tekst in Govor-v-Tekst
s pripadajočimi zavihki Modality Bridge, ne da bi odstranili obstoječi
igralni prostor za Govor-v-Tekst.

**Obhod sprejema samopovezave:** ko klic za opis preusmeri skozi
OmniRoute-ovo lastno `/v1` samopovezavo (nestandardni model ponudnika),
podklic pošlje `x-omniroute-admission-bypass: internal` in je
avtoriziran z rešenim samopovezovalnim poverilom — lokalnim `sk_omniroute`
stražarjem v lokalnem načinu ali operaterjem konfiguriranim `OMNIROUTE_API_KEY` /
`ROUTER_API_KEY` okoljskim ključem (#1350), tako da lahko
`REQUIRE_API_KEY=true` namestitve še vedno izvajajo klic za opis. Obhod
se upošteva le za ta natančna poverila, tako da zunanjim strankam ni
dovoljeno, da uporabijo glavo za preskočitev sprejema.

Zgodnji privzeti nastavitve se nahajajo v `src/shared/constants/visionBridgeDefaults.ts`;
nove privzete nastavitve za način/nalogo/keš in rešitelj nastavitev se
nahajajo v `src/shared/constants/modalityBridgeDefaults.ts`. Varovalka
razkriva možnost konstruktorja `deps`, tako da lahko testi injicirajo
lažne implementacije `getSettings` in `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Zajame avdio-vezane zahteve za klepet, preden dosežejo cilj, ki ni
znan, da sprejema avdio vhod. Nikoli ne preusmeri zahteve za klepet:
avdio deli se prepisujejo preko obstoječega večdelnega končnega
točke, združljivega z OpenAI, in izbrani model klepeta nadaljuje z
besedilnimi transkripti.

Potek:

1. Razreši `supportsAudio` preko `getResolvedModelCapabilities()`. Izrecni
   metapodatki registra ponudnikov zmagajo, nato statični metapodatki modela,
   nato sinhronizirani `modalities_input`. Deklariran seznam vhodov brez
   `audio` je `false`; nobenih dokazov o zmogljivosti ostane `null`. Tako `false`
   kot `null` aktivirata konzervativni most, medtem ko `true` obide.
2. Razreši nastavitve `modalityBridgeAudio*` in izvleči deljive
   avdio dele iz vsake sporočila preko skupnega detektorja
   `detectMediaParts()`. Podprte oblike žic so OpenAI `input_audio`, `audio_url`,
   in `source.media_type: "audio/*"`. Vgrajeni avdio se zazna za
   usmerjanje, vendar ga pot za deljenje ne odstrani. Delo je omejeno z
   `modalityBridgeAudioMaxClips`; kasnejši deli ostanejo nedotaknjeni.
3. Upoštevaj konfiguriran `provider/model`, ali pa naj `selectAudioBridgeModel()`
   prehodi skozi `AUDIO_TRANSCRIPTION_PROVIDERS` v stabilnem katalogu
   in izbere prvi model z uporabnim aktivnim poverilom ponudnika.
4. `callAudioTranscription()` pretvori base64/data-URI avdio v večdelni
   `file`, ali prenese oddaljeni `audio_url` preko javno dostopne
   izhodne varovalke z DNS pinningom in omejitvijo 25 MB. Nato pošlje
   datoteko in izbrani model na lokalno `/v1/audio/transcriptions`
   samopovezavo, avtorizirano z `resolveSelfLoopBearer()`. Obstoječa pot
   za transkripcijo izvaja normalno iskanje poveril, upravljanje
   cooldown/rate-limit in razporeditev ponudnikov.
5. Uspešni klici zamenjajo svoje dele z `[Audio N]: <transcript>`. Klici
   se izvajajo z `Promise.allSettled`: posamezni neuspeh ohrani izvorni
   avdio del (#4012 pogodba). Če vsak klic ne uspe in je cilj
   dokazan kot `supportsAudio === false`, deli postanejo
   `[Audio N]: (nedostopno — noben STT ponudnik povezan)` (#8430 pogodba). Za
   neznani cilj (`null`) ostane rezultat z vsemi neuspehi nedotaknjen. Dokazan
   cilj, ki podpira le besedilo in nima uporabnega STT poverila, prejme
   enak izrecen stub brez izvajanja omrežnega klica.

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

Skupna predpomnilnik ostaja nadzorovan z `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` in `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Prekine vrhnje video dele v Chat Completions `messages` in Responses
API `input`, preden je klicana tarča brez znane naravne video podpore.
Podprte oblike so `input_video`, `video_url`, `video_source`, HTTPS URL-ji,
in `data:video/*;base64,...` podatkovni URI-ji. Navadna imena datotek v besedilu niso obravnavana
kot video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) upravlja prehod zahtevka,
preverjanje zmogljivosti/politike, agregacijo na podlagi zahtevka in
odgovor. Delo na posameznem videu — pridobivanje, predpomnilnik celotnega rezultata,
opis zaporedja sličic (ki združi katerikoli avdio transkript, ki ga je razglasil klicatelj),
in metrike/preklic/čiščenje na podlagi poskusa — je skrito za `processVideoPart` v
`videoBridgePipeline.ts`, ki se kliče enkrat na video del znotraj zanke `preCall`.
Ta modul prav tako definira eksplicitne mejne portne vrednosti `VideoMediaBrokerPort`
(pridobivanje bajtov in ekstrakcija vzorčenih sličic), `VideoAudioTranscriptionPort`
(združevanje avdio transkripta, ki ga je razglasil klicatelj, z vzorčenimi podnapisi), in
`VideoDrilldownPort` (obliko dediščine surovega skladišča). Proizvodni STT in zadrževanje sličic
so sestavljeni okoli opisnega porta preko `createVideoSttAdapter` in
`createVideoDrilldownAdapter`; slednji uporablja skupni življenjski cikel z neprosojnim ročajem.

Javni `/v1` pot zahtevka nikoli ne uvaža ali kliče podprocesa. Oddaljeni
videi se prenašajo pod mejo 50 MiB; vgrajeni base64 videi imajo
konservativno omejitev 36 MiB dekodirane velikosti na video, tako da model/sporočila/okvir
ostanejo znotraj javne omejitve sprejema JSON zahtevka 50 MiB. Dolžina vgrajenih
in ocene dekodirane velikosti se preverjajo pred dodelitvijo. HTTPS je
zahtevan na začetnem oddaljenem URL-ju in vsakem preusmeritvi, pri čemer se uporablja
obstoječi javni izhodni varovalni mehanizem z DNS pinningom. Bajti nato prečkajo natančno notranjo
`POST /api/modality-bridge/video/extract` mejo posrednika. Ta pot je tako
`LOCAL_ONLY` kot `SPAWN_CAPABLE`, sprejema le overjen, zaupanja vreden klic
znotraj procesa in nikoli ne sprejema URL, poti do datotek, izvršljivih datotek
ali seznama argumentov. Cevovod velikosti telesa API in postopkovni bralnik
inkrementalnega telesa neodvisno uveljavita omejitev vnosa posrednika 50 MiB. Njegova omejena
vrsta deluje na eni ekstrakciji naenkrat, omogoča štiri čakajoče naloge in omejuje
čakajoči vhod na 100 MiB.

Znotraj posrednika `ffprobe` bere zasebno lokalno datoteko; fiksni seznam
dovoljenih formatov izključuje sezname predvajanja in formate manifestov. Za dovoljene
MOV-družinske kontejnerje ostajajo zunanje MOV podatkovne reference privzeto onemogočene,
fiksna ukazna vrstica pa se ne odloči za njih. Tako `ffprobe` kot `ffmpeg` uporabljata
le `file` protokol bele liste, eno nit, fiksne argumentne tabele, brez lupine,
in izvršljive datoteke, ki so razrešene iz `PATH`. Pripete slike pokrovnih tokov niso
predvajalne kandidate. Vsi predvajalni tokovi morajo izpolnjevati omejitve, in
eksplicitni privzeti tok je prednosten pred determinističnim najnižjim indeksom
rezervne možnosti. Videi so omejeni na 600 sekund, 8,192 slikovnih pik na dimenzijo, in
33,554,432 izvornih slikovnih pik. FFmpeg vzorči 1–16 sredinskih JPEG sličic, zmanjša
dolgo stran na največ 1,024 slikovnih pik brez povečanja manjših vhodov, in
nikoli ne prejme URL. Vzorčenje je privzeto `uniform`. Neobvezne
`scene_aware` in eksperimentalne `segment_aware` politike opravijo en dodaten
fiksni FFmpeg prehod preko že validiranega lokalnega toka, izberejo omejene
`showinfo` časovne žige prizorov, in deterministično preklopijo na iste
uniformne sredine ob neuspehu detektorja, časovnem izteku, napačnem izhodu ali praznem
naboru kandidatov. Način zavedanja segmentov dodeli vzorčne sredine sorazmerno
validiranim časovnim intervalom prizorov; dokazi o zavedanju segmentov in obnašanje
rezervne možnosti so podrobno opisani spodaj. Trda omejitev 16 sličic se
uporabi po izbiri v vsaki politiki. Ko ima zahteva z zavedanjem prizora le
en okvirni proračun, uporablja uniformno sredino aktivnega celotnega videa ali
fokusnega okna in poroča `policyEffective: uniform`: en sam izbrani okvir prizora
ne more ohraniti obeh časovnih koncev. Klicatelj lahko neobvezno zagotovi
končno fokusno okno (`start`/`end` sekund); meje so omejene na trajanje medija,
obrnjena ali neomejena okna so zavrnjena, in vse politike vzorčenja se izvajajo
le znotraj normaliziranega intervala. Rezultantno okno je vključeno v metapodatke vzorčenja
in v nepreverjen opisni predpono, tako da lahko downstream modeli razlikujejo
fokusiran izsek od celotne časovne osi.

Fokus semantičnih podnapisov je ločena, eksplicitna nastavitev. Privzeti `full`
način analize ohranja obstoječi okvirni poziv in nikoli ne posreduje besedila
zahteve modelu podnapisov. V `focused` načinu most prebere le najnovejše
neprazno uporabniško avtorirano `text`/`input_text` iz istega Chat ali Responses
kontejnerja, ga normalizira na NFC, združi kontrolne znake in presledke,
in omeji na 500 Unicode kodnih točk. Prazen rezultat se vrne na natančen
`full` poziv. Uporaben namig je serializiran kot JSON v posebnem
nepreverjenem uporabniškem kontekstu in lahko le daje prednost opaznim podrobnostim; ne
more preklicati ločenega opozorila proti sledenju navodilom, ki so vidna
ali zvočna v mediju. Besedilni fokus nikoli ne inferira `start`/`end` ali spreminja
časovnega vzorčevalnika.

#### FU-07 strukturni segmentni dokazi

`segment_aware` uporablja en omejen predanalizni prehod nad že validiranim lokalnim video tokom. Fiksna filtrirna veriga najprej zmanjša širino na največ 320 pikslov, zazna spremembe prizorov in zamrznjene intervale, nato pa vzorči pri 1 sličici na sekundo za zameglitev, povprečno lumo in prostorske/časovne informacije. Prehod je omejen na 600 strukturnih vzorcev, eno FFmpeg/filter nit, isti `file`-only protokol in dovoljenja za kontejnerje, omejitev izhoda procesa na 1 MiB in največ 30 sekund znotraj deljenega preklica/rok brokerja. Nikoli ne sprejme ukaza, filtra, poti ali URL-ja iz zahteve.

Strukturne vrednosti so deterministični vzorčni dokazi, ne pa semantično razumevanje videa. Ne sklepajo o predmetih, dejanjih, napisih, govoru ali namenu uporabnika. Meje prizorov in zamrznitev oblikujejo segmente; pokritost zamrznitve, zameglitev, osvetlitev, prostorske podrobnosti in časovne spremembe vplivajo le na to, kako se obstoječi proračun 1–16 sličic razporedi. Popolnoma zamrznjen segment je omejen na eno sličico, medtem ko se nezamrznjeni segmenti borijo za preostali proračun. Ko meje presegajo sličice, se ohrani enotna pokritost časovnice, tako da hitri zgodnji rezi ne morejo skriti dolgega sledilnega segmenta. Meje prizorov znotraj 1-sekundne analitične ločljivosti meje zamrznitve se združijo.

Manjkajoči filtri, nepravilni/prazni dokazi, napaka detektorja ali omejitev predanalize se odprejo na točno enotno srednjo politiko. Preklic klicatelja ali rok brokerja se ne odpre: prekine v teku podproces, prepreči kasnejše pridobivanje sličic in zasebno začasno drevo se odstrani v `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generira deterministične realne FFmpeg naprave za prihranke po deduplikaciji, dodelitev proračuna za gosto gibanje, dokaze o zameglitvi/osvetlitvi/SI-TI, hitre reze z dolgim repom in lažne pozitivne rezultate pri postopnem zbledanju. Zabeleži čas stene predanalize in, kjer je `/usr/bin/time` na voljo, otroški CPU in vrhunskega RSS. Njegove kakovostne kontrole so le strukturni oraklji. Kakovost realnega modela napisov ostaja `HOLD`, ker ta naprava nima pooblaščenega končnega ali zamrznjenega sodnika. Monetarni prihranki prav tako ostajajo `HOLD`, razen če `--caption-cost-per-call-usd` zagotovi izrecno pozitivno oceno na klic; skripta nikoli ne fabricira nobenega rezultata.

Vsaka sličica je omejena na 4 MiB, vse surove sličice skupaj na 23 MiB, in serijski odgovor brokerja na 32 MiB. Zasebni začasni imenik se odstrani v `finally`. OmniRoute ne združuje FFmpeg in ne sprejema prilagojene poti do izvršljive datoteke. Pred napisovanjem most uporabi konzervativen prehod vizualne deduplikacije: vsak JPEG se zmanjša na 16×16 sivinsko polje in se primerja le z zadnjo ohranjeno sličico. Za zahtevani proračun napisov nad eno sličico, pridobitev zagotovi omejen nabor kandidatov do dvakrat tega proračuna in nikoli več kot 16 sličic. Zahtevana omejitev se uporabi šele po deduplikaciji, pri čemer se prvi in zadnji izbrani kandidati ohranijo med končnim redčenjem, ko je proračun vsaj dva. Različica
`grayscale-16x16-mean-cells-v2` politika uporablja večjo od povprečnega luma delta in razmerja thumbnail celic, katerih normalizirani delta je vsaj 0.05. Prag za podvajanje je konstantna 0.04, izbrana zaradi predvidljivosti in ne izpostavljena kot nastavitev med izvajanjem. Ta sekundarni
visoko-kontrastni signal ohranja majhne gibe in vidne spremembe besedila, ki jih lahko skrije le povprečna primerjava. Napake komparatorja ali dekoderja se odprejo in ohranijo pokritost. Izhodni metapodatki ločujejo pridobljene kandidate, uspešno uporabljene sličice in vizualne podvojitve, ki so bile zavržene.

Izrecno označen del videa lahko zahteva časovno označeno kontaktno ploščo. Most gradi največ 4-stolpci, 16-sličična JPEG mreža. Vsaka celica velikosti 512 pikslov vžge svoj izvorni časovni žig v visoko-kontrastni spodnji pas, medtem ko isti časovni žigi ostanejo v besedilnih metapodatkih za nadaljnje povezovanje in revizijo. Celoten JPEG ostaja omejen na 32 MiB. Če `sharp` ne more dekodirati ali sestaviti mreže, most preide na posamezne JPEG sličice; preklic stranke se še vedno prenese skozi operacijo plošče.

Dokazi o promociji so namerno ločeni od sintetičnega mikrobenchmarka sestave. `scripts/perf/video-bridge-contact-sheet-eval.ts` definira shemo različice A/B za resnične modele vizije, združljive z OpenAI. Meri tokene, ki jih poroča ponudnik, latenco stene od konca do konca (vključno s sestavo plošče), število klicev modela in ohranjanje dejstev, opredeljenih v manifestu. Surove odgovore modela ne zapiše v poročilo; ohranijo se le SHA-256 povzetki in ujemajoči se ID-ji dejstev. Naprava ne izvede nobenega omrežnega ali plačanega klica modela, razen če je `--execute-real` posredovan in `--model`, `OMNIROUTE_BASE_URL` in `OMNIROUTE_API_KEY` so konfigurirani. Brez tega izrecnega realnega izvajanja ostane njegov strojno berljiv sklep `HOLD`; meritve sintetičnega plačila/števila klicev same niso dokazi o promociji.

Ločen `scripts/perf/video-bridge-promotion-eval.ts` obdeluje FU-07 ali FU-09 opazovanja. Sprejem promocije zahteva vseh osem sintetičnih scenarijev plus saniran resnični posnetek, vsaj tri izmerjene ponovitve na vlogo in primer, vseh deset razglašenih metrik, zamrznjene medije/prompt/pričakovane dejanske povzetke, edinstvene ID-je opazovanj in preverjeno semensko A/B zaporedje. Potrdilo o izvedbi povezuje povzetek korpusa, natančen SHA kandidata in revizijo modela. Manjkajoče ali neveljavne meritve ostanejo `HOLD`, vključno z CPU nad 30 s, vrhunskim RSS nad 512 MiB ali predanalizo nad 30 s. To so omejitve za sprejem dokazov, ne nova garancija za izvajanje RSS.

FU-07 zahteva vsaj 98% ohranitve kakovosti in p95 latenco ne več kot 1,2x
osnovne vrednosti, poleg tega pa bodisi 0,05 absolutno uravnoteženo povprečno izboljšanje
spomina pri enakih povprečnih klicih naslovov, ali vsaj 10% manj povprečnih klicev
naslovov po deduplikaciji. FU-09 zahteva vsaj 0,85 kakovosti, 95% ohranitve, 20% p95
zmanjšanja latence in 10% zmanjšanja tokenov. Kritična izguba dejstev, skladnost
injekcij ali manjkajoča uporaba preprečuje napredovanje. Ena izvedba ne more
napredovati ničesar: `--previous-report` potrjuje dve ločeni, nepokrivajoči se,
zaporedni upravičeni izvedbi iste politike/modela revizije/kandidata/korpusa. Eksperiment
vzorčenja ne more potrditi eksperimenta kontaktne tabele.

Zbiralci naj ocenijo odgovore v pomnilniku in shranijo `responseDigest` ter
metrike in opazovalne povezave, nikoli besedila odgovora. Porabnik prav tako bere
dedne surove opazovanja, vendar tega besedila nikoli ne kopira v svoje poročila. Natančno
ena od `responseDigest` ali `rawResponseText` je sprejeta za vsako opazovanje.
Različica dovoljenega seznama ostaja prazna z nespremenljivim privzetim `hold`.
Upravičen vnos zahteva svojo referenco dokazov, politiko, revizijo modela, natančen
SHA kandidata, manifest digest in dve ločeni ID-ji izvedbe; nasprotujoči si konteksti
so zavrnjeni. Ti metapodatki so pogodba o reviziji, ne dokaz, da referenčna datoteka
vsebuje pristne meritve. Preglejte dejanske račune, preden dodate
kakršenkoli vnos. Statistična točka upravljanja in Video nadzorna plošča razkrivata
konzervativno pripravljenost. Samo konfigurirana oznaka modela ne vzpostavi njene
revizije ali delujočega SHA kandidata, zato trenutna nadzorna plošča poroča `HOLD`
namesto ponovne uporabe upravičenosti iz drugega konteksta izvedbe. Izrecna eksperimentalna
izbira ostaja ločena od napredovanja; noben privzeti se ne spremeni samodejno.

Klicatelji lahko priložijo neobvezno `transcript.cues` polje k podprti video
delu, ko že imajo usklajen tekst. Vsaka oznaka mora vsebovati `text`, končni
`start`/`end` interval znotraj preizkušene dolžine, in beljen `source`
(`client`, `embedded`, ali `audio-bridge`); `confidence` privzeto znaša
`1` in mora ostati med `0` in `1`. Natančno podvojene oznake se združijo.
OmniRoute nikoli ne začne transkripcije iz teh metapodatkov: potrjene oznake se
kopirajo v opisani rezultat z virom, zaupnostjo in intervalom, in se obravnavajo
kot nezanesljiva opazovanja ob straneh naslovov okvirjev. Neveljavno,
izven obsega, ali brez porekla besedilo se zavrne namesto da bi se mešalo v
tok naslovov. Obe kanali transkripcije v telesu zahteve normalizirata
dobavljeno poreklo na `client`, vključno s samo-izjavljenimi `embedded` ali
`audio-bridge` oznakami. Le adapter, ki ga upravlja strežnik, lahko dodeli te
zaupanja vredne oznake preko argumenta `trustedSource`, ki je samo za kodo; polje
JSON zahteve ne more doseči tega argumenta. Besedilo transkripcije ostaja
nezanesljiv medijski izvor, ne glede na njegovo poreklo, in nikoli ne sme
določati avtorizacije.

Napreden klicatelj lahko zagotovi `audioTranscript` sled za isti video;
obravnava se kot besedilo, ki ga zagotovi stranka, ne kot dokaz strežniške
transkripcije. Fuzijski šiv izvaja vizualna in avdio opazovanja pod
eno rokom in signalom za prekinitev, jih razporedi na skupni časovni
premici, združi natančne podvojene, in poroča o delnem rezultatu, ko uspe
samo ena stran. Neveljaven `audioTranscript` se zmanjša na ta delni rezultat —
vizualni opis se ohrani, avdio veja pa zabeleži saniran kodo napake —
namesto da bi se celoten video neuspešno zaključil. Na voljo po vejah, delna
označba in sanirane kode napak se ohranijo v opisanem rezultatu, v
metapodatkih zaščitnih ograj (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), v metapodatkih predpomnilnika rezultatov in v
številčnikih fuzije mostu. Privzeta pot Video Bridge ne aktivira pretvorbe govora v
besedilo ali prenosa druge kopije medijev; brez te izrecne sledi ostane
samo video.

**Ohranjanje transkripcije (#12150 P1).** To se samodejno uporablja, kadar
Video Bridge (sam po sebi opt-in) prikaže transkripcijsko oznako — ni ločene
oznake za ohranjanje. Ko zahteva prikaže katerokoli transkripcijsko oznako (klicateljem
deklarirana `transcript` ali združena `audioTranscript`), zaščitna ograja to označi
kot `videoBridgeObserved` in ustvari redigirano senco videopisa —
identična predstavitev, v kateri je telo prostega besedila vsake oznake
zamenjano z `[redacted-video-transcript]`, zgrajeno z zamenjavo strukturiranega
polja oznake pred sestavljanjem niza (nikoli z razčlenjevanjem
poenostavljenega besedila, tako da nobena vsebina oznake — nasprotna ali običajna,
vključno s telesi, ki vsebujejo `]`, kot so `[inaudible]`/`[music]` — ne more preživeti).
Ohranjeni klicni dnevnik zahteve zamenja vsak del besedila, pridobljenega iz videa,
s to redigirano senco, ujemajočo se po vsebinski enakosti; `fullText` sidro se
ponovno prebere iz končnega pred-klicnega zaščitnega ograja, tako da se ujemanje
še vedno uspe, potem ko kasnejše zaščitne ograje (maskirniki PII in
akreditivov, prioritete 10/95) prepišejo besedilo opisa na mestu in
po sistemskem pozivu/predaji/injekciji pomnilnika preoblikujejo niz sporočil. Telo,
poslano navzgor modelu, ostaja nespremenjeno. Opazovana zahteva prav tako ne
napolni trajnega pomnilnika (obe ekstrakciji iz zahteve in odgovora sta
preskočeni), tako da modelov odgovor ne more ponoviti besedila transkripcije v
pomnilniku.

**Surovi video polja (#12430).** Ko je most omogočen in podpora za
nativni video ni znana ali odsotna, definirana polja `transcript`/`audioTranscript`
tudi aktivirajo `videoBridgeObserved`, tudi po neuspehu opisa ali
omejitvi `maxVideos`. `null` in prazni nizi se štejejo; odsotna polja in
ne-video metapodatki ne. Ohranjene kopije redigirajo ta polja ali izpustijo
zahtevo, predpomnilniki/pomnilnik pa se obidejo.

Na teh rezervnih poteh postanejo veljavni klicni signali podprti `text`/`input_text` deli namesto nestandardnih polj ponudnika. Obe sledi, ki ju zagotovi zahteva, ostajata nezanesljive `client` opazovanja, z izrecnim opozorilom, da video ni bil opisan in časovni žigi niso bili preverjeni glede na medije. Obstoječi proračuni 256-signalov/64-KiB skupno in na signal veljajo za obe sledi skupaj; časovni žigi morajo ustrezati 600-sekundnemu stropu posrednika in kateremu koli zagotovljenemu fokusu. Neveljavne sledi se zavržejo, ne posredujejo se kot poljuben tekst; veljavni brat lahko še vedno ostane uporabljen, razen če je njihov skupni proračun presežen. Null/prazna polja ne dodajajo besedila. Ta rezervna pot ne doda nobenega pridobivanja medijev ali transkripcije. Polja za razširitev transkripta so odstranjena iz rezervnega video nosilca in njegovih `video_url`/`source` objektov. OpenAI seznam dovoljenih povezav ostaja strog; neznani domači video nosilci ostajajo na voljo, znani cilji samo za besedilo pa ohranjajo varne oznake. Strukturirane sence redakcije ščitijo dodano besedilo transkripta, medtem ko ostane izvirna zahteva, ki jo ima klicatelj, nespremenjena. Domače podprti cilji in onemogočeni mostovi ohranjajo svoje obstoječe obnašanje obvoda.

Dodatne ohranjene kopije uporabljajo isti signal opazovane zahteve. Suhi posnetek zahteve od odjemalca pred zaščitnim pasom, v spominu čakajoča zahteva in zgodnji dnevnik zavrnjenih zahtev strukturno nadomestijo polja transkripta v video delih; nizovni pozivi, sintetizirani s fazami cevovoda in predajo konteksta, so redigirani na mestu trajne zahteve. Trajni marker `video_content_removed` povzroči, da nadaljevanje `previous_response_id` ne uspe, namesto da bi rekonstruiral besedilo, ki je bilo namerno zavrženo. Če opazovana zahteva izgubi svojo senco redakcije pred beleženjem, ali celo ena od več video senc ne uspe ustrezati po kasnejših mutacijah zahtev, je ohranjeno telo zahteve popolnoma izpuščeno namesto da bi ohranilo delno redigiran transkript.

Za opazovano zahtevo lahko odgovor modela citira kateri koli del transkripta brez strukturirane meje signala. Njegov trajni dnevnik klicev `responseBody` je zato nadomeščen z markerjem za izpuščanje; podrobni artefakt cevovoda (ki lahko vključuje zgornje/telo odjemalca in dele toka) ni ohranjen. Semantični, idempotentni in predpomnilniki za ponavljanje razmišljanja obidejo branja in pisanja za to zahtevo. Zahteva ponudnika in odgovor, viden odjemalcu, ostajata nespremenjena. Zgodnji bajti za ohranjanje se izčrpajo iz začasnega predpomnilnika, ko je podrobni artefakt izpuščen. Kirova nepravilna opozorila o dogodkih EventStream poročajo le o številu bajtov v vsebini, nikoli o njeni vsebini ali surovi napaki JSON parserja. To ne trdi, da je bila vsaka nepovezana diagnostika ponudnika/plugin-a pregledana; širše čiščenje ohranjenega odtoka je sledeno v #11658.

Notranji `/api/modality-bridge/video/drilldown` življenjski cikel je ločen, povratni/token-avtentikacijski predpomnilni substrat. Vsaka operacija zahteva tudi kanonični neprozorni ID glavne osebe. Preden je omogočen klicatelj v produkciji, mora izpeljati ta ID iz overjenega najemnika in nikoli ne sme posredovati vrednosti, ki jo izbere odjemalec. Ključi predpomnilnika povezujejo to glavno osebo s kanoničnimi ID-ji seje in video-reference, shranjujejo le njihove ključe, pridobljene iz SHA-256, in omejujejo tako branja kot brisanje na isto glavno osebo. Predpomnilnik shranjuje največ 16 izpeljanih JPEG okvirjev na vnos, jih poteče po desetih minutah in podpira omejena branja `start`/`end` ali izrecno brisanje seje.

Vsaka glavna oseba je omejena na 16 vnosov in 64 MiB kanoničnih JPEG podatkov. Te omejitve so neodvisne od globalnega stropa 64-vnosov/256 MiB: pritisk na kvoto glavne osebe izloča le najmanj nedavno uporabljene vnose te glavne osebe, preden se upošteva globalno LRU izločanje. Potečeni vnosi se izločijo tako iz glavne osebe kot iz globalnega računanja ob dejavnosti predpomnilnika, medtem ko preklic in neuspeh validacije ne zavezujejo delne zamenjave.

Predpomnilnik zavrne nekanonični Base64, odvečno polnjenje, ne-JPEG medije, nepravilne ali skrajšane JPEG-je in JPEG-je, ki med omejenim polnim dekodiranjem `sharp` povzročijo opozorilo. Vsako sprejeto sliko ponovno kodira kot kanonični JPEG, pridobi širino in višino iz dekodiranih bajtov namesto da bi zaupal poljem klicatelja, in zavrže vse preostale poliglotne bajte namesto da bi jih ohranil. Le omejen kanonični stisnjen predpomnilnik se zaračuna obema kvotama. Omejitev JSON žice vključuje Base64 preobremenitev za strop 32 MiB dekodiranega vnosa. Vsaka shranjena derivacija beleži svoj potrjen JPEG format/rešitev, politiko vzorčenja, različico derivacije, čas ustvarjanja, strežniško izračunan hash vsebine in hash starševske reference ter hash starševske vsebine zaupanja vrednega klicatelja. Preklic se preveri med asinhronimi fazami dekodiranja/hashiranja pred atomsko zavezo predpomnilnika.

Produkcijski proizvajalec ponovno uporablja že izpeljane okvirje posrednika šele po uspešni vizualni analizi, brez drugega prenosa/ekstrakcije videa. Zahteva operater `modalityBridgeVideoDrilldownEnabled=true`, strogo po delih `drilldown: true` in ID zapisa overjenega API ključa. Vrednosti glavne osebe/seje, ki jih razglasi odjemalec, nikoli ne vzpostavijo lastništva. Brez vseh treh pogojev ne izračuna, ne spremeni velikosti ali ne ohrani dodatnih okvirjev. Neuspeh pri ohranjanju ohranja uporabni vizualni odgovor. Zahteve, ki so bile odobrene, obidejo celoten predpomnilnik rezultatov videa, tako da shranjeni rezultati nikoli ne ponavljajo rokov.

Uspešni JSON in SSE odgovori izpostavljajo največ štiri neprozorni ročaji v omejenem
`x-omniroute-video-drilldown` glavi. Pooblaščeni izvorni brskalniki lahko berejo to glavo
brez širjenja CORS politike izvora. Novi ročaji uporabljajo `v1.<32-byte random base64url
token>`, registracija pa ohranja le
njihove SHA-256 hashe. Bralnik/parser glave prav tako sprejema stare 64-hex tokene.
Avtorizirani javni potrošnik je
`GET /api/v1/video-bridge/drilldown?handle=...`, neodvisno zaščiten z
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Izrecno ohranjeno false odvzame
dostop, tudi ko je stara `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env
rezerva omogočena. Proizvodna zadrževanja ima analogno staro
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` rezervo. Obe rezervi sta privzeto izklopljeni.

Potrošnik pridobi lastništvo iz avtoriziranega ključa, uporabi politiko ključa in
vrne enak 404 za neznane, potekle in druge ključe ročajev. Sprejema
`variant=preview|standard|detail` (maksimalna JPEG dimenzija 320/640/1280, nikoli ne povečuje),
`limit=1..8` (ali stari `frames` alias, nikoli oboje), ničelno osnovano `page` in opcionalne
`start`/`end` sekunde fokusa. Podvojeni
ključni poizvedbi in obrnjen fokusni okni so zavrnjeni. Vsaka vrnjena varianta ima hash
svoje dejanske vsebine in dejanske metapodatke o ločljivosti, povezane z ohranjeno izvorno vsebino.
Variante so pridobljene ob branju, namesto da bi bile shranjene kot dodatne ohranjene kopije. JSON
odgovor, vključno z Base64/ovojem, je omejen na 32 MiB; prevelik strani vrne
413 in stranka mora zahtevati manj okvirjev. Branja preverjajo preklic okoli vsake
spremembe velikosti in ponovno preverijo veljavnost ročaja pred vrnitvijo. `DELETE` s strani lastnika je idempotentno;
izbris ali potek TTL sprosti ohranjeno izvorno vsebino in obračunavanje uporabe.

Skupna shramba je procesno-lokalna: ročaji potečejo ob ponovnem zagonu in niso prenosljivi
med neodvisnimi OmniRoute procesi. Statistika upravljanja razkriva učinkovito zadrževanje/
oddaljeno politiko in agregira le ohranjene vnose/byte, nikoli medije, reference,
glavne ID-je ali ročaje. Plošča nastavitev videa prikazuje te vrednosti in lahko ohrani
obe stikali za soglasje. Ta dokumentacija o implementaciji ni dokaz o živi namestitvi ali
promociji; sprejem pravega modela se sledi ločeno.

Okviri so podnaslovljeni zaporedno s konfiguriranim modelom videa. Prazna
preseka videa podeduje nastavitev vizije; če sta oba prazna, vizija
avtomatski usmerjevalnik izbere učinkovit model, ki podpira vizijo. Uspešni podnapisi
zamenjajo prvotni del s stabilnim `[Video description:` predpono, ki prav tako
označuje besedilo kot nezanesljivo opazovanje, pridobljeno iz medija, in pove downstream
modelom, naj ne sledijo navodilom, najdenim v mediju. Ključi predpomnilnika za podnapise
vključujejo JPEG bite, poziv, časovni žig in učinkovit model; le uspešni
podnapisi so predpomnjeni. Vnosi predpomnilnika ohranjajo dejanski uspešni model proizvajalca,
vključno z rezervnim modelom; most poroča `mixed`, ko so različni okviri
proizvedeni z različnimi modeli. Zadetek v predpomnilniku ponovno uporabi identiteto proizvajalca
namesto da bi jo preimenoval v zahtevani načrt usmerjanja. Predpomnilnik celotnega videa
je ključan za vsak vhod, ki spremeni izhod — poziv, učinkovit
model, politika vzorčenja, število okvirjev, način semantične analize, SHA-256
prstni odtis normaliziranega namiga fokusa, fokusno okno, `transcript`,
`audioTranscript` in oznaka kontaktne strani — tako da je sprememba katere koli od teh
dimenzij zadetek v predpomnilniku, nikoli zastarela ponovna uporaba. Različica politike vizualne dedupikacije,
prag in omejeno število kandidatnih okvirjev so prav tako izrecni v
ključu in metapodatkih predpomnilnika rezultatov; sprememba politike torej ne more ponovno uporabiti zastarele
opis celotnega videa. Metapodatki predpomnilnika rezultatov v4 ohranjajo način in
prstni odtis, nikoli suhe uporabniške naloge. Metapodatki zaščitne ograje poročajo tako o
zahtevanih kot učinkovitih načinih analize; zahtevan `focused` način brez
uporabnega uporabniškega besedila se poroča kot učinkovito `full`.

Zaščitna ograja izloča vsak podprt del videa, vendar ne opisuje več kot
`modalityBridgeVideoMaxVideos`. Za cilj, za katerega je dokazano, da ima
`supportsVideo === false`, neuspešni in čezmejni videi postanejo izrecni varni
besedilni označevalci, tako da noben surov video ne preživi. Ko je zmožnost neznana, ti deli
ohranijo svoj video nosilec; vsak rezervni transkript sledi zgoraj navedeni omejeni
pretvorbi besedila. Cilji z `supportsVideo === true` obidejo most.
Signal za prekinitev zahteve stranke se širi skozi prenos, posredniško vrsto,
podprocese in klice za podnapise; prekinitve se ustavijo med videi in nikoli ne odpovejo odprto
na surove medije.

Nastavitve v času izvajanja so podprte z DB in potrjene z Zod:

| Ključ                               | Privzeto    | Obseg / vedenje                                                                                        |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`     | Opcijska nastavitev v času izvajanja, opt-in                                                           |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` ohranja splošne podnapise; `focused` uporablja omejen, nezanesljiv kontekst zadnjega uporabnika |
| `modalityBridgeVideoModel`          | `""`        | Podeduje model Vision Bridge                                                                           |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                   |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` ali proporcionalno `segment_aware`; neuspeh detektorja se vrne na `uniform`   |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                    |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                         |

Zgodovinske vrednosti časovnega izteka videa, ki presegajo 120 sekund, so omejene na
rok posrednika; novi nastavitveni zapisi nad to mejo so zavrnjeni.
`GET /api/modality-bridge/video/runtime` zahteva zaupno žigosano lokalnost
loopback pred avtentikacijo ali preizkušanjem delovanja, nato zahteva upravljalsko
avtentikacijo. Vrnitev vsebuje le `available`, sanitizirane različice FFmpeg/ffprobe in fiksni
razlog, ko delovanje ni na voljo. Notranja končna točka za ekstrakcijo ni
javna API za nalaganje: zasičenost čakalne vrste vrne `503` plus `Retry-After`, odklop klicatelja
vrne `499`, in fiksni rok posrednika vrne `504`. Pretvorjeni odgovori dodajo
`video->text;model=<visionModel>;parts=<videos>` v osrednji
`x-omniroute-modality-bridge` glavi, ne da bi odstranili segmente Vizije ali Zvoka.

### Masker PII (`piiMasker.ts`)

Deluje na **obeh** stopnjah.

- **`preCall`** klonira payload, prehodi `system`, `messages`, `input` in
  `prompt` (vključno z navadnimi nizovnimi elementi) ter uporabi `processPII()` (iz
  `@/shared/utils/inputSanitizer`) na nizovnih poljih `content`/`text`. Ko
  `PII_REDACTION_ENABLED=true`, zaznani PII je redigiran v odhodnem
  payloadu. To je neodvisno od `INPUT_SANITIZER_MODE` (ki nadzira le
  politiko injiciranja pozivov). Ko je redakcija izklopljena, klic beleži število zaznav
  brez prepisovanja vsebine.
- **`postCall`** globoko klonira odgovor, izvede `sanitizePIIResponse()` plus
  masker oblike Responses-API (`maskResponsesOutput` — pokriva
  `output_text` in `output[].content[].text`). Če pride do kakršne koli redakcije,
  spremenjeni odgovor nadomesti izvirnika.

Varovalka nikoli ne blokira; le označuje (`meta.detections`,
`meta.redacted`) ali prepisuje.

### Injiciranje pozivov (`promptInjection.ts`)

Zaznava nasprotne strukture v vsebini, ki jo zagotovi uporabnik, in uveljavlja
konfigurirano politiko. Obnašanje je odvisno od okolijskih spremenljivk in možnosti
konstruktorja:

| Nastavitev   | Okoljska spremenljivka                                                                                 | Privzeto | Učinek                                                                                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omogočeno    | `INPUT_SANITIZER_ENABLED`                                                                              | `true`   | Ko je `false`, varovalka skrajša.                                                                                                                                                   |
| Način        | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`   | Politika injiciranja: `block`, `warn` ali `log`. (`redact` je sprejet za nazaj, vendar **ne** odstrani injekcijskega besedila; zahteva prepis PII nadzira `PII_REDACTION_ENABLED`.) |
| Meja blokade | `blockThreshold` možnost / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Minimalna resnost, potrebna za blokado. Srednja je privzeto le za opazovanje.                                                                                                       |

**Prednost načina** (`getMode`): klicatelj `options.mode` →
`INJECTION_GUARD_MODE` **DB funkcijska zastavica** (Nadzorna plošča → Nastavitve →
Funkcijske zastavice) → `INJECTION_GUARD_MODE` okolje → `INPUT_SANITIZER_MODE` okolje →
`warn`. Prekoračitev nadzorne plošče tako zmaga nad okoljskimi spremenljivkami, tako da uporabniški vmesnik Funkcijske zastavice nadzira delovanje varovalke v živo (brez ponovnega zagona). Branje iz DB je varno:
če pride do napake, se varovalka vrne na obnašanje, ki temelji na okolju, in ko ni
nastavljena nobena prekoračitev, je obnašanje identično rešitvi, ki temelji le na okolju.

Viri zaznavanja:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (skupni detektor
   set, ki se uporablja drugje v cevovodu).
2. Vgrajeni `DEFAULT_GUARD_PATTERNS` (trenutno `system_override_inline` in
   `markdown_system_block`, oba z resnostjo `high`).
3. Neobvezni `customPatterns`, posredovani prek možnosti konstruktorja (nizi, regex,
   ali `{ name, pattern, severity }` zapisi).

Ko `mode === "block"` **in** vsaj ena zaznava doseže prag resnosti,
`preCall` vrne `{ block: true, message: "Zahteva zavrnjena: zaznana sumljiva vsebina" }`. V `warn`/`log` načinih varovalka beleži, vendar
dovoli klic. Skupni pomočnik `evaluatePromptInjection()` je prav tako izvozil
za klicatelje, ki morajo oceniti pozive, ne da bi šli skozi register.

**Obseg skeniranja (v3.8.20):** detektor pregleda le **prvih 16 KB**
združenega besedila poziva — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtov) v
`src/shared/utils/inputSanitizer.ts`. Tako `detectInjection()` kot
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` pred izvajanjem
cikla vzorcev. Direktive injiciranja so blizu vrha vnosa, zato to omejuje CPU/GC regex
na več sto KB payloadih, ne da bi oslabilo zaznavanje (cf.
#3932, #4041).

### Masker poverilnic (`credentialMasker.ts`)

Deluje na **obeh** stopnjah, zadnji v privzeti verigi (prednost `95`). Redigira
dobro znane vzorce API-ključa / skrivnega žetona iz odhodnega
payloada (vsebina sporočila, argumenti klica orodja, rezultati orodja) **in**
odgovora ponudnika, tako da poverilnica, prilepljena v poziv (ali odmevajoča nazaj z rezultatom orodja), ni razkrita
zgornjemu ponudniku ali nazaj stranki.

- **Samo za prijavo**, enaka konvencija kot PII redakcija (Trda pravila #20-sorodno):
  onemogočeno, razen če je `settings.credentialRedactionEnabled === true` **ali**
  `CREDENTIAL_REDACTION_ENABLED=true`. Ko je izklopljeno, je zaščitni mehanizem brez učinka —
  nikoli ne blokira in nikoli ne prepisuje.
- `redactCredentials()` prehodi celotno drevo payload/odgovora (`walkValue()`,
  varno pred onesnaženjem prototipa, varno pred cikli preko `WeakSet`) in nadomesti ujemanja z
  `[REDACTED:<type>]` nadomestnim mestom, klonira le veje, ki so se dejansko
  spremenile.
- `CREDENTIAL_PATTERNS` pokriva ključe ponudnikov LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS žetone (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), plačilne ključe (Stripe, Square), oblačne
  ključe (AWS dostopni ključ, Twilio, SendGrid, Mailgun), zasebne ključe / JWT,
  povezovalne nize, ki vsebujejo poverilnice (`mongodb://user:pass@...`, itd.), in
  generični vzorec `Authorization`/`x-api-key`/`api-key`/`apikey` za vrednost glave.
  Ključi v obliki glave (`authorization`, `x-api-key`, `api-key`,
  `apikey`) so strukturno redigirani (samo vrednost, shema predpona kot
  `Bearer `/`Basic ` ohranjena) namesto preko generičnega besedilnega regexa.
- Zaščitni mehanizem nikoli ne blokira; samo prepisuje (`modifiedPayload` /
  `modifiedResponse`) in označuje (`meta.credentialsRedacted`, `meta.count`).

Zaščita pred regresijo: `tests/unit/credential-masker-guardrail.test.ts`.

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
