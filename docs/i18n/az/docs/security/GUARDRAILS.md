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

Qeydiyyat idxal zamanı altı qoruyucunu prioritet sırasına görə avtomatik yükləyir
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
bütün sorğunu görmə qabiliyyətinə malik bir modelə yönləndirir, ya da şəkil
hissələrini konfiqurasiya edilə bilən bir görmə modeli tərəfindən istehsal olunan
mətn təsvirləri ilə dəyişdirir. Bu, yalnız mətn təminatçılarının
multimodal yükü şəffaf şəkildə idarə etməsinə imkan tanıyır.

Axın:

1. Hədəf model artıq görməni dəstəkləyirsə, keçin (əgər məcburi köprü siyahısında
   `isVisionBridgeForcedModel` görünmürsə).
2. Şəkil hissələrini `extractImageParts(messages)` vasitəsilə çıxarın
   (`visionBridgeHelpers.ts`), bu da **birləşdirilmiş media
   detektoru** `detectMediaParts()`-a yönləndirir `open-sse/utils/mediaParts.ts` —
   birləşmə uyğunluq filtrinin paylaşdığı tək həqiqət mənbəyi.
   Çıxarma, `replaceImageParts`-ın geri qaytara biləcəyi formaların
   üst səviyyə hissələrinə icazə verilir (çıxar↔dəyişdir müqaviləsi): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, və Responses API `input_image`. Daxili hitlər və
   yalnız göstərici formaları birləşmə-filtr materialıdır və heç vaxt çıxarılmır.
   Heç biri tapılmadıqda keçin.
3. İcraat konfiqurasiyasını `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) vasitəsilə həll edin: yeni
   `modalityBridge*` konfiqurasiya açarları qalib gəlir; köhnə `visionBridge*`
   açarları **bir dövr geri dönüş** (geri dönüş pəncərəsi) olaraq qalır.
   Köprü deaktiv edildikdə, hər hansı bir media keçidindən əvvəl keçin.
4. Mod seçici (`modalityBridgeVisionMode`, aşağıdakı cədvələ baxın)
   yönləndirmə ilə təsvir arasında qərar verir. Yönləndirmə yalnız `model`
   dəyişdirilmiş `modifiedPayload` ilə geri qaytarır, əlavə meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Təsvir yolu: şəkilləri `maxImages` ilə məhdudlaşdırın, tapşırığa uyğun
   təklif hazırlayın, təsvir önbelleğini yoxlayın, görmə modelini **paralel**
   olaraq çağırın (`Promise.allSettled`), və `[Image N]: <description>` mətn
   hissələrini onların yerində daxil edin. Uğursuz bir təsvir `null` verir
   və orijinal şəkil hissəsi **saxlanılır** (#4012) — yalnız hər bir
   təsvirin uğursuz olduğu birləşmə təsvir yolu zamanı, təsdiqlənmiş
   görmə qabiliyyətinə malik olmayan bir yuxarıdan `(unavailable — no vision-capable provider connected)` stub alır (#8430).
6. `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) geri qaytarın.

#### Mod seçici (`modalityBridgeVisionMode`)

| Mod        | Default | Davranış                                                                                                                                                                                                                                                                      |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Köhnə heuristika, toxunulmamış (#6640/#7204): qeyri-birləşmə/`auto/` modelləri ən yaxşı görmə modelinə yönləndirilir, əgər orijinal model artıq istifadə edilə bilən kredensiallara malikdirsə (onda təsvir); birləşmə hədəfləri həmişə təsvir edir.                          |
| `describe` |         | Həmişə təsvir et — yönləndirmə bloku tamamilə keçilir; istifadəçinin seçdiyi model həmişə cavab verir.                                                                                                                                                                        |
| `reroute`  |         | Zorla yönləndirmə: saxlanılan-kredensiallı-model qoruyucusu keçilir. Yönləndirmə-**hədəf** kredensial qoruyucusu hələ də tətbiq olunur — istifadə edilə bilən görmə hədəfi olmadıqda, sorğu təsvirə düşür ki, xam şəkillər heç vaxt yalnız mətn arxa planda çatmasın (#8430). |

Məcburi modlar **avtomatik** heuristika işləmədən əvvəl qısa dövr edir; `auto` davranışı
PR-1 qoruyucusundan əvvəlki ilə tam eynidir.

#### API açarının sahəsi (`visionBridgeKeyScope.ts`)

Zəng edən şəxsin API açarı `allowedConnections`, kvota hovuzları
(`allowedQuotas`) və ya modelləri (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) məhdudlaşdırdıqda,
köprü yalnız açarın istifadə edə biləcəyi yönləndirmə və təsvir modellərini
seçir, açarın istifadə edə biləcəyi bağlantılarda. Təsvir çağırışı
həmişə `x-omniroute-self-loop-key-id` başlığı ilə OmniRoute öz döngüsündən keçir,
beləliklə, qəbul edən çat sorğusu həmin açarın bağlantı və model siyasətini yenidən
tətbiq edir. `enforceApiKeyPolicy()`
bu başlığı yalnız öz döngü daşıyıcısı ilə birlikdə tanıyır, beləliklə, yalnız
girişi daralda bilər, və həll olunmayan bir id rədd edilir.

Əgər açar üçün heç bir görmə modeli icazə verilmirsə, təsvir yolu kənara çıxır
və sorğu dəyişməz şəkildə keçir, deaktiv edilmiş qoruyucu ilə eyni
fail-açıq davranışı (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Açar olmadan sorğular və bu məhdudiyyətlər olmadan açarlar əvvəlki kimi
tamamilə eyni davranır.

#### Tapşırığa uyğun təsvir təklifi (`modalityBridgeVisionTaskAware`)

Default **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) son
**son istifadəçi mesajının** (500 simvola qədər qısaldılmış) mətnini əsas
təsvir promptuna əlavə edir, təsviri istifadəçinin əslində nə soruşduğuna
doğru yönləndirir (codex-vision-proxy nümunəsi) və görmə modelindən görünən
mətnin transkripsiyasını tələb edir. Bayraq söndürüldükdə — və ya istifadəçi
mətn olmadıqda — əsas prompt dəyişməz şəkildə istifadə olunur.

Təsvir öz-özünə döngəsinin OpenAI ilə uyğun olan sorğusu (`callVisionModelSingle()`
`visionBridgeHelpers.ts`-də) həmişə `image_url.detail: "high"` tələb edir —
şərtsiz, hər bir çağırıcı/təchizatçı üçün, heç bir müştəri siqnalına bağlı
deyil. Aşağı detallı nümunə götürmə OCR dəqiqliyini məhz bu promptun tələb
etdiyi mətn-transkripsiya tapşırığı üçün pisləşdirir, buna görə də təsvir
çağırışı həmişə yüksək detal tələb edir, orijinal daxil olan sorğunun hansı
detal səviyyəsindən istifadə etməsindən asılı olmayaraq. Bu yalnız daxili
təsvir sorğusunun bədənini təsir edir; OmniRoute-un çağıranın öz `image_url.detail`
dəyərini əsas sorğuda necə ötürdüyünü dəyişmir — bu standart ayrıca tətbiq
edilir və yalnız aşkar edilmiş OpenCode müştəriləri üçün, `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`) içində. Təsvir öz-özünə döngəsinin
Anthropic wire-format qolu `detail` sahəsinə malik deyil və hər iki standartdan
təsirlənmir.

#### Təsvir çıxış limiti (`modalityBridgeVisionMaxChars`)

| Açar                           | Standart | Aralıq              |
| ------------------------------ | -------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` və ya 100–50000 |

`0` (standart) **heç bir limit** deməkdir — `callVisionModel()` tərəfindən
qaytarılan təsvir dəyişməz şəkildə ötürülür, mövcud davranışı qoruyur. 100–50000
aralığında olan hər hansı bir dəyər təsviri `…` əlavəsi ilə qısaldır
və onu `[Image N]: <description>` kimi birləşdirir
(`VisionBridgeGuardrail.preCall()` `src/lib/guardrails/visionBridge.ts`-də).
Bu, aşağıdakı modelin tam transkripsiyasına ehtiyacı olan detallı OCR tapşırıqları
üçün artırılmalıdır; söhbət edən görmə modellərində token istifadəsini
məhdudlaşdırmaq üçün aşağı salınmalıdır. İdarəetmə sahəsi Vision sekmesinin
İrəliləmiş panelində yerləşir
(`modality-bridge-max-chars` `ModalityBridgeVisionTab.tsx`-də) və 1 ilə 99
arasında olan hər hansı bir dəyəri 100 minimumuna qədər sıxır, eyni zamanda
açıq `0`-ı toxunulmaz saxlayır — `0` özlüyündə etibarlı Zod dəyəridir
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), sadəcə
"quraşdırılmamış" standart deyil.

#### Təsvir keşəsi (`modalityBridge/bridgeCache.ts`)

Təsvir çıxışları üçün yaddaşda LRU + TTL keşəsi, prosesi boyunca paylaşılır.
Açar = `sha256(imageRef + composedPrompt + configuredBridgeModel)` uzunluq
prefiks çərçivəsi ilə (sahə sərhədi toqquşmaları yoxdur). Model komponenti
**konfiqurasiya edilmiş** körpü modelidir, həqiqətən cavab verən model deyil —
`callVisionModel` daxildə geri qayıda bilər və cəhdə görə açar qoymaq
keşəni parçalayardı. Uğursuz təsvirlər heç vaxt keşlənmir. Parametrlər:

| Açar                            | Standart | Aralıq  |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Uzaqdan şəkil normallaşdırılması (öz-özünə döngə təsvir/base64 əldə etmə)

Körpü **uzaqdan** şəkil əldə etdikdə — Anthropic təsvir öz-özünə çağırışı
və claude-wire-format base64 çevrilməsi
(`ensureBase64ImagesForClaudeWire`), hər ikisi
`fetchRemoteImageAsDataUri()` `visionBridgeHelpers.ts`-də — nəticədə yaranan
məlumat URI `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) vasitəsilə ötürülür, sonra görmə-model
sorğusuna daxil edilir. Böyük şəkillər **2048px uzun kənara** (OpenAI/Anthropic
server tərəfində artıq tətbiq etdiyi ölçü limitinə uyğun) endirilir, bu da
yükləmə baytlarını/latenliyi azaldır, görmə modelinin gördüyü şeyi dəyişdirmədən.
Ölçüləndirmə `sharp` istifadə edir, dinamik idxal vasitəsilə yüklənir: onun
yerli ikili faylı yüklənmədiyi bir platformada `normalizeDataUri()` **heç
bir istisna atmaz** — o, orijinal baytların ötürülməsinə geri qayıdır, beləliklə
təsvir/base64-çevrilmə yolu həmişə işlək qalır. Şəkil olmayan baytlar (şəkil
deşifrə edə bilməyən bir əldə etmə) də toxunulmadan ötürülür. Bu normallaşdırma
körpünün öz-özünə çağırışı üçün əldə etdiyi şəkillərlə məhdudlaşır — bu,
çağıranın xam ötürmə yükünə tətbiq edilmir, yalnız opt-in yalnız dəyişiklik
prinzipinə uyğun olaraq (Sərt Qayda #20).

#### Parametrlər sxemi + köçürmə

Yeni `modalityBridge*` açarları `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`)-də Zod ilə təsdiqlənir:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCache*` üçlüyü və Audio Bridge tərəfindən istifadə olunan
`modalityBridgeAudio*` qrupu. Köçürmə `141_modality_bridge_settings.sql`
mövcud köhnə `visionBridge*` dəyərlərini uyğun yeni açarlara köçürür
(idempotent, heç vaxt operator tərəfindən təyin edilmiş `modalityBridge*`
dəyərini üstələməz); köhnə açarlar bir buraxılış dövrü üçün oxumaq üçün
qəbul edilir.

#### Şəffaflıq başlığı + statistikalar

Təsvirə çevrilmiş cavablar
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
ilə birlikdə gəlir ( `buildModalityBridgeHeader()` `modalityBridge/bridgeStats.ts`-də
tərtib edilir, `withModalityBridgeHeader()` `src/sse/handlers/chatHelpers.ts`-də
damğalanır). Yenidən yönləndirilmiş sorğular **heç bir** başlıq almır — yük
toxunulmamışdır və model dəyişməsi artıq cavab bədənin `model` sahəsində görünür.

`GET /api/modality-bridge/stats` (idarəetmə autentifikasiyası, `GET /api/settings` ilə eyni səviyyədə) `vision`, `audio` və `video` üçün yaddaşda saxlanılan hər-modallıq sayğaclarını `{
 attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
 latencySamples, averageLatencyMs, lastUsedAt }` qaytarır. `averageLatencyMs` `latencySamples`-dan istifadə edir, bütün cəhdlərdən deyil, onun məxrəci kimi; zaman ölçüsü olmayan bir əməliyyat sıfır-milisaniyə nümunəsi yaratmır. `bridged` uğurlu çevrilmələr üçün geriyə uyğun gələn ad olaraq qalır; uğursuz cəhdlər onu artırmır. Sayğaclar proses yenidən başladıqda sıfırlanır (telemetriya, mühasibatlıq deyil).

#### Dashboard konfiqurasiyası

Xüsusi dashboard səhifəsi ` /dashboard/settings/modality-bridge`-dir. Onun URL-ə müraciət edilə bilən `Vision`, `Audio` və `Video` tabları `tab` dəyərini dəyişərkən sorğu parametrlərini saxlayır. Vision tabı aktivləşdirmə, rejim, model seçimi (avtomatik standart daxil olmaqla), tapşırıqdan xəbərdar olan təklif, inkişaf etmiş zaman/image/təsvir uzunluğu/cache limitləri, iş vaxtı sayğacları və qorunan nümunə sorğusunu təqdim edir. Audio tabı da canlıdır: aktivləşdirmə, yalnız STT modeli seçici, Auto, zaman/max-clip limitləri, audio sayğacları və `input_audio` nümunə testi təqdim edir. Video tabı funksionaldır: FFmpeg/ffprobe iş vaxtı vəziyyətini bildirir — dörd açıq UI vəziyyətindən biri (`probe uçuşda olduğu zaman `unknown`və ya tamamlanmadığı zaman,`restricted`müştəri tərəfində probe-un atlandığı bir döngü olmayan dashboard hostunda,`unavailable`probe edildikdən sonra və itkin olduğu təsdiqləndikdə, ya da`available` FFmpeg/ffprobe versiyaları ilə) — aktivləşdirmə/model/frame/video/zaman limitlərini saxlayır, model seçicisini vizion qabiliyyətli modellərlə filtr edir və video sayğaclarını təqdim edir.

AI parametrləri altında əvvəlki Vision Bridge kartı yeni səhifəyə uyğunluq bağlantısıdır; artıq formun ikinci nüsxəsinə sahib deyil. Media Providers həmçinin Image-to-Text və Speech-to-Text iş axınlarını müvafiq Modality Bridge tablarına bağlayır, mövcud Speech-to-Text oyun sahəsini silmir.

**Öz döngə qəbulunu keçmək:** təsvir çağırışı OmniRoute-un öz `/v1` öz döngəsi (standart olmayan provayder modeli) vasitəsilə yönləndiriləndə, alt-sorğu `x-omniroute-admission-bypass: internal` göndərir və həll edilmiş öz döngə kredensialı ilə autentifikasiya olunur — yerli `sk_omniroute` sentinel yerli rejimdə, ya da operator tərəfindən konfiqurasiya edilmiş `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env açarı (#1350) beləliklə `REQUIRE_API_KEY=true` yerləşdirmələri hələ də təsvir çağırışını icra edə bilər. Keçid yalnız bu dəqiq kredensiallar üçün qəbul edilir, beləliklə xarici müştərilər başlığı istifadə edərək qəbuldan qaça bilməzlər.

Köhnə standartlar `src/shared/constants/visionBridgeDefaults.ts`-də yaşayır; yeni rejim/tapşırıqdan xəbərdar/cache standartları və parametrlər həll edici `src/shared/constants/modalityBridgeDefaults.ts`-də yaşayır. Qoruyucu bir `deps` konstruktor seçimini təqdim edir ki, testlər saxta `getSettings` və `callVisionModel` tətbiqlərini daxil edə bilsin.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Hədəfə çatmadan əvvəl audio daşıyan söhbət sorğularını ələ keçirir ki, bu hədəf audio girişini qəbul etməyi bilmir. O, heç vaxt söhbət sorğusunu yönləndirmir: audio hissələri mövcud OpenAI-ya uyğun çox hissəli son nöqtə vasitəsilə transkripte edilir və seçilmiş söhbət modeli mətn transkriptləri ilə davam edir.

Axın:

1. `supportsAudio`-nu `getResolvedModelCapabilities()` vasitəsilə həll edin. Açıq provayder-reyestr metadata qalib gəlir, sonra statik model metadata, sonra isə sinkronlaşdırılmış `modalities_input`. `audio` olmayan bir elan edilmiş giriş siyahısı `false`-dır; heç bir qabiliyyət sübutu `null` qalır. Həm `false`, həm də `null` mühafizəkar körpünü aktivləşdirir, `true` isə onu keçməyə imkan verir.
2. `modalityBridgeAudio*` parametrlərini həll edin və hər mesajdan paylaşılabilən üst səviyyə audio hissələrini `detectMediaParts()` detektoru vasitəsilə çıxarın. Dəstəklənən kabel formalı OpenAI `input_audio`, `audio_url` və `source.media_type: "audio/*"`-dır. Nestləşdirilmiş audio yönləndirmə üçün aşkar edilir, lakin splice yolu ilə çıxarılmır. İş `modalityBridgeAudioMaxClips` ilə məhdudlaşdırılır; sonrakı hissələr toxunulmaz qalır.
3. Konfiqurasiya edilmiş `provider/model`-i qəbul edin, ya da `selectAudioBridgeModel()`-in `AUDIO_TRANSCRIPTION_PROVIDERS`-də stabil kataloq sırası ilə gəzməsinə və istifadə edilə bilən aktiv provayder kredensialı olan ilk modeli seçməsinə icazə verin.
4. `callAudioTranscription()` base64/data-URI audio-nu çox hissəli `file`-ə çevirir, ya da ictimai yalnız çıxış qoruyucusu vasitəsilə DNS pinləmə və 25 MB sərhəd ilə uzaq `audio_url`-ni yükləyir. Sonra faylı və seçilmiş modeli yerli `/v1/audio/transcriptions` öz döngəsinə POST edir, `resolveSelfLoopBearer()` ilə autentifikasiya olunur. Mövcud transkripsiya marşrutu normal kredensial axtarışı, cooldown/sürət məhdudlaşdırma idarəetməsi və provayder göndərilməsi həyata keçirir.
5. Uğurlu çağırışlar hissələrini `[Audio N]: <transcript>` ilə əvəz edir. Çağırışlar `Promise.allSettled` ilə icra olunur: fərdi uğursuzluq orijinal audio hissəsini qoruyur (#4012 müqaviləsi). Əgər hər bir çağırış uğursuz olarsa və hədəf `supportsAudio === false` olduğu sübut olunarsa, hissələr `[Audio N]: (mövcud deyil — heç bir STT provayderi qoşulmamışdır)` olur (#8430 müqaviləsi). Tanınmayan bir hədəf (`null`) üçün bütün uğursuz nəticə toxunulmaz qalır. İstifadə edilə bilən STT kredensialı olmayan sübut olunmuş yalnız mətn hədəfi eyni açıq stub alır, şəbəkə çağırışı etmədən.

Uğurlu transkriptlər proses üzrə Modality Bridge LRU/TTL cache-dən istifadə edir. Açar audio istinadını, stabil `audio-transcription` əməliyyat etiketini və seçilmiş STT modelini birləşdirir; uğursuzluqlar heç vaxt cache-də saxlanılmır. Audio cəhdləri paylaşılmış `bridged`, `cacheHits`, `failures` və `lastUsedAt` sayğaclarını yeniləyir. Dəyişdirilmiş cavablar `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` daşıyır; toxunulmaz sorğular Audio Bridge seqmenti almır.

İş vaxtı parametrləri DB-ə əsaslanır və Zod ilə təsdiqlənir:

| Açar                          | Default | Aralıq            |
| ----------------------------- | ------- | ----------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                 |
| `modalityBridgeAudioModel`    | `""`    | Auto və ya STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000       |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10              |

Paylaşılan keş `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` və `modalityBridgeCacheMaxEntries` ilə idarə olunur.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Chat Tamamlamalarında `messages` və Cavablar API `input`-unda tanınmayan yerli video dəstəyi olmayan bir hədəf çağırılmadan əvvəl üst səviyyə video hissələrini ələ keçirir.
Dəstəklənən formalara `input_video`, `video_url`, `video_source`, HTTPS URL-ləri,
və `data:video/*;base64,...` məlumat URI-ləri daxildir. Mətn içindəki sadə fayl adları video kimi qəbul edilmir.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) tələb gedişatını,
imkan/politika yoxlamasını, hər tələb üçün toplamağı və cavab yükünü idarə edir.
Hər video işi — əldə etmə, tam nəticə keşini, bir çərçivə ardıcıllığını təsvir etmə (hansı ki, hər hansı bir çağırıcı tərəfindən elan edilmiş audio transkripti birləşdirir) və hər cəhd üçün metriklər/abort/təmizlik — `processVideoPart`-ın arxasında gizlidir
`videoBridgePipeline.ts`-də, `preCall`-ın döngəsində hər video hissəsi üçün bir dəfə çağırılır.
Bu modul həmçinin açıq port sərhədlərini `VideoMediaBrokerPort`
(baytları əldə etmək və nümunə alınmış çərçivələri çıxarmaq), `VideoAudioTranscriptionPort`
(bir çağırıcı tərəfindən elan edilmiş audio transkripti ilə nümunə alınmış başlıqları birləşdirmək) və
`VideoDrilldownPort` (köhnə xammal mağaza forması) müəyyən edir. İstehsal STT və çərçivə saxlanması
təsvir edən port ətrafında `createVideoSttAdapter` və
`createVideoDrilldownAdapter` vasitəsilə tərtib edilir; sonuncusu paylaşılan qeyri-şəffaf-handle həyat dövrünü istifadə edir.

İctimai `/v1` tələb yolu heç vaxt bir alt prosesi idxal etmir və ya çağırmır. Uzaq
videolar 50 MiB sərhədində yüklənir; inline base64 videoların
mühafizəkar 36 MiB dekod edilmiş hər video üçün sərhəd var ki, model/məlumatlar/çərçivə qabı
ictimai JSON tələb qəbul limitinin 50 MiB daxilində qala bilsin. Inline
uzunluq və dekod edilmiş ölçü təxminləri ayrılmadan əvvəl yoxlanılır. HTTPS
ilk uzaq URL-də və hər yönləndirmədə tələb olunur, mövcud
ictimai-yalnız çıxış qoruması ilə DNS pinləmə istifadə olunur. Baytlar daha sonra dəqiq daxili
`POST /api/modality-bridge/video/extract` broker sərhədini keçirlər. Bu marşrut həm
`LOCAL_ONLY` həm də `SPAWN_CAPABLE`-dır, yalnız bir proses üçün autentifikasiya edilmiş,
etibarlı döngə geri tələbini qəbul edir və heç vaxt URL, fayl sistemi yolu, icra edilə bilən,
və ya arqument siyahısını qəbul etmir. API bədən ölçüsü boru xətti və idarəçinin artan bədən
oxuyucusu müstəqil olaraq 50 MiB broker giriş sərhədini tətbiq edir. Onun sərhədli növbəsi
bir vaxtda bir çıxarma işini həyata keçirir, dörd gözləyən işi icazə verir və gözləyən girişi
100 MiB ilə məhdudlaşdırır.

Brokerin içində `ffprobe` özəl yerli bir faylı oxuyur; sabit format
icazə siyahısı çalğı siyahısı və manifest formatlarını istisna edir. İcazə verilən MOV-familiyası
konteynerləri üçün, xarici MOV məlumat istinadları standart olaraq deaktivdir və
sabit əmrlər onlara daxil olmur. Həm `ffprobe` həm də `ffmpeg` yalnız `file`-protokol
icazə siyahısını, bir iplik, sabit arqument massivlərini, heç bir shell,
və `PATH`-dan həll edilmiş icra edilə bilənləri istifadə edir. Bağlı şəkil örtük axınları
oynatıla bilən namizədlər deyil. Bütün oynatıla bilən axınlar sərhədləri ödəməlidir və
müəyyən edilmiş standart axın seçilməlidir, ən aşağı indeksli
rezervə düşmədən əvvəl. Videolar 600 saniyə, 8,192 piksel ölçüsündə və
33,554,432 mənbə pikseli ilə məhdudlaşdırılır. FFmpeg 1–16 orta JPEG çərçivələrini nümunə alır, uzun kənarı
ən çox 1,024 pikselə qədər kiçildir, daha kiçik girişləri böyütmür və
heç vaxt URL almır. Nümunə `uniform` standartdır. İstəyə bağlı
`scene_aware` və eksperimental `segment_aware` siyasətləri artıq təsdiqlənmiş yerli axın üzərində bir əlavə
sabit FFmpeg keçidi həyata keçirir, sərhədli `showinfo` səhnə zaman damgalarını seçir və
detektor uğursuzluğu, zaman aşımı, yanlış formatlı çıxış və ya boş
namizəd dəstində eyni uniform orta nöqtələrə deterministik olaraq geri dönür. Segment-şüurlu rejim
təsdiqlənmiş səhnə intervallarına nisbətən orta nümunələri ayırır; segment-şüurlu sübut və geri dönmə davranışı
aşağıda ətraflı izah edilir. Sərt 16-çərçivə sərhədi
hər siyasətdə seçimdən sonra tətbiq olunur. Bir səhnə-şüurlu tələb yalnız bir
çərçivə büdcəsinə malik olduqda, aktiv tam-video və ya fokus
pəncərəsinin uniform ortasını istifadə edir və `policyEffective: uniform`-u bildirir: seçilmiş bir səhnə çərçivəsi
həm temporal sonları qorumaq mümkün deyil. Bir çağırıcı istəyə bağlı olaraq
məhdud bir fokus pəncərəsi (`start`/`end` saniyələri) təqdim edə bilər; sərhədlər media
müddətinə sıxılır, tərsinə və ya sonsuz pəncərələr rədd edilir və bütün nümunə
siyasətləri yalnız normallaşdırılmış intervallarda həyata keçirilir. Nəticədə
pəncərə nümunə metadata-sına və etibarsız təsvir
prefiksinə daxil edilir ki, aşağıdakı modellər fokuslanmış bir çıxarışı tam
xronologiyadan ayıra bilsin.

Semantik başlıq fokuslanması ayrı, açıq bir parametredir. Standart `full`
analiz rejimi mövcud çərçivə təklifi qoruyur və heç vaxt tələb
mətnini başlıq modelinə göndermir. `focused` rejimində, körpü yalnız
sonuncu boş olmayan istifadəçi tərəfindən yazılmış `text`/`input_text`-i eyni Chat və ya Cavablar
konteynerindən oxuyur, onu NFC-yə normallaşdırır, idarəetmə simvollarını və boşluqları
birləşdirir və 500 Unicode kod nöqtəsi ilə məhdudlaşdırır. Boş bir nəticə dəqiq `full` təklifinə geri dönür. İstifadə edilə bilən bir ipucu JSON formatında
xüsusi etibarsız-istifadəçi-kontekst blokunda seriyalaşdırılır və yalnız müşahidə edilə bilən detalları prioritetləşdirə bilər; o,
media-da görünən və ya eşidilən təlimatları izləmək üçün ayrı xəbərdarlığı üstələyə bilmir. Mətni fokuslanması heç vaxt `start`/`end`-i çıxarmır və ya
temporal nümunə alıcısını dəyişmir.

#### FU-07 struktur seqment sübutu

`segment_aware` artıq təsdiqlənmiş yerli video axını üzərində bir sərhədli əvvəlcədən analiz keçidini istifadə edir. Dəyişməz filtr zənciri əvvəlcə maksimum 320 piksel genişliyə qədər ölçülür, səhnə dəyişikliklərini və donmuş intervalları aşkar edir, sonra bulanıqlıq, orta luma və məkan/zaman məlumatları üçün saniyədə 1 kadr nümunəsi alır. Keçid 600 struktur nümunəsi, bir FFmpeg/filter ipi, eyni `file`-yalnız protokolu və konteyner icazələri, 1 MiB proses-çıxış sərhədi və brokerin paylaşılmış abort/son tarixində maksimum 30 saniyə ilə məhdudlaşır. Heç vaxt bir əmr, filtr, yol və ya URL qəbul etmir.

Struktur dəyərləri deterministik nümunə sübutlarıdır, semantik video anlayışı deyil. Onlar mövzuları, hərəkətləri, başlıqları, nitqi və ya istifadəçi niyyətini çıxarmaz. Səhnə və donma sərhədləri seqmentlər yaradır; donma əhatəsi, bulanıqlıq, ekspozisiya, məkan detalları və zaman dəyişiklikləri yalnız mövcud 1–16 kadr büdcəsinin necə bölündüyünə təsir edir. Tamamilə donmuş bir seqment bir kadrla məhdudlaşır, qeyri-donmuş seqmentlər qalan büdcə üçün mübarizə aparır. Sərhədlər kadrlardan çox olduqda, vahid zaman xətti əhatəsi saxlanılır ki, sürətli erkən kəsiklər uzun bir ardıcıl seqmenti gizlədə bilməsin. Donma sərhədinin 1 saniyəlik analiz həssaslığı içindəki səhnə sərhədləri birləşdirilir.

İtkin filtrlər, yanlış formatlı/boş sübutlar, detektor xətası və ya sərhədli əvvəlcədən analiz vaxt aşımı dəqiq vahid orta siyasətə açılır. Bir çağırıcı abortu və ya broker son tarixi açıq qalmır: bu, uçuşdakı alt prosesi dayandırır, sonrakı kadr çıxarılmasını maneə törədir və xüsusi müvəqqəti ağac `finally`-də silinir.

`scripts/perf/video-bridge-fu07-eval.ts` post-dedup başlıq çağırış qənaətləri, sıx-hərəkət büdcə bölgüsü, bulanıqlıq/ekspozisiya/SI-TI sübutları, uzun bir quyruqla sürətli kəsiklər və tədricən-solma yanlış müsbətləri üçün deterministik real FFmpeg düzəlişləri yaradır. O, əvvəlcədən analiz divar vaxtını qeyd edir və `/usr/bin/time` mövcud olduqda, uşaq CPU və zirvə RSS-i qeyd edir. Onun keyfiyyət yoxlamaları yalnız struktur orakllarıdır. Real başlıq-model keyfiyyəti `HOLD` olaraq qalır, çünki bu harness-in icazə verilmiş son nöqtəsi və ya donmuş hakimi yoxdur. Pul qənaətləri də `HOLD` olaraq qalır, əgər `--caption-cost-per-call-usd` açıq müsbət başlıq başına qiymət təqdim etmirsə; skript heç vaxt bu nəticələrdən birini uydurmur.

Hər kadr 4 MiB ilə məhdudlaşır, bütün xam kadrlarsa 23 MiB-ə qədər, və seriallaşdırılmış broker cavabı 32 MiB-ə qədərdir. Xüsusi müvəqqəti bir qovluq `finally`-də silinir. OmniRoute FFmpeg-i birləşdirmir və xüsusi icra yolu qəbul etmir. Başlıqdan əvvəl, körpü mühafizəkar bir vizual deduplication keçidi tətbiq edir: hər JPEG 16×16 boz tonlu bir tampon halına gətirilir və yalnız son saxlanılan kadrla müqayisə edilir. Bir kadr büdcəsi tələbi bir kadrdan yuxarı olduqda, çıxarış maksimum iki dəfə bu büdcənin sərhədli namizəd hovuzunu təmin edir və heç vaxt 16 kadrdan çox olmur. Tələb olunan sərhəd yalnız deduplicationdan sonra tətbiq edilir, ilk və son seçilmiş namizədlər büdcə ən azı iki olduqda son incələmə zamanı saxlanılır. Versiyalı `grayscale-16x16-mean-cells-v2` siyasəti orta luma delta və normalizə edilmiş delta ən azı 0.05 olan thumbnail hüceyrələrinin nisbətinin daha böyüyünü istifadə edir. Təkrarlama həddi sabit 0.04-dür, proqnozlaşdırıla bilənlik üçün seçilmişdir, runtime parametri kimi açıq deyil. Bu ikincil yüksək-contrast siqnal kiçik hərəkətləri və görünən-mətn dəyişikliklərini saxlayır ki, yalnız orta müqayisə gizlədə bilər. Müqayisəçi və ya deşifrə xətaları açıq qalır və əhatəni saxlayır. Çıxış metadata çıxarılmış namizədləri, uğurla istifadə olunan kadrlara və atılan vizual təkrarlara ayırır.

Açıq şəkildə işarələnmiş video hissəsi zaman damğalı əlaqə vərəqi tələb edə bilər. Körpü maksimum 4 sütunlu, 16 kadr JPEG şəbəkəsi yaradır. Hər 512-piksel hüceyrəsi öz mənbə zaman damğasını yüksək-contrast alt zolağa yandırır, eyni zaman damğaları isə aşağı axın əlaqəsi və audit üçün mətn metadata-da qalır. Tam JPEG 32 MiB ilə məhdudlaşır. Əgər `sharp` şəbəkəni deşifrə edə və ya tərtib edə bilmirsə, körpü fərdi JPEG kadrlara geri dönür; müştəri abortu hələ də vərəq əməliyyatı vasitəsilə yayılır.

Təqdimat sübutları sintetik tərkib mikrobenchmarkından qəsdən ayrıdır. `scripts/perf/video-bridge-contact-sheet-eval.ts` real OpenAI-uyğun görmə modelləri üçün sxema-versiyalı A/B harnessini müəyyən edir. O, təminatçı tərəfindən bildirilən tokenləri, son-dan-son divar gecikməsini (vərəq tərkibi daxil olmaqla), model çağırış sayını və manifestlə müəyyən edilmiş fakt saxlanmasını ölçür. Xam model cavabları hesabatda yazılmır; yalnız SHA-256 xülasələri və uyğun fakt ID-ləri saxlanılır. Harness heç bir şəbəkə və ya ödənişli model çağırışı etmir, əgər `--execute-real` ötürülməzsə və `--model`, `OMNIROUTE_BASE_URL` və `OMNIROUTE_API_KEY` konfiqurasiya edilməzsə. O açıq real icra olmadan, onun maşın oxuna bilən hökmü `HOLD` olaraq qalır; sintetik yük/çağırış sayı ölçmələri tək başına təqdimat sübutu deyil.

Ayrı `scripts/perf/video-bridge-promotion-eval.ts` FU-07 və ya FU-09 müşahidələrini istehlak edir. Təqdimat qəbul etmək üçün bütün səkkiz sintetik ssenari növü və bir sanitizasiya edilmiş real klip, hər rol və hal üçün ən azı üç ölçülmüş təkrarlama, bütün on elan edilmiş metrik, donmuş media/istək/gözlənilən-fakt/ayar xülasələri, unikal müşahidə ID-ləri və təsdiqlənmiş toxum A/B sırası tələb olunur. İcra qəbzi korpus xülasəsini, dəqiq namizəd SHA və model versiyasını bağlayır. İtkin və ya etibarsız ölçmələr `HOLD` olaraq qalır, 30 s-dən yuxarı CPU, 512 MiB-dən yuxarı zirvə RSS və ya 30 s-dən yuxarı əvvəlcədən analiz daxil olmaqla. Bunlar sübut-qəbul sərhədləridir, yeni runtime RSS icra zəmanəti deyil.

FU-07 ən azı 98% keyfiyyət saxlanmasını və p95 gecikməsini 1.2x-dən çox olmamaqla tələb edir, həmçinin ya eyni orta başlıq çağırışlarında 0.05 mütləq hal-balanclı orta xatırlama artımı, ya da ən azı 10% daha az orta post-dedup başlıq çağırışları tələb edir. FU-09 ən azı 0.85 keyfiyyət, 95% saxlanma, 20% p95 gecikmə azaldılması və 10% token azaldılması tələb edir. Tənqidi fakt itkisi, inyeksiya uyğunluğu və ya itirilmiş istifadə irəliləməni maneə törədir. Bir icra heç nəyi irəliləyə bilmir: `--previous-report` eyni siyasət/model versiyası/kandidatı/korpusun iki fərqli, üst-üstə düşməyən, ardıcıl uyğun icrasını təsdiqləyir. Bir nümunə eksperimenti kontakt-səhifə eksperimentini təsdiqləyə bilmir.

Toplayıcılar cavabları yaddaşda qiymətləndirməli və `responseDigest` ilə birlikdə metriklər və müşahidə bağlamalarını saxlamalıdır, heç vaxt cavab mətni. İstehlakçı həmçinin köhnə xam müşahidələri oxuyur, lakin heç vaxt o mətni hesabatlarına kopyalamır. Hər müşahidə üçün dəqiq `responseDigest` və ya `rawResponseText` qəbul edilir. Versiyalı icazə siyahısı dəyişməz `hold` standartı ilə boş qalır. Uyğun bir giriş öz sübut istinadını, siyasəti, model versiyasını, dəqiq namizəd SHA-sını, manifest digestini və iki fərqli icra ID-sini tələb edir; münaqişəli kontekstlər rədd edilir. Bu metadata audit müqaviləsidir, istinad edilən faylın həqiqi ölçmələr ehtiva etdiyinə dair sübut deyil. Hər hansı bir giriş əlavə etməzdən əvvəl faktiki qəbzləri nəzərdən keçirin. İdarəetmə statistikaları son nöqtəsi və Video paneli mühafizəkar hazırlığı açıq şəkildə göstərir. Konfiqurasiya edilmiş model təxmini yalnız onun versiyasını və ya işləyən namizəd SHA-sını müəyyən etmir, buna görə də cari panel `HOLD` bildirir, başqa bir icra kontekstindən uyğunluğu yenidən istifadə etmir. Açıq eksperimental seçim irəliləmədən ayrı qalır; heç bir standart avtomatik olaraq dəyişdirilmir.

Çağıranlar artıq uyğunlaşdırılmış mətni olduqda dəstəklənən video hissəsinə əlavə olaraq `transcript.cues` massivini əlavə edə bilərlər. Hər cue `text`, probed müddət içində sonlu `start`/`end` intervalı və ağ siyahıya alınmış `source` (`client`, `embedded`, və ya `audio-bridge`) daşımalıdır; `confidence` standart olaraq `1`-dir və `0` ilə `1` arasında qalmalıdır. Dəqiq təkrarlanan cues birləşdirilir. OmniRoute bu metadata-dan transkripsiyaya başlamır: təsdiqlənmiş cues təsvir edilən nəticəyə mənbə, etibar və interval ilə kopyalanır və çərçivə başlıqları ilə yanaşı etibarsız müşahidələr kimi təqdim edilir. Yanlış, aralıqdan kənar və ya mənşəyi olmayan mətn rədd edilir, başlıq axınına qarışdırılmır. Hər iki tələb-bədən transkript kanalları təqdim olunan mənşəyi `client`-ə normalizə edir, öz-özünə təsdiqlənmiş `embedded` və ya `audio-bridge` etiketlərini də daxil edir. Yalnız serverə aid adapter bu etibarlı etiketləri kod-yalnız `trustedSource` arqumenti vasitəsilə təyin edə bilər; bir tələb JSON sahəsi o arqumentə çata bilməz. Transkript mətni etibarsız media-əsaslı məzmun olaraq qalır, onun mənşəyindən asılı olmayaraq, və heç vaxt səlahiyyət təyin etməməlidir.

İrəliləmiş bir çağıran eyni video üçün `audioTranscript` track təqdim edə bilər; bu, server transkripsiyasının sübutu deyil, müştəri tərəfindən təqdim olunan mətn kimi qəbul edilir. Birləşmə dikişi vizual və audio müşahidələri bir son tarix və abort siqnalı altında işləyir, onları ümumi bir zaman çizelgesində sıralayır, dəqiq təkrarlananları birləşdirir və yalnız bir tərəf müvəffəq olduqda qismən nəticə bildirir. Yanlış `audioTranscript` o qismən nəticəyə düşür — vizual təsvir saxlanılır və audio bölməsi sanitizasiya edilmiş uğursuzluq kodunu qeyd edir — bütün videonu uğursuz etmədən. Hər bir bölmə üçün mövcudluq, qismən bayrağı və sanitizasiya edilmiş uğursuzluq kodları təsvir edilən nəticədə, qoruyucu metadata-da (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), nəticə-cache metadata-da və körpü birləşmə sayğaclarında saxlanılır. Standart Video Bridge yolu danışıqdan mətbəxə keçid etməyi və ya ikinci media nüsxəsini yükləməyi çağırmır; o açıq track olmadan video-yalnız qalır.

**Transkript saxlanması (#12150 P1).** Bu, Video Bridge (öz-özünə iştirak) transkript cue təqdim etdikdə avtomatik olaraq tətbiq olunur — ayrıca saxlanma bayrağı yoxdur. Bir tələb hər hansı bir transkript cue (çağıran tərəfindən elan edilmiş `transcript` və ya birləşdirilmiş `audioTranscript`) təqdim etdikdə, qoruyucu onu `videoBridgeObserved` olaraq işarələyir və video təsvirinin redaktə edilmiş kölgəsini istehsal edir — hər cue-nin sərbəst mətn bədəni `[redacted-video-transcript]` ilə əvəz olunur, bu da strukturlaşdırılmış cue sahəsini dəyişdirərək string yığılmadan əvvəl yaradılır (heç vaxt düz mətni analiz etməklə, beləliklə heç bir cue məzmunu — düşmənçilik və ya adi, `]` ehtiva edən bədənlər də daxil olmaqla, məsələn, `[inaudible]`/`[music]` — sağ qala bilmir). Saxlanılan çağırış-log tələb bədənində hər video-əsaslı mətn hissəsi üçün o redaktə edilmiş kölgə ilə dəyişdirilir, məzmun bərabərliyi ilə uyğunlaşdırılır; `fullText` ankeri tamamlanmış əvvəlki çağırış qoruyucu yükündən yenidən oxunur, beləliklə uyğunluq sonrakı zəncir qoruyucuları (PII və etimad maskaları, prioritetlər 10/95) təsvir mətni yerində yenidən yazdıqdan sonra hələ də müvəffəq olur və sistem-prompt/ötürmə/yaddaş inyeksiya mesaj massivini yenidən formalaşdırır. Modelə göndərilən bədən dəyişməz qalır. Bir müşahidə olunan tələb də davamlı Yaddaşı doldurmur (həm tələb, həm də cavabdan əldə edilən çıxarışlar atlanır), beləliklə modelin öz cavabı transkript mətni Yaddaşda əks etdirə bilmir.

**Xam video sahələri (#12430).** Körpü aktivləşdirildikdə və yerli video dəstəyi məlum deyil və ya yoxdur, müəyyən edilmiş `transcript`/`audioTranscript` sahələri də `videoBridgeObserved`-i aktivləşdirir, təsvir uğursuzluğu və ya `maxVideos` limitindən sonra belə. `null` və boş sətirlər sayılır; mövcud olmayan sahələr və qeyri-video metadata sayılmır. Saxlanılan nüsxələr bu sahələri redaktə edir və ya tələbi atlayır, və cache/Yaddaş bypass edilir. Təchizatçı yükü dəyişməz qalır.

Əlavə saxlanılan nüsxələr eyni müşahidə olunan tələb siqnalından istifadə edir. Xam
pre-guardrail müştəri-tələb snapshot-u, yaddaşda gözləyən tələb və erkən
rədd edilmiş tələb logu video hissələrində transkript sahələrini strukturca əvəz edir;
pipeline mərhələləri və kontekst ötürməsi tərəfindən sintez edilmiş string təklifləri
saxlanılan tələb-bədən çuxurunda redaktə olunur. Saxlanılan `video_content_removed` işarəsi
`previous_response_id` davamını bağlayır, əvəzinə qəsdən atılmış mətni bərpa etmir. Əgər
müşahidə olunan tələb loglamaqdan əvvəl hissə-hissə redaktə kölgəsini itirirsə, ya da
bir neçə video kölgəsindən biri sonrakı tələb dəyişikliklərindən sonra uyğun gəlmirsə,
saxlanılan tələb bədəni tamamilə atılır, hissə-hissə redaktə edilmiş transkript saxlanılmır.

Müşahidə olunan tələb üçün model cavabı transkriptin istənilən hissəsini
strukturlaşdırılmış siqnal sərhədi olmadan sitat gətirə bilər. Onun saxlanılan çağrı-logu
`responseBody` buna görə də bir atma işarəsi ilə əvəz olunur; ətraflı
pipeline artefaktı (yuxarı axın/müştəri bədənləri və axın parçalarını daxil edə bilər)
saxlanılmır. Semantik, idempotentlik və düşüncə-yenidən oynatma önbellekleri
o tələb üçün oxuma və yazma əməliyyatlarını atlayır. Təchizatçı tələbi və müştəriyə
görünən cavab dəyişməz qalır. Ətraflı artefakt atıldıqda, erkən keepalive baytları
müvəqqəti tampondan boşaldılır. Kiro-nun yanlış formatlı EventStream xəbərdarlığı
yalnız yük bayt sayını bildirir, heç vaxt onun məzmununu və ya JSON
parser-inin xam səhvini göstərmir.
Bu, hər hansı əlaqəsiz təchizatçı/plugin diaqnostikasının yoxlanıldığını iddia etmir;
daha geniş saxlanılan çuxur süzgəci #11658-də izlənilir.

Daxili `/api/modality-bridge/video/drilldown` həyat dövrü ayrı, loopback/token-authenticated
cache substratıdır. Hər əməliyyat eyni zamanda bir kanonik opak əsas ID tələb edir. İstehsal
çağıranı aktivləşdirilməzdən əvvəl, bu ID-ni təsdiqlənmiş kirayəçidən çıxarmalıdır
və müştəri tərəfindən seçilmiş dəyəri heç vaxt ötürməməlidir. Cache açarları bu
əsas ID-ni kanonik sessiya və video-referans ID-lərinə bağlayır, yalnız onların
SHA-256-dan alınmış açarlarını saxlayır və həm oxuma, həm də silmə əməliyyatlarını
eyni əsas ID-yə məhdudlaşdırır. Cache hər giriş üçün ən çox 16 alınmış JPEG
çərçivəsini saxlayır, onları on dəqiqədən sonra müddəti bitirir və məhdud
`start`/`end` oxumalarını və ya açıq sessiya silməsini dəstəkləyir.

Hər əsas ID 16 giriş və 64 MiB kanonik JPEG məlumatı ilə məhdudlaşır. Bu
məhdudiyyətlər qlobal 64-giriş/256 MiB tavanından müstəqildir: əsas kvota
təzyiqi yalnız həmin əsas ID-nin ən az istifadə olunan girişlərini atır, qlobal
LRU atılması nəzərə alınmadan. Müddəti bitmiş girişlər həm əsas, həm də
qlobal hesabdan cache fəaliyyəti zamanı silinir, ləğv və təsdiq uğursuzluğu
hissəvi əvəzləməni həyata keçirmir.

Cache qeyri-kanonik Base64, artıq doldurma, qeyri-JPEG media, yanlış formatlı və ya
kəsilmiş JPEG-ləri, həmçinin məhdud tam şəkil `sharp` dekodlaşdırma zamanı xəbərdarlıq
verən JPEG-ləri rədd edir. Hər qəbul edilmiş şəkli kanonik JPEG olaraq yenidən kodlayır,
deyil, çağıran sahələrə etibar etmədən, dekodlaşdırılmış baytlardan enini və hündürlüyünü
çıxarır və hər hansı ardıcıl polyglot baytlarını saxlamadan atır. Yalnız məhdud kanonik
sıxılmış tampon hər iki kvotaya yüklənir. JSON tel limiti 32 MiB dekodlaşdırılmış-giriş
tavanı üçün Base64 əlavə yükünü əhatə edir. Hər
saxlanılan derivasiya öz təsdiqlənmiş JPEG formatını/həcm ölçüsünü, nümunə siyasətini,
derivasiya versiyasını, yaradılma vaxtını, server tərəfindən hesablanmış məzmun hashını
və hash edilmiş valideyn referansını, eləcə də etibarlı çağıranın valideyn-məzmun
hashını qeyd edir. Ləğv, atomik cache öhdəliyindən əvvəl asinxron dekodlaşdırma/hash
faza arasında yoxlanılır.

İstehsal istehsalçısı artıq alınmış broker çərçivələrini yalnız uğurlu
vizual analizdən sonra yenidən istifadə edir, ikinci video yükləməsi/çıxarılması olmadan.
Bu, operator `modalityBridgeVideoDrilldownEnabled=true`, sərt hissə-hissə
`drilldown: true` və təsdiqlənmiş API-şifrə qeyd ID-sini tələb edir. Müştəri tərəfindən
bəyannamə edilmiş əsas/sessiya dəyərləri heç vaxt mülkiyyət yaratmır. Bütün üç şərt olmadan
o, hash etmir, ölçüsünü dəyişmir və əlavə çərçivələri saxlamır. Saxlama uğursuzluğu
istifadə edilə bilən vizual cavabı qoruyur. Razılaşdırılmış tələblər bütün-video nəticə
cache-ni atlayır, beləliklə saxlanılan nəticələr heç vaxt replay idarə etmir.

Uğurlu JSON və SSE cavabları məhdud `x-omniroute-video-drilldown` başlığında
ən çox dörd opak idarə təqdim edir. İcazə verilmiş brauzer mənşələri bu başlığı
CORS mənşə siyasətini genişləndirmədən oxuya bilər. Yeni idarələr `v1.<32-byte random base64url
token>` istifadə edir və qeyd yalnız onların SHA-256 hashlarını saxlayır. Oxuyucu/başlıq
parser-i köhnə 64-hex tokenlərini də qəbul edir. Təsdiqlənmiş ictimai istehlakçı
`GET /api/v1/video-bridge/drilldown?handle=...`, müstəqil olaraq `modalityBridgeVideoDrilldownRemoteEnabled=true`
ilə qapalıdır. Açıq saxlanılan yanlış, hətta köhnə `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED`
env geri dönüşü aktiv olsa belə, giriş hüququnu ləğv edir. İstehsal saxlanması
analoji köhnə `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` geri dönüşünə malikdir. Hər iki
geri dönüş deaktivdir.

İstehlakçı təsdiqlənmiş açardan mülkiyyət çıxarır, açar siyasətini tətbiq edir və
naməlum, müddəti bitmiş və başqa açarların idarələri üçün eyni 404 qaytarır. O, `variant=preview|standard|detail`
(maksimum JPEG ölçüsü 320/640/1280, heç vaxt artırılmır), `limit=1..8` (ya da köhnə
`frames` təyin edilməsi, heç vaxt ikisi də), sıfırdan başlayaraq `page` və
isteğe bağlı `start`/`end` fokus saniyələrini qəbul edir. Təkrarlanan
sorğu açarları və tərsinə fokus pəncərələri rədd edilir. Hər qaytarılan variantın
öz faktiki məzmununun və faktiki həcm metadata-nın hashı var, saxlanılan mənbəyə
bağlıdır. Variantlar oxuma zamanı alınır, əlavə saxlanılan nüsxələr kimi saxlanılmır.
JSON cavabı, Base64/qablaşdırma daxil olmaqla, 32 MiB ilə məhdudlaşdırılır; ölçüsü
böyük bir səhifə 413 qaytarır və müştəri daha az çərçivə tələb etməlidir. Oxumalar
hər ölçü dəyişdirmə ətrafında ləğvi yoxlayır və qaytarılmadan əvvəl idarə etibarlılığını
yenidən yoxlayır. Sahibi tərəfindən `DELETE` idempotentdir; silmə və ya TTL müddətinin
bitməsi saxlanılan mənbəni və istifadə hesabını azad edir.

Paylaşılan mağaza proses-lokaldır: tutacaqlar yenidən başladıqda müddəti bitir və müstəqil OmniRoute prosesləri arasında köçürülə bilmir. İdarəetmə statistikaları effektiv saxlanma/uzadılmış siyasəti və yalnız saxlanılan girişlər/baytları göstərir, heç vaxt media, istinadlar, əsas ID-lər və ya tutacaqlar. Video parametrləri paneli bu dəyərləri göstərir və hər iki razılıq dəyişənini davam etdirə bilər. Bu tətbiqetmə sənədi canlı yerləşdirmə və ya təşviq sübutu deyil; real-model qəbulunu ayrıca izlənilir.

Kadrlar konfiqurasiya edilmiş Video modeli ilə ardıcıl olaraq başlıqlanır. Boş Video üstü Görmə parametrlərini miras alır; əgər hər ikisi boşdursa, Görmə avtomatik yönləndiricisi effektiv görmə qabiliyyətinə malik modeli seçir. Uğurlu başlıqlar orijinal hissəni sabit `[Video description:` prefiksi ilə əvəz edir ki, bu da mətni etibarsız media-əsaslı müşahidə kimi işarələyir və aşağıdakı modellərə mediada tapılan təlimatları izləməməyi bildirir. Kadr-başlıq keş cache açarları JPEG baytlarını, təklifi, zaman damgasını və effektiv modeli əhatə edir; yalnız uğurlu başlıqlar keşlənir. Keş girişləri faktiki uğurlu istehsalçı modelini saxlayır, ehtiyat modelini də daxil edir; körpü `mixed` bildirir, əgər fərqli kadrlar fərqli modellər tərəfindən istehsal olunubsa. Keş hitləri həmin istehsalçı kimliyini yenidən etiketləmək əvəzinə istifadə edir. Bütün-video nəticə keşləri çıxışı dəyişən hər bir girişə əsaslanır — təklif, effektiv model, nümunə siyasəti, kadr sayı, semantik analiz rejimi, normallaşdırılmış fokus ipucu, fokus pəncərəsi, `transcript`, `audioTranscript` və əlaqə səhifəsi bayrağı — buna görə də bu ölçülərdən hər hansı birinin dəyişməsi keş itir, heç vaxt köhnə istifadə. Vizual dedup siyasəti versiyası, həddi və məhdud namizəd-kadr sayı nəticə-keş açarı və metadata-da da açıqdır; buna görə də siyasət dəyişikliyi köhnə bütün-video təsvirini yenidən istifadə edə bilmir. Nəticə-keş v4 metadata rejimi və barmaq izi saxlayır, heç vaxt xam istifadəçi tapşırığını. Qoruyucu metadata həm tələb olunan, həm də effektiv analiz rejimlərini bildirir; istifadə edilə bilən istifadəçi mətni olmayan tələb olunan `focused` rejimi effektiv olaraq `full` olaraq bildirilir.

Qoruyucu hər dəstəklənən video hissəsini çıxarır, lakin `modalityBridgeVideoMaxVideos`-dan artıq təsvir etmir. `supportsVideo === false` olduğu sübut edilmiş bir hədəf üçün, uğursuz və həddən artıq videolar açıq təhlükəsiz mətn işarələrinə çevrilir ki, heç bir xam video sağ qalmasın. İmkan bilinmədikdə, bu hissələr toxunulmaz qalır. `supportsVideo === true` olan hədəflər körpünü keçirlər. Müştəri sorğusu abort siqnalı yükləmə, broker növbəsi, alt proseslər və başlıq çağırışları vasitəsilə yayılır; abortlar videolar arasında dayanır və heç vaxt xam mediaya açıq qalmır.

İcra parametrləri DB-ə əsaslanır və Zod tərəfindən təsdiqlənir:

| Açar                                | Default     | Aralıq / davranış                                                                                         |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | İstəyə bağlı icra, iştirak etmə                                                                           |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` ümumi başlıqları saxlayır; `focused` məhdud, etibarsız son istifadəçi kontekstini istifadə edir    |
| `modalityBridgeVideoModel`          | `""`        | Görmə Körpüsü modelini miras alır                                                                         |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                      |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, və ya proporsional `segment_aware`; detektor uğursuzluğu `uniform`-a geri dönür |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                       |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                            |

120 saniyədən yuxarı köhnə saxlanılan Video vaxtı broker son tarixinə sıxılır; bu limitdən yuxarı yeni parametrlər yazıları rədd edilir. `GET /api/modality-bridge/video/runtime` etibarlı möhürlənmiş döngə yerini tələb edir, sonra idarəetmə təsdiqi tələb edir. Bu yalnız `available`, sanitizasiya edilmiş FFmpeg/ffprobe versiyalarını və icra mövcud olmadıqda sabit səbəb qaytarır. Daxili çıxarma uç nöqtəsi ictimai yükləmə API-si deyil: növbə doyması `503` və `Retry-After` qaytarır, çağıran əlaqənin kəsilməsi `499` qaytarır, və sabit broker son tarixi `504` qaytarır. Dönüşdürülmüş cavablar mərkəzi `x-omniroute-modality-bridge` başlığına `video->text;model=<visionModel>;parts=<videos>` əlavə edir, Görmə və Audio seqmentlərini çıxarmadan.

### PII Masker (`piiMasker.ts`)

**Hər iki** mərhələdə işləyir.

- **`preCall`** yükü klonlayır, `system`, `messages`, `input` və `prompt` (sadə string elementləri daxil olmaqla) üzərində gəzərək `processPII()` ( `@/shared/utils/inputSanitizer`-dan) string `content`/`text` sahələrinə tətbiq edir. `PII_REDACTION_ENABLED=true` olduqda, aşkar edilmiş PII çıxarılır. Bu, yalnız `INPUT_SANITIZER_MODE`-dan (yalnız təklif-injeksiyası siyasətini idarə edir) asılı deyil. Çıxarma söndürüldükdə, çağırış aşkar etmə saylarını qeyd edir, məzmunu yenidən yazmadan.
- **`postCall`** cavabı dərin klonlayır, `sanitizePIIResponse()`-ni və Cavablar-API-şəkil maskerini (`maskResponsesOutput` — `output_text` və `output[].content[].text`-i əhatə edir) işlədir. Hər hansı bir çıxarma baş verərsə, dəyişdirilmiş cavab orijinalı əvəz edir.

Qoruyucu heç vaxt bloklamır; yalnız annotasiya edir (`meta.detections`, `meta.redacted`) və ya yenidən yazır.

### Prompt Injection (`promptInjection.ts`)

İstifadəçi tərəfindən təqdim olunan məzmundakı qarşı tərəf strukturlarını aşkar edir və konfiqurasiya edilmiş siyasəti tətbiq edir. Davranış mühit dəyişənləri və konstruktor seçimləri ilə idarə olunur:

| Ayar           | Mühit dəyişəni                                                                                          | Default | Təsir                                                                                                                                                                                            |
| -------------- | ------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Aktiv          | `INPUT_SANITIZER_ENABLED`                                                                               | `true`  | `false` olduqda, qoruma qısa dövr edir.                                                                                                                                                          |
| Rejim          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                         | `warn`  | İstifadə siyasəti: `block`, `warn`, və ya `log`. (`redact` geri uyğunluq üçün qəbul edilir, lakin **injection** mətnini silmir; PII yenidən yazılması `PII_REDACTION_ENABLED` ilə idarə olunur.) |
| Bloklama həddi | `blockThreshold` seçimi / `INPUT_SANITIZER_BLOCK_THRESHOLD` (təxmini `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Bloklamaq üçün tələb olunan minimum şiddət. Orta, standartda yalnız müşahidə olunur.                                                                                                             |

**Rejim üstünlüyü** (`getMode`): çağıran `options.mode` →
`INJECTION_GUARD_MODE` **DB xüsusiyyət-flag üstü** (Dashboard → Ayarlar →
Xüsusiyyət Flagları) → `INJECTION_GUARD_MODE` mühit → `INPUT_SANITIZER_MODE` mühit →
`warn`. Dashboard üstü buna görə mühit dəyişənlərindən üstündür, beləliklə Xüsusiyyət
Flagları UI canlı qoruma idarə edir (yenidən başlatma olmadan). DB oxumaq təhlükəsizdir:
əgər xətaya düşərsə, qoruma mühitə əsaslanan davranışa geri dönür və heç bir
üstü təyin edilmədikdə davranış mühitə əsaslanan həll ilə eynidir.

Aşkar etmə mənbələri:

1. `sanitizeRequest()` `@/shared/utils/inputSanitizer`-dan (pipeline-da başqa yerlərdə istifadə olunan paylaşılmış aşkar edici
   dəsti).
2. Daxili `DEFAULT_GUARD_PATTERNS` (hazırda `system_override_inline` və
   `markdown_system_block`, hər ikisi `high` şiddətində).
3. Konstruktor seçimləri vasitəsilə ötürülən optional `customPatterns` (string, regex,
   və ya `{ name, pattern, severity }` qeydləri).

`mode === "block"` **və** ən azı bir aşkar etmə şiddət həddini qarşılayanda, `preCall` `{ block: true, message: "Sorğu rədd edildi: şübhəli məzmun aşkar edildi" }` qaytarır. `warn`/`log` rejimlərində qoruma qeyd edir, lakin çağırışı icazə verir. Paylaşılmış köməkçi `evaluatePromptInjection()` də qeyd olunur
qeydiyyatdan keçmədən promptları qiymətləndirmək üçün çağıranlar üçün.

**Skana məhdud (v3.8.20):** aşkar edici yalnız **ilk 16 KB** birləşdirilmiş prompt mətnini yoxlayır — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bayt) `src/shared/utils/inputSanitizer.ts`-də. Həm `detectInjection()` həm də
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` istifadə edərək
nümunə dövrünü icra etmədən əvvəl. Aşkar etmə direktivləri girişin yuxarı hissəsində yerləşir, buna görə bu, regex CPU/GC-ni çox yüz KB-lıq yüklerde məhdudlaşdırır, aşkar etməni zəiflətmir (cf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

**Hər iki** mərhələdə işləyir, standart zəncirdə sonuncu (prioritet `95`).
Tanınmış API açarı / gizli token nümunələrini çıxış yükündən (mesaj
məzmunu, alət çağırışları, alət nəticələri) **və** təminatçı cavabından silir, beləliklə bir
prompt-a yapışdırılan bir credential (və ya bir alət nəticəsi ilə geri əks olunan) yuxarıdakı təminatçıya və ya müştəriyə sızmır.

- **Yalnız opt-in**, PII redaksiyası ilə eyni konvensiya (Sərt Qayda #20-ə yaxın):
  `settings.credentialRedactionEnabled === true` **və ya**
  `CREDENTIAL_REDACTION_ENABLED=true` olmadıqda deaktivdir. Bununla bağlı, qoruma heç bir əməliyyat etmir —
  heç vaxt bloklamır və heç vaxt yenidən yazmır.
- `redactCredentials()` tam yük/cavab ağacını gəzərək (`walkValue()`,
  prototip çirklənməsinə qarşı təhlükəsiz, `WeakSet` vasitəsilə dövr təhlükəsiz) və uyğunluqları
  `[REDACTED:<type>]` yer tutucu ilə əvəz edir, yalnız faktiki dəyişən budaqları
  klonlayır.
- `CREDENTIAL_PATTERNS` LLM təminatçı açarlarını (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokenlərini (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ödəniş açarlarını (Stripe, Square), bulud
  açarlarını (AWS giriş açarı, Twilio, SendGrid, Mailgun), özəl açarları / JWT-ləri,
  credential daşıyan bağlantı sətirlərini (`mongodb://user:pass@...`, və s.), və
  ümumi `Authorization`/`x-api-key`/`api-key`/`apikey` başlıq-dəyər
  nümunəsini əhatə edir. Başlıq şəklində açarlar (`authorization`, `x-api-key`, `api-key`,
  `apikey`) strukturca silinir (yalnız dəyər, `Bearer `/`Basic ` kimi sxem prefiksi qorunur)
  ümumi mətn regex vasitəsilə deyil.
- Qoruma heç vaxt bloklamır; yalnız yenidən yazır (`modifiedPayload` /
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
