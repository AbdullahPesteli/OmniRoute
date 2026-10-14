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

## Įmontuoti apsauginiai barjerai

Registras automatiškai įkelia šešis apsauginius barjerus prioritetine tvarka importuojant
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

Perima vaizdus turinčius užklausas, skirtas **nevaizdo modeliams**, ir arba
peradresuoja visą užklausą į vaizdo galintį modelį, arba pakeičia vaizdo
dalis tekstinėmis aprašymų dalimis, kurias sukuria konfigūruojamas vaizdo modelis prieš
aukštesnę užklausą. Tai leidžia tik tekstinius duomenis teikiantiems tiekėjams sklandžiai
tvarkyti multimodalinius krovinius.

Srautas:

1. Praleisti, jei tikslinis modelis jau palaiko vaizdą (nebent jis yra
   priverstų tiltų sąraše `isVisionBridgeForcedModel`).
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
   atsarginiu** (atsarginio lango). Praleisti prieš bet kokį medijų perėjimą, kai
   tiltas yra išjungtas.
4. Režimo pasirinkiklis (`modalityBridgeVisionMode`, žr. žemiau esančią lentelę) nusprendžia
   peradresuoti ar aprašyti. Peradresavimas grąžina `modifiedPayload` su tik `model`
   pakeistu, plius meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Aprašymo kelias: apriboti vaizdus iki `maxImages`, sudaryti užduotį atitinkantį
   promptą, pasikonsultuoti su aprašymo talpykla, iškviesti vaizdo modelį **paraleliai**
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
| `auto`     | ✔        | Senoji heuristika, nepakitusi (#6640/#7204): ne-derinimo/`auto/` modeliai peradresuoja į geriausią vaizdo modelį, nebent originalus modelis jau turi naudojamų kredencialų (tuomet aprašo); derinimo tikslai visada aprašo.                                            |
| `describe` |          | Visada aprašyti — peradresavimo blokas visiškai praleidžiamas; vartotojo pasirinktas modelis visada atsako.                                                                                                                                                            |
| `reroute`  |          | Priverstinis peradresavimas: kredencialų modelio apsauga apeinama. Peradresavimo-**tikslo** kredencialų apsauga vis tiek taikoma — kai nėra naudojamo vaizdo tikslo, užklausa pereina į aprašymą, todėl žali vaizdai niekada nepasiekia tik tekstinio backend (#8430). |

Priverstiniai režimai trumpina **prieš** automatinę heuristiką; `auto` elgesys
yra bitų identiškas prieš PR-1 apsauginį barjerą.

#### API rakto sritis (`visionBridgeKeyScope.ts`)

Kai skambinančiojo API raktas riboja `allowedConnections`, kvotų baseinus
(`allowedQuotas`) arba modelius (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), tiltas tik
pasirenka peradresavimo ir aprašymo modelius, kuriuos raktas gali naudoti, pagal ryšius, kuriuos raktas gali
naudoti. Aprašymo užklausa tada visada praeina per OmniRoute savikontrolės ciklą su
`x-omniroute-self-loop-key-id` antrašte, todėl gaunama pokalbio užklausa
vėl priverčia to rakto ryšio ir modelio politiką. `enforceApiKeyPolicy()`
gerbia tą antraštę tik kartu su savikontrolės nešėju, todėl ji gali tik
sumažinti prieigą, o id, kuris nesprendžia, yra atmestas.

Jei jokiam vaizdo modeliui nėra leidžiama naudoti raktą, aprašymo kelias pasitraukia ir
užklausa praeina nepakitusi, tas pats fail-open elgesys kaip ir išjungtas
apsauginis barjeras (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Užklausos be rakto ir rakta, neturinčios šių ribojimų, elgiasi tiksliai taip pat kaip
anksčiau.

#### Užduotį atitinkantis aprašymo promptas (`modalityBridgeVisionTaskAware`)

Numatytas **tiesa**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) prided
paskutinės vartotojo žinutės tekstą (sutrumpintą iki 500 simbolių) prie bazinio
aprašymo užklausos, nukreipdamas aprašymą į tai, ko vartotojas iš tikrųjų prašė
(codex-vision-proxy modelis) ir prašydamas vizijos modelio transkribuoti matomą
tekstą. Kai vėliava išjungta — arba nėra vartotojo teksto — bazinė užklausa
naudojama nepakitusi.

Aprašymo savarankiško ciklo OpenAI suderinama užklausa (`callVisionModelSingle()`
`visionBridgeHelpers.ts`) visada prašo `image_url.detail: "high"` —
be jokių sąlygų, kiekvienam skambinančiam/tiekėjui, nesiremiant jokiu kliento
signalu. Mažo detalumo mėginiai sumažina OCR tikslumą būtent dėl to teksto
transkripcijos užduoties, kurią ši užklausa prašo, todėl aprašymo užklausa
visada prašo didelio detalumo, nepriklausomai nuo to, kokio detalumo lygį
naudojama pradinėje įeinančioje užklausoje. Tai veikia tik vidinę aprašymo
užklausos kūno dalį; tai nekeičia, kaip OmniRoute perduoda skambinančiojo
`image_url.detail` pirminėje užklausoje — tas numatytas parametras taikomas
atskirai ir tik aptiktiems OpenCode klientams, `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Aprašymo savarankiško ciklo
Anthropic laidų formato šaka neturi `detail` lauko ir nėra paveikta jokio
numatyto.

#### Aprašymo išvesties riba (`modalityBridgeVisionMaxChars`)

| Raktas                         | Numatytas | Diapazon           |
| ------------------------------ | --------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`       | `0` arba 100–50000 |

`0` (numatytas) reiškia **jokios ribos** — aprašymas, grąžintas iš
`callVisionModel()`, perduodamas nepakitęs, išlaikant esamą elgesį. Bet koks
vertė 100–50000 diapazone sutrumpina aprašymą su `…` priedu prieš jį
sujungiant kaip `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` `src/lib/guardrails/visionBridge.ts`).
Padidinkite tai detalizuotoms OCR užduotims, kur žemyn einantis modelis
reikia pilnos transkripcijos; sumažinkite, kad apribotumėte žetonų
naudojimą kalbantiems vizijos modeliams. Valdymo skydelio laukas yra
Vizijos skyriaus Išplėstiniame skydelyje
(`modality-bridge-max-chars` `ModalityBridgeVisionTab.tsx`) ir riboja bet
kokią vertę tarp 1 ir 99 iki 100 grindų, palikdamas aiškų `0`
nepakitusį — `0` yra galiojanti Zod vertė savaime
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), o ne
tiesiog "nustatyta" numatytoji.

#### Aprašymo talpykla (`modalityBridge/bridgeCache.ts`)

Atmintyje LRU + TTL talpykla aprašymo išvestims, bendrinama visame procese.
Raktas = `sha256(imageRef + composedPrompt + configuredBridgeModel)` su
ilgio prefiksu (be lauko ribų kolizijų). Modelio komponentas yra
**konfigūruotas** tilto modelis, o ne modelis, kuris iš tikrųjų atsakė —
`callVisionModel` gali viduje grįžti atgal, o raktų generavimas pagal bandymą
suskaidytų talpyklą. Nepavykę aprašymai niekada nėra talpinami. Nustatymai:

| Raktas                          | Numatytas | Diapazon |
| ------------------------------- | --------- | -------- |
| `modalityBridgeCacheEnabled`    | `true`    | —        |
| `modalityBridgeCacheTtlMinutes` | `60`      | 1–1440   |
| `modalityBridgeCacheMaxEntries` | `200`     | 10–5000  |

#### Nuotolinių vaizdų normalizavimas (savarankiško aprašymo/base64 gavimas)

Kai tiltas pats gauna **nuotolinį** vaizdą — Anthropic aprašymo
savarankiškas skambinimas ir claude-laidų formato base64 konversija
(`ensureBase64ImagesForClaudeWire`), abu per
`fetchRemoteImageAsDataUri()` `visionBridgeHelpers.ts` — gautas duomenų
URI perduodamas per `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) prieš jį įterpiant į vizijos modelio
užklausą. Per dideli vaizdai sumažinami iki **2048px ilgio krašto**
(atitinka OpenAI/Anthropic jau taikomą serverio pusėje dydžio ribą), kas sumažina
įkėlimo baitus/latenciją, nekeisdami to, ką vizijos modelis mato. Dydžio
keitimui naudojamas `sharp`, įkeltas per dinaminį importą: platformoje, kur
jos natūralus binarinis failas nepavyksta įkelti, `normalizeDataUri()` **niekada
nepaleidžia** — jis grįžta prie originalių baitų, todėl aprašymo/base64
konversijos kelias visada veikia. Nevaizdo baitai (gauti, kurie negrąžino
dekoduojamo vaizdo) taip pat perduodami nepakitę. Ši normalizacija taikoma
tik vaizdams, kuriuos tiltas gauna savo savarankiškam skambinimui — ji niekada
netaikoma skambinančiojo žaliam perduodamam kroviniui, laikantis
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
neperrašys operatoriaus nustatyto `modalityBridge*` vertės); seni raktai
lieka priimami kaip skaitymo atsarginė parinktis vienam leidimo ciklui.

#### Skaidrumo antraštė + statistika

Aprašymo transformuoti atsakymai turi
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(sukurtas `buildModalityBridgeHeader()` `modalityBridge/bridgeStats.ts`,
pažymėtas `withModalityBridgeHeader()` `src/sse/handlers/chatHelpers.ts`).
Peradresuoti užklausimai **neturi** antraštės — krovinys buvo nepakitęs ir modelio
keitimas jau matomas atsakymo kūno `model` lauke.

`GET /api/modality-bridge/stats` (valdymo autentifikacija, tas pats lygis kaip
`GET /api/settings`) grąžina atmintyje esančius kiekvienos modalumo skaitiklius
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` `vision`, `audio` ir
`video`. `averageLatencyMs` naudoja `latencySamples`, o ne visus bandymus, kaip
savo vardiklį; operacija be laiko nesukuria nulio milisekundžių
pavyzdžio. `bridged` lieka atgal suderinamu aliasu sėkmingiems
konversijoms; nesėkmingi bandymai jo nepadidina.
Skaitikliai yra atstatomi proceso perkrovimo metu pagal dizainą
(telemetrija, ne apskaita).

#### Valdymo skydelio konfigūracija

Specializuota valdymo skydelio puslapis yra
`/dashboard/settings/modality-bridge`. Jo URL adresuojami `Vision`, `Audio`,
ir `Video` skirtukai išlaiko užklausos parametrus keičiant `tab` reikšmę.
Vision skirtukas atskleidžia įgalinimą, režimą, modelio pasirinkimą (įskaitant automatinį
numatytąjį), užduotims jautrų skatinimą, pažangius laiko/išvaizdos/aprašymo ilgio/kešavimo
ribas, veikimo
skaitiklius ir saugomą pavyzdžio užklausą. Audio skirtukas taip pat yra aktyvus: jis atskleidžia
įgalinimą, STT tik modelio pasirinkimą su Auto, laiko/max-clip ribas, garso
skaitiklius ir `input_audio` pavyzdžio testą. Video skirtukas veikia: jis praneša
FFmpeg/ffprobe veikimo būseną — viena iš keturių aiškių UI būsenų (`unknown`, kol
probas yra kelyje arba negalėjo būti užbaigtas, `restricted` ne loopback
valdymo skydelio šeimininke, kur probas yra praleidžiamas kliento pusėje, `unavailable`, kai probas
buvo ištirtas ir patvirtintas kaip trūkstamas, arba `available` su FFmpeg/ffprobe versijomis) — išlaiko
įgalinimo/modelio/rėmo/video/laiko ribas, filtruoja modelio pasirinkimą, kad būtų
matomi vizijos galintys modeliai, ir atskleidžia video skaitiklius.

Ankstesnis Vision Bridge kortelė po AI nustatymais yra suderinamumo nuoroda į
naują puslapį; ji daugiau neturi antros formos kopijos. Media Providers taip pat
nuorodas Image-to-Text ir Speech-to-Text darbo eigas į atitinkamus Modality
Bridge skirtukus, nepašalindama esamo Speech-to-Text žaidimų aikštelės.

**Savarankiško ciklo priėmimo apeitis:** kai aprašymo užklausa nukreipiama per OmniRoute
savo `/v1` savarankišką ciklą (nestandartinis tiekėjo modelis), sub-užklausa siunčia
`x-omniroute-admission-bypass: internal` ir yra autentifikuojama su išspręstu
savarankiško ciklo akreditu — vietiniu `sk_omniroute` sargybinis vietiniame režime, arba
operatoriaus sukonfigūruotu `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` aplinkos raktu (#1350), kad
`REQUIRE_API_KEY=true` diegimai vis tiek galėtų vykdyti aprašymo užklausą. Apeitis
yra gerbiama tik tiems tiksliai akreditams, todėl išoriniai klientai negali naudoti
antraštės, kad praleistų priėmimą.

Paveldėti numatyti nustatymai gyvena `src/shared/constants/visionBridgeDefaults.ts`;
nauji režimo/užduotims jautrūs/kešavimo numatyti nustatymai ir nustatymų sprendėjas gyvena
`src/shared/constants/modalityBridgeDefaults.ts`. Saugiklis atskleidžia
`deps` konstruktoriaus parinktį, kad testai galėtų įterpti netikrus `getSettings` ir
`callVisionModel` įgyvendinimus.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Perima garso turinčius pokalbių užklausas prieš joms pasiekiant tikslą, kuris nėra
žinomas kaip priimantis garso įvestį. Jis niekada neperadresuoja pokalbio užklausos: garso dalys yra
perrašomos per esamą OpenAI suderinamą multipart galinį tašką, o pasirinktas pokalbio modelis tęsiasi su tekstiniais
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
   `source.media_type: "audio/*"`. Įdėtas garsas yra aptinkamas nukreipimui, bet ne
   pašalinamas per sujungimo kelią. Darbas yra ribojamas `modalityBridgeAudioMaxClips`;
   vėlesnės dalys lieka nepaliestos.
3. Gerbkite sukonfigūruotą `provider/model`, arba leiskite `selectAudioBridgeModel()` pereiti
   per `AUDIO_TRANSCRIPTION_PROVIDERS` stabilia katalogo tvarka ir pasirinkti pirmą
   modelį su naudojamu aktyviu tiekėjo akreditu.
4. `callAudioTranscription()` konvertuoja base64/data-URI garso į multipart
   `file`, arba atsisiunčia nuotolinį `audio_url` per tik viešą išėjimo
   sargybinį su DNS pinning ir 25 MB riba. Tada jis POST'ina failą ir pasirinkto
   modelio į vietinį `/v1/audio/transcriptions` savarankišką ciklą, autentifikuotą su
   `resolveSelfLoopBearer()`. Esamas transkripcijos maršrutas atlieka normalų
   akreditų paiešką, atvėso/ribų valdymą ir tiekėjo išsiuntimą.
5. Sėkmingos užklausos pakeičia savo dalis į `[Audio N]: <transcript>`. Užklausos
   vykdomos su `Promise.allSettled`: individuali nesėkmė išlaiko tą originalią
   garso dalį (#4012 sutartis). Jei kiekviena užklausa nepavyksta ir tikslas įrodytas
   `supportsAudio === false`, dalys tampa
   `[Audio N]: (nepasiekiama — joks STT tiekėjas neprijungtas)` (#8430 sutartis). Nežinomam
   tikslui (`null`), visi nesėkmių rezultatai lieka nepaliesti. Įrodytas
   tik tekstui skirtas tikslas be naudojamo STT akredito gauna tą patį aiškų
   stubą, neišsiunčiant tinklo užklausos.

Sėkmingi perrašymai naudoja proceso lygio Modality Bridge LRU/TTL kešą. Raktas
sujungia garso nuorodą, stabilų `audio-transcription` operacijos
etiketę ir pasirinkto STT modelio; nesėkmės niekada nėra kešuojamos. Garso bandymai atnaujina
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
Palaikomi formatai yra `input_video`, `video_url`, `video_source`, HTTPS URL,
ir `data:video/*;base64,...` duomenų URI. Paprasti failų pavadinimai tekste nėra laikomi
vaizdu.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) valdo užklausų perėjimą,
galimybių/politikos patikrinimą, užklausų agregavimą ir atsakymo turinį.
Per vaizdo darbą — įsigijimą, viso rezultato talpyklą, rėmo sekos aprašymą
(kuris sujungia bet kokį iškviečiančiojo paskelbtą garso transkriptą) ir
bandymo metrikas/abortą/valymą — slepiama už `processVideoPart`
`videoBridgePipeline.ts`, kuris yra iškviečiamas kartą per vaizdo dalį
`preCall` ciklo viduje. Tas modulis taip pat apibrėžia aiškias prievado ribas
`VideoMediaBrokerPort` (įsigyjant baitus ir išgaunant mėginius),
`VideoAudioTranscriptionPort` (sujungiant iškviečiančiojo paskelbtą garso
transkriptą su mėginiu subtitrais) ir `VideoDrilldownPort` (senos
žaliavos saugojimo forma). Gamybos STT ir rėmo išlaikymas
yra sudaryti aplink aprašomą prievadą per `createVideoSttAdapter` ir
`createVideoDrilldownAdapter`; pastarasis naudoja bendrą opakų rankenų
gyvavimo ciklą.

Viešas `/v1` užklausų kelias niekada neimportuoja ir neįvykdo
pogrupio. Nuotoliniai vaizdai yra atsisiunčiami pagal 50 MiB ribą;
inline base64 vaizdai turi konservatyvią 36 MiB dekoduotą
per-vaizdo ribą, kad modelis/žinutės/rėmų apvalkalas galėtų
likti viešo JSON užklausų priėmimo ribose, kurios yra 50 MiB. Inline
ilgio ir dekoduoto dydžio vertinimai yra tikrinami prieš
paskirstymą. HTTPS yra reikalaujamas pradiniame nuotoliniame URL
ir kiekviename peradresavime, naudojant esamą
viešą tik išėjimo apsaugą su DNS fiksavimu. Baitai tada
kerta tikslų vidinį `POST /api/modality-bridge/video/extract`
brokerio ribą. Tas maršrutas yra tiek `LOCAL_ONLY`, tiek
`SPAWN_CAPABLE`, priima tik per procesą autentifikuotą,
patikimą atgalinę užklausą ir niekada nepriima URL,
failų sistemos kelio, vykdomųjų failų ar argumentų sąrašo.
API kūno dydžio pipeline ir tvarkyklės inkrementinis kūno
skaitytuvas nepriklausomai įgyvendina 50 MiB brokerio
įvesties ribą. Jo ribota eilė vykdo vieną išgavimą vienu metu,
leidžia keturis laukiančius darbus ir riboja laukiančią
įvestį iki 100 MiB.

Brokerio viduje `ffprobe` skaito privatų vietinį failą;
fiksuotas formatų leidimų sąrašas neįtraukia grojaraščio ir
manifesto formatų. Leidžiamų MOV šeimos konteinerių atveju
išoriniai MOV duomenų nuorodos pagal numatytuosius nustatymus
yra išjungti, o fiksuotas komandas nepasirenka jų.
T tanto `ffprobe`, tiek `ffmpeg` naudoja
`file`-tik protokolo leidimų sąrašą, vieną giją, fiksuotas
argumentų masyvas, be shell ir vykdomuosius failus,
išspręstus iš `PATH`. Prikabintų paveikslėlių viršelis
nėra žaidžiamas kandidatas. Visi žaidžiami srautai turi
atitikti ribas, o aiškiai nustatytas srautas yra pageidautinas
prieš deterministinį mažiausio indekso atsarginį variantą.
Vaizdai yra ribojami iki 600 sekundžių, 8,192 pikselių
kiekviename matmenyje ir 33,554,432 šaltinio pikselių.
FFmpeg mėgina 1–16 vidurio JPEG rėmus, sumažina ilgą
kraštą iki ne daugiau kaip 1,024 pikselių, nesukeldamas
mažesnių įvesties, ir niekada nepriima URL.
Mėginimas yra `uniform` pagal numatytuosius nustatymus.
Pasirinktinės `scene_aware` ir eksperimentinės `segment_aware`
politikos atlieka vieną papildomą fiksuotą FFmpeg
perėjimą per jau patvirtintą vietinį srautą, pasirenka
ribotus `showinfo` scenos laiko žymenis ir deterministiškai
grįžta prie tų pačių vienodų vidurių, kai detektorius nepavyksta,
laikas baigiasi, išvestis yra netinkama arba kandidato rinkinys yra tuščias.
Segmentų sąmoningumo režimas paskirsto vidurio mėginius
proporcingai patvirtintoms scenos intervalams;
segmentų sąmoningumo įrodymai ir atsarginio elgesio
detalės pateikiamos žemiau. Kietas 16-rėmų limitas
taikomas po pasirinkimo kiekvienoje politikoje.
Kai scenos sąmoningumo užklausa turi tik vieno rėmo biudžetą,
ji naudoja vienodą vidurį aktyvaus viso vaizdo arba
fokusavimo lango ir praneša `policyEffective: uniform`:
vienas pasirinktas scenos rėmas negali išlaikyti
abu laiko galus. Iškviečiančioji šalis gali pasirinktinai
pateikti baigtinį fokusavimo langą (`start`/`end` sekundėmis);
ribos yra pririštos prie medijos trukmės, atvirkštiniai arba
nebaigtiniai langai yra atmetami, o visi mėginimo
politikos atliekami tik normalizuotame intervale.
Gautas langas yra įtrauktas į mėginimo metaduomenis
ir nepatikimo aprašymo prefiksą, kad žemyniniai modeliai
galėtų atskirti fokusuotą ištrauką nuo viso laiko juostos.

Semantinis subtitrų fokusas yra atskiras, aiškus nustatymas.
Numatytasis `full` analizės režimas išlaiko esamą
rėmo užklausą ir niekada neperduoda užklausos
teksto subtitrų modeliui. `Focused` režimu tiltas
skaito tik naujausią ne tuščią vartotojo sukurtą
`text`/`input_text` iš to paties Chat arba Responses
konteinerio, normalizuoja jį į NFC, sujungia valdymo
simbolius ir tarpą, ir riboja iki 500 Unicode
kodo taškų. Tuščias rezultatas grįžta prie
tiksliai `full` užklausos. Naudojamas užuomina
yra serializuojama kaip JSON specialiame
nepatikimo vartotojo konteksto bloke ir gali
tik prioritetizuoti pastebimus duomenis; ji
negali pakeisti atskiro įspėjimo dėl sekimo
nurodymų, matomų ar girdimų medijoje. Tekstinis
fokusas niekada nenustato `start`/`end` arba
nepakeičia laiko mėgintuvo.

#### FU-07 struktūrinio segmento įrodymai

`segment_aware` naudoja vieną ribotą išankstinę analizę jau patvirtintame
vietiniame vaizdo sraute. Fiksuota filtrų grandinė pirmiausia sumažina iki
maksimaliai 320 pikselių pločio, nustato scenų pokyčius ir sustingusius
intervalus, tada imasi 1 kadro per sekundę mėginių dėl neryškumo, vidutinės
luminacijos ir erdvinės/laiko informacijos. Analizė yra ribota iki 600
struktūrinių mėginių, vieno FFmpeg/filter gijos, to paties `file`-tik
protokolo ir konteinerių leidimų, 1 MiB proceso išvesties ribos ir
maksimaliai 30 sekundžių brokerio bendro nutraukimo/termino. Ji niekada
nepriima komandos, filtro, kelio ar URL iš užklausos.

Struktūrinės vertės yra deterministiniai mėginių įrodymai, o ne semantinis
vaizdo supratimas. Jos nenustato subjektų, veiksmų, antraščių, kalbos ar
naudotojo ketinimų. Scenos ir sustingimo ribos sudaro segmentus; sustingimo
apimtis, neryškumas, ekspozicija, erdviniai detalės ir laiko pokyčiai
įtakoja tik tai, kaip esamas 1–16 kadro biudžetas yra paskirstomas. Visiškai
sustingtas segmentas yra apribotas iki vieno kadro, o nesustingti segmentai
konkuruoja dėl likusio biudžeto. Kai ribos viršija kadrus, išlaikoma
vienoda laiko juostos aprėptis, kad greiti ankstyvi pjūviai negalėtų
paslėpti ilgo sekamo segmento. Scenos ribos, esančios 1 sekundės analizės
rezoliucijoje nuo sustingimo ribos, yra sujungtos.

Trūkstami filtrai, netinkami/tušti įrodymai, detektoriaus klaida arba
riboto išankstinės analizės laiko limitas atveria iki tikslaus vienodo
vidurio politikos. Skambintojo nutraukimas arba brokerio terminas
neatveria: jis nutraukia vykdomą subprocess, neleidžia vėlesniam kadro
išgavimui, o privatus laikinas medis yra pašalinamas `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuoja deterministinius realius
FFmpeg įrenginius po deduplicavimo antraščių skambučių taupymui, tankaus
judesio biudžeto paskirstymui, neryškumo/ekspozicijos/SI-TI įrodymams,
greitiems pjūviams su ilgu uodega ir palaipsniui išblukusių klaidingų
teiginių. Jis fiksuoja išankstinės analizės sienos laiką ir, kur
`/usr/bin/time` yra prieinamas, vaiko CPU ir piką RSS. Jo kokybės patikrinimai
yra tik struktūriniai orakulai. Realių antraščių modelio kokybė lieka
`HOLD`, nes šis įrenginys neturi įgalioto galinio taško ar sustingusio
vertintojo. Finansiniai taupymo rezultatai taip pat lieka `HOLD`, nebent
`--caption-cost-per-call-usd` pateikia aiškų teigiamą per skambutį
įvertinimą; skriptas niekada nesukuria jokio rezultato.

Kiekvienas kadras yra ribotas iki 4 MiB, visi žali kadrai kartu iki 23 MiB,
o serializuotas brokerio atsakas iki 32 MiB. Privatus laikinas katalogas
yra pašalinamas `finally`. OmniRoute nesujungia FFmpeg ir nepriima
individualaus vykdomojo kelio. Prieš antraščių pridėjimą, tiltas taiko
konservatyvų vizualinį deduplicavimo procesą: kiekvienas JPEG yra sumažinamas
iki 16×16 pilkos spalvos buferio ir lyginamas tik su paskutiniu
išlaikytu kadru. Prašant antraščių biudžeto, viršijančio vieną kadrą,
išgavimas pateikia ribotą kandidatų baseiną iki dvigubo to biudžeto ir
niekada daugiau nei 16 kadrų. Prašoma riba taikoma tik po deduplicavimo,
pirmieji ir galutiniai pasirinkti kandidatai išlaikomi galutiniame
ploninime, kai biudžetas yra bent du. Versijuota
`grayscale-16x16-mean-cells-v2` politika naudoja didesnį iš vidutinės
luminacijos delta ir miniatiūrinių ląstelių, kurių normalizuota delta yra
bent 0.05, santykį. Dublikatų slenkstis yra pastovus 0.04, pasirinktas
dėl prognozuojamumo, o ne kaip vykdymo nustatymas. Šis antrinis
aukšto kontrasto signalas išlaiko mažą judesį ir matomus teksto pokyčius,
kuriuos gali paslėpti tik vidutinio palyginimo. Palyginimo ar dekodavimo
klaidos atveria ir išlaiko aprėptį. Išvesties metaduomenys atskiria
išgautus kandidatus, sėkmingai naudotus kadrus ir vizualinius dublikatų
išmetimus.

Aiškiai pažymėta vaizdo dalis gali prašyti laiko žymėto kontaktinio lapo.
Tilto statybos metu sukuriama maksimaliai 4 stulpelių, 16 kadrų JPEG
tinklelis. Kiekviena 512 pikselių ląstelė įrašo savo šaltinio laiko žymę
į aukšto kontrasto apatinę juostą, o tos pačios laiko žymės lieka
tekstiniuose metaduomenyse tolesniam susiejimui ir auditui. Pilnas JPEG
lieka apribotas iki 32 MiB. Jei `sharp` negali dekoduoti ar sudaryti
tinklelio, tiltas grįžta prie individualių JPEG kadrų; kliento nutraukimas
vis tiek plinta per lapo operaciją.

Skatinimo įrodymai yra sąmoningai atskirti nuo sintetinio sudarymo
mikrobandymo. `scripts/perf/video-bridge-contact-sheet-eval.ts` apibrėžia
schemos versiją A/B įrenginį realiems OpenAI suderinamiems vizijos modeliams.
Jis matuoja tiekėjo praneštus žetonus, galutinį sienos delsą (įskaitant
lapo sudarymą), modelio skambučių skaičių ir manifestu apibrėžtą faktų
išlaikymą. Žali modelio atsakymai nėra rašomi į ataskaitą; tik SHA-256
sumažinimai ir atitinkantys faktų ID yra išlaikomi. Įrenginys nedaro
tinklo ar mokamo modelio skambučio, nebent yra perduodamas `--execute-real`
ir sukonfigūruoti `--model`, `OMNIROUTE_BASE_URL` ir `OMNIROUTE_API_KEY`.
Be to, aiškaus realaus vykdymo, jo mašininio skaitomo nuosprendžio
būklė lieka `HOLD`; sintetinių krovinių/skambučių skaičiaus matavimai
vieni nėra skatinimo įrodymai.

Atskiras `scripts/perf/video-bridge-promotion-eval.ts` naudoja FU-07 arba
FU-09 stebėjimus. Skatinimo priėmimas reikalauja visų aštuonių sintetinių
scenarijų tipų plius sanizuotas realus klipas, bent trijų matuotų
pakartojimų kiekvienai rolėms ir atvejams, visų dešimties deklaruotų
metrikų, sustingusių medijų/promptų/laukiamų faktų/nustatymų
sumažinimų, unikalių stebėjimo ID ir patvirtintų sėklinių A/B tvarkų.
Vykdymo kvitas susieja korpuso sumažinimą, tikslų kandidato SHA ir
modelio versiją. Trūkstami arba netinkami matavimai lieka `HOLD`,
įskaitant CPU virš 30 s, piką RSS virš 512 MiB arba išankstinę analizę
virš 30 s. Tai yra įrodymų priėmimo ribos, o ne naujas vykdymo RSS
užtikrinimo garantas.

FU-07 reikalauja bent 98% kokybės išlaikymo ir p95 latencijos, ne didesnės nei 1.2x
pagrindo, plius arba 0.05 absoliutus atvejų subalansuotas vidutinio atgaminimo
pagerinimas esant ekvivalentiniams vidutiniams antraščių skambučiams, arba
bent 10% mažiau vidutinių po-duplicatų antraščių skambučių. FU-09 reikalauja
bent 0.85 kokybės, 95% išlaikymo, 20% p95 latencijos sumažinimo ir 10%
žetonų sumažinimo. Kritinis faktų praradimas, injekcijos atitiktis arba
trūkstamas naudojimas neleidžia promocijai. Vienas vykdymas negali
promotuoti nieko: `--previous-report` patvirtina du skirtingus, nesikertančius,
iš eilės tinkamus to paties politikos/modelio revizijos/kandidato/korpusų
vykdymus. Imties eksperimentas negali patvirtinti kontaktinės lapo eksperimento.

Kolektoriai turėtų įvertinti atsakymus atmintyje ir išsaugoti `responseDigest`
plius metrikas ir stebėjimo ryšius, niekada atsakymo teksto. Vartotojas taip pat
skaito senus žalius stebėjimus, bet niekada nekopijuoja to teksto į savo
ataskaitas. Tiksliai vienas iš `responseDigest` arba `rawResponseText` yra
priimtinas kiekvienam stebėjimui. Versijomis leidžiamas sąrašas lieka tuščias
su nekintamu `hold` numatytuoju. Tinkamas įrašas reikalauja savo įrodymo
nuorodos, politikos, modelio revizijos, tikslaus kandidato SHA, manifestų
sukimo ir dviejų skirtingų vykdymo ID; konfliktuojantys kontekstai yra
atmesti. Šie metaduomenys yra audito sutartis, o ne įrodymas, kad
nurodytas failas turi tikrus matavimus. Peržiūrėkite faktinius kvitus
prieš pridėdami bet kokį įrašą. Valdymo statistikos galas ir vaizdo
informacijos suvestinė atskleidžia konservatyvų pasirengimą. Konfigūruotas
modelio alias vienas nesukuria jo revizijos ar vykdomo kandidato SHA, todėl
dabartinė suvestinė praneša `HOLD`, o ne perima tinkamumą iš kito
vykdymo konteksto. Aiškus eksperimentinis pasirinkimas lieka atskirtas
nuo promocijos; joks numatytasis automatiškai nepakeičiamas.

Kreipėjai gali pridėti neprivalomą `transcript.cues` masyvą prie
palaikomo vaizdo dalies, kai jie jau turi suderintą tekstą. Kiekvienas
signalas turi turėti `text`, baigtinį `start`/`end` intervalą
išmatuotoje trukmėje ir leidžiamą `source` (`client`, `embedded`, arba
`audio-bridge`); `confidence` numatytas `1` ir turi likti tarp `0` ir `1`.
Tikslios dublikatų signalai yra sujungti. OmniRoute niekada nepradeda
transkripcijos iš šių metaduomenų: patvirtinti signalai yra kopijuojami į
aprašytą rezultatą su šaltiniu, pasitikėjimu ir intervalu, ir yra
pateikiami kaip nepatikimi stebėjimai kartu su rėmelio antraštėmis.
Neteisingas, už ribų esantis arba kilmės neturintis tekstas yra atmestas,
o ne sumaišomas su antraščių srautu. Abu užklausos kūno transkripto kanalai
normalizuoja pateiktą kilmę į `client`, įskaitant savarankiškai
patvirtintus `embedded` arba `audio-bridge` žymėjimus. Tik serverio
nuosavybės adapteris gali priskirti tuos patikimus žymėjimus per
tik kodu `trustedSource` argumentą; užklausos JSON laukas negali pasiekti
to argumento. Transkripto tekstas lieka nepatikimas medijos gautas turinys,
nepaisant jo kilmės, ir niekada neturi lemti autorizacijos.

Išplėstinis kreipėjas gali pateikti `audioTranscript` takelį tam pačiam
vaizdui; jis laikomas klientui pateiktu tekstu, o ne serverio
transkripcijos įrodymu. Sujungimo siūlas vykdo vizualinius ir garso
stebėjimus pagal vieną terminą ir abortų signalą, užsako juos bendroje
laiko juostoje, sujungia tikslius dublikatų signalus ir praneša
dalinį rezultatą, kai tik viena pusė pavyksta. Neteisingas `audioTranscript`
sumažėja iki to dalinio rezultato — vizualinis aprašymas išlaikomas, o
garso šaka registruoja sanizuotą klaidos kodą — vietoj to, kad
nepavyktų visam vaizdui. Pagal šakos prieinamumą, dalinis ženklas ir
sanizuoti klaidos kodai yra išsaugomi aprašytame rezultate, saugumo
metaduomenyse (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), rezultato talpyklos metaduomenyse ir
tilto sujungimo skaitikliuose. Numatytoji vaizdo tilto kelias
neįjungia kalbos į tekstą arba neatsisiunčia antro medijos kopijos; be
to aiškaus takelio, jis lieka tik vaizdo.

**Transkripto išlaikymas (#12150 P1).** Tai taikoma automatiškai
kiekvieną kartą, kai Vaizdo tiltas (kuris pats yra pasirinktinai) pateikia
transkripto signalą — nėra atskiro išlaikymo ženklo. Kai užklausa pateikia
bet kurį transkripto signalą (kreipėjo paskelbtą `transcript` arba
sujungtą `audioTranscript`), saugumo ženklas pažymi jį
`videoBridgeObserved` ir sukuria redaguotą vaizdo aprašymo šešėlį —
tapatų pateikimą, kuriame kiekvieno signalo laisvo teksto turinys
pakeičiamas į `[redacted-video-transcript]`, sukurtą pakeičiant
struktūrizuotą signalo lauką prieš suformuojant eilutę (niekada
neparsingant suapvalinto teksto, todėl joks signalo turinys —
priešingas ar įprastas, įskaitant turinius, kuriuose yra `]`, pvz.,
`[inaudible]`/`[music]` — negali išgyventi). Išsaugotas užklausos
žurnalo kūno keičia kiekvieną vaizdo gautą teksto dalį į tą redaguotą
šešėlį, atitinkantį turinio lygybę; `fullText` ankeris yra perskaitytas
iš baigto prieš užklausos saugumo krovinio, todėl atitikimas vis dar
pavyksta po vėlesnių grandinės saugumo ženklų (PII ir
akreditavimo maskuotojai, prioritetai 10/95) perrašant aprašymo tekstą
vietoje ir po sistemos-prompto/perdavimų/atminties injekcijos
performuojant žinutės masyvą. Kūnas, siunčiamas aukštyn modeliui, lieka
nepakitęs. Stebima užklausa taip pat nepildo jokios patvarios atminties
(abiejų užklausos ir atsakymo gautų ištraukų praleidimas), todėl
modelio atsakymas negali atkartoti transkripto teksto atmintyje.

**Žalių vaizdo laukų (#12430).** Kai tiltas yra įjungtas ir natūralus
vaizdo palaikymas yra nežinomas arba nebūdingas, apibrėžti `transcript`/
`audioTranscript` laukai taip pat aktyvuoja `videoBridgeObserved`,
net ir po aprašymo nesėkmės arba `maxVideos` ribos. `null` ir tušti
eilutės skaičiuojami; trūkstami laukai ir nevaizdo metaduomenys
neskaičiuojami. Išlaikyti kopijos redaguoja šiuos laukus arba praleidžia
užklausą, o talpyklos/Atmintis yra apeinamos. Teikėjo krovinys lieka
nepakitęs.

Papildomi išlaikyti kopijos naudoja tą pačią stebimą užklausos signalą. Žaliavos
prieš-apsaugos kliento užklausos momentinė nuotrauka, atmintyje laukiančios užklausos ir ankstyvo
atmesto užklausos žurnalo struktūriškai pakeičia transkripto laukus vaizdo dalyse;
eilutės užklausos, sukurtos per pipeline etapus ir konteksto perdavimą, yra redaguojamos
pasilikusios užklausos kūno nuotekio. Išlaikytas `video_content_removed` žymeklis
sukelia `previous_response_id` tęstinumo nesėkmę, o ne atkuria tekstą, kuris buvo
sąmoningai atmestas. Jei stebima užklausa praranda savo
per dalį redagavimo šešėlį prieš registruojant, arba net jei viena iš kelių vaizdo šešėlių
neatitinka po vėlesnių užklausos mutacijų, išlaikytas užklausos kūnas
visiškai praleidžiamas, o ne išlaikomas dalinai redaguotas transkriptas.

Stebimos užklausos atveju modelio atsakymas gali cituoti bet kurią transkripto dalį
be struktūrinės cue ribos. Todėl jos išlaikytas skambučio žurnalo
`responseBody` yra pakeistas praleidimo žymekliu; išsamus
pipeline artefaktas (kuris gali apimti upstream/kliento kūnus ir srauto dalis)
nėra išlaikomas. Semantinės, idempotencijos ir mąstymo-perdavimo talpyklos apeina
skaitymus ir rašymus šiai užklausai. Paslaugų teikėjo užklausa ir klientui matomas
atsakymas lieka nepakitę. Ankstyvi keepalive baitai yra išleidžiami iš laikino
buferio, kai išsamus artefaktas yra praleidžiamas. Kiro netinkamas EventStream
įspėjimas praneša tik apie naštos baitų skaičių, niekada apie jos turinį ar JSON
analizatoriaus žalią klaidą.
Tai nepretenduoja, kad kiekviena nesusijusi paslaugų teikėjo/plugin diagnostika buvo
audituota; platesnis išlaikytos nuotekos valymas yra stebimas #11658.

Vidinė `/api/modality-bridge/video/drilldown` gyvavimo ciklo sistema yra atskira,
loopback/token-authenticated talpyklos substratas. Kiekvienai operacijai taip pat reikia
kanoninio nepermatomo pagrindinio ID. Prieš įgalinant gamybos skambintoją, jis turi
gauti tą ID iš autentifikuoto nuomininko ir niekada neturi perduoti
kliento pasirinkto vertės. Talpyklos raktai sieja tą pagrindą su kanoniniais sesijos ir
vaizdo nuorodų ID, saugo tik jų SHA-256 gautus raktus ir riboja tiek skaitymus,
tiek ištrynimus tam pačiam pagrindui. Talpykla saugo ne daugiau kaip 16 gautų JPEG
rėmų kiekvienam įrašui, pasibaigia po dešimties minučių ir palaiko ribotus
`start`/`end` skaitymus arba aiškų sesijos ištrynimą.

Kiekvienas pagrindas yra ribotas iki 16 įrašų ir 64 MiB kanoninių JPEG duomenų. Šios
ribos yra nepriklausomos nuo globalios 64 įrašų/256 MiB lubų: pagrindo kvotos
spaudimas ištrina tik to pagrindo mažiausiai neseniai naudotus įrašus prieš globalų
LRU ištrynimą. Pasibaigę įrašai yra išvalomi tiek iš pagrindo, tiek iš
globalios apskaitos talpyklos veikloje, o atšaukimas ir patikros nesėkmė
neįvykdo dalinio pakeitimo.

Talpykla atmeta nekanoninius Base64, perteklinius užpildus, ne-JPEG medijas, netinkamus ar
trumpus JPEG ir JPEG, kurie sukelia įspėjimą riboto pilno vaizdo `sharp`
dekodavimo metu. Ji iš naujo koduoja kiekvieną priimtą vaizdą kaip kanoninį JPEG, išgauna plotį ir aukštį
iš dekoduotų baitų, o ne pasitiki skambintojo laukais, ir atmeta bet kokius seklius
poliglotinius baitus, o ne juos išlaiko. Tik ribotas kanoninis suspaustas buferis
yra įkainojamas abiem kvotoms. JSON laidų limitas apima Base64 papildomus kaštus 32 MiB
dekoduoto įvesties luboms. Kiekvienas
saugomas išvestis registruoja savo patvirtintą JPEG formatą/rezoliuciją, mėginių politiką,
išvesties versiją, sukūrimo laiką, serverio apskaičiuotą turinio hash, ir hash'ą tėvų
nuorodai plius patikimo skambintojo tėvų turinio hash. Atšaukimas tikrinamas
tarp asinchroninių dekodavimo/hash fazių prieš atominius talpyklos įsipareigojimus.

Gamybos gamintojas pakartoja jau gautus brokerio rėmus tik po sėkmingos
vizualinės analizės, be antro vaizdo atsisiuntimo/ekstrakcijos. Jis reikalauja operatoriaus
`modalityBridgeVideoDrilldownEnabled=true`, griežto per dalį `drilldown: true`, ir
autentifikuoto API rakto įrašų ID. Kliento deklaruoti pagrindo/sesijos vertės niekada
nesukuria nuosavybės. Be visų trijų sąlygų jis nehashina, nekeičia dydžio ar išlaiko
papildomų rėmų. Išlaikymo nesėkmė išsaugo naudojamą vizualinį atsakymą. Sutikti
užklausimai apeina viso vaizdo rezultatų talpyklą, todėl talpykloje saugomi rezultatai niekada neperduoda rankenų.

Sėkmingi JSON ir SSE atsakymai atskleidžia ne daugiau kaip keturis nepermatomus
rankenų ribotame `x-omniroute-video-drilldown` antraštėje. Įgalioti naršyklės šaltiniai gali skaityti tą antraštę
be CORS šaltinio politikos plėtimo. Naujos rankenos naudoja `v1.<32-byte random base64url
token>`, o registras išlaiko tik
jų SHA-256 hash'us. Skaitytojas/antraštės analizatorius taip pat priima senus 64-hex raktus.
Autentifikuotas viešas vartotojas yra
`GET /api/v1/video-bridge/drilldown?handle=...`, nepriklausomai uždarytas
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Aiškus išlaikytas neteisingas atšaukia
prieigą net kai senas `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` aplinkos
atsarginis planas yra įjungtas. Gamybos išlaikymas turi analogišką seną
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` atsarginį planą. Abu atsarginiai planai pagal numatytuosius nustatymus yra išjungti.

Vartotojas gauna nuosavybę iš autentifikuoto rakto, taiko rakto politiką ir
grąžina tą patį 404 nežinomiems, pasibaigusiems ir kito rakto rankenoms. Jis priima
`variant=preview|standard|detail` (maksimalus JPEG matmuo 320/640/1280, niekada nepadidintas),
`limit=1..8` (arba seną `frames` alias, niekada abu), nulinis `page`, ir pasirenkamus
`start`/`end` fokusavimo sekundes. Dublikuoti
užklausų raktai ir atvirkštiniai fokusavimo langai yra atmetami. Kiekvienas grąžintas variantas turi hash
savo tikro turinio ir tikros rezoliucijos metaduomenų, susietų su išlaikytu šaltiniu.
Variantai yra gaunami skaitant, o ne saugomi kaip papildomos išlaikytos kopijos. JSON
atsakymas, įskaitant Base64/envelope, yra ribojamas iki 32 MiB; per didelis puslapis grąžina
413, o klientas turi prašyti mažiau rėmų. Skaitymai tikrina atšaukimą aplink kiekvieną
dydžio keitimą ir dar kartą tikrina rankenų galiojimą prieš grąžinant. `DELETE` pagal savininką yra idempotentinis;
ištrynimas arba TTL pasibaigimas atleidžia išlaikytą šaltinį ir naudojimo apskaitą.

Bendras saugykla yra proceso vietinė: rankenos pasibaigia perkrovus ir nėra perkeliamas
tarp nepriklausomų OmniRoute procesų. Valdymo statistika atskleidžia efektyvią išlaikymo/
nuotolinę politiką ir agreguoja išlaikytus įrašus/baitus tik, niekada ne medijas, nuorodas,
pagrindinius ID ar rankenas. Vaizdo nustatymų skydelis rodo tuos vertes ir gali išlaikyti
abu sutikimo perjungimus. Ši įgyvendinimo dokumentacija nėra gyvos diegimo ar
skatinimo įrodymas; realaus modelio priėmimas stebimas atskirai.

Rėmeliai yra antraštinami nuosekliai su sukonfigūruotu Vaizdo modeliu. Tuščias
Vaizdo perrašymas paveldi Vizijos nustatymą; jei abu yra tušti, Vizijos
automatinis maršrutizatorius pasirenka efektyvų viziją turintį modelį. Sėkmingos antraštės
pakeičia originalią dalį su stabilia `[Video description:` prefiksu, kuris taip pat
žymi tekstą kaip nepatikimą medijos gautą stebėjimą ir sako žemyn srauto
modeliams nesekti instrukcijų, rastų medijoje. Rėmelio antraštės talpyklos raktai
apima JPEG baitus, užklausą, laiko žymę ir efektyvų modelį; tik sėkmingos
antraštės yra talpinamos. Talpyklos įrašai išlaiko faktinį sėkmingą gamintojo modelį,
įskaitant atsarginį modelį; tiltas praneša `mixed`, kai skirtingi rėmeliai
buvo pagaminti skirtingų modelių. Talpyklos pataikymas pakartoja tą gamintojo tapatybę
vietoj to, kad pervadintų ją kaip prašomą maršrutizavimo planą. Visas vaizdo rezultatas
talpykla yra raktas kiekvienam įvedimui, kuris keičia išvestį — užklausa, efektyvus
modelis, mėginių ėmimo politika, rėmelių skaičius, semantinės analizės režimas, SHA-256
pirštų atspaudas normalizuoto fokusavimo užuominos, fokusavimo langas, `transcript`,
`audioTranscript` ir kontaktinės lentelės vėliava — todėl bet koks šių
dimensijų pakeitimas yra talpyklos praleidimas, niekada nepasenęs pakartojimas. Vizualios
dedup politikos versija, slenkstis ir ribotas kandidatų rėmelių skaičius taip pat yra aiškūs
rezultato talpyklos rakte ir metaduomenyse; politikos pakeitimas todėl negali pakartoti
pasenusio viso vaizdo aprašymo. Rezultato talpyklos v4 metaduomenys išlaiko režimą ir
pirštų atspaudą, niekada ne žalią vartotojo užduotį. Apsaugos metaduomenys praneša tiek
prašomus, tiek efektyvius analizės režimus; prašomas `focused` režimas be
naudojamo vartotojo teksto pranešamas kaip efektyviai `full`.

Apsauga išskiria kiekvieną palaikomą vaizdo dalį, tačiau aprašo ne daugiau kaip
`modalityBridgeVideoMaxVideos`. Tikslui, kuris įrodytas turint
`supportsVideo === false`, nepavykę ir viršijantys limitą vaizdo įrašai tampa aiškiais
saugiais tekstiniais žymenimis, todėl jokie žali vaizdo įrašai neišlieka. Kai galimybė
yra nežinoma, tos dalys lieka nepaliestos. Tikslai su `supportsVideo === true`
aplenkia tiltą. Kliento užklausos nutraukimo signalas plinta per atsisiuntimą, brokerio eilę,
pogrupius ir antraščių skambučius; nutraukimai sustoja tarp vaizdo įrašų ir niekada
nepavyksta atvirai į žalią mediją.

Veikimo nustatymai yra DB palaikomi ir Zod patvirtinti:

| Raktas                              | Numatytoji  | Diapazonas / elgesys                                                                                    |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Pasirinktinė veikimo, opt-in                                                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` išlaiko bendrąsias antraštes; `focused` naudoja ribotą, nepatikimą naujausio vartotojo kontekstą |
| `modalityBridgeVideoModel`          | `""`        | Paveldi Vizijos tilto modelį                                                                            |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                    |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` arba proporcingas `segment_aware`; detektoriaus nesėkmė grįžta prie `uniform`  |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                     |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                          |

Paveldėti išlaikyti Vaizdo laiko limitai virš 120 sekundžių yra apriboti
brokerio termino; nauji nustatymai, viršijantys tą ribą, yra atmetami.
`GET /api/modality-bridge/video/runtime` reikalauja patikimo antspauduoto loopback
lokalumo prieš autentifikaciją ar veikimo tyrimą, tada reikalauja valdymo
autentifikacijos. Jis grąžina tik `available`, sanizuotas FFmpeg/ffprobe versijas ir fiksuotą
priežastį, kai veikimas nėra prieinamas. Vidinis ištraukimo galas nėra
vieša įkėlimo API: eilės prisotinimas grąžina `503` plius `Retry-After`, skambintojo
atsijungimas grąžina `499`, o fiksuotas brokerio terminas grąžina `504`. Paversti atsakymai prideda
`video->text;model=<visionModel>;parts=<videos>` prie centrinio
`x-omniroute-modality-bridge` antraštės, nepašalinant Vizijos ar Garso segmentų.

### PII Masker (`piiMasker.ts`)

Veikia **abu** etapus.

- **`preCall`** kopijuoja naštą, pereina per `system`, `messages`, `input` ir
  `prompt` (įskaitant paprastus eilutės elementus) ir taiko `processPII()` (iš
  `@/shared/utils/inputSanitizer`) į eilutės `content`/`text` laukus. Kai
  `PII_REDACTION_ENABLED=true`, aptiktas PII yra pašalinamas iš išorinės
  naštos. Tai nepriklauso nuo `INPUT_SANITIZER_MODE` (kuris tik kontroliuoja
  užklausos injekcijos politiką). Kai pašalinimas yra išjungtas, skambutis fiksuoja
  aptikimo skaičius, neperrašydamas turinio.
- **`postCall`** giliai kopijuoja atsakymą, vykdo `sanitizePIIResponse()` plius
  Atsakymų-API-formos maskuotoją (`maskResponsesOutput` — apima
  `output_text` ir `output[].content[].text`). Jei įvyksta bet koks pašalinimas,
  modifikuotas atsakymas pakeičia originalą.

Apsauga niekada neužblokuoja; ji tik anotuoja (`meta.detections`,
`meta.redacted`) arba perrašo.

### Užklausos injekcija (`promptInjection.ts`)

Aptinka priešiškas struktūras vartotojo pateiktame turinyje ir taiko
konfigūruotą politiką. Elgesys priklauso nuo aplinkos kintamųjų ir konstruktoriaus
parinkčių:

| Nustatymas          | Aplinkos kintamasis                                                                                      | Numatyta | Efektas                                                                                                                                                                                                     |
| ------------------- | -------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Įjungta             | `INPUT_SANITIZER_ENABLED`                                                                                | `true`   | Kai `false`, apsauginė juosta trumpai nutraukia veikimą.                                                                                                                                                    |
| Režimas             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                          | `warn`   | Įpurškimo politika: `block`, `warn` arba `log`. (`redact` priimamas atgalinio suderinamumo tikslais, bet **nes** pašalina įpurškimo tekstą; PII perrašymo užklausa kontroliuojama `PII_REDACTION_ENABLED`.) |
| Blokavimo slenkstis | `blockThreshold` parinktis / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Minimalus rimtumo lygis, reikalingas blokavimui. Vidutinis yra tik stebėjimo režime pagal numatytuosius nustatymus.                                                                                         |

**Režimo pirmenybė** (`getMode`): skambintojo `options.mode` →
`INJECTION_GUARD_MODE` **DB funkcijos vėliavos perrašymas** (Dashboard → Nustatymai →
Funkcijų vėliavos) → `INJECTION_GUARD_MODE` aplinkos kintamasis → `INPUT_SANITIZER_MODE` aplinkos kintamasis →
`warn`. Taigi, valdymas per valdymo skydelį laimi prieš aplinkos kintamuosius, todėl Funkcijų
vėliavos UI valdo veikiančią apsaugą tiesiogiai (be perkrovimo). DB skaitymas yra saugus:
jei įvyksta klaida, apsauga grįžta prie aplinkos pagrindu veikiančio elgesio, o kai nėra
perrašymo, elgesys yra identiškas aplinkos tik sprendimui.

Aptikimo šaltiniai:

1. `sanitizeRequest()` iš `@/shared/utils/inputSanitizer` (bendras detektorius
   rinkinys, naudojamas kitur pipeline'e).
2. Įmontuoti `DEFAULT_GUARD_PATTERNS` (šiuo metu `system_override_inline` ir
   `markdown_system_block`, abu `high` rimtumo).
3. Pasirinktiniai `customPatterns`, perduodami per konstruktoriaus parinktis (eilutės, regex,
   arba `{ name, pattern, severity }` įrašai).

Kai `mode === "block"` **ir** bent vienas aptikimas atitinka rimtumo
slenkstį, `preCall` grąžina `{ block: true, message: "Užklausa atmesta:
aptiktas įtartinas turinys" }`. `warn`/`log` režimu apsauginė juosta registruoja, bet
leidžia skambutį. Bendras pagalbinis `evaluatePromptInjection()` taip pat eksportuojamas
skambintojams, kuriems reikia įvertinti užklausas, neperėjus per registrą.

**Skenavimo riba (v3.8.20):** detektorius tikrina **pirmus 16 KB**
sujungto užklausos teksto — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 baitai) `src/shared/utils/inputSanitizer.ts`. T tanto `detectInjection()` tiek
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` prieš vykdant
šablono ciklą. Įpurškimo direktyvos yra arti įvesties viršaus, todėl tai
apriboja regex CPU/GC dideliuose kelių šimtų KB apkrovose, nesumažinant aptikimo (cf.
#3932, #4041).

### Kredencialų maskuotojas (`credentialMasker.ts`)

Veikia **abu** etapus, paskutinis numatytoje grandinėje (prioritetas `95`). Pašalina
gerai žinomus API rakto / slaptažodžio šablonus iš išėjimo apkrovos (žinutės
turinys, įrankio kvietimo argumentai, įrankio rezultatai) **ir** tiekėjo atsakymo, todėl
kredencialas, įklijuotas į užklausą (arba grąžintas įrankio rezultatu), nėra nutekintas
į aukštesnį tiekėją ar atgal į klientą.

- **Pasirinktinai**, ta pati konvencija kaip PII redagavimui (Griežta taisyklė #20):
  išjungta, nebent `settings.credentialRedactionEnabled === true` **arba**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kai ji išjungta, apsauginė juosta neveikia —
  ji niekada neblokuoja ir niekada neperrašo.
- `redactCredentials()` pereina visą apkrovos/atsakymo medį (`walkValue()`,
  prototipo užteršimo saugus, ciklo saugus per `WeakSet`) ir pakeičia atitikmenis su
  `[REDACTED:<type>]` vietininku, klonuodama tik tas šakas, kurios iš tikrųjų
  pasikeitė.
- `CREDENTIAL_PATTERNS` apima LLM tiekėjų raktus (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS žetonus (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), mokėjimo raktus (Stripe, Square), debesų
  raktus (AWS prieigos raktas, Twilio, SendGrid, Mailgun), privačius raktus / JWT,
  kredencialus turinčius prisijungimo eilutes (`mongodb://user:pass@...`, ir kt.), ir
  bendrą `Authorization`/`x-api-key`/`api-key`/`apikey` antraštės-reikšmės
  šabloną. Antraštės formos raktai (`authorization`, `x-api-key`, `api-key`,
  `apikey`) yra redaguojami struktūriškai (tik reikšmė, schemos prefiksas, pvz.,
  `Bearer `/`Basic ` išsaugomas) o ne per bendrą tekstinį regex.
- Apsauginė juosta niekada neblokuoja; ji tik perrašo (`modifiedPayload` /
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
