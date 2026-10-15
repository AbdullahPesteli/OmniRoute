# Guardrails (Oʻzbekcha)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Haqiqatning asosiy manbasi:** `src/lib/guardrails/`
> **Soʻnggi yangilanish:** 2026-08-29 — v3.8.51 (Video Bridge transkriptining kelib chiqishi chaqiruvchi tomonidan eʼlon qilinadi,
> server tomonidan hali tasdiqlanmaydi — #11661 ga muvofiq aniqlashtirildi)

Guardrail’lar OmniRoute va yuqori oqim provayderlari oʻrtasidagi chegarada xavfsizlik, siyosat va kontent oʻzgartirishlarini taʼminlaydi. Har bir guardrail soʻrov yuklamalarini (`preCall`) va yuqori oqim javoblarini (`postCall`) tekshirishi (hamda ixtiyoriy ravishda rad etishi, oʻzgartirishi yoki izoh bilan belgilashi) mumkin.

Tizim **xatoda ochiq qoladi**: agar guardrail bajarilish vaqtida istisno chiqarsa, registr xatoni qayd etadi va soʻrovni muvaffaqiyatsiz yakunlash oʻrniga keyingi guardrail bilan davom etadi. Bloklash tasodif emas, balki aniq qarordir (`block: true`).

## Oʻrnatilgan Guardrails

Ro'yxat avtomatik ravishda import paytida olti ta guardrailni ustuvorlik tartibida yuklaydi
(qarang `registry.ts` → `registerDefaultGuardrails()`):

| Ustuvorlik | Nomi                | Bosqich(lar)   | Fayl                  |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Pastki ustuvorlik raqamlari **birinchi** ishlaydi.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

**Ko'rinmas modellarga** mo'ljallangan tasvirli so'rovlarni tutib olib, butun so'rovni ko'rish qobiliyatiga ega modelga yo'naltiradi yoki tasvir qismlarini konfiguratsiyalanuvchi ko'rish modelidan olingan matn tavsiflari bilan almashtiradi. Bu matnli provayderlarga multimodal yuklamalarni shaffof ravishda boshqarishga imkon beradi.

Jarayon:

1. Agar maqsad model allaqachon ko'rishni qo'llab-quvvatlasa, o'tkazib yuboring (agar u majburiy ko'prik ro'yxatida `isVisionBridgeForcedModel` ko'rsatilmagan bo'lsa).
2. Tasvir qismlarini `extractImageParts(messages)` orqali ajratib oling
   (`visionBridgeHelpers.ts`), bu esa **birlashtirilgan media
   detektori** `detectMediaParts()` ga murojaat qiladi `open-sse/utils/mediaParts.ts` — bu birgalikda moslik filtri bilan bo'lishiladigan yagona haqiqat manbai.
   Ajratish faqat `replaceImageParts` qayta tiklay oladigan shakllarning yuqori darajadagi qismlariga ruxsat beriladi (ajratish↔almashtirish shartnomasi): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, va Responses API `input_image`. Ichki zarbalar va
   faqat ko'rsatkich shakllari birgalikda filtr materialidir va hech qachon ajratilmaydi.
   Agar hech narsa topilmasa, o'tkazib yuboring.
3. Ishga tushirish konfiguratsiyasini `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) orqali hal qiling: yangi `modalityBridge*`
   sozlamalar kalitlari g'alaba qozonadi; eski `visionBridge*` kalitlari **bir tsikl
   orqaga qaytish** (orqaga qaytish oynasi) sifatida qoladi. Ko'prik o'chirilganida har qanday media o'tkazib yuboriladi.
4. Rejim tanlovchisi (`modalityBridgeVisionMode`, quyidagi jadvalga qarang)
   yo'naltirish yoki tavsiflashni hal qiladi. Yo'naltirish `model` o'zgartirilgan holda `modifiedPayload` qaytaradi, shuningdek meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Tavsif yo'li: tasvirlarni `maxImages` ga cheklang, vazifaga mos keladigan so'rovni tuzing,
   tavsif keshiga murojaat qiling, ko'rish modelini **paralel ravishda** chaqiring
   (`Promise.allSettled`), va `[Image N]: <tavsif>` matn qismlarini o'z joyida qo'shing. Tavsif muvaffaqiyatsiz bo'lsa, `null` qaytariladi va asl tasvir qismi
   **saqlanadi** (#4012) — faqat har bir tavsif muvaffaqiyatsiz bo'lgan birgalikda tavsif yo'lida, tasdiqlangan ko'rinmas yuqoriga `(unavailable — no vision-capable provider connected)` stub bilan o'zgaradi (#8430).
6. `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) qaytariladi.

#### Rejim tanlovchisi (`modalityBridgeVisionMode`)

| Rejim      | Standart | Xulq-atvor                                                                                                                                                                                                                                                                                                                        |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Eski g'oya, o'zgartirilmagan (#6640/#7204): non-combo/`auto/` modellari eng yaxshi ko'rish modeliga yo'naltiriladi, agar asl modelda foydalanish mumkin bo'lgan credential mavjud bo'lsa (keyin tavsiflanadi); birgalikdagi maqsadlar har doim tavsiflanadi.                                                                      |
| `describe` |          | Har doim tavsiflang — yo'naltirish bloki butunlay o'tkazib yuboriladi; foydalanuvchining tanlagan modeli har doim javob beradi.                                                                                                                                                                                                   |
| `reroute`  |          | Majburiy yo'naltirish: credentialed-modelni saqlash himoyasi chetlab o'tiladi. Yo'naltirish-**maqsad** credential himoyasi hali ham amal qiladi — agar foydalanish mumkin bo'lgan ko'rish maqsadi mavjud bo'lmasa, so'rov tavsifga o'tadi, shuning uchun xom tasvirlar hech qachon matnli orqa tomonlarga yetib bormaydi (#8430). |

Majburiy rejimlar **avval** avtomatik g'oya ishlashidan oldin qisqa yo'lni o'z ichiga oladi; `auto` xulq-atvori pre-PR-1 guardrailga byte-javob beradi.

#### API-kaliti doirasi (`visionBridgeKeyScope.ts`)

Agar chaqiruvchining API kaliti `allowedConnections`, kvota havzalari
(`allowedQuotas`) yoki modellarga (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) cheklov qo'ysa, ko'prik faqat
kalitdan foydalanishi mumkin bo'lgan yo'naltirish va tavsiflash modellari tanlaydi, kalitdan foydalanishi mumkin bo'lgan ulanishlarda. Tavsif chaqiruvi har doim `x-omniroute-self-loop-key-id` sarlavhasi bilan OmniRoute o'z-o'zini aylantirish orqali o'tadi, shuning uchun qabul qiluvchi chat so'rovi
o'sha kalitning ulanish va model siyosatini yana bir bor kuchaytiradi. `enforceApiKeyPolicy()`
faqat o'z-o'zini aylantirish bearer bilan birga ushbu sarlavhani hurmat qiladi, shuning uchun u faqat kirishni toraytirishi mumkin, va hal qilinmaydigan id rad etiladi.

Agar kalit uchun hech qanday ko'rish modeli ruxsat etilmasa, tavsif yo'li chetga suriladi va
so'rov o'zgarmas holda o'tadi, o'chirilgan guardrail kabi xuddi shunday muvaffaqiyatsizlik holati (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Kalitsiz so'rovlar va ushbu cheklovlarsiz kalitlar avvalgi kabi xuddi shunday xulq-atvorni ko'rsatadi.

#### Vazifaga mos tavsif so'rovi (`modalityBridgeVisionTaskAware`)

Default **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) oxirgi **foydalanuvchi xabari** matnini (500 ta belgigacha qisqartirilgan) asosiy tavsif so'roviga qo'shadi, tavsifni foydalanuvchi haqiqatan ham so'ragan narsaga yo'naltiradi (codex-vision-proxy naqshida) va ko'rinadigan matnni transkriptsiya qilish uchun ko'rish modelidan so'raydi. Flag o'chirilganda — yoki foydalanuvchi matni bo'lmaganda — asosiy so'rov o'zgarmas holda ishlatiladi.

Tavsif o'z-o'zini aylantirishning OpenAI bilan mos keladigan so'rovi (`callVisionModelSingle()` `visionBridgeHelpers.ts` ichida) har doim `image_url.detail: "high"` ni so'raydi — shartlarsiz, har bir chaqiruvchi/ta'minlovchi uchun, hech qanday mijoz signaliga bog'liq emas. Past tafsilotli namuna OCR aniqligini aynan ushbu tavsif so'rovi so'ragan matn-transkriptsiya vazifasi uchun pasaytiradi, shuning uchun tavsif chaqiruvi har doim yuqori tafsilot so'raydi, asl kirish so'rovi qanday tafsilot darajasidan foydalanishidan qat'i nazar. Bu faqat ichki tavsif so'rovining tanasiga ta'sir qiladi; bu OmniRoute chaqiruvchining o'z `image_url.detail` ni asosiy so'rovda qanday uzatishini o'zgartirmaydi — bu standart alohida qo'llaniladi va faqat aniqlangan OpenCode mijozlari uchun, `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) ichida. Tavsif o'z-o'zini aylantirishning Anthropic simli formatdagi bo'lagi `detail` maydoniga ega emas va har qanday standartdan ta'sirlanmaydi.

#### Tavsif chiqish cheklovi (`modalityBridgeVisionMaxChars`)

| Kalit                          | Standart | Oralig'i           |
| ------------------------------ | -------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`      | `0` yoki 100–50000 |

`0` (standart) **hech qanday cheklov** degan ma'noni anglatadi — `callVisionModel()` tomonidan qaytarilgan tavsif o'zgartirilmasdan o'tadi, mavjud xulq-atvorni saqlaydi. 100–50000 oralig'idagi har qanday qiymat tavsifni `…` qo'shimchasi bilan qisqartiradi, keyin esa `[Image N]: <tavsif>` sifatida qayta birlashtiriladi (`VisionBridgeGuardrail.preCall()` `src/lib/guardrails/visionBridge.ts` ichida). Bu, pastki model to'liq transkriptsiyani talab qiladigan tafsilotlarga boy OCR vazifalari uchun oshirilishi kerak; uni chatty ko'rish modellari bo'yicha token foydalanishini cheklash uchun kamaytirish kerak. Dashboard maydoni Vision tabining Advanced panelida joylashgan (`modality-bridge-max-chars` `ModalityBridgeVisionTab.tsx` ichida) va 1 dan 99 gacha bo'lgan har qanday qiymatni 100 pastki chegarasiga qadar cheklaydi, shu bilan birga aniq `0` ni o'zgartirmaydi — `0` o'z-o'zidan haqiqiy Zod qiymati hisoblanadi (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), faqatgina "o'rnatilmagan" standart emas.

#### Tavsif kesh (`modalityBridge/bridgeCache.ts`)

Tavsif chiqishlari uchun xotirada LRU + TTL kesh, jarayon bo'ylab umumiy. Kalit = `sha256(imageRef + composedPrompt + configuredBridgeModel)` uzunlik-prefiks ramkasi bilan (maydon-chegaralar to'qnashuvlari yo'q). Model komponenti **sozlangan** ko'prik modeli bo'lib, haqiqatan ham javob bergan model emas — `callVisionModel` ichki ravishda orqaga qaytishi mumkin va har bir urinish bo'yicha kalitlash keshni parchalaydi. Muvaffaqiyatsiz tavsiflar hech qachon keshga saqlanmaydi. Sozlamalar:

| Kalit                           | Standart | Oralig'i |
| ------------------------------- | -------- | -------- |
| `modalityBridgeCacheEnabled`    | `true`   | —        |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440   |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000  |

#### Uzoqdagi rasmni normallashtirish (o'z-o'zini tavsiflash/base64 olish)

Ko'prik **uzoqdagi** rasmni o'zi olishganda — Anthropic tavsif o'z-o'zini chaqirishi va claude-simli formatdagi base64 konversiyasi (`ensureBase64ImagesForClaudeWire`), ikkalasi ham `fetchRemoteImageAsDataUri()` orqali `visionBridgeHelpers.ts` ichida — natijaviy ma'lumot URI `normalizeDataUri()` orqali o'tadi (`open-sse/utils/imageNormalize.ts`) va ko'rish-model so'roviga kiritiladi. Katta rasmlar **2048px uzun qirra** ga kamaytiriladi (OpenAI/Anthropic allaqachon server tomonda qo'llaydigan o'lcham chekloviga mos keladi), bu yuklash byte/kechikishni kamaytiradi, ko'rish modeli nima ko'rayotganini o'zgartirmasdan. O'lchash `sharp` dan foydalanadi, dinamik import orqali yuklanadi: uning mahalliy binarisi yuklanmasa, `normalizeDataUri()` **hech qachon xato bermaydi** — bu asl byte'larni o'tkazib yuboradi, shuning uchun tavsif/base64-konversiya yo'li har doim ishlashda davom etadi. Rasm bo'lmagan byte'lar (decodable rasm qaytarmagan olish) ham o'zgartirilmasdan o'tkaziladi. Ushbu normallashtirish ko'prik o'z-o'zini chaqirish uchun olgan rasmlarga taalluqlidir — bu chaqiruvchining xom o'tkazish yukiga hech qachon qo'llanilmaydi, faqat opt-in mutatsiya printsipiga muvofiq (Qattiq Qoidalar #20).

#### Sozlamalar sxemasi + migratsiya

Yangi `modalityBridge*` kalitlari `updateSettingsSchema` da Zod tomonidan tasdiqlanadi (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCache*` uchligi va Audio Bridge tomonidan ishlatiladigan `modalityBridgeAudio*` guruhi. Migratsiya `141_modality_bridge_settings.sql` mavjud meros `visionBridge*` qiymatlarini mos yangi kalitlarga nusxalaydi (idempotent, hech qachon operator tomonidan o'rnatilgan `modalityBridge*` qiymatini o'zgartirmaydi); meros kalitlari bir chiqarish davri davomida o'qish uchun zaxira sifatida qabul qilinadi.

#### Shaffoflik sarlavhasi + statistikalar

Tavsifga aylantirilgan javoblar `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` ni olib yuradi (bu `buildModalityBridgeHeader()` orqali yaratiladi `modalityBridge/bridgeStats.ts` ichida, `withModalityBridgeHeader()` tomonidan `src/sse/handlers/chatHelpers.ts` ichida muhrlanadi). Qayta yo'naltirilgan so'rovlar **hech qanday** sarlavha olmaydi — yuklama o'zgartirilmagan va model almashinuvi javob tanasining `model` maydonida allaqachon ko'rinadi.

`GET /api/modality-bridge/stats` (boshqaruv autentifikatsiyasi, `GET /api/settings` bilan bir xil darajada) xotirada har bir modality uchun hisoblagichlarni qaytaradi `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` `vision`, `audio`, va `video` uchun. `averageLatencyMs` hisoblashda `latencySamples` dan foydalanadi, barcha urinishlardan emas; vaqt belgilamagan operatsiya nol-millisekundli namunani yaratmaydi. `bridged` muvaffaqiyatli konversiyalar uchun orqaga mos keluvchi alias sifatida qoladi; muvaffaqiyatsiz urinishlar uni oshirmaydi. Hisoblagichlar jarayon qayta ishga tushirilganda dizayn bo'yicha tiklanadi (telemetriya, hisob-kitob emas).

#### Dashboard konfiguratsiyasi

Maxsus dashboard sahifasi `/dashboard/settings/modality-bridge`. Uning URL-manzilga ega `Vision`, `Audio`, va `Video` tablari `tab` qiymatini o'zgartirganda so'rov parametrlarini saqlaydi. Vision tabi imkoniyatni yoqish, rejim, model tanlash (avtomatik standartni o'z ichiga olgan holda), vazifaga oid so'rovlar, ilg'or vaqt/tasvir/ta'rif uzunligi/kesh cheklovlari, ish vaqti hisoblagichlari va himoyalangan namunali so'rovni ochib beradi. Audio tabi ham jonli: u imkoniyatni yoqish, faqat STT modeli tanlovchisi, Auto, vaqt/maksimal klip cheklovlari, audio hisoblagichlari va `input_audio` namunali testi bilan ta'minlaydi. Video tabi funksional: u FFmpeg/ffprobe ish vaqti holatini hisobot qiladi — to'rt aniq UI holatlaridan biri (`unknown` probe uchayotganda yoki tugallana olmaganida, `restricted` non-loopback dashboard hostida probe mijoz tomondan o'tkazib yuborilganda, `unavailable` probe o'tkazilgandan so'ng va tasdiqlangan holda yo'q bo'lganda, yoki `available` FFmpeg/ffprobe versiyalari bilan) — imkoniyat/model/frame/video/vaqt cheklovlarini saqlaydi, model tanlovchisini vision-qobiliyatli modellarga filtrlashni amalga oshiradi va video hisoblagichlarini ochib beradi.

AI sozlamalari ostidagi eski Vision Bridge kartasi yangi sahifaga moslik havolasi sifatida xizmat qiladi; u endi shaklning ikkinchi nusxasiga ega emas. Media Providers ham Image-to-Text va Speech-to-Text ish jarayonlarini tegishli Modality Bridge tablariga bog'laydi, mavjud Speech-to-Text o'yin maydonini olib tashlamasdan.

**O'z-o'zini aylantirishni o'tkazib yuborish:** tavsif chaqiruvi OmniRoute'ning o'z `/v1` o'z-o'zini aylantirish (standart bo'lmagan provayder modeli) orqali o'tganda, sub-so'rov `x-omniroute-admission-bypass: internal` yuboradi va hal qilingan o'z-o'zini aylantirish credential bilan autentifikatsiyalanadi — mahalliy `sk_omniroute` sentinel mahalliy rejimda, yoki operator tomonidan sozlangan `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env kaliti (#1350) shunday qilib `REQUIRE_API_KEY=true` joylashtirishlar tavsif chaqiruvini bajarishi mumkin. O'tkazib yuborish faqat ushbu aniq credentiallar uchun hurmat qilinadi, shuning uchun tashqi mijozlar bu sarlavhani foydalanib, qabul qilishni o'tkazib yubora olmaydi.

Eski standartlar `src/shared/constants/visionBridgeDefaults.ts` da joylashgan; yangi rejim/vazifaga oid/kesh standartlari va sozlamalar yechuvchisi `src/shared/constants/modalityBridgeDefaults.ts` da joylashgan. Himoya devori `deps` konstruktor variantini ochib beradi, shunda sinovlar soxta `getSettings` va `callVisionModel` amalga oshirishlarini kiritishi mumkin.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Audio o'z ichiga olgan chat so'rovlarini maqsadga yetkazmasdan oldin tutadi, bu maqsad audio kirishni qabul qilishi ma'lum emas. U chat so'rovini qayta yo'naltirmaydi: audio qismlari mavjud OpenAI bilan mos keladigan multipart endpoint orqali transkriptsiyalanadi va tanlangan chat modeli matn transkriptlari bilan davom etadi.

Jarayon:

1. `supportsAudio` ni `getResolvedModelCapabilities()` orqali hal qiling. Aniq provayder-reestri metadatalari g'alaba qozonadi, keyin statik model metadatalari, keyin sinxronlangan `modalities_input`. `audio` bo'lmagan e'lon qilingan kirish ro'yxati `false`; hech qanday qobiliyat dalili `null` qoladi. Ikkala `false` va `null` konservativ ko'prikni faollashtiradi, `true` esa uni o'tkazib yuboradi.
2. `modalityBridgeAudio*` sozlamalarini hal qiling va har bir xabardan bo'linadigan yuqori darajadagi audio qismlarini `detectMediaParts()` detektori orqali oling. Qo'llab-quvvatlanadigan sim shakllari OpenAI `input_audio`, `audio_url`, va `source.media_type: "audio/*"` dir. Ichki audio yo'naltirish uchun aniqlanadi, lekin bo'linish yo'li orqali olib tashlanmaydi. Ish `modalityBridgeAudioMaxClips` bilan cheklangan; keyingi qismlar o'zgarmas qoladi.
3. Sozlangan `provider/model` ni hurmat qiling, yoki `selectAudioBridgeModel()` ga `AUDIO_TRANSCRIPTION_PROVIDERS` ni barqaror katalog tartibida yurishga ruxsat bering va foydalanish mumkin bo'lgan faol provayder credentialiga ega birinchi modelni tanlang.
4. `callAudioTranscription()` base64/data-URI audio ni multipart `file` ga aylantiradi, yoki jamoatga faqat chiqish himoyasi bilan DNS pinning va 25 MB cheklov bilan masofaviy `audio_url` ni yuklab oladi. Keyin faylni va tanlangan modelni mahalliy `/v1/audio/transcriptions` o'z-o'zini aylantirishga POST qiladi, `resolveSelfLoopBearer()` bilan autentifikatsiyalanadi. Mavjud transkriptsiya yo'li normal credential qidiruvini, sovuq/tezlik cheklovlarini va provayderni yuborishni amalga oshiradi.
5. Muvaffaqiyatli chaqiruvlar o'z qismlarini `[Audio N]: <transcript>` bilan almashtiradi. Chaqiruvlar `Promise.allSettled` bilan ishlaydi: alohida muvaffaqiyatsizlik asl audio qismini saqlaydi (#4012 shart). Agar har bir chaqiruv muvaffaqiyatsiz bo'lsa va maqsad `supportsAudio === false` ekanligi isbotlansa, qismlar `[Audio N]: (mavjud emas — hech qanday STT provayderi ulanishi yo'q)` ga aylanadi (#8430 shart). Noaniq maqsad (`null`) uchun, barcha muvaffaqiyatsizlik natijasi o'zgarmas qoladi. Foydalanish mumkin bo'lmagan STT credentialiga ega bo'lgan isbotlangan faqat matnli maqsad ham xuddi shunday aniq stubni oladi, tarmoq chaqiruvi yuborilmasdan.

Muvaffaqiyatli transkriptlar jarayon bo'ylab Modality Bridge LRU/TTL keshidan foydalanadi. Kalit audio havolasini, barqaror `audio-transcription` operatsiya yorlig'ini va tanlangan STT modelini birlashtiradi; muvaffaqiyatsizliklar hech qachon keshda saqlanmaydi. Audio urinishlari umumiy `bridged`, `cacheHits`, `failures`, va `lastUsedAt` hisoblagichlarini yangilaydi. O'zgartirilgan javoblar `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` ni olib yuradi; o'zgarmagan so'rovlar Audio Bridge segmentini olmaydi.

Ish vaqti sozlamalari DB asosida va Zod tomonidan tasdiqlangan:

| Kalit                         | Standart | Oralig                |
| ----------------------------- | -------- | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                     |
| `modalityBridgeAudioModel`    | `""`     | Avtomatik yoki STT ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10                  |

Ushbu umumiy kesh `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, va `modalityBridgeCacheMaxEntries` orqali boshqariladi.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Chat Completions `messages` va Responses API `input` ichidagi yuqori darajadagi video qismlarini maqsadli video qo'llab-quvvatlanmaydigan joyga chaqirilishidan oldin tutib oladi.
Qo'llab-quvvatlanadigan shakllar `input_video`, `video_url`, `video_source`, HTTPS URL'lari,
va `data:video/*;base64,...` ma'lumot URI'laridir. Matndagi oddiy fayl nomlari video sifatida qabul qilinmaydi.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) so'rovni o'tkazish, imkoniyat/ siyosat tekshiruvi, har bir so'rovni yig'ish va javob yuklamasini boshqaradi.
Har bir video uchun ish — xarid qilish, to'liq natija keshini, ramka ketma-ketligini tasvirlash (bu har qanday chaqiruvchi tomonidan e'lon qilingan audio transkripti bilan birlashtiriladi), va har bir urinish uchun metrikalar/abort/tozalash — `processVideoPart` ichida yashirin, `videoBridgePipeline.ts` faylida, `preCall` siklida har bir video qismi uchun bir marta chaqiriladi.
Ushbu modul shuningdek, aniq port chegaralarini `VideoMediaBrokerPort` (baytlarni olish va namuna olingan ramkalarni chiqarish), `VideoAudioTranscriptionPort` (chaqiruvchi tomonidan e'lon qilingan audio transkripti bilan namuna olingan sarlavhalarni birlashtirish), va `VideoDrilldownPort` (meros bo'lib qolgan xom-ashyo shakli) sifatida belgilaydi. Ishlab chiqarish STT va ramka saqlash tasvirlovchi port atrofida `createVideoSttAdapter` va `createVideoDrilldownAdapter` orqali tashkil etiladi; ikkinchisi umumiy opak-handle hayot tsiklidan foydalanadi.

Jamoat `/v1` so'rov yo'li hech qachon subprocess'ni import qilmaydi yoki chaqirmaydi. Uzoqdagi videolar 50 MiB chegarasi ostida yuklanadi; inline base64 videolar uchun ehtiyotkor 36 MiB dekodlangan har bir video uchun cheklov mavjud, shuning uchun model/xabarlar/qo'rg'oshin qopqog'i jamoat JSON so'rov qabul qilish chegarasi 50 MiB ichida qolishi mumkin. Inline uzunlik va dekodlangan o'lchovlar ajratishdan oldin tekshiriladi. HTTPS dastlabki uzoq URL va har bir qayta yo'naltirishda talab qilinadi, mavjud jamoat faqat chiqish qo'riqchisi bilan DNS pinlashdan foydalanadi. Baytlar keyin aniq ichki `POST /api/modality-bridge/video/extract` broker chegarasini kesib o'tadi. Ushbu yo'l `LOCAL_ONLY` va `SPAWN_CAPABLE`, faqat bir jarayon uchun autentifikatsiyalangan, ishonchli-loopback so'rovini qabul qiladi va hech qachon URL, fayl tizimi yo'li, bajariladigan fayl yoki argumentlar ro'yxatini qabul qilmaydi. API tanasi o'lchamli pipeline va handler'ning inkremental tanasi o'qigichi mustaqil ravishda 50 MiB broker kirish cheklovini ta'minlaydi. Uning chegaralangan navbati bir vaqtning o'zida bitta ekstraktsiyani bajaradi, to'rt kutayotgan ishga ruxsat beradi va kutayotgan kirishni 100 MiB bilan cheklaydi.

Broker ichida `ffprobe` shaxsiy mahalliy faylni o'qiydi; belgilangan formatlar ro'yxati pleylist va manifest formatlarini o'z ichiga olmaydi. Ruxsat etilgan MOV-oila konteynerlari uchun tashqi MOV ma'lumot havolalari standart bo'yicha o'chirilgan va belgilangan buyruq ularga qo'shilmaydi. `ffprobe` va `ffmpeg` faqat `file` protokoli ro'yxatidan foydalanadi, bitta ip, belgilangan argumentlar massivlari, hech qanday shell va `PATH` dan hal qilingan bajariladigan fayllar. Qo'shilgan rasm qopqog'i oqimlari o'ynaladigan nomzodlar emas. Barcha o'ynaladigan oqimlar cheklovlarga mos kelishi kerak va aniq standart oqim eng past indeksga ega bo'lgan fallbackdan oldin afzal ko'riladi. Videolar 600 soniyaga, har bir o'lchov uchun 8,192 pikselga va 33,554,432 manba pikselga cheklangan. FFmpeg 1–16 o'rtacha JPEG ramkalarini namuna oladi, uzun chetni eng ko'pi bilan 1,024 pikselga kamaytiradi, kichik kirishlarni oshirmaydi va hech qachon URL qabul qilmaydi. Namuna olish standart bo'yicha `uniform` hisoblanadi. Ixtiyoriy `scene_aware` va tajribaviy `segment_aware` siyosatlari allaqachon tasdiqlangan mahalliy oqim ustida bir qo'shimcha belgilangan FFmpeg o'tishini amalga oshiradi, cheklangan `showinfo` sahna vaqtlarini tanlaydi va detektor muvaffaqiyatsiz bo'lganda, vaqt o'tishi, noto'g'ri chiqish yoki bo'sh nomzodlar to'plami bo'lsa, bir xil bir xil o'rtacha nuqtalarga qaytadi. Segmentga oid rejim tasdiqlangan sahna intervaliga nisbatan o'rtacha namuna ajratadi; segmentga oid dalillar va fallback xulq-atvor quyida batafsil bayon etilgan. Qattiq 16-ramka cheklovi har bir siyosatda tanlovdan keyin qo'llaniladi. Sahna bilan bog'liq so'rovda faqat bitta ramka byudjeti bo'lsa, u faol to'liq-video yoki fokus oynasining bir xil o'rtacha nuqtasidan foydalanadi va `policyEffective: uniform` deb hisobot beradi: bitta tanlangan sahna ramkasi vaqtning ikkala oxirini saqlay olmaydi. Chaqiruvchi ixtiyoriy ravishda cheklangan fokus oynasini (`start`/`end` soniyalari) taqdim etishi mumkin; chegaralar media davomiyligiga bog'lanadi, teskari yoki cheksiz oynalar rad etiladi va barcha namuna olish siyosatlari faqat normallashtirilgan interval ichida amalga oshiriladi. Natijaviy oynalar namuna olish metadata'siga va ishonchsiz tavsif prefiksiga kiritiladi, shunda pastki modellari to'liq vaqt chizig'idan fokuslangan parchani ajratishi mumkin.

Semantik sarlavha fokusini alohida, aniq sozlashdir. Standart `full` tahlil rejimi mavjud ramka so'rovini saqlaydi va hech qachon so'rov matnini sarlavha modeliga uzatmaydi. `focused` rejimida, ko'prik faqat eng so'nggi bo'sh bo'lmagan foydalanuvchi tomonidan yozilgan `text`/`input_text` ni bir xil Chat yoki Responses konteyneridan o'qiydi, uni NFC ga normallashtiradi, nazorat belgilarini va bo'sh joylarni qisqartiradi va 500 Unicode kod nuqtasiga cheklaydi. Bo'sh natija aniq `full` so'roviga qaytadi. Foydalanish mumkin bo'lgan maslahat JSON formatida alohida ishonchsiz-foydalanuvchi-kontekst blokida seriyalanadi va faqat ko'rinadigan tafsilotlarni ustun qo'yishi mumkin; u media ichida ko'rinadigan yoki eshitiladigan ko'rsatmalarga amal qilishga qarshi alohida ogohlantirishni bekor qila olmaydi. Matnli fokus hech qachon `start`/`end` ni taxmin qilmaydi yoki vaqt namunasini o'zgartirmaydi.

#### FU-07 struktural segment dalillari

`segment_aware` allaqachon tasdiqlangan mahalliy video oqimini bir marta cheklangan oldindan tahlil qilishdan foydalanadi. Qattiq filtr zanjiri avval 320 piksel kenglikka qadar o'lchamni o'zgartiradi, sahna o'zgarishlarini va muzlatilgan intervallarni aniqlaydi, so'ngra 1 soniyada 1 kadrni namuna oladi, bu esa xiralik, o'rtacha luma va fazoviy/vaqt ma'lumotlarini o'z ichiga oladi. O'tkazish 600 struktural namuna, bitta FFmpeg/filter ipi, faqat `file` protokoli va konteyner ruxsatnomalari, 1 MiB jarayon-natija chegarasi va brokerning umumiy bekor qilish/muddatida eng ko'pi bilan 30 soniya bilan cheklangan. U hech qachon buyruq, filtr, yo'l yoki URLni so'rovdan qabul qilmaydi.

Struktural qiymatlar deterministik namuna olish dalillari bo'lib, semantik video tushunish emas. Ular mavzular, harakatlar, sarlavhalar, nutq yoki foydalanuvchi niyatini anglatmaydi. Sahna va muzlatish chegaralari segmentlarni hosil qiladi; muzlatish qamrovi, xiralik, ekspozitsiya, fazoviy tafsilot va vaqt o'zgarishi mavjud 1–16 kadr byudjetining qanday taqsimlanishiga ta'sir qiladi. To'liq muzlatilgan segment bitta kadr bilan cheklangan, non-muzlatilgan segmentlar esa qolgan byudjet uchun raqobatlashadi. Agar chegaralar kadrlarni ortiqcha bo'lsa, bir xil vaqt chizig'i qamrovi saqlanadi, shuning uchun tezkor erta kesmalar uzoq davom etadigan segmentni yashira olmaydi. Muzlatish chegarasining 1 soniyalik tahlil aniqligida sahna chegaralari birlashtiriladi.

Yo'qolgan filtrlar, noto'g'ri/bo'sh dalillar, detektor xatosi yoki cheklangan oldindan tahlil vaqtining tugashi aniq bir xil o'rtacha siyosatga ochiq muvaffaqiyat bilan tugaydi. Qo'ng'iroqni bekor qilish yoki broker muddati ochiq muvaffaqiyat bilan tugamaydi: bu uchayotgan subprocessni tugatadi, keyingi kadrlarni olishni oldini oladi va maxfiy vaqtinchalik daraxt `finally`da olib tashlanadi.

`scripts/perf/video-bridge-fu07-eval.ts` post-dedup sarlavha-calling tejash, zich-harakat byudjetini taqsimlash, xiralik/ekspozitsiya/SI-TI dalillari, uzoq quyruqli tez kesmalar va bosqichma-bosqich o'chirish xato ijobiylarini yaratadi. U oldindan tahlil devor vaqtini yozib oladi va `/usr/bin/time` mavjud bo'lsa, bolalar CPU va eng yuqori RSSni qayd etadi. Uning sifat tekshiruvlari faqat struktural orakllardir. Haqiqiy sarlavha-model sifat `HOLD` holatida qoladi, chunki bu tizimda ruxsat berilgan nuqtai nazar yoki muzlatilgan hakam yo'q. Moliyaviy tejashlar ham `HOLD` holatida qoladi, agar `--caption-cost-per-call-usd` aniq ijobiy har bir qo'ng'iroq uchun baho taqdim etmasa; skript hech qachon bunday natijalarni yasamaydi.

Har bir kadr 4 MiB bilan cheklangan, barcha xom kadrlar birgalikda 23 MiB ga, va seriyalangan broker javobi 32 MiB ga cheklangan. Maxfiy vaqtinchalik katalog `finally`da olib tashlanadi. OmniRoute FFmpegni o'z ichiga olmaydi va maxsus bajariladigan yo'lni qabul qilmaydi. Sarlavhalashdan oldin, ko'prik ehtiyotkor vizual deduplication o'tkazadi: har bir JPEG 16×16 qora-oq buferga qisqartiriladi va faqat oxirgi saqlangan kadr bilan solishtiriladi. Bir kadrdan yuqori so'ralgan sarlavha byudjeti uchun, ekstraksiya ikki barobar ko'proq byudjetga ega bo'lgan cheklangan nomzodlar bazasini taqdim etadi va hech qachon 16 kadrdan ko'proq bo'lmaydi. So'ralgan cheklov faqat deduplicationdan keyin qo'llaniladi, birinchi va oxirgi tanlangan nomzodlar oxirgi ingichka bo'lish jarayonida saqlanadi, agar byudjet kamida ikki bo'lsa. Versiyalangan `grayscale-16x16-mean-cells-v2` siyosati o'rtacha luma delta va normallashtirilgan delta kamida 0.05 bo'lgan miniaturalar hujayralarining nisbati ichidan kattaroqini ishlatadi. Takroriy chegarasi 0.04 doimiy bo'lib, bashorat qilish uchun tanlangan, ish vaqtida sozlash sifatida ochiq ko'rsatilmagan. Ushbu ikkilamchi yuqori-kontrast signal kichik harakat va ko'rinadigan matn o'zgarishlarini saqlaydi, bu esa faqat o'rtacha solishtirish orqali yashirilishi mumkin. Taqqoslagich yoki dekoder xatolari ochiq muvaffaqiyat bilan tugaydi va qamrovni saqlaydi. Chiqarish metama'lumotlari chiqarilgan nomzodlarni, muvaffaqiyatli ishlatilgan kadrlarni va vizual takroriylarni ajratadi.

Aniq belgilangan video qismi vaqt belgilangan kontakt varaqasini so'rashi mumkin. Ko'prik eng ko'pi bilan 4 ustunli, 16 kadrli JPEG panjarasini quradi. Har bir 512-piksel hujayra o'z manba vaqtini yuqori-kontrast pastki lentaga yozadi, bir xil vaqtlar esa pastki bog'lanish va audit uchun matnli metama'lumotlarda qoladi. To'liq JPEG 32 MiB bilan cheklangan. Agar `sharp` panjarani dekodlash yoki tuzishda muvaffaqiyat qozona olmasa, ko'prik individual JPEG kadrlariga qaytadi; mijozni bekor qilish hali ham varaqa operatsiyasi orqali tarqaladi.

Taqdimot dalillari sun'iy tarkib mikrobenchmarkidan alohida. `scripts/perf/video-bridge-contact-sheet-eval.ts` haqiqiy OpenAI bilan mos keladigan ko'rish modellari uchun sxema-versiyalangan A/B tizimini belgilaydi. U provayder tomonidan hisobot qilingan tokenlarni, oxirgi devor kechikishini (varaqa tarkibini o'z ichiga olgan holda), model-calling sonini va manifest tomonidan belgilangan fakt saqlashni o'lchaydi. Xom model javoblari hisobotga yozilmaydi; faqat SHA-256 xulosalari va mos keluvchi fakt IDlari saqlanadi. Tizim hech qanday tarmoq yoki pullik model chaqiruvini amalga oshirmaydi, agar `--execute-real` o'tkazilsa va `--model`, `OMNIROUTE_BASE_URL`, va `OMNIROUTE_API_KEY` sozlangan bo'lsa. Ushbu aniq haqiqiy ish bo'lmasa, uning mashinaga o'qiladigan hukmi `HOLD` holatida qoladi; sun'iy yuk/chaqiruv-soni o'lchovlari bitta taqdimot dalili emas.

Alohida `scripts/perf/video-bridge-promotion-eval.ts` FU-07 yoki FU-09 kuzatishlarini iste'mol qiladi. Taqdimot qabul qilish barcha sakkiz sun'iy ssenariy turlarini va tozalangan haqiqiy klipni, har bir rol va holat uchun kamida uchta o'lchangan takrorlashni, barcha o'nta e'lon qilingan metrikalarni, muzlatilgan media/prompt/expected-fact/settings xulosalarini, noyob kuzatish IDlarini va tasdiqlangan urug'langan A/B tartibini talab qiladi. Ijro qog'ozi korpus xulosasini, aniq nomzod SHA va model versiyasini bog'laydi. Yo'qolgan yoki noto'g'ri o'lchovlar `HOLD` holatida qoladi, jumladan CPU 30 s dan yuqori, eng yuqori RSS 512 MiB dan yuqori yoki oldindan tahlil 30 s dan yuqori. Bu dalil-qabul qilish chegaralari, yangi ish vaqtida RSSni majburiy ravishda ta'minlash kafolati emas.

FU-07 kamida 98% sifatni saqlab qolishni va p95 kechikishini bazadan 1.2x dan oshmasligini talab qiladi, shuningdek, teng o‘rtacha tavsif chaqiruvlarida 0.05 mutlaq holatga muvofiq o‘rtacha eslatma yaxshilanishi yoki kamida 10% kam o‘rtacha post-dedup tavsif chaqiruvlari talab etiladi. FU-09 kamida 0.85 sifat, 95% saqlash, 20% p95 kechikish kamaytirish va 10% token kamaytirishni talab qiladi. Muqaddas-fakt yo‘qotilishi, qo‘shish bo‘yicha muvofiqlik yoki foydalanishning yo‘qligi ko‘tarilishiga to‘sqinlik qiladi. Bir bajarilish hech narsani ko‘tarolmaydi: `--previous-report` bir xil siyosat/model tahriri/kandidati/korpusning ikki alohida, bir-biriga to‘g‘ri kelmaydigan, ketma-ket mos bajarilishlarini tasdiqlaydi. Namuna tajribasi aloqa varaqasi tajribasini tasdiqlay olmaydi.

Kollektorlar javoblarni xotirada baholashlari va `responseDigest` bilan birga metrikalar va kuzatish bog‘lanmalarini saqlashlari kerak, hech qachon javob matnini emas. Istemolchi ham meros bo‘lib qolgan xom kuzatishlarni o‘qiydi, lekin hech qachon o‘sha matnni hisobotlariga nusxalamaydi. Har bir kuzatish uchun `responseDigest` yoki `rawResponseText` dan faqat biri qabul qilinadi. Versiyalangan ruxsatnomalar bo‘sh qoladi va o‘zgarmas `hold` standartiga ega. Mos keluvchi kirish o‘z dalil manbasini, siyosatini, model tahririni, aniq kandidat SHA, manifest xulosasini va ikkita alohida bajarilish IDlarini talab qiladi; qarama-qarshi kontekstlar rad etiladi. Ushbu metadata audit shartnomasi bo‘lib, ko‘rsatilgan fayl haqiqiy o‘lchovlarni o‘z ichiga olishini isbotlamaydi. Har qanday kirishni qo‘shishdan oldin haqiqiy kvitansiyalarni ko‘rib chiqing. Boshqaruv statistikasi nuqtasi va Video boshqaruv paneli ehtiyotkor tayyorgarlikni ochib beradi. Konfiguratsiyalangan model aliasi o‘z tahririni yoki ishlayotgan kandidat SHA ni o‘rnatmaydi, shuning uchun joriy boshqaruv paneli boshqa bajarilish kontekstidan mos kelishni qayta ishlatish o‘rniga `HOLD` ni hisobot qiladi. Aniq tajriba tanlovi ko‘tarilishdan alohida qoladi; hech qanday standart avtomatik ravishda o‘zgartirilmaydi.

Chaqiruvchilar allaqachon moslashtirilgan matnga ega bo‘lganda qo‘shimcha `transcript.cues` massivini qo‘shishlari mumkin. Har bir cue `text`, o‘lchangan davomiylik ichida cheklangan `start`/`end` intervalini va oqilona `source` (`client`, `embedded`, yoki `audio-bridge`) ni o‘z ichiga olishi kerak; `confidence` standart bo‘yicha `1` ga teng va `0` va `1` orasida qolishi kerak. Aniq takroriy cues birlashtiriladi. OmniRoute hech qachon ushbu metadata dan transkripsiyani boshlamaydi: tasdiqlangan cues tavsiflangan natijaga manba, ishonch va interval bilan nusxalanadi va ramka tavsiflari bilan birga ishonchsiz kuzatishlar sifatida ko‘rsatiladi. Noto‘g‘ri, chegaradan tashqaridagi yoki kelib chiqishi bo‘lmagan matn rad etiladi, aksincha tavsif oqimiga aralashmaydi. Ikkala so‘rov-tanasi transkript kanallari taqdim etilgan kelib chiqishni `client` ga normallashtiradi, o‘z-o‘zini tasdiqlagan `embedded` yoki `audio-bridge` yorliqlarini o‘z ichiga oladi. Faqat serverga tegishli adapter ushbu ishonchli yorliqlarni faqat kodga asoslangan `trustedSource` argumenti orqali belgilashi mumkin; so‘rov JSON maydoni ushbu argumentga yetib bormaydi. Transkript matni ishonchsiz media-asoslangan kontent bo‘lib, kelib chiqishidan qat’i nazar, hech qachon ruxsatni belgilashda ishlatilmasligi kerak.

Rivojlangan chaqiruvchi bir xil video uchun `audioTranscript` trekini taqdim etishi mumkin; bu server transkripsiyasining isboti emas, balki mijoz tomonidan taqdim etilgan matn sifatida qaraladi. Fuzion qirralari vizual va audio kuzatishlarni bitta muddat va to‘xtatish signalida olib boradi, ularni umumiy vaqt chizig‘ida tartiblaydi, aniq takrorlarni birlashtiradi va faqat bitta tomon muvaffaqiyat qozonganida qisman natijani hisobot qiladi. Noto‘g‘ri `audioTranscript` qisman natijaga pasayadi — vizual tavsif saqlanadi va audio bo‘limi sanitizatsiya qilingan muvaffaqiyatsizlik kodini yozadi — butun videoni muvaffaqiyatsiz qoldirmasdan. Har bir bo‘limning mavjudligi, qisman bayroq va sanitizatsiya qilingan muvaffaqiyatsizlik kodlari tavsiflangan natijada, himoya metadata (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), natija-kesh metadata va ko‘prik fuzion hisoblagichlarida saqlanadi. Standart Video Bridge yo‘li nutqdan matnga o‘tishni chaqirmaydi yoki ikkinchi media nusxasini yuklamaydi; ushbu aniq trek bo‘lmasa, u faqat video bo‘lib qoladi.

**Transkriptni saqlash (#12150 P1).** Bu avtomatik ravishda Video Bridge (o‘zi opt-in) transkript cue ni ko‘rsatganda qo‘llaniladi — alohida saqlash bayrog‘i yo‘q. So‘rov har qanday transkript cue ni (chaqiruvchi tomonidan e’lon qilingan `transcript` yoki birlashtirilgan `audioTranscript`) ko‘rsatganda, himoya bayrog‘i uni `videoBridgeObserved` deb belgilaydi va video tavsifining qizil rangli soyasini ishlab chiqaradi — har bir cue ning erkin matn tanasi `[redacted-video-transcript]` bilan almashtiriladi, bu esa tuzilgan cue maydoni satr yig‘ilishi oldidan almashtirilishi orqali yaratiladi (hech qachon tekis matnni tahlil qilish orqali emas, shuning uchun hech qanday cue mazmuni — raqobatbardosh yoki oddiy, `]` ni o‘z ichiga olgan tanalar kabi, masalan, `[inaudible]`/`[music]` — saqlanmaydi). Saqlangan chaqiruv-log so‘rov tanasida har bir video-asoslangan matn qismiga ushbu qizil rangli soyani almashtiradi, mazmun tengligi bilan mos keladi; `fullText` ankrasi tugallangan oldingi chaqiruv himoya yukidan qayta o‘qiladi, shuning uchun moslik keyinchalik zanjir himoyalaridan (PII va credential maskerlar, ustuvorlik 10/95) tavsif matnini joyida qayta yozganda ham muvaffaqiyatli bo‘ladi va tizim-prompt/uzatish/xotira qo‘shilishi xabarlar massivini shakllantirganda ham. Modelga yuborilgan tanasi o‘zgarmaydi. Kuzatilgan so‘rov ham hech qanday barqaror Xotira (so‘rov va javobdan olingan ekstraktsiyalar o‘tkaziladi) to‘ldirmaydi, shuning uchun modelning o‘z javobi transkript matnini Xotiraga aks ettira olmaydi.

**Xom video maydonlari (#12430).** Ko‘prik yoqilganda va mahalliy video qo‘llab-quvvatlash noma’lum yoki yo‘q bo‘lganda, belgilangan `transcript`/`audioTranscript` maydonlari ham `videoBridgeObserved` ni faollashtiradi, tavsif muvaffaqiyatsiz bo‘lsa yoki `maxVideos` chegarasi o‘rnatilgan bo‘lsa ham. `null` va bo‘sh satrlar hisobga olinadi; yo‘q maydonlar va video bo‘lmagan metadata hisobga olinmaydi. Saqlangan nusxalar ushbu maydonlarni qizil rangga o‘tkazadi yoki so‘rovni o‘tkazib yuboradi, va keshlar/Xotira o‘tkaziladi.

Ushbu zaxira yo'llarida, haqiqiy chaqiruvchilar belgilari qo'llab-quvvatlanadigan `text`/`input_text` qismlariga aylanadi, bu esa standart bo'lmagan provayder maydonlari emas. Ikkala so'rovga taqdim etilgan treklar ishonchsiz `client` kuzatuvlari bo'lib qoladi, video tasvirlanmaganligi va vaqt belgilari media bilan tasdiqlanmaganligi haqida aniq ogohlantirish bilan. Mavjud 256-belgi/64-KiB umumiy va har bir belgi byudjetlari ikkita trek bo'yicha birgalikda amal qiladi; vaqt belgilari brokerning 600-soniyalik yuqori chegarasiga va har qanday taqdim etilgan fokus oynasiga mos kelishi kerak. Noto'g'ri treklar tashlab yuboriladi, tasodifiy matn sifatida uzatilmaydi; haqiqiy aka-uka hali ham ishlatilishi mumkin, agar ularning birgalikdagi byudjeti oshirilmasa. Null/bo'sh maydonlar hech qanday matn qo'shmaydi. Ushbu zaxira orqali hech qanday media olish yoki transkriptsiya qo'shilmaydi. Transkript kengaytma maydonlari zaxira video tashuvchisidan va uning `video_url`/`source` ob'ektlaridan olib tashlanadi. OpenAI simi ruxsatnomasi qat'iy qoladi; noma'lum mahalliy video tashuvchilar mavjud bo'lib qoladi va tanilgan faqat matnli maqsadlar xavfsiz belgilarga ega bo'ladi. Tuzilgan qizil rangli soyalar qo'shilgan transkript matnini himoya qiladi, asl chaqiruvchi tomonidan egallangan so'rov esa o'zgarmaydi. Mahalliy qo'llab-quvvatlanadigan maqsadlar va o'chirilgan ko'priklar o'zlarining mavjud o'zgarish xulq-atvorini saqlab qoladi.

Qo'shimcha saqlangan nusxalar bir xil kuzatilgan-so'rov signalidan foydalanadi. Xom pre-guardrail client-so'rov snapshot, xotirada kutayotgan so'rov va erta rad etilgan so'rov logi video qismlaridagi transkript maydonlarini tuzilgan holda almashtiradi; pipeline bosqichlari va kontekst o'tkazish tomonidan sintetik ravishda yaratilgan satr takliflari saqlangan-so'rov-tana cho'kmasida qizil rangga bo'yaladi. Saqlangan `video_content_removed` belgilovchisi `previous_response_id` davomiyligini yopiq qilib qo'yadi, aksincha, qasddan tashlab yuborilgan matnni qayta tiklamaydi. Agar kuzatilgan so'rov loglashdan oldin har bir qism qizil rangli soyasini yo'qotib qo'ysa, yoki hatto bir nechta video soyalaridan biri keyingi so'rov o'zgarishlaridan keyin mos kelmasa, saqlangan so'rov tanasi butunlay chiqarib tashlanadi, qisman qizil rangga bo'yalgan transkriptni saqlab qolish o'rniga.

Kuzatilgan so'rov uchun model javobi transkriptning har qanday qismini tuzilgan belgi chegarasiz iqtibos keltirishi mumkin. Uning saqlangan chaqiruv-logi `responseBody` shuning uchun chiqarib tashlash belgilovchisi bilan almashtiriladi; batafsil pipeline artefakti (bu yuqoridan/client tanalari va oqim bo'laklarini o'z ichiga olishi mumkin) saqlanmaydi. Semantik, idempotentlik va mantiqiy qayta ijro qilish keshlar o'sha so'rov uchun o'qish va yozishni chetlab o'tadi. Provayder so'rovi va mijozga ko'rinadigan javob o'zgarmaydi. Batafsil artefakt chiqarib tashlanganda erta saqlash baytlari vaqtinchalik buferdan chiqariladi. Kiro'ning noto'g'ri EventStream ogohlantirishlari faqat yuklama baytlar sonini hisobot qiladi, hech qachon uning mazmuni yoki JSON parserining xom xatosini.

Bu har bir aloqasiz provayder/plugin diagnostikasi tekshirilganligini da'vo qilmaydi; kengroq saqlangan-sink tozalash #11658 da kuzatiladi.

Ichki `/api/modality-bridge/video/drilldown` hayotiy sikli alohida, loopback/token-autentifikatsiyalangan kesh substrati hisoblanadi. Har bir operatsiya ham kanonik opak asosiy ID talab qiladi. Ishlab chiqarish chaqiruvchisi yoqilgandan oldin, u ushbu IDni autentifikatsiyalangan ijarachidan olish kerak va hech qachon mijoz tanlagan qiymatni uzatmasligi kerak. Kesh kalitlari ushbu asosiy IDni kanonik sessiya va video-referens IDlariga bog'laydi, faqat ularning SHA-256-dan olingan kalitlarini saqlaydi va o'qish va o'chirishni bir xil asosiy IDga bog'laydi. Kesh har bir kirish uchun eng ko'pi bilan 16 ta olingan JPEG ramkalarini saqlaydi, ularni o'n daqiqadan keyin muddati o'tadi va chegaralangan `start`/`end` o'qish yoki aniq sessiya o'chirishni qo'llab-quvvatlaydi.

Har bir asosiy ID 16 kirish va 64 MiB kanonik JPEG ma'lumotlari bilan cheklangan. Ushbu cheklovlar global 64-kirish/256 MiB yuqori chegarasidan mustaqil: asosiy kvota bosimi faqat ushbu asosiy IDning eng kam ishlatilgan kirishlarini chiqarib tashlaydi, global LRU chiqarib tashlash ko'rib chiqilguncha. Muddati o'tgan kirishlar kesh faoliyati davomida asosiy va global hisobdan chiqariladi, o'chirish va tasdiqlash muvaffaqiyatsizligi qisman almashtirishni amalga oshirmaydi.

Kesh kanonik bo'lmagan Base64, ortiqcha to'ldirish, non-JPEG media, noto'g'ri yoki kesilgan JPEGlarni va chegaralangan to'liq tasvir `sharp` dekodlash jarayonida ogohlantirish beruvchi JPEGlarni rad etadi. Har bir qabul qilingan tasvirni kanonik JPEG sifatida qayta kodlaydi, kenglik va balandlikni dekodlangan baytlardan olish o'rniga chaqiruvchi maydonlariga ishonmaydi va har qanday oxirgi polyglot baytlarni saqlash o'rniga chiqarib tashlaydi. Faqat chegaralangan kanonik siqilgan bufer ikkita kvotaga to'lanadi. JSON simi chegarasi 32 MiB dekodlangan-kirish yuqori chegarasi uchun Base64 ortiqcha xarajatlarni o'z ichiga oladi. Har bir saqlangan derivatsiya o'zining tasdiqlangan JPEG formatini/rezolyutsiyasini, namuna siyosatini, derivatsiya versiyasini, yaratilgan vaqtini, server tomonidan hisoblangan kontent xeshini va xeshlangan ota-referensini, shuningdek, ishonchli chaqiruvchining ota-kontent xeshini qayd etadi. O'chirish asinxron dekodlash/xesh bosqichlari o'rtasida tekshiriladi, atomik kesh majburiyati oldidan.

Ishlab chiqarish ishlab chiqaruvchisi allaqachon olingan broker ramkalarini faqat muvaffaqiyatli vizual tahlildan so'ng qayta ishlatadi, ikkinchi video yuklash/ekstraktsiya qilinmaydi. U operator `modalityBridgeVideoDrilldownEnabled=true`, qat'iy har bir qism `drilldown: true` va autentifikatsiyalangan API-kalit rekord ID talab qiladi. Mijoz tomonidan e'lon qilingan asosiy/session qiymatlari hech qachon mulkni o'rnatmaydi. Uchta shartning barchasi bo'lmasa, u xesh qilmaydi, o'lchamaydi yoki qo'shimcha ramkalarni saqlamaydi. Saqlash muvaffaqiyatsizligi foydalanish mumkin bo'lgan vizual javobni saqlab qoladi. Rozilik berilgan so'rovlar butun video natija keshini chetlab o'tadi, shuning uchun keshlangan natijalar hech qachon qayta ijro qilinmaydi.

Muvaffaqiyatli JSON va SSE javoblari eng ko‘pi bilan to‘rt opak tutqichni cheklangan `x-omniroute-video-drilldown` sarlavhasida ochib beradi. Ruxsat berilgan brauzer manbalari bu sarlavhani CORS manba siyosatini kengaytirmasdan o‘qiy oladi. Yangi tutqichlar `v1.<32-byte random base64url token>` formatida bo‘ladi va ro‘yxat faqat ularning SHA-256 xeshlarini saqlaydi. O‘quvchi/sarlavha parseri eski 64-hex tutqichlarni ham qabul qiladi. Tasdiqlangan jamoatchilik iste'molchisi `GET /api/v1/video-bridge/drilldown?handle=...` manzilidan foydalanadi, bu esa `modalityBridgeVideoDrilldownRemoteEnabled=true` orqali mustaqil ravishda nazorat qilinadi. Aniq saqlangan yolg‘on ruxsatlar, hatto eski `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` muhit o‘rniga o‘rnatilgan bo‘lsa ham, kirishni bekor qiladi. Ishlab chiqarish saqlashida esa eski `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` o‘rniga o‘rnatilgan. Ikkala o‘rin ham standart bo‘yicha o‘chirilgan.

Iste'molchi tasdiqlangan kalitdan egalikni oladi, kalit siyosatini qo‘llaydi va noma'lum, muddati o‘tgan va boshqa kalitning tutqichlari uchun bir xil 404 qaytaradi. U `variant=preview|standard|detail` (maksimal JPEG o‘lchami 320/640/1280, hech qachon kengaytirilmaydi), `limit=1..8` (yoki eski `frames` taxallusi, hech qachon ikkisi birga emas), nolga asoslangan `page`, va ixtiyoriy `start`/`end` fokus soniyalarini qabul qiladi. Takroriy so‘rov kalitlari va teskari fokus oynalari rad etiladi. Har bir qaytarilgan variant o‘zining haqiqiy mazmuni va haqiqiy yechim metadatasining xeshini o‘z ichiga oladi, saqlangan manbaga bog‘langan. Variantlar o‘qish paytida olinadi, qo‘shimcha saqlangan nusxalar sifatida emas. JSON javobi, Base64/qoplama bilan birga, 32 MiB bilan cheklangan; juda katta sahifa 413 qaytaradi va mijoz kamroq ramkalarni so‘rash kerak. O‘qish har bir o‘lchovdan keyin bekor qilishni tekshiradi va qaytarishdan oldin tutqichning haqiqiyligini qayta tekshiradi. Egasi tomonidan `DELETE` idempotentdir; o‘chirish yoki TTL muddati o‘tishi saqlangan manbani va foydalanish hisobini ozod qiladi.

Ushbu umumiy saqlash jarayon mahalliydir: tutqichlar qayta ishga tushirilganda muddati o‘tadi va mustaqil OmniRoute jarayonlari o‘rtasida o‘tkazilmaydi. Boshqaruv statistikasi samarali saqlash/masofaviy siyosatni va yig‘ilgan saqlangan yozuvlar/byte'larni ochib beradi, hech qachon media, havolalar, asosiy ID'lar yoki tutqichlar haqida ma'lumot bermaydi. Video sozlamalari paneli ushbu qiymatlarni ko‘rsatadi va ikkita rozilik o‘zgartirishlarini saqlab qolishi mumkin. Ushbu amalga oshirish hujjati jonli joylashtirish yoki reklama dalili emas; haqiqiy model qabul qilinishi alohida kuzatiladi.

Ramkalar konfiguratsiyalangan Video modeli bilan ketma-ket subtitrlar bilan ta'minlanadi. Bo‘sh Video o‘zgartirishlari Vision sozlamasini meros qilib oladi; agar ikkalasi ham bo‘sh bo‘lsa, Vision avtomatik yo‘naltiruvchi samarali ko‘rish qobiliyatiga ega modelni tanlaydi. Muvaffaqiyatli subtitrlar asl qismni barqaror `[Video description:` prefiksi bilan almashtiradi, bu ham matnni ishonchsiz media-asoslangan kuzatuv sifatida belgilaydi va pastki modellarga media ichida topilgan ko‘rsatmalarga amal qilmaslikni aytadi. Ramka-subtitr kesh kalitlari JPEG baytlarini, so‘rovni, vaqt belgisini va samarali modelni o‘z ichiga oladi; faqat muvaffaqiyatli subtitrlar keshda saqlanadi. Kesh yozuvlari haqiqiy muvaffaqiyatli ishlab chiqaruvchi modelni, shu jumladan zaxira modelini saqlaydi; ko‘prik `mixed` deb xabar beradi, agar turli ramkalar turli modellardan ishlab chiqarilgan bo‘lsa. Kesh urushi o‘sha ishlab chiqaruvchi identifikatorini qayta belgilash o‘rniga qayta ishlatadi. Butun-video natija kesh har qanday chiqishni o‘zgartiradigan har bir kirish bo‘yicha kalitlanadi — so‘rov, samarali model, namuna siyosati, ramka soni, semantik tahlil rejimi, normallashtirilgan fokus ko‘rsatmasining SHA-256 barmog‘i, fokus oynasi, `transcript`, `audioTranscript`, va kontakt-varaqa bayrog‘i — shuning uchun ushbu o‘lchovlardan birortasini o‘zgartirish keshni yo‘qotadi, hech qachon eskirgan qayta foydalanish emas. Vizual takrorlash siyosati versiyasi, chegarasi va cheklangan nomzod-ramka soni natija-kesh kaliti va metadatasida ham aniq ko‘rsatilgan; shuning uchun siyosat o‘zgarishi eskirgan butun-video tavsifini qayta ishlata olmaydi. Natija-kesh v4 metadatasi rejim va barmoqni saqlaydi, hech qachon xom foydalanuvchi vazifasini emas. Guardrail metadatasi so‘ralgan va samarali tahlil rejimlarini hisobot qiladi; foydalanishga yaroqli foydalanuvchi matni bo‘lmagan so‘ralgan `focused` rejimi samarali `full` sifatida hisobot qilinadi.

Guardrail har bir qo‘llab-quvvatlanadigan video qismini chiqaradi, lekin `modalityBridgeVideoMaxVideos` dan ko‘proq tavsiflamaydi. `supportsVideo === false` ekanligi isbotlangan maqsadlar uchun, muvaffaqiyatsiz va cheklangan videolar aniq xavfsiz matn belgilari bo‘lib qoladi, shuning uchun hech qanday xom video saqlanmaydi. Qobiliyat noma'lum bo‘lganda, ushbu qismlar o‘z video tashuvchisini saqlaydi; har qanday zaxira transkripti yuqoridagi cheklangan matn konversiyasiga amal qiladi. `supportsVideo === true` bo‘lgan maqsadlar ko‘prikni o‘tkazib yuboradi. Mijoz so‘rovini bekor qilish signali yuklash, broker navbati, jarayonlar va subtitr chaqiruvlari orqali tarqaladi; bekor qilishlar videolar orasida to‘xtaydi va hech qachon xom media ga ochiq qolmaydi.

Ish vaqti sozlamalari DB asosida va Zod tomonidan tasdiqlangan:

| Kalit                               | Standart    | Oralig‘i / xulq-atvori                                                                                             |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`     | Ixtiyoriy ish vaqti, rozi bo‘lish                                                                                  |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` umumiy subtitrlarni saqlaydi; `focused` cheklangan, ishonchsiz oxirgi foydalanuvchi kontekstini ishlatadi   |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge modelini meros qilib oladi                                                                           |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                               |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, yoki proporsional `segment_aware`; detektor muvaffaqiyatsiz bo‘lsa, `uniform` ga qaytadi |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                     |

Legacy saqlangan Video vaqt o‘tkazish qiymatlari 120 soniyadan yuqori bo‘lsa, broker muddatiga moslashtiriladi; yangi sozlamalar ushbu cheklovdan yuqori bo‘lsa rad etiladi. `GET /api/modality-bridge/video/runtime` autentifikatsiya yoki ish vaqti tekshiruvidan oldin ishonchli stampalangan loopback lokalizatsiyasini talab qiladi, so‘ngra boshqaruv autentifikatsiyasini talab qiladi. U faqat `available`, sanitizatsiyalangan FFmpeg/ffprobe versiyalarini va ish vaqti mavjud bo‘lmaganida belgilangan sababni qaytaradi. Ichki ekstraktsiya nuqtasi jamoatchilikka yuklash API emas: nav to‘lishi `503` va `Retry-After` qaytaradi, chaqiruvchi uzilishi `499` qaytaradi, va belgilangan broker muddatini `504` qaytaradi. O‘zgartirilgan javoblar markaziy `x-omniroute-modality-bridge` sarlavhasiga `video->text;model=<visionModel>;parts=<videos>` qo‘shadi, Vision yoki Audio segmentlarini olib tashlamasdan.

### PII Masker (`piiMasker.ts`)

**Ikkala** bosqichda ham ishlaydi.

- **`preCall`** yuklamani klonlaydi, `system`, `messages`, `input` va `prompt` (oddiy satr elementlarini o‘z ichiga oladi) bo‘yicha yuradi va `content`/`text` maydonlariga `processPII()` ( `@/shared/utils/inputSanitizer` dan) qo‘llaydi. `PII_REDACTION_ENABLED=true` bo‘lganda, aniqlangan PII chiqish yuklamasida yashiriladi. Bu `INPUT_SANITIZER_MODE` dan mustaqil (faqat prompt-injection siyosatini boshqaradi). Yashirish o‘chirilganda, chaqiruv aniqlash hisoblarini qayd etadi, lekin mazmunni qayta yozmaydi.
- **`postCall`** javobni chuqur klonlaydi, `sanitizePIIResponse()` va Javoblar-API-shakl maskeri (`maskResponsesOutput` — `output_text` va `output[].content[].text` ni qamrab oladi) ni ishga tushiradi. Agar biron bir yashirish sodir bo‘lsa, o‘zgartirilgan javob aslini almashtiradi.

Himoya hech qachon to‘xtamaydi; u faqat annotatsiya qiladi (`meta.detections`, `meta.redacted`) yoki qayta yozadi.

### Prompt Injection (`promptInjection.ts`)

Foydalanuvchi taqdim etgan mazmundagi adversarial tuzilmalarni aniqlaydi va belgilangan siyosatni amalga oshiradi. Xulq-atvor atrof-muhit o‘zgaruvchilari va konstruktor parametrlaridan kelib chiqadi:

| Sozlama              | Atrof-muhit o‘zgaruvchisi                                                                                | Standart | Ta'sir                                                                                                                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Faollashtirilgan     | `INPUT_SANITIZER_ENABLED`                                                                                | `true`   | `false` bo‘lganda, himoya qisqa yo‘lni o‘tkazadi.                                                                                                                                                                 |
| Rejim                | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                          | `warn`   | Inyeksiya siyosati: `block`, `warn`, yoki `log`. (`redact` orqaga mos kelishi uchun qabul qilinadi, lekin inyeksiya matnini **o‘chirmaydi**; PII qayta yozilishi `PII_REDACTION_ENABLED` tomonidan boshqariladi.) |
| Blokirovka chegarasi | `blockThreshold` parametri / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Blokirovka qilish uchun minimal og‘irlik. O‘rta standartda faqat kuzatish.                                                                                                                                        |

**Rejim ustunligi** (`getMode`): chaqiruvchi `options.mode` →
`INJECTION_GUARD_MODE` **DB xususiyat-flag o‘zgartirish** (Dashboard → Sozlamalar →
Xususiyat Flaglar) → `INJECTION_GUARD_MODE` atrof-muhit → `INPUT_SANITIZER_MODE` atrof-muhit →
`warn`. Shunday qilib, dashboard o‘zgartirishlari atrof-muhit o‘zgaruvchilaridan ustun keladi, shuning uchun Xususiyat Flaglar UI jonli himoyani boshqaradi (qayta ishga tushirishsiz). DB o‘qish xavfsizdir: agar xato bo‘lsa, himoya atrof-muhitga asoslangan xulq-atvoriga qaytadi va hech qanday o‘zgartirish o‘rnatilmaganida xulq-atvor atrof-muhitga asoslangan yechimga tengdir.

Aniqlash manbalari:

1. `sanitizeRequest()` `@/shared/utils/inputSanitizer` dan (pipeline-da boshqa joylarda ishlatiladigan umumiy detektor to‘plami).
2. O‘rnatilgan `DEFAULT_GUARD_PATTERNS` (hozirda `system_override_inline` va `markdown_system_block`, ikkalasi ham `high` og‘irlik).
3. Konstruktor parametrlar orqali o‘tgan ixtiyoriy `customPatterns` (satrlar, regex, yoki `{ name, pattern, severity }` yozuvlari).

Agar `mode === "block"` **va** kamida bir aniqlash og‘irlik chegarasiga mos kelsa, `preCall` `{ block: true, message: "So‘rov rad etildi: shubhali mazmun aniqlangan" }` qaytaradi. `warn`/`log` rejimlarida himoya yozuvlarni qayd etadi, lekin chaqiruvga ruxsat beradi. Umumiy yordamchi `evaluatePromptInjection()` ham chaqiruvchilar uchun eksport qilinadi, ular ro‘yxatdan o‘tmasdan promptlarni baholashlari kerak.

**Skanning chegarasi (v3.8.20):** detektor faqat **birinchi 16 KB** qo‘shilgan prompt matnini tekshiradi — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bayt) `src/shared/utils/inputSanitizer.ts` da. Ikkala `detectInjection()` va `evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` ni ishga tushirishdan oldin bajaradi. Inyeksiya direktivalari kirishning yuqori qismida joylashgan, shuning uchun bu regex CPU/GC ni ko‘p yuz KB yuklamalarda kuchsizlantirmasdan cheklaydi (cf. #3932, #4041).

### Credential Masker (`credentialMasker.ts`)

**Ikkala** bosqichda ham ishlaydi, standart zanjirda oxirgi (ustunlik `95`). Chiqish yuklamasidan (xabar mazmuni, vosita chaqiruv argumentlari, vosita natijalari) yaxshi tanilgan API-kalit / maxfiy-token naqshlarini yashiradi **va** provayder javobini, shunday qilib, promptga joylashtirilgan credential (yoki vosita natijasi tomonidan qaytarilgan) yuqoridagi provayderga yoki mijozga qaytarilmaydi.

- **Faqat opt-in**, PII qizil chiziq bilan bir xil konventsiyasi (Qattiq Qoidalar #20-yaqin):
  `settings.credentialRedactionEnabled === true` **yoki**
  `CREDENTIAL_REDACTION_ENABLED=true` bo'lmaguncha o'chirilgan. U o'chirilganda, himoya chizig'i no-op —
  u hech qachon bloklamaydi va hech qachon qayta yozmaydi.
- `redactCredentials()` to'liq yuklama/javob daraxtini o'rganadi (`walkValue()`,
  prototip ifloslanishiga qarshi, `WeakSet` orqali siklga qarshi) va mosliklarni
  `[REDACTED:<type>]` joylashuvi bilan almashtiradi, faqat haqiqatan ham
  o'zgargan shoxlarni klonlaydi.
- `CREDENTIAL_PATTERNS` LLM provayder kalitlarini (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokenlarini (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), to'lov kalitlarini (Stripe, Square), bulut
  kalitlarini (AWS access key, Twilio, SendGrid, Mailgun), shaxsiy kalitlar / JWTlar,
  credential-bearing ulanish satrlarini (`mongodb://user:pass@...`, va hokazo), va
  umumiy `Authorization`/`x-api-key`/`api-key`/`apikey` sarlavha-qiymat
  naqshlarini qamrab oladi. Sarlavha shaklidagi kalitlar (`authorization`, `x-api-key`, `api-key`,
  `apikey`) struktural ravishda (faqat qiymat, `Bearer `/`Basic ` kabi
  prefiksni saqlab) umumiy matn regex orqali emas, balki qayta yoziladi.
- Himoya chizig'i hech qachon bloklamaydi; u faqat qayta yozadi (`modifiedPayload` /
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
