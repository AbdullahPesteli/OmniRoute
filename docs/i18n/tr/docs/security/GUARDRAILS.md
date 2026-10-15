# Guardrails (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Doğruluk kaynağı:** `src/lib/guardrails/`
> **Son güncelleme:** 2026-08-29 — v3.8.51 (Video Köprüsü transkript kaynağı arayan tarafından beyan edilir,
> henüz sunucu tarafından doğrulanmadı — #11661 uyarınca açıklığa kavuşturuldu)

Guardrail'ler, OmniRoute ile yukarı akış sağlayıcıları arasındaki sınırda güvenliği, politikayı ve içerik dönüşümlerini zorunlu kılar. Her guardrail, istek yüklerini (`preCall`) ve yukarı akış yanıtlarını (`postCall`) inceleyebilir (ve isteğe bağlı olarak reddedebilir, dönüştürebilir veya açıklama ekleyebilir).

Sistem **açıkta başarısız olur**: bir guardrail yürütülürken bir hata fırlatırsa, kayıt defteri hatayı kaydeder ve isteği başarısız kılmak yerine bir sonraki guardrail ile devam eder. Engelleme açık bir karardır (`block: true`), asla bir kaza değildir.

## Yerleşik Koruma Rayları

Kayıt, içe aktarma sırasında öncelik sırasına göre altı koruma rayını otomatik olarak yükler
(bkz. `registry.ts` → `registerDefaultGuardrails()`):

| Öncelik | İsim                | Aşama(lar)     | Dosya                 |
| ------- | ------------------- | -------------- | --------------------- |
| `5`     | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`     | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`     | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`    | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`    | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`    | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Daha düşük öncelik numaraları **önce** çalışır.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Görsel içeren istekleri **görsel olmayan modeller** için yakalar ve ya
tüm isteği görsel yetenekli bir modele yönlendirir ya da yukarı akış çağrısından önce
görsel model tarafından üretilen metin açıklamaları ile resim
kısımlarını değiştirir. Bu, yalnızca metin sağlayıcıların
çok modlu yükleri şeffaf bir şekilde işlemesine olanak tanır.

Akış:

1. Hedef model zaten görsel desteği varsa atla (zorunlu köprü listesinde
   `isVisionBridgeForcedModel` görünmüyorsa).
2. `extractImageParts(messages)` aracılığıyla resim kısımlarını çıkar
   (`visionBridgeHelpers.ts`), bu da **birleşik medya
   dedektörü** `detectMediaParts()`'a yönlendirir `open-sse/utils/mediaParts.ts` — bu, kombinasyon uyumluluk filtresi ile paylaşılan tek gerçek kaynak.
   Çıkarma, `replaceImageParts`'ın geri ekleyebileceği şekillerin üst düzey
   kısımlarına izin verilmiştir (çıkar↔değiştir sözleşmesi): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` ve Yanıtlar API `input_image`. İç içe vuruşlar ve
   yalnızca gösterge şekilleri kombinasyon filtre malzemesidir ve asla çıkarılmaz.
   Hiçbiri bulunamazsa atla.
3. Çalışma zamanında yapılandırmayı `resolveVisionBridgeRuntimeSettings()`
   aracılığıyla çöz (`src/shared/constants/modalityBridgeDefaults.ts`): yeni `modalityBridge*`
   ayar anahtarları kazanır; eski `visionBridge*` anahtarları **bir döngü geri dönüşü**
   (geri alma penceresi) olarak kalır. Köprü devre dışı bırakıldığında herhangi bir medya geçişinden önce atla.
4. Mod seçici (`modalityBridgeVisionMode`, aşağıdaki tabloya bakın) yönlendirme
   ile tanımlama arasında karar verir. Yönlendirme, yalnızca `model` değiştirildiği
   `modifiedPayload` döner, ayrıca meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Tanımlama yolu: resimleri `maxImages` ile sınırla, görev farkındalığına sahip istemi oluştur,
   tanımlama önbelleğini kontrol et, görsel modeli **paralel olarak** çağır
   (`Promise.allSettled`), ve yerlerine `[Image N]: <description>` metin kısımlarını enjekte et. Başarısız bir tanımlama `null` döner ve orijinal resim kısmı
   **korunur** (#4012) — her tanımlamanın başarısız olduğu kombinasyon tanımlama yolunda, onaylı bir görsel olmayan yukarı akış
   `(unavailable — no vision-capable provider connected)` stub alır (#8430).
6. `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) döner.

#### Mod seçici (`modalityBridgeVisionMode`)

| Mod        | Varsayılan | Davranış                                                                                                                                                                                                                                                                 |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔          | Eski sezgi, dokunulmamış (#6640/#7204): kombinasyon olmayan/`auto/` modeller, orijinal modelin kullanılabilir kimlik bilgileri varsa (o zaman tanımla); kombinasyon hedefleri her zaman tanımlar.                                                                        |
| `describe` |            | Her zaman tanımla — yönlendirme bloğu tamamen atlanır; kullanıcının seçtiği model her zaman yanıt verir.                                                                                                                                                                 |
| `reroute`  |            | Zorunlu yönlendirme: kimlik bilgilerini koruma koruması atlanır. Yönlendirme-**hedef** kimlik bilgisi koruması hala geçerlidir — kullanılabilir bir görsel hedef yoksa, istek tanımlama yoluna düşer, böylece ham resimler asla yalnızca metin arka uca ulaşmaz (#8430). |

Zorunlu modlar **otomatik sezgi çalışmadan önce** kısa devre yapar; `auto` davranışı
pre-PR-1 koruma rayına byte olarak özdeşdir.

#### API anahtarı kapsamı (`visionBridgeKeyScope.ts`)

Arayanın API anahtarı `allowedConnections`, kota havuzları
(`allowedQuotas`) veya modelleri (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) kısıtladığında, köprü yalnızca
anahtarın kullanabileceği yönlendirme ve tanımlama modellerini seçer, anahtarın
kullanabileceği bağlantılarda. Tanımlama çağrısı, `x-omniroute-self-loop-key-id` başlığı ile her zaman OmniRoute kendi döngüsünden geçer, böylece alınan sohbet isteği
o anahtarın bağlantı ve model politikasını tekrar uygular. `enforceApiKeyPolicy()`
o başlığı yalnızca kendi döngü taşıyıcısı ile birlikte dikkate alır, bu nedenle yalnızca
erişimi daraltabilir ve çözülmeyen bir kimlik reddedilir.

Anahtar için hiçbir görsel model izin verilmezse, tanımlama yolu kenara çekilir ve
istek değişmeden geçer, devre dışı bırakılmış bir koruma rayı gibi aynı fail-open davranışı (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Anahtarsız istekler ve bu kısıtlamalara sahip olmayan anahtarlar, daha önce olduğu gibi tam olarak davranır.

#### Görev-farkındalığına sahip tanımlama istemi (`modalityBridgeVisionTaskAware`)

Varsayılan **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) son
kullanıcı mesajının metnini (500 karaktere kısaltılmış) temel
tanım istemine ekler, tanımı kullanıcının gerçekten sorduğu yöne
yönlendirir (codex-vision-proxy deseni) ve görsel modelden görünen
metni transkribe etmesini ister. Bayrak kapalı olduğunda — veya
kullanıcı metni yoksa — temel istem değişmeden kullanılır.

Tanımın kendi OpenAI uyumlu isteği (`callVisionModelSingle()`
`visionBridgeHelpers.ts` içinde) her zaman `image_url.detail: "high"`
isteğinde bulunur — koşulsuz olarak, her çağırıcı/sağlayıcı için, herhangi bir
istemci sinyaline bağlı olmaksızın. Düşük detaylı örnekleme, bu istemin
talep ettiği metin transkripsiyon görevi için OCR doğruluğunu düşürür,
bu nedenle tanım çağrısı her zaman yüksek detay talep eder, orijinal
gelen isteğin hangi detay seviyesini kullandığından bağımsız olarak. Bu
sadece dahili tanım isteği gövdesini etkiler; OmniRoute'un çağırıcının
kendi `image_url.detail` değerini birincil istekte nasıl ilettiğini
değiştirmez — bu varsayılan ayrı olarak uygulanır ve yalnızca tespit edilen
OpenCode istemcileri için, `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) içinde. Tanımın kendi döngüsünün
Anthropic wire-format dalında `detail` alanı yoktur ve her iki varsayılandan
da etkilenmez.

#### Tanım çıktı sınırı (`modalityBridgeVisionMaxChars`)

| Anahtar                        | Varsayılan | Aralık             |
| ------------------------------ | ---------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`        | `0` veya 100–50000 |

`0` (varsayılan) **sınırlama yok** anlamına gelir — `callVisionModel()`
tarafından döndürülen tanım değiştirilmeden geçer, mevcut davranışı
korur. 100–50000 aralığındaki herhangi bir değer, tanımı `…` eki ile
kısaltır ve `[Image N]: <description>` olarak birleştirilmeden önce
(`VisionBridgeGuardrail.preCall()` `src/lib/guardrails/visionBridge.ts`
içinde). Bu, aşağı akış modelinin tam transkripti gerektiği detay ağırlıklı
OCR görevleri için artırılmalıdır; sohbetli görsel modellerde token kullanımını
sınırlamak için düşürülmelidir. Gösterge paneli alanı, Vision sekmesinin
Gelişmiş panelinde bulunur (`modality-bridge-max-chars` `ModalityBridgeVisionTab.tsx` içinde) ve 1 ile 99 arasındaki herhangi bir değeri 100 tabanına
kadar sınırlar, açık bir `0` değerini değiştirmeden bırakır — `0` kendi
başına geçerli bir Zod değeridir
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), yalnızca
"ayarlanmamış" varsayılan değildir.

#### Tanım önbelleği (`modalityBridge/bridgeCache.ts`)

Tanım çıktıları için bellek içi LRU + TTL önbelleği, süreç genelinde paylaşılır.
Anahtar = `sha256(imageRef + composedPrompt + configuredBridgeModel)` uzunluk
ön ek çerçevesi ile (alan sınırı çakışmaları yok). Model bileşeni, **yapılandırılmış**
köprü modelidir, gerçekten yanıt veren model değil — `callVisionModel`
içsel olarak geri düşebilir ve her deneme için anahtarlama önbelleği parçalara
ayırır. Başarısız tanımlar asla önbelleğe alınmaz. Ayarlar:

| Anahtar                         | Varsayılan | Aralık  |
| ------------------------------- | ---------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`     | —       |
| `modalityBridgeCacheTtlMinutes` | `60`       | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`      | 10–5000 |

#### Uzak görüntü normalizasyonu (kendi döngüsü tanım/base64 alma)

Köprü bir **uzak** görüntüyü kendisi alırken — Anthropic tanım
kendi çağrısı ve claude-wire-format base64 dönüşümü
(`ensureBase64ImagesForClaudeWire`), her ikisi de
`fetchRemoteImageAsDataUri()` `visionBridgeHelpers.ts` içinde — elde edilen
veri URI'si `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) üzerinden geçer ve görsel model
isteğine gömülmeden önce. Aşırı büyük görüntüler, **2048px uzun kenar**
boyutuna küçültülür (OpenAI/Anthropic'ın zaten sunucu tarafında uyguladığı
yeniden boyutlandırma sınırına uygun), bu da yükleme baytlarını/latansiyi
keserken görsel modelin gördüğünü değiştirmez. Yeniden boyutlandırma
`sharp` kullanır, dinamik içe aktarma ile yüklenir: yerel ikili dosyasının
yüklenemediği bir platformda, `normalizeDataUri()` **asla hata vermez** —
orijinal baytların geçişine geri döner, böylece tanım/base64-dönüşüm
yolu her zaman çalışmaya devam eder. Görüntü olmayan baytlar (çözümlenebilir
bir görüntü döndürmeyen bir alma) de dokunulmadan geçer. Bu normalizasyon,
köprünün kendi çağrısı için aldığı görüntülerle sınırlıdır — çağırıcının
ham geçiş yüküne asla uygulanmaz, yalnızca opt-in mutasyon ilkesine
uygun olarak (Sert Kural #20).

#### Ayarlar şeması + geçiş

Yeni `modalityBridge*` anahtarları `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`) içinde Zod ile doğrulanır:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCache*` üçlüsü ve Ses Köprüsü tarafından kullanılan
`modalityBridgeAudio*` grubu. Geçiş `141_modality_bridge_settings.sql`
mevcut miras `visionBridge*` değerlerini eşleşen yeni anahtarlara kopyalar
(idempotent, asla bir operatör tarafından ayarlanmış `modalityBridge*`
değerini üzerine yazmaz); miras anahtarlar bir sürüm döngüsü boyunca
okuma geri dönüşü olarak kabul edilmeye devam eder.

#### Şeffaflık başlığı + istatistikler

Tanım dönüştürülmüş yanıtlar `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` taşır
(`buildModalityBridgeHeader()` `modalityBridge/bridgeStats.ts` içinde
oluşturulur, `withModalityBridgeHeader()` `src/sse/handlers/chatHelpers.ts`
içinde damgalanır). Yeniden yönlendirilmiş istekler **hiçbir** başlık almaz —
yük, dokunulmamıştı ve model değişimi zaten yanıt gövdesinin `model`
alanında görünür.

`GET /api/modality-bridge/stats` (yönetim kimlik doğrulaması, `GET /api/settings` ile aynı seviye) `vision`, `audio` ve `video` için bellek içindeki her bir modalite sayıcılarını döndürür: `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }`. `averageLatencyMs`, payda olarak `latencySamples` kullanır, tüm denemeleri değil; zamanlama olmadan yapılan bir işlem sıfır milisaniye örneği oluşturmaz. `bridged`, başarılı dönüşümler için geriye dönük uyumlu bir takma ad olarak kalır; başarısız denemeler bunu artırmaz. Sayıcılar, tasarım gereği işlem yeniden başlatıldığında sıfırlanır (telemetri, muhasebe değil).

#### Gösterge Paneli Yapılandırması

Özel gösterge paneli sayfası ` /dashboard/settings/modality-bridge`dir. URL adreslenebilir `Vision`, `Audio` ve `Video` sekmeleri, `tab` değerini değiştirirken sorgu parametrelerini korur. Vision sekmesi, etkinleştirme, mod, model seçimi (otomatik varsayılan dahil), görev farkındalığı ile istem, gelişmiş zaman aşımı/görüntü/açıklama uzunluğu/önbellek sınırları, çalışma zamanı sayıcıları ve korumalı bir örnek isteği sunar. Audio sekmesi de canlıdır: etkinleştirme, yalnızca STT modeli seçici, otomatik, zaman aşımı/maksimum kesit sınırları, ses sayıcıları ve bir `input_audio` örnek testi sunar. Video sekmesi işlevseldir: FFmpeg/ffprobe çalışma durumu raporlar — dört açık UI durumundan biri (`probe uçuşta iken veya tamamlanamadığında `unknown`, istemci tarafında atlanan bir döngü dışı gösterge paneli ana bilgisayarında `restricted`, probe yapıldıktan sonra eksik olduğu onaylandığında `unavailable`, veya FFmpeg/ffprobe sürümleri ile `available`) — etkin/model/çerçeve/video/zaman aşımı sınırlarını korur, model seçiciyi görsel yetenekli modellere filtreler ve video sayıcılarını açığa çıkarır.

AI ayarları altındaki eski Vision Bridge kartı, yeni sayfaya bir uyumluluk bağlantısıdır; artık formun ikinci bir kopyasına sahip değildir. Medya Sağlayıcıları ayrıca Görüntüden Metne ve Sesten Metne iş akışlarını ilgili Modalite Köprüsü sekmelerine bağlar, mevcut Sesten Metne oyun alanını kaldırmadan.

**Kendi kendine döngü kabul atlaması:** tanımlama çağrısı OmniRoute'un kendi `/v1` kendi kendine döngüsünden (standart dışı sağlayıcı modeli) geçtiğinde, alt istek `x-omniroute-admission-bypass: internal` gönderir ve çözümlenen kendi kendine döngü kimlik bilgileri ile kimlik doğrulaması yapılır — yerel modda yerel `sk_omniroute` bekçisi veya operatör tarafından yapılandırılan `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env anahtarı (#1350) böylece `REQUIRE_API_KEY=true` dağıtımları hala tanımlama çağrısını çalıştırabilir. Atlama yalnızca bu kesin kimlik bilgileri için geçerlidir, bu nedenle dış istemciler başlığı kullanarak kabulü atlayamaz.

Eski varsayılanlar `src/shared/constants/visionBridgeDefaults.ts` içinde yer alır; yeni mod/görev farkındalığı/önbellek varsayılanları ve ayar çözücü `src/shared/constants/modalityBridgeDefaults.ts` içinde yer alır. Koruma, testlerin sahte `getSettings` ve `callVisionModel` uygulamalarını enjekte edebilmesi için bir `deps` yapıcı seçeneği sunar.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Hedefin ses girişi kabul etmediği bilinen ses taşıyan sohbet isteklerini yakalar. Sohbet isteğini asla yeniden yönlendirmez: ses parçaları mevcut OpenAI uyumlu çok parçalı uç noktası aracılığıyla transkribe edilir ve seçilen sohbet modeli metin transkriptleri ile devam eder.

Akış:

1. `supportsAudio` değerini `getResolvedModelCapabilities()` aracılığıyla çözün. Açık sağlayıcı kayıt meta verileri kazanır, ardından statik model meta verileri, ardından senkronize `modalities_input`. `audio` içermeyen bir beyan edilmiş girdi listesi `false` olarak değerlendirilir; hiçbir yetenek kanıtı `null` kalır. Hem `false` hem de `null`, korumacı köprüyü etkinleştirirken, `true` bunu atlar.
2. `modalityBridgeAudio*` ayarlarını çözün ve her mesajdan paylaşılan `detectMediaParts()` dedektörü aracılığıyla kesilebilir üst düzey ses parçalarını çıkarın. Desteklenen tel şekilleri OpenAI `input_audio`, `audio_url` ve `source.media_type: "audio/*"`dir. İç içe ses yönlendirme için tespit edilir ancak kesme yoluyla kaldırılmaz. İş, `modalityBridgeAudioMaxClips` ile sınırlıdır; sonraki parçalar dokunulmadan kalır.
3. Yapılandırılmış bir `provider/model` değerini onurlandırın veya `selectAudioBridgeModel()`'in `AUDIO_TRANSCRIPTION_PROVIDERS` içinde kararlı katalog sırasına göre yürüyüp kullanılabilir aktif sağlayıcı kimlik bilgileri olan ilk modeli seçmesine izin verin.
4. `callAudioTranscription()` base64/data-URI sesini çok parçalı bir `file`'a dönüştürür veya yalnızca halka açık dış koruma ile DNS pinleme ve 25 MB sınırı ile uzaktaki bir `audio_url` indirir. Ardından dosyayı ve seçilen modeli yerel `/v1/audio/transcriptions` kendi kendine döngüsüne POST eder, `resolveSelfLoopBearer()` ile kimlik doğrulaması yapılır. Mevcut transkripsiyon rotası normal kimlik bilgisi araması, soğuma/hız sınırlama yönetimi ve sağlayıcı dağıtımı gerçekleştirir.
5. Başarılı çağrılar parçalarını `[Audio N]: <transcript>` ile değiştirir. Çağrılar `Promise.allSettled` ile çalışır: bireysel bir hata, o orijinal ses parçasını korur (#4012 sözleşmesi). Her çağrı başarısız olursa ve hedefin `supportsAudio === false` olduğu kanıtlanırsa, parçalar `[Audio N]: (kullanılamıyor — STT sağlayıcısı bağlı değil)` haline gelir (#8430 sözleşmesi). Bilinmeyen bir hedef (`null`) için, tüm başarısız sonuç dokunulmadan kalır. Kullanılabilir bir STT kimlik bilgisi olmayan kanıtlanmış bir yalnızca metin hedefi, ağ çağrısı yapmadan aynı açık stub'ı alır.

Başarılı transkriptler, işlem genelindeki Modalite Köprüsü LRU/TTL önbelleğini kullanır. Anahtar, ses referansını, kararlı `audio-transcription` işlem etiketini ve seçilen STT modelini birleştirir; hatalar asla önbelleğe alınmaz. Ses denemeleri, paylaşılan `bridged`, `cacheHits`, `failures` ve `lastUsedAt` sayıcılarını günceller. Dönüştürülmüş yanıtlar `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` taşır; dokunulmamış istekler bir Audio Bridge segmenti almaz.

Çalışma zamanı ayarları DB destekli ve Zod ile doğrulanmıştır:

| Anahtar                       | Varsayılan | Aralık           |
| ----------------------------- | ---------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`     | —                |
| `modalityBridgeAudioModel`    | `""`       | Auto veya STT ID |
| `modalityBridgeAudioTimeout`  | `60000`    | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`        | 1–10             |

Paylaşılan önbellek, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ve `modalityBridgeCacheMaxEntries` ile kontrol edilmektedir.

### Video Köprüsü (`videoBridge.ts`, `videoBridgePipeline.ts`)

Hedefi bilinen yerel video desteği olmayan bir çağrıdan önce, Chat Tamamlamaları `messages` ve Yanıtlar API `input` içindeki üst düzey video parçalarını yakalar. Desteklenen şekiller `input_video`, `video_url`, `video_source`, HTTPS URL'leri ve `data:video/*;base64,...` veri URI'leridir. Metin içindeki düz dosya adları video olarak değerlendirilmez.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) istek geçişini, yetenek/politika kontrolünü, isteğe bağlı toplama ve yanıt yükünü yönetir. Her video için iş — edinim, tüm sonuç önbelleği, bir çerçeve dizisini tanımlama (herhangi bir çağırıcı tarafından belirtilen ses transkripti ile birleştirir) ve her deneme için metrikler/iptal/temizlik — `processVideoPart` içinde gizlidir ve `videoBridgePipeline.ts`'de, `preCall` döngüsü içinde her video parçası için bir kez çağrılır. Bu modül ayrıca `VideoMediaBrokerPort` (baytları edinme ve örneklenmiş çerçeveleri çıkarma), `VideoAudioTranscriptionPort` (bir çağırıcı tarafından belirtilen ses transkriptini örneklenmiş altyazılarla birleştirme) ve `VideoDrilldownPort` (eski ham-depo şekli) gibi açık port sınırlarını tanımlar. Üretim STT ve çerçeve saklama, `createVideoSttAdapter` ve `createVideoDrilldownAdapter` aracılığıyla tanımlayıcı port etrafında oluşturulur; ikincisi, paylaşılan opak-handle yaşam döngüsünü kullanır.

Halka açık `/v1` istek yolu asla bir alt süreç içe aktarmaz veya çağırmaz. Uzaktan videolar 50 MiB sınırında indirilir; satır içi base64 videoların, model/mesejler/çerçeve zarfının halka açık JSON istek kabul sınırı olan 50 MiB içinde kalabilmesi için 36 MiB'lik bir çözülmüş video sınırı vardır. Satır içi uzunluk ve çözülmüş boyut tahminleri tahsis edilmeden önce kontrol edilir. İlk uzaktan URL ve her yönlendirme için HTTPS gereklidir, mevcut halka açık yalnızca dışa dönük koruma ile DNS pinleme kullanılır. Baytlar daha sonra tam iç `POST /api/modality-bridge/video/extract` aracılık sınırını geçer. Bu rota hem `LOCAL_ONLY` hem de `SPAWN_CAPABLE` olup, yalnızca bir işlem için kimlik doğrulaması yapılmış, güvenilir döngü geri dönüş isteğini kabul eder ve asla bir URL, dosya sistemi yolu, çalıştırılabilir dosya veya argüman listesi kabul etmez. API gövde boyutu boru hattı ve işleyicinin artımlı gövde okuyucusu bağımsız olarak 50 MiB aracılık giriş sınırını uygular. Sınırlandırılmış kuyruğu bir seferde bir çıkarım yapar, dört bekleyen işi kabul eder ve bekleyen girişi 100 MiB ile sınırlar.

Aracının içinde, `ffprobe` özel bir yerel dosyayı okur; sabit format izin listesi çalma listesi ve manifest formatlarını hariç tutar. İzin verilen MOV-aile konteynerleri için, harici MOV veri referansları varsayılan olarak devre dışıdır ve sabit komut bunlara katılmaz. Hem `ffprobe` hem de `ffmpeg`, yalnızca `file` protokol izin listesini, bir iş parçacığını, sabit argüman dizilerini, kabuk kullanmadan ve `PATH`'ten çözülen çalıştırılabilir dosyaları kullanır. Ekli resim kapak akışları oynatılabilir adaylar değildir. Tüm oynatılabilir akışlar sınırları karşılamalıdır ve belirgin bir varsayılan akış, belirleyici en düşük indeks geri dönüşünden önce tercih edilir. Videolar 600 saniye, her boyutta 8,192 piksel ve 33,554,432 kaynak piksel ile sınırlıdır. FFmpeg, 1–16 orta nokta JPEG çerçevelerini örnekler, uzun kenarı en fazla 1,024 piksel olacak şekilde küçültür, daha küçük girişleri büyütmez ve asla bir URL almaz. Örnekleme varsayılan olarak `uniform`'dır. İsteğe bağlı `scene_aware` ve deneysel `segment_aware` politikaları, zaten doğrulanmış yerel akış üzerinde bir ek sabit FFmpeg geçişi gerçekleştirir, sınırlı `showinfo` sahne zaman damgalarını seçer ve dedektör hatası, zaman aşımı, hatalı çıktı veya boş aday seti durumunda belirleyici olarak aynı uniform orta noktalara geri döner. Segment bilincine sahip mod, orta nokta örneklerini doğrulanmış sahne aralıklarına orantılı olarak tahsis eder; segment bilincine sahip kanıt ve geri dönüş davranışı aşağıda detaylandırılmıştır. Sert 16 çerçeve sınırı, her politikada seçimden sonra uygulanır. Bir sahne bilincine sahip isteğin yalnızca bir çerçeve bütçesi olduğunda, aktif tam video veya odak penceresinin uniform orta noktasını kullanır ve `policyEffective: uniform` olarak rapor eder: tek bir seçilen sahne çerçevesi, her iki zamansal ucu da koruyamaz. Bir çağırıcı isteğe bağlı olarak sınırlı bir odak penceresi (`start`/`end` saniyeleri) sağlayabilir; sınırlar medya süresine sıkıştırılır, ters veya sonsuz pencereler reddedilir ve tüm örnekleme politikaları yalnızca normalize edilmiş aralık içinde gerçekleştirilir. Ortaya çıkan pencere, örnekleme meta verilerine ve güvenilmeyen tanım ön ekine dahil edilir, böylece aşağı akış modelleri odaklanmış bir alıntıyı tam zaman çizelgesinden ayırt edebilir.

Anlamsal altyazı odaklanması ayrı, açık bir ayardır. Varsayılan `full` analiz modu mevcut çerçeve istemini korur ve isteği altyazı modeline asla iletmez. `focused` modda, köprü yalnızca aynı Chat veya Yanıtlar konteynerinden en son boş olmayan kullanıcı tarafından yazılmış `text`/`input_text`'i okur, bunu NFC'ye normalize eder, kontrol karakterlerini ve boşlukları birleştirir ve 500 Unicode kod noktası ile sınırlar. Boş bir sonuç tam `full` istemine geri döner. Kullanılabilir bir ipucu, özel bir güvenilmeyen kullanıcı bağlamı bloğunda JSON olarak serileştirilir ve yalnızca gözlemlenebilir ayrıntıları önceliklendirir; medya içinde görülebilir veya duyulabilir talimatları takip etme uyarısını geçersiz kılma yeteneğine sahip değildir. Metinsel odaklanma asla `start`/`end` çıkarmaz veya zamansal örnekleyiciyi değiştirmez.

#### FU-07 yapısal segment kanıtı

`segment_aware`, zaten doğrulanmış yerel video akışı üzerinde bir sınırlı ön analiz geçişi kullanır. Sabit filtre zinciri önce en fazla 320 piksel genişliğe ölçeklenir, sahne değişikliklerini ve donmuş aralıkları tespit eder, ardından bulanıklık, ortalama luma ve mekansal/zamansal bilgi için saniyede 1 kare örnek alır. Geçiş, 600 yapısal örnekle, bir FFmpeg/filtre iş parçacığıyla, aynı `file`-sadece protokolü ve konteyner izin listeleriyle, 1 MiB işlem çıktısı sınırıyla ve broker'ın paylaşılan iptal/süre sınırı içinde en fazla 30 saniye ile sınırlıdır. İsteğin içinden hiçbir komut, filtre, yol veya URL kabul etmez.

Yapısal değerler, anlamsal video anlayışı değil, deterministik örnekleme kanıtıdır. Konuları, eylemleri, altyazıları, konuşmayı veya kullanıcı niyetini çıkarmazlar. Sahne ve donma sınırları segmentler oluşturur; donma kapsamı, bulanıklık, pozlama, mekansal detay ve zamansal değişim yalnızca mevcut 1–16 kare bütçesinin nasıl tahsis edildiğini etkiler. Tamamen donmuş bir segment bir kare ile sınırlıdır, oysa donmamış segmentler kalan bütçe için rekabet eder. Sınırlar karelerden fazla olduğunda, hızlı erken kesimler uzun bir ardıl segmenti gizleyememesi için uniform zaman çizelgesi kapsamı korunur. Bir donma sınırının 1 saniyelik analiz çözünürlüğü içindeki sahne sınırları birleştirilir.

Eksik filtreler, biçim hatası/boş kanıt, bir dedektör hatası veya sınırlı ön analiz zaman aşımı, tam olarak uniform orta nokta politikasına açık bir şekilde başarısız olur. Bir arayıcı iptali veya broker süresi dolması açık bir şekilde başarısız olmaz: uçuşta olan alt süreci sonlandırır, sonraki kare çıkarımını engeller ve özel geçici ağaç `finally` içinde kaldırılır.

`scripts/perf/video-bridge-fu07-eval.ts`, post-dedup altyazı çağrı tasarrufları, yoğun hareket bütçesi tahsisi, bulanıklık/pozlama/SI-TI kanıtları, uzun bir kuyrukla hızlı kesimler ve yavaşça solma yanlış pozitifleri için deterministik gerçek FFmpeg düzenekleri üretir. Ön analiz duvar zamanını kaydeder ve `/usr/bin/time` mevcutsa, çocuk CPU ve zirve RSS'yi de kaydeder. Kalite kontrolleri yalnızca yapısal kehanetlerdir. Gerçek altyazı modeli kalitesi `HOLD` olarak kalır çünkü bu düzenek yetkilendirilmiş bir uç nokta veya donmuş bir hakem içermez. Maddi tasarruflar da, `--caption-cost-per-call-usd` açık bir pozitif çağrı tahmini sağlamadıkça `HOLD` olarak kalır; script hiçbir sonucu uydurmaz.

Her kare 4 MiB ile sınırlıdır, tüm ham kareler birlikte 23 MiB'e ve serileştirilmiş broker yanıtı 32 MiB'e kadar sınırlıdır. Özel geçici bir dizin `finally` içinde kaldırılır. OmniRoute FFmpeg'i paketlemez ve özel bir çalıştırılabilir yol kabul etmez. Altyazıdan önce, köprü, muhafazakar bir görsel deduplikasyon geçişi uygular: her JPEG, 16×16 gri tonlamalı bir tampon haline getirilir ve yalnızca son tutulan kare ile karşılaştırılır. Bir kareden fazla istenen bir altyazı bütçesi için, çıkarım, o bütçenin iki katına kadar sınırlı bir aday havuzu sağlar ve asla 16 kareden fazla olmaz. İstenen sınır yalnızca deduplikasyondan sonra uygulanır; ilk ve son seçilen adaylar, bütçe en az iki olduğunda son inceltme sırasında korunur. Versiyonlu `grayscale-16x16-mean-cells-v2` politikası, ortalama luma delta ve normalize edilmiş delta en az 0.05 olan küçük resim hücrelerinin oranının daha büyük olanını kullanır. Çoğaltma eşiği, tahmin edilebilirlik için seçilen sabit 0.04'tür ve çalışma zamanı ayarı olarak açığa çıkarılmaz. Bu ikincil yüksek kontrast sinyali, yalnızca ortalama karşılaştırmanın gizleyebileceği küçük hareket ve görünür metin değişikliklerini korur. Karşılaştırıcı veya çözücü hataları açık bir şekilde başarısız olur ve kapsamı korur. Çıktı meta verisi, çıkarılan adayları, başarıyla kullanılan kareleri ve düşürülen görsel çoğaltmaları ayırır.

Açıkça işaretlenmiş bir video parçası, zaman damgalı bir iletişim sayfası talep edebilir. Köprü, en fazla 4 sütunlu, 16 karelik bir JPEG ızgarası oluşturur. Her 512 piksel hücresi, kaynağının zaman damgasını yüksek kontrastlı bir alt banda kazırken, aynı zaman damgaları, aşağı akışta ilişkilendirme ve denetim için metasal meta verilerde kalır. Tam JPEG, 32 MiB ile sınırlıdır. Eğer `sharp` ızgarayı çözemez veya oluşturamazsa, köprü bireysel JPEG karelerine geri döner; bir istemci iptali yine de sayfa işlemi boyunca yayılır.

Promosyon kanıtı, sentetik bileşim mikrobenchmarkından kasıtlı olarak ayrıdır. `scripts/perf/video-bridge-contact-sheet-eval.ts`, gerçek OpenAI uyumlu görsel modeller için şema sürümlü bir A/B düzenek tanımlar. Sağlayıcı tarafından bildirilen tokenleri, uçtan uca duvar gecikmesini (sayfa bileşimi dahil), model çağrı sayısını ve manifest tanımlı gerçeklik tutumunu ölçer. Ham model yanıtları rapora yazılmaz; yalnızca SHA-256 özetleri ve eşleşen gerçeklik kimlikleri saklanır. Düzenek, `--execute-real` geçilmedikçe ve `--model`, `OMNIROUTE_BASE_URL` ve `OMNIROUTE_API_KEY` yapılandırılmadıkça hiçbir ağ veya ücretli model çağrısı yapmaz. O açık gerçek çalışması olmadan, makine okunabilir hükmü `HOLD` olarak kalır; sentetik yük/çağrı sayımı ölçümleri yalnızca promosyon kanıtı değildir.

Ayrı `scripts/perf/video-bridge-promotion-eval.ts`, FU-07 veya FU-09 gözlemlerini tüketir. Promosyon kabulü, tüm sekiz sentetik senaryo türünü ve en az üç ölçülen tekrarı, her rol ve durum için, tüm on beyan edilen metriği, donmuş medya/istek/beklenen gerçeklik/ayar özetlerini, benzersiz gözlem kimliklerini ve doğrulanmış tohumlu A/B sırasını gerektirir. İcra makbuzu, corpus özetini, tam aday SHA'sını ve model revizyonunu bağlar. Eksik veya geçersiz ölçümler `HOLD` olarak kalır; 30 s üzerindeki CPU, 512 MiB üzerindeki zirve RSS veya 30 s üzerindeki ön analiz dahil. Bunlar, kanıt kabul sınırlarıdır, yeni bir çalışma zamanı RSS uygulama garantisi değildir.

FU-07, en az %98 kalite koruma ve p95 gecikmesinin temel değerin 1.2 katını geçmemesini gerektirir, ayrıca ya eşdeğer ortalama başlık çağrılarında 0.05 mutlak vaka dengeli ortalama hatırlama iyileştirmesi ya da en az %10 daha az ortalama post-dedup başlık çağrısı gerektirir. FU-09, en az 0.85 kalite, %95 koruma, %20 p95 gecikme azaltma ve %10 token azaltma gerektirir. Kritik faktör kaybı, enjeksiyon uyumu veya eksik kullanım terfi etmeyi engeller. Bir yürütme hiçbir şeyi terfi ettiremez: `--previous-report`, aynı politika/model revizyonu/adayı/korpus için iki ayrı, örtüşmeyen, ardışık olarak uygun yürütmeyi onaylar. Bir örnekleme deneyi, bir iletişim sayfası deneyini onaylayamaz.

Toplayıcılar, yanıtları bellekte puanlamalı ve `responseDigest` ile birlikte metrikleri ve gözlem bağlamalarını kaydetmeli, asla yanıt metnini kaydetmemelidir. Tüketici ayrıca eski ham gözlemleri okur ancak o metni raporlarına asla kopyalamaz. Her gözlem için ya `responseDigest` ya da `rawResponseText` kabul edilir. Versiyonlu izin listesi, değiştirilemez bir `hold` varsayılanı ile boş kalır. Uygun bir giriş, kanıt referansı, politika, model revizyonu, kesin aday SHA, manifest özeti ve iki ayrı çalışma kimliği gerektirir; çelişkili bağlamlar reddedilir. Bu meta veriler bir denetim sözleşmesidir, referans verilen bir dosyanın gerçek ölçümler içerdiğine dair bir kanıt değildir. Herhangi bir girişi eklemeden önce gerçek makbuzları gözden geçirin. Yönetim istatistikleri uç noktası ve Video panosu, temkinli bir hazır olma durumu sunar. Yapılandırılmış bir model takma adı, kendi revizyonunu veya çalışan aday SHA'sını belirlemez, bu nedenle mevcut pano `HOLD` bildirir ve başka bir yürütme bağlamından uygunluğu yeniden kullanmaz. Açık deneysel seçim, terfi etmekten ayrı kalır; varsayılan otomatik olarak değişmez.

Arayanlar, zaten hizalanmış metne sahip olduklarında desteklenen bir video parçasına isteğe bağlı bir `transcript.cues` dizisi ekleyebilir. Her ipucu, `text`, sorgulanan süre içinde sonlu bir `start`/`end` aralığı ve beyaz listeye alınmış bir `source` (`client`, `embedded` veya `audio-bridge`) taşımalıdır; `confidence` varsayılan olarak `1`'dir ve `0` ile `1` arasında kalmalıdır. Tam kopya ipuçları birleştirilir. OmniRoute, bu meta verilerden transkripsiyona başlamaz: doğrulanmış ipuçları, kaynak, güven ve aralık ile birlikte tanımlanan sonuca kopyalanır ve çerçeve başlıklarıyla birlikte güvenilir olmayan gözlemler olarak sunulur. Geçersiz, aralık dışı veya kökeni belirsiz metin, başlık akışına karıştırılmak yerine reddedilir. Her iki istek gövdesi transkript kanalı, sağlanan kökeni `client` olarak normalize eder, kendiliğinden beyan edilen `embedded` veya `audio-bridge` etiketleri dahil. Sadece bir sunucuya ait adaptör, bu güvenilir etiketleri yalnızca kodla `trustedSource` argümanı aracılığıyla atayabilir; bir istek JSON alanı o argümana ulaşamaz. Transkript metni, kökenine bakılmaksızın güvenilir olmayan medya kaynaklı içerik olarak kalır ve asla yetkilendirmeyi belirlememelidir.

Gelişmiş bir arayan, aynı video için bir `audioTranscript` parçası sağlayabilir; bu, sunucu transkripsiyonunun kanıtı değil, istemci tarafından sağlanan metin olarak kabul edilir. Füzyon dikişi, görsel ve ses gözlemlerini tek bir son tarih ve iptal sinyali altında çalıştırır, bunları ortak bir zaman çizelgesinde sıralar, tam kopyaları birleştirir ve yalnızca bir taraf başarılı olduğunda kısmi bir sonuç bildirir. Geçersiz bir `audioTranscript`, o kısmi sonuca düşer — görsel tanım korunur ve ses dalı sterilize edilmiş bir hata kodu kaydeder — tüm videoyu başarısız kılmak yerine. Her dal için kullanılabilirlik, kısmi bayrak ve sterilize edilmiş hata kodları, tanımlanan sonuçta, koruma meta verilerinde (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), sonuç önbellek meta verilerinde ve köprü füzyon sayaçlarında korunur. Varsayılan Video Köprüsü yolu, konuşmadan metne geçiş yapmaz veya ikinci bir medya kopyası indirmez; o açık parça olmadan, video ile sınırlı kalır.

**Transkript koruma (#12150 P1).** Bu, Video Köprüsü (kendisi isteğe bağlı) bir transkript ipucu sunduğunda otomatik olarak uygulanır — ayrı bir koruma bayrağı yoktur. Bir istek herhangi bir transkript ipucu (bir arayan tarafından beyan edilen `transcript` veya bir füzyon `audioTranscript`) sunduğunda, koruma `videoBridgeObserved` olarak işaretler ve videonun tanımının redakte edilmiş bir gölgesini üretir — her ipucunun serbest metin gövdesinin `[redacted-video-transcript]` ile değiştirildiği, yapılandırılmış ipucu alanının dize birleştirilmeden önce değiştirildiği (düzleştirilmiş metni ayrıştırarak değil, bu nedenle hiçbir ipucu içeriği — düşmanca veya sıradan, `]` içeren gövdeler dahil, ` [inaudible]`/`[music]` gibi — hayatta kalamaz). Kalıcı çağrı günlüğü istek gövdesi, her video kaynaklı metin parçasını o redakte edilmiş gölge ile değiştirir, içerik eşitliği ile eşleşir; `fullText` bağlantısı, tamamlanmış ön çağrı koruma yükünden yeniden okunur, bu nedenle eşleşme, daha sonraki zincir korumaları (PII ve kimlik bilgisi maskeleme, öncelikler 10/95) tanım metnini yerinde yeniden yazdığında ve sistem istemi/aktarma/bellek enjeksiyonu mesaj dizisini yeniden şekillendirdiğinde hala başarılı olur. Model için yukarı gönderilen gövde değişmez. Gözlemlenen bir istek, kalıcı Belleği de doldurmaz (hem istek hem de yanıt kaynaklı çıkarımlar atlanır), bu nedenle modelin kendi yanıtı, transkript metnini Belleğe yansıtamaz.

**Ham video alanları (#12430).** Köprü etkinleştirildiğinde ve yerel video desteği bilinmiyorsa veya yoksa, tanımlı `transcript`/`audioTranscript` alanları da `videoBridgeObserved`'ı etkinleştirir, tanım hatası veya `maxVideos` sınırı sonrasında bile. `null` ve boş dizeler sayılır; eksik alanlar ve video dışı meta veriler sayılmaz. Saklanan kopyalar bu alanları redakte eder veya isteği atlar ve önbellekler/Bellek atlanır.

Bu geri dönüş yollarında, geçerli çağrıcı ipuçları, standart dışı sağlayıcı alanları yerine desteklenen `text`/`input_text` parçaları haline gelir. Hem istekle sağlanan parçalar, video açıklanmadığı ve zaman damgalarının medya ile doğrulanmadığına dair açık bir uyarı ile güvenilir olmayan `client` gözlemleri olarak kalır. Mevcut 256 ipucu/64-KiB toplam ve her ipucu bütçesi, iki parça için birlikte geçerlidir; zaman damgaları aracının 600 saniyelik tavanına ve sağlanan herhangi bir odak penceresine uymalıdır. Geçersiz parçalar atılır, rastgele metin olarak iletilmez; geçerli bir kardeş, birleşik bütçeleri aşılmadığı sürece hala kullanılabilir. Null/boş alanlar metin eklemez. Bu geri dönüş ile medya alma veya transkripsiyon eklenmez. Transkript genişletme alanları, geri dönüş video taşıyıcısından ve onun `video_url`/`source` nesnelerinden kaldırılır. OpenAI tel wire izin listesi katı kalır; bilinmeyen yerel video taşıyıcıları mevcut olmaya devam eder ve bilinen yalnızca metin hedefleri güvenli işaretler taşır. Yapılandırılmış redaksiyon gölgeleri, eklenen transkript metnini korurken, orijinal çağrıcıya ait istek değişmeden kalır. Yerel olarak desteklenen hedefler ve devre dışı köprüler mevcut geçiş davranışlarını korur.

Ek olarak tutulan kopyalar, aynı gözlemlenen-istek sinyalini kullanır. Ham ön-çit istemci-istek anlık görüntüsü, bellek içindeki bekleyen istek ve erken reddedilen-istek kaydı, video parçalarındaki transkript alanlarını yapısal olarak değiştirir; boru hattı aşamaları ve bağlam devri tarafından sentezlenen dize istemleri, kalıcı-istek-gövdesi çıkışında redakte edilir. Kalıcı `video_content_removed` işareti, `previous_response_id` devamını kapalı hale getirir, böylece kasıtlı olarak atılan metni yeniden oluşturmaz. Eğer gözlemlenen bir istek, kayıtlama öncesinde parça başına redaksiyon gölgesini kaybederse veya daha sonraki istek değişikliklerinden sonra birkaç video gölgesinden biri eşleşmezse, tutulan istek gövdesi tamamen atılır, kısmen redakte edilmiş bir transkripti korumak yerine.

Gözlemlenen bir istek için, bir model yanıtı, yapılandırılmış bir ipucu sınırı olmaksızın transkriptin herhangi bir bölümünü alıntılayabilir. Bu nedenle, kalıcı çağrı kaydı `responseBody`, bir atlama işareti ile değiştirilir; ayrıntılı boru hattı eseri (üst akış/istemci gövdeleri ve akış parçalarını içerebilir) tutulmaz. Anlam, idempotans ve akıl yürütme-oynatma önbellekleri, o istek için okuma ve yazmayı atlar. Sağlayıcı isteği ve istemci görünür yanıt değişmeden kalır. Ayrıntılı eser atlandığında, erken keepalive baytları geçici tampondan boşaltılır. Kiro'nun hatalı EventStream uyarısı yalnızca yük bayt sayısını raporlar, içeriğini veya JSON ayrıştırıcısının ham hatasını asla göstermez. Bu, her alakasız sağlayıcı/eklenti tanısının denetlendiğini iddia etmez; daha geniş tutulan-drenaj taraması #11658'de izlenir.

Dahili `/api/modality-bridge/video/drilldown` yaşam döngüsü, ayrı, geri döngü/token kimlik doğrulamalı bir önbellek alt yapısıdır. Her işlem ayrıca kanonik opak bir ana ID gerektirir. Bir üretim çağrıcısı etkinleştirilmeden önce, bu ID'yi kimlik doğrulamalı kiracıdan türetmeli ve asla istemci-seçimli bir değeri iletmemelidir. Önbellek anahtarları, o anahtarı kanonik oturum ve video-referans ID'lerine bağlar, yalnızca SHA-256 türetilmiş anahtarlarını saklar ve hem okuma hem de silmeyi aynı anahtar ile sınırlar. Önbellek, her giriş için en fazla 16 türetilmiş JPEG çerçevesi saklar, on dakikadan sonra süresi dolmuş olanları atar ve sınırlı `start`/`end` okumalarını veya açık oturum silmeyi destekler.

Her anahtar, 16 giriş ve 64 MiB kanonik JPEG verisi ile sınırlıdır. Bu sınırlamalar, küresel 64-giriş/256 MiB tavanından bağımsızdır: anahtar kota baskısı yalnızca o anahtarın en az kullanılan girişlerini atar, küresel LRU atılması düşünülmeden önce. Süresi dolmuş girişler, önbellek etkinliği sırasında hem anahtar hem de küresel muhasebeden silinirken, iptal ve doğrulama hatası kısmi bir değişikliği taahhüt etmez.

Önbellek, kanonik olmayan Base64, aşırı doldurma, kanonik olmayan JPEG medyası, hatalı veya kesilmiş JPEG'leri ve sınırlı tam-görüntü `sharp` çözümlemesi sırasında uyarı üreten JPEG'leri reddeder. Her kabul edilen görüntüyü kanonik bir JPEG olarak yeniden kodlar, genişlik ve yüksekliği çağrı alanlarına güvenmek yerine çözümleme baytlarından türetir ve herhangi bir sonlandırıcı poliglot baytını saklamak yerine atar. Yalnızca sınırlı kanonik sıkıştırılmış tampon, her iki kotaya da yansıtılır. JSON tel sınırı, 32 MiB çözülmüş-girdi tavanı için Base64 aşımını içerir. Her saklanan türetim, doğrulanmış JPEG formatı/çözünürlüğü, örnekleme politikası, türetim versiyonu, oluşturma zamanı, sunucu tarafından hesaplanan içerik hash'i ve hash'lenmiş ana referans ile güvenilir çağrıcının ana içerik hash'ini kaydeder. İptal, atomik önbellek taahhüdünden önce asenkron çözümleme/hash aşamaları arasında kontrol edilir.

Üretim üreticisi, yalnızca başarılı görsel analizden sonra zaten türetilmiş aracılık çerçevelerini yeniden kullanır, ikinci bir video indirme/çıkarma gerektirmez. Operatör `modalityBridgeVideoDrilldownEnabled=true`, katı parça başına `drilldown: true` ve kimlik doğrulamalı API anahtarı kayıt ID'si gerektirir. İstemci tarafından belirtilen anahtar/oturum değerleri asla mülkiyet kurmaz. Üç koşul olmadan, ek çerçeveleri hash'lemez, yeniden boyutlandırmaz veya saklamaz. Saklama hatası, kullanılabilir görsel yanıtı korur. Onaylı istekler, tüm video sonuç önbelleğini atlar, böylece önbelleğe alınmış sonuçlar asla tekrar işlenmez.

Başarılı JSON ve SSE yanıtları, en fazla dört opak handle'ı sınırlı `x-omniroute-video-drilldown` başlığında açığa çıkarır. Yetkili tarayıcı kökenleri, CORS köken politikasını genişletmeden bu başlığı okuyabilir. Yeni handle'lar `v1.<32-byte random base64url token>` formatını kullanır ve kayıt sadece SHA-256 hash'lerini saklar. Okuyucu/başlık ayrıştırıcı, eski 64-hex token'ları da kabul eder. Kimlik doğrulaması yapılmış genel tüketici, `GET /api/v1/video-bridge/drilldown?handle=...` ile erişim sağlar ve bu, `modalityBridgeVideoDrilldownRemoteEnabled=true` ile bağımsız olarak kontrol edilir. Açıkça kalıcı false, eski `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` env geri dönüşü etkin olsa bile erişimi iptal eder. Üretim saklama, benzer eski `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` geri dönüşüne sahiptir. Her iki geri dönüş de varsayılan olarak kapalıdır.

Tüketici, kimlik doğrulaması yapılmış anahtardan mülkiyet çıkarır, anahtar politikasını uygular ve bilinmeyen, süresi dolmuş ve başka bir anahtarın handle'ları için aynı 404 yanıtını döner. `variant=preview|standard|detail` (maksimum JPEG boyutu 320/640/1280, asla büyütülmez), `limit=1..8` (veya eski `frames` takma adı, asla her ikisi birden), sıfır tabanlı `page` ve isteğe bağlı `start`/`end` odak saniyelerini kabul eder. Tekrar eden sorgu anahtarları ve ters odak pencereleri reddedilir. Her dönen varyant, gerçek içeriğinin ve gerçek çözünürlük meta verisinin bir hash'ini içerir ve saklanan kaynakla bağlantılıdır. Varyantlar, ekstra saklanan kopyalar olarak depolanmak yerine okuma sırasında türetilir. JSON yanıtı, Base64/zarf dahil, 32 MiB ile sınırlıdır; aşırı boyutlu bir sayfa 413 döner ve istemci daha az çerçeve talep etmelidir. Okumalar, her yeniden boyutlandırma etrafında iptal kontrolü yapar ve dönerken handle geçerliliğini yeniden kontrol eder. Sahip tarafından `DELETE` işlemi idempotenttir; silme veya TTL süresi dolması, saklanan kaynağı ve kullanım muhasebesini serbest bırakır.

Paylaşılan depolama işlem yereldir: handle'lar yeniden başlatıldığında süresi dolar ve bağımsız OmniRoute süreçleri arasında transfer edilemez. Yönetim istatistikleri, yalnızca etkili saklama/uzaktan politika ve toplam saklanan girişler/baytları açığa çıkarır, asla medya, referanslar, ana ID'ler veya handle'lar değil. Video ayarları paneli bu değerleri gösterir ve her iki onay anahtarını da kalıcı hale getirebilir. Bu uygulama belgeleri, canlı dağıtım veya tanıtım kanıtı değildir; gerçek model kabulü ayrı olarak izlenir.

Kareler, yapılandırılmış Video modeli ile sıralı olarak altyazılıdır. Boş bir Video geçersiz kılma, Vision ayarını miras alır; her ikisi de boşsa, Vision otomatik yönlendirici etkili vizyon yeteneğine sahip modeli seçer. Başarılı altyazılar, metni güvenilir olmayan medya kaynaklı bir gözlem olarak işaret eden ve aşağı akış modellerine medyada bulunan talimatları takip etmemelerini söyleyen sabit bir `[Video description:` ön eki ile orijinal kısmı değiştirir. Kare-altyazı önbellek anahtarları, JPEG baytlarını, istemi, zaman damgasını ve etkili modeli içerir; yalnızca başarılı altyazılar önbelleğe alınır. Önbellek girişleri, yedek bir model dahil olmak üzere gerçek başarılı üretici modelini saklar; köprü, farklı karelerin farklı modeller tarafından üretildiğinde `mixed` rapor eder. Bir önbellek vuruşu, o üretici kimliğini yeniden etiketlemek yerine yeniden kullanır. Tüm-video sonuç önbelleği, çıktıyı değiştiren her girişe göre anahtarlanır — istem, etkili model, örnekleme politikası, kare sayısı, anlamsal analiz modu, normalleştirilmiş odak ipucu SHA-256 parmak izi, odak penceresi, `transcript`, `audioTranscript` ve iletişim sayfası bayrağı — bu nedenle bu boyutlardan herhangi birinin değiştirilmesi bir önbellek hatasıdır, asla bayat bir yeniden kullanım değildir. Görsel tekrar önleme politika versiyonu, eşiği ve sınırlı aday-kare sayısı sonuç-önbellek anahtarında ve meta verilerde de açıktır; bu nedenle bir politika değişikliği, bayat bir tüm-video tanımını yeniden kullanamaz. Sonuç-önbellek v4 meta verisi, modu ve parmak izini saklar, asla ham kullanıcı görevini değil. Koruma meta verisi, hem talep edilen hem de etkili analiz modlarını rapor eder; kullanılabilir kullanıcı metni olmayan bir talep edilen `focused` modu, etkili olarak `full` olarak rapor edilir.

Koruma, desteklenen her video parçasını çıkarır ancak `modalityBridgeVideoMaxVideos`'dan fazlasını tanımlamaz. `supportsVideo === false` olduğu kanıtlanmış bir hedef için, başarısız ve sınır aşan videolar açık güvenli metin işaretleri haline gelir, böylece ham video hayatta kalmaz. Yetenek bilinmediğinde, bu parçalar video taşıyıcısını korur; herhangi bir yedek transkript yukarıdaki sınırlı metin dönüşümünü takip eder. `supportsVideo === true` olan hedefler köprüyü atlar. İstemci talep iptal sinyali, indirme, broker kuyruğu, alt süreçler ve altyazı çağrıları aracılığıyla yayılır; iptaller videolar arasında durur ve asla ham medyaya açık bir şekilde başarısız olmaz.

Çalışma zamanı ayarları DB destekli ve Zod doğrulamalıdır:

| Anahtar                             | Varsayılan  | Aralık / davranış                                                                                          |
| ----------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | İsteğe bağlı çalışma zamanı, katılma                                                                       |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full`, genel altyazıları korur; `focused`, sınırlı, güvenilir olmayan en son kullanıcı bağlamını kullanır |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge modelini miras al                                                                            |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                       |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` veya orantılı `segment_aware`; dedektör hatası `uniform` ile geri döner           |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                        |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                             |

Legacy kalıcı Video zaman aşımı değerleri 120 saniyenin üzerindeyse broker son tarihine sıkıştırılır; bu limitin üzerindeki yeni ayar yazımları reddedilir. `GET /api/modality-bridge/video/runtime` kimlik doğrulama veya çalışma zamanı sorgulaması öncesinde güvenilir damgalı döngü geri dönüşü gerektirir, ardından yönetim kimlik doğrulaması gerektirir. Sadece `available`, temizlenmiş FFmpeg/ffprobe sürümleri ve çalışma zamanı kullanılamadığında sabit bir neden döner. Dahili çıkarım uç noktası kamuya açık bir yükleme API'si değildir: kuyruk doygunluğu `503` ve `Retry-After` döner, bir arayıcı bağlantısı kesilirse `499` döner ve sabit broker son tarihi `504` döner. Dönüştürülmüş yanıtlar merkezi `x-omniroute-modality-bridge` başlığına `video->text;model=<visionModel>;parts=<videos>` ekler, Vision veya Audio segmentlerini kaldırmadan.

### PII Masker (`piiMasker.ts`)

**Her iki** aşamada çalışır.

- **`preCall`** yükü klonlar, `system`, `messages`, `input` ve `prompt` (düz string öğeleri dahil) üzerinde yürür ve `content`/`text` alanlarına `processPII()` ( `@/shared/utils/inputSanitizer`'dan) uygular. `PII_REDACTION_ENABLED=true` olduğunda, tespit edilen PII çıkış yükünde gizlenir. Bu, yalnızca `INPUT_SANITIZER_MODE`'dan bağımsızdır (bu yalnızca istemci enjeksiyon politikasını kontrol eder). Gizleme kapalıyken, çağrı içerik yazmadan tespit sayımlarını kaydeder.
- **`postCall`** yanıtı derin klonlar, `sanitizePIIResponse()` ve Yanıtlar-API şekil maskesi (`maskResponsesOutput` — `output_text` ve `output[].content[].text` kapsar) çalıştırır. Herhangi bir gizleme gerçekleşirse, değiştirilmiş yanıt orijinalinin yerini alır.

Koruma asla engellemez; yalnızca notlar (`meta.detections`, `meta.redacted`) veya yeniden yazar.

### Prompt Injection (`promptInjection.ts`)

Kullanıcı tarafından sağlanan içerikte düşmanca yapıları tespit eder ve yapılandırılmış politikayı uygular. Davranış, ortam değişkenleri ve yapıcı seçenekleri tarafından yönlendirilir:

| Ayar            | Ortam değişkeni                                                                                             | Varsayılan | Etki                                                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Etkin           | `INPUT_SANITIZER_ENABLED`                                                                                   | `true`     | `false` olduğunda, koruma kısa devre yapar.                                                                                                                                                                      |
| Mod             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                             | `warn`     | Enjeksiyon politikası: `block`, `warn` veya `log`. (`redact` geriye dönük uyumluluk için kabul edilir ancak enjeksiyon metnini **silmez**; PII yeniden yazma isteği `PII_REDACTION_ENABLED` ile kontrol edilir.) |
| Engelleme eşiği | `blockThreshold` seçeneği / `INPUT_SANITIZER_BLOCK_THRESHOLD` (takma adı `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`     | Engellemek için gereken minimum ciddiyet. Orta, varsayılan olarak yalnızca gözlem içindir.                                                                                                                       |

**Mod önceliği** (`getMode`): arayıcı `options.mode` →
`INJECTION_GUARD_MODE` **DB özellik bayrağı geçersiz kılma** (Dashboard → Ayarlar →
Özellik Bayrakları) → `INJECTION_GUARD_MODE` ortam → `INPUT_SANITIZER_MODE` ortam →
`warn`. Bu nedenle, bir kontrol paneli geçersiz kılması ortam değişkenlerini geçer, bu nedenle Özellik Bayrakları UI, çalışan korumayı canlı olarak kontrol eder (yeniden başlatma yok). DB okuma güvenli bir şekilde yapılır: hata verirse, koruma ortam tabanlı davranışa geri döner ve hiçbir geçersiz kılma ayarlanmadığında davranış, yalnızca ortam çözümlemesine eşittir.

Tespit kaynakları:

1. `sanitizeRequest()` `@/shared/utils/inputSanitizer`'dan (pipeline'da başka yerlerde kullanılan paylaşılan dedektör seti).
2. Yerleşik `DEFAULT_GUARD_PATTERNS` (şu anda `system_override_inline` ve `markdown_system_block`, her ikisi de `high` ciddiyet).
3. Yapıcı seçenekler aracılığıyla geçirilen isteğe bağlı `customPatterns` (string, regex veya `{ name, pattern, severity }` kayıtları).

`mode === "block"` **ve** en az bir tespit ciddiyet eşiğini karşıladığında, `preCall` `{ block: true, message: "İstek reddedildi: şüpheli içerik tespit edildi" }` döner. `warn`/`log` modlarında koruma kaydeder ancak çağrıya izin verir. Paylaşılan yardımcı `evaluatePromptInjection()` da, kayıt defterine girmeden istemcilerin istemleri değerlendirmesi için dışa aktarılmıştır.

**Tarama sınırı (v3.8.20):** dedektör yalnızca birleştirilmiş istem metninin **ilk 16 KB**'sini inceler — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bayt) `src/shared/utils/inputSanitizer.ts`'de. Hem `detectInjection()` hem de `evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` çalıştırmadan önce desen döngüsüne girer. Enjeksiyon direktifleri bir girdinin üst kısmında yer alır, bu nedenle bu, çok yüzlerce KB yüklerde regex CPU/GC'yi sınırlarken tespiti zayıflatmaz (bkz. #3932, #4041).

### Credential Masker (`credentialMasker.ts`)

**Her iki** aşamada çalışır, varsayılan zincirde son sıradadır (öncelik `95`). Çıkış yükünden (mesaj içeriği, araç çağrı argümanları, araç sonuçları) **ve** sağlayıcı yanıtından iyi bilinen API anahtarı / gizli jeton desenlerini gizler, böylece bir isteme yapıştırılan bir kimlik bilgisi (veya bir araç sonucu tarafından geri yankılanan) yukarı akış sağlayıcısına veya istemciye sızmaz.

- **Sadece opt-in**, PII redaksiyonu ile aynı kural (Hard Rule #20-adjacent):
  `settings.credentialRedactionEnabled === true` **veya**
  `CREDENTIAL_REDACTION_ENABLED=true` olmadıkça devre dışıdır. Kapalıyken, koruma işlevi yoktur —
  asla engellemez ve asla yeniden yazmaz.
- `redactCredentials()` tam yük/yanıt ağacını dolaşır (`walkValue()`,
  prototip kirlenmesine karşı güvenli, döngü güvenli `WeakSet` aracılığıyla) ve eşleşmeleri
  `[REDACTED:<type>]` yer tutucusu ile değiştirir, yalnızca gerçekten
  değişen dalları klonlar.
- `CREDENTIAL_PATTERNS`, LLM sağlayıcı anahtarlarını (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokenlerini (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ödeme anahtarlarını (Stripe, Square), bulut
  anahtarlarını (AWS erişim anahtarı, Twilio, SendGrid, Mailgun), özel anahtarları / JWT'leri,
  kimlik bilgisi taşıyan bağlantı dizelerini (`mongodb://user:pass@...`, vb.) ve
  genel bir `Authorization`/`x-api-key`/`api-key`/`apikey` başlık-değer
  desenini kapsar. Başlık biçimindeki anahtarlar (`authorization`, `x-api-key`, `api-key`,
  `apikey`) yapısal olarak (sadece değer, `Bearer `/`Basic ` gibi şemalı ön ek korunarak)
  genel metin regex'i aracılığıyla değil, redakte edilir.
- Koruma asla engellemez; yalnızca yeniden yazar (`modifiedPayload` /
  `modifiedResponse`) ve notlar (`meta.credentialsRedacted`, `meta.count`).

Regresyon koruması: `tests/unit/credential-masker-guardrail.test.ts`.

## Temel Sözleşme (`base.ts`)

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
  block?: boolean; // true, zinciri kısa devre yapar (short-circuit)
  message?: string; // engelleme durumunda gösterilir
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // isteği yeniden yazmak için preCall tarafından döndürülür
  modifiedResponse?: TValue; // yanıtı yeniden yazmak için postCall tarafından döndürülür
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

Bir güvenlik koruması (guardrail), `void`, `{}` veya `{ block: false }` döndürerek "değişiklik yok" sinyali verir. Bir `modifiedPayload`/`modifiedResponse` döndürmek, sonraki güvenlik korumaları için zincir boyunca akan değerin yerini alır. `signal?: AbortSignal`, çağrıcı yaşam döngüsünü güvenlik korumalarına taşır. İstek iptali, kasıtlı bir hataya açık (fail-open) istisnadır: medya köprüleri, ham medyayı desteklemediği bilinen bir hedefe geri yüklemeden çalışmaları durdurur ve temizlik yapar.

## Kayıt Defteri (`registry.ts`)

Singleton `guardrailRegistry` şunları sunar:

- `register(guardrail)` — bir güvenlik koruması ekler (veya normalleştirilmiş ada göre değiştirir) ve artan `priority` değerine göre yeniden sıralar.
- `clear()` / `list()` — yönetimsel yardımcılar.
- `runPreCallHooks(payload, context)` — etkin güvenlik korumaları üzerinden yinelenir, yükü (`payload`) `modifiedPayload` aracılığıyla aktarır ve ilk `block: true` değerinde durur.
- `runPostCallHooks(response, context)` — yanıt tarafında aynı akış.
- `resetGuardrailsForTests({ registerDefaults })` — temiz test izolasyonu için durumu temizler ve isteğe bağlı olarak varsayılanları yeniden kaydeder.

Her iki çalıştırıcı da `results` alanının izleme için yararlı olan her güvenlik korumasına ait `blocked`, `skipped`, `modified`, `error` ve `meta` alanlarını içeren `GuardrailExecutionResult` kayıtlarından oluşan bir dizi olduğu `{ blocked, payload|response, results, guardrail?, message? }` nesnesini döndürür.

### İstek Başına Güvenlik Korumalarını Devre Dışı Bırakma

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })`, mevcut istek için atlanması gereken güvenlik koruması adlarının tekilleştirilmiş (de-duplicated) bir listesini toplar. Kaynaklar (tümü isteğe bağlı, tümü birleştirilir):

- `apiKeyInfo.disabledGuardrails`
- İstek gövdesi `disabledGuardrails` (en üst düzey)
- İstek gövdesi `metadata.disabledGuardrails`
- Header `x-omniroute-disabled-guardrails` (veya eski adıyla `x-disabled-guardrails`)

Değerler dizi veya virgülle ayrılmış bir dize olabilir; adlar küçük harfli kebab-case formatına normalleştirilir (`pii_masker` → `pii-masker`). Sonuç, `context.disabledGuardrails` aracılığıyla, eşleşen güvenlik korumalarını (`results` içinde `skipped: true`) atlayan kayıt defterine iletilir.

## Yürütme Sırası

`src/sse/handlers/chat.ts` ve `open-sse/handlers/chatCore.ts` üzerinden geçen her istek için:

1.  `resolveDisabledGuardrails(...)` API anahtarı, gövde ve başlıklardan atlama listesini oluşturur.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` koruyucuları artan öncelik sırasına göre çalıştırır:
    - Devre dışı bırakılan koruyucular `skipped` olarak kaydedilir.
    - Her koruyucunun `preCall`'u, `modifiedPayload` aracılığıyla yükü yeniden yazabilir.
    - İlk `block: true` zinciri kısa devre yapar ve işleyici bir koruyucu reddetme yanıtı döndürür.
3.  (Potansiyel olarak yeniden yazılmış) yük, birleşik yönlendirme ve yukarı akış dağıtımına akar.
4.  Yanıt birleştirildikten sonra, `guardrailRegistry.runPostCallHooks(...)` aynı zinciri yanıt üzerinde çalıştırır. Buradaki `block: true` yukarı akış yanıtını düşürür.

Hata fırlatan koruyucular `error: <message>` ile kaydedilir ve `logger.warn` aracılığıyla günlüğe yazılır, ancak zincir devam eder — tasarım gereği açık kalır.

## Yapılandırma

Yerleşik koruyucular tarafından okunan ortam değişkenleri:

| Değişken                              | Kullanan                  | Etki                                                                                                                 |
| :------------------------------------ | :------------------------ | :------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Algılamayı tamamen devre dışı bırakmak için `false` olarak ayarlayın.                                                |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Enjeksiyon politikası: `warn`, `block` veya `log`. Eski `redact` değeri enjeksiyon metnini yeniden yazmaz.           |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Enjeksiyon koruyucusu için mod; ayrıca ortam değişkenlerini **geçersiz kılan** bir DB özellik bayrağıdır (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | `MODE=block`'un reddettiği minimum ciddiyet: `high` (varsayılan), `medium` veya `low`.                               |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | `INPUT_SANITIZER_BLOCK_THRESHOLD` için eski takma ad.                                                                |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | `true` olduğunda, istek PII'si redakte edilir (enjeksiyon modundan bağımsız olarak).                                 |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Yanıt tarafı maskeleyici davranışını kontrol eder.                                                                   |

Modality Bridge koruyucuları, çalışma zamanı yapılandırmasını ortam değişkenlerinden değil, DB destekli ayarlar deposundan (`getSettings()`) okur. Vision'ın birincil anahtarları `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ve `modalityBridgeCacheMaxEntries` şeklindedir. Eski `visionBridge*` anahtarları yalnızca belgelenmiş tek döngülü okuma geri dönüşü olarak kabul edilir; kontrol paneli yazımları birincil anahtarları kullanır. Varsayılanlar ve geri dönüş çözümleyici `src/shared/constants/modalityBridgeDefaults.ts` içinde bulunur, eski sabitler ise `src/shared/constants/visionBridgeDefaults.ts` içinde korunur.

Ses, `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout` ve `modalityBridgeAudioMaxClips` ile paylaşılan `modalityBridgeCache*` ayarlarını kullanır. Sesin eski anahtar geri dönüşü yoktur çünkü bu anahtarlar Modality Bridge şemasıyla birlikte tanıtılmıştır.

Video, `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos` ve `modalityBridgeVideoTimeout` ile paylaşılan `modalityBridgeCache*` ayarlarını kullanır. Varsayılan olarak devre dışıdır çünkü FFmpeg/ffprobe isteğe bağlı operasyonel bağımlılıklardır ve kare altyazılandırma gecikme ve model maliyeti ekler.

## Özel Güvenlik Kalkanları (Custom Guardrails)

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

Adımlar:

1. `BaseGuardrail` sınıfından türeyen `src/lib/guardrails/myGuardrail.ts` dosyasını oluşturun.
2. `preCall` ve/or `postCall` metodlarını implement edin.
3. Ya içe aktarma (import) zamanında kaydedin (`registerDefaultGuardrails` içinden çağırarak) ya da
   çalışma zamanında (runtime) `guardrailRegistry.register(...)` metodunu çağırın — kayıt defteri (registry), aynı normalize edilmiş isme sahip
   önceki tüm güvenlik kalkanlarının yerini alır.
4. `tests/unit/` altında testler ekleyin (mevcut örnekler:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Test Etme

Bilinen bir durumdan başlamak için testler arasında `resetGuardrailsForTests()` kullanın.
Boş bir kayıt defteriyle başlamak ve yalnızca test edilen güvenlik kalkanlarını kaydetmek için
`{ registerDefaults: false }` parametresini geçirin. Vision Bridge bağımlılık enjeksiyonunu
(`deps.getSettings`, `deps.callVisionModel`) kabul eder; Audio Bridge ise ayarlar, yetenekler, STT model seçimi, kimlik bilgisi kontrolleri ve transkripsiyon için
eşdeğer dikişleri (seam) sunar. Bu sayede testler, veritabanı veya ağ erişimine gerek kalmadan her iki akışı da çalıştırabilir.

## Ayrıca Bakınız

- `src/lib/guardrails/` — implementasyon
- `src/shared/utils/inputSanitizer.ts` — prompt-injection ve PII maskeleme özelliklerini sağlayan
  ortak detektör
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge varsayılanları ve
  zorunlu köprü (forced-bridge) model listesi
- `src/shared/constants/modalityBridgeDefaults.ts` — ortak Vision/Audio çalışma zamanı (runtime) varsayılanları
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonal katman (circuit breaker, cooldowns)
- `docs/reference/ENVIRONMENT.md` — tam çevre değişkeni (env var) referansı

## Enjeksiyon Kalkanı Rota Kapsamı ve Kırmızı Takım (Red-Team) Testleri (Faz 8 · Blok D)

Enjeksiyon kalkanı (`createInjectionGuard` / `withInjectionGuard`), kullanıcı istemlerini (prompt) kabul eden tüm rotaları
kapsar. `INJECTION_GUARD_MODE` ayarına uyar (varsayılan `warn` = yalnızca loglar;
`block` = HTTP 400 `SECURITY_001` döndürür).

| Tür            | Rotalar                                                                                                                                              | Varsayılan mod |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Metin (mevcut) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Üretken        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Veri           | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Metin çıkarma (`extractMessageContents`), `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` alanlarını kapsar.

**Kırmızı takım (gece çalışması, `nightly-llm-security.yml`):** promptfoo, her rotanın `INJECTION_GUARD_MODE=block` altında OWASP-LLM derlemini (corpus) engellediğini doğrular; garak taramalar çalıştırır (gizli anahtar yoksa atlanır).
`moderations` tutarlılık için dahil edilmiştir — blok modundaki operatörler `resolveDisabledGuardrails`
aracılığıyla bunu muaf tutabilir.

Gece iş akışı (`.github/workflows/nightly-llm-security.yml`, cron + manuel
tetikleme) iki işe sahiptir:

- **`promptfoo-guard` (engelleme)** — `INJECTION_GUARD_MODE=block` ile
  `promptfoo eval -c promptfooconfig.yaml` komutunu çalıştırır. Her düşmanca senaryo (ör. "önceki tüm
  talimatları yoksay…", DAN tarzı jailbreak'ler), yanıtın `error.code === "SECURITY_001"` taşıdığını, yani kalkanın isteği gerçekten reddettiğini iddia eder.
- **`garak` (tavsiye niteliğinde)** — yerel bir OmniRoute örneğine (`http://localhost:20128/v1`) karşı
  garak `--probes promptinject,dan,leakreplay` komutunu çalıştırır. Sağlayıcı gizli anahtarına (`PROMPTFOO_PROVIDER_KEY`) bağlıdır; sorunsuz bir şekilde atlanır ve sonuna `|| true` eklenmiştir, böylece CI'ı (sürekli entegrasyon) başarısız kılmadan raporlama yapar.

Kalkan yardımcısının (`createInjectionGuard` / `withInjectionGuard`) kapsamı,
istem içeren her `/v1` rotasını kapsar; istem metni, `src/shared/utils/inputSanitizer.ts` içindeki
`extractMessageContents()` tarafından `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` alanlarından çekilir.
