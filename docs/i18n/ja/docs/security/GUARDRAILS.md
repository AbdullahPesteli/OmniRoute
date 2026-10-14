# Guardrails (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **信頼できる唯一の情報源:** `src/lib/guardrails/`
> **最終更新:** 2026-08-29 — v3.8.51（Video Bridge の文字起こしの来歴は呼び出し元による宣言であり、
> まだサーバー側では検証されていないことを #11661 に基づき明確化）

ガードレールは、OmniRoute とアップストリームプロバイダーの境界で、安全性、ポリシー、およびコンテンツ変換を適用します。各ガードレールは、リクエストペイロード（`preCall`）とアップストリームレスポンス（`postCall`）を検査し、必要に応じて拒否、変換、または注釈付けできます。

システムは **フェイルオープン** です。ガードレールの実行中に例外が発生した場合、レジストリはエラーを記録し、リクエストを失敗させるのではなく、次のガードレールの処理を続行します。ブロックは常に明示的な判断（`block: true`）であり、偶発的に発生することはありません。

## ビルトインガードレール

レジストリは、インポート時に優先順位順に6つのガードレールを自動的にロードします
（`registry.ts` → `registerDefaultGuardrails()`を参照）:

| 優先順位 | 名前                | ステージ(s)    | ファイル              |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

優先順位が低い番号が**最初**に実行されます。

### ビジョンブリッジ (`visionBridge.ts`) — モダリティブリッジ PR-1

**非ビジョンモデル**を対象とした画像を含むリクエストを傍受し、
リクエスト全体をビジョン対応モデルにリルートするか、画像部分を
構成可能なビジョンモデルによって生成されたテキスト記述に置き換えます。
これにより、テキストのみのプロバイダーがマルチモーダルペイロードを
透過的に処理できるようになります。

フロー:

1. 対象モデルがすでにビジョンをサポートしている場合はスキップします
   （強制ブリッジリスト `isVisionBridgeForcedModel` に含まれていない限り）。
2. `extractImageParts(messages)` を介して画像部分を抽出します
   （`visionBridgeHelpers.ts`）、これは **統一メディア
   ディテクター** `detectMediaParts()` に委任されます
   （`open-sse/utils/mediaParts.ts`） — コンボ互換フィルターと共有される
   真実の唯一のソースです。抽出は、`replaceImageParts` が
   再結合できる形状のトップレベル部分にホワイトリストされます
   （抽出↔置換契約）：OpenAI `image_url`、Anthropic base64
   `source.type:"base64"`、Anthropic URL
   `source.type:"url"`、および Responses API `input_image`。
   ネストされたヒットやインジケーターのみの形状はコンボフィルターの
   材料であり、決して抽出されません。見つからなかった場合はスキップします。
3. `resolveVisionBridgeRuntimeSettings()`
   （`src/shared/constants/modalityBridgeDefaults.ts`）を介して
   ランタイム設定を解決します：新しい `modalityBridge*`
   設定キーが優先されます；レガシー `visionBridge*` キーは
   **1サイクルのフォールバック**（ロールバックウィンドウ）として残ります。
   ブリッジが無効な場合は、メディアトラバーサルの前にスキップします。
4. モードセレクター（`modalityBridgeVisionMode`、下の表を参照）が
   リルートと記述を決定します。リルートは `modifiedPayload` を返し、
   `model` のみが入れ替わり、メタ `{ rerouted, fromModel, toModel, imagesKept }` が追加されます。
5. 記述パス：画像を `maxImages` で制限し、タスク対応のプロンプトを構成し、
   記述キャッシュを参照し、ビジョンモデルを**並行して**
   （`Promise.allSettled`）呼び出し、`[Image N]: <description>` テキスト部分を
   その場所に挿入します。記述に失敗した場合は `null` が返され、
   元の画像部分は**保持されます**（#4012） — ただし、すべての
   記述が失敗した場合のコンボ記述パスでは、確認された非ビジョンの
   アップストリームには `(unavailable — no vision-capable provider connected)` スタブが
   代わりに返されます（#8430）。
6. `modifiedPayload` + メタ（`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`）を返します。

#### モードセレクター (`modalityBridgeVisionMode`)

| モード     | デフォルト | 挙動                                                                                                                                                                                                                                                                                        |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔          | レガシーヒューリスティック、変更なし（#6640/#7204）：非コンボ/`auto/` モデルは、元のモデルが使用可能な資格情報を持っていない限り、最良のビジョンモデルにリルートされます（その場合は記述）；コンボターゲットは常に記述します。                                                              |
| `describe` |            | 常に記述 — リルートブロックは完全にスキップされます；ユーザーが選択したモデルが常に応答します。                                                                                                                                                                                             |
| `reroute`  |            | 強制リルート：資格情報を保持したモデルのガードがバイパスされます。リルート-**ターゲット**資格情報ガードは依然として適用されます — 使用可能なビジョンタゲットが存在しない場合、リクエストは記述にフォールスルーし、生の画像がテキストのみのバックエンドに到達することはありません（#8430）。 |

強制モードは、**自動ヒューリスティックが実行される前**にショートサーキットします；`auto` の挙動は、PR-1ガードレールの前とバイト同一です。

#### APIキーのスコープ (`visionBridgeKeyScope.ts`)

呼び出し元のAPIキーが `allowedConnections`、クォータプール
（`allowedQuotas`）またはモデル（`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`）を制限している場合、
ブリッジはキーが使用できるリルートおよび記述モデルのみを選択し、
キーが使用できる接続でのみ動作します。記述呼び出しは常に
`x-omniroute-self-loop-key-id` ヘッダーを持つOmniRoute自己ループを通過するため、
受信したチャットリクエストはそのキーの接続とモデルポリシーを再度強制します。
`enforceApiKeyPolicy()` は、そのヘッダーを自己ループベアラーと一緒にのみ尊重するため、
アクセスを狭めることしかできず、解決できないIDは拒否されます。

キーに許可されたビジョンモデルがない場合、記述パスは脇に退き、
リクエストは変更されずに通過し、無効なガードレールと同じ
フェイルオープンの挙動を示します（メタ `{ skipped: true, reason: "no_permitted_vision_model" }`）。
キーなしのリクエスト、およびこれらの制限のないキーは、以前とまったく同じように動作します。

#### タスク対応の記述プロンプト (`modalityBridgeVisionTaskAware`)

デフォルトは **true** です。 `composeVisionPrompt()` (`visionBridgeHelpers.ts`) は
**最後のユーザーメッセージ**（500文字に切り詰められた）を基本の
説明プロンプトに追加し、ユーザーが実際に求めた内容に向けて
説明を誘導し（codex-vision-proxyパターン）、ビジョンモデルに
可視テキストを転写するように要求します。フラグがオフの場合、または
ユーザーのテキストがない場合は、基本プロンプトが変更されずに使用されます。

説明の自己ループのOpenAI互換リクエスト（`callVisionModelSingle()`
`visionBridgeHelpers.ts`内）は、常に `image_url.detail: "high"` を要求します —
無条件で、すべての呼び出し元/プロバイダーに対して、クライアントの信号に
依存せずに行われます。低詳細サンプリングは、まさにこのプロンプトが
要求するテキスト転写タスクのOCR精度を低下させるため、説明呼び出し自体は
元の受信リクエストが使用した詳細レベルに関係なく、常に高詳細を要求します。
これは内部の説明リクエストボディにのみ影響し、OmniRouteが呼び出し元の
`image_url.detail`をプライマリリクエストで転送する方法には変更を加えません —
そのデフォルトは別々に適用され、検出されたOpenCodeクライアントにのみ
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`)で行われます。
説明の自己ループのAnthropicワイヤーフォーマットブランチには
`detail`フィールドがなく、どちらのデフォルトにも影響を受けません。

#### 説明出力キャップ (`modalityBridgeVisionMaxChars`)

| キー                           | デフォルト | 範囲                 |
| ------------------------------ | ---------- | -------------------- |
| `modalityBridgeVisionMaxChars` | `0`        | `0` または 100–50000 |

`0`（デフォルト）は **制限なし** を意味します — `callVisionModel()` によって
返される説明は変更されずに通過し、既存の動作を保持します。100–50000の範囲内の
任意の値は、説明が `[Image N]: <description>` として再結合される前に
`…` サフィックスで切り詰められます
（`VisionBridgeGuardrail.preCall()` `src/lib/guardrails/visionBridge.ts`内）。
下流モデルが完全な転写を必要とする詳細重視のOCRタスクではこれを上げ、
おしゃべりなビジョンモデルのトークン使用を制限するために下げます。
ダッシュボードフィールドは、Visionタブの高度なパネルに存在し
（`modality-bridge-max-chars` `ModalityBridgeVisionTab.tsx`内）、
1から99の間の任意の値を100のフロアまで制限し、明示的な `0` はそのままにします —
`0` はそれ自体で有効なZod値です
（`z.union([z.literal(0), z.number().int().min(100).max(50000)])`）、単なる
「未設定」デフォルトではありません。

#### 説明キャッシュ (`modalityBridge/bridgeCache.ts`)

説明出力のためのメモリ内LRU + TTLキャッシュで、プロセス全体で共有されます。
キー = `sha256(imageRef + composedPrompt + configuredBridgeModel)` で
長さプレフィックスフレーミング（フィールド境界の衝突なし）。モデルコンポーネントは
**設定された** ブリッジモデルであり、実際に応答したモデルではありません —
`callVisionModel` は内部でフォールバックする可能性があり、試行ごとにキーを
設定するとキャッシュが断片化されます。失敗した説明は決してキャッシュされません。設定：

| キー                            | デフォルト | 範囲    |
| ------------------------------- | ---------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`     | —       |
| `modalityBridgeCacheTtlMinutes` | `60`       | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`      | 10–5000 |

#### リモート画像の正規化（自己ループ説明/base64取得）

ブリッジが **リモート** 画像を自ら取得する場合 — Anthropicの説明自己呼び出しと
claude-wire-formatのbase64変換
（`ensureBase64ImagesForClaudeWire`）、どちらも
`fetchRemoteImageAsDataUri()` `visionBridgeHelpers.ts`内を介して —
結果のデータURIは `normalizeDataUri()`
（`open-sse/utils/imageNormalize.ts`）を通過し、ビジョンモデルリクエストに
埋め込まれます。オーバーサイズの画像は **2048pxの長辺** にリサイズされます
（OpenAI/Anthropicがすでにサーバー側で適用しているリサイズキャップに一致）、
これによりアップロードバイト/レイテンシが削減され、ビジョンモデルが見るものは
変更されません。リサイズには `sharp` を使用し、動的インポートを介して読み込まれます：
そのネイティブバイナリが読み込まれないプラットフォームでは、`normalizeDataUri()` は
**決して例外をスローしません** — 元のバイトのパススルーにフォールバックするため、
説明/base64変換パスは常に機能し続けます。非画像バイト（デコード可能な画像を返さなかった
フェッチ）もそのまま通過します。この正規化は、ブリッジが自己呼び出しのために取得する
画像に限定されており、呼び出し元の生のパススルーペイロードには適用されません。
これはオプトインのみの変異原則（ハードルール #20）に一致しています。

#### 設定スキーマ + マイグレーション

新しい `modalityBridge*` キーは `updateSettingsSchema`
（`src/shared/validation/settingsSchemas.ts`）でZodによって検証されます：
`modalityBridgeVisionEnabled`、`modalityBridgeVisionMode`、`modalityBridgeVisionModel`、
`modalityBridgeVisionTaskAware`、`modalityBridgeVisionPrompt`、
`modalityBridgeVisionTimeout`、`modalityBridgeVisionMaxImages`、
`modalityBridgeVisionMaxChars`、`modalityBridgeCache*` トリオ、および
Audio Bridgeによって使用される `modalityBridgeAudio*` グループ。
マイグレーション `141_modality_bridge_settings.sql` は、既存のレガシー
`visionBridge*` 値を一致する新しいキーにコピーします（冪等性があり、オペレーター設定の
`modalityBridge*` 値を上書きすることはありません）；レガシーキーは
1回のリリースサイクルの間、読み取りフォールバックとして受け入れられます。

#### 透明性ヘッダー + 統計

説明変換されたレスポンスは
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
を持ちます（`modalityBridge/bridgeStats.ts`内の `buildModalityBridgeHeader()` によって構築され、
`src/sse/handlers/chatHelpers.ts`内の `withModalityBridgeHeader()` によってスタンプされます）。
再ルーティングされたリクエストには **ヘッダーはありません** — ペイロードは
変更されておらず、モデルのスワップはすでにレスポンスボディの `model` フィールドに
表示されています。

`GET /api/modality-bridge/stats` (管理認証、`GET /api/settings` と同じ階層) は、`vision`、`audio`、および `video` の各モダリティごとのメモリ内カウンター `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` を返します。`averageLatencyMs` はその分母として `latencySamples` を使用し、すべての試行を使用しません。タイミングのない操作はゼロミリ秒のサンプルを作成しません。`bridged` は成功した変換のための後方互換性のあるエイリアスとして残り、失敗した試行はこれを増加させません。カウンターはプロセス再起動時にリセットされる設計になっています（テレメトリー、会計ではありません）。

#### ダッシュボード設定

専用のダッシュボードページは `/dashboard/settings/modality-bridge` です。そのURLアドレス可能な `Vision`、`Audio`、および `Video` タブは、`tab` 値を切り替えながらクエリパラメータを保持します。Vision タブでは、機能の有効化、モード、モデル選択（自動デフォルトを含む）、タスクに応じたプロンプト、高度なタイムアウト/画像/説明長/キャッシュ制限、ランタイムカウンター、および保護されたサンプルリクエストが公開されています。Audio タブもライブで、機能の有効化、STT専用モデルピッカー（Auto、タイムアウト/最大クリップ制限）、オーディオカウンター、および `input_audio` サンプルテストを公開しています。Video タブは機能しており、FFmpeg/ffprobe のランタイム状態を報告します — プローブが飛行中または完了できなかった場合は `unknown`、プローブがクライアント側でスキップされた非ループバックダッシュボードホストでは `restricted`、プローブが確認されて欠落している場合は `unavailable`、または FFmpeg/ffprobe のバージョンがある場合は `available` です — モデル/フレーム/ビデオ/タイムアウト制限を保持し、モデルピッカーを視覚対応モデルにフィルタリングし、ビデオカウンターを公開します。

AI 設定の下にある以前の Vision Bridge カードは新しいページへの互換性リンクです。もはやフォームの二重コピーを所有していません。メディアプロバイダーは、既存の Speech-to-Text プレイグラウンドを削除することなく、Image-to-Text および Speech-to-Text ワークフローを対応する Modality Bridge タブにリンクします。

**自己ループ入場バイパス:** describe コールが OmniRoute の独自の `/v1` 自己ループ（非標準プロバイダモデル）を通過する場合、サブリクエストは `x-omniroute-admission-bypass: internal` を送信し、解決された自己ループ資格情報で認証されます — ローカルモードの `sk_omniroute` センティネル、またはオペレーターが設定した `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` 環境キー (#1350) により、`REQUIRE_API_KEY=true` のデプロイメントでも describe コールを実行できます。このバイパスは、正確な資格情報に対してのみ尊重されるため、外部クライアントはヘッダーを使用して入場をスキップすることはできません。

レガシーデフォルトは `src/shared/constants/visionBridgeDefaults.ts` に存在します。新しいモード/タスク対応/キャッシュデフォルトと設定リゾルバは `src/shared/constants/modalityBridgeDefaults.ts` に存在します。ガードレールは、テストが偽の `getSettings` および `callVisionModel` 実装を注入できるように `deps` コンストラクタオプションを公開します。

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

オーディオを含むチャットリクエストがオーディオ入力を受け入れることが知られていないターゲットに到達する前にインターセプトします。チャットリクエストを再ルーティングすることは決してありません：オーディオ部分は既存の OpenAI 互換のマルチパートエンドポイントを通じて転写され、選択されたチャットモデルはテキストの転写で続行されます。

フロー：

1. `getResolvedModelCapabilities()` を通じて `supportsAudio` を解決します。明示的なプロバイダレジストリメタデータが優先され、次に静的モデルメタデータ、次に同期された `modalities_input` です。`audio` を含まない宣言された入力リストは `false` です。能力の証拠がない場合は `null` です。`false` と `null` の両方が保守的なブリッジをアクティブにし、`true` はそれをバイパスします。
2. `modalityBridgeAudio*` 設定を解決し、共有の `detectMediaParts()` デテクタを通じて各メッセージからスプライス可能なトップレベルのオーディオ部分を抽出します。サポートされているワイヤー形状は OpenAI の `input_audio`、`audio_url`、および `source.media_type: "audio/*"` です。ネストされたオーディオはルーティングのために検出されますが、スプライスパスによって削除されることはありません。作業は `modalityBridgeAudioMaxClips` によって制限され、後の部分はそのまま残ります。
3. 設定された `provider/model` を尊重するか、`selectAudioBridgeModel()` に `AUDIO_TRANSCRIPTION_PROVIDERS` を安定したカタログ順に歩かせ、使用可能なアクティブプロバイダ資格情報を持つ最初のモデルを選択させます。
4. `callAudioTranscription()` は base64/data-URI オーディオをマルチパート `file` に変換するか、DNS ピンニングと 25 MB の制限を持つ公開専用のアウトバウンドガードを通じてリモート `audio_url` をダウンロードします。その後、ファイルと選択されたモデルをローカルの `/v1/audio/transcriptions` 自己ループに POST し、`resolveSelfLoopBearer()` で認証されます。既存の転写ルートは通常の資格情報の検索、クールダウン/レート制限の処理、およびプロバイダのディスパッチを行います。
5. 成功したコールはその部分を `[Audio N]: <transcript>` に置き換えます。コールは `Promise.allSettled` で実行されます：個々の失敗は元のオーディオ部分を保持します (#4012 契約)。すべてのコールが失敗し、ターゲットが `supportsAudio === false` であることが証明された場合、部分は `[Audio N]: (unavailable — no STT provider connected)` になります (#8430 契約)。未知のターゲット（`null`）の場合、すべての失敗結果はそのまま残ります。使用可能な STT 資格情報がないことが証明されたテキスト専用ターゲットは、ネットワークコールを発行することなく同じ明示的なスタブを受け取ります。

成功した転写はプロセス全体の Modality Bridge LRU/TTL キャッシュを使用します。キーはオーディオ参照、安定した `audio-transcription` 操作ラベル、および選択された STT モデルを組み合わせたものです。失敗は決してキャッシュされません。オーディオの試行は共有の `bridged`、`cacheHits`、`failures`、および `lastUsedAt` カウンターを更新します。変換されたレスポンスは `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` を持ち、変更されていないリクエストは Audio Bridge セグメントを受け取りません。

ランタイム設定は DB バックアップされ、Zod によって検証されています：

| キー                          | デフォルト | 範囲               |
| ----------------------------- | ---------- | ------------------ |
| `modalityBridgeAudioEnabled`  | `true`     | —                  |
| `modalityBridgeAudioModel`    | `""`       | Auto または STT ID |
| `modalityBridgeAudioTimeout`  | `60000`    | 1000–300000        |
| `modalityBridgeAudioMaxClips` | `3`        | 1–10               |

共有キャッシュは `modalityBridgeCacheEnabled`、`modalityBridgeCacheTtlMinutes`、および `modalityBridgeCacheMaxEntries` によって制御されます。

### ビデオブリッジ (`videoBridge.ts`, `videoBridgePipeline.ts`)

ターゲットが知られていないネイティブビデオサポートを持つ呼び出しの前に、Chat Completions `messages` と Responses API `input` のトップレベルビデオパーツをインターセプトします。サポートされている形状は `input_video`、`video_url`、`video_source`、HTTPS URLs、および `data:video/*;base64,...` データURIです。テキスト内のプレーンファイル名はビデオとして扱われません。

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) はリクエストのトラバーサル、能力/ポリシーチェック、リクエストごとの集約、およびレスポンスペイロードを担当します。ビデオごとの作業 — 取得、全結果キャッシュ、フレームシーケンスの記述（呼び出し元が宣言した音声トランスクリプトを融合する）、および試行ごとのメトリクス/中止/クリーンアップ — は `videoBridgePipeline.ts` の `processVideoPart` の背後に隠されており、`preCall` のループ内でビデオパートごとに一度呼び出されます。そのモジュールは、バイトを取得しサンプリングされたフレームを抽出する `VideoMediaBrokerPort`、呼び出し元が宣言した音声トランスクリプトをサンプリングされたキャプションと融合する `VideoAudioTranscriptionPort`、およびレガシーの生ストア形状である `VideoDrilldownPort` の明示的なポート境界も定義します。プロダクションSTTとフレーム保持は、`createVideoSttAdapter` と `createVideoDrilldownAdapter` を通じて記述ポートの周りに構成されます。後者は共有の不透明ハンドルライフサイクルを使用します。

公開の `/v1` リクエストパスは、サブプロセスをインポートまたは呼び出すことはありません。リモートビデオは50 MiBの制限内でダウンロードされ、インラインのbase64ビデオは、モデル/メッセージ/フレーミングエンベロープが公開のJSONリクエスト受け入れ制限の50 MiB内に収まるように、保守的に36 MiBのデコードされたビデオごとの上限があります。インラインの長さとデコードサイズの見積もりは、割り当ての前にチェックされます。最初のリモートURLとすべてのリダイレクトにはHTTPSが必要で、既存の公開専用のアウトバウンドガードとDNSピンニングを使用します。バイトはその後、正確な内部 `POST /api/modality-bridge/video/extract` ブローカ境界を越えます。そのルートは `LOCAL_ONLY` および `SPAWN_CAPABLE` であり、プロセスごとに認証された信頼できるループバックリクエストのみを受け入れ、URL、ファイルシステムパス、実行可能ファイル、または引数リストは決して受け入れません。APIボディサイズパイプラインとハンドラーのインクリメンタルボディリーダーは、独立して50 MiBのブローカー入力上限を強制します。その制約されたキューは、一度に1つの抽出を実行し、4つの保留中のジョブを許可し、保留中の入力を100 MiBに制限します。

ブローカー内で、`ffprobe` はプライベートローカルファイルを読み取ります。固定フォーマットのホワイトリストは、プレイリストおよびマニフェストフォーマットを除外します。許可されたMOVファミリーコンテナについては、外部MOVデータ参照はデフォルトで無効になっており、固定コマンドはそれらにオプトインしません。`ffprobe` と `ffmpeg` は、`file` のみのプロトコルホワイトリスト、1つのスレッド、固定引数配列、シェルなし、`PATH` から解決された実行可能ファイルを使用します。添付された画像カバーのストリームは再生可能な候補ではありません。すべての再生可能なストリームは制限を満たさなければならず、明示的なデフォルトストリームが決定論的に最も低いインデックスのフォールバックの前に優先されます。ビデオは600秒、各次元8,192ピクセル、33,554,432ソースピクセルに制限されています。FFmpegは1〜16の中間JPEGフレームをサンプリングし、長辺を最大1,024ピクセルにスケールダウンし、小さい入力をアップスケーリングすることはなく、URLを受け取ることはありません。サンプリングはデフォルトで `uniform` です。オプションの `scene_aware` および実験的な `segment_aware` ポリシーは、すでに検証されたローカルストリームに対して追加の固定FFmpegパスを実行し、制限された `showinfo` シーンタイムスタンプを選択し、検出器の失敗、タイムアウト、形式が不正な出力、または空の候補セットの場合には決定論的に同じ均一な中間点にフォールバックします。セグメント認識モードは、検証されたシーン間隔に比例して中間サンプルを割り当てます。セグメント認識の証拠とフォールバック動作は以下に詳述されています。厳格な16フレームの上限は、すべてのポリシーで選択後に適用されます。シーン認識リクエストが1フレームの予算しかない場合、アクティブなフルビデオまたはフォーカスウィンドウの均一な中間点を使用し、`policyEffective: uniform` を報告します：単一の選択されたシーンフレームは両方の時間的端を保持することはできません。呼び出し元はオプションで有限のフォーカスウィンドウ（`start`/`end` 秒）を提供できます；境界はメディアの持続時間にクランプされ、逆または無限のウィンドウは拒否され、すべてのサンプリングポリシーは正規化された間隔内でのみ実行されます。結果のウィンドウはサンプリングメタデータおよび信頼できない説明プレフィックスに含まれ、下流のモデルがフルタイムラインから焦点を絞った抜粋を区別できるようにします。

セマンティックキャプションフォーカスは別の明示的な設定です。デフォルトの `full` 分析モードは、既存のフレームプロンプトを保持し、リクエストテキストをキャプションモデルに転送することはありません。`focused` モードでは、ブリッジは同じChatまたはResponsesコンテナから最新の非空のユーザー作成 `text`/`input_text` のみを読み取り、それをNFCに正規化し、制御文字とホワイトスペースを圧縮し、500 Unicodeコードポイントに制限します。空の結果は正確な `full` プロンプトにフォールバックします。使用可能なヒントは、専用の信頼できないユーザーコンテキストブロック内でJSONとしてシリアライズされ、観察可能な詳細を優先することのみができます；メディア内で可視または可聴の指示に従うことに対する別の警告を上書きすることはできません。テキストフォーカスは `start`/`end` を推測したり、時間的サンプラーを変更したりすることはありません。

#### FU-07 構造的セグメント証拠

`segment_aware` は、すでに検証されたローカルビデオストリームに対して、1回の制限付き事前分析パスを使用します。固定フィルターチェーンは、まず最大320ピクセルの幅にスケーリングし、シーンの変化やフリーズ間隔を検出し、次に1秒あたり1フレームをサンプリングして、ぼかし、平均輝度、空間/時間情報を取得します。このパスは、600の構造サンプル、1つのFFmpeg/フィルタースレッド、同じ`file`専用プロトコルおよびコンテナのホワイトリスト、1 MiBのプロセス出力制限、ブローカーの共有中止/期限内で最大30秒に制限されています。リクエストからコマンド、フィルター、パス、またはURLを受け入れることはありません。

構造的値は決定論的なサンプリング証拠であり、意味的なビデオ理解ではありません。これらは、主題、アクション、キャプション、スピーチ、またはユーザーの意図を推測することはありません。シーンとフリーズの境界はセグメントを形成し、フリーズカバレッジ、ぼかし、露出、空間的詳細、および時間的変化は、既存の1〜16フレームの予算がどのように割り当てられるかにのみ影響します。完全にフリーズしたセグメントは1フレームに制限され、非フリーズセグメントは残りの予算を競います。境界がフレームよりも多い場合、均一なタイムラインカバレッジが保持されるため、迅速な早期カットが長いトレーリングセグメントを隠すことはできません。フリーズ境界の1秒の分析解像度内のシーン境界は統合されます。

フィルターの欠如、形式が不正な/空の証拠、検出器エラー、または制限付き事前分析のタイムアウトは、正確な均一中点ポリシーに対してオープンに失敗します。呼び出し元の中止やブローカーの期限はオープンに失敗せず、進行中のサブプロセスを終了させ、後のフレーム抽出を防ぎ、プライベートな一時ツリーは`finally`で削除されます。

`scripts/perf/video-bridge-fu07-eval.ts` は、重複排除後のキャプションコールの節約、密なモーション予算の割り当て、ぼかし/露出/SI-TI証拠、長いテールを持つ迅速なカット、徐々にフェードする偽陽性のための決定論的なリアルFFmpegフィクスチャを生成します。事前分析の壁時間を記録し、`/usr/bin/time` が利用可能な場合は、子プロセッサのCPUとピークRSSを記録します。その品質チェックは構造的オラクルのみです。リアルキャプションモデルの品質は`HOLD`のままであり、このハーネスには認可されたエンドポイントやフリーズした審査者が存在しません。金銭的な節約も、`--caption-cost-per-call-usd` が明示的な正のコールあたりの見積もりを提供しない限り、`HOLD`のままです。このスクリプトは、いずれの結果も作り出すことはありません。

各フレームは4 MiBに制限され、すべての生フレームは合計23 MiBに制限され、シリアライズされたブローカーの応答は32 MiBに制限されます。プライベートな一時ディレクトリは`finally`で削除されます。OmniRouteはFFmpegをバンドルせず、カスタム実行可能パスを受け入れません。キャプション処理の前に、ブリッジは保守的な視覚的重複排除パスを適用します：各JPEGは16×16のグレースケールバッファに縮小され、保持された最後のフレームとのみ比較されます。1フレームを超えるキャプション予算が要求された場合、抽出はその予算の最大2倍の制限付き候補プールを提供し、16フレームを超えることはありません。要求された上限は重複排除の後にのみ適用され、最初と最後に選択された候補は、予算が少なくとも2のときに最終的なスリム化中に保持されます。バージョン管理された`grayscale-16x16-mean-cells-v2`ポリシーは、平均輝度のデルタと、正規化されたデルタが少なくとも0.05であるサムネイルセルの比率の大きい方を使用します。重複の閾値は、予測可能性のために選ばれた定数0.04です。これはランタイム設定として公開されるのではなく、予測可能性のために選ばれました。この二次的な高コントラスト信号は、小さな動きや可視テキストの変化を保持し、平均のみの比較が隠す可能性のあるものです。コンパレータやデコーダのエラーはオープンに失敗し、カバレッジを保持します。出力メタデータは、抽出された候補、成功したフレーム、および削除された視覚的重複を分離します。

明示的にマークされたビデオ部分は、タイムスタンプ付きのコンタクトシートを要求することができます。ブリッジは最大4列、16フレームのJPEGグリッドを構築します。各512ピクセルのセルは、そのソースのタイムスタンプを高コントラストの下部バンドに焼き付け、同じタイムスタンプは下流の関連付けと監査のためにテキストメタデータに残ります。完全なJPEGは32 MiBに制限されます。`sharp` がグリッドをデコードまたは構成できない場合、ブリッジは個々のJPEGフレームにフォールバックします。クライアントの中止は、シート操作を通じて伝播します。

プロモーション証拠は、合成構成マイクロベンチマークとは意図的に分離されています。`scripts/perf/video-bridge-contact-sheet-eval.ts` は、リアルなOpenAI互換のビジョンモデルのためのスキーマバージョン管理されたA/Bハーネスを定義します。プロバイダーが報告したトークン、エンドツーエンドの壁のレイテンシ（シート構成を含む）、モデルコールのカウント、およびマニフェストで定義された事実の保持を測定します。生のモデル応答はレポートに書き込まれず、SHA-256のダイジェストと一致した事実IDのみが保持されます。このハーネスは、`--execute-real` が渡され、`--model`、`OMNIROUTE_BASE_URL`、および `OMNIROUTE_API_KEY` が設定されない限り、ネットワークや有料モデルコールを行いません。その明示的なリアル実行がない限り、その機械可読の判決は`HOLD`のままです。合成ペイロード/コールカウントの測定のみはプロモーション証拠ではありません。

別の`scripts/perf/video-bridge-promotion-eval.ts` は、FU-07またはFU-09の観察を消費します。プロモーションの受け入れには、すべての8つの合成シナリオタイプと、少なくとも3回の測定された繰り返しが必要です。各役割とケース、すべての10の宣言されたメトリック、フリーズしたメディア/プロンプト/期待される事実/設定のダイジェスト、ユニークな観察ID、および検証されたシードされたA/B順序が必要です。実行の領収書は、コーパスのダイジェスト、正確な候補SHA、およびモデルのリビジョンを結びつけます。欠落または無効な測定は`HOLD`のままであり、CPUが30秒を超える、ピークRSSが512 MiBを超える、または事前分析が30秒を超える場合も含まれます。これらは証拠受け入れの上限であり、新しいランタイムRSSの強制保証ではありません。

FU-07は、少なくとも98%の品質保持と、p95レイテンシがベースラインの1.2倍を超えないことを要求します。また、同等の平均キャプションコールにおいて、0.05の絶対的なケースバランスの平均リコール改善、または平均ポストデデュープキャプションコールが少なくとも10%少ないことのいずれかが必要です。FU-09は、少なくとも0.85の品質、95%の保持、20%のp95レイテンシ削減、10%のトークン削減を要求します。重要な事実の喪失、注入の遵守、または使用の欠如は昇格を妨げます。一度の実行では何も昇格できません：`--previous-report`は、同じポリシー/モデルの改訂/候補/コーパスの2つの異なる、重複しない、連続的に適格な実行を確認します。サンプリング実験は、コンタクトシート実験を確認できません。

コレクターは、メモリ内で応答をスコアリングし、`responseDigest`とメトリクスおよび観察バインディングを保存し、応答テキストは保存しません。コンシューマは、レガシーの生の観察も読み取りますが、そのテキストをレポートにコピーすることはありません。各観察に対して、`responseDigest`または`rawResponseText`のいずれかが正確に受け入れられます。バージョン管理された許可リストは空のままで、変更不可能な`hold`がデフォルトです。適格なエントリには、その証拠参照、ポリシー、モデルの改訂、正確な候補SHA、マニフェストダイジェスト、および2つの異なる実行IDが必要です；矛盾するコンテキストは拒否されます。これらのメタデータは監査契約であり、参照されたファイルが真の測定値を含む証拠ではありません。エントリを追加する前に、実際のレシートを確認してください。管理統計エンドポイントとビデオダッシュボードは保守的な準備状況を公開します。構成されたモデルエイリアスだけでは、その改訂や実行中の候補SHAを確立することはできないため、現在のダッシュボードは他の実行コンテキストからの適格性を再利用するのではなく、`HOLD`を報告します。明示的な実験選択は昇格とは別に保持されます；デフォルトは自動的に変更されません。

呼び出し元は、すでに整列されたテキストを持っている場合、サポートされているビデオ部分にオプションの`transcript.cues`配列を添付できます。各キューは、`text`、調査された期間内の有限な`start`/`end`間隔、およびホワイトリストに登録された`source`（`client`、`embedded`、または`audio-bridge`）を持たなければなりません；`confidence`はデフォルトで`1`であり、`0`と`1`の間で維持されなければなりません。正確な重複キューは統合されます。OmniRouteはこのメタデータからの転写を開始しません：検証されたキューは、ソース、信頼度、および間隔とともに記述された結果にコピーされ、フレームキャプションとともに信頼されない観察としてレンダリングされます。無効、範囲外、または出所のないテキストは、キャプションストリームに混入するのではなく拒否されます。両方のリクエストボディトランスクリプトチャネルは、自己主張された`embedded`または`audio-bridge`ラベルを含む供給された出所を`client`に正規化します。信頼されたラベルを割り当てることができるのは、サーバー所有のアダプターのみであり、コード専用の`trustedSource`引数を通じて行われます；リクエストJSONフィールドはその引数に到達できません。トランスクリプトテキストは、出所に関係なく信頼されないメディア由来のコンテンツであり、決して認証を決定してはなりません。

高度な呼び出し元は、同じビデオのために`audioTranscript`トラックを提供することができます；これはサーバーの転写の証明ではなく、クライアント提供のテキストとして扱われます。フュージョンシームは、視覚および音声の観察を1つの締切と中止信号の下で実行し、共通のタイムラインで順序付け、正確な重複を統合し、片側のみが成功した場合に部分的な結果を報告します。無効な`audioTranscript`はその部分的な結果に劣化します — 視覚的な説明は保持され、音声ブランチはサニタイズされた失敗コードを記録します — 全体のビデオが失敗するのではなく。ブランチごとの可用性、部分フラグ、およびサニタイズされた失敗コードは、記述された結果、ガードレイルメタデータ（`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`）、結果キャッシュメタデータ、およびブリッジフュージョンカウンターに保持されます。デフォルトのビデオブリッジパスは、音声からテキストへの変換を呼び出したり、2番目のメディアコピーをダウンロードしたりしません；その明示的なトラックがない限り、ビデオのみのままです。

**トランスクリプト保持 (#12150 P1)。** これは、ビデオブリッジ（オプトイン自体）がトランスクリプトキューをレンダリングするたびに自動的に適用されます — 別の保持フラグはありません。リクエストが任意のトランスクリプトキュー（呼び出し元が宣言した`transcript`または融合された`audioTranscript`）をレンダリングすると、ガードレイルはそれを`videoBridgeObserved`としてマークし、ビデオ説明の赤acted影を生成します — 各キューの自由テキストボディが`[redacted-video-transcript]`に置き換えられる同一のレンダリングで、文字列が組み立てられる前に構造化されたキューフィールドを置き換えることによって構築されます（平坦化されたテキストを解析することによってではなく、したがってキューの内容 — 敵対的または通常の、`[inaudible]`や`[music]`のように`]`を含むボディを含む — は生き残ることができません）。保持されたコールログリクエストボディは、各ビデオ由来のテキスト部分をその赤acted影に置き換え、内容の等価性によって一致します；`fullText`アンカーは、完了したプレコールガードレイルペイロードから再読み込みされるため、後のチェーンガードレイル（PIIおよび資格情報マスキング、優先度10/95）が説明テキストをその場で書き換え、システムプロンプト/ハンドオフ/メモリ注入がメッセージ配列を再形成した後でも、一致は成功します。モデルに送信されるボディは変更されません。観察されたリクエストは、耐久性のあるメモリをも populated しません（リクエストおよび応答由来の抽出はスキップされます）、したがってモデル自身の応答はメモリにトランスクリプトテキストをエコーすることはできません。

**生ビデオフィールド (#12430)。** ブリッジが有効であり、ネイティブビデオサポートが不明または存在しない場合、定義された`transcript`/`audioTranscript`フィールドは、説明の失敗や`maxVideos`制限の後でも`videoBridgeObserved`を有効にします。`null`および空の文字列もカウントされます；欠落フィールドおよび非ビデオメタデータはカウントされません。保持されたコピーはこれらのフィールドを赤actedするか、リクエストを省略し、キャッシュ/メモリはバイパスされます。プロバイダペイロードは変更されません。

追加の保持コピーは、同じ観測リクエスト信号を使用します。生の
プレガードレールクライアントリクエストスナップショット、メモリ内の保留中リクエスト、および早期拒否リクエストログは、構造的にビデオ部分のトランスクリプトフィールドを置き換えます。
パイプラインステージとコンテキストハンドオフによって合成された文字列プロンプトは、保持リクエストボディシンクで削除されます。保持された `video_content_removed` マーカーは、`previous_response_id` の継続を失敗させ、意図的に破棄されたテキストを再構築するのではなく、閉じるようにします。観測リクエストがログ記録前にそのパートごとの赤action影を失った場合、または複数のビデオ影のうちの1つが後のリクエストの変異後に一致しない場合、保持されたリクエストボディは、部分的に赤actionされたトランスクリプトを保持するのではなく、完全に省略されます。

観測リクエストに対して、モデルの応答は構造化されたキュー境界なしにトランスクリプトの任意の部分を引用することがあります。そのため、保持されたコールログの `responseBody` は省略マーカーによって置き換えられます。詳細なパイプラインアーティファクト（上流/クライアントボディやストリームチャンクを含む可能性があります）は保持されません。セマンティック、冪等性、および推論リプレイキャッシュは、そのリクエストの読み取りと書き込みをバイパスします。プロバイダリクエストとクライアントが可視化する応答は変更されません。詳細なアーティファクトが省略されると、早期のキープアライブバイトは一時バッファから排出されます。Kiroの不正なEventStream警告は、ペイロードバイト数のみを報告し、その内容やJSONパーサーの生のエラーは決して報告しません。
これは、すべての無関係なプロバイダ/プラグイン診断が監査されたことを主張するものではありません。より広範な保持シンクスイープは #11658 で追跡されています。

内部の `/api/modality-bridge/video/drilldown` ライフサイクルは、別のループバック/トークン認証キャッシュ基盤です。すべての操作には、標準の不透明なプリンシパルIDも必要です。プロダクションコーラーが有効化される前に、そのIDを認証されたテナントから導出し、クライアントが選択した値を転送してはなりません。キャッシュキーは、そのプリンシパルを標準のセッションおよびビデオ参照IDにバインドし、SHA-256から導出されたキーのみを保存し、読み取りと削除のスコープを同じプリンシパルに制限します。キャッシュは、エントリごとに最大16の導出JPEGフレームを保存し、10分後に期限切れになり、制限された `start`/`end` 読み取りまたは明示的なセッション削除をサポートします。

各プリンシパルは、16エントリおよび64 MiBの標準JPEGデータに制限されています。これらの制限は、グローバルな64エントリ/256 MiBの上限とは独立しています：プリンシパルのクォータ圧力は、グローバルLRUの排除が考慮される前に、そのプリンシパルの最も最近使用されていないエントリのみを排除します。期限切れのエントリは、キャッシュアクティビティに基づいてプリンシパルとグローバルの両方の会計から掃除され、キャンセルや検証の失敗は部分的な置き換えをコミットしません。

キャッシュは、非標準のBase64、過剰なパディング、非JPEGメディア、不正なまたは切り捨てられたJPEG、および制限されたフルイメージ `sharp` デコード中に警告を生成するJPEGを拒否します。受け入れられた各画像は標準JPEGとして再エンコードされ、呼び出し元のフィールドを信頼するのではなく、デコードされたバイトから幅と高さを導出し、トレーリングポリグロットバイトを保持するのではなく破棄します。制限された標準圧縮バッファのみが両方のクォータに請求されます。JSONワイヤ制限には、32 MiBのデコード入力上限に対するBase64オーバーヘッドが含まれます。すべての
保存された導出は、その検証されたJPEGフォーマット/解像度、サンプリングポリシー、導出バージョン、作成時間、サーバー計算されたコンテンツハッシュ、およびハッシュ化された親参照に加えて、信頼できる呼び出し元の親コンテンツハッシュを記録します。キャンセルは、原子的なキャッシュコミットの前に非同期デコード/ハッシュフェーズ間でチェックされます。

プロダクションプロデューサーは、成功した視覚分析の後にのみ、すでに導出されたブローカーフレームを再利用し、2回目のビデオダウンロード/抽出は行いません。これは、オペレーター `modalityBridgeVideoDrilldownEnabled=true`、厳密なパートごとの `drilldown: true`、および認証されたAPIキーのレコードIDを必要とします。クライアントが宣言したプリンシパル/セッション値は、所有権を確立することはありません。これらの3つの条件がすべて満たされない場合、追加のフレームをハッシュ、リサイズ、または保持しません。保持の失敗は、使用可能な視覚応答を保持します。同意されたリクエストは、全ビデオ結果キャッシュをバイパスするため、キャッシュされた結果は決してハンドルを再生しません。

成功したJSONおよびSSE応答は、制限された `x-omniroute-video-drilldown` ヘッダーに最大4つの不透明なハンドルを公開します。認可されたブラウザのオリジンは、CORSオリジンポリシーを広げることなくそのヘッダーを読み取ることができます。新しいハンドルは `v1.<32-byte random base64url token>` を使用し、レジストリはそのSHA-256ハッシュのみを保持します。リーダー/ヘッダーパーサーは、レガシーの64-16進トークンも受け入れます。認証されたパブリックコンシューマは
`GET /api/v1/video-bridge/drilldown?handle=...` であり、`modalityBridgeVideoDrilldownRemoteEnabled=true` によって独立してゲートされます。明示的に保持された偽は、レガシーの `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` 環境フォールバックが有効になっている場合でも、アクセスを取り消します。プロダクション保持には、類似のレガシー `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED` フォールバックがあります。両方のフォールバックはデフォルトでオフです。

コンシューマは、認証されたキーから所有権を導出し、キーのポリシーを適用し、未知、期限切れ、または他のキーのハンドルに対して同じ404を返します。`variant=preview|standard|detail`（最大JPEG寸法320/640/1280、決してアップスケールされない）、`limit=1..8`（またはレガシーの `frames` エイリアス、両方は決して使用しない）、ゼロベースの `page`、およびオプションの `start`/`end` フォーカス秒を受け入れます。重複した
クエリキーと逆のフォーカスウィンドウは拒否されます。返された各バリアントには、その実際のコンテンツと実際の解像度メタデータのハッシュがあり、保持されたソースにリンクされています。バリアントは、追加の保持コピーとして保存されるのではなく、読み取り時に導出されます。JSON応答は、Base64/エンベロープを含めて32 MiBに制限されており、サイズオーバーのページは413を返し、クライアントはより少ないフレームを要求する必要があります。読み取りは、各リサイズの周りでキャンセルをチェックし、返す前にハンドルの有効性を再確認します。所有者による `DELETE` は冪等です；削除またはTTLの期限切れは、保持されたソースと使用会計を解放します。

共有ストアはプロセスローカルです：ハンドルは再起動時に期限切れになり、独立したOmniRouteプロセス間で転送できません。管理統計は、効果的な保持/リモートポリシーと、保持されたエントリ/バイトのみを集計し、メディア、参照、主要ID、またはハンドルは決して表示しません。ビデオ設定パネルはこれらの値を表示し、両方の同意スイッチを保持できます。この実装ドキュメントは、ライブデプロイメントやプロモーションの証拠ではありません。実際のモデルの受け入れは別途追跡されます。

フレームは、設定されたビデオモデルで順次キャプションされます。空のビデオオーバーライドはビジョン設定を継承します。両方が空の場合、ビジョンオートルーターは効果的なビジョン対応モデルを選択します。成功したキャプションは、元の部分を安定した `[Video description:` プレフィックスで置き換え、テキストを信頼できないメディア由来の観察としてマークし、下流のモデルにメディア内の指示に従わないように指示します。フレームキャプションキャッシュキーには、JPEGバイト、プロンプト、タイムスタンプ、および効果的なモデルが含まれます。成功したキャプションのみがキャッシュされます。キャッシュエントリは、実際の成功したプロデューサーモデルを保持し、フォールバックモデルも含まれます。ブリッジは、異なるフレームが異なるモデルによって生成された場合に `mixed` を報告します。キャッシュヒットは、そのプロデューサーのアイデンティティを再利用し、要求されたルーティングプランとして再ラベル付けすることはありません。全ビデオ結果キャッシュは、出力を変更するすべての入力 — プロンプト、効果的なモデル、サンプリングポリシー、フレーム数、セマンティック分析モード、正規化されたフォーカスヒントのSHA-256フィンガープリント、フォーカスウィンドウ、`transcript`、`audioTranscript`、およびコンタクトシートフラグ — に基づいてキー付けされます。したがって、これらの次元のいずれかを変更すると、キャッシュミスとなり、決して古い再利用にはなりません。視覚的重複排除ポリシーのバージョン、閾値、および制限された候補フレーム数も結果キャッシュキーとメタデータに明示されています。したがって、ポリシーの変更は古い全ビデオ記述を再利用することはできません。結果キャッシュv4メタデータは、モードとフィンガープリントを保持し、ユーザーの生のタスクは決して保持しません。ガードレイルメタデータは、要求された分析モードと効果的な分析モードの両方を報告します。使用可能なユーザーテキストがない `focused` モードは、実際には `full` として報告されます。

ガードレイルは、サポートされているすべてのビデオ部分を抽出しますが、`modalityBridgeVideoMaxVideos` を超えることはありません。`supportsVideo === false` が確認されたターゲットの場合、失敗したビデオと制限を超えたビデオは明示的な安全テキストマーカーとなり、生のビデオは残りません。能力が不明な場合、これらの部分はそのまま残ります。`supportsVideo === true` のターゲットはブリッジをバイパスします。クライアントリクエストの中止信号は、ダウンロード、ブローカーキュー、サブプロセス、およびキャプション呼び出しを通じて伝播します。中止はビデオ間で停止し、生のメディアに対してオープンに失敗することはありません。

ランタイム設定はDBバックアップされ、Zodによって検証されます：

| キー                                | デフォルト  | 範囲 / 挙動                                                                                                             |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | オプションのランタイム、オプトイン                                                                                      |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` は一般的なキャプションを保持します。`focused` は制限された、信頼できない最新のユーザーコンテキストを使用します。 |
| `modalityBridgeVideoModel`          | `""`        | ビジョンブリッジモデルを継承します                                                                                      |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                    |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`、`scene_aware`、または比例的 `segment_aware`；検出器の失敗は `uniform` にフォールバックします。               |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                     |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                          |

120秒を超えるレガシーの持続ビデオタイムアウト値は、ブローカーデッドラインに制限されます。その制限を超える新しい設定の書き込みは拒否されます。`GET /api/modality-bridge/video/runtime` は、認証またはランタイムプロービングの前に信頼されたスタンプ付きループバックローカリティを必要とし、その後管理認証が必要です。これは、ランタイムが利用できない場合にのみ `available`、サニタイズされたFFmpeg/ffprobeバージョン、および固定された理由を返します。内部抽出エンドポイントは公開アップロードAPIではありません：キューの飽和は `503` と `Retry-After` を返し、呼び出し元の切断は `499` を返し、固定されたブローカーデッドラインは `504` を返します。変換されたレスポンスは、中央の `x-omniroute-modality-bridge` ヘッダーに `video->text;model=<visionModel>;parts=<videos>` を追加し、ビジョンまたはオーディオセグメントを削除することはありません。

### PIIマスカー (`piiMasker.ts`)

**両方の**ステージで実行されます。

- **`preCall`** はペイロードをクローンし、`system`、`messages`、`input`、および `prompt`（プレーン文字列アイテムを含む）を歩き、`processPII()`（`@/shared/utils/inputSanitizer` から）を文字列 `content`/`text` フィールドに適用します。`PII_REDACTION_ENABLED=true` の場合、検出されたPIIはアウトバウンドペイロードで削除されます。これは `INPUT_SANITIZER_MODE`（プロンプトインジェクションポリシーのみを制御）とは独立しています。削除がオフの場合、呼び出しはコンテンツを書き換えずに検出カウントを記録します。
- **`postCall`** はレスポンスをディープクローンし、`sanitizePIIResponse()` とレスポンスAPI形状マスカー（`maskResponsesOutput` — `output_text` と `output[].content[].text` をカバー）を実行します。削除が発生した場合、修正されたレスポンスが元のレスポンスを置き換えます。

ガードレイルは決してブロックしません；それはただ注釈を付けるだけです（`meta.detections`、`meta.redacted`）または書き換えます。

### プロンプトインジェクション (`promptInjection.ts`)

ユーザーが提供したコンテンツ内の敵対的構造を検出し、設定されたポリシーを強制します。動作は環境変数とコンストラクタオプションによって制御されます：

| 設定         | 環境変数                                                                                                       | デフォルト | 効果                                                                                                                                                                                                     |
| ------------ | -------------------------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 有効         | `INPUT_SANITIZER_ENABLED`                                                                                      | `true`     | `false` の場合、ガードレールはショートサーキットします。                                                                                                                                                 |
| モード       | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                                | `warn`     | 注入ポリシー：`block`、`warn`、または `log`。(`redact` は後方互換性のために受け入れられますが、注入テキストを**削除**しません。PIIの書き換えリクエストは `PII_REDACTION_ENABLED` によって制御されます。) |
| ブロック閾値 | `blockThreshold` オプション / `INPUT_SANITIZER_BLOCK_THRESHOLD` (エイリアス `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`     | ブロックするために必要な最小の重大度。デフォルトでは中程度は観察のみです。                                                                                                                               |

**モードの優先順位** (`getMode`): 呼び出し元 `options.mode` →
`INJECTION_GUARD_MODE` **DBフィーチャーフラグオーバーライド** (ダッシュボード → 設定 →
フィーチャーフラグ) → `INJECTION_GUARD_MODE` 環境変数 → `INPUT_SANITIZER_MODE` 環境変数 →
`warn`。したがって、ダッシュボードのオーバーライドは環境変数よりも優先され、フィーチャーフラグUIが実行中のガードをライブで制御します（再起動不要）。DBの読み取りはフェイルセーフです：
エラーが発生した場合、ガードは環境ベースの動作にフォールバックし、オーバーライドが設定されていない場合の動作は環境のみの解決と同じになります。

検出ソース：

1. `sanitizeRequest()` from `@/shared/utils/inputSanitizer` (パイプラインの他の場所で使用される共有検出器セット)。
2. ビルトイン `DEFAULT_GUARD_PATTERNS` (現在 `system_override_inline` と
   `markdown_system_block`、両方とも `high` 重大度)。
3. コンストラクタオプションを介して渡されるオプションの `customPatterns` (文字列、正規表現、
   または `{ name, pattern, severity }` レコード)。

`mode === "block"` **かつ** 少なくとも1つの検出が重大度閾値を満たす場合、`preCall` は `{ block: true, message: "リクエストが拒否されました: 疑わしいコンテンツが検出されました" }` を返します。`warn`/`log` モードではガードレールはログを記録しますが、呼び出しを許可します。共有ヘルパー `evaluatePromptInjection()` も、レジストリを通過せずにプロンプトを評価する必要がある呼び出し元のためにエクスポートされています。

**スキャン制限 (v3.8.20):** 検出器は結合されたプロンプトテキストの **最初の 16 KB** のみを検査します — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16,384 バイト) は `src/shared/utils/inputSanitizer.ts` にあります。`detectInjection()` と
`evaluatePromptInjection()` は、パターンループを実行する前に `slice(0, MAX_INJECTION_SCAN_BYTES)` を行います。注入指令は入力の上部近くに位置するため、これは正規表現のCPU/GCを数百KBのペイロードで制限し、検出を弱めることはありません (cf. #3932, #4041)。

### クレデンシャルマスカー (`credentialMasker.ts`)

**両方の** ステージで実行され、デフォルトチェーンの最後に位置します (優先度 `95`)。よく知られたAPIキー / シークレットトークンパターンをアウトバウンドペイロード (メッセージコンテンツ、ツール呼び出し引数、ツール結果) **および** プロバイダーの応答から削除します。これにより、プロンプトに貼り付けられたクレデンシャル (またはツール結果によってエコーされたもの) が上流のプロバイダーやクライアントに漏れません。

- **オプトインのみ**、PIIの削除と同じ規則 (ハードルール #20 隣接):
  `settings.credentialRedactionEnabled === true` **または**
  `CREDENTIAL_REDACTION_ENABLED=true` でない限り無効です。これがオフの場合、ガードレールはノーオペレーションです —
  ブロックせず、書き換えもしません。
- `redactCredentials()` は完全なペイロード/応答ツリーを歩き (`walkValue()`、プロトタイプ汚染安全、`WeakSet` によるサイクル安全) 一致するものを `[REDACTED:<type>]` プレースホルダーに置き換え、実際に変更されたブランチのみをクローンします。
- `CREDENTIAL_PATTERNS` はLLMプロバイダーキー (OpenAI、OpenAI-proj、
  Anthropic、Google、Hugging Face、Replicate)、VCS/SaaSトークン (GitHub、Slack、
  Linear、Notion、npm、Postman、Discord)、支払いキー (Stripe、Square)、クラウド
  キー (AWSアクセスキー、Twilio、SendGrid、Mailgun)、プライベートキー / JWT、
  クレデンシャルを含む接続文字列 (`mongodb://user:pass@...` など)、および
  一般的な `Authorization`/`x-api-key`/`api-key`/`apikey` ヘッダー値パターンをカバーします。ヘッダー形式のキー (`authorization`、`x-api-key`、`api-key`、
  `apikey`) は構造的に削除されます (値のみ、`Bearer `/`Basic ` のようなスキームプレフィックスは保持されます)。
- ガードレールは決してブロックせず、書き換え (`modifiedPayload` /
  `modifiedResponse`) と注釈 (`meta.credentialsRedacted`, `meta.count`) のみを行います。

回帰ガード: `tests/unit/credential-masker-guardrail.test.ts`。

## 基底コントラクト (`base.ts`)

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
  block?: boolean; // true の場合、チェーンを即座に終了する
  message?: string; // ブロック時に通知される
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // リクエストを書き換えるために preCall から返される
  modifiedResponse?: TValue; // レスポンスを書き換えるために postCall から返される
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

ガードレールは、`void`、`{}`、または `{ block: false }` のいずれかを返すことで「変更なし」を示します。`modifiedPayload`/`modifiedResponse` を返すと、チェーンを通って後続のガードレールに渡される値が置き換えられます。
`signal?: AbortSignal` は、呼び出し元のライフサイクルをガードレールに引き継ぎます。リクエストの中断は、意図的なフェイルオープンの例外です。メディアブリッジは処理を停止してクリーンアップを行い、未加工のメディアをサポートしないことが判明しているターゲットに、そのメディアを復元することはありません。

## レジストリ (`registry.ts`)

シングルトンの `guardrailRegistry` は、以下を公開します。

- `register(guardrail)` — ガードレールを追加（または正規化された名前に基づいて置換）し、`priority` の昇順で再ソートします。
- `clear()` / `list()` — 管理用のヘルパーです。
- `runPreCallHooks(payload, context)` — 有効なガードレールを反復処理し、`modifiedPayload` を介してペイロードを順次引き渡し、最初の `block: true` で停止します。
- `runPostCallHooks(response, context)` — レスポンス側で同じ処理を行います。
- `resetGuardrailsForTests({ registerDefaults })` — 状態をクリアし、必要に応じてデフォルトを再登録することで、テストをクリーンに分離します。

どちらのランナーも `{ blocked, payload|response, results, guardrail?, message? }` を返します。ここで `results` は、ガードレールごとの `blocked`、`skipped`、`modified`、`error`、`meta` フィールドを含む `GuardrailExecutionResult` レコードの配列であり、トレースに役立ちます。

### リクエストごとのガードレールの無効化

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` は、現在のリクエストでスキップすべきガードレール名を重複のないリストとして集約します。情報源は以下のとおりです（すべて任意であり、すべてマージされます）。

- `apiKeyInfo.disabledGuardrails`
- リクエスト本文の `disabledGuardrails`（トップレベル）
- リクエスト本文の `metadata.disabledGuardrails`
- ヘッダー `x-omniroute-disabled-guardrails`（またはレガシーの `x-disabled-guardrails`）

値には文字列の配列またはカンマ区切りの文字列を指定できます。名前は小文字のケバブケースに正規化されます（`pii_masker` → `pii-masker`）。結果は `context.disabledGuardrails` を介してレジストリに渡され、レジストリは一致するガードレールをスキップします（`results` 内で `skipped: true`）。

## 実行順序

`src/sse/handlers/chat.ts` および
`open-sse/handlers/chatCore.ts` を通過する各リクエストについて:

1. `resolveDisabledGuardrails(...)` は、API キー、ボディ、
   ヘッダーからスキップリストを構築します。
2. `guardrailRegistry.runPreCallHooks(body, ctx)` は、優先度の昇順で
   ガードレールを実行します:
   - 無効化されたガードレールは `skipped` として記録されます。
   - 各ガードレールの `preCall` は、`modifiedPayload` を介してペイロードを書き換える場合があります。
   - 最初の `block: true` によってチェーンが短絡され、ハンドラーは
     ガードレールによる拒否レスポンスを返します。
3. （書き換えられている可能性のある）ペイロードは、コンボルーティングとアップストリームへの
   ディスパッチに渡されます。
4. レスポンスの構築後、`guardrailRegistry.runPostCallHooks(...)`
   はレスポンスに対して同じチェーンを実行します。ここで `block: true` になると、アップストリームの
   レスポンスは破棄されます。

例外をスローしたガードレールは `error: <message>` として記録され、
`logger.warn` を介してログに記録されますが、チェーンは継続します。これは意図的なフェイルオープン設計です。

## 設定

組み込みガードレールが読み取る環境変数:

| 変数                                  | 使用元                           | 効果                                                                                                                          |
| ------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`               | 検出を完全に無効化するには `false` に設定します。                                                                             |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`               | インジェクションポリシー: `warn`、`block`、または `log`。従来の値 `redact` ではインジェクションテキストは書き換えられません。 |
| `INJECTION_GUARD_MODE`                | `prompt-injection`               | インジェクションガードのモード。環境変数を**上書きする** DB 機能フラグでもあります（DB > ENV）。                              |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`               | `MODE=block` が拒否する最小重大度: `high`（デフォルト）、`medium`、または `low`。                                             |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`               | `INPUT_SANITIZER_BLOCK_THRESHOLD` の従来のエイリアス。                                                                        |
| `PII_REDACTION_ENABLED`               | `pii-masker`                     | `true` の場合、リクエスト内の PII が秘匿化されます（インジェクションモードとは独立）。                                        |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker`（ダウンストリーム） | レスポンス側のマスカーの動作を制御します。                                                                                    |

Modality Bridge ガードレールは、環境変数ではなく、DB を基盤とする設定
ストア（`getSettings()`）からランタイム設定を読み取ります。Vision の主要キーは
`modalityBridgeVisionEnabled`、`modalityBridgeVisionMode`、
`modalityBridgeVisionModel`、`modalityBridgeVisionTaskAware`、
`modalityBridgeVisionPrompt`、`modalityBridgeVisionTimeout`、
`modalityBridgeVisionMaxImages`、`modalityBridgeVisionMaxChars`、
`modalityBridgeCacheEnabled`、`modalityBridgeCacheTtlMinutes`、および
`modalityBridgeCacheMaxEntries` です。従来の
`visionBridge*` キーは、文書化されている 1 サイクル限りの読み取り
フォールバックとしてのみ受け入れられます。ダッシュボードからの書き込みには主要キーが使用されます。デフォルト値とフォールバック
リゾルバーは `src/shared/constants/modalityBridgeDefaults.ts` にあり、従来の
定数は `src/shared/constants/visionBridgeDefaults.ts` に保持されています。

Audio は `modalityBridgeAudioEnabled`、`modalityBridgeAudioModel`、
`modalityBridgeAudioTimeout`、`modalityBridgeAudioMaxClips`、および共有の
`modalityBridgeCache*` 設定を使用します。これらのキーは Modality Bridge スキーマとともに
導入されたため、Audio には従来キーへのフォールバックはありません。

Video は `modalityBridgeVideoEnabled`、`modalityBridgeVideoAnalysisMode`、
`modalityBridgeVideoModel`、
`modalityBridgeVideoFrameCount`、`modalityBridgeVideoSamplingPolicy`、
`modalityBridgeVideoMaxVideos`、および
`modalityBridgeVideoTimeout` と、共有の `modalityBridgeCache*` 設定を使用します。
FFmpeg/ffprobe は任意の運用依存関係であり、
フレームのキャプション生成によってレイテンシとモデルコストが増加するため、デフォルトでは無効になっています。

## カスタムガードレール

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

手順:

1. `BaseGuardrail` を継承する `src/lib/guardrails/myGuardrail.ts` を作成します。
2. `preCall` および/または `postCall` を実装します。
3. インポート時に登録する（`registerDefaultGuardrails` から追加する）か、
   実行時に `guardrailRegistry.register(...)` を呼び出します。レジストリは、
   正規化された名前が同じ既存のガードレールを置き換えます。
4. `tests/unit/` 配下にテストを追加します（既存の例:
   `tests/unit/guardrails-registry.test.ts`、
   `tests/unit/prompt-injection-guard.test.ts`、
   `tests/unit/guardrails/visionBridge.test.ts`）。

## テスト

テスト間では `resetGuardrailsForTests()` を使用し、既知の状態から開始します。
空のレジストリから開始し、テスト対象のガードレールのみを登録するには、
`{ registerDefaults: false }` を渡します。Vision Bridge は依存性注入
（`deps.getSettings`、`deps.callVisionModel`）を受け付けます。Audio Bridge も、
設定、ケイパビリティ、STT モデル選択、認証情報チェック、文字起こしについて
同等の差し替えポイントを公開しています。そのため、テストでは DB や
ネットワークにアクセスせずに、両方のフローを実行できます。

## 関連項目

- `src/lib/guardrails/` — 実装
- `src/shared/utils/inputSanitizer.ts` — プロンプトインジェクションと PII マスキングを
  支える共有検出器
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge のデフォルト値と
  強制ブリッジモデルのリスト
- `src/shared/constants/modalityBridgeDefaults.ts` — Vision/Audio で共有される実行時のデフォルト値
- `docs/architecture/RESILIENCE_GUIDE.md` — 直交するレイヤー（サーキットブレーカー、クールダウン）
- `docs/reference/ENVIRONMENT.md` — 環境変数の完全なリファレンス

## インジェクションガードのルートカバレッジとレッドチーム（フェーズ 8 · ブロック D）

インジェクションガード（`createInjectionGuard` / `withInjectionGuard`）は、ユーザープロンプトを
受け付けるすべてのルートを対象とします。`INJECTION_GUARD_MODE` に従って動作します（デフォルトの
`warn` = ログのみ、`block` = HTTP 400 `SECURITY_001` を返します）。

| 種類             | ルート                                                                                                                                               | デフォルトモード |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| テキスト（既存） | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn             |
| 生成系           | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn             |
| データ           | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn             |

テキスト抽出（`extractMessageContents`）は、`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` を対象とします。

**レッドチーム（夜間実行、`nightly-llm-security.yml`）:** promptfoo は、
`INJECTION_GUARD_MODE=block` で各ルートが OWASP-LLM コーパスをブロックすることを検証します。
garak はプローブを実行します（シークレットがない場合はスキップします）。
一貫性を保つため、`moderations` も対象に含まれています。ブロックモードの運用者は、
`resolveDisabledGuardrails` を使用してこれを除外できます。

夜間ワークフロー（`.github/workflows/nightly-llm-security.yml`、cron + 手動
ディスパッチ）には、次の 2 つのジョブがあります:

- **`promptfoo-guard`（ブロッキング）** — `INJECTION_GUARD_MODE=block` を指定して
  `promptfoo eval -c promptfooconfig.yaml` を実行します。各敵対的ケース（例:
  「以前の指示をすべて無視せよ…」、DAN 形式のジェイルブレイク）では、
  レスポンスに `error.code === "SECURITY_001"` が含まれること、つまりガードが
  実際にリクエストを拒否したことを検証します。
- **`garak`（参考情報）** — ローカルの OmniRoute インスタンス
  （`http://localhost:20128/v1`）に対して、garak
  `--probes promptinject,dan,leakreplay` を実行します。プロバイダーシークレット
  （`PROMPTFOO_PROVIDER_KEY`）の存在を条件とし、シークレットがない場合は問題なく
  スキップされます。また、末尾に `|| true` が付いているため、CI を失敗させずに
  結果を報告します。

ガードヘルパー（`createInjectionGuard` / `withInjectionGuard`）のカバレッジは、
プロンプトを受け取るすべての `/v1` ルートに及びます。プロンプトテキストは、
`src/shared/utils/inputSanitizer.ts` 内の `extractMessageContents()` によって、
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` から
抽出されます。
