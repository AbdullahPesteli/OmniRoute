# Guardrails (Lietuvių)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Pirminis tiesos šaltinis:** `src/lib/guardrails/`
> **Paskutinį kartą atnaujinta:** 2026-08-29 — v3.8.51 („Video Bridge“ transkripcijos kilmę deklaruoja iškvietėjas,
> serveris jos dar nepatvirtina — patikslinta pagal #11661)

Apsaugos priemonės užtikrina saugos, politikos ir turinio transformacijas ties
riba tarp „OmniRoute“ ir išorinių teikėjų. Kiekviena apsaugos priemonė gali tikrinti
(ir pasirinktinai atmesti, transformuoti arba anotuoti) užklausų naudingąsias apkrovas (`preCall`) ir
išorinių teikėjų atsakymus (`postCall`).

Sistema yra **fail-open**: jei vykdant apsaugos priemonę įvyksta išimtis, registras
įrašo klaidą ir tęsia darbą su kita apsaugos priemone, užuot atmetęs
užklausą. Blokavimas visada yra sąmoningas sprendimas (`block: true`), o ne atsitiktinumas.

## Įmontuoti apsauginiai mechanizmai

Registras automatiškai įkelia šešis apsauginius mechanizmus prioritetine tvarka importuojant
(žr. `registry.ts` → `registerDefaultGuardrails()`):

| Prioritetas | Pavadinimas         | Etapas(-ai)    | Failas                |
| ----------- | ------------------- | -------------- | --------------------- |
| `5`         | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`         | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`         | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`        | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`        | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`        | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Mažesni prioritetai vykdomi **pirmiausia**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Perima vaizdą turinčius užklausas, skirtas **nevaizdo modeliams**, ir arba
peradresuoja visą užklausą į vaizdą palaikantį modelį, arba pakeičia vaizdo
dalis tekstinėmis aprašymomis, kurias sukuria konfigūruojamas vaizdo modelis prieš
aukštesnę užklausą. Tai leidžia tik tekstinius duomenis teikiantiems tiekėjams
sklandžiai tvarkyti multimodalius krovinius.

Srautas:

1. Praleisti, jei tikslinis modelis jau palaiko vaizdą (nebent jis yra
   priverstinio tilto sąraše `isVisionBridgeForcedModel`).
2. Išgauti vaizdo dalis naudojant `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), kuris deleguoja į **vieningą medijų
   detektorių** `detectMediaParts()` `open-sse/utils/mediaParts.ts` — tai
   vienintelis tiesos šaltinis, bendrinamas su derinimo suderinamumo filtru.
   Išgavimas leidžiamas tik viršutinio lygio dalims, kurias
   `replaceImageParts` gali vėl sujungti (išgauti↔pakeisti sutartis): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, ir Responses API `input_image`. Įdėtiniai hitai ir
   tik indikatorių formos yra derinimo filtro medžiaga ir niekada nėra išgaunami.
   Praleisti, jei nieko nerasta.
3. Išspręsti vykdymo konfigūraciją naudojant `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nauji `modalityBridge*`
   nustatymų raktai laimi; senieji `visionBridge*` raktai lieka **vieno ciklo
   atsarginiu** (atsarginis langas). Praleisti prieš bet kokį medijų perėjimą,
   kai tiltas yra išjungtas.
4. Režimo pasirinkiklis (`modalityBridgeVisionMode`, žr. žemiau esančią lentelę) nusprendžia
   peradresuoti ar aprašyti. Peradresavimas grąžina `modifiedPayload` su tik `model`
   pakeistu, plius meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Aprašymo kelias: apriboti vaizdus iki `maxImages`, sudaryti užduotį atitinkantį
   užklausą, konsultuotis su aprašymo talpykla, iškviesti vaizdo modelį **paraleliai**
   (`Promise.allSettled`), ir įterpti `[Image N]: <description>` tekstines dalis jų
   vietoje. Nepavykęs aprašymas grąžina `null`, o originali vaizdo dalis yra
   **išsaugota** (#4012) — išskyrus derinimo aprašymo kelią, kai kiekvienas
   aprašymas nepavyko, kur patvirtintas nevaizdo aukštesnis gauna
   `(unavailable — no vision-capable provider connected)` stubą (#8430).
6. Grąžinti `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Režimo pasirinkiklis (`modalityBridgeVisionMode`)

| Režimas    | Numatyta | Elgesys                                                                                                                                                                                                                                                                |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Senoji heuristika, nepaliesta (#6640/#7204): ne derinimo/`auto/` modeliai peradresuoja į geriausią vaizdo modelį, nebent originalus modelis jau turi naudojamus kredencialus (tuomet aprašo); derinimo tikslai visada aprašo.                                          |
| `describe` |          | Visada aprašo — peradresavimo blokas visiškai praleidžiamas; vartotojo pasirinktas modelis visada atsako.                                                                                                                                                              |
| `reroute`  |          | Priverstinis peradresavimas: kredencialų modelio apsauga apeinama. Peradresavimo-**tikslo** kredencialų apsauga vis tiek taikoma — kai nėra naudojamo vaizdo tikslo, užklausa pereina į aprašymą, todėl žali vaizdai niekada nepasiekia tik tekstinio backend (#8430). |

Priverstiniai režimai trumpina **prieš** automatinę heuristiką; `auto` elgesys
yra bitų identiškas prieš PR-1 apsauginį mechanizmą.

#### API rakto sritis (`visionBridgeKeyScope.ts`)

Kai skambinančiojo API raktas riboja `allowedConnections`, kvotų baseinus
(`allowedQuotas`) arba modelius (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), tiltas tik
pasirenka peradresavimo ir aprašymo modelius, kuriuos raktas gali naudoti, pagal
jungtis, kurias raktas gali naudoti. Aprašymo užklausa tada visada praeina per
OmniRoute savikontrolės ciklą su `x-omniroute-self-loop-key-id` antrašte, todėl
gaunama pokalbio užklausa dar kartą užtikrina to rakto jungties ir modelio politiką.
`enforceApiKeyPolicy()`
gerbia tą antraštę tik kartu su savikontrolės nešėju, todėl ji gali tik
sumažinti prieigą, o id, kuris nesprendžia, yra atmestas.

Jei jokiam vaizdo modeliui nėra leidžiama naudoti raktą, aprašymo kelias pasitraukia
ir užklausa praeina nepakitusi, tas pats fail-open elgesys kaip ir išjungtas
apsauginis mechanizmas (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Užklausos be rakto ir rakta, neturinčios šių apribojimų, elgiasi tiksliai taip pat kaip
anksčiau.

#### Užduotį atitinkantis aprašymo užklausa (`modalityBridgeVisionTaskAware`)

Numatytas **tiesa**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) prided
paskutinės vartotojo žinutės tekstą (sutrumpintą iki 500 simbolių) prie pagrindinio
aprašymo užklausos, nukreipdamas aprašymą į tai, ko vartotojas iš tikrųjų prašė
(codex-vision-proxy modelis) ir prašydamas vizijos modelio transkribuoti matomą
tekstą. Kai vėliava išjungta — arba nėra vartotojo teksto — pagrindinė užklausa
naudojama nepakitusi.

Aprašymo savarankiško ciklo OpenAI suderinama užklausa (`callVisionModelSingle()`
`visionBridgeHelpers.ts`) visada prašo `image_url.detail: "high"` —
be jokių sąlygų, visiems skambintojams/tiekėjams, nesiremiant jokiu kliento signalu.
Žemo detalumo mėginiai sumažina OCR tikslumą būtent dėl to teksto transkripcijos
užduoties, kurios prašo šis aprašymas, todėl aprašymo užklausa visada prašo
aukšto detalumo, nepriklausomai nuo to, kokio detalumo lygio buvo naudojama
pradinėje įeinančioje užklausoje. Tai veikia tik vidinę aprašymo užklausos
kūno dalį; tai nekeičia, kaip OmniRoute perduoda skambintojo `image_url.detail`
pagrindinėje užklausoje — tas numatytas nustatymas taikomas atskirai, ir tik
aptikusiems OpenCode klientams, `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic laidų formato aprašymo savarankiško ciklo neturi `detail` lauko
ir nėra paveiktas jokio numatyto nustatymo.

#### Aprašymo išvesties riba (`modalityBridgeVisionMaxChars`)

| Raktas                         | Numatytas | Diapazonas         |
| ------------------------------ | --------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`       | `0` arba 100–50000 |

`0` (numatytas) reiškia **jokios ribos** — aprašymas, grąžintas iš
`callVisionModel()`, perduodamas nepakitęs, išlaikant esamą elgesį. Bet koks
vertė 100–50000 diapazone sutrumpina aprašymą su `…` priedu prieš jį
sujungiant kaip `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` `src/lib/guardrails/visionBridge.ts`).
Padidinkite tai detalizuotiems OCR užduotims, kur žemyn einantis modelis
reikia pilnos transkripcijos; sumažinkite, kad apribotumėte simbolių naudojimą
kalbantiems vizijos modeliams. Valdymo skydelio laukas yra Vizijos skyriaus
Išplėstiniame skydelyje (`modality-bridge-max-chars` `ModalityBridgeVisionTab.tsx`)
ir riboja bet kokią vertę nuo 1 iki 99 iki 100, paliekant aiškų `0`
nepaliestą — `0` yra galiojanti Zod vertė savaime
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ne tik
"nustatyta" numatytoji.

#### Aprašymo talpykla (`modalityBridge/bridgeCache.ts`)

Atmintyje LRU + TTL talpykla aprašymo išvestims, bendrinama visame procese.
Raktas = `sha256(imageRef + composedPrompt + configuredBridgeModel)` su
ilgio prefiksu (be lauko ribų kolizijų). Modelio komponentas yra
**nustatytas** tilto modelis, o ne modelis, kuris iš tikrųjų atsakė —
`callVisionModel` gali viduje grįžti atgal, o raktavimas pagal bandymą
suskaidytų talpyklą. Nepavykę aprašymai niekada nėra talpinami. Nustatymai:

| Raktas                          | Numatytas | Diapazonas |
| ------------------------------- | --------- | ---------- |
| `modalityBridgeCacheEnabled`    | `true`    | —          |
| `modalityBridgeCacheTtlMinutes` | `60`      | 1–1440     |
| `modalityBridgeCacheMaxEntries` | `200`     | 10–5000    |

#### Nuotolinių vaizdų normalizavimas (savarankiško ciklo aprašymas/base64 gavimas)

Kai tiltas pats gauna **nuotolinį** vaizdą — Anthropic aprašymo
savarankiškas skambinimas ir claude-laidų formato base64 konversija
(`ensureBase64ImagesForClaudeWire`), abu per
`fetchRemoteImageAsDataUri()` `visionBridgeHelpers.ts` — gautas duomenų
URI perduodamas per `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) prieš jį įterpiant į vizijos modelio
užklausą. Per dideli vaizdai sumažinami iki **2048px ilgio krašto**
(atitinka OpenAI/Anthropic jau taikomą serverio pusėje), kas sumažina
įkėlimo baitų/latenciją, nekeisdami to, ką vizijos modelis mato. Perkėlimas
naudojamas `sharp`, įkeltas per dinaminį importą: platformoje, kurioje
jos natūralus binarinis failas nepavyksta įkelti, `normalizeDataUri()` **niekada
nepavyksta** — jis grįžta prie originalių baitų, todėl aprašymo/base64
konversijos kelias visada veikia. Nevaizdo baitai (gauti, kurie negrąžino
dekoduojamo vaizdo) taip pat perduodami nepakitę. Ši normalizacija
taikoma tik vaizdams, kuriuos tiltas gauna savo savarankiškam skambinimui —
ji niekada netaikoma skambintojo žaliam perduodamam kroviniui, laikantis
pasirinktinio mutacijos principo (Griežta taisyklė #20).

#### Nustatymų schema + migracija

Nauji `modalityBridge*` raktai yra Zod patvirtinti `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*` trio, ir
`modalityBridgeAudio*` grupė, naudojama Audio Bridge. Migracija
`141_modality_bridge_settings.sql` kopijuoja esamus senus
`visionBridge*` vertes į atitinkamus naujus raktus (idempotentinis, niekada
neperrašys operatoriaus nustatyto `modalityBridge*` vertės); senieji raktai
lieka priimami kaip skaitymo atsarginis variantas vienam leidimo ciklui.

#### Skaidrumo antraštė + statistika

Aprašymo transformuoti atsakymai turi
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(sukurtas `buildModalityBridgeHeader()` `modalityBridge/bridgeStats.ts`,
pažymėtas `withModalityBridgeHeader()` `src/sse/handlers/chatHelpers.ts`).
Peradresuoti užklausimai **neturi** antraštės — krovinys buvo nepakitęs
ir modelio keitimas jau matomas atsakymo kūno `model` lauke.

`GET /api/modality-bridge/stats` (valdymo autentifikacija, tas pats lygis kaip
`GET /api/settings`) grąžina atmintyje esančius per-modalumo skaitiklius
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` `vision`, `audio` ir
`video`. `averageLatencyMs` naudoja `latencySamples`, o ne visus bandymus, kaip
savo vardiklį; operacija be laiko nesukuria nulio milisekundžių
pavyzdžio. `bridged` išlieka atgal suderinamu aliasu sėkmingiems
konversijoms; nesėkmingi bandymai jo nepadidina.
Skaitikliai pagal numatymą iš naujo nustatomi proceso perkrovimo metu
(telemetrija, ne apskaita).

#### Valdymo skydelio konfigūracija

Specializuota valdymo skydelio puslapis yra
`/dashboard/settings/modality-bridge`. Jo URL adresuojami `Vision`, `Audio`,
ir `Video` skirtukai išlaiko užklausos parametrus keičiant `tab` reikšmę.
Vision skirtukas atskleidžia įgalinimą, režimą, modelio pasirinkimą (įskaitant automatinį
numatytąjį), užduotims jautrų kvietimą, pažangius laiko/nurodymo/aprašymo ilgio/šalutinio
ribas, veikimo
skaitiklius ir saugomą pavyzdžio užklausą. Audio skirtukas taip pat yra aktyvus: jis atskleidžia
įgalinimą, STT tik modelio pasirinkimą su Auto, laiko/max-clip ribas, garso
skaitiklius ir `input_audio` pavyzdžio testą. Video skirtukas veikia: jis praneša
FFmpeg/ffprobe veikimo būseną — viena iš keturių aiškių UI būsenų (`unknown`, kai
probas yra kelyje arba negalėjo būti užbaigtas, `restricted`, kai
ne-loopback valdymo skydelio hoste, kur probas praleidžiamas kliento pusėje, `unavailable`, kai probas
buvo atliktas ir patvirtintas kaip trūkstamas, arba `available` su FFmpeg/ffprobe versijomis) — išlaiko
įgalinimo/modelio/rėmo/video/laiko ribas, filtruojama modelio pasirinkimas iki vizijos
galinčių modelių ir atskleidžia video skaitiklius.

Buvusi Vision Bridge kortelė po AI nustatymais yra suderinamumo nuoroda į
naują puslapį; ji daugiau neturi antros formos kopijos. Media Providers taip pat
susieja Image-to-Text ir Speech-to-Text darbo eigas su atitinkamais Modality
Bridge skirtukais, nepašalindami esamo Speech-to-Text žaidimų aikštelės.

**Savarankiško ciklo priėmimo apeiga:** kai aprašymo užklausa nukreipiama per OmniRoute
savo `/v1` savarankišką ciklą (ne standartinis tiekėjo modelis), sub-užklausa siunčia
`x-omniroute-admission-bypass: internal` ir yra autentifikuota su išspręstu
savarankiško ciklo akreditu — vietiniu `sk_omniroute` sargybinis vietiniame režime, arba
operatoriaus sukonfigūruotu `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` aplinkos raktu (#1350), kad
`REQUIRE_API_KEY=true` diegimai vis tiek galėtų vykdyti aprašymo užklausą. Apeiga
gerbiama tik tiems tiksliai akreditams, todėl išoriniai klientai negali naudoti
antraštės, kad praleistų priėmimą.

Paveldėti numatyti nustatymai gyvena `src/shared/constants/visionBridgeDefaults.ts`;
nauji režimo/užduotims jautrūs/šalutiniai numatyti nustatymai ir nustatymų sprendėjas gyvena
`src/shared/constants/modalityBridgeDefaults.ts`. Saugiklis atskleidžia
`deps` konstruktoriaus parinktį, kad testai galėtų įterpti netikrus `getSettings` ir
`callVisionModel` įgyvendinimus.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Perima garso turinčias pokalbių užklausas prieš joms pasiekiant tikslą, kuris nėra
žinomas kaip priimantis garso įvestį. Ji niekada neperadresuoja pokalbių užklausos: garso dalys yra
perrašomos per esamą OpenAI suderinamą multipart galinį tašką, o pasirinktas pokalbių modelis tęsia su tekstiniais
perrašymais.

Srautas:

1. Išspręskite `supportsAudio` per `getResolvedModelCapabilities()`. Aiškūs
   tiekėjo registracijos metaduomenys laimi, tada statiniai modelio metaduomenys, tada sinchronizuoti
   `modalities_input`. Deklaruotas įvesties sąrašas be `audio` yra `false`; jokie
   galimybių įrodymai lieka `null`. Abu `false` ir `null` aktyvuoja
   konservatyvų tiltą, o `true` jį apeina.
2. Išspręskite `modalityBridgeAudio*` nustatymus ir ištraukite sujungiamas viršutinio lygio
   garso dalis iš kiekvienos žinutės per bendrą `detectMediaParts()`
   detektorių. Palaikomi laidų formatai yra OpenAI `input_audio`, `audio_url`, ir
   `source.media_type: "audio/*"`. Įdėtas garsas aptinkamas maršrutizavimui, tačiau nėra
   pašalinamas per sujungimo kelią. Darbas yra ribojamas `modalityBridgeAudioMaxClips`;
   vėlesnės dalys lieka nepaliestos.
3. Gerbkite sukonfigūruotą `provider/model`, arba leiskite `selectAudioBridgeModel()` pereiti
   per `AUDIO_TRANSCRIPTION_PROVIDERS` stabilia katalogo tvarka ir pasirinkti pirmą
   modelį su naudojamu aktyviu tiekėjo akreditu.
4. `callAudioTranscription()` konvertuoja base64/data-URI garso į multipart
   `file`, arba atsisiunčia nuotolinį `audio_url` per tik viešą išėjimo
   sargybinį su DNS fiksavimu ir 25 MB riba. Tada jis POSTina failą ir pasirinktą
   modelį į vietinį `/v1/audio/transcriptions` savarankišką ciklą, autentifikuotą su
   `resolveSelfLoopBearer()`. Esamas transkripcijos maršrutas atlieka normalų
   akreditų paiešką, atvėsimą/greičio ribojimo tvarkymą ir tiekėjo išsiuntimą.
5. Sėkmingos užklausos pakeičia savo dalis su `[Audio N]: <transcript>`. Užklausos
   vykdomos su `Promise.allSettled`: individuali nesėkmė išlaiko tą originalią
   garso dalį (#4012 sutartis). Jei kiekviena užklausa nepavyksta ir tikslas įrodytas
   `supportsAudio === false`, dalys tampa
   `[Audio N]: (nepasiekiama — jokio STT tiekėjo neprijungta)` (#8430 sutartis). Nežinomam
   tikslui (`null`), visi nesėkmių rezultatai lieka nepaliesti. Įrodytas
   tekstui skirtas tikslas be naudojamo STT akredito gauna tą patį aiškų
   stubą be tinklo užklausos.

Sėkmingi perrašymai naudoja proceso lygio Modality Bridge LRU/TTL talpyklą. Raktas
sujungia garso nuorodą, stabilų `audio-transcription` operacijos
etiketę ir pasirinktą STT modelį; nesėkmės niekada nėra talpinamos. Garso bandymai atnaujina
bendrus `bridged`, `cacheHits`, `failures` ir `lastUsedAt` skaitiklius.
Transformuoti atsakymai neša
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nepaliestos
užklausos negauna Audio Bridge segmento.

Veikimo nustatymai yra DB palaikomi ir Zod patvirtinti:

| Raktas                        | Numatyta | Diapazonas       |
| ----------------------------- | -------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                |
| `modalityBridgeAudioModel`    | `""`     | Auto arba STT ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10             |

Bendras talpyklos valdymas priklauso nuo `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ir `modalityBridgeCacheMaxEntries`.

### Vaizdo tiltas (`videoBridge.ts`, `videoBridgePipeline.ts`)

Perima aukščiausio lygio vaizdo dalis Chat Completions `messages` ir Responses
API `input` prieš tai, kai yra iškviečiamas tikslas, neturintis žinomos natūralios vaizdo palaikymo.
Palaikomos formos yra `input_video`, `video_url`, `video_source`, HTTPS URL,
ir `data:video/*;base64,...` duomenų URI. Paprasti failų pavadinimai tekste nėra laikomi
vaizdu.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) atsako už užklausų perėjimą,
galimybių/politikos patikrinimą, užklausų agregavimą ir atsakymo turinį.
Per vaizdo darbą — įsigijimą, viso rezultato talpyklą, rėmo sekos aprašymą
(kuri sujungia bet kokį iškviečiančiojo paskelbtą garso transkriptą) ir
bandymo metrikas/abortą/valymą — slepiama už `processVideoPart`
`videoBridgePipeline.ts`, kuris yra iškviečiamas kartą per vaizdo dalį
`preCall` ciklo viduje. Tas modulis taip pat apibrėžia aiškias prievado ribas
`VideoMediaBrokerPort` (įsigyjant baitus ir išgaunant mėginius rėmus),
`VideoAudioTranscriptionPort` (sujungiant iškviečiančiojo paskelbtą garso
transkriptą su mėginiu subtitrais) ir `VideoDrilldownPort` (senosios
žaliavos saugojimo forma). Gamybos STT ir rėmo išlaikymas
yra sudaryti aplink aprašomąjį prievadą per `createVideoSttAdapter` ir
`createVideoDrilldownAdapter`; pastarasis naudoja bendrą opakų rankenų
gyvavimo ciklą.

Viešas `/v1` užklausų kelias niekada neimportuoja ir neįvykdo
pogrupio. Nuotoliniai vaizdai yra atsisiunčiami pagal 50 MiB ribą;
inline base64 vaizdai turi konservatyvią 36 MiB dekoduotą
per-vaizdo ribą, kad modelis/žinutės/rėmų apvalkalas galėtų
likti viešo JSON užklausų priėmimo riboje, kuri yra 50 MiB. Inline
ilgio ir dekoduoto dydžio įvertinimai yra tikrinami prieš
paskirstymą. HTTPS yra reikalaujama pradiniame nuotoliniame URL
ir kiekviename peradresavime, naudojant esamą
viešą tik išėjimo apsaugą su DNS fiksavimu. Baitai tada
kerta tikslų vidinį `POST /api/modality-bridge/video/extract`
brokerio ribą. Tas maršrutas yra tiek `LOCAL_ONLY`, tiek
`SPAWN_CAPABLE`, priima tik per procesą autentifikuotą,
patikimą atgalinę užklausą ir niekada nepriima URL, failų
kelio, vykdomojo failo ar argumentų sąrašo. API kūno dydžio
pipeline ir tvarkyklės inkrementinis kūno skaitytuvas nepriklausomai
užtikrina 50 MiB brokerio įvesties ribą. Jo ribotas
eilutė veikia vieną išgavimą vienu metu, leidžia keturis
laukiamus darbus ir riboja laukiančią įvestį iki 100 MiB.

Brokerio viduje `ffprobe` skaito privatų vietinį failą;
fiksuotas formatų leidimų sąrašas neįtraukia grojaraščių ir
manifestų formatų. Leidžiamų MOV šeimos konteinerių atveju
išoriniai MOV duomenų nuorodos pagal numatytuosius nustatymus
yra išjungtos, o fiksuotas komandas nepasirenka jų.
T tanto `ffprobe`, tiek `ffmpeg` naudoja
`file`-tik protokolo leidimų sąrašą, vieną giją, fiksuotas
argumentų masyvus, be shell ir vykdomuosius failus,
išspręstus iš `PATH`. Prikabinti paveikslėliai nėra
grojami kandidatai. Visi grojami srautai turi atitikti
ribas, o aiškiai nustatytas srautas yra pageidautinas
prieš deterministinį mažiausio indekso atsarginį variantą.
Vaizdai ribojami iki 600 sekundžių, 8,192 pikselių
kiekvienoje dimensijoje ir 33,554,432 šaltinio pikselių.
FFmpeg mėgina 1–16 vidurio JPEG rėmus, sumažina
ilgą kraštą iki ne daugiau kaip 1,024 pikselių be
didinimo mažesniems įvedimams ir niekada nepriima URL.
Mėginimas yra `uniform` pagal numatytuosius nustatymus.
Pasirinktinės `scene_aware` ir eksperimentinės `segment_aware`
politikos atlieka vieną papildomą fiksuotą FFmpeg
perėjimą per jau patvirtintą vietinį srautą, pasirenka
ribotus `showinfo` scenos laiko žymenis ir deterministiškai
grįžta prie tų pačių vienodų vidurių, kai detektorius nepavyksta,
laikas baigiasi, išvestis yra netinkama arba kandidato rinkinys yra tuščias.
Segmentų sąmoningumo režimas paskirsto vidurio mėginius proporcingai
patvirtintiems scenos intervalams; segmentų sąmoningumo įrodymai
ir atsarginio elgesio detalės pateikiamos žemiau. Kieta 16 rėmų riba
taikoma po pasirinkimo kiekvienoje politikoje. Kai
scenos sąmoningumo užklausa turi tik vieno rėmo biudžetą, ji
naudoja vienodą vidurį aktyvaus viso vaizdo arba fokusavimo
langui ir praneša `policyEffective: uniform`: vienas
pasirinktas scenos rėmas negali išlaikyti abiejų laiko pabaigų.
Iškviečiančioji šalis gali pasirinktinai pateikti
baigtinį fokusavimo langą (`start`/`end` sekundėmis); ribos
yra priverstos prie medijos trukmės, atvirkštiniai arba
nebaigtiniai langai yra atmesti, o visi mėginimo
politikai atliekami tik normalizuotame intervale.
Gautas langas yra įtrauktas į mėginimo metaduomenis
ir nepatikimo aprašymo prefiksą, kad žemyniniai modeliai
galėtų atskirti fokusuotą ištrauką nuo viso laiko juostos.

Semantinis subtitrų fokusas yra atskiras, aiškus nustatymas.
Numatytasis `full` analizės režimas išlaiko esamą rėmo
paskatą ir niekada neperduoda užklausos teksto subtitrų modeliui.
`Focused` režime tiltas skaito tik naujausią
ne tuščią vartotojo sukurtą `text`/`input_text` iš to paties
Chat arba Responses konteinerio, normalizuoja jį į NFC,
sukelia kontrolinius simbolius ir tarpą, ir riboja iki
500 Unicode kodų taškų. Tuščias rezultatas grįžta
prie tikslaus `full` paskatos. Naudojamas užuomina
yra serializuojama kaip JSON specialiame
nepatikimo vartotojo konteksto bloke ir gali tik
prioritizuoti pastebimus duomenis; ji negali
pakeisti atskiro įspėjimo prieš sekant nurodymus,
matomus arba girdimus medijoje. Tekstinis fokusas
niekada neįveda `start`/`end` arba nekeičia
laiko mėgintuvo.

#### FU-07 struktūrinio segmento įrodymai

`segment_aware` naudoja vieną ribotą išankstinę analizę jau patvirtintame vietiniame vaizdo sraute. Fiksuota filtrų grandinė pirmiausia sumažina iki 320 pikselių pločio, aptinka scenų pokyčius ir sustingusius intervalus, tada imasi 1 kadro per sekundę mėginių dėl neryškumo, vidutinės liumos ir erdvinės/laiko informacijos. Analizė yra ribota iki 600 struktūrinių mėginių, vieno FFmpeg/filter gijos, to paties `file`-tik protokolo ir konteinerių leidimų, 1 MiB proceso išvesties ribos ir ne daugiau kaip 30 sekundžių brokerio bendro abortų/termino. Ji niekada nepriima komandos, filtro, kelio ar URL iš užklausos.

Struktūrinės vertės yra deterministinių mėginių įrodymai, o ne semantinis vaizdo supratimas. Jos neįžvelgia subjektų, veiksmų, antraščių, kalbos ar vartotojo ketinimų. Scenos ir sustingimo ribos sudaro segmentus; sustingimo aprėptis, neryškumas, ekspozicija, erdviniai detalės ir laiko pokyčiai tik įtakoja, kaip esamas 1–16 kadro biudžetas yra paskirstomas. Visiškai sustingęs segmentas yra apribotas iki vieno kadro, o nesustingę segmentai konkuruoja dėl likusio biudžeto. Kai ribos viršija kadrus, išlaikoma vienoda laiko juostos aprėptis, kad greiti ankstyvi pjūviai negalėtų paslėpti ilgo sekamo segmento. Scenos ribos per 1 sekundės analizės rezoliuciją sustingimo ribos yra sujungtos.

Trūkstami filtrai, netinkami/tušti įrodymai, detektoriaus klaida ar ribota išankstinės analizės laiko pabaiga atveria pagal tikslų vienodą vidurio politiką. Kviečiančiojo abortas ar brokerio terminas neatsiveria: jis nutraukia vykdomą subprocess, neleidžia vėlesnei kadrų ekstrakcijai, o privatus laikinas medis yra pašalinamas `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuoja deterministinius realius FFmpeg įrenginius po dedup antraščių išlaidų, tankaus judesio biudžeto paskirstymo, neryškumo/ekspozicijos/SI-TI įrodymų, greitų pjūvių su ilgu uodega ir palaipsniui išnykusių klaidingų teiginių. Jis registruoja išankstinės analizės sienos laiką ir, kur `/usr/bin/time` yra prieinamas, vaiko CPU ir piką RSS. Jo kokybės patikrinimai yra tik struktūriniai orakulai. Realių antraščių modelio kokybė lieka `HOLD`, nes šis įrenginys neturi įgalioto galinio taško ar sustingusio teisėjo. Finansinės taupymo priemonės taip pat lieka `HOLD`, nebent `--caption-cost-per-call-usd` pateikia aiškų teigiamą per-kvietimo įvertinimą; skriptas niekada nesukuria jokio rezultato.

Kiekvienas kadras yra ribotas iki 4 MiB, visi žali kadrai kartu iki 23 MiB, o serializuotas brokerio atsakas iki 32 MiB. Privatus laikinas katalogas yra pašalinamas `finally`. OmniRoute nesujungia FFmpeg ir nepriima individualaus vykdomojo kelio. Prieš antraščių pateikimą, tiltas taiko konservatyvų vizualinį deduplicavimo procesą: kiekvienas JPEG sumažinamas iki 16×16 pilkos spalvos buferio ir lyginamas tik su paskutiniu išlaikytu kadru. Prašant antraščių biudžeto virš vieno kadro, ekstrakcija pateikia ribotą kandidatų baseiną iki dvigubo to biudžeto ir niekada daugiau nei 16 kadrų. Prašoma riba taikoma tik po deduplicavimo, pirmieji ir galutiniai pasirinkti kandidatai išlaikomi galutiniame retinime, kai biudžetas yra bent du. Versijuota `grayscale-16x16-mean-cells-v2` politika naudoja didesnį nei vidutinės liumos delta ir miniatiūrų ląstelių, kurių normalizuotas delta yra bent 0.05, santykį. Dublikatų slenkstis yra pastovus 0.04, pasirinktas dėl prognozuojamumo, o ne kaip eksponuojamas vykdymo nustatymas. Šis antrinis didelio kontrasto signalas išlaiko mažus judesius ir matomus teksto pokyčius, kuriuos gali paslėpti tik vidutinio lygio palyginimas. Palyginimo ar dekodavimo klaidos atveria ir išlaiko aprėptį. Išvesties metaduomenys atskiria išgautus kandidatus, sėkmingai naudotus kadrus ir vizualinius dublikatus, kurie buvo atmesti.

Aiškiai pažymėta vaizdo dalis gali prašyti laiko žymėto kontaktinio lapo. Tilto statybos metu sukuriama ne daugiau kaip 4 stulpelių, 16 kadrų JPEG tinklelis. Kiekviena 512 pikselių ląstelė įrašo savo šaltinio laiko žymę į didelio kontrasto apatinę juostą, o tos pačios laiko žymės lieka tekstiniuose metaduomenyse tolesniam susiejimui ir auditui. Pilnas JPEG lieka apribotas iki 32 MiB. Jei `sharp` negali dekoduoti ar sudaryti tinklo, tiltas grįžta prie individualių JPEG kadrų; kliento abortas vis tiek plinta per lapo operaciją.

Skatinimo įrodymai yra sąmoningai atskirti nuo sintetinio sudarymo mikrobandymo. `scripts/perf/video-bridge-contact-sheet-eval.ts` apibrėžia schemos versiją A/B įrenginį realiems OpenAI suderinamiems vizijos modeliams. Jis matuoja tiekėjo praneštus žetonus, galutinį sienos delsą (įskaitant lapo sudarymą), modelio kvietimų skaičių ir manifestu apibrėžtą faktų išlaikymą. Žalių modelių atsakymai nėra rašomi į ataskaitą; tik SHA-256 santrumpos ir atitinkami faktų ID yra išlaikomi. Įrenginys nedaro tinklo ar mokamo modelio kvietimo, nebent yra perduodama `--execute-real` ir sukonfigūruota `--model`, `OMNIROUTE_BASE_URL` ir `OMNIROUTE_API_KEY`. Be to, aiškaus realaus vykdymo, jo mašininio skaitomo verdikto lieka `HOLD`; sintetinių krovinių/kvietimų skaičiaus matavimai patys nėra skatinimo įrodymai.

Atskiras `scripts/perf/video-bridge-promotion-eval.ts` naudoja FU-07 arba FU-09 stebėjimus. Skatinimo priėmimas reikalauja visų aštuonių sintetinių scenarijų tipų plius sanizuotas realus klipas, bent tris matuotus pakartojimus kiekvienai rolėi ir atvejui, visus dešimt deklaruotų metrikų, sustingusius medijas/promptus/laukiamus faktus/nustatymus, unikalius stebėjimo ID ir patvirtintą sėklos A/B tvarką. Vykdymo kvitas sieja korpuso santrumpą, tikslų kandidato SHA ir modelio reviziją. Trūkstami arba netinkami matavimai lieka `HOLD`, įskaitant CPU virš 30 s, piką RSS virš 512 MiB arba išankstinę analizę virš 30 s. Tai yra įrodymų priėmimo ribos, o ne naujas vykdymo RSS užtikrinimo garantas.

FU-07 reikalauja bent 98% kokybės išlaikymo ir p95 latencijos, ne didesnės nei 1.2x
pagrindo, plius arba 0.05 absoliutus atvejų subalansuotas vidutinio atgaminimo
pagerinimas lygiaverčiu vidutinių antraščių skambučių skaičiumi, arba bent 10%
mažiau vidutinių po-duplicatų antraščių skambučių. FU-09 reikalauja bent 0.85
kokybės, 95% išlaikymo, 20% p95 latencijos sumažinimo ir 10% žetono sumažinimo.
Kritinių faktų praradimas, injekcijos atitiktis arba trūkstamas naudojimas
neleidžia pažangai. Viena vykdymo sesija negali nieko pažanginti:
`--previous-report` patvirtina dvi skirtingas, nesikertančias, iš eilės
tinkamas vykdymo sesijas to paties politikos/modelio peržiūros/kandidato/korpus.
Pavyzdžių eksperimentas negali patvirtinti kontaktinių lapų eksperimento.

Kolektoriai turėtų įvertinti atsakymus atmintyje ir išsaugoti `responseDigest`
plius metrikas ir stebėjimo ryšius, niekada atsakymo teksto. Vartotojas taip pat
skaito senus žalius stebėjimus, bet niekada nekopijuoja to teksto į savo ataskaitas.
Būtent vienas iš `responseDigest` arba `rawResponseText` yra priimtinas kiekvienam
stebėjimui. Versijomis pagrįstas leidimų sąrašas lieka tuščias su nekintamu
`hold` numatytuoju. Tinkamas įrašas reikalauja savo įrodymo nuorodos, politikos,
modelio peržiūros, tikslaus kandidato SHA, manifestacijos santraukos ir dviejų
skirtingų vykdymo ID; konfliktuojantys kontekstai yra atmesti. Šie metaduomenys
yra audito sutartis, o ne įrodymas, kad nurodytas failas turi tikrus matavimus.
Peržiūrėkite faktinius kvitus prieš pridėdami bet kurį įrašą. Valdymo statistikos
galinis taškas ir vaizdo informacijos suvestinė atskleidžia konservatyvų
parengimą. Konfigūruotas modelio alias vienas nesukuria jo peržiūros ar
veikiančio kandidato SHA, todėl dabartinė suvestinė praneša `HOLD`, o ne
perduoda tinkamumą iš kitos vykdymo konteksto. Aiškus eksperimentinis
pasirinkimas lieka atskirtas nuo pažangos; jokie numatyti nustatymai automatiškai
nekeičiasi.

Kreipėjai gali pridėti neprivalomą `transcript.cues` masyvą prie palaikomo
vaizdo dalies, kai jie jau turi suderintą tekstą. Kiekvienas cue turi turėti
`text`, baigtinį `start`/`end` intervalą tiriamoje trukmėje ir
leidžiamą `source` (`client`, `embedded` arba `audio-bridge`); `confidence`
numatytas `1` ir turi likti tarp `0` ir `1`. Tikslūs dubliuoti cue yra
sujungti. OmniRoute niekada nepradeda transkripcijos iš šių metaduomenų:
patvirtinti cue yra kopijuojami į aprašytą rezultatą su šaltiniu, pasitikėjimu
ir intervalu, ir yra pateikiami kaip nepatikimi stebėjimai kartu su rėmelio
antraštėmis. Negaliojantys, už ribų esančių ar kilmės neturintys tekstai yra
atmesti, o ne sumaišyti į antraščių srautą. Abu užklausos kūno transkripto
kanalai normalizuoja pateiktą kilmę į `client`, įskaitant savarankiškai
patvirtintus `embedded` arba `audio-bridge` žymėjimus. Tik serverio
nuosavybės adapteris gali priskirti tuos patikimus žymėjimus per
tik kodu `trustedSource` argumentą; užklausos JSON laukas negali pasiekti
to argumento. Transkripto tekstas lieka nepatikimas medijos gautas turinys,
nepaisant jo kilmės, ir niekada neturi nustatyti autorizacijos.

Išplėstinis kreipėjas gali pateikti `audioTranscript` takelį tam pačiam
vaizdui; jis laikomas kaip kliento pateiktas tekstas, o ne serverio
transkripcijos įrodymas. Sujungimo siūlas vykdo vizualinius ir garso
stebėjimus pagal vieną terminą ir abortų signalą, užsako juos bendroje
laiko juostoje, sujungia tikslius dubliatus ir praneša dalinį rezultatą,
kai tik viena pusė pavyksta. Negaliojantis `audioTranscript` degradavo į
tą dalinį rezultatą — vizualinė aprašymas išlaikoma, o garso šaka
įrašo sanizuotą klaidos kodą — vietoj to, kad nepavyktų visam vaizdui.
Pagal šaką prieinamumas, dalinis ženklas ir sanizuoti klaidos kodai
yra išsaugoti aprašytame rezultate, saugumo metaduomenyse
(`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`),
rezultato talpyklos metaduomenyse ir tilto sujungimo skaitikliuose.
Numatytas Vaizdo Tiltas kelias nesukelia kalbos į tekstą
arba neatsisiunčia antro medijos kopijos; be to aiškaus takelio, jis lieka
tik vaizdo.

**Transkripto išlaikymas (#12150 P1).** Tai automatiškai taikoma, kai
Vaizdo Tiltas (kuris pats yra pasirinktinai) pateikia transkripto cue —
nėra atskiro išlaikymo ženklo. Kai užklausa pateikia bet kurį transkripto cue
(kreipėjo paskelbtą `transcript` arba sujungtą `audioTranscript`),
saugumo sistema pažymi jį kaip `videoBridgeObserved` ir sukuria
redaguotą vaizdo aprašymo šešėlį — identišką atvaizdavimą, kuriame kiekvieno
cue laisvo teksto kūnas yra pakeistas į `[redacted-video-transcript]`,
sukurtą pakeitus struktūrizuotą cue lauką prieš suformuojant eilutę
(niekada neanalizuojant suapvalinto teksto, todėl jokie cue turiniai —
priešiški ar įprasti, įskaitant kūnus, turinčius `]`, tokius kaip
`[inaudible]`/`[music]` — negali išlikti). Išsaugotas užklausos žurnalo
užklausos kūnas keičia kiekvieną vaizdo gautą teksto dalį į tą redaguotą
šešėlį, atitinkantį turinio lygybę; `fullText` ankeris yra perskaitytas
iš užbaigto priešužklausos saugumo paketo, todėl atitikimas vis dar
pavyksta po vėlesnių grandinės saugumo sistemų (PII ir
akreditavimo maskuotojai, prioritetai 10/95) perrašant aprašymo tekstą
vietoje ir po sistemos-paskatinimo/perdavimų/atminties injekcijos
performuojant žinutės masyvą. Kūnas, siunčiamas aukštyn modeliui, lieka
nepakitęs. Stebima užklausa taip pat nepildo jokios patvarios atminties
(abiejų užklausos ir atsakymo gautų ištraukų yra praleidžiamos),
taigi modelio atsakymas negali atkartoti transkripto teksto į atmintį.

**Žalių vaizdo laukų (#12430).** Kai tiltas yra įjungtas ir natūralus vaizdo
palaikymas yra nežinomas arba nėra, apibrėžti `transcript`/`audioTranscript`
laukeliai taip pat aktyvuoja `videoBridgeObserved`, net ir po aprašymo
nesėkmės arba `maxVideos` ribos. `null` ir tušti eilutės skaičiuojami;
nebuvę laukai ir nevaizdo metaduomenys nesiskaičiuoja. Išlaikyti kopijos
redaguoja šiuos laukus arba praleidžia užklausą, o talpyklos/Atmintis
yra apeinamos.

Šiuose atsarginiuose keliuose galiojantys skambintojo signalai tampa palaikomais `text`/`input_text` elementais, o ne nestandartiniais tiekėjo laukais. Abu prašymuose pateikti takeliai lieka nepatikimi `client` stebėjimai, su aiškiu įspėjimu, kad vaizdo įrašas nebuvo aprašytas ir laiko žymės nebuvo patvirtintos pagal mediją. Esami 256 signalų/64-KiB bendri ir per signalą biudžetai taikomi abiem takeliams kartu; laiko žymės turi tilpti į brokerio 600 sekundžių ribą ir bet kokį pateiktą fokusavimo langą. Negaliojantys takeliai yra atmesti, o ne perduodami kaip savavališkas tekstas; galiojantis brolis vis dar gali būti naudojamas, nebent jų bendras biudžetas būtų viršytas. Nuliniai/tušti laukai neprideda jokio teksto. Šis atsarginis variantas neprideda jokio medijos gavimo ar transkripcijos. Transkripcijos plėtimo laukai yra pašalinami iš atsarginio vaizdo įrašo nešiklio ir jo `video_url`/`source` objektų. OpenAI laidų leidimų sąrašas išlieka griežtas; nežinomi vietiniai vaizdo nešikliai lieka prieinami, o žinomi tik teksto tikslai išlaiko saugius žymeklius. Struktūrizuoti redagavimo šešėliai saugo pridėtą transkripcijos tekstą, o originalus skambintojo turimas prašymas lieka nepakitęs. Vietoje palaikomų tikslų ir išjungtų tiltų išlaikoma esama aplinkkelio elgsena.

Papildomi išlaikyti kopijos naudoja tą patį stebimo prašymo signalą. Žali pre-apsaugos kliento prašymo momentinis vaizdas, atmintyje laukiančio prašymo ir ankstyvo atmesto prašymo žurnalas struktūriškai pakeičia transkripcijos laukus vaizdo dalyse; eilutės užklausos, sukurtos per pipeline etapus ir konteksto perdavimą, yra redaguojamos persistuojančio prašymo kūno įgnybimo taške. Persistuojantis `video_content_removed` žymeklis priverčia `previous_response_id` tęstinumą uždaryti, o ne rekonstruoti tekstą, kuris buvo tyčia atmestas. Jei stebimas prašymas praranda savo per dalį redagavimo šešėlį prieš registruojant, arba net jei vienas iš kelių vaizdo šešėlių nesutampa po vėlesnių prašymo mutacijų, išlaikytas prašymo kūnas visiškai pašalinamas, o ne išlaikomas dalinai redaguotas transkripcija.

Stebimo prašymo atveju modelio atsakymas gali cituoti bet kurią transkripcijos dalį be struktūrizuoto signalo ribos. Todėl jo persistuojantis skambinimo žurnalo `responseBody` yra pakeistas praleidimo žymekliu; išsamus pipeline artefaktas (kuris gali apimti aukštesnio lygio/kliento kūnus ir srauto dalis) nėra išlaikomas. Semantinės, idempotencijos ir mąstymo-perdavimo talpyklos apeina skaitymus ir rašymus tam prašymui. Tiekėjo prašymas ir kliento matomas atsakymas lieka nepakitę. Ankstyvi keepalive baitai yra išleidžiami iš laikino buferio, kai išsamus artefaktas yra praleidžiamas. Kiro netinkamo EventStream įspėjimo ataskaitos tik paketo baitų skaičių, niekada jo turinio ar JSON analizatoriaus žaliavos klaidos.
Tai nesako, kad kiekvienas nesusijęs tiekėjo/plugin diagnostika buvo patikrinta; platesnis išlaikytų įgnybimo šluota yra sekama #11658.

Vidinė `/api/modality-bridge/video/drilldown` gyvavimo ciklas yra atskira, atgalinio ryšio/tokenų autentifikavimo talpyklos substratas. Kiekvienai operacijai taip pat reikia kanoninio nepermatomo pagrindinio ID. Prieš įgalinant gamybos skambintoją, jis turi gauti tą ID iš autentifikuoto nuomininko ir niekada neturi perduoti kliento pasirinkto vertės. Talpyklos raktai sieja tą pagrindinį ID su kanoninėmis sesijos ir vaizdo nuorodų ID, saugo tik jų SHA-256 gautus raktus ir riboja tiek skaitymus, tiek ištrynimą tam pačiam pagrindiniam ID. Talpykla saugo ne daugiau kaip 16 gautų JPEG kadrų kiekvienam įrašui, pasibaigia po dešimties minučių ir palaiko ribotus `start`/`end` skaitymus arba aiškų sesijos ištrynimą.

Kiekvienas pagrindinis ID yra ribotas iki 16 įrašų ir 64 MiB kanoninių JPEG duomenų. Šios ribos yra nepriklausomos nuo globalios 64 įrašų/256 MiB ribos: pagrindinio kvotos spaudimas išstumia tik to pagrindinio mažiausiai neseniai naudotus įrašus, prieš globalų LRU išstūmimą. Pasibaigę įrašai yra pašalinami tiek iš pagrindinio, tiek iš globalaus apskaitos talpyklos veiklos, o atšaukimas ir patvirtinimo nesėkmė neįvykdo dalinio pakeitimo.

Talpykla atmeta nekanoninius Base64, perteklinius užpildus, ne-JPEG medijas, netinkamus arba sutrumpintus JPEG ir JPEG, kurie sukelia įspėjimą riboto pilno vaizdo `sharp` dekodavimo metu. Ji iš naujo koduoja kiekvieną priimtą vaizdą kaip kanoninį JPEG, išgauna plotį ir aukštį iš dekoduotų baitų, o ne pasitiki skambintojo laukais, ir atmeta bet kokius seklius poliglotinius baitus, o ne išlaiko juos. Tik ribotas kanoninis suspaustas buferis yra įkainojamas abiem kvotoms. JSON laidų riba apima Base64 perteklinius baitus 32 MiB dekoduoto įvesties ribai. Kiekviena
saugoma išvestis registruoja savo patvirtintą JPEG formatą/rezoliuciją, mėginių politiką, išvesties versiją, sukūrimo laiką, serverio apskaičiuotą turinio hash ir hashed tėvo nuorodą plius patikimo skambintojo tėvo turinio hash. Atšaukimas tikrinamas tarp asinchroninių dekodavimo/hash etapų prieš atominių talpyklos įsipareigojimą.

Gamybos gamintojas pakartoja jau gautus brokerio kadrus tik po sėkmingos vizualinės analizės, be antro vaizdo atsisiuntimo/ekstrakcijos. Jam reikia operatoriaus `modalityBridgeVideoDrilldownEnabled=true`, griežto per dalį `drilldown: true` ir autentifikuoto API rakto įrašų ID. Kliento deklaruoti pagrindiniai/sesijos vertės niekada nenustato nuosavybės. Be visų trijų sąlygų jis nehashina, nekeičia dydžio ar išlaiko papildomus kadrus. Išlaikymo nesėkmė išlaiko naudojamą vizualinį atsakymą. Sutikti prašymai apeina viso vaizdo rezultatų talpyklą, todėl talpykloje saugomi rezultatai niekada neperdaro rankenų.

Sėkmingi JSON ir SSE atsakymai atskleidžia ne daugiau kaip keturis opakus rankenėles ribotame
`x-omniroute-video-drilldown` antraštėje. Įgalioti naršyklės šaltiniai gali skaityti tą antraštę
be CORS šaltinio politikos plėtimo. Naujos rankenėlės naudoja `v1.<32-byte random base64url
token>`, o registras išlaiko tik
jų SHA-256 hash'us. Skaitytuvas/antraštės analizatorius taip pat priima senovinius 64-hex žetonus.
Autentifikuotas viešasis vartotojas yra
`GET /api/v1/video-bridge/drilldown?handle=...`, nepriklausomai kontroliuojamas
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Aiškus išsaugotas false atima
prieigą net kai senovinis `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env
atsarginis variantas yra įjungtas. Produkcijos išlaikymas turi analogišką senovinį
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` atsarginį variantą. Abu atsarginiai variantai pagal numatytuosius nustatymus yra išjungti.

Vartotojas gauna nuosavybę iš autentifikuoto rakto, taiko rakto politiką ir
grąžina tą patį 404 nežinomoms, pasibaigusioms ir kitų raktų rankenėlėms. Jis priima
`variant=preview|standard|detail` (maksimalus JPEG matmuo 320/640/1280, niekada nepadidintas),
`limit=1..8` (arba senovinis `frames` alias, niekada abu), nulinis `page` ir pasirenkamus
`start`/`end` fokusavimo sekundes. Dublikuoti
užklausų raktai ir apversti fokusavimo langai yra atmetami. Kiekvienas grąžintas variantas turi hash
savo tikro turinio ir tikros raiškos metaduomenų, susietų su išlaikytu šaltiniu.
Variantai yra gaunami skaitant, o ne saugomi kaip papildomos išlaikytos kopijos. JSON
atsakymas, įskaitant Base64/envelope, yra ribojamas iki 32 MiB; per didelis puslapis grąžina
413, o klientas turi prašyti mažiau kadrų. Skaitymai tikrina atšaukimą aplink kiekvieną
permatymą ir dar kartą tikrina rankenėlės galiojimą prieš grąžinant. `DELETE` savininko yra idempotentinis;
ištrynimas arba TTL pasibaigimas atlaisvina išlaikytą šaltinį ir naudojimo apskaitą.

Bendras saugykla yra proceso vietinis: rankenėlės pasibaigia perkrovus ir nėra perkeliamas
tarp nepriklausomų OmniRoute procesų. Valdymo statistika atskleidžia efektyvią išlaikymo/
nuotolinę politiką ir agreguoja tik išlaikytus įrašus/bytus, niekada ne medijas, nuorodas,
pagrindinius ID ar rankenėles. Vaizdo nustatymų skydelis rodo tuos vertes ir gali išsaugoti
abu sutikimo jungiklius. Ši įgyvendinimo dokumentacija nėra tiesioginio diegimo ar
skatinimo įrodymas; realaus modelio priėmimas yra stebimas atskirai.

Kadrų subtitrai yra pateikiami nuosekliai su sukonfigūruotu Vaizdo modeliu. Tuščias
Vaizdo perrašymas paveldi Vizijos nustatymą; jei abu yra tušti, Vizijos
automatinis maršrutizatorius pasirenka efektyvų viziją palaikantį modelį. Sėkmingi subtitrai
pakeičia originalią dalį su stabilia `[Video description:` prefiksu, kuris taip pat
žymi tekstą kaip nepatikimą medijos gautą stebėjimą ir sako žemyn modeliams, kad nesekti instrukcijų, rastų medijoje. Kadrų subtitrų talpyklos raktai
apima JPEG baitus, užklausą, laiko žymę ir efektyvų modelį; tik sėkmingi
subtitrai yra talpinami. Talpyklos įrašai išlaiko tikrą sėkmingo gamintojo modelį,
įskaitant atsarginį modelį; tiltas praneša `mixed`, kai skirtingi kadrai
buvo pagaminti skirtingų modelių. Talpyklos pataikymas pakartoja tą gamintojo tapatybę
vietoj to, kad pervadintų ją kaip prašomą maršrutizavimo planą. Visas vaizdo rezultato
talpyklos raktas yra pagrįstas kiekvienu įvestimi, kuri keičia išvestį — užklausa, efektyvus
modelis, mėginių ėmimo politika, kadrų skaičius, semantinės analizės režimas, normalizuoto fokusavimo užuominos SHA-256
pirštų atspaudas, fokusavimo langas, `transcript`,
`audioTranscript` ir kontaktinės lapo vėliava — todėl bet koks šių
dimensijų keitimas yra talpyklos praleidimas, niekada nepasenusi pakartojimas. Vizualinės dedup politikos
versija, slenkstis ir ribotas kandidatų kadrų skaičius taip pat yra aiškūs rezultato talpyklos rakte ir metaduomenyse; politikos pakeitimas todėl negali pakartotinai naudoti pasenusio
viso vaizdo aprašymo. Rezultato talpyklos v4 metaduomenys išlaiko režimą ir
pirštų atspaudą, niekada ne žalią vartotojo užduotį. Guardrail metaduomenys praneša tiek
prašomus, tiek efektyvius analizės režimus; prašomas `focused` režimas be
naudojamo vartotojo teksto pranešamas kaip efektyviai `full`.

Guardrail išskiria kiekvieną palaikomą vaizdo dalį, tačiau aprašo ne daugiau kaip
`modalityBridgeVideoMaxVideos`. Tikslui, kuris įrodytas turint
`supportsVideo === false`, nepavykę ir viršijantys limitą vaizdai tampa aiškiais saugiais
teksto žymenimis, todėl jokie žali vaizdai neišlieka. Kai galimybė nežinoma, tos dalys
išlaiko savo vaizdo nešiklį; bet koks atsarginis transkripcija seka ribotą tekstinę
konversiją aukščiau. Tikslai su `supportsVideo === true` apeina tiltą.
Kliento užklausos atšaukimo signalas plinta per atsisiuntimą, brokerio eilę,
pogrupius ir subtitrų skambučius; atšaukimai sustoja tarp vaizdų ir niekada nesukelia atvirų
žalių medijų.

Veikimo nustatymai yra DB palaikomi ir Zod patvirtinti:

| Raktas                              | Numatytoji  | Diapazonas / elgesys                                                                                     |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Pasirinktinė veikimo, opt-in                                                                             |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` išlaiko bendruosius subtitrus; `focused` naudoja ribotą, nepatikimą naujausio vartotojo kontekstą |
| `modalityBridgeVideoModel`          | `""`        | Paveldi Vizijos Tiltą modelį                                                                             |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, arba proporcingas `segment_aware`; detektoriaus nesėkmė grįžta prie `uniform`  |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                           |

Paveldėtos vaizdo laiko limitų reikšmės, viršijančios 120 sekundžių, yra apribojamos brokerio termino; nauji nustatymai, viršijantys šį limitą, yra atmetami. `GET /api/modality-bridge/video/runtime` reikalauja patikimo žymėto loopback lokalumo prieš autentifikaciją ar vykdymo tyrimą, tada reikalauja valdymo autentifikacijos. Jis grąžina tik `available`, sanizuotas FFmpeg/ffprobe versijas ir fiksuotą priežastį, kai vykdymas nėra prieinamas. Vidinis ištraukimo taškas nėra vieša įkėlimo API: eilės prisotinimas grąžina `503` plius `Retry-After`, skambinančiojo atsijungimas grąžina `499`, o fiksuotas brokerio terminas grąžina `504`. Konvertuoti atsakymai prideda `video->text;model=<visionModel>;parts=<videos>` prie centrinio `x-omniroute-modality-bridge` antraštės, nepašalinant Vision ar Audio segmentų.

### PII Masker (`piiMasker.ts`)

Veikia **abu** etapus.

- **`preCall`** kopijuoja payload, pereina per `system`, `messages`, `input` ir
  `prompt` (įskaitant paprastus eilutės elementus) ir taiko `processPII()` (iš
  `@/shared/utils/inputSanitizer`) prie eilutės `content`/`text` laukų. Kai
  `PII_REDACTION_ENABLED=true`, aptiktas PII yra redaguojamas išėjimo
  payload. Tai nepriklauso nuo `INPUT_SANITIZER_MODE` (kuris tik kontroliuoja
  prompt-injekcijos politiką). Kai redagavimas yra išjungtas, skambinimo įrašai fiksuoja aptikimo
  skaičius, neperrašydami turinio.
- **`postCall`** giliai kopijuoja atsakymą, vykdo `sanitizePIIResponse()` plius
  Responses-API-formos maskuotojas (`maskResponsesOutput` — apima
  `output_text` ir `output[].content[].text`). Jei įvyksta bet koks redagavimas,
  modifikuotas atsakymas pakeičia originalą.

Apsauginė juosta niekada neblokuoja; ji tik anotuoja (`meta.detections`,
`meta.redacted`) arba perrašo.

### Prompt Injection (`promptInjection.ts`)

Aptinka priešiškas struktūras vartotojo pateiktame turinyje ir įgyvendina
konfigūruotą politiką. Elgesys priklauso nuo aplinkos kintamųjų ir konstruktoriaus
parinkčių:

| Nustatymas          | Aplinkos kintamasis                                                                                      | Numatytoji | Efektas                                                                                                                                                                                                |
| ------------------- | -------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Įjungta             | `INPUT_SANITIZER_ENABLED`                                                                                | `true`     | Kai `false`, apsauginė juosta trumpina.                                                                                                                                                                |
| Režimas             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                          | `warn`     | Injekcijos politika: `block`, `warn`, arba `log`. (`redact` priimamas atgalinei suderinamumui, bet **ne** pašalina injekcijos tekstą; prašymas PII perrašyti kontroliuojamas `PII_REDACTION_ENABLED`.) |
| Blokavimo slenkstis | `blockThreshold` parinktis / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`     | Minimalus sunkumas, reikalingas blokavimui. Vidutinis yra tik stebėjimui pagal numatytuosius nustatymus.                                                                                               |

**Režimo pirmenybė** (`getMode`): skambinančiojo `options.mode` →
`INJECTION_GUARD_MODE` **DB funkcijos vėliavos perrašymas** (Dashboard → Nustatymai →
Funkcijų vėliavos) → `INJECTION_GUARD_MODE` aplinkos kintamasis → `INPUT_SANITIZER_MODE` aplinkos kintamasis →
`warn`. Taigi, valdymo pultas laimi prieš aplinkos kintamuosius, todėl Funkcijų
vėliavos UI kontroliuoja veikiančią apsaugą gyvai (be perkrovimo). DB skaitymas yra saugus:
jei įvyksta klaida, apsauga grįžta prie aplinkos pagrindu veikiančio elgesio, o kai nėra
perrašymo, elgesys yra identiškas aplinkos tik sprendimui.

Aptikimo šaltiniai:

1. `sanitizeRequest()` iš `@/shared/utils/inputSanitizer` (bendras detektorius
   rinkinys, naudojamas kitur pipeline).
2. Įmontuoti `DEFAULT_GUARD_PATTERNS` (šiuo metu `system_override_inline` ir
   `markdown_system_block`, abu `high` sunkumo).
3. Pasirinktiniai `customPatterns`, perduodami per konstruktoriaus parinktis (eilutės, regex,
   arba `{ name, pattern, severity }` įrašai).

Kai `mode === "block"` **ir** bent vienas aptikimas atitinka sunkumo
slenkstį, `preCall` grąžina `{ block: true, message: "Prašymas atmestas:
aptiktas įtartinas turinys" }`. `warn`/`log` režimu apsauginė juosta registruoja, bet
leidžia skambinimą. Bendras pagalbinis `evaluatePromptInjection()` taip pat eksportuojamas
skambinantiems, kurie nori įvertinti promptus, neperėję per registrą.

**Skenavimo riba (v3.8.20):** detektorius tik tikrina **pirmus 16 KB**
sujungto prompto teksto — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 baitai) `src/shared/utils/inputSanitizer.ts`. T tanto `detectInjection()` ir
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` prieš vykdant
modelio ciklą. Injekcijos direktyvos yra arti įvesties viršaus, todėl tai
apriboja regex CPU/GC dideliuose payload'uose be aptikimo silpninimo (cf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Veikia **abu** etapus, paskutinis numatytoje grandinėje (prioritetas `95`). Redaguoja
gerai žinomus API raktų / slaptažodžių modelius iš išėjimo payload (žinutės
turinys, įrankių skambinimo argumentai, įrankių rezultatai) **ir** teikėjo atsakymo, todėl
slaptažodis, įklijuotas į promptą (arba atspindėtas įrankio rezultate), nėra nutekintas
į aukščiau esantį teikėją ar atgal į klientą.

- **Tik su sutikimu**, ta pati konvencija kaip PII redagavimas (Griežta taisyklė #20-gretima):
  išjungta, nebent `settings.credentialRedactionEnabled === true` **arba**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kai ji išjungta, apsauginė priemonė neveikia —
  ji niekada nesustabdo ir niekada neperrašo.
- `redactCredentials()` pereina visą krovinio/atsakymo medį (`walkValue()`,
  prototipo užteršimo saugus, ciklo saugus per `WeakSet`) ir pakeičia atitikmenis su
  `[REDACTED:<type>]` vietininku, klonuodama tik tas šakas, kurios iš tikrųjų
  pasikeitė.
- `CREDENTIAL_PATTERNS` apima LLM tiekėjų raktus (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS žetonus (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), mokėjimo raktus (Stripe, Square), debesų
  raktus (AWS prieigos raktas, Twilio, SendGrid, Mailgun), privačius raktus / JWT,
  akredituojančius prisijungimo eilutes (`mongodb://user:pass@...`, ir kt.), ir
  bendrą `Authorization`/`x-api-key`/`api-key`/`apikey` antraštės-reikšmės
  modelį. Antraštės formos raktai (`authorization`, `x-api-key`, `api-key`,
  `apikey`) yra redaguojami struktūriškai (tik reikšmė, schemos prefiksas kaip
  `Bearer `/`Basic ` išsaugotas) o ne per bendrą tekstinį regex.
- Apsauginė priemonė niekada nesustabdo; ji tik perrašo (`modifiedPayload` /
  `modifiedResponse`) ir anotuoja (`meta.credentialsRedacted`, `meta.count`).

Regresijos apsauga: `tests/unit/credential-masker-guardrail.test.ts`.

## Bazinė sutartis (`base.ts`)

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
  block?: boolean; // true nutraukia grandinę
  message?: string; // pateikiamas blokuojant
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // grąžinamas iš preCall užklausai perrašyti
  modifiedResponse?: TValue; // grąžinamas iš postCall atsakymui perrašyti
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

Apsaugos priemonė nurodo, kad pakeitimų nėra, grąžindama `void`, `{}` arba
`{ block: false }`. Grąžinus `modifiedPayload` / `modifiedResponse`, grandine
perduodama reikšmė pakeičiama tolesnėms apsaugos priemonėms.
`signal?: AbortSignal` perduoda iškvietėjo gyvavimo ciklą apsaugos priemonėms. Užklausos nutraukimas yra sąmoninga „fail-open“ išimtis: medijos tarpininkai sustabdo darbą ir atlaisvina išteklius, neatkurdami neapdorotos medijos paskirties vietai, kuri, kaip žinoma, jos nepalaiko.

## Registras (`registry.ts`)

Vienintelis egzempliorius `guardrailRegistry` suteikia:

- `register(guardrail)` — prideda apsaugos priemonę (arba pakeičia pagal normalizuotą pavadinimą) ir
  iš naujo surikiuoja didėjančia `priority` tvarka.
- `clear()` / `list()` — administravimo pagalbinės funkcijos.
- `runPreCallHooks(payload, context)` — iteruoja aktyvias apsaugos priemones, perduoda
  naudingąją apkrovą per `modifiedPayload` ir sustoja ties pirmuoju `block: true`.
- `runPostCallHooks(response, context)` — tokia pati eiga atsakymo pusėje.
- `resetGuardrailsForTests({ registerDefaults })` — išvalo būseną ir pasirinktinai
  iš naujo užregistruoja numatytąsias apsaugos priemones, kad testai būtų visiškai izoliuoti.

Abi vykdymo funkcijos grąžina `{ blocked, payload|response, results, guardrail?, message? }`,
kur `results` yra `GuardrailExecutionResult` įrašų masyvas, apimantis kiekvienos
apsaugos priemonės laukus `blocked`, `skipped`, `modified`, `error` ir `meta`,
naudingus sekimui.

### Apsaugos priemonių išjungimas atskiroms užklausoms

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` surenka pasikartojimų
neturintį apsaugos priemonių, kurios turi būti praleistos vykdant dabartinę
užklausą, pavadinimų sąrašą. Šaltiniai (visi neprivalomi, visi sujungiami):

- `apiKeyInfo.disabledGuardrails`
- Užklausos turinio `disabledGuardrails` (aukščiausiu lygiu)
- Užklausos turinio `metadata.disabledGuardrails`
- Antraštė `x-omniroute-disabled-guardrails` (arba senoji
  `x-disabled-guardrails`)

Reikšmės gali būti eilučių masyvai arba kableliais atskirta eilutė; pavadinimai
normalizuojami į mažosiomis raidėmis rašomą kebabo stilių (`pii_masker` → `pii-masker`). Rezultatas
perduodamas registrui per `context.disabledGuardrails`, o registras praleidžia
atitinkančias apsaugos priemones (`skipped: true` lauke `results`).

## Vykdymo tvarka

Kiekvienai užklausai, perduodamai per `src/sse/handlers/chat.ts` ir
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` sudaro praleidžiamų apsaugos priemonių sąrašą pagal API raktą, užklausos turinį
   ir antraštes.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` vykdo apsaugos priemones didėjančia
   prioriteto tvarka:
   - Išjungtos apsaugos priemonės pažymimos kaip `skipped`.
   - Kiekvienos apsaugos priemonės `preCall` gali perrašyti naudingąją apkrovą per `modifiedPayload`.
   - Pirmasis `block: true` nutraukia grandinę, o apdorojimo programa grąžina
     apsaugos priemonės atmetimo atsakymą.
3. Galimai perrašyta naudingoji apkrova perduodama kombinuotajam maršrutizavimui ir išsiunčiama
   aukštesniojo lygio paslaugai.
4. Surinkus atsakymą, `guardrailRegistry.runPostCallHooks(...)`
   paleidžia tą pačią grandinę atsakymui. Šiame etape `block: true` atmeta aukštesniojo lygio paslaugos
   atsakymą.

Klaidą sukeliančios apsaugos priemonės pažymimos įrašu `error: <message>`, o klaida registruojama per
`logger.warn`, tačiau grandinė tęsiama — taip sąmoningai įgyvendinamas veikimo tęstinumas klaidos atveju.

## Konfigūracija

Integruotųjų apsaugos priemonių nuskaitomi aplinkos kintamieji:

| Kintamasis                            | Naudoja               | Poveikis                                                                                                                     |
| ------------------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`    | Nustačius `false`, aptikimas visiškai išjungiamas.                                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`    | Įterpimo politika: `warn`, `block` arba `log`. Ankstesnė reikšmė `redact` įterpimo teksto neperrašo.                         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`    | Įterpimo apsaugos režimas; taip pat DB funkcijos vėliavėlė, kuri **perrašo** aplinkos kintamuosius (DB > ENV).               |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`    | Mažiausias griežtumo lygis, kurį `MODE=block` atmeta: `high` (numatytasis), `medium` arba `low`.                             |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`    | Ankstesnis `INPUT_SANITIZER_BLOCK_THRESHOLD` alternatyvus pavadinimas.                                                       |
| `PII_REDACTION_ENABLED`               | `pii-masker`          | Kai nustatyta `true`, užklausoje esanti asmens identifikavimo informacija užmaskuojama (nepriklausomai nuo įterpimo režimo). |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (toliau) | Valdo atsakymo pusės maskavimo priemonės veikimą.                                                                            |

„Modality Bridge“ apsaugos priemonės vykdymo konfigūraciją nuskaito iš DB pagrįstos nustatymų
saugyklos (`getSettings()`), o ne iš aplinkos kintamųjų. Pagrindiniai vaizdo apdorojimo raktai yra
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ir
`modalityBridgeCacheMaxEntries`. Ankstesni
`visionBridge*` raktai priimami tik kaip dokumentuotas vieno ciklo nuskaitymo
atsarginis variantas; valdymo skydelio įrašymo operacijos naudoja pagrindinius raktus. Numatytosios reikšmės ir atsarginio varianto
sprendiklis yra faile `src/shared/constants/modalityBridgeDefaults.ts`, o ankstesnės
konstantos paliktos faile `src/shared/constants/visionBridgeDefaults.ts`.

Garso apdorojimas naudoja `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` ir `modalityBridgeAudioMaxClips` bei bendrus
`modalityBridgeCache*` nustatymus. Garso apdorojimas neturi atsarginio ankstesnių raktų varianto, nes šie
raktai buvo įtraukti kartu su „Modality Bridge“ schema.

Vaizdo įrašų apdorojimas naudoja `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` ir
`modalityBridgeVideoTimeout` bei bendrus `modalityBridgeCache*` nustatymus.
Pagal numatytuosius nustatymus jis išjungtas, nes FFmpeg/ffprobe yra pasirenkamos operacinės
priklausomybės, o kadrų aprašų generavimas padidina delsą ir modelio naudojimo sąnaudas.

## Pasirinktinės apsaugos priemonės

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

Veiksmai:

1. Sukurkite `src/lib/guardrails/myGuardrail.ts`, išplečiantį `BaseGuardrail`.
2. Įgyvendinkite `preCall` ir (arba) `postCall`.
3. Užregistruokite importavimo metu (įtraukite per `registerDefaultGuardrails`) arba
   vykdymo metu iškvieskite `guardrailRegistry.register(...)` — registras pakeičia
   bet kurią ankstesnę apsaugos priemonę tuo pačiu normalizuotu pavadinimu.
4. Pridėkite testus aplanke `tests/unit/` (esami pavyzdžiai:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testavimas

Tarp testų naudokite `resetGuardrailsForTests()`, kad pradėtumėte nuo žinomos būsenos.
Perduokite `{ registerDefaults: false }`, kad pradėtumėte nuo tuščio registro ir
užregistruotumėte tik testuojamas apsaugos priemones. „Vision Bridge“ palaiko priklausomybių
įterpimą (`deps.getSettings`, `deps.callVisionModel`); „Audio Bridge“ suteikia
atitinkamus sąsajos taškus nustatymams, galimybėms, STT modelio pasirinkimui, prisijungimo duomenų
patikroms ir transkripcijai. Todėl testais galima patikrinti abu srautus be prieigos
prie DB ar tinklo.

## Taip pat žr.

- `src/lib/guardrails/` — įgyvendinimas
- `src/shared/utils/inputSanitizer.ts` — bendras aptikimo mechanizmas, kuriuo grindžiami
  raginimų injekcijos aptikimas ir PII maskavimas
- `src/shared/constants/visionBridgeDefaults.ts` — numatytosios „Vision Bridge“ reikšmės ir
  priverstinio tilto modelių sąrašas
- `src/shared/constants/modalityBridgeDefaults.ts` — bendrosios „Vision“ / „Audio“ vykdymo aplinkos numatytosios reikšmės
- `docs/architecture/RESILIENCE_GUIDE.md` — nepriklausomas sluoksnis (grandinės pertraukiklis, atvėsimo laikotarpiai)
- `docs/reference/ENVIRONMENT.md` — išsamus aplinkos kintamųjų žinynas

## Injekcijos apsaugos maršrutų aprėptis ir „red-team“ testavimas (8 etapas · D blokas)

Injekcijos apsauga (`createInjectionGuard` / `withInjectionGuard`) apima visus maršrutus,
kurie priima naudotojų raginimus. Ji atsižvelgia į `INJECTION_GUARD_MODE` (numatytoji reikšmė `warn` = tik registruoti žurnale;
`block` = grąžina HTTP 400 `SECURITY_001`).

| Tipas           | Maršrutai                                                                                                                                            | Numatytasis režimas |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Tekstas (esami) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Generatyviniai  | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Duomenys        | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

Teksto išskyrimas (`extractMessageContents`) apima `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**„Red-team“ testavimas (kasnakt, `nightly-llm-security.yml`):** promptfoo patikrina, ar kiekvienas maršrutas blokuoja
OWASP-LLM rinkinį, kai `INJECTION_GUARD_MODE=block`; garak vykdo zondus (praleidžiama, jei nėra slaptojo rakto).
`moderations` įtrauktas nuoseklumo sumetimais — operatoriai, naudojantys blokavimo režimą, gali jam taikyti išimtį per
`resolveDisabledGuardrails`.

Kasnakt vykdoma darbo eiga (`.github/workflows/nightly-llm-security.yml`, cron + rankinis
paleidimas) turi dvi užduotis:

- **`promptfoo-guard` (blokuojanti)** — vykdo `promptfoo eval -c promptfooconfig.yaml`
  su `INJECTION_GUARD_MODE=block`. Kiekvienu priešišku atveju (pvz., „nepaisyk visų
  ankstesnių instrukcijų…“, DAN tipo apsaugos apėjimai) patvirtinama, kad atsakyme yra
  `error.code === "SECURITY_001"`, t. y. apsauga iš tikrųjų atmetė užklausą.
- **`garak` (patariamoji)** — vykdo garak `--probes promptinject,dan,leakreplay`
  vietiniame „OmniRoute“ egzemplioriuje (`http://localhost:20128/v1`). Vykdymas priklauso nuo
  teikėjo slaptojo rakto (`PROMPTFOO_PROVIDER_KEY`); jo nesant užduotis korektiškai praleidžiama, o pabaigoje pridėta
  `|| true`, todėl rezultatai pateikiami nesukeliant CI nesėkmės.

Apsaugos pagalbinės priemonės (`createInjectionGuard` / `withInjectionGuard`)
aprėptis apima kiekvieną raginimus priimantį `/v1` maršrutą; raginimo tekstas paimamas iš
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`, naudojant
`extractMessageContents()` faile `src/shared/utils/inputSanitizer.ts`.
