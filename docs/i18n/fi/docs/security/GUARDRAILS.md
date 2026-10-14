# Guardrails (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Totuuden lähde:** `src/lib/guardrails/`
> **Päivitetty viimeksi:** 2026-08-29 — v3.8.51 (Video Bridgen transkription alkuperän ilmoittaa kutsuja,
> eikä palvelin vielä varmista sitä — selvennetty kohdan #11661 mukaisesti)

Suojaukset toteuttavat turvallisuus-, käytäntö- ja sisältömuunnokset OmniRouten
ja ylävirran palveluntarjoajien välisellä rajalla. Kukin suojaus voi tarkastaa
(ja valinnaisesti hylätä, muuntaa tai annotoida) pyyntöjen hyötykuormia
(`preCall`) ja ylävirran vastauksia (`postCall`).

Järjestelmä on **häiriötilanteessa salliva**: jos suojaus aiheuttaa poikkeuksen
suorituksen aikana, rekisteri kirjaa virheen ja jatkaa seuraavaan suojaukseen
sen sijaan, että pyyntö epäonnistuisi. Estäminen on aina nimenomainen päätös
(`block: true`), ei koskaan vahinko.

## Sisäänrakennetut Guardrails

Rekisteri lataa automaattisesti kuusi guardrailia prioriteettijärjestyksessä tuonnin yhteydessä
(ks. `registry.ts` → `registerDefaultGuardrails()`):

| Prioriteetti | Nimi                | Vaihe(t)       | Tiedosto              |
| ------------ | ------------------- | -------------- | --------------------- |
| `5`          | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`          | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`          | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`         | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`         | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`         | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Alhaisemmat prioriteettinumerot suoritetaan **ensin**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Kaappaa kuvaa sisältävät pyynnöt, jotka on suunnattu **ei-näkömalleille**, ja joko
ohjaa koko pyynnön näkökykyiseen malliin tai korvataan kuvan
osat tekstikuvauksilla, jotka tuottaa konfiguroitava näkömalli ennen
ylävirran kutsua. Tämä mahdollistaa pelkästään tekstipohjaisten tarjoajien käsitellä
monimuotoisia kuormia läpinäkyvästi.

Virta:

1. Ohita, jos kohdemalli tukee jo näköä (ellei se ilmesty
   pakotettujen siltojen listalle `isVisionBridgeForcedModel`).
2. Poimi kuvaosat `extractImageParts(messages)`-kutsun avulla
   (`visionBridgeHelpers.ts`), joka delegoi **yhtenäiselle media
   tunnistimelle** `detectMediaParts()` tiedostossa `open-sse/utils/mediaParts.ts` —
   ainoa totuuslähde, jota jaetaan yhdistelmäyhteensopivuussuodattimen kanssa.
   Poiminta on sallittu vain ykköstason osille, joita
   `replaceImageParts` voi liittää takaisin (poimi↔korvaa-sopimus): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, ja Responses API `input_image`. Sisäkkäiset osumat ja
   vain indikaattorimuodot ovat yhdistelmäsuodatinmateriaalia, eikä niitä koskaan poimita.
   Ohita, jos mitään ei löydy.
3. Ratkaise ajonaikainen konfiguraatio `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): uudet `modalityBridge*`
   asetusten avaimet voittavat; vanhat `visionBridge*` avaimet pysyvät **yksi-sykli
   varajärjestelmänä** (palautusikkuna). Ohita ennen mitään media-kävelyä, kun
   silta on poistettu käytöstä.
4. Moodin valitsin (`modalityBridgeVisionMode`, ks. taulukko alla) päättää
   ohjata vs kuvata. Ohjaus palauttaa `modifiedPayload` vain `model`
   vaihdettuna, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Kuvauspolku: rajoita kuvat `maxImages`-arvoon, koostaa tehtäväkohtaisen kehotteen,
   tarkista kuvauskätkö, kutsu näkömallia **samanaikaisesti**
   (`Promise.allSettled`), ja injektoi `[Image N]: <description>` tekstiosat niiden paikalle. Epäonnistunut kuvaus tuottaa `null` ja alkuperäinen kuvaosa on
   **säilytetty** (#4012) — paitsi yhdistelmäkuvauspolulla, kun jokainen
   kuvaus epäonnistui, jolloin vahvistettu ei-näkö ylöspäin saa
   `(unavailable — no vision-capable provider connected)` -stubin sen sijaan (#8430).
6. Palauta `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Moodin valitsin (`modalityBridgeVisionMode`)

| Moodi      | Oletus | Käyttäytyminen                                                                                                                                                                                                                                                                      |
| ---------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Vanha heuristiikka, koskematon (#6640/#7204): ei-yhdistelmä/`auto/` mallit ohjaavat parhaiten näkömalliin, ellei alkuperäisellä mallilla ole käytettäviä tunnistetietoja (silloin kuvaa); yhdistelmäkohteet kuvaavat aina.                                                          |
| `describe` |        | Kuvaa aina — ohjauslohko ohitetaan kokonaan; käyttäjän valitsema malli vastaa aina.                                                                                                                                                                                                 |
| `reroute`  |        | Pakota ohjaus: säilytä-tunnistetietomalli -guard ohitetaan. Ohjaus-**kohteen** tunnistussuoja on edelleen voimassa — kun käytettävää näkökohdetta ei ole, pyyntö siirtyy kuvaamiseen, joten raakakuvat eivät koskaan saavuta pelkästään tekstipohjaista taustajärjestelmää (#8430). |

Pakotetut moodit lyhentävät **ennen** automaattista heuristiikkaa; `auto` käyttäytyminen
on tismalleen sama kuin pre-PR-1 guardrail.

#### API-avainalue (`visionBridgeKeyScope.ts`)

Kun kutsujan API-avain rajoittaa `allowedConnections`, kiintiöaltaat
(`allowedQuotas`) tai mallit (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), silta valitsee vain
ohjaus- ja kuvausmalleja, joita avain voi käyttää, niissä yhteyksissä, joita avain voi
käyttää. Kuvauskutsu kulkee aina OmniRoute-itsekierron kautta
`x-omniroute-self-loop-key-id`-otsikolla, joten vastaanottava chat-pyyntö
valvoo jälleen kyseisen avaimen yhteys- ja mallipolitiikkaa. `enforceApiKeyPolicy()`
kunnioittaa tätä otsikkoa vain yhdessä itsekierron kantajan kanssa, joten se voi vain
supistaa pääsyä, ja id, joka ei ratkea, hylätään.

Jos avaimelle ei sallita mitään näkömallia, kuvauspolku väistää ja
pyyntö kulkee muuttumattomana, sama epäonnistuminen-avoimena käyttäytyminen kuin poistettu guardrail (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Pyynnöt ilman avainta ja avaimet ilman näitä rajoituksia käyttäytyvät tarkalleen kuten ennen.

#### Tehtäväkohtainen kuvauskehotus (`modalityBridgeVisionTaskAware`)

Oletusarvo **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) liittää
**viimeisen käyttäjäviestin** tekstin (lyhennettynä 500 merkkiin) perus
kuvauskehotteeseen, ohjaten kuvausta siihen, mitä käyttäjä oikeasti kysyi
(codex-vision-proxy -malli) ja pyytää visiomallia transkriboimaan näkyvää
tekstiä. Kun lippu on pois päältä — tai ei ole käyttäjätekstiä — peruskehotetta
käytetään muuttamattomana.

Kuvaus itse-silmukka OpenAI-yhteensopivassa pyynnössä (`callVisionModelSingle()`
tiedostossa `visionBridgeHelpers.ts`) pyytää aina `image_url.detail: "high"` —
ehdottomasti, jokaiselle kutsujalle/toimittajalle, ei ole riippuvainen mistään
asiakassignaalista. Alhaisen yksityiskohtaisuuden näytteenotto heikentää OCR:n
tarkkuutta juuri siinä tekstin transkriptiotehtävässä, jota tämä kehotus
pyytää, joten kuvauspyyntö itsessään pyytää aina korkeaa yksityiskohtaisuutta
riippumatta siitä, mitä yksityiskohtaisuusastetta alkuperäinen saapuva pyyntö
käytti. Tämä vaikuttaa vain sisäiseen kuvauspyynnön runkoon; se ei muuta
sitä, miten OmniRoute välittää kutsujan oman `image_url.detail` ensisijaisessa
pyynnössä — tuo oletus sovelletaan erikseen, ja vain havaittuille OpenCode
asiakkaille, `defaultImageDetail()`-funktiossa (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropicin langanmuotoisen kuvaus itse-silmukan haaralla ei ole `detail`-kenttää
eikä se vaikuta kumpaankaan oletukseen.

#### Kuvausulostulon raja (`modalityBridgeVisionMaxChars`)

| Avain                          | Oletusarvo | Vaihtoehdot       |
| ------------------------------ | ---------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`        | `0` tai 100–50000 |

`0` (oletusarvo) tarkoittaa **ei rajaa** — `callVisionModel()` palauttama
kuvaus kulkee läpi muuttamattomana, säilyttäen olemassa olevan
käyttäytymisen. Mikä tahansa arvo 100–50000 -alueella lyhentää kuvausta
`…`-liitteellä ennen kuin se yhdistetään takaisin muotoon `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` tiedostossa `src/lib/guardrails/visionBridge.ts`).
Nosta tätä yksityiskohtaisille OCR-tehtäville, joissa alhaalla oleva malli
tarvitsee täydellisen transkription; laske se rajoittamaan token-käyttöä
keskustelevalle visiomallille. Hallintapaneelin kenttä sijaitsee Vision-välilehden
Lisäasetukset-paneelissa (`modality-bridge-max-chars` tiedostossa `ModalityBridgeVisionTab.tsx`)
ja rajoittaa minkä tahansa arvon 1 ja 99 välillä 100:aan, samalla kun
ilmaista `0`-arvoa ei kosketa — `0` on itsessään voimassa oleva Zod-arvo
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ei vain
"asetettu" oletus.

#### Kuvausvälimuisti (`modalityBridge/bridgeCache.ts`)

Muistiin perustuva LRU + TTL välimuisti kuvausulostuloille, jaettu prosessin laajuisesti.
Avain = `sha256(imageRef + composedPrompt + configuredBridgeModel)` pituus-etuliitteellä
(ilman kenttärajojen törmäyksiä). Mallikomponentti on **konfiguroitu** silta malli,
ei malli, joka todella vastasi — `callVisionModel` voi sisäisesti palata
takaisin, ja avaimen asettaminen yrityksen mukaan hajottaisi välimuistin.
Epäonnistuneita kuvauksia ei koskaan välimuistita. Asetukset:

| Avain                           | Oletusarvo | Vaihtoehdot |
| ------------------------------- | ---------- | ----------- |
| `modalityBridgeCacheEnabled`    | `true`     | —           |
| `modalityBridgeCacheTtlMinutes` | `60`       | 1–1440      |
| `modalityBridgeCacheMaxEntries` | `200`      | 10–5000     |

#### Etäkuvan normalisointi (itse-silmukka kuvaus/base64-haku)

Kun silta hakee **etä**kuvaa itse — Anthropicin kuvaus itse-kutsu ja claude-langamuotoisen
base64-muunnoksen (`ensureBase64ImagesForClaudeWire`), molemmat kautta
`fetchRemoteImageAsDataUri()` tiedostossa `visionBridgeHelpers.ts` — tuloksena oleva data
URI kulkee `normalizeDataUri()`-funktion läpi
(`open-sse/utils/imageNormalize.ts`) ennen kuin se upotetaan visiomallin
pyyntöön. Yli kokoiset kuvat pienennetään **2048px pitkään reunaan** (vastaa
kokoistusta, jota OpenAI/Anthropic jo soveltaa palvelinpuolella), mikä vähentää
latausbitejä/viivettä muuttamatta sitä, mitä visiomalli näkee. Kokoistaminen
käyttää `sharp`-kirjastoa, joka ladataan dynaamisen tuonnin kautta: alustalla,
jossa sen natiivi binaari ei lataudu, `normalizeDataUri()` **ei koskaan heitä**
poikkeusta — se palaa alkuperäisten baittien läpivientiin, joten kuvaus/base64-muunnos
polku toimii aina. Ei-kuva baitit (haku, joka ei palannut dekoodattavaa kuvaa)
kulkevat myös läpi muuttamattomina. Tämä normalisointi on rajattu kuviin, joita
silta hakee omaa itse-kutsua varten — sitä ei koskaan sovelleta kutsujan
raaka läpivientikuormaan, johdonmukaisesti opt-in vain muutosperiaatteen
(kova sääntö #20) mukaisesti.

#### Asetusten skeema + migraatio

Uudet `modalityBridge*` avaimet ovat Zod-validated `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*` -trio, ja
`modalityBridgeAudio*` -ryhmä, jota Audio Bridge käyttää. Migraatio
`141_modality_bridge_settings.sql` kopioi olemassa olevat perintö
`visionBridge*` arvot vastaaviin uusiin avaimiin (idempotentti, ei koskaan
ylikirjoita operaattorin asettamaa `modalityBridge*` arvoa); perintöavaimet
säilyvät hyväksyttävinä lukemisen varalta yhden julkaisusyklin ajan.

#### Läpinäkyvyysotsikko + tilastot

Kuvaus-muunnellut vastaukset sisältävät
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(rakennettu `buildModalityBridgeHeader()`-funktiolla tiedostossa
`modalityBridge/bridgeStats.ts`, leimattu `withModalityBridgeHeader()`-funktiolla
tiedostossa `src/sse/handlers/chatHelpers.ts`). Uudelleenohjatut pyynnöt
eivät saa **mitään** otsikkoa — kuorma oli muuttamaton ja mallinvaihto on
jo näkyvissä vastauksen rungon `model`-kentässä.

`GET /api/modality-bridge/stats` (hallinta-autentikointi, sama taso kuin
`GET /api/settings`) palauttaa muistin sisäiset per-modality laskurit
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` arvoille `vision`, `audio` ja
`video`. `averageLatencyMs` käyttää `latencySamples`, ei kaikkia yrityksiä, nimittäjänä; aikarajattomalla toiminnolla ei synny nollamillisekunnin
näytettä. `bridged` pysyy taaksepäin yhteensopivana aliasina onnistuneille
muunnoksille; epäonnistuneet yritykset eivät lisää sitä.
Laskurit nollautuvat prosessin uudelleenkäynnistyksessä suunnitelman mukaan
(telemetria, ei kirjanpito).

#### Dashboardin konfigurointi

Omistettu dashboard-sivu on
`/dashboard/settings/modality-bridge`. Sen URL-osoitteelliset `Vision`, `Audio`,
ja `Video` välilehdet säilyttävät kyselyparametrit vaihtaessaan `tab`-arvoa.
Vision-välilehti paljastaa mahdollistamisen, tilan, mallin valinnan (mukaan lukien automaattisen
oletuksen), tehtäväkohtaisen kehotuksen, edistyneet aikaraja/kuva/kuvaus-pituus/välimuisti
rajoitukset, ajonaikaiset
laskurit ja suojatun näytteen pyynnön. Audio-välilehti on myös aktiivinen: se paljastaa
mahdollistamisen, STT-yksinomaisen mallin valitsimen Auto, aikaraja/max-leike rajoitukset, ääni
laskurit ja `input_audio` näytteen testin. Video-välilehti on toiminnallinen: se raportoi
FFmpeg/ffprobe ajonaikaisen tilan — yksi neljästä eksplisiittisestä UI-tilasta (`unknown` kun
tutkimus on käynnissä tai ei voitu suorittaa, `restricted` ei-silmukointidashboardin isäntä, jossa
tutkimus ohitetaan asiakaspuolella, `unavailable` kun tutkittu ja vahvistettu puuttuvaksi, tai
`available` FFmpeg/ffprobe versioiden kanssa) — säilyttää
enable/malli/kehys/video/aikaraja rajoitukset, suodattaa mallin valitsimen vision-kykyisille
malleille ja paljastaa video laskurit.

Entinen Vision Bridge -kortti AI-asetuksissa on yhteensopivuuslinkki
uuteen sivuun; se ei enää omista toista kopiota lomakkeesta. Media Providers myös
linkittää Kuvasta-Tekstiin ja Puheesta-Tekstiin työnkulut vastaaviin Modality
Bridge -välilehtiin poistamatta olemassa olevaa Puheesta-Tekstiin leikkikenttää.

**Itse-silmukoinnin hyväksynnän ohitus:** kun kuvauspyyntö kulkee OmniRoute:n
oman `/v1` itse-silmukan (ei-standardi tarjoajamalli) kautta, alipyynnössä lähetetään
`x-omniroute-admission-bypass: internal` ja se todennetaan ratkaistulla
itse-silmukan tunnuksella — paikallisella `sk_omniroute` vartijalla paikallisessa tilassa, tai
operaattorin määrittämällä `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` ympäristöavaimella (#1350) niin
että `REQUIRE_API_KEY=true` käyttöönotot voivat silti suorittaa kuvauspyynnön. Ohitus
kunnioitetaan vain näille tarkalleen määritellyille tunnuksille, joten ulkoiset asiakkaat eivät voi käyttää
otsikkoa hyväksynnän ohittamiseen.

Perinteiset oletusarvot löytyvät `src/shared/constants/visionBridgeDefaults.ts`; uudet
tila/tehtäväkohtaiset/välimuisti oletusarvot ja asetusten ratkaisin löytyvät
`src/shared/constants/modalityBridgeDefaults.ts`. Suojakaide paljastaa
`deps` konstruktorivaihtoehdon, jotta testit voivat injektoida vääriä `getSettings` ja
`callVisionModel` toteutuksia.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Keskeyttää ääntä sisältävät keskustelupyynnöt ennen kuin ne saavuttavat kohteen, joka ei
ole tunnettu ääniinputin hyväksymisestä. Se ei koskaan ohjaa keskustelupyyntöä uudelleen: ääniosat
käännetään olemassa olevan OpenAI-yhteensopivan moniosaisen päätepisteen kautta ja
valittu keskustelumalli jatkaa tekstikäännöksillä.

Virta:

1. Ratkaise `supportsAudio` kautta `getResolvedModelCapabilities()`. Eksplisiittinen
   tarjoajarekisterin metadata voittaa, sitten staattinen mallimetadata, sitten synkronoidut
   `modalities_input`. Ilmoitettu syöttölista ilman `audio` on `false`; ei
   kyvykkyysnäyttöä jää `null`. Sekä `false` että `null` aktivoivat
   konservatiivisen sillan, kun taas `true` ohittaa sen.
2. Ratkaise `modalityBridgeAudio*` asetukset ja poimi splicattavat ylimmät
   ääniosat jokaisesta viestistä jaetun `detectMediaParts()`
   tunnistimen kautta. Tuetut langat ovat OpenAI `input_audio`, `audio_url`, ja
   `source.media_type: "audio/*"`. Sisäiset äänet havaitaan reitittämistä varten, mutta niitä ei
   poisteta splicepolulta. Työ on rajattu `modalityBridgeAudioMaxClips`-arvoon;
   myöhemmät osat pysyvät koskemattomina.
3. Kunnioita määritettyä `provider/model`, tai anna `selectAudioBridgeModel()` kävellä
   `AUDIO_TRANSCRIPTION_PROVIDERS` vakaassa luettelossa ja valita ensimmäinen
   malli, jolla on käytettävissä oleva aktiivinen tarjoajatunnus.
4. `callAudioTranscription()` muuntaa base64/data-URI äänen moniosaiseksi
   `file`, tai lataa etä `audio_url` julkisen vain ulospäin suojan kautta, jossa on DNS-pinning ja 25 MB raja. Se sitten POSTaa tiedoston ja valitun
   mallin paikalliseen `/v1/audio/transcriptions` itse-silmukkaan, todennettuna
   `resolveSelfLoopBearer()`. Olemassa oleva transkriptioreitti suorittaa normaalia
   tunnistuksen hakua, jäähdytys/nopeusrajoituksen käsittelyä ja tarjoajan lähettämistä.
5. Onnistuneet kutsut korvaavat osansa `[Audio N]: <transcript>`. Kutsut
   suoritetaan `Promise.allSettled`: yksittäinen epäonnistuminen säilyttää alkuperäisen
   ääniosan (#4012 sopimus). Jos jokainen kutsu epäonnistuu ja kohteen todistetaan olevan
   `supportsAudio === false`, osat muuttuvat
   `[Audio N]: (ei saatavilla — ei STT tarjoajaa kytketty)` (#8430 sopimus). Tuntemattomalle
   kohteelle (`null`), kaikki epäonnistumiset pysyvät koskemattomina. Todistetulle
   tekstiyksinomaiselle kohteelle, jolla ei ole käytettävissä olevaa STT-tunnusta, annetaan sama eksplisiittinen
   stub ilman verkkopyyntöä.

Onnistuneet transkriptiot käyttävät prosessin laajuista Modality Bridge LRU/TTL välimuistia. Avaimen
yhdistää äänen viittaus, vakaa `audio-transcription` toimintotunnus
ja valittu STT-malli; epäonnistumisia ei koskaan välimuistita. Ääniyritykset päivittävät
jaettua `bridged`, `cacheHits`, `failures`, ja `lastUsedAt` laskuria.
Muunnetut vastaukset sisältävät
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; koskemattomat
pyynnöt eivät saa Audio Bridge -segmenttiä.

Ajonaikaiset asetukset ovat DB-taustaisia ja Zod-validated:

| Avain                         | Oletusarvo | Vaihtoehdot     |
| ----------------------------- | ---------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`     | —               |
| `modalityBridgeAudioModel`    | `""`       | Auto tai STT ID |
| `modalityBridgeAudioTimeout`  | `60000`    | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`        | 1–10            |

Jaettu välimuisti pysyy hallinnassa `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ja `modalityBridgeCacheMaxEntries` avulla.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Kaappaa ylimmän tason videokomponentit Chat Completions `messages` ja Responses
API `input` ennen kuin kohde, jolla ei ole tunnettua natiivivideotukea, kutsutaan.
Tuetut muodot ovat `input_video`, `video_url`, `video_source`, HTTPS-URL-osoitteet,
ja `data:video/*;base64,...` data URI:t. Pelkkiä tiedostonimiä tekstissä ei käsitellä
videona.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) vastaa pyyntöjen kulusta,
kyvykkyys/politiikkatarkistuksesta, pyyntökohtaisesta aggregoinnista ja vastauksen
kuormasta. Jokaisen videon työ — hankinta, koko tuloksen välimuisti, kehyksen
sekvenssin kuvaaminen (joka yhdistää kaikki kutsujan määrittelemät äänitallenteet) ja
yrityksittäin kerätyt mittarit/peruutus/puhdistus — on piilotettu `processVideoPart`-kutsun
taakse `videoBridgePipeline.ts`:ssä, joka kutsutaan kerran per videokomponentti
`preCall`-silmukan sisällä. Tämä moduuli määrittelee myös eksplisiittiset porttirajat
`VideoMediaBrokerPort` (tietojen hankinta ja näytteiden kerääminen),
`VideoAudioTranscriptionPort` (yhdistää kutsujan määrittelemän äänitallenteen
näytteiden kanssa) ja `VideoDrilldownPort` (perinteinen raakavarasto). Tuotannon STT ja
kehysten säilytys koostuvat kuvaavan portin ympärille `createVideoSttAdapter` ja
`createVideoDrilldownAdapter` avulla; jälkimmäinen käyttää jaettua läpinäkyvää
käsittelysykliä.

Julkinen `/v1` pyyntöpoli ei koskaan tuo tai kutsu aliprocessia. Etävideot ladataan
50 MiB rajalla; inline base64 -videot ovat konservatiivisesti 36 MiB dekoodattua
per video, jotta malli/viestit/kehyskuori voivat pysyä julkisen JSON-pyyntöjen
hyväksymisrajan sisällä 50 MiB. Inline-pituus ja dekoodatun koon arvioinnit tarkistetaan
ennen allokointia. HTTPS on pakollinen alkuperäiselle etä-URL-osoitteelle ja jokaiselle
uudelleenohjaukselle, käyttäen olemassa olevaa julkista vain ulospäin suuntautuvaa
suojelua DNS-pinnauksella. Tiedot ylittävät tarkasti sisäisen `POST /api/modality-bridge/video/extract`
välittäjän rajan. Tämä reitti on sekä `LOCAL_ONLY` että `SPAWN_CAPABLE`, hyväksyy vain
prosessikohtaisen todennetun, luotetun silmukan pyynnön, eikä koskaan hyväksy URL-osoitetta,
tiedostopolkuja, suoritettavia tiedostoja tai argumenttiluetteloita. API:n
kehon koko-putkiprosessi ja käsittelijän inkrementaalinen kehonlukija valvovat
itsenäisesti 50 MiB välittäjän syöttörajaa. Sen rajoitettu jono suorittaa
yksi kerrallaan, sallii neljä odottavaa työtä ja rajoittaa odottavan syötteen
100 MiB:iin.

Välittäjän sisällä `ffprobe` lukee yksityistä paikallista tiedostoa; kiinteä
muotoilulista sulkee pois soittolista- ja manifestiformaatit. Sallituille MOV-perhe
konteille ulkoiset MOV-tietoviittaukset pysyvät oletusarvoisesti pois käytöstä,
eikä kiinteä komento valitse niitä. Sekä `ffprobe` että `ffmpeg` käyttävät
`file`-vain protokollan valkoista listaa, yhtä säiettä, kiinteitä argumenttitaulukoita,
ei shelliä, ja suoritettavia tiedostoja, jotka on ratkaistu `PATH`:ista. Liitetyt
kuvapeitteet eivät ole toistettavia ehdokkaita. Kaikkien toistettavien
virtojen on täytettävä rajat, ja eksplisiittinen oletusvirta on suositeltava
ennen determinististä alinta indeksiä. Videot rajoitetaan 600 sekuntiin, 8 192
pikseliin per ulottuvuus ja 33 554 432 lähdepikseliin. FFmpeg ottaa näytteitä
1–16 keskikohtaisista JPEG-kehyksistä, skaalaa pitkän reunan enintään 1 024
pikseliin ilman pienempien syötteiden suurentamista, eikä koskaan vastaanota URL-osoitetta.
Näytteenotto on oletusarvoisesti `uniform`. Valinnainen `scene_aware` ja
kokeellinen `segment_aware` politiikka suorittaa yhden lisäkiinteän FFmpeg-kierroksen
jo vahvistetulle paikalliselle virralle, valitsee rajoitettuja `showinfo`-kohtauksen
aikoja ja palaa deterministisesti samoihin tasaisiin keskikohtiin tunnistimen
epäonnistumisen, aikakatkaisun, virheellisen tulosteen tai tyhjien ehdokasjoukkojen
kohdalla. Segmentti-tietoinen tila allokoi keskikohtanäytteitä suhteessa
vahvistettuihin kohtausväleihin; segmentti-tietoisen todisteen ja varautumiskäyttäytymisen
yksityiskohdat on esitetty alla. Kova 16-kehyksen raja on
sovellettava valinnan jälkeen jokaisessa politiikassa. Kun kohtaus-tietoinen pyyntö
on vain yhden kehyksen budjetilla, se käyttää aktiivisen koko videon tai
fokusoidun ikkunan tasaisia keskikohtia ja raportoi `policyEffective: uniform`:
yksi valittu kohtauskehys ei voi säilyttää molempia ajallisia päitä. Kutsuja voi
valinnaisesti antaa rajallisen fokusoidun ikkunan (`start`/`end` sekuntia);
rajat rajoitetaan median kestoon, käänteiset tai ei-rajoitetut ikkunat hylätään,
ja kaikki näytteenottopolitiikat suoritetaan vain normalisoidun välin sisällä.
Tuloksena oleva ikkuna sisällytetään näytteenottometatietoihin ja epäluotettavan
kuvauksen etuliitteeseen, jotta alavirran mallit voivat erottaa
fokusoidun otteen koko aikajanasta.

Semanttinen tekstityksen fokus on erillinen, eksplisiittinen asetus. Oletusarvoinen
`full` analyysitila säilyttää olemassa olevan kehyskehotteen eikä koskaan
lähetä pyyntötekstiä tekstitysmallille. `focused`-tilassa silta lukee vain
viimeisimmän ei-tyhjän käyttäjän kirjoittaman `text`/`input_text` samasta
Chat- tai Responses-säiliöstä, normalisoi sen NFC:ksi, tiivistää ohjausmerkit ja
välilyönnit, ja rajoittaa sen 500 Unicode-koodipisteeseen. Tyhjät tulokset palaavat
täsmällisesti `full`-kehotteeseen. Käytettävä vihje sarjoitetaan JSON-muotoon
erityisessä epäluotettavassa käyttäjäkontekstilohkossa ja voi vain priorisoida
havaittavia yksityiskohtia; se ei voi ohittaa erillistä varoitusta
ohjeiden seuraamisesta, jotka ovat näkyviä tai kuultavissa mediassa. Tekstuaalinen
fokus ei koskaan päättele `start`/`end` tai muuta ajallista näytteenottajaa.

#### FU-07 rakenteellinen segmenttitodiste

`segment_aware` käyttää yhtä rajattua esianalyysikierrosta jo validoidusta paikallisesta videovirrasta. Kiinteä suodatinputki skaalaa ensin korkeintaan 320 pikselin leveäksi, havaitsee kohtauksen muutoksia ja jäätyneitä jaksoja, ja sitten näyttelee 1 kuvaa sekunnissa sumeuden, keskimääräisen luminanssin ja spatiaalisen/aikaisen tiedon osalta. Kierros on rajoitettu 600 rakenteelliseen näytteeseen, yhteen FFmpeg/suodatin säikeeseen, samaan `file`-vain protokollaan ja säiliöluetteloon, 1 MiB prosessin ulostulorajaan, ja korkeintaan 30 sekuntiin välittäjän jaetussa keskeytyksessä/ajanrajoituksessa. Se ei koskaan hyväksy komentoa, suodatinta, polkua tai URL-osoitetta pyynnöstä.

Rakenteelliset arvot ovat deterministisiä näytteenottotodisteita, eivät semanttista videon ymmärtämistä. Ne eivät päättele aiheita, toimintoja, tekstityksiä, puhetta tai käyttäjän aikomuksia. Kohtaus- ja jäätymisrajat muodostavat segmenttejä; jäätymisen kattavuus, sumeus, altistus, spatiaalinen yksityiskohta ja aikamuutos vaikuttavat vain siihen, miten olemassa oleva 1–16 kuvan budjetti jaetaan. Täysin jäätynyt segmentti on rajoitettu yhteen kuvaan, kun taas ei-jäätyneet segmentit kilpailevat jäljellä olevasta budjetista. Kun rajat ylittävät kuvat, tasainen aikajana säilytetään, jotta nopeat aikaiset leikkaukset eivät voi piilottaa pitkää jälkisegmenttiä. Kohtausrajat, jotka ovat 1 sekunnin analyysiresoluution sisällä jäätymisrajasta, yhdistetään.

Puuttuvat suodattimet, väärin muotoillut/tyhjät todisteet, tunnistimen virhe tai rajattu esianalyysin aikakatkaisu epäonnistuvat avautumaan tarkkaan tasaisen keskipistepolitiikkaan. Soittimen keskeytys tai välittäjän aikaraja ei epäonnistu avautumaan: se lopettaa käynnissä olevan aliprocessin, estää myöhemmän kuvan poiminnan, ja yksityinen väliaikainen puu poistetaan `finally`-osiossa.

`scripts/perf/video-bridge-fu07-eval.ts` tuottaa deterministisiä oikeita FFmpeg-liitoksia jälkikäsittelyyn liittyvistä tekstityskustannussäästöistä, tiheäliikkeisestä budjetin jakamisesta, sumeus/altistus/SI-TI-todisteista, nopeista leikkauksista pitkällä hännällä ja vähittäisvaikutuksen vääristä positiivisista. Se tallentaa esianalyysin seinäajan ja, missä `/usr/bin/time` on saatavilla, lapsiprosessorin ja huippu-RSS:n. Sen laatutarkastukset ovat vain rakenteellisia oraakkeleita. Oikean tekstimallin laatu pysyy `HOLD`, koska tällä välineellä ei ole valtuutettua päätepistettä tai jäätynyttä tuomaria. Rahalliset säästöt pysyvät myös `HOLD`, ellei `--caption-cost-per-call-usd` tarjoa eksplisiittistä positiivista arvioita per kutsu; skripti ei koskaan valmistele kumpaakaan tulosta.

Jokainen kuva on rajoitettu 4 MiB:iin, kaikki raakakuvat yhteensä 23 MiB:iin, ja sarjallistettu välittäjän vastaus 32 MiB:iin. Yksityinen väliaikainen hakemisto poistetaan `finally`-osiossa. OmniRoute ei pakkaa FFmpegia eikä hyväksy mukautettua suoritettavaa polkua. Ennen tekstitystä silta soveltaa konservatiivista visuaalista deduplikointikierrosta: jokainen JPEG vähennetään 16×16 harmaasävyiseen puskuriin ja verrataan vain viimeiseen säilytettyyn kuvaan. Pyydetyn tekstitysbudjetin ollessa yli yhden kuvan, poiminta tarjoaa rajatun ehdokkaiden joukon, joka on korkeintaan kaksinkertainen budjettiin nähden, eikä koskaan yli 16 kuvaa. Pyydetty katto sovelletaan vain deduplikoinnin jälkeen, ja ensimmäiset ja viimeiset valitut ehdokkaat säilytetään lopullisessa ohenemisessa, kun budjetti on vähintään kaksi. Versioitu `grayscale-16x16-mean-cells-v2` -politiikka käyttää suurempaa keskimääräistä luminanssieroa ja thumbnail-solujen suhdetta, jonka normalisoitu ero on vähintään 0.05. Kaksoiskappaleen kynnys on vakio 0.04, valittu ennakoitavuuden vuoksi eikä paljastettu ajonaikaiseksi asetukseksi. Tämä toissijainen korkean kontrastin signaali säilyttää pienen liikkeen ja näkyvän tekstin muutokset, joita vain keskimääräinen vertailu voi piilottaa. Vertailija- tai dekooderivirheet epäonnistuvat avautumaan ja säilyttävät kattavuuden. Ulostulo-metadata erottaa poimitut ehdokkaat, onnistuneesti käytetyt kuvat ja visuaalisesti pudotetut kaksoiskappaleet.

Erityisesti merkitty videon osa voi pyytää aikaleimattua kontaktisivua. Silta rakentaa korkeintaan 4-sarakkeisen, 16-kuvan JPEG-ruudukon. Jokainen 512-pikselin solu polttaa lähteen aikaleiman korkeakontrastiseen alaosaan, kun taas samat aikaleimat pysyvät tekstuaalisessa metadatassa alavirran yhdistämistä ja tarkastusta varten. Täydellinen JPEG pysyy rajoitettuna 32 MiB:iin. Jos `sharp` ei voi purkaa tai koostaa ruudukkoa, silta siirtyy yksittäisiin JPEG-kuviin; asiakaskeskeytys leviää silti läpi sivuoperaation.

Edistämistodisteet ovat tarkoituksellisesti eristettyjä synteettisestä koostumuksen mikrotestistä. `scripts/perf/video-bridge-contact-sheet-eval.ts` määrittelee skeemaversioidun A/B-välineen oikeille OpenAI-yhteensopiville visiomalleille. Se mittaa palveluntarjoajan ilmoittamia tokeneita, end-to-end-seinäviivettä (mukaan lukien sivun koostaminen), mallikutsujen määrää ja manifestin määrittämiä tosiasioiden säilytyksiä. Raakamodelivastauksia ei kirjoiteta raporttiin; vain SHA-256-hajautukset ja vastaavat tosiasia-ID:t säilytetään. Väline ei tee verkkoyhteyksiä tai maksettuja mallikutsuja, ellei `--execute-real` ole annettu ja `--model`, `OMNIROUTE_BASE_URL` ja `OMNIROUTE_API_KEY` on määritetty. Ilman tätä eksplisiittistä todellista suoritusta sen koneellisesti luettava tuomio pysyy `HOLD`; synteettiset kuormitus/kutsumittaukset eivät yksinään ole edistämistodisteita.

Erillinen `scripts/perf/video-bridge-promotion-eval.ts` käyttää FU-07 tai FU-09 havaintoja. Edistämisen hyväksyminen vaatii kaikki kahdeksan synteettistä skenaariotyyppiä sekä puhdistetun todellisen klipin, vähintään kolme mitattua toistoa per rooli ja tapa, kaikki kymmenen ilmoitettua metriikkaa, jäädytetyt media/prompt/odotetut-tosiasiat/asetukset hajautukset, ainutlaatuiset havainto-ID:t ja vahvistetut siemen-A/B-järjestykset. Suorituskuitti sitoo kokoelman hajautuksen, tarkan ehdokashajautuksen ja malliversion. Puuttuvat tai virheelliset mittaukset pysyvät `HOLD`, mukaan lukien CPU yli 30 s, huippu-RSS yli 512 MiB tai esianalyysi yli 30 s. Nämä ovat todisteiden hyväksymiskattoja, eivät uusi ajonaikainen RSS:n täytäntöönpanotakuu.

FU-07 vaatii vähintään 98 % laadun säilyttämistä ja p95-latenssia, joka ei ole yli 1.2x
perustasosta, sekä joko 0.05 absoluuttista tapauskohtaista keskimääräistä palautusparannusta
vastaavilla keskimääräisillä kuvatekstikutsuilla tai vähintään 10 % vähemmän keskimääräisiä
post-dedup- kuvatekstikutsuja. FU-09 vaatii vähintään 0.85 laatua, 95 % säilyvyyttä,
20 % p95-latenssin vähennystä ja 10 % token-vähennystä. Kriittinen faktahäviö, injektiovaatimusten
noudattamatta jättäminen tai puuttuva käyttö estää ylennystä. Yksi suoritus ei voi ylentää mitään:
`--previous-report` vahvistaa kaksi erillistä, päällekkäistä, peräkkäin
kelvollista suoritusta saman politiikan/mallin revision/kandidaatin/korpuksen osalta.
Näytteenottokoe ei voi vahvistaa kontaktisivukokeen tuloksia.

Kerääjien tulisi arvioida vastauksia muistissa ja tallentaa `responseDigest` sekä
mittarit ja havaintosidokset, mutta ei koskaan vastaustekstiä. Kuluttaja lukee myös
perinteisiä raakahavaintoja, mutta ei koskaan kopioi sitä tekstiä raportteihinsa. Tarkalleen
yksi `responseDigest` tai `rawResponseText` hyväksytään kutakin havaintoa varten.
Versioitu sallittujen listojen luettelo pysyy tyhjänä muuttumattomalla `hold` oletuksella.
Kelvollinen merkintä vaatii todisteviittauksen, politiikan, mallin revision, tarkan
kandidaatin SHA:n, manifestin tiivisteen ja kaksi erillistä suoritustunnusta; ristiriitaiset
kontekstit hylätään. Nämä metatiedot ovat tarkastussopimus, eivät todiste siitä, että
viitattu tiedosto sisältää aitoja mittauksia. Tarkista todelliset kuitit ennen minkään
merkinnän lisäämistä. Hallintastatistiikan päätepiste ja Video-ohjauspaneeli paljastavat
konservatiivisen valmiuden. Vain konfiguroitu malli alias ei määritä sen
revision tai käynnissä olevan kandidaatin SHA:ta, joten nykyinen ohjauspaneeli raportoi
`HOLD` sen sijaan, että käyttäisi kelpoisuutta toisesta suorituskontekstista. Ilmoitettu
kokeellinen valinta pysyy erillään ylennyksestä; oletusta ei muuteta automaattisesti.

Kutsujat voivat liittää valinnaisen `transcript.cues` taulukon tuettuun videon
osaan, kun heillä on jo kohdistettua tekstiä. Jokaisen vihjeen on sisältävä `text`,
rajallinen `start`/`end` aikaväli tutkittavan keston sisällä, ja valkoistetun
`source` (`client`, `embedded` tai `audio-bridge`); `confidence` oletusarvo on
`1` ja sen on pysyttävä välillä `0` ja `1`. Tarkat kaksoisvihjeet yhdistetään.
OmniRoute ei koskaan aloita transkriptiota tästä metatiedosta: validoidut vihjeet
kopioidaan kuvattuun tulokseen lähteen, luottamuksen ja aikavälin kanssa, ja
ne esitetään epäluotettavina havaintoina yhdessä kehyskuvatekstien kanssa.
Virheelliset, alueen ulkopuoliset tai alkuperättömät tekstit hylätään sen sijaan, että
ne sekoitettaisiin kuvatekstivirtaan. Molemmat pyyntöruumiin transkriptiokanavat
normalisoivat toimitetun alkuperän `client`:iksi, mukaan lukien itseväitetyt
`embedded` tai `audio-bridge` -tunnisteet. Vain palvelimen omistama adapteri voi
määrittää nämä luotettavat tunnisteet koodipohjaisen `trustedSource`-argumentin
kautta; pyyntö JSON-kenttä ei voi saavuttaa tätä argumenttia. Transkriptiteksti
pysyy epäluotettavana mediaan perustuvana sisältönä, riippumatta sen alkuperästä,
eikä sen koskaan tule määrittää valtuutusta.

Edistynyt kutsuja voi tarjota `audioTranscript`-raidan samalle videolle;
sitä käsitellään asiakastoimitettuna tekstinä, ei todisteena palvelimen
transkriptiosta. Fuusioreuna suorittaa visuaaliset ja äänihavaintoja
yhdellä määräajalla ja keskeytyssignaalilla, järjestää ne yhteiselle aikajanalle,
yhdistää tarkat kaksoiskappaleet ja raportoi osittaisen tuloksen, kun vain yksi
puoli onnistuu. Virheellinen `audioTranscript` heikkenee tuohon osittaiseen tulokseen —
visuaalinen kuvaus säilyy ja äänihaara tallentaa puhdistetun virhekoodin —
sen sijaan, että koko video epäonnistuisi. Jokaisen haaran saatavuus, osittainen
lippu ja puhdistetut virhekoodit säilytetään kuvatussa tuloksessa,
suojapalkin metatiedoissa (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), tulosvälimuistin metatiedoissa ja sillan fuusiolaskureissa.
Oletusarvoinen Video Bridge -polku ei aktivoi puhetta tekstiksi
tai lataa toista media kopiota; ilman tätä eksplisiittistä raitaa se pysyy
vain videona.

**Transkriptin säilyttäminen (#12150 P1).** Tämä pätee automaattisesti aina kun
Video Bridge (joka on itsessään opt-in) renderoi transkriptivihjeen — erillistä
säilytyslippua ei ole. Kun pyyntö renderoi minkä tahansa transkriptivihjeen
(kutsujan ilmoittama `transcript` tai fuusioitu `audioTranscript`), suojapalkki merkitsee
sen `videoBridgeObserved` ja tuottaa punastetun varjon videokuvauksesta —
identtinen renderointi, jossa jokaisen vihjeen vapaatekstisisältö on korvattu
`[redacted-video-transcript]`, rakennettu korvaamalla rakenteinen vihje kenttä
ennen merkkijonon kokoamista (ei koskaan tasoittamalla tekstiä, joten mikään vihje
sisältö — vihamielinen tai tavallinen, mukaan lukien sisällöt, jotka sisältävät `]`
kuten `[inaudible]`/`[music]` — ei voi selvitä). Pysyvä pyyntölokin pyyntöruumis
vaihtaa jokaisen video-perusteisen tekstiosan tuohon punastettuun varjoon, joka
on sovitettu sisällön yhtäläisyyden mukaan; `fullText`-ankkuri luetaan uudelleen
valmiista ennakkopyynnön suojapalkin kuormasta, joten osuma onnistuu edelleen
myöhempien ketjun suojapalkkien jälkeen (PII- ja tunnistetietojen peittäjät, prioriteetit
10/95) kirjoittaa kuvaustekstin paikalle ja järjestelmän kehotteet/siirrot/muistinjako
muotoilevat viestitaulukon. Ylösalaisin lähetetty ruumis mallille pysyy muuttumattomana.
Havaittu pyyntö ei myöskään täytä mitään kestäviä muistoja (sekä pyyntö- että
vastausperusteinen poiminta ohitetaan), joten mallin oma vastaus ei voi toistaa
transkriptitekstiä muistiin.

**Raakavideokentät (#12430).** Kun silta on käytössä ja natiivin videotuennan
tilanne on tuntematon tai puuttuu, määritellyt `transcript`/`audioTranscript` kentät
aktivoivat myös `videoBridgeObserved`, jopa kuvaustason epäonnistumisen tai
`maxVideos`-rajan jälkeen. `null` ja tyhjät merkkijonot lasketaan; puuttuvat kentät
ja ei-videometatiedot eivät. Säilytetyt kopiot punastavat nämä kentät tai jättävät
pyynnön pois, ja välimuistit/muistit ohitetaan. Toimittajan kuorma pysyy
muuttumattomana.

Lisättyjen säilytettyjen kopioiden käyttö perustuu samaan havaittuun pyyntösignaaliin. Raaka
ennaltaehkäisevän asiakaspyyntökuvan, muistissa olevan odottavan pyynnön ja aikaisemmin
hylätyn pyynnön lokin rakenne korvataan videon osien transkriptiokentillä;
putkistovaiheiden ja kontekstisiirron synnyttämät merkkijonokäskyt salataan
säilytetyn pyynnön rungon syötteessä. Säilytetty `video_content_removed` -merkki
tekee `previous_response_id` -jatkumisesta epäonnistuvan suljetusti sen sijaan, että
rakennettaisiin teksti, joka oli tarkoituksella hylätty. Jos havaittu pyyntö menettää
osakohtaisen salauksen varjon ennen lokitusta, tai jopa yksi useista videovarjoista
epäonnistuu vastaamaan myöhempien pyyntömuutosten jälkeen, säilytetty pyyntörunko
jätetään kokonaan pois sen sijaan, että säilytettäisiin osittain salattu transkriptio.

Havaittua pyyntöä varten mallivastaus voi lainata mitä tahansa osaa
transkriptiosta ilman strukturoitua vihjeen rajaa. Sen säilytetty kutsuloki
`responseBody` korvataan siten poistomerkillä; yksityiskohtainen
putkistotaide (joka voi sisältää ylävirran/asiakasrunkoja ja virtaosuuksia)
ei säilytetä. Semanttiset, idempotentti ja päättelytoistokäytävät ohittavat
luku- ja kirjoituspyynnöt tälle pyynnölle. Palveluntarjoajan pyyntö ja asiakkaalle
näkymä vastaus pysyvät muuttumattomina. Varhaiset keepalive-bytit tyhjennetään
väliaikaisesta puskurista, kun yksityiskohtainen taide jätetään pois. Kiro'n
virheellinen EventStream-varoitus raportoi vain kuormabittien määrän, ei koskaan
sen sisältöä tai JSON-parserin raakavirhettä.
Tämä ei väitä, että jokainen epäolennaiseen palveluntarjoajaan/pluginiin liittyvä
diagnostiikka on tarkastettu; laajempaa säilytettyjen syöteiden tarkastusta
seurataan #11658.

Sisäinen `/api/modality-bridge/video/drilldown` -elinkaarimalli on erillinen,
palautus/token-autentikoitu välimuistialusta. Jokainen operaatio vaatii myös
kanonisen läpinäkyvän pääsytunnuksen. Ennen kuin tuotantokutsuja otetaan käyttöön,
sen on johdettava tämä tunnus autentikoidusta vuokralaisesta eikä koskaan
siirrettävä asiakasvalittua arvoa. Välimuistin avaimet sitovat tämän pääsytunnuksen
kanonisiin istunto- ja videoviittauksen tunnuksiin, tallentavat vain niiden
SHA-256-johdettuja avaimia ja rajaavat sekä luku- että poistotoiminnat
samaan pääsytunnukseen. Välimuisti tallentaa enintään 16 johdettua JPEG-ruutua
per merkintä, vanhentaa ne kymmenen minuutin kuluttua ja tukee rajattuja
`start`/`end` -lukuja tai eksplisiittistä istunnon poistamista.

Jokainen pääsytunnus on rajoitettu 16 merkintään ja 64 MiB kanonista JPEG-dataa. Nämä
rajoitukset ovat riippumattomia globaalista 64 merkinnän/256 MiB katosta: pääsytunnuksen
kiintiöpaine tyhjentää vain kyseisen pääsytunnuksen vähiten käytetyt merkinnät ennen
kuin globaalin LRU-tyhjennyksen harkinta. Vanhentuneet merkinnät poistetaan sekä
pääsytunnuksesta että globaalista laskennasta välimuistitoiminnan yhteydessä, kun taas
peruutus ja vahvistusvirhe eivät sitouta osittaista korvausta.

Välimuisti hylkää ei-kanonisen Base64:n, ylimääräisen täytteen, ei-JPEG-median,
virheelliset tai katkaistut JPEG:t sekä JPEG:t, jotka tuottavat varoituksen rajatulla
täyskuvan `sharp`-dekoodauksella. Se koodaa jokaisen hyväksytyn kuvan kanoniseksi JPEG:ksi,
johdattaa leveyden ja korkeuden dekoodatuista biteistä sen sijaan, että luottaisi
kutsujan kenttiin, ja hylkää kaikki jäljellä olevat polyglot-bytit sen sijaan, että
säilyttäisi niitä. Vain rajattu kanoninen pakattu puskurin osuus lasketaan molempiin
kiintiöihin. JSON-väylän raja sisältää Base64-ylihinnan 32 MiB dekoodatun syötteen
katolle. Jokainen
tallennettu johdanto tallentaa vahvistetun JPEG-muodon/resoluution, näytteenottopolitiikan,
johdannon version, luontiajan, palvelimen laskeman sisällön tiivisteen ja
hashatun vanhemman viittauksen sekä luotettavan kutsujan vanhemman sisällön tiivisteen.
Peruutus tarkistetaan asynkronisten dekoodaus/tiivistysvaiheiden välillä ennen atomista
välimuistin sitoutumista.

Tuotantotuottaja käyttää jo johdettuja välittäjäkehyksiä vain onnistuneen
visuaalisen analyysin jälkeen, ilman toista videon latausta/poimintaa. Se vaatii
operaattorin `modalityBridgeVideoDrilldownEnabled=true`, tiukkaa osakohtaista
`drilldown: true` ja autentikoidun API-avaimen merkintätunnuksen. Asiakkaan
ilmoittamat pääsytunnus/istuntoarvot eivät koskaan luo omistajuutta. Ilman kaikkia
kolmea ehtoa se ei tiivistä, kokoa tai säilytä lisäkehyksiä. Säilyttämisen epäonnistuminen
säilyttää käyttökelpoisen visuaalisen vastauksen. Suostumuksen saaneet pyynnöt ohittavat
koko videon tulosvälimuistin, joten välimuistissa olevat tulokset eivät koskaan toista
käsittelyjä.

Onnistuneet JSON- ja SSE-vastaukset paljastavat enintään neljä läpinäkyvää
käsittelyä rajatulla `x-omniroute-video-drilldown` -otsikolla. Valtuutetut selainalkuperät
voivat lukea tämän otsikon laajentamatta CORS-alkuperäpolitiikkaa. Uudet käsittelyt
käyttävät `v1.<32-bittinen satunnainen base64url token>`, ja rekisteri säilyttää vain
niiden SHA-256-tiivisteet. Lukija/otsikkoparsija hyväksyy myös perinteiset 64-hex
tokenit. Autentikoitu julkinen kuluttaja on
`GET /api/v1/video-bridge/drilldown?handle=...`, itsenäisesti porttiväli
`modalityBridgeVideoDrilldownRemoteEnabled=true`. Eksplisiittinen säilytetty
epätosi peruuttaa pääsyn, vaikka perinteinen `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED`
ympäristövaranto on käytössä. Tuotannon säilyttämisellä on vastaava perinteinen
`OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` varanto. Molemmat varannot ovat oletusarvoisesti
pois päältä.

Kuluttaja johdattaa omistajuuden autentikoidusta avaimesta, soveltaa avainpolitiikkaa ja
palauttaa saman 404 tuntemattomille, vanhentuneille ja toisen avaimen käsittelyille. Se hyväksyy
`variant=preview|standard|detail` (maksimi JPEG-mitta 320/640/1280, ei koskaan suurennettu),
`limit=1..8` (tai perinteinen `frames`-alias, ei koskaan molemmat), nollapohjainen `page` ja
valinnainen `start`/`end` keskittymissekunnit. Kaksoiskyselyavaimet ja käänteiset
keskittymisikkunat hylätään. Jokaisella palautetulla variantilla on tiiviste
sen todellisesta sisällöstä ja todellisesta resoluutiometadatasta, joka on linkitetty
säilytettyyn lähteeseen. Variantit johdetaan lukuhetkellä sen sijaan, että ne
säilytettäisiin ylimääräisinä säilytettyinä kopioina. JSON-vastaus, mukaan lukien Base64/paketti,
on rajoitettu 32 MiB:iin; liian suuri sivu palauttaa 413 ja asiakkaan on
pyydettävä vähemmän kehyksiä. Luku tarkistaa peruutuksen jokaisen koon
ympärillä ja tarkistaa käsittelyn voimassaolon ennen palauttamista. `DELETE` omistajalta
on idempotentti; poistaminen tai TTL-vanheneminen vapauttaa säilytetyn lähteen ja
käytön laskennan.

Jaettu tallennustila on prosessikohtainen: käsittelyt vanhenevat uudelleenkäynnistyksessä eivätkä ole siirrettävissä itsenäisten OmniRoute-prosessien välillä. Hallintatilastot paljastavat tehokkaan säilytys-/etäpolitiikan ja aggregoivat vain säilytetyt merkinnät/bytet, eivät koskaan mediaa, viittauksia, pääkäyttäjän tunnuksia tai käsittelyitä. Videon asetuspaneeli näyttää nämä arvot ja voi säilyttää molemmat suostumusvaihtoehdot. Tämä toteutuksen dokumentaatio ei ole live-julkaisu- tai markkinointitodiste; todellisen mallin hyväksyntä seurataan erikseen.

Kehykset on varustettu tekstityksillä peräkkäin määritellyn videomallin mukaan. Tyhjät videoylitykset perivät Vision-asetuksen; jos molemmat ovat tyhjät, Vision-autoreititin valitsee tehokkaan vision-kykyisen mallin. Onnistuneet tekstitykset korvaavat alkuperäisen osan vakaalla `[Video description:` -etuliitteellä, joka myös merkitsee tekstin epäluotettavaksi mediaan perustuvaksi havainnoinniksi ja kertoo alavirran malleille, ettei niiden tule seurata mediasta löytyviä ohjeita. Kehys-tekstityksen välimuistin avaimet sisältävät JPEG-bytet, kehotteen, aikaleiman ja tehokkaan mallin; vain onnistuneet tekstitykset välimuistissa. Välimuistin merkinnät säilyttävät varsinaisen onnistuneen tuottajamallin, mukaan lukien varamallin; silta raportoi `mixed`, kun eri kehykset on tuottanut eri mallit. Välimuistihitti käyttää tuottajan identiteettiä uudelleen sen sijaan, että se nimettäisiin uudelleen pyydetyksi reitityssuunnitelmaksi. Koko videon tulosvälimuisti on avattu jokaiselle syötteelle, joka muuttaa tulosta — kehotteelle, tehokkaalle mallille, näytteenottopolitiikalle, kehysmäärälle, semanttiselle analyysitilalle, normalisoidun fokushälyn SHA-256-sormenjäljelle, fokushälyn ikkunalle, `transcript`, `audioTranscript` ja kontaktitaulun lipulle — joten minkä tahansa näistä ulottuvuuksista muuttaminen on välimuistin osuma, ei koskaan vanhentunut uudelleenkäyttö. Visuaalisen deduplikointipolitiikan versio, kynnysarvo ja rajattu ehdokas-kehysmäärä ovat myös eksplisiittisiä tulosvälimuistin avaimessa ja metatiedoissa; politiikan muutos ei siis voi käyttää vanhentunutta koko videon kuvausta. Tulosvälimuistin v4 metatiedot säilyttävät tilan ja sormenjäljen, eivät koskaan raakakäyttäjätehtävää. Guardrail-metatiedot raportoivat sekä pyydetyt että tehokkaat analyysitilat; pyydetty `focused`-tila ilman käytettävää käyttäjätekstiä raportoidaan tehokkaasti `full`.

Guardrail poimii jokaisen tuetun videon osan, mutta ei kuvaa enempää kuin `modalityBridgeVideoMaxVideos`. Kohteille, joiden on todettu olevan `supportsVideo === false`, epäonnistuneet ja ylirajalliset videot muuttuvat eksplisiittisiksi turvallisiksi tekstimerkeiksi, joten raakavideota ei säilytetä. Kun kyky on tuntematon, nämä osat pysyvät koskemattomina. Kohteet, joilla on `supportsVideo === true`, ohittavat sillan. Asiakkaan pyyntö keskeytyssignaali leviää latauksen, välittäjäjonon, aliprocessien ja tekstityskutsujen läpi; keskeytykset pysähtyvät videoiden välissä eivätkä koskaan epäonnistu avautumaan raakamedialle.

Aikajänteen asetukset ovat DB-taustaisia ja Zod- validoituja:

| Avain                               | Oletus      | Vaihtoehto / käyttäytyminen                                                                                         |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Valinnainen aikajänne, opt-in                                                                                       |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` säilyttää yleiset tekstitykset; `focused` käyttää rajattua, epäluotettavaa viimeisimmän käyttäjän kontekstia |
| `modalityBridgeVideoModel`          | `""`        | Perii Vision Bridge -mallin                                                                                         |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` tai suhteellinen `segment_aware`; tunnistimen epäonnistuminen palautuu `uniform`-tilaan    |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                 |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                      |

Perinteiset säilytetyt videon aikarajat yli 120 sekuntia rajoitetaan välittäjän määräaikaan; uudet asetukset, jotka ylittävät tämän rajan, hylätään. `GET /api/modality-bridge/video/runtime` vaatii luotettavan leimattua silmukkaa paikallisuutta ennen todennusta tai aikajänteen tutkimista, ja sitten vaatii hallintotodennuksen. Se palauttaa vain `available`, puhdistetut FFmpeg/ffprobe-versiot ja kiinteän syyn, kun aikajänne ei ole saatavilla. Sisäinen poimintapiste ei ole julkinen lataus-API: jonotäyttö palauttaa `503` plus `Retry-After`, soittajan katkaisu palauttaa `499`, ja kiinteä välittäjän määräaika palauttaa `504`. Muunnetut vastaukset lisäävät `video->text;model=<visionModel>;parts=<videos>` keskeiseen `x-omniroute-modality-bridge` -otsikkoon poistamatta Vision- tai Audio-segmenttejä.

### PII Masker (`piiMasker.ts`)

Toimii **molemmissa** vaiheissa.

- **`preCall`** kloonaa kuormituksen, käy läpi `system`, `messages`, `input` ja `prompt` (mukaan lukien pelkät merkkijonoelementit), ja soveltaa `processPII()` (osoitteesta `@/shared/utils/inputSanitizer`) merkkijonon `content`/`text` kenttiin. Kun `PII_REDACTION_ENABLED=true`, havaittu PII poistetaan ulospäin suuntautuvasta kuormituksesta. Tämä on riippumaton `INPUT_SANITIZER_MODE`:sta (joka vain hallitsee kehotteen injektiopolitiikkaa). Kun punaisuus on pois päältä, kutsu tallentaa havaintomääriä ilman sisällön uudelleenkirjoittamista.
- **`postCall`** syväkloonaa vastauksen, suorittaa `sanitizePIIResponse()` plus Responses-API-muotoisen maskerin (`maskResponsesOutput` — kattaa `output_text` ja `output[].content[].text`). Jos punaisuutta tapahtuu, muokattu vastaus korvataan alkuperäisellä.

Guardrail ei koskaan estä; se vain merkitsee (`meta.detections`, `meta.redacted`) tai kirjoittaa uudelleen.

### Prompt Injection (`promptInjection.ts`)

Havaitsee vihamieliset rakenteet käyttäjän toimittamassa sisällössä ja valvoo määritettyä politiikkaa. Käyttäytyminen määräytyy ympäristömuuttujien ja konstruktorin asetusten mukaan:

| Asetus     | Ympäristömuuttuja                                                                                         | Oletus | Vaikutus                                                                                                                                                                                                                         |
| ---------- | --------------------------------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Käytössä   | `INPUT_SANITIZER_ENABLED`                                                                                 | `true` | Kun `false`, turvakaide ohittaa.                                                                                                                                                                                                 |
| Tila       | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                           | `warn` | Injektio politiikka: `block`, `warn` tai `log`. (`redact` hyväksytään taaksepäin yhteensopivuuden vuoksi, mutta se **ei** poista injektoitua tekstiä; PII:n uudelleenkirjoitus on hallittavissa `PII_REDACTION_ENABLED` avulla.) |
| Estokynnys | `blockThreshold` vaihtoehto / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Vähimmäisvakavuus, joka vaaditaan estämiseen. Keskitaso on oletuksena vain tarkkailua varten.                                                                                                                                    |

**Tilaprioriteetti** (`getMode`): kutsujan `options.mode` →
`INJECTION_GUARD_MODE` **DB ominaisuuslippu ohitus** (Dashboard → Asetukset →
Ominaisuusliput) → `INJECTION_GUARD_MODE` ympäristö → `INPUT_SANITIZER_MODE` ympäristö →
`warn`. Dashboardin ohitus voittaa siten ympäristömuuttujat, joten Ominaisuusliput UI hallitsee käynnissä olevaa turvakaidetta reaaliaikaisesti (ilman uudelleenkäynnistystä). DB-luku on vikasuojattu:
jos se epäonnistuu, turvakaide siirtyy ympäristöperusteiseen käyttäytymiseen, ja kun ohitusta ei ole asetettu, käyttäytyminen on identtistä ympäristöperusteisen ratkaisun kanssa.

Havaitsemislähteet:

1. `sanitizeRequest()` `@/shared/utils/inputSanitizer`-moduulista (jaettu havaitseja
   setti, jota käytetään muualla putkistossa).
2. Sisäänrakennetut `DEFAULT_GUARD_PATTERNS` (tällä hetkellä `system_override_inline` ja
   `markdown_system_block`, molemmat `high` vakavuus).
3. Valinnaiset `customPatterns`, jotka on annettu konstruktorin asetusten kautta (merkkijonot, regex,
   tai `{ name, pattern, severity }` -tiedot).

Kun `mode === "block"` **ja** vähintään yksi havaitseminen täyttää vakavuus
kynnysarvon, `preCall` palauttaa `{ block: true, message: "Pyyntö hylätty:
epäilyttävää sisältöä havaittu" }`. `warn`/`log`-tiloissa turvakaide kirjaa mutta
sallii kutsun. Jaettu apuri `evaluatePromptInjection()` on myös viety
kutsujille, jotka tarvitsevat arvioida kehotteita ilman rekisterin läpi menemistä.

**Skannaussiteet (v3.8.20):** havaitseja tarkistaa vain **ensimmäiset 16 KB**
yhdistetystä kehotetekstistä — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 tavua) tiedostossa
`src/shared/utils/inputSanitizer.ts`. Sekä `detectInjection()` että
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` ennen kaavan silmukkaa. Injektiodirektiivit sijaitsevat syötteen yläosassa, joten tämä
rajoittaa regexin CPU/GC:tä useiden satojen KB:n kuormissa heikentämättä havaintoa (vrt.
#3932, #4041).

### Todennustietojen peittäjä (`credentialMasker.ts`)

Toimii **molemmissa** vaiheissa, viimeisenä oletusketjussa (prioriteetti `95`). Poistaa
tunnetut API-avain / salainen token -kaavat ulospäin menevästä kuormasta (viestin
sisältö, työkalukutsun argumentit, työkalun tulokset) **ja** palveluntarjoajan vastauksesta, joten
kehotteeseen liitetty todennus (tai työkalun tuloksen palauttama) ei vuoda
ylöspäin palveluntarjoajalle tai takaisin asiakkaalle.

- **Vapaaehtoinen vain**, sama käytäntö kuin PII:n peittämisessä (Kova sääntö #20-viereinen):
  pois päältä ellei `settings.credentialRedactionEnabled === true` **tai**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kun se on pois päältä, turvakaide on ei-toiminnallinen —
  se ei koskaan estä ja ei koskaan kirjoita uudelleen.
- `redactCredentials()` käy läpi koko kuorma/vastauspuun (`walkValue()`,
  prototyyppisaastumisen turvallinen, sykliturvallinen `WeakSet`in kautta) ja korvataan osumat
  `[REDACTED:<type>]` -paikalla, kloonaamalla vain ne oksat, jotka todella
  muuttuivat.
- `CREDENTIAL_PATTERNS` kattaa LLM-palveluntarjoajien avaimet (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokenit (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maksuvälineet (Stripe, Square), pilvi
  avaimet (AWS pääavain, Twilio, SendGrid, Mailgun), yksityiset avaimet / JWT:t,
  todennusavaimia sisältävät yhteysmerkkijonot (`mongodb://user:pass@...`, jne.), ja
  yleinen `Authorization`/`x-api-key`/`api-key`/`apikey` otsikkoväli
  kaava. Otsikkotyyppiset avaimet (`authorization`, `x-api-key`, `api-key`,
  `apikey`) peitetään rakenteellisesti (vain arvo, kaavan etuliite kuten
  `Bearer `/`Basic ` säilytetään) eikä yleisen tekstin regexin kautta.
- Turvakaide ei koskaan estä; se vain kirjoittaa uudelleen (`modifiedPayload` /
  `modifiedResponse`) ja annotoi (`meta.credentialsRedacted`, `meta.count`).

Regressiosuoja: `tests/unit/credential-masker-guardrail.test.ts`.

## Perussopimus (`base.ts`)

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
  block?: boolean; // true katkaisee ketjun välittömästi
  message?: string; // näytetään eston yhteydessä
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall palauttaa tämän pyynnön uudelleenkirjoittamiseksi
  modifiedResponse?: TValue; // postCall palauttaa tämän vastauksen uudelleenkirjoittamiseksi
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

Suojakaide ilmaisee, ettei muutoksia ole, palauttamalla joko arvon `void`, `{}` tai
`{ block: false }`. Arvon `modifiedPayload`/`modifiedResponse` palauttaminen korvaa
ketjussa eteenpäin myöhemmille suojakaiteille välitettävän arvon.
`signal?: AbortSignal` välittää kutsujan elinkaaren suojakaiteille. Pyynnön keskeytys on tarkoituksellinen avoimeksi jättävä poikkeus: mediasillat lopettavat työn ja siivoavat palauttamatta käsittelemätöntä mediaa kohteelle, jonka tiedetään, ettei se tue sitä.

## Rekisteri (`registry.ts`)

Singleton-olio `guardrailRegistry` tarjoaa seuraavat toiminnot:

- `register(guardrail)` — lisää suojakaiteen (tai korvaa sen normalisoidun nimen perusteella) ja
  järjestää suojakaiteet uudelleen `priority`-arvon mukaiseen nousevaan järjestykseen.
- `clear()` / `list()` — hallinnollisia aputoimintoja.
- `runPreCallHooks(payload, context)` — käy aktiiviset suojakaiteet läpi, välittää
  hyötykuorman `modifiedPayload`-arvojen kautta ja pysähtyy ensimmäiseen `block: true` -tulokseen.
- `runPostCallHooks(response, context)` — sama käsittely vastauksen puolella.
- `resetGuardrailsForTests({ registerDefaults })` — tyhjentää tilan ja valinnaisesti
  rekisteröi oletukset uudelleen testien puhdasta eristämistä varten.

Molemmat suorittimet palauttavat arvon `{ blocked, payload|response, results, guardrail?, message? }`,
jossa `results` on `GuardrailExecutionResult`-tietueiden taulukko. Tietueet sisältävät
kunkin suojakaiteen `blocked`-, `skipped`-, `modified`-, `error`- ja `meta`-kentät,
joista on hyötyä jäljityksessä.

### Suojakaiteiden poistaminen käytöstä pyyntökohtaisesti

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` kokoaa
duplikaateista puhdistetun luettelon suojakaiteiden nimistä, jotka tulee ohittaa nykyisessä
pyynnössä. Lähteet (kaikki valinnaisia ja yhdistetään):

- `apiKeyInfo.disabledGuardrails`
- Pyynnön rungon `disabledGuardrails` (ylimmällä tasolla)
- Pyynnön rungon `metadata.disabledGuardrails`
- Otsake `x-omniroute-disabled-guardrails` (tai vanha
  `x-disabled-guardrails`)

Arvot voivat olla merkkijonotaulukoita tai pilkuilla eroteltu merkkijono; nimet
normalisoidaan pienikirjaimisiksi kebab-case-muotoon (`pii_masker` → `pii-masker`). Tulos
välitetään rekisterille `context.disabledGuardrails`-arvon kautta, jolloin rekisteri ohittaa
vastaavat suojakaiteet (`skipped: true` kohteessa `results`).

## Suoritusjärjestys

Jokaiselle pyynnölle, joka kulkee tiedostojen `src/sse/handlers/chat.ts` ja
`open-sse/handlers/chatCore.ts` kautta:

1. `resolveDisabledGuardrails(...)` muodostaa ohitusluettelon API-avaimen, pyynnön rungon
   ja otsakkeiden perusteella.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` suorittaa suojamekanismit nousevassa
   prioriteettijärjestyksessä:
   - Käytöstä poistetut suojamekanismit kirjataan tilaan `skipped`.
   - Kunkin suojamekanismin `preCall` voi kirjoittaa hyötykuorman uudelleen `modifiedPayload`-arvon avulla.
   - Ensimmäinen `block: true` keskeyttää ketjun, ja käsittelijä palauttaa
     suojamekanismin hylkäysvastauksen.
3. Mahdollisesti uudelleenkirjoitettu hyötykuorma siirtyy yhdistelmäreititykseen ja edelleen
   ylävirran käsittelyyn.
4. Kun vastaus on koottu, `guardrailRegistry.runPostCallHooks(...)`
   suorittaa saman ketjun vastaukselle. Tässä vaiheessa `block: true` hylkää ylävirran
   vastauksen.

Poikkeuksen aiheuttaneet suojamekanismit kirjataan muodossa `error: <message>` ja lokitetaan
`logger.warn`-kutsulla, mutta ketjun suoritus jatkuu — suunnitellusti salliva virhetilanteissa.

## Määritykset

Sisäänrakennettujen suojamekanismien lukemat ympäristömuuttujat:

| Muuttuja                              | Käyttäjä                | Vaikutus                                                                                                |
| ------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Aseta arvoksi `false`, jos haluat poistaa tunnistuksen kokonaan käytöstä.                               |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Injektiokäytäntö: `warn`, `block` tai `log`. Vanha arvo `redact` ei kirjoita injektiotekstiä uudelleen. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Injektiosuojan tila; myös tietokannan ominaisuuslippu, joka **ohittaa** ympäristömuuttujat (DB > ENV).  |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | Vähimmäisvakavuus, jonka `MODE=block` hylkää: `high` (oletus), `medium` tai `low`.                      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Vanha alias muuttujalle `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                              |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Kun arvo on `true`, pyynnön henkilötiedot peitetään (injektiotilasta riippumatta).                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (alavirta) | Hallitsee vastauksen peittimen toimintaa.                                                               |

Modality Bridge -suojamekanismit lukevat ajonaikaiset määritykset tietokantapohjaisesta asetussäilöstä
(`getSettings()`), eivät ympäristömuuttujista. Kuvankäsittelyn ensisijaiset avaimet ovat
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ja
`modalityBridgeCacheMaxEntries`. Vanhoja
`visionBridge*`-avaimia tuetaan vain dokumentoituna yhden julkaisusyklin lukemisen
vararatkaisuna; hallintapaneelin kirjoitukset käyttävät ensisijaisia avaimia. Oletusarvot ja vararatkaisun
selvitystoiminto sijaitsevat tiedostossa `src/shared/constants/modalityBridgeDefaults.ts`, ja vanhat
vakiot säilytetään tiedostossa `src/shared/constants/visionBridgeDefaults.ts`.

Ääni käyttää asetuksia `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` ja `modalityBridgeAudioMaxClips` sekä jaettuja
`modalityBridgeCache*`-asetuksia. Äänelle ei ole vanhojen avainten vararatkaisua, koska nämä
avaimet otettiin käyttöön Modality Bridge -skeeman yhteydessä.

Video käyttää asetuksia `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` ja
`modalityBridgeVideoTimeout` sekä jaettuja `modalityBridgeCache*`-asetuksia.
Se on oletusarvoisesti poissa käytöstä, koska FFmpeg/ffprobe ovat valinnaisia operatiivisia
riippuvuuksia ja kuvatekstien tuottaminen videoruuduille lisää viivettä ja mallin käyttökustannuksia.

## Mukautetut suojaukset

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

Vaiheet:

1. Luo `src/lib/guardrails/myGuardrail.ts`, joka laajentaa `BaseGuardrail`-luokkaa.
2. Toteuta `preCall` ja/tai `postCall`.
3. Rekisteröi joko tuonnin yhteydessä (lisää `registerDefaultGuardrails`-funktiosta) tai
   kutsu `guardrailRegistry.register(...)` suorituksen aikana — rekisteri korvaa
   kaikki aiemmat suojaukset, joilla on sama normalisoitu nimi.
4. Lisää testit hakemistoon `tests/unit/` (olemassa olevia esimerkkejä:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testaus

Käytä `resetGuardrailsForTests()`-funktiota testien välissä, jotta jokainen testi alkaa tunnetusta tilasta.
Anna `{ registerDefaults: false }`, jos haluat aloittaa tyhjällä rekisterillä ja
rekisteröidä vain testattavat suojaukset. Vision Bridge hyväksyy riippuvuuksien
injektoinnin (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge tarjoaa
vastaavat liityntäkohdat asetuksille, ominaisuuksille, STT-mallin valinnalle, tunnistetietojen
tarkistuksille ja litteroinnille. Testeillä voidaan siten testata kumpaakin työnkulkua ilman
tietokanta- tai verkkoyhteyttä.

## Katso myös

- `src/lib/guardrails/` — toteutus
- `src/shared/utils/inputSanitizer.ts` — jaettu tunnistin, jota käytetään
  kehoteinjektioiden havaitsemiseen ja henkilökohtaisten tunnistetietojen peittämiseen
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridgen oletusarvot ja
  pakotetun siltauksen malliluettelo
- `src/shared/constants/modalityBridgeDefaults.ts` — Vision/Audio-ajonaikaiset jaetut oletusarvot
- `docs/architecture/RESILIENCE_GUIDE.md` — erillinen kerros (piirikatkaisin, jäähdytysajat)
- `docs/reference/ENVIRONMENT.md` — täydellinen ympäristömuuttujien viite

## Injektiosuojauksen reittikattavuus ja red-team-testaus (vaihe 8 · lohko D)

Injektiosuojaus (`createInjectionGuard` / `withInjectionGuard`) kattaa kaikki reitit,
jotka hyväksyvät käyttäjän kehotteita. Se noudattaa `INJECTION_GUARD_MODE`-asetusta (oletus `warn` = vain kirjaus;
`block` = palauttaa HTTP 400 `SECURITY_001`).

| Tyyppi            | Reitit                                                                                                                                               | Oletustila |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Teksti (nykyinen) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn       |
| Generatiivinen    | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn       |
| Data              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn       |

Tekstin poiminta (`extractMessageContents`) kattaa kentät `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team-testaus (öisin, `nightly-llm-security.yml`):** promptfoo varmistaa, että kukin reitti estää
OWASP-LLM-aineiston tilassa `INJECTION_GUARD_MODE=block`; garak suorittaa testit (ohitetaan ilman salaisuutta).
`moderations` sisältyy yhdenmukaisuuden vuoksi — estotilaa käyttävät ylläpitäjät voivat vapauttaa sen
`resolveDisabledGuardrails`-toiminnolla.

Öisin suoritettavassa työnkulussa (`.github/workflows/nightly-llm-security.yml`, cron + manuaalinen
käynnistys) on kaksi työtä:

- **`promptfoo-guard` (estävä)** — suorittaa komennon `promptfoo eval -c promptfooconfig.yaml`
  asetuksella `INJECTION_GUARD_MODE=block`. Kukin vihamielinen tapaus (esim. "ohita kaikki
  aiemmat ohjeet…", DAN-tyyliset suojauksen ohitukset) varmistaa, että vastaus sisältää
  arvon `error.code === "SECURITY_001"` eli että suojaus todella hylkäsi pyynnön.
- **`garak` (neuvoa-antava)** — suorittaa garakin asetuksella `--probes promptinject,dan,leakreplay`
  paikallista OmniRoute-instanssia (`http://localhost:20128/v1`) vasten. Suoritus riippuu
  palveluntarjoajan salaisuudesta (`PROMPTFOO_PROVIDER_KEY`); ilman sitä testi ohitetaan hallitusti, ja
  komentoon on lisätty loppuliite `|| true`, joten se raportoi tulokset aiheuttamatta CI-ajon epäonnistumista.

Suojausaputoiminnon (`createInjectionGuard` / `withInjectionGuard`)
kattavuus ulottuu kaikkiin kehotteita vastaanottaviin `/v1`-reitteihin; kehoteteksti poimitaan
kentistä `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`
`src/shared/utils/inputSanitizer.ts`-tiedoston `extractMessageContents()`-funktiolla.
