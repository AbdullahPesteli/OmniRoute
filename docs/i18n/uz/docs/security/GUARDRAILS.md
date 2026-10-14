# Guardrails (Oʻzbekcha)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Haqiqatning asosiy manbasi:** `src/lib/guardrails/`
> **Soʻnggi yangilanish:** 2026-08-29 — v3.8.51 (Video Bridge transkriptining kelib chiqishi chaqiruvchi tomonidan eʼlon qilinadi,
> server tomonidan hali tasdiqlanmaydi — #11661 ga muvofiq aniqlashtirildi)

Guardrail’lar OmniRoute va yuqori oqim provayderlari oʻrtasidagi chegarada xavfsizlik, siyosat va kontent oʻzgartirishlarini taʼminlaydi. Har bir guardrail soʻrov yuklamalarini (`preCall`) va yuqori oqim javoblarini (`postCall`) tekshirishi (hamda ixtiyoriy ravishda rad etishi, oʻzgartirishi yoki izoh bilan belgilashi) mumkin.

Tizim **xatoda ochiq qoladi**: agar guardrail bajarilish vaqtida istisno chiqarsa, registr xatoni qayd etadi va soʻrovni muvaffaqiyatsiz yakunlash oʻrniga keyingi guardrail bilan davom etadi. Bloklash tasodif emas, balki aniq qarordir (`block: true`).

## Oʻrnatilgan Guardrails

Ro'yxat avtomatik ravishda import paytida ustuvorlik tartibida olti ta guardrailni yuklaydi
(qarang `registry.ts` → `registerDefaultGuardrails()`):

| Ustuvorlik | Nomi                | Bosqich(lar)   | Fayl                  |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Pastki ustuvorlik raqamlari **birinchi** bo'lib ishlaydi.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

**Ko'rish modellari** uchun mo'ljallangan tasvirli so'rovlarni ushlaydi va
butun so'rovni ko'rish qobiliyatiga ega modelga yo'naltiradi yoki tasvir
qismlarini konfiguratsiyalangan ko'rish modelidan olingan matn tavsiflari bilan
almashadi. Bu matnli ta'minotchilarga multimodal yuklamalarni shaffof ravishda
boshqarishga imkon beradi.

Jarayon:

1. Agar maqsad model allaqachon ko'rishni qo'llab-quvvatlasa, o'tkazib yuboring
   (agar u majburiy ko'prik ro'yxatida `isVisionBridgeForcedModel` ko'rsatilmagan bo'lsa).
2. Tasvir qismlarini `extractImageParts(messages)` orqali chiqarib oling
   (`visionBridgeHelpers.ts`), bu esa **birlashtirilgan media
   detektori** `detectMediaParts()` ga murojaat qiladi `open-sse/utils/mediaParts.ts` — bu
   birgalikdagi moslik filtriga bo'lingan yagona haqiqat manbai.
   Chiqarish `replaceImageParts` qaytarishi mumkin bo'lgan shakllarning yuqori darajadagi qismlariga
   ruxsat berilgan (chiqarish↔almashish shartnomasi): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, va Responses API `input_image`. Ichki zarbalar va
   faqat ko'rsatkich shakllari birgalikdagi filtr materialidir va hech qachon chiqarilmaydi.
   Agar hech narsa topilmasa, o'tkazib yuboring.
3. Ishga tushirish konfiguratsiyasini `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) orqali hal qiling: yangi `modalityBridge*`
   sozlamalari kalitlari g'alaba qozonadi; eski `visionBridge*` kalitlari **bir-marta
   qaytish** (orqaga qaytish oynasi) sifatida qoladi. Ko'prik o'chirilganida har qanday media
   o'zgarishidan oldin o'tkazib yuboring.
4. Rejim tanlovchisi (`modalityBridgeVisionMode`, quyidagi jadvalga qarang)
   yo'naltirish yoki tavsiflashni hal qiladi. Yo'naltirish `model` faqat
   almashtirilgan `modifiedPayload` bilan qaytadi, shuningdek meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Tavsif yo'li: tasvirlarni `maxImages` ga cheklang, vazifaga mos keladigan
   so'rovni tuzing, tavsif keshiga murojaat qiling, ko'rish modelini **paralel ravishda**
   (`Promise.allSettled`) chaqiring va `[Image N]: <tavsif>` matn qismlarini
   o'z o'rnida qo'shing. Tavsif muvaffaqiyatsiz bo'lsa, `null` qaytariladi va asl tasvir qismi
   **saqlanadi** (#4012) — faqat har bir tavsif muvaffaqiyatsiz bo'lgan birgalikdagi tavsif yo'lida,
   tasdiqlangan ko'rish qobiliyati bo'lmagan yuqoridagi model `(unavailable — no vision-capable provider connected)` stubini oladi (#8430).
6. `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) qaytaring.

#### Rejim tanlovchisi (`modalityBridgeVisionMode`)

| Rejim      | Standart | Xulq-atvor                                                                                                                                                                                                                                                                                                                      |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Eski g'oya, o'zgartirilmagan (#6640/#7204): non-combo/`auto/` modellari eng yaxshi ko'rish modeliga yo'naltiriladi, agar asl model allaqachon foydalanish mumkin bo'lgan credentialga ega bo'lsa (keyin tavsiflanadi); birgalikdagi maqsadlar har doim tavsiflanadi.                                                            |
| `describe` |          | Har doim tavsiflang — yo'naltirish bloki butunlay o'tkazib yuboriladi; foydalanuvchining tanlangan modeli har doim javob beradi.                                                                                                                                                                                                |
| `reroute`  |          | Majburiy yo'naltirish: credentialga ega modelni saqlash to'sig'i chetlab o'tiladi. Yo'naltirish-**maqsad** credential to'sig'i hali ham amal qiladi — agar foydalanish mumkin bo'lgan ko'rish maqsadi mavjud bo'lmasa, so'rov tavsifga o'tadi, shuning uchun xom tasvirlar hech qachon matnli backendga yetib bormaydi (#8430). |

Majburiy rejimlar **avval** avtomatik g'oya ishlashidan oldin qisqa yo'lni o'z ichiga oladi; `auto` xulq-atvori
pre-PR-1 guardrailga byte-jixoz jihatidan bir xil.

#### API-kaliti doirasi (`visionBridgeKeyScope.ts`)

Agar chaqiruvchining API kaliti `allowedConnections`, kvota havzalari
(`allowedQuotas`) yoki modellarga (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) cheklov qo'ysa, ko'prik faqat
yo'naltirish va tavsiflash modellari tanlaydi, kalit foydalanishi mumkin bo'lgan ulanishlarda. Tavsif chaqiruvi
shunda har doim `x-omniroute-self-loop-key-id` sarlavhasi bilan OmniRoute o'z-o'zini aylantirish orqali o'tadi, shuning uchun qabul qiluvchi chat so'rovi
o'sha kalitning ulanish va model siyosatini yana bir bor kuchaytiradi. `enforceApiKeyPolicy()`
faqat o'z-o'zini aylantirish bearer bilan birga ushbu sarlavhani hurmat qiladi, shuning uchun u faqat
kirishni toraytirishi mumkin, va hal qilinmaydigan id rad etiladi.

Agar kalit uchun hech qanday ko'rish modeli ruxsat etilmasa, tavsif yo'li chetga suriladi va
so'rov o'zgartirilmagan holda o'tadi, bu o'chirilgan guardrailga o'xshash xato ochiq xulq-atvor (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Kalitsiz so'rovlar va ushbu cheklovlarsiz kalitlar avvalgi kabi xuddi shunday xulq-atvorni ko'rsatadi.

#### Vazifaga mos tavsif so'rovi (`modalityBridgeVisionTaskAware`)

Default **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) oxirgi **foydalanuvchi xabari** matnini (500 ta belgigacha qisqartirilgan) asosiy tavsif so'roviga qo'shadi, tavsifni foydalanuvchi haqiqatan ham so'ragan narsaga yo'naltiradi (codex-vision-proxy naqshida) va ko'rinadigan matnni transkriptsiya qilish uchun ko'rish modelidan so'raydi. Flag o'chirilganda — yoki foydalanuvchi matni bo'lmaganda — asosiy so'rov o'zgarmasdan ishlatiladi.

Tavsif o'z-o'zini aylantirishning OpenAI bilan mos keladigan so'rovi (`callVisionModelSingle()` `visionBridgeHelpers.ts` ichida) har doim `image_url.detail: "high"` so'raydi — shartlarsiz, har bir chaqiruvchi/ta'minlovchi uchun, hech qanday mijoz signaliga bog'liq emas. Past tafsilotli namuna OCR aniqligini pasaytiradi, aynan ushbu tavsif so'rovi uchun, shuning uchun tavsif chaqiruvi har doim yuqori tafsilot so'raydi, asl kiruvchi so'rov qanday tafsilot darajasidan foydalanishidan qat'i nazar. Bu faqat ichki tavsif so'rov tanasiga ta'sir qiladi; bu OmniRoute chaqiruvchining o'z `image_url.detail` ni asosiy so'rovda qanday uzatishini o'zgartirmaydi — bu standart alohida qo'llaniladi va faqat aniqlangan OpenCode mijozlari uchun, `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) ichida. Tavsif o'z-o'zini aylantirishning Anthropic simli formatdagi bo'lagi `detail` maydoniga ega emas va ikkala standartdan ham ta'sirlanmaydi.

#### Tavsif chiqish cheklovi (`modalityBridgeVisionMaxChars`)

| Kalit                          | Standart | Oralig'i           |
| ------------------------------ | -------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`      | `0` yoki 100–50000 |

`0` (standart) **hech qanday cheklov** degan ma'noni anglatadi — `callVisionModel()` tomonidan qaytarilgan tavsif o'zgartirilmasdan o'tadi, mavjud xulq-atvorni saqlab qoladi. 100–50000 oralig'idagi har qanday qiymat tavsifni `…` qo'shimchasi bilan qisqartiradi, so'ngra `[Image N]: <description>` sifatida qayta birlashtiriladi (`VisionBridgeGuardrail.preCall()` `src/lib/guardrails/visionBridge.ts` ichida). Bu tafsilotga boy OCR vazifalari uchun ko'tarilishi kerak, bu erda pastki model to'liq transkriptsiyaga muhtoj; uni chatty ko'rish modellari bo'yicha token foydalanishini cheklash uchun pasaytirish kerak. Dashboard maydoni Vision tabining Advanced panelida joylashgan (`modality-bridge-max-chars` `ModalityBridgeVisionTab.tsx` ichida) va 1 dan 99 gacha bo'lgan har qanday qiymatni 100 pastki chegarasiga qadar cheklaydi, aniq `0` ni esa o'zgartirmaydi — `0` o'z-o'zidan haqiqiy Zod qiymati hisoblanadi (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), faqat "o'rnatilmagan" standart emas.

#### Tavsif kesh (`modalityBridge/bridgeCache.ts`)

Tavsif chiqishlari uchun xotirada LRU + TTL kesh, jarayon bo'ylab umumiy. Kalit = `sha256(imageRef + composedPrompt + configuredBridgeModel)` uzunlik-prefiks ramkasi bilan (maydon-chegarasi to'qnashuvlari yo'q). Model komponenti **so'zlashilgan** ko'prik modeli, haqiqatan ham javob bergan model emas — `callVisionModel` ichki ravishda orqaga qaytishi mumkin, va har bir urinish bo'yicha kalitlash keshni parchalaydi. Muvaffaqiyatsiz tavsiflar hech qachon keshda saqlanmaydi. Sozlamalar:

| Kalit                           | Standart | Oralig'i |
| ------------------------------- | -------- | -------- |
| `modalityBridgeCacheEnabled`    | `true`   | —        |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440   |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000  |

#### Uzoqdagi rasmni normallashtirish (o'z-o'zini tavsiflash/asosiy64 olish)

Ko'prik **uzoqdagi** rasmni o'zi olishganda — Anthropic tavsif o'z-o'zini chaqirish va claude-simli formatdagi asosiy64 konversiyasi (`ensureBase64ImagesForClaudeWire`), ikkalasi ham `fetchRemoteImageAsDataUri()` orqali `visionBridgeHelpers.ts` ichida — natijaviy ma'lumot URI `normalizeDataUri()` orqali o'tadi (`open-sse/utils/imageNormalize.ts`) va ko'rish-model so'roviga kiritiladi. Katta rasmlar **2048px uzun qirra** ga kamaytiriladi (OpenAI/Anthropic allaqachon server tomonida qo'llanadigan o'lcham chekloviga mos keladi), bu yuklash byte/kechikishni kamaytiradi, ko'rish modeli nima ko'rayotganini o'zgartirmasdan. O'lchash `sharp` dan foydalanadi, dinamik import orqali yuklanadi: uning mahalliy binarisi yuklanmasa, `normalizeDataUri()` **hech qachon xato bermaydi** — u asl byte'larni o'tkazishga qaytadi, shuning uchun tavsif/asosiy64 konversiya yo'li har doim ishlayveradi. Rasm bo'lmagan byte'lar (decode qilinadigan rasm qaytarmagan fetch) ham o'zgartirilmasdan o'tadi. Ushbu normallashtirish ko'prik o'z-o'zini chaqirish uchun olgan rasmlarga taalluqlidir — bu hech qachon chaqiruvchining xom o'tkazish yukiga qo'llanilmaydi, faqat opt-in mutatsiya printsipiga muvofiq (Qattiq Qoidalar #20).

#### Sozlamalar sxemasi + migratsiya

Yangi `modalityBridge*` kalitlari `updateSettingsSchema` da Zod tomonidan tasdiqlanadi (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCache*` uchligi va Audio Bridge tomonidan ishlatiladigan `modalityBridgeAudio*` guruhi. Migratsiya `141_modality_bridge_settings.sql` mavjud meros `visionBridge*` qiymatlarini mos yangi kalitlarga nusxalaydi (idempotent, hech qachon operator tomonidan o'rnatilgan `modalityBridge*` qiymatini o'zgartirmaydi); meros kalitlari bir chiqarish tsikli davomida o'qish uchun zaxira sifatida qabul qilinadi.

#### Shaffoflik sarlavhasi + statistikalar

Tavsifga aylantirilgan javoblar `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` ni olib yuradi (bu `buildModalityBridgeHeader()` orqali yaratiladi `modalityBridge/bridgeStats.ts` ichida, `withModalityBridgeHeader()` tomonidan muhrlanadi `src/sse/handlers/chatHelpers.ts` ichida). Qayta yo'naltirilgan so'rovlar **hech qanday** sarlavhaga ega emas — yuklama o'zgartirilmagan va model almashinuvi javob tanasining `model` maydonida allaqachon ko'rinadi.

`GET /api/modality-bridge/stats` (boshqaruv autentifikatsiyasi, `GET /api/settings` bilan bir xil darajada) xotirada har bir modalitiyaga oid hisoblagichlarni qaytaradi `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` `vision`, `audio`, va `video` uchun. `averageLatencyMs` `latencySamples` ni, barcha urinishlarni emas, denominator sifatida ishlatadi; vaqt belgilamagan operatsiya nol millisekundli namuna yaratmaydi. `bridged` muvaffaqiyatli konversiyalar uchun orqaga mos keluvchi alias sifatida qoladi; muvaffaqiyatsiz urinishlar uni oshirmaydi. Hisoblagichlar jarayon qayta ishga tushirilganda dizayn bo'yicha qayta tiklanadi (telemetriya, hisob-kitob emas).

#### Dashboard konfiguratsiyasi

Maxsus dashboard sahifasi `/dashboard/settings/modality-bridge`. Uning URL-manzilga ega `Vision`, `Audio`, va `Video` tablari `tab` qiymatini o'zgartirganda so'rov parametrlarini saqlaydi. Vision tabi imkoniyatni, rejimni, model tanlovini (avtomatik standartni o'z ichiga olgan holda), vazifaga oid so'rovlarni, ilg'or vaqt/tasvir/ta'rif uzunligi/kesh chegaralarini, ish vaqti hisoblagichlarini va himoyalangan namuna so'rovini ochib beradi. Audio tabi ham jonli: u imkoniyatni, faqat STT modeli tanlovini Auto, vaqt/max-clip chegaralarini, audio hisoblagichlarini va `input_audio` namuna testini ochib beradi. Video tabi funksional: u FFmpeg/ffprobe ish vaqti holatini hisobot qiladi — to'rt xil aniq UI holatlaridan biri (`unknown` probe uchayotganda yoki tugallana olmasa, `restricted` non-loopback dashboard hostida probe mijoz tomonidan o'tkazib yuborilganda, `unavailable` probe o'tkazilgandan so'ng va yo'qolganligi tasdiqlanganda, yoki `available` FFmpeg/ffprobe versiyalari bilan) — imkoniyat/model/frame/video/vaqt chegaralarini saqlaydi, model tanlovini ko'rish qobiliyatiga ega modellarga filtrlash qiladi va video hisoblagichlarini ochib beradi.

AI sozlamalari ostidagi eski Vision Bridge kartasi yangi sahifaga moslik havolasi; u endi shaklning ikkinchi nusxasiga ega emas. Media Providers ham Image-to-Text va Speech-to-Text ish jarayonlarini tegishli Modality Bridge tablariga bog'laydi, mavjud Speech-to-Text o'yin maydonini olib tashlamasdan.

**O'z-o'zini aylantirishni o'tkazib yuborish:** tavsif chaqiruvi OmniRoute'ning o'z `/v1` o'z-o'zini aylantirish (standart bo'lmagan provayder modeli) orqali o'tganda, sub-so'rov `x-omniroute-admission-bypass: internal` yuboradi va hal qilingan o'z-o'zini aylantirish credential bilan autentifikatsiyalanadi — mahalliy `sk_omniroute` sentinel mahalliy rejimda, yoki operator tomonidan sozlangan `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env kaliti (#1350) shunday qilib `REQUIRE_API_KEY=true` joylashuvlari tavsif chaqiruvini bajarishi mumkin. O'tkazib yuborish faqat ushbu aniq credential uchun hurmat qilinadi, shuning uchun tashqi mijozlar ushbu sarlavhani foydalanib, qabul qilishni o'tkazib yubora olmaydi.

Merosi defaultlar `src/shared/constants/visionBridgeDefaults.ts` da yashaydi; yangi rejim/vazifaga oid/kesh defaultlar va sozlamalar yechuvchisi `src/shared/constants/modalityBridgeDefaults.ts` da yashaydi. Himoya devori `deps` konstruktor variantini ochib beradi, shunda sinovlar soxta `getSettings` va `callVisionModel` amalga oshirishlarini kiritishi mumkin.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Audio o'z ichiga olgan chat so'rovlarini maqsadga yetkazmasdan oldin tutadi, bu maqsad audio kirishni qabul qilishi ma'lum emas. U hech qachon chat so'rovini qayta yo'naltirmaydi: audio qismlari mavjud OpenAI bilan mos keladigan multipart endpoint orqali transkriptsiyalanadi va tanlangan chat modeli matnli transkriptlar bilan davom etadi.

Jarayon:

1. `supportsAudio` ni `getResolvedModelCapabilities()` orqali hal qiling. Aniq provayder-reestri metadata g'alaba qozonadi, keyin statik model metadata, keyin sinxronlashtirilgan `modalities_input`. `audio` bo'lmagan e'lon qilingan kirish ro'yxati `false`; hech qanday qobiliyat dalili `null` qoladi. Ikkala `false` va `null` konservativ ko'prikni faollashtiradi, `true` esa uni o'tkazib yuboradi.
2. `modalityBridgeAudio*` sozlamalarini hal qiling va har bir xabardan bo'linadigan yuqori darajadagi audio qismlarini `detectMediaParts()` detektori orqali oling. Qo'llab-quvvatlanadigan sim shakllari OpenAI `input_audio`, `audio_url`, va `source.media_type: "audio/*"` dir. Ichki audio yo'naltirish uchun aniqlanadi, lekin bo'linish yo'li orqali olib tashlanmaydi. Ish `modalityBridgeAudioMaxClips` bilan cheklanadi; keyingi qismlar o'zgarmaydi.
3. Sozlangan `provider/model` ni hurmat qiling, yoki `selectAudioBridgeModel()` ni `AUDIO_TRANSCRIPTION_PROVIDERS` ni barqaror katalog tartibida yuritishga ruxsat bering va foydalanish mumkin bo'lgan faol provayder credential bilan birinchi modelni tanlang.
4. `callAudioTranscription()` base64/data-URI audio ni multipart `file` ga aylantiradi, yoki jamoatga faqat chiqish himoyasi bilan DNS pin bilan va 25 MB chegarasi bilan masofaviy `audio_url` ni yuklab oladi. Keyin faylni va tanlangan modelni mahalliy `/v1/audio/transcriptions` o'z-o'zini aylantirishga POST qiladi, `resolveSelfLoopBearer()` bilan autentifikatsiyalanadi. Mavjud transkriptsiya yo'li normal credential qidiruvini, sovuq/qayta cheklashni va provayderni tarqatishni amalga oshiradi.
5. Muvaffaqiyatli chaqiruvlar o'z qismlarini `[Audio N]: <transcript>` bilan almashtiradi. Chaqaruvlar `Promise.allSettled` bilan ishlaydi: alohida muvaffaqiyatsizlik asl audio qismini saqlaydi (#4012 shart). Agar har bir chaqiruv muvaffaqiyatsiz bo'lsa va maqsad `supportsAudio === false` ekanligi isbotlansa, qismlar `[Audio N]: (mavjud emas — hech qanday STT provayderi ulanishi yo'q)` ga aylanadi (#8430 shart). Ma'lum bo'lmagan maqsad (`null`) uchun barcha muvaffaqiyatsizlik natijasi o'zgarmaydi. Foydalanish mumkin bo'lmagan STT credentialga ega bo'lgan faqat matnli maqsad shunga o'xshash aniq stubni oladi, tarmoq chaqiruvini amalga oshirmasdan.

Muvaffaqiyatli transkriptlar jarayon bo'yicha Modality Bridge LRU/TTL keshidan foydalanadi. Kalit audio havolasini, barqaror `audio-transcription` operatsiya yorlig'ini va tanlangan STT modelini birlashtiradi; muvaffaqiyatsizliklar hech qachon keshda saqlanmaydi. Audio urinishlari umumiy `bridged`, `cacheHits`, `failures`, va `lastUsedAt` hisoblagichlarini yangilaydi. O'zgartirilgan javoblar `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` ni olib yuradi; o'zgarmagan so'rovlar Audio Bridge segmentini olmaydi.

Ish vaqti sozlamalari DB asosida va Zod tomonidan tasdiqlangan:

| Kalit                         | Standart | Oralig           |
| ----------------------------- | -------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                |
| `modalityBridgeAudioModel`    | `""`     | Auto yoki STT ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10             |

Ushbu umumiy kesh `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, va `modalityBridgeCacheMaxEntries` orqali boshqariladi.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Chat Completions `messages` va Responses API `input` ichidagi yuqori darajadagi video qismlarini maqsadga yetkazishdan oldin tutib oladi, agar maqsad tanilgan mahalliy video qo'llab-quvvatlashga ega bo'lmasa. Qo'llab-quvvatlanadigan shakllar `input_video`, `video_url`, `video_source`, HTTPS URL'lari,
va `data:video/*;base64,...` ma'lumot URI'laridir. Matndagi oddiy fayl nomlari video sifatida qabul qilinmaydi.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) so'rovni o'tkazish, imkoniyat/siyosat tekshiruvi, har bir so'rov bo'yicha yig'ish va javob yuklamasini boshqaradi. Har bir video uchun ish — sotib olish, to'liq natija keshini, ramka ketma-ketligini tasvirlash (bu har qanday chaqiruvchi tomonidan e'lon qilingan audio transkripti bilan birlashtiriladi), va har bir urinish uchun metrikalar/to'xtatish/tozalash — `processVideoPart` ichida yashiringan, `videoBridgePipeline.ts`da, `preCall`ning aylanishi ichida har bir video qismi uchun bir marta chaqiriladi. Ushbu modul shuningdek, aniq port chegaralarini `VideoMediaBrokerPort` (baytlarni olish va namuna olingan ramkalarni chiqarish), `VideoAudioTranscriptionPort` (chaqiruvchi tomonidan e'lon qilingan audio transkripti bilan namuna olingan sarlavhalarni birlashtirish), va `VideoDrilldownPort` (meros bo'lib qolgan xom-ma'lumot shakli) deb belgilaydi. Ishlab chiqarish STT va ramka saqlash tasvirlovchi port atrofida `createVideoSttAdapter` va `createVideoDrilldownAdapter` orqali tashkil etiladi; ikkinchisi umumiy opak-handle hayot tsiklidan foydalanadi.

Jamoat `/v1` so'rov yo'li hech qachon subprocess import qilmaydi yoki chaqirmaydi. Uzoqdan video 50 MiB chegarasi ostida yuklanadi; inline base64 videolar har bir video uchun 36 MiB dekodlangan konservativ chegaraga ega, shuning uchun model/xabarlar/qo'shimcha qoplama jamoat JSON so'rov qabul qilish cheklovida 50 MiB ichida qolishi mumkin. Inline uzunlik va dekodlangan o'lchovlar ajratishdan oldin tekshiriladi. HTTPS dastlabki uzoq URL va har bir yo'naltirishda talab qilinadi, mavjud jamoat faqat chiqish himoyasi bilan DNS pinlashdan foydalanadi. Baytlar keyin aniq ichki `POST /api/modality-bridge/video/extract` broker chegarasini kesib o'tadi. Ushbu yo'l `LOCAL_ONLY` va `SPAWN_CAPABLE`, faqat bir jarayon uchun autentifikatsiyalangan, ishonchli-loopback so'rovini qabul qiladi va hech qachon URL, fayl tizimi yo'li, bajariladigan fayl yoki argumentlar ro'yxatini qabul qilmaydi. API tanasi hajmi quvuri va handlerning inkremental tanasi o'qiydigan mustaqil ravishda 50 MiB broker kirish chegarasini amalga oshiradi. Uning chegaralangan navbati bir vaqtning o'zida bitta ekstraktsiyani bajaradi, to'rt kutayotgan ishni ruxsat beradi va kutayotgan kirishni 100 MiB bilan cheklaydi.

Broker ichida `ffprobe` xususiy mahalliy faylni o'qiydi; belgilangan formatlar ro'yxati pleylayt va manifest formatlarini istisno qiladi. Ruxsat etilgan MOV-oila konteynerlari uchun tashqi MOV ma'lumot havolalari standart bo'yicha o'chirilgan va belgilangan buyruq ularga qo'shilmaydi. `ffprobe` va `ffmpeg` faqat `file` protokoli ro'yxatidan foydalanadi, bitta ip, belgilangan argumentlar massivlari, hech qanday shell va `PATH` dan hal qilinadigan bajariladigan fayllar bilan ishlaydi. Qo'shilgan-rasm qoplama oqimlari o'ynaladigan nomzodlar emas. Barcha o'ynaladigan oqimlar chegaralarni qondirishi kerak va aniq standart oqim eng past indeksga qarab afzal ko'riladi. Videolar 600 soniyaga, o'lchov bo'yicha 8,192 pikselga va 33,554,432 manba pikselga cheklangan. FFmpeg 1–16 o'rtacha JPEG ramkalarini namuna oladi, uzun chetni eng ko'pi bilan 1,024 pikselga kamaytiradi, kichik kirishlarni kattalashtirmasdan va hech qachon URL olmaydi. Namuna olish standart bo'yicha `uniform` hisoblanadi. Ixtiyoriy `scene_aware` va tajribaviy `segment_aware` siyosatlari allaqachon tasdiqlangan mahalliy oqim ustida bir qo'shimcha belgilangan FFmpeg o'tkazadi, chegaralangan `showinfo` sahna vaqt belgilari tanlaydi va detektor muvaffaqiyatsiz bo'lganda, vaqt o'tishi, noto'g'ri chiqish yoki bo'sh nomzodlar to'plami bo'lsa, aniqlik bilan bir xil bir xil o'rtacha nuqtalarga qaytadi. Segmentga oid rejim tasdiqlangan sahna oralig'iga nisbatan o'rtacha namuna ajratadi; segmentga oid dalillar va qaytish xulq-atvori quyida batafsil bayon etilgan. Har bir siyosatda tanlovdan keyin qattiq 16-ramka chegarasi qo'llaniladi. Sahna bilan bog'liq so'rovda faqat bitta ramka byudjeti bo'lsa, u faol to'liq video yoki fokus oynasining bir xil o'rtacha nuqtasidan foydalanadi va `policyEffective: uniform` deb hisobot beradi: bitta tanlangan sahna ramkasi vaqtning ikkala oxirini saqlay olmaydi. Chaqiruvchi ixtiyoriy ravishda cheklangan fokus oynasini (`start`/`end` soniyalari) taqdim etishi mumkin; chegaralar media davomiyligiga qattiq bog'lanadi, teskari yoki cheksiz oynalar rad etiladi va barcha namuna olish siyosatlari faqat normallashtirilgan oralig'ida amalga oshiriladi. Natijaviy oynalar namuna olish metadata va ishonchsiz tavsif prefiksida kiritiladi, shunda pastki modellari to'liq vaqt chizig'idan fokuslangan parchani ajratishi mumkin.

Semantik sarlavha fokusini alohida, aniq sozlashdir. Standart `full` tahlil rejimi mavjud ramka so'rovini saqlaydi va hech qachon so'rov matnini sarlavha modeliga o'tkazmaydi. `focused` rejimida, ko'prik faqat eng so'nggi bo'sh bo'lmagan foydalanuvchi tomonidan yozilgan `text`/`input_text` ni bir xil Chat yoki Responses konteyneridan o'qiydi, uni NFC ga normallashtiradi, boshqaruv belgilarini va bo'sh joylarni qisqartiradi va 500 Unicode kod nuqtasi bilan cheklaydi. Bo'sh natija aniq `full` so'roviga qaytadi. Foydalanishga yaroqli maslahat JSON formatida alohida ishonchsiz-foydalanuvchi-kontekst blokida seriyalanadi va faqat ko'rinadigan tafsilotlarni ustun qo'yishi mumkin; u media ichida ko'rinadigan yoki eshitiladigan ko'rsatmalarga amal qilishga qarshi alohida ogohlantirishni bekor qila olmaydi. Matnli fokus hech qachon `start`/`end` ni aniqlamaydi yoki vaqtni namuna oluvchi o'zgartirmaydi.

#### FU-07 struktural segment dalillari

`segment_aware` allaqachon tasdiqlangan mahalliy video oqimida bir marta cheklangan oldindan tahlil o‘tkazadi. Qattiq filtr zanjiri avval 320 piksel kenglikka qadar o‘lchamni o‘zgartiradi, sahna o‘zgarishlarini va muzlatilgan intervallarni aniqlaydi, so‘ngra 1 kadr sekundda noaniqlik, o‘rtacha luma va fazoviy/vaqt ma'lumotlarini namuna oladi. O‘tkazish 600 struktural namuna bilan cheklangan, bitta FFmpeg/filter ipi, faqat `file` protokoli va konteyner ruxsatnomalari, 1 MiB jarayon-natija chegarasi va brokerning umumiy bekor qilish/muddatida eng ko‘pi bilan 30 soniya ichida cheklangan. U hech qachon buyruq, filtr, yo‘l yoki URL ni so‘rovdan qabul qilmaydi.

Struktural qiymatlar deterministik namuna olish dalillari bo‘lib, semantik video tushunish emas. Ular mavzular, harakatlar, yozuvlar, nutq yoki foydalanuvchi niyatini anglatmaydi. Sahna va muzlatish chegaralari segmentlarni hosil qiladi; muzlatish qamrovi, noaniqlik, ekspozitsiya, fazoviy tafsilot va vaqt o‘zgarishi mavjud 1–16 kadr byudjetining qanday taqsimlanishiga ta'sir qiladi. To‘liq muzlatilgan segment bitta kadr bilan cheklangan, non-muzlatilgan segmentlar esa qolgan byudjet uchun raqobatlashadi. Chegaralar kadrlarni ortiqcha bo‘lsa, bir xil vaqt chizig‘i qamrovi saqlanadi, shuning uchun tezkor erta kesmalar uzoq davom etadigan segmentni yashira olmaydi. Muzlatish chegarasining 1-soniyali tahlil aniqlik ichidagi sahna chegaralari birlashtiriladi.

Yo‘q filtrlar, noto‘g‘ri/bo‘sh dalillar, detektor xatosi yoki cheklangan oldindan tahlil vaqtining tugashi aniq bir xil o‘rta siyosatga ochiq qoladi. Chaqarish bekor qilish yoki broker muddati ochiq qolmaydi: u uchayotgan subprocessni tugatadi, keyingi kadrlarni olishni oldini oladi va xususiy vaqtinchalik daraxt `finally` da olib tashlanadi.

`scripts/perf/video-bridge-fu07-eval.ts` post-dedup yozuv chaqiruvlaridan tejash, zich harakat byudjetini taqsimlash, noaniqlik/ekspozitsiya/SI-TI dalillarini, uzoq quyruqli tez kesmalarni va bosqichma-bosqich o‘chirish noto‘g‘ri ijobiy natijalarini yaratadi. U oldindan tahlil devor vaqtini yozadi va `/usr/bin/time` mavjud bo‘lsa, bolalar CPU va eng yuqori RSS ni qayd etadi. Uning sifat tekshiruvlari faqat struktural orakllardir. Haqiqiy yozuv-modeli sifati `HOLD` da qoladi, chunki bu tizimda ruxsat berilgan nuqtai nazar yoki muzlatilgan hakam yo‘q. Moliyaviy tejashlar ham `HOLD` da qoladi, agar `--caption-cost-per-call-usd` aniq ijobiy har bir chaqiruv bahosini taqdim etmasa; skript hech qachon natijalarni yasamaydi.

Har bir kadr 4 MiB bilan cheklangan, barcha xom kadrlari birgalikda 23 MiB ga, va seriyalangan broker javobi 32 MiB ga cheklangan. Xususiy vaqtinchalik katalog `finally` da olib tashlanadi. OmniRoute FFmpeg ni o‘z ichiga olmaydi va maxsus bajariladigan yo‘lni qabul qilmaydi. Yozuvdan oldin, ko‘prik ehtiyotkor vizual deduplication o‘tkazadi: har bir JPEG 16×16 kulrang buferga kamaytiriladi va faqat oxirgi saqlangan kadr bilan solishtiriladi. Bir kadrdan yuqori so‘ralgan yozuv byudjeti uchun, ekstraksiya ikki barobar byudjetga qadar cheklangan nomzodlar havzasini taqdim etadi va hech qachon 16 kadrdan ko‘proq bo‘lmaydi. So‘ralgan cheklov faqat deduplicationdan keyin qo‘llaniladi, birinchi va oxirgi tanlangan nomzodlar oxirgi ingichka paytida saqlanadi, agar byudjet kamida ikki bo‘lsa. Versiyalangan `grayscale-16x16-mean-cells-v2` siyosati o‘rtacha luma delta va normalizatsiyalangan delta kamida 0.05 bo‘lgan miniaturalar hujayralarining nisbati ichidan kattasini ishlatadi. Takroriy chegarasi 0.04 doimiy bo‘lib, bashorat qilish uchun tanlangan, ish vaqtida sozlash sifatida ochiq emas. Ushbu ikkilamchi yuqori-kontrast signal kichik harakat va ko‘rinadigan matn o‘zgarishlarini saqlaydi, bu esa faqat o‘rtacha solishtirish orqali yashirilishi mumkin. Solishtiruvchi yoki dekoder xatolari ochiq qoladi va qamrovni saqlaydi. Chiqish metama'lumotlari chiqarilgan nomzodlarni, muvaffaqiyatli ishlatilgan kadrlari va vizual takroriylarni ajratadi.

Aniq belgilangan video qismi vaqt belgilangan kontakt varaqasini so‘rash mumkin. Ko‘prik eng ko‘pi bilan 4 ustunli, 16 kadrli JPEG panjarasini quradi. Har bir 512-piksel hujayra o‘z manba vaqtini yuqori-kontrast pastki bandga o‘tkazadi, bir xil vaqtlar esa pastki bog‘lanish va audit uchun matnli metama'lumotlarda qoladi. To‘liq JPEG 32 MiB bilan cheklangan. Agar `sharp` panjarani dekodlash yoki tuzish imkoniga ega bo‘lmasa, ko‘prik individual JPEG kadrlarga qaytadi; mijozning bekor qilishi hali ham varaqa operatsiyasi orqali tarqaladi.

Taqdimot dalillari sun'iy tarkib mikrobenchmarkidan alohida. `scripts/perf/video-bridge-contact-sheet-eval.ts` haqiqiy OpenAI bilan mos keladigan ko‘rish modellari uchun sxema-versiyalangan A/B tizimini belgilaydi. U ta'minotchilar tomonidan hisobot qilingan tokenlar, oxirgi natijaga qadar devor kechikishi (varaqa tarkibi kiritilgan), model-chaqiruvlar soni va manifest tomonidan belgilangan faktlarni saqlashni o‘lchaydi. Xom model javoblari hisobotga yozilmaydi; faqat SHA-256 xulosalari va mos keluvchi fakt IDlari saqlanadi. Tizim hech qanday tarmoq yoki pullik model chaqiruvini amalga oshirmaydi, agar `--execute-real` o‘tkazilsa va `--model`, `OMNIROUTE_BASE_URL`, va `OMNIROUTE_API_KEY` sozlangan bo‘lsa. Ushbu aniq haqiqiy ish bo‘lmasa, uning mashinaga o‘qiladigan hukmi `HOLD` da qoladi; sun'iy yuk/chaqiruv-soni o‘lchovlari faqat taqdimot dalillari emas.

Alohida `scripts/perf/video-bridge-promotion-eval.ts` FU-07 yoki FU-09 kuzatishlarini iste'mol qiladi. Taqdimot qabul qilish barcha sakkiz sun'iy senariy turlarini va tozalangan haqiqiy klipni, har bir rol va holat uchun kamida uch marta o‘lchangan takrorlarni, barcha o‘n ta'kidlangan metrikalarni, muzlatilgan media/so‘rov/kutilgan-fakt/sozlamalar xulosalarini, noyob kuzatish IDlarini va tasdiqlangan A/B tartibini talab qiladi. Ijro qog‘ozida korpus xulosasi, aniq nomzod SHA va model versiyasi bog‘lanadi. Yo‘q yoki noto‘g‘ri o‘lchovlar `HOLD` da qoladi, shu jumladan CPU 30 s dan yuqori, eng yuqori RSS 512 MiB dan yuqori yoki oldindan tahlil 30 s dan yuqori. Bu dalil-qabul qilish chegaralari, yangi ish vaqtida RSSni majburiy qilish kafolati emas.

FU-07 kamida 98% sifatni saqlashni va p95 kechikishini bazadan 1.2x dan oshmasligini talab qiladi, shuningdek, teng o‘rtacha sarlavha chaqiruvlarida 0.05 mutlaq holatga muvofiq o‘rtacha eslatma yaxshilanishi yoki kamida 10% kam o‘rtacha post-dedup sarlavha chaqiruvlari talab qilinadi. FU-09 kamida 0.85 sifat, 95% saqlash, 20% p95 kechikish kamaytirish va 10% token kamaytirishni talab qiladi. Muqaddas-fakt yo‘qotilishi, qo‘shish muvofiqligi yoki foydalanishning yo‘qligi ko‘tarilishiga to‘sqinlik qiladi. Bir bajarish hech narsani ko‘tarolmaydi: `--previous-report` bir xil siyosat/model tahriri/kandidati/korpusning ikki alohida, bir-biriga to‘g‘ri kelmaydigan, ketma-ket mos bajarilishini tasdiqlaydi. Namuna tajribasi aloqa varaqasi tajribasini tasdiqlay olmaydi.

Kollektorlar javoblarni xotirada baholashlari va `responseDigest` bilan birga metrikalar va kuzatish bog‘lanmalarini saqlashlari kerak, hech qachon javob matnini emas. Iste'molchi ham meros bo‘lib qolgan xom kuzatishlarni o‘qiydi, lekin hech qachon o‘sha matnni hisobotlariga nusxa ko‘chirmaydi. Har bir kuzatish uchun `responseDigest` yoki `rawResponseText` dan faqat bittasi qabul qilinadi. Versiyalangan ruxsatnomalar bo‘sh qoladi va o‘zgarmas `hold` standartiga ega. Mos keluvchi kirish o‘z dalil manbasini, siyosatini, model tahririni, aniq kandidat SHA, manifest xulosa va ikki alohida bajarish IDlarini talab qiladi; to‘qnash keluvchi kontekstlar rad etiladi. Ushbu metama'lumotlar audit shartnomasi bo‘lib, havola qilingan fayl haqiqiy o‘lchovlarni o‘z ichiga olishini isbotlamaydi. Har qanday kirishni qo‘shishdan oldin haqiqiy kvitansiyalarni ko‘rib chiqing. Boshqaruv statistikasi nuqtasi va Video boshqaruv paneli ehtiyotkorlik bilan tayyorlikni ko‘rsatadi. Konfiguratsiya qilingan model taxallusi o‘zining tahririni yoki ishga tushirilgan kandidat SHA ni o‘rnatmaydi, shuning uchun joriy boshqaruv paneli boshqa bajarish kontekstidan mos kelishni qayta ishlatish o‘rniga `HOLD` ni hisobot qiladi. Aniq tajriba tanlovi ko‘tarilishdan alohida; hech qanday standart avtomatik ravishda o‘zgartirilmaydi.

Chaqiruvchilar allaqachon moslashtirilgan matnga ega bo‘lganda qo‘shimcha `transcript.cues` massivini qo‘shishi mumkin. Har bir cue `text`, o‘lchangan davomiylik ichida cheklangan `start`/`end` intervalini va oq ro‘yxatga olingan `source` (`client`, `embedded`, yoki `audio-bridge`) ni o‘z ichiga olishi kerak; `confidence` standart bo‘yicha `1` ga teng va `0` va `1` orasida qolishi kerak. Aniq takroriy cue'lar birlashtiriladi. OmniRoute hech qachon ushbu metama'lumotlardan transkriptsiyani boshlamaydi: tasdiqlangan cue'lar manba, ishonch va interval bilan tavsiflangan natijaga nusxa ko‘chiriladi va ramka sarlavhalari bilan birga ishonchsiz kuzatishlar sifatida ko‘rsatiladi. Noto‘g‘ri, chegaradan tashqari yoki kelib chiqishi bo‘lmagan matn sarlavha oqimiga aralashmasdan rad etiladi. Ikkala so‘rov-tana transkript kanallari taqdim etilgan kelib chiqishni `client` ga normallashtiradi, o‘z-o‘zini tasdiqlagan `embedded` yoki `audio-bridge` yorliqlarini o‘z ichiga oladi. Faqat serverga tegishli adapter ushbu ishonchli yorliqlarni kod faqat `trustedSource` argumenti orqali belgilashi mumkin; so‘rov JSON maydoni o‘sha argumentga yetib bormaydi. Transkript matni ishonchsiz media-asoslangan kontent bo‘lib, kelib chiqishidan qat'i nazar, hech qachon avtorizatsiyani belgilashi kerak emas.

Murakkab chaqiruvchi bir xil video uchun `audioTranscript` trekini taqdim etishi mumkin; bu mijoz tomonidan taqdim etilgan matn sifatida qaraladi, server transkriptsiyasining isboti emas. Bir vaqt ichida vizual va audio kuzatishlarni bir muddat va abort signalida olib boradi, ularni umumiy vaqt chizig‘ida tartiblaydi, aniq takroriylarni birlashtiradi va faqat bitta tomon muvaffaqiyat qozonganida qisman natijani hisobot qiladi. Noto‘g‘ri `audioTranscript` qisman natijaga pasayadi — vizual tavsif saqlanadi va audio bo‘limi sanitizatsiya qilingan muvaffaqiyatsizlik kodini yozadi — butun videoni muvaffaqiyatsiz qoldirish o‘rniga. Har bir bo‘limning mavjudligi, qisman bayroq va sanitizatsiya qilingan muvaffaqiyatsizlik kodlari tavsiflangan natijada, himoya metama'lumotlarida (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), natija-kesh metama'lumotlarida va ko‘prik birlashma hisoblagichlarida saqlanadi. Standart Video Bridge yo‘li nutqdan matnga o‘tishni chaqirmaydi yoki ikkinchi media nusxasini yuklamaydi; ushbu aniq trek bo‘lmasa, u faqat video bo‘lib qoladi.

**Transkriptni saqlash (#12150 P1).** Bu Video Bridge (o‘zi opt-in) transkript cue ni ko‘rsatganda avtomatik ravishda qo‘llaniladi — alohida saqlash bayrog‘i yo‘q. So‘rov har qanday transkript cue ni (chaqiruvchi tomonidan e'lon qilingan `transcript` yoki birlashtirilgan `audioTranscript`) ko‘rsatganda, himoya bayrog‘i uni `videoBridgeObserved` deb belgilaydi va video tavsifining qizil rangda ko‘rsatilgan soyasini ishlab chiqaradi — har bir cue'ning erkin matn tanasi `[redacted-video-transcript]` bilan almashtiriladi, bu esa tuzilgan cue maydoni matn yig‘ilishi oldidan almashtirilishi orqali yaratiladi (hech qachon tekis matnni tahlil qilish orqali emas, shuning uchun hech qanday cue mazmuni — raqobatbardosh yoki oddiy, `]` ni o‘z ichiga olgan tanalar kabi, masalan, `[inaudible]`/`[music]` — omon qolmaydi). Saqlangan chaqiruv-log so‘rov tanasi har bir video-asoslangan matn qismini o‘sha qizil rangda ko‘rsatilgan soyaga almashtiradi, mazmun tengligi bilan mos keladi; `fullText` ankridan tugallangan oldingi chaqiruv himoya yukidan qayta o‘qiladi, shuning uchun moslik keyinchalik zanjir himoya bayroqlari (PII va credential maskerlar, ustuvorlik 10/95) tavsif matnini joyida qayta yozganda ham muvaffaqiyatli bo‘ladi va tizim-yo‘riq/uzatish/xotira qo‘shilishi xabarlar massivini qayta shakllantiradi. Modelga yuborilgan tanasi o‘zgarmaydi. Kuzatilgan so‘rov ham hech qanday doimiy Xotira (so‘rov va javobdan olingan ekstraktsiya ikkalasi ham o‘tkaziladi) to‘ldirmaydi, shuning uchun modelning o‘z javobi transkript matnini Xotiraga aks ettira olmaydi.

**Xom video maydonlari (#12430).** Ko‘prik yoqilganda va mahalliy video qo‘llab-quvvatlash noma'lum yoki yo‘q bo‘lganda, belgilangan `transcript`/`audioTranscript` maydonlari ham `videoBridgeObserved` ni faollashtiradi, tavsif muvaffaqiyatsiz bo‘lsa yoki `maxVideos` chegarasi o‘rnatilgan bo‘lsa ham. `null` va bo‘sh satrlar hisobga olinadi; yo‘q maydonlar va video bo‘lmagan metama'lumotlar hisobga olinmaydi. Saqlangan nusxalar ushbu maydonlarni qizil rangda ko‘rsatilgan soyalar bilan o‘zgartiradi yoki so‘rovni o‘tkazib yuboradi, va keshlar/Xotira o‘tkaziladi. Ta'minotchining yuklanishi o‘zgarmas holda qoladi.

Qo'shimcha saqlangan nusxalar bir xil kuzatilgan so'rov signalidan foydalanadi. Xom pre-guardrail mijoz-so'rovning snapshoti, xotirada kutayotgan so'rov va erta rad etilgan so'rovlar ro'yxati video qismlaridagi transkript maydonlarini tuzilgan holda almashtiradi; pipeline bosqichlari va kontekstni uzatish orqali sintetik ravishda yaratilgan matnli so'rovlar saqlangan so'rov tanasi joyida qizil rangga o'raladi. Saqlangan `video_content_removed` markeri `previous_response_id` davomiyligini yopiq holatda muvaffaqiyatsizlikka olib keladi, bu esa qasddan tashlab qo'yilgan matnni qayta tiklashdan ko'ra afzalroqdir. Agar kuzatilgan so'rov loglashdan oldin har bir qismning qizil rangga o'ralgan soyasini yo'qotib qo'ysa, yoki hatto bir nechta video soyalaridan biri keyingi so'rov o'zgarishlaridan keyin mos kelmasa, saqlangan so'rov tanasi to'liq chiqarib yuboriladi, qisman qizil rangga o'ralgan transkriptni saqlash o'rniga.

Kuzatilgan so'rov uchun model javobi transkriptning har qanday qismini tuzilgan signal chegarasiz iqtibos keltirishi mumkin. Shuning uchun uning saqlangan chaqiruv-ro'yxati `responseBody` chiqarish markeri bilan almashtiriladi; batafsil pipeline artefakti (bu yuqoridagi/mijoz tanalari va oqim bo'laklarini o'z ichiga olishi mumkin) saqlanmaydi. Semantik, idempotentlik va mantiqiy qayta o'ynash keshlar o'sha so'rov uchun o'qish va yozishlarni chetlab o'tadi. Ta'minot so'rovi va mijozga ko'rinadigan javob o'zgarmaydi. Batafsil artefakt chiqarib yuborilganda erta saqlash baytlari vaqtinchalik buferdan chiqariladi. Kironing noto'g'ri EventStream ogohlantirishi faqat yuklama baytlar sonini hisobot qiladi, hech qachon uning mazmuni yoki JSON parserining xom xatosini ko'rsatmaydi. Bu har qanday aloqasiz ta'minot/plug-in diagnostikasi tekshirilganini da'vo qilmaydi; kengroq saqlangan-sink tozalash #11658 da kuzatiladi.

Ichki `/api/modality-bridge/video/drilldown` hayotiy sikli alohida, loopback/token-autentifikatsiyalangan kesh substrati hisoblanadi. Har bir operatsiya shuningdek, kanonik opak asosiy ID talab qiladi. Ishlab chiqarish chaqiruvchisi yoqilganda, u ushbu IDni autentifikatsiyalangan ijarachidan olish kerak va hech qachon mijoz tanlagan qiymatni uzatmasligi kerak. Kesh kalitlari ushbu asosiy IDni kanonik sessiya va video-referens IDlariga bog'laydi, faqat ularning SHA-256 dan olingan kalitlarini saqlaydi va o'qish va o'chirishni bir xil asosiy IDga bog'laydi. Kesh har bir yozuv uchun eng ko'pi bilan 16 ta olingan JPEG ramkalarini saqlaydi, ularni o'n daqiqadan keyin muddati o'tadi va chegaralangan `start`/`end` o'qish yoki aniq sessiya o'chirishni qo'llab-quvvatlaydi.

Har bir asosiy ID 16 ta yozuv va 64 MiB kanonik JPEG ma'lumotlari bilan cheklangan. Ushbu cheklovlar global 64-yozuv/256 MiB yuqori chegaradan mustaqil: asosiy kvota bosimi faqat ushbu asosiy IDning eng kam ishlatilgan yozuvlarini chiqarib yuboradi, global LRU chiqarib yuborilishi ko'rib chiqilmasdan. Muddati o'tgan yozuvlar kesh faoliyati davomida asosiy va global hisobdan chiqariladi, bekor qilish va tasdiqlash muvaffaqiyatsizligi qisman almashtirishni amalga oshirmaydi.

Kesh kanonik bo'lmagan Base64, ortiqcha to'ldirish, kanonik bo'lmagan JPEG bo'lmagan media, noto'g'ri yoki qisqartirilgan JPEGlarni va chegaralangan to'liq rasm `sharp` dekodlash jarayonida ogohlantirish beruvchi JPEGlarni rad etadi. Har bir qabul qilingan rasmni kanonik JPEG sifatida qayta kodlaydi, kenglik va balandlikni dekodlangan baytlardan olishni talab qiladi, chaqiruvchi maydonlarga ishonmasdan va har qanday ortiqcha polyglot baytlarni saqlash o'rniga chiqarib yuboradi. Faqat chegaralangan kanonik siqilgan bufer ikkala kvotaga ham hisoblanadi. JSON simi chegarasi 32 MiB dekodlangan-kirish yuqori chegarasi uchun Base64 ortiqcha xarajatlarni o'z ichiga oladi. Har bir saqlangan derivatsiya o'zining tasdiqlangan JPEG formatini/rezolyutsiyasini, namuna siyosatini, derivatsiya versiyasini, yaratilgan vaqtini, server tomonidan hisoblangan kontent xeshini va xeshlangan ota-referensni, shuningdek, ishonchli chaqiruvchining ota-kontent xeshini qayd etadi. Bekor qilish asinxron dekodlash/xesh bosqichlari orasida tekshiriladi, atomik keshni majbur qilishdan oldin.

Ishlab chiqarish ishlab chiqaruvchisi allaqachon olingan broker ramkalarini faqat muvaffaqiyatli vizual tahlildan so'ng qayta ishlatadi, ikkinchi video yuklash/qayta olishni talab qilmaydi. Bu operator `modalityBridgeVideoDrilldownEnabled=true`, qat'iy har bir qism uchun `drilldown: true` va autentifikatsiyalangan API-kaliti yozuv ID talab qiladi. Mijoz tomonidan e'lon qilingan asosiy/sessiya qiymatlari hech qachon egalikni o'rnatmaydi. Ushbu uchta shart bo'lmasa, u xesh qilmaydi, o'lchamaydi yoki qo'shimcha ramkalarni saqlamaydi. Saqlash muvaffaqiyatsizligi foydalanish mumkin bo'lgan vizual javobni saqlaydi. Rozilik berilgan so'rovlar butun video natija keshini chetlab o'tadi, shuning uchun keshlangan natijalar hech qachon qayta o'ynashni amalga oshirmaydi.

Muvaffaqiyatli JSON va SSE javoblari chegaralangan `x-omniroute-video-drilldown` sarlavhasida eng ko'pi bilan to'rtta opak tutqichni ochib beradi. Ruxsat berilgan brauzer manbalari ushbu sarlavhani CORS manba siyosatini kengaytirmasdan o'qiy oladi. Yangi tutqichlar `v1.<32-baytli tasodifiy base64url token>` dan foydalanadi va registr faqat ularning SHA-256 xeshlarini saqlaydi. O'qiydigan/sarlavha parseri ham eski 64-geks tokenlarni qabul qiladi. Autentifikatsiyalangan jamoatchilik iste'molchisi `GET /api/v1/video-bridge/drilldown?handle=...`, mustaqil ravishda `modalityBridgeVideoDrilldownRemoteEnabled=true` tomonidan nazorat qilinadi. Aniq saqlangan yolg'on kirish huquqini bekor qiladi, hatto eski `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` muhitga qaytish yoqilgan bo'lsa ham. Ishlab chiqarish saqlashining o'xshash eski `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` qaytishi mavjud. Ikkala qaytish ham standart holda o'chirilgan.

Iste'molchi autentifikatsiyalangan kalitdan egalikni oladi, kalit siyosatini qo'llaydi va noma'lum, muddati o'tgan va boshqa kalitning tutqichlari uchun bir xil 404 qaytaradi. U `variant=preview|standard|detail` (maksimal JPEG o'lchami 320/640/1280, hech qachon kattalashtirilmaydi), `limit=1..8` (yoki eski `frames` alias, hech qachon ikkisi ham emas), nolga asoslangan `page` va ixtiyoriy `start`/`end` diqqat soniyalarini qabul qiladi. Takroriy so'rov kalitlari va teskari diqqat oynalari rad etiladi. Har bir qaytarilgan variant o'zining haqiqiy kontenti va haqiqiy rezolyutsiya metadata xeshini saqlaydi, saqlangan manbaga bog'langan. Variantlar o'qish paytida olinadi, qo'shimcha saqlangan nusxalar sifatida emas. JSON javobi, Base64/qoplama bilan birga, 32 MiB ga cheklangan; ortiqcha sahifa 413 qaytaradi va mijoz kamroq ramkalarni so'rashi kerak. O'qish har bir o'lchov atrofida bekor qilishni tekshiradi va qaytarishdan oldin tutqichning haqiqiyligini qayta tekshiradi. Egasi tomonidan `DELETE` idempotentdir; o'chirish yoki TTL muddati o'tishi saqlangan manbani va foydalanish hisobini ozod qiladi.

Ulashilgan do'kon jarayon mahalliydir: tutqichlar qayta ishga tushirilganda muddati o'tadi va mustaqil OmniRoute jarayonlari o'rtasida o'tkazib bo'lmaydi. Boshqaruv statistikasi samarali saqlash/masofaviy siyosatni va faqat saqlangan yozuvlar/byte'larni ko'rsatadi, hech qachon media, havolalar, asosiy ID'lar yoki tutqichlarni ko'rsatmaydi. Video sozlamalari paneli ushbu qiymatlarni ko'rsatadi va ikkita rozilik o'zgaruvchilarini saqlab qolishi mumkin. Ushbu amalga oshirish hujjati jonli joylashtirish yoki reklama dalili emas; haqiqiy model qabul qilinishi alohida kuzatiladi.

Kadrlar belgilangan Video model bilan ketma-ket ravishda yozilgan. Bo'sh Video o'zgartirish Vision sozlamasini meros qilib oladi; agar ikkalasi ham bo'sh bo'lsa, Vision avtomatik yo'naltiruvchi samarali ko'rish qobiliyatiga ega modelni tanlaydi. Muvaffaqiyatli yozuvlar asl qismni barqaror `[Video tavsifi:` prefiksi bilan almashtiradi, bu ham matnni ishonchsiz media-asoslangan kuzatuv sifatida belgilaydi va pastki modellarga media ichida topilgan ko'rsatmalarga amal qilmaslikni aytadi. Kadr-yozuv kesh kalitlari JPEG byte'larini, so'rovni, vaqt belgisini va samarali modelni o'z ichiga oladi; faqat muvaffaqiyatli yozuvlar keshda saqlanadi. Kesh yozuvlari haqiqiy muvaffaqiyatli ishlab chiqaruvchi modelni, shu jumladan zaxira modelni saqlaydi; ko'prik turli modellardan ishlab chiqarilgan turli kadrlar bo'lganda `mixed` deb hisobot beradi. Kesh urushi ushbu ishlab chiqaruvchi identifikatorni qayta belgilash o'rniga foydalanadi. Butun-video natija kesh har qanday chiqishni o'zgartiradigan har bir kirish bo'yicha kalitlanadi — so'rov, samarali model, namuna siyosati, kadrlar soni, semantik tahlil rejimi, normallashtirilgan fokus ko'rsatmasining SHA-256 barmog'i, fokus oynasi, `transcript`, `audioTranscript` va kontakt-varaq flagi — shuning uchun ushbu o'lchovlardan birortasini o'zgartirish keshni yo'qotishdir, hech qachon eskirgan qayta foydalanish emas. Vizual dedup siyosati versiyasi, chegarasi va cheklangan nomzod-kadrlar soni natija-kesh kalitida va metadata'da ham aniq ko'rsatilgan; shuning uchun siyosat o'zgarishi eskirgan butun-video tavsifini qayta ishlata olmaydi. Natija-kesh v4 metadata rejimini va barmoq izini saqlaydi, hech qachon xom foydalanuvchi vazifasini emas. Guardrail metadata so'ralgan va samarali tahlil rejimlarini hisobot beradi; foydalanuvchi matni ishlatilmaydigan so'ralgan `focused` rejimi samarali `full` sifatida hisobot beriladi.

Guardrail har bir qo'llab-quvvatlanadigan video qismini chiqaradi, lekin `modalityBridgeVideoMaxVideos` dan ko'proq tavsiflamaydi. `supportsVideo === false` ga ega bo'lgan maqsadlar uchun, muvaffaqiyatsiz va cheklangan videolar aniq xavfsiz matn belgilari bo'ladi, shuning uchun hech qanday xom video saqlanmaydi. Qobiliyat noma'lum bo'lganda, ushbu qismlar o'zgartirilmaydi. `supportsVideo === true` ga ega bo'lgan maqsadlar ko'prikni chetlab o'tadi. Mijoz so'rovini bekor qilish signali yuklash, broker navbati, yordamchi jarayonlar va yozuv chaqiruvlari orqali tarqaladi; bekor qilishlar videolar o'rtasida to'xtaydi va hech qachon xom media'ga ochiq qolmaydi.

Ishga tushirish sozlamalari DB asosida va Zod tomonidan tasdiqlangan:

| Kalit                               | Standart    | Oralig'i / xulq-atvori                                                                                            |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Ixtiyoriy ishga tushirish, ro'yxatdan o'tish                                                                      |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` umumiy yozuvlarni saqlaydi; `focused` cheklangan, ishonchsiz oxirgi foydalanuvchi kontekstini ishlatadi    |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge modelini meros qilib oladi                                                                          |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                              |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, yoki proporsional `segment_aware`; detektor muvaffaqiyatsiz bo'lsa `uniform` ga qaytadi |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                               |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                    |

Eski saqlangan Video vaqt o'lchovlari 120 soniyadan yuqori bo'lganlar broker muddatiga qattiq bog'lanadi; ushbu cheklovdan yuqori yangi sozlamalar rad etiladi. `GET /api/modality-bridge/video/runtime` ishonchli muhrlangan loopback mahalliyligini autentifikatsiya yoki ishga tushirishni tekshirishdan oldin talab qiladi, keyin esa boshqaruv autentifikatsiyasini talab qiladi. U faqat `available`, sanitizatsiyalangan FFmpeg/ffprobe versiyalarini va ishga tushirish mavjud bo'lmaganida belgilangan sababni qaytaradi. Ichki ekstraksiya nuqtasi jamoatchilikka yuklash API emas: navbatning to'lib ketishi `503` va `Retry-After` qaytaradi, chaqiruvchining uzilishi `499` qaytaradi va belgilangan broker muddati `504` qaytaradi. O'zgartirilgan javoblar markaziy `x-omniroute-modality-bridge` sarlavhasiga `video->text;model=<visionModel>;parts=<videos>` qo'shadi, Vision yoki Audio segmentlarini olib tashlamasdan.

### PII Masker (`piiMasker.ts`)

**Ikkala** bosqichda ishlaydi.

- **`preCall`** yuklamani klonlaydi, `system`, `messages`, `input` va `prompt` (oddiy satr elementlarini o'z ichiga olgan holda) bo'ylab yuradi va `processPII()` ( `@/shared/utils/inputSanitizer` dan) string `content`/`text` maydonlariga qo'llanadi. `PII_REDACTION_ENABLED=true` bo'lganda, aniqlangan PII chiqish yuklamasida yashiriladi. Bu `INPUT_SANITIZER_MODE` dan mustaqil (faqat so'rov-in'ektsiya siyosatini boshqaradi). Yashirish o'chirilganda, chaqiruv aniqlash hisoblarini qayd etadi, lekin mazmunni qayta yozmaydi.
- **`postCall`** javobni chuqur klonlaydi, `sanitizePIIResponse()` va Javoblar-API-shakl maskeri (`maskResponsesOutput` — `output_text` va `output[].content[].text` ni qamrab oladi) ni ishga tushiradi. Agar har qanday yashirish sodir bo'lsa, o'zgartirilgan javob aslini almashtiradi.

Guardrail hech qachon bloklamaydi; u faqat annotatsiya qiladi (`meta.detections`, `meta.redacted`) yoki qayta yozadi.

### Prompt Injection (`promptInjection.ts`)

Foydalanuvchi tomonidan taqdim etilgan kontentda qarshi tuzilmalarni aniqlaydi va
sozlangan siyosatni amalga oshiradi. Harakatlar atrof-muhit o'zgaruvchilari va
konstruktor parametrlariga asoslanadi:

| Sozlama            | Atrof-muhit o'zgaruvchisi                                                                                | Standart | Ta'sir                                                                                                                                                                                                               |
| ------------------ | -------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Faol               | `INPUT_SANITIZER_ENABLED`                                                                                | `true`   | `false` bo'lganda, himoya qisqa yo'lni o'z ichiga oladi.                                                                                                                                                             |
| Rejim              | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                          | `warn`   | Inyeksiya siyosati: `block`, `warn`, yoki `log`. (`redact` orqaga moslik uchun qabul qilinadi, lekin inyeksiya matnini **tozalash** qilmaydi; PII qayta yozish so'rovi `PII_REDACTION_ENABLED` orqali boshqariladi.) |
| Bloklash chegarasi | `blockThreshold` parametri / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Bloklash uchun zarur minimal og'irlik. O'rtacha standartda faqat kuzatish uchun.                                                                                                                                     |

**Rejim ustunligi** (`getMode`): chaqiruvchi `options.mode` →
`INJECTION_GUARD_MODE` **DB xususiyat-flagi ustunligi** (Dashboard → Sozlamalar →
Xususiyat Flagi) → `INJECTION_GUARD_MODE` atrof-muhit → `INPUT_SANITIZER_MODE` atrof-muhit →
`warn`. Shunday qilib, dasboard ustunligi atrof-muhit o'zgaruvchilaridan ustun keladi, shuning uchun Xususiyat
Flaglari UI jonli himoyani boshqaradi (qayta ishga tushirishsiz). DB o'qilishi xavfsiz:
agar xato bo'lsa, himoya atrof-muhitga asoslangan harakatga qaytadi va hech qanday
ustunlik o'rnatilmaganida harakat atrof-muhitga faqat yechimga tengdir.

Aniqlash manbalari:

1. `sanitizeRequest()` `@/shared/utils/inputSanitizer` dan (pipeline'da boshqa joylarda ishlatiladigan umumiy detektor
   to'plami).
2. O'rnatilgan `DEFAULT_GUARD_PATTERNS` (hozirda `system_override_inline` va
   `markdown_system_block`, ikkalasi ham `high` og'irlik).
3. Konstruktor parametrlar orqali o'tkazilgan ixtiyoriy `customPatterns` (stringlar, regex,
   yoki `{ name, pattern, severity }` yozuvlari).

Agar `mode === "block"` **va** kamida bitta aniqlash og'irlik
chegarasiga mos kelsa, `preCall` `{ block: true, message: "So'rov rad etildi:
shubhali kontent aniqlangan" }` ni qaytaradi. `warn`/`log` rejimlarida himoya log qiladi, lekin
chaqiruvga ruxsat beradi. Umumiy yordamchi `evaluatePromptInjection()` ham eksport qilinadi
ro'yxatdan o'tmasdan chaqiruvchilar uchun.

**Skanning chegarasi (v3.8.20):** detektor faqat **birinchi 16 KB** ni tekshiradi
birlashtirilgan prompt matni — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bayt) `src/shared/utils/inputSanitizer.ts` da. Ikkala `detectInjection()` va
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` ni bajarishdan oldin
shablon aylanishini amalga oshiradi. Inyeksiya direktivalari kirishning yuqori qismida joylashgan, shuning uchun bu
regex CPU/GC ni ko'p yuz KB yuklamalarda cheklaydi, aniqlashni zaiflashtirmasdan (cf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

**Ikkala** bosqichda ishlaydi, standart zanjirda oxirgi (ustunlik `95`).
Tashqi yuklamadan (xabar
mazmuni, vosita chaqiruv argumentlari, vosita natijalari) **va** provayder javobidan
ma'lum API-kaliti / maxfiy-token shablonlarini tozalaydi, shunday qilib, promptga joylashtirilgan
maxfiy ma'lumot (yoki vosita natijasi tomonidan qaytarilgan) yuqoridagi provayderga yoki
mijozga qaytarilmaydi.

- **Faoliyatga faqat** ruxsat beriladi, PII tozalash bilan bir xil konventsiya (Qattiq Qoidalar #20-yaqin):
  `settings.credentialRedactionEnabled === true` **yoki**
  `CREDENTIAL_REDACTION_ENABLED=true` bo'lmaganda o'chiriladi. Buning o'chirilishi bilan, himoya hech qanday harakat qilmaydi —
  u hech qachon bloklamaydi va hech qachon qayta yozmaydi.
- `redactCredentials()` to'liq yuklama/javob daraxtini o'rganadi (`walkValue()`,
  prototip ifloslanishiga qarshi xavfsiz, `WeakSet` orqali siklga qarshi xavfsiz) va mos keladiganlarni
  `[REDACTED:<type>]` joylashuvchisi bilan almashtiradi, faqat haqiqatan ham
  o'zgargan shoxlarni klonlaydi.
- `CREDENTIAL_PATTERNS` LLM provayder kalitlarini qamrab oladi (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokenlari (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), to'lov kalitlari (Stripe, Square), bulut
  kalitlari (AWS access key, Twilio, SendGrid, Mailgun), maxfiy kalitlar / JWTlar,
  credential-bearing bog'lanish satrlari (`mongodb://user:pass@...`, va boshqalar), va
  umumiy `Authorization`/`x-api-key`/`api-key`/`apikey` header-qiymat
  shabloni. Header shaklidagi kalitlar (`authorization`, `x-api-key`, `api-key`,
  `apikey`) struktural ravishda tozalanadi (faqat qiymat, `Bearer `/`Basic ` prefiksi saqlanadi)
  umumiy matn regex orqali emas.
- Himoya hech qachon bloklamaydi; u faqat qayta yozadi (`modifiedPayload` /
  `modifiedResponse`) va annotatsiya qiladi (`meta.credentialsRedacted`, `meta.count`).

Regressiya himoyasi: `tests/unit/credential-masker-guardrail.test.ts`.

## Asosiy kontrakt (`base.ts`)

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
  block?: boolean; // true zanjir bajarilishini darhol toʻxtatadi
  message?: string; // bloklanganda koʻrsatiladi
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // soʻrovni qayta yozish uchun preCall tomonidan qaytariladi
  modifiedResponse?: TValue; // javobni qayta yozish uchun postCall tomonidan qaytariladi
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

Himoya cheklovi `void`, `{}` yoki `{ block: false }` qiymatlaridan birini
qaytarish orqali «oʻzgarish yoʻq» holatini bildiradi. `modifiedPayload`/`modifiedResponse`
qaytarilishi zanjir boʻylab keyingi himoya cheklovlariga uzatilayotgan qiymatni
almashtiradi. `signal?: AbortSignal` chaqiruvchining hayot siklini himoya
cheklovlariga uzatadi. Soʻrovning bekor qilinishi ataylab qoʻllanadigan ochiq
oʻtkazish istisnosidir: media koʻpriklari ishni toʻxtatadi va tozalashni amalga
oshiradi, bunda xom media uni qoʻllab-quvvatlamasligi maʼlum boʻlgan maqsadga
qayta tiklanmaydi.

## Reestr (`registry.ts`)

Yagona `guardrailRegistry` nusxasi quyidagilarni taqdim etadi:

- `register(guardrail)` — himoya cheklovini qoʻshadi (yoki normallashtirilgan
  nom boʻyicha almashtiradi) va roʻyxatni `priority` qiymatining oʻsish tartibida
  qayta saralaydi.
- `clear()` / `list()` — maʼmuriy yordamchi funksiyalar.
- `runPreCallHooks(payload, context)` — faol himoya cheklovlarini ketma-ket
  bajaradi, foydali yuklamani `modifiedPayload` orqali uzatadi va birinchi
  `block: true` holatida toʻxtaydi.
- `runPostCallHooks(response, context)` — javob tomonida xuddi shu oqimni
  bajaradi.
- `resetGuardrailsForTests({ registerDefaults })` — holatni tozalaydi va
  testlarni izolyatsiya qilish uchun ixtiyoriy ravishda standart himoya
  cheklovlarini qayta roʻyxatdan oʻtkazadi.

Har ikkala bajaruvchi ham `{ blocked, payload|response, results, guardrail?, message? }`
qiymatini qaytaradi, bunda `results` har bir himoya cheklovi uchun `blocked`,
`skipped`, `modified`, `error` va `meta` maydonlarini oʻz ichiga olgan
`GuardrailExecutionResult` yozuvlari massivi boʻlib, kuzatuv uchun foydalidir.

### Har bir soʻrov uchun himoya cheklovlarini oʻchirish

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` joriy soʻrov uchun
oʻtkazib yuborilishi kerak boʻlgan himoya cheklovlari nomlarining takrorlanmaydigan
roʻyxatini jamlaydi. Manbalar (barchasi ixtiyoriy, barchasi birlashtiriladi):

- `apiKeyInfo.disabledGuardrails`
- Soʻrov tanasidagi `disabledGuardrails` (yuqori darajada)
- Soʻrov tanasidagi `metadata.disabledGuardrails`
- `x-omniroute-disabled-guardrails` sarlavhasi (yoki eski
  `x-disabled-guardrails`)

Qiymatlar satrlar massivi yoki vergul bilan ajratilgan satr boʻlishi mumkin;
nomlar kichik harflardagi kebab-case formatiga normallashtiriladi
(`pii_masker` → `pii-masker`). Natija `context.disabledGuardrails` orqali
reestrga uzatiladi va reestr mos keluvchi himoya cheklovlarini oʻtkazib yuboradi
(`results` ichida `skipped: true`).

## Bajarilish tartibi

`src/sse/handlers/chat.ts` va `open-sse/handlers/chatCore.ts` orqali oʻtadigan har bir soʻrov uchun:

1. `resolveDisabledGuardrails(...)` API kaliti, soʻrov tanasi va sarlavhalar asosida oʻtkazib yuboriladigan himoya mexanizmlari roʻyxatini tuzadi.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` himoya mexanizmlarini ustuvorlikning oʻsish tartibida ishga tushiradi:
   - Oʻchirilgan himoya mexanizmlari `skipped` sifatida qayd etiladi.
   - Har bir himoya mexanizmining `preCall` funksiyasi `modifiedPayload` orqali foydali yuklamani qayta yozishi mumkin.
   - Birinchi `block: true` zanjirni muddatidan oldin toʻxtatadi va ishlov beruvchi himoya mexanizmi tomonidan rad etilganlik javobini qaytaradi.
3. (Qayta yozilgan boʻlishi mumkin boʻlgan) foydali yuklama kombinatsiyalangan marshrutlash va yuqori oqimga joʻnatish jarayoniga oʻtadi.
4. Javob shakllantirilgach, `guardrailRegistry.runPostCallHooks(...)` javob ustida ayni zanjirni ishga tushiradi. Bu yerda `block: true` yuqori oqim javobini bekor qiladi.

Istisno chiqaradigan himoya mexanizmlari `error: <message>` bilan qayd etiladi va `logger.warn` orqali jurnalga yoziladi, ammo zanjir davom etadi — bu ataylab ochiq xato siyosati asosida ishlaydi.

## Konfiguratsiya

Ichki himoya mexanizmlari oʻqiydigan muhit oʻzgaruvchilari:

| Oʻzgaruvchi                           | Foydalanadigan mexanizm  | Taʼsiri                                                                                                                             |
| ------------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Aniqlashni butunlay oʻchirish uchun `false` qiymatini belgilang.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Inʼeksiya siyosati: `warn`, `block` yoki `log`. Eski `redact` qiymati inʼeksiya matnini qayta yozmaydi.                             |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Inʼeksiya himoyasi rejimi; shuningdek, muhit oʻzgaruvchilarini **ustunlik bilan almashtiradigan** MB xususiyat bayrogʻi (MB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | `MODE=block` rad etadigan minimal jiddiylik darajasi: `high` (standart), `medium` yoki `low`.                                       |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | `INPUT_SANITIZER_BLOCK_THRESHOLD` uchun eski muqobil nom.                                                                           |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | `true` boʻlganda, soʻrovdagi PII tahrirlanadi (inʼeksiya rejimidan mustaqil ravishda).                                              |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (quyi oqim) | Javob tomonidagi niqoblash mexanizmi xatti-harakatini boshqaradi.                                                                   |

Modality Bridge himoya mexanizmlari ish vaqti konfiguratsiyasini muhit oʻzgaruvchilaridan emas, MB tomonidan qoʻllab-quvvatlanadigan sozlamalar omboridan (`getSettings()`) oʻqiydi. Vision uchun asosiy kalitlar:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` va
`modalityBridgeCacheMaxEntries`. Eski
`visionBridge*` kalitlari faqat hujjatlashtirilgan bir siklli oʻqish
zaxira varianti sifatida qabul qilinadi; boshqaruv panelidagi yozuvlar asosiy kalitlardan foydalanadi. Standart qiymatlar va zaxira variantni aniqlovchi
`src/shared/constants/modalityBridgeDefaults.ts` faylida joylashgan, eski
konstantalar esa `src/shared/constants/visionBridgeDefaults.ts` faylida saqlab qolingan.

Audio `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` va `modalityBridgeAudioMaxClips`, shuningdek, umumiy
`modalityBridgeCache*` sozlamalaridan foydalanadi. Audio uchun eski kalitlarga qaytish imkoniyati yoʻq, chunki bu
kalitlar Modality Bridge sxemasi bilan birga joriy etilgan.

Video `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` va
`modalityBridgeVideoTimeout`, shuningdek, umumiy `modalityBridgeCache*` sozlamalaridan foydalanadi.
U standart holatda oʻchirilgan, chunki FFmpeg/ffprobe ixtiyoriy operatsion
bogʻliqliklar hisoblanadi va kadrlarga tavsif yaratish kechikish hamda model xarajatini oshiradi.

## Maxsus Guardrail’lar

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

Qadamlar:

1. `BaseGuardrail`ni kengaytiruvchi `src/lib/guardrails/myGuardrail.ts` faylini yarating.
2. `preCall` va/yoki `postCall`ni amalga oshiring.
3. Import vaqtida roʻyxatdan oʻtkazing (`registerDefaultGuardrails`dan qoʻshing) yoki
   bajarilish vaqtida `guardrailRegistry.register(...)`ni chaqiring — registr
   bir xil normallashtirilgan nomga ega oldingi guardrail’ni almashtiradi.
4. Testlarni `tests/unit/` ichiga qoʻshing (mavjud misollar:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testlash

Maʼlum holatdan boshlash uchun testlar orasida `resetGuardrailsForTests()`dan foydalaning.
Boʻsh registr bilan boshlash va faqat test qilinayotgan guardrail’larni roʻyxatdan
oʻtkazish uchun `{ registerDefaults: false }`ni uzating. Vision Bridge bogʻliqliklarni
kiritishni (`deps.getSettings`, `deps.callVisionModel`) qabul qiladi; Audio Bridge esa
sozlamalar, imkoniyatlar, STT modelini tanlash, hisob maʼlumotlarini tekshirish va
transkripsiya uchun mos ekvivalent ulanish nuqtalarini taqdim etadi. Shu sababli testlar
har ikkala oqimni ham maʼlumotlar bazasi yoki tarmoqqa ulanmasdan sinashi mumkin.

## Shuningdek qarang

- `src/lib/guardrails/` — amalga oshirish
- `src/shared/utils/inputSanitizer.ts` — prompt-injection va PII niqoblashni
  taʼminlovchi umumiy detektor
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge standartlari va
  majburiy bridge modellari roʻyxati
- `src/shared/constants/modalityBridgeDefaults.ts` — umumiy Vision/Audio bajarilish muhiti standartlari
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonal qatlam (circuit breaker, kutish davrlari)
- `docs/reference/ENVIRONMENT.md` — muhit oʻzgaruvchilarining toʻliq maʼlumotnomasi

## Injection-guard marshrut qamrovi va red-team (8-bosqich · D blok)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) foydalanuvchi promptlarini
qabul qiladigan barcha marshrutlarni qamrab oladi. U `INJECTION_GUARD_MODE`ga amal qiladi
(standart `warn` = faqat jurnalga yozish; `block` = HTTP 400 `SECURITY_001`ni qaytaradi).

| Tur           | Marshrutlar                                                                                                                                          | Standart rejim |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Matn (mavjud) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generativ     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Maʼlumotlar   | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Matnni ajratib olish (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`ni qamrab oladi.

**Red-team (har kecha, `nightly-llm-security.yml`):** promptfoo har bir marshrut
`INJECTION_GUARD_MODE=block` holatida OWASP-LLM korpusini bloklashini tekshiradi; garak
probelarni ishga tushiradi (maxfiy kalit boʻlmasa, oʻtkazib yuboradi).
Izchillik uchun `moderations` ham kiritilgan — `block` rejimidagi operatorlar uni
`resolveDisabledGuardrails` orqali istisno qilishi mumkin.

Har kechalik ish jarayoni (`.github/workflows/nightly-llm-security.yml`, cron + qoʻlda
ishga tushirish) ikkita vazifaga ega:

- **`promptfoo-guard` (bloklovchi)** — `INJECTION_GUARD_MODE=block` bilan
  `promptfoo eval -c promptfooconfig.yaml`ni ishga tushiradi. Har bir zararli holat
  (masalan, "barcha oldingi koʻrsatmalarni eʼtiborsiz qoldir…", DAN uslubidagi
  jailbreak’lar) javobda `error.code === "SECURITY_001"` mavjudligini, yaʼni guard
  soʻrovni amalda rad etganini tekshiradi.
- **`garak` (tavsiyaviy)** — lokal OmniRoute nusxasiga
  (`http://localhost:20128/v1`) qarshi garak’ni `--probes promptinject,dan,leakreplay`
  bilan ishga tushiradi. U provayder maxfiy kalitiga (`PROMPTFOO_PROVIDER_KEY`)
  bogʻlangan; kalit boʻlmasa muammosiz oʻtkazib yuboradi va `|| true` bilan
  yakunlanadi, shu sababli CI’ni muvaffaqiyatsiz qilmasdan hisobot beradi.

Guard yordamchisining (`createInjectionGuard` / `withInjectionGuard`) qamrovi
prompt qabul qiluvchi har bir `/v1` marshrutini oʻz ichiga oladi; prompt matni
`src/shared/utils/inputSanitizer.ts` ichidagi `extractMessageContents()` tomonidan
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`dan olinadi.
