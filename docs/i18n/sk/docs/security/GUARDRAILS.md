# Guardrails (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Zdroj pravdy:** `src/lib/guardrails/`
> **Naposledy aktualizované:** 2026-08-29 — v3.8.51 (pôvod prepisu Video Bridge deklaruje volajúci,
> server ho zatiaľ neoveruje — spresnené podľa #11661)

Guardraily vynucujú bezpečnosť, pravidlá a transformácie obsahu na rozhraní
medzi OmniRoute a nadradenými poskytovateľmi. Každý guardrail môže kontrolovať
(a voliteľne odmietnuť, transformovať alebo anotovať) dátové časti požiadaviek
(`preCall`) a odpovede nadradených poskytovateľov (`postCall`).

Systém je navrhnutý ako **fail-open**: ak guardrail počas vykonávania vyhodí
výnimku, register zaznamená chybu a namiesto zlyhania požiadavky pokračuje
ďalším guardrailom. Blokovanie je explicitné rozhodnutie (`block: true`), nikdy
nie náhoda.

## Vstavané Ochranné Mechanizmy

Registrácia automaticky načíta šesť ochranných mechanizmov v poradí priorít pri importe
(pozri `registry.ts` → `registerDefaultGuardrails()`):

| Priorita | Názov               | Fáza(e)        | Súbor                 |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nižšie čísla priorít sa vykonávajú **prvé**.

### Vision Bridge (`visionBridge.ts`) — Modálny Most PR-1

Zachytáva požiadavky obsahujúce obrázky, ktoré sú určené pre **modely bez vízie** a buď
presmeruje celú požiadavku na model schopný vízie, alebo nahradí časti obrázkov textovými popismi vyprodukovanými konfigurovateľným modelom vízie pred
upstream volaním. To umožňuje poskytovateľom len s textom transparentne spracovávať
multimodálne dáta.

Tok:

1. Preskoč, ak cieľový model už podporuje víziu (pokiaľ sa neobjaví v
   zozname nútených mostov `isVisionBridgeForcedModel`).
2. Extrahuj časti obrázkov pomocou `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ktorá deleguje na **unifikovaný detektor médií**
   `detectMediaParts()` v `open-sse/utils/mediaParts.ts` — jediný zdroj pravdy zdieľaný s filtrom kompatibility kombinácií.
   Extrakcia je povolená len pre najvyššie úrovne častí tvarov,
   ktoré môže `replaceImageParts` znovu spojiť (zmluva o extrakcii↔nahradení): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, a Responses API `input_image`. Vnorené zásahy a
   tvary len s indikátormi sú materiálom pre kombinovaný filter a nikdy nie sú extrahované.
   Preskoč, ak neboli nájdené žiadne.
3. Rozpoznať runtime konfiguráciu pomocou `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nové kľúče nastavení `modalityBridge*`
   vyhrávajú; dedičné kľúče `visionBridge*` zostávajú **jednorazovou
   zálohou** (okno na vrátenie). Preskoč pred akoukoľvek traversou médií, keď je
   most zakázaný.
4. Výber režimu (`modalityBridgeVisionMode`, pozri tabuľku nižšie) rozhoduje
   o presmerovaní vs popise. Presmerovanie vracia `modifiedPayload` s iba
   vymeneným `model`, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Popisná cesta: obmedziť obrázky na `maxImages`, zostaviť úlohu vedomý prompt,
   konzultovať cache popisov, zavolať model vízie **paralelne**
   (`Promise.allSettled`), a injektovať textové časti `[Image N]: <description>` na
   ich miesto. Zlyhanie popisu vracia `null` a pôvodná časť obrázka je
   **zachovaná** (#4012) — okrem cesty kombinovaného popisu, keď každý
   popis zlyhá, kde potvrdený upstream bez vízie dostane
   `(unavailable — no vision-capable provider connected)` stub namiesto (#8430).
6. Vrátiť `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Výber režimu (`modalityBridgeVisionMode`)

| Režim      | Predvolený | Správanie                                                                                                                                                                                                                                                                       |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔          | Dedičná heuristika, nedotknutá (#6640/#7204): modely bez kombinácie/`auto/` presmerujú na najlepší model vízie, pokiaľ pôvodný model už nemá použiteľné poverenia (potom popis); ciele kombinácie vždy popisujú.                                                                |
| `describe` |            | Vždy popisovať — blok presmerovania je úplne preskočený; model vybraný používateľom vždy odpovedá.                                                                                                                                                                              |
| `reroute`  |            | Nútené presmerovanie: ochrana modelu s uchovanými povereniami je obídená. Ochrana poverení presmerovania-**cieľa** stále platí — ak neexistuje žiadny použiteľný cieľ vízie, požiadavka prechádza na popis, takže surové obrázky nikdy nedosiahnu backend len s textom (#8430). |

Nútené režimy skrátenia **pred** spustením automatickej heuristiky; správanie `auto`
je identické s predchádzajúcim ochranným mechanizmom PR-1.

#### Rozsah API kľúča (`visionBridgeKeyScope.ts`)

Keď API kľúč volajúceho obmedzuje `allowedConnections`, kvóty
(`allowedQuotas`) alebo modely (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most vyberá iba
modely presmerovania a popisu, ktoré môže kľúč použiť, na pripojeniach, ktoré môže
kľúč použiť. Volanie popisu potom vždy prechádza cez OmniRoute samosmyčku s
hlavičkou `x-omniroute-self-loop-key-id`, takže prijímajúca chatová požiadavka
opäť vynucuje politiku pripojenia a modelu tohto kľúča. `enforceApiKeyPolicy()`
ctí túto hlavičku iba spolu so samosmyčkovým nosičom, takže môže iba
zúžiť prístup, a id, ktoré sa nevyrieši, je zamietnuté.

Ak nie je pre kľúč povolený žiadny model vízie, popisná cesta ustúpi a
požiadavka prejde nezmenená, rovnaké správanie fail-open ako zakázaný
ochranný mechanizmus (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Požiadavky bez kľúča a kľúče bez týchto obmedzení sa správajú presne ako predtým.

#### Popisný prompt vedomý úlohy (`modalityBridgeVisionTaskAware`)

Predvolené **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) pridáva
text **poslednej správy používateľa** (skrátený na 500 znakov) k základnému
popisu, nasmerujúc popis na to, čo používateľ skutočne požiadal
(patern codex-vision-proxy) a žiada model vízie, aby prepisoval viditeľný
text. Ak je prepínač vypnutý — alebo nie je žiadny text od používateľa — základný
popis sa používa nezmenený.

Žiadosť vlastného OpenAI-kompatibilného popisu slučky (`callVisionModelSingle()`
v `visionBridgeHelpers.ts`) vždy požaduje `image_url.detail: "high"` —
nepodmienečne, pre každého volajúceho/poskytovateľa, nie je obmedzené na
žiadny signál klienta. Nízko-detailné vzorkovanie zhoršuje presnosť OCR presne
pre úlohu prepisovania textu, o ktorú tento popis žiada, takže samotný
popis vždy žiada o vysokú detailnosť bez ohľadu na to, akú úroveň detailu
použila pôvodná prichádzajúca žiadosť. To ovplyvňuje iba vnútorné telo
žiadosti o popis; nemení to, ako OmniRoute posiela vlastný `image_url.detail`
volajúceho v primárnej žiadosti — táto predvolené hodnota sa aplikuje
samostatne, a to iba pre detekované OpenCode klienty, v
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic wire-format vetva popisu vlastnej slučky nemá pole `detail` a nie je
ovplyvnená žiadnym predvoleným nastavením.

#### Limit výstupu popisu (`modalityBridgeVisionMaxChars`)

| Kľúč                           | Predvolené | Rozsah              |
| ------------------------------ | ---------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`        | `0` alebo 100–50000 |

`0` (predvolené) znamená **žiadny limit** — popis vrátený
`callVisionModel()` je preposlaný nezmenený, pričom sa zachováva existujúce
správanie. Akákoľvek hodnota v rozsahu 100–50000 skráti popis s
príponou `…` predtým, ako sa znovu spojí ako `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` v `src/lib/guardrails/visionBridge.ts`).
Zvýšte to pre úlohy OCR s vysokým detailom, kde downstream model potrebuje
plný prepis; znížte to, aby ste obmedzili používanie tokenov na rozprávajúce
modely vízie. Pole na paneli dashboard sa nachádza na karte Vízia v pokročilom
paneli (`modality-bridge-max-chars` v `ModalityBridgeVisionTab.tsx`) a
obmedzuje akúkoľvek hodnotu medzi 1 a 99 na 100, pričom explicitné `0`
ostáva nedotknuté — `0` je platná hodnota Zod sama o sebe
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nie
len "nepriradené" predvolené nastavenie.

#### Cache popisu (`modalityBridge/bridgeCache.ts`)

Cache v pamäti LRU + TTL pre výstupy popisu, zdieľaná v celom procese.
Kľúč = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s
rámovaním dĺžky (žiadne kolízie hraníc polí). Modelová zložka je
**konfigurovaný** mostový model, nie model, ktorý skutočne odpovedal —
`callVisionModel` môže interné zlyhať, a kľúčenie na základe pokusu by
fragmentovalo cache. Zlyhané popisy sa nikdy neukladajú do cache. Nastavenia:

| Kľúč                            | Predvolené | Rozsah  |
| ------------------------------- | ---------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`     | —       |
| `modalityBridgeCacheTtlMinutes` | `60`       | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`      | 10–5000 |

#### Normalizácia vzdialenej obrázku (samo-slučka popis/base64 načítanie)

Keď most sám načíta **vzdialený** obrázok — samo-volanie Anthropic popisu
a konverzia claude-wire-format do base64
(`ensureBase64ImagesForClaudeWire`), obidve cez
`fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` — výsledný
data URI prechádza cez `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) predtým, ako je vložený do žiadosti
modelu vízie. Príliš veľké obrázky sú zmenšené na **2048px dlhú hranu**
(zodpovedajúce obmedzeniu zmenšenia, ktoré OpenAI/Anthropic už aplikujú na
serveri), čo znižuje počet bajtov/latenciu pri nahrávaní bez zmeny toho,
čo model vízie vidí. Zmenšovanie používa `sharp`, načítané cez dynamický
import: na platforme, kde sa jeho natívny binárny súbor nepodarí načítať,
`normalizeDataUri()` **nikdy nevyhodí** — prejde na preposlanie pôvodných
bajtov, takže cesta popisu/base64-konverzie vždy funguje. Neneobrazové bajty
(načítanie, ktoré nevrátilo dekódovateľný obrázok) sú tiež preposlané
nedotknuté. Táto normalizácia sa vzťahuje iba na obrázky, ktoré most
načíta pre svoje vlastné samo-volanie — nikdy sa neuplatňuje na surové
preposlané dáta volajúceho, v súlade s princípom mutácie iba na opt-in
(Hard Rule #20).

#### Schéma nastavení + migrácia

Nové kľúče `modalityBridge*` sú validované Zod v `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*`, a skupina
`modalityBridgeAudio*` používaná Audio Bridge. Migrácia
`141_modality_bridge_settings.sql` kopíruje existujúce dedičné
`visionBridge*` hodnoty do zodpovedajúcich nových kľúčov (idempotentné, nikdy
neprepíše hodnotu `modalityBridge*` nastavenú operátorom); dedičné kľúče
ostávajú akceptované ako čítací záložný mechanizmus na jedno cyklus vydania.

#### Transparentnosť hlavičky + štatistiky

Odpovede transformované popisom nesú
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(vytvorené `buildModalityBridgeHeader()` v `modalityBridge/bridgeStats.ts`,
označené `withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`).
Preposlané žiadosti nedostávajú **žiadnu** hlavičku — payload bol nedotknutý a
výmena modelu je už viditeľná v poli `model` tela odpovede.

`GET /api/modality-bridge/stats` (správa autentifikácie, rovnaká úroveň ako
`GET /api/settings`) vracia v pamäti per-modality počítadlá
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` pre `vision`, `audio` a
`video`. `averageLatencyMs` používa `latencySamples`, nie všetky pokusy, ako svoj
menovateľ; operácia bez časovania nevytvára vzorku s nulovým milisekundovým
časom. `bridged` zostáva spätne kompatibilným aliasom pre úspešné
konverzie; neúspešné pokusy ho nezvyšujú.
Počítadlá sa resetujú pri reštarte procesu podľa návrhu
(telemetria, nie účtovníctvo).

#### Konfigurácia dashboardu

Vyhradená stránka dashboardu je
`/dashboard/settings/modality-bridge`. Jej URL-adresovateľné karty `Vision`, `Audio`
a `Video` zachovávajú parametre dotazu pri prepínaní hodnoty `tab`.
Karta Vision odhaľuje aktiváciu, režim, výber modelu (vrátane automatického
predvoleného), úlohu vedomé vyžiadanie, pokročilé limity časovania/obrázkov/dĺžky popisu/cache,
runtime
počítadlá a chránené vyžiadanie vzorky. Karta Audio je tiež aktívna: odhaľuje
aktiváciu, modelový výber iba pre STT s Auto, limity časovania/max-clip, audio
počítadlá a test vzorky `input_audio`. Karta Video je funkčná: hlási
runtime stav FFmpeg/ffprobe — jeden zo štyroch explicitných stavov UI (`unknown` kým
je prieskum v procese alebo sa nedá dokončiť, `restricted` na hostiteľovi dashboardu, ktorý nie je loopback, kde je prieskum preskočený na strane klienta, `unavailable` po prieskume
a potvrdení chýbania, alebo `available` s verziami FFmpeg/ffprobe) — zachováva
limity enable/model/frame/video/timeout, filtruje modelový výber na modely schopné
videnia a odhaľuje video počítadlá.

Predchádzajúca karta Vision Bridge pod nastaveniami AI je kompatibilný odkaz na
novú stránku; už nevlastní druhú kópiu formulára. Poskytovatelia médií tiež
odkazujú na pracovné postupy Image-to-Text a Speech-to-Text na zodpovedajúce karty Modality
Bridge bez odstránenia existujúceho hračkárskeho prostredia Speech-to-Text.

**Obídenie prijatia seba-smyčky:** keď volanie popisu prechádza cez vlastnú
`/v1` seba-smyčku OmniRoute (nestandardný model poskytovateľa), sub-požiadavka posiela
`x-omniroute-admission-bypass: internal` a je autentifikovaná s vyriešenou
seba-smyčkovou poverením — lokálnym `sk_omniroute` strážcom v lokálnom režime, alebo
operátorom nakonfigurovaným `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env kľúčom (#1350), takže
nasadenia s `REQUIRE_API_KEY=true` môžu stále vykonať volanie popisu. Obídenie
je uznané iba pre tieto presné poverenia, takže externí klienti nemôžu použiť
hlavičku na preskočenie prijatia.

Dedičné predvolené hodnoty žijú v `src/shared/constants/visionBridgeDefaults.ts`; nové
predvoľby režimu/úlohy/cache a rozlíšovač nastavení žijú v
`src/shared/constants/modalityBridgeDefaults.ts`. Strážca odhaľuje
možnosť konštruktora `deps`, aby testy mohli injektovať falošné `getSettings` a
`callVisionModel` implementácie.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Zachytáva audio nesúce chatové požiadavky predtým, ako dosiahnu cieľ, ktorý nie je
známy, že akceptuje audio vstup. Nikdy nepresmerováva chatovú požiadavku: audio časti sú
prepisované cez existujúci OpenAI-kompatibilný multipart koncový bod a
vybraný chat model pokračuje s textovými prepismi.

Tok:

1. Rozpoznať `supportsAudio` cez `getResolvedModelCapabilities()`. Explicitné
   metadata registrácie poskytovateľa vyhráva, potom statické modelové metadata, potom
   synchronizované `modalities_input`. Deklarovaný zoznam vstupov bez `audio` je `false`; žiadne
   dôkazy o schopnosti zostávajú `null`. Oba `false` a `null` aktivujú
   konzervatívny most, zatiaľ čo `true` ho obchádza.
2. Rozpoznať nastavenia `modalityBridgeAudio*` a extrahovať spájateľné vrcholové
   audio časti z každej správy cez zdieľaný `detectMediaParts()`
   detektor. Podporované drôtené tvary sú OpenAI `input_audio`, `audio_url` a
   `source.media_type: "audio/*"`. Vnorené audio je detekované na smerovanie, ale nie
   odstránené spájacou cestou. Práca je obmedzená `modalityBridgeAudioMaxClips`;
   neskoršie časti zostávajú nedotknuté.
3. Uznávať nakonfigurovaného `provider/model`, alebo nechať `selectAudioBridgeModel()` prechádzať
   `AUDIO_TRANSCRIPTION_PROVIDERS` v stabilnom poradí katalógu a vybrať prvý
   model s použitelnou aktívnou poverením poskytovateľa.
4. `callAudioTranscription()` konvertuje base64/data-URI audio na multipart
   `file`, alebo sťahuje vzdialený `audio_url` cez verejne iba výstupný
   strážca s DNS pinningom a limitom 25 MB. Potom POSTuje súbor a vybraný
   model na lokálnu `/v1/audio/transcriptions` seba-smyčku, autentifikovanú s
   `resolveSelfLoopBearer()`. Existujúca trasa prepisu vykonáva normálne
   vyhľadávanie poverení, spracovanie cooldown/rate-limit a odosielanie poskytovateľa.
5. Úspešné volania nahrádzajú svoje časti s `[Audio N]: <transcript>`. Volania
   bežia s `Promise.allSettled`: individuálny zlyhanie zachováva pôvodnú
   audio časť (#4012 zmluva). Ak každé volanie zlyhá a cieľ sa preukáže
   `supportsAudio === false`, časti sa stanú
   `[Audio N]: (nedostupné — žiadny STT poskytovateľ pripojený)` (#8430 zmluva). Pre
   neznámy cieľ (`null`) zostáva výsledok so všetkými zlyhaniami nedotknutý. Pre
   preukázaný cieľ iba s textom bez použiteľnej STT poverenia dostáva rovnaký explicitný
   stub bez vydania sieťového volania.

Úspešné prepisy používajú procesom široký Modality Bridge LRU/TTL cache. Kľúč kombinuje
audio referenciu, stabilný `audio-transcription` operačný
štítok a vybraný STT model; zlyhania sa nikdy neukladajú do cache. Audio pokusy aktualizujú
zdieľané `bridged`, `cacheHits`, `failures` a `lastUsedAt` počítadlá.
Transformované odpovede nesú
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nedotknuté
požiadavky nedostávajú segment Audio Bridge.

Runtime nastavenia sú DB-podporované a Zod-validované:

| Kľúč                          | Predvolené | Rozsah            |
| ----------------------------- | ---------- | ----------------- |
| `modalityBridgeAudioEnabled`  | `true`     | —                 |
| `modalityBridgeAudioModel`    | `""`       | Auto alebo STT ID |
| `modalityBridgeAudioTimeout`  | `60000`    | 1000–300000       |
| `modalityBridgeAudioMaxClips` | `3`        | 1–10              |

Zdieľaná cache zostáva riadená `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` a `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Zachytáva najvyššie úrovne video častí v Chat Completions `messages` a Responses
API `input` pred tým, ako sa zavolá cieľ bez známej natívnej podpory videa.
Podporované formáty sú `input_video`, `video_url`, `video_source`, HTTPS URL,
a `data:video/*;base64,...` dátové URI. Čisté názvy súborov v texte nie sú považované
za video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) vlastní prechod požiadaviek,
kontrolu schopností/politiky, agregáciu na požiadavku a odpoveď payload.
Práca na videu — akvizícia, cache celkového výsledku, popis sekvencie snímok
(ktorá spája akýmkoľvek volajúcim deklarovaný audio prepis) a metriky/abort/údržba
na pokus — je skrytá za `processVideoPart` v
`videoBridgePipeline.ts`, volaná raz na každú video časť v rámci slučky `preCall`.
Ten modul tiež definuje explicitné portové hranice `VideoMediaBrokerPort`
(aqvizícia bajtov a extrakcia vzorovaných snímok), `VideoAudioTranscriptionPort`
(spájanie akýmkoľvek volajúcim deklarovaného audio prepisu so vzorovanými titulkami) a
`VideoDrilldownPort` (dedičná surová forma). Produkčné STT a uchovávanie snímok
sú zložené okolo popisného portu prostredníctvom `createVideoSttAdapter` a
`createVideoDrilldownAdapter`; ten druhý používa zdieľaný nepriehľadný cyklus.

Verejná cesta požiadavky `/v1` nikdy neimportuje ani nevyvoláva podproces.
Diaľkové videá sa sťahujú pod limitom 50 MiB; inline base64 videá majú
konzervatívny limit 36 MiB dekódovaných na video, aby model/správy/obal
mohli zostať v rámci verejného JSON limitu prijatia požiadaviek 50 MiB. Dĺžka
inline a odhady dekódovanej veľkosti sú kontrolované pred alokáciou. HTTPS je
požadované na počiatočnej diaľkovej URL a každom presmerovaní, pričom sa používa
existujúca verejná iba výstupná ochrana s DNS pinningom. Bajty potom prechádzajú
presne internou hranicou `POST /api/modality-bridge/video/extract`. Táto trasa je
`LOCAL_ONLY` a `SPAWN_CAPABLE`, akceptuje iba autentifikovanú, dôveryhodnú
loopback požiadavku na proces a nikdy neprijíma URL, cestu k súborovému systému,
spustiteľný súbor alebo zoznam argumentov. API pipeline pre veľkosť tela a
inkrementálny čítač tela spracovateľa nezávisle vynucujú limit 50 MiB na vstup
brokeru. Jeho obmedzená fronta vykonáva jednu extrakciu naraz, umožňuje štyri
čakajúce úlohy a obmedzuje čakajúci vstup na 100 MiB.

Vnútri brokeru `ffprobe` číta súkromný lokálny súbor; pevný formát
zoznamu povolených formátov vylučuje playlist a manifest formáty. Pre povolené
MOV-rodinné kontajnery zostávajú externé MOV dátové odkazy predvolene zakázané,
a pevný príkaz sa do nich nezapája. Oba `ffprobe` a `ffmpeg` používajú
iba protokol `file` whitelist, jeden vlákno, pevné argumentové polia, žiadny shell
a spustiteľné súbory vyriešené z `PATH`. Pripojené obrázkové krycie prúdy nie sú
hrateľné kandidáty. Všetky hrateľné prúdy musia spĺňať limity a explicitný
predvolený prúd je preferovaný pred deterministickým najnižším indexom
náhradou. Videá sú obmedzené na 600 sekúnd, 8,192 pixelov na rozmer a
33,554,432 zdrojových pixelov. FFmpeg vzorkuje 1–16 stredových JPEG snímok,
škáluje dlhú hranu na maximálne 1,024 pixelov bez zväčšovania menších vstupov a
nikdy neprijíma URL. Vzorkovanie je predvolene `uniform`. Voliteľné
`scene_aware` a experimentálne `segment_aware` politiky vykonávajú jeden ďalší
pevný FFmpeg prechod nad už validovaným lokálnym prúdom, vyberajú obmedzené
`showinfo` časové pečiatky scén a deterministicky sa vracajú k rovnakým
uniformným stredom pri zlyhaní detektora, časovom limite, nesprávnom výstupe alebo
prázdnej sade kandidátov. Mód segment-aware prideľuje stredové vzorky
proporčne k validovaným časovým intervalom scén; dôkazy a správanie
náhrady segment-aware sú podrobne popísané nižšie. Pevný limit 16 snímok je
aplikovaný po výbere v každej politike. Keď má požiadavka s vedomím scény iba
rozpočet na jednu snímku, používa uniformný stred aktívneho celého videa alebo
fokusového okna a hlási `policyEffective: uniform`: jedna vybraná snímka scény
nemôže zachovať oba časové konce. Volajúci môže voliteľne poskytnúť
obmedzené fokusové okno (`start`/`end` sekundy); hranice sú obmedzené na
trvanie médií, obrátené alebo neobmedzené okná sú zamietnuté a všetky vzorkovacie
politiky sa vykonávajú iba v rámci normalizovaného intervalu. Výsledné
okno je zahrnuté v metadátach vzorkovania a v prefixe nedôveryhodného popisu,
aby mohli downstream modely rozlíšiť zameraný úryvok od celej časovej osi.

Sémantické zameranie titulkov je samostatné, explicitné nastavenie. Predvolený
`full` analytický režim zachováva existujúci rámcový prompt a nikdy neposiela
text požiadavky do modelu titulkov. V `focused` režime most číta iba najnovší
neprázdny používateľom vytvorený `text`/`input_text` z rovnakého kontajnera Chat
alebo Responses, normalizuje ho na NFC, zlučuje ovládacie znaky a biele znaky
a obmedzuje ho na 500 Unicode kódových bodov. Prázdny výsledok sa vracia k
presnému `full` promptu. Použiteľný náznak je serializovaný ako JSON v
vyhradenom bloku nedôveryhodného používateľského kontextu a môže iba uprednostniť
pozorovateľné detaily; nemôže prepisovať samostatné varovanie proti
nasledovaniu pokynov viditeľných alebo počuteľných v médiu. Textové zameranie
nikdy neodvodzuje `start`/`end` alebo nemení časového vzorkovača.

#### FU-07 dôkazy o štrukturálnych segmentoch

`segment_aware` používa jeden obmedzený predanalyzačný prechod nad už validovaným miestnym video streamom. Pevný filter reťazec najprv zmenšuje na maximálne 320 pixelov na šírku, detekuje zmeny scén a zmrazené intervaly, potom vzorkuje 1 snímku za sekundu pre rozmazanie, priemernú luminiscenciu a priestorové/časové informácie. Prechod je obmedzený na 600 štrukturálnych vzoriek, jeden FFmpeg/filter vlákno, rovnaký `file`-only protokol a povolené kontajnery, obmedzenie výstupu procesu na 1 MiB a maximálne 30 sekúnd v rámci zdieľaného zrušenia/deadline brokera. Nikdy neprijíma príkaz, filter, cestu alebo URL z požiadavky.

Štrukturálne hodnoty sú deterministické vzorkovacie dôkazy, nie sémantické porozumenie videu. Neodvodzujú subjekty, akcie, titulky, reč ani úmysel používateľa. Hranice scén a zmrazenia tvoria segmenty; pokrytie zmrazenia, rozmazanie, expozícia, priestorové detaily a časová zmena ovplyvňujú iba to, ako je existujúci rozpočet 1–16 snímok rozdelený. Úplne zmrazený segment je obmedzený na jednu snímku, zatiaľ čo nezmrazené segmenty súťažia o zvyšný rozpočet. Keď hranice prevyšujú snímky, zachováva sa rovnomerné pokrytie časovej osi, takže rýchle skoré strihy nemôžu skryť dlhý nasledujúci segment. Hranice scén v rámci 1-sekundovej analýznej rozlíšenia zmrazenia sú zlúčené.

Chýbajúce filtre, nesprávne/ prázdne dôkazy, chyba detektora alebo obmedzený predanalyzačný časový limit zlyhávajú otvorene na presnú uniformnú politiku stredného bodu. Zrušenie volajúceho alebo deadline brokera nezlyháva otvorene: ukončuje prebiehajúci subprocess, zabraňuje neskoršiemu extrahovaniu snímok a súkromný dočasný strom je odstránený v `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuje deterministické reálne FFmpeg zariadenia pre úspory po deduplikácii titulkov, husté rozdelenie rozpočtu pohybu, dôkazy o rozmazaní/expozícii/SI-TI, rýchle strihy s dlhým chvostom a falošné pozitíva pri postupnom vyblednutí. Zaznamenáva čas predanalýzy a, kde je k dispozícii `/usr/bin/time`, detekuje CPU a vrcholný RSS. Jeho kvalitatívne kontroly sú iba štrukturálne orákula. Skutočná kvalita modelu titulkov zostáva `HOLD`, pretože tento systém nemá autorizovaný koncový bod alebo zmrazeného sudcu. Finančné úspory tiež zostávajú `HOLD`, pokiaľ `--caption-cost-per-call-usd` neposkytne explicitný pozitívny odhad na volanie; skript nikdy nevytvára ani jeden výsledok.

Každá snímka je obmedzená na 4 MiB, všetky surové snímky spolu na 23 MiB a serializovaná odpoveď brokera na 32 MiB. Súkromný dočasný adresár je odstránený v `finally`. OmniRoute nezlučuje FFmpeg a neprijíma vlastnú cestu k spustiteľnému súboru. Pred titulkovaním most aplikuje konzervatívny vizuálny deduplikáčný prechod: každý JPEG je zredukovaný na 16×16 odtieňov šedej a porovnáva sa iba s poslednou zachovanou snímkou. Pre požadovaný rozpočet titulkov nad jednu snímku, extrakcia poskytuje obmedzený kandidátsky bazén až do dvojnásobku tohto rozpočtu a nikdy viac ako 16 snímok. Požadovaný limit sa aplikuje iba po deduplikácii, pričom prvé a posledné vybrané kandidáty sú zachované počas konečného zúženia, keď je rozpočet aspoň dva. Verziovaná politika `grayscale-16x16-mean-cells-v2` používa väčšiu z priemernej luminiscenčnej delta a pomeru buniek miniatury, ktorých normalizovaná delta je aspoň 0.05. Prah duplikátov je konštanta 0.04, zvolená pre predvídateľnosť, nie je vystavená ako nastavenie behu. Tento sekundárny signál s vysokým kontrastom zachováva malé pohyby a viditeľné zmeny textu, ktoré môže porovnanie iba s priemerom skryť. Chyby porovnávača alebo dekodéra zlyhávajú otvorene a zachovávajú pokrytie. Výstupné metadáta oddeľujú extrahovaných kandidátov, úspešne použitých snímok a vizuálne duplikáty, ktoré boli zamietnuté.

Výslovne označená časť videa môže požiadať o časovo označený kontaktný list. Most vytvára maximálne 4-stĺpcovú, 16-snímkovú JPEG mriežku. Každá bunka s rozmermi 512 pixelov vypáli svoj zdrojový časový údaj do vysoko kontrastného spodného pásu, zatiaľ čo rovnaké časové údaje zostávajú v textových metadátach pre downstream asociáciu a audit. Celý JPEG zostáva obmedzený na 32 MiB. Ak `sharp` nemôže dekódovať alebo zostaviť mriežku, most prechádza na jednotlivé JPEG snímky; zrušenie klienta sa stále šíri cez operáciu listu.

Dôkazy o propagácii sú zámerne oddelené od syntetického zloženia mikrobenchmarku. `scripts/perf/video-bridge-contact-sheet-eval.ts` definuje schému verziovaného A/B systému pre reálne modely vízie kompatibilné s OpenAI. Meria poskytovateľom hlásené tokeny, latenciu od začiatku do konca (vrátane zloženia listu), počet volaní modelu a faktickú retenciu definovanú manifestom. Surové odpovede modelu nie sú zapísané do správy; iba SHA-256 digesty a zodpovedajúce ID faktov sú zachované. Systém nerobí žiadne sieťové alebo platené volanie modelu, pokiaľ nie je zadané `--execute-real` a `--model`, `OMNIROUTE_BASE_URL` a `OMNIROUTE_API_KEY` sú nakonfigurované. Bez tohto explicitného reálneho behu zostáva jeho strojovo čitateľný verdikt `HOLD`; syntetické merania payload/počet volaní samy o sebe nie sú dôkazom o propagácii.

Samostatný `scripts/perf/video-bridge-promotion-eval.ts` spracováva pozorovania FU-07 alebo FU-09. Prijatie propagácie vyžaduje všetkých osem syntetických scenárov plus sanitizovaný reálny klip, aspoň tri merané opakovania na rolu a prípad, všetkých desať deklarovaných metrík, digesty zmrazených médií/promptov/očakávaných faktov/nastavení, jedinečné ID pozorovaní a overený zasadený A/B poriadok. Potvrdenie vykonania viaže digest corpus, presný SHA kandidáta a revíziu modelu. Chýbajúce alebo neplatné merania zostávajú `HOLD`, vrátane CPU nad 30 s, vrcholného RSS nad 512 MiB alebo predanalýzy nad 30 s. Tieto sú obmedzeniami na prijatie dôkazov, nie novou zárukou vynútenia RSS behu.

FU-07 vyžaduje aspoň 98% zachovanie kvality a p95 latenciu nie viac ako 1.2x
základnej hodnoty, plus buď 0.05 absolútny vyvážený priemerný zisk v pripomienkach pri
rovnakých priemerných volaniach titulkov, alebo aspoň 10% menej priemerných volaní titulkov po deduplikácii. FU-09 vyžaduje aspoň 0.85 kvalitu, 95% zachovanie, 20% zníženie p95 latencie
a 10% zníženie tokenov. Kritická strata faktov, dodržiavanie injekcií alebo
chýbajúce použitie bráni povýšeniu. Jedno vykonanie nemôže povýšiť nič:
`--previous-report` potvrdzuje dve odlišné, neprekrývajúce sa, po sebe idúce
spôsobilé vykonania tej istej politiky/modelu revízie/kandidáta/korpusu. A
experiment so vzorkovaním nemôže potvrdiť experiment s kontaktnými listami.

Zberatelia by mali hodnotiť odpovede v pamäti a uložiť `responseDigest` plus
metriky a väzby pozorovaní, nikdy text odpovede. Spotrebiteľ tiež číta
dedičstvo surových pozorovaní, ale nikdy nekopíruje tento text do svojich správ. Presne
jeden z `responseDigest` alebo `rawResponseText` je akceptovaný pre každé pozorovanie.
Verziovaný povolený zoznam zostáva prázdny s nemenným predvoleným `hold`. Spôsobilý
záznam vyžaduje svoj referenčný dôkaz, politiku, revíziu modelu, presný
SHA kandidáta, manifest digest a dve odlišné ID behu; konfliktné kontexty
sú zamietnuté. Tieto metadata sú audítorskou zmluvou, nie dôkazom, že odkazovaný
súbor obsahuje skutočné merania. Skontrolujte skutočné príjmy pred pridaním
akéhokoľvek záznamu. Štatistiky správy a Video panel odhaľujú konzervatívnu
pripravenosť. Konfigurovaný alias modelu sám o sebe nezakladá jeho revíziu alebo
bežiaci SHA kandidáta, takže aktuálny panel hlási `HOLD` namiesto
znovupoužívania spôsobilosti z iného kontextu vykonania. Explicitný experimentálny
výber zostáva oddelený od povýšenia; žiadne predvolené nastavenie sa automaticky nemení.

Volajúci môžu pripojiť voliteľné pole `transcript.cues` k podporovanej časti videa,
keď už majú zarovnaný text. Každý cue musí obsahovať `text`, konečný `start`/`end`
interval v rámci skúmanej dĺžky a biely zoznam `source` (`client`, `embedded` alebo `audio-bridge`); `confidence` predvolene je
`1` a musí zostať medzi `0` a `1`. Presne duplicitné cue sú zlučované.
OmniRoute nikdy nezačne transkripciu z týchto metadát: validované cue sú
kopírované do opísaného výsledku so zdrojom, dôverou a intervalom, a
sú zobrazené ako nedôveryhodné pozorovania spolu s titulkami rámca. Neplatný,
mimo rozsahu, alebo bez pôvodu text je zamietnutý namiesto toho, aby bol zmiešaný do
prúdu titulkov. Obe kanály textu požiadavky normalizujú dodaný
pôvod na `client`, vrátane samo-oznámených `embedded` alebo `audio-bridge`
označení. Iba adaptér vlastnený serverom môže priradiť tieto dôveryhodné označenia prostredníctvom
argumentu iba pre kód `trustedSource`; pole JSON požiadavky nemôže dosiahnuť
tento argument. Text transkripcie zostáva nedôveryhodný obsah odvodený od médií,
bez ohľadu na jeho pôvod, a nikdy nesmie určovať autorizáciu.

Pokročilý volajúci môže poskytnúť stopu `audioTranscript` pre to isté video;
je považovaná za text poskytnutý klientom, nie dôkaz serverovej transkripcie.
Fúzny šev spúšťa vizuálne a audio pozorovania pod
jedným termínom a signálom na zrušenie, usporiada ich na spoločnej časovej osi, zlučuje
presné duplikáty a hlási čiastočný výsledok, keď iba jedna strana uspeje.
Neplatný `audioTranscript` degraduje na ten čiastočný výsledok — vizuálny
popis je zachovaný a audio vetva zaznamenáva sanitizovaný kód zlyhania —
namiesto toho, aby zlyhal celý video. Dostupnosť na vetve, čiastočná vlajka
a sanitizované kódy zlyhania sú zachované v opísanom výsledku, v
metadata strážneho plota (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), v metadata cache výsledkov a v počítadlách fúzie mosta. Predvolená cesta Video Bridge nevyžaduje prevod reči na text
ani nestiahne druhú kópiu médií; bez tejto explicitnej stopy zostáva
iba video.

**Zachovanie transkripcie (#12150 P1).** Toto sa automaticky uplatňuje vždy, keď
Video Bridge (sám o sebe opt-in) vykreslí cue transkripcie — neexistuje žiadna samostatná
vlajka pre zachovanie. Keď požiadavka vykreslí akýkoľvek cue transkripcie (volajúci deklarovaný
`transcript` alebo fúzovaný `audioTranscript`), strážny plot ho
označuje ako `videoBridgeObserved` a vytvára redigovaný tieň video popisu —
identické vykreslenie, v ktorom je telo voľného textu každého cue nahradené
`[redacted-video-transcript]`, vytvorené substitúciou štruktúrovaného poľa cue
pred zostavením reťazca (nikdy nie analýzou zplošteného textu, takže žiadny obsah cue —
adversariálny alebo obyčajný, vrátane telies obsahujúcich `]`, ako
`[inaudible]`/`[music]` — nemôže prežiť). Uložené telo požiadavky logu
vymení každú časť textu odvodeného od videa za ten redigovaný tieň, zodpovedajúci obsahu
rovnosti; `fullText` kotva sa znovu číta z dokončeného predvolania strážneho plota,
takže zhod stále úspešne prebieha po neskorších reťazových strážnych plotoch (maskovače PII a
credential, priority 10/95) prepíšu text popisu na mieste a
po systémovom výzve/predaní/injekcii pamäte preformátujú pole správ. Telo odoslané nahor modelu zostáva nezmenené. Pozorovaná požiadavka tiež nepopulárne
žiadnu trvalú pamäť (obidve extrakcie odvodené od požiadavky a odpovede sú preskočené),
takže odpoveď modelu nemôže odrážať text transkripcie do pamäte.

**Surové video polia (#12430).** Keď je most povolený a natívna podpora videa je neznáma alebo chýba, definované polia `transcript`/`audioTranscript` tiež aktivujú `videoBridgeObserved`, aj po zlyhaní popisu alebo limite `maxVideos`. `null` a prázdne reťazce sa počítajú; chýbajúce polia a nevideo metadata nie. Zachované kópie redigujú tieto polia alebo vynechávajú požiadavku, a cache/pamäť sú obídené. Zásielka poskytovateľa zostáva nezmenená.

Dodatočné uchované kópie používajú rovnaký signál pozorovanej požiadavky. Surový snímok klientskej požiadavky pred ochranou, požiadavka čakajúca v pamäti a log predčasne zamietnutej požiadavky štrukturálne nahrádzajú polia prepisu vo video častiach; reťazcové výzvy syntetizované fázami pipeline a odovzdávanie kontextu sú redigované na mieste uchovanej požiadavky. Uložený marker `video_content_removed` spôsobuje, že pokračovanie `previous_response_id` zlyhá uzavretím, namiesto toho, aby sa rekonštruoval text, ktorý bol úmyselne odmietnutý. Ak pozorovaná požiadavka stratí svoj redakčný tieň pred logovaním, alebo ak sa dokonca jeden z niekoľkých video tieňov neshoduje po neskorších mutáciách požiadavky, uchovaná požiadavka je úplne vynechaná namiesto toho, aby sa uchoval čiastočne redigovaný prepis.

Pre pozorovanú požiadavku môže odpoveď modelu citovať akúkoľvek časť prepisu bez štruktúrovaného hranice náznaku. Jej uložený log volania `responseBody` je preto nahradený markerom vynechania; podrobný artefakt pipeline (ktorý môže obsahovať upstream/klientské telá a časti streamu) nie je uchovaný. Sémantické, idempotentné a reasoning-replay cache obchádzajú čítania a zápisy pre túto požiadavku. Požiadavka poskytovateľa a klientom viditeľná odpoveď zostávajú nezmenené. Počiatočné keepalive bajty sú odčerpané z dočasného bufferu, keď je podrobný artefakt vynechaný. Kirova varovná správa o nesprávnom EventStream hlási iba počet bajtov payloadu, nikdy jeho obsah alebo surovú chybu JSON parsera.
To netvrdí, že každá nesúvisiaca diagnostika poskytovateľa/pluginu bola auditovaná; širšie uchovanie sinky je sledované v #11658.

Interný životný cyklus `/api/modality-bridge/video/drilldown` je samostatný, loopback/token-authentifikovaný cache substrát. Každá operácia tiež vyžaduje kanonické nepriehľadné ID hlavného subjektu. Predtým, ako je povolený volajúci v produkcii, musí odvodiť toto ID z autentifikovaného nájomcu a nikdy nesmie poslať hodnotu vybranú klientom. Kľúče cache viažu tento hlavný subjekt na kanonické ID relácie a video-referencie, ukladajú iba ich kľúče odvodené z SHA-256 a obmedzujú čítania a vymazanie na rovnaký hlavný subjekt. Cache uchováva maximálne 16 odvodených JPEG snímok na položku, vyprší ich po desiatich minútach a podporuje obmedzené čítania `start`/`end` alebo explicitné vymazanie relácie.

Každý hlavný subjekt je obmedzený na 16 položiek a 64 MiB kanonických JPEG dát. Tieto limity sú nezávislé od globálneho stropu 64 položiek/256 MiB: tlak na kvótu hlavného subjektu vyháňa iba najmenej nedávno používané položky tohto hlavného subjektu predtým, ako sa zváži globálne LRU vyháňanie. Expirujúce položky sú vyčistené z účtovania hlavného subjektu aj globálneho pri aktivite cache, zatiaľ čo zrušenie a zlyhanie validácie nezaväzujú čiastočnú náhradu.

Cache odmieta nekanonické Base64, nadbytočné vyplnenie, ne-JPEG médiá, nesprávne alebo skrátené JPEG a JPEG, ktoré produkujú varovanie počas obmedzeného dekódovania celej snímky `sharp`. Každý prijatý obrázok znovu kóduje ako kanonický JPEG, odvádza šírku a výšku z dekódovaných bajtov namiesto dôvery v polia volajúceho a odmieta akékoľvek koncové polyglot bajty namiesto ich uchovania. Iba obmedzený kanonický komprimovaný buffer je účtovaný na obidve kvóty. Limit JSON wire zahŕňa Base64 overhead pre strop dekódovaného vstupu 32 MiB. Každé
uložené odvodenie zaznamenáva svoj validovaný JPEG formát/rozlíšenie, politiku vzorkovania, verziu odvodenia, čas vytvorenia, serverom vypočítaný hash obsahu a hash rodičovskej referencie plus hash rodičovského obsahu dôveryhodného volajúceho. Zrušenie sa kontroluje medzi asynchrónnymi fázami dekódovania/hashovania pred atómovým potvrdením cache.

Producent v produkcii znovu používa už odvodené broker snímky iba po úspešnej vizuálnej analýze, bez druhého sťahovania/extrakcie videa. Vyžaduje operátora `modalityBridgeVideoDrilldownEnabled=true`, prísne per-part `drilldown: true` a autentifikovaný ID záznam API-kľúča. Klientom deklarované hodnoty hlavného subjektu/relácie nikdy nezakladajú vlastníctvo. Bez všetkých troch podmienok nehashuje, nezmenšuje ani neuchováva ďalšie snímky. Zlyhanie uchovania zachováva použiteľnú vizuálnu odpoveď. Súhlasné požiadavky obchádzajú cache výsledkov celého videa, takže uložené výsledky nikdy neprehrávajú handle.

Úspešné JSON a SSE odpovede odhaľujú maximálne štyri nepriehľadné handle v obmedzenom hlavičke `x-omniroute-video-drilldown`. Autorizované pôvody prehliadača môžu čítať túto hlavičku bez rozšírenia politiky CORS pôvodu. Nové handle používajú `v1.<32-byte random base64url token>`, a registrácia uchováva iba
ich SHA-256 hash. Čítač/analýza hlavičky tiež akceptuje dedičné 64-hex tokeny. Autentifikovaný verejný spotrebiteľ je
`GET /api/v1/video-bridge/drilldown?handle=...`, nezávisle zabezpečený `modalityBridgeVideoDrilldownRemoteEnabled=true`. Explicitne uchovaný falošný odníma prístup, aj keď je povolený dedičný `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env fallback. Produkčné uchovanie má analógový dedičný `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Obe fallbacky sú predvolene vypnuté.

Spotrebiteľ odvádza vlastníctvo z autentifikovaného kľúča, aplikuje politiku kľúča a vracia rovnaké 404 pre neznáme, expirujúce a handle iného kľúča. Akceptuje `variant=preview|standard|detail` (maximálne JPEG rozmer 320/640/1280, nikdy neupscaled), `limit=1..8` (alebo dedičný alias `frames`, nikdy oboje), nula-založenú `page` a voliteľné `start`/`end` sekundy zamerania. Duplicitné
kľúče dotazu a obrátené okná zamerania sú odmietnuté. Každý vrátený variant má hash svojho skutočného obsahu a skutočné rozlíšenie metadát, prepojené na uchovaný zdroj. Variants sú odvodené pri čítaní, namiesto toho, aby boli uložené ako extra uchované kópie. JSON odpoveď, vrátane Base64/envelope, je obmedzená na 32 MiB; nadmerná stránka vracia 413 a klient musí požiadať o menej snímok. Čítania kontrolujú zrušenie okolo každého zmenšenia a znovu kontrolujú platnosť handle pred vrátením. `DELETE` vlastníkom je idempotentné; vymazanie alebo vypršanie TTL uvoľňuje uchovaný zdroj a účtovanie použitia.

Zdieľaný obchod je lokálny pre proces: handle vypršia po reštarte a nie sú prenosné medzi nezávislými procesmi OmniRoute. Štatistiky správy odhaľujú efektívnu politiku uchovávania/ďalšieho prenosu a agregované uchované položky/bajty, nikdy nie médiá, referencie, ID hlavných používateľov alebo handle. Panel nastavení videa zobrazuje tieto hodnoty a môže uchovávať oba prepínače súhlasu. Táto dokumentácia implementácie nie je dôkazom o nasadení alebo propagácii; akceptácia reálneho modelu sa sleduje samostatne.

Rámce sú titulkované sekvenčne s nakonfigurovaným modelom videa. Prázdny prepis videa dedí nastavenie vízie; ak sú oba prázdne, automatický smerovač vízie vyberie efektívny model schopný vízie. Úspešné titulky nahrádzajú pôvodnú časť stabilným prefixom `[Video description:` ktorý tiež označuje text ako nedôveryhodnú pozorovanie odvodené z médií a hovorí downstream modelom, aby sa neriadili pokynmi nájdenými v médiu. Kľúče vyrovnávacej pamäte titulkov rámcov obsahujú JPEG bajty, výzvu, časovú pečiatku a efektívny model; iba úspešné titulky sú vyrovnávané. Záznamy v cache uchovávajú skutočný úspešný model producenta, vrátane záložného modelu; most hlási `mixed`, keď rôzne rámce boli vyprodukované rôznymi modelmi. Zásah do cache opätovne používa tú identitu producenta namiesto toho, aby ju prelabeloval ako požadovaný plán smerovania. Cache výsledkov celého videa je kľúčovaná na každý vstup, ktorý mení výstup — výzva, efektívny model, politika vzorkovania, počet rámcov, režim sémantickej analýzy, SHA-256 odtlačok normalizovanej nápovedy, okno zamerania, `transcript`, `audioTranscript` a vlajka kontaktnej stránky — takže zmena akýchkoľvek z týchto dimenzií je zásah do cache, nikdy zastarané opätovné použitie. Verzia politiky vizuálnej deduplikácie, prah a obmedzený počet kandidátskych rámcov sú tiež explicitné v kľúči a metadátach vyrovnávacej pamäte výsledkov; zmena politiky teda nemôže opätovne použiť zastaraný popis celého videa. Metadata vyrovnávacej pamäte výsledkov v4 uchováva režim a odtlačok, nikdy surovú úlohu používateľa. Metadata ochranného zábradlia hlásia ako požadované, tak aj efektívne režimy analýzy; požadovaný režim `focused` bez použiteľného textu používateľa je hlásený ako efektívne `full`.

Ochranné zábradlie extrahuje každú podporovanú časť videa, ale nepopisuje viac ako `modalityBridgeVideoMaxVideos`. Pre cieľ, ktorý sa preukázal ako `supportsVideo === false`, sa zlyhané a nadlimitné videá stávajú explicitnými bezpečnými textovými značkami, takže žiadne surové video neprežije. Keď je schopnosť neznáma, tieto časti zostávajú nedotknuté. Ciele s `supportsVideo === true` obchádzajú most. Signál na zrušenie požiadavky klienta sa šíri cez sťahovanie, frontu brokerov, podprocesy a volania titulkov; zrušenia sa zastavujú medzi videami a nikdy neotvárajú na surové médiá.

Nastavenia za behu sú podporované DB a validované Zod:

| Kľúč                                | Predvolená hodnota | Rozsah / správanie                                                                                           |
| ----------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`            | Voliteľné nastavenie za behu, opt-in                                                                         |
| `modalityBridgeVideoAnalysisMode`   | `"full"`           | `full` uchováva všeobecné titulky; `focused` používa obmedzený, nedôveryhodný kontext posledného používateľa |
| `modalityBridgeVideoModel`          | `""`               | Dediť model mosta vízie                                                                                      |
| `modalityBridgeVideoFrameCount`     | `8`                | 1–16                                                                                                         |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`        | `uniform`, `scene_aware`, alebo proporcionálne `segment_aware`; zlyhanie detektora prechádza na `uniform`    |
| `modalityBridgeVideoMaxVideos`      | `1`                | 1–4                                                                                                          |
| `modalityBridgeVideoTimeout`        | `120000`           | 1000–120000 ms                                                                                               |

Hodnoty časového limitu pre persistované videá z predchádzajúcich verzií nad 120 sekúnd sú obmedzené na termín brokerov; nové nastavenia nad tento limit sú odmietnuté. `GET /api/modality-bridge/video/runtime` vyžaduje dôveryhodnú pečiatku lokality pred autentifikáciou alebo prieskumom behu, potom vyžaduje autentifikáciu správy. Vracia iba `available`, sanitizované verzie FFmpeg/ffprobe a fixný dôvod, keď je beh nedostupný. Interný extrakčný koncový bod nie je verejným API na nahrávanie: saturácia fronty vracia `503` plus `Retry-After`, odpojenie volajúceho vracia `499`, a fixný termín brokerov vracia `504`. Prevedené odpovede pridávajú `video->text;model=<visionModel>;parts=<videos>` do centrálneho `x-omniroute-modality-bridge` hlavičky bez odstránenia segmentov vízie alebo audia.

### PII Masker (`piiMasker.ts`)

Beží na **oboch** fázach.

- **`preCall`** klonuje payload, prechádza `system`, `messages`, `input` a `prompt` (vrátane obyčajných reťazcových položiek) a aplikuje `processPII()` (z `@/shared/utils/inputSanitizer`) na reťazcové polia `content`/`text`. Keď je `PII_REDACTION_ENABLED=true`, zistené PII je redigované v odchádzajúcom payload. Toto je nezávislé od `INPUT_SANITIZER_MODE` (ktorý iba ovláda politiku injekcie výzvy). Keď je redigovanie vypnuté, volanie zaznamenáva počty detekcie bez prepisovania obsahu.
- **`postCall`** hlboko klonuje odpoveď, spúšťa `sanitizePIIResponse()` plus maskér tvaru Responses-API (`maskResponsesOutput` — pokrýva `output_text` a `output[].content[].text`). Ak dôjde k akémukoľvek redigovaniu, upravená odpoveď nahrádza pôvodnú.

Ochranné zábradlie nikdy nezablokuje; iba anotuje (`meta.detections`, `meta.redacted`) alebo prepisuje.

### Prompt Injection (`promptInjection.ts`)

Detekuje nepriateľské štruktúry v používateľom poskytnutom obsahu a vynucuje
konfigurovanú politiku. Správanie je riadené premennými prostredia a možnosťami
konštruktora:

| Nastavenie      | Env var                                                                                                | Predvolené | Účinok                                                                                                                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Povolené        | `INPUT_SANITIZER_ENABLED`                                                                              | `true`     | Keď je `false`, strážna bariéra sa skráti.                                                                                                                                                         |
| Mód             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`     | Politika injekcie: `block`, `warn` alebo `log`. (`redact` je akceptované pre spätnú kompatibilitu, ale **neodstráni** text injekcie; požiadavka na prepis PII je riadená `PII_REDACTION_ENABLED`.) |
| Prah blokovania | `blockThreshold` možnosť / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`     | Minimálna závažnosť potrebná na blokovanie. Stredná je pri predvolenom nastavení iba na pozorovanie.                                                                                               |

**Prednosť módu** (`getMode`): volajúci `options.mode` →
`INJECTION_GUARD_MODE` **prepisovanie funkcie flagu DB** (Dashboard → Nastavenia →
Funkčné flagy) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Prepisovanie na palubnej doske preto vyhráva nad premennými prostredia, takže UI funkčných flagov riadi bežiacu strážnu bariéru naživo (bez reštartu). Čítanie z DB je bezpečné:
ak nastane chyba, strážna bariéra prejde na správanie založené na prostredí, a keď nie je nastavené žiadne
prepisovanie, správanie je identické s riešením iba na základe prostredia.

Zdroje detekcie:

1. `sanitizeRequest()` z `@/shared/utils/inputSanitizer` (zdieľaný detektor
   použitý aj inde v pipeline).
2. Vstavané `DEFAULT_GUARD_PATTERNS` (aktuálne `system_override_inline` a
   `markdown_system_block`, obidve s závažnosťou `high`).
3. Voliteľné `customPatterns` odovzdané prostredníctvom možností konštruktora (reťazce, regex,
   alebo `{ name, pattern, severity }` záznamy).

Keď `mode === "block"` **a** aspoň jedna detekcia spĺňa prah závažnosti,
`preCall` vracia `{ block: true, message: "Žiadosť zamietnutá: detekovaný podozrivý obsah" }`. V módoch `warn`/`log` strážna bariéra zaznamenáva, ale
umožňuje volanie. Zdieľaný pomocník `evaluatePromptInjection()` je tiež exportovaný
pre volajúce, ktoré potrebujú vyhodnotiť výzvy bez prechádzania registri.

**Skenovanie obmedzené (v3.8.20):** detektor kontroluje iba **prvých 16 KB**
spojeného textu výzvy — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtov) v
`src/shared/utils/inputSanitizer.ts`. Obidve `detectInjection()` a
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` pred spustením
cyklu vzorov. Injekčné direktívy sa nachádzajú blízko vrchu vstupu, takže to
obmedzuje CPU/GC regex na viacerých stoviek KB nákladov bez oslabenia detekcie (por.
#3932, #4041).

### Maskér poverení (`credentialMasker.ts`)

Beží na **oboch** fázach, posledný v predvolenom reťazci (priorita `95`). Odstraňuje
známe vzory API kľúčov / tajných tokenov z odchádzajúceho nákladu (obsah správy,
argumenty volania nástroja, výsledky nástroja) **a** odpovede poskytovateľa, takže
poverenie vložené do výzvy (alebo vrátené výsledkom nástroja) nie je uniknuté
k upstream poskytovateľovi alebo späť k klientovi.

- **Iba na opt-in**, rovnaká konvencia ako PII redakcia (Hard Rule #20-adjacent):
  zakázané, pokiaľ `settings.credentialRedactionEnabled === true` **alebo**
  `CREDENTIAL_REDACTION_ENABLED=true`. S týmto vypnutým je strážna bariéra bez účinku —
  nikdy neblokuje a nikdy neprepisuje.
- `redactCredentials()` prechádza celým stromom nákladu/odpovede (`walkValue()`,
  bezpečné voči znečisteniu prototypu, bezpečné voči cyklom cez `WeakSet`) a nahrádza zhody
  s `[REDACTED:<type>]` zástupným symbolom, klonujúc iba vetvy, ktoré sa skutočne
  zmenili.
- `CREDENTIAL_PATTERNS` pokrýva kľúče poskytovateľov LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokeny (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), platobné kľúče (Stripe, Square), cloud
  kľúče (AWS access key, Twilio, SendGrid, Mailgun), súkromné kľúče / JWT,
  reťazce pripojenia nesúce poverenia (`mongodb://user:pass@...`, atď.), a
  generický vzor hlavičky `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Kľúče tvaru hlavičky (`authorization`, `x-api-key`, `api-key`,
  `apikey`) sú štrukturálne redigované (iba hodnota, schéma prefix ako
  `Bearer `/`Basic ` zachovaná) namiesto prostredníctvom generického textového regexu.
- Strážna bariéra nikdy neblokuje; iba prepisuje (`modifiedPayload` /
  `modifiedResponse`) a anotuje (`meta.credentialsRedacted`, `meta.count`).

Regresná strážna bariéra: `tests/unit/credential-masker-guardrail.test.ts`.

## Základný kontrakt (`base.ts`)

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
  block?: boolean; // hodnota true okamžite ukončí reťazec
  message?: string; // zobrazí sa pri blokovaní
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vrátené metódou preCall na úpravu požiadavky
  modifiedResponse?: TValue; // vrátené metódou postCall na úpravu odpovede
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

Ochranný mechanizmus signalizuje „bez zmeny“ vrátením hodnoty `void`, `{}` alebo
`{ block: false }`. Vrátenie hodnoty `modifiedPayload`/`modifiedResponse` nahradí
hodnotu prechádzajúcu reťazcom pre nasledujúce ochranné mechanizmy.
`signal?: AbortSignal` prenáša životný cyklus volajúceho do ochranných mechanizmov. Prerušenie požiadavky je zámernou výnimkou typu fail-open: mediálne mosty zastavia prácu a vykonajú vyčistenie bez obnovenia nespracovaných médií pre cieľ, o ktorom je známe, že ich nepodporuje.

## Register (`registry.ts`)

Jediná inštancia `guardrailRegistry` poskytuje:

- `register(guardrail)` — pridá ochranný mechanizmus (alebo ho nahradí podľa normalizovaného názvu) a
  opätovne zoradí mechanizmy vzostupne podľa `priority`.
- `clear()` / `list()` — administratívne pomocné metódy.
- `runPreCallHooks(payload, context)` — prechádza aktívnymi ochrannými mechanizmami, odovzdáva
  payload prostredníctvom `modifiedPayload` a zastaví sa pri prvom výskyte `block: true`.
- `runPostCallHooks(response, context)` — rovnaký postup na strane odpovede.
- `resetGuardrailsForTests({ registerDefaults })` — vymaže stav a voliteľne
  znova zaregistruje predvolené mechanizmy, aby sa zabezpečila čistá izolácia testov.

Obe spúšťacie metódy vracajú `{ blocked, payload|response, results, guardrail?, message? }`,
kde `results` je pole záznamov `GuardrailExecutionResult`, ktoré obsahujú
polia `blocked`, `skipped`, `modified`, `error` a `meta` pre každý ochranný mechanizmus,
čo je užitočné pri trasovaní.

### Vypnutie ochranných mechanizmov pre jednotlivé požiadavky

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` zhromažďuje
deduplikovaný zoznam názvov ochranných mechanizmov, ktoré sa majú pre aktuálnu
požiadavku preskočiť. Zdroje (všetky sú voliteľné a zlúčia sa):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` v tele požiadavky (na najvyššej úrovni)
- `metadata.disabledGuardrails` v tele požiadavky
- Hlavička `x-omniroute-disabled-guardrails` (alebo staršia
  `x-disabled-guardrails`)

Hodnoty môžu byť polia reťazcov alebo reťazec oddelený čiarkami; názvy sa
normalizujú na malé písmená vo formáte kebab-case (`pii_masker` → `pii-masker`). Výsledok
sa prostredníctvom `context.disabledGuardrails` odovzdá registru, ktorý preskočí
zodpovedajúce ochranné mechanizmy (`skipped: true` v `results`).

## Poradie vykonávania

Pre každú požiadavku prechádzajúcu cez `src/sse/handlers/chat.ts` a
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` zostaví zoznam vynechaných ochranných mechanizmov z kľúča API, tela požiadavky
   a hlavičiek.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` spustí ochranné mechanizmy vo vzostupnom
   poradí priority:
   - Zakázané ochranné mechanizmy sa zaznamenajú ako `skipped`.
   - Metóda `preCall` každého ochranného mechanizmu môže prepísať dátový obsah prostredníctvom `modifiedPayload`.
   - Prvý výskyt `block: true` ukončí reťazec a obslužná rutina vráti
     odpoveď o odmietnutí ochranným mechanizmom.
3. (Potenciálne prepísaný) dátový obsah pokračuje do kombinovaného smerovania a následného
   odoslania nadradenému systému.
4. Po zostavení odpovede spustí `guardrailRegistry.runPostCallHooks(...)`
   rovnaký reťazec nad odpoveďou. Hodnota `block: true` v tomto bode zahodí odpoveď
   nadradeného systému.

Ochranné mechanizmy, ktoré vyvolajú výnimku, sa zaznamenajú s `error: <message>` a zapíšu do protokolu
prostredníctvom `logger.warn`, ale reťazec pokračuje — zámerne využíva princíp fail-open.

## Konfigurácia

Premenné prostredia čítané vstavanými ochrannými mechanizmami:

| Premenná                              | Používa ju                          | Účinok                                                                                                                                |
| ------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`                  | Nastavením na `false` sa detekcia úplne zakáže.                                                                                       |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`                  | Pravidlá pre injektáž: `warn`, `block` alebo `log`. Staršia hodnota `redact` text injektáže neprepisuje.                              |
| `INJECTION_GUARD_MODE`                | `prompt-injection`                  | Režim ochrany proti injektáži; zároveň ide o príznak funkcie v databáze, ktorý **má prednosť** pred premennými prostredia (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`                  | Minimálna závažnosť, ktorú režim `MODE=block` odmietne: `high` (predvolené), `medium` alebo `low`.                                    |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`                  | Starší alias pre `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`                        | Ak je nastavená na `true`, osobné údaje v požiadavke sa redigujú (nezávisle od režimu injektáže).                                     |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (následné spracovanie) | Ovláda správanie maskovania na strane odpovede.                                                                                       |

Ochranné mechanizmy Modality Bridge čítajú konfiguráciu za behu z úložiska nastavení
založeného na databáze (`getSettings()`), nie z premenných prostredia. Primárne kľúče pre Vision sú
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` a
`modalityBridgeCacheMaxEntries`. Staršie kľúče
`visionBridge*` sa akceptujú iba ako zdokumentované záložné hodnoty na čítanie počas jedného cyklu;
zápisy z ovládacieho panela používajú primárne kľúče. Predvolené hodnoty a záložný
resolver sa nachádzajú v `src/shared/constants/modalityBridgeDefaults.ts`, pričom staršie
konštanty zostávajú zachované v `src/shared/constants/visionBridgeDefaults.ts`.

Audio používa `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` a `modalityBridgeAudioMaxClips` spolu so zdieľanými
nastaveniami `modalityBridgeCache*`. Audio nemá záložný mechanizmus pre staršie kľúče, pretože tieto
kľúče boli zavedené spolu so schémou Modality Bridge.

Video používa `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` a
`modalityBridgeVideoTimeout` spolu so zdieľanými nastaveniami `modalityBridgeCache*`.
V predvolenom nastavení je zakázané, pretože FFmpeg/ffprobe sú voliteľné prevádzkové
závislosti a opis snímok zvyšuje latenciu a náklady na model.

## Vlastné ochranné mechanizmy

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Denný rozpočet bol prekročený" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Postup:

1. Vytvorte `src/lib/guardrails/myGuardrail.ts`, ktorý rozširuje `BaseGuardrail`.
2. Implementujte `preCall` a/alebo `postCall`.
3. Buď ho zaregistrujte pri importe (pridaním z `registerDefaultGuardrails`), alebo
   zavolajte `guardrailRegistry.register(...)` za behu — register nahradí
   každý predchádzajúci ochranný mechanizmus s rovnakým normalizovaným názvom.
4. Pridajte testy do `tests/unit/` (existujúce príklady:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testovanie

Medzi testami používajte `resetGuardrailsForTests()`, aby ste začali zo známeho stavu.
Ak chcete začať s prázdnym registrom a zaregistrovať iba testované ochranné mechanizmy,
odovzdajte `{ registerDefaults: false }`. Vision Bridge podporuje vkladanie závislostí
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge poskytuje ekvivalentné
body napojenia pre nastavenia, schopnosti, výber modelu STT, kontroly prihlasovacích
údajov a transkripciu. Testy tak môžu overiť oba toky bez prístupu k databáze
alebo sieti.

## Pozrite tiež

- `src/lib/guardrails/` — implementácia
- `src/shared/utils/inputSanitizer.ts` — zdieľaný detektor, ktorý zabezpečuje
  detekciu injektovania promptov a maskovanie osobných údajov
- `src/shared/constants/visionBridgeDefaults.ts` — predvolené nastavenia Vision Bridge a
  zoznam modelov s vynúteným premostením
- `src/shared/constants/modalityBridgeDefaults.ts` — zdieľané predvolené nastavenia behu pre Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonálna vrstva (istič, doby čakania)
- `docs/reference/ENVIRONMENT.md` — úplný prehľad premenných prostredia

## Pokrytie trás ochranou pred injektovaním a red-team testovanie (Fáza 8 · Blok D)

Ochrana pred injektovaním (`createInjectionGuard` / `withInjectionGuard`) pokrýva všetky trasy,
ktoré prijímajú používateľské prompty. Rešpektuje `INJECTION_GUARD_MODE` (predvolená hodnota `warn` = iba zaznamenať;
`block` = vráti HTTP 400 `SECURITY_001`).

| Typ               | Trasy                                                                                                                                                | Predvolený režim |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Text (existujúce) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn             |
| Generatívne       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn             |
| Dáta              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn             |

Extrakcia textu (`extractMessageContents`) pokrýva `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testovanie (každú noc, `nightly-llm-security.yml`):** promptfoo overuje, že každá trasa blokuje
korpus OWASP-LLM v režime `INJECTION_GUARD_MODE=block`; garak spúšťa sondy (bez tajného kľúča sa preskočí).
Trasa `moderations` je zahrnutá kvôli konzistentnosti — prevádzkovatelia ju môžu v režime blokovania vyňať
prostredníctvom `resolveDisabledGuardrails`.

Nočný pracovný postup (`.github/workflows/nightly-llm-security.yml`, cron + manuálne
spustenie) obsahuje dve úlohy:

- **`promptfoo-guard` (blokujúca)** — spúšťa `promptfoo eval -c promptfooconfig.yaml`
  s `INJECTION_GUARD_MODE=block`. Každý nepriateľský prípad (napr. „ignoruj všetky
  predchádzajúce pokyny…“, prelomenia obmedzení v štýle DAN) overuje, že odpoveď obsahuje
  `error.code === "SECURITY_001"`, t. j. ochrana požiadavku skutočne odmietla.
- **`garak` (poradná)** — spúšťa garak s `--probes promptinject,dan,leakreplay`
  voči lokálnej inštancii OmniRoute (`http://localhost:20128/v1`). Je podmienená dostupnosťou
  tajného kľúča poskytovateľa (`PROMPTFOO_PROVIDER_KEY`); ak nie je dostupný, úloha sa korektne
  preskočí a je zakončená `|| true`, takže iba hlási výsledky bez zlyhania CI.

Pokrytie pomocnej ochrany (`createInjectionGuard` / `withInjectionGuard`)
zahŕňa každú trasu `/v1`, ktorá prijíma prompt; text promptu sa získava z
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomocou
`extractMessageContents()` v `src/shared/utils/inputSanitizer.ts`.
