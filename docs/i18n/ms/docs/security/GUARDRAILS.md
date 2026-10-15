# Guardrails (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sumber kebenaran:** `src/lib/guardrails/`
> **Terakhir dikemas kini:** 2026-08-29 — v3.8.51 (Asal transkrip Video Bridge diisytiharkan oleh pemanggil,
> belum disahkan oleh pelayan — dijelaskan mengikut #11661)

Guardrail menguatkuasakan keselamatan, dasar, dan transformasi kandungan pada sempadan
antara OmniRoute dan penyedia hulu. Setiap guardrail boleh memeriksa (dan
secara pilihan menolak, mengubah, atau menganotasi) muatan permintaan (`preCall`) dan
respons hulu (`postCall`).

Sistem ini adalah **fail-open**: jika guardrail membuang ralat semasa pelaksanaan, pendaftar
merekodkan ralat tersebut dan meneruskan dengan guardrail seterusnya daripada menggagalkan
permintaan. Penyekatan adalah keputusan yang jelas (`block: true`), bukan kemalangan.

## Penghadang Terbina Dalam

Pendaftaran secara automatik memuatkan enam penghadang dalam urutan keutamaan semasa import
(rujuk `registry.ts` → `registerDefaultGuardrails()`):

| Keutamaan | Nama                | Peringkat(s)   | Fail                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nombor keutamaan yang lebih rendah dijalankan **lebih dahulu**.

### Jambatan Visi (`visionBridge.ts`) — Jambatan Modality PR-1

Mengintersepsi permintaan yang mengandungi imej yang ditujukan kepada **model bukan visi** dan sama ada
mengalihkan keseluruhan permintaan kepada model yang mampu visi atau menggantikan bahagian imej
dengan penerangan teks yang dihasilkan oleh model visi yang boleh dikonfigurasi sebelum
panggilan hulu. Ini membolehkan penyedia teks sahaja mengendalikan
muatan multimodal secara telus.

Aliran:

1. Langkau jika model sasaran sudah menyokong visi (kecuali ia muncul dalam senarai
   jambatan paksa `isVisionBridgeForcedModel`).
2. Ekstrak bahagian imej melalui `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), yang menyerahkan kepada **detektor media
   bersatu** `detectMediaParts()` dalam `open-sse/utils/mediaParts.ts` — sumber kebenaran tunggal
   yang dikongsi dengan penapis keserasian combo.
   Ekstraksi dibenarkan hanya untuk bahagian teratas bentuk
   yang boleh disambung semula oleh `replaceImageParts` (kontrak extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, dan API Respons `input_image`. Pukulan bersarang dan
   bentuk hanya penunjuk adalah bahan penapis combo dan tidak pernah diekstrak.
   Langkau jika tiada yang dijumpai.
3. Selesaikan konfigurasi masa lari melalui `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): kunci tetapan baru `modalityBridge*`
   menang; kunci `visionBridge*` warisan kekal sebagai **fallback satu-siklus**
   (tingkap rollback). Langkau sebelum sebarang pengembaraan media apabila jambatan dinyahdayakan.
4. Pemilih mod (`modalityBridgeVisionMode`, lihat jadual di bawah) memutuskan
   sama ada untuk mengalihkan atau menerangkan. Pengalihan mengembalikan `modifiedPayload` dengan hanya `model`
   ditukar, ditambah meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Laluan menerangkan: hadkan imej kepada `maxImages`, susun prompt yang peka tugas,
   rujuk cache menerangkan, panggil model visi **secara selari**
   (`Promise.allSettled`), dan suntik bahagian teks `[Image N]: <description>` di
   tempat mereka. Penerangan yang gagal menghasilkan `null` dan bahagian imej asal
   **dipelihara** (#4012) — kecuali pada laluan penerangan combo apabila setiap
   penerangan gagal, di mana hulu yang disahkan bukan visi mendapat
   `(unavailable — no vision-capable provider connected)` stub sebagai ganti (#8430).
6. Kembalikan `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Pemilih mod (`modalityBridgeVisionMode`)

| Mod        | Lalai | Tingkah laku                                                                                                                                                                                                                                                                                 |
| ---------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔     | Heuristik warisan, tidak disentuh (#6640/#7204): model bukan combo/`auto/` mengalihkan kepada model visi terbaik kecuali model asal sudah mempunyai kelayakan yang boleh digunakan (kemudian menerangkan); sasaran combo sentiasa menerangkan.                                               |
| `describe` |       | Sentiasa menerangkan — blok pengalihan dilangkau sepenuhnya; model yang dipilih oleh pengguna sentiasa menjawab.                                                                                                                                                                             |
| `reroute`  |       | Paksa pengalihan: pengawal model yang menyimpan kelayakan dilangkau. Pengawal kelayakan pengalihan-**sasaran** masih terpakai — apabila tiada sasaran visi yang boleh digunakan wujud, permintaan jatuh ke penerangan supaya imej mentah tidak pernah sampai ke backend teks sahaja (#8430). |

Mod paksa memintas **sebelum** heuristik auto dijalankan; tingkah laku `auto`
adalah byte-identical kepada penghadang pra-PR-1.

#### Skop kunci API (`visionBridgeKeyScope.ts`)

Apabila kunci API pemanggil mengehadkan `allowedConnections`, kolam kuota
(`allowedQuotas`) atau model (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), jambatan hanya
memilih model pengalihan dan penerangan yang boleh digunakan oleh kunci, pada sambungan yang boleh
digunakan oleh kunci. Panggilan penerangan kemudian sentiasa melalui gelung diri OmniRoute dengan
header `x-omniroute-self-loop-key-id`, jadi permintaan chat yang diterima
menegakkan dasar sambungan dan model kunci itu sekali lagi. `enforceApiKeyPolicy()`
menghormati header itu hanya bersama dengan pembawa gelung diri, jadi ia hanya boleh
menyempitkan akses, dan id yang tidak dapat diselesaikan ditolak.

Jika tiada model visi dibenarkan untuk kunci, laluan penerangan mengundurkan diri dan
permintaan diteruskan tanpa diubah, tingkah laku fail-terbuka yang sama seperti penghadang yang dinyahdayakan (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Permintaan tanpa kunci, dan kunci tanpa sekatan ini, berkelakuan sama seperti
sebelumnya.

#### Prompt penerangan peka tugas (`modalityBridgeVisionTaskAware`)

Default **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) menambah
teks **mesej pengguna terakhir** (dipendekkan kepada 500 aksara) kepada asas
prompt describe, mengarahkan penerangan kepada apa yang sebenarnya diminta
oleh pengguna (corak codex-vision-proxy) dan meminta model visi untuk mentranskripsi
teks yang kelihatan. Dengan bendera dimatikan — atau tiada teks pengguna — prompt
asas digunakan tanpa perubahan.

Permintaan OpenAI yang sesuai dengan describe self-loop (`callVisionModelSingle()`
dalam `visionBridgeHelpers.ts`) sentiasa meminta `image_url.detail: "high"` —
tanpa syarat, untuk setiap pemanggil/penyedia, tidak terikat pada sebarang isyarat
klien. Pengambilan detail rendah merendahkan ketepatan OCR untuk tugas
transkripsi teks yang tepat diminta oleh prompt ini, jadi panggilan describe itu sendiri
sentiasa meminta detail tinggi tanpa mengira tahap detail yang digunakan dalam
permintaan masuk asal. Ini hanya mempengaruhi badan permintaan describe dalaman;
ia tidak mengubah cara OmniRoute meneruskan `image_url.detail` pemanggil
pada permintaan utama — default itu diterapkan secara berasingan, dan hanya untuk
klien OpenCode yang dikesan, dalam `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Cawangan format wayar Anthropic bagi describe self-loop tidak mempunyai medan `detail`
dan tidak terjejas oleh mana-mana default.

#### Had output describe (`modalityBridgeVisionMaxChars`)

| Kunci                          | Default | Julat              |
| ------------------------------ | ------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`     | `0` atau 100–50000 |

`0` (default) bermaksud **tiada had** — penerangan yang dikembalikan oleh
`callVisionModel()` dipindahkan tanpa diubah, mengekalkan tingkah laku sedia ada.
Mana-mana nilai dalam julat 100–50000 memendekkan penerangan dengan
akhiran `…` sebelum ia disambungkan semula sebagai `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` dalam `src/lib/guardrails/visionBridge.ts`).
Tingkatkan ini untuk tugas OCR yang berat detail di mana model hiliran memerlukan
transkripsi penuh; turunkan untuk mengehadkan penggunaan token pada model visi
yang banyak bercakap. Medan papan pemuka terletak pada panel Lanjutan tab Visi
(`modality-bridge-max-chars` dalam `ModalityBridgeVisionTab.tsx`) dan mengehadkan
mana-mana nilai antara 1 dan 99 hingga lantai 100 sambil membiarkan `0` yang
jelas tidak terjejas — `0` adalah nilai Zod yang sah dengan sendirinya
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), bukan sekadar
default "tidak ditetapkan".

#### Cache describe (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL dalam memori untuk output describe, dikongsi secara proses.
Kunci = `sha256(imageRef + composedPrompt + configuredBridgeModel)` dengan
penyampaian panjang-panjang (tiada perlanggaran sempadan medan). Komponen model adalah
model jambatan yang **dikonfigurasi**, bukan model yang sebenarnya menjawab —
`callVisionModel` mungkin kembali secara dalaman, dan kunci per percubaan akan
memecahkan cache. Describe yang gagal tidak pernah disimpan dalam cache. Tetapan:

| Kunci                           | Default | Julat   |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Normalisasi imej jauh (self-loop describe/pengambilan base64)

Apabila jambatan mengambil imej **jauh** itu sendiri — panggilan self-describe
Anthropic dan penukaran base64 format wayar claude
(`ensureBase64ImagesForClaudeWire`), kedua-duanya melalui
`fetchRemoteImageAsDataUri()` dalam `visionBridgeHelpers.ts` — URI data yang dihasilkan
dipindahkan melalui `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) sebelum disematkan dalam permintaan model visi.
Imej yang terlalu besar diperkecil kepada **2048px tepi panjang** (sepadan
dengan had pengubahsuaian yang sudah diterapkan oleh OpenAI/Anthropic di sisi pelayan),
yang mengurangkan byte muat naik/latensi tanpa mengubah apa yang dilihat oleh model visi.
Pengubahsuaian menggunakan `sharp`, dimuatkan melalui import dinamik: pada platform
di mana binari asalnya gagal dimuat, `normalizeDataUri()` **tidak pernah membuang** —
ia kembali kepada pemindahan byte asal, jadi laluan describe/penukaran base64
sentiasa terus berfungsi. Byte bukan imej (pengambilan yang tidak mengembalikan
imej yang boleh ditafsir) juga dipindahkan tanpa diubah. Normalisasi ini
dikhaskan untuk imej yang diambil oleh jambatan untuk panggilan self-nya sendiri —
ia tidak pernah diterapkan kepada payload laluan mentah pemanggil, konsisten dengan
prinsip mutasi hanya opt-in (Peraturan Ketat #20).

#### Skema tetapan + migrasi

Kunci `modalityBridge*` yang baru disahkan oleh Zod dalam `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*`, dan kumpulan
`modalityBridgeAudio*` yang digunakan oleh Jambatan Audio. Migrasi
`141_modality_bridge_settings.sql` menyalin nilai warisan sedia ada
`visionBridge*` kepada kunci baru yang sepadan (idempotent, tidak pernah menimpa
nilai `modalityBridge*` yang ditetapkan oleh pengendali); kunci warisan tetap diterima
sebagai fallback bacaan untuk satu kitaran pelepasan.

#### Header ketelusan + statistik

Respons yang diubah suai oleh describe membawa
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(dibina oleh `buildModalityBridgeHeader()` dalam `modalityBridge/bridgeStats.ts`,
dicap oleh `withModalityBridgeHeader()` dalam `src/sse/handlers/chatHelpers.ts`).
Permintaan yang dialihkan tidak mendapat **header** — payload tidak diubah dan
pertukaran model sudah jelas dalam medan `model` badan respons.

`GET /api/modality-bridge/stats` (pengesahan pengurusan, tahap yang sama seperti
`GET /api/settings`) mengembalikan pengira per-modality dalam memori
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` untuk `vision`, `audio`, dan
`video`. `averageLatencyMs` menggunakan `latencySamples`, bukan semua percubaan, sebagai
penyebut; operasi tanpa masa tidak menghasilkan sampel sifar-milisaat. `bridged` kekal sebagai alias yang serasi ke belakang untuk penukaran yang berjaya; percubaan yang gagal tidak menambahkannya.
Pengira direset pada permulaan proses mengikut reka bentuk
(telemetri, bukan perakaunan).

#### Konfigurasi papan pemuka

Halaman papan pemuka khusus adalah
`/dashboard/settings/modality-bridge`. Tab `Vision`, `Audio`,
dan `Video` yang boleh diakses melalui URL mengekalkan parameter pertanyaan semasa menukar nilai `tab`.
Tab Vision mendedahkan pengaktifan, mod, pemilihan model (termasuk
default automatik), penggalakan yang peka terhadap tugas, had masa imej/deskripsi/cache yang maju,
pengira masa larian, dan permintaan sampel yang dilindungi. Tab Audio juga aktif: ia mendedahkan
pengaktifan, pemilih model hanya STT dengan Auto, had masa/max-clip, pengira audio,
dan ujian sampel `input_audio`. Tab Video berfungsi: ia melaporkan
keadaan runtime FFmpeg/ffprobe — salah satu daripada empat keadaan UI eksplisit (`unknown` semasa
probe sedang dalam perjalanan atau tidak dapat diselesaikan, `restricted` pada host papan pemuka bukan loopback di mana probe dilepaskan di sisi klien, `unavailable` setelah diprobe
dan disahkan hilang, atau `available` dengan versi FFmpeg/ffprobe) — mengekalkan
had enable/model/frame/video/timeout, menapis pemilih model kepada
model yang mampu penglihatan, dan mendedahkan pengira video.

Kad Vision Bridge yang terdahulu di bawah tetapan AI adalah pautan keserasian kepada
halaman baru; ia tidak lagi memiliki salinan kedua borang tersebut. Penyedia Media juga
menghubungkan aliran Kerja Gambar-ke-Teks dan Ucapan-ke-Teks kepada tab Modality
Bridge yang berkaitan tanpa menghapuskan taman permainan Ucapan-ke-Teks yang sedia ada.

**Pengabaian kemasukan gelung sendiri:** apabila panggilan describe melalui gelung sendiri `/v1`
OmniRoute (model penyedia bukan standard), sub-permintaan menghantar
`x-omniroute-admission-bypass: internal` dan disahkan dengan kelayakan gelung sendiri yang diselesaikan — sentinel `sk_omniroute` tempatan dalam mod tempatan, atau kunci env yang dikonfigurasikan oleh pengendali `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350) supaya
penempatan `REQUIRE_API_KEY=true` masih boleh menjalankan panggilan describe. Pengabaian
hanya dihormati untuk kelayakan tersebut, jadi klien luar tidak boleh menggunakan
header untuk mengelak kemasukan.

Tetapan lalai warisan terdapat dalam `src/shared/constants/visionBridgeDefaults.ts`; yang
baru mod/tugas-peka/cache lalai dan penyelesai tetapan terdapat dalam
`src/shared/constants/modalityBridgeDefaults.ts`. Penghadang mendedahkan pilihan pembina
`deps` supaya ujian boleh menyuntik pelaksanaan `getSettings` dan
`callVisionModel` palsu.

### Jambatan Audio (`audioBridge.ts`) — Modality Bridge PR-3

Mengintersepsi permintaan chat yang mengandungi audio sebelum ia sampai ke sasaran yang tidak
diketahui menerima input audio. Ia tidak pernah mengalihkan permintaan chat: bahagian audio
ditranskripsikan melalui titik akhir multipart yang serasi dengan OpenAI yang sedia ada dan
model chat yang dipilih meneruskan dengan transkrip teks.

Aliran:

1. Menyelesaikan `supportsAudio` melalui `getResolvedModelCapabilities()`. Metadata pendaftaran penyedia yang jelas menang, kemudian metadata model statik, kemudian `modalities_input` yang diselaraskan. Senarai input yang diisytiharkan tanpa `audio` adalah `false`; tiada bukti keupayaan kekal `null`. Kedua-dua `false` dan `null` mengaktifkan jambatan konservatif, manakala `true` mengelakkannya.
2. Menyelesaikan tetapan `modalityBridgeAudio*` dan mengekstrak bahagian audio peringkat atas yang boleh disambung dari setiap mesej melalui pengesan `detectMediaParts()` yang dikongsi. Bentuk wayar yang disokong adalah OpenAI `input_audio`, `audio_url`, dan
   `source.media_type: "audio/*"`. Audio bersarang dikesan untuk pengalihan tetapi tidak
   dikeluarkan oleh laluan sambungan. Kerja dihadkan oleh `modalityBridgeAudioMaxClips`;
   bahagian yang kemudian tetap tidak disentuh.
3. Menghormati `provider/model` yang dikonfigurasikan, atau membiarkan `selectAudioBridgeModel()` mengembara
   `AUDIO_TRANSCRIPTION_PROVIDERS` dalam urutan katalog stabil dan memilih model pertama
   dengan kelayakan penyedia aktif yang boleh digunakan.
4. `callAudioTranscription()` menukar audio base64/data-URI kepada `file` multipart,
   atau memuat turun `audio_url` jauh melalui penghadang outbound yang hanya untuk awam dengan pinning DNS dan had 25 MB. Ia kemudian POST file dan model yang dipilih ke gelung sendiri `/v1/audio/transcriptions` tempatan, disahkan dengan
   `resolveSelfLoopBearer()`. Laluan transkripsi yang sedia ada melakukan pencarian kelayakan biasa, pengendalian cooldown/had kadar, dan penghantaran penyedia.
5. Panggilan yang berjaya menggantikan bahagian mereka dengan `[Audio N]: <transcript>`. Panggilan
   dijalankan dengan `Promise.allSettled`: kegagalan individu mengekalkan bahagian audio asal
   (#4012 kontrak). Jika setiap panggilan gagal dan sasaran terbukti
   `supportsAudio === false`, bahagian tersebut menjadi
   `[Audio N]: (tidak tersedia — tiada penyedia STT yang disambungkan)` (#8430 kontrak). Untuk
   sasaran yang tidak diketahui (`null`), hasil semua kegagalan tetap tidak disentuh. Sasaran yang terbukti hanya teks tanpa kelayakan STT yang boleh digunakan menerima stub eksplisit yang sama tanpa mengeluarkan panggilan rangkaian.

Transkrip yang berjaya menggunakan cache Modality Bridge LRU/TTL yang meliputi proses. Kunci
menggabungkan rujukan audio, label operasi `audio-transcription` yang stabil, dan model STT yang dipilih; kegagalan tidak pernah disimpan dalam cache. Percubaan audio mengemas kini
`bridged`, `cacheHits`, `failures`, dan `lastUsedAt` pengira.
Respons yang diubah membawa
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; permintaan yang tidak disentuh tidak menerima segmen Jambatan Audio.

Tetapan runtime disokong oleh DB dan disahkan oleh Zod:

| Kunci                         | Lalai   | Julat            |
| ----------------------------- | ------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                |
| `modalityBridgeAudioModel`    | `""`    | Auto atau ID STT |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10             |

Cache yang dikongsi tetap dikawal oleh `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, dan `modalityBridgeCacheMaxEntries`.

### Jambatan Video (`videoBridge.ts`, `videoBridgePipeline.ts`)

Mengintersepsi bahagian video peringkat atas dalam Chat Completions `messages` dan API Responses
`input` sebelum sasaran tanpa sokongan video asli yang diketahui dipanggil.
Bentuk yang disokong adalah `input_video`, `video_url`, `video_source`, URL HTTPS,
dan `data:video/*;base64,...` data URI. Nama fail biasa dalam teks tidak dianggap
sebagai video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) memiliki perjalanan permintaan,
pemeriksaan kemampuan/polisi, agregasi per permintaan, dan muatan respons.
Kerja per-video — pemerolehan, cache hasil keseluruhan, menggambarkan urutan bingkai
(yang menggabungkan sebarang transkrip audio yang dinyatakan oleh pemanggil), dan metrik/abort/pembersihan per-cubaan — tersembunyi di belakang `processVideoPart` dalam
`videoBridgePipeline.ts`, dipanggil sekali untuk setiap bahagian video dalam gelung `preCall`.
Modul itu juga mendefinisikan sempadan port eksplisit `VideoMediaBrokerPort`
(memperolehi bait dan mengekstrak bingkai yang diambil), `VideoAudioTranscriptionPort`
(menggabungkan transkrip audio yang dinyatakan oleh pemanggil dengan kapsyen yang diambil), dan
`VideoDrilldownPort` (bentuk penyimpanan mentah legasi). STT pengeluaran dan pengekalan bingkai
dibentuk di sekitar port yang menerangkan melalui `createVideoSttAdapter` dan
`createVideoDrilldownAdapter`; yang terakhir menggunakan kitaran hidup pemegang legap yang dikongsi.

Jalan permintaan awam `/v1` tidak pernah mengimport atau memanggil subprocess. Video
jauh dimuat turun di bawah had 50 MiB; video base64 dalam talian mempunyai
had 36 MiB yang dikodkan secara konservatif bagi setiap video supaya model/pesan/envelop bingkai
boleh kekal dalam had kemasukan permintaan JSON awam sebanyak 50 MiB. Panjang dalam talian dan anggaran saiz yang dikodkan diperiksa sebelum pengagihan. HTTPS
diperlukan pada URL jauh awal dan setiap pengalihan, menggunakan
pengawal keluar awam yang sedia ada dengan penetapan DNS. Bait kemudian melintasi sempadan
broker dalaman `POST /api/modality-bridge/video/extract` yang tepat. Laluan itu adalah
`LOCAL_ONLY` dan `SPAWN_CAPABLE`, hanya menerima permintaan yang disahkan per-proses,
trusted-loopback, dan tidak pernah menerima URL, laluan sistem fail, boleh laku,
atau senarai argumen. Saluran paip saiz badan API dan pembaca badan bertambah
pengendali secara bebas menguatkuasakan had input broker 50 MiB. Barisan terhadnya
berjalan satu pengambilan pada satu masa, membenarkan empat pekerjaan tertangguh, dan mengehadkan input tertangguh kepada
100 MiB.

Di dalam broker, `ffprobe` membaca fail tempatan persendirian; senarai format
yang dibenarkan tetap mengecualikan format senarai main dan manifest. Untuk bekas keluarga MOV
yang dibenarkan, rujukan data MOV luar tetap dilumpuhkan secara lalai, dan
perintah tetap tidak memilih untuk mereka. Kedua-dua `ffprobe` dan `ffmpeg` menggunakan
senarai putih protokol `file`-sahaja, satu utas, array argumen tetap, tiada shell,
dan boleh laku yang diselesaikan dari `PATH`. Aliran penutup gambar yang dilampirkan tidak
boleh dimainkan. Semua aliran yang boleh dimainkan mesti memenuhi had, dan aliran
lalai eksplisit lebih disukai sebelum pengunduran indeks terendah yang deterministik. Video terhad kepada 600 saat, 8,192 piksel setiap dimensi, dan
33,554,432 piksel sumber. FFmpeg mengambil sampel bingkai JPEG titik tengah 1–16, mengurangkan
tepi panjang kepada maksimum 1,024 piksel tanpa meningkatkan input yang lebih kecil, dan
tidak pernah menerima URL. Pengambilan adalah `uniform` secara lalai. Polisi pilihan
`scene_aware` dan `segment_aware` melakukan satu laluan FFmpeg tetap tambahan
ke atas aliran tempatan yang telah disahkan, memilih cap masa adegan `showinfo` yang terhad,
dan kembali secara deterministik kepada titik tengah uniform yang sama apabila pengesan gagal, tamat masa, output yang tidak teratur, atau set calon yang kosong. Mod segment-aware memperuntukkan sampel titik tengah secara proporsional kepada
selang adegan yang telah disahkan; bukti dan tingkah laku pengunduran yang peka terhadap segmen
diperincikan di bawah. Had keras 16 bingkai dikenakan
setelah pemilihan dalam setiap polisi. Apabila permintaan peka adegan mempunyai hanya
anggaran satu bingkai, ia menggunakan titik tengah uniform bagi video penuh aktif atau tetingkap fokus
dan melaporkan `policyEffective: uniform`: satu bingkai adegan yang dipilih tidak dapat
mengekalkan kedua-dua hujung temporal. Pemanggil boleh secara pilihan memberikan
tetingkap fokus terhad (`start`/`end` saat); had dipaksa kepada durasi media,
tetingkap terbalik atau tidak terhad ditolak, dan semua polisi pengambilan
dilaksanakan hanya dalam selang yang dinormalisasi. Tetingkap yang dihasilkan
disertakan dalam metadata pengambilan dan dalam awalan deskripsi yang tidak dipercayai
supaya model hiliran dapat membezakan petikan fokus dari garis masa penuh.

Fokus kapsyen semantik adalah tetapan eksplisit yang berasingan. Mod analisis lalai `full`
mengekalkan prompt bingkai yang sedia ada dan tidak pernah meneruskan teks permintaan
kepada model kapsyen. Dalam mod `focused`, jambatan hanya membaca `text`/`input_text` yang
ditulis oleh pengguna yang tidak kosong yang terbaru dari bekas Chat atau Responses yang sama,
menormalkannya kepada NFC, menggabungkan watak kawalan dan ruang kosong,
dan mengehadkannya kepada 500 titik kod Unicode. Hasil kosong kembali kepada
prompt `full` yang tepat. Petunjuk yang boleh digunakan disusun sebagai JSON dalam blok
konteks pengguna yang tidak dipercayai yang khusus dan hanya boleh memprioritaskan butiran yang boleh diperhatikan; ia
tidak boleh mengatasi amaran berasingan terhadap mengikuti arahan yang boleh dilihat
atau didengar dalam media. Fokus tekstual tidak pernah menyimpulkan `start`/`end` atau mengubah
pengambil sampel temporal.

#### Bukti segmen struktur FU-07

`segment_aware` menggunakan satu laluan pra-analisis terhad ke atas aliran video tempatan yang telah disahkan. Rantaian penapis tetap pertama kali mengubah saiz kepada maksimum 320 piksel lebar, mengesan perubahan adegan dan selang beku, kemudian mengambil sampel pada 1 bingkai per saat untuk kabur, purata luma, dan maklumat spatial/temporal. Laluan ini terhad kepada 600 sampel struktur, satu utas FFmpeg/penapis, protokol dan senarai container yang hanya membenarkan `file`, had output proses 1 MiB, dan maksimum 30 saat dalam batasan berkongsi broker. Ia tidak pernah menerima arahan, penapis, laluan, atau URL dari permintaan.

Nilai struktur adalah bukti pengambilan sampel yang deterministik, bukan pemahaman video semantik. Mereka tidak menyimpulkan subjek, tindakan, kapsyen, ucapan, atau niat pengguna. Sempadan adegan dan beku membentuk segmen; liputan beku, kabur, pendedahan, butiran spatial, dan perubahan temporal hanya mempengaruhi bagaimana bajet 1–16 bingkai yang sedia ada diagihkan. Segmen yang sepenuhnya beku dihadkan kepada satu bingkai, manakala segmen yang tidak beku bersaing untuk bajet yang tinggal. Apabila sempadan melebihi bingkai, liputan garis masa seragam dikekalkan supaya pemotongan awal yang cepat tidak dapat menyembunyikan segmen yang panjang. Sempadan adegan dalam resolusi analisis 1 saat bagi sempadan beku digabungkan.

Penapis yang hilang, bukti yang tidak berbentuk/ kosong, ralat pengesan, atau masa tamat pra-analisis yang terhad gagal terbuka kepada dasar titik tengah seragam yang tepat. Pembatalan pemanggil atau tarikh akhir broker tidak gagal terbuka: ia menamatkan subprocess yang sedang berjalan, menghalang pengambilan bingkai kemudian, dan pokok sementara peribadi dibuang dalam `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` menghasilkan fixture FFmpeg sebenar yang deterministik untuk penjimatan panggilan kapsyen pasca-penyelarasan, pengagihan bajet gerakan padat, bukti kabur/pendedahan/SI-TI, pemotongan cepat dengan ekor panjang, dan positif palsu pudar secara beransur-ansur. Ia merekod masa dinding pra-analisis dan, di mana `/usr/bin/time` tersedia, CPU anak dan RSS puncak. Pemeriksaan kualitinya hanya orakel struktur. Kualiti model kapsyen sebenar kekal `HOLD` kerana pengikat ini tiada titik akhir yang dibenarkan atau hakim beku. Penjimatan kewangan juga kekal `HOLD` kecuali `--caption-cost-per-call-usd` memberikan anggaran positif per panggilan yang jelas; skrip tidak pernah mereka hasil tersebut.

Setiap bingkai dihadkan kepada 4 MiB, semua bingkai mentah bersama kepada 23 MiB, dan respons broker yang diserahkan kepada 32 MiB. Direktori sementara peribadi dibuang dalam `finally`. OmniRoute tidak menggabungkan FFmpeg dan tidak menerima laluan executable tersuai. Sebelum kapsyen, jambatan menerapkan laluan deduplikasi visual yang konservatif: setiap JPEG dikurangkan kepada buffer grayscale 16×16 dan dibandingkan hanya dengan bingkai terakhir yang disimpan. Untuk bajet kapsyen yang diminta melebihi satu bingkai, pengambilan menyediakan kolam calon terhad sehingga dua kali bajet itu dan tidak pernah lebih daripada 16 bingkai. Had yang diminta hanya diterapkan selepas deduplikasi, dengan calon yang dipilih pertama dan terakhir dipelihara semasa penipisan akhir apabila bajet sekurang-kurangnya dua. Dasar `grayscale-16x16-mean-cells-v2` yang versi menggunakan yang lebih besar daripada delta luma purata dan nisbah sel thumbnail yang delta normalisasinya sekurang-kurangnya 0.05. Ambang duplikasi adalah tetap 0.04, dipilih untuk kebolehprediksian dan bukan didedahkan sebagai tetapan waktu jalan. Isyarat kontras tinggi sekunder ini memelihara gerakan kecil dan perubahan teks yang boleh dilihat yang boleh disembunyikan oleh perbandingan hanya purata. Ralat pengkomparator atau pengurai gagal terbuka dan mengekalkan liputan. Metadata output memisahkan calon yang diekstrak, bingkai yang berjaya digunakan, dan duplikasi visual yang dibuang.

Bahagian video yang ditandakan secara eksplisit boleh meminta helaian kontak bertanda waktu. Jambatan membina grid JPEG maksimum 4 lajur, 16 bingkai. Setiap sel 512 piksel membakar cap waktu sumbernya ke dalam jalur bawah kontras tinggi, manakala cap waktu yang sama kekal dalam metadata teks untuk penghubungan dan audit ke hilir. JPEG lengkap kekal dihadkan kepada 32 MiB. Jika `sharp` tidak dapat menguraikan atau menyusun grid, jambatan kembali kepada bingkai JPEG individu; pembatalan klien masih menyebar melalui operasi helaian.

Bukti promosi secara sengaja dipisahkan daripada mikrobenchmark komposisi sintetik. `scripts/perf/video-bridge-contact-sheet-eval.ts` mentakrifkan satu pengikat A/B yang versi skema untuk model visi yang serasi dengan OpenAI yang sebenar. Ia mengukur token yang dilaporkan oleh penyedia, latensi dinding hujung ke hujung (termasuk komposisi helaian), jumlah panggilan model, dan pengekalan fakta yang ditakrifkan oleh manifest. Respons model mentah tidak ditulis ke dalam laporan; hanya SHA-256 digest dan ID fakta yang sepadan disimpan. Pengikat ini tidak membuat panggilan rangkaian atau model berbayar kecuali `--execute-real` diluluskan dan `--model`, `OMNIROUTE_BASE_URL`, dan `OMNIROUTE_API_KEY` dikonfigurasikan. Tanpa larian sebenar yang jelas itu, keputusan yang boleh dibaca mesin kekal `HOLD`; pengukuran muatan sintetik/ jumlah panggilan sahaja tidak merupakan bukti promosi.

`scripts/perf/video-bridge-promotion-eval.ts` yang berasingan mengambil pemerhatian FU-07 atau FU-09. Penerimaan promosi memerlukan semua lapan jenis senario sintetik ditambah klip sebenar yang disanitasi, sekurang-kurangnya tiga pengulangan yang diukur bagi setiap peranan dan kes, semua sepuluh metrik yang diisytiharkan, pencernaan media/prompt/fakta yang dijangka/pengaturan yang beku, ID pemerhatian unik dan urutan A/B yang disahkan. Resit pelaksanaan mengikat pencernaan korpus, SHA calon yang tepat dan semakan model. Pengukuran yang hilang atau tidak sah kekal `HOLD`, termasuk CPU melebihi 30 s, RSS puncak melebihi 512 MiB atau pra-analisis melebihi 30 s. Ini adalah had penerimaan bukti, bukan jaminan penguatkuasaan RSS waktu jalan yang baru.

FU-07 memerlukan sekurang-kurangnya 98% pengekalan kualiti dan latensi p95 tidak lebih daripada 1.2x
garis dasar, serta sama ada peningkatan purata ingatan seimbang kes mutlak 0.05 pada
panggilan kapsyen purata yang setara, atau sekurang-kurangnya 10% kurang panggilan kapsyen pasca-dedup purata. FU-09 memerlukan sekurang-kurangnya 0.85 kualiti, 95% pengekalan, pengurangan latensi p95 sebanyak 20% dan pengurangan token sebanyak 10%. Kehilangan fakta kritikal, pematuhan suntikan atau penggunaan yang hilang menghalang promosi. Satu pelaksanaan tidak boleh mempromosikan apa-apa:
`--previous-report` mengesahkan dua pelaksanaan yang berbeza, tidak bertindih, dan layak secara berturut-turut bagi polisi/model semakan/calon/korpus yang sama. Eksperimen pengambilan sampel tidak boleh mengesahkan eksperimen lembaran hubungan.

Pengumpul harus menilai respons dalam ingatan dan menyimpan `responseDigest` serta
metrik dan pengikatan pemerhatian, tidak pernah teks respons. Pengguna juga membaca
pemerhatian mentah warisan tetapi tidak pernah menyalin teks itu ke dalam laporannya. Tepat
satu daripada `responseDigest` atau `rawResponseText` diterima untuk setiap pemerhatian.
Senarai yang dibenarkan versi kekal kosong dengan `hold` yang tidak boleh diubah. Entri yang layak memerlukan rujukan bukti, polisi, semakan model, SHA calon yang tepat, pencernaan manifest dan dua ID larian yang berbeza; konteks yang bertentangan ditolak. Metadata ini adalah kontrak audit, bukan bukti bahawa fail yang dirujuk mengandungi pengukuran yang tulen. Semak resit sebenar sebelum menambah
apa-apa entri. Titik akhir statistik pengurusan dan papan pemuka Video mendedahkan
kesediaan yang konservatif. Alias model yang dikonfigurasikan sahaja tidak menetapkan semakan atau
SHA calon yang sedang berjalan, jadi papan pemuka semasa melaporkan `HOLD` dan bukannya
menggunakan kelayakan dari konteks pelaksanaan lain. Pemilihan eksperimen yang jelas kekal berasingan daripada promosi; tiada lalai yang diubah secara automatik.

Panggilan boleh melampirkan array `transcript.cues` pilihan kepada bahagian video yang disokong apabila mereka sudah mempunyai teks yang selaras. Setiap petunjuk mesti membawa `text`, selang `start`/`end` yang terhad dalam tempoh yang diuji, dan `source` yang dibenarkan (`client`, `embedded`, atau `audio-bridge`); `confidence` secara lalai adalah `1` dan mesti kekal antara `0` dan `1`. Petunjuk duplikat yang tepat digabungkan. OmniRoute tidak pernah memulakan transkripsi dari metadata ini: petunjuk yang disahkan disalin ke dalam hasil yang diterangkan dengan sumber, keyakinan, dan selang, dan dipaparkan sebagai pemerhatian yang tidak dipercayai bersama dengan kapsyen bingkai. Teks yang tidak sah, di luar julat, atau tanpa asal ditolak dan bukannya dicampurkan ke dalam aliran kapsyen. Kedua-dua saluran transkrip badan permintaan menormalkan asal yang diberikan kepada `client`, termasuk `embedded` atau `audio-bridge` yang diakui sendiri. Hanya penyesuai yang dimiliki pelayan boleh menetapkan label yang dipercayai itu melalui argumen `trustedSource` yang hanya kod; medan JSON permintaan tidak boleh mencapai argumen itu. Teks transkrip kekal sebagai kandungan yang diperoleh daripada media yang tidak dipercayai,
tanpa mengira asalnya, dan tidak boleh menentukan kebenaran.

Panggilan yang lebih maju boleh menyediakan trek `audioTranscript` untuk video yang sama;
ia dianggap sebagai teks yang disediakan oleh klien, bukan bukti transkripsi pelayan.
Sambungan penggabungan menjalankan pemerhatian visual dan audio di bawah
satu tarikh akhir dan isyarat abort, menyusunnya pada garis masa yang sama, menggabungkan
duplikat yang tepat, dan melaporkan hasil separa apabila hanya satu sisi berjaya.
`audioTranscript` yang tidak sah merosot kepada hasil separa itu — penerangan visual disimpan dan cabang audio merekodkan kod kegagalan yang disanitasi —
daripada gagal seluruh video. Ketersediaan per-cabang, bendera separa,
dan kod kegagalan yang disanitasi dipelihara dalam hasil yang diterangkan, dalam
metadata penghadang (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), dalam metadata cache hasil, dan dalam pengira penggabungan jambatan. Laluan Jambatan Video lalai tidak memanggil pertuturan-ke-teks
atau memuat turun salinan media kedua; tanpa trek eksplisit itu, ia kekal
hanya video.

**Pengekalan transkrip (#12150 P1).** Ini berlaku secara automatik apabila
Jambatan Video (yang sendiri opt-in) menghasilkan petunjuk transkrip — tiada bendera
pengekalan yang berasingan. Apabila permintaan menghasilkan mana-mana petunjuk transkrip (sebuah `transcript` yang diisytiharkan oleh pemanggil atau `audioTranscript` yang digabungkan), penghadang menandakan ia
`videoBridgeObserved` dan menghasilkan bayangan yang disunting bagi penerangan video —
satu rendering yang sama di mana setiap badan teks bebas petunjuk digantikan dengan
`[redacted-video-transcript]`, dibina dengan menggantikan medan petunjuk terstruktur
sebelum rentetan disusun (tidak pernah dengan menganalisis teks yang diratakan, jadi tiada kandungan petunjuk — sama ada antagonis atau biasa, termasuk badan yang mengandungi `]` seperti
`[inaudible]`/`[music]` — boleh bertahan). Badan permintaan log panggilan yang dipersisten menukar
setiap bahagian teks yang diperoleh daripada video kepada bayangan yang disunting itu, dipadankan dengan kesamaan kandungan; pengikat `fullText` dibaca semula dari payload penghadang pra-panggilan yang telah siap, jadi padanan masih berjaya selepas penghadang rantai kemudian (penghalang PII dan
pembekal kelayakan, keutamaan 10/95) menulis semula teks penerangan di tempat dan
selepas suntikan sistem-prompt/handover/memory membentuk semula array mesej. Badan yang dihantar ke atas ke model tidak berubah. Permintaan yang diperhatikan juga tidak mengisi
tiada Memori yang tahan lama (kedua-dua pengambilan yang diperoleh daripada permintaan dan respons dilangkau),
jadi jawapan model itu sendiri tidak boleh mengulangi teks transkrip ke dalam Memori.

**Medan video mentah (#12430).** Apabila jambatan diaktifkan dan sokongan video asli tidak diketahui atau tiada, medan `transcript`/`audioTranscript` yang ditakrifkan juga mengaktifkan `videoBridgeObserved`, walaupun selepas kegagalan penerangan atau had `maxVideos`. `null` dan rentetan kosong dikira; medan yang tiada dan metadata bukan video tidak. Salinan yang disimpan menyunting medan ini atau mengabaikan permintaan, dan cache/Memori dilangkau.

Pada laluan sandaran tersebut, isyarat pemanggil yang sah menjadi bahagian `text`/`input_text` yang disokong dan bukannya medan penyedia yang tidak standard. Kedua-dua trek yang disediakan oleh permintaan kekal sebagai pemerhatian `client` yang tidak dipercayai, dengan amaran jelas bahawa video tidak diterangkan dan cap waktu tidak disahkan terhadap media. Bajet sedia ada 256-isyarat/64-KiB jumlah dan per-isyarat terpakai merentasi kedua-dua trek bersama; cap waktu mesti mematuhi siling 600 saat broker dan mana-mana tetingkap fokus yang disediakan. Trek yang tidak sah dibuang, tidak diteruskan sebagai teks sewenang-wenangnya; saudara yang sah masih boleh digunakan kecuali bajet gabungan mereka melebihi. Medan Null/kosong tidak menambah teks. Tiada pengambilan media atau transkripsi ditambah oleh sandaran ini. Medan lanjutan transkrip dikeluarkan dari pembawa video sandaran dan objek `video_url`/`source`nya. Senarai putih wayar OpenAI kekal ketat; pembawa video asli yang tidak dikenali kekal tersedia dan sasaran teks sahaja yang dikenali mengekalkan penanda selamat. Bayangan redaksi terstruktur melindungi teks transkrip yang ditambah, sementara permintaan yang dimiliki oleh pemanggil asal tetap tidak berubah. Sasaran yang disokong secara asli dan jambatan yang dinyahdayakan mengekalkan tingkah laku bypass sedia ada mereka.

Salinan tambahan yang disimpan menggunakan isyarat permintaan yang sama. Snapshot permintaan klien mentah sebelum penghadang, permintaan yang sedang menunggu dalam ingatan, dan log permintaan yang ditolak awal secara struktural menggantikan medan transkrip dalam bahagian video; rangsangan rentetan yang disintesis oleh peringkat saluran dan pemindahan konteks dirahsiakan di sink badan permintaan yang dipersisten. Penanda `video_content_removed` yang dipersisten menjadikan kesinambungan `previous_response_id` gagal ditutup daripada membina semula teks yang sengaja dibuang. Jika permintaan yang diperhatikan kehilangan bayangan redaksi per-bahagian sebelum log, atau bahkan salah satu daripada beberapa bayangan video gagal untuk sepadan selepas mutasi permintaan kemudian, badan permintaan yang disimpan akan diabaikan sepenuhnya daripada mengekalkan transkrip yang dirahsiakan sebahagian.

Untuk permintaan yang diperhatikan, respons model mungkin memetik mana-mana bahagian transkrip tanpa sempadan isyarat yang terstruktur. Oleh itu, `responseBody` log panggilan yang dipersisten digantikan dengan penanda pengabaian; artifak saluran terperinci (yang boleh merangkumi badan hulu/klien dan kepingan aliran) tidak disimpan. Cache semantik, idempotensi, dan pengulangan penalaran mengelak bacaan dan penulisan untuk permintaan itu. Permintaan penyedia dan respons yang boleh dilihat oleh klien kekal tidak berubah. Byte keepalive awal disedut dari penampan sementara apabila artifak terperinci diabaikan. Amaran EventStream Kiro yang tidak sah hanya melaporkan jumlah byte payload, tidak pernah kandungannya atau ralat mentah pemapar JSON. Ini tidak mendakwa bahawa setiap diagnostik penyedia/plugin yang tidak berkaitan telah diaudit; sapuan sink yang lebih luas yang disimpan dijejaki dalam #11658.

Kitaran hidup `/api/modality-bridge/video/drilldown` dalaman adalah substrat cache yang berasingan, loopback/token-authenticated. Setiap operasi juga memerlukan ID prinsipal opak kanonik. Sebelum pemanggil pengeluaran diaktifkan, ia mesti memperoleh ID tersebut daripada penyewa yang disahkan dan tidak boleh pernah meneruskan nilai yang dipilih oleh klien. Kunci cache mengikat prinsipal itu kepada ID sesi kanonik dan rujukan video, menyimpan hanya kunci yang diperoleh daripada SHA-256 mereka, dan mengehadkan bacaan dan penghapusan kepada prinsipal yang sama. Cache menyimpan paling banyak 16 bingkai JPEG yang diperoleh bagi setiap entri, tamat selepas sepuluh minit, dan menyokong bacaan `start`/`end` terhad atau penghapusan sesi eksplisit.

Setiap prinsipal terhad kepada 16 entri dan 64 MiB data JPEG kanonik. Had tersebut adalah bebas daripada siling global 64-entri/256 MiB: tekanan kuota prinsipal hanya mengeluarkan entri yang paling jarang digunakan prinsipal itu sebelum pengusiran LRU global dipertimbangkan. Entri yang tamat dibersihkan daripada kedua-dua perakaunan prinsipal dan global pada aktiviti cache, sementara pembatalan dan kegagalan pengesahan tidak mengesahkan penggantian separa.

Cache menolak Base64 bukan kanonik, padding berlebihan, media bukan JPEG, JPEG yang tidak sah atau terputus, dan JPEG yang menghasilkan amaran semasa dekod penuh-imej `sharp` terhad. Ia menyandi semula setiap imej yang diterima sebagai JPEG kanonik, memperoleh lebar dan tinggi daripada bait yang didekodkan dan bukannya mempercayai medan pemanggil, dan membuang sebarang bait polyglot yang tertinggal daripada mengekalkannya. Hanya penampan terkompres kanonik terhad yang dicaj kepada kedua-dua kuota. Had wayar JSON termasuk overhead Base64 untuk siling input yang didekodkan 32 MiB. Setiap
derivasi yang disimpan merekod format/resolusi JPEG yang disahkan, dasar pengambilan sampel, versi derivasi, masa penciptaan, hash kandungan yang dikira oleh pelayan, dan hash rujukan induk yang dihash serta hash kandungan induk pemanggil yang dipercayai. Pembatalan diperiksa antara fasa dekod/hash asinkron sebelum komit cache atomik.

Pengeluar pengeluaran menggunakan semula bingkai broker yang telah diperoleh hanya selepas analisis visual yang berjaya, tanpa muat turun/ekstraksi video kedua. Ia memerlukan `modalityBridgeVideoDrilldownEnabled=true` pengendali, `drilldown: true` per-bahagian yang ketat, dan ID rekod kunci API yang disahkan. Nilai prinsipal/sesi yang diisytiharkan oleh klien tidak pernah menubuhkan pemilikan. Tanpa ketiga-tiga syarat itu, ia tidak menghash, mengubah saiz atau mengekalkan bingkai tambahan. Kegagalan pengekalan mengekalkan respons visual yang boleh digunakan. Permintaan yang dipersetujui mengelak cache hasil video keseluruhan supaya hasil yang disimpan tidak pernah memainkan semula pemegang.

JSON dan respons SSE yang berjaya mendedahkan paling banyak empat pemegang tidak telus dalam header `x-omniroute-video-drilldown` yang terhad. Asal pelayar yang diberi kuasa boleh membaca header itu tanpa memperluas dasar asal CORS. Pemegang baru menggunakan `v1.<32-byte random base64url token>`, dan pendaftaran hanya menyimpan hash SHA-256 mereka. Pembaca/pengurai header juga menerima token 64-hex warisan. Pengguna awam yang disahkan adalah `GET /api/v1/video-bridge/drilldown?handle=...`, yang dikawal secara bebas oleh `modalityBridgeVideoDrilldownRemoteEnabled=true`. Penolakan yang jelas dan berterusan membatalkan akses walaupun fallback warisan `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` diaktifkan. Penahanan pengeluaran mempunyai fallback warisan yang setara `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED`. Kedua-dua fallback secara lalai dimatikan.

Pengguna memperoleh pemilikan daripada kunci yang disahkan, menerapkan dasar kunci, dan mengembalikan 404 yang sama untuk pemegang yang tidak diketahui, tamat tempoh dan pemegang kunci lain. Ia menerima `variant=preview|standard|detail` (dimensi JPEG maksimum 320/640/1280, tidak pernah ditingkatkan), `limit=1..8` (atau alias warisan `frames`, tidak pernah kedua-duanya), `page` berasaskan sifar, dan pilihan `start`/`end` fokus dalam saat. Kunci pertanyaan duplikat dan tingkap fokus terbalik ditolak. Setiap varian yang dikembalikan mempunyai hash kandungan sebenar dan metadata resolusi sebenar, yang dipautkan kepada sumber yang disimpan. Varian dihasilkan semasa bacaan dan bukannya disimpan sebagai salinan tambahan yang disimpan. Respons JSON, termasuk Base64/envelope, dihadkan kepada 32 MiB; halaman yang terlalu besar mengembalikan 413 dan klien mesti meminta bingkai yang lebih sedikit. Bacaan memeriksa pembatalan di sekitar setiap saiz semula dan memeriksa semula kesahihan pemegang sebelum mengembalikan. `DELETE` oleh pemilik adalah idempotent; penghapusan atau tamat tempoh TTL melepaskan sumber yang disimpan dan pengiraan penggunaan.

Kedai bersama adalah tempatan proses: pemegang tamat pada permulaan semula dan tidak boleh dipindahkan antara proses OmniRoute yang bebas. Statistik pengurusan mendedahkan dasar penahanan/remote yang berkesan dan agregat entri/byte yang disimpan sahaja, tidak pernah media, rujukan, ID prinsipal atau pemegang. Panel tetapan Video menunjukkan nilai-nilai tersebut dan boleh menyimpan kedua-dua suis persetujuan. Dokumentasi pelaksanaan ini bukan bukti penyebaran langsung atau promosi; penerimaan model sebenar diteliti secara berasingan.

Bingkai diberi kapsyen secara berurutan dengan model Video yang dikonfigurasikan. Override Video yang kosong mewarisi tetapan Vision; jika kedua-duanya kosong, penghala auto-vision memilih model yang mampu penglihatan yang berkesan. Kapsyen yang berjaya menggantikan bahagian asal dengan awalan `[Video description:` yang stabil yang juga menandakan teks sebagai pemerhatian yang diperoleh daripada media yang tidak dipercayai dan memberitahu model hulu untuk tidak mengikuti arahan yang terdapat dalam media. Kunci cache kapsyen bingkai termasuk byte JPEG, prompt, cap waktu, dan model yang berkesan; hanya kapsyen yang berjaya yang disimpan dalam cache. Entri cache menyimpan model pengeluar yang berjaya yang sebenar, termasuk model fallback; jambatan melaporkan `mixed` apabila bingkai yang berbeza dihasilkan oleh model yang berbeza. Hit cache menggunakan identiti pengeluar itu dan bukannya menamakan semula sebagai pelan penghalaan yang diminta. Cache hasil video keseluruhan dikunci pada setiap input yang mengubah output — prompt, model berkesan, dasar pengambilan sampel, bilangan bingkai, mod analisis semantik, cap jari SHA-256 petunjuk fokus yang dinormalisasi, tingkap fokus, `transcript`, `audioTranscript`, dan bendera contact-sheet — jadi mengubah mana-mana dimensi tersebut adalah hit cache, tidak pernah penggunaan semula yang lapuk. Versi dasar deduplikasi visual, ambang, dan bilangan bingkai calon yang terhad juga jelas dalam kunci cache hasil dan metadata; perubahan dasar oleh itu tidak dapat menggunakan deskripsi video keseluruhan yang lapuk. Metadata cache hasil v4 menyimpan mod dan cap jari, tidak pernah tugas pengguna mentah. Metadata penghadang melaporkan kedua-dua mod analisis yang diminta dan berkesan; mod `focused` yang diminta tanpa teks pengguna yang boleh digunakan dilaporkan sebagai berkesan `full`.

Penghadang mengekstrak setiap bahagian video yang disokong tetapi tidak menerangkan lebih daripada `modalityBridgeVideoMaxVideos`. Untuk sasaran yang terbukti mempunyai `supportsVideo === false`, video yang gagal dan melebihi had menjadi penanda teks selamat yang jelas supaya tiada video mentah yang tersisa. Apabila keupayaan tidak diketahui, bahagian tersebut mengekalkan pembawa video mereka; mana-mana transkrip fallback mengikuti penukaran teks terhad di atas. Sasaran dengan `supportsVideo === true` mengelakkan jambatan. Isyarat pengabaian permintaan klien menyebar melalui muat turun, barisan broker, subprocess, dan panggilan kapsyen; pengabaian berhenti antara video dan tidak pernah gagal terbuka kepada media mentah.

Tetapan runtime disokong oleh DB dan disahkan oleh Zod:

| Kunci                               | Lalai       | Julat / tingkah laku                                                                                          |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Runtime pilihan, opt-in                                                                                       |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` mengekalkan kapsyen generik; `focused` menggunakan konteks pengguna terkini yang tidak dipercayai      |
| `modalityBridgeVideoModel`          | `""`        | Mewarisi model Jambatan Vision                                                                                |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                          |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, atau `segment_aware` yang proporsional; kegagalan pengesan kembali kepada `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                           |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                |

Legacy nilai timeout Video yang disimpan melebihi 120 saat akan dibatasi kepada
tarikh akhir broker; penulisan tetapan baru yang melebihi had tersebut akan ditolak.
`GET /api/modality-bridge/video/runtime` memerlukan kepercayaan yang ditandakan untuk
lokaliti loopback sebelum pengesahan atau pengujian runtime, kemudian memerlukan
pengesahan pengurusan. Ia hanya mengembalikan versi FFmpeg/ffprobe yang `available`
dan disanitasi, serta alasan tetap apabila runtime tidak tersedia. Titik akhir
pengekstrakan dalaman bukanlah API muat naik awam: ketepuan antrian mengembalikan
`503` ditambah `Retry-After`, pemutusan pemanggil mengembalikan `499`, dan tarikh
akhir broker tetap mengembalikan `504`. Respons yang ditukar menambah
`video->text;model=<visionModel>;parts=<videos>` kepada header pusat
`x-omniroute-modality-bridge` tanpa mengeluarkan segmen Vision atau Audio.

### PII Masker (`piiMasker.ts`)

Berjalan pada **kedua-dua** peringkat.

- **`preCall`** mengklon muatan, melangkaui `system`, `messages`, `input`, dan
  `prompt` (termasuk item rentetan biasa), dan menerapkan `processPII()` (dari
  `@/shared/utils/inputSanitizer`) kepada medan rentetan `content`/`text`. Apabila
  `PII_REDACTION_ENABLED=true`, PII yang dikesan akan disunting dalam muatan keluar.
  Ini adalah bebas daripada `INPUT_SANITIZER_MODE` (yang hanya mengawal
  polisi suntikan prompt). Apabila penyuntingan dimatikan, panggilan merekodkan
  jumlah pengesanan tanpa menulis semula kandungan.
- **`postCall`** mengklon dalam dengan mendalam respons, menjalankan `sanitizePIIResponse()` ditambah
  penyunting bentuk API Respons (`maskResponsesOutput` — merangkumi
  `output_text` dan `output[].content[].text`). Jika sebarang penyuntingan berlaku, respons
  yang diubah menggantikan yang asal.

Penghadang tidak pernah menyekat; ia hanya menandakan (`meta.detections`,
`meta.redacted`) atau menulis semula.

### Prompt Injection (`promptInjection.ts`)

Mengesan struktur adversarial dalam kandungan yang disediakan oleh pengguna dan menguatkuasakan
polisi yang ditetapkan. Tingkah laku dipacu oleh pembolehubah persekitaran dan pilihan
konstruktor:

| Tetapan     | Pembolehubah env                                                                                       | Lalai  | Kesan                                                                                                                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Diaktifkan  | `INPUT_SANITIZER_ENABLED`                                                                              | `true` | Apabila `false`, penghadang akan memintas.                                                                                                                                                        |
| Mod         | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn` | Polisi suntikan: `block`, `warn`, atau `log`. (`redact` diterima untuk keserasian tetapi **tidak** mengeluarkan teks suntikan; permintaan penyuntingan PII dikawal oleh `PII_REDACTION_ENABLED`.) |
| Ambang blok | Pilihan `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Keparahan minimum yang diperlukan untuk menyekat. Medium hanya untuk pemerhatian secara lalai.                                                                                                    |

**Keutamaan mod** (`getMode`): pemanggil `options.mode` →
`INJECTION_GUARD_MODE` **pengesahan bendera ciri DB** (Dashboard → Tetapan →
Bendera Ciri) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Oleh itu, penggantian papan pemuka mengatasi pembolehubah env, jadi UI Bendera
Ciri mengawal penghadang yang berjalan secara langsung (tanpa perlu mulakan semula). Bacaan DB adalah selamat:
jika terdapat ralat, penghadang akan kembali kepada tingkah laku berasaskan env, dan apabila tiada
penggantian ditetapkan, tingkah laku adalah sama dengan penyelesaian berasaskan env sahaja.

Sumber pengesanan:

1. `sanitizeRequest()` dari `@/shared/utils/inputSanitizer` (set pengesan
   yang digunakan di tempat lain dalam saluran).
2. `DEFAULT_GUARD_PATTERNS` terbina dalam (sekarang `system_override_inline` dan
   `markdown_system_block`, kedua-duanya dengan keparahan `high`).
3. `customPatterns` pilihan yang dihantar melalui pilihan konstruktor (rentetan, regex,
   atau `{ name, pattern, severity }` rekod).

Apabila `mode === "block"` **dan** sekurang-kurangnya satu pengesanan memenuhi ambang
keparahan, `preCall` mengembalikan `{ block: true, message: "Permintaan ditolak:
kandungan mencurigakan dikesan" }`. Dalam mod `warn`/`log`, penghadang mencatat tetapi
membenarkan panggilan. Pembantu bersama `evaluatePromptInjection()` juga dieksport
untuk pemanggil yang perlu menilai prompt tanpa melalui pendaftaran.

**Had imbasan (v3.8.20):** pengesan hanya memeriksa **16 KB pertama** teks prompt yang digabungkan — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bait) dalam
`src/shared/utils/inputSanitizer.ts`. Kedua-dua `detectInjection()` dan
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` sebelum menjalankan
gelung corak. Arahan suntikan terletak berhampiran bahagian atas input, jadi ini
menghadkan CPU/GC regex pada muatan beratus-ratus KB tanpa melemahkan pengesanan (cf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Berjalan pada **kedua-dua** peringkat, terakhir dalam rantai lalai (keutamaan `95`). Menyunting
corak kunci API / token rahsia yang terkenal dari muatan keluar (kandungan
mesej, argumen panggilan alat, hasil alat) **dan** respons penyedia, jadi
kredential yang disalin ke dalam prompt (atau diulang kembali oleh hasil alat) tidak bocor
kepada penyedia hulu atau kembali kepada klien.

- **Hanya opt-in**, konvensyen yang sama seperti penghapusan PII (Peraturan Ketat #20-bersebelahan):
  dinonaktifkan kecuali `settings.credentialRedactionEnabled === true` **atau**
  `CREDENTIAL_REDACTION_ENABLED=true`. Apabila ia dimatikan, penghadang adalah tidak berfungsi —
  ia tidak pernah menyekat dan tidak pernah menulis semula.
- `redactCredentials()` berjalan melalui keseluruhan payload/response tree (`walkValue()`,
  selamat daripada pencemaran prototaip, selamat daripada kitaran melalui `WeakSet`) dan menggantikan padanan dengan
  tempat pemegang `[REDACTED:<type>]`, hanya mengklon cabang yang benar-benar
  berubah.
- `CREDENTIAL_PATTERNS` merangkumi kunci penyedia LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), token VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), kunci pembayaran (Stripe, Square), kunci
  awan (kunci akses AWS, Twilio, SendGrid, Mailgun), kunci peribadi / JWT,
  rentetan sambungan yang membawa kredensial (`mongodb://user:pass@...`, dll.), dan
  corak nilai header generik `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Kunci berbentuk header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) dihapuskan secara struktur (hanya nilai, awalan skema seperti
  `Bearer `/`Basic ` dipelihara) berbanding melalui regex teks generik.
- Penghadang tidak pernah menyekat; ia hanya menulis semula (`modifiedPayload` /
  `modifiedResponse`) dan memberi anotasi (`meta.credentialsRedacted`, `meta.count`).

Pengawal regresi: `tests/unit/credential-masker-guardrail.test.ts`.

## Kontrak Asas (`base.ts`)

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
  block?: boolean; // true menghentikan rantai
  message?: string; // ditunjukkan apabila menghalang
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // dikembalikan oleh preCall untuk menulis semula permintaan
  modifiedResponse?: TValue; // dikembalikan oleh postCall untuk menulis semula respons
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

Sebuah guardrail menandakan "tiada perubahan" dengan mengembalikan sama ada `void`, `{}`, atau
`{ block: false }`. Mengembalikan `modifiedPayload`/`modifiedResponse` menggantikan
nilai yang mengalir melalui rantai untuk guardrail hiliran.
`signal?: AbortSignal` membawa kitaran hidup pemanggil ke dalam guardrail. Pembatalan permintaan adalah pengecualian gagal-buka yang disengajakan: jambatan media berhenti berfungsi dan membersihkan tanpa mengembalikan media mentah kepada sasaran yang diketahui tidak menyokongnya.

## Pendaftar (`registry.ts`)

`guardrailRegistry` singleton mendedahkan:

- `register(guardrail)` — menambah (atau menggantikan mengikut nama yang dinormalisasi) guardrail dan
  menyusun semula mengikut `priority` menaik.
- `clear()` / `list()` — pembantu pentadbiran.
- `runPreCallHooks(payload, context)` — mengulangi guardrail aktif, mengalirkan
  payload melalui `modifiedPayload`, dan berhenti pada `block: true` yang pertama.
- `runPostCallHooks(response, context)` — aliran yang sama di bahagian respons.
- `resetGuardrailsForTests({ registerDefaults })` — mengosongkan keadaan dan secara pilihan
  mendaftar semula lalai untuk pengasingan ujian yang bersih.

Kedua-dua pelari mengembalikan `{ blocked, payload|response, results, guardrail?, message? }`
di mana `results` adalah tatasusunan rekod `GuardrailExecutionResult` yang merangkumi
medan `blocked`, `skipped`, `modified`, `error`, dan `meta` bagi setiap guardrail,
berguna untuk pengesanan.

### Melumpuhkan Guardrail Setiap Permintaan

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` mengagregatkan
senarai nama guardrail yang tidak diduplikasi yang harus dilangkau untuk permintaan semasa. Sumber (semua pilihan, semua digabungkan):

- `apiKeyInfo.disabledGuardrails`
- Badan permintaan `disabledGuardrails` (peringkat atas)
- Badan permintaan `metadata.disabledGuardrails`
- Header `x-omniroute-disabled-guardrails` (atau warisan
  `x-disabled-guardrails`)

Nilai boleh berupa tatasusunan rentetan atau rentetan yang dipisahkan koma; nama
dinormalisasi kepada kebab-case huruf kecil (`pii_masker` → `pii-masker`). Hasilnya
dihantar melalui `context.disabledGuardrails` ke pendaftar, yang melangkau
guardrail yang sepadan (`skipped: true` dalam `results`).

## Urutan Pelaksanaan

Untuk setiap permintaan yang mengalir melalui `src/sse/handlers/chat.ts` dan
`open-sse/handlers/chatCore.ts`:

1.  `resolveDisabledGuardrails(...)` membina senarai langkau daripada kunci API, badan,
    dan pengepala.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` menjalankan guardrail mengikut
    susunan keutamaan menaik:
    - Guardrail yang dilumpuhkan direkodkan sebagai `skipped`.
    - `preCall` setiap guardrail mungkin menulis semula muatan melalui `modifiedPayload`.
    - `block: true` yang pertama akan memendekkan rantaian dan pengendali mengembalikan
      respons penolakan guardrail.
3.  Muatan (yang berpotensi ditulis semula) mengalir ke dalam penghalaan kombo dan
    penghantaran huluan.
4.  Selepas respons dipasang, `guardrailRegistry.runPostCallHooks(...)`
    menjalankan rantaian yang sama pada respons. `block: true` di sini menggugurkan
    respons huluan.

Guardrail yang membuang ralat direkodkan dengan `error: <message>` dan dicatat melalui
`logger.warn`, tetapi rantaian berterusan — reka bentuk fail-open.

## Konfigurasi

Pembolehubah persekitaran yang dibaca oleh guardrail terbina dalam:

| Pembolehubah                          | Digunakan oleh        | Kesan                                                                                                      |
| :------------------------------------ | :-------------------- | :--------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`    | Tetapkan `false` untuk melumpuhkan pengesanan sepenuhnya.                                                  |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`    | Polisi suntikan: `warn`, `block`, atau `log`. Nilai warisan `redact` tidak menulis semula teks suntikan.   |
| `INJECTION_GUARD_MODE`                | `prompt-injection`    | Mod untuk pengawal suntikan; juga bendera ciri DB yang **mengatasi** pembolehubah persekitaran (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`    | Keterukan minimum yang `MODE=block` tolak: `high` (lalai), `medium`, atau `low`.                           |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`    | Alias warisan untuk `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                     |
| `PII_REDACTION_ENABLED`               | `pii-masker`          | Apabila `true`, PII permintaan disunting (tidak bergantung pada mod suntikan).                             |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (huluan) | Mengawal tingkah laku masker di sisi respons.                                                              |

Guardrail Modality Bridge membaca konfigurasi masa jalan daripada stor tetapan yang disokong DB
(`getSettings()`), bukan pembolehubah persekitaran. Kunci utama Vision ialah
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, dan
`modalityBridgeCacheMaxEntries`. Kunci `visionBridge*` warisan diterima hanya sebagai
penyelesaian sandaran bacaan satu kitaran yang didokumenkan; penulisan papan pemuka menggunakan
kunci utama. Nilai lalai dan penyelesaian sandaran terdapat dalam
`src/shared/constants/modalityBridgeDefaults.ts`, dengan pemalar warisan dikekalkan dalam
`src/shared/constants/visionBridgeDefaults.ts`.

Audio menggunakan `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, dan `modalityBridgeAudioMaxClips`, serta tetapan
`modalityBridgeCache*` yang dikongsi. Audio tidak mempunyai sandaran kunci warisan kerana
kunci-kunci ini diperkenalkan dengan skema Modality Bridge.

Video menggunakan `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, dan
`modalityBridgeVideoTimeout`, serta tetapan `modalityBridgeCache*` yang dikongsi.
Ia dilumpuhkan secara lalai kerana FFmpeg/ffprobe adalah kebergantungan operasi pilihan
dan kapsyen bingkai menambah kependaman serta kos model.

## Pengawal Tersuai

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

Langkah-langkah:

1.  Cipta `src/lib/guardrails/myGuardrail.ts` yang melanjutkan `BaseGuardrail`.
2.  Laksanakan `preCall` dan/atau `postCall`.
3.  Sama ada daftar pada masa import (tolak dari `registerDefaultGuardrails`) atau
    panggil `guardrailRegistry.register(...)` pada masa jalan — pendaftar menggantikan
    mana-mana pengawal terdahulu dengan nama yang dinormalisasi yang sama.
4.  Tambah ujian di bawah `tests/unit/` (contoh sedia ada:
    `tests/unit/guardrails-registry.test.ts`,
    `tests/unit/prompt-injection-guard.test.ts`,
    `tests/unit/guardrails/visionBridge.test.ts`).

## Pengujian

Gunakan `resetGuardrailsForTests()` antara ujian untuk bermula dari keadaan yang diketahui.
Luluskan `{ registerDefaults: false }` untuk bermula dengan pendaftar kosong dan
daftar hanya pengawal yang sedang diuji. Vision Bridge menerima suntikan kebergantungan
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge mendedahkan sambungan yang setara untuk tetapan, keupayaan, pemilihan model STT, semakan kelayakan, dan transkripsi. Ujian oleh itu boleh melaksanakan kedua-dua aliran tanpa akses DB atau rangkaian.

## Lihat Juga

- `src/lib/guardrails/` — pelaksanaan
- `src/shared/utils/inputSanitizer.ts` — pengesan kongsi yang menggerakkan
  suntikan prompt dan penyamaran PII
- `src/shared/constants/visionBridgeDefaults.ts` — lalai Vision Bridge dan
  senarai model jambatan paksa
- `src/shared/constants/modalityBridgeDefaults.ts` — lalai masa jalan Vision/Audio kongsi
- `docs/architecture/RESILIENCE_GUIDE.md` — lapisan ortogonal (pemutus litar, penyejukan)
- `docs/reference/ENVIRONMENT.md` — rujukan pemboleh ubah persekitaran penuh

## Liputan laluan pengawal suntikan & pasukan merah (Fasa 8 · Blok D)

Pengawal suntikan (`createInjectionGuard` / `withInjectionGuard`) meliputi semua laluan
yang menerima prompt pengguna. Ia menghormati `INJECTION_GUARD_MODE` (lalai `warn` = log sahaja;
`block` = mengembalikan HTTP 400 `SECURITY_001`).

| Jenis            | Laluan                                                                                                                                               | Mod lalai |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| Teks (sedia ada) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn      |
| Generatif        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn      |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn      |

Pengekstrakan teks (`extractMessageContents`) meliputi `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Pasukan merah (malam, `nightly-llm-security.yml`):** promptfoo mengesahkan bahawa setiap laluan menyekat
korpus OWASP-LLM dalam `INJECTION_GUARD_MODE=block`; garak menjalankan probe (melangkau tanpa rahsia).
`moderations` disertakan untuk konsistensi — pengendali dalam mod sekat boleh mengecualikannya melalui
`resolveDisabledGuardrails`.

Aliran kerja malam (`.github/workflows/nightly-llm-security.yml`, cron + penghantaran manual) mempunyai dua tugas:

- **`promptfoo-guard` (menyekat)** — menjalankan `promptfoo eval -c promptfooconfig.yaml`
  dengan `INJECTION_GUARD_MODE=block`. Setiap kes adversari (cth. "abaikan semua
  arahan sebelumnya...", jailbreak gaya DAN) menegaskan bahawa respons membawa
  `error.code === "SECURITY_001"`, iaitu pengawal sebenarnya menolak permintaan tersebut.
- **`garak` (nasihat)** — menjalankan garak `--probes promptinject,dan,leakreplay`
  terhadap instans OmniRoute tempatan (`http://localhost:20128/v1`). Terkawal oleh
  rahsia pembekal (`PROMPTFOO_PROVIDER_KEY`); melangkau dengan lancar dan diakhiri
  `|| true`, jadi ia melaporkan tanpa menyebabkan CI gagal.

Liputan pembantu pengawal (`createInjectionGuard` / `withInjectionGuard`)
merangkumi setiap laluan `/v1` yang membawa prompt; teks prompt ditarik dari
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` oleh
`extractMessageContents()` dalam `src/shared/utils/inputSanitizer.ts`.
