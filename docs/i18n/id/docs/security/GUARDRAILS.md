# Guardrails (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sumber kebenaran:** `src/lib/guardrails/`
> **Terakhir diperbarui:** 2026-08-29 — v3.8.51 (provenans transkrip Video Bridge dideklarasikan oleh pemanggil,
> belum diverifikasi oleh server — diperjelas sesuai #11661)

Guardrail memberlakukan keamanan, kebijakan, dan transformasi konten pada batas
antara OmniRoute dan penyedia upstream. Setiap guardrail dapat memeriksa (dan
secara opsional menolak, mentransformasi, atau menganotasi) payload permintaan (`preCall`) dan
respons upstream (`postCall`).

Sistem ini bersifat **fail-open**: jika guardrail melemparkan error saat dijalankan, registry
mencatat error tersebut dan melanjutkan ke guardrail berikutnya alih-alih menggagalkan
permintaan. Pemblokiran merupakan keputusan eksplisit (`block: true`), bukan terjadi secara tidak sengaja.

## Pengaman Bawaan

Registri secara otomatis memuat enam pengaman dalam urutan prioritas saat diimpor
(lihat `registry.ts` → `registerDefaultGuardrails()`):

| Prioritas | Nama                | Tahap(s)       | Berkas                |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nomor prioritas yang lebih rendah dijalankan **lebih dulu**.

### Jembatan Visi (`visionBridge.ts`) — Jembatan Modality PR-1

Menyadap permintaan yang mengandung gambar yang ditujukan untuk **model non-vision** dan baik
mengalihkan seluruh permintaan ke model yang mendukung visi atau mengganti bagian gambar
dengan deskripsi teks yang dihasilkan oleh model visi yang dapat dikonfigurasi sebelum
panggilan upstream. Ini memungkinkan penyedia teks saja menangani
muatan multimodal secara transparan.

Alur:

1. Lewati jika model target sudah mendukung visi (kecuali jika muncul dalam
   daftar jembatan paksa `isVisionBridgeForcedModel`).
2. Ekstrak bagian gambar melalui `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), yang mendelegasikan ke **detektor media
   terpadu** `detectMediaParts()` di `open-sse/utils/mediaParts.ts` — sumber kebenaran tunggal
   yang dibagikan dengan filter kompatibilitas kombinasi.
   Ekstraksi diizinkan hanya untuk bagian tingkat atas dari bentuk
   yang dapat disambungkan kembali oleh `replaceImageParts` (kontrak extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, dan Responses API `input_image`. Hasil yang bersarang dan
   bentuk yang hanya indikator adalah bahan filter kombinasi dan tidak pernah diekstrak.
   Lewati jika tidak ada yang ditemukan.
3. Selesaikan konfigurasi runtime melalui `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): kunci pengaturan baru `modalityBridge*`
   menang; kunci legacy `visionBridge*` tetap sebagai **fallback satu siklus**
   (jendela rollback). Lewati sebelum setiap travers media ketika jembatan dinonaktifkan.
4. Pemilih mode (`modalityBridgeVisionMode`, lihat tabel di bawah) memutuskan
   untuk mengalihkan atau mendeskripsikan. Pengalihan mengembalikan `modifiedPayload` dengan hanya `model`
   yang ditukar, ditambah meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Jalur deskripsi: batasi gambar pada `maxImages`, susun prompt yang sadar tugas,
   konsultasikan cache deskripsi, panggil model visi **secara paralel**
   (`Promise.allSettled`), dan injeksikan bagian teks `[Image N]: <description>` di
   tempatnya. Deskripsi yang gagal menghasilkan `null` dan bagian gambar asli
   **dipertahankan** (#4012) — kecuali pada jalur deskripsi kombinasi ketika setiap
   deskripsi gagal, di mana upstream non-vision yang terkonfirmasi mendapatkan
   stub `(unavailable — no vision-capable provider connected)` sebagai gantinya (#8430).
6. Kembalikan `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Pemilih mode (`modalityBridgeVisionMode`)

| Mode       | Default | Perilaku                                                                                                                                                                                                                                                                               |
| ---------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Heuristik legacy, tidak tersentuh (#6640/#7204): model non-kombinasi/`auto/` mengalihkan ke model visi terbaik kecuali model asli sudah memiliki kredensial yang dapat digunakan (kemudian mendeskripsikan); target kombinasi selalu mendeskripsikan.                                  |
| `describe` |         | Selalu mendeskripsikan — blok pengalihan dilewati sepenuhnya; model yang dipilih pengguna selalu menjawab.                                                                                                                                                                             |
| `reroute`  |         | Paksa pengalihan: pengaman model yang memiliki kredensial dilewati. Pengaman kredensial **target** pengalihan tetap berlaku — ketika tidak ada target visi yang dapat digunakan, permintaan jatuh ke deskripsi sehingga gambar mentah tidak pernah mencapai backend teks saja (#8430). |

Mode yang dipaksa memotong **sebelum** heuristik otomatis dijalankan; perilaku `auto`
identik byte dengan pengaman pra-PR-1.

#### Ruang lingkup kunci API (`visionBridgeKeyScope.ts`)

Ketika kunci API pemanggil membatasi `allowedConnections`, kolam kuota
(`allowedQuotas`) atau model (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), jembatan hanya
memilih model pengalihan dan deskripsi yang dapat digunakan oleh kunci, pada koneksi yang dapat
digunakan oleh kunci. Panggilan deskripsi kemudian selalu melalui loop diri OmniRoute dengan
header `x-omniroute-self-loop-key-id`, sehingga permintaan chat yang diterima
menegakkan kebijakan koneksi dan model kunci tersebut lagi. `enforceApiKeyPolicy()`
menghormati header itu hanya bersama dengan pembawa loop diri, sehingga hanya dapat
menyempitkan akses, dan id yang tidak terpecahkan ditolak.

Jika tidak ada model visi yang diizinkan untuk kunci, jalur deskripsi mengalah dan
permintaan diteruskan tanpa perubahan, perilaku gagal-terbuka yang sama seperti pengaman yang dinonaktifkan
(meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Permintaan tanpa kunci, dan kunci tanpa pembatasan ini, berperilaku persis seperti
sebelumnya.

#### Prompt deskripsi sadar tugas (`modalityBridgeVisionTaskAware`)

Default **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) menambahkan
teks dari **pesan pengguna terakhir** (dipotong hingga 500 karakter) ke dasar
prompt deskripsi, mengarahkan deskripsi menuju apa yang sebenarnya diminta
pengguna (pola codex-vision-proxy) dan meminta model visi untuk mentranskripsi
teks yang terlihat. Dengan flag mati — atau tanpa teks pengguna — prompt dasar
digunakan tanpa perubahan.

Permintaan OpenAI-kompatibel dari self-loop deskripsi (`callVisionModelSingle()`
di `visionBridgeHelpers.ts`) selalu meminta `image_url.detail: "high"` —
tanpa syarat, untuk setiap pemanggil/penyedia, tidak terpengaruh oleh sinyal
klien mana pun. Sampling detail rendah mengurangi akurasi OCR untuk tugas
transkripsi teks yang tepat diminta oleh prompt ini, jadi panggilan deskripsi
itu sendiri selalu meminta detail tinggi terlepas dari tingkat detail yang
digunakan dalam permintaan masuk asli. Ini hanya mempengaruhi tubuh permintaan
deskripsi internal; itu tidak mengubah bagaimana OmniRoute meneruskan
`image_url.detail` pemanggil pada permintaan utama — default itu diterapkan
secara terpisah, dan hanya untuk klien OpenCode yang terdeteksi, di
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Cabang
format wire Anthropic dari self-loop deskripsi tidak memiliki field `detail`
dan tidak terpengaruh oleh default mana pun.

#### Batas output deskripsi (`modalityBridgeVisionMaxChars`)

| Kunci                          | Default | Rentang            |
| ------------------------------ | ------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`     | `0` atau 100–50000 |

`0` (default) berarti **tanpa batas** — deskripsi yang dikembalikan oleh
`callVisionModel()` diteruskan tanpa modifikasi, mempertahankan perilaku
yang ada. Nilai apa pun dalam rentang 100–50000 memotong deskripsi dengan
akhiran `…` sebelum disambungkan kembali sebagai `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` di `src/lib/guardrails/visionBridge.ts`).
Tingkatkan ini untuk tugas OCR yang berat detail di mana model hilir
membutuhkan transkripsi penuh; turunkan untuk membatasi penggunaan token pada
model visi yang banyak bicara. Field dasbor terletak di panel Lanjutan tab
Vision (`modality-bridge-max-chars` di `ModalityBridgeVisionTab.tsx`) dan
membatasi nilai apa pun antara 1 dan 99 hingga batas 100 sambil membiarkan
`0` eksplisit tidak tersentuh — `0` adalah nilai Zod yang valid dengan sendirinya
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), bukan
sekadar default "belum diatur".

#### Cache deskripsi (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL di memori untuk output deskripsi, dibagikan secara luas
proses. Kunci = `sha256(imageRef + composedPrompt + configuredBridgeModel)` dengan
pembingkaian panjang-prefiks (tanpa tabrakan batas field). Komponen model adalah
model bridge yang **dikonfigurasi**, bukan model yang sebenarnya menjawab —
`callVisionModel` mungkin jatuh kembali secara internal, dan kunci per percobaan
akan memfragmentasi cache. Deskripsi yang gagal tidak pernah dicache. Pengaturan:

| Kunci                           | Default | Rentang |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Normalisasi gambar jarak jauh (self-loop deskripsi/fetch base64)

Ketika bridge mengambil gambar **jarak jauh** itu sendiri — panggilan self-deskripsi
Anthropic dan konversi base64 format wire claude
(`ensureBase64ImagesForClaudeWire`), keduanya melalui
`fetchRemoteImageAsDataUri()` di `visionBridgeHelpers.ts` — URI data yang dihasilkan
dilewatkan melalui `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) sebelum disematkan dalam permintaan model visi.
Gambar yang terlalu besar diperkecil hingga **tepi panjang 2048px** (cocok
dengan batas pengubahan ukuran yang sudah diterapkan OpenAI/Anthropic di sisi server),
yang mengurangi byte/latensi unggahan tanpa mengubah apa yang dilihat model visi.
Pengubahan ukuran menggunakan `sharp`, dimuat melalui impor dinamis: di platform
di mana biner aslinya gagal dimuat, `normalizeDataUri()` **tidak pernah melempar** —
itu jatuh kembali ke pengalihan byte asli, sehingga jalur deskripsi/koversi base64
selalu tetap berfungsi. Byte non-gambar (fetch yang tidak mengembalikan gambar
yang dapat didekode) juga diteruskan tanpa perubahan. Normalisasi ini
dikhususkan untuk gambar yang diambil oleh bridge untuk panggilan self-nya —
itu tidak pernah diterapkan pada payload mentah pemanggil, konsisten dengan
prinsip mutasi hanya opt-in (Aturan Keras #20).

#### Skema pengaturan + migrasi

Kunci `modalityBridge*` yang baru divalidasi dengan Zod di `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*`, dan grup
`modalityBridgeAudio*` yang digunakan oleh Audio Bridge. Migrasi
`141_modality_bridge_settings.sql` menyalin nilai legacy yang ada
`visionBridge*` ke kunci baru yang cocok (idempotent, tidak pernah menimpa
nilai `modalityBridge*` yang diatur operator); kunci legacy tetap diterima
sebagai fallback baca untuk satu siklus rilis.

#### Header transparansi + statistik

Respon yang telah diubah oleh deskripsi membawa
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(dibangun oleh `buildModalityBridgeHeader()` di `modalityBridge/bridgeStats.ts`,
dicap oleh `withModalityBridgeHeader()` di `src/sse/handlers/chatHelpers.ts`).
Permintaan yang diarahkan ulang tidak mendapatkan **header** — payload tidak
terpengaruh dan pertukaran model sudah terlihat di field `model` tubuh respon.

`GET /api/modality-bridge/stats` (otentikasi manajemen, tingkat yang sama dengan
`GET /api/settings`) mengembalikan penghitung per-modality dalam memori
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` untuk `vision`, `audio`, dan
`video`. `averageLatencyMs` menggunakan `latencySamples`, bukan semua upaya, sebagai
penyebutnya; operasi tanpa pengukuran waktu tidak membuat sampel nol milidetik.
`bridged` tetap menjadi alias yang kompatibel dengan versi sebelumnya untuk konversi
yang berhasil; upaya yang gagal tidak menambahkannya.
Penghitung direset saat proses dimulai ulang berdasarkan desain
(telemetri, bukan akuntansi).

#### Konfigurasi dasbor

Halaman dasbor yang didedikasikan adalah
`/dashboard/settings/modality-bridge`. Tab `Vision`, `Audio`,
dan `Video` yang dapat diakses melalui URL mempertahankan parameter kueri saat
mengganti nilai `tab`. Tab Vision menampilkan pengaktifan, mode, pemilihan model
(mencakup default otomatis), permintaan yang sadar tugas, batas waktu/gambar/deskripsi-panjang/cache
yang lebih canggih, penghitung waktu
runtime, dan permintaan sampel yang dilindungi. Tab Audio juga aktif: ia menampilkan
pengaktifan, pemilih model hanya STT dengan Auto, batas waktu/batas klip maksimum, penghitung audio,
dan tes sampel `input_audio`. Tab Video berfungsi: ia melaporkan
status runtime FFmpeg/ffprobe — salah satu dari empat status UI eksplisit (`unknown` saat
probe sedang dalam perjalanan atau tidak dapat diselesaikan, `restricted` pada host dasbor non-loopback
di mana probe dilewati di sisi klien, `unavailable` setelah diprobe
dan dikonfirmasi hilang, atau `available` dengan versi FFmpeg/ffprobe) — mempertahankan
batas enable/model/frame/video/timeout, menyaring pemilih model untuk model yang mampu
vision, dan menampilkan penghitung video.

Kartu Vision Bridge sebelumnya di bawah pengaturan AI adalah tautan kompatibilitas ke
halaman baru; ia tidak lagi memiliki salinan kedua dari formulir tersebut. Penyedia Media juga
menghubungkan alur kerja Image-to-Text dan Speech-to-Text ke tab Modality
Bridge yang sesuai tanpa menghapus playground Speech-to-Text yang ada.

**Bypass penerimaan self-loop:** ketika panggilan deskripsi melewati self-loop
`/v1` milik OmniRoute (model penyedia non-standar), sub-permintaan mengirim
`x-omniroute-admission-bypass: internal` dan diotentikasi dengan kredensial
self-loop yang diselesaikan — sentinel lokal `sk_omniroute` dalam mode lokal, atau
kunci env yang dikonfigurasi operator `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350) sehingga
penempatan `REQUIRE_API_KEY=true` masih dapat menjalankan panggilan deskripsi. Bypass
hanya dihormati untuk kredensial tersebut, sehingga klien eksternal tidak dapat menggunakan
header untuk melewati penerimaan.

Default warisan berada di `src/shared/constants/visionBridgeDefaults.ts`;
default mode/task-aware/cache baru dan resolver pengaturan berada di
`src/shared/constants/modalityBridgeDefaults.ts`. Guardrail menampilkan opsi konstruktor
`deps` sehingga pengujian dapat menyuntikkan implementasi `getSettings` dan
`callVisionModel` palsu.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Menyadap permintaan chat yang mengandung audio sebelum mencapai target yang tidak
diketahui menerima input audio. Ia tidak pernah mengalihkan permintaan chat: bagian audio
ditranskripsikan melalui endpoint multipart yang kompatibel dengan OpenAI yang ada dan
model chat yang dipilih melanjutkan dengan transkrip teks.

Alur:

1. Menyelesaikan `supportsAudio` melalui `getResolvedModelCapabilities()`. Metadata
   registri penyedia eksplisit menang, kemudian metadata model statis, kemudian
   `modalities_input` yang disinkronkan. Daftar input yang dinyatakan tanpa `audio` adalah `false`; tidak ada
   bukti kemampuan tetap `null`. Baik `false` maupun `null` mengaktifkan jembatan konservatif, sementara `true` melewatinya.
2. Menyelesaikan pengaturan `modalityBridgeAudio*` dan mengekstrak bagian audio
   tingkat atas yang dapat dipotong dari setiap pesan melalui detektor `detectMediaParts()`
   yang dibagikan. Bentuk kabel yang didukung adalah OpenAI `input_audio`, `audio_url`, dan
   `source.media_type: "audio/*"`. Audio bersarang terdeteksi untuk routing tetapi tidak
   dihapus oleh jalur pemotongan. Pekerjaan dibatasi oleh `modalityBridgeAudioMaxClips`;
   bagian selanjutnya tetap tidak tersentuh.
3. Menghormati `provider/model` yang dikonfigurasi, atau membiarkan `selectAudioBridgeModel()`
   berjalan melalui `AUDIO_TRANSCRIPTION_PROVIDERS` dalam urutan katalog stabil dan memilih model
   pertama dengan kredensial penyedia aktif yang dapat digunakan.
4. `callAudioTranscription()` mengonversi audio base64/data-URI menjadi multipart
   `file`, atau mengunduh `audio_url` jarak jauh melalui guard outbound publik dengan pin DNS
   dan batas 25 MB. Kemudian mengirim POST file dan model yang dipilih ke
   self-loop lokal `/v1/audio/transcriptions`, diotentikasi dengan
   `resolveSelfLoopBearer()`. Rute transkripsi yang ada melakukan pencarian kredensial normal,
   penanganan cooldown/batas laju, dan pengiriman penyedia.
5. Panggilan yang berhasil mengganti bagian mereka dengan `[Audio N]: <transcript>`. Panggilan
   dijalankan dengan `Promise.allSettled`: kegagalan individu mempertahankan bagian audio asli
   tersebut (#4012 kontrak). Jika setiap panggilan gagal dan target terbukti
   `supportsAudio === false`, bagian tersebut menjadi
   `[Audio N]: (tidak tersedia — tidak ada penyedia STT yang terhubung)` (#8430 kontrak). Untuk
   target yang tidak diketahui (`null`), hasil semua kegagalan tetap tidak tersentuh. Target
   yang terbukti hanya teks tanpa kredensial STT yang dapat digunakan menerima stub eksplisit yang sama
   tanpa mengeluarkan panggilan jaringan.

Transkrip yang berhasil menggunakan cache Modality Bridge LRU/TTL yang berlaku untuk seluruh proses. Kunci
menggabungkan referensi audio, label operasi `audio-transcription` yang stabil, dan model STT yang dipilih; kegagalan tidak pernah dicache. Upaya audio memperbarui
penghitung `bridged`, `cacheHits`, `failures`, dan `lastUsedAt` yang dibagikan.
Respon yang diubah membawa
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; permintaan yang tidak tersentuh
tidak menerima segmen Audio Bridge.

Pengaturan runtime didukung oleh DB dan divalidasi oleh Zod:

| Kunci                         | Default | Rentang          |
| ----------------------------- | ------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                |
| `modalityBridgeAudioModel`    | `""`    | Auto atau ID STT |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10             |

Cache yang dibagikan tetap dikendalikan oleh `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, dan `modalityBridgeCacheMaxEntries`.

### Jembatan Video (`videoBridge.ts`, `videoBridgePipeline.ts`)

Mengintersepsi bagian video tingkat atas dalam Chat Completions `messages` dan Responses
API `input` sebelum target tanpa dukungan video asli yang dikenal dipanggil.
Bentuk yang didukung adalah `input_video`, `video_url`, `video_source`, URL HTTPS,
dan `data:video/*;base64,...` data URI. Nama file biasa dalam teks tidak diperlakukan
sebagai video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) memiliki traversal permintaan,
pemeriksaan kemampuan/kebijakan, agregasi per permintaan, dan payload respons.
Pekerjaan per video — akuisisi, cache hasil keseluruhan, mendeskripsikan urutan frame
(yang menggabungkan transkrip audio yang dinyatakan oleh pemanggil), dan metrik/abort/cleanup
per percobaan — tersembunyi di balik `processVideoPart` dalam
`videoBridgePipeline.ts`, dipanggil sekali per bagian video di dalam loop `preCall`.
Modul tersebut juga mendefinisikan batas port eksplisit `VideoMediaBrokerPort`
(mendapatkan byte dan mengekstrak frame yang diambil), `VideoAudioTranscriptionPort`
(menggabungkan transkrip audio yang dinyatakan oleh pemanggil dengan subtitle yang diambil), dan
`VideoDrilldownPort` (bentuk penyimpanan mentah warisan). STT produksi dan retensi frame
dibentuk di sekitar port deskripsi melalui `createVideoSttAdapter` dan
`createVideoDrilldownAdapter`; yang terakhir menggunakan siklus hidup pegangan opak yang dibagikan.

Jalur permintaan publik `/v1` tidak pernah mengimpor atau memanggil subprocess. Video
jarak jauh diunduh di bawah batas 50 MiB; video base64 inline memiliki
batas dekode konservatif 36 MiB per video sehingga model/pesan/penyampaian
dapat tetap berada di dalam batas penerimaan permintaan JSON publik sebesar 50 MiB.
Perkiraan panjang inline dan ukuran dekode diperiksa sebelum alokasi. HTTPS
diperlukan pada URL jarak jauh awal dan setiap pengalihan, menggunakan
penjagaan outbound publik yang ada dengan penetapan DNS. Byte kemudian melintasi
batas broker internal yang tepat `POST /api/modality-bridge/video/extract`. Rute tersebut adalah
`LOCAL_ONLY` dan `SPAWN_CAPABLE`, hanya menerima permintaan loopback yang
terverifikasi dan tepercaya per proses, dan tidak pernah menerima URL, jalur sistem file,
eksekusi, atau daftar argumen. Pipeline ukuran tubuh API dan pembaca tubuh inkremental
handler secara independen menegakkan batas input broker 50 MiB. Antrian yang dibatasi
menjalankan satu ekstraksi pada satu waktu, memungkinkan empat pekerjaan tertunda, dan
membatasi input tertunda pada 100 MiB.

Di dalam broker, `ffprobe` membaca file lokal pribadi; daftar format
yang diizinkan mengecualikan format daftar putar dan manifest. Untuk kontainer keluarga MOV
yang diizinkan, referensi data MOV eksternal tetap dinonaktifkan secara default, dan
perintah tetap tidak memilih untuk mengizinkannya. Baik `ffprobe` maupun `ffmpeg` menggunakan
daftar putih protokol `file`-saja, satu thread, array argumen tetap, tanpa shell,
dan eksekusi yang diselesaikan dari `PATH`. Aliran penutup gambar terlampir bukanlah
kandidat yang dapat diputar. Semua aliran yang dapat diputar harus memenuhi batas, dan
aliran default eksplisit lebih disukai sebelum fallback indeks terendah yang deterministik.
Video dibatasi hingga 600 detik, 8.192 piksel per dimensi, dan
33.554.432 piksel sumber. FFmpeg mengambil 1–16 frame JPEG titik tengah, mengurangi
tepi panjang hingga maksimal 1.024 piksel tanpa meningkatkan input yang lebih kecil, dan
tidak pernah menerima URL. Pengambilan bersifat `uniform` secara default. Kebijakan opsional
`scene_aware` dan eksperimental `segment_aware` melakukan satu pass FFmpeg tetap tambahan
di atas aliran lokal yang sudah divalidasi, memilih cap waktu adegan `showinfo` yang dibatasi,
dan kembali secara deterministik ke titik tengah uniform yang sama pada kegagalan detektor,
timeout, output yang tidak terformat, atau set kandidat yang kosong. Mode sadar segmen
mengalokasikan sampel titik tengah secara proporsional ke interval adegan yang divalidasi;
bukti sadar segmen dan perilaku fallback dijelaskan di bawah. Batas keras 16-frame diterapkan
setelah pemilihan dalam setiap kebijakan. Ketika permintaan sadar adegan hanya memiliki
anggaran satu frame, ia menggunakan titik tengah uniform dari video penuh aktif atau jendela fokus
dan melaporkan `policyEffective: uniform`: satu frame adegan yang dipilih tidak dapat
mempertahankan kedua ujung temporal. Pemanggil dapat secara opsional memberikan
jendela fokus terbatas (`start`/`end` detik); batas dibatasi pada durasi media,
jendela terbalik atau tidak terbatas ditolak, dan semua kebijakan pengambilan dilakukan
hanya di dalam interval yang dinormalisasi. Jendela yang dihasilkan disertakan dalam metadata
pengambilan dan dalam prefiks deskripsi yang tidak tepercaya sehingga model hulu dapat
membedakan cuplikan yang difokuskan dari garis waktu penuh.

Fokus keterangan semantik adalah pengaturan terpisah dan eksplisit. Mode analisis default
`full` mempertahankan prompt frame yang ada dan tidak pernah meneruskan teks permintaan
ke model keterangan. Dalam mode `focused`, jembatan hanya membaca `text`/`input_text`
yang ditulis pengguna terbaru yang tidak kosong dari kontainer Chat atau Responses yang sama,
menormalkannya ke NFC, menggabungkan karakter kontrol dan spasi, dan membatasinya hingga
500 titik kode Unicode. Hasil kosong kembali ke prompt `full` yang tepat. Petunjuk yang dapat digunakan
diserialisasi sebagai JSON dalam blok konteks pengguna tidak tepercaya yang didedikasikan dan
hanya dapat memprioritaskan detail yang dapat diamati; ia tidak dapat menggantikan peringatan terpisah
terhadap mengikuti instruksi yang terlihat atau terdengar dalam media. Fokus tekstual tidak pernah
menyimpulkan `start`/`end` atau mengubah pengambil temporal.

#### Bukti segmen struktural FU-07

`segment_aware` menggunakan satu proses pra-analisis terbatas pada aliran video lokal yang sudah divalidasi. Rantai filter tetap pertama-tama mengubah ukuran menjadi paling banyak 320 piksel lebar, mendeteksi perubahan adegan dan interval beku, kemudian mengambil sampel pada 1 frame per detik untuk blur, rata-rata luma, dan informasi spasial/temporal. Proses ini dibatasi hingga 600 sampel struktural, satu thread FFmpeg/filter, protokol dan daftar putih kontainer yang hanya `file`, batas output proses 1 MiB, dan paling banyak 30 detik di dalam batas waktu/broker yang dibagikan. Ini tidak pernah menerima perintah, filter, jalur, atau URL dari permintaan.

Nilai struktural adalah bukti pengambilan sampel deterministik, bukan pemahaman video semantik. Mereka tidak menyimpulkan subjek, tindakan, keterangan, ucapan, atau niat pengguna. Batasan adegan dan beku membentuk segmen; cakupan beku, blur, eksposur, detail spasial, dan perubahan temporal hanya mempengaruhi bagaimana anggaran 1–16 frame yang ada dialokasikan. Segmen yang sepenuhnya beku dibatasi pada satu frame, sementara segmen yang tidak beku bersaing untuk anggaran yang tersisa. Ketika batasan melebihi jumlah frame, cakupan garis waktu yang seragam dipertahankan sehingga pemotongan awal yang cepat tidak dapat menyembunyikan segmen yang panjang. Batasan adegan dalam resolusi analisis 1 detik dari batas beku digabungkan.

Filter yang hilang, bukti yang tidak terformat/kosong, kesalahan detektor, atau batas waktu pra-analisis yang terbatas gagal terbuka ke kebijakan titik tengah seragam yang tepat. Pembatalan pemanggil atau batas waktu broker tidak gagal terbuka: itu menghentikan subprocess yang sedang berjalan, mencegah ekstraksi frame selanjutnya, dan pohon sementara pribadi dihapus di `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` menghasilkan fixture FFmpeg nyata yang deterministik untuk penghematan panggilan keterangan pasca-duplikasi, alokasi anggaran gerakan padat, bukti blur/eksposur/SI-TI, pemotongan cepat dengan ekor panjang, dan positif palsu gradien. Ini mencatat waktu dinding pra-analisis dan, di mana `/usr/bin/time` tersedia, CPU anak dan RSS puncak. Pemeriksaan kualitasnya hanya merupakan orakel struktural. Kualitas model keterangan nyata tetap `HOLD` karena alat ini tidak memiliki titik akhir yang diotorisasi atau juri beku. Penghematan moneter juga tetap `HOLD` kecuali `--caption-cost-per-call-usd` memberikan estimasi positif per panggilan yang eksplisit; skrip tidak pernah memalsukan hasil tersebut.

Setiap frame dibatasi hingga 4 MiB, semua frame mentah bersama hingga 23 MiB, dan respons broker yang diserialisasi hingga 32 MiB. Direktori sementara pribadi dihapus di `finally`. OmniRoute tidak mengemas FFmpeg dan tidak menerima jalur executable kustom. Sebelum memberi keterangan, jembatan menerapkan proses deduplikasi visual yang konservatif: setiap JPEG dikurangi menjadi buffer grayscale 16×16 dan hanya dibandingkan dengan frame terakhir yang dipertahankan. Untuk anggaran keterangan yang diminta di atas satu frame, ekstraksi menyediakan kumpulan kandidat terbatas hingga dua kali anggaran tersebut dan tidak pernah lebih dari 16 frame. Batas yang diminta diterapkan hanya setelah deduplikasi, dengan kandidat yang dipilih pertama dan terakhir dipertahankan selama pengurangan akhir ketika anggaran setidaknya dua. Kebijakan `grayscale-16x16-mean-cells-v2` yang versi menggunakan yang lebih besar dari delta luma rata-rata dan rasio sel thumbnail yang delta terstandarisasi setidaknya 0.05. Ambang duplikasi adalah konstanta 0.04, dipilih untuk prediktabilitas daripada diekspos sebagai pengaturan runtime. Sinyal kontras tinggi sekunder ini mempertahankan gerakan kecil dan perubahan teks yang terlihat yang dapat disembunyikan oleh perbandingan hanya rata-rata. Kesalahan pembanding atau dekoder gagal terbuka dan mempertahankan cakupan. Metadata output memisahkan kandidat yang diekstraksi, frame yang berhasil digunakan, dan duplikasi visual yang dibuang.

Bagian video yang ditandai secara eksplisit dapat meminta lembar kontak bertimestamp. Jembatan membangun paling banyak grid JPEG 4-kolom, 16-frame. Setiap sel 512-piksel membakar timestamp sumbernya ke dalam pita bawah kontras tinggi, sementara timestamp yang sama tetap dalam metadata tekstual untuk asosiasi dan audit selanjutnya. JPEG lengkap tetap dibatasi pada 32 MiB. Jika `sharp` tidak dapat mendekode atau menyusun grid, jembatan kembali ke frame JPEG individu; pembatalan klien tetap menyebar melalui operasi lembar.

Bukti promosi secara sengaja terpisah dari mikrobenchmark komposisi sintetis. `scripts/perf/video-bridge-contact-sheet-eval.ts` mendefinisikan harness A/B versi skema untuk model visi yang kompatibel dengan OpenAI yang nyata. Ini mengukur token yang dilaporkan penyedia, latensi dinding end-to-end (termasuk komposisi lembar), jumlah panggilan model, dan retensi fakta yang ditentukan dalam manifest. Respons model mentah tidak ditulis ke laporan; hanya SHA-256 digest dan ID fakta yang cocok yang dipertahankan. Harness tidak melakukan panggilan jaringan atau model berbayar kecuali `--execute-real` diteruskan dan `--model`, `OMNIROUTE_BASE_URL`, dan `OMNIROUTE_API_KEY` dikonfigurasi. Tanpa run nyata yang eksplisit, putusan yang dapat dibaca mesin tetap `HOLD`; pengukuran payload/panggilan sintetis saja tidak merupakan bukti promosi.

`scripts/perf/video-bridge-promotion-eval.ts` yang terpisah mengkonsumsi pengamatan FU-07 atau FU-09. Penerimaan promosi memerlukan semua delapan jenis skenario sintetis ditambah klip nyata yang disanitasi, setidaknya tiga pengulangan terukur per peran dan kasus, semua sepuluh metrik yang dinyatakan, media/prompt/fakta/setting yang dibekukan, ID pengamatan unik dan urutan A/B yang diverifikasi. Tanda terima eksekusi mengikat digest korpus, SHA kandidat yang tepat dan revisi model. Pengukuran yang hilang atau tidak valid tetap `HOLD`, termasuk CPU di atas 30 s, RSS puncak di atas 512 MiB atau pra-analisis di atas 30 s. Ini adalah batas penerimaan bukti, bukan jaminan penegakan RSS runtime baru.

FU-07 memerlukan setidaknya 98% retensi kualitas dan latensi p95 tidak lebih dari 1,2x
baseline, ditambah baik peningkatan rata-rata recall seimbang kasus absolut sebesar 0,05 pada
panggilan caption rata-rata yang setara, atau setidaknya 10% lebih sedikit panggilan caption post-dedup rata-rata. FU-09 memerlukan setidaknya 0,85 kualitas, 95% retensi, pengurangan latensi p95 sebesar 20% dan pengurangan token sebesar 10%. Kehilangan fakta kritis, kepatuhan injeksi atau penggunaan yang hilang mencegah promosi. Satu eksekusi tidak dapat mempromosikan apa pun:
`--previous-report` mengonfirmasi dua eksekusi yang berbeda, tidak tumpang tindih, dan secara berurutan
layak dari kebijakan/revisi model/kandidat/korpus yang sama. Sebuah
eksperimen pengambilan sampel tidak dapat mengonfirmasi eksperimen contact-sheet.

Pengumpul harus memberikan skor pada respons dalam memori dan menyimpan `responseDigest` ditambah
metrik dan pengikatan observasi, tidak pernah teks respons. Konsumen juga membaca
observasi mentah warisan tetapi tidak pernah menyalin teks itu ke dalam laporannya. Tepat
satu dari `responseDigest` atau `rawResponseText` diterima untuk setiap observasi.
Daftar putih yang versi tetap kosong dengan default `hold` yang tidak dapat diubah. Sebuah
entri yang memenuhi syarat memerlukan referensi buktinya, kebijakan, revisi model, SHA kandidat yang tepat, digest manifest dan dua ID run yang berbeda; konteks yang bertentangan
ditolak. Metadata ini adalah kontrak audit, bukan bukti bahwa file yang dirujuk
mengandung pengukuran yang asli. Tinjau tanda terima yang sebenarnya sebelum menambahkan
entri apa pun. Endpoint statistik manajemen dan dasbor Video mengungkapkan
kesiapan yang konservatif. Alias model yang dikonfigurasi saja tidak menetapkan revisinya atau
SHA kandidat yang sedang berjalan, jadi dasbor saat ini melaporkan `HOLD` daripada
menggunakan kelayakan dari konteks eksekusi lain. Pemilihan eksperimental yang eksplisit tetap terpisah dari promosi; tidak ada default yang diubah secara otomatis.

Penelepon dapat melampirkan array opsional `transcript.cues` ke bagian video yang didukung
ketika mereka sudah memiliki teks yang selaras. Setiap cue harus membawa `text`, interval `start`/`end` yang terbatas di dalam durasi yang diuji, dan `source` yang ada dalam daftar putih (`client`, `embedded`, atau `audio-bridge`); `confidence` defaultnya adalah
`1` dan harus tetap antara `0` dan `1`. Cue duplikat yang tepat akan digabungkan.
OmniRoute tidak pernah memulai transkripsi dari metadata ini: cue yang divalidasi disalin ke dalam hasil yang dijelaskan dengan sumber, kepercayaan, dan interval, dan
ditampilkan sebagai observasi yang tidak tepercaya di samping caption frame. Teks yang tidak valid,
di luar jangkauan, atau tanpa asal ditolak daripada dicampur ke dalam
aliran caption. Kedua saluran transkrip body request menormalkan asal yang disuplai menjadi `client`, termasuk label `embedded` atau `audio-bridge` yang dinyatakan sendiri. Hanya adapter yang dimiliki server yang dapat menetapkan label tepercaya tersebut melalui argumen `trustedSource` yang hanya kode; field JSON permintaan tidak dapat mencapai
argumen itu. Teks transkrip tetap merupakan konten yang berasal dari media yang tidak tepercaya,
terlepas dari asalnya, dan tidak boleh menentukan otorisasi.

Penelepon tingkat lanjut dapat menyediakan trek `audioTranscript` untuk video yang sama;
itu diperlakukan sebagai teks yang disediakan oleh klien, bukan bukti transkripsi server.
Jahitan fusi menjalankan observasi visual dan audio di bawah
satu tenggat waktu dan sinyal abort, mengurutkannya pada garis waktu yang sama, menggabungkan
duplikat yang tepat, dan melaporkan hasil parsial ketika hanya satu sisi yang berhasil.
Sebuah `audioTranscript` yang tidak valid menurun menjadi hasil parsial itu — deskripsi visual disimpan dan cabang audio mencatat kode kegagalan yang disanitasi —
alih-alih gagal pada seluruh video. Ketersediaan per-cabang, flag parsial,
dan kode kegagalan yang disanitasi dipertahankan dalam hasil yang dijelaskan, dalam
metadata guardrail (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), dalam metadata cache hasil, dan dalam penghitung fusi jembatan. Jalur Video Bridge default tidak memanggil speech-to-text
atau mengunduh salinan media kedua; tanpa trek eksplisit itu, tetap
hanya video.

**Retensi transkrip (#12150 P1).** Ini berlaku secara otomatis setiap kali
Video Bridge (yang sendiri opt-in) menghasilkan cue transkrip — tidak ada flag retensi terpisah. Ketika permintaan menghasilkan cue transkrip apa pun (sebuah `transcript` yang dinyatakan oleh penelepon atau `audioTranscript` yang digabungkan), guardrail menandainya
`videoBridgeObserved` dan menghasilkan bayangan yang disunting dari deskripsi video —
rendering identik di mana setiap body teks bebas cue diganti dengan
`[redacted-video-transcript]`, dibangun dengan mengganti field cue terstruktur
sebelum string dirakit (tidak pernah dengan mengurai teks yang diratakan, jadi tidak ada konten cue — baik yang bersifat adversarial atau biasa, termasuk body yang mengandung `]` seperti
`[inaudible]`/`[music]` — dapat bertahan). Body log permintaan yang dipersisten menukar
setiap bagian teks yang berasal dari video dengan bayangan yang disunting itu, dicocokkan berdasarkan kesetaraan konten; anchor `fullText` dibaca ulang dari payload guardrail pre-call yang selesai, sehingga pencocokan tetap berhasil setelah guardrail rantai selanjutnya (masker PII dan kredensial, prioritas 10/95) menulis ulang teks deskripsi di tempat dan
setelah sistem-prompt/handoff/injeksi memori membentuk ulang array pesan. Body yang dikirim ke model tidak berubah. Permintaan yang diamati juga tidak mengisi
Memori yang tahan lama (baik ekstraksi yang berasal dari permintaan maupun respons dilewati),
sehingga balasan model itu sendiri tidak dapat mencerminkan teks transkrip ke dalam Memori.

**Field video mentah (#12430).** Ketika jembatan diaktifkan dan dukungan video asli tidak diketahui atau tidak ada, field `transcript`/`audioTranscript` yang ditentukan juga mengaktifkan `videoBridgeObserved`, bahkan setelah kegagalan deskripsi atau batas `maxVideos`. `null` dan string kosong dihitung; field yang tidak ada dan metadata non-video tidak dihitung. Salinan yang dipertahankan menyunting field ini atau menghilangkan permintaan, dan cache/Memori dilewati.

Pada jalur cadangan tersebut, petunjuk pemanggil yang valid menjadi bagian `text`/`input_text` yang didukung daripada bidang penyedia yang tidak standar. Kedua trek yang disuplai oleh permintaan tetap merupakan pengamatan `client` yang tidak dapat dipercaya, dengan peringatan eksplisit bahwa video tidak dijelaskan dan cap waktu tidak diverifikasi terhadap media. Anggaran total 256 petunjuk/64-KiB dan anggaran per petunjuk yang ada berlaku untuk kedua trek secara bersamaan; cap waktu harus sesuai dengan batas 600 detik broker dan jendela fokus yang disuplai. Trek yang tidak valid dibuang, tidak diteruskan sebagai teks sembarangan; saudara yang valid masih dapat digunakan kecuali anggaran gabungannya terlampaui. Bidang null/kosong tidak menambah teks. Tidak ada pengambilan media atau transkripsi yang ditambahkan oleh cadangan ini. Bidang ekstensi transkrip dihapus dari pembawa video cadangan dan objek `video_url`/`source`-nya. Daftar putih kabel OpenAI tetap ketat; pembawa video asli yang tidak dikenal tetap tersedia dan target teks saja yang dikenal menjaga penanda yang aman. Bayangan redaksi terstruktur melindungi teks transkrip yang ditambahkan, sementara permintaan yang dimiliki pemanggil asli tetap tidak berubah. Target yang didukung secara asli dan jembatan yang dinonaktifkan mempertahankan perilaku bypass yang ada.

Salinan tambahan yang dipertahankan menggunakan sinyal permintaan yang sama. Snapshot permintaan klien mentah sebelum pengaman, permintaan yang tertunda dalam memori, dan log permintaan yang ditolak lebih awal secara struktural menggantikan bidang transkrip dalam bagian video; prompt string yang disintesis oleh tahap pipeline dan penyerahan konteks disunting di sink tubuh permintaan yang dipertahankan. Penanda `video_content_removed` yang dipertahankan membuat kelanjutan `previous_response_id` gagal tertutup daripada membangun kembali teks yang sengaja dibuang. Jika permintaan yang diamati kehilangan bayangan redaksi per bagiannya sebelum pencatatan, atau bahkan salah satu dari beberapa bayangan video gagal cocok setelah mutasi permintaan selanjutnya, tubuh permintaan yang dipertahankan sepenuhnya dihilangkan daripada mempertahankan transkrip yang sebagian disunting.

Untuk permintaan yang diamati, respons model mungkin mengutip bagian mana pun dari transkrip tanpa batasan cue terstruktur. Oleh karena itu, `responseBody` log panggilan yang dipertahankan digantikan oleh penanda penghilangan; artefak pipeline yang terperinci (yang dapat mencakup tubuh hulu/klien dan potongan aliran) tidak dipertahankan. Cache semantik, idempotensi, dan pemutaran penalaran melewati pembacaan dan penulisan untuk permintaan itu. Permintaan penyedia dan respons yang terlihat oleh klien tetap tidak berubah. Byte keepalive awal dikuras dari buffer sementara ketika artefak terperinci dihilangkan. Peringatan EventStream Kiro yang cacat hanya melaporkan jumlah byte payload, tidak pernah isinya atau kesalahan mentah parser JSON. Ini tidak mengklaim bahwa setiap diagnosis penyedia/plugin yang tidak terkait telah diaudit; penyapuan sink yang lebih luas yang dipertahankan dilacak dalam #11658.

Siklus hidup `/api/modality-bridge/video/drilldown` internal adalah substrat cache terpisah yang diotentikasi dengan loopback/token. Setiap operasi juga memerlukan ID prinsipal opak kanonik. Sebelum pemanggil produksi diaktifkan, ia harus memperoleh ID tersebut dari penyewa yang terotentikasi dan tidak boleh meneruskan nilai yang dipilih klien. Kunci cache mengikat prinsipal tersebut ke ID sesi kanonik dan ID referensi video, hanya menyimpan kunci yang diturunkan dari SHA-256 mereka, dan membatasi pembacaan serta penghapusan ke prinsipal yang sama. Cache menyimpan paling banyak 16 frame JPEG yang diturunkan per entri, menghabiskannya setelah sepuluh menit, dan mendukung pembacaan `start`/`end` yang dibatasi atau penghapusan sesi eksplisit.

Setiap prinsipal dibatasi hingga 16 entri dan 64 MiB data JPEG kanonik. Batasan tersebut independen dari batas global 64-entri/256 MiB: tekanan kuota prinsipal hanya mengeluarkan entri yang paling tidak sering digunakan dari prinsipal tersebut sebelum pengeluaran LRU global dipertimbangkan. Entri yang kedaluwarsa disapu dari akuntansi prinsipal dan global pada aktivitas cache, sementara pembatalan dan kegagalan validasi tidak melakukan penggantian parsial.

Cache menolak Base64 non-kanonik, padding berlebih, media non-JPEG, JPEG yang cacat atau terpotong, dan JPEG yang menghasilkan peringatan selama dekode `sharp` gambar penuh yang dibatasi. Ia mengenkode ulang setiap gambar yang diterima sebagai JPEG kanonik, memperoleh lebar dan tinggi dari byte yang terdekode daripada mempercayai bidang pemanggil, dan membuang byte polyglot yang tertinggal daripada mempertahankannya. Hanya buffer terkompresi kanonik yang dibatasi yang dibebankan ke kedua kuota. Batas kabel JSON mencakup overhead Base64 untuk batas input yang terdekode 32 MiB. Setiap
turunan yang disimpan mencatat format/resolusi JPEG yang divalidasi, kebijakan pengambilan sampel, versi turunan, waktu pembuatan, hash konten yang dihitung server, dan hash referensi induk yang di-hash ditambah hash konten induk pemanggil yang dipercaya. Pembatalan diperiksa antara fase dekode/hash asinkron sebelum komit cache atomik.

Produsen produksi menggunakan ulang frame broker yang sudah diturunkan hanya setelah analisis visual yang berhasil, tanpa pengunduhan/ekstraksi video kedua. Ini memerlukan `modalityBridgeVideoDrilldownEnabled=true` dari operator, `drilldown: true` per bagian yang ketat, dan ID catatan kunci API yang terotentikasi. Nilai prinsipal/sesi yang dinyatakan klien tidak pernah menetapkan kepemilikan. Tanpa ketiga kondisi tersebut, ia tidak melakukan hash, mengubah ukuran, atau mempertahankan frame tambahan. Kegagalan retensi mempertahankan respons visual yang dapat digunakan. Permintaan yang disetujui melewati cache hasil video seluruhnya sehingga hasil yang dicache tidak pernah memutar ulang pegangan.

Respons JSON dan SSE yang berhasil mengekspos paling banyak empat pegangan opak dalam header `x-omniroute-video-drilldown` yang dibatasi. Asal browser yang diizinkan dapat membaca header tersebut tanpa memperluas kebijakan asal CORS. Pegangan baru menggunakan `v1.<32-byte random base64url token>`, dan registri hanya menyimpan hash SHA-256 mereka. Pembaca/parser header juga menerima token 64-hex warisan. Konsumen publik yang terautentikasi adalah `GET /api/v1/video-bridge/drilldown?handle=...`, yang secara independen dibatasi oleh `modalityBridgeVideoDrilldownRemoteEnabled=true`. Persisten eksplisit false mencabut akses bahkan ketika fallback warisan `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` diaktifkan. Retensi produksi memiliki fallback warisan yang setara `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED`. Kedua fallback secara default dimatikan.

Konsumen memperoleh kepemilikan dari kunci yang terautentikasi, menerapkan kebijakan kunci, dan mengembalikan 404 yang sama untuk pegangan yang tidak dikenal, kedaluwarsa, dan pegangan kunci lainnya. Ini menerima `variant=preview|standard|detail` (dimensi JPEG maksimum 320/640/1280, tidak pernah ditingkatkan), `limit=1..8` (atau alias warisan `frames`, tidak pernah keduanya), `page` berbasis nol, dan detik fokus `start`/`end` opsional. Kunci kueri duplikat dan jendela fokus terbalik ditolak. Setiap varian yang dikembalikan memiliki hash dari konten aktualnya dan metadata resolusi aktual, yang terhubung ke sumber yang disimpan. Varian diturunkan saat dibaca daripada disimpan sebagai salinan tambahan yang disimpan. Respons JSON, termasuk Base64/envelope, dibatasi hingga 32 MiB; halaman yang terlalu besar mengembalikan 413 dan klien harus meminta lebih sedikit frame. Pembacaan memeriksa pembatalan di sekitar setiap pengubahan ukuran dan memeriksa kembali validitas pegangan sebelum mengembalikan. `DELETE` oleh pemilik adalah idempotent; penghapusan atau kedaluwarsa TTL melepaskan sumber yang disimpan dan akuntansi penggunaan.

Toko bersama bersifat lokal proses: pegangan kedaluwarsa saat restart dan tidak dapat dipindahkan antara proses OmniRoute yang independen. Statistik manajemen mengekspos kebijakan retensi/remote yang efektif dan agregat entri/byte yang disimpan saja, tidak pernah media, referensi, ID prinsipal, atau pegangan. Panel pengaturan Video menunjukkan nilai-nilai tersebut dan dapat menyimpan kedua saklar persetujuan. Dokumentasi implementasi ini bukan bukti penerapan langsung atau promosi; penerimaan model nyata dilacak secara terpisah.

Frame diberi keterangan secara berurutan dengan model Video yang dikonfigurasi. Override Video yang kosong mewarisi pengaturan Vision; jika keduanya kosong, pengarah otomatis Vision memilih model yang mampu visi yang efektif. Keterangan yang berhasil menggantikan bagian asli dengan awalan stabil `[Video description:` yang juga menandai teks sebagai pengamatan yang berasal dari media yang tidak tepercaya dan memberi tahu model downstream untuk tidak mengikuti instruksi yang ditemukan dalam media. Kunci cache keterangan frame mencakup byte JPEG, prompt, timestamp, dan model yang efektif; hanya keterangan yang berhasil yang disimpan dalam cache. Entri cache menyimpan model produsen yang berhasil, termasuk model fallback; jembatan melaporkan `mixed` ketika frame yang berbeda diproduksi oleh model yang berbeda. Cache hit menggunakan identitas produsen itu alih-alih memberi label ulang sebagai rencana routing yang diminta. Cache hasil video keseluruhan dikunci pada setiap input yang mengubah output — prompt, model yang efektif, kebijakan sampling, jumlah frame, mode analisis semantik, sidik jari SHA-256 dari petunjuk fokus yang dinormalisasi, jendela fokus, `transcript`, `audioTranscript`, dan bendera contact-sheet — sehingga mengubah salah satu dimensi tersebut adalah cache miss, tidak pernah penggunaan kembali yang usang. Versi kebijakan deduplikasi visual, ambang batas, dan jumlah frame kandidat yang dibatasi juga eksplisit dalam kunci cache hasil dan metadata; perubahan kebijakan oleh karena itu tidak dapat menggunakan deskripsi video keseluruhan yang usang. Metadata cache hasil v4 menyimpan mode dan sidik jari, tidak pernah tugas pengguna mentah. Metadata guardrail melaporkan baik mode analisis yang diminta maupun yang efektif; mode `focused` yang diminta tanpa teks pengguna yang dapat digunakan dilaporkan sebagai secara efektif `full`.

Guardrail mengekstrak setiap bagian video yang didukung tetapi tidak menjelaskan lebih dari `modalityBridgeVideoMaxVideos`. Untuk target yang terbukti memiliki `supportsVideo === false`, video yang gagal dan melebihi batas menjadi penanda teks aman eksplisit sehingga tidak ada video mentah yang bertahan. Ketika kemampuan tidak diketahui, bagian-bagian tersebut mempertahankan pembawa video mereka; transkrip fallback apa pun mengikuti konversi teks yang dibatasi di atas. Target dengan `supportsVideo === true` melewati jembatan. Sinyal abort permintaan klien menyebar melalui unduhan, antrean broker, subprocess, dan panggilan keterangan; abort menghentikan antara video dan tidak pernah gagal terbuka ke media mentah.

Pengaturan runtime didukung oleh DB dan divalidasi oleh Zod:

| Kunci                               | Default     | Rentang / perilaku                                                                                                       |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`     | Runtime opsional, opt-in                                                                                                 |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` mempertahankan keterangan umum; `focused` menggunakan konteks pengguna terbaru yang tidak tepercaya yang dibatasi |
| `modalityBridgeVideoModel`          | `""`        | Mewarisi model Vision Bridge                                                                                             |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, atau `segment_aware` proporsional; kegagalan detektor kembali ke `uniform`                     |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                           |

Nilai timeout Video yang dipersistenkan secara legacy di atas 120 detik dibatasi pada
batas waktu broker; penulisan pengaturan baru di atas batas tersebut ditolak.
`GET /api/modality-bridge/video/runtime` memerlukan kepercayaan pada loopback
lokalitas sebelum otentikasi atau probing runtime, kemudian memerlukan otentikasi manajemen.
Ini hanya mengembalikan versi FFmpeg/ffprobe yang `tersedia`, telah disanitasi, dan alasan tetap
ketika runtime tidak tersedia. Endpoint ekstraksi internal bukanlah
API unggah publik: saturasi antrean mengembalikan `503` ditambah `Retry-After`, pemutusan
panggilan mengembalikan `499`, dan batas waktu broker tetap mengembalikan `504`. Respons yang dikonversi menambahkan
`video->text;model=<visionModel>;parts=<videos>` ke header pusat
`x-omniroute-modality-bridge` tanpa menghapus segmen Vision atau Audio.

### PII Masker (`piiMasker.ts`)

Bekerja di **kedua** tahap.

- **`preCall`** mengkloning payload, menjelajahi `system`, `messages`, `input`, dan
  `prompt` (termasuk item string biasa), dan menerapkan `processPII()` (dari
  `@/shared/utils/inputSanitizer`) ke bidang string `content`/`text`. Ketika
  `PII_REDACTION_ENABLED=true`, PII yang terdeteksi disensor dalam payload keluar. Ini independen dari
  `INPUT_SANITIZER_MODE` (yang hanya mengontrol kebijakan injeksi prompt). Ketika penyensoran dimatikan, catatan panggilan
  menghitung deteksi tanpa menulis ulang konten.
- **`postCall`** melakukan deep-clone pada respons, menjalankan `sanitizePIIResponse()` ditambah
  masker bentuk API Respons (`maskResponsesOutput` — mencakup
  `output_text` dan `output[].content[].text`). Jika ada penyensoran yang terjadi, respons yang dimodifikasi menggantikan yang asli.

Pengaman tidak pernah memblokir; ia hanya memberi anotasi (`meta.detections`,
`meta.redacted`) atau menulis ulang.

### Prompt Injection (`promptInjection.ts`)

Mendeteksi struktur adversarial dalam konten yang disuplai pengguna dan menegakkan
kebijakan yang dikonfigurasi. Perilaku dipengaruhi oleh variabel lingkungan dan opsi konstruktor:

| Pengaturan  | Variabel env                                                                                        | Default | Efek                                                                                                                                                                                                          |
| ----------- | --------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Diaktifkan  | `INPUT_SANITIZER_ENABLED`                                                                           | `true`  | Ketika `false`, pengaman melakukan short-circuit.                                                                                                                                                             |
| Mode        | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                     | `warn`  | Kebijakan injeksi: `block`, `warn`, atau `log`. (`redact` diterima untuk kompatibilitas lama tetapi tidak **menghapus** teks injeksi; permintaan penulisan ulang PII dikontrol oleh `PII_REDACTION_ENABLED`.) |
| Ambang blok | Opsi `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Tingkat keparahan minimum yang diperlukan untuk memblokir. Sedang hanya mengamati secara default.                                                                                                             |

**Prioritas Mode** (`getMode`): `options.mode` pemanggil →
`INJECTION_GUARD_MODE` **override fitur-flag DB** (Dashboard → Pengaturan →
Fitur Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Oleh karena itu, override dashboard menang atas variabel env, sehingga UI Fitur
Flags mengontrol pengaman yang berjalan secara langsung (tanpa restart). Pembacaan DB bersifat fail-safe:
jika terjadi kesalahan, pengaman kembali ke perilaku berbasis env, dan ketika tidak ada
override yang diatur, perilakunya identik dengan resolusi hanya env.

Sumber deteksi:

1. `sanitizeRequest()` dari `@/shared/utils/inputSanitizer` (set detektor
   yang digunakan di tempat lain dalam pipeline).
2. `DEFAULT_GUARD_PATTERNS` bawaan (saat ini `system_override_inline` dan
   `markdown_system_block`, keduanya dengan tingkat keparahan `high`).
3. `customPatterns` opsional yang diteruskan melalui opsi konstruktor (string, regex,
   atau catatan `{ name, pattern, severity }`).

Ketika `mode === "block"` **dan** setidaknya satu deteksi memenuhi ambang
keparahan, `preCall` mengembalikan `{ block: true, message: "Permintaan ditolak:
konten mencurigakan terdeteksi" }`. Dalam mode `warn`/`log`, pengaman mencatat tetapi
mengizinkan panggilan. Pembantu bersama `evaluatePromptInjection()` juga diekspor
untuk pemanggil yang perlu mengevaluasi prompt tanpa melalui registri.

**Batas Pemindaian (v3.8.20):** detektor hanya memeriksa **16 KB pertama** dari
teks prompt yang digabung — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) di
`src/shared/utils/inputSanitizer.ts`. Baik `detectInjection()` dan
`evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` sebelum menjalankan
loop pola. Direktif injeksi berada dekat bagian atas input, sehingga ini
membatasi CPU/GC regex pada payload multi-ratus-KB tanpa melemahkan deteksi (cf.
#3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Bekerja di **kedua** tahap, terakhir dalam rantai default (prioritas `95`). Menyensor
pola kunci API / token rahasia yang dikenal dari payload keluar (konten pesan,
argumen panggilan alat, hasil alat) **dan** respons penyedia, sehingga
kredensial yang ditempelkan ke dalam prompt (atau dikembalikan oleh hasil alat) tidak bocor
ke penyedia hulu atau kembali ke klien.

- **Hanya opt-in**, konvensi yang sama seperti penghapusan PII (Aturan Keras #20-adjacent):
  dinonaktifkan kecuali `settings.credentialRedactionEnabled === true` **atau**
  `CREDENTIAL_REDACTION_ENABLED=true`. Dengan ini dimatikan, penghalang adalah no-op —
  tidak pernah memblokir dan tidak pernah menulis ulang.
- `redactCredentials()` menjelajahi seluruh pohon payload/response (`walkValue()`,
  aman dari pencemaran prototipe, aman dari siklus melalui `WeakSet`) dan mengganti kecocokan dengan
  placeholder `[REDACTED:<type>]`, hanya mengkloning cabang yang benar-benar
  berubah.
- `CREDENTIAL_PATTERNS` mencakup kunci penyedia LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), token VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), kunci pembayaran (Stripe, Square), kunci
  cloud (kunci akses AWS, Twilio, SendGrid, Mailgun), kunci pribadi / JWT,
  string koneksi yang membawa kredensial (`mongodb://user:pass@...`, dll.), dan
  pola header generik `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Kunci berbentuk header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) dihapus secara struktural (hanya nilai, awalan skema seperti
  `Bearer `/`Basic ` dipertahankan) daripada melalui regex teks generik.
- Penghalang tidak pernah memblokir; ia hanya menulis ulang (`modifiedPayload` /
  `modifiedResponse`) dan memberi anotasi (`meta.credentialsRedacted`, `meta.count`).

Pengaman regresi: `tests/unit/credential-masker-guardrail.test.ts`.

## Kontrak Dasar (`base.ts`)

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
  block?: boolean; // true menghentikan rantai secara langsung
  message?: string; // ditampilkan saat pemblokiran
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // dikembalikan oleh preCall untuk menulis ulang permintaan
  modifiedResponse?: TValue; // dikembalikan oleh postCall untuk menulis ulang respons
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

Sebuah guardrail menandakan "tidak ada perubahan" dengan mengembalikan `void`, `{}`, atau
`{ block: false }`. Mengembalikan `modifiedPayload`/`modifiedResponse` akan menggantikan
nilai yang diteruskan melalui rantai untuk guardrail berikutnya.
`signal?: AbortSignal` membawa siklus hidup pemanggil ke dalam guardrail. Pembatalan permintaan merupakan pengecualian fail-open yang disengaja: penghubung media menghentikan pekerjaan dan melakukan pembersihan tanpa memulihkan media mentah ke target yang diketahui tidak mendukungnya.

## Registri (`registry.ts`)

Singleton `guardrailRegistry` menyediakan:

- `register(guardrail)` — menambahkan (atau mengganti berdasarkan nama yang dinormalisasi) sebuah guardrail dan
  mengurutkan ulang berdasarkan `priority` secara menaik.
- `clear()` / `list()` — utilitas administratif.
- `runPreCallHooks(payload, context)` — mengiterasi guardrail aktif, meneruskan
  payload melalui `modifiedPayload`, dan berhenti pada `block: true` pertama.
- `runPostCallHooks(response, context)` — alur yang sama pada sisi respons.
- `resetGuardrailsForTests({ registerDefaults })` — menghapus status dan secara opsional
  mendaftarkan ulang guardrail default untuk isolasi pengujian yang bersih.

Kedua runner mengembalikan `{ blocked, payload|response, results, guardrail?, message? }`
dengan `results` berupa array rekaman `GuardrailExecutionResult` yang menyertakan
kolom `blocked`, `skipped`, `modified`, `error`, dan `meta` untuk setiap guardrail,
yang berguna untuk penelusuran.

### Menonaktifkan Guardrail Per Permintaan

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` mengumpulkan daftar
nama guardrail tanpa duplikat yang harus dilewati untuk permintaan saat ini.
Sumbernya (semuanya opsional dan digabungkan):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` pada isi permintaan (tingkat teratas)
- `metadata.disabledGuardrails` pada isi permintaan
- Header `x-omniroute-disabled-guardrails` (atau versi lama
  `x-disabled-guardrails`)

Nilai dapat berupa array string atau string yang dipisahkan koma; nama
dinormalisasi menjadi kebab-case huruf kecil (`pii_masker` → `pii-masker`). Hasilnya
diteruskan melalui `context.disabledGuardrails` ke registri, yang melewati
guardrail yang cocok (`skipped: true` dalam `results`).

## Urutan Eksekusi

Untuk setiap permintaan yang mengalir melalui `src/sse/handlers/chat.ts` dan
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` membuat daftar lewati berdasarkan kunci API, body,
   dan header.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` menjalankan guardrail dalam urutan
   prioritas menaik:
   - Guardrail yang dinonaktifkan dicatat sebagai `skipped`.
   - `preCall` setiap guardrail dapat menulis ulang payload melalui `modifiedPayload`.
   - `block: true` pertama menghentikan rantai lebih awal dan handler mengembalikan
     respons penolakan guardrail.
3. Payload (yang mungkin telah ditulis ulang) diteruskan ke perutean kombo dan pengiriman
   ke upstream.
4. Setelah respons disusun, `guardrailRegistry.runPostCallHooks(...)`
   menjalankan rantai yang sama pada respons. `block: true` di sini membuang respons
   upstream.

Guardrail yang melempar pengecualian dicatat dengan `error: <message>` dan dicatat dalam log melalui
`logger.warn`, tetapi rantai tetap berlanjut — secara desain tetap terbuka saat terjadi kegagalan.

## Konfigurasi

Variabel lingkungan yang dibaca oleh guardrail bawaan:

| Variabel                              | Digunakan oleh            | Efek                                                                                                         |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Atur ke `false` untuk menonaktifkan deteksi sepenuhnya.                                                      |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Kebijakan injeksi: `warn`, `block`, atau `log`. Nilai lama `redact` tidak menulis ulang teks injeksi.        |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Mode untuk guard injeksi; juga merupakan flag fitur DB yang **menggantikan** variabel lingkungan (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Tingkat keparahan minimum yang ditolak oleh `MODE=block`: `high` (bawaan), `medium`, atau `low`.             |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Alias lama untuk `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                          |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Jika `true`, PII dalam permintaan disamarkan (tidak bergantung pada mode injeksi).                           |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Mengontrol perilaku masker pada sisi respons.                                                                |

Guardrail Modality Bridge membaca konfigurasi runtime dari penyimpanan pengaturan
berbasis DB (`getSettings()`), bukan dari variabel lingkungan. Kunci utama Vision adalah
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, dan
`modalityBridgeCacheMaxEntries`. Kunci lama
`visionBridge*` hanya diterima sebagai fallback pembacaan satu siklus yang telah didokumentasikan;
penulisan dari dasbor menggunakan kunci utama. Nilai bawaan dan resolver fallback
berada di `src/shared/constants/modalityBridgeDefaults.ts`, dengan konstanta lama
tetap dipertahankan di `src/shared/constants/visionBridgeDefaults.ts`.

Audio menggunakan `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, dan `modalityBridgeAudioMaxClips`, ditambah pengaturan
bersama `modalityBridgeCache*`. Audio tidak memiliki fallback kunci lama karena kunci-kunci
ini diperkenalkan bersama skema Modality Bridge.

Video menggunakan `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, dan
`modalityBridgeVideoTimeout`, ditambah pengaturan bersama `modalityBridgeCache*`.
Fitur ini dinonaktifkan secara bawaan karena FFmpeg/ffprobe merupakan dependensi operasional
opsional dan pemberian keterangan pada frame menambah latensi serta biaya model.

## Guardrail Kustom

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Anggaran harian terlampaui" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Langkah-langkah:

1. Buat `src/lib/guardrails/myGuardrail.ts` yang memperluas `BaseGuardrail`.
2. Implementasikan `preCall` dan/atau `postCall`.
3. Daftarkan saat impor (tambahkan dari `registerDefaultGuardrails`) atau
   panggil `guardrailRegistry.register(...)` saat runtime — registry akan mengganti
   guardrail sebelumnya yang memiliki nama ternormalisasi yang sama.
4. Tambahkan pengujian di bawah `tests/unit/` (contoh yang tersedia:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Pengujian

Gunakan `resetGuardrailsForTests()` di antara pengujian agar dimulai dari keadaan yang diketahui.
Berikan `{ registerDefaults: false }` untuk memulai dengan registry kosong dan
hanya mendaftarkan guardrail yang sedang diuji. Vision Bridge menerima injeksi dependensi
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge menyediakan titik injeksi
yang setara untuk pengaturan, kapabilitas, pemilihan model STT, pemeriksaan kredensial,
dan transkripsi. Dengan demikian, pengujian dapat menjalankan kedua alur tanpa akses DB
atau jaringan.

## Lihat Juga

- `src/lib/guardrails/` — implementasi
- `src/shared/utils/inputSanitizer.ts` — detektor bersama yang mendukung
  injeksi prompt dan penyamaran PII
- `src/shared/constants/visionBridgeDefaults.ts` — nilai default Vision Bridge dan
  daftar model forced-bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — nilai default runtime bersama Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — lapisan ortogonal (circuit breaker, cooldown)
- `docs/reference/ENVIRONMENT.md` — referensi lengkap variabel lingkungan

## Cakupan rute injection-guard & red-team (Fase 8 · Blok D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) mencakup semua rute
yang menerima prompt pengguna. Guard ini mematuhi `INJECTION_GUARD_MODE` (nilai default `warn` = hanya mencatat log;
`block` = mengembalikan HTTP 400 `SECURITY_001`).

| Jenis           | Rute                                                                                                                                                 | Mode default |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Teks (tersedia) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn         |
| Generatif       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn         |
| Data            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn         |

Ekstraksi teks (`extractMessageContents`) mencakup `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (setiap malam, `nightly-llm-security.yml`):** promptfoo memvalidasi bahwa setiap rute memblokir
korpus OWASP-LLM dalam `INJECTION_GUARD_MODE=block`; garak menjalankan probe (dilewati tanpa secret).
`moderations` disertakan untuk konsistensi — operator dalam mode blokir dapat mengecualikannya melalui
`resolveDisabledGuardrails`.

Workflow setiap malam (`.github/workflows/nightly-llm-security.yml`, cron + dispatch
manual) memiliki dua job:

- **`promptfoo-guard` (memblokir)** — menjalankan `promptfoo eval -c promptfooconfig.yaml`
  dengan `INJECTION_GUARD_MODE=block`. Setiap kasus adversarial (misalnya "abaikan semua
  instruksi sebelumnya…", jailbreak bergaya DAN) memastikan respons memuat
  `error.code === "SECURITY_001"`, yaitu guard benar-benar menolak permintaan tersebut.
- **`garak` (advisory)** — menjalankan garak `--probes promptinject,dan,leakreplay`
  terhadap instans OmniRoute lokal (`http://localhost:20128/v1`). Bergantung pada
  secret penyedia (`PROMPTFOO_PROVIDER_KEY`); dilewati dengan baik jika tidak tersedia dan diberi akhiran
  `|| true`, sehingga job ini melaporkan hasil tanpa menggagalkan CI.

Cakupan helper guard (`createInjectionGuard` / `withInjectionGuard`)
meliputi setiap rute `/v1` yang memuat prompt; teks prompt diambil dari
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` oleh
`extractMessageContents()` di `src/shared/utils/inputSanitizer.ts`.
