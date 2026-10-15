# Guardrails (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Nguồn chuẩn:** `src/lib/guardrails/`
> **Cập nhật lần cuối:** 2026-08-29 — v3.8.51 (nguồn gốc bản chép lời Video Bridge do bên gọi khai báo,
> chưa được máy chủ xác minh — đã làm rõ theo #11661)

Các guardrail thực thi những phép biến đổi về an toàn, chính sách và nội dung tại ranh giới
giữa OmniRoute và các nhà cung cấp thượng nguồn. Mỗi guardrail có thể kiểm tra (và
tùy chọn từ chối, biến đổi hoặc chú thích) payload yêu cầu (`preCall`) và
phản hồi thượng nguồn (`postCall`).

Hệ thống hoạt động theo cơ chế **fail-open**: nếu một guardrail phát sinh lỗi trong khi thực thi, registry
sẽ ghi lại lỗi và tiếp tục với guardrail tiếp theo thay vì làm yêu cầu
thất bại. Việc chặn là một quyết định rõ ràng (`block: true`), không bao giờ là sự cố ngoài ý muốn.

## Rào cản tích hợp sẵn

Registry tự động tải sáu rào cản theo thứ tự ưu tiên khi nhập
(xem `registry.ts` → `registerDefaultGuardrails()`):

| Ưu tiên | Tên                 | Giai đoạn(s)   | Tệp                   |
| ------- | ------------------- | -------------- | --------------------- |
| `5`     | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`     | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`     | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`    | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`    | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`    | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Số ưu tiên thấp hơn chạy **trước**.

### Vision Bridge (`visionBridge.ts`) — Rào cản Modalities PR-1

Chặn các yêu cầu chứa hình ảnh nhắm vào **các mô hình không có thị giác** và
hoặc chuyển hướng toàn bộ yêu cầu đến một mô hình có khả năng thị giác hoặc thay thế các phần hình ảnh bằng các mô tả văn bản được tạo ra bởi một mô hình thị giác có thể cấu hình trước khi gọi lên trên. Điều này cho phép các nhà cung cấp chỉ có văn bản xử lý một cách minh bạch các tải trọng đa phương thức.

Luồng:

1. Bỏ qua nếu mô hình mục tiêu đã hỗ trợ thị giác (trừ khi nó xuất hiện trong danh sách cầu nối bị ép `isVisionBridgeForcedModel`).
2. Trích xuất các phần hình ảnh thông qua `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), mà ủy quyền cho **trình phát hiện phương tiện thống nhất**
   `detectMediaParts()` trong `open-sse/utils/mediaParts.ts` — nguồn thông tin duy nhất được chia sẻ với bộ lọc tương thích combo.
   Việc trích xuất được cho phép chỉ đối với các phần cấp cao nhất của các hình dạng
   mà `replaceImageParts` có thể ghép lại (hợp đồng extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, và Responses API `input_image`. Các hit lồng ghép và
   các hình dạng chỉ có chỉ báo là vật liệu bộ lọc combo và không bao giờ được trích xuất.
   Bỏ qua nếu không tìm thấy.
3. Giải quyết cấu hình thời gian chạy thông qua `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): các khóa cài đặt mới `modalityBridge*`
   thắng; các khóa cũ `visionBridge*` vẫn là **một chu kỳ
   dự phòng** (cửa sổ quay lại). Bỏ qua trước bất kỳ sự di chuyển phương tiện nào khi cầu nối bị vô hiệu hóa.
4. Bộ chọn chế độ (`modalityBridgeVisionMode`, xem bảng dưới đây) quyết định
   chuyển hướng so với mô tả. Chuyển hướng trả về `modifiedPayload` với chỉ `model`
   được thay thế, cộng với meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Đường mô tả: giới hạn hình ảnh ở `maxImages`, soạn thảo lời nhắc nhận thức nhiệm vụ,
   tham khảo bộ nhớ cache mô tả, gọi mô hình thị giác **song song**
   (`Promise.allSettled`), và chèn các phần văn bản `[Image N]: <description>` vào
   vị trí của chúng. Một mô tả thất bại sẽ trả về `null` và phần hình ảnh gốc sẽ
   **được bảo tồn** (#4012) — ngoại trừ trên đường mô tả combo khi mọi
   mô tả đều thất bại, nơi một upstream không có thị giác được xác nhận sẽ nhận được
   một stub `(unavailable — no vision-capable provider connected)` thay thế (#8430).
6. Trả về `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Bộ chọn chế độ (`modalityBridgeVisionMode`)

| Chế độ     | Mặc định | Hành vi                                                                                                                                                                                                                                                                                  |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Heuristic cũ, không thay đổi (#6640/#7204): các mô hình không phải combo/`auto/` chuyển hướng đến mô hình thị giác tốt nhất trừ khi mô hình gốc đã có thông tin xác thực có thể sử dụng (sau đó mô tả); các mục tiêu combo luôn mô tả.                                                   |
| `describe` |          | Luôn mô tả — khối chuyển hướng hoàn toàn bị bỏ qua; mô hình do người dùng chọn luôn trả lời.                                                                                                                                                                                             |
| `reroute`  |          | Ép chuyển hướng: khối bảo vệ mô hình có thông tin xác thực được bỏ qua. Bảo vệ thông tin xác thực **mục tiêu** chuyển hướng vẫn áp dụng — khi không có mục tiêu thị giác có thể sử dụng, yêu cầu sẽ rơi vào mô tả để hình ảnh thô không bao giờ đến được backend chỉ có văn bản (#8430). |

Các chế độ bị ép sẽ ngắt mạch **trước** khi heuristic tự động chạy; hành vi `auto`
là byte-identical với rào cản trước PR-1.

#### Phạm vi khóa API (`visionBridgeKeyScope.ts`)

Khi khóa API của người gọi hạn chế `allowedConnections`, các nhóm hạn ngạch
(`allowedQuotas`) hoặc mô hình (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), cầu nối chỉ
chọn các mô hình chuyển hướng và mô tả mà khóa có thể sử dụng, trên các kết nối mà khóa có thể
sử dụng. Cuộc gọi mô tả sau đó luôn đi qua vòng lặp tự động OmniRoute với
tiêu đề `x-omniroute-self-loop-key-id`, vì vậy yêu cầu trò chuyện nhận được
thực thi chính sách kết nối và mô hình của khóa đó một lần nữa. `enforceApiKeyPolicy()`
tôn trọng tiêu đề đó chỉ cùng với bearer vòng lặp tự động, vì vậy nó chỉ có thể
thu hẹp quyền truy cập, và một id không được giải quyết sẽ bị từ chối.

Nếu không có mô hình thị giác nào được phép cho khóa, đường mô tả sẽ nhường chỗ và
yêu cầu sẽ đi qua không thay đổi, hành vi fail-open giống như một rào cản bị vô hiệu hóa
(meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Các yêu cầu không có khóa, và các khóa không có những hạn chế này, hoạt động chính xác như
trước đây.

#### Lời nhắc mô tả nhận thức nhiệm vụ (`modalityBridgeVisionTaskAware`)

Mặc định **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) thêm
văn bản của **tin nhắn người dùng cuối cùng** (cắt ngắn xuống 500 ký tự) vào
lời nhắc mô tả cơ bản, điều chỉnh mô tả theo những gì người dùng thực sự đã
hỏi (mô hình codex-vision-proxy) và yêu cầu mô hình thị giác chuyển đổi văn
bản nhìn thấy. Với cờ tắt — hoặc không có văn bản người dùng — lời nhắc cơ
bản được sử dụng không thay đổi.

Yêu cầu tương thích với OpenAI của vòng lặp tự mô tả (`callVisionModelSingle()`
trong `visionBridgeHelpers.ts`) luôn yêu cầu `image_url.detail: "high"` —
không điều kiện, cho mọi người gọi/cung cấp, không bị chặn bởi bất kỳ tín
hiệu nào từ khách hàng. Lấy mẫu chi tiết thấp làm giảm độ chính xác OCR cho
chính nhiệm vụ chuyển đổi văn bản mà lời nhắc này yêu cầu, vì vậy cuộc gọi
mô tả luôn yêu cầu chi tiết cao bất kể mức độ chi tiết mà yêu cầu đến ban
đầu đã sử dụng. Điều này chỉ ảnh hưởng đến nội dung yêu cầu mô tả nội bộ;
nó không thay đổi cách mà OmniRoute chuyển tiếp `image_url.detail` của
người gọi trong yêu cầu chính — giá trị mặc định được áp dụng riêng biệt,
và chỉ cho các khách hàng OpenCode đã phát hiện, trong
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Nhánh
định dạng dây của Anthropic trong vòng lặp tự mô tả không có trường `detail`
và không bị ảnh hưởng bởi bất kỳ mặc định nào.

#### Giới hạn đầu ra mô tả (`modalityBridgeVisionMaxChars`)

| Khóa                           | Mặc định | Phạm vi            |
| ------------------------------ | -------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`      | `0` hoặc 100–50000 |

`0` (mặc định) có nghĩa là **không giới hạn** — mô tả được trả về bởi
`callVisionModel()` được truyền qua không thay đổi, giữ nguyên hành vi hiện
tại. Bất kỳ giá trị nào trong phạm vi 100–50000 sẽ cắt ngắn mô tả với hậu
tố `…` trước khi nó được ghép lại dưới dạng `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` trong `src/lib/guardrails/visionBridge.ts`).
Tăng giá trị này cho các nhiệm vụ OCR nặng chi tiết nơi mô hình hạ nguồn cần
toàn bộ bản sao; giảm nó để giới hạn việc sử dụng token trên các mô hình
thị giác nói nhiều. Trường bảng điều khiển nằm trên bảng Vision trong
bảng điều khiển Nâng cao (`modality-bridge-max-chars` trong
`ModalityBridgeVisionTab.tsx`) và giới hạn bất kỳ giá trị nào giữa 1 và 99
lên đến mức tối thiểu 100 trong khi để giá trị `0` rõ ràng không bị ảnh
hưởng — `0` là một giá trị Zod hợp lệ theo cách riêng của nó
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), không
chỉ đơn thuần là mặc định "chưa được thiết lập".

#### Bộ nhớ đệm mô tả (`modalityBridge/bridgeCache.ts`)

Bộ nhớ đệm LRU + TTL trong bộ nhớ cho các đầu ra mô tả, chia sẻ trên toàn
quá trình. Khóa = `sha256(imageRef + composedPrompt + configuredBridgeModel)`
với định dạng tiền tố độ dài (không có va chạm ranh giới trường). Thành phần
mô hình là mô hình cầu **đã cấu hình**, không phải mô hình thực sự đã trả
lời — `callVisionModel` có thể quay lại nội bộ, và việc khóa theo từng
cố gắng sẽ phân mảnh bộ nhớ đệm. Các mô tả không thành công không bao giờ
được lưu vào bộ nhớ đệm. Cài đặt:

| Khóa                            | Mặc định | Phạm vi |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Chuẩn hóa hình ảnh từ xa (vòng lặp tự mô tả/lấy base64)

Khi cầu lấy một hình ảnh **từ xa** — cuộc gọi tự mô tả của Anthropic và
chuyển đổi base64 định dạng claude-wire
(`ensureBase64ImagesForClaudeWire`), cả hai đều thông qua
`fetchRemoteImageAsDataUri()` trong `visionBridgeHelpers.ts` — URI dữ liệu
kết quả được truyền qua `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) trước khi được nhúng trong yêu cầu mô
hình thị giác. Hình ảnh quá lớn được giảm kích thước xuống **cạnh dài 2048px**
(phù hợp với giới hạn thay đổi kích thước mà OpenAI/Anthropic đã áp dụng
ở phía máy chủ), điều này cắt giảm byte tải lên/độ trễ mà không thay đổi
những gì mô hình thị giác thấy. Việc thay đổi kích thước sử dụng `sharp`,
được tải qua nhập động: trên một nền tảng mà nhị phân gốc của nó không
thể tải, `normalizeDataUri()` **không bao giờ ném ra lỗi** — nó quay lại
với việc truyền qua các byte gốc, vì vậy đường dẫn mô tả/chuyển đổi base64
luôn giữ cho việc hoạt động. Các byte không phải hình ảnh (một lần lấy mà
không trả về hình ảnh có thể giải mã) cũng được truyền qua không thay đổi.
Việc chuẩn hóa này chỉ áp dụng cho các hình ảnh mà cầu lấy cho cuộc gọi tự
của nó — nó không bao giờ được áp dụng cho tải trọng truyền qua thô của
người gọi, nhất quán với nguyên tắc biến đổi chỉ theo lựa chọn (Quy tắc Cứng
#20).

#### Lược đồ cài đặt + di chuyển

Các khóa mới `modalityBridge*` được xác thực bằng Zod trong
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
bộ ba `modalityBridgeCache*`, và nhóm `modalityBridgeAudio*` được sử dụng
bởi Audio Bridge. Di chuyển `141_modality_bridge_settings.sql` sao chép các
giá trị `visionBridge*` di sản hiện có vào các khóa mới tương ứng (idempotent,
không bao giờ ghi đè giá trị `modalityBridge*` đã được thiết lập bởi
người điều hành); các khóa di sản vẫn được chấp nhận như một phương án
đọc dự phòng trong một chu kỳ phát hành.

#### Tiêu đề minh bạch + thống kê

Các phản hồi đã được chuyển đổi mô tả mang theo
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(được xây dựng bởi `buildModalityBridgeHeader()` trong
`modalityBridge/bridgeStats.ts`, được đóng dấu bởi `withModalityBridgeHeader()`
trong `src/sse/handlers/chatHelpers.ts`). Các yêu cầu được chuyển tiếp không
có **tiêu đề** — tải trọng không bị thay đổi và việc hoán đổi mô hình đã
rõ ràng trong trường `model` của nội dung phản hồi.

`GET /api/modality-bridge/stats` (quản lý xác thực, cùng cấp với
`GET /api/settings`) trả về các bộ đếm theo từng phương thức trong bộ nhớ
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` cho `vision`, `audio`, và
`video`. `averageLatencyMs` sử dụng `latencySamples`, không phải tất cả các lần thử, làm mẫu số; một thao tác không có thời gian sẽ không tạo ra một mẫu không có mili giây. `bridged` vẫn là bí danh tương thích ngược cho các chuyển đổi thành công; các lần thử thất bại không làm tăng nó.
Các bộ đếm được đặt lại khi khởi động lại quy trình theo thiết kế
(telemetry, không phải kế toán).

#### Cấu hình bảng điều khiển

Trang bảng điều khiển chuyên dụng là
`/dashboard/settings/modality-bridge`. Các tab `Vision`, `Audio`,
và `Video` có thể truy cập qua URL giữ nguyên các tham số truy vấn trong khi chuyển đổi giá trị `tab`.
Tab Vision hiển thị khả năng kích hoạt, chế độ, lựa chọn mô hình (bao gồm mặc định tự động),
nhắc nhở theo nhiệm vụ, giới hạn thời gian/hình ảnh/độ dài mô tả/bộ nhớ nâng cao,
các bộ đếm thời gian thực, và một yêu cầu mẫu được bảo vệ. Tab Audio cũng đang hoạt động: nó hiển thị
khả năng kích hoạt, một trình chọn mô hình chỉ STT với Auto, giới hạn thời gian/tối đa clip, các bộ đếm âm thanh,
và một bài kiểm tra mẫu `input_audio`. Tab Video đang hoạt động: nó báo cáo
trạng thái thời gian thực của FFmpeg/ffprobe — một trong bốn trạng thái UI rõ ràng (`unknown` trong khi
probe đang bay hoặc không thể hoàn thành, `restricted` trên một máy chủ bảng điều khiển không phải loopback nơi probe bị bỏ qua ở phía khách, `unavailable` khi đã được probe và xác nhận là thiếu, hoặc `available` với các phiên bản FFmpeg/ffprobe) — duy trì
giới hạn enable/model/frame/video/timeout, lọc trình chọn mô hình để chỉ các mô hình có khả năng nhìn, và hiển thị các bộ đếm video.

Thẻ Vision Bridge trước đây dưới cài đặt AI là một liên kết tương thích đến
trang mới; nó không còn sở hữu một bản sao thứ hai của biểu mẫu. Các Nhà cung cấp phương tiện cũng
liên kết các quy trình Image-to-Text và Speech-to-Text đến các tab Modality
Bridge tương ứng mà không xóa bỏ sân chơi Speech-to-Text hiện có.

**Bỏ qua xác thực tự vòng:** khi cuộc gọi mô tả đi qua vòng lặp tự
`/v1` của OmniRoute (mô hình nhà cung cấp không chuẩn), yêu cầu con gửi
`x-omniroute-admission-bypass: internal` và được xác thực với thông tin xác thực vòng lặp tự đã giải quyết — sentinel `sk_omniroute` cục bộ trong chế độ cục bộ, hoặc khóa env `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` được cấu hình bởi người vận hành (#1350) để
các triển khai `REQUIRE_API_KEY=true` vẫn có thể thực hiện cuộc gọi mô tả. Việc bỏ qua
chỉ được tôn trọng cho những thông tin xác thực chính xác đó, vì vậy các khách hàng bên ngoài không thể sử dụng
tiêu đề để bỏ qua xác thực.

Các mặc định cũ sống trong `src/shared/constants/visionBridgeDefaults.ts`; các mặc định mới theo chế độ/nhiệm vụ/bộ nhớ và bộ giải quyết cài đặt sống trong
`src/shared/constants/modalityBridgeDefaults.ts`. Rào chắn hiển thị một
tùy chọn khởi tạo `deps` để các bài kiểm tra có thể tiêm các triển khai giả `getSettings` và
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Chặn các yêu cầu trò chuyện có âm thanh trước khi chúng đến một mục tiêu không
được biết là chấp nhận đầu vào âm thanh. Nó không bao giờ chuyển hướng yêu cầu trò chuyện: các phần âm thanh được
phiên âm qua điểm cuối đa phần tương thích với OpenAI hiện có và mô hình trò chuyện đã chọn tiếp tục với các bản sao văn bản.

Luồng:

1. Giải quyết `supportsAudio` thông qua `getResolvedModelCapabilities()`. Siêu dữ liệu đăng ký nhà cung cấp rõ ràng thắng, sau đó là siêu dữ liệu mô hình tĩnh, sau đó là `modalities_input` đã đồng bộ. Một danh sách đầu vào được khai báo không có `audio` là `false`; không có bằng chứng khả năng vẫn là `null`. Cả `false` và `null` đều kích hoạt cầu bảo thủ, trong khi `true` bỏ qua nó.
2. Giải quyết các cài đặt `modalityBridgeAudio*` và trích xuất các phần âm thanh cấp cao có thể ghép từ mỗi tin nhắn thông qua bộ phát hiện `detectMediaParts()` chia sẻ. Các hình dạng dây hỗ trợ là `input_audio`, `audio_url`, và `source.media_type: "audio/*"` của OpenAI. Âm thanh lồng ghép được phát hiện để định tuyến nhưng không bị loại bỏ bởi đường dẫn ghép. Công việc bị giới hạn bởi `modalityBridgeAudioMaxClips`; các phần sau vẫn không bị ảnh hưởng.
3. Tôn trọng một `provider/model` đã cấu hình, hoặc để `selectAudioBridgeModel()` đi qua
   `AUDIO_TRANSCRIPTION_PROVIDERS` theo thứ tự danh mục ổn định và chọn mô hình đầu tiên với thông tin xác thực nhà cung cấp hoạt động có thể sử dụng.
4. `callAudioTranscription()` chuyển đổi âm thanh base64/data-URI thành một `file` đa phần,
   hoặc tải xuống một `audio_url` từ xa thông qua rào chắn chỉ công khai với pin DNS và giới hạn 25 MB. Sau đó, nó POST tệp và mô hình đã chọn đến vòng lặp tự `/v1/audio/transcriptions`, được xác thực với
   `resolveSelfLoopBearer()`. Đường dẫn phiên âm hiện có thực hiện tìm kiếm thông tin xác thực bình thường, xử lý thời gian chờ/giới hạn tỷ lệ, và phân phối nhà cung cấp.
5. Các cuộc gọi thành công thay thế các phần của chúng bằng `[Audio N]: <transcript>`. Các cuộc gọi
   chạy với `Promise.allSettled`: một thất bại cá nhân bảo tồn phần âm thanh gốc đó (#4012 hợp đồng). Nếu mọi cuộc gọi đều thất bại và mục tiêu được chứng minh là
   `supportsAudio === false`, các phần trở thành
   `[Audio N]: (không khả dụng — không có nhà cung cấp STT nào được kết nối)` (#8430 hợp đồng). Đối với một mục tiêu không xác định (`null`), một kết quả thất bại hoàn toàn vẫn không bị ảnh hưởng. Một mục tiêu chỉ văn bản đã được chứng minh mà không có thông tin xác thực STT có thể sử dụng nhận được cùng một stub rõ ràng mà không phát sinh cuộc gọi mạng.

Các bản sao thành công sử dụng bộ nhớ cache LRU/TTL của Modality Bridge toàn quy trình. Khóa kết hợp tham chiếu âm thanh, nhãn thao tác `audio-transcription` ổn định, và mô hình STT đã chọn; các thất bại không bao giờ được lưu vào bộ nhớ cache. Các lần thử âm thanh cập nhật
các bộ đếm `bridged`, `cacheHits`, `failures`, và `lastUsedAt` đã chia sẻ.
Các phản hồi đã chuyển đổi mang
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; các yêu cầu không bị ảnh hưởng không nhận được một đoạn Audio Bridge.

Các cài đặt thời gian thực được hỗ trợ bởi DB và được xác thực bằng Zod:

| Khóa                          | Mặc định | Phạm vi             |
| ----------------------------- | -------- | ------------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                   |
| `modalityBridgeAudioModel`    | `""`     | Tự động hoặc ID STT |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000         |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10                |

Bộ nhớ đệm chia sẻ vẫn được kiểm soát bởi `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, và `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Chặn các phần video cấp cao trong Chat Completions `messages` và Responses
API `input` trước khi một mục tiêu không có hỗ trợ video gốc được gọi.
Các hình dạng được hỗ trợ là `input_video`, `video_url`, `video_source`, các URL HTTPS,
và `data:video/*;base64,...` data URIs. Tên tệp thông thường trong văn bản không được coi là
video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) sở hữu việc duyệt yêu cầu, kiểm tra
khả năng/chính sách, tổng hợp theo yêu cầu, và tải trọng phản hồi.
Công việc theo video — thu thập, bộ nhớ đệm toàn bộ kết quả, mô tả một chuỗi khung
(hợp nhất bất kỳ bản chép lời âm thanh do người gọi khai báo), và các chỉ số/thử nghiệm
hủy/bỏ qua — được ẩn sau `processVideoPart` trong
`videoBridgePipeline.ts`, được gọi một lần cho mỗi phần video bên trong vòng lặp của `preCall`.
Mô-đun đó cũng định nghĩa các ranh giới cổng rõ ràng `VideoMediaBrokerPort`
(thu thập byte và trích xuất các khung mẫu), `VideoAudioTranscriptionPort`
(hợp nhất bản chép lời âm thanh do người gọi khai báo với các phụ đề mẫu), và
`VideoDrilldownPort` (hình dạng lưu trữ thô kế thừa). STT sản xuất và giữ khung
được cấu thành xung quanh cổng mô tả thông qua `createVideoSttAdapter` và
`createVideoDrilldownAdapter`; cái sau sử dụng vòng đời tay cầm mờ chia sẻ.

Đường dẫn yêu cầu công khai `/v1` không bao giờ nhập hoặc gọi một quy trình con. Video từ xa
được tải xuống dưới giới hạn 50 MiB; video base64 nội tuyến có giới hạn 36 MiB đã giải mã cho mỗi video
để mô hình/thông điệp/bìa khung có thể giữ bên trong giới hạn tiếp nhận yêu cầu JSON công khai là 50 MiB.
Chiều dài nội tuyến và ước lượng kích thước đã giải mã được kiểm tra trước khi phân bổ. HTTPS là
bắt buộc trên URL từ xa ban đầu và mọi chuyển hướng, sử dụng bảo vệ chỉ công khai hiện có với pin DNS.
Các byte sau đó vượt qua ranh giới môi giới nội bộ chính xác `POST /api/modality-bridge/video/extract`.
Đường dẫn đó là cả `LOCAL_ONLY` và `SPAWN_CAPABLE`, chỉ chấp nhận một yêu cầu xác thực,
vòng lặp tin cậy theo quy trình, và không bao giờ chấp nhận một URL, đường dẫn hệ thống tệp,
tệp thực thi, hoặc danh sách đối số. Ống dẫn kích thước cơ thể API và bộ đọc cơ thể gia tăng của trình xử lý
độc lập thực thi giới hạn đầu vào môi giới 50 MiB. Hàng đợi giới hạn của nó chạy
một lần trích xuất tại một thời điểm, cho phép bốn công việc đang chờ, và giới hạn đầu vào đang chờ ở
100 MiB.

Bên trong môi giới, `ffprobe` đọc một tệp cục bộ riêng tư; danh sách định dạng cố định
loại trừ các định dạng danh sách phát và bản kê. Đối với các bộ chứa thuộc họ MOV được phép,
các tham chiếu dữ liệu MOV bên ngoài vẫn bị vô hiệu hóa theo mặc định, và lệnh cố định không tham gia vào chúng.
Cả `ffprobe` và `ffmpeg` đều sử dụng danh sách trắng giao thức chỉ `file`, một luồng, mảng đối số cố định, không có shell,
và các tệp thực thi được giải quyết từ `PATH`. Các luồng bìa hình đính kèm không phải là
các ứng viên có thể phát. Tất cả các luồng có thể phát phải đáp ứng các giới hạn, và một
luồng mặc định rõ ràng được ưu tiên trước khi quay lại chỉ số thấp nhất xác định. Video bị giới hạn ở 600 giây, 8,192 pixel mỗi chiều, và
33,554,432 pixel nguồn. FFmpeg lấy mẫu 1–16 khung JPEG giữa, thu nhỏ cạnh dài xuống tối đa 1,024 pixel mà không
tăng kích thước đầu vào nhỏ hơn, và không bao giờ nhận một URL. Lấy mẫu là `uniform` theo mặc định.
Các chính sách tùy chọn `scene_aware` và `segment_aware` thực hiện một lần
truyền FFmpeg cố định bổ sung trên luồng cục bộ đã được xác thực, chọn các dấu thời gian cảnh `showinfo` có giới hạn,
và quay lại một cách xác định đến cùng một điểm giữa đồng nhất khi phát hiện thất bại, hết thời gian, đầu ra không hợp lệ, hoặc một
tập hợp ứng viên trống. Chế độ nhận thức phân đoạn phân bổ các mẫu điểm giữa theo tỷ lệ với
các khoảng thời gian cảnh đã được xác thực; bằng chứng nhận thức phân đoạn và hành vi quay lại được
chi tiết bên dưới. Giới hạn cứng 16 khung được
áp dụng sau khi chọn trong mọi chính sách. Khi một yêu cầu nhận thức cảnh chỉ có ngân sách một khung,
nó sử dụng điểm giữa đồng nhất của video đầy đủ đang hoạt động hoặc cửa sổ tập trung và báo cáo `policyEffective: uniform`: một khung cảnh được chọn duy nhất
không thể bảo tồn cả hai đầu thời gian. Một người gọi có thể tùy chọn cung cấp một
cửa sổ tập trung hữu hạn (`start`/`end` giây); các giới hạn được kẹp vào thời gian của phương tiện,
các cửa sổ đảo ngược hoặc không hữu hạn bị từ chối, và tất cả các chính sách lấy mẫu
được thực hiện chỉ bên trong khoảng thời gian chuẩn hóa. Cửa sổ kết quả được bao gồm trong siêu dữ liệu lấy mẫu và trong tiền tố mô tả không đáng tin cậy
để các mô hình hạ nguồn có thể phân biệt một đoạn trích tập trung từ toàn bộ
dòng thời gian.

Tập trung chú thích ngữ nghĩa là một cài đặt riêng biệt, rõ ràng. Chế độ phân tích mặc định `full`
bảo tồn lời nhắc khung hiện có và không bao giờ chuyển tiếp văn bản yêu cầu đến mô hình chú thích. Trong chế độ `focused`,
cầu nối chỉ đọc `text`/`input_text` do người dùng viết ra không rỗng gần nhất từ cùng một container Chat hoặc Responses,
chuẩn hóa nó thành NFC, thu gọn các ký tự điều khiển và khoảng trắng,
và giới hạn nó ở 500 điểm mã Unicode. Một kết quả trống quay lại đúng `full` nhắc. Một gợi ý có thể sử dụng được được tuần tự hóa dưới dạng JSON trong một khối ngữ cảnh người dùng không đáng tin cậy và chỉ có thể ưu tiên các chi tiết quan sát được; nó
không thể ghi đè cảnh báo riêng biệt chống lại việc làm theo hướng dẫn có thể nhìn thấy
hoặc nghe thấy trong phương tiện. Tập trung văn bản không bao giờ suy diễn `start`/`end` hoặc thay đổi
bộ lấy mẫu thời gian.

#### Bằng chứng phân đoạn cấu trúc FU-07

`segment_aware` sử dụng một lần phân tích trước có giới hạn trên luồng video cục bộ đã được xác thực. Chuỗi bộ lọc cố định đầu tiên sẽ thu nhỏ kích thước tối đa 320 pixel rộng, phát hiện sự thay đổi cảnh và khoảng thời gian đông cứng, sau đó lấy mẫu ở 1 khung hình mỗi giây cho độ mờ, độ sáng trung bình và thông tin không gian/thời gian. Lần phân tích này bị giới hạn ở 600 mẫu cấu trúc, một luồng FFmpeg/filter, cùng với các danh sách cho phép chỉ có giao thức và container `file`, giới hạn đầu ra quy trình là 1 MiB, và tối đa 30 giây bên trong thời gian chia sẻ hủy/báo động của broker. Nó không bao giờ chấp nhận một lệnh, bộ lọc, đường dẫn, hoặc URL từ yêu cầu.

Các giá trị cấu trúc là bằng chứng lấy mẫu xác định, không phải là hiểu biết về video ngữ nghĩa. Chúng không suy diễn chủ thể, hành động, chú thích, lời nói, hoặc ý định của người dùng. Ranh giới cảnh và đông cứng tạo thành các đoạn; độ bao phủ đông cứng, độ mờ, độ phơi sáng, chi tiết không gian, và sự thay đổi theo thời gian chỉ ảnh hưởng đến cách ngân sách 1–16 khung hình hiện có được phân bổ. Một đoạn hoàn toàn đông cứng bị giới hạn ở một khung hình, trong khi các đoạn không đông cứng cạnh tranh cho ngân sách còn lại. Khi các ranh giới nhiều hơn khung hình, độ bao phủ thời gian đồng nhất được giữ lại để các cắt nhanh không thể che giấu một đoạn dài phía sau. Các ranh giới cảnh trong độ phân giải phân tích 1 giây của một ranh giới đông cứng được hợp nhất.

Thiếu bộ lọc, bằng chứng bị sai định dạng/rỗng, lỗi phát hiện, hoặc thời gian chờ phân tích trước có giới hạn sẽ mở rộng đến chính sách điểm giữa đồng nhất. Một lệnh hủy từ người gọi hoặc thời hạn của broker không mở rộng: nó sẽ chấm dứt quy trình con đang chạy, ngăn chặn việc trích xuất khung hình sau này, và cây tạm thời riêng tư sẽ bị xóa trong `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` tạo ra các thiết lập FFmpeg thực sự xác định cho việc tiết kiệm gọi chú thích sau khi loại bỏ trùng lặp, phân bổ ngân sách chuyển động dày đặc, bằng chứng độ mờ/độ phơi sáng/SI-TI, các cắt nhanh với một đuôi dài, và các dương tính giả mờ dần. Nó ghi lại thời gian tường thuật phân tích trước và, nơi có `/usr/bin/time`, CPU con và RSS đỉnh. Các kiểm tra chất lượng của nó chỉ là các oracle cấu trúc. Chất lượng mô hình chú thích thực vẫn ở trạng thái `HOLD` vì bộ công cụ này không có điểm cuối được ủy quyền hoặc thẩm phán đông cứng. Tiết kiệm tiền cũng vẫn ở trạng thái `HOLD` trừ khi `--caption-cost-per-call-usd` cung cấp một ước lượng dương rõ ràng cho mỗi lần gọi; kịch bản này không bao giờ tạo ra kết quả nào.

Mỗi khung hình bị giới hạn ở 4 MiB, tất cả các khung hình thô cùng nhau là 23 MiB, và phản hồi của broker đã tuần tự hóa là 32 MiB. Một thư mục tạm thời riêng tư sẽ bị xóa trong `finally`. OmniRoute không đóng gói FFmpeg và không chấp nhận một đường dẫn thực thi tùy chỉnh. Trước khi chú thích, cầu nối áp dụng một lần phân tích loại bỏ hình ảnh bảo thủ: mỗi JPEG được giảm xuống một bộ đệm xám 16×16 và chỉ được so sánh với khung hình cuối cùng được giữ lại. Đối với một ngân sách chú thích yêu cầu trên một khung hình, việc trích xuất cung cấp một
bể ứng viên có giới hạn lên đến gấp đôi ngân sách đó và không bao giờ nhiều hơn 16 khung hình. Giới hạn yêu cầu chỉ được áp dụng sau khi loại bỏ trùng lặp, với các ứng viên được chọn đầu tiên và cuối cùng được bảo tồn trong quá trình làm mỏng cuối cùng khi ngân sách ít nhất là hai. Chính sách
`grayscale-16x16-mean-cells-v2` sử dụng giá trị lớn hơn giữa độ delta độ sáng trung bình và tỷ lệ của các ô hình thu nhỏ mà delta chuẩn hóa của chúng ít nhất là 0.05. Ngưỡng trùng lặp là hằng số 0.04, được chọn vì tính dự đoán thay vì được công khai như một cài đặt thời gian chạy. Tín hiệu tương phản cao thứ cấp này bảo tồn chuyển động nhỏ và sự thay đổi văn bản nhìn thấy mà so sánh chỉ dựa trên độ trung bình có thể che giấu. Lỗi bộ so sánh hoặc giải mã sẽ mở rộng và giữ lại độ bao phủ. Siêu dữ liệu đầu ra phân tách các ứng viên đã trích xuất, các khung hình đã sử dụng thành công, và các bản sao hình ảnh bị loại bỏ.

Một phần video được đánh dấu rõ ràng có thể yêu cầu một bảng liên hệ có dấu thời gian. Cầu nối xây dựng tối đa một lưới JPEG 4 cột, 16 khung hình. Mỗi ô 512 pixel ghi lại dấu thời gian nguồn của nó vào một dải dưới cùng có độ tương phản cao, trong khi các dấu thời gian giống nhau vẫn nằm trong siêu dữ liệu văn bản để liên kết và kiểm toán sau này. JPEG hoàn chỉnh vẫn bị giới hạn ở 32 MiB. Nếu `sharp` không thể giải mã hoặc tạo thành lưới, cầu nối sẽ quay lại các khung JPEG riêng lẻ; một lệnh hủy từ khách hàng vẫn sẽ được truyền qua thao tác bảng.

Bằng chứng khuyến mãi được tách biệt một cách có chủ ý khỏi vi mô kiểm tra thành phần tổng hợp. `scripts/perf/video-bridge-contact-sheet-eval.ts` định nghĩa một bộ công cụ A/B có phiên bản sơ đồ cho các mô hình thị giác tương thích với OpenAI thực. Nó đo lường số token được nhà cung cấp báo cáo, độ trễ tường thuật từ đầu đến cuối (bao gồm cả việc tạo bảng), số lần gọi mô hình, và việc giữ lại sự thật được định nghĩa trong bản kê. Các phản hồi mô hình thô không được ghi vào báo cáo; chỉ có các bản tóm tắt SHA-256 và ID sự thật khớp được giữ lại. Bộ công cụ này không thực hiện bất kỳ cuộc gọi mạng hoặc mô hình trả phí nào trừ khi `--execute-real` được truyền và `--model`, `OMNIROUTE_BASE_URL`, và `OMNIROUTE_API_KEY` được cấu hình. Nếu không có lần chạy thực tế rõ ràng đó, phán quyết có thể đọc được của nó vẫn ở trạng thái `HOLD`; các phép đo tải trọng/tần suất gọi tổng hợp đơn thuần không phải là bằng chứng khuyến mãi.

Bộ tách biệt `scripts/perf/video-bridge-promotion-eval.ts` tiêu thụ các quan sát FU-07 hoặc FU-09. Việc nhận khuyến mãi yêu cầu tất cả tám loại kịch bản tổng hợp cùng với một đoạn video thực đã được làm sạch, ít nhất ba lần lặp đo lường cho mỗi vai trò và trường hợp, tất cả mười chỉ số đã công bố, các bản tóm tắt phương tiện/nhắc nhở/sự thật/kết quả mong đợi đông cứng, ID quan sát duy nhất và thứ tự A/B đã được xác minh. Biên lai thực hiện ràng buộc bản tóm tắt corpus, SHA ứng viên chính xác và phiên bản mô hình. Các phép đo thiếu hoặc không hợp lệ vẫn ở trạng thái `HOLD`, bao gồm CPU trên 30 giây, RSS đỉnh trên 512 MiB hoặc phân tích trước trên 30 giây. Đây là các giới hạn tiếp nhận bằng chứng, không phải là một đảm bảo thực thi RSS mới trong thời gian chạy.

FU-07 yêu cầu ít nhất 98% giữ chất lượng và độ trễ p95 không quá 1.2 lần
mức cơ sở, cộng với một trong hai cải thiện độ hồi tưởng trung bình cân bằng tuyệt đối 0.05 tại
các cuộc gọi chú thích trung bình tương đương, hoặc ít nhất 10% giảm số cuộc gọi chú thích sau khi loại bỏ trùng lặp. FU-09 yêu cầu ít nhất 0.85 chất lượng, 95% giữ lại, giảm độ trễ p95 20% và giảm 10% token. Mất mát thông tin quan trọng, tuân thủ tiêm hoặc thiếu sử dụng ngăn cản việc thăng chức. Một lần thực thi không thể thăng chức bất cứ điều gì:
`--previous-report` xác nhận hai lần thực thi khác biệt, không chồng chéo, đủ điều kiện liên tiếp của cùng một chính sách/mô hình phiên bản/ứng viên/tập dữ liệu. Một thí nghiệm lấy mẫu không thể xác nhận một thí nghiệm bảng liên hệ.

Các nhà thu thập nên chấm điểm phản hồi trong bộ nhớ và lưu `responseDigest` cộng với
các chỉ số và ràng buộc quan sát, không bao giờ lưu văn bản phản hồi. Người tiêu dùng cũng đọc
các quan sát thô kế thừa nhưng không bao giờ sao chép văn bản đó vào báo cáo của mình. Chính xác
một trong `responseDigest` hoặc `rawResponseText` được chấp nhận cho mỗi quan sát.
Danh sách cho phép phiên bản vẫn trống với mặc định `hold` không thay đổi. Một mục đủ điều kiện yêu cầu tham chiếu bằng chứng, chính sách, phiên bản mô hình, SHA ứng viên chính xác, bản tóm tắt và hai ID chạy khác biệt; các ngữ cảnh xung đột bị từ chối. Những siêu dữ liệu này là một hợp đồng kiểm toán, không phải là bằng chứng rằng một tệp được tham chiếu chứa các phép đo chính xác. Xem xét các biên lai thực tế trước khi thêm
bất kỳ mục nào. Điểm cuối thống kê quản lý và bảng điều khiển Video tiết lộ sự sẵn sàng bảo thủ. Một bí danh mô hình được cấu hình một mình không thiết lập phiên bản của nó hoặc
SHA ứng viên đang chạy, vì vậy bảng điều khiển hiện tại báo cáo `HOLD` thay vì
sử dụng lại tính đủ điều kiện từ một ngữ cảnh thực thi khác. Việc lựa chọn thí nghiệm rõ ràng vẫn tách biệt khỏi việc thăng chức; không có mặc định nào được thay đổi tự động.

Các caller có thể đính kèm một mảng tùy chọn `transcript.cues` vào một phần video được hỗ trợ khi họ đã sở hữu văn bản đã căn chỉnh. Mỗi cue phải mang `text`, một khoảng thời gian hữu hạn `start`/`end` bên trong khoảng thời gian được kiểm tra, và một `source` trong danh sách trắng (`client`, `embedded`, hoặc `audio-bridge`); `confidence` mặc định là `1` và phải giữ trong khoảng từ `0` đến `1`. Các cue trùng lặp chính xác sẽ được gộp lại.
OmniRoute không bao giờ bắt đầu phiên dịch từ siêu dữ liệu này: các cue đã được xác thực được
sao chép vào kết quả được mô tả với nguồn, độ tin cậy và khoảng thời gian, và
được hiển thị như các quan sát không đáng tin cậy bên cạnh các chú thích khung. Văn bản không hợp lệ,
ngoài phạm vi, hoặc không có nguồn gốc sẽ bị từ chối thay vì được trộn vào
dòng chú thích. Cả hai kênh bản sao yêu cầu của transcript đều chuẩn hóa nguồn gốc được cung cấp thành `client`, bao gồm cả nhãn tự khẳng định `embedded` hoặc `audio-bridge`.
Chỉ một bộ chuyển đổi thuộc sở hữu của máy chủ mới có thể gán những nhãn đáng tin cậy đó thông qua
tham số chỉ mã `trustedSource`; một trường JSON yêu cầu không thể truy cập
tham số đó. Văn bản transcript vẫn là nội dung không đáng tin cậy được lấy từ phương tiện,
bất kể nguồn gốc của nó, và không bao giờ được xác định quyền hạn.

Một caller nâng cao có thể cung cấp một track `audioTranscript` cho cùng một video;
nó được coi là văn bản do khách hàng cung cấp, không phải là bằng chứng về việc phiên dịch từ máy chủ.
Đường nối hợp nhất chạy các quan sát hình ảnh và âm thanh dưới
một thời hạn và tín hiệu hủy, sắp xếp chúng trên một dòng thời gian chung, gộp
các bản sao chính xác, và báo cáo một kết quả một phần khi chỉ một bên thành công.
Một `audioTranscript` không hợp lệ sẽ giảm xuống kết quả một phần đó — mô tả hình ảnh được giữ lại và nhánh âm thanh ghi lại mã lỗi đã được làm sạch —
thay vì làm hỏng toàn bộ video. Tính khả dụng theo nhánh, cờ một phần,
và các mã lỗi đã được làm sạch được bảo tồn trong kết quả được mô tả, trong
siêu dữ liệu bảo vệ (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), trong siêu dữ liệu bộ nhớ cache kết quả, và trong các bộ đếm hợp nhất cầu nối. Đường dẫn Video Bridge mặc định không kích hoạt chuyển đổi giọng nói thành văn bản
hoặc tải xuống một bản sao phương tiện thứ hai; nếu không có track rõ ràng đó, nó vẫn
chỉ là video.

**Giữ lại transcript (#12150 P1).** Điều này tự động áp dụng bất cứ khi nào
Video Bridge (tự nó là tùy chọn) tạo ra một cue transcript — không có cờ giữ lại riêng biệt. Khi một yêu cầu tạo ra bất kỳ cue transcript nào (một `transcript` do caller tuyên bố hoặc một `audioTranscript` đã hợp nhất), rào cản đánh dấu nó
`videoBridgeObserved` và tạo ra một bóng mờ đã được biên tập của mô tả video —
một bản render giống hệt mà trong đó nội dung văn bản tự do của mỗi cue được thay thế bằng
`[redacted-video-transcript]`, được xây dựng bằng cách thay thế trường cue có cấu trúc
trước khi chuỗi được lắp ráp (không bao giờ bằng cách phân tích văn bản phẳng, vì vậy không có nội dung cue nào — đối kháng hoặc thông thường, bao gồm cả các nội dung chứa `]` như
`[inaudible]`/`[music]` — có thể tồn tại). Nội dung của yêu cầu nhật ký cuộc gọi đã được lưu giữ
thay thế mỗi phần văn bản lấy từ video bằng bóng mờ đã được biên tập đó, được khớp theo sự bình đẳng nội dung; neo `fullText` được đọc lại từ payload rào cản trước khi cuộc gọi hoàn thành, vì vậy sự khớp vẫn thành công sau khi các rào cản chuỗi sau đó (các bộ che giấu PII và thông tin xác thực, ưu tiên 10/95) viết lại văn bản mô tả tại chỗ và
sau khi hệ thống nhắc nhở/điều chuyển/tiêm bộ nhớ định hình lại mảng thông điệp. Nội dung được gửi lên trên cho mô hình không thay đổi. Một yêu cầu đã quan sát cũng không tạo ra
bất kỳ bộ nhớ bền vững nào (cả việc trích xuất từ yêu cầu và phản hồi đều bị bỏ qua),
vì vậy phản hồi của mô hình không thể lặp lại văn bản transcript vào bộ nhớ.

**Các trường video thô (#12430).** Khi cầu nối được kích hoạt và hỗ trợ video gốc không rõ hoặc không có, các trường `transcript`/`audioTranscript` đã được định nghĩa cũng kích hoạt `videoBridgeObserved`, ngay cả sau khi thất bại mô tả hoặc giới hạn `maxVideos`. `null` và chuỗi trống được tính; các trường vắng mặt và siêu dữ liệu không phải video không được tính. Các bản sao được giữ lại sẽ biên tập các trường này hoặc bỏ qua yêu cầu, và bộ nhớ cache/bộ nhớ sẽ bị bỏ qua.

Trên các đường dẫn dự phòng đó, các tín hiệu gọi hợp lệ trở thành các phần `text`/`input_text` được hỗ trợ thay vì các trường nhà cung cấp không chuẩn. Cả hai bản nhạc do yêu cầu cung cấp vẫn là các quan sát `client` không đáng tin cậy, với một cảnh báo rõ ràng rằng video không được mô tả và các dấu thời gian không được xác minh với phương tiện. Ngân sách tổng cộng 256 tín hiệu/64-KiB và ngân sách theo tín hiệu áp dụng cho cả hai bản nhạc cùng nhau; các dấu thời gian phải phù hợp với giới hạn 600 giây của môi giới và bất kỳ cửa sổ tập trung nào được cung cấp. Các bản nhạc không hợp lệ sẽ bị loại bỏ, không được chuyển tiếp dưới dạng văn bản tùy ý; một bản nhạc hợp lệ có thể vẫn được sử dụng trừ khi ngân sách kết hợp của chúng bị vượt quá. Các trường null/rỗng không thêm văn bản nào. Không có việc lấy phương tiện hoặc phiên âm nào được thêm vào bởi sự dự phòng này. Các trường mở rộng phiên âm bị loại bỏ khỏi bộ chứa video dự phòng và các đối tượng `video_url`/`source` của nó. Danh sách cho phép của OpenAI vẫn nghiêm ngặt; các bộ chứa video không xác định vẫn có sẵn và các mục tiêu chỉ văn bản đã biết giữ các dấu an toàn. Các bóng tối xóa cấu trúc bảo vệ văn bản phiên âm được thêm vào, trong khi yêu cầu thuộc về người gọi ban đầu vẫn không thay đổi. Các mục tiêu được hỗ trợ bản địa và các cầu nối bị vô hiệu hóa giữ hành vi bỏ qua hiện tại của chúng.

Các bản sao giữ lại bổ sung sử dụng cùng một tín hiệu yêu cầu quan sát. Bản chụp yêu cầu của khách hàng trước khi bảo vệ, yêu cầu đang chờ trong bộ nhớ, và nhật ký yêu cầu bị từ chối sớm thay thế cấu trúc các trường phiên âm trong các phần video; các lời nhắc chuỗi được tổng hợp bởi các giai đoạn ống dẫn và chuyển giao ngữ cảnh bị xóa tại điểm tiếp nhận yêu cầu đã được lưu trữ. Dấu hiệu `video_content_removed` đã được lưu trữ khiến việc tiếp tục `previous_response_id` thất bại đóng thay vì tái tạo văn bản đã bị loại bỏ một cách có chủ ý. Nếu một yêu cầu quan sát mất bóng tối xóa theo phần trước khi ghi nhật ký, hoặc thậm chí một trong nhiều bóng video không khớp sau khi thay đổi yêu cầu sau đó, thân yêu cầu được giữ lại sẽ bị bỏ hoàn toàn thay vì giữ lại một phiên âm bị xóa một phần.

Đối với một yêu cầu quan sát, phản hồi của mô hình có thể trích dẫn bất kỳ phần nào của phiên âm mà không có ranh giới tín hiệu cấu trúc. Do đó, `responseBody` trong nhật ký cuộc gọi đã được lưu trữ của nó bị thay thế bằng một dấu hiệu loại bỏ; sản phẩm ống dẫn chi tiết (có thể bao gồm các thân upstream/khách hàng và các khối luồng) không được giữ lại. Các bộ nhớ đệm ngữ nghĩa, idempotency và reasoning-replay bỏ qua việc đọc và ghi cho yêu cầu đó. Yêu cầu nhà cung cấp và phản hồi nhìn thấy của khách hàng vẫn không thay đổi. Các byte giữ sống sớm được xả từ bộ đệm tạm thời khi sản phẩm chi tiết bị loại bỏ. Cảnh báo EventStream bị lỗi của Kiro chỉ báo cáo số lượng byte tải trọng, không bao giờ là nội dung của nó hoặc lỗi thô của trình phân tích JSON. Điều này không tuyên bố rằng mọi chẩn đoán nhà cung cấp/plugin không liên quan đã được kiểm toán; quét giữ lại rộng hơn được theo dõi trong #11658.

Vòng đời `/api/modality-bridge/video/drilldown` nội bộ là một nền tảng bộ nhớ đệm riêng biệt, xác thực vòng lặp/token. Mỗi hoạt động cũng yêu cầu một ID chính xác định mờ đi. Trước khi một người gọi sản xuất được kích hoạt, nó phải lấy ID đó từ người thuê đã xác thực và không bao giờ chuyển tiếp một giá trị do khách hàng chọn. Các khóa bộ nhớ đệm liên kết chính đó với các ID phiên và tham chiếu video chuẩn, chỉ lưu trữ các khóa được lấy từ SHA-256 của chúng, và giới hạn cả việc đọc và xóa cho cùng một chính. Bộ nhớ đệm lưu trữ tối đa 16 khung JPEG đã được lấy từ mỗi mục, hết hạn sau mười phút, và hỗ trợ việc đọc `start`/`end` có giới hạn hoặc xóa phiên rõ ràng.

Mỗi chính bị giới hạn ở 16 mục và 64 MiB dữ liệu JPEG chuẩn. Những giới hạn đó độc lập với giới hạn toàn cầu 64 mục/256 MiB: áp lực hạn ngạch chính chỉ loại bỏ các mục ít được sử dụng gần đây nhất của chính đó trước khi xem xét việc loại bỏ LRU toàn cầu. Các mục hết hạn sẽ bị quét khỏi cả kế toán chính và toàn cầu khi có hoạt động bộ nhớ đệm, trong khi việc hủy bỏ và thất bại xác thực không cam kết một sự thay thế một phần.

Bộ nhớ đệm từ chối Base64 không chuẩn, đệm thừa, phương tiện không phải JPEG, JPEG bị lỗi hoặc bị cắt ngắn, và JPEG tạo ra cảnh báo trong quá trình giải mã `sharp` toàn bộ hình ảnh có giới hạn. Nó mã hóa lại mỗi hình ảnh được chấp nhận dưới dạng JPEG chuẩn, lấy chiều rộng và chiều cao từ các byte đã giải mã thay vì tin tưởng vào các trường của người gọi, và loại bỏ bất kỳ byte polyglot nào ở cuối thay vì giữ lại chúng. Chỉ bộ đệm nén chuẩn có giới hạn được tính vào cả hai hạn ngạch. Giới hạn wire JSON bao gồm chi phí Base64 cho giới hạn đầu vào đã giải mã 32 MiB. Mỗi
sự phát sinh được lưu trữ ghi lại định dạng/độ phân giải JPEG đã được xác thực, chính sách lấy mẫu, phiên bản phát sinh, thời gian tạo, băm nội dung do máy chủ tính toán, và băm tham chiếu cha cộng với băm nội dung cha của người gọi đáng tin cậy. Việc hủy bỏ được kiểm tra giữa các giai đoạn giải mã/băm không đồng bộ trước khi cam kết bộ nhớ đệm nguyên tử.

Nhà sản xuất sản xuất chỉ tái sử dụng các khung môi giới đã được lấy từ trước đó sau khi phân tích hình ảnh thành công, mà không cần tải xuống/extraction video thứ hai. Nó yêu cầu `modalityBridgeVideoDrilldownEnabled=true` của người điều hành, `drilldown: true` nghiêm ngặt theo từng phần, và một ID bản ghi khóa API đã xác thực. Các giá trị chính/session được khai báo bởi khách hàng không bao giờ thiết lập quyền sở hữu. Nếu không có cả ba điều kiện, nó sẽ không băm, thay đổi kích thước hoặc giữ lại các khung bổ sung. Việc thất bại trong việc giữ lại bảo tồn phản hồi hình ảnh có thể sử dụng. Các yêu cầu đã đồng ý bỏ qua bộ nhớ đệm kết quả video toàn bộ để các kết quả đã được lưu trữ không bao giờ phát lại các tay cầm.

Các phản hồi JSON và SSE thành công tiết lộ tối đa bốn tay cầm mờ trong tiêu đề `x-omniroute-video-drilldown` đã được giới hạn. Các nguồn gốc trình duyệt được ủy quyền có thể đọc tiêu đề đó mà không cần mở rộng chính sách nguồn CORS. Các tay cầm mới sử dụng `v1.<32-byte random base64url token>`, và kho lưu trữ chỉ giữ lại các băm SHA-256 của chúng. Bộ đọc/phân tích tiêu đề cũng chấp nhận các mã thông báo 64-hex cũ. Người tiêu dùng công khai đã xác thực là `GET /api/v1/video-bridge/drilldown?handle=...`, được kiểm soát độc lập bởi `modalityBridgeVideoDrilldownRemoteEnabled=true`. Việc duy trì rõ ràng là false sẽ thu hồi quyền truy cập ngay cả khi biến thể cũ `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` được bật. Việc giữ lại trong sản xuất có biến thể cũ tương tự `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED`. Cả hai biến thể đều mặc định tắt.

Người tiêu dùng lấy quyền sở hữu từ khóa đã xác thực, áp dụng chính sách khóa, và trả về mã 404 cho các tay cầm không xác định, hết hạn và tay cầm của khóa khác. Nó chấp nhận `variant=preview|standard|detail` (kích thước JPEG tối đa 320/640/1280, không bao giờ được phóng to), `limit=1..8` (hoặc bí danh cũ `frames`, không bao giờ cả hai), `page` bắt đầu từ 0, và tùy chọn `start`/`end` giây tập trung. Các khóa truy vấn trùng lặp và cửa sổ tập trung đảo ngược sẽ bị từ chối. Mỗi biến thể được trả về có một băm của nội dung thực tế và siêu dữ liệu độ phân giải thực tế, liên kết với nguồn đã giữ lại. Các biến thể được tạo ra khi đọc thay vì được lưu trữ như các bản sao giữ lại thêm. Phản hồi JSON, bao gồm Base64/envelope, bị giới hạn ở 32 MiB; một trang quá lớn sẽ trả về 413 và khách hàng phải yêu cầu ít khung hình hơn. Các lần đọc kiểm tra hủy bỏ xung quanh mỗi lần thay đổi kích thước và kiểm tra lại tính hợp lệ của tay cầm trước khi trả về. `DELETE` bởi chủ sở hữu là idempotent; việc xóa hoặc hết hạn TTL sẽ giải phóng nguồn đã giữ lại và kế toán sử dụng.

Kho lưu trữ chia sẻ là cục bộ theo quy trình: các tay cầm hết hạn khi khởi động lại và không thể chuyển nhượng giữa các quy trình OmniRoute độc lập. Thống kê quản lý tiết lộ chính sách giữ lại/điều khiển từ xa hiệu quả và tổng hợp các mục/byte đã giữ lại, không bao giờ là phương tiện, tham chiếu, ID chính hoặc tay cầm. Bảng cài đặt Video hiển thị các giá trị đó và có thể giữ lại cả hai công tắc đồng ý. Tài liệu triển khai này không phải là bằng chứng triển khai trực tiếp hoặc quảng bá; việc chấp nhận mô hình thực tế được theo dõi riêng biệt.

Các khung hình được phụ đề theo thứ tự với mô hình Video đã cấu hình. Một ghi đè Video trống kế thừa cài đặt Vision; nếu cả hai đều trống, bộ định tuyến tự động Vision sẽ chọn mô hình có khả năng nhìn hiệu quả. Các phụ đề thành công thay thế phần gốc bằng một tiền tố ổn định `[Video description:` mà cũng đánh dấu văn bản là một quan sát không đáng tin cậy có nguồn gốc từ phương tiện và cho các mô hình phía dưới biết không làm theo các hướng dẫn tìm thấy trong phương tiện. Các khóa bộ nhớ cache phụ đề khung hình bao gồm các byte JPEG, lời nhắc, dấu thời gian và mô hình hiệu quả; chỉ các phụ đề thành công mới được lưu vào bộ nhớ cache. Các mục trong bộ nhớ cache giữ lại mô hình nhà sản xuất thành công thực tế, bao gồm một mô hình dự phòng; cầu nối báo cáo `mixed` khi các khung hình khác nhau được sản xuất bởi các mô hình khác nhau. Một lần trúng cache sẽ tái sử dụng danh tính nhà sản xuất đó thay vì gán nhãn lại nó như kế hoạch định tuyến được yêu cầu. Bộ nhớ cache kết quả toàn bộ video được khóa trên mọi đầu vào thay đổi đầu ra — lời nhắc, mô hình hiệu quả, chính sách lấy mẫu, số lượng khung hình, chế độ phân tích ngữ nghĩa, băm SHA-256 của gợi ý tập trung đã chuẩn hóa, cửa sổ tập trung, `transcript`, `audioTranscript`, và cờ contact-sheet — vì vậy việc thay đổi bất kỳ chiều nào trong số đó sẽ là một lần trượt cache, không bao giờ là một lần tái sử dụng cũ. Phiên bản chính sách loại bỏ trùng lặp hình ảnh, ngưỡng và số lượng khung hình ứng viên đã giới hạn cũng rõ ràng trong khóa và siêu dữ liệu bộ nhớ cache kết quả; do đó, một thay đổi chính sách không thể tái sử dụng một mô tả video toàn bộ cũ. Siêu dữ liệu bộ nhớ cache kết quả v4 giữ lại chế độ và băm, không bao giờ là tác vụ người dùng thô. Siêu dữ liệu guardrail báo cáo cả chế độ phân tích yêu cầu và hiệu quả; một chế độ `focused` được yêu cầu mà không có văn bản người dùng có thể sử dụng được báo cáo là hiệu quả `full`.

Guardrail trích xuất mọi phần video được hỗ trợ nhưng không mô tả nhiều hơn `modalityBridgeVideoMaxVideos`. Đối với một mục tiêu được chứng minh là `supportsVideo === false`, các video thất bại và vượt quá giới hạn trở thành các dấu hiệu văn bản an toàn rõ ràng để không có video thô nào tồn tại. Khi khả năng không rõ, các phần đó giữ lại phương tiện video của chúng; bất kỳ bản sao dự phòng nào theo sau việc chuyển đổi văn bản đã giới hạn ở trên. Các mục tiêu có `supportsVideo === true` sẽ bỏ qua cầu nối. Tín hiệu hủy yêu cầu của khách hàng lan truyền qua tải xuống, hàng đợi môi giới, các quy trình con và các cuộc gọi phụ đề; các lần hủy dừng giữa các video và không bao giờ thất bại mở cho phương tiện thô.

Các cài đặt thời gian chạy được hỗ trợ bởi DB và xác thực bằng Zod:

| Khóa                                | Mặc định    | Phạm vi / hành vi                                                                                              |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Thời gian chạy tùy chọn, chọn tham gia                                                                         |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` giữ lại các phụ đề chung; `focused` sử dụng ngữ cảnh người dùng mới nhất không đáng tin cậy đã giới hạn |
| `modalityBridgeVideoModel`          | `""`        | Kế thừa mô hình Vision Bridge                                                                                  |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                           |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, hoặc `segment_aware` tỷ lệ; nếu phát hiện thất bại sẽ quay lại `uniform`             |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                            |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                 |

Giá trị thời gian chờ Video đã lưu trữ từ trước trên 120 giây sẽ bị giới hạn theo thời hạn của broker; các cài đặt mới ghi trên giới hạn đó sẽ bị từ chối. `GET /api/modality-bridge/video/runtime` yêu cầu phải có độ tin cậy của vòng lặp loopback địa phương trước khi xác thực hoặc kiểm tra thời gian chạy, sau đó yêu cầu xác thực quản lý. Nó chỉ trả về các phiên bản FFmpeg/ffprobe `available`, đã được làm sạch, và một lý do cố định khi thời gian chạy không khả dụng. Điểm cuối trích xuất nội bộ không phải là API tải lên công khai: độ bão hòa hàng đợi trả về `503` cộng với `Retry-After`, một cuộc gọi ngắt kết nối trả về `499`, và thời hạn broker cố định trả về `504`. Các phản hồi đã chuyển đổi thêm `video->text;model=<visionModel>;parts=<videos>` vào tiêu đề trung tâm `x-omniroute-modality-bridge` mà không loại bỏ các đoạn Vision hoặc Audio.

### PII Masker (`piiMasker.ts`)

Chạy trên **cả hai** giai đoạn.

- **`preCall`** sao chép payload, đi qua `system`, `messages`, `input`, và `prompt` (bao gồm các mục chuỗi đơn giản), và áp dụng `processPII()` (từ `@/shared/utils/inputSanitizer`) vào các trường chuỗi `content`/`text`. Khi `PII_REDACTION_ENABLED=true`, PII được phát hiện sẽ bị xóa trong payload đầu ra. Điều này độc lập với `INPUT_SANITIZER_MODE` (chỉ kiểm soát chính sách tiêm prompt). Khi xóa không được bật, cuộc gọi ghi lại số lượng phát hiện mà không viết lại nội dung.
- **`postCall`** sao chép sâu phản hồi, chạy `sanitizePIIResponse()` cộng với bộ che hình dạng Responses-API (`maskResponsesOutput` — bao gồm `output_text` và `output[].content[].text`). Nếu có bất kỳ xóa nào xảy ra, phản hồi đã sửa đổi sẽ thay thế phản hồi gốc.

Rào chắn không bao giờ chặn; nó chỉ chú thích (`meta.detections`, `meta.redacted`) hoặc viết lại.

### Prompt Injection (`promptInjection.ts`)

Phát hiện các cấu trúc đối kháng trong nội dung do người dùng cung cấp và thực thi chính sách đã cấu hình. Hành vi được điều khiển bởi các biến môi trường và tùy chọn khởi tạo:

| Cài đặt     | Biến môi trường                                                                                           | Mặc định | Tác động                                                                                                                                                                                        |
| ----------- | --------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bật         | `INPUT_SANITIZER_ENABLED`                                                                                 | `true`   | Khi `false`, rào chắn sẽ ngắt quãng.                                                                                                                                                            |
| Chế độ      | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                           | `warn`   | Chính sách tiêm: `block`, `warn`, hoặc `log`. (`redact` được chấp nhận để tương thích ngược nhưng không **xóa** văn bản tiêm; yêu cầu viết lại PII được kiểm soát bởi `PII_REDACTION_ENABLED`.) |
| Ngưỡng chặn | Tùy chọn `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (bí danh `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Mức độ nghiêm trọng tối thiểu cần thiết để chặn. Mức trung bình chỉ quan sát theo mặc định.                                                                                                     |

**Ưu tiên chế độ** (`getMode`): `options.mode` của caller → `INJECTION_GUARD_MODE` **cờ tính năng DB ghi đè** (Dashboard → Cài đặt → Cờ tính năng) → biến môi trường `INJECTION_GUARD_MODE` → biến môi trường `INPUT_SANITIZER_MODE` → `warn`. Do đó, một ghi đè trên bảng điều khiển sẽ thắng các biến môi trường, vì vậy giao diện Cờ tính năng điều khiển rào chắn đang chạy trực tiếp (không cần khởi động lại). Đọc DB là an toàn: nếu có lỗi, rào chắn sẽ quay lại hành vi dựa trên biến môi trường, và khi không có ghi đè được thiết lập, hành vi giống hệt như giải quyết chỉ dựa trên biến môi trường.

Nguồn phát hiện:

1. `sanitizeRequest()` từ `@/shared/utils/inputSanitizer` (bộ phát hiện chia sẻ được sử dụng ở nơi khác trong pipeline).
2. `DEFAULT_GUARD_PATTERNS` tích hợp sẵn (hiện tại là `system_override_inline` và `markdown_system_block`, cả hai đều có mức độ nghiêm trọng `high`).
3. Các `customPatterns` tùy chọn được truyền qua các tùy chọn khởi tạo (chuỗi, regex, hoặc các bản ghi `{ name, pattern, severity }`).

Khi `mode === "block"` **và** ít nhất một phát hiện đạt ngưỡng nghiêm trọng, `preCall` trả về `{ block: true, message: "Request rejected: suspicious content detected" }`. Trong các chế độ `warn`/`log`, rào chắn ghi lại nhưng cho phép cuộc gọi. Trợ giúp chia sẻ `evaluatePromptInjection()` cũng được xuất ra cho các caller cần đánh giá các prompt mà không cần thông qua registry.

**Giới hạn quét (v3.8.20):** bộ phát hiện chỉ kiểm tra **16 KB đầu tiên** của văn bản prompt đã nối — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) trong `src/shared/utils/inputSanitizer.ts`. Cả `detectInjection()` và `evaluatePromptInjection()` đều `slice(0, MAX_INJECTION_SCAN_BYTES)` trước khi chạy vòng lặp mẫu. Các chỉ thị tiêm nằm gần đầu của một đầu vào, vì vậy điều này giới hạn CPU/GC regex trên các payload hàng trăm KB mà không làm yếu đi phát hiện (so sánh #3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Chạy trên **cả hai** giai đoạn, cuối cùng trong chuỗi mặc định (độ ưu tiên `95`). Xóa các mẫu API-key / secret-token nổi tiếng từ payload đầu ra (nội dung tin nhắn, tham số gọi công cụ, kết quả công cụ) **và** phản hồi của nhà cung cấp, vì vậy một thông tin xác thực được dán vào một prompt (hoặc được phản hồi lại bởi một kết quả công cụ) sẽ không bị rò rỉ đến nhà cung cấp upstream hoặc quay lại với khách hàng.

- **Chỉ chọn tham gia**, cùng quy ước như việc xóa PII (Quy tắc Cứng #20-kề bên):
  bị vô hiệu hóa trừ khi `settings.credentialRedactionEnabled === true` **hoặc**
  `CREDENTIAL_REDACTION_ENABLED=true`. Khi tắt, rào cản này không hoạt động —
  nó không bao giờ chặn và không bao giờ viết lại.
- `redactCredentials()` duyệt toàn bộ cây tải/đáp ứng (`walkValue()`,
  an toàn với ô nhiễm prototype, an toàn với vòng lặp thông qua `WeakSet`) và thay thế các kết quả khớp bằng
  một chỗ giữ chỗ `[REDACTED:<type>]`, chỉ sao chép những nhánh thực sự
  đã thay đổi.
- `CREDENTIAL_PATTERNS` bao gồm các khóa nhà cung cấp LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), mã thông báo VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), khóa thanh toán (Stripe, Square), khóa đám mây
  (khóa truy cập AWS, Twilio, SendGrid, Mailgun), khóa riêng tư / JWT,
  chuỗi kết nối mang thông tin xác thực (`mongodb://user:pass@...`, v.v.), và
  một mẫu tiêu đề chung `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Các khóa hình dạng tiêu đề (`authorization`, `x-api-key`, `api-key`,
  `apikey`) được xóa theo cấu trúc (chỉ giá trị, tiền tố kiểu như
  `Bearer `/`Basic ` được bảo tồn) thay vì thông qua regex văn bản chung.
- Rào cản này không bao giờ chặn; nó chỉ viết lại (`modifiedPayload` /
  `modifiedResponse`) và chú thích (`meta.credentialsRedacted`, `meta.count`).

Rào cản hồi quy: `tests/unit/credential-masker-guardrail.test.ts`.

## Hợp đồng cơ sở (`base.ts`)

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
  block?: boolean; // true sẽ dừng chuỗi ngay lập tức
  message?: string; // được hiển thị khi chặn
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // được preCall trả về để ghi lại yêu cầu
  modifiedResponse?: TValue; // được postCall trả về để ghi lại phản hồi
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

Một guardrail biểu thị "không thay đổi" bằng cách trả về `void`, `{}`, hoặc
`{ block: false }`. Việc trả về `modifiedPayload`/`modifiedResponse` sẽ thay thế
giá trị đang truyền qua chuỗi cho các guardrail phía sau.
`signal?: AbortSignal` truyền vòng đời của bên gọi vào các guardrail. Việc hủy yêu cầu là ngoại lệ fail-open có chủ đích: các cầu nối phương tiện sẽ dừng công việc và dọn dẹp mà không khôi phục dữ liệu phương tiện thô cho một đích được biết là không hỗ trợ dữ liệu đó.

## Registry (`registry.ts`)

Singleton `guardrailRegistry` cung cấp:

- `register(guardrail)` — thêm một guardrail (hoặc thay thế theo tên đã chuẩn hóa) và
  sắp xếp lại theo `priority` tăng dần.
- `clear()` / `list()` — các tiện ích quản trị.
- `runPreCallHooks(payload, context)` — lặp qua các guardrail đang hoạt động, truyền
  payload qua `modifiedPayload`, và dừng tại `block: true` đầu tiên.
- `runPostCallHooks(response, context)` — luồng tương tự ở phía phản hồi.
- `resetGuardrailsForTests({ registerDefaults })` — xóa trạng thái và tùy chọn
  đăng ký lại các giá trị mặc định để cô lập kiểm thử một cách sạch sẽ.

Cả hai trình chạy đều trả về `{ blocked, payload|response, results, guardrail?, message? }`,
trong đó `results` là một mảng các bản ghi `GuardrailExecutionResult` bao gồm
các trường `blocked`, `skipped`, `modified`, `error`, và `meta` cho từng guardrail,
hữu ích cho việc truy vết.

### Vô hiệu hóa guardrail theo từng yêu cầu

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` tổng hợp một
danh sách tên guardrail đã loại bỏ trùng lặp cần được bỏ qua đối với yêu cầu
hiện tại. Các nguồn (tất cả đều không bắt buộc và đều được hợp nhất):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` trong phần thân yêu cầu (cấp cao nhất)
- `metadata.disabledGuardrails` trong phần thân yêu cầu
- Header `x-omniroute-disabled-guardrails` (hoặc dạng cũ
  `x-disabled-guardrails`)

Giá trị có thể là mảng chuỗi hoặc chuỗi phân tách bằng dấu phẩy; tên được
chuẩn hóa thành kebab-case viết thường (`pii_masker` → `pii-masker`). Kết quả
được truyền qua `context.disabledGuardrails` tới registry, nơi sẽ bỏ qua
các guardrail khớp tên (`skipped: true` trong `results`).

## Thứ tự thực thi

Đối với mỗi yêu cầu đi qua `src/sse/handlers/chat.ts` và
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` tạo danh sách bỏ qua từ khóa API, phần thân
   và các header.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` chạy các guardrail theo thứ tự
   ưu tiên tăng dần:
   - Các guardrail bị vô hiệu hóa được ghi nhận là `skipped`.
   - `preCall` của mỗi guardrail có thể ghi lại payload thông qua `modifiedPayload`.
   - Guardrail đầu tiên có `block: true` sẽ dừng ngay chuỗi xử lý và handler trả về
     phản hồi từ chối của guardrail.
3. Payload (có thể đã được ghi lại) được chuyển vào quá trình định tuyến kết hợp
   và gửi đến upstream.
4. Sau khi phản hồi được tập hợp, `guardrailRegistry.runPostCallHooks(...)`
   chạy cùng chuỗi đó trên phản hồi. `block: true` tại đây sẽ loại bỏ phản hồi
   từ upstream.

Các guardrail phát sinh ngoại lệ được ghi nhận với `error: <message>` và được ghi log qua
`logger.warn`, nhưng chuỗi vẫn tiếp tục — theo thiết kế fail-open.

## Cấu hình

Các biến môi trường được những guardrail tích hợp sẵn đọc:

| Biến                                  | Được dùng bởi             | Tác dụng                                                                                                        |
| ------------------------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Đặt thành `false` để vô hiệu hóa hoàn toàn việc phát hiện.                                                      |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Chính sách đối với injection: `warn`, `block` hoặc `log`. Giá trị cũ `redact` không ghi lại văn bản injection.  |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Chế độ cho guard chống injection; đồng thời là cờ tính năng trong DB **ghi đè** các biến môi trường (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Mức độ nghiêm trọng tối thiểu mà `MODE=block` sẽ từ chối: `high` (mặc định), `medium` hoặc `low`.               |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Bí danh cũ của `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Khi là `true`, PII trong yêu cầu được che đi (độc lập với chế độ injection).                                    |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Kiểm soát hành vi che dữ liệu ở phía phản hồi.                                                                  |

Các guardrail Modality Bridge đọc cấu hình thời gian chạy từ kho cài đặt được
DB hỗ trợ (`getSettings()`), không phải từ các biến môi trường. Các khóa chính
của Vision là `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` và
`modalityBridgeCacheMaxEntries`. Các khóa cũ
`visionBridge*` chỉ được chấp nhận làm phương án đọc dự phòng trong một chu kỳ
như đã ghi trong tài liệu; các thao tác ghi từ dashboard sử dụng những khóa
chính. Các giá trị mặc định và trình phân giải dự phòng nằm trong
`src/shared/constants/modalityBridgeDefaults.ts`, còn các hằng số cũ được giữ
lại trong `src/shared/constants/visionBridgeDefaults.ts`.

Audio sử dụng `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` và `modalityBridgeAudioMaxClips`, cùng với các cài
đặt `modalityBridgeCache*` dùng chung. Audio không có cơ chế dự phòng bằng khóa
cũ vì các khóa này được giới thiệu cùng với schema Modality Bridge.

Video sử dụng `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` và
`modalityBridgeVideoTimeout`, cùng với các cài đặt `modalityBridgeCache*` dùng
chung. Tính năng này mặc định bị vô hiệu hóa vì FFmpeg/ffprobe là các dependency
vận hành không bắt buộc, đồng thời việc tạo chú thích cho khung hình làm tăng độ
trễ và chi phí mô hình.

## Guardrail tùy chỉnh

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

Các bước:

1. Tạo `src/lib/guardrails/myGuardrail.ts` mở rộng `BaseGuardrail`.
2. Triển khai `preCall` và/hoặc `postCall`.
3. Đăng ký ngay khi import (thêm từ `registerDefaultGuardrails`) hoặc
   gọi `guardrailRegistry.register(...)` trong thời gian chạy — registry sẽ thay thế
   mọi guardrail trước đó có cùng tên đã chuẩn hóa.
4. Thêm các bài kiểm thử trong `tests/unit/` (các ví dụ hiện có:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Kiểm thử

Sử dụng `resetGuardrailsForTests()` giữa các bài kiểm thử để bắt đầu từ một trạng thái đã biết.
Truyền `{ registerDefaults: false }` để bắt đầu với một registry trống và
chỉ đăng ký các guardrail đang được kiểm thử. Vision Bridge hỗ trợ chèn phần phụ thuộc
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge cung cấp các điểm nối
tương đương cho phần cài đặt, khả năng, lựa chọn mô hình STT, kiểm tra thông tin xác thực
và phiên âm. Do đó, các bài kiểm thử có thể thực thi cả hai luồng mà không cần truy cập
cơ sở dữ liệu hoặc mạng.

## Xem thêm

- `src/lib/guardrails/` — phần triển khai
- `src/shared/utils/inputSanitizer.ts` — bộ phát hiện dùng chung hỗ trợ
  chống chèn prompt và che thông tin nhận dạng cá nhân (PII)
- `src/shared/constants/visionBridgeDefaults.ts` — các giá trị mặc định của Vision Bridge và
  danh sách mô hình bắt buộc sử dụng bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — các giá trị mặc định khi chạy dùng chung cho Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — lớp độc lập (circuit breaker, thời gian chờ)
- `docs/reference/ENVIRONMENT.md` — tài liệu tham khảo đầy đủ về biến môi trường

## Phạm vi route và red-team của guard chống chèn (Giai đoạn 8 · Khối D)

Guard chống chèn (`createInjectionGuard` / `withInjectionGuard`) bao phủ tất cả các route
chấp nhận prompt của người dùng. Guard tuân theo `INJECTION_GUARD_MODE` (mặc định `warn` = chỉ ghi log;
`block` = trả về HTTP 400 `SECURITY_001`).

| Loại              | Route                                                                                                                                                | Chế độ mặc định |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Văn bản (hiện có) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn            |
| Sinh nội dung     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn            |
| Dữ liệu           | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn            |

Quá trình trích xuất văn bản (`extractMessageContents`) bao phủ `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (hằng đêm, `nightly-llm-security.yml`):** promptfoo xác thực rằng mỗi route đều chặn
tập dữ liệu OWASP-LLM khi `INJECTION_GUARD_MODE=block`; garak chạy các phép thăm dò (bỏ qua khi không có secret).
`moderations` được đưa vào để đảm bảo tính nhất quán — các đơn vị vận hành ở chế độ chặn có thể miễn trừ route này thông qua
`resolveDisabledGuardrails`.

Quy trình hằng đêm (`.github/workflows/nightly-llm-security.yml`, cron + kích hoạt thủ công)
có hai job:

- **`promptfoo-guard` (bắt buộc)** — chạy `promptfoo eval -c promptfooconfig.yaml`
  với `INJECTION_GUARD_MODE=block`. Mỗi trường hợp đối kháng (ví dụ: "bỏ qua tất cả
  chỉ dẫn trước đó…", các kiểu jailbreak dạng DAN) xác nhận rằng phản hồi chứa
  `error.code === "SECURITY_001"`, tức là guard thực sự đã từ chối yêu cầu.
- **`garak` (tham khảo)** — chạy garak `--probes promptinject,dan,leakreplay`
  với một phiên bản OmniRoute cục bộ (`http://localhost:20128/v1`). Job này phụ thuộc vào
  secret của nhà cung cấp (`PROMPTFOO_PROVIDER_KEY`); sẽ bỏ qua một cách an toàn khi không có và được thêm hậu tố
  `|| true`, vì vậy job chỉ báo cáo mà không làm CI thất bại.

Phạm vi bao phủ của helper guard (`createInjectionGuard` / `withInjectionGuard`)
trải rộng trên mọi route `/v1` có chứa prompt; văn bản prompt được lấy từ
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` bởi
`extractMessageContents()` trong `src/shared/utils/inputSanitizer.ts`.
