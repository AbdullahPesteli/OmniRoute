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
presmeruje celú požiadavku na model schopný vízie, alebo nahradí časti obrázkov textovými popismi vytvorenými konfigurovateľným modelom vízie pred
upstream volaním. To umožňuje poskytovateľom iba textu transparentne spracovávať
multimodálne zaťaženia.

Tok:

1. Preskoč, ak cieľový model už podporuje víziu (pokiaľ sa neobjaví v zozname
   nútených mostov `isVisionBridgeForcedModel`).
2. Extrahuj časti obrázkov pomocou `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ktorá deleguje na **unifikovaný detektor médií**
   `detectMediaParts()` v `open-sse/utils/mediaParts.ts` — jediný zdroj pravdy zdieľaný s filtrom kompatibility combo.
   Extrakcia je povolená iba pre najvyššie úrovne častí tvarov,
   ktoré môže `replaceImageParts` znovu pripojiť (zmluva extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, a Responses API `input_image`. Vnorené zásahy a
   tvary iba s indikátormi sú materiálom pre combo-filter a nikdy nie sú extrahované.
   Preskoč, ak neboli nájdené.
3. Rozpoznať runtime konfiguráciu pomocou `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nové kľúče nastavení `modalityBridge*`
   vyhrávajú; dedičné kľúče `visionBridge*` zostávajú **jednorazovým
   zálohovaním** (okno na vrátenie). Preskoč pred akoukoľvek traversou médií, keď je
   most zakázaný.
4. Výber režimu (`modalityBridgeVisionMode`, pozri tabuľku nižšie) rozhoduje
   o presmerovaní vs popise. Presmerovanie vracia `modifiedPayload` s iba
   vymeneným `model`, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Popisná cesta: obmedziť obrázky na `maxImages`, zostaviť úlohu vedomý prompt,
   konzultovať cache popisov, zavolať model vízie **paralelne**
   (`Promise.allSettled`), a injektovať `[Image N]: <description>` textové časti na
   ich miesto. Zlyhanie popisu vracia `null` a pôvodná časť obrázka je
   **zachovaná** (#4012) — okrem cesty combo popisu, keď každý
   popis zlyhal, kde potvrdený upstream bez vízie dostane
   `(unavailable — no vision-capable provider connected)` stub namiesto (#8430).
6. Vrátiť `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Výber režimu (`modalityBridgeVisionMode`)

| Režim      | Predvolený | Správanie                                                                                                                                                                                                                                                          |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔          | Dedičná heuristika, nedotknutá (#6640/#7204): modely bez combo/`auto/` presmerujú na najlepší model vízie, pokiaľ pôvodný model už nemá použiteľné poverenia (potom popis); ciele combo vždy popisujú.                                                             |
| `describe` |            | Vždy popisovať — blok presmerovania je úplne preskočený; vybraný model používateľa vždy odpovedá.                                                                                                                                                                  |
| `reroute`  |            | Nútené presmerovanie: strážca s povereniami je obídený. Strážca s povereniami pre cieľ presmerovania stále platí — keď neexistuje žiadny použiteľný cieľ vízie, požiadavka prechádza na popis, takže surové obrázky nikdy nedosiahnu backend iba pre text (#8430). |

Nútené režimy skrátenia **pred** spustením automatickej heuristiky; správanie `auto`
je byte-identické s pred-PR-1 ochranným mechanizmom.

#### Rozsah API kľúča (`visionBridgeKeyScope.ts`)

Keď API kľúč volajúceho obmedzuje `allowedConnections`, kvóty
(`allowedQuotas`) alebo modely (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most vyberá iba
modely presmerovania a popisu, ktoré môže kľúč použiť, na pripojeniach, ktoré môže
kľúč použiť. Volanie popisu potom vždy prechádza cez OmniRoute self-loop s
hlavičkou `x-omniroute-self-loop-key-id`, takže prijímajúca chatová požiadavka
opäť vynucuje politiku pripojenia a modelu tohto kľúča. `enforceApiKeyPolicy()`
ctí túto hlavičku iba spolu so self-loop nosičom, takže môže iba
zúžiť prístup, a id, ktoré sa nevyrieši, je zamietnuté.

Ak nie je pre kľúč povolený žiadny model vízie, popisná cesta ustúpi a
požiadavka prejde nezmenená, rovnaké správanie fail-open ako zakázaný
ochranný mechanizmus (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Požiadavky bez kľúča a kľúče bez týchto obmedzení sa správajú presne ako
predtým.

#### Popisný prompt vedomý úlohy (`modalityBridgeVisionTaskAware`)

Predvolené **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) pridáva
text **poslednej správy používateľa** (skrátený na 500 znakov) k základnému
popisu, nasmerujúc popis na to, čo používateľ skutočne požiadal
(patrón codex-vision-proxy) a žiada model vízie, aby prepisoval viditeľný
text. Ak je prepínač vypnutý — alebo nie je žiadny text používateľa — základný
popis sa používa nezmenený.

Žiadosť vlastného OpenAI-kompatibilného popisu slučky (`callVisionModelSingle()`
v `visionBridgeHelpers.ts`) vždy žiada `image_url.detail: "high"` —
nepodmienečne, pre každého volajúceho/poskytovateľa, nie je obmedzené na
žiadny signál klienta. Nízko-detailné vzorkovanie zhoršuje presnosť OCR
presne pre úlohu prepisovania textu, o ktorú tento popis žiada, takže
žiadanie o popis vždy žiada vysokú detailnosť bez ohľadu na to, akú úroveň
detailu použil pôvodný prichádzajúci požiadavok. To ovplyvňuje iba vnútorné
telo žiadosti o popis; nemení to, ako OmniRoute posiela vlastný `image_url.detail`
volajúceho v primárnom požiadavku — táto predvolené hodnota sa aplikuje
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
úplný prepis; znížte to, aby ste obmedzili používanie tokenov na
komunikatívnych modeloch vízie. Pole na paneli dashboard sa nachádza na
záložke Vízia v pokročilom paneli
(`modality-bridge-max-chars` v `ModalityBridgeVisionTab.tsx`) a obmedzuje
akúkoľvek hodnotu medzi 1 a 99 na 100, pričom explicitné `0` zostáva
neovplyvnené — `0` je platná hodnota Zod sama o sebe
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nie
len "nepriradené" predvolené nastavenie.

#### Cache popisu (`modalityBridge/bridgeCache.ts`)

Cache v pamäti LRU + TTL pre výstupy popisu, zdieľaná v rámci procesu.
Kľúč = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s
rámovaním dĺžky prefixu (žiadne kolízie na hraniciach polí). Modelová
komponenta je **konfigurovaný** mostový model, nie model, ktorý skutočne
odpovedal — `callVisionModel` môže interné zlyhať, a kľúčenie na
každý pokus by fragmentovalo cache. Zlyhané popisy sa nikdy neukladajú do
cache. Nastavenia:

| Kľúč                            | Predvolené | Rozsah  |
| ------------------------------- | ---------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`     | —       |
| `modalityBridgeCacheTtlMinutes` | `60`       | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`      | 10–5000 |

#### Normalizácia vzdialenej obrázku (súvislosť popisu/base64 načítanie)

Keď most sám načíta **vzdialený** obrázok — vlastné volanie popisu
Anthropic a konverzia claude-wire-format base64
(`ensureBase64ImagesForClaudeWire`), obidve cez
`fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` — výsledný
data URI je preposlaný cez `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) predtým, ako je vložený do žiadosti
modelu vízie. Príliš veľké obrázky sú zmenšené na **2048px dlhú hranu**
(zodpovedajúce obmedzeniu zmenšenia, ktoré OpenAI/Anthropic už
aplikujú na serveri), čo znižuje
počet prenášaných bajtov/latenciu bez zmeny toho, čo model vízie vidí.
Zmenšovanie používa `sharp`, načítané cez dynamický import: na platforme,
kde sa jeho natívny binárny súbor nepodarí načítať, `normalizeDataUri()`
**nikdy nevyhodí** — prechádza na preposlanie pôvodných bajtov, takže
cesta popisu/base64-konverzie vždy zostáva funkčná. Bajty, ktoré nie sú
obrázkami (načítanie, ktoré nevrátilo dekódovateľný obrázok), sú taktiež
preposlané nezmenené. Táto normalizácia sa vzťahuje iba na obrázky, ktoré
most načíta pre svoje vlastné volanie — nikdy sa neuplatňuje na surové
preposlané dáta volajúceho, v súlade s princípom mutácie iba na opt-in
(Hard Rule #20).

#### Schéma nastavení + migrácia

Nové kľúče `modalityBridge*` sú validované pomocou Zod v `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*`, a skupina
`modalityBridgeAudio*` používaná Audio Bridge. Migrácia
`141_modality_bridge_settings.sql` kopíruje existujúce dedičné
`visionBridge*` hodnoty do zodpovedajúcich nových kľúčov (idempotentné, nikdy
neprepíše hodnotu `modalityBridge*` nastavenú operátorom); dedičné kľúče
zostávajú akceptované ako čítací záložný mechanizmus na jedno
cyklus vydania.

#### Hlavička transparentnosti + štatistiky

Odpovede transformované popisom nesú
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(vytvorené `buildModalityBridgeHeader()` v `modalityBridge/bridgeStats.ts`,
označené `withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`).
Preposlané požiadavky nedostanú **žiadnu** hlavičku — payload zostal
neovplyvnený a zmena modelu je už viditeľná v poli `model` tela odpovede.

`GET /api/modality-bridge/stats` (správa autentifikácie, rovnaká úroveň ako
`GET /api/settings`) vracia v pamäti uložené počítadlá pre každú modalitu
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` pre `vision`, `audio` a
`video`. `averageLatencyMs` používa `latencySamples`, nie všetky pokusy, ako
svoj menovateľ; operácia bez časovania nevytvára vzorku s nulovým oneskorením.
`bridged` zostáva spätne kompatibilným aliasom pre úspešné
konverzie; neúspešné pokusy ho nezvyšujú.
Počítadlá sa resetujú pri reštarte procesu podľa návrhu
(telemetria, nie účtovanie).

#### Konfigurácia dashboardu

Vyhradená stránka dashboardu je
`/dashboard/settings/modality-bridge`. Jej URL-adresovateľné karty `Vision`, `Audio`
a `Video` zachovávajú parametre dotazu pri prepínaní hodnoty `tab`.
Karta Vision vystavuje povolenie, režim, výber modelu (vrátane automatického
predvoleného), úlohu vedomé vyžiadanie, pokročilé limity na časový limit/obrázok/dĺžku popisu/cache,
runtime
počítadlá a chránené vyžiadanie vzorky. Karta Audio je tiež aktívna: vystavuje
povolenie, modelový výber iba pre STT s automatickým výberom, limity na časový limit/max-clip, audio
počítadlá a test vzorky `input_audio`. Karta Video je funkčná: hlási
runtime stav FFmpeg/ffprobe — jeden zo štyroch explicitných stavov UI (`unknown` počas
prieskumu alebo ak sa nedá dokončiť, `restricted` na hostiteľovi dashboardu, ktorý nie je
loopback, kde je prieskum preskočený na strane klienta, `unavailable` po prieskume
a potvrdení chýbania, alebo `available` s verziami FFmpeg/ffprobe) — zachováva
limity enable/model/frame/video/timeout, filtruje modelový výber na modely schopné
videnia a vystavuje video počítadlá.

Predchádzajúca karta Vision Bridge pod nastaveniami AI je kompatibilný odkaz na
novú stránku; už nemá druhú kópiu formulára. Poskytovatelia médií tiež
odkazujú na pracovné toky Image-to-Text a Speech-to-Text na príslušné karty Modality
Bridge bez odstránenia existujúceho hracieho priestoru Speech-to-Text.

**Obídenie prijatia samosprávy:** keď sa volanie describe smeruje cez vlastný
`samosprávny` cyklus OmniRoute `/v1` (nestandardný model poskytovateľa), sub-požiadavka posiela
`x-omniroute-admission-bypass: internal` a je autentifikovaná s vyriešenou
samosprávnou poverením — miestny `sk_omniroute` strážca v miestnom režime, alebo
operátorom nakonfigurovaný `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env kľúč (#1350), takže
nasadenia s `REQUIRE_API_KEY=true` môžu stále vykonať volanie describe. Obídenie
je uznané iba pre tieto presné poverenia, takže externí klienti nemôžu použiť
hlavičku na preskočenie prijatia.

Dedičstvo predvolieb žije v `src/shared/constants/visionBridgeDefaults.ts`; nové
predvoľby režimu/úlohy/cache a rozlíšovač nastavení žijú v
`src/shared/constants/modalityBridgeDefaults.ts`. Strážca vystavuje
možnosť konštruktora `deps`, takže testy môžu injektovať falošné
implementácie `getSettings` a `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Zachytáva požiadavky na chat s audio obsahom predtým, ako dosiahnu cieľ, ktorý nie je
známy, že akceptuje audio vstup. Nikdy nepreposiela požiadavku na chat: audio časti sú
prepisované cez existujúci multipart koncový bod kompatibilný s OpenAI a
vybraný chat model pokračuje s textovými prepismi.

Tok:

1. Rozpoznať `supportsAudio` cez `getResolvedModelCapabilities()`. Explicitné
   metadata registrácie poskytovateľa vyhráva, potom statické metadata modelu, potom synchronizované
   `modalities_input`. Deklarovaný zoznam vstupov bez `audio` je `false`; žiadne
   dôkazy o schopnosti zostávajú `null`. Oba `false` a `null` aktivujú
   konzervatívny most, zatiaľ čo `true` ho obchádza.
2. Rozpoznať nastavenia `modalityBridgeAudio*` a extrahovať spájateľné vrcholové
   audio časti z každej správy cez zdieľaný detektor `detectMediaParts()`.
   Podporované drôtené tvary sú OpenAI `input_audio`, `audio_url` a
   `source.media_type: "audio/*"`. Vnorené audio je detekované na smerovanie, ale nie
   odstránené spájacou cestou. Práca je obmedzená `modalityBridgeAudioMaxClips`;
   neskoršie časti zostávajú nedotknuté.
3. Uznajte nakonfigurovaného `provider/model`, alebo nechajte `selectAudioBridgeModel()`
   prechádzať `AUDIO_TRANSCRIPTION_PROVIDERS` v stabilnom poradí katalógu a vybrať prvý
   model s použitelnou aktívnou poverením poskytovateľa.
4. `callAudioTranscription()` konvertuje base64/data-URI audio na multipart
   `file`, alebo sťahuje vzdialený `audio_url` cez verejne dostupný výstupný
   strážca s DNS pinningom a obmedzením na 25 MB. Potom POSTuje súbor a vybraný
   model na miestny `/v1/audio/transcriptions` samosprávny cyklus, autentifikovaný s
   `resolveSelfLoopBearer()`. Existujúca trasa prepisu vykonáva normálne
   vyhľadávanie poverení, spracovanie cooldown/rate-limit a odosielanie poskytovateľa.
5. Úspešné volania nahrádzajú svoje časti s `[Audio N]: <transcript>`. Volania
   bežia s `Promise.allSettled`: individuálny zlyhanie zachováva pôvodnú
   audio časť (#4012 zmluva). Ak každé volanie zlyhá a cieľ sa preukáže
   `supportsAudio === false`, časti sa stanú
   `[Audio N]: (nedostupné — žiadny STT poskytovateľ pripojený)` (#8430 zmluva). Pre
   neznámy cieľ (`null`) zostáva výsledok so všetkými zlyhaniami nedotknutý. Pre
   preukázaný cieľ iba s textom bez použiteľnej STT poverenia dostáva rovnaký explicitný
   stub bez vykonania sieťového volania.

Úspešné prepisy používajú procesom široký LRU/TTL cache Modality Bridge. Kľúč kombinuje
audio referenciu, stabilný štítok operácie `audio-transcription` a vybraný STT model; zlyhania sa nikdy necache. Audio pokusy aktualizujú zdieľané počítadlá `bridged`, `cacheHits`, `failures` a `lastUsedAt`.
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

Zachytáva vrcholové video časti v Chat Completions `messages` a Responses
API `input` predtým, ako sa zavolá cieľ bez známej natívnej podpory videa.
Podporované formáty sú `input_video`, `video_url`, `video_source`, HTTPS URL,
a `data:video/*;base64,...` dátové URI. Čisté názvy súborov v texte nie sú považované
za video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) vlastní prechod požiadaviek,
kontrolu schopností/politiky, agregáciu na požiadanie a odpoveď payload.
Práca na videu — akvizícia, cache celkového výsledku, popis sekvencie snímok
(ktorá spája akýmkoľvek volajúcim deklarovaný audio prepis) a metriky/abort/údržba
na pokus — je skrytá za `processVideoPart` v
`videoBridgePipeline.ts`, volaná raz na každú video časť vo vnútri slučky `preCall`.
Ten modul tiež definuje explicitné portové hranice `VideoMediaBrokerPort`
(aqvizícia bajtov a extrakcia vzorovaných snímok), `VideoAudioTranscriptionPort`
(spájanie akýmkoľvek volajúcim deklarovaného audio prepisu so vzorovanými titulkami) a
`VideoDrilldownPort` (dedičná surová forma). Produkčné STT a uchovávanie snímok
sú zložené okolo popisného portu prostredníctvom `createVideoSttAdapter` a
`createVideoDrilldownAdapter`; ten druhý používa zdieľaný nepriehľadný cyklus.

Verejná `/v1` požiadavka nikdy neimportuje ani nevyvoláva podproces. Diaľkové
videá sú sťahované pod limitom 50 MiB; inline base64 videá majú
konzervatívny limit 36 MiB dekódovaných na video, aby model/správy/obal
mohli zostať v rámci verejného JSON limitu prijatia požiadaviek 50 MiB. Inline
dĺžka a odhady dekódovanej veľkosti sú kontrolované pred alokáciou. HTTPS je
požadované na počiatočnej diaľkovej URL a každom presmerovaní, pričom sa používa
existujúca verejná iba výstupná ochrana s DNS pinningom. Bajty potom prechádzajú
presne cez internú hranicu `POST /api/modality-bridge/video/extract`. Táto trasa je
`LOCAL_ONLY` a `SPAWN_CAPABLE`, akceptuje iba autentifikovanú, dôveryhodnú slučkovú
požiadavku na proces a nikdy neprijíma URL, cestu k súborovému systému, spustiteľný
súbor alebo zoznam argumentov. API pipeline veľkosti tela a inkrementálny čítač tela
správcu nezávisle vynucujú limit 50 MiB na vstup brokera. Jeho obmedzená fronta
vykonáva jednu extrakciu naraz, umožňuje štyri čakajúce úlohy a obmedzuje čakajúci
vstup na 100 MiB.

Vo vnútri brokera `ffprobe` číta súkromný lokálny súbor; pevný formát
zoznamu povolených formátov vylučuje playlist a manifest formáty. Pre povolené MOV-famílie
kontajnery zostávajú externé MOV dátové odkazy predvolene zakázané a pevný príkaz
sa do nich nezapája. Oba `ffprobe` a `ffmpeg` používajú
zoznam protokolu iba pre `file`, jeden vlákno, pevné argumentové polia, žiadny shell
a spustiteľné súbory vyriešené z `PATH`. Pripojené obrázkové krycie prúdy nie sú
hrateľné kandidáty. Všetky hrateľné prúdy musia spĺňať limity a explicitný predvolený
prúd je preferovaný pred deterministickým najnižším indexom
náhradou. Videá sú obmedzené na 600 sekúnd, 8,192 pixelov na rozmer a
33,554,432 zdrojových pixelov. FFmpeg vzorkuje 1–16 stredných JPEG snímok, zmenšuje
dlhú hranu na maximálne 1,024 pixelov bez zväčšovania menších vstupov a
nikdy neprijíma URL. Vzorkovanie je predvolene `uniform`. Voliteľné
`scene_aware` a experimentálne `segment_aware` politiky vykonávajú jeden ďalší
pevný FFmpeg prechod nad už validovaným lokálnym prúdom, vyberajú obmedzené
`showinfo` časové pečiatky scén a deterministicky sa vracajú k rovnakým
uniformným stredom pri zlyhaní detektora, časovom limite, nesprávnom výstupe alebo prázdnej
súprave kandidátov. Mód segment-aware prideľuje vzorky stredov proporcionálne k
validovaným časovým intervalom scén; dôkazy a správanie náhrad v režime segment-aware sú
podrobne popísané nižšie. Pevný limit 16 snímok je
aplikovaný po výbere v každej politike. Keď má požiadavka s vedomím scény iba
rozpočet na jednu snímku, používa uniformný stred aktívneho celého videa alebo
fokusového okna a hlási `policyEffective: uniform`: jediná vybraná snímka scény
nemôže zachovať oba časové konce. Volajúci môže voliteľne poskytnúť
konkrétne fokusové okno (`start`/`end` sekundy); hranice sú obmedzené na trvanie médií,
obrátené alebo nekonečné okná sú zamietnuté a všetky vzorkovacie
politiky sa vykonávajú iba v rámci normalizovaného intervalu. Výsledné
okno je zahrnuté v metadátach vzorkovania a v prefixe nedôveryhodného popisu,
aby mohli downstream modely rozlíšiť zameraný výňatok od celej
časovej osi.

Sémantické zameranie titulkov je samostatné, explicitné nastavenie. Predvolený
`full` analytický režim zachováva existujúci rámcový prompt a nikdy neposiela text
požiadavky do modelu titulkov. V `focused` režime most číta iba najnovší
neprázdny používateľom vytvorený `text`/`input_text` z rovnakého kontajnera Chat alebo
Responses, normalizuje ho na NFC, zlučuje ovládacie znaky a biele miesta
a obmedzuje ho na 500 Unicode kódových bodov. Prázdny výsledok sa vracia k
presnému `full` promptu. Použiteľný náznak je serializovaný ako JSON v
vyhradenom bloku nedôveryhodného používateľského kontextu a môže iba uprednostniť
pozorovateľné detaily; nemôže prepisovať samostatné varovanie proti sledovaniu
pokynov viditeľných alebo počuteľných v médiu. Textové zameranie nikdy neodvodzuje
`start`/`end` alebo nemení časového vzorkovača.

#### FU-07 dôkaz o štrukturálnom segmente

`segment_aware` používa jeden obmedzený predanalyzačný prechod nad už validovaným miestnym video streamom. Pevný filter reťazec najprv zmenšuje šírku na maximálne 320 pixelov, detekuje zmeny scén a zamrznuté intervaly, potom vzorkuje 1 snímku za sekundu pre rozmazanie, priemernú luminiscenciu a priestorové/časové informácie. Prechod je obmedzený na 600 štrukturálnych vzoriek, jeden FFmpeg/filter vlákno, rovnaký `file`-only protokol a container allowlists, 1 MiB obmedzenie výstupu procesu a maximálne 30 sekúnd v rámci zdieľaného zrušenia/deadline brokera. Nikdy neprijíma príkaz, filter, cestu alebo URL z požiadavky.

Štrukturálne hodnoty sú deterministické vzorkovacie dôkazy, nie sémantické porozumenie videu. Nevyvodzujú subjekty, akcie, titulky, reč alebo úmysel používateľa. Hranice scén a zmrazenia tvoria segmenty; pokrytie zmrazenia, rozmazanie, expozícia, priestorové detaily a časová zmena ovplyvňujú iba to, ako je existujúci rozpočet 1–16 snímok rozdelený. Úplne zamrznutý segment je obmedzený na jednu snímku, zatiaľ čo nezamrznuté segmenty súťažia o zvyšný rozpočet. Keď hranice prevyšujú snímky, zachováva sa rovnomerné pokrytie časovej osi, takže rýchle skoré strihy nemôžu skryť dlhý zaostávajúci segment. Hranice scén v rámci 1-sekundovej analýzy rozlíšenia zmrazenia sú zlúčené.

Chýbajúce filtre, nesprávne/ prázdne dôkazy, chyba detektora alebo obmedzený čas na predanalýzu zlyhávajú otvorene na presnej uniformnej stredovej politike. Zrušenie volajúceho alebo deadline brokera nezlyháva otvorene: ukončuje prebiehajúci subprocess, zabraňuje neskoršiemu extrahovaniu snímok a súkromný dočasný strom je odstránený v `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuje deterministické reálne FFmpeg zariadenia pre úspory po deduplikácii titulkov, husté rozdelenie rozpočtu pohybu, dôkazy o rozmazaní/expozícii/SI-TI, rýchle strihy s dlhým chvostom a falošné pozitíva pri postupnom vyblednutí. Zaznamenáva čas steny predanalýzy a, kde je k dispozícii `/usr/bin/time`, detekuje CPU a vrcholný RSS. Jeho kontrola kvality sú iba štrukturálne orákuly. Skutočná kvalita modelu titulkov zostáva `HOLD`, pretože tento systém nemá autorizovaný koncový bod alebo zamrznutého sudcu. Finančné úspory tiež zostávajú `HOLD`, pokiaľ `--caption-cost-per-call-usd` neposkytne explicitný pozitívny odhad na volanie; skript nikdy nevytvára ani jeden výsledok.

Každá snímka je obmedzená na 4 MiB, všetky surové snímky spolu na 23 MiB a serializovaná odpoveď brokera na 32 MiB. Súkromný dočasný adresár je odstránený v `finally`. OmniRoute nezlučuje FFmpeg a neprijíma vlastnú cestu k spustiteľnému súboru. Pred titulkovaním most aplikuje konzervatívny vizuálny deduplikáčný prechod: každý JPEG je zredukovaný na 16×16 odtieňov šedej a porovnáva sa iba s poslednou zachovanou snímkou. Pre požadovaný rozpočet titulkov nad jednu snímku, extrakcia poskytuje obmedzený kandidátsky bazén až do dvojnásobku tohto rozpočtu a nikdy viac ako 16 snímok. Požadovaný limit sa aplikuje iba po deduplikácii, pričom prvé a posledné vybrané kandidáty sú zachované počas konečného zúženia, keď je rozpočet aspoň dva. Verziovaná politika `grayscale-16x16-mean-cells-v2` používa väčšiu z priemernej luminiscenčnej delta a pomeru thumbnail buniek, ktorých normalizovaná delta je aspoň 0.05. Prah duplikátov je konštanta 0.04, vybraná pre predvídateľnosť, nie ako nastavenie runtime. Tento sekundárny signál s vysokým kontrastom zachováva malé pohyby a viditeľné zmeny textu, ktoré môže porovnanie iba s priemerom skryť. Chyby komparátora alebo dekodéra zlyhávajú otvorene a zachovávajú pokrytie. Výstupné metadáta oddeľujú extrahovaných kandidátov, úspešne použitých snímok a vizuálne duplikáty, ktoré boli zamietnuté.

Výslovne označená časť videa môže požiadať o časovo označený kontaktný list. Most vytvára maximálne 4-stĺpcovú, 16-snímkovú JPEG mriežku. Každá bunka s rozmermi 512 pixelov vypáli svoj časový údaj do vysoko kontrastného spodného pásu, zatiaľ čo rovnaké časové údaje zostávajú v textových metadátach pre downstream asociáciu a audit. Celý JPEG zostáva obmedzený na 32 MiB. Ak `sharp` nemôže dekódovať alebo zostaviť mriežku, most prechádza na jednotlivé JPEG snímky; zrušenie klienta sa stále propaguje cez operáciu listu.

Dôkazy o propagácii sú zámerne oddelené od syntetického zloženia mikrobenchmarku. `scripts/perf/video-bridge-contact-sheet-eval.ts` definuje schému verziovaného A/B systému pre reálne modely vízie kompatibilné s OpenAI. Meria poskytovateľom hlásené tokeny, latenciu steny end-to-end (vrátane zloženia listu), počet volaní modelu a faktickú retenciu definovanú manifestom. Surové odpovede modelu nie sú zapísané do správy; uchovávajú sa iba SHA-256 digesty a zodpovedajúce ID faktov. Systém nerobí žiadne sieťové alebo platené volania modelu, pokiaľ nie je zadané `--execute-real` a `--model`, `OMNIROUTE_BASE_URL` a `OMNIROUTE_API_KEY` sú nakonfigurované. Bez tohto explicitného reálneho behu zostáva jeho strojovo čitateľný verdikt `HOLD`; syntetické merania payload/počet volaní samy o sebe nie sú dôkazom o propagácii.

Samostatný `scripts/perf/video-bridge-promotion-eval.ts` spracováva pozorovania FU-07 alebo FU-09. Prijatie propagácie vyžaduje všetkých osem syntetických scenárov plus sanitizovaný reálny klip, aspoň tri merané opakovania na rolu a prípad, všetkých desať deklarovaných metrík, digesty zamrznutých médií/promptov/očakávaných faktov/nastavení, jedinečné ID pozorovaní a overený zasadený A/B poriadok. Potvrdenie vykonania viaže digest corpus, presný SHA kandidáta a revíziu modelu. Chýbajúce alebo neplatné merania zostávajú `HOLD`, vrátane CPU nad 30 s, vrcholného RSS nad 512 MiB alebo predanalýzy nad 30 s. Tieto sú obmedzeniami na prijatie dôkazov, nie novou zárukou vynútenia RSS počas behu.

FU-07 vyžaduje minimálne 98% udržanie kvality a p95 latenciu nie viac ako 1.2x
základnej hodnoty, plus buď 0.05 absolútny vyvážený priemerný zisk v pripomienkach pri
ekvivalentných priemerných volaniach popisov, alebo aspoň 10% menej priemerných volaní
popisov po deduplikácii. FU-09 vyžaduje minimálne 0.85 kvalitu, 95% udržanie, 20% p95
redukciu latencie a 10% redukciu tokenov. Kritická strata faktov, dodržiavanie
injekcií alebo chýbajúce použitie bráni povýšeniu. Jedno vykonanie nemôže povýšiť nič:
`--previous-report` potvrdzuje dve odlišné, neprekrývajúce sa, po sebe idúce
spôsobilé vykonania tej istej politiky/modelu revízie/kandidáta/korpusu. Experiment
so vzorkovaním nemôže potvrdiť experiment s kontaktným listom.

Zberatelia by mali hodnotiť odpovede v pamäti a uložiť `responseDigest` plus
metriky a väzby pozorovaní, nikdy text odpovede. Spotrebiteľ tiež číta
dedičstvo surových pozorovaní, ale nikdy nekopíruje tento text do svojich správ. Presne
jedno z `responseDigest` alebo `rawResponseText` je akceptované pre každé pozorovanie.
Verziovaný povolený zoznam zostáva prázdny s nemenným predvoleným `hold`. Spôsobilý
záznam vyžaduje svoj referenčný dôkaz, politiku, revíziu modelu, presný SHA kandidáta,
manifest digest a dva odlišné ID behu; konfliktné kontexty sú zamietnuté. Tieto
metadáta sú audítorskou zmluvou, nie dôkazom, že odkazovaný súbor obsahuje
skutočné merania. Skontrolujte skutočné príjmy pred pridaním akéhokoľvek záznamu.
Štatistiky správy a Video dashboard odhaľujú konzervatívnu pripravenosť. Konfigurovaný
alias modelu sám o sebe nezakladá jeho revíziu alebo bežiaci SHA kandidáta, takže
aktuálny dashboard hlási `HOLD` namiesto opätovného použitia spôsobilosti z iného
vykonávacieho kontextu. Explicitný experimentálny výber zostáva oddelený od
povýšenia; žiadne predvolené nastavenie sa automaticky nemení.

Volajúci môžu pripojiť voliteľné pole `transcript.cues` k podporovanej časti videa,
keď už majú zarovnaný text. Každý cue musí obsahovať `text`, konečný `start`/`end`
interval v rámci skúmanej dĺžky a schválený `source` (`client`, `embedded` alebo
`audio-bridge`); `confidence` predvolene je `1` a musí zostať medzi `0` a `1`.
Presné duplicitné cues sú zlučované. OmniRoute nikdy nezačne transkripciu z týchto
metadát: validované cues sú skopírované do popísaného výsledku so zdrojom,
dôverou a intervalom a sú zobrazené ako nedôveryhodné pozorovania spolu s
popismi snímok. Neplatný, mimo rozsahu alebo bez pôvodu text je zamietnutý
namiesto toho, aby bol zmiešaný do prúdu popisov. Obe kanály textu v tele
žiadosti normalizujú dodaný pôvod na `client`, vrátane samo-oznámených
`embedded` alebo `audio-bridge` označení. Iba adaptér vlastnený serverom môže
priradiť tieto dôveryhodné označenia prostredníctvom argumentu len pre kód
`trustedSource`; pole JSON žiadosti nemôže dosiahnuť tento argument. Text
transkripcie zostáva nedôveryhodným obsahom odvodeným od médií, bez ohľadu na
jeho pôvod, a nikdy nesmie určovať autorizáciu.

Pokročilý volajúci môže poskytnúť stopu `audioTranscript` pre to isté video;
je považovaná za text poskytnutý klientom, nie dôkaz serverovej transkripcie.
Fúzna šev spúšťa vizuálne a audio pozorovania pod jedným termínom a signálom
na zrušenie, usporiada ich na spoločnej časovej osi, zlučuje presné duplikáty a
hlási čiastočný výsledok, keď iba jedna strana uspeje. Neplatný `audioTranscript`
sa degraduje na tento čiastočný výsledok — vizuálny popis sa uchováva a audio
vetva zaznamenáva sanitizovaný kód zlyhania — namiesto toho, aby zlyhala celá
video. Dostupnosť na vetve, čiastočná vlajka a sanitizované kódy zlyhania sú
uchované v popísanom výsledku, v metadátach ochranného pásma
(`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), v
metadátach cache výsledkov a v počítadlách fúzie mostu. Predvolená cesta Video
Bridge nevyvoláva prevod reči na text ani nestiahne druhú kópiu médií; bez tejto
explicitnej stopy zostáva iba video.

**Udržanie transkripcie (#12150 P1).** Toto sa automaticky uplatňuje vždy, keď
Video Bridge (samo o sebe opt-in) vykreslí cue transkripcie — neexistuje
samostatná vlajka pre udržanie. Keď žiadosť vykreslí akýkoľvek cue transkripcie
(oznámený volajúcim `transcript` alebo zlúčený `audioTranscript`), ochranné
pásmo ho označuje ako `videoBridgeObserved` a vytvára redigovaný tieň
video popisu — identické vykreslenie, v ktorom je telo voľného textu každého
cue nahradené `"[redacted-video-transcript]"`, vytvorené substitúciou
štruktúrovaného poľa cue pred zostavením reťazca (nikdy nie analýzou
zplošteného textu, takže žiadny obsah cue — nepriateľský alebo obyčajný,
vrátane telies obsahujúcich `]`, ako napríklad `"[inaudible]"`/`"[music]"` —
nemôže prežiť). Uložené telo žiadosti v protokole vymení každú časť textu
odvodeného od videa za tento redigovaný tieň, zodpovedajúci obsahovej
rovnosti; ukotvenie `fullText` sa znovu prečíta z dokončeného predvolania
ochranného pásma, takže zhoda stále úspešne prebieha po neskorších
ochranných pásmach (maskovače PII a poverení, priority 10/95) prepíšu
text popisu na mieste a po systémovom výzve/predaní/injekcii pamäte
preformátujú pole správ. Telo odoslané nahor modelu zostáva nezmenené. Pozorovaná
žiadosť tiež nepopulárne zapĺňa žiadnu trvalú pamäť (obidve extrakcie
odvodené z žiadosti a odpovede sú preskočené), takže vlastná odpoveď modelu
nemôže odrážať text transkripcie do pamäte.

**Surové video polia (#12430).** Keď je most povolený a natívna podpora videa je
neznáma alebo chýba, definované polia `transcript`/`audioTranscript` tiež
aktivujú `videoBridgeObserved`, aj po zlyhaní popisu alebo limite `maxVideos`.
`null` a prázdne reťazce sa počítajú; chýbajúce polia a nemediálne metadáta
nie. Uložené kópie redigujú tieto polia alebo vynechávajú žiadosť, a cache/pamäť
sú obídené.

Na týchto záložných cestách sa platné volacie signály stávajú podporovanými `text`/`input_text` časťami namiesto nštandardných polí poskytovateľa. Obe stopy dodané v požiadavke zostávajú nedôveryhodnými `client` pozorovaniami, s explicitným varovaním, že video nebolo opísané a časové pečiatky neboli overené voči médiu. Existujúce rozpočty 256-signálov/64-KiB celkového a na signál sa vzťahujú na obe stopy dohromady; časové pečiatky musia spadať pod brokerov strop 600 sekúnd a akékoľvek dodané zameranie. Neplatné stopy sú odmietnuté, nie sú posielané ako ľubovoľný text; platný súrodenec môže byť stále použitý, pokiaľ nie je prekročený ich kombinovaný rozpočet. Null/prázdne polia nepridávajú žiadny text. Tento záložný mechanizmus nepridáva žiadne načítanie médií ani prepisovanie. Polia rozšírenia prepisu sú odstránené z nosiča záložného videa a jeho `video_url`/`source` objektov. OpenAI wire allowlist zostáva prísny; neznáme natívne nosiče videa zostávajú dostupné a známe ciele iba s textom si zachovávajú bezpečnostné značky. Štruktúrované tiene redakcie chránia pridaný text prepisu, zatiaľ čo pôvodná požiadavka vlastníka volania zostáva nezmenená. Natívne podporované ciele a zakázané mosty si zachovávajú svoje existujúce obchádzacie správanie.

Ďalšie uchované kópie používajú rovnaký signál pozorovanej požiadavky. Surový snímok požiadavky klienta pred ochranou, v pamäti čakajúca požiadavka a log predčasne odmietnutej požiadavky štrukturálne nahrádzajú polia prepisu vo video častiach; reťazcové výzvy syntetizované fázami pipeline a odovzdávanie kontextu sú redigované na sinku trvalého tela požiadavky. Trvalý marker `video_content_removed` spôsobuje, že pokračovanie `previous_response_id` zlyhá uzavretím namiesto rekonštrukcie textu, ktorý bol úmyselne odmietnutý. Ak pozorovaná požiadavka stratí svoj redakčný tieň pred logovaním, alebo ak dokonca jeden z niekoľkých video tieňov nezodpovedá po neskorších mutáciách požiadavky, uchované telo požiadavky je úplne vynechané namiesto uchovania čiastočne redigovaného prepisu.

Pre pozorovanú požiadavku môže odpoveď modelu citovať akúkoľvek časť prepisu bez štruktúrovanej hranice signálu. Jej trvalý log volania `responseBody` je preto nahradený markerom vynechania; podrobný artefakt pipeline (ktorý môže obsahovať upstream/klientské telá a prúdy) nie je uchovaný. Sémantické, idempotentné a reasoning-replay cache obchádzajú čítania a zápisy pre túto požiadavku. Požiadavka poskytovateľa a odpoveď viditeľná pre klienta zostávajú nezmenené. Predčasné keepalive bajty sú vyčerpané z dočasného bufferu, keď je podrobný artefakt vynechaný. Kirova chybne formátovaná EventStream varovanie hlási iba počet bajtov payloadu, nikdy jeho obsah alebo surovú chybu JSON parsera.
Toto netvrdí, že každá nesúvisiaca diagnostika poskytovateľa/pluginu bola auditovaná; širší prehľad uchovaných sinkov je sledovaný v #11658.

Interný `/api/modality-bridge/video/drilldown` životný cyklus je samostatný, loopback/token-authentifikovaný cache substrát. Každá operácia tiež vyžaduje kanonické nepriehľadné ID hlavného subjektu. Predtým, ako je povolený produkčný volajúci, musí odvodiť toto ID z autentifikovaného nájomcu a nikdy nesmie poslať hodnotu vybranú klientom. Kľúče cache viažu toho hlavného subjektu na kanonické ID relácie a video-referencie, ukladajú iba ich kľúče odvodené z SHA-256 a obmedzujú čítania a vymazania na toho istého hlavného subjektu. Cache uchováva maximálne 16 odvodených JPEG snímok na položku, vyprší ich po desiatich minútach a podporuje obmedzené čítania `start`/`end` alebo explicitné vymazanie relácie.

Každý hlavný subjekt je obmedzený na 16 položiek a 64 MiB kanonických JPEG dát. Tieto limity sú nezávislé od globálneho stropu 64 položiek/256 MiB: tlak na kvótu hlavného subjektu vyháňa iba najmenej nedávno používané položky toho hlavného subjektu predtým, ako sa zváži globálne LRU vyháňanie. Expirujúce položky sú vyčistené z účtovania hlavného subjektu aj globálneho pri aktivite cache, zatiaľ čo zrušenie a zlyhanie validácie nezaväzujú čiastočnú náhradu.

Cache odmieta nekanonické Base64, nadbytočné vyplnenie, ne-JPEG médiá, chybne formátované alebo skrátené JPEG a JPEG, ktoré produkujú varovanie počas obmedzeného dekódovania celej snímky `sharp`. Každý prijatý obrázok je znovu kódovaný ako kanonický JPEG, odvádza šírku a výšku z dekódovaných bajtov namiesto dôvery v polia volajúceho a odmieta akékoľvek koncové polyglot bajty namiesto ich uchovania. Iba obmedzený kanonický komprimovaný buffer je účtovaný obom kvótam. Limit JSON wire zahŕňa Base64 overhead pre strop 32 MiB dekódovaného vstupu. Každé
uchované odvodenie zaznamenáva svoj validovaný JPEG formát/rozlíšenie, politiku vzorkovania, verziu odvodenia, čas vytvorenia, serverom vypočítaný hash obsahu a hash rodičovského odkazu plus hash rodičovského obsahu dôveryhodného volajúceho. Zrušenie je kontrolované medzi asynchrónnymi fázami dekódovania/hashovania pred atómovým potvrdením cache.

Producent v produkcii znovu používa už odvodené snímky brokera iba po úspešnej vizuálnej analýze, bez druhého sťahovania/vyťažovania videa. Vyžaduje operátora `modalityBridgeVideoDrilldownEnabled=true`, prísne per-part `drilldown: true` a autentifikovaný ID záznam API-kľúča. Klientom deklarované hodnoty hlavného subjektu/relácie nikdy nezakladajú vlastníctvo. Bez všetkých troch podmienok nehashuje, nezmenšuje ani neuchováva ďalšie snímky. Zlyhanie uchovania zachováva použiteľnú vizuálnu odpoveď. Súhlasné požiadavky obchádzajú cache výsledkov celého videa, takže uložené výsledky nikdy neprehrávajú obsluhy.

Úspešné JSON a SSE odpovede vystavujú maximálne štyri nepriehľadné handle v obmedzenom
`x-omniroute-video-drilldown` hlavičke. Autorizované prehliadače môžu čítať túto hlavičku
bez rozšírenia CORS politiky pôvodu. Nové handle používajú `v1.<32-byte random base64url
token>`, a registrácia uchováva iba
ich SHA-256 hash. Čítač/parsing hlavičky tiež akceptuje legacy 64-hex tokeny.
Autentifikovaný verejný spotrebiteľ je
`GET /api/v1/video-bridge/drilldown?handle=...`, nezávisle sprístupnený pomocou
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Explicitne uložené false odníma
prístup aj keď je povolený legacy `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env
fallback. Produkčné uchovávanie má analogický legacy
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Obe fallbacky sú predvolene vypnuté.

Spotrebiteľ odvodzuje vlastníctvo z autentifikovaného kľúča, aplikuje politiku kľúča a
vracia rovnaké 404 pre neznáme, expirované a handle iného kľúča. Akceptuje
`variant=preview|standard|detail` (maximálny JPEG rozmer 320/640/1280, nikdy neupscalovaný),
`limit=1..8` (alebo legacy `frames` alias, nikdy oboje), nula-založenú `page`, a voliteľné
`start`/`end` sekundy zamerania. Duplicitné
dotazovacie kľúče a obrátené okná zamerania sú zamietnuté. Každá vrátená varianta má hash
svojho skutočného obsahu a skutočné metadáta rozlíšenia, prepojené na uchovávaný zdroj.
Varianty sú odvodené pri čítaní, nie sú uložené ako extra uchovávané kópie. JSON
odpoveď, vrátane Base64/envelope, je obmedzená na 32 MiB; nadmerná stránka vráti
413 a klient musí požiadať o menej snímok. Čítania kontrolujú zrušenie okolo každého
zmienky a znovu kontrolujú platnosť handle pred vrátením. `DELETE` vlastníkom je idempotentné;
vymazanie alebo vypršanie TTL uvoľňuje uchovávaný zdroj a účtovanie používania.

Zdieľaný obchod je procesovo-lokálny: handle vypršia pri reštarte a nie sú prenosné
medzi nezávislými OmniRoute procesmi. Štatistiky správy vystavujú efektívne uchovávanie/
diaľkovú politiku a agregované uchovávané položky/bytové len, nikdy médiá, referencie,
hlavné ID alebo handle. Panel nastavení videa zobrazuje tieto hodnoty a môže uchovávať
obe prepínače súhlasu. Táto dokumentácia implementácie nie je dôkazom o živom nasadení alebo
propagácii; akceptácia reálneho modelu je sledovaná samostatne.

Rámce sú titulkované sekvenčne s nakonfigurovaným Video modelom. Prázdny
Video override dedí nastavenie Vision; ak sú obidve prázdne, Vision
auto-router vyberá efektívny model schopný vízie. Úspešné titulky
nahrádzajú pôvodnú časť stabilným `[Video description:` prefixom, ktorý tiež
označuje text ako nedôveryhodnú mediálnu pozorovanie a hovorí downstream
modelom, aby sa riadili pokynmi nájdenými v médiu. Kľúče cache titulkov rámcov
zahŕňajú JPEG bajty, prompt, časovú pečiatku a efektívny model; iba úspešné
titulky sú cachované. Cache položky uchovávajú skutočný úspešný model producenta,
vrátane fallback modelu; most hlási `mixed`, keď rôzne rámce
boli vyprodukované rôznymi modelmi. Cache hit znovu používa identitu toho producenta
namiesto premenovania na požadovaný plán smerovania. Celkový video výsledok
cache je kľúčovaný na každý vstup, ktorý mení výstup — prompt, efektívny
model, politiku vzorkovania, počet rámcov, režim sémantickej analýzy, SHA-256
otlačok normalizovanej nápovedy zamerania, okno zamerania, `transcript`,
`audioTranscript`, a vlajku kontaktnej stránky — takže zmena akéhokoľvek z týchto
dimenzií je cache miss, nikdy zastarané opätovné použitie. Verzia politiky vizuálnej deduplikácie,
práh a obmedzený počet kandidátskych rámcov sú tiež explicitné v
kľúči a metadátach výslednej cache; zmena politiky preto nemôže znovu použiť zastaraný
popis celého videa. Metadata výslednej cache v4 uchováva režim a
otlačok, nikdy surovú používateľskú úlohu. Metadata guardrail hlási
ako požadované, tak aj efektívne režimy analýzy; požadovaný režim `focused` bez
použiteľného používateľského textu je hlásený ako efektívne `full`.

Guardrail extrahuje každú podporovanú časť videa, ale popisuje nie viac ako
`modalityBridgeVideoMaxVideos`. Pre cieľ, ktorý sa preukázal ako
`supportsVideo === false`, zlyhané a nadlimitné videá sa stávajú explicitnými bezpečnými
textovými značkami, takže žiadne surové video neprežije. Keď je schopnosť neznáma, tieto časti
uchovávajú svoj video nosič; akýkoľvek fallback transcript nasleduje obmedzenú textovú
konverziu vyššie. Ciele s `supportsVideo === true` obchádzajú most.
Signál o zrušení požiadavky klienta sa šíri cez sťahovanie, broker queue,
podprocesy a volania titulkov; zrušenia zastavujú medzi videami a nikdy neotvárajú
na surové médiá.

Nastavenia behu sú DB-podporované a Zod-validované:

| Kľúč                                | Predvolené  | Rozsah / správanie                                                                                            |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Voliteľný runtime, opt-in                                                                                     |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` zachováva generické titulky; `focused` používa obmedzený, nedôveryhodný kontext posledného používateľa |
| `modalityBridgeVideoModel`          | `""`        | Dediť model Vision Bridge                                                                                     |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                          |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, alebo proporcionálne `segment_aware`; zlyhanie detektora prechádza na `uniform`     |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                           |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                |

Legacy uložené hodnoty časového limitu videa nad 120 sekúnd sú obmedzené na
termín brokera; nové nastavenia nad tento limit sú zamietnuté.
`GET /api/modality-bridge/video/runtime` vyžaduje dôveryhodnú pečiatku loopback
lokality pred autentifikáciou alebo runtime skúmaním, potom vyžaduje správu
autentifikáciu. Vracia iba `available`, sanitizované verzie FFmpeg/ffprobe a
pevný dôvod, keď je runtime nedostupný. Interný extrakčný koncový bod nie je
verejné API na nahrávanie: saturácia fronty vracia `503` plus `Retry-After`,
odpojenie volajúceho vracia `499` a pevný termín brokera vracia `504`. Prevedené odpovede pridávajú
`video->text;model=<visionModel>;parts=<videos>` do centrálneho
`x-omniroute-modality-bridge` hlavičky bez odstránenia segmentov Vision alebo Audio.

### PII Masker (`piiMasker.ts`)

Beží na **oboch** fázach.

- **`preCall`** klonuje payload, prechádza `system`, `messages`, `input` a
  `prompt` (vrátane obyčajných reťazcových položiek) a aplikuje `processPII()` (z
  `@/shared/utils/inputSanitizer`) na reťazcové polia `content`/`text`. Keď
  `PII_REDACTION_ENABLED=true`, zistené PII je redigované v odchádzajúcom
  payload. Toto je nezávislé od `INPUT_SANITIZER_MODE` (ktoré iba ovláda
  politiku injekcie promptu). Keď je redakcia vypnutá, volanie zaznamenáva počty
  detekcie bez prepísania obsahu.
- **`postCall`** hlboko klonuje odpoveď, spúšťa `sanitizePIIResponse()` plus
  maskér tvaru Responses-API (`maskResponsesOutput` — pokrýva
  `output_text` a `output[].content[].text`). Ak dôjde k akejkoľvek redakcii,
  upravená odpoveď nahrádza pôvodnú.

Ochranný mechanizmus nikdy nezablokuje; iba anotuje (`meta.detections`,
`meta.redacted`) alebo prepíše.

### Prompt Injection (`promptInjection.ts`)

Detekuje nepriateľské štruktúry v obsahu poskytnutom používateľom a vynucuje
konfigurovanú politiku. Správanie je riadené premennými prostredia a možnosťami
konštruktora:

| Nastavenie      | Env var                                                                                                | Predvolené | Účinok                                                                                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Povolené        | `INPUT_SANITIZER_ENABLED`                                                                              | `true`     | Keď je `false`, ochranný mechanizmus sa skráti.                                                                                                                                                        |
| Mód             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`     | Politika injekcie: `block`, `warn` alebo `log`. (`redact` je akceptované pre spätnú kompatibilitu, ale **neodstráni** text injekcie; požiadavka na prepísanie PII je riadená `PII_REDACTION_ENABLED`.) |
| Prah blokovania | `blockThreshold` možnosť / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`     | Minimálna závažnosť potrebná na blokovanie. Stredná je iba na pozorovanie ako predvolené.                                                                                                              |

**Prednosť módu** (`getMode`): volajúce `options.mode` →
`INJECTION_GUARD_MODE` **DB funkcia-flag override** (Dashboard → Nastavenia →
Funkčné flagy) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Prekrytie dashboardu teda vyhráva nad premennými prostredia, takže UI funkčných
flagov ovláda behúci ochranný mechanizmus naživo (bez reštartu). Čítanie z DB je fail-safe:
ak dôjde k chybe, ochranný mechanizmus prechádza na správanie založené na prostredí, a keď nie je
nastavené žiadne prekrytie, správanie je identické s riešením iba na základe prostredia.

Zdroje detekcie:

1. `sanitizeRequest()` z `@/shared/utils/inputSanitizer` (zdieľaná detekčná
   sada používaná inde v pipeline).
2. Vstavané `DEFAULT_GUARD_PATTERNS` (aktuálne `system_override_inline` a
   `markdown_system_block`, obidve s vysokou závažnosťou).
3. Voliteľné `customPatterns` odovzdané cez možnosti konštruktora (reťazce, regex,
   alebo `{ name, pattern, severity }` záznamy).

Keď `mode === "block"` **a** aspoň jedna detekcia spĺňa prah závažnosti,
`preCall` vracia `{ block: true, message: "Žiadosť zamietnutá: zistený podozrivý obsah" }`. V
`warn`/`log` módoch ochranný mechanizmus zaznamenáva, ale umožňuje volanie. Zdieľaný pomocník
`evaluatePromptInjection()` je tiež exportovaný pre volajúce, ktoré potrebujú vyhodnotiť
prompty bez prechádzania registráciou.

**Scan bound (v3.8.20):** detektor kontroluje iba **prvých 16 KB** spojeného textu promptu —
`MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtov) v
`src/shared/utils/inputSanitizer.ts`. Obidve `detectInjection()` a
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` pred spustením
cyklu vzorov. Injekčné direktívy sa nachádzajú blízko vrchu vstupu, takže to
obmedzuje CPU/GC regexu na multi-hundred-KB payloadoch bez oslabenia detekcie (por. #3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Beží na **oboch** fázach, posledný v predvolenom reťazci (priorita `95`). Rediguje
známe vzory API-kľúčov / tajných tokenov z odchádzajúceho payloadu (obsah správy,
argumenty volania nástroja, výsledky nástroja) **a** odpovede poskytovateľa, takže
credential vložený do promptu (alebo echo späť výsledkom nástroja) nie je uniknutý
k upstream poskytovateľovi alebo späť k klientovi.

- **Iba na základe súhlasu**, rovnaká konvencia ako redakcia PII (tvrdé pravidlo #20-adjacent):
  zakázané, pokiaľ `settings.credentialRedactionEnabled === true` **alebo**
  `CREDENTIAL_REDACTION_ENABLED=true`. Keď je to vypnuté, ochranný mechanizmus je neaktívny —
  nikdy nezablokuje a nikdy neprepisuje.
- `redactCredentials()` prechádza celým stromom payload/odpovede (`walkValue()`,
  bezpečné proti zneužitiu prototypu, bezpečné voči cyklom pomocou `WeakSet`) a nahrádza zhody
  s `[REDACTED:<type>]` zástupným symbolom, klonujúc iba vetvy, ktoré sa skutočne zmenili.
- `CREDENTIAL_PATTERNS` pokrýva kľúče poskytovateľov LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokeny (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), platobné kľúče (Stripe, Square), cloud
  kľúče (AWS access key, Twilio, SendGrid, Mailgun), súkromné kľúče / JWT,
  reťazce pripojenia nesúce poverenia (`mongodb://user:pass@...`, atď.), a
  generický vzor hlavičky `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Kľúče tvaru hlavičky (`authorization`, `x-api-key`, `api-key`,
  `apikey`) sú redigované štrukturálne (iba hodnota, schéma prefix ako
  `Bearer `/`Basic ` zachovaná) namiesto pomocou generického textového regexu.
- Ochranný mechanizmus nikdy nezablokuje; iba prepisuje (`modifiedPayload` /
  `modifiedResponse`) a anotuje (`meta.credentialsRedacted`, `meta.count`).

Regresná ochrana: `tests/unit/credential-masker-guardrail.test.ts`.

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
