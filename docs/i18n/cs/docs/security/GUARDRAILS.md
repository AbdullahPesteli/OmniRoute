# Guardrails (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Zdroj pravdy:** `src/lib/guardrails/`
> **Naposledy aktualizováno:** 2026-08-29 — v3.8.51 (původ přepisu Video Bridge deklaruje volající,
> server jej zatím neověřuje — upřesněno dle #11661)

Guardraily prosazují bezpečnost, zásady a transformace obsahu na rozhraní
mezi OmniRoute a upstream poskytovateli. Každý guardrail může kontrolovat (a
volitelně odmítnout, transformovat nebo anotovat) datové části požadavků (`preCall`) a
upstream odpovědi (`postCall`).

Systém je **fail-open**: pokud guardrail během provádění vyvolá výjimku, registr
chybu zaznamená a pokračuje dalším guardrailem, místo aby požadavek
selhal. Blokování je výslovné rozhodnutí (`block: true`), nikdy ne nehoda.

## Vestavěné ochranné prvky

Registr automaticky načítá šest ochranných prvků v prioritním pořadí při importu
(vidět `registry.ts` → `registerDefaultGuardrails()`):

| Priorita | Název               | Stádium(s)     | Soubor                |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nižší čísla priority běží **první**.

### Vision Bridge (`visionBridge.ts`) — Modální most PR-1

Zachycuje požadavky nesoucí obrázky zaměřené na **modely bez vidění** a buď
přesměrovává celý požadavek na model schopný vidění, nebo nahrazuje části obrázků
textovými popisy vytvořenými konfigurovatelným modelem vidění před
upstreamovým voláním. To umožňuje poskytovatelům pouze s textem transparentně
zpracovávat multimodální payloady.

Tok:

1. Přeskočit, pokud cílový model již podporuje vidění (pokud se neobjeví v
   seznamu nucených mostů `isVisionBridgeForcedModel`).
2. Extrahovat části obrázků pomocí `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), která deleguje na **unifikovaný detektor médií**
   `detectMediaParts()` v `open-sse/utils/mediaParts.ts` — jediný zdroj pravdy
   sdílený s filtrem kompatibility combo.
   Extrakce je povolena pouze pro nejvyšší úrovně částí tvarů,
   které může `replaceImageParts` znovu spojit (smlouva extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, a Responses API `input_image`. Vnořené zásahy a
   pouze indikátorové tvary jsou materiál pro combo filtr a nikdy nejsou extrahovány.
   Přeskočit, pokud nebyly nalezeny žádné.
3. Vyřešit runtime konfiguraci pomocí `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nové klíče nastavení
   `modalityBridge*` vyhrávají; zastaralé klíče `visionBridge*` zůstávají jako
   **jedno-cyklový fallback** (okno pro návrat). Přeskočit před jakýmkoli
   procházením médií, když je most zakázán.
4. Výběr režimu (`modalityBridgeVisionMode`, viz tabulka níže) rozhoduje
   o přesměrování vs popis. Přesměrování vrací `modifiedPayload` pouze se
   zaměněným `model`, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Cesta popisu: omezit obrázky na `maxImages`, sestavit úkolově
   orientovaný prompt, konzultovat cache popisů, zavolat model vidění **paralelně**
   (`Promise.allSettled`), a injektovat textové části `[Image N]: <description>`
   na jejich místo. Neúspěšný popis vrací `null` a původní část obrázku je
   **zachována** (#4012) — kromě cesty combo popisu, kdy každý
   popis selhal, kde potvrzený upstream bez vidění dostane
   `(unavailable — no vision-capable provider connected)` stub místo (#8430).
6. Vrátit `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Výběr režimu (`modalityBridgeVisionMode`)

| Režim      | Výchozí | Chování                                                                                                                                                                                                                                                                                                 |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Zastaralá heuristika, nedotčená (#6640/#7204): modely bez combo/`auto/` se přesměrovávají na nejlepší model vidění, pokud původní model již nemá použitelné přihlašovací údaje (pak popis); cíle combo vždy popisují.                                                                                   |
| `describe` |         | Vždy popisovat — blok přesměrování je zcela přeskočen; zvolený model uživatele vždy odpovídá.                                                                                                                                                                                                           |
| `reroute`  |         | Nucené přesměrování: ochrana modelu s uchováním přihlašovacích údajů je obcházena. Ochrana přihlašovacích údajů pro cílové přesměrování stále platí — pokud neexistuje žádný použitelný cíl vidění, požadavek přechází na popis, takže surové obrázky nikdy nedosáhnou backendu pouze s textem (#8430). |

Nucené režimy zkracují **před** tím, než se spustí automatická heuristika; chování `auto`
je identické s předchozím ochranným prvkem PR-1.

#### Rozsah API klíče (`visionBridgeKeyScope.ts`)

Když API klíč volajícího omezuje `allowedConnections`, kvótní pooly
(`allowedQuotas`) nebo modely (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most vybírá pouze
přesměrování a popis modely, které může klíč použít, na připojeních, které může
klíč použít. Volání popisu pak vždy prochází OmniRoute self-loop s
hlavičkou `x-omniroute-self-loop-key-id`, takže příchozí chatový požadavek
opět vynucuje politiku připojení a modelu tohoto klíče. `enforceApiKeyPolicy()`
ctí tuto hlavičku pouze spolu se self-loop nositelem, takže může pouze
omezit přístup, a id, které se nevyřeší, je odmítnuto.

Pokud pro klíč není povolen žádný model vidění, cesta popisu ustupuje a
požadavek prochází nezměněn, stejným chováním fail-open jako zakázaný
ochranný prvek (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Požadavky bez klíče a klíče bez těchto omezení se chovají přesně jako
dříve.

#### Úkolově orientovaný popisový prompt (`modalityBridgeVisionTaskAware`)

Výchozí **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) přidává
text **poslední uživatelské zprávy** (zkrácený na 500 znaků) k základnímu
popisu, nasměrovává popis k tomu, co uživatel skutečně požadoval
(vzor codex-vision-proxy) a žádá model pro vizi, aby přepsal viditelný
text. Při vypnuté vlajce — nebo bez uživatelského textu — je základní
popis použit beze změny.

Žádost o popis v rámci smyčky OpenAI-kompatibilní (`callVisionModelSingle()`
v `visionBridgeHelpers.ts`) vždy žádá `image_url.detail: "high"` —
bezpodmínečně, pro každého volajícího/poskytovatele, není řízeno žádným
signálem klienta. Vzorkování s nízkým detailem snižuje přesnost OCR pro
úkol přepisu textu, o který tento popis žádá, takže samotný popis
vždy žádá o vysoké detaily bez ohledu na to, jakou úroveň detailu
použil původní příchozí požadavek. To ovlivňuje pouze interní tělo
žádosti o popis; nemění to, jak OmniRoute předává vlastní `image_url.detail`
volajícího v primárním požadavku — tento výchozí je aplikován samostatně
a pouze pro detekované klienty OpenCode, v `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Anthropic drátový formát
větve smyčky popisu nemá pole `detail` a není ovlivněn žádným výchozím.

#### Limit výstupu popisu (`modalityBridgeVisionMaxChars`)

| Klíč                           | Výchozí | Rozsah             |
| ------------------------------ | ------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`     | `0` nebo 100–50000 |

`0` (výchozí) znamená **žádný limit** — popis vrácený
`callVisionModel()` je předán nezměněný, čímž se zachovává stávající
chování. Jakákoli hodnota v rozsahu 100–50000 zkracuje popis s
příponou `…` před tím, než je znovu vložen jako `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` v `src/lib/guardrails/visionBridge.ts`).
Zvyšte to pro úkoly OCR s vysokým detailem, kde downstream model potřebuje
úplný přepis; snižte to, aby omezilo použití tokenů u komunikativních
modelů pro vizi. Pole na panelu řídicího panelu se nachází na záložce
Vision v pokročilém panelu (`modality-bridge-max-chars` v
`ModalityBridgeVisionTab.tsx`) a omezuje jakoukoli hodnotu mezi 1 a 99
na 100, zatímco explicitní `0` zůstává nedotčen — `0` je platná hodnota
Zod sama o sobě (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`),
nejen "nepřiřazený" výchozí.

#### Cache popisu (`modalityBridge/bridgeCache.ts`)

Cache v paměti LRU + TTL pro výstupy popisu, sdílená v rámci procesu.
Klíč = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s
rámováním délky prefixu (žádné kolize hranic polí). Modelová složka je
**konfigurovaný** mostový model, nikoli model, který skutečně odpověděl —
`callVisionModel` může interně přejít na alternativu, a klíčování podle
pokusů by fragmentovalo cache. Neúspěšné popisy nejsou nikdy ukládány do
cache. Nastavení:

| Klíč                            | Výchozí | Rozsah  |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Normalizace vzdáleného obrázku (smyčka popisu/base64 načítání)

Když most sám načítá **vzdálený** obrázek — sebevolání popisu Anthropic
a konverze claude-drátového formátu na base64
(`ensureBase64ImagesForClaudeWire`), obojí prostřednictvím
`fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` — výsledný
datový URI je předán přes `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) předtím, než je vložen do žádosti
o model pro vizi. Příliš velké obrázky jsou zmenšeny na **2048px dlouhý okraj**
(s odpovídajícím limitem pro změnu velikosti, který OpenAI/Anthropic
již aplikují na serverové straně), což snižuje
nahrávací bajty/latenci, aniž by se změnilo, co model pro vizi vidí. Změna
velikosti používá `sharp`, načtený prostřednictvím dynamického importu: na
platformě, kde se jeho nativní binární soubor nepodaří načíst, `normalizeDataUri()`
**nikdy nevyhazuje** — vrací se k průchodu původními bajty, takže cesta
popisu/base64-konverze vždy zůstává funkční. Neobrázkové bajty (načtení,
které nevrátilo dekódovatelný obrázek) jsou také předány nezměněné. Tato
normalizace se vztahuje pouze na obrázky, které most načítá pro své
vlastní sebevolání — nikdy se nepoužívá na surové průchozí zatížení
volajícího, v souladu s principem pouze opt-in mutace (Tvrdé pravidlo #20).

#### Schéma nastavení + migrace

Nové klíče `modalityBridge*` jsou validovány pomocí Zod v `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*`, a skupina
`modalityBridgeAudio*` používaná Audio Bridge. Migrace
`141_modality_bridge_settings.sql` kopíruje existující hodnoty
`visionBridge*` do odpovídajících nových klíčů (idempotentní, nikdy
nepřepisuje hodnotu `modalityBridge*` nastavenou operátorem); staré klíče
zůstávají akceptovány jako čtecí záloha po jedno vydání.

#### Hlava transparentnosti + statistiky

Odpovědi transformované popisem nesou
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(vytvořeno funkcí `buildModalityBridgeHeader()` v `modalityBridge/bridgeStats.ts`,
označeno funkcí `withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`).
Převedené požadavky nedostanou **žádnou** hlavičku — payload zůstal
nedotčen a výměna modelu je již viditelná v poli `model` těla odpovědi.

`GET /api/modality-bridge/stats` (správa autorizace, stejná úroveň jako
`GET /api/settings`) vrací v paměti uložené počítadla podle modality
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` pro `vision`, `audio` a
`video`. `averageLatencyMs` používá `latencySamples`, nikoli všechny pokusy, jako
svůj jmenovatel; operace bez časování nevytváří vzorek s nulovou milisekundou.
`bridged` zůstává zpětně kompatibilním aliasem pro úspěšné
konverze; neúspěšné pokusy jej nezvyšují.
Počítadla se při restartu procesu resetují podle návrhu
(telemetrie, nikoli účetnictví).

#### Konfigurace dashboardu

Vyhrazená stránka dashboardu je
`/dashboard/settings/modality-bridge`. Její URL-adresovatelné záložky `Vision`, `Audio`
a `Video` zachovávají parametry dotazu při přepínání hodnoty `tab`.
Záložka Vision odhaluje povolení, režim, výběr modelu (včetně automatického
výchozího), úkolově orientované vyžadování, pokročilé limity pro časový limit/obrázek/délku popisu/cache,
běhová
počítadla a chráněný požadavek na vzorek. Záložka Audio je také živá: odhaluje
povolení, výběr modelu pouze pro STT s automatickým režimem, limity pro časový limit/max-clip, audio
počítadla a test vzorku `input_audio`. Záložka Video je funkční: hlásí
běhový stav FFmpeg/ffprobe — jeden ze čtyř explicitních stavů UI (`unknown`, zatímco
je zkoumáno nebo se nepodařilo dokončit, `restricted` na hostiteli dashboardu, který není smyčkový, kde je zkoumání přeskočeno na straně klienta, `unavailable`, jakmile je prozkoumáno
a potvrzeno jako chybějící, nebo `available` s verzemi FFmpeg/ffprobe) — přetrvává
povolení/model/frame/video/limity časového limitu, filtruje výběr modelu na modely schopné vidění
a odhaluje video počítadla.

Dřívější karta Vision Bridge pod nastavením AI je kompatibilní odkaz na
novou stránku; již nevlastní druhou kopii formuláře. Poskytovatelé médií také
odkazují na pracovní postupy Image-to-Text a Speech-to-Text na odpovídající záložky Modality
Bridge, aniž by odstranili stávající hřiště Speech-to-Text.

**Obcházení přijetí sebereflexe:** když volání popisu prochází vlastním
`/v1` sebereflexním smyčkovým (nestandardní model poskytovatele), podpožadavek posílá
`x-omniroute-admission-bypass: internal` a je autentizován s vyřešeným
sebereflexním pověřením — místním `sk_omniroute` strážcem v místním režimu, nebo
operátorem nakonfigurovaným `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env klíčem (#1350), takže
nasazení s `REQUIRE_API_KEY=true` mohou stále provádět volání popisu. Obcházení
je uznáno pouze pro tyto přesné pověření, takže externí klienti nemohou použít
hlavičku k přeskočení přijetí.

Zastaralé výchozí hodnoty žijí v `src/shared/constants/visionBridgeDefaults.ts`; nové
výchozí hodnoty pro režim/úkol/cache a resolver nastavení žijí v
`src/shared/constants/modalityBridgeDefaults.ts`. Strážce odhaluje
možnost konstruktoru `deps`, takže testy mohou injektovat falešné `getSettings` a
`callVisionModel` implementace.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Zachycuje audio obsahující chatové požadavky, než dosáhnou cíle, který není
známý jako akceptující audio vstup. Nikdy nepřesměrovává chatový požadavek: audio části jsou
přepisovány prostřednictvím stávajícího OpenAI-kompatibilního multipart koncového bodu a
vybraný chatový model pokračuje s textovými přepisy.

Tok:

1. Vyřešte `supportsAudio` prostřednictvím `getResolvedModelCapabilities()`. Explicitní
   metadata registru poskytovatelů vyhrává, poté statická metadata modelu, poté synchronizované
   `modalities_input`. Deklarovaný seznam vstupů bez `audio` je `false`; žádný
   důkaz o schopnosti zůstává `null`. Jak `false`, tak `null` aktivují
   konzervativní most, zatímco `true` jej obchází.
2. Vyřešte nastavení `modalityBridgeAudio*` a extrahujte splicovatelné vrcholové
   audio části z každé zprávy prostřednictvím sdíleného detektoru `detectMediaParts()`.
   Podporované drátové tvary jsou OpenAI `input_audio`, `audio_url` a
   `source.media_type: "audio/*"`. Vnořené audio je detekováno pro směrování, ale není
   odstraněno splicovací cestou. Práce je omezena `modalityBridgeAudioMaxClips`;
   pozdější části zůstávají nedotčeny.
3. Respektujte nakonfigurovaný `provider/model`, nebo nechte `selectAudioBridgeModel()` projít
   `AUDIO_TRANSCRIPTION_PROVIDERS` ve stabilním katalogovém pořadí a vyberte první
   model s použitelným aktivním pověřením poskytovatele.
4. `callAudioTranscription()` převádí base64/data-URI audio na multipart
   `file`, nebo stahuje vzdálené `audio_url` prostřednictvím veřejně pouze výstupní
   stráže s DNS pinningem a limitem 25 MB. Poté POSTuje soubor a vybraný
   model do místní `/v1/audio/transcriptions` sebereflexní smyčky, autentizované s
   `resolveSelfLoopBearer()`. Stávající trasa přepisu provádí normální
   vyhledávání pověření, zpracování cooldown/rate-limit a odeslání poskytovatele.
5. Úspěšné volání nahrazují své části s `[Audio N]: <transcript>`. Volání
   běží s `Promise.allSettled`: individuální selhání zachovává původní
   audio část (#4012 smlouva). Pokud každé volání selže a cíl se prokáže
   `supportsAudio === false`, části se stanou
   `[Audio N]: (nedostupné — žádný STT poskytovatel připojen)` (#8430 smlouva). Pro
   neznámý cíl (`null`) zůstává výsledek se všemi selháními nedotčen. Prokázaný
   cíl pouze pro text bez použitelných STT pověření obdrží stejný explicitní
   stub bez vydání síťového volání.

Úspěšné přepisy používají procesově širokou LRU/TTL cache Modality Bridge. Klíč
kombinuje audio referenci, stabilní štítek operace `audio-transcription` a vybraný STT model; selhání
nikdy nejsou ukládána do cache. Audio pokusy aktualizují sdílené počítadla `bridged`, `cacheHits`, `failures` a `lastUsedAt`.
Transformované odpovědi nesou
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nedotčené
požadavky nedostávají segment Audio Bridge.

Běhová nastavení jsou podložena DB a validována Zod:

| Klíč                          | Výchozí | Rozsah           |
| ----------------------------- | ------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                |
| `modalityBridgeAudioModel`    | `""`    | Auto nebo STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10             |

Sdílená cache zůstává řízena `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` a `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Zachycuje vrcholové video části v Chat Completions `messages` a Responses
API `input` před tím, než je zavolán cíl bez známé nativní podpory videa.
Podporované formáty jsou `input_video`, `video_url`, `video_source`, HTTPS URL,
a `data:video/*;base64,...` datové URI. Čisté názvy souborů v textu nejsou považovány
za video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) zajišťuje průchod požadavku,
kontrolu schopností/politiky, agregaci na úrovni požadavku a payload odpovědi.
Práce na úrovni videa — akvizice, cache celkového výsledku, popis sekvence snímků
(která slučuje jakýkoli audio přepis deklarovaný volajícím) a metriky/abort/úklid
na pokus — je skryta za `processVideoPart` v
`videoBridgePipeline.ts`, která je volána jednou na každou video část uvnitř smyčky `preCall`.
Ten modul také definuje explicitní portové hranice `VideoMediaBrokerPort`
(akvizice bajtů a extrakce vzorkovaných snímků), `VideoAudioTranscriptionPort`
(slučování audio přepisu deklarovaného volajícím se vzorkovanými titulky) a
`VideoDrilldownPort` (legacy tvar raw-store). Produkční STT a uchování snímků
jsou složeny kolem popisného portu prostřednictvím `createVideoSttAdapter` a
`createVideoDrilldownAdapter`; ten druhý používá sdílený životní cyklus s neprůhledným handlem.

Veřejná cesta požadavku `/v1` nikdy neimportuje ani nevyvolává podproces. Vzdálená
videa jsou stahována pod limitem 50 MiB; inline base64 videa mají
konzervativní limit 36 MiB dekódovaného na video, takže model/messages/framing envelope
může zůstat uvnitř veřejného limitu přijetí JSON požadavku 50 MiB. Délka inline
a odhady dekódované velikosti jsou kontrolovány před alokací. HTTPS je
požadováno na počáteční vzdálené URL a každém přesměrování, používající existující
veřejnou pouze výstupní ochranu s DNS pinningem. Bajty pak překračují přesně
interní hranici `POST /api/modality-bridge/video/extract`. Tato cesta je jak
`LOCAL_ONLY`, tak `SPAWN_CAPABLE`, přijímá pouze autentizovaný,
důvěryhodný loopback požadavek na úrovni procesu a nikdy nepřijímá URL, cestu k souborovému systému, spustitelný soubor
nebo seznam argumentů. Pipeline velikosti těla API a inkrementální čtenář těla
handlera nezávisle vynucují limit 50 MiB pro vstup brokeru. Jeho omezená fronta
provádí jednu extrakci najednou, umožňuje čtyři čekající úkoly a omezuje čekající vstup na
100 MiB.

Uvnitř brokera `ffprobe` čte soukromý místní soubor; pevný formát
whitelistu vylučuje playlisty a manifesty. Pro povolené kontejnery rodiny MOV
zůstávají externí odkazy na MOV data ve výchozím nastavení zakázány a pevný příkaz
se do nich nezapojuje. Jak `ffprobe`, tak `ffmpeg` používají
whitelist protokolu pouze pro `file`, jeden vlákno, pevné pole argumentů, žádný shell,
a spustitelné soubory vyřešené z `PATH`. Přílohy obrázků jako obálky nejsou
přehrávatelné kandidáty. Všechna přehrávatelná streamy musí splňovat limity a
explicitní výchozí stream je preferován před deterministickým nejnižším indexem
náhradou. Videa jsou omezena na 600 sekund, 8 192 pixelů na rozměr a
33 554 432 zdrojových pixelů. FFmpeg vzorkuje 1–16 středových JPEG snímků, zmenšuje
dlouhou hranu na maximálně 1 024 pixelů bez zvětšování menších vstupů a
nikdy nepřijímá URL. Vzorkování je ve výchozím nastavení `uniform`. Volitelné
politiky `scene_aware` a experimentální `segment_aware` provádějí jeden další
pevný průchod FFmpeg přes již validovaný místní stream, vybírají omezené
časové značky scén `showinfo` a deterministicky se vracejí k těmto
uniformním středům při selhání detektoru, časovém limitu, chybném výstupu nebo prázdném
souboru kandidátů. Mód segment-aware alokuje vzorky středů proporcionálně k
validovaným časovým intervalům scén; důkazy segment-aware a chování fallback jsou
podrobně popsány níže. Tvrdý limit 16 snímků je
aplikován po výběru v každé politice. Když má požadavek s vědomím scény pouze
rozpočet na jeden snímek, používá uniformní střed aktivního celého videa nebo okna
fokusu a hlásí `policyEffective: uniform`: jediný vybraný snímek scény
nemůže zachovat oba časové konce. Volající může volitelně poskytnout
omezené okno fokusu (`start`/`end` sekundy); hranice jsou omezovány na
délku média, obrácená nebo neomezená okna jsou odmítnuta a všechny vzorkovací
politiky se provádějí pouze uvnitř normalizovaného intervalu. Výsledné
okno je zahrnuto v metadatech vzorkování a v prefixu popisu
nepověřeného uživatelského kontextu, aby mohly downstream modely rozlišit
fokální výňatek od plného časového rámce.

Sémantické zaměření titulků je samostatné, explicitní nastavení. Výchozí
analytický režim `full` zachovává existující rámec promptu a nikdy nepředává text
požadavku modelu titulků. V režimu `focused` most čte pouze nejnovější
neprázdný uživatelsky vytvořený `text`/`input_text` ze stejného kontejneru Chat nebo Responses,
normalizuje ho na NFC, zhušťuje ovládací znaky a bílé znaky
a omezuje ho na 500 Unicode kódových bodů. Prázdný výsledek se vrací k
přesnému `full` promptu. Použitelný náznak je serializován jako JSON v
dedikovaném bloku kontextu nepověřeného uživatele a může pouze upřednostnit
pozorovatelné detaily; nemůže přepsat samostatné varování proti následování
pokynů viditelných nebo slyšitelných v médiu. Textové zaměření nikdy neodvozuje
`start`/`end` nebo nemění časového vzorkovače.

#### FU-07 důkaz strukturálního segmentu

`segment_aware` používá jeden omezený předanalyzační průchod nad již validovaným místním video streamem. Pevný filtr řetězec nejprve zmenšuje na maximálně 320 pixelů na šířku, detekuje změny scén a zmrazené intervaly, poté vzorkuje 1 snímek za sekundu pro rozmazání, průměrnou luminanci a prostorové/časové informace. Průchod je omezen na 600 strukturálních vzorků, jeden FFmpeg/filter vlákno, stejný `file`-only protokol a seznam povolených kontejnerů, 1 MiB limit na výstup procesu a maximálně 30 sekund uvnitř sdíleného zrušení/termínu brokera. Nikdy nepřijímá příkaz, filtr, cestu nebo URL z požadavku.

Strukturální hodnoty jsou deterministické vzorkovací důkazy, nikoli sémantické porozumění videu. Neodvozují subjekty, akce, titulky, řeč nebo záměr uživatele. Hranice scén a zmrazení tvoří segmenty; pokrytí zmrazením, rozmazání, expozice, prostorové detaily a časová změna pouze ovlivňují, jak je stávající rozpočet 1–16 snímků přidělen. Úplně zmrazený segment je omezen na jeden snímek, zatímco nezmrazené segmenty soutěží o zbývající rozpočet. Když hranice převyšují snímky, zachovává se jednotné pokrytí časové osy, takže rychlé brzké střihy nemohou skrýt dlouhý následný segment. Hranice scén v rámci 1-sekundového rozlišení analýzy zmrazení se slučují.

Chybějící filtry, špatně formátované/prázdné důkazy, chyba detektoru nebo časový limit omezené předanalýzy selhávají otevřeně na přesnou jednotnou střední politiku. Zrušení volajícího nebo termín brokera neselhává otevřeně: ukončuje probíhající podproces, brání pozdějšímu extrakci snímků a soukromý dočasný strom je odstraněn v `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuje deterministické skutečné FFmpeg zařízení pro úspory po deduplikaci titulků, přidělování rozpočtu na hustý pohyb, důkazy o rozmazání/expozici/SI-TI, rychlé střihy s dlouhým ocasem a falešné pozitivy při postupném vyblednutí. Zaznamenává čas stěny předanalýzy a, kde je `/usr/bin/time` k dispozici, CPU dítěte a vrcholový RSS. Jeho kontrola kvality je pouze strukturální orákula. Skutečná kvalita modelu titulků zůstává `HOLD`, protože tento systém nemá autorizovaný koncový bod nebo zmrazeného soudce. Finanční úspory také zůstávají `HOLD`, pokud `--caption-cost-per-call-usd` neposkytne explicitní pozitivní odhad na hovor; skript nikdy nevytváří ani jeden výsledek.

Každý snímek je omezen na 4 MiB, všechny surové snímky dohromady na 23 MiB a serializovaná odpověď brokera na 32 MiB. Soukromý dočasný adresář je odstraněn v `finally`. OmniRoute nespojuje FFmpeg a nepřijímá vlastní cestu k proveditelnému souboru. Před titulkováním most aplikuje konzervativní vizuální deduplikaci: každý JPEG je zmenšen na 16×16 šedotónový buffer a je porovnáván pouze s posledním zachovaným snímkem. Pro požadovaný rozpočet titulků nad jeden snímek, extrakce poskytuje omezený kandidátní bazén až dvojnásobku tohoto rozpočtu a nikdy více než 16 snímků. Požadovaný limit se aplikuje pouze po deduplikaci, přičemž první a poslední vybraní kandidáti jsou zachováni během konečného ztenčení, když je rozpočet alespoň dva. Verze `grayscale-16x16-mean-cells-v2` politika používá větší z průměrného delta luminance a poměru buněk miniatur, jejichž normalizované delta je alespoň 0.05. Prah pro duplicity je konstantní 0.04, zvolený pro předvídatelnost spíše než vystavený jako nastavení za běhu. Tento sekundární signál s vysokým kontrastem zachovává malé pohyby a viditelné změny textu, které může skrýt pouze porovnání průměru. Chyby komparátoru nebo dekodéru selhávají otevřeně a udržují pokrytí. Výstupní metadata oddělují extrahované kandidáty, úspěšně použité snímky a vizuální duplicity, které byly vyřazeny.

Výslovně označená část videa může požádat o časově označený kontaktní list. Most vytváří maximálně 4-sloupcovou, 16-snímkovou JPEG mřížku. Každá buňka o velikosti 512 pixelů spaluje svůj časový údaj do vysoce kontrastního spodního pásu, zatímco stejné časové údaje zůstávají v textových metadatech pro následnou asociaci a audit. Kompletní JPEG zůstává omezen na 32 MiB. Pokud `sharp` nemůže dekódovat nebo sestavit mřížku, most se vrací k jednotlivým JPEG snímkům; zrušení klienta se stále propaguje prostřednictvím operace listu.

Důkazy o propagaci jsou záměrně odděleny od syntetického složení mikrobenchmarku. `scripts/perf/video-bridge-contact-sheet-eval.ts` definuje schéma-verzi A/B systému pro skutečné modely vizí kompatibilní s OpenAI. Měří poskytovatelem hlášené tokeny, latenci stěny end-to-end (včetně složení listu), počet volání modelu a zachování faktů definovaných manifestem. Surové odpovědi modelu nejsou zapisovány do zprávy; pouze SHA-256 digesty a shodné ID faktů jsou uchovávány. Systém neprovádí žádné síťové nebo placené volání modelu, pokud není předán `--execute-real` a nejsou nakonfigurovány `--model`, `OMNIROUTE_BASE_URL` a `OMNIROUTE_API_KEY`. Bez tohoto explicitního skutečného běhu zůstává jeho strojově čitelný verdikt `HOLD`; syntetická měření payload/počtu volání sama o sobě nejsou důkazem o propagaci.

Samostatný `scripts/perf/video-bridge-promotion-eval.ts` zpracovává pozorování FU-07 nebo FU-09. Přijetí propagace vyžaduje všech osm syntetických scénářových typů plus sanitovaný skutečný klip, alespoň tři měřené opakování na roli a případ, všech deset deklarovaných metrik, digesty zmrazených médií/promptů/očekávaných faktů/nastavení, unikátní ID pozorování a ověřený zasetý A/B pořadí. Potvrzení o provedení váže digest korpusu, přesný SHA kandidáta a revizi modelu. Chybějící nebo neplatná měření zůstávají `HOLD`, včetně CPU nad 30 s, vrcholového RSS nad 512 MiB nebo předanalýzy nad 30 s. Toto jsou limity pro přijetí důkazů, nikoli nová záruka vynucení RSS za běhu.

FU-07 vyžaduje alespoň 98% udržení kvality a p95 latenci ne více než 1,2x
základní hodnoty, plus buď 0,05 absolutní vyvážené průměrné zlepšení
připomínání při ekvivalentních průměrných voláních popisků, nebo alespoň 10%
méně průměrných volání popisků po deduplikaci. FU-09 vyžaduje alespoň 0,85
kvality, 95% udržení, 20% snížení p95 latence a 10% snížení tokenů.
Ztráta kritických faktů, dodržování předpisů nebo chybějící použití brání
propagaci. Jedno provedení nemůže propagovat nic: `--previous-report`
potvrzuje dvě odlišné, nepřekrývající se, po sobě jdoucí
způsobilé provedení stejné politiky/modelu revize/kandidáta/korpusu.
Experiment se vzorkováním nemůže potvrdit experiment s kontaktními listy.

Sběrači by měli hodnotit odpovědi v paměti a uložit `responseDigest` plus
metriky a vazby pozorování, nikdy text odpovědi. Spotřebitel také čte
dědictví surových pozorování, ale nikdy tento text nekopíruje do svých
zpráv. Přijímá se přesně jeden z `responseDigest` nebo `rawResponseText`
pro každé pozorování. Verze povoleného seznamu zůstává prázdná s
neměnným výchozím `hold`. Způsobilý záznam vyžaduje svůj důkazní odkaz,
politiku, revizi modelu, přesný SHA kandidáta, manifest digest a dvě
odlišné ID běhu; konfliktní kontexty jsou odmítnuty. Tyto metadata jsou
auditní smlouvou, nikoli důkazem, že odkazovaný soubor obsahuje
skutečná měření. Před přidáním jakéhokoli záznamu si prohlédněte
skutečné účtenky. Endpoint pro statistiky správy a Video dashboard
odhalují konzervativní připravenost. Konfigurovaný alias modelu sám o sobě
neustanovuje jeho revizi nebo běžný SHA kandidáta, takže aktuální
dashboard hlásí `HOLD` místo opětovného použití způsobilosti z jiného
kontextu provedení. Explicitní experimentální výběr zůstává oddělený od
propagace; žádný výchozí se automaticky nemění.

Volající mohou připojit volitelnou `transcript.cues` pole k podporované
části videa, když již mají zarovnaný text. Každý cue musí mít `text`,
omezený `start`/`end` interval uvnitř zkoumané doby, a bílý seznam
`source` (`client`, `embedded`, nebo `audio-bridge`); `confidence`
má výchozí hodnotu `1` a musí zůstat mezi `0` a `1`. Přesně duplicitní
cues jsou sloučeny. OmniRoute nikdy nezačíná přepisování z těchto
metadat: validované cues jsou zkopírovány do popsaného výsledku se
zdrojem, důvěrou a intervalem, a jsou vykresleny jako nedůvěryhodná
pozorování vedle popisků snímků. Neplatný, mimo rozsah, nebo bez
provenience text je odmítnut místo toho, aby byl smíchán do proudu
popisků. Obě kanály přepisu těla žádosti normalizují dodanou provenience
na `client`, včetně sebe-oznámených `embedded` nebo `audio-bridge`
etiket. Pouze adaptér vlastněný serverem může přiřadit tyto důvěryhodné
etikety prostřednictvím argumentu pouze pro kód `trustedSource`; pole
JSON žádosti nemůže dosáhnout tohoto argumentu. Text přepisu zůstává
nedůvěryhodným obsahem odvozeným z médií, bez ohledu na jeho provenience,
a nikdy nesmí určovat autorizaci.

Pokročilý volající může poskytnout `audioTranscript` stopu pro stejné
video; je považována za text poskytnutý klientem, nikoli důkaz o
přepisu serveru. Fúzní šev provádí vizuální a audio pozorování pod
jedním termínem a signálem pro přerušení, řadí je na společném časovém
plánu, sloučí přesné duplicity a hlásí částečný výsledek, když
uspěje pouze jedna strana. Neplatný `audioTranscript` degraduje na
ten částečný výsledek — vizuální popis je uchován a audio větev
zaznamenává sanitizovaný kód selhání — místo toho, aby selhal celé video.
Dostupnost na každé větvi, částečná vlajka a sanitizované kódy selhání
jsou uchovány v popsaném výsledku, v metadata ochranného pásma
(`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`),
v metadata cache výsledků a v počítadlech fúze mostu. Výchozí cesta
Video Bridge nevyvolává převod řeči na text nebo nestahuje druhou
kopii médií; bez této explicitní stopy zůstává pouze video.

**Udržení přepisu (#12150 P1).** To se automaticky uplatňuje
kdykoli Video Bridge (sám o sobě opt-in) vykreslí cue přepisu — neexistuje
žádná samostatná vlajka pro udržení. Když žádost vykreslí jakýkoli cue
přepisu (volající deklarovaný `transcript` nebo fúzovaný
`audioTranscript`), ochranné pásmo jej označuje jako
`videoBridgeObserved` a produkuje redigovaný stín videa popisu —
identické vykreslení, ve kterém je tělo volného textu každého cue
nahrazeno `[redacted-video-transcript]`, vytvořené substitucí
strukturovaného pole cue před sestavením řetězce (nikdy neparsingem
zploštělého textu, takže žádný obsah cue — protivník nebo obyčejný,
včetně těl obsahujících `]`, jako například `[inaudible]`/`[music]`
— nemůže přežít). Uložené tělo žádosti v protokolu vymění každou část
textu odvozeného z videa za ten redigovaný stín, shodně podle
rovnosti obsahu; kotva `fullText` je znovu přečtena z hotového
payloadu ochranného pásma před voláním, takže shoda stále úspěšně
probíhá po pozdějších ochranných pásech (masky PII a přihlašovacích
údajů, priority 10/95), které přepisují text popisu na místě a
po systémovém výzvě/předání/vstřiku paměti, které přetvářejí pole
zpráv. Tělo odeslané nahoru modelu zůstává nezměněno. Pozorovaná
žádost také nepopulární žádnou trvalou paměť (jak extrakce odvozená
z žádosti, tak odpovědi jsou přeskočeny), takže odpověď modelu
nemůže echo text přepisu do paměti.

**Surová video pole (#12430).** Když je most povolen a nativní podpora
videí je neznámá nebo chybí, definovaná pole `transcript`/`audioTranscript`
také aktivují `videoBridgeObserved`, i po selhání popisu nebo limitu
`maxVideos`. `null` a prázdné řetězce se počítají; chybějící pole a
nevideo metadata se nepočítají. Uložené kopie redigují tato pole nebo
vynechávají žádost, a cache/paměť jsou obcházena.

Na těchto záložních cestách se platné volací signály stávají podporovanými `text`/`input_text` částmi namísto nestandardních polí poskytovatele. Obě stopy dodané požadavkem zůstávají nedůvěryhodnými `client` pozorováními, s explicitním varováním, že video nebylo popsáno a časové značky nebyly ověřeny vůči médiím. Stávající rozpočty 256 signálů/64-KiB celkově a na signál se vztahují na obě stopy dohromady; časové značky musí vyhovovat brokerovu stropu 600 sekund a jakémukoli dodanému oknu zaměření. Neplatné stopy jsou odmítnuty, nejsou předávány jako libovolný text; platný sourozenec může být stále použit, pokud není překročen jejich kombinovaný rozpočet. Null/prázdná pole nepřidávají žádný text. Tento fallback nepřidává žádné načítání médií ani přepis. Pole pro rozšíření přepisu jsou odstraněna z fallback video nosiče a jeho `video_url`/`source` objektů. OpenAI wire allowlist zůstává přísný; neznámé nativní video nosiče zůstávají k dispozici a známé cíle pouze s textem mají bezpečné značky. Strukturované stíny redakce chrání přidaný text přepisu, zatímco původní požadavek vlastněný volajícím zůstává nezměněn. Nativně podporované cíle a zakázané mosty si zachovávají své stávající chování obcházení.

Další uchované kopie používají stejný signál pozorovaného požadavku. Surový snímek požadavku klienta před ochranou, požadavek v paměti čekající na zpracování a log brzkých odmítnutých požadavků strukturálně nahrazují pole přepisu ve video částech; řetězcové výzvy syntetizované fázemi pipeline a předáním kontextu jsou redigovány na sinku trvalého těla požadavku. Trvalý marker `video_content_removed` způsobuje, že pokračování `previous_response_id` selže uzavřeně, místo aby rekonstruovalo text, který byl záměrně odmítnut. Pokud pozorovaný požadavek ztratí svůj stín redakce před logováním, nebo dokonce jeden z několika video stínů selže při shodě po pozdějších mutacích požadavku, uchované tělo požadavku je zcela vynecháno místo toho, aby uchovávalo částečně redigovaný přepis.

Pro pozorovaný požadavek může odpověď modelu citovat jakoukoli část přepisu bez strukturované hranice signálu. Jeho trvalý log volání `responseBody` je proto nahrazen markerem pro vynechání; podrobný artefakt pipeline (který může zahrnovat upstream/klientská těla a streamové části) není uchováván. Sémantické, idempotentní a cache pro opakování uvažování obcházejí čtení a zápisy pro tento požadavek. Požadavek poskytovatele a odpověď viditelná pro klienta zůstávají nezměněny. Brzké keepalive bajty jsou odčerpány z dočasného bufferu, když je podrobný artefakt vynechán. Kirovo varování o neplatném EventStreamu hlásí pouze počet bajtů payloadu, nikdy jeho obsah nebo surovou chybu JSON parseru. To netvrdí, že každý nesouvisející diagnostický nástroj poskytovatele/pluginu byl auditován; širší úklid uchovaného sinku je sledován v #11658.

Interní `/api/modality-bridge/video/drilldown` životní cyklus je samostatný, loopback/tokenově autentizovaný cache substrát. Každá operace také vyžaduje kanonické neprůhledné ID hlavního subjektu. Než je povolen výrobce v produkci, musí odvodit toto ID z autentizovaného nájemce a nikdy nesmí předávat hodnotu vybranou klientem. Klíče cache spojují toho hlavního subjektu s kanonickými ID relace a video-referencí, ukládají pouze jejich klíče odvozené z SHA-256 a omezují jak čtení, tak mazání na stejný subjekt. Cache ukládá maximálně 16 odvozených JPEG snímků na položku, vyprší po deseti minutách a podporuje omezené čtení `start`/`end` nebo explicitní mazání relace.

Každý subjekt je omezen na 16 položek a 64 MiB kanonických JPEG dat. Tato omezení jsou nezávislá na globálním stropu 64 položek/256 MiB: tlak na kvótu subjektu vyřazuje pouze nejméně používané položky tohoto subjektu, než je zvažováno globální LRU vyřazení. Vypršené položky jsou odstraněny jak z hlavního subjektu, tak z globálního účetnictví při aktivitě cache, zatímco zrušení a selhání validace nezavádí částečnou náhradu.

Cache odmítá nekanonické Base64, nadbytečné vycpávky, ne-JPEG média, neplatné nebo zkrácené JPEG a JPEG, které vyvolávají varování během omezeného dekódování celého obrazu `sharp`. Každý přijatý obrázek znovu kóduje jako kanonický JPEG, odvozuje šířku a výšku z dekódovaných bajtů místo důvěry v pole volajícího, a odmítá jakékoli koncové polyglot bajty místo jejich uchovávání. Pouze omezený kanonický komprimovaný buffer je účtován oběma kvótám. Limit JSON wire zahrnuje overhead Base64 pro strop 32 MiB dekódovaného vstupu. Každá uložená derivace zaznamenává svůj validovaný JPEG formát/rozlišení, politiku vzorkování, verzi derivace, čas vytvoření, serverem vypočítaný hash obsahu a hashovanou referenci rodiče plus hash obsahu rodiče důvěryhodného volajícího. Zrušení je kontrolováno mezi asynchronními fázemi dekódování/hashování před atomickým potvrzením cache.

Produkční producent znovu používá již odvozené snímky brokera pouze po úspěšné vizuální analýze, bez druhého stahování/extrakce videa. Vyžaduje operátor `modalityBridgeVideoDrilldownEnabled=true`, přísné per-part `drilldown: true` a autentizovaný ID záznamu API klíče. Klientem deklarované hodnoty subjektu/sesí jsou nikdy nezakládají vlastnictví. Bez všech tří podmínek neprovádí hash, nezmění velikost ani neuchovává další snímky. Selhání uchování zachovává použitelnou vizuální odpověď. Souhlasné požadavky obcházejí cache výsledků celého videa, takže uložené výsledky nikdy neprovádějí zpracování.

Úspěšné JSON a SSE odpovědi vystavují maximálně čtyři neprůhledné handle v omezeném
`x-omniroute-video-drilldown` headeru. Autorizované původy prohlížeče mohou tento header číst
bez rozšíření CORS politiky původu. Nové handle používají `v1.<32-byte random base64url
token>`, a registr uchovává pouze
jejich SHA-256 hash. Čtečka/parser headeru také akceptuje legacy 64-hex tokeny.
Autentizovaný veřejný spotřebitel je
`GET /api/v1/video-bridge/drilldown?handle=...`, nezávisle řízený
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Výslovně trvalé false odnímá
přístup i když je povolen fallback na legacy `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env.
Produkční uchovávání má analogický legacy
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` fallback. Oba fallbacky mají ve výchozím nastavení vypnuto.

Spotřebitel odvozuje vlastnictví z autentizovaného klíče, aplikuje politiku klíče a
vrací stejný 404 pro neznámé, vypršené a handle jiného klíče. Akceptuje
`variant=preview|standard|detail` (maximální JPEG rozměr 320/640/1280, nikdy neupscaled),
`limit=1..8` (nebo legacy `frames` alias, nikdy obojí), nula-založenou `page`, a volitelné
`start`/`end` sekundy zaměření. Duplicitní
dotazovací klíče a obrácená okna zaměření jsou odmítnuty. Každá vrácená varianta má hash
svého skutečného obsahu a skutečné metadata rozlišení, spojené s uchovaným zdrojem.
Varianty jsou odvozeny při čtení spíše než uchovávány jako extra uchované kopie. JSON
odpověď, včetně Base64/envelope, je omezena na 32 MiB; příliš velká stránka vrací
413 a klient musí požádat o méně snímků. Čtení kontroluje zrušení kolem každého
změny velikosti a znovu kontroluje platnost handle před vrácením. `DELETE` od vlastníka je idempotentní;
smazání nebo vypršení TTL uvolňuje uchovaný zdroj a účetnictví použití.

Sdílený obchod je procesně lokální: handle vyprší při restartu a nejsou přenositelné
mezi nezávislými OmniRoute procesy. Statistika správy odhaluje efektivní uchovávání/
vzdálenou politiku a agregované uchované položky/bytové pouze, nikdy média, reference,
hlavní ID nebo handle. Panel nastavení videa zobrazuje tyto hodnoty a může trvale uchovávat
oba přepínače souhlasu. Tato dokumentace implementace není důkazem živého nasazení nebo
propagace; akceptace reálného modelu je sledována samostatně.

Rámečky jsou titulkovány sekvenčně s nakonfigurovaným Video modelem. Prázdný
Video override dědí nastavení Vision; pokud jsou oba prázdné, Vision
auto-router vybírá efektivní model schopný vidění. Úspěšné titulky
nahrazují původní část stabilním prefixem `[Video description:` který také
označuje text jako nedůvěryhodnou pozorovací informaci odvozenou z média a říká downstream
modelům, aby nesledovaly pokyny nalezené v médiu. Klíče cache pro titulky rámců
zahrnují JPEG bajty, prompt, časové razítko a efektivní model; pouze úspěšné
titulky jsou cachovány. Cache položky uchovávají skutečný úspěšný model producenta,
včetně fallback modelu; most hlásí `mixed`, když byly různé snímky
vyprodukovány různými modely. Cache hit znovu používá tuto identitu producenta
místo toho, aby ji přejmenoval na požadovaný plán směrování. Cache výsledků celého videa
je klíčová na každém vstupu, který mění výstup — prompt, efektivní
model, politika vzorkování, počet rámců, režim sémantické analýzy, SHA-256
otisk normalizovaného náznaku zaměření, okno zaměření, `transcript`,
`audioTranscript`, a flag kontaktního listu — takže změna jakékoliv z těchto
dimenzí je cache miss, nikdy zastaralé opětovné použití. Verze politiky vizuální deduplikace,
práh a omezený počet kandidátských rámců jsou také explicitní v
klíči a metadatech cache výsledků; změna politiky tedy nemůže znovu použít zastaralý
popis celého videa. Metadata cache výsledků v4 uchovává režim a
otisk, nikdy surový uživatelský úkol. Metadata guardrail hlásí jak
požadované, tak efektivní režimy analýzy; požadovaný režim `focused` bez
použitelného uživatelského textu je hlášen jako efektivně `full`.

Guardrail extrahuje každou podporovanou část videa, ale popisuje maximálně
`modalityBridgeVideoMaxVideos`. Pro cíl, u kterého bylo prokázáno, že
`supportsVideo === false`, selhaná a nadlimitní videa se stávají explicitními bezpečnými
textovými značkami, takže žádné surové video nepřežije. Když je schopnost neznámá, tyto části
uchovávají svůj video nosič; jakýkoliv fallback transcript následuje výše uvedenou omezenou textovou
konverzi. Cíle s `supportsVideo === true` obcházejí most.
Signál pro zrušení požadavku klienta se šíří prostřednictvím stahování, broker fronty,
podprocesů a volání titulků; zrušení zastavuje mezi videi a nikdy neotevírá
na surová média.

Nastavení za běhu jsou DB-podporovaná a Zod-validována:

| Klíč                                | Výchozí     | Rozsah / chování                                                                                       |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`     | Volitelný runtime, opt-in                                                                              |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` zachovává obecné titulky; `focused` používá omezený, nedůvěryhodný kontext posledního uživatele |
| `modalityBridgeVideoModel`          | `""`        | Dědí model Vision Bridge                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                   |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, nebo proporcionální `segment_aware`; selhání detektoru se vrací k `uniform`  |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                    |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                         |

Legacy persistované hodnoty časového limitu videa nad 120 sekund jsou omezeny na
termín brokera; nové zápisy nad tuto hranici jsou odmítnuty.
`GET /api/modality-bridge/video/runtime` vyžaduje důvěryhodnou razítkovanou smyčku
lokality před autentizací nebo zkoumáním runtime, poté vyžaduje správu
autentizaci. Vrací pouze `available`, sanitizované verze FFmpeg/ffprobe a
pevný důvod, když je runtime nedostupný. Interní extrakční koncový bod není
veřejné API pro nahrávání: saturace fronty vrací `503` plus `Retry-After`, odpojení
volajícího vrací `499` a pevný termín brokera vrací `504`. Převedené odpovědi přidávají
`video->text;model=<visionModel>;parts=<videos>` do centrálního
`x-omniroute-modality-bridge` hlavičky, aniž by odstranily segmenty Vision nebo Audio.

### PII Masker (`piiMasker.ts`)

Běží na **obou** fázích.

- **`preCall`** klonuje payload, prochází `system`, `messages`, `input` a
  `prompt` (včetně obyčejných řetězcových položek) a aplikuje `processPII()` (z
  `@/shared/utils/inputSanitizer`) na řetězcová pole `content`/`text`. Když
  `PII_REDACTION_ENABLED=true`, detekované PII je redigováno v odchozím
  payloadu. To je nezávislé na `INPUT_SANITIZER_MODE` (který pouze řídí
  politiku injekce promptu). Když je redakce vypnuta, záznamy volání počítají
  detekce bez přepisování obsahu.
- **`postCall`** hluboce klonuje odpověď, spouští `sanitizePIIResponse()` plus
  maskér tvaru Responses-API (`maskResponsesOutput` — pokrývá
  `output_text` a `output[].content[].text`). Pokud dojde k jakékoli redakci,
  upravená odpověď nahradí původní.

Ochranná lišta nikdy nezablokuje; pouze anotuje (`meta.detections`,
`meta.redacted`) nebo přepisuje.

### Prompt Injection (`promptInjection.ts`)

Detekuje protivník struktury v uživatelsky dodaném obsahu a vynucuje
konfigurovanou politiku. Chování je řízeno proměnnými prostředí a možnostmi
konstruktora:

| Nastavení      | Env var                                                                                                | Výchozí | Efekt                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Povolené       | `INPUT_SANITIZER_ENABLED`                                                                              | `true`  | Když je `false`, ochranná lišta zkracuje.                                                                                                                                                     |
| Mód            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`  | Politika injekce: `block`, `warn` nebo `log`. (`redact` je akceptováno pro zpětnou kompatibilitu, ale **ne** odstraňuje text injekce; žádost o přepis PII je řízena `PII_REDACTION_ENABLED`.) |
| Prah blokování | `blockThreshold` možnost / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Minimální závažnost potřebná k blokování. Střední je ve výchozím nastavení pouze pro pozorování.                                                                                              |

**Priorita módu** (`getMode`): volající `options.mode` →
`INJECTION_GUARD_MODE` **DB funkce-flag override** (Dashboard → Nastavení →
Funkční vlajky) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Přepsání na dashboardu tedy vítězí nad proměnnými prostředí, takže uživatelské rozhraní Funkčních vlajek řídí běžící ochrannou lištu v reálném čase (bez restartu). Čtení z DB je fail-safe:
pokud dojde k chybě, ochranná lišta se vrátí k chování založenému na prostředí, a když není nastaveno žádné přepsání, chování je identické s řešením pouze na základě prostředí.

Zdroje detekce:

1. `sanitizeRequest()` z `@/shared/utils/inputSanitizer` (sdílená detekční
   sada používaná jinde v pipeline).
2. Vestavěné `DEFAULT_GUARD_PATTERNS` (aktuálně `system_override_inline` a
   `markdown_system_block`, obě s vysokou závažností).
3. Volitelné `customPatterns` předané prostřednictvím možností konstruktora (řetězce, regex,
   nebo `{ name, pattern, severity }` záznamy).

Když `mode === "block"` **a** alespoň jedna detekce splňuje prahovou
závažnost, `preCall` vrací `{ block: true, message: "Žádost byla odmítnuta:
detekován podezřelý obsah" }`. V `warn`/`log` módech ochranná lišta loguje, ale
umožňuje volání. Sdílený pomocník `evaluatePromptInjection()` je také exportován
pro volající, kteří potřebují vyhodnotit prompty bez procházení registru.

**Scan bound (v3.8.20):** detektor pouze zkoumá **prvních 16 KB** spojeného textu promptu — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtů) v
`src/shared/utils/inputSanitizer.ts`. Jak `detectInjection()`, tak
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` před spuštěním
cyklu vzorů. Injekční direktivy se nacházejí blízko vrcholu vstupu, takže to
omezuje CPU/GC regexu na více než stovkách KB payloadů, aniž by oslabilo detekci (srov. #3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Běží na **obou** fázích, poslední v defaultním řetězci (priorita `95`). Rediguje
známé vzory API klíčů / tajných tokenů z odchozího payloadu (obsah zprávy,
argumenty volání nástroje, výsledky nástroje) **a** odpověď poskytovatele, takže
přihlašovací údaje vložené do promptu (nebo vrácené výsledkem nástroje) nejsou
uniklé k upstream poskytovateli nebo zpět k klientovi.

- **Pouze na základě souhlasu**, stejná konvence jako redakce PII (Tvrdé pravidlo #20-adjacent):
  zakázáno, pokud `settings.credentialRedactionEnabled === true` **nebo**
  `CREDENTIAL_REDACTION_ENABLED=true`. Když je to vypnuto, ochranná bariéra je nefunkční —
  nikdy neblokuje a nikdy nepřepisuje.
- `redactCredentials()` prochází celým stromem payloadu/odpovědi (`walkValue()`,
  bezpečné proti zneužití prototypu, bezpečné proti cyklům pomocí `WeakSet`) a nahrazuje shody
  zástupným symbolem `[REDACTED:<type>]`, klonuje pouze větve, které se skutečně změnily.
- `CREDENTIAL_PATTERNS` pokrývá klíče poskytovatelů LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokeny VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), platební klíče (Stripe, Square), cloudové
  klíče (AWS access key, Twilio, SendGrid, Mailgun), soukromé klíče / JWT,
  řetězce připojení nesoucí pověření (`mongodb://user:pass@...`, atd.) a
  obecný vzor hlavičky `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Klíče ve tvaru hlavičky (`authorization`, `x-api-key`, `api-key`,
  `apikey`) jsou redigovány strukturálně (pouze hodnota, schéma prefix jako
  `Bearer `/`Basic ` zachováno) spíše než pomocí obecného textového regexu.
- Ochranná bariéra nikdy neblokuje; pouze přepisuje (`modifiedPayload` /
  `modifiedResponse`) a anotuje (`meta.credentialsRedacted`, `meta.count`).

Regresní test: `tests/unit/credential-masker-guardrail.test.ts`.

## Základní kontrakt (`base.ts`)

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
  block?: boolean; // true zkrátí vyhodnocování řetězce
  message?: string; // zobrazí se při zablokování
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vráceno metodou preCall pro přepsání požadavku
  modifiedResponse?: TValue; // vráceno metodou postCall pro přepsání odpovědi
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

Ochranné pravidlo signalizuje „žádnou změnu“ vrácením hodnoty `void`, `{}` nebo
`{ block: false }`. Vrácení `modifiedPayload`/`modifiedResponse` nahradí
hodnotu procházející řetězcem pro následná ochranná pravidla.
`signal?: AbortSignal` přenáší životní cyklus volajícího do ochranných pravidel. Přerušení požadavku je záměrnou výjimkou z režimu fail-open: mediální převodníky ukončí práci a provedou úklid, aniž by obnovily nezpracovaná média pro cíl, o kterém je známo, že je nepodporuje.

## Registr (`registry.ts`)

Singleton `guardrailRegistry` poskytuje:

- `register(guardrail)` — přidá ochranné pravidlo (nebo je nahradí podle normalizovaného názvu) a
  znovu seřadí pravidla vzestupně podle `priority`.
- `clear()` / `list()` — pomocné administrativní funkce.
- `runPreCallHooks(payload, context)` — prochází aktivní ochranná pravidla, předává
  payload prostřednictvím `modifiedPayload` a zastaví se při prvním `block: true`.
- `runPostCallHooks(response, context)` — stejný postup na straně odpovědi.
- `resetGuardrailsForTests({ registerDefaults })` — vymaže stav a volitelně
  znovu zaregistruje výchozí pravidla pro čistou izolaci testů.

Oba spouštěče vracejí `{ blocked, payload|response, results, guardrail?, message? }`,
kde `results` je pole záznamů `GuardrailExecutionResult`, které obsahují
pro jednotlivá ochranná pravidla pole `blocked`, `skipped`, `modified`, `error` a `meta`,
užitečná pro trasování.

### Zakázání ochranných pravidel pro jednotlivé požadavky

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` shromažďuje
deduplikovaný seznam názvů ochranných pravidel, která mají být pro aktuální
požadavek přeskočena. Zdroje (všechny jsou volitelné a všechny se slučují):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` v těle požadavku (na nejvyšší úrovni)
- `metadata.disabledGuardrails` v těle požadavku
- Hlavička `x-omniroute-disabled-guardrails` (nebo starší
  `x-disabled-guardrails`)

Hodnoty mohou být pole řetězců nebo řetězec oddělený čárkami; názvy jsou
normalizovány na malá písmena ve formátu kebab-case (`pii_masker` → `pii-masker`). Výsledek
je předán registru prostřednictvím `context.disabledGuardrails`, který přeskočí
odpovídající ochranná pravidla (`skipped: true` v `results`).

## Pořadí zpracování

Pro každý požadavek procházející přes `src/sse/handlers/chat.ts` a
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` sestaví seznam vynechaných ochranných mechanismů z klíče API, těla požadavku
   a hlaviček.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` spustí ochranné mechanismy ve vzestupném
   pořadí priorit:
   - Zakázané ochranné mechanismy se zaznamenají jako `skipped`.
   - Metoda `preCall` každého ochranného mechanismu může přepsat datovou část pomocí `modifiedPayload`.
   - První výskyt `block: true` okamžitě ukončí řetězec a obslužná rutina vrátí
     odpověď o zamítnutí ochranným mechanismem.
3. (Případně přepsaná) datová část pokračuje do kombinovaného směrování a odeslání
   nadřazené službě.
4. Po sestavení odpovědi spustí `guardrailRegistry.runPostCallHooks(...)`
   stejný řetězec nad odpovědí. Hodnota `block: true` v této fázi zahodí odpověď
   nadřazené služby.

Ochranné mechanismy, které vyvolají výjimku, se zaznamenají s `error: <message>` a zaprotokolují prostřednictvím
`logger.warn`, ale řetězec pokračuje — záměrně tedy funguje v režimu fail-open.

## Konfigurace

Proměnné prostředí načítané vestavěnými ochrannými mechanismy:

| Proměnná                              | Používá ji                | Účinek                                                                                                        |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Nastavením na `false` se detekce zcela zakáže.                                                                |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Zásady pro injekce: `warn`, `block` nebo `log`. Zastaralá hodnota `redact` text injekce nepřepisuje.          |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Režim ochrany proti injekcím; zároveň příznak funkce v DB, který **přepisuje** proměnné prostředí (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Minimální závažnost, kterou `MODE=block` odmítne: `high` (výchozí), `medium` nebo `low`.                      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Zastaralý alias pro `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                        |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Je-li nastaveno na `true`, údaje PII v požadavku se začerní (nezávisle na režimu injekcí).                    |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (na výstupu) | Řídí chování maskování na straně odpovědi.                                                                    |

Ochranné mechanismy Modality Bridge načítají běhovou konfiguraci z úložiště nastavení
založeného na DB (`getSettings()`), nikoli z proměnných prostředí. Primární klíče pro obraz jsou
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` a
`modalityBridgeCacheMaxEntries`. Zastaralé klíče
`visionBridge*` jsou přijímány pouze jako zdokumentovaný záložní zdroj pro čtení během jednoho cyklu;
zápisy z řídicího panelu používají primární klíče. Výchozí hodnoty a záložní
resolver se nacházejí v `src/shared/constants/modalityBridgeDefaults.ts`, přičemž zastaralé
konstanty zůstávají zachovány v `src/shared/constants/visionBridgeDefaults.ts`.

Zvuk používá `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` a `modalityBridgeAudioMaxClips` společně se sdílenými
nastaveními `modalityBridgeCache*`. Zvuk nemá záložní podporu zastaralých klíčů, protože tyto
klíče byly zavedeny se schématem Modality Bridge.

Video používá `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` a
`modalityBridgeVideoTimeout` společně se sdílenými nastaveními `modalityBridgeCache*`.
Ve výchozím nastavení je zakázáno, protože FFmpeg/ffprobe jsou volitelné provozní
závislosti a popisování snímků zvyšuje latenci a náklady na model.

## Vlastní guardraily

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

Postup:

1. Vytvořte `src/lib/guardrails/myGuardrail.ts`, který rozšiřuje `BaseGuardrail`.
2. Implementujte `preCall` a/nebo `postCall`.
3. Buď jej zaregistrujte při importu (přidáním z `registerDefaultGuardrails`), nebo
   za běhu zavolejte `guardrailRegistry.register(...)` — registr nahradí
   jakýkoli dřívější guardrail se stejným normalizovaným názvem.
4. Přidejte testy do `tests/unit/` (existující příklady:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testování

Mezi testy použijte `resetGuardrailsForTests()`, abyste vždy začínali ze známého stavu.
Předejte `{ registerDefaults: false }`, chcete-li začít s prázdným registrem a
zaregistrovat pouze testované guardraily. Vision Bridge podporuje vkládání závislostí
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge zpřístupňuje ekvivalentní
rozhraní pro nastavení, schopnosti, výběr modelu STT, kontrolu přihlašovacích údajů
a přepis. Testy tak mohou ověřovat oba toky bez přístupu k databázi nebo síti.

## Viz také

- `src/lib/guardrails/` — implementace
- `src/shared/utils/inputSanitizer.ts` — sdílený detektor zajišťující
  detekci prompt injection a maskování PII
- `src/shared/constants/visionBridgeDefaults.ts` — výchozí hodnoty Vision Bridge a
  seznam modelů s vynuceným přemostěním
- `src/shared/constants/modalityBridgeDefaults.ts` — sdílené výchozí hodnoty běhového prostředí Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonální vrstva (circuit breaker, intervaly zklidnění)
- `docs/reference/ENVIRONMENT.md` — úplný přehled proměnných prostředí

## Pokrytí tras ochranou proti injection a red-team testování (Fáze 8 · Blok D)

Ochrana proti injection (`createInjectionGuard` / `withInjectionGuard`) pokrývá všechny trasy,
které přijímají uživatelské prompty. Respektuje `INJECTION_GUARD_MODE` (výchozí `warn` = pouze protokolování;
`block` = vrátí HTTP 400 `SECURITY_001`).

| Typ              | Trasy                                                                                                                                                | Výchozí režim |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Text (stávající) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generativní      | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Extrakce textu (`extractMessageContents`) pokrývá `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testování (každou noc, `nightly-llm-security.yml`):** promptfoo ověřuje, že každá trasa blokuje
korpus OWASP-LLM v režimu `INJECTION_GUARD_MODE=block`; garak spouští sondy (bez tajného klíče se přeskočí).
`moderations` je zahrnuto kvůli konzistenci — provozovatelé jej mohou v režimu blokování vyjmout pomocí
`resolveDisabledGuardrails`.

Noční pracovní postup (`.github/workflows/nightly-llm-security.yml`, cron + ruční
spuštění) obsahuje dvě úlohy:

- **`promptfoo-guard` (blokující)** — spouští `promptfoo eval -c promptfooconfig.yaml`
  s `INJECTION_GUARD_MODE=block`. Každý nepřátelský případ (např. „ignoruj všechny
  předchozí instrukce…“, jailbreaky ve stylu DAN) ověřuje, že odpověď obsahuje
  `error.code === "SECURITY_001"`, tj. že ochrana požadavek skutečně odmítla.
- **`garak` (informativní)** — spouští garak `--probes promptinject,dan,leakreplay`
  proti lokální instanci OmniRoute (`http://localhost:20128/v1`). Je podmíněna
  tajným klíčem poskytovatele (`PROMPTFOO_PROVIDER_KEY`); pokud není k dispozici, korektně se přeskočí a je doplněna
  o `|| true`, takže podá hlášení, aniž by způsobila selhání CI.

Pokrytí pomocné funkce ochrany (`createInjectionGuard` / `withInjectionGuard`)
zahrnuje každou trasu `/v1` přijímající prompt; text promptu se získává z
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomocí
`extractMessageContents()` v `src/shared/utils/inputSanitizer.ts`.
