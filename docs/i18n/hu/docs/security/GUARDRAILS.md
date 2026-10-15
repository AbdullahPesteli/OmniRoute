# Guardrails (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Hiteles forrás:** `src/lib/guardrails/`
> **Legutóbb frissítve:** 2026-08-29 — v3.8.51 (a Video Bridge átiratának eredetét a hívó deklarálja,
> a szerver még nem ellenőrzi — pontosítva a #11661 alapján)

A guardrailek biztonsági, szabályzati és tartalomátalakítási előírásokat érvényesítenek az OmniRoute és a külső szolgáltatók közötti határon. Minden guardrail megvizsgálhatja (és opcionálisan elutasíthatja, átalakíthatja vagy annotálhatja) a kérés hasznos adatait (`preCall`) és a külső szolgáltatók válaszait (`postCall`).

A rendszer **hiba esetén nyitott**: ha egy guardrail végrehajtás közben kivételt dob, a regisztrációs adatbázis rögzíti a hibát, és a kérés meghiúsítása helyett a következő guardraillel folytatja. A blokkolás mindig explicit döntés (`block: true`), soha nem véletlen.

## Beépített Védőkorlátok

A regisztráció automatikusan betölti a hat védőkorlátot prioritási sorrendben importáláskor
(lásd `registry.ts` → `registerDefaultGuardrails()`):

| Prioritás | Név                 | Színpad(ok)    | Fájl                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

A kisebb prioritású számok futnak **először**.

### Vision Bridge (`visionBridge.ts`) — Modalitás Híd PR-1

Elfogja a képet tartalmazó kéréseket, amelyek **nem-vízió modellek** felé irányulnak, és vagy
átirányítja az egész kérést egy vízióra képes modellhez, vagy a képi
részeket egy konfigurálható vízió modelltől származó szöveges leírásokkal helyettesíti az upstream hívás előtt. Ez lehetővé teszi, hogy a csak szöveget szolgáltató szolgáltatók átláthatóan kezeljék
a multimodális terheket.

Folyamat:

1. Ugrás, ha a célmodell már támogatja a víziót (kivéve, ha szerepel a
   kényszerített híd listában `isVisionBridgeForcedModel`).
2. Kép részek kinyerése `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`) segítségével, amely a **egységes média
   detektor** `detectMediaParts()`-ra delegál `open-sse/utils/mediaParts.ts`-ben — az
   egyetlen igazságforrás, amelyet a kombinált kompatibilitási szűrő oszt meg.
   A kinyerés engedélyezett a `replaceImageParts` által visszailleszthető alakzatok
   legfelső szintű részeire (a kinyerés↔helyettesítés szerződés): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, és Responses API `input_image`. A beágyazott találatok és
   csak jelző alakzatok kombinált szűrő anyagnak számítanak, és soha nem kerülnek kinyerésre.
   Ugrás, ha nem található.
3. Futási konfiguráció megoldása `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): az új `modalityBridge*`
   beállítási kulcsok nyernek; a régi `visionBridge*` kulcsok egy **egy ciklusos
   visszaesés** (visszagörgetési ablak). Ugrás bármilyen média bejárása előtt, amikor a
   híd le van tiltva.
4. A módválasztó (`modalityBridgeVisionMode`, lásd az alábbi táblázatot) dönti el
   az átirányítást vagy a leírást. Az átirányítás `modifiedPayload`-ot ad vissza, amelyben csak a `model`
   lett kicserélve, plusz meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Leíró útvonal: korlátozza a képeket `maxImages`-re, összeállítja a feladat-tudatos promptot,
   konzultál a leíró gyorsítótárral, párhuzamosan hívja a vízió modellt
   (`Promise.allSettled`), és injektálja az `[Image N]: <description>` szöveges részeket a
   helyükre. A sikertelen leírás `null`-t ad vissza, és az eredeti kép rész **megmarad**
   (#4012) — kivéve a kombinált leíró úton, amikor minden leírás meghiúsult, ahol egy
   megerősített nem-vízió upstream `(unavailable — no vision-capable provider connected)` stubot kap helyette (#8430).
6. Visszaadja a `modifiedPayload`-ot + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Módválasztó (`modalityBridgeVisionMode`)

| Mód        | Alapértelmezett | Viselkedés                                                                                                                                                                                                                                                                                                                 |
| ---------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔               | Régi heurisztika, érintetlen (#6640/#7204): nem-kombinált/`auto/` modellek a legjobb vízió modellhez irányítanak, hacsak az eredeti modellnek már nincsenek használható hitelesítő adatai (akkor leír); a kombinált célok mindig leírnak.                                                                                  |
| `describe` |                 | Mindig leír — az átirányítási blokk teljesen ki van hagyva; a felhasználó által választott modell mindig válaszol.                                                                                                                                                                                                         |
| `reroute`  |                 | Kényszerített átirányítás: a hitelesítő adatokkal rendelkező modell védelme megkerülésre kerül. Az átirányítási **cél** hitelesítő védelme továbbra is érvényes — ha nincs használható vízió cél, a kérés leírásra esik vissza, így a nyers képek soha nem érik el a csak szöveget szolgáltató háttérszolgáltatót (#8430). |

A kényszerített módok **előtt** rövidre zárják az automatikus heurisztikát; az `auto` viselkedés
byte-azonos a pre-PR-1 védőkorláttal.

#### API-kulcs hatókör (`visionBridgeKeyScope.ts`)

Amikor a hívó API kulcsa korlátozza az `allowedConnections`, kvóta medencék
(`allowedQuotas`) vagy modellek (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), a híd csak
átirányítási és leíró modelleket választ, amelyeket a kulcs használhat, azokon a kapcsolatokon, amelyeket a kulcs használhat. A leíró hívás ezután mindig átmegy az OmniRoute önhurokán a
`x-omniroute-self-loop-key-id` fejléc segítségével, így a fogadó chat kérés
újra érvényesíti a kulcs kapcsolatát és modell politikáját. Az `enforceApiKeyPolicy()`
csak ezt a fejlécet tiszteletben tartja az önhurok birtokosával együtt, így csak
szűkítheti a hozzáférést, és egy azonosító, amely nem oldódik meg, elutasításra kerül.

Ha a kulcs számára nem engedélyezett vízió modell, a leíró útvonal félreáll, és
a kérés változatlanul átmegy, ugyanaz a fail-open viselkedés, mint egy letiltott
védőkorlát esetén (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
A kulcs nélküli kérések, és a kulcsok, amelyeknek nincsenek ezek a korlátozásai, pontosan úgy viselkednek, mint korábban.

#### Feladat-tudatos leíró prompt (`modalityBridgeVisionTaskAware`)

Alapértelmezett **true**. A `composeVisionPrompt()` (`visionBridgeHelpers.ts`) a **legutolsó felhasználói üzenet** szövegét (500 karakterre rövidítve) hozzáfűzi az alap leíró prompt-hoz, irányítva a leírást arra, amit a felhasználó valójában kért (codex-vision-proxy minta), és megkérve a látásmodellt, hogy transzkibálja a látható szöveget. Ha a jelző ki van kapcsolva — vagy nincs felhasználói szöveg — az alap prompt változatlanul használatos.

A leíró önhurok saját OpenAI-kompatibilis kérése (`callVisionModelSingle()` a `visionBridgeHelpers.ts`-ben) mindig `image_url.detail: "high"`-t kér — feltétel nélkül, minden hívó/szolgáltató számára, nem függően semmilyen kliensjeletől. Az alacsony részletességű mintavételezés rontja az OCR pontosságát pontosan azon szöveg-transzkibálási feladat esetén, amelyet ez a prompt kér, így a leíró hívás mindig magas részletességet kér, függetlenül attól, hogy az eredeti bejövő kérés milyen részletességi szintet használt. Ez csak a belső leíró kérés törzsét érinti; nem változtatja meg, hogyan továbbítja az OmniRoute a hívó saját `image_url.detail`-jét a fő kérésen — ez az alapértelmezett külön alkalmazásra kerül, és csak a detektált OpenCode kliensek esetén, a `defaultImageDetail()`-ben (`open-sse/handlers/chatCore/upstreamBody.ts`). A leíró önhurok Anthropic wire-format ága nem tartalmaz `detail` mezőt, és nem érinti semmilyen alapértelmezett.

#### Leíró kimeneti korlát (`modalityBridgeVisionMaxChars`)

| Kulcs                          | Alapértelmezett | Tartomány          |
| ------------------------------ | --------------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`             | `0` vagy 100–50000 |

A `0` (alapértelmezett) azt jelenti, hogy **nincs korlát** — a `callVisionModel()` által visszaadott leírás változatlanul átmegy, megőrizve a meglévő viselkedést. Bármely 100–50000 közötti érték a leírást `…` utótaggal rövidíti, mielőtt visszaillesztenék `[Image N]: <description>` formátumban (`VisionBridgeGuardrail.preCall()` a `src/lib/guardrails/visionBridge.ts`-ben). Ezt emeljük meg részletgazdag OCR feladatokhoz, ahol az alsóbb modellnek szüksége van a teljes transzkibálásra; csökkentsük, hogy korlátozzuk a token használatot a beszédes látásmodellek esetén. A műszerfal mező a Vision fül Speciális paneljén található (`modality-bridge-max-chars` a `ModalityBridgeVisionTab.tsx`-ben), és bármely 1 és 99 közötti értéket 100-ra korlátoz, miközben egy explicit `0` érintetlen marad — a `0` önállóan érvényes Zod érték (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nem csupán az "nincs beállítva" alapértelmezett.

#### Leíró cache (`modalityBridge/bridgeCache.ts`)

Memóriában lévő LRU + TTL cache a leíró kimenetekhez, megosztott folyamat-szinten. Kulcs = `sha256(imageRef + composedPrompt + configuredBridgeModel)` hosszúság-előtag keretezéssel (nincs mezőhatáron belüli ütközés). A modell komponens a **konfigurált** híd modell, nem az a modell, amely valójában válaszolt — a `callVisionModel` belsőleg visszaeshet, és a kísérletek szerinti kulcsok fragmentálnák a cache-t. A sikertelen leírások soha nem kerülnek cache-elésre. Beállítások:

| Kulcs                           | Alapértelmezett | Tartomány |
| ------------------------------- | --------------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`          | —         |
| `modalityBridgeCacheTtlMinutes` | `60`            | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`           | 10–5000   |

#### Távoli kép normalizálás (önhurok leírás/base64 lekérés)

Amikor a híd **távoli** képet kér le — az Anthropic leíró önhívása és a claude-wire-format base64 konverzió (`ensureBase64ImagesForClaudeWire`), mindkettő a `fetchRemoteImageAsDataUri()`-n keresztül a `visionBridgeHelpers.ts`-ben — az eredményül kapott adat URI a `normalizeDataUri()`-n keresztül megy át (`open-sse/utils/imageNormalize.ts`) mielőtt beágyaznák a látásmodell kérésbe. A túlméretezett képek **2048px hosszú élre** vannak kicsinyítve (megegyezve a resize korláttal, amelyet az OpenAI/Anthropic már alkalmaz a szerveroldalon), ami csökkenti a feltöltési bájtokat/latenciát anélkül, hogy megváltoztatná, amit a látásmodell lát. A méretezés a `sharp`-ot használja, amely dinamikus importálással van betöltve: egy olyan platformon, ahol a natív bináris nem tud betöltődni, a `normalizeDataUri()` **soha nem dob** — visszaesik az eredeti bájtok átkonvertálására, így a leíró/base64-konverziós útvonal mindig működik. A nem-kép bájtok (egy lekérés, amely nem adott vissza dekódolható képet) szintén érintetlenül átmennek. Ez a normalizálás a híd által saját önhívásához lekért képekre van korlátozva — soha nem alkalmazzák a hívó nyers átkonvertálási payloadjára, összhangban az opt-in csak mutációs elvvel (Kemény Szabály #20).

#### Beállítási séma + migráció

Az új `modalityBridge*` kulcsok Zod-ellenőrzöttek az `updateSettingsSchema`-ban (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, a `modalityBridgeCache*` hármas, és a `modalityBridgeAudio*` csoport, amelyet az Audio Híd használ. A migrációs `141_modality_bridge_settings.sql` a meglévő örökölt `visionBridge*` értékeket másolja a megfelelő új kulcsokhoz (idempotens, soha nem írja felül az operátor által beállított `modalityBridge*` értéket); az örökölt kulcsok továbbra is elfogadottak olvasási visszaesésként egy kiadási cikluson keresztül.

#### Átláthatósági fejléc + statisztikák

A leíró-transzformált válaszok tartalmazzák az `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`-t (amelyet a `buildModalityBridgeHeader()` épít a `modalityBridge/bridgeStats.ts`-ben, és a `withModalityBridgeHeader()` bélyegez a `src/sse/handlers/chatHelpers.ts`-ben). Az újrairányított kérések **nem** kapnak fejlécet — a payload érintetlen maradt, és a modellcsere már látható a válasz törzsében lévő `model` mezőben.

`GET /api/modality-bridge/stats` (menedzsment hitelesítés, ugyanazon szint mint
`GET /api/settings`) visszaadja a memóriában tárolt, modality-kénti számlálókat
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` a `vision`, `audio` és
`video` esetében. Az `averageLatencyMs` a `latencySamples`-t használja, nem az összes
kísérletet, mint nevezőt; egy időzítés nélküli művelet nem állít elő nulla milliszekundumos
mintát. A `bridged` továbbra is a visszafelé kompatibilis alias a sikeres
konverziókhoz; a sikertelen kísérletek nem növelik ezt.
A számlálók a folyamat újraindításakor alapértelmezés szerint visszaállnak
(telemetria, nem számvitel).

#### Dashboard konfiguráció

A dedikált dashboard oldal
`/dashboard/settings/modality-bridge`. Az URL-címezhető `Vision`, `Audio`,
és `Video` fülök megőrzik a lekérdezési paramétereket a `tab` érték váltása közben.
A Vision fül lehetővé teszi a bekapcsolást, módot, modell kiválasztást (beleértve az automatikus
alapértelmezettet), feladat-tudatos promptokat, fejlett időkorlát/kép/leírás-hossz/cache
korlátokat, futási
számlálókat, és egy védett minta kérést. Az Audio fül is élő: lehetővé teszi
a bekapcsolást, egy STT- csak modellválasztót Automatikus, időkorlát/max-clip korlátokkal, audio
számlálókat, és egy `input_audio` minta tesztet. A Video fül működőképes: jelentést ad
az FFmpeg/ffprobe futási állapotáról — négy explicit UI állapot egyike (`unknown` míg
a probe folyamatban van vagy nem tudott befejeződni, `restricted` egy nem-hurok
dashboard gazdán, ahol a probe-t ügyféloldalon kihagyják, `unavailable` miután
meg lett probe-olva és megerősítve, hogy hiányzik, vagy `available` az FFmpeg/ffprobe
verziókkal) — megőrzi az enable/model/frame/video/timeout korlátokat, szűri a modellválasztót
a vision-képes modellekre, és megjeleníti a video számlálókat.

A korábbi Vision Bridge kártya az AI beállítások alatt egy kompatibilitási link az
új oldalra; már nem rendelkezik a forma második példányával. A Média Szolgáltatók
szintén összekapcsolják a Kép-a-Szöveg és Beszéd-a-Szöveg munkafolyamatokat a megfelelő
Modality Bridge fülökkel anélkül, hogy eltávolítanák a meglévő Beszéd-a-Szöveg játszóteret.

**Ön-hurok belépési megkerülés:** amikor a describe hívás az OmniRoute saját
`/v1` ön-hurokján keresztül halad (nem szabványos szolgáltató modell), a
al-kérés `x-omniroute-admission-bypass: internal`-t küld és a megoldott
ön-hurok hitelesítővel van hitelesítve — a helyi `sk_omniroute` őr helyi módban, vagy az
üzemeltető által konfigurált `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` környezeti kulcs (#1350), így
a `REQUIRE_API_KEY=true` telepítések is futtathatják a describe hívást. A megkerülés
csak ezekre a pontos hitelesítő adatokra érvényes, így a külső kliensek nem használhatják a
fejlécet a belépés megkerülésére.

A régi alapértelmezettek a `src/shared/constants/visionBridgeDefaults.ts`-ben találhatók; az
új mód/feladat-tudatos/cache alapértelmezettek és a beállítások megoldója a
`src/shared/constants/modalityBridgeDefaults.ts`-ben találhatók. A védőkorlát egy
`deps` konstruktor opciót biztosít, így a tesztek hamis `getSettings` és
`callVisionModel` megvalósításokat injektálhatnak.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Megakadályozza az audio-tartalmú chat kérések célba érését, amely nem
ismert audio bemenetet fogadni. Soha nem irányítja át a chat kérést: az audio részeket
az existing OpenAI-kompatibilis multipart végponton keresztül transzkribálják, és a
választott chat modell folytatja a szöveges transzkripcióval.

Folyamat:

1. Oldja meg a `supportsAudio`-t a `getResolvedModelCapabilities()`-on keresztül. Az explicit
   szolgáltató-regisztrációs metaadatok nyernek, majd a statikus modell metaadatok, majd a
   szinkronizált `modalities_input`. Egy deklarált bemeneti lista `audio` nélkül `false`; nincs
   képesség bizonyíték marad `null`. Mind a `false`, mind a `null` aktiválja a
   konzervatív hidat, míg a `true` megkerüli azt.
2. Oldja meg a `modalityBridgeAudio*` beállításokat és vonja ki a splice-olható legfelső szintű
   audio részeket minden üzenetből a megosztott `detectMediaParts()`
   detektoron keresztül. Támogatott vezetékformák az OpenAI `input_audio`, `audio_url`, és
   `source.media_type: "audio/*"`. A beágyazott audio észlelésre kerül az irányítás érdekében, de nem
   távolítják el a splice úton. A munka a `modalityBridgeAudioMaxClips`-el van korlátozva;
   a későbbi részek érintetlenek maradnak.
3. Tiszteletben tart egy konfigurált `provider/model`, vagy hagyja, hogy a `selectAudioBridgeModel()`
   végigjárja az `AUDIO_TRANSCRIPTION_PROVIDERS`-t stabil katalógus sorrendben, és válassza ki az első
   modellt, amely rendelkezik használható aktív szolgáltató hitelesítővel.
4. A `callAudioTranscription()` a base64/data-URI audio-t multipart
   `file`-ra alakítja, vagy letölti a távoli `audio_url`-t a nyilvános kimeneti
   védőkorláttal DNS pinning-gel és 25 MB-os határral. Ezután POST-olja a fájlt és a kiválasztott
   modellt a helyi `/v1/audio/transcriptions` ön-hurokhoz, amelyet a
   `resolveSelfLoopBearer()` hitelesít. A meglévő transzkripciós útvonal normál
   hitelesítő keresést, cooldown/rate-limit kezelést és szolgáltató kiszolgálást végez.
5. A sikeres hívások a részeiket `[Audio N]: <transcript>`-re cserélik. A hívások
   `Promise.allSettled`-del futnak: egy egyedi hiba megőrzi az eredeti
   audio részt (#4012 szerződés). Ha minden hívás meghiúsul, és a cél bizonyítottan
   `supportsAudio === false`, a részek
   `[Audio N]: (nem elérhető — nincs STT szolgáltató csatlakoztatva)` (#8430 szerződés). Egy
   ismeretlen cél (`null`) esetén egy minden hiba eredmény érintetlen marad. Egy bizonyított
   szöveg-alapú cél, amelynek nincs használható STT hitelesítője, ugyanazt a kifejezett
   stub-ot kapja anélkül, hogy hálózati hívást indítana.

A sikeres transzkripciók a folyamat-széles Modality Bridge LRU/TTL cache-t használják. A
kulcs az audio referencia, a stabil `audio-transcription` művelet
címkéje, és a kiválasztott STT modell kombinációja; a hibák soha nem kerülnek cache-elésre. Az audio
kísérletek frissítik a megosztott `bridged`, `cacheHits`, `failures`, és `lastUsedAt` számlálókat.
A transzformált válaszok tartalmazzák
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; az érintetlen
kérések nem kapnak Audio Bridge szegmenst.

A futási beállítások DB-alapúak és Zod-validáltak:

| Kulcs                         | Alapértelmezett | Tartomány        |
| ----------------------------- | --------------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`          | —                |
| `modalityBridgeAudioModel`    | `""`            | Auto vagy STT ID |
| `modalityBridgeAudioTimeout`  | `60000`         | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`             | 1–10             |

A megosztott gyorsítótárat a `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` és `modalityBridgeCacheMaxEntries` vezérli.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

A Chat Completions `messages` és Responses API `input` legfelső szintű videó részeit
fogja el, mielőtt egy célpontot hívnának, amelynek nincs ismert natív videó támogatása.
Támogatott formátumok: `input_video`, `video_url`, `video_source`, HTTPS URL-ek,
és `data:video/*;base64,...` adat URI-k. A sima fájlneveket a szövegben nem kezelik
videóként.

A `VideoBridgeGuardrail.preCall` (`videoBridge.ts`) felelős a kérés bejárásáért, a
képesség/politika ellenőrzéséért, kérésenkénti aggregálásért és a válasz payloadért.
A videónkénti munka — megszerzés, az egész eredmény gyorsítótára, egy keret
sorozat leírása (amely egyesíti a hívó által megadott hangátírást), és kísérletenkénti
metrikák/abortálás/tisztítás — a `processVideoPart` mögött rejtőzik a
`videoBridgePipeline.ts`-ben, amelyet egyszer hívnak meg videó részenként a `preCall`
ciklusán belül. Ez a modul definiálja a kifejezett port határokat is: `VideoMediaBrokerPort`
(bájtok megszerzése és mintavételezett keretek kinyerése), `VideoAudioTranscriptionPort`
(a hívó által megadott hangátírás egyesítése a mintavételezett feliratokkal), és
`VideoDrilldownPort` (a régi nyers tároló forma). A gyártási STT és keretmegőrzés
a leíró port köré épül a `createVideoSttAdapter` és a `createVideoDrilldownAdapter`
segítségével; az utóbbi a megosztott átlátszó-handle életciklust használja.

A nyilvános `/v1` kérés útvonal soha nem importál vagy hív meg egy alfolyamatot. A távoli
videók 50 MiB korláton belül kerülnek letöltésre; az inline base64 videóknak
konzervatív 36 MiB dekódolt videókorlátja van, így a modell/üzenetek/keretező boríték
bent maradhat a nyilvános JSON kérés belépési korlátján, amely 50 MiB. Az inline
hosszúság és dekódolt méret becsléseket az allokáció előtt ellenőrzik. HTTPS
szükséges az első távoli URL-en és minden átirányításon, a meglévő
csak nyilvános kimeneti védelem DNS rögzítéssel. A bájtok ezután átlépik a pontos belső
`POST /api/modality-bridge/video/extract` bróker határt. Ez az útvonal
`LOCAL_ONLY` és `SPAWN_CAPABLE`, csak egy folyamat által hitelesített,
megbízható hurok kérését fogadja el, és soha nem fogad el URL-t, fájlrendszer
útvonalat, végrehajtható fájlt vagy argumentumlistát. Az API testméret csővezeték
és a kezelő fokozatos test olvasója függetlenül érvényesít egy 50 MiB bróker
bemeneti korlátot. A korlátozott sor egy időben egy kinyerést futtat, négy függőben
lévő munkát engedélyez, és a függő bemenetet 100 MiB-ra korlátozza.

A bróker belsejében az `ffprobe` egy privát helyi fájlt olvas; a rögzített formátum
engedélyezési lista kizárja a lejátszási listákat és a manifeszt formátumokat. Az
engedélyezett MOV-család konténerek esetében a külső MOV adatreferenciák alapértelmezés
szerint le vannak tiltva, és a rögzített parancs nem optál be ezekre. Az `ffprobe`
és az `ffmpeg` a `file`-csak protokoll engedélyezési listát, egy szálat, rögzített
argumentum tömböket, nincs shell-t, és a `PATH`-ból megoldott végrehajtható fájlokat
használ. A csatolt képes borító stream-ek nem játszható jelöltek. Minden játszható
stream-nek meg kell felelnie a korlátoknak, és egy explicit alapértelmezett stream
előnyben részesül a determinisztikus legalacsonyabb indexű visszaesés előtt. A videók
maximálva vannak 600 másodpercre, 8192 pixel per dimenzió, és 33,554,432 forrás
pixelre. Az FFmpeg 1–16 középső JPEG keretet mintavételez, a hosszú élt legfeljebb
1024 pixelre méretezi le anélkül, hogy a kisebb bemeneteket felnagyítaná, és soha
nem kap URL-t. A mintavételezés alapértelmezés szerint `uniform`. Az opcionális
`scene_aware` és kísérleti `segment_aware` politikák egy további rögzített FFmpeg
átmenetet hajtanak végre az már érvényesített helyi stream-en, kiválasztják a
korlátozott `showinfo` jelenet időbélyegeket, és determinisztikusan visszaesnek
ugyanazokra az egységes középpontokra a detektor hibája, időtúllépés, hibás
kimenet vagy üres jelölt halmaz esetén. A szegmens-érzékeny mód arányosan osztja
ki a középpont mintákat az érvényesített jelenet intervallumokhoz; a szegmens-érzékeny
bizonyítékok és visszaesési viselkedés részletezve van alább. A kemény 16 keretes
korlát minden politikában a kiválasztás után kerül alkalmazásra. Amikor egy
jelenet-érzékeny kérésnek csak egy keretes költségvetése van, az az aktív teljes
videó vagy fókusz ablak egységes középpontját használja, és jelentést tesz `policyEffective: uniform`: egyetlen kiválasztott jelenet keret nem tudja megőrizni mindkét időbeli végét. A hívó opcionálisan megadhat egy
végső fókusz ablakot (`start`/`end` másodpercek); a határokat a média
időtartamához rögzítik, a megfordított vagy nem véges ablakokat elutasítják, és
minden mintavételezési politikát csak a normalizált intervallumon belül hajtanak végre.
A kapott ablak a mintavételezési metaadatokban és a megbízhatatlan leírás
előtagban szerepel, így az alsóbb modellek megkülönböztethetik a fókuszált
kivonatot a teljes idővonalból.

A szemantikai felirat fókusz egy külön, explicit beállítás. Az alapértelmezett `full`
elemzési mód megőrzi a meglévő keret promptot, és soha nem továbbítja a kérés
szövegét a felirat modellnek. `focused` módban a híd csak a legutolsó nem üres
felhasználó által írt `text`/`input_text`-et olvassa a ugyanabból a Chat vagy
Responses tárolóból, normalizálja azt NFC-re, összevonja a vezérlő karaktereket és
a szóközöket, és 500 Unicode kódpontra korlátozza. Egy üres eredmény visszaesik
az pontos `full` prompt-ra. Egy használható tipp JSON formátumban van
sorozatba állítva egy dedikált megbízhatatlan felhasználói kontextus blokkban,
és csak megfigyelhető részleteket priorizálhat; nem írhatja felül a külön
figyelmeztetést, amely a médiában látható vagy hallható utasítások követésére
vonatkozik. A szöveges fókusz soha nem inferál `start`/`end`-et, vagy változtatja
meg a temporális mintavételezőt.

#### FU-07 struktúrált szegmens bizonyíték

`segment_aware` egy korlátozott előzetes elemzési lépést használ a már érvényesített helyi videóstreamen. A rögzített szűrőlánc először legfeljebb 320 pixel szélesre méretezi, észleli a jelenetváltásokat és a fagyott időszakokat, majd másodpercenként 1 képkockát mintáz a blur, az átlagos luma és a térbeli/időbeli információk számára. A lépés 600 struktúrális mintára van korlátozva, egy FFmpeg/szűrő szálra, ugyanazzal a `file`-csak protokollal és konténer engedélyezési listákkal, 1 MiB folyamat-kimeneti határral, és legfeljebb 30 másodpercre a bróker megosztott megszakítási/időkorlátján belül. Soha nem fogad el parancsot, szűrőt, elérési utat vagy URL-t a kérésből.

A struktúrális értékek determinisztikus mintavételi bizonyítékok, nem szemantikai videó megértés. Nem következtetnek a témákra, cselekvésekre, feliratokra, beszédre vagy felhasználói szándékra. A jelenet- és fagyási határok szegmenseket alkotnak; a fagyási lefedettség, blur, expozíció, térbeli részletesség és időbeli változás csak azt befolyásolja, hogy a meglévő 1–16 képkockás költségvetés hogyan van elosztva. Egy teljesen fagyott szegmens egy képkockára van korlátozva, míg a nem fagyott szegmensek versenyeznek a fennmaradó költségvetésért. Amikor a határok száma meghaladja a képkockák számát, egységes idővonal lefedettség marad érvényben, így a gyors korai vágások nem tudják elrejteni a hosszú, hátramaradó szegmenst. A fagyási határ 1 másodperces elemzési felbontásán belüli jelenet határokat egyesítik.

A hiányzó szűrők, a hibás/üres bizonyítékok, a detektor hibája vagy a korlátozott előzetes elemzési időtúllépés nyitva hagyja az pontos egységes középpont politikát. Egy hívó megszakítás vagy bróker határidő nem nyitva hagyja: megszünteti a folyamatban lévő alfolyamatot, megakadályozza a későbbi képkocka kinyerést, és a privát ideiglenes fákat a `finally`-ben eltávolítja.

`scripts/perf/video-bridge-fu07-eval.ts` determinisztikus valós FFmpeg berendezéseket generál a poszt-duplicitás csökkentésére, sűrű mozgás költségvetés elosztására, blur/expozíció/SI-TI bizonyítékokra, gyors vágásokra hosszú farokkal, és fokozatos elhalványulás hamis pozitívumaira. Rögzíti az előzetes elemzési falidőt, és ahol a `/usr/bin/time` elérhető, a gyermek CPU-t és a csúcs RSS-t. A minőségellenőrzései csak struktúrális orákulumok. A valós felirat-modell minősége `HOLD` marad, mert ez a rendszer nem rendelkezik engedélyezett végponttal vagy fagyott bíróval. A pénzügyi megtakarítások is `HOLD` maradnak, hacsak az `--caption-cost-per-call-usd` nem ad meg egy kifejezett pozitív per-hívás becslést; a szkript soha nem hamisítja meg egyik eredményt sem.

Minden képkocka 4 MiB-ra van korlátozva, az összes nyers képkocka együtt 23 MiB-ra, és a sorosított bróker válasz 32 MiB-ra. Egy privát ideiglenes könyvtár a `finally`-ben eltávolításra kerül. Az OmniRoute nem csomagolja az FFmpeg-et, és nem fogad el egyedi végrehajtható elérési utat. A feliratozás előtt a híd egy konzervatív vizuális duplikációs lépést alkalmaz: minden JPEG-t egy 16×16 szürkeárnyalatos pufferré csökkent, és csak az utolsó megőrzött képkockával hasonlítják össze. A kért felirat költségvetés felett, amely meghaladja az egy képkockát, a kinyerés egy korlátozott jelölt medencét biztosít, amely legfeljebb kétszerese ennek a költségvetésnek, és soha nem több mint 16 képkocka. A kért korlát csak a duplikáció után kerül alkalmazásra, az első és az utolsó kiválasztott jelöltek megőrzésre kerülnek a végső vékonyítás során, amikor a költségvetés legalább kettő. A verzionált `grayscale-16x16-mean-cells-v2` politika a nagyobb átlagos luma delta-t és a normál delta legalább 0.05 arányát használja a miniatűr cellák között. A duplikált küszöb a konstans 0.04, amelyet a kiszámíthatóság érdekében választottak, nem pedig futási beállításként tárták fel. Ez a másodlagos magas kontrasztú jel megőrzi a kis mozgásokat és a látható szövegváltozásokat, amelyeket egy átlag-alapú összehasonlítás elrejthet. A hasonlító vagy dekóder hibák nyitva hagyják és megőrzik a lefedettséget. A kimeneti metaadatok elkülönítik a kinyert jelölteket, a sikeresen használt képkockákat és a vizuális duplikátumokat.

Egy kifejezetten megjelölt videó rész kérheti egy időbélyeges kontaktlapot. A híd legfeljebb egy 4-oszlopos, 16-képkockás JPEG rácsot épít. Minden 512 pixel széles cella a forrás időbélyegét egy magas kontrasztú alsó sávba égeti, míg a ugyanazok az időbélyegek szöveges metaadatokban maradnak a további társításhoz és auditáláshoz. A teljes JPEG 32 MiB-ra van korlátozva. Ha a `sharp` nem tudja dekódolni vagy összeállítani a rácsot, a híd visszaesik az egyes JPEG képkockákra; egy kliens megszakítás még mindig átterjed a lap műveletén.

A promóciós bizonyíték szándékosan külön van a szintetikus összetétel mikrobemutatójától. A `scripts/perf/video-bridge-contact-sheet-eval.ts` egy séma-verziózott A/B rendszert definiál a valós OpenAI-kompatibilis látásmodellekhez. Megméri a szolgáltató által jelentett tokeneket, az end-to-end falidőt (beleértve a lap összetételét), a modell-hívások számát és a manifeszt által meghatározott ténymegőrzést. A nyers modell válaszokat nem írják a jelentésbe; csak a SHA-256 hashek és a megfelelő tényazonosítók maradnak meg. A rendszer nem végez hálózati vagy fizetett modellhívást, hacsak az `--execute-real` nem kerül átadásra, és az `--model`, `OMNIROUTE_BASE_URL` és `OMNIROUTE_API_KEY` nincsenek konfigurálva. Anélkül, hogy ez a kifejezett valós futás megtörténne, a gép által olvasható ítélete `HOLD` marad; a szintetikus payload/hívás-szám mérések önállóan nem jelentenek promóciós bizonyítékot.

A különálló `scripts/perf/video-bridge-promotion-eval.ts` FU-07 vagy FU-09 megfigyeléseket fogyaszt. A promóciós felvételhez mind a nyolc szintetikus forgatókönyv típusra, plusz egy tisztított valós klipekre van szükség, legalább három mért ismétlésre szerepkörönként és esetenként, mind a tíz deklarált metrikára, fagyott média/prompt/várt-tény/beállítások hashek, egyedi megfigyelési azonosítókra és ellenőrzött magvetett A/B sorrendre. A végrehajtási nyugta köti a corpus hasht, a pontos jelölt SHA-t és a modell verziót. A hiányzó vagy érvénytelen mérések `HOLD` maradnak, beleértve a 30 s feletti CPU-t, a 512 MiB feletti csúcs RSS-t vagy a 30 s feletti előzetes elemzést. Ezek bizonyíték-felvételi korlátok, nem új futási RSS érvényesítési garancia.

FU-07 legalább 98%-os minőségmegőrzést és 1,2x-nél nem nagyobb p95 késleltetést igényel az alapvonalhoz képest, plusz vagy 0,05 abszolút, esettanulmányokkal kiegyensúlyozott átlagos visszahívási javulást az egyenértékű átlagos feliratkérések esetén, vagy legalább 10%-kal kevesebb átlagos utó-duplicitásos feliratkérést. FU-09 legalább 0,85 minőséget, 95%-os megőrzést, 20%-os p95 késleltetés csökkentést és 10%-os token csökkentést igényel. A kritikus tényező veszteség, injekciós megfelelés vagy hiányzó használat megakadályozza a promóciót. Egy végrehajtás nem tud semmit promótálni: `--previous-report` megerősíti két különálló, nem átfedő, egymást követő, jogosult végrehajtását ugyanazon politika/modell verzió/jelölt/korpus esetén. Egy mintavételi kísérlet nem tudja megerősíteni a kontaktlap kísérletet.

A gyűjtőknek a válaszokat memóriában kell értékelniük, és el kell menteniük a `responseDigest`-et, valamint a metrikákat és megfigyelési kötéseket, soha nem a válasz szövegét. A fogyasztó szintén olvassa a régi nyers megfigyeléseket, de soha nem másolja azt a szöveget a jelentéseibe. Pontosan egy `responseDigest` vagy `rawResponseText` elfogadott minden megfigyelés esetén. A verzionált engedélyezési lista üres marad egy változtathatatlan `hold` alapértelmezettel. Egy jogosult bejegyzés megköveteli az bizonyíték hivatkozását, politikát, modell verziót, pontos jelölt SHA-t, manifest digestet és két különálló futásazonosítót; az ellentmondó kontextusokat elutasítják. Ezek a metaadatok egy audit szerződés, nem bizonyíték arra, hogy egy hivatkozott fájl valódi méréseket tartalmaz. Ellenőrizze a tényleges nyugtákat, mielőtt bármilyen bejegyzést hozzáadna. A menedzsment statisztikák végpontja és a Videó irányítópult konzervatív készenlétet mutat. Egy konfigurált modell alias önmagában nem állapítja meg a verzióját vagy a futó jelölt SHA-t, így a jelenlegi irányítópult `HOLD`-ot jelent, ahelyett, hogy újra felhasználja a jogosultságot egy másik végrehajtási kontextusból. Az explicit kísérleti kiválasztás elkülönül a promóciótól; egy alapértelmezett sem változik automatikusan.

A hívók opcionálisan csatolhatnak egy `transcript.cues` tömböt egy támogatott videó részhez, amikor már rendelkeznek összehangolt szöveggel. Minden cue-nak tartalmaznia kell `text`-et, egy véges `start`/`end` intervallumot a vizsgált időtartamon belül, és egy engedélyezett `source`-t (`client`, `embedded` vagy `audio-bridge`); a `confidence` alapértelmezett értéke `1`, és 0 és 1 között kell maradnia. A pontosan azonos cue-k összevonásra kerülnek. Az OmniRoute soha nem indítja el a transzkripciót ezekből a metaadatokból: a validált cue-k a leírt eredménybe kerülnek másolásra forrással, bizalommal és intervallummal, és megbízhatatlan megfigyelésekként jelennek meg a keretfeliratok mellett. A érvénytelen, tartományon kívüli vagy származás nélküli szöveget elutasítják, ahelyett, hogy belekevernék a feliratfolyamba. Mindkét kérés-test transcript csatorna normalizálja a megadott származást `client`-re, beleértve az önállóan megállapított `embedded` vagy `audio-bridge` címkéket. Csak egy szerver által birtokolt adapter tudja ezeket a megbízható címkéket hozzárendelni a kód-alapú `trustedSource` argumentumon keresztül; egy kérés JSON mező nem érheti el ezt az argumentumot. A transcript szöveg megbízhatatlan, médiából származó tartalom marad, függetlenül a származásától, és soha nem határozhatja meg az engedélyezést.

Egy fejlett hívó megadhat egy `audioTranscript` sávot ugyanahhoz a videóhoz; ezt kliens által megadott szövegként kezelik, nem a szerver transzkripciójának bizonyítékaként. A fúziós varrás vizuális és audio megfigyeléseket futtat egy határidő és megszakító jel alatt, közös idővonalon rendezi őket, összevonja a pontosan azonos példányokat, és részleges eredményt jelent, amikor csak az egyik oldal sikeres. Egy érvénytelen `audioTranscript` a részleges eredményre degradálódik — a vizuális leírás megmarad, és az audio ágazat egy tisztított hiba kódot rögzít — ahelyett, hogy az egész videó megbukna. Az egyes ágazatok elérhetősége, a részleges jelzés és a tisztított hiba kódok megmaradnak a leírt eredményben, a védőkorlát metaadatokban (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), az eredmény-cache metaadatokban, és a híd fúziós számlálókban. Az alapértelmezett Videó Híd útvonal nem hívja meg a beszédről szövegre való átalakítást, vagy nem tölt le egy második média másolatot; anélkül, hogy ez a kifejezett sáv létezne, csak videó marad.

**Transzkripció megőrzése (#12150 P1).** Ez automatikusan alkalmazandó, amikor a Videó Híd (önkéntes) transzkripciós cue-t renderel — nincs külön megőrzési jelzés. Amikor egy kérés bármilyen transzkripciós cue-t renderel (egy hívó által deklarált `transcript` vagy egy fúziós `audioTranscript`), a védőkorlát `videoBridgeObserved`-ként jelöli meg, és egy cenzúrázott árnyékot készít a videó leírásáról — egy azonos renderelés, amelyben minden cue szabad szöveges törzse helyettesítve van `[redacted-video-transcript]`-tel, amelyet a strukturált cue mező helyettesítésével készítenek el, mielőtt a szöveg összeállna (soha nem a lapos szöveg elemzésével, így semmilyen cue tartalom — ellenséges vagy szokványos, beleértve a `]`-t tartalmazó törzseket, mint például `[inaudible]`/`[music]` — nem maradhat meg). A megőrzött hívásnapló kérés test minden videóból származó szöveges részt cenzúrázott árnyékkal helyettesít, tartalom egyenlőség alapján; a `fullText` horgonyt újraolvassák a befejezett előhívási védőkorlát terhelésből, így a találat még mindig sikeres marad a későbbi lánc védőkorlátok után (a PII és hitelesítő maszkok, prioritások 10/95) a leírás szövegét helyben átírják, és a rendszer-prompt/átadás/memória injekció átalakítja az üzenet tömböt. A modellhez felfelé küldött test változatlan marad. Egy megfigyelt kérés szintén nem népesít be tartós Memóriát (mind a kérés-, mind a válasz-alapú kinyerés ki van hagyva), így a modell saját válasza nem tudja visszhangozni a transzkripciós szöveget a Memóriába.

**Nyers videó mezők (#12430).** Amikor a híd engedélyezve van, és a natív videó támogatás ismeretlen vagy hiányzik, a meghatározott `transcript`/`audioTranscript` mezők is aktiválják a `videoBridgeObserved`-t, még leírási hiba vagy `maxVideos` korlát esetén is. A `null` és az üres sztringek számítanak; a hiányzó mezők és nem-videó metaadatok nem. A megőrzött másolatok cenzúrázzák ezeket a mezőket vagy kihagyják a kérést, és a cache/Memory megkerülésre kerül.

A visszaesési útvonalakon a érvényes hívói cue-k támogatott `text`/`input_text` részekké válnak, nem pedig nem szabványos szolgáltató mezőkké. Mindkét kérés által megadott track továbbra is megbízhatatlan `client` megfigyelések maradnak, egy kifejezett figyelmeztetéssel, hogy a videót nem írták le, és az időbélyegeket nem ellenőrizték a médiával szemben. A meglévő 256 cue/64-KiB összesített és cue-nkénti költségvetések érvényesek a két trackre együtt; az időbélyegeknek meg kell felelniük a bróker 600 másodperces plafonjának és bármely megadott fókuszablaknak. Az érvénytelen trackeket elvetik, nem továbbítják önkényes szövegként; egy érvényes testvér még mindig használható, hacsak a kombinált költségvetés nem lépi túl. A null/üres mezők nem adnak hozzá szöveget. Ez a visszaesés nem ad hozzá médiát vagy átiratot. Az átirat kiterjesztő mezői eltávolításra kerülnek a visszaesési videó hordozóból és annak `video_url`/`source` objektumaiból. Az OpenAI wire engedélyezési lista szigorú marad; az ismeretlen natív videó hordozók továbbra is elérhetők, és az ismert, csak szöveges célok biztonságos jelölőkkel rendelkeznek. A strukturált redakciós árnyékok védik a hozzáfűzött átirat szöveget, míg az eredeti hívó által birtokolt kérés változatlan marad. A natívan támogatott célok és a letiltott hidak megőrzik meglévő megkerülési viselkedésüket.

A további megőrzött másolatok ugyanazt a megfigyelt kérési jelet használják. A nyers pre-guardrail kliens-kérés pillanatkép, a memóriában lévő függőben lévő kérés és a korai elutasított kérés naplója strukturálisan helyettesíti az átirat mezőit a videó részekben; a csővezeték szakaszok és a kontextus átadás által szintetizált sztring promptokat a megőrzött kérés törzsének kiömlésénél redigálják. A megőrzött `video_content_removed` jelző miatt a `previous_response_id` folytatás zárva megbukik, a szándékosan elvetett szöveg helyreállítása helyett. Ha egy megfigyelt kérés elveszíti a per-rész redakciós árnyékát a naplózás előtt, vagy akár egy több videó árnyék közül egyik sem egyezik meg a későbbi kérés módosítások után, a megőrzött kérés törzse teljesen elmarad a részben redigált átirat megőrzése helyett.

Egy megfigyelt kérés esetén a modell válasza bármely részét idézheti az átiratnak strukturált cue határ nélkül. Ezért a megőrzött hívásnapló `responseBody`-ját egy kihagyási jelző helyettesíti; a részletes csővezeték artefaktum (amely tartalmazhatja a felfelé irányuló/kliens törzseket és a stream darabokat) nem kerül megőrzésre. A szemantikai, idempotencia és érvelési újrajátszási gyorsítótárak megkerülik a kérés olvasását és írását. A szolgáltató kérés és a kliens által látható válasz változatlan marad. A korai keepalive byte-ok kiürülnek a ideiglenes pufferből, amikor a részletes artefaktumot kihagyják. Kiro hibás EventStream figyelmeztetései csak a payload byte számát jelentik, soha nem a tartalmát vagy a JSON parser nyers hibáját. Ez nem állítja, hogy minden nem kapcsolódó szolgáltató/plugin diagnosztikát auditáltak; a szélesebb megőrzött-szink átvizsgálást a #11658 nyomon követi.

A belső `/api/modality-bridge/video/drilldown` életciklus egy külön, loopback/token-hitelesített gyorsítótár alap. Minden művelethez szükséges egy kanonikus átlátszó fő ID. Mielőtt egy termelési hívó engedélyezve lenne, le kell származtatnia ezt az ID-t az azonosított bérlőtől, és soha nem szabad továbbítania egy kliens által kiválasztott értéket. A gyorsítótár kulcsok ezt a főt kötik a kanonikus munkamenet és videó-referencia ID-khoz, csak a SHA-256-ból származó kulcsokat tárolják, és a beolvasásokat és törléseket ugyanarra a főre korlátozzák. A gyorsítótár legfeljebb 16 származtatott JPEG képet tárol bejegyzésenként, tíz perc után lejár, és támogatja a korlátozott `start`/`end` olvasásokat vagy a kifejezett munkamenet törlést.

Minden fő legfeljebb 16 bejegyzésre és 64 MiB kanonikus JPEG adatra korlátozódik. Ezek a korlátok függetlenek a globális 64 bejegyzés/256 MiB plafontól: a fő kvóta nyomás csak annak a főnek a legutóbb használt bejegyzéseit távolítja el, mielőtt a globális LRU elutasítást figyelembe vennék. A lejárt bejegyzéseket eltávolítják mind a fő, mind a globális számításból a gyorsítótár aktivitás során, míg a törlés és az érvénytelenség nem rögzít részleges helyettesítést.

A gyorsítótár elutasítja a nem kanonikus Base64-t, a felesleges kitöltést, a nem-JPEG médiát, a hibás vagy levágott JPEG-ket, és a JPEG-ket, amelyek figyelmeztetést generálnak egy korlátozott teljes képes `sharp` dekódolás során. Minden elfogadott képet kanonikus JPEG-ként újrakódol, a szélességet és magasságot a dekódolt byte-okból származtatja, a hívó mezőkre való támaszkodás helyett, és elvet minden hátramaradó polyglot byte-ot a megőrzés helyett. Csak a korlátozott kanonikus tömörített puffert terhelik mindkét kvótára. A JSON wire korlát tartalmazza a Base64 overhead-et a 32 MiB dekódolt-bemeneti plafonhoz. Minden tárolt származtatás rögzíti a validált JPEG formátumát/felbontását, mintavételezési politikáját, származtatási verzióját, létrehozási idejét, a szerver által számított tartalom hash-t, és a hashelt szülő referenciát, valamint a megbízható hívó szülő-tartalom hash-t. A törlést az aszinkron dekódolás/hash fázisok között ellenőrzik a nukleáris gyorsítótár elkötelezése előtt.

A termelési producer csak sikeres vizuális elemzés után használja újra a már származtatott bróker kereteket, második videó letöltés/kinyerés nélkül. Szükséges az operátor `modalityBridgeVideoDrilldownEnabled=true`, szigorú per-rész `drilldown: true`, és egy hitelesített API-kulcs bejegyzés ID. A kliens által megadott fő/munkamenet értékek soha nem állítanak fel tulajdonjogot. E három feltétel nélkül nem hash-el, nem méretezi át, és nem tart meg további kereteket. A megőrzési hiba megőrzi a felhasználható vizuális választ. A beleegyezett kérések megkerülik az egész videós eredmény gyorsítótárat, így a gyorsítótárazott eredmények soha nem játszanak újra kezelőket.

Sikeres JSON és SSE válaszok legfeljebb négy átlátszó kezelőt tesznek elérhetővé a korlátozott `x-omniroute-video-drilldown` fejlécben. Az engedélyezett böngészői eredetek olvashatják ezt a fejlécet anélkül, hogy szélesítenék a CORS eredetpolitikát. Az új kezelők `v1.<32-byte random base64url token>` formátumúak, és a nyilvántartás csak a SHA-256 hash-eiket őrzi meg. Az olvasó/fejléc-elemző a régi 64-hex tokeneket is elfogadja. Az azonosított nyilvános fogyasztó a következő URL-t használja: `GET /api/v1/video-bridge/drilldown?handle=...`, amely függetlenül van korlátozva a `modalityBridgeVideoDrilldownRemoteEnabled=true` beállítással. A kifejezett, tartós hamis érték visszavonja a hozzáférést, még akkor is, ha a régi `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` környezeti visszaesés engedélyezve van. A termelési megőrzés analóg régi `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` visszaeséssel rendelkezik. Mindkét visszaesés alapértelmezés szerint ki van kapcsolva.

A fogyasztó a hitelesített kulcsból származtatja a tulajdonjogot, alkalmazza a kulcs politikát, és ugyanazt a 404-es hibát adja vissza ismeretlen, lejárt és más kulcsok kezelői esetén. Elfogadja a `variant=preview|standard|detail` (maximum JPEG méret 320/640/1280, soha nem nagyobbítva), `limit=1..8` (vagy a régi `frames` alias, soha nem mindkettő), nullától kezdődő `page`, és opcionális `start`/`end` fókusz másodperceket. A duplikált lekérdezési kulcsokat és a megfordított fókusz ablakokat elutasítják. Minden visszaadott variáns tartalmazza a tényleges tartalom hash-ét és a tényleges felbontás metaadatokat, amelyek a megőrzött forráshoz kapcsolódnak. A variánsok olvasáskor származnak, nem tárolódnak extra megőrzött másolatként. A JSON válasz, beleértve a Base64/burkolatot, 32 MiB-ra van korlátozva; egy túlméretezett oldal 413-as hibát ad vissza, és az ügyfélnek kevesebb képkockát kell kérnie. Az olvasások ellenőrzik a lemondást minden egyes átméretezés körül, és újra ellenőrzik a kezelő érvényességét a visszaadás előtt. A tulajdonos általi `DELETE` idempotens; a törlés vagy a TTL lejárat felszabadítja a megőrzött forrást és a felhasználás elszámolását.

A megosztott tároló folyamat-lokális: a kezelők újraindításkor lejárnak, és nem átruházhatók független OmniRoute folyamatok között. A kezelési statisztikák a hatékony megőrzési/távoli politikát és az összesített megőrzött bejegyzéseket/bájtokat mutatják, soha nem a médiát, hivatkozásokat, fő ID-ket vagy kezelőket. A Videó beállítások panel megjeleníti ezeket az értékeket, és megőrzi mindkét hozzájárulási kapcsolót. Ez a megvalósítási dokumentáció nem élő telepítési vagy promóciós bizonyíték; a valódi modell elfogadása külön nyomon követett.

A képkockák a konfigurált Videó modell szerint vannak feliratozva. Egy üres Videó felülírás örökli a Látás beállítást; ha mindkettő üres, a Látás automatikus irányítója választja ki a hatékony látásra képes modellt. A sikeres feliratok az eredeti részt egy stabil `[Video description:` előtaggal helyettesítik, amely szintén megjelöli a szöveget, mint egy megbízhatatlan médiából származó megfigyelést, és azt mondja az alacsonyabb modelleknek, hogy ne kövessék a médiában található utasításokat. A képkocka-felirat gyorsítótár kulcsai tartalmazzák a JPEG bájtokat, a promptot, az időbélyeget és a hatékony modellt; csak a sikeres feliratok kerülnek gyorsítótárba. A gyorsítótár bejegyzések megőrzik a tényleges sikeres gyártó modellt, beleértve egy visszaeső modellt; a híd `mixed`-et jelent, amikor különböző modellek különböző képkockákat állítottak elő. Egy gyorsítótár találat újra felhasználja azt a gyártó identitást, ahelyett, hogy újra címkézné a kért útvonaltervként. Az egész videó eredmény gyorsítótár minden olyan bemenetre kulcsra van állítva, amely megváltoztatja a kimenetet — prompt, hatékony modell, mintavételezési politika, képkockaszám, szemantikai elemzési mód, a normalizált fókusz utalás SHA-256 ujjlenyomata, fókusz ablak, `transcript`, `audioTranscript`, és a kontaktlap jelző — így bármelyik dimenzió megváltoztatása gyorsítótár hiányt jelent, soha nem elavult újrahasználatot. A vizuális deduplikálási politika verziója, küszöbértéke és a korlátozott jelölt képkockák száma szintén explicit a gyorsítótár kulcsában és metaadataiban; egy politikai változás tehát nem tudja újra felhasználni az elavult egész videó leírást. A gyorsítótár v4 metaadatai megőrzik a módot és az ujjlenyomatot, soha nem a nyers felhasználói feladatot. A védőkorlát metaadatai jelentik a kért és a hatékony elemzési módokat; egy kért `focused` mód, amely nem tartalmaz használható felhasználói szöveget, hatékonyan `full`-nak számít.

A védőkorlát minden támogatott videó részt kinyer, de nem ír le többet, mint `modalityBridgeVideoMaxVideos`. Egy cél, amelyről bizonyított, hogy `supportsVideo === false`, a sikertelen és túllépett videók kifejezett biztonsági szövegjelzőkké válnak, így nyers videó nem marad fenn. Amikor a képesség ismeretlen, ezek a részek megőrzik a videó hordozót; bármely visszaeső átírás követi a fent említett korlátozott szöveg konverziót. Azok a célok, amelyek `supportsVideo === true`, megkerülik a hidat. Az ügyfél kérés lemondási jelzése átterjed a letöltésre, a bróker sorra, a subprocesszekre és a felirat hívásokra; a lemondások megállnak a videók között, és soha nem nyitnak meg nyers médiára.

A futási beállítások DB-alapúak és Zod-validáltak:

| Kulcs                               | Alapértelmezett | Tartomány / viselkedés                                                                                                     |
| ----------------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`         | Opcionális futás, beleegyezés szükséges                                                                                    |
| `modalityBridgeVideoAnalysisMode`   | `"full"`        | `full` megőrzi a generikus feliratokat; `focused` a korlátozott, megbízhatatlan legújabb felhasználói kontextust használja |
| `modalityBridgeVideoModel`          | `""`            | Örökli a Látás Híd modellt                                                                                                 |
| `modalityBridgeVideoFrameCount`     | `8`             | 1–16                                                                                                                       |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`     | `uniform`, `scene_aware`, vagy arányos `segment_aware`; a detektor hibája visszaesik `uniform`-ra                          |
| `modalityBridgeVideoMaxVideos`      | `1`             | 1–4                                                                                                                        |
| `modalityBridgeVideoTimeout`        | `120000`        | 1000–120000 ms                                                                                                             |

Örökölt, tartós videó időtúllépési értékek, amelyek meghaladják a 120 másodpercet, a bróker határidőhöz vannak korlátozva; az új beállítások, amelyek meghaladják ezt a határt, elutasításra kerülnek. `GET /api/modality-bridge/video/runtime` megbízható, bélyegzett loopback helyi elérhetőséget igényel az autentikáció vagy a futási próba előtt, majd menedzsment hitelesítést kér. Csak `elérhető`, szanitált FFmpeg/ffprobe verziókat és egy rögzített okot ad vissza, amikor a futás nem elérhető. A belső kinyerési végpont nem nyilvános feltöltési API: a sor telítettsége `503`-at és `Retry-After`-t ad vissza, a hívó bontása `499`-et, és a rögzített bróker határidő `504`-et ad vissza. Az átkonvertált válaszok hozzáadják a `video->text;model=<visionModel>;parts=<videos>`-t a központi `x-omniroute-modality-bridge` fejléchez anélkül, hogy eltávolítanák a Vision vagy Audio szegmenseket.

### PII Maszkáló (`piiMasker.ts`)

**Mindkét** szakaszban fut.

- **`preCall`** klónozza a payload-ot, végigjárja a `system`, `messages`, `input` és `prompt` (beleértve a sima szöveges elemeket), és alkalmazza a `processPII()`-t (a `@/shared/utils/inputSanitizer`-ből) a szöveges `content`/`text` mezőkre. Amikor `PII_REDACTION_ENABLED=true`, a észlelt PII a kimeneti payload-ban eltávolításra kerül. Ez független az `INPUT_SANITIZER_MODE`-tól (ami csak a prompt-befecskendezési politikát szabályozza). Amikor az eltávolítás ki van kapcsolva, a hívás nyilvántartja az észlelési számokat anélkül, hogy átírná a tartalmat.
- **`postCall`** mély klónozza a választ, futtatja a `sanitizePIIResponse()`-t, plusz a Válasz-API-alak maszkot (`maskResponsesOutput` — lefedi az `output_text`-et és az `output[].content[].text`-et). Ha bármilyen eltávolítás történik, a módosított válasz helyettesíti az eredetit.

A védőkorlát soha nem blokkol; csak annotál (`meta.detections`, `meta.redacted`) vagy átír.

### Prompt Befecskendezés (`promptInjection.ts`)

Észleli az ellenséges struktúrákat a felhasználó által megadott tartalomban, és érvényesíti a konfigurált politikát. A viselkedést környezeti változók és konstruktor opciók vezérlik:

| Beállítás         | Környezeti változó                                                                                   | Alapértelmezett | Hatás                                                                                                                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Engedélyezve      | `INPUT_SANITIZER_ENABLED`                                                                            | `true`          | Amikor `false`, a védőkorlát rövidre zár.                                                                                                                                                        |
| Mód               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`          | Befecskendezési politika: `block`, `warn` vagy `log`. (`redact` visszafelé kompatibilis, de **nem** távolítja el a befecskendezési szöveget; a PII átírása az `PII_REDACTION_ENABLED`-től függ.) |
| Blokkolási küszöb | `blockThreshold` opció / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`          | Minimális súlyosság, amely szükséges a blokkoláshoz. Az alapértelmezett közepes csak megfigyelésre szolgál.                                                                                      |

**Mód előny** (`getMode`): hívó `options.mode` → `INJECTION_GUARD_MODE` **DB funkció-flag felülírás** (Dashboard → Beállítások → Funkciós zászlók) → `INJECTION_GUARD_MODE` környezeti változó → `INPUT_SANITIZER_MODE` környezeti változó → `warn`. A dashboard felülírás tehát felülmúlja a környezeti változókat, így a Funkciós zászlók UI valós időben vezérli a futó védőkorlátot (újraindítás nélkül). Az adatbázis olvasása hibabiztos: ha hiba lép fel, a védőkorlát visszaáll a környezeti alapú viselkedésre, és amikor nincs beállítva felülírás, a viselkedés azonos a környezeti alapú megoldással.

Észlelési források:

1. `sanitizeRequest()` a `@/shared/utils/inputSanitizer`-ből (megosztott detektor készlet, amelyet máshol is használnak a csővezetékben).
2. Beépített `DEFAULT_GUARD_PATTERNS` (jelenleg `system_override_inline` és `markdown_system_block`, mindkettő `high` súlyosság).
3. Opcionális `customPatterns`, amelyeket a konstruktor opciókon keresztül adnak át (sztringek, regex, vagy `{ name, pattern, severity }` rekordok).

Amikor `mode === "block"` **és** legalább egy észlelés megfelel a súlyossági küszöbnek, a `preCall` visszaadja a `{ block: true, message: "Kérés elutasítva: gyanús tartalom észlelve" }`. `warn`/`log` módokban a védőkorlát naplózza, de engedi a hívást. A megosztott segédprogram, az `evaluatePromptInjection()` is exportálva van azok számára, akiknek szükségük van a promptok értékelésére anélkül, hogy átmennének a nyilvántartáson.

**Vizsgálati határ (v3.8.20):** a detektor csak a **legelső 16 KB**-ot vizsgálja a csatlakoztatott prompt szövegből — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bájt) a `src/shared/utils/inputSanitizer.ts`-ben. Mind a `detectInjection()`, mind az `evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)`-t futtat a minta ciklus előtt. A befecskendezési direktívák a bemenet tetején helyezkednek el, így ez korlátozza a regex CPU/GC-t a több száz KB-os payloadoknál anélkül, hogy gyengítené az észlelést (lásd: #3932, #4041).

### Hitelesítő Maszkáló (`credentialMasker.ts`)

**Mindkét** szakaszban fut, az alapértelmezett lánc utolsó elemében (prioritás `95`). Eltávolítja a jól ismert API-kulcs / titkos token mintákat a kimeneti payload-ból (üzenet tartalom, eszköz-hívási argumentumok, eszköz eredmények) **és** a szolgáltató válaszából, így egy promptba beillesztett hitelesítő adat (vagy egy eszköz eredménye által visszhangozva) nem szivárog ki a felfelé irányuló szolgáltatóhoz vagy vissza az ügyfélhez.

- **Csak opt-in**, ugyanaz a konvenció, mint a PII eltakarás (Kemény Szabály #20-mellék):
  le van tiltva, hacsak `settings.credentialRedactionEnabled === true` **vagy**
  `CREDENTIAL_REDACTION_ENABLED=true`. Ha ki van kapcsolva, a védőkorlát nem működik —
  soha nem blokkol és soha nem ír át.
- `redactCredentials()` végigjárja a teljes payload/válasz fát (`walkValue()`,
  prototípus-szennyezésbiztos, ciklusbiztos a `WeakSet` segítségével) és helyettesíti a
  találatokat egy `[REDACTED:<type>]` helyőrzővel, csak azokat az ágakat klónozva,
  amelyek valóban megváltoztak.
- `CREDENTIAL_PATTERNS` lefedi az LLM szolgáltató kulcsokat (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokeneket (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), fizetési kulcsokat (Stripe, Square), felhő
  kulcsokat (AWS hozzáférési kulcs, Twilio, SendGrid, Mailgun), privát kulcsokat / JWT-ket,
  hitelesítő adatokat tartalmazó kapcsolat stringeket (`mongodb://user:pass@...`, stb.),
  és egy általános `Authorization`/`x-api-key`/`api-key`/`apikey` fejléc-érték
  mintát. A fejléc alakú kulcsokat (`authorization`, `x-api-key`, `api-key`,
  `apikey`) struktúrájuk szerint takarják el (csak az érték, a séma előtag, mint
  `Bearer `/`Basic ` megőrizve) ahelyett, hogy a generikus szöveg regex segítségével.
- A védőkorlát soha nem blokkol; csak átírja (`modifiedPayload` /
  `modifiedResponse`) és annotálja (`meta.credentialsRedacted`, `meta.count`).

Visszacsatolási védelem: `tests/unit/credential-masker-guardrail.test.ts`.

## Alapszerződés (`base.ts`)

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
  block?: boolean; // true esetén megszakítja a láncot
  message?: string; // blokkoláskor jelenik meg
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // a preCall adja vissza a kérés átírásához
  modifiedResponse?: TValue; // a postCall adja vissza a válasz átírásához
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

Egy védőkorlát a „nincs változás” állapotot a `void`, a `{}` vagy a
`{ block: false }` egyikének visszaadásával jelzi. A `modifiedPayload`/`modifiedResponse`
visszaadása lecseréli a láncon továbbhaladó értéket a soron következő védőkorlátok számára.
A `signal?: AbortSignal` továbbítja a hívó életciklusát a védőkorlátoknak. A kérés megszakítása a szándékos, hibát átengedő kivétel: a médiakezelő hidak leállítják a munkát és elvégzik a takarítást anélkül, hogy visszaállítanák a nyers médiát egy olyan cél számára, amelyről ismert, hogy nem támogatja azt.

## Nyilvántartó (`registry.ts`)

A singleton `guardrailRegistry` a következőket teszi elérhetővé:

- `register(guardrail)` — hozzáad egy védőkorlátot (vagy lecseréli a normalizált név alapján), majd
  növekvő `priority` szerint újrarendezi őket.
- `clear()` / `list()` — adminisztratív segédfüggvények.
- `runPreCallHooks(payload, context)` — végiglépked az aktív védőkorlátokon, továbbfűzi a
  hasznos adatot a `modifiedPayload` segítségével, és az első `block: true` értéknél leáll.
- `runPostCallHooks(response, context)` — ugyanez a folyamat a válaszoldalon.
- `resetGuardrailsForTests({ registerDefaults })` — törli az állapotot, és opcionálisan
  újraregisztrálja az alapértelmezéseket a tesztek tiszta elkülönítése érdekében.

Mindkét futtató `{ blocked, payload|response, results, guardrail?, message? }`
értéket ad vissza, ahol a `results` `GuardrailExecutionResult` rekordok tömbje, amelyek
védőkorlátonként tartalmazzák a `blocked`, `skipped`, `modified`, `error` és `meta` mezőket,
ami hasznos a nyomkövetéshez.

### Védőkorlátok letiltása kérésenként

A `resolveDisabledGuardrails({ apiKeyInfo, body, headers })` összegyűjti azon
védőkorlátok neveinek duplikációmentes listáját, amelyeket az aktuális
kérésnél ki kell hagyni. A források (mind opcionális, és mindegyik összevonásra kerül):

- `apiKeyInfo.disabledGuardrails`
- A kérés törzsében lévő legfelső szintű `disabledGuardrails`
- A kérés törzsében lévő `metadata.disabledGuardrails`
- Az `x-omniroute-disabled-guardrails` fejléc (vagy a korábbi
  `x-disabled-guardrails`)

Az értékek lehetnek karakterláncok tömbjei vagy vesszővel elválasztott karakterláncok; a nevek
normalizálása kisbetűs kebab-case formátumra történik (`pii_masker` → `pii-masker`). Az eredmény
a `context.disabledGuardrails` mezőn keresztül kerül a nyilvántartóhoz, amely kihagyja
az egyező védőkorlátokat (`skipped: true` a `results` tömbben).

## Végrehajtási sorrend

Minden, a `src/sse/handlers/chat.ts` és az
`open-sse/handlers/chatCore.ts` fájlon áthaladó kérés esetén:

1. A `resolveDisabledGuardrails(...)` létrehozza a kihagyási listát az API-kulcsból, a törzsből
   és a fejlécekből.
2. A `guardrailRegistry.runPreCallHooks(body, ctx)` növekvő prioritási
   sorrendben futtatja a védelmi korlátokat:
   - A letiltott védelmi korlátokat `skipped` állapottal rögzíti.
   - Az egyes védelmi korlátok `preCall` műveletei a `modifiedPayload` segítségével átírhatják az adatterhet.
   - Az első `block: true` rövidre zárja a láncot, és a kezelő
     egy, a védelmi korlát általi elutasítást jelző választ ad vissza.
3. A (potenciálisan átírt) adatteher továbbhalad a kombinált útválasztáshoz és a felsőbb rétegbe
   történő továbbításhoz.
4. A válasz összeállítása után a `guardrailRegistry.runPostCallHooks(...)`
   ugyanazt a láncot futtatja a válaszon. A `block: true` ebben az esetben elveti a felsőbb réteg
   válaszát.

A kivételt dobó védelmi korlátokat `error: <message>` értékkel rögzíti, és a
`logger.warn` segítségével naplózza a rendszer, de a lánc folytatódik — a tervezés szerint hiba esetén átengedő módon.

## Konfiguráció

A beépített védelmi korlátok által beolvasott környezeti változók:

| Változó                               | Használja                       | Hatás                                                                                                                                    |
| ------------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`              | Állítsa `false` értékre az észlelés teljes letiltásához.                                                                                 |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`              | Injektálási szabályzat: `warn`, `block` vagy `log`. Az örökölt `redact` érték nem írja át az injektált szöveget.                         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`              | Az injektálás elleni védelem módja; egyben egy adatbázisbeli funkciójelző is, amely **felülbírálja** a környezeti változókat (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`              | A `MODE=block` által elutasított minimális súlyosság: `high` (alapértelmezett), `medium` vagy `low`.                                     |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`              | Az `INPUT_SANITIZER_BLOCK_THRESHOLD` örökölt álneve.                                                                                     |
| `PII_REDACTION_ENABLED`               | `pii-masker`                    | `true` esetén a kérésben szereplő személyazonosításra alkalmas adatokat kitakarja a rendszer (az injektálási módtól függetlenül).        |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (kimeneti oldalon) | A válaszoldali maszkoló viselkedését szabályozza.                                                                                        |

A Modality Bridge védelmi korlátai futásidejű konfigurációjukat az adatbázis-alapú beállítástárból
(`getSettings()`) olvassák, nem környezeti változókból. A Vision elsődleges kulcsai:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` és
`modalityBridgeCacheMaxEntries`. Az örökölt
`visionBridge*` kulcsokat kizárólag a dokumentált, egy cikluson át elérhető olvasási
tartalékmegoldásként fogadja el a rendszer; az irányítópulton végzett írások az elsődleges kulcsokat használják. Az alapértelmezések és a tartalékérték-feloldó
a `src/shared/constants/modalityBridgeDefaults.ts` fájlban találhatók, az örökölt
konstansokat pedig a `src/shared/constants/visionBridgeDefaults.ts` őrzi.

A hangfeldolgozás a `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` és `modalityBridgeAudioMaxClips` beállításokat, valamint a megosztott
`modalityBridgeCache*` beállításokat használja. A hangfeldolgozáshoz nem tartozik örökölt kulcsokra épülő tartalékmegoldás, mert ezek
a kulcsok a Modality Bridge sémával együtt jelentek meg.

A videófeldolgozás a `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` és
`modalityBridgeVideoTimeout` beállításokat, valamint a megosztott `modalityBridgeCache*` beállításokat használja.
Alapértelmezés szerint le van tiltva, mivel az FFmpeg/ffprobe opcionális üzemeltetési
függőségek, a képkockák feliratozása pedig növeli a késleltetést és a modellhasználat költségét.

## Egyéni védőkorlátok

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

Lépések:

1. Hozza létre a `src/lib/guardrails/myGuardrail.ts` fájlt a `BaseGuardrail` kiterjesztésével.
2. Implementálja a `preCall` és/vagy a `postCall` metódust.
3. Regisztrálja importáláskor (a `registerDefaultGuardrails` függvényből hozzáadva), vagy
   futásidőben hívja meg a `guardrailRegistry.register(...)` metódust — a regisztrációs jegyzék
   lecseréli az azonos normalizált nevű korábbi védőkorlátot.
4. Adjon hozzá teszteket a `tests/unit/` könyvtárban (meglévő példák:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Tesztelés

A tesztek között használja a `resetGuardrailsForTests()` függvényt, hogy ismert állapotból induljon.
Üres regisztrációs jegyzékkel való indításhoz adja át a `{ registerDefaults: false }` értéket, és
csak a tesztelendő védőkorlátokat regisztrálja. A Vision Bridge támogatja a függőséginjektálást
(`deps.getSettings`, `deps.callVisionModel`); az Audio Bridge ezzel egyenértékű csatlakozási
pontokat biztosít a beállításokhoz, képességekhez, az STT-modell kiválasztásához, a hitelesítő
adatok ellenőrzéséhez és az átíráshoz. A tesztek így adatbázis- vagy hálózati hozzáférés nélkül
is ellenőrizhetik mindkét folyamatot.

## Lásd még

- `src/lib/guardrails/` — implementáció
- `src/shared/utils/inputSanitizer.ts` — a promptinjektálás és a személyazonosításra alkalmas adatok maszkolását
  működtető megosztott detektor
- `src/shared/constants/visionBridgeDefaults.ts` — a Vision Bridge alapértelmezett értékei és
  a kényszerített hídként kezelt modellek listája
- `src/shared/constants/modalityBridgeDefaults.ts` — a Vision/Audio megosztott futásidejű alapértelmezett értékei
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonális réteg (áramkör-megszakító, várakozási idők)
- `docs/reference/ENVIRONMENT.md` — a környezeti változók teljes referenciája

## Az injektálásvédő útvonal-lefedettsége és red-team tesztelése (8. fázis · D blokk)

Az injektálásvédő (`createInjectionGuard` / `withInjectionGuard`) minden olyan útvonalat lefed,
amely felhasználói promptokat fogad. Figyelembe veszi az `INJECTION_GUARD_MODE` beállítást
(alapértelmezés szerint `warn` = csak naplózás; `block` = HTTP 400 `SECURITY_001` választ ad vissza).

| Típus            | Útvonalak                                                                                                                                            | Alapértelmezett mód |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Szöveg (meglévő) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Generatív        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Adat             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

A szövegkinyerés (`extractMessageContents`) a `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` mezőket kezeli.

**Red-team (éjszakánként, `nightly-llm-security.yml`):** a promptfoo ellenőrzi, hogy minden útvonal
blokkolja-e az OWASP-LLM korpuszt `INJECTION_GUARD_MODE=block` módban; a garak próbákat futtat
(titkos érték hiányában kihagyja őket). A `moderations` a konzisztencia érdekében szerepel — a
blokkoló módot használó üzemeltetők a `resolveDisabledGuardrails` segítségével mentesíthetik.

Az éjszakai munkafolyamat (`.github/workflows/nightly-llm-security.yml`, cron + kézi
indítás) két feladatot tartalmaz:

- **`promptfoo-guard` (blokkoló)** — futtatja a `promptfoo eval -c promptfooconfig.yaml`
  parancsot `INJECTION_GUARD_MODE=block` beállítással. Minden ellenséges teszteset (például „hagyj
  figyelmen kívül minden korábbi utasítást…”, DAN-stílusú jailbreak-kísérletek) ellenőrzi, hogy a válasz
  tartalmazza-e az `error.code === "SECURITY_001"` értéket, vagyis hogy a védő valóban elutasította-e a kérést.
- **`garak` (tájékoztató jellegű)** — a garak `--probes promptinject,dan,leakreplay`
  próbáit futtatja egy helyi OmniRoute-példánnyal (`http://localhost:20128/v1`) szemben. Egy
  szolgáltatói titkos érték (`PROMPTFOO_PROVIDER_KEY`) meglétéhez kötött; annak hiányában szabályosan
  kimarad, és az `|| true` utótagot kapja, így jelentést készít anélkül, hogy meghiúsítaná a CI-folyamatot.

A védő segédfüggvény (`createInjectionGuard` / `withInjectionGuard`) lefedettsége
minden promptot fogadó `/v1` útvonalra kiterjed; a prompt szövegét a
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` mezőkből
az `extractMessageContents()` nyeri ki a `src/shared/utils/inputSanitizer.ts` fájlban.
