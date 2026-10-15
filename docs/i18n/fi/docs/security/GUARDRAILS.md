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
(katso `registry.ts` → `registerDefaultGuardrails()`):

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
ohjaa koko pyynnön näkökykyiseen malliin tai korvataan kuvan osat tekstikuvauksilla, jotka tuottaa konfiguroitava näkömalli ennen
ylävirran kutsua. Tämä mahdollistaa pelkästään tekstipohjaisten tarjoajien käsitellä
monimuotoisia kuormia läpinäkyvästi.

Virta:

1. Ohita, jos kohdemalli tukee jo näköä (ellei se ilmesty
   pakotettujen siltojen luetteloon `isVisionBridgeForcedModel`).
2. Poimi kuvaosat `extractImageParts(messages)`-kutsun avulla
   (`visionBridgeHelpers.ts`), joka delegoi **yhtenäiselle media
   tunnistimelle** `detectMediaParts()` tiedostossa `open-sse/utils/mediaParts.ts` — ainoa totuuslähde, joka jaetaan yhdistelmäyhteensopivuussuodattimen kanssa.
   Poiminta on sallittu vain ylin taso osista, joita
   `replaceImageParts` voi liittää takaisin (poimi↔korvaa -sopimus): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, ja Responses API `input_image`. Sisäkkäiset osumat ja
   vain indikaattorimuodot ovat yhdistelmäsuodatinmateriaalia, eikä niitä koskaan poimita.
   Ohita, jos ei löydy.
3. Ratkaise ajonaikainen konfiguraatio `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): uudet `modalityBridge*`
   asetusten avaimet voittavat; vanhat `visionBridge*` avaimet pysyvät **yksi-sykli
   varajärjestelmänä** (palautusikkuna). Ohita ennen mitään media-kävelyä, kun
   silta on poistettu käytöstä.
4. Moodin valitsin (`modalityBridgeVisionMode`, katso taulukko alla) päättää
   ohjata vs kuvata. Ohjaus palauttaa `modifiedPayload` vain `model`
   vaihdettuna, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Kuvauspolku: rajoita kuvia `maxImages`, koostaa tehtäväkohtainen kehotus,
   tarkista kuvausvälimuisti, kutsu näkömallia **samanaikaisesti**
   (`Promise.allSettled`), ja injektoi `[Image N]: <description>` tekstiosat niiden paikalle. Epäonnistunut kuvaus tuottaa `null` ja alkuperäinen kuvaosa
   **säilytetään** (#4012) — paitsi yhdistelmäkuvauspolulla, kun jokainen
   kuvaus epäonnistui, jolloin vahvistettu ei-näkö ylöspäin saa
   `(unavailable — no vision-capable provider connected)` -stubin sen sijaan (#8430).
6. Palauta `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Moodin valitsin (`modalityBridgeVisionMode`)

| Moodi      | Oletus | Käyttäytyminen                                                                                                                                                                                                                                                                            |
| ---------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Vanha heuristiikka, koskematon (#6640/#7204): ei-yhdistelmä/`auto/` mallit ohjaavat parhaan näkömallin suuntaan, ellei alkuperäisellä mallilla ole jo käytettäviä tunnistetietoja (silloin kuvataan); yhdistelmäkohteet kuvaavat aina.                                                    |
| `describe` |        | Aina kuvaa — ohjauslohko ohitetaan kokonaan; käyttäjän valitsema malli vastaa aina.                                                                                                                                                                                                       |
| `reroute`  |        | Pakota ohjaus: säilytä-tunnistetiedot-malli -guard ohitetaan. Ohjaus-**kohde** tunnistetietojen suojaus silti pätee — kun ei ole käytettävää näkökohdetta, pyyntö siirtyy kuvausvaiheeseen, joten raakakuvat eivät koskaan saavuta pelkästään tekstipohjaista taustajärjestelmää (#8430). |

Pakotetut moodit lyhentävät **ennen** automaattista heuristiikkaa; `auto`-käyttäytyminen
on tavu-tasolla identtinen pre-PR-1 guardrailille.

#### API-avainalue (`visionBridgeKeyScope.ts`)

Kun kutsujan API-avain rajoittaa `allowedConnections`, kiintiöaltaat
(`allowedQuotas`) tai mallit (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), silta valitsee vain
ohjaus- ja kuvausmallit, joita avain voi käyttää, niillä yhteyksillä, joita avain voi
käyttää. Kuvauskutsu kulkee aina OmniRoute-itsekierron läpi
`x-omniroute-self-loop-key-id`-otsikolla, joten vastaanottava chat-pyyntö
valvoo jälleen kyseisen avaimen yhteys- ja mallipolitiikkaa. `enforceApiKeyPolicy()`
kunnioittaa tätä otsikkoa vain yhdessä itsekierron kantajan kanssa, joten se voi vain
supistaa pääsyä, ja id, joka ei ratkea, hylätään.

Jos avaimelle ei sallita näkömallia, kuvauspolku väistää ja
pyyntö kulkee muuttumattomana, sama epäonnistuminen-avoin käyttäytyminen kuin poistettu guardrail (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Pyynnöt ilman avainta ja avaimet ilman näitä rajoituksia käyttäytyvät täsmälleen kuten ennen.

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
pyynnössä — tämä oletus sovelletaan erikseen, ja vain havaittuille OpenCode
asiakkaille, `defaultImageDetail()`-funktiossa (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropicin langanmuotoisen kuvaus itse-silmukan haarassa ei ole `detail`-kenttää
ja se ei ole vaikuttanut kumpaankaan oletukseen.

#### Kuvausulostulojen raja (`modalityBridgeVisionMaxChars`)

| Avain                          | Oletusarvo | Vaihtoehdot       |
| ------------------------------ | ---------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`        | `0` tai 100–50000 |

`0` (oletusarvo) tarkoittaa **ei rajaa** — `callVisionModel()` palauttama
kuvaus kulkee läpi muuttamattomana, säilyttäen olemassa olevan
käyttäytymisen. Mikä tahansa arvo 100–50000 -alueella lyhentää kuvausta
`…`-liitteellä ennen kuin se liitetään takaisin muodossa `[Image N]: <kuvaus>`
(`VisionBridgeGuardrail.preCall()` tiedostossa `src/lib/guardrails/visionBridge.ts`).
Nosta tätä yksityiskohtaisille OCR-tehtäville, joissa alhaalla oleva malli
tarvitsee täydellisen transkription; laske se rajoittamaan token-käyttöä
puheliailla visiomalleilla. Hallintapaneelin kenttä sijaitsee Vision-välilehden
Lisäasetukset-paneelissa (`modality-bridge-max-chars` tiedostossa
`ModalityBridgeVisionTab.tsx`) ja rajoittaa minkä tahansa arvon 1 ja 99
välillä 100-kerroin, jättäen erikseen määritellyn `0` koskemattomaksi —
`0` on itsessään voimassa oleva Zod-arvo
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ei vain
"asetettu" oletus.

#### Kuvausvälimuisti (`modalityBridge/bridgeCache.ts`)

Muistiin perustuva LRU + TTL välimuisti kuvausulostuloille, jaettu prosessin laajuisesti.
Avain = `sha256(imageRef + composedPrompt + configuredBridgeModel)` pituus-etuliitteellä
rajaus (ei kenttärajan törmäyksiä). Mallikomponentti on **määritetty** silta-malli,
ei malli, joka oikeasti vastasi — `callVisionModel` voi palata sisäisesti,
ja avaimen asettaminen yrityksen mukaan hajottaisi välimuistin. Epäonnistuneita
kuvauksia ei koskaan välimuistita. Asetukset:

| Avain                           | Oletusarvo | Vaihtoehdot |
| ------------------------------- | ---------- | ----------- |
| `modalityBridgeCacheEnabled`    | `true`     | —           |
| `modalityBridgeCacheTtlMinutes` | `60`       | 1–1440      |
| `modalityBridgeCacheMaxEntries` | `200`      | 10–5000     |

#### Etäkuvan normalisointi (itse-silmukka kuvaus/base64-haku)

Kun silta hakee **etä**kuvaa itse — Anthropicin kuvaus itse-kutsu ja claude-langamuotoisen
base64-muunnoksen (`ensureBase64ImagesForClaudeWire`), molemmat kautta
`fetchRemoteImageAsDataUri()` tiedostossa `visionBridgeHelpers.ts` — tuloksena oleva
data URI kulkee `normalizeDataUri()`-funktion läpi
(`open-sse/utils/imageNormalize.ts`) ennen kuin se upotetaan visiomallin
pyyntöön. Yli kokoiset kuvat pienennetään **2048px pitkään reunaan** (vastaten
kokoontumisen rajaa, jonka OpenAI/Anthropic jo soveltavat palvelinpuolella),
mikä vähentää latausbitejä/viivettä muuttamatta sitä, mitä visiomalli näkee.
Kokoontuminen käyttää `sharp`-kirjastoa, joka ladataan dynaamisen tuonnin kautta:
alustalla, jossa sen natiivibinaari epäonnistuu latautumaan, `normalizeDataUri()`
**ei koskaan heitä poikkeusta** — se palaa alkuperäisten baittien läpivientiin,
joten kuvaus/base64-muunnospolku toimii aina. Ei-kuva baitteja (haku, joka ei
palauttanut dekoodattavaa kuvaa) kuljetetaan myös läpi muuttamattomina. Tämä
normalisointi on rajattu kuviin, joita silta hakee omaa itse-kutsua varten —
sitä ei koskaan sovelleta kutsujan raakamuotoiseen läpipääsykuormaan, johdonmukaisesti
opt-in vain muutosperiaatteen (Hard Rule #20) mukaisesti.

#### Asetusten skeema + migraatio

Uudet `modalityBridge*` avaimet ovat Zod-validated `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*` -trio, ja
`modalityBridgeAudio*` -ryhmä, jota Audio Bridge käyttää. Migraatio
`141_modality_bridge_settings.sql` kopioi olemassa olevat perintö
`visionBridge*` arvot vastaaville uusille avaimille (idempotentti, ei koskaan
ylikirjoita operaattorin asettamaa `modalityBridge*` arvoa); perintöavaimet
säilyvät hyväksyttävinä lukemisen varalta yhden julkaisusyklin ajan.

#### Läpinäkyvyysotsikko + tilastot

Kuvausmuunnellut vastaukset sisältävät
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(koottu `buildModalityBridgeHeader()`-funktiolla tiedostossa
`modalityBridge/bridgeStats.ts`, leimattu `withModalityBridgeHeader()`-funktiolla
tiedostossa `src/sse/handlers/chatHelpers.ts`).
Uudelleenohjatut pyynnöt eivät saa **mitään** otsikkoa — kuormaa ei ole
kosketettu ja mallinvaihto on jo näkyvissä vastauksen rungon `model`-kentässä.

`GET /api/modality-bridge/stats` (hallintotodistus, sama taso kuin
`GET /api/settings`) palauttaa muistin sisäiset per-modality laskurit
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` arvoille `vision`, `audio` ja
`video`. `averageLatencyMs` käyttää `latencySamples`, ei kaikkia yrityksiä, nimittäjänä; aikarajattomalla operaatio ei luo nollamilisekunnin
näytettä. `bridged` pysyy taaksepäin yhteensopivana aliaksena onnistuneille
muunnoksille; epäonnistuneet yritykset eivät lisää sitä.
Laskurit nollautuvat prosessin uudelleenkäynnistyksessä suunnitelman mukaan
(telemetria, ei kirjanpito).

#### Hallintapaneelin konfigurointi

Omistettu hallintapaneelin sivu on
`/dashboard/settings/modality-bridge`. Sen URL-osoitteelliset `Vision`, `Audio`,
ja `Video` välilehdet säilyttävät kyselyparametrit vaihtaessaan `tab`-arvoa.
Vision-välilehti paljastaa mahdollistamisen, tilan, mallin valinnan (mukaan lukien automaattisen
oletuksen), tehtäväkohtaisen kehotteen, edistyneet aikaraja/kuva/kuvaus-pituus/välimuisti
rajoitukset, ajonaikaiset
laskurit ja suojatun näytteen pyynnön. Audio-välilehti on myös aktiivinen: se paljastaa
mahdollistamisen, STT-yksinomaisen mallin valitsimen Auto, aikaraja/max-leike rajoitukset, ääni
laskurit ja `input_audio` näytteen testin. Video-välilehti on toiminnallinen: se raportoi
FFmpeg/ffprobe ajonaikaisen tilan — yksi neljästä eksplisiittisestä UI-tilasta (`unknown` kun
tutkimus on käynnissä tai ei voitu suorittaa, `restricted` ei-silmukointipohjaisella
hallintapaneelin isännällä, jossa tutkimus ohitetaan asiakaspuolella, `unavailable` kun on tutkittu
ja vahvistettu puuttuvaksi, tai `available` FFmpeg/ffprobe versioilla) — säilyttää
mahdollisuus/malli/kehys/video/aikaraja rajoitukset, suodattaa mallin valitsimen vision-kykyisille
malleille ja paljastaa video laskurit.

Entinen Vision Bridge -kortti AI-asetuksissa on yhteensopivuuslinkki
uuteen sivuun; se ei enää omista toista kopiota lomakkeesta. Media Providers myös
linkittää Kuvasta-Tekstiin ja Puheesta-Tekstiin työnkulut vastaaviin Modality
Bridge -välilehtiin poistamatta olemassa olevaa Puheesta-Tekstiin leikkikenttää.

**Itse-silmukoinnin hyväksynnän ohitus:** kun kuvaus kutsu kulkee OmniRoute:n
oman `/v1` itse-silmukan (ei-standardi palvelinmalli) kautta, alikutsu lähettää
`x-omniroute-admission-bypass: internal` ja se todennetaan ratkaistulla
itse-silmukan tunnuksella — paikallinen `sk_omniroute` vartija paikallisessa tilassa, tai
operaattorin määrittämä `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` ympäristöavain (#1350) niin
että `REQUIRE_API_KEY=true` käyttöönotot voivat silti suorittaa kuvaus kutsun. Ohitus
kunnioitetaan vain näille tarkalleen tietyille tunnuksille, joten ulkoiset asiakkaat eivät voi käyttää
otsikkoa hyväksynnän ohittamiseen.

Perinteiset oletusarvot löytyvät `src/shared/constants/visionBridgeDefaults.ts`; uudet
tila/tehtäväkohtaiset/välimuisti oletusarvot ja asetusten ratkaisin löytyvät
`src/shared/constants/modalityBridgeDefaults.ts`. Suojakaide paljastaa
`deps` konstruktorivaihtoehdon, jotta testit voivat injektoida väärennetyt `getSettings` ja
`callVisionModel` toteutukset.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Keskeyttää ääntä sisältävät keskustelupyynnöt ennen kuin ne saavuttavat kohteen, joka ei
ole tunnettu ääniinputin hyväksymisestä. Se ei koskaan ohjaa keskustelupyyntöä: ääniosat
käännetään olemassa olevan OpenAI-yhteensopivan moniosaisen päätepisteen kautta ja
valittu keskustelumalli jatkaa tekstikäännöksillä.

Virta:

1. Ratkaise `supportsAudio` kautta `getResolvedModelCapabilities()`. Eksplisiittinen
   palvelinrekisterin metadata voittaa, sitten staattinen mallin metadata, sitten synkronoitu
   `modalities_input`. Ilmoitettu syöttölista ilman `audio` on `false`; ei
   kyvykkyysnäyttö jää `null`. Sekä `false` että `null` aktivoivat
   konservatiivisen sillan, kun taas `true` ohittaa sen.
2. Ratkaise `modalityBridgeAudio*` asetukset ja poimi yhdistettävät ylimmät
   ääniosat jokaisesta viestistä jaetun `detectMediaParts()`
   tunnistimen kautta. Tuetut johdinosat ovat OpenAI `input_audio`, `audio_url`, ja
   `source.media_type: "audio/*"`. Sisäistä ääntä havaitaan reitittämistä varten, mutta ei
   poisteta yhdistämispolulta. Työ on rajattu `modalityBridgeAudioMaxClips`; myöhemmät osat jäävät
   koskemattomiksi.
3. Kunnioita määritettyä `provider/model`, tai anna `selectAudioBridgeModel()` kävellä
   `AUDIO_TRANSCRIPTION_PROVIDERS` vakaassa luettelossa ja valita ensimmäinen
   malli, jolla on käytettävissä oleva aktiivinen palvelin tunnus.
4. `callAudioTranscription()` muuntaa base64/data-URI äänen moniosaiseksi
   `file`, tai lataa etä `audio_url` julkisen vain ulospäin suojan kautta, jossa on DNS-pinning ja 25 MB raja. Se sitten POSTaa tiedoston ja valitun
   mallin paikalliselle `/v1/audio/transcriptions` itse-silmukalle, todennettu
   `resolveSelfLoopBearer()` avulla. Olemassa oleva transkriptioreitti suorittaa normaalia
   tunnuksen hakua, jäähdytys/nopeusrajoituksen käsittelyä ja palvelinjakelua.
5. Onnistuneet kutsut korvaavat osansa `[Audio N]: <transcript>`. Kutsut
   suoritetaan `Promise.allSettled`: yksittäinen epäonnistuminen säilyttää alkuperäisen
   ääniosan (#4012 sopimus). Jos jokainen kutsu epäonnistuu ja kohteen todistetaan olevan
   `supportsAudio === false`, osat muuttuvat
   `[Audio N]: (ei saatavilla — ei STT palvelinta yhdistetty)` (#8430 sopimus). Tuntemattomalle
   kohteelle (`null`), kaikki epäonnistumiset pysyvät koskemattomina. Todistetulle
   tekstiyksinomaiselle kohteelle, jolla ei ole käytettävissä olevaa STT tunnusta, annetaan sama eksplisiittinen
   stub ilman verkkokutsua.

Onnistuneet transkriptiot käyttävät prosessikohtaista Modality Bridge LRU/TTL välimuistia. Avaimet yhdistävät äänen viittauksen, vakaan `audio-transcription` operaatio
tunnuksen ja valitun STT mallin; epäonnistumisia ei koskaan välimuistita. Ääniyritykset päivittävät
jaettua `bridged`, `cacheHits`, `failures`, ja `lastUsedAt` laskuria.
Muunnetut vastaukset sisältävät
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; koskemattomat
pyynnöt eivät saa Audio Bridge -segmenttiä.

Ajonaikaiset asetukset ovat DB-taustaisia ja Zod-validated:

| Avain                         | Oletusarvo | Vaihteluväli    |
| ----------------------------- | ---------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`     | —               |
| `modalityBridgeAudioModel`    | `""`       | Auto tai STT ID |
| `modalityBridgeAudioTimeout`  | `60000`    | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`        | 1–10            |

Jaettu välimuisti pysyy hallinnassa `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ja `modalityBridgeCacheMaxEntries` avulla.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Kaappaa ylimmän tason video-osat Chat Completions `messages` ja Responses
API `input` ennen kuin kohde, jolla ei ole tunnettua natiivia video-tukea, kutsutaan.
Tuetut muodot ovat `input_video`, `video_url`, `video_source`, HTTPS-URL-osoitteet,
ja `data:video/*;base64,...` data URI:t. Pelkkiä tiedostonimiä tekstissä ei käsitellä
videona.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) vastaa pyyntöjen kulusta,
kyvykkyys/politiikka tarkistuksesta, pyyntökohtaisesta aggregoinnista ja
vastauksen kuormasta. Per-video työ — hankinta, koko tuloksen välimuisti,
kehysten sekvenssin kuvaaminen (joka yhdistää kaikki kutsujan määrittelemät
äänitranskriptiot) ja yrityskohtaiset mittarit/peruutus/puhdistus — on piilotettu
`processVideoPart`-funktion taakse `videoBridgePipeline.ts`:ssä, jota kutsutaan
kerran per video-osa `preCall`-silmukan sisällä. Tämä moduuli määrittelee myös
ilmeiset porttirajat `VideoMediaBrokerPort` (tietojen hankinta ja näytteiden
kuvausten poiminta), `VideoAudioTranscriptionPort` (yhdistää kutsujan
määrittelemän äänitranskription näytettyihin tekstityksiin) ja
`VideoDrilldownPort` (perinteinen raakatallennemuoto). Tuotannon STT ja
kehysten säilytys koostuvat kuvaavan portin ympärille `createVideoSttAdapter`
ja `createVideoDrilldownAdapter` avulla; jälkimmäinen käyttää jaettua
epäselvää käsittelysykliä.

Julkinen `/v1` pyyntöpolku ei koskaan tuo tai kutsu aliprocessia. Etävideot
ladataan 50 MiB rajoituksen alaisena; inline base64 videotilla on
konservatiivinen 36 MiB dekoodattu per-video raja, jotta malli/viestit/kehys
kuori voivat pysyä julkisen JSON-pyynnön hyväksymisrajan sisällä, joka on 50 MiB.
Inline pituus ja dekoodattu koko arvioidaan ennen allokointia. HTTPS on
vaadittu alkuperäiselle etä-URL-osoitteelle ja jokaiselle uudelleenohjaukselle,
käyttäen olemassa olevaa julkista vain ulospäin suuntautuvaa suojaa DNS-pinnauksella.
Tiedot ylittävät tarkasti sisäisen `POST /api/modality-bridge/video/extract`
välittäjärajan. Tämä reitti on sekä `LOCAL_ONLY` että `SPAWN_CAPABLE`,
hyväksyy vain prosessikohtaisen todennetun, luotettavan silmukan pyynnön,
eikä koskaan hyväksy URL-osoitetta, tiedostopolkuja, suoritettavia tiedostoja
tai argumenttiluetteloita. API:n ruumiin koko putki ja käsittelijän
incremental body reader valvovat itsenäisesti 50 MiB välittäjän syöttörajaa.
Sen rajattu jono suorittaa yhden poiminnan kerrallaan, sallii neljä odottavaa
työtä ja rajoittaa odottavan syötteen 100 MiB:iin.

Välittäjässä `ffprobe` lukee yksityistä paikallista tiedostoa; kiinteä
muotoilulista sulkee pois soittolista- ja manifestiformaatit. Hyväksytyille
MOV-perheelle tarkoitetuille säilöille ulkoiset MOV-tietoviittaukset pysyvät
oletusarvoisesti pois käytöstä, eikä kiinteä komento valitse niitä. Sekä
`ffprobe` että `ffmpeg` käyttävät vain `file`-protokollan valkoista listaa,
yhtä säiettä, kiinteitä argumentti taulukoita, ei shelliä, ja suoritettavia
tiedostoja, jotka on ratkaistu `PATH`:ista. Liitetyt kuvat peittosarjat eivät
ole toivottuja ehdokkaita. Kaikkien toivottujen virtojen on täytettävä rajat,
ja ilmeinen oletusvirta on suositeltava ennen determinististä alinta indeksi
varaa. Videot rajoitetaan 600 sekuntiin, 8,192 pikseliin per ulottuvuus, ja
33,554,432 lähdepikseliin. FFmpeg ottaa näytteitä 1–16 keskikohtaisista JPEG
kehyksistä, skaalaa pitkän reunan enintään 1,024 pikseliin ilman pienempien
syötteiden suurentamista, eikä koskaan vastaanota URL-osoitetta. Näytteenotto
on oletusarvoisesti `uniform`. Valinnainen `scene_aware` ja kokeellinen
`segment_aware` politiikka suorittaa yhden lisäkiinteän FFmpeg-kierroksen
jo vahvistetulle paikalliselle virralle, valitsee rajattuja `showinfo`
kohtauksen aikaleimoja, ja palaa deterministisesti samoihin
yhtenäisiin keskikohtiin tunnistimen epäonnistumisen, aikarajan, virheellisen
tuloksen tai tyhjien ehdokasjoukkojen yhteydessä. Segmentti-tietoinen tila
allokoi keskikohtanäytteet suhteessa vahvistettuihin kohtausväleihin;
segmentti-tietoisen todisteen ja varautumiskäyttäytymisen yksityiskohdat
ovat alla. Kova 16-kehyksen raja on
sovellettava valinnan jälkeen jokaisessa politiikassa. Kun kohtaus-tietoinen
pyyntö on vain yhden kehyksen budjetilla, se käyttää aktiivisen koko-videon tai
fokusoidun ikkunan yhtenäistä keskikohtaa ja raportoi `policyEffective: uniform`:
yksi valittu kohtauskehys ei voi säilyttää molempia ajallisia päitä. Kutsuja voi
valinnaisesti antaa rajallisen fokusoidun ikkunan (`start`/`end` sekuntia);
rajat rajoitetaan median keston mukaan, käänteiset tai ei-rajoitetut ikkunat
hylätään, ja kaikki näytteenottopolitiikat suoritetaan vain normalisoidun
välissä. Tuloksena oleva ikkuna sisällytetään näytteenottometatietoihin ja
epäluotettavan kuvauksen etuliitteeseen, jotta alavirran mallit voivat
erottaa fokusoidun otteen koko aikajanasta.

Semanttinen tekstityksen fokus on erillinen, ilmeinen asetus. Oletusarvoinen
`full` analyysitila säilyttää olemassa olevan kehyskehotteen eikä koskaan
lähetä pyyntötekstiä tekstitysmallille. `focused`-tilassa silta lukee vain
viimeisimmän ei-tyhjän käyttäjän kirjoittaman `text`/`input_text` samasta
Chat- tai Responses-kontista, normalisoi sen NFC:ksi, tiivistää ohjausmerkkejä
ja tyhjää tilaa, ja rajoittaa sen 500 Unicode-koodipisteeseen. Tyhjät tulokset
palaavat tarkalle `full` kehotteelle. Käytettävä vihje sarjoitetaan JSON-muotoon
erityisessä epäluotettavassa käyttäjäkontekstiblokissa ja voi vain priorisoida
havaittavia yksityiskohtia; se ei voi ohittaa erillistä varoitusta
ohjeiden seuraamisesta, jotka ovat näkyviä tai kuultavissa mediassa.
Tekstuaalinen fokus ei koskaan päättele `start`/`end` tai muuta
ajallista näytteenottajaa.

#### FU-07 rakenteellinen segmenttitodistus

`segment_aware` käyttää yhtä rajattua esianalyysikierrosta jo validoidusta paikallisesta videovirrasta. Kiinteä suodatinputki skaalaa ensin korkeintaan 320 pikselin levyiseksi, havaitsee kohtausmuutoksia ja jäätyneitä jaksoja, ja näyttelee sitten 1 kuvaa sekunnissa sumeuden, keskimääräisen luminanssin ja spatiaalisen/aikaisen tiedon osalta. Kierros on rajoitettu 600 rakenteelliseen näytteeseen, yhteen FFmpeg/suodatinlankaan, samaan `file`-vain protokollaan ja säiliöluetteloon, 1 MiB prosessin ulostulorajaan, ja korkeintaan 30 sekuntiin välittäjän jaetussa keskeytyksessä/ajanrajoituksessa. Se ei koskaan hyväksy komentoa, suodatinta, polkua tai URL-osoitetta pyynnöstä.

Rakenteelliset arvot ovat deterministisiä näytteenottotodisteita, eivät semanttista videon ymmärtämistä. Ne eivät päättele aiheita, toimintoja, tekstityksiä, puhetta tai käyttäjän aikomuksia. Kohtaus- ja jäätymisrajat muodostavat segmenttejä; jäätymispeitto, sumeus, altistus, spatiaalinen yksityiskohtaisuus ja aikamuutos vaikuttavat vain siihen, miten olemassa oleva 1–16 kuvan budjetti jaetaan. Täysin jäätynyt segmentti on rajoitettu yhteen kuvaan, kun taas ei-jäätyneet segmentit kilpailevat jäljellä olevasta budjetista. Kun rajat ylittävät kuvat, säilytetään tasainen aikajana, jotta nopeat aikaiset leikkaukset eivät voi piilottaa pitkää jälkisegmenttiä. Kohtausrajat, jotka ovat 1 sekunnin analyysiresoluution sisällä jäätymisrajasta, yhdistetään.

Puuttuvat suodattimet, väärin muotoillut/tyhjät todisteet, havaitsemisvirhe tai rajattu esianalyysin aikakatkaisu epäonnistuvat avautumaan tarkalle tasaiselle keskipistepolitiikalle. Soittajan keskeytys tai välittäjän aikaraja ei epäonnistu avautumaan: se lopettaa käynnissä olevan aliprocessin, estää myöhemmän kuvan poiminnan, ja yksityinen väliaikainen puu poistetaan `finally`-osiossa.

`scripts/perf/video-bridge-fu07-eval.ts` tuottaa deterministisiä oikeita FFmpeg-laitteita jälkikäsittelyyn liittyvistä tekstityskustannussäästöistä, tiheäliikettä budjetin jakamisesta, sumeus/altistus/SI-TI-todisteista, nopeista leikkauksista pitkällä hännällä ja vähittäisvaikutuksista vääristä positiivisista. Se tallentaa esianalyysin seinäajan ja, missä `/usr/bin/time` on saatavilla, lapsen CPU:n ja huippu RSS:n. Sen laatutarkastukset ovat vain rakenteellisia oraakkeleita. Oikean tekstimallin laatu pysyy `HOLD`-tilassa, koska tällä välineellä ei ole valtuutettua päätepistettä tai jäätynyttä tuomaria. Rahalliset säästöt pysyvät myös `HOLD`-tilassa, ellei `--caption-cost-per-call-usd` anna eksplisiittistä positiivista arvioita per kutsu; skripti ei koskaan valehtele kumpaakaan tulosta.

Jokainen kuva on rajoitettu 4 MiB:iin, kaikki raakakuvat yhteensä 23 MiB:iin, ja sarjallistettu välittäjän vastaus 32 MiB:iin. Yksityinen väliaikainen hakemisto poistetaan `finally`-osiossa. OmniRoute ei pakkaa FFmpegia eikä hyväksy mukautettua suoritettavaa polkua. Ennen tekstitystä silta soveltaa konservatiivista visuaalista deduplikointikierrosta: jokainen JPEG vähennetään 16×16 harmaasävyiseen puskurimuotoon ja verrataan vain viimeiseen säilytettyyn kuvaan. Pyydetyn tekstitysbudjetin ollessa yli yhden kuvan, poiminta tarjoaa rajatun ehdokasjoukon, joka on korkeintaan kaksinkertainen tuohon budjettiin, eikä koskaan yli 16 kuvaa. Pyydetty katto sovelletaan vain deduplikoinnin jälkeen, ja ensimmäiset ja viimeiset valitut ehdokkaat säilytetään lopullisessa ohenemisessa, kun budjetti on vähintään kaksi. Versioitu `grayscale-16x16-mean-cells-v2` -politiikka käyttää suurempaa keskimääräistä luminanssin deltaa ja thumbnail-solujen suhdetta, jonka normalisoitu delta on vähintään 0.05. Kaksoiskappaleen kynnys on vakio 0.04, valittu ennakoitavuuden vuoksi eikä paljastettu ajonaikaiseksi asetukseksi. Tämä toissijainen korkean kontrastin signaali säilyttää pienet liikkeet ja näkyvän tekstin muutokset, joita vain keskimääräiseen vertailuun perustuva vertailu voi piilottaa. Vertailija- tai dekooderivirheet epäonnistuvat avautumaan ja säilyttävät peiton. Ulostulo metadata erottaa poimitut ehdokkaat, onnistuneesti käytetyt kuvat ja visuaalisesti pudotetut kaksoiskappaleet.

Erityisesti merkitty videon osa voi pyytää aikaleimattua kontaktisivua. Silta rakentaa korkeintaan 4-sarakkeisen, 16-kuvan JPEG-ruudukon. Jokainen 512-pikselin solu polttaa lähteen aikaleiman korkeakontrastiseen alaosaan, kun taas samat aikaleimat pysyvät tekstuaalisessa metadatassa alavirran yhdistämistä ja tarkastusta varten. Täydellinen JPEG pysyy rajoitettuna 32 MiB:iin. Jos `sharp` ei voi purkaa tai koostaa ruudukkoa, silta palaa yksittäisiin JPEG-kuviin; asiakaskeskeytys leviää silti läpi sivuoperaation.

Edistämistodisteet ovat tarkoituksellisesti eristettyjä synteettisestä koostumuksen mikrotestistä. `scripts/perf/video-bridge-contact-sheet-eval.ts` määrittelee skeemaversioidun A/B-välineen oikeille OpenAI-yhteensopiville visiomalleille. Se mittaa toimittajan ilmoittamia tokeneita, end-to-end seinäviivettä (mukaan lukien sivun koostaminen), mallikutsujen määrää ja manifestin määrittämää faktan säilyttämistä. Raakoja mallivastauksia ei kirjoiteta raporttiin; vain SHA-256-hajautukset ja vastaavat faktan ID:t säilytetään. Väline ei tee verkkoyhteyksiä tai maksullisia mallikutsuja, ellei `--execute-real` ole annettu ja `--model`, `OMNIROUTE_BASE_URL` ja `OMNIROUTE_API_KEY` on määritetty. Ilman tuota eksplisiittistä oikeaa suoritusta sen koneellisesti luettava tuomio pysyy `HOLD`-tilassa; synteettiset kuormitus/kutsumittaukset eivät yksinään ole edistämistodisteita.

Erillinen `scripts/perf/video-bridge-promotion-eval.ts` kuluttaa FU-07 tai FU-09 havaintoja. Edistämisen hyväksyminen vaatii kaikki kahdeksan synteettistä skenaariotyyppiä sekä puhdistetun oikean klipin, vähintään kolme mitattua toistoa per rooli ja tapa, kaikki kymmenen ilmoitettua metriikkaa, jäädytetyt media/prompt/odotetut faktat/asetukset hajautukset, ainutlaatuiset havainto-ID:t ja vahvistetut siemen A/B -järjestys. Suorituskuitti sitoo kokoelman hajautuksen, tarkan ehdokashajautuksen ja malliversion. Puuttuvat tai virheelliset mittaukset pysyvät `HOLD`-tilassa, mukaan lukien CPU yli 30 s, huippu RSS yli 512 MiB tai esianalyysi yli 30 s. Nämä ovat todisteiden hyväksymisen kattoja, eivät uusi ajonaikainen RSS:n täytäntöönpanotakuu.

FU-07 vaatii vähintään 98 % laadun säilyttämistä ja p95-latenssia, joka ei saa ylittää 1,2-kertaista
perustasoa, sekä joko 0,05 absoluuttista tapauskohtaisesti tasapainotettua keskimääräistä palautusparannusta
vastaavilla keskimääräisillä kuvatekstikutsuilla tai vähintään 10 % vähemmän keskimääräisiä
post-dedup- kuvatekstikutsuja. FU-09 vaatii vähintään 0,85 laatua, 95 % säilyttämistä, 20 % p95-latenssin
vähennystä ja 10 % token-vähennystä. Kriittinen faktahäviö, injektiovaatimusten noudattamatta jättäminen tai
puuttuva käyttö estää ylennystä. Yksi suoritus ei voi ylentää mitään: `--previous-report` vahvistaa kaksi
erilaista, päällekkäistä, peräkkäin kelvollista suoritusta saman politiikan/mallin tarkistuksen/kandidaatin/korpuksen
osalta. Otoskokeilu ei voi vahvistaa kontaktisivukokeilua.

Kerääjien tulisi arvioida vastauksia muistissa ja tallentaa `responseDigest` sekä
mittarit ja havaintosidokset, mutta ei koskaan vastaustekstiä. Kuluttaja lukee myös
perinteisiä raakahavaintoja, mutta ei koskaan kopioi tätä tekstiä raportteihinsa. Tarkalleen
yksi `responseDigest` tai `rawResponseText` hyväksytään kutakin havaintoa varten.
Versioitu sallittujen listojen luettelo pysyy tyhjänä muuttumattomalla `hold` oletuksella. Kelvollinen
merkintä vaatii todisteviittauksen, politiikan, mallin tarkistuksen, tarkan kandidaatin SHA:n,
manifestin tiivisteen ja kaksi erilaista suoritustunnusta; ristiriitaiset kontekstit
hylätään. Nämä metatiedot ovat tarkastussopimus, eivät todiste siitä, että viitattu
tiedosto sisältää aitoja mittauksia. Tarkista todelliset kuitit ennen minkään merkinnän
lisäämistä. Hallintastatistiikan päätepiste ja Video-hallintapaneeli paljastavat konservatiivista
valmiutta. Vain konfiguroitu malli alias ei määritä sen tarkistusta tai
käynnissä olevaa kandidaatin SHA:ta, joten nykyinen hallintapaneeli raportoi `HOLD`
sen sijaan, että se käyttäisi kelpoisuutta toisesta suorituskontekstista. Ilmoitettu kokeellinen
valinta pysyy erillään ylennyksestä; oletusta ei muuteta automaattisesti.

Kutsujat voivat liittää valinnaisen `transcript.cues`-taulukon tuettuun videon
osaan, kun heillä on jo kohdistettu teksti. Jokaisen vihjeen on sisältävä `text`, rajallinen
`start`/`end`-väli tutkittavan keston sisällä, ja valkoistetun `source`-arvon
(`client`, `embedded` tai `audio-bridge`); `confidence` oletusarvo on `1` ja sen on
pysyttävä välillä `0` ja `1`. Tarkat kaksoisvihjeet yhdistetään. OmniRoute ei koskaan
aloita transkriptiota tästä metadatasta: validoidut vihjeet kopioidaan kuvattuun tulokseen
lähteen, luottamuksen ja välin kanssa, ja ne esitetään epäluotettavina havaintoina
yhdessä kehyksen kuvatekstien kanssa. Virheelliset, alueen ulkopuoliset tai alkuperättömät
tekstit hylätään sen sijaan, että ne sekoitettaisiin kuvatekstivirtaan. Molemmat
request-body transkriptiokanavat normalisoivat toimitetun alkuperän `client`:iksi,
mukaan lukien itse väitetyt `embedded` tai `audio-bridge`-tunnisteet. Vain palvelimen
omistama adapteri voi määrittää nämä luotettavat tunnisteet koodipohjaisella
`trustedSource`-argumentilla; pyyntö JSON-kenttä ei voi saavuttaa tätä argumenttia.
Transkriptiteksti pysyy epäluotettavana mediaan liittyvänä sisältönä, riippumatta sen
alkuperästä, eikä sen koskaan tule määrittää valtuutusta.

Edistynyt kutsuja voi tarjota `audioTranscript`-raidan samalle videolle; sitä käsitellään
asiakkaan tarjoamana tekstinä, ei todisteena palvelimen transkriptiosta. Fuusioreuna
suorittaa visuaalisia ja äänihavaintoja yhden määräajan ja keskeytyssignaalin alla,
järjestää ne yhteiselle aikajanalle, yhdistää tarkat kaksoiskappaleet ja raportoi osittaisen
tuloksen, kun vain yksi puoli onnistuu. Virheellinen `audioTranscript` heikkenee
tuohon osittaiseen tulokseen — visuaalinen kuvaus säilyy ja äänihaara tallentaa
puhdistetun virhekoodin — sen sijaan, että koko video epäonnistuisi. Jokaisen haaran
saatavuus, osittainen lippu ja puhdistetut virhekoodit säilytetään kuvatussa tuloksessa,
suojapalkin metatiedoissa (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), tulosvälimuistin metatiedoissa ja sillan fuusiolaskureissa.
Oletusarvoinen Video Bridge -polku ei aktivoi puhetta tekstiksi tai lataa toista media
kopiota; ilman tätä eksplisiittistä raitaa se pysyy vain videona.

**Transkriptin säilyttäminen (#12150 P1).** Tämä pätee automaattisesti aina kun
Video Bridge (joka on itsessään opt-in) renderoi transkriptivihjeen — erillistä
säilytyslippua ei ole. Kun pyyntö renderoi minkä tahansa transkriptivihjeen (kutsujan
ilmoittama `transcript` tai fuusioitu `audioTranscript`), suojapalkki merkitsee sen
`videoBridgeObserved` ja tuottaa punastetun varjon videokuvauksesta —
identtinen renderointi, jossa jokaisen vihjeen vapaan tekstin runko on korvattu
`[redacted-video-transcript]`:lla, joka on rakennettu korvaamalla rakenteinen vihje
kenttä ennen merkkijonon kokoamista (ei koskaan tasoittamalla tekstiä, joten mikään
vihjeen sisältö — vihamielinen tai tavallinen, mukaan lukien rungot, jotka sisältävät `]`
kuten `[inaudible]`/`[music]` — ei voi selvitä). Pysyvä kutsuloki pyyntö
korvataan jokainen videoon liittyvä tekstiosa tuolla punastetulla varjolla, joka
on sovitettu sisällön tasa-arvoon; `fullText`-ankkuri luetaan uudelleen valmiista
ennakkokutsun suojapalkin kuormasta, joten osuma onnistuu edelleen myöhempien
ketjun suojapalkkien jälkeen (PII- ja tunnistetietojen peittäjät, prioriteetit 10/95)
kirjoittaa kuvaustekstin paikalle ja sen jälkeen järjestelmän kehotteen/siirron/muistin
injektointi muokkaa viestitaulukkoa. Ylösalaisin lähetetty malli pysyy muuttumattomana.
Havaittu pyyntö ei myöskään täytä mitään kestäviä muistoja (sekä pyyntö- että
vastausperäiset poiminnat ohitetaan), joten mallin oma vastaus ei voi toistaa
transkriptitekstiä muistiin.

**Raakavideokentät (#12430).** Kun silta on käytössä ja natiivivideotukea ei tiedetä tai
se puuttuu, määritellyt `transcript`/`audioTranscript`-kentät aktivoivat myös
`videoBridgeObserved`, jopa kuvausvirheen tai `maxVideos`-rajan jälkeen. `null` ja tyhjät
merkkijonot lasketaan; puuttuvat kentät ja ei-videometatiedot eivät. Säilytetyt kopiot
punastavat nämä kentät tai jättävät pyynnön huomiotta, ja välimuistit/muistit
ohitetaan.

Niillä varapoluilla, kelvolliset kutsujan vihjeet muuttuvat tuetuiksi `text`/`input_text` osiksi sen sijaan, että ne olisivat epästandardeja tarjoajakenttiä. Molemmat pyyntöön toimitetut raidat pysyvät luotettavina `client` havainnoina, ja niihin liittyy selkeä varoitus siitä, että videota ei ole kuvattu ja aikaleimoja ei ole vahvistettu median mukaan. Nykyiset 256-vihjeen/64-KiB kokonais- ja per-vihjeen budjetit pätevät molempiin raidoihin yhdessä; aikaleimojen on mahtuttava välittäjän 600 sekunnin kattoon ja kaikkiin toimitettuihin tarkennusikkunoihin. Kelvottomat raidat hylätään, eikä niitä siirretä satunnaisena tekstinä; kelvollista sisarusta voidaan silti käyttää, ellei niiden yhdistetty budjetti ylity. Null/tyhjät kentät eivät lisää tekstiä. Tämä varapolku ei lisää mediahaun tai transkription. Transkription laajennuskentät poistetaan varavideon kantajasta ja sen `video_url`/`source` objekteista. OpenAI:n langan sallittujen listojen on pysyttävä tiukkana; tuntemattomat alkuperäiset videokantajat pysyvät saatavilla ja tunnetut pelkät tekstikohteet säilyttävät turvalliset merkit. Rakenteelliset punaisuusvarjot suojaavat liitettyä transkriptiotekstiä, kun taas alkuperäinen kutsujan omistama pyyntö pysyy muuttumattomana. Alkuperäisesti tuetut kohteet ja poistettu sillat säilyttävät nykyisen ohituskäyttäytymisensä.

Lisättyjä säilytettyjä kopioita käytetään saman havaittavan pyynnön signaalin avulla. Raaka ennakkosuojattu asiakaspyyntökuva, muistissa oleva odottava pyyntö ja aikaisemmin hylätty pyyntöloki korvaavat rakenteellisesti transkriptiokentät videonosissa; merkkijonokäskyt, jotka on syntetisoitu putkivaiheista ja kontekstisiirroista, punastuvat pysyvän pyynnön rungossa. Pysyvä `video_content_removed` merkki saa `previous_response_id` jatkumisen epäonnistumaan suljetusti sen sijaan, että se rekonstruoisi tekstiä, joka on tarkoituksella hylätty. Jos havaittu pyyntö menettää sen per-vihjeen punaisuusvarjon ennen lokitusta, tai jopa yksi useista videovarjoista epäonnistuu vastaamaan myöhempien pyyntömuutosten jälkeen, säilytetty pyyntörunko jätetään kokonaan pois sen sijaan, että säilytettäisiin osittain punastettu transkripti.

Havaittavalle pyynnölle malli voi lainata mitä tahansa osaa transkriptiosta ilman rakenteellista vihjeen rajaa. Sen pysyvä kutsuloki `responseBody` korvataan siten poistomerkillä; yksityiskohtainen putkitaide (joka voi sisältää ylävirran/asiakkaan runkoja ja virtaosuuksia) ei säilytetä. Semanttiset, idempotenssi- ja päättelytoistokäytävät ohittavat lukemiset ja kirjoitukset kyseiselle pyynnölle. Tarjoajan pyyntö ja asiakkaalle näkyvä vastaus pysyvät muuttumattomina. Varhaiset keepalive-bytit tyhjennetään tilapäisestä puskurista, kun yksityiskohtainen taide jätetään pois. Kiro:n virheellinen EventStream-varoitus raportoi vain kuormabittien määrän, ei koskaan sen sisältöä tai JSON-parserin raakavirhettä. Tämä ei väitä, että jokainen epäolennaisen tarjoajan/plugin-diagnoosi olisi tarkastettu; laajempaa säilytettyjen syöteharavien pyyntöä seurataan #11658.

Sisäinen `/api/modality-bridge/video/drilldown` elinkaarimalli on erillinen, silmukka/tunnistautumiseen perustuva välimuistialusta. Jokainen operaatio vaatii myös kanonisen läpinäkyvän pääasiallisen ID:n. Ennen kuin tuotantokutsuja otetaan käyttöön, sen on johdettava tämä ID todennetusta vuokralaisesta, eikä sen koskaan tule siirtää asiakasvalittua arvoa. Välimuistin avaimet sitovat tämän pääasiallisen kanonisiin istunto- ja videoviite-ID:hin, tallentavat vain niiden SHA-256:sta johdettuja avaimia ja rajaavat sekä lukemiset että poistamisen samaan pääasialliseen. Välimuisti tallentaa enintään 16 johdettua JPEG-ruutua per merkintä, vanhentaa ne kymmenen minuutin kuluttua ja tukee rajattuja `start`/`end` lukemisia tai eksplisiittistä istunnon poistamista.

Jokainen pääasiallinen on rajoitettu 16 merkintään ja 64 MiB kanonista JPEG-dataa. Nämä rajoitukset ovat riippumattomia globaalista 64-merkinnän/256 MiB katosta: pääasiallisen kiintiöpaine tyhjentää vain kyseisen pääasiallisen vähiten käytetyt merkinnät ennen kuin globaali LRU-tyhjennys otetaan huomioon. Vanhentuneet merkinnät poistetaan sekä pääasiallisesta että globaalista kirjanpidosta välimuistitoiminnan yhteydessä, kun taas peruutus ja vahvistusvirhe eivät sitoudu osittaiseen korvaukseen.

Välimuisti hylkää ei-kanonisen Base64:n, ylimääräisen täytteen, ei-JPEG-median, virheelliset tai katkaistut JPEG:t ja JPEG:t, jotka tuottavat varoituksen rajatulla täyden kuvan `sharp` dekoodauksella. Se uudelleenkoodaa jokaisen hyväksytyn kuvan kanoniseksi JPEG:ksi, johdattaa leveyden ja korkeuden dekoodatuista biteistä sen sijaan, että luottaisi kutsujan kenttiin, ja hylkää kaikki jäljellä olevat polyglot-bytit sen sijaan, että säilyttäisi niitä. Vain rajattu kanoninen pakattu puskuri lasketaan molempiin kiintiöihin. JSON-langan raja sisältää Base64-ylihyvityksen 32 MiB dekoodatun syötteen katolle. Jokainen tallennettu johdanto tallentaa sen vahvistetun JPEG-muodon/resoluution, näytteenottopolitiikan, johdannon version, luontiajan, palvelimen laskeman sisällön tiivisteen ja hashatun vanhemman viitteen sekä luotettavan kutsujan vanhemman sisällön tiivisteen. Peruuttaminen tarkistetaan asynkronisten dekoodaus/tiivistysvaiheiden välillä ennen atomista välimuistin sitoutumista.

Tuotannon tuottaja käyttää jo johdettuja välittäjäruutuja vain onnistuneen visuaalisen analyysin jälkeen, ilman toista videon latausta/poimintaa. Se vaatii operaattorin `modalityBridgeVideoDrilldownEnabled=true`, tiukan per-vihjeen `drilldown: true`, ja todennetun API-avaimen merkintä-ID:n. Asiakkaan ilmoittamat pääasialliset/istuntotiedot eivät koskaan vahvista omistajuutta. Ilman kaikkia kolmea ehtoa se ei tiivistä, kokoa tai säilytä lisäruutuja. Säilyttämisen epäonnistuminen säilyttää käytettävän visuaalisen vastauksen. Suostumukselliset pyynnöt ohittavat koko videon tulosvälimuistin, joten välimuistissa olevat tulokset eivät koskaan toista käsittelyjä.

成功的 JSON 和 SSE 响应在有限的 `x-omniroute-video-drilldown` 头中最多暴露四个不透明的句柄。授权的浏览器来源可以在不扩大 CORS 来源策略的情况下读取该头。新句柄使用 `v1.<32-byte random base64url token>`，注册表仅保留它们的 SHA-256 哈希值。读取器/头解析器还接受传统的 64-十六进制令牌。经过身份验证的公共消费者是 `GET /api/v1/video-bridge/drilldown?handle=...`，独立由 `modalityBridgeVideoDrilldownRemoteEnabled=true` 控制。显式持久的 false 撤销访问，即使传统的 `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` 环境回退已启用。生产保留具有类似的传统 `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` 回退。两个回退的默认值均为关闭。

消费者从经过身份验证的密钥派生所有权，应用密钥策略，并对未知、过期和其他密钥的句柄返回相同的 404。它接受 `variant=preview|standard|detail`（最大 JPEG 尺寸 320/640/1280，永不放大），`limit=1..8`（或传统的 `frames` 别名，永不同时），零基 `page`，以及可选的 `start`/`end` 聚焦秒数。重复的查询键和反向聚焦窗口将被拒绝。每个返回的变体都有其实际内容和实际分辨率元数据的哈希，链接到保留的源。变体在读取时派生，而不是作为额外的保留副本存储。JSON 响应，包括 Base64/信封，限制为 32 MiB；超大的页面返回 413，客户端必须请求更少的帧。读取在每次调整大小时检查取消，并在返回之前重新检查句柄的有效性。所有者的 `DELETE` 是幂等的；删除或 TTL 过期释放保留的源和使用会计。

共享存储是进程本地的：句柄在重启时过期，并且不能在独立的 OmniRoute 进程之间转移。管理统计信息仅暴露有效的保留/远程策略和聚合的保留条目/字节，永不包括媒体、引用、主体 ID 或句柄。视频设置面板显示这些值，并可以持久化两个同意开关。此实现文档不是实时部署或推广证据；真实模型的接受情况单独跟踪。

帧按配置的视频模型顺序加上字幕。空的视频覆盖继承视觉设置；如果两者都为空，视觉自动路由器选择有效的视觉能力模型。成功的字幕用稳定的 `[Video description:` 前缀替换原始部分，该前缀还将文本标记为不可信的媒体派生观察，并告诉下游模型不要遵循媒体中找到的指令。帧字幕缓存键包括 JPEG 字节、提示、时间戳和有效模型；仅成功的字幕会被缓存。缓存条目保留实际成功的生产者模型，包括回退模型；当不同的帧由不同的模型生成时，桥报告 `mixed`。缓存命中重用该生产者身份，而不是将其重新标记为请求的路由计划。整个视频结果缓存以每个更改输出的输入为键 — 提示、有效模型、采样策略、帧计数、语义分析模式、标准化聚焦提示的 SHA-256 指纹、聚焦窗口、`transcript`、`audioTranscript` 和联系表标志 — 因此更改任何这些维度都是缓存未命中，而不是过时的重用。视觉去重策略版本、阈值和有限候选帧计数在结果缓存键和元数据中也是明确的；因此，策略更改不能重用过时的整个视频描述。结果缓存 v4 元数据保留模式和指纹，而不是原始用户任务。护栏元数据报告请求和有效的分析模式；请求的 `focused` 模式在没有可用用户文本的情况下被报告为有效的 `full`。

护栏提取每个支持的视频部分，但不描述超过 `modalityBridgeVideoMaxVideos`。对于已证明 `supportsVideo === false` 的目标，失败和超限的视频成为显式安全文本标记，因此没有原始视频存活。当能力未知时，这些部分保留其视频载体；任何回退的转录遵循上述有限文本转换。具有 `supportsVideo === true` 的目标绕过桥接。客户端请求中止信号通过下载、代理队列、子进程和字幕调用传播；中止在视频之间停止，绝不会失败为原始媒体。

运行时设置是基于数据库的，并经过 Zod 验证：

| Key                                 | Default     | Range / behavior                                                                                                 |
| ----------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Valinnainen ajonaika, opt-in                                                                                     |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` säilyttää yleiset tekstitykset; `focused` käyttää rajattua, epäluotettavaa viimeisintä käyttäjäkontekstia |
| `modalityBridgeVideoModel`          | `""`        | Perii Vision Bridge -mallin                                                                                      |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                             |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` tai suhteellinen `segment_aware`; tunnistimen epäonnistuminen palautuu `uniform`        |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                              |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                   |

Legacy-persistoidut Video-aikakatkaisut, jotka ovat yli 120 sekuntia, rajoitetaan
välittäjän määräaikaan; uudet asetukset, jotka ylittävät tämän rajan, hylätään.
`GET /api/modality-bridge/video/runtime` vaatii luotetun leimattua loopback
paikallisuutta ennen todennusta tai ajonaikaista tutkimista, ja se vaatii sitten
hallinta-autentikoinnin. Se palauttaa vain `available`, puhdistetut FFmpeg/ffprobe
versiot, ja kiinteän syyn, kun ajonaika ei ole saatavilla. Sisäinen
poiminta-päätepiste ei ole julkinen lataus-API: jono saturaatio palauttaa `503`
plus `Retry-After`, soittajan katkaisu palauttaa `499`, ja kiinteä välittäjän
määräaika palauttaa `504`. Muunnetut vastaukset lisäävät
`video->text;model=<visionModel>;parts=<videos>` keskeiseen
`x-omniroute-modality-bridge`-otsakkeeseen poistamatta Vision tai Audio
segmenttejä.

### PII Masker (`piiMasker.ts`)

Toimii **molemmilla** vaiheilla.

- **`preCall`** kloonaa kuormituksen, käy läpi `system`, `messages`, `input` ja
  `prompt` (mukaan lukien tavalliset merkkijono-alkiot), ja soveltaa
  `processPII()` (osoitteesta `@/shared/utils/inputSanitizer`) merkkijono
  `content`/`text` kenttiin. Kun `PII_REDACTION_ENABLED=true`, havaittu PII
  poistetaan ulkoisesta kuormituksesta. Tämä on riippumaton `INPUT_SANITIZER_MODE`
  (joka ohjaa vain prompt-injektio politiikkaa). Kun punaisuus on pois päältä,
  kutsu tallentaa havaintomäärät ilman sisällön uudelleenkirjoittamista.
- **`postCall`** syväkloonaa vastauksen, suorittaa `sanitizePIIResponse()` plus
  Responses-API-muoto masker (`maskResponsesOutput` — kattaa
  `output_text` ja `output[].content[].text`). Jos punaisuutta tapahtuu, muokattu
  vastaus korvataan alkuperäisellä.

Turvakaide ei koskaan estä; se vain merkitsee (`meta.detections`,
`meta.redacted`) tai uudelleenkirjoittaa.

### Prompt Injection (`promptInjection.ts`)

Havaitsee vihamielisiä rakenteita käyttäjän toimittamassa sisällössä ja valvoo
konfiguroitua politiikkaa. Käyttäytyminen määräytyy ympäristömuuttujien ja
konstruktorivaihtoehtojen mukaan:

| Asetus     | Ympäristömuuttuja                                                                                         | Oletus | Vaikutus                                                                                                                                                                                                        |
| ---------- | --------------------------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Käytössä   | `INPUT_SANITIZER_ENABLED`                                                                                 | `true` | Kun `false`, turvakaide ohittaa.                                                                                                                                                                                |
| Tila       | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                           | `warn` | Injektio politiikka: `block`, `warn` tai `log`. (`redact` hyväksytään taaksepäin yhteensopivuutta varten, mutta se **ei** poista injektiotekstiä; PII:n uudelleenkirjoitus on ohjattu `PII_REDACTION_ENABLED`.) |
| Estokynnys | `blockThreshold` vaihtoehto / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Vähimmäisvakavuus, joka vaaditaan estämiseen. Keskitaso on vain tarkkailua oletuksena.                                                                                                                          |

**Tilan etusija** (`getMode`): kutsujan `options.mode` →
`INJECTION_GUARD_MODE` **DB ominaisuus-lippu ylikirjoitus** (Dashboard → Asetukset →
Ominaisuusliput) → `INJECTION_GUARD_MODE` ympäristö → `INPUT_SANITIZER_MODE` ympäristö →
`warn`. Dashboardin ylikirjoitus voittaa siten ympäristömuuttujat, joten Ominaisuusliput UI ohjaa käynnissä olevaa turvakaidetta reaaliaikaisesti (ilman uudelleenkäynnistystä). DB-luku on vikasietoinen:
jos se virheilee, turvakaide palaa ympäristöperusteiseen käyttäytymiseen, ja kun ei ole asetettu ylikirjoitusta, käyttäytyminen on identtinen vain ympäristöön perustuvan ratkaisun kanssa.

Havainnon lähteet:

1. `sanitizeRequest()` osoitteesta `@/shared/utils/inputSanitizer` (jaettu
   havaitsemisjoukko, jota käytetään muualla putkistossa).
2. Sisäänrakennetut `DEFAULT_GUARD_PATTERNS` (tällä hetkellä `system_override_inline` ja
   `markdown_system_block`, molemmat `high` vakavuus).
3. Valinnainen `customPatterns`, joka välitetään konstruktorivaihtoehtojen kautta (merkkijonot, regex,
   tai `{ name, pattern, severity }` -tiedot).

Kun `mode === "block"` **ja** vähintään yksi havainto täyttää vakavuus
kynnysarvon, `preCall` palauttaa `{ block: true, message: "Pyyntö hylätty:
epäilyttävää sisältöä havaittu" }`. `warn`/`log`-tiloissa turvakaide kirjaa mutta
sallii kutsun. Jaettu apuri `evaluatePromptInjection()` on myös viety
kutsujille, jotka tarvitsevat arvioida kehotteita ilman rekisterin kautta menemistä.

**Skannausraja (v3.8.20):** havaitseja tarkistaa vain **ensimmäiset 16 KB**
yhdistetystä kehotetekstistä — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 tavua) tiedostossa
`src/shared/utils/inputSanitizer.ts`. Sekä `detectInjection()` että
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` ennen kaavan silmukkaa. Injektio-ohjeet sijaitsevat lähellä syötteen ykköstä, joten tämä rajoittaa regex CPU/GC: tä useiden satojen KB:n kuormituksilla heikentämättä havaintoa (vrt. #3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Toimii **molemmilla** vaiheilla, viimeisenä oletusketjussa (prioriteetti `95`). Poistaa
hyvin tunnetut API-avain / salainen token -kaavat ulkoisesta kuormituksesta (viestin
sisältö, työkalukutsun argumentit, työkalutulokset) **ja** tarjoajan vastauksesta, joten
kehotteeseen liitetty (tai työkalutuloksen kautta takaisin kaikuva) tunnus ei vuoda
ylöspäin tarjoajalle tai takaisin asiakkaalle.

- **Vain opt-in**, sama käytäntö kuin PII-punaisuus (Kova sääntö #20-viereinen):
  pois käytöstä, ellei `settings.credentialRedactionEnabled === true` **tai**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kun se on pois päältä, suojaraja on ei-toimiva —
  se ei koskaan estä eikä koskaan kirjoita uudelleen.
- `redactCredentials()` käy läpi koko kuorman/vastauksen puun (`walkValue()`,
  prototyyppisaastumisen turvallinen, sykliturvallinen `WeakSet`in kautta) ja korvataan osumat
  `[REDACTED:<type>]` -paikkamerkki, kloonaten vain ne oksat, jotka todella
  muuttuivat.
- `CREDENTIAL_PATTERNS` kattaa LLM-palveluntarjoajien avaimet (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS-tunnukset (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maksuvälineet (Stripe, Square), pilvi
  avaimet (AWS access key, Twilio, SendGrid, Mailgun), yksityiset avaimet / JWT:t,
  tunnistetietoja sisältävät yhteysmerkkijonot (`mongodb://user:pass@...`, jne.), ja
  yleinen `Authorization`/`x-api-key`/`api-key`/`apikey` -otsake-arvo
  malli. Otsake-muotoiset avaimet (`authorization`, `x-api-key`, `api-key`,
  `apikey`) punastetaan rakenteellisesti (vain arvo, kaavan etuliite kuten
  `Bearer `/`Basic ` säilytetään) eikä yleisen tekstin regexin kautta.
- Suojaraja ei koskaan estä; se vain kirjoittaa uudelleen (`modifiedPayload` /
  `modifiedResponse`) ja lisää merkintöjä (`meta.credentialsRedacted`, `meta.count`).

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
