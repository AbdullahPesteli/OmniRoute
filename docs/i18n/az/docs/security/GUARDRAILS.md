# Guardrails (Azərbaycan dili)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Həqiqət mənbəyi:** `src/lib/guardrails/`
> **Son yenilənmə:** 2026-08-29 — v3.8.51 (Video Bridge transkriptinin mənşəyi çağıran tərəf tərəfindən bəyan edilir,
> hələ server tərəfindən təsdiqlənmir — #11661 əsasında dəqiqləşdirilib)

Qoruyucu mexanizmlər OmniRoute ilə yuxarı axın provayderləri arasındakı sərhəddə
təhlükəsizlik, siyasət və məzmun transformasiyalarını təmin edir. Hər bir qoruyucu mexanizm
sorğu faydalı yüklərini (`preCall`) və yuxarı axın cavablarını (`postCall`) yoxlaya
(və istəyə görə rədd edə, transformasiya edə və ya annotasiya edə) bilər.

Sistem **xəta zamanı açıqdır**: qoruyucu mexanizm icra zamanı xəta atarsa, reyestr
xətanı qeydə alır və sorğunu uğursuz etmək əvəzinə növbəti qoruyucu mexanizmlə
davam edir. Bloklama heç vaxt təsadüf deyil, açıq şəkildə verilən qərardır (`block: true`).

## İnteqrasiya Olunmuş Qoruyucular

Qeydiyyat idxal zamanı prioritet sırasına görə altı qoruyucunu avtomatik yükləyir
(bax `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Ad                  | Mərhələ(ler)   | Fayl                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Aşağı prioritet nömrələri **ilk** işlənir.

### Vision Bridge (`visionBridge.ts`) — Modallıq Köprüsü PR-1

**Görmə modellərinə** yönəlmiş şəkil daşıyan sorğuları ələ keçirir və ya
bütün sorğunu görmə qabiliyyətinə malik modelə yönləndirir, ya da şəkil
hissələrini konfiqurasiya edilə bilən görmə modeli tərəfindən istehsal olunan
mətn təsvirləri ilə dəyişdirir. Bu, yalnız mətn təminatçılarının
multimodal yükü şəffaf şəkildə idarə etməsinə imkan tanıyır.

Axın:

1. Hədəf model artıq görməni dəstəkləyirsə, keçin (əgər
   məcburi köprü siyahısında `isVisionBridgeForcedModel` görünmürsə).
2. `extractImageParts(messages)` vasitəsilə şəkil hissələrini çıxarın
   (`visionBridgeHelpers.ts`), bu da **birləşdirilmiş media
   detektoru** `detectMediaParts()`-a yönləndirir `open-sse/utils/mediaParts.ts` — birləşmiş uyğunluq filtrinin paylaşdığı tək həqiqət mənbəyi.
   Çıxarma yalnız `replaceImageParts`-ın geri qaytara biləcəyi
   şəkillərin üst səviyyə hissələrinə icazə verilir (çıxar↔dəyişdirmə müqaviləsi): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, və Responses API `input_image`. Daxili hitlər və
   yalnız göstərici şəkilləri birləşmiş filtr materialıdır və heç vaxt çıxarılmır.
   Heç biri tapılmadıqda keçin.
3. `resolveVisionBridgeRuntimeSettings()` vasitəsilə iş vaxtı konfiqurasiyasını
   həll edin (`src/shared/constants/modalityBridgeDefaults.ts`): yeni `modalityBridge*`
   konfiqurasiya açarları qalib gəlir; köhnə `visionBridge*` açarları **bir dövr
   geri dönüş** (geri dönüş pəncərəsi) olaraq qalır. Köprü deaktiv edildikdə
   hər hansı media keçidindən əvvəl keçin.
4. Mod seçici (`modalityBridgeVisionMode`, aşağıdakı cədvələ baxın)
   yönləndirmə ilə təsvir arasında qərar verir. Yönləndirmə yalnız `model`
   dəyişdirilmiş `modifiedPayload` ilə geri qaytarır, əlavə meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Təsvir yolu: şəkilləri `maxImages` ilə məhdudlaşdırın, tapşırıqdan xəbərdar
   təklifi tərtib edin, təsvir önbelleğini yoxlayın, görmə modelini **paralel**
   olaraq çağırın (`Promise.allSettled`), və `[Image N]: <description>` mətn hissələrini
   onların yerində daxil edin. Uğursuz bir təsvir `null` verir və orijinal şəkil hissəsi
   **saxlanılır** (#4012) — yalnız hər bir təsvirin uğursuz olduğu birləşmiş təsvir yolunda,
   burada təsdiqlənmiş görmə qabiliyyəti olmayan yuxarıda `(unavailable — no vision-capable provider connected)` stub alır (#8430).
6. `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) geri qaytarın.

#### Mod seçici (`modalityBridgeVisionMode`)

| Mod        | Default | Davranış                                                                                                                                                                                                                                                                 |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔       | Köhnə heuristika, toxunulmamış (#6640/#7204): qeyri-birləşmiş/`auto/` modelləri ən yaxşı görmə modelinə yönləndirilir, əgər orijinal model artıq istifadə oluna bilən kredensiallara malikdirsə (onda təsvir); birləşmiş hədəflər həmişə təsvir edir.                    |
| `describe` |         | Həmişə təsvir et — yönləndirmə bloku tamamilə keçilir; istifadəçinin seçdiyi model həmişə cavab verir.                                                                                                                                                                   |
| `reroute`  |         | Yönləndirməni məcbur et: kredensiallı model qoruyucusu keçilir. Yönləndirmə-**hədəf** kredensial qoruyucusu hələ də tətbiq olunur — istifadə oluna bilən görmə hədəfi olmadıqda, sorğu təsvirə düşür ki, xam şəkillər heç vaxt yalnız mətn arxa planda çatmasın (#8430). |

Məcburi modlar **avtomatik** heuristika işləmədən əvvəl qısa dövr edir; `auto` davranışı
PR-1 qoruyucusundan əvvəlki ilə tamamilə eynidir.

#### API açarının sahəsi (`visionBridgeKeyScope.ts`)

Çağıranın API açarı `allowedConnections`, kvota hovuzları
(`allowedQuotas`) və ya modelləri (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) məhdudlaşdırdıqda,
köprü yalnız açarın istifadə edə biləcəyi yönləndirmə və təsvir modellərini seçir,
açarın istifadə edə biləcəyi bağlantılarda. Təsvir çağırışı həmişə
`x-omniroute-self-loop-key-id` başlığı ilə OmniRoute öz döngüsündən keçir,
beləliklə, qəbul edən söhbət sorğusu həmin açarın bağlantı və model siyasətini yenidən tətbiq edir. `enforceApiKeyPolicy()`
yalnız bu başlığı öz döngü daşıyıcısı ilə birlikdə tanıyır, beləliklə, yalnız
girişi daralda bilər, və həll olunmayan bir id rədd edilir.

Əgər açar üçün heç bir görmə modeli icazə verilmirsə, təsvir yolu kənara çəkilir və
sorğu dəyişmədən keçir, deaktiv edilmiş qoruyucu kimi eyni açıq uğursuz davranışla
(meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Açar olmadan sorğular və bu məhdudiyyətlər olmayan açarlar əvvəlki kimi
tamamilə eyni davranır.

#### Tapşırıqdan xəbərdar təsvir təklifi (`modalityBridgeVisionTaskAware`)

Default **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) son
**son istifadəçi mesajı** (500 simvola qədər qısaldılmış) mətnini əsas
təsvir promptuna əlavə edir, təsviri istifadəçinin əslində nə soruşduğuna
yönəldir (codex-vision-proxy nümunəsi) və görünən mətni transkrib etmək üçün
görmə modelindən xahiş edir. Flaggı söndürüldükdə — və ya istifadəçi mətni
olmadıqda — əsas prompt dəyişməz istifadə olunur.

Təsvir öz-özünə döngəsinin OpenAI-ə uyğun tələbi (`callVisionModelSingle()`
`visionBridgeHelpers.ts`-də) həmişə `image_url.detail: "high"` tələb edir —
şərtsiz, hər çağırıcı/təchizatçı üçün, heç bir müştəri siqnalına bağlı
deyil. Aşağı detallı nümunə OCR dəqiqliyini məhz bu promptun tələb etdiyi
mətn-transkripsiya tapşırığı üçün pisləşdirir, buna görə də təsvir çağırışı
həmişə yüksək detal tələb edir, orijinal daxil olan tələbin istifadə etdiyi
detal səviyyəsindən asılı olmayaraq. Bu yalnız daxili təsvir tələbi
bədənini təsir edir; OmniRoute-un çağıranın öz `image_url.detail`-ni
əsas tələbdə necə ötürdüyünü dəyişmir — bu defolt ayrıca tətbiq olunur
və yalnız aşkar edilmiş OpenCode müştəriləri üçün, `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`) içində. Təsvir öz-özünə
döngəsinin Anthropic wire-format qolu `detail` sahəsinə malik deyil və
hər iki defoltdan təsirlənmir.

#### Təsvir çıxış limiti (`modalityBridgeVisionMaxChars`)

| Açar                           | Defolt | Aralıq              |
| ------------------------------ | ------ | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` və ya 100–50000 |

`0` (defolt) **heç bir limit** deməkdir — `callVisionModel()` tərəfindən
qaytarılan təsvir dəyişməz ötürülür, mövcud davranışı qoruyur. 100–50000
aralığında olan hər hansı bir dəyər təsviri `…` əlavəsi ilə qısaldır
və `[Image N]: <description>` olaraq birləşdirilir
(`VisionBridgeGuardrail.preCall()` `src/lib/guardrails/visionBridge.ts`-də).
Bu, aşağı axın modelinin tam transkripsiyaya ehtiyacı olduğu detallı OCR
tapşırıqları üçün artırılmalıdır; söhbət edən görmə modellərində token
istifadəsini məhdudlaşdırmaq üçün aşağı salınmalıdır. Dashboard sahəsi
Görmə sekmesinin İrəliləmiş panelindədir
(`modality-bridge-max-chars` `ModalityBridgeVisionTab.tsx`-də) və 1 ilə 99
arasında olan hər hansı bir dəyəri 100 döşəməsinə qədər sıxır, eyni zamanda
açıq `0`-ı toxunulmaz saxlayır — `0` özlüyündə etibarlı Zod dəyəridir
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), sadəcə
"quraşdırılmamış" defolt deyil.

#### Təsvir keşəsi (`modalityBridge/bridgeCache.ts`)

Təsvir çıxışları üçün yaddaşda LRU + TTL keşəsi, proses üzrə paylaşılır.
Açar = `sha256(imageRef + composedPrompt + configuredBridgeModel)` uzunluq
prefiks çərçivəsi ilə (sahə sərhədi toqquşmaları yoxdur). Model komponenti
**konfiqurasiya edilmiş** körpü modelidir, həqiqətən cavab verən model deyil —
`callVisionModel` daxildə geri dönə bilər və cəhdə görə açarlaşdırma
keşəni parçalayar. Uğursuz təsvirlər heç vaxt keşələnmir. Parametrlər:

| Açar                            | Defolt | Aralıq  |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Uzaqdan görüntü normalizasiyası (öz-özünə təsvir/bas64 əldə etmə)

Körpü **uzaqdan** görüntü əldə etdikdə — Anthropic təsvir öz-özünə
çağırışı və claude-wire-format base64 çevrilməsi
(`ensureBase64ImagesForClaudeWire`), hər ikisi `fetchRemoteImageAsDataUri()`
`visionBridgeHelpers.ts`-də — nəticə data URI `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) vasitəsilə ötürülür, sonra görmə-model
tələbində yerləşdirilir. Böyük görüntülər **2048px uzun kənara** (OpenAI/Anthropic
server tərəfində artıq tətbiq etdiyi ölçü limitinə uyğun) kiçildilir, bu da
yükləmə baytlarını/latensiyanı azaldır, görmə modelinin gördüyünü dəyişdirmədən.
Ölçüləmə `sharp` istifadə edir, dinamik idxal vasitəsilə yüklənir: onun
yerli ikili faylı yüklənmədiyi bir platformada `normalizeDataUri()` **heç
bir istisna atmaz** — o, orijinal baytların ötürülməsinə geri dönür, beləliklə
təsvir/base64-çevrilmə yolu həmişə işlək qalır. Şəkil olmayan baytlar (şəkil
dekod edilə bilməyən bir əldə etmə) də toxunulmadan ötürülür. Bu normalizasiya
körpünün öz-özünə çağırışı üçün əldə etdiyi görüntülərə aiddir — bu, heç vaxt
çağıranın xam ötürmə yükünə tətbiq edilmir, yalnız opt-in yalnız dəyişiklik
prinspi ilə (Sərt Qayda #20) uyğun gəlir.

#### Parametr sxeması + köçürmə

Yeni `modalityBridge*` açarları `updateSettingsSchema`-da Zod ilə
doğrulanır (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*` üçlüyü və
Audio Bridge tərəfindən istifadə olunan `modalityBridgeAudio*` qrupu. Köçürmə
`141_modality_bridge_settings.sql` mövcud köhnə `visionBridge*` dəyərlərini
uyğun yeni açarlara kopyalayır (idempotent, heç vaxt operator tərəfindən
quraşdırılmış `modalityBridge*` dəyərini üstələməz); köhnə açarlar bir
buraxılış dövrü üçün oxumaq üçün geri qayıtma kimi qəbul edilir.

#### Şəffaflıq başlığı + statistikalar

Təsvirə çevrilmiş cavablar `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
ilə gəlir ( `buildModalityBridgeHeader()` `modalityBridge/bridgeStats.ts`-də
yaradılır, `withModalityBridgeHeader()` `src/sse/handlers/chatHelpers.ts`-də
damğalanır). Yenidən yönləndirilmiş tələblər **heç bir** başlıq almır — yük
toxunulmamışdır və model dəyişməsi artıq cavab bədəninin `model` sahəsində
görünür.

`GET /api/modality-bridge/stats` (idarəetmə autentifikasiyası, `GET /api/settings` ilə eyni səviyyədə) `vision`, `audio` və `video` üçün yaddaşda saxlanılan hər-modallıq sayğaclarını `{
 attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
 latencySamples, averageLatencyMs, lastUsedAt }` qaytarır. `averageLatencyMs` `latencySamples`-dan istifadə edir, bütün cəhdlərdən deyil; zaman ölçüsü olmayan bir əməliyyat sıfır-milisaniyə nümunəsi yaratmır. `bridged` uğurlu çevrilmələr üçün geriyə uyğun gələn ad olaraq qalır; uğursuz cəhdlər bunu artırmır. Sayğaclar proses yenidən başladıqda sıfırlanır (telemetriya, hesablamalar deyil).

#### Dashboard konfiqurasiyası

Xüsusi dashboard səhifəsi ` /dashboard/settings/modality-bridge`-dir. Onun URL-ə müraciət edilə bilən `Vision`, `Audio` və `Video` tabları `tab` dəyərini dəyişərkən sorğu parametrlərini saxlayır. Vision tabı aktivləşdirmə, rejim, model seçimi (avtomatik standart daxil olmaqla), tapşırıqdan xəbərdar təşviq, inkişaf etmiş vaxt/image/təsvir uzunluğu/cache limitləri, işləmə sayğacları və qorunan nümunə sorğusunu təqdim edir. Audio tabı da canlıdır: aktivləşdirmə, yalnız STT modeli seçici, avtomatik, vaxt/maksimal klip limitləri, audio sayğacları və `input_audio` nümunə testi təqdim edir. Video tabı funksionaldır: FFmpeg/ffprobe işləmə vəziyyətini bildirir — dörd açıq UI vəziyyətindən biri (`probe uçuşda olduqda və ya tamamlanmadıqda `unknown`, probe müştəri tərəfində atlandıqda qeyri-dönüşlü dashboard hostunda `restricted`, probe edildikdən sonra itkin olduğu təsdiqləndikdə `unavailable`, və ya FFmpeg/ffprobe versiyaları ilə `available`) — aktivləşdirmə/model/kadr/video/vaxt limitlərini saxlayır, model seçicisini vizion qabiliyyətli modellərlə süzgəcləyir və video sayğaclarını təqdim edir.

AI parametrləri altında əvvəlki Vision Bridge kartı yeni səhifəyə uyğunluq bağlantısıdır; artıq formun ikinci nüsxəsinə sahib deyil. Media Providers həmçinin Image-to-Text və Speech-to-Text iş axınlarını müvafiq Modality Bridge tablarına bağlayır, mövcud Speech-to-Text oyun sahəsini silmir.

**Öz-döngü qəbulunu keçmək:** təsvir çağırışı OmniRoute-un öz `/v1` öz-döngüsündən (standart olmayan provayder modeli) keçdikdə, alt-sorğu `x-omniroute-admission-bypass: internal` göndərir və həll edilmiş öz-döngü kredensialı ilə autentifikasiya olunur — yerli `sk_omniroute` sentinel yerli rejimdə, ya da operator tərəfindən konfiqurasiya edilmiş `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env açarı (#1350) beləliklə `REQUIRE_API_KEY=true` yerləşdirmələri hələ də təsvir çağırışını icra edə bilər. Keçid yalnız həmin dəqiq kredensiallar üçün qəbul edilir, beləliklə xarici müştərilər başlığı qəbuldan keçmək üçün istifadə edə bilmir.

Köhnə standartlar `src/shared/constants/visionBridgeDefaults.ts`-də yaşayır; yeni rejim/tapşırıqdan xəbərdar/cache standartları və parametrlər həll edici `src/shared/constants/modalityBridgeDefaults.ts`-də yaşayır. Qoruma, testlərin saxta `getSettings` və `callVisionModel` tətbiqlərini daxil etməsinə imkan verən `deps` konstruktor seçimini təqdim edir.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Audio daşıyan söhbət sorğularını hədəfə çatmadan əvvəl ələ keçirir ki, bu hədəf audio girişini qəbul etməyi bilmir. O, heç vaxt söhbət sorğusunu yönləndirmir: audio hissələri mövcud OpenAI-ya uyğun çox hissəli son nöqtə vasitəsilə transkripte edilir və seçilmiş söhbət modeli mətn transkriptləri ilə davam edir.

Axın:

1. `supportsAudio`-nu `getResolvedModelCapabilities()` vasitəsilə həll edin. Açıq provayder-reyestr metadata qalib gəlir, sonra statik model metadata, sonra sinkronlaşdırılmış `modalities_input`. `audio` olmayan bir elan edilmiş giriş siyahısı `false`-dır; heç bir qabiliyyət sübutu `null` qalır. Həm `false`, həm də `null` mühafizəkar körpünü aktivləşdirir, `true` isə onu keçməyə imkan verir.
2. `modalityBridgeAudio*` parametrlərini həll edin və hər mesajdan paylaşılabilən üst səviyyə audio hissələrini `detectMediaParts()` detektoru vasitəsilə çıxarın. Dəstəklənən tel formalı OpenAI `input_audio`, `audio_url` və `source.media_type: "audio/*"`-dır. Nestləşdirilmiş audio yönləndirmə üçün aşkar edilir, lakin splice yolundan çıxarılmır. İş `modalityBridgeAudioMaxClips` ilə məhdudlaşdırılır; sonrakı hissələr toxunulmaz qalır.
3. Konfiqurasiya edilmiş `provider/model`-i qəbul edin, ya da `selectAudioBridgeModel()`-in `AUDIO_TRANSCRIPTION_PROVIDERS`-də sabit kataloq sırasını gəzərək istifadə edilə bilən aktiv provayder kredensialı olan ilk modeli seçməsinə icazə verin.
4. `callAudioTranscription()` base64/data-URI audio-nu çox hissəli `file`-ə çevirir, ya da yalnız ictimai çıxış qoruması ilə DNS pinləmə və 25 MB sərhəd ilə uzaq `audio_url`-ni yükləyir. Sonra faylı və seçilmiş modeli yerli `/v1/audio/transcriptions` öz-döngüsünə POST edir, `resolveSelfLoopBearer()` ilə autentifikasiya olunur. Mövcud transkripsiya marşrutu normal kredensial axtarışı, soyuma/şəbəkə limitlərinin idarə edilməsi və provayder göndərişi həyata keçirir.
5. Uğurlu çağırışlar hissələrini `[Audio N]: <transcript>` ilə əvəz edir. Çağırışlar `Promise.allSettled` ilə işləyir: fərdi bir uğursuzluq orijinal audio hissəsini qoruyur (#4012 müqaviləsi). Əgər hər bir çağırış uğursuz olarsa və hədəf `supportsAudio === false` olduğu sübut olunarsa, hissələr `[Audio N]: (mövcud deyil — heç bir STT provayderi qoşulmamışdır)`-a çevrilir (#8430 müqaviləsi). Tanınmayan bir hədəf (`null`) üçün bütün uğursuz nəticə toxunulmaz qalır. İstifadə edilə bilən STT kredensialı olmayan sübut edilmiş yalnız mətn hədəfi eyni açıq stubu alır, şəbəkə çağırışı etmədən.

Uğurlu transkriptlər proses üzrə Modality Bridge LRU/TTL cache-dən istifadə edir. Açar audio referansı, sabit `audio-transcription` əməliyyat etiketi və seçilmiş STT modelini birləşdirir; uğursuzluqlar heç vaxt cache-lənmir. Audio cəhdləri paylaşılmış `bridged`, `cacheHits`, `failures` və `lastUsedAt` sayğaclarını yeniləyir. Dəyişdirilmiş cavablar `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` daşıyır; toxunulmaz sorğular Audio Bridge seqmenti almır.

İşləmə parametrləri DB-ə əsaslanır və Zod ilə təsdiqlənir:

| Açar                          | Default | Aralıq            |
| ----------------------------- | ------- | ----------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                 |
| `modalityBridgeAudioModel`    | `""`    | Auto və ya STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000       |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10              |

Paylaşılan keş `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` və `modalityBridgeCacheMaxEntries` ilə idarə olunur.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Chat Tamamlamalarında `messages` və Cavablar API `input`-da tanınmayan yerli video dəstəyi olmayan bir hədəf çağırılmadan əvvəl üst səviyyə video hissələrini ələ keçirir.
Dəstəklənən formalar `input_video`, `video_url`, `video_source`, HTTPS URL-ləri,
və `data:video/*;base64,...` məlumat URI-ləridir. Mətndəki sadə fayl adları video kimi qəbul edilmir.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) tələb keçidini,
imkan/politika yoxlamasını, hər tələb üçün toplamağı və cavab yükünü idarə edir.
Hər video işi — əldə etmə, tam nəticə keşini, bir çərçivə ardıcıllığını təsvir etmə (hansı ki, hər hansı bir çağırıcı tərəfindən elan edilmiş audio transkripti birləşdirir) və cəhd başına metriklər/abort/təmizlik — `processVideoPart`-ın arxasında gizlədilir
`videoBridgePipeline.ts`-də, `preCall`-ın döngəsində hər video hissəsi üçün bir dəfə çağırılır.
Bu modul həmçinin açıq port sərhədlərini `VideoMediaBrokerPort`
(baytları əldə etmək və nümunə alınmış çərçivələri çıxarmaq), `VideoAudioTranscriptionPort`
(bir çağırıcı tərəfindən elan edilmiş audio transkripti nümunə alınmış başlıqlarla birləşdirmək) və
`VideoDrilldownPort` (köhnə xammal mağaza forması) ilə müəyyən edir. İstehsal STT və çərçivə saxlanması
təsvir edən port ətrafında `createVideoSttAdapter` və
`createVideoDrilldownAdapter` vasitəsilə tərtib edilir; sonuncusu paylaşılan qeyri-şəffaf-handle həyat dövrünü istifadə edir.

İctimai `/v1` tələb yolu heç vaxt bir alt prosesi idxal etmir və ya çağırmır. Uzaq
videolar 50 MiB sərhədində yüklənir; inline base64 videoların
mühafizəkar 36 MiB dekod edilmiş hər video üçün sərhəd var ki, model/məlumatlar/çərçivə qabı
ictimai JSON tələb qəbul limitinin 50 MiB daxilində qala bilsin. Inline
uzunluq və dekod edilmiş ölçü təxminləri ayrılmadan əvvəl yoxlanılır. HTTPS
ilk uzaq URL-də və hər yönləndirmədə tələb olunur, mövcud
ictimai-yalnız çıxış qoruması ilə DNS pinləmə istifadə olunur. Baytlar daha sonra dəqiq daxili
`POST /api/modality-bridge/video/extract` broker sərhədini keçir. Bu marşrut həm
`LOCAL_ONLY` həm də `SPAWN_CAPABLE`-dır, yalnız bir proses üçün təsdiqlənmiş,
etibarlı döngə geri tələbini qəbul edir və heç vaxt URL, fayl sistemi yolu, icra edilə bilən,
və ya arqument siyahısını qəbul etmir. API bədən ölçüsü boru xətti və idarəçinin artan bədən
oxuyucusu müstəqil olaraq 50 MiB broker giriş sərhədini tətbiq edir. Onun sərhədli növbəsi
bir vaxtda bir çıxarma işini həyata keçirir, dörd gözləyən işi icazə verir və gözləyən girişin
sərhədini 100 MiB ilə məhdudlaşdırır.

Brokerin içində `ffprobe` özəl yerli bir faylı oxuyur; sabit format
icazə siyahısı çalğı siyahısı və manifest formatlarını istisna edir. İcazə verilən MOV-familiyalı
konteynerlər üçün, xarici MOV məlumat istinadları standart olaraq deaktivdir və
sabit əmr onlara daxil olmur. Həm `ffprobe`, həm də `ffmpeg` yalnız
`file`-ə aid protokol icazə siyahısını, bir iplik, sabit arqument massivlərini, heç bir shell,
və `PATH`-dan həll edilmiş icra edilə bilənləri istifadə edir. Bağlı şəkil örtük axınları
oynatıla bilən namizədlər deyil. Bütün oynatıla bilən axınlar sərhədləri ödəməlidir və
müəyyən bir standart axın seçilməlidir ki, bu da deterministik ən aşağı indeks
rezervinə düşsün. Videolar 600 saniyə, 8,192 piksel ölçüsündə və
33,554,432 mənbə pikseli ilə məhdudlaşdırılır. FFmpeg 1–16 orta JPEG çərçivələrini nümunə alır, uzun kənarı
ən çox 1,024 pikselə qədər kiçildir, daha kiçik girişləri böyütmür və
heç vaxt URL almır. Nümunə alma `uniform` standartdır. İstəyə bağlı
`scene_aware` və eksperimental `segment_aware` siyasətləri artıq təsdiqlənmiş yerli axın üzərində bir əlavə
sabit FFmpeg keçidi həyata keçirir, sərhədli `showinfo` səhnə zaman damgalarını seçir və
detektor uğursuzluğu, zaman aşımı, yanlış formatlı çıxış və ya boş
namizəd dəstində deterministik olaraq eyni
uniform orta nöqtələrə geri dönür. Segmentə diqqət yetirən rejim
təsdiqlənmiş səhnə intervallarına nisbətən orta nümunələri ayırır; segmentə diqqət yetirən sübutlar və geri dönmə davranışı
aşağıda ətraflı izah edilir. Sərt 16-çərçivə sərhədi
hər siyasətdə seçimdən sonra tətbiq olunur. Bir səhnə ilə bağlı tələb yalnız bir
çərçivə büdcəsinə malik olduqda, aktiv tam-video və ya fokus
pəncərəsinin uniform ortasını istifadə edir və `policyEffective: uniform`-u bildirir: seçilmiş bir səhnə çərçivəsi
həm temporal sonları qorumaq mümkün deyil. Bir çağırıcı istəyə bağlı olaraq
məhdud bir fokus pəncərəsi (`start`/`end` saniyələri) təqdim edə bilər; sərhədlər media
müddətinə sıxılır, tərsinə çevrilmiş və ya qeyri-məhdud pəncərələr rədd edilir və bütün nümunə
siyasətləri yalnız normallaşdırılmış intervallarda həyata keçirilir. Nəticədə
pəncərə nümunə metadata-sına və etibarsız təsvir
prefiksinə daxil edilir ki, aşağıdakı modellər fokuslanmış bir çıxarışı tam
xronologiyadan ayıra bilsin.

Semantik başlıq fokusunun ayrıca, açıq bir tənzimlənməsi var. Standart `full`
analiz rejimi mövcud çərçivə təklifi saxlayır və heç vaxt tələb
mətnini başlıq modelinə göndermir. `focused` rejimində, körpü yalnız
sonuncu boş olmayan istifadəçi tərəfindən yazılmış `text`/`input_text`-i eyni Chat və ya Cavablar
konteynerindən oxuyur, onu NFC-yə normallaşdırır, idarəetmə simvollarını və boşluqları
sıxır və 500 Unicode kod nöqtəsi ilə məhdudlaşdırır. Boş bir nəticə dəqiq `full` təklifinə geri dönür. İstifadə oluna bilən bir ipucu xüsusi
etibarsız-istifadəçi-kontekst blokunda JSON formatında seriyalaşdırılır və yalnız müşahidə edilə bilən detallara prioritet verə bilər; bu, media-da görünən və ya eşidilən
təlimatları izləmək üçün ayrı xəbərdarlığı üstələyə bilmir. Mətni fokuslama heç vaxt `start`/`end`-i çıxarır və ya
temporal nümunə alıcısını dəyişmir.

#### FU-07 struktur seqment sübutu

`segment_aware` artıq təsdiqlənmiş yerli video axını üzərində bir sərhədli əvvəlcədən analiz keçidini istifadə edir. Dəyişməz filtr zənciri əvvəlcə maksimum 320 piksel genişliyə qədər ölçülür, səhnə dəyişikliklərini və donmuş intervalları aşkar edir, sonra bulanıqlıq, orta luma və məkan/zaman məlumatları üçün saniyədə 1 kadr nümunəsi alır. Keçid 600 struktur nümunəsi, bir FFmpeg/filter ipi, eyni `file`-yalnız protokolu və konteyner icazələri, 1 MiB proses-çıxış sərhədi və brokerin paylaşdığı abort/son tarixində maksimum 30 saniyə ilə məhdudlaşır. Heç vaxt bir əmr, filtr, yol və ya URL qəbul etmir.

Struktur dəyərləri deterministik nümunə sübutlarıdır, semantik video anlayışı deyil. Onlar mövzuları, hərəkətləri, başlıqları, nitqi və ya istifadəçi niyyətini çıxarmaz. Səhnə və donma sərhədləri seqmentlər yaradır; donma əhatəsi, bulanıqlıq, ekspozisiya, məkan detalları və zaman dəyişiklikləri yalnız mövcud 1–16 kadr büdcəsinin necə paylandığına təsir edir. Tamamilə donmuş bir seqment bir kadrla məhdudlaşır, donmamış seqmentlər isə qalan büdcə üçün mübarizə aparır. Sərhədlər kadrlardan çox olduqda, vahid zaman xətti əhatəsi saxlanılır ki, sürətli erkən kəsiklər uzun bir ardıcıl seqmenti gizlədə bilməsin. Donma sərhədinin 1 saniyəlik analiz həddindəki səhnə sərhədləri birləşdirilir.

İtkin filtrlər, yanlış/formasız sübutlar, detektor xətası və ya sərhədli əvvəlcədən analiz vaxtı açıq şəkildə dəqiq vahid orta siyasətə uğursuz olur. Bir çağıran abortu və ya broker son tarixi açıq şəkildə uğursuz olmur: bu, uçuşdakı alt prosesi dayandırır, sonrakı kadr çıxarılmasını maneə törədir və özəl müvəqqəti ağac `finally`-də silinir.

`scripts/perf/video-bridge-fu07-eval.ts` post-dedup başlıq çağırış qənaətləri, sıx-hərəkət büdcə paylanması, bulanıqlıq/ekspozisiya/SI-TI sübutları, uzun bir quyruqla sürətli kəsiklər və tədricən solma yanlış müsbətləri üçün deterministik real FFmpeg düzəlişləri yaradır. O, əvvəlcədən analiz divar vaxtını qeyd edir və `/usr/bin/time` mövcud olduqda, uşaq CPU və pik RSS-i qeyd edir. Onun keyfiyyət yoxlamaları yalnız struktur orakllarıdır. Real başlıq-model keyfiyyəti `HOLD` olaraq qalır, çünki bu harness-in icazə verilmiş son nöqtəsi və ya donmuş hakimi yoxdur. Pul qənaətləri də `HOLD` olaraq qalır, əgər `--caption-cost-per-call-usd` açıq müsbət başlıq başına qiymət təqdim etmirsə; skript heç vaxt bu nəticələrdən birini uydurmur.

Hər kadr 4 MiB ilə məhdudlaşır, bütün xam kadrlarsa 23 MiB-ə qədər, və seriyalaşdırılmış broker cavabı 32 MiB-ə qədərdir. Özəl müvəqqəti bir qovluq `finally`-də silinir. OmniRoute FFmpeg-i birləşdirmir və xüsusi icra yolu qəbul etmir. Başlıqdan əvvəl, körpü mühafizəkar vizual deduplication keçidi tətbiq edir: hər JPEG 16×16 boz tonlu tamponuna azaldılır və yalnız son saxlanılan kadrla müqayisə edilir. Bir kadr büdcəsi bir kadrdan yuxarı tələb edildikdə, çıxarılma maksimum iki dəfə bu büdcənin sərhədli namizəd hovuzunu təmin edir və heç vaxt 16 kadrdan çox olmur. Tələb olunan sərhəd yalnız deduplication-dan sonra tətbiq olunur, ilk və son seçilmiş namizədlər büdcə ən azı iki olduqda son incələmə zamanı saxlanılır. Versiyalı `grayscale-16x16-mean-cells-v2` siyasəti orta luma delta və normalizə edilmiş delta ən azı 0.05 olan thumbnail hüceyrələrinin nisbətinin daha böyüyünü istifadə edir. Təkrarlama həddi sabit 0.04-dür, proqnozlaşdırıla bilənlik üçün seçilmişdir, runtime parametri olaraq açıq şəkildə təqdim edilmir. Bu ikincil yüksək-contrast siqnal kiçik hərəkətləri və görünən mətn dəyişikliklərini saxlayır ki, yalnız orta müqayisə gizlədə bilər. Müqayisəçi və ya deşifrə xətaları açıq şəkildə uğursuz olur və əhatəni saxlayır. Çıxış metadata çıxarılan namizədləri, uğurla istifadə olunan kadrlara və atılan vizual təkrarlara ayırır.

Açıq şəkildə işarələnmiş video hissəsi zaman möhürlü əlaqə vərəqi tələb edə bilər. Körpü maksimum 4 sütunlu, 16 kadr JPEG şəbəkəsi yaradır. Hər 512 piksel hüceyrəsi öz mənbə zaman möhürünü yüksək-contrast alt zolağa yandırır, eyni zaman möhürləri isə aşağı axın əlaqəsi və audit üçün mətn metadata-sında qalır. Tam JPEG 32 MiB ilə məhdudlaşır. Əgər `sharp` şəbəkəni deşifrə edə və ya tərtib edə bilmirsə, körpü fərdi JPEG kadrlara geri dönür; müştəri abortu hələ də vərəq əməliyyatı vasitəsilə yayılır.

Təqdimat sübutları qəsdən sintetik tərkib mikrobenchmark-dan ayrıdır. `scripts/perf/video-bridge-contact-sheet-eval.ts` real OpenAI-uyğun görmə modelləri üçün sxema-versiyalı A/B harness-i müəyyən edir. O, təminatçı tərəfindən bildirilən tokenləri, uçdan-uça divar gecikməsini (vərəq tərkibi daxil olmaqla), model çağırış sayını və manifestlə müəyyən edilmiş fakt saxlanmasını ölçür. Xam model cavabları hesabatda yazılmır; yalnız SHA-256 xülasələri və uyğun fakt ID-ləri saxlanılır. Harness heç bir şəbəkə və ya ödənişli model çağırışı etmir, əgər `--execute-real` ötürülməzsə və `--model`, `OMNIROUTE_BASE_URL` və `OMNIROUTE_API_KEY` konfiqurasiya edilməzsə. O açıq real icra olmadan, onun maşın oxuna bilən hökmü `HOLD` olaraq qalır; sintetik yük/çağırış sayı ölçmələri tək başına təqdimat sübutu deyil.

Ayrı `scripts/perf/video-bridge-promotion-eval.ts` FU-07 və ya FU-09 müşahidələrini istehlak edir. Təqdimat qəbul etmək üçün bütün səkkiz sintetik ssenari növü və bir sanitizasiya edilmiş real klip, hər rol və hal üçün ən azı üç ölçülmüş təkrarlama, bütün on elan edilmiş metrik, donmuş media/istehsal/gözlənilən-fakt/ayar xülasələri, unikal müşahidə ID-ləri və təsdiqlənmiş toxum A/B sırası tələb olunur. İcra qəbzi korpus xülasəsini, dəqiq namizəd SHA və model versiyasını bağlayır. İtkin və ya etibarsız ölçmələr `HOLD` olaraq qalır, 30 s-dən yuxarı CPU, 512 MiB-dən yuxarı pik RSS və ya 30 s-dən yuxarı əvvəlcədən analiz daxil olmaqla. Bunlar sübut-qəbul sərhədləridir, yeni bir runtime RSS icra zəmanəti deyil.

FU-07 ən azı 98% keyfiyyət saxlanmasını və p95 gecikməsini 1.2x-dən çox olmamalıdır
əsas xətt, həmçinin ya 0.05 mütləq hal-balanclı orta xatırlatma artımı
bərabər orta başlıq çağırışlarında, ya da ən azı 10% daha az orta post-dedup başlıq
çağırışları tələb edir. FU-09 ən azı 0.85 keyfiyyət, 95% saxlanma, 20% p95 gecikmə
azaldılması və 10% token azaldılması tələb edir. Tənqidi fakt itkisi, inyeksiya uyğunluğu və ya
itkin istifadəsi irəliləməni maneə törədir. Bir icra heç nəyi irəliləyə bilmir:
`--previous-report` eyni siyasət/model versiyası/kandidatı/korpusun iki fərqli, üst-üstə düşməyən, ardıcıl
uyğun icrasını təsdiqləyir. Bir nümunə eksperimentinin əlaqə cədvəli eksperimentini təsdiqləməsi mümkün deyil.

Toplayıcılar cavabları yaddaşda qiymətləndirməli və `responseDigest` ilə
metrikləri və müşahidə bağlamalarını saxlamalıdır, heç vaxt cavab mətnini. İstehlakçı
həmçinin köhnə xam müşahidələri oxuyur, lakin heç vaxt o mətni öz hesabatlarına kopyalamır. Hər müşahidə üçün
dəqiq olaraq `responseDigest` və ya `rawResponseText`-dən biri qəbul edilir.
Versiyalı icazə siyahısı dəyişməz `hold` standartı ilə boş qalır. Uyğun bir giriş
öz sübut istinadını, siyasəti, model versiyasını, dəqiq
kandidata SHA, manifest digest və iki fərqli icra ID tələb edir; ziddiyyətli kontekstlər
rədd edilir. Bu metadata audit müqaviləsidir, istinad edilən
faylın həqiqi ölçmələr ehtiva etdiyinə dair sübut deyil. Hər hansı bir giriş əlavə etməzdən əvvəl
əsl qəbzləri nəzərdən keçirin. İdarəetmə statistikaları son nöqtəsi və Video paneli mühafizəkar
hazırlığı açıq edir. Konfiqurasiya edilmiş model təxmini yalnız onun versiyasını və
işləyən kandidata SHA-nı müəyyən etmir, buna görə də cari panel `HOLD` bildirir, başqa bir icra kontekstindən
uyğunluğu yenidən istifadə etmir. Açıq eksperimental seçim irəliləmədən ayrıdır; heç bir
standart avtomatik olaraq dəyişdirilmir.

Çağıranlar uyğun video hissəsinə uyğun `transcript.cues` massivini əlavə edə bilərlər
artıq uyğunlaşdırılmış mətni olduqda. Hər cue `text`, probed müddət içində
müəyyən `start`/`end` intervalını və ağ siyahıya alınmış `source` (`client`, `embedded` və ya `audio-bridge`) daşımalıdır; `confidence` standart olaraq
`1`-dir və `0` ilə `1` arasında qalmalıdır. Dəqiq təkrarlanan cues birləşdirilir.
OmniRoute bu metadata-dan transkripsiyaya başlamır: təsdiqlənmiş cues
təsvir edilən nəticəyə mənbə, etibar və interval ilə kopyalanır və
çərçivə başlıqları ilə yanaşı etibarsız müşahidələr kimi təqdim edilir. Etibarsız,
aralıqdan kənar və ya mənşəyi olmayan mətn rədd edilir, başlıq axınına qarışdırılmır. Hər iki istək-bədən transkript kanalları təqdim olunan
mənşəni `client`-ə normallaşdırır, öz-özünə iddia edilən `embedded` və ya `audio-bridge`
etiketləri də daxil olmaqla. Yalnız serverə aid adapter bu etibarlı etiketləri
yalnız kodla `trustedSource` arqumenti vasitəsilə təyin edə bilər; bir istək JSON sahəsi
o arqumentə çata bilməz. Transkript mətni etibarsız media-əsaslı məzmun olaraq qalır,
mənşəyindən asılı olmayaraq, və heç vaxt səlahiyyət vermək üçün müəyyən edilməməlidir.

İrəliləmiş bir çağıran eyni video üçün `audioTranscript` track təqdim edə bilər;
bu, server transkripsiyasının sübutu deyil, müştəri tərəfindən təqdim olunan mətn kimi
qəbul edilir. Birləşmə dikişi vizual və audio müşahidələri
bir son tarix və abort siqnalı altında işləyir, onları ortaq bir zaman xəttində sıralayır,
dəqiq təkrarlananları birləşdirir və yalnız bir tərəf uğur qazandıqda
qismən nəticə bildirir. Etibarsız `audioTranscript` o qismən nəticəyə
deqradasiyaya uğrayır — vizual təsvir saxlanılır və audio şöbə sanitizasiya edilmiş
xəta kodunu qeyd edir — bütün videonu uğursuzlaşdırmaq əvəzinə. Hər bir şöbə üçün mövcudluq, qismən bayraq
və sanitizasiya edilmiş xəta kodları təsvir edilən nəticədə, mühafizəçi metadata-da
(`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), nəticə-cache metadata-da
və körpü birləşmə sayğaclarında saxlanılır. Standart Video Bridge yolu danışıqdan mətbəxə
keçid etmir və ikinci media nüsxəsini yükləmir; bu açıq track olmadan,
yalnız video olaraq qalır.

**Transkript saxlanması (#12150 P1).** Bu, avtomatik olaraq tətbiq olunur
Video Bridge (öz-özünə opt-in) bir transkript cue təqdim etdikdə — ayrıca
saxlanma bayrağı yoxdur. Bir istək hər hansı bir transkript cue (çağıran tərəfindən bəyan edilmiş
`transcript` və ya birləşdirilmiş `audioTranscript`) təqdim etdikdə, mühafizəçi onu
`videoBridgeObserved` olaraq işarələyir və videonun təsvirinin redaktə edilmiş kölgəsini yaradır —
hər cue-nin sərbəst mətn bədəni `[redacted-video-transcript]` ilə əvəz olunur,
strukturlu cue sahəsi mətn birləşdirilmədən əvvəl əvəzlənməklə yaradılır (heç vaxt düz mətnin
parsing-i ilə, beləliklə heç bir cue məzmunu — düşmənçilik və ya adi, `]` ehtiva edən bədənlər
kimi ` [inaudible]`/`[music]` — sağ qala bilmir). Saxlanılan çağrı-log istək bədəni
hər video-əsaslı mətn hissəsini o redaktə edilmiş kölgə ilə dəyişdirir, məzmun bərabərliyi ilə uyğunlaşdırılır;
`fullText` ankeri tamamlanmış əvvəlki çağrı mühafizəçi yükündən yenidən oxunur, beləliklə uyğunluq
sonrakı zəncir mühafizəçiləri (PII və
şəxsiyyət maskaları, prioritetlər 10/95) təsvir mətnini yerində yenidən yazdıqdan sonra hələ də uğur qazanır
və sistem-prompt/ötürmə/yaddaş inyeksiyası mesaj massivini yenidən formalaşdırır. Modelə göndərilən bədən dəyişməz qalır. Bir müşahidə olunan istək də
davamlı Yaddaş yaratmır (həm istək, həm də cavabdan əldə edilən çıxarışlar atlanır),
beləliklə modelin öz cavabı transkript mətnini Yaddaşa əks etdirə bilmir.

**Xam video sahələri (#12430).** Körpü aktivləşdirildikdə və yerli video dəstəyi bilinmədikdə
və ya mövcud olmadıqda, müəyyən edilmiş `transcript`/`audioTranscript` sahələri də `videoBridgeObserved`-i aktivləşdirir,
təsvir uğursuzluğu və ya `maxVideos` limiti olsa belə. `null` və boş sətirlər sayılır;
olmayan sahələr və qeyri-video metadata sayılmır. Saxlanılan nüsxələr bu sahələri redaktə edir
və ya istəyi atlayır, və cache/Yaddaş bypass edilir.

Bu geri dönüş yollarında, etibarlı çağırıcı siqnalları dəstəklənən `text`/`input_text` hissələrinə çevrilir, qeyri-standart təminatçı sahələri yerinə. Hər iki tələb olunan parça etibarsız `client` müşahidələri olaraq qalır, video təsvir edilmədiyi və zaman damgalarının media ilə yoxlanılmadığı barədə açıq xəbərdarlıqla. Mövcud 256-siqnal/64-KiB ümumi və hər siqnal üçün büdcələr iki parça üzrə birgə tətbiq olunur; zaman damgaları brokerin 600 saniyəlik tavanına və təqdim olunan fokus pəncərəsinə uyğun olmalıdır. Etibarsız parçalar atılır, təsadüfi mətn kimi göndərilmir; etibarlı qardaş hələ də istifadə oluna bilər, əgər onların birgə büdcəsi aşılmırsa. Null/boş sahələr heç bir mətn əlavə etmir. Bu geri dönüş vasitəsilə heç bir media əldə etmə və transkripsiya əlavə edilmir. Transkript genişləndirmə sahələri geri dönüş video daşıyıcısından və onun `video_url`/`source` obyektlərindən çıxarılır. OpenAI kabeli icazə siyahısı sərt qalır; məlum olmayan yerli video daşıyıcıları mövcud qalır və məlum yalnız mətn hədəfləri təhlükəsiz işarələr saxlayır. Strukturlaşdırılmış redaksiya kölgələri əlavə olunan transkript mətnini qoruyur, orijinal çağırıcıya aid tələb isə dəyişməz qalır. Yerli dəstəklənən hədəflər və deaktiv edilmiş körpülər mövcud keçid davranışlarını saxlayır.

Əlavə saxlanılan nüsxələr eyni müşahidə olunan tələb siqnalını istifadə edir. Xam əvvəlki mühafizə müştəri-tələb görüntüsü, yaddaşda gözləyən tələb və erkən rədd edilmiş tələb qeydi struktural olaraq video hissələrində transkript sahələrini əvəz edir; boru kəməri mərhələləri və kontekst ötürülməsi tərəfindən sintez edilmiş mətn təklifləri saxlanılan tələb bədəninin çuxurunda redaktə olunur. Saxlanılan `video_content_removed` işarəsi `previous_response_id` davamını bağlayır, əksinə, qəsdən atılmış mətni bərpa etmir. Əgər müşahidə olunan tələb loglama zamanı hər hissə üçün redaksiya kölgəsini itirərsə, ya da bir neçə video kölgəsindən biri sonrakı tələb dəyişikliklərindən sonra uyğun gəlməzsə, saxlanılan tələb bədəni tamamilə atılır, hissə-hissə redaktə edilmiş transkript saxlanılmır.

Müşahidə olunan tələb üçün, modelin cavabı transkriptin istənilən hissəsini strukturlaşdırılmış siqnal sərhədi olmadan sitat gətirə bilər. Onun saxlanılan çağrı qeydi `responseBody` buna görə də bir atılma işarəsi ilə əvəz olunur; ətraflı boru kəməri artefaktı (yuxarı axın/müştəri bədənləri və axın parçalarını daxil edə bilər) saxlanılmır. Semantik, idempotentlik və düşüncə-təkrarlama keşləri o tələb üçün oxuma və yazma əməliyyatlarını atlayır. Təminatçı tələbi və müştəriyə görünən cavab dəyişməz qalır. Ətraflı artefakt atıldıqda, erkən saxlanma baytları müvəqqəti tampondan boşaldılır. Kiro-nun yanlış formatlı EventStream xəbərdarlığı yalnız yük bayt sayını bildirir, heç vaxt onun məzmununu və ya JSON parser-in xam səhvini göstərmir. Bu, hər hansı bir əlaqəsiz təminatçı/plugin diaqnostikasının yoxlanıldığını iddia etmir; daha geniş saxlanılan çuxur süzgəci #11658-də izlənilir.

Daxili `/api/modality-bridge/video/drilldown` həyat dövrü ayrı, döngü geri/qaytarma/token-təsdiqlənmiş keş substratıdır. Hər əməliyyat həmçinin kanonik qeyri-şəffaf əsas ID tələb edir. İstehsal çağırıcı aktivləşdirilməzdən əvvəl, bu ID-ni təsdiqlənmiş kirayəçidən çıxarmalıdır və müştəri tərəfindən seçilmiş dəyəri heç vaxt göndərməməlidir. Keş açarları bu əsas ID-ni kanonik sessiya və video-istinad ID-lərinə bağlayır, yalnız onların SHA-256-dan alınan açarlarını saxlayır və həm oxuma, həm də silmə əməliyyatlarını eyni əsas ID-yə məhdudlaşdırır. Keş hər giriş üçün ən çox 16 alınmış JPEG çərçivəsini saxlayır, onları on dəqiqədən sonra müddəti bitirir və məhdud `start`/`end` oxuma və ya açıq sessiya silmə dəstəkləyir.

Hər əsas ID 16 giriş və 64 MiB kanonik JPEG məlumatı ilə məhdudlaşır. Bu məhdudiyyətlər qlobal 64-giriş/256 MiB tavanından müstəqildir: əsas kvota təzyiqi yalnız həmin əsas ID-nin ən az istifadə olunan girişlərini atır, qlobal LRU atılması nəzərdən keçirilməzdən əvvəl. Müddəti bitmiş girişlər, keş fəaliyyətində həm əsas, həm də qlobal hesabdan silinir, eyni zamanda ləğv və təsdiq uğursuzluğu qismən əvəz etməyi təsdiqləmir.

Keş qeyri-kanonik Base64, artıq doldurma, qeyri-JPEG media, yanlış formatlı və ya kəsilmiş JPEG-ləri, həmçinin məhdud tam şəkil `sharp` deşifrə zamanı xəbərdarlıq verən JPEG-ləri rədd edir. Hər qəbul edilmiş şəkli kanonik JPEG olaraq yenidən kodlayır, genişlik və hündürlüyü deşifrə edilmiş baytlardan çıxarır, çağırıcı sahələrə etibar etmədən, və hər hansı bir ardıcıl polyglot baytları saxlamadan atır. Yalnız məhdud kanonik sıxılmış tampon hər iki kvotaya yüklənir. JSON kabel limitinə 32 MiB deşifrə edilmiş giriş tavanı üçün Base64 əlavə olunur. Hər saxlanılan derivasiya təsdiqlənmiş JPEG formatını/həcməsini, nümunə siyasətini, derivasiya versiyasını, yaradılma vaxtını, server tərəfindən hesablanmış məzmun hashını və hash edilmiş valideyn istinadını, eləcə də etibarlı çağırıcının valideyn-məzmun hashını qeyd edir. Ləğv asinxron deşifrə/hash mərhələləri arasında atomik keş öhdəliyindən əvvəl yoxlanılır.

İstehsal istehsalçısı artıq əldə edilmiş broker çərçivələrini yalnız uğurlu vizual analizdən sonra yenidən istifadə edir, ikinci video yüklənməsi/çıxarılması olmadan. O, operator `modalityBridgeVideoDrilldownEnabled=true`, sərt hər hissə üçün `drilldown: true` və təsdiqlənmiş API açarı qeyd ID-sini tələb edir. Müştəri tərəfindən bəyan edilmiş əsas/session dəyərləri heç vaxt mülkiyyət qurmur. Bütün üç şərt olmadan, əlavə çərçivələri hash etmir, ölçüsünü dəyişmir və ya saxlamır. Saxlama uğursuzluğu istifadə edilə bilən vizual cavabı qoruyur. Razılaşdırılmış tələblər bütün video nəticə keşini atlayır, beləliklə, keşlənmiş nəticələr heç vaxt idarə etmələri təkrarlamır.

Uğurlu JSON və SSE cavabları ən çox dörd qeyri-şəffaf tutucu təqdim edir `x-omniroute-video-drilldown` başlığında. İcazə verilmiş brauzer mənşələri bu başlığı CORS mənşə siyasətini genişləndirmədən oxuya bilərlər. Yeni tutucular `v1.<32-byte random base64url token>` formatında olur və registr yalnız onların SHA-256 hash-larını saxlayır. Oxuyucu/başlıq parseri köhnə 64-hex tokenləri də qəbul edir. İcazə verilmiş ictimai istehlakçı `GET /api/v1/video-bridge/drilldown?handle=...` ünvanına müraciət edir, müstəqil olaraq `modalityBridgeVideoDrilldownRemoteEnabled=true` ilə qorunur. Açıq şəkildə saxlanılan false, köhnə `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env geri dönüşü aktiv olsa belə, giriş hüququnu ləğv edir. İstehsal saxlanması köhnə `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` geri dönüşü ilə eynidir. Hər iki geri dönüşün standart olaraq deaktivdir.

İstehlakçı, icazə verilmiş açardan mülkiyyət əldə edir, açar siyasətini tətbiq edir və tanınmayan, müddəti bitmiş və ya başqa bir açarın tutucuları üçün eyni 404 qaytarır. O, `variant=preview|standard|detail` (maksimum JPEG ölçüsü 320/640/1280, heç vaxt böyüdülmür), `limit=1..8` (ya da köhnə `frames` təyini, heç vaxt ikisi bir yerdə), sıfırdan başlayaraq `page` və isteğe bağlı `start`/`end` fokus saniyələrini qəbul edir. Təkrarlanan sorğu açarları və tərsinə fokus pəncərələri rədd edilir. Hər bir qaytarılan variantın faktiki məzmunu və faktiki həll metadata-sının hashı var, saxlanılan mənbəyə bağlıdır. Variantlar oxuma zamanı əldə edilir, əlavə saxlanılan nüsxələr kimi saxlanılmır. JSON cavabı, Base64/qablaşdırma daxil olmaqla, 32 MiB ilə məhdudlaşdırılır; çox böyük bir səhifə 413 qaytarır və müştəri daha az çərçivə tələb etməlidir. Oxumalar hər bir ölçü dəyişdiyində ləğv yoxlaması edir və qaytarılmadan əvvəl tutucu etibarlılığını yenidən yoxlayır. Sahiblər tərəfindən `DELETE` idempotentdir; silinmə və ya TTL müddətinin bitməsi saxlanılan mənbəni və istifadə hesabını azad edir.

Paylaşılan mağaza proses-lokaldır: tutucular yenidən başladıqda müddəti bitir və müstəqil OmniRoute prosesləri arasında köçürülə bilmir. İdarəetmə statistikaları effektiv saxlanma/uzaqdan siyasətini və yalnız saxlanılan girişləri/baytları göstərir, heç vaxt media, istinadlar, əsas ID-lər və ya tutucular. Video parametrləri paneli bu dəyərləri göstərir və hər iki razılıq dəyişənini saxlayır. Bu tətbiqetmə sənədi canlı yerləşdirmə və ya təşviq sübutu deyil; real-model qəbulunu ayrıca izlənilir.

Çərçivələr konfiqurasiya edilmiş Video modelinə uyğun olaraq ardıcıl olaraq başlıqlanır. Boş Video üstü Vision parametrlərini miras alır; əgər hər ikisi boşdursa, Vision avtomatik yönləndirici effektiv vizyon qabiliyyətli modeli seçir. Uğurlu başlıqlar orijinal hissəni sabit `[Video description:` prefiksi ilə əvəz edir ki, bu da mətni etibarsız media-əsaslı müşahidə kimi işarələyir və aşağıdakı modellərə mediada tapılan təlimatları izləməməyi bildirir. Çərçivə-başlıq keş açarları JPEG baytlarını, təklifi, zaman damgasını və effektiv modeli əhatə edir; yalnız uğurlu başlıqlar keşlənir. Keş girişləri faktiki uğurlu istehsalçı modelini saxlayır, geri dönüş modelini də daxil edir; körpü `mixed` bildirir, əgər fərqli çərçivələr fərqli modellər tərəfindən istehsal olunubsa. Keş hitləri həmin istehsalçı kimliyini yenidən etiketləmək əvəzinə istifadə edir. Tam-video nəticə keşi, çıxışı dəyişdirən hər bir giriş — təklif, effektiv model, nümunə siyasəti, çərçivə sayı, semantik analiz rejimi, normallaşdırılmış fokus ipucu SHA-256 fingerprinti, fokus pəncərəsi, `transcript`, `audioTranscript` və kontakt-sheet bayrağı — əsasında açarlanır; buna görə də bu ölçülərdən hər hansı birinin dəyişdirilməsi keş itir. Vizual təkrarlama siyasəti versiyası, həddi və məhdud namizəd-çərçivə sayı nəticə-keşi açarında və metadata-da açıqdır; buna görə də siyasət dəyişikliyi köhnə tam-video təsvirini yenidən istifadə edə bilmir. Nəticə-keşi v4 metadata-sı rejimi və fingerprinti saxlayır, heç vaxt xam istifadəçi tapşırığını. Guardrail metadata-sı həm tələb olunan, həm də effektiv analiz rejimlərini bildirir; istifadə edilə bilən istifadəçi mətni olmayan tələb olunan `focused` rejimi effektiv olaraq `full` olaraq bildirilir.

Guardrail hər dəstəklənən video hissəsini çıxarır, lakin `modalityBridgeVideoMaxVideos`-dan artıq təsvir etmir. `supportsVideo === false` olduğu sübut edilmiş bir hədəf üçün, uğursuz və həddən artıq limitli videolar açıq təhlükəsiz mətn işarələrinə çevrilir ki, heç bir xam video sağ qalmasın. İmkan bilinmədikdə, həmin hissələr video daşıyıcısını saxlayır; hər hansı bir geri dönüş transkripti yuxarıda məhdudlaşdırılmış mətn çevrilməsini izləyir. `supportsVideo === true` olan hədəflər körpünü keçirlər. Müştəri sorğusunun abort siqnalı yükləmə, broker növbəsi, alt proseslər və başlıq çağırışları vasitəsilə yayılır; abortlar videolar arasında dayanır və heç vaxt xam mediaya açıq qalmır.

İcra müddətləri DB-ə əsaslanır və Zod tərəfindən təsdiqlənir:

| Açar                                | Standart    | Aralıq / davranış                                                                                      |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`     | İsteğe bağlı icra, opt-in                                                                              |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` ümumi başlıqları saxlayır; `focused` məhdud, etibarsız son istifadəçi kontekstini istifadə edir |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge modelini miras alır                                                                      |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                   |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, və ya nisbətli `segment_aware`; detektor uğursuzluğu `uniform`-a geri dönür  |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                    |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                         |

Legacy davam edən Video zaman aşımı dəyərləri 120 saniyədən yuxarı broker son tarixinə sıxılır; bu limitdən yuxarı yeni ayarlar yazılmır. `GET /api/modality-bridge/video/runtime` etibarlı möhürlənmiş loopback lokalizasiya tələb edir, sonra idarəetmə autentifikasiyası tələb olunur. Bu, yalnız `available`, sanitizasiya edilmiş FFmpeg/ffprobe versiyalarını və runtime mövcud olmadıqda sabit bir səbəb qaytarır. Daxili çıxarma nöqtəsi ictimai yükləmə API-si deyil: növbə doyması `503` və `Retry-After` qaytarır, bir çağırışın ayrılması `499` qaytarır və sabit broker son tarixi `504` qaytarır. Dönüşdürülmüş cavablar mərkəzi `x-omniroute-modality-bridge` başlığına `video->text;model=<visionModel>;parts=<videos>` əlavə edir, Vision və Audio seqmentlərini silmir.

### PII Masker (`piiMasker.ts`)

**Hər iki** mərhələdə işləyir.

- **`preCall`** yükü klonlayır, `system`, `messages`, `input` və `prompt` (sadə string elementləri daxil olmaqla) üzərində gəzərək `processPII()` ( `@/shared/utils/inputSanitizer`-dan) string `content`/`text` sahələrinə tətbiq edir. `PII_REDACTION_ENABLED=true` olduqda, aşkar edilmiş PII çıxarılır. Bu, `INPUT_SANITIZER_MODE`-dan asılı deyil (yalnız prompt-injection siyasətini idarə edir). Çıxarma söndürüldükdə, çağırış qeydləri aşkar etmə saylarını yazır, məzmunu yenidən yazmadan.
- **`postCall`** cavabı dərin klonlayır, `sanitizePIIResponse()` və Responses-API-forma maskeri (`maskResponsesOutput` — `output_text` və `output[].content[].text`-i əhatə edir) işləyir. Hər hansı bir çıxarma baş verərsə, dəyişdirilmiş cavab orijinalını əvəz edir.

Mühafizə heç vaxt bloklamır; yalnız annotasiya edir (`meta.detections`, `meta.redacted`) və ya yenidən yazır.

### Prompt Injection (`promptInjection.ts`)

İstifadəçi tərəfindən təqdim olunan məzmundakı düşmən strukturlarını aşkar edir və konfiqurasiya edilmiş siyasəti tətbiq edir. Davranış mühit dəyişənləri və konstruktor seçimləri ilə idarə olunur:

| Ayar           | Env var                                                                                               | Default | Təsir                                                                                                                                                                                             |
| -------------- | ----------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiv          | `INPUT_SANITIZER_ENABLED`                                                                             | `true`  | `false` olduqda, mühafizə qısa dövr edir.                                                                                                                                                         |
| Rejim          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`  | İnjeksiya siyasəti: `block`, `warn`, və ya `log`. (`redact` geri uyğunluq üçün qəbul edilir, lakin injeksiya mətnini **silmir**; PII yenidən yazılması `PII_REDACTION_ENABLED` ilə idarə olunur.) |
| Bloklama həddi | `blockThreshold` seçimi / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Bloklama üçün tələb olunan minimum şiddət. Orta, standartda yalnız müşahidə üçündür.                                                                                                              |

**Rejim üstünlüyü** (`getMode`): çağıran `options.mode` →
`INJECTION_GUARD_MODE` **DB xüsusiyyət-flagi üstələmə** (Dashboard → Ayarlar →
Xüsusiyyət Flaggları) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Dashboard üstələməsi buna görə mühit dəyişənlərini üstələyir, beləliklə Xüsusiyyət Flaggları UI canlı mühafizəni idarə edir (yenidən başlatma olmadan). DB oxumaq təhlükəsizdir: əgər səhv baş verərsə, mühafizə mühitə əsaslanan davranışa geri dönür və heç bir üstələmə olmadıqda davranış mühitə əsaslanan həllə bərabərdir.

Aşkar etmə mənbələri:

1. `sanitizeRequest()` `@/shared/utils/inputSanitizer`-dan (pipeline-da başqa yerlərdə istifadə olunan paylaşılmış detektor dəsti).
2. Daxili `DEFAULT_GUARD_PATTERNS` (hazırda `system_override_inline` və `markdown_system_block`, hər ikisi `high` şiddət).
3. Konstruktor seçimləri vasitəsilə ötürülən optional `customPatterns` (stringlər, regex, və ya `{ name, pattern, severity }` qeydləri).

`mode === "block"` **və** ən azı bir aşkar etmə şiddət həddini qarşılayırsa, `preCall` `{ block: true, message: "Tələb rədd edildi: şübhəli məzmun aşkar edildi" }` qaytarır. `warn`/`log` rejimlərində mühafizə qeydləri yazır, lakin çağırışı icazə verir. Paylaşılan köməkçi `evaluatePromptInjection()` də qeyd olunur ki, çağıranlar qeydiyyatdan keçmədən promptları qiymətləndirmək üçün istifadə edə bilsinlər.

**Skana bağlı (v3.8.20):** detektor yalnız **ilk 16 KB** birləşdirilmiş prompt mətnini yoxlayır — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bayt) `src/shared/utils/inputSanitizer.ts`-də. Həm `detectInjection()` həm də `evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` işlədərək naxış dövrünü icra etməzdən əvvəl. İnjeksiya direktivləri girişin yuxarı hissəsində yerləşir, buna görə bu, çox yüz KB-lik yüklerde regex CPU/GC-ni məhdudlaşdırır, aşkar etməni zəiflətmir (cf. #3932, #4041).

### Credential Masker (`credentialMasker.ts`)

**Hər iki** mərhələdə işləyir, standart zəncirdə sonuncu (prioritet `95`). Yaxşı tanınan API açar / gizli token naxışlarını çıxış yükündən (mesaj məzmunu, alət çağırış arqumentləri, alət nəticələri) **və** provayder cavabından çıxarır, beləliklə bir prompta yapışdırılan (və ya bir alət nəticəsi ilə geri dönən) bir etimadnamə yuxarı provayderə və ya müştəriyə sızdırılmır.

- **Yalnızca opt-in**, PII redaktəsi ilə eyni konvensiya (Sərt Qayda #20-ə yaxın):
  `settings.credentialRedactionEnabled === true` **və ya**
  `CREDENTIAL_REDACTION_ENABLED=true` olmadıqda deaktivdir. Bu, söndürüldükdə, qoruyucu heç bir əməliyyat etmir —
  heç vaxt bloklamır və heç vaxt yenidən yazmır.
- `redactCredentials()` tam yük/reaksiya ağacını gəzərək (`walkValue()`,
  prototip çirklənməsinə qarşı təhlükəsiz, `WeakSet` vasitəsilə dövr təhlükəsiz) uyğunluqları
  `[REDACTED:<type>]` yer tutucu ilə əvəz edir, yalnız faktiki dəyişən budaqları klonlayır.
- `CREDENTIAL_PATTERNS` LLM təminatçı açarlarını (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokenlərini (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ödəniş açarlarını (Stripe, Square), bulud
  açarlarını (AWS giriş açarı, Twilio, SendGrid, Mailgun), özəl açarları / JWT-ləri,
  credential-daşıyan bağlantı sətirlərini (`mongodb://user:pass@...`, və s.), və
  ümumi `Authorization`/`x-api-key`/`api-key`/`apikey` başlıq-dəyər
  nümunəsini əhatə edir. Başlıq şəklindəki açarlar (`authorization`, `x-api-key`, `api-key`,
  `apikey`) strukturca redaktə olunur (yalnız dəyər, `Bearer `/`Basic ` kimi
  prefiks saxlanılır) ümumi mətn regex-i vasitəsilə deyil.
- Qoruyucu heç vaxt bloklamır; yalnız yenidən yazır (`modifiedPayload` /
  `modifiedResponse`) və annotasiya edir (`meta.credentialsRedacted`, `meta.count`).

Regressiya qoruması: `tests/unit/credential-masker-guardrail.test.ts`.

## Əsas müqavilə (`base.ts`)

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
  block?: boolean; // true zənciri dərhal dayandırır
  message?: string; // bloklama zamanı göstərilir
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // sorğunu yenidən yazmaq üçün preCall tərəfindən qaytarılır
  modifiedResponse?: TValue; // cavabı yenidən yazmaq üçün postCall tərəfindən qaytarılır
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

Qoruyucu mexanizm `void`, `{}` və ya `{ block: false }` qaytarmaqla "dəyişiklik yoxdur"
siqnalını verir. `modifiedPayload`/`modifiedResponse` qaytarılması zəncir boyunca
sonrakı qoruyucu mexanizmlərə ötürülən dəyəri əvəz edir.
`signal?: AbortSignal` çağıranın həyat dövrünü qoruyucu mexanizmlərə ötürür. Sorğunun ləğv edilməsi qəsdən tətbiq olunan fail-open istisnasıdır: media körpüləri işi dayandırır və təmizləmə aparır, lakin emal edilməmiş medianı onu dəstəkləmədiyi məlum olan hədəfə bərpa etmir.

## Reyestr (`registry.ts`)

Tək nümunəli `guardrailRegistry` aşağıdakıları təqdim edir:

- `register(guardrail)` — qoruyucu mexanizm əlavə edir (və ya normallaşdırılmış ada görə əvəz edir) və
  artan `priority` sırasına görə yenidən çeşidləyir.
- `clear()` / `list()` — inzibati köməkçi funksiyalar.
- `runPreCallHooks(payload, context)` — aktiv qoruyucu mexanizmlər üzrə iterasiya edir, payload-u
  `modifiedPayload` vasitəsilə zəncir boyunca ötürür və ilk `block: true` halında dayanır.
- `runPostCallHooks(response, context)` — cavab tərəfində eyni axını icra edir.
- `resetGuardrailsForTests({ registerDefaults })` — vəziyyəti təmizləyir və təmiz test izolyasiyası üçün istəyə bağlı olaraq
  standartları yenidən qeydiyyatdan keçirir.

Hər iki icra mexanizmi `{ blocked, payload|response, results, guardrail?, message? }`
qaytarır; burada `results` hər qoruyucu mexanizm üzrə
`blocked`, `skipped`, `modified`, `error` və `meta` sahələrini ehtiva edən
`GuardrailExecutionResult` qeydləri massividir və izləmə üçün faydalıdır.

### Hər sorğu üzrə qoruyucu mexanizmlərin deaktiv edilməsi

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` cari sorğu üçün
ötürülməli olan qoruyucu mexanizm adlarının təkrarlanmayan siyahısını toplayır.
Mənbələr (hamısı istəyə bağlıdır və hamısı birləşdirilir):

- `apiKeyInfo.disabledGuardrails`
- Sorğunun gövdəsində `disabledGuardrails` (yuxarı səviyyə)
- Sorğunun gövdəsində `metadata.disabledGuardrails`
- `x-omniroute-disabled-guardrails` başlığı (və ya köhnə
  `x-disabled-guardrails`)

Dəyərlər sətirlər massivləri və ya vergüllə ayrılmış sətir ola bilər; adlar
kiçik hərflərlə kebab-case formatına normallaşdırılır (`pii_masker` → `pii-masker`). Nəticə
`context.disabledGuardrails` vasitəsilə reyestrə ötürülür və reyestr uyğun gələn
qoruyucu mexanizmləri ötürür (`results` daxilində `skipped: true`).

## İcra ardıcıllığı

`src/sse/handlers/chat.ts` və `open-sse/handlers/chatCore.ts` vasitəsilə keçən hər bir sorğu üçün:

1. `resolveDisabledGuardrails(...)` API açarı, sorğu gövdəsi və başlıqlar əsasında ötürüləcək qoruyucu mexanizmlərin siyahısını yaradır.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` qoruyucu mexanizmləri artan prioritet sırası ilə işə salır:
   - Deaktiv edilmiş qoruyucu mexanizmlər `skipped` kimi qeydə alınır.
   - Hər qoruyucu mexanizmin `preCall` funksiyası `modifiedPayload` vasitəsilə faydalı yükü yenidən yaza bilər.
   - İlk `block: true` zənciri qısa qapayır və emalçı qoruyucu mexanizm tərəfindən rədd cavabı qaytarır.
3. Dəyişdirilmiş ola bilən faydalı yük kombinə edilmiş marşrutlaşdırmaya və yuxarı axına göndərilməyə ötürülür.
4. Cavab formalaşdırıldıqdan sonra `guardrailRegistry.runPostCallHooks(...)` cavab üzərində eyni zənciri işə salır. Buradakı `block: true` yuxarı axın cavabını ləğv edir.

İstisna atan qoruyucu mexanizmlər `error: <message>` ilə qeydə alınır və `logger.warn` vasitəsilə jurnala yazılır, lakin zəncir davam edir — bu, dizayn etibarilə nasazlıq zamanı icazəvermə yanaşmasıdır.

## Konfiqurasiya

Daxili qoruyucu mexanizmlərin oxuduğu mühit dəyişənləri:

| Dəyişən                               | İstifadə edən             | Təsir                                                                                                         |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Aşkarlamanı tamamilə deaktiv etmək üçün `false` təyin edin.                                                   |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | İnjeksiya siyasəti: `warn`, `block` və ya `log`. Köhnə `redact` dəyəri injeksiya mətnini yenidən yazmır.      |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | İnjeksiya qoruyucusunun rejimi; həmçinin mühit dəyişənlərini **üstələyən** DB funksiya bayrağıdır (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | `MODE=block` tərəfindən rədd edilən minimum ciddilik səviyyəsi: `high` (standart), `medium` və ya `low`.      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | `INPUT_SANITIZER_BLOCK_THRESHOLD` üçün köhnə alternativ ad.                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | `true` olduqda sorğudakı PII redaktə edilir (injeksiya rejimindən asılı olmayaraq).                           |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (aşağı axın) | Cavab tərəfindəki maskalayıcının davranışını idarə edir.                                                      |

Modality Bridge qoruyucu mexanizmləri mühit dəyişənlərindən deyil, DB dəstəkli parametrlər anbarındakı icra vaxtı konfiqurasiyasını (`getSettings()`) oxuyur. Vision üçün əsas açarlar bunlardır:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` və
`modalityBridgeCacheMaxEntries`. Köhnə
`visionBridge*` açarları yalnız sənədləşdirilmiş bir dövrlük oxuma ehtiyat variantı kimi qəbul edilir; idarəetmə panelindəki yazma əməliyyatları əsas açarlardan istifadə edir. Standart dəyərlər və ehtiyat həll mexanizmi `src/shared/constants/modalityBridgeDefaults.ts` daxilindədir, köhnə sabitlər isə `src/shared/constants/visionBridgeDefaults.ts` daxilində saxlanılır.

Audio `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` və `modalityBridgeAudioMaxClips`, həmçinin ortaq
`modalityBridgeCache*` parametrlərindən istifadə edir. Bu açarlar Modality Bridge sxemi ilə təqdim edildiyinə görə Audio üçün köhnə açarlara ehtiyat keçid yoxdur.

Video `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` və
`modalityBridgeVideoTimeout`, həmçinin ortaq `modalityBridgeCache*` parametrlərindən istifadə edir.
FFmpeg/ffprobe istəyə bağlı əməliyyat asılılıqları olduğuna, kadrların təsvir edilməsi isə gecikmə və model xərci yaratdığına görə bu funksiya standart olaraq deaktivdir.

## Fərdi qoruyucu mexanizmlər

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

Addımlar:

1. `BaseGuardrail` sinfini genişləndirən `src/lib/guardrails/myGuardrail.ts` faylını yaradın.
2. `preCall` və/və ya `postCall` metodunu reallaşdırın.
3. Ya import zamanı qeydiyyatdan keçirin (`registerDefaultGuardrails` daxilindən əlavə edin), ya da
   icra zamanı `guardrailRegistry.register(...)` çağırın — reyestr eyni normallaşdırılmış ada
   malik əvvəlki qoruyucu mexanizmi əvəz edir.
4. Testləri `tests/unit/` altında əlavə edin (mövcud nümunələr:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testləmə

Məlum vəziyyətdən başlamaq üçün testlər arasında `resetGuardrailsForTests()` istifadə edin.
Boş reyestrlə başlamaq və yalnız test edilən qoruyucu mexanizmləri qeydiyyatdan keçirmək
üçün `{ registerDefaults: false }` ötürün. Vision Bridge asılılıqların yeridilməsini
(`deps.getSettings`, `deps.callVisionModel`) qəbul edir; Audio Bridge isə parametrlər,
imkanlar, STT modelinin seçimi, giriş məlumatlarının yoxlanılması və transkripsiya üçün
ekvivalent müdaxilə nöqtələri təqdim edir. Buna görə də testlər hər iki axını DB və ya
şəbəkə çıxışı olmadan sınaqdan keçirə bilər.

## Həmçinin baxın

- `src/lib/guardrails/` — reallaşdırma
- `src/shared/utils/inputSanitizer.ts` — prompt inyeksiyasını və PII maskalanmasını
  təmin edən ortaq detektor
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge standartları və
  məcburi körpü model siyahısı
- `src/shared/constants/modalityBridgeDefaults.ts` — ortaq Vision/Audio icra mühiti standartları
- `docs/architecture/RESILIENCE_GUIDE.md` — ortoqonal qat (dövrə kəsicisi, gözləmə müddətləri)
- `docs/reference/ENVIRONMENT.md` — mühit dəyişənlərinin tam arayışı

## İnyeksiya qoruyucusunun marşrut əhatəsi və red-team (Mərhələ 8 · Blok D)

İnyeksiya qoruyucusu (`createInjectionGuard` / `withInjectionGuard`) istifadəçi promptlarını
qəbul edən bütün marşrutları əhatə edir. O, `INJECTION_GUARD_MODE` parametrinə riayət edir
(standart `warn` = yalnız jurnala yazır; `block` = HTTP 400 `SECURITY_001` qaytarır).

| Növ           | Marşrutlar                                                                                                                                           | Standart rejim |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Mətn (mövcud) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generativ     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Məlumat       | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Mətnin çıxarılması (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` sahələrini əhatə edir.

**Red-team (gecəlik, `nightly-llm-security.yml`):** promptfoo hər bir marşrutun
`INJECTION_GUARD_MODE=block` rejimində OWASP-LLM korpusunu blokladığını yoxlayır; garak
sınaqları işə salır (gizli açar olmadıqda ötürür). `moderations` ardıcıllıq naminə daxil
edilib — `block` rejimindəki operatorlar onu `resolveDisabledGuardrails` vasitəsilə istisna
edə bilərlər.

Gecəlik iş axınının (`.github/workflows/nightly-llm-security.yml`, cron + əl ilə
işə salma) iki tapşırığı var:

- **`promptfoo-guard` (bloklayıcı)** — `INJECTION_GUARD_MODE=block` ilə
  `promptfoo eval -c promptfooconfig.yaml` əmrini işlədir. Hər bir rəqib ssenari
  (məsələn, "əvvəlki bütün təlimatlara məhəl qoyma…", DAN üslublu jailbreak-lər)
  cavabın `error.code === "SECURITY_001"` daşıdığını, yəni qoruyucunun sorğunu
  həqiqətən rədd etdiyini təsdiqləyir.
- **`garak` (məşvərətçi)** — yerli OmniRoute instansiyasına
  (`http://localhost:20128/v1`) qarşı garak-ı `--probes promptinject,dan,leakreplay`
  ilə işə salır. Provayderin gizli açarından (`PROMPTFOO_PROVIDER_KEY`) asılıdır;
  açar olmadıqda problemsiz ötürülür və sonuna `|| true` əlavə edilib, buna görə
  CI prosesini uğursuz etmədən hesabat verir.

Qoruyucu köməkçi funksiyanın (`createInjectionGuard` / `withInjectionGuard`) əhatəsi
prompt daşıyan hər bir `/v1` marşrutunu əhatə edir; prompt mətni
`src/shared/utils/inputSanitizer.ts` daxilindəki `extractMessageContents()` tərəfindən
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` sahələrindən
götürülür.
