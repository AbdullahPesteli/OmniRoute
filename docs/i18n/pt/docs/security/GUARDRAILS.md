# Guardrails (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Fonte fidedigna:** `src/lib/guardrails/`
> **Última atualização:** 2026-08-29 — v3.8.51 (a proveniência da transcrição do Video Bridge é declarada pelo chamador,
> ainda não é verificada pelo servidor — clarificado de acordo com #11661)

As guardrails aplicam transformações de segurança, políticas e conteúdo na fronteira
entre o OmniRoute e os fornecedores a montante. Cada guardrail pode inspecionar (e
opcionalmente rejeitar, transformar ou anotar) os payloads dos pedidos (`preCall`) e
as respostas a montante (`postCall`).

O sistema é **fail-open**: se uma guardrail lançar uma exceção durante a execução, o registo
regista o erro e prossegue para a guardrail seguinte, em vez de fazer o pedido
falhar. O bloqueio é uma decisão explícita (`block: true`), nunca um acidente.

## Guardrails Integrados

O registo carrega automaticamente seis guardrails em ordem de prioridade na importação
(veja `registry.ts` → `registerDefaultGuardrails()`):

| Prioridade | Nome                | Estágio(s)     | Ficheiro              |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Números de prioridade mais baixos são executados **primeiro**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Intercepta pedidos com imagens destinados a **modelos não visuais** e
ou redireciona todo o pedido para um modelo capaz de visão ou substitui as partes
de imagem por descrições textuais produzidas por um modelo de visão configurável antes
da chamada upstream. Isso permite que provedores apenas de texto tratem
transparente de cargas multimodais.

Fluxo:

1. Ignorar se o modelo alvo já suporta visão (a menos que apareça na
   lista de ponte forçada `isVisionBridgeForcedModel`).
2. Extrair partes de imagem via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), que delega ao **detector de mídia unificado**
   `detectMediaParts()` em `open-sse/utils/mediaParts.ts` — a
   única fonte de verdade compartilhada com o filtro de compatibilidade combo.
   A extração é permitida apenas para partes de nível superior das formas
   que `replaceImageParts` pode reinserir (o contrato de extração↔substituição): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, e Responses API `input_image`. Acertos aninhados e
   formas apenas de indicador são material para o filtro combo e nunca são extraídos.
   Ignorar se nenhum for encontrado.
3. Resolver a configuração em tempo de execução via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): novas chaves de configuração
   `modalityBridge*` ganham; chaves legadas `visionBridge*` permanecem como um
   **fallback de um ciclo** (janela de retrocesso). Ignorar antes de qualquer
   travessia de mídia quando a ponte está desativada.
4. O seletor de modo (`modalityBridgeVisionMode`, veja a tabela abaixo) decide
   redirecionar ou descrever. O redirecionamento retorna `modifiedPayload` com apenas `model`
   trocado, além de meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Caminho de descrição: limitar imagens a `maxImages`, compor o prompt
   ciente da tarefa, consultar o cache de descrição, chamar o modelo de visão
   **em paralelo** (`Promise.allSettled`), e injetar partes de texto `[Image N]: <description>`
   em seus lugares. Uma descrição falhada resulta em `null` e a parte de imagem original é
   **preservada** (#4012) — exceto no caminho de descrição combo quando cada
   descrição falhou, onde um upstream confirmado não visual recebe um
   `(indisponível — nenhum provedor capaz de visão conectado)` stub em vez disso (#8430).
6. Retornar `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Seletor de modo (`modalityBridgeVisionMode`)

| Modo       | Padrão | Comportamento                                                                                                                                                                                                                                                                                 |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Heurística legada, intocada (#6640/#7204): modelos não combo/`auto/` redirecionam para o melhor modelo de visão a menos que o modelo original já tenha credenciais utilizáveis (então descreve); alvos combo sempre descrevem.                                                                |
| `describe` |        | Sempre descreve — o bloco de redirecionamento é completamente ignorado; o modelo escolhido pelo usuário sempre responde.                                                                                                                                                                      |
| `reroute`  |        | Forçar redirecionamento: a guarda de modelo credenciado é ignorada. A guarda de credencial do alvo de redirecionamento ainda se aplica — quando não existe um alvo de visão utilizável, o pedido cai na descrição para que imagens brutas nunca cheguem a um backend apenas de texto (#8430). |

Modos forçados interrompem **antes** que a heurística automática seja executada; o comportamento `auto`
é byte-idêntico ao guardrail pré-PR-1.

#### Escopo da chave da API (`visionBridgeKeyScope.ts`)

Quando a chave da API do chamador restringe `allowedConnections`, pools de quota
(`allowedQuotas`) ou modelos (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), a ponte apenas
escolhe modelos de redirecionamento e descrição que a chave pode usar, em conexões que a chave pode
usar. A chamada de descrição passa sempre pelo loop de auto-OmniRoute com
o cabeçalho `x-omniroute-self-loop-key-id`, assim o pedido de chat recebido
impõe novamente a política de conexão e modelo daquela chave. `enforceApiKeyPolicy()`
honra esse cabeçalho apenas juntamente com o portador do loop de auto, portanto, pode apenas
reduzir o acesso, e um id que não se resolve é rejeitado.

Se nenhum modelo de visão for permitido para a chave, o caminho de descrição se afasta e
o pedido passa inalterado, o mesmo comportamento fail-open que um guardrail desativado
(meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Pedidos sem uma chave, e chaves sem essas restrições, comportam-se exatamente como
antes.

#### Prompt de descrição ciente da tarefa (`modalityBridgeVisionTaskAware`)

Default **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) anexa
o texto da **última mensagem do utilizador** (truncado a 500 caracteres) ao prompt base
de descrição, orientando a descrição para o que o utilizador realmente pediu
(padrão codex-vision-proxy) e pedindo ao modelo de visão para transcrever o texto visível. Com a flag desativada — ou sem texto do utilizador — o prompt base é utilizado sem alterações.

O pedido compatível com OpenAI do próprio loop de auto-descrição (`callVisionModelSingle()`
em `visionBridgeHelpers.ts`) solicita sempre `image_url.detail: "high"` —
incondicionalmente, para cada chamador/provedor, não condicionado a qualquer sinal do cliente.
A amostragem de baixa detalhe degrada a precisão do OCR para exatamente a tarefa de transcrição de texto que este prompt pede, portanto a chamada de descrição em si sempre pede alta
detalhe independentemente do nível de detalhe que o pedido original utilizou. Isso
afeta apenas o corpo do pedido interno de descrição; não altera como
OmniRoute encaminha o próprio `image_url.detail` do chamador na solicitação principal —
esse padrão é aplicado separadamente, e apenas para clientes OpenCode detectados, em
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). O
ramo de formato wire da Anthropic do loop de auto-descrição não tem campo `detail`
e não é afetado por nenhum padrão.

#### Limite de saída da descrição (`modalityBridgeVisionMaxChars`)

| Chave                          | Padrão | Intervalo        |
| ------------------------------ | ------ | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` ou 100–50000 |

`0` (padrão) significa **sem limite** — a descrição retornada por
`callVisionModel()` é passada sem modificações, preservando o comportamento existente. Qualquer valor no intervalo de 100–50000 trunca a descrição com um
sufixo `…` antes de ser inserida como `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` em `src/lib/guardrails/visionBridge.ts`).
Aumente isso para tarefas de OCR com muitos detalhes onde o modelo a jusante precisa da
transcrição completa; reduza-o para limitar o uso de tokens em modelos de visão mais verbosos.
O campo do painel de controle encontra-se no painel Avançado da aba Visão
(`modality-bridge-max-chars` em `ModalityBridgeVisionTab.tsx`) e limita qualquer
valor entre 1 e 99 até o piso de 100, enquanto deixa um explícito `0`
inalterado — `0` é um valor Zod válido por si só
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), não meramente
o padrão "não definido".

#### Cache de descrição (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL em memória para saídas de descrição, compartilhado em todo o processo.
Chave = `sha256(imageRef + composedPrompt + configuredBridgeModel)` com
formatação de comprimento de prefixo (sem colisões de limite de campo). O componente do modelo é
o modelo de ponte **configurado**, não o modelo que realmente respondeu —
`callVisionModel` pode recorrer internamente, e a chave por tentativa fragmentaria o cache. Descrições falhadas nunca são armazenadas em cache. Configurações:

| Chave                           | Padrão | Intervalo |
| ------------------------------- | ------ | --------- |
| `modalityBridgeCacheEnabled`    | `true` | —         |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000   |

#### Normalização de imagem remota (auto-chamada de descrição/busca base64)

Quando a ponte busca uma imagem **remota** — a auto-chamada de descrição da Anthropic
e a conversão base64 do formato wire claude
(`ensureBase64ImagesForClaudeWire`), ambas via
`fetchRemoteImageAsDataUri()` em `visionBridgeHelpers.ts` — o URI de dados resultante
é passado por `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) antes de ser incorporado no pedido do modelo de visão. Imagens excessivamente grandes são redimensionadas para uma **borda longa de 2048px** (correspondendo ao limite de redimensionamento que a OpenAI/Anthropic já aplica no lado do servidor), o que reduz
bytes de upload/latência sem alterar o que o modelo de visão vê. O redimensionamento
usa `sharp`, carregado via importação dinâmica: em uma plataforma onde seu binário nativo falha ao carregar, `normalizeDataUri()` **nunca lança** — ele recorre
a uma passagem dos bytes originais, de modo que o caminho de descrição/conversão base64
sempre continua funcionando. Bytes não-imagem (uma busca que não retornou uma
imagem decodificável) também são passados sem alterações. Esta normalização é
limitada às imagens que a ponte busca para sua própria auto-chamada — nunca é
aplicada ao payload bruto do chamador, consistente com o princípio de mutação apenas por opt-in (Regra Rigorosa #20).

#### Esquema de configurações + migração

As novas chaves `modalityBridge*` são validadas pelo Zod em `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, o trio `modalityBridgeCache*`, e o grupo
`modalityBridgeAudio*` usado pela Ponte de Áudio. A migração
`141_modality_bridge_settings.sql` copia os valores legados existentes
`visionBridge*` para as novas chaves correspondentes (idempotente, nunca sobrescreve
um valor `modalityBridge*` definido pelo operador); as chaves legadas continuam a ser aceitas como uma
fallback de leitura durante um ciclo de lançamento.

#### Cabeçalho de transparência + estatísticas

As respostas transformadas pela descrição carregam
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(construído por `buildModalityBridgeHeader()` em `modalityBridge/bridgeStats.ts`,
carimbado por `withModalityBridgeHeader()` em `src/sse/handlers/chatHelpers.ts`).
Pedidos redirecionados recebem **nenhum** cabeçalho — o payload não foi alterado e a troca de modelo já é visível no campo `model` do corpo da resposta.

`GET /api/modality-bridge/stats` (autenticação de gestão, mesmo nível que
`GET /api/settings`) retorna os contadores em memória por modalidade
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` para `vision`, `audio` e
`video`. `averageLatencyMs` utiliza `latencySamples`, não todas as tentativas, como seu
denominador; uma operação sem temporização não fabrica uma amostra de zero milissegundos.
`bridged` permanece o alias compatível com versões anteriores para conversões bem-sucedidas;
tentativas falhadas não o incrementam.
Os contadores são redefinidos na reinicialização do processo por design
(telemetria, não contabilidade).

#### Configuração do painel

A página dedicada do painel é
`/dashboard/settings/modality-bridge`. Os separadores `Vision`, `Audio`
e `Video` endereçáveis por URL preservam os parâmetros de consulta enquanto mudam o valor de `tab`.
O separador Vision expõe habilitação, modo, seleção de modelo (incluindo o padrão automático),
prompting consciente da tarefa, limites avançados de tempo/imagem/comprimento de descrição/cache,
contadores de tempo de execução e uma solicitação de amostra protegida. O separador Audio também
está ativo: expõe habilitação, um seletor de modelo apenas STT com Auto, limites de tempo/máximo-clipe,
contadores de áudio e um teste de amostra `input_audio`. O separador Video é funcional: reporta
o estado de execução do FFmpeg/ffprobe — um dos quatro estados UI explícitos (`unknown` enquanto
o probe está em voo ou não pôde ser concluído, `restricted` em um host de painel não-loopback onde
o probe é ignorado do lado do cliente, `unavailable` uma vez sondado e confirmado como ausente, ou
`available` com as versões do FFmpeg/ffprobe) — persiste limites de habilitação/modelo/quadro/vídeo/tempo,
filtra o seletor de modelo para modelos capazes de visão e expõe contadores de vídeo.

O antigo cartão Vision Bridge nas configurações de IA é um link de compatibilidade para a
nova página; ele não possui mais uma segunda cópia do formulário. Os Fornecedores de Mídia também
ligam os fluxos de Trabalho de Imagem-para-Texte e Fala-para-Texte aos separadores correspondentes do Modality
Bridge sem remover o playground existente de Fala-para-Texte.

**Desvio de admissão de auto-loop:** quando a chamada de descrição passa pelo
próprio `/v1` auto-loop do OmniRoute (modelo de fornecedor não padrão), a sub-solicitação envia
`x-omniroute-admission-bypass: internal` e é autenticada com a credencial de auto-loop resolvida —
o sentinela local `sk_omniroute` em modo local, ou a chave de ambiente configurada pelo operador
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` ( #1350) para que as implementações com `REQUIRE_API_KEY=true`
possam ainda executar a chamada de descrição. O desvio é apenas honrado para essas credenciais exatas,
portanto, clientes externos não podem usar o cabeçalho para pular a admissão.

Os padrões legados vivem em `src/shared/constants/visionBridgeDefaults.ts`; os
novos padrões conscientes de modo/tarefa/cache e o resolvedor de configurações vivem em
`src/shared/constants/modalityBridgeDefaults.ts`. O guardrail expõe uma
opção de construtor `deps` para que os testes possam injetar implementações falsas de
`getSettings` e `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Intercepta solicitações de chat que contêm áudio antes que cheguem a um alvo que não é
conhecido por aceitar entrada de áudio. Ele nunca redireciona a solicitação de chat: as partes de áudio são
transcritas através do endpoint multipart compatível com OpenAI existente e o
modelo de chat escolhido continua com transcrições de texto.

Fluxo:

1. Resolve `supportsAudio` através de `getResolvedModelCapabilities()`. Metadados de registro de fornecedor explícitos
   vencem, depois metadados de modelo estático, depois `modalities_input` sincronizados. Uma lista de entrada declarada
   sem `audio` é `false`; nenhuma evidência de capacidade permanece `null`. Tanto `false` quanto `null` ativam a
   ponte conservadora, enquanto `true` a ignora.
2. Resolve as configurações `modalityBridgeAudio*` e extrai partes de áudio de nível superior
   que podem ser cortadas de cada mensagem através do detector compartilhado `detectMediaParts()`.
   As formas de fio suportadas são OpenAI `input_audio`, `audio_url` e
   `source.media_type: "audio/*"`. Áudio aninhado é detectado para roteamento, mas não
   removido pelo caminho de corte. O trabalho é limitado por `modalityBridgeAudioMaxClips`;
   partes posteriores permanecem inalteradas.
3. Honra um `provider/model` configurado, ou deixa `selectAudioBridgeModel()` percorrer
   `AUDIO_TRANSCRIPTION_PROVIDERS` na ordem do catálogo estável e selecionar o primeiro
   modelo com uma credencial de fornecedor ativo utilizável.
4. `callAudioTranscription()` converte áudio base64/data-URI em um multipart
   `file`, ou baixa um `audio_url` remoto através do guardião de saída apenas público
   com pinagem DNS e um limite de 25 MB. Em seguida, POSTa o arquivo e o modelo selecionado
   para o auto-loop local `/v1/audio/transcriptions`, autenticado com
   `resolveSelfLoopBearer()`. A rota de transcrição existente realiza a busca normal
   de credenciais, manuseio de cooldown/límite de taxa e despacho de fornecedor.
5. Chamadas bem-sucedidas substituem suas partes por `[Audio N]: <transcript>`. Chamadas
   são executadas com `Promise.allSettled`: uma falha individual preserva essa parte de áudio original
   (#4012 contrato). Se cada chamada falhar e o alvo provar ser
   `supportsAudio === false`, as partes tornam-se
   `[Audio N]: (indisponível — nenhum fornecedor STT conectado)` (#8430 contrato). Para
   um alvo desconhecido (`null`), um resultado de todas as falhas permanece inalterado. Um alvo
   comprovado apenas de texto sem credencial STT utilizável recebe o mesmo stub explícito
   sem emitir uma chamada de rede.

Transcrições bem-sucedidas utilizam o cache LRU/TTL do Modality Bridge em todo o processo. A
chave combina a referência de áudio, o rótulo da operação estável `audio-transcription`
e o modelo STT selecionado; falhas nunca são armazenadas em cache. Tentativas de áudio atualizam
os contadores compartilhados `bridged`, `cacheHits`, `failures` e `lastUsedAt`.
Respostas transformadas carregam
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; solicitações inalteradas
não recebem um segmento Audio Bridge.

As configurações de tempo de execução são suportadas por DB e validadas por Zod:

| Chave                         | Padrão  | Intervalo      |
| ----------------------------- | ------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —              |
| `modalityBridgeAudioModel`    | `""`    | Auto ou ID STT |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10           |

O cache partilhado continua a ser controlado por `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` e `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepta partes de vídeo de nível superior nas mensagens de Chat Completions e
na API de Respostas `input` antes de um alvo sem suporte nativo de vídeo conhecido ser chamado.
As formas suportadas são `input_video`, `video_url`, `video_source`, URLs HTTPS,
e `data:video/*;base64,...` URIs de dados. Nomes de ficheiros simples em texto não são tratados
como vídeo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) é responsável pela travessia de pedidos, pela
verificação de capacidade/política, pela agregação por pedido e pelo payload de resposta.
O trabalho por vídeo — aquisição, o cache de resultados completos, a descrição de uma sequência de frames
(que funde qualquer transcrição de áudio declarada pelo chamador), e métricas/aborto/limpeza por tentativa —
está oculto atrás de `processVideoPart` em `videoBridgePipeline.ts`, chamado uma vez por parte de vídeo dentro do loop de `preCall`.
Esse módulo também define os limites de porta explícitos `VideoMediaBrokerPort`
(aquisição de bytes e extração de frames amostrados), `VideoAudioTranscriptionPort`
(fundindo uma transcrição de áudio declarada pelo chamador com as legendas amostradas), e
`VideoDrilldownPort` (a forma de armazenamento bruto legado). A produção de STT e a retenção de frames
são compostas em torno da porta descritiva através de `createVideoSttAdapter` e
`createVideoDrilldownAdapter`; este último utiliza o ciclo de vida de manuseio opaco partilhado.

O caminho de pedido público `/v1` nunca importa ou invoca um subprocesso. Vídeos remotos são
baixados sob um limite de 50 MiB; vídeos base64 inline têm um limite conservador de 36 MiB decodificados por vídeo
para que o modelo/mensagens/envelope de formatação possam permanecer dentro do limite de admissão de pedido JSON público de 50 MiB. O comprimento inline e as estimativas de tamanho decodificado são verificados antes da alocação. HTTPS é
exigido na URL remota inicial e em cada redirecionamento, utilizando a proteção de saída pública existente com fixação de DNS. Os bytes então cruzam o exato limite interno
`POST /api/modality-bridge/video/extract`. Essa rota é tanto `LOCAL_ONLY` quanto `SPAWN_CAPABLE`, aceita apenas um pedido autenticado por processo,
de loop de confiança, e nunca aceita uma URL, caminho de sistema de ficheiros, executável,
ou lista de argumentos. O pipeline de tamanho do corpo da API e o leitor de corpo incremental do manipulador
imponham independentemente um limite de entrada de 50 MiB para o broker. A sua fila limitada executa
uma extração de cada vez, permite quatro trabalhos pendentes, e limita a entrada pendente a
100 MiB.

Dentro do broker, `ffprobe` lê um ficheiro local privado; a lista de formatos permitidos fixa exclui formatos de lista de reprodução e manifesto. Para os contêineres da família MOV permitidos,
as referências de dados MOV externas permanecem desativadas por padrão, e o comando fixo não opta por elas. Tanto `ffprobe` quanto `ffmpeg` usam a
lista de permissões de protocolo apenas `file`, um thread, arrays de argumentos fixos, sem shell,
e executáveis resolvidos a partir de `PATH`. Streams de capa de imagem anexadas não são
candidatos jogáveis. Todos os streams jogáveis devem satisfazer os limites, e um
stream padrão explícito é preferido antes do fallback determinístico de índice mais baixo.
Os vídeos são limitados a 600 segundos, 8.192 pixels por dimensão, e
33.554.432 pixels de origem. O FFmpeg amostra de 1 a 16 frames JPEG no meio, reduz a
borda longa a no máximo 1.024 pixels sem aumentar entradas menores, e
nunca recebe uma URL. A amostragem é `uniforme` por padrão. As políticas opcionais
`scene_aware` e experimentais `segment_aware` realizam uma passagem adicional fixa do FFmpeg sobre o stream local já validado, selecionam timestamps de cena `showinfo` limitados,
e voltam deterministicamente aos mesmos pontos médios uniformes em caso de falha do detector, timeout, saída malformada, ou um conjunto de candidatos vazio. O modo consciente de segmentos aloca amostras de pontos médios proporcionalmente aos intervalos de cena validados; as evidências conscientes de segmentos e o comportamento de fallback são
detalhados abaixo. O limite rígido de 16 frames é
aplicado após a seleção em cada política. Quando um pedido consciente de cena tem apenas um
orçamento de um frame, utiliza o ponto médio uniforme da janela de vídeo completo ativa ou da janela de foco e reporta `policyEffective: uniform`: um único frame de cena selecionado
não pode preservar ambas as extremidades temporais. Um chamador pode opcionalmente fornecer uma
janela de foco finita (`start`/`end` segundos); os limites são restringidos à duração da mídia, janelas invertidas ou não finitas são rejeitadas, e todas as políticas de amostragem são realizadas apenas dentro do intervalo normalizado. A janela resultante é incluída nos metadados de amostragem e no prefixo de descrição não confiável
para que modelos a jusante possam distinguir um excerto focado da linha do tempo completa.

O foco semântico de legendas é uma configuração separada e explícita. O modo de análise padrão `full`
preserva o prompt de frame existente e nunca encaminha texto de pedido para o modelo de legendas. No modo `focused`, a ponte lê apenas o mais recente
`text`/`input_text` não vazio criado pelo utilizador do mesmo container de Chat ou Respostas, normaliza-o para NFC, colapsa caracteres de controle e espaços em branco,
e limita-o a 500 pontos de código Unicode. Um resultado vazio volta ao exato prompt `full`. Uma dica utilizável é serializada como JSON em um bloco dedicado de contexto de utilizador não confiável e pode apenas priorizar detalhes observáveis; não pode substituir o aviso separado contra seguir instruções visíveis
ou audíveis na mídia. O foco textual nunca infere `start`/`end` ou altera
o amostrador temporal.

#### FU-07 evidência de segmento estrutural

`segment_aware` utiliza uma passagem de pré-análise limitada sobre o fluxo de vídeo local já validado. A cadeia de filtros fixa primeiro redimensiona para no máximo 320 pixels de largura, detecta mudanças de cena e intervalos congelados, e depois amostra a 1 quadro por segundo para desfoque, média de luma e informações espaciais/temporais. A passagem é limitada a 600 amostras estruturais, um thread de FFmpeg/filter, o mesmo protocolo e listas de permissões de contêiner apenas para `file`, um limite de saída de processo de 1 MiB, e no máximo 30 segundos dentro do tempo limite/aborto compartilhado do broker. Nunca aceita um comando, filtro, caminho ou URL da solicitação.

Os valores estruturais são evidências de amostragem determinística, não compreensão semântica do vídeo. Eles não inferem sujeitos, ações, legendas, fala ou intenção do usuário. Os limites de cena e congelamento formam segmentos; a cobertura de congelamento, desfoque, exposição, detalhe espacial e mudança temporal apenas influenciam como o orçamento existente de 1 a 16 quadros é alocado. Um segmento totalmente congelado é limitado a um quadro, enquanto segmentos não congelados competem pelo orçamento restante. Quando os limites superam os quadros, a cobertura uniforme da linha do tempo é mantida para que cortes rápidos no início não possam esconder um longo segmento posterior. Os limites de cena dentro da resolução de análise de 1 segundo de um limite de congelamento são coalescidos.

Filtros ausentes, evidências malformadas/vazias, um erro de detector ou o tempo limite de pré-análise limitado falham abertamente para a política exata do ponto médio uniforme. Um aborto do chamador ou prazo do broker não falha abertamente: termina o subprocesso em andamento, impede a extração de quadros posteriores, e a árvore temporária privada é removida em `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` gera fixações reais determinísticas do FFmpeg para economias de chamadas de legendas pós-duplicação, alocação de orçamento de movimento denso, evidências de desfoque/exposição/SI-TI, cortes rápidos com um longo rabo, e falsos positivos de desvanecimento gradual. Regista o tempo de parede da pré-análise e, onde `/usr/bin/time` está disponível, o CPU filho e o RSS máximo. As suas verificações de qualidade são apenas oráculos estruturais. A qualidade real do modelo de legendas permanece `HOLD` porque este dispositivo não tem um ponto final autorizado ou juiz congelado. As economias monetárias também permanecem `HOLD` a menos que `--caption-cost-per-call-usd` forneça uma estimativa explícita positiva por chamada; o script nunca fabrica qualquer resultado.

Cada quadro é limitado a 4 MiB, todos os quadros brutos juntos a 23 MiB, e a resposta serializada do broker a 32 MiB. Um diretório temporário privado é removido em `finally`. OmniRoute não agrupa o FFmpeg e não aceita um caminho executável personalizado. Antes da legendagem, a ponte aplica uma passagem conservadora de deduplicação visual: cada JPEG é reduzido a um buffer em escala de cinza de 16×16 e é comparado apenas com o último quadro retido. Para um orçamento de legendas solicitado acima de um quadro, a extração fornece um pool de candidatos limitado de até duas vezes esse orçamento e nunca mais de 16 quadros. O limite solicitado é aplicado apenas após a deduplicação, com os primeiros e últimos candidatos selecionados preservados durante o afinamento final quando o orçamento é de pelo menos dois. A política versionada `grayscale-16x16-mean-cells-v2` utiliza o maior entre a média do delta de luma e a razão de células de miniatura cujo delta normalizado é pelo menos 0.05. O limiar de duplicação é a constante 0.04, escolhida pela previsibilidade em vez de exposta como uma configuração em tempo de execução. Este sinal secundário de alto contraste preserva pequenas mudanças de movimento e texto visível que uma comparação apenas de média pode ocultar. Erros de comparador ou decodificador falham abertamente e mantêm a cobertura. Os metadados de saída separam candidatos extraídos, quadros usados com sucesso e duplicatas visuais descartadas.

Uma parte de vídeo explicitamente marcada pode solicitar uma folha de contato com timestamp. A ponte constrói uma grade JPEG de no máximo 4 colunas e 16 quadros. Cada célula de 512 pixels grava seu timestamp de origem em uma faixa inferior de alto contraste, enquanto os mesmos timestamps permanecem nos metadados textuais para associação e auditoria posteriores. O JPEG completo permanece limitado a 32 MiB. Se `sharp` não conseguir decodificar ou compor a grade, a ponte recua para os quadros JPEG individuais; um aborto do cliente ainda se propaga através da operação da folha.

Evidências de promoção são deliberadamente separadas do microbenchmark de composição sintética. `scripts/perf/video-bridge-contact-sheet-eval.ts` define um dispositivo A/B versionado por esquema para modelos de visão compatíveis com OpenAI reais. Mede tokens reportados pelo provedor, latência de parede de ponta a ponta (incluindo composição da folha), contagem de chamadas de modelo e retenção de fatos definidos no manifesto. As respostas brutas do modelo não são escritas no relatório; apenas os resumos SHA-256 e IDs de fatos correspondentes são retidos. O dispositivo não faz chamadas de rede ou de modelo pago a menos que `--execute-real` seja passado e `--model`, `OMNIROUTE_BASE_URL` e `OMNIROUTE_API_KEY` estejam configurados. Sem essa execução real explícita, seu veredicto legível por máquina permanece `HOLD`; medições de carga útil/chamada sintética sozinhas não são evidências de promoção.

O separado `scripts/perf/video-bridge-promotion-eval.ts` consome observações FU-07 ou FU-09. A admissão de promoção requer todos os oito tipos de cenários sintéticos mais um clipe real sanitizado, pelo menos três repetições medidas por papel e caso, todas as dez métricas declaradas, digests de mídia/prompt/fato esperado/conjunto congelados, IDs de observação únicos e ordem A/B verificada. O recibo de execução vincula o digest do corpus, o SHA exato do candidato e a revisão do modelo. Medições ausentes ou inválidas permanecem `HOLD`, incluindo CPU acima de 30 s, RSS máximo acima de 512 MiB ou pré-análise acima de 30 s. Estes são limites de admissão de evidências, não uma nova garantia de aplicação de RSS em tempo de execução.

FU-07 requer pelo menos 98% de retenção de qualidade e latência p95 não superior a 1.2x
da linha de base, além de um aumento absoluto de 0.05 na média de recall balanceado por casos em
chamadas de legendas médias equivalentes, ou pelo menos 10% menos chamadas de legendas médias pós-deduplicação. FU-09 requer pelo menos 0.85 de qualidade, 95% de retenção, 20% de redução de latência p95 e 10% de redução de tokens. A perda de fatos críticos, conformidade de injeção ou uso ausente impede a promoção. Uma execução não pode promover nada:
`--previous-report` confirma duas execuções distintas, não sobrepostas, consecutivas
e elegíveis da mesma política/revisão de modelo/candidato/corpus. Um
experimento de amostragem não pode confirmar um experimento de folha de contato.

Os coletores devem pontuar as respostas na memória e salvar `responseDigest` mais
métricas e ligações de observação, nunca o texto da resposta. O consumidor também lê
observações brutas legadas, mas nunca copia esse texto para seus relatórios. Exatamente
um de `responseDigest` ou `rawResponseText` é aceito para cada observação.
A lista de permissão versionada permanece vazia com um `hold` padrão imutável. Uma
entrada elegível requer sua referência de evidência, política, revisão de modelo, SHA exato
do candidato, digest do manifesto e dois IDs de execução distintos; contextos conflitantes
são rejeitados. Esses metadados são um contrato de auditoria, não prova de que um arquivo referenciado contém medições genuínas. Revise os recibos reais antes de adicionar
qualquer entrada. O endpoint de estatísticas de gestão e o painel de vídeo expõem uma
preparação conservadora. Um alias de modelo configurado por si só não estabelece sua revisão ou
o SHA do candidato em execução, então o painel atual relata `HOLD` em vez de
reutilizar a elegibilidade de outro contexto de execução. A seleção experimental explícita
permanece separada da promoção; nenhum padrão é alterado automaticamente.

Os chamadores podem anexar um array opcional `transcript.cues` a uma parte de vídeo suportada
quando já possuem texto alinhado. Cada cue deve conter `text`, um intervalo finito `start`/`end`
dentro da duração sondada, e uma `source` na lista branca (`client`, `embedded` ou `audio-bridge`); `confidence` tem como padrão `1` e deve permanecer entre `0` e `1`. Cues duplicados exatos são colapsados.
OmniRoute nunca inicia a transcrição a partir desses metadados: cues validadas são
copiadas para o resultado descrito com fonte, confiança e intervalo, e
são apresentadas como observações não confiáveis ao lado das legendas dos quadros. Texto inválido,
fora do intervalo ou sem proveniência é rejeitado em vez de misturado no
fluxo de legendas. Ambos os canais de transcrição do corpo da solicitação normalizam a proveniência fornecida para `client`, incluindo `embedded` ou `audio-bridge`
autoafirmados. Apenas um adaptador de propriedade do servidor pode atribuir esses rótulos confiáveis através do argumento `trustedSource` apenas em código; um campo JSON de solicitação não pode alcançar
esse argumento. O texto da transcrição permanece conteúdo derivado de mídia não confiável,
independentemente de sua proveniência, e nunca deve determinar a autorização.

Um chamador avançado pode fornecer uma faixa `audioTranscript` para o mesmo vídeo;
ela é tratada como texto fornecido pelo cliente, não como prova de transcrição do servidor.
A costura de fusão executa observações visuais e de áudio sob
um prazo e sinal de aborto, ordena-as em uma linha do tempo comum, colapsa
duplicados exatos e relata um resultado parcial quando apenas um lado tem sucesso.
Um `audioTranscript` inválido degrada para esse resultado parcial — a descrição visual é mantida e o ramo de áudio registra um código de falha sanitizado —
em vez de falhar o vídeo inteiro. A disponibilidade por ramo, a flag parcial,
e os códigos de falha sanitizados são preservados no resultado descrito, nos
metadados de guardrail (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), nos metadados de cache de resultados, e nos contadores de fusão da ponte. O caminho padrão da Video Bridge não invoca a conversão de fala em texto
ou baixa uma segunda cópia de mídia; sem essa faixa explícita, permanece
apenas vídeo.

**Retenção de transcrição (#12150 P1).** Isso se aplica automaticamente sempre que a
Video Bridge (ela mesma opt-in) renderiza uma cue de transcrição — não há uma flag de retenção separada. Quando uma solicitação renderiza qualquer cue de transcrição (uma `transcript` declarada pelo chamador ou um `audioTranscript` fundido), o guardrail a marca como
`videoBridgeObserved` e produz uma sombra redigida da descrição do vídeo —
uma renderização idêntica na qual o corpo de texto livre de cada cue é substituído por
`[redacted-video-transcript]`, construído substituindo o campo de cue estruturado
antes que a string seja montada (nunca por meio da análise do texto achatado, de modo que nenhum conteúdo de cue — adversarial ou comum, incluindo corpos contendo `]` como
`[inaudível]`/`[música]` — possa sobreviver). O corpo da solicitação do log de chamadas persistido troca
cada parte de texto derivada do vídeo por essa sombra redigida, correspondida por igualdade de conteúdo; o
ancoramento `fullText` é lido novamente do payload do guardrail pré-chamada finalizado, de modo que a correspondência ainda seja bem-sucedida após os guardrails de cadeia posteriores (os mascaradores de PII e credenciais, prioridades 10/95) reescrevem o texto da descrição no local e
após a injeção de prompt/suporte/memória remodelar o array de mensagens. O
corpo enviado para o modelo permanece inalterado. Uma solicitação observada também não popula
nenhuma Memória durável (tanto a extração derivada da solicitação quanto da resposta são ignoradas),
portanto a própria resposta do modelo não pode ecoar o texto da transcrição na Memória.

**Campos de vídeo bruto (#12430).** Quando a ponte está habilitada e o suporte nativo de vídeo é desconhecido ou ausente, os campos `transcript`/`audioTranscript` definidos também ativam `videoBridgeObserved`, mesmo após falha de descrição ou um limite de `maxVideos`. `null` e strings vazias contam; campos ausentes e metadados não relacionados a vídeo não contam. Cópias retidas redigem esses campos ou omitem a solicitação, e caches/Memória são contornados. O payload do provedor permanece inalterado.

Cópias adicionais retidas utilizam o mesmo sinal de pedido observado. O instantâneo bruto do pedido do cliente pré-guardrail, o pedido pendente em memória e o log de pedidos rejeitados precocemente substituem estruturalmente os campos de transcrição nas partes do vídeo; os prompts de string sintetizados por estágios de pipeline e transferência de contexto são redigidos no sink do corpo do pedido persistido. O marcador `video_content_removed` persistido faz com que a continuação de `previous_response_id` falhe de forma segura em vez de reconstruir texto que foi intencionalmente descartado. Se um pedido observado perder sua sombra de redacção por parte antes do log, ou mesmo se uma das várias sombras de vídeo falhar em corresponder após mutações de pedido posteriores, o corpo do pedido retido é omitido completamente em vez de reter uma transcrição parcialmente redigida.

Para um pedido observado, uma resposta do modelo pode citar qualquer parte da transcrição sem um limite de sinal estruturado. O `responseBody` do log de chamadas persistido é, portanto, substituído por um marcador de omissão; o artefato detalhado do pipeline (que pode incluir corpos upstream/clientes e pedaços de stream) não é retido. Os caches semântico, de idempotência e de repetição de raciocínio ignoram leituras e gravações para esse pedido. O pedido do provedor e a resposta visível ao cliente permanecem inalterados. Os bytes de keepalive precoces são drenados do buffer temporário quando o artefato detalhado é omitido. O aviso de EventStream malformado do Kiro relata apenas a contagem de bytes do payload, nunca seu conteúdo ou o erro bruto do parser JSON. Isso não afirma que todos os diagnósticos de provedor/plugin não relacionados foram auditados; a varredura mais ampla do sink retido é rastreada em #11658.

O ciclo de vida interno de `/api/modality-bridge/video/drilldown` é um substrato de cache separado, autenticado por loopback/token. Cada operação também requer um ID de principal opaco canônico. Antes que um chamador de produção seja habilitado, deve derivar esse ID do inquilino autenticado e nunca deve encaminhar um valor selecionado pelo cliente. As chaves de cache vinculam esse principal a IDs de sessão canônica e referência de vídeo, armazenam apenas suas chaves derivadas de SHA-256 e limitam tanto leituras quanto exclusões ao mesmo principal. O cache armazena no máximo 16 quadros JPEG derivados por entrada, expira-os após dez minutos e suporta leituras ou exclusões de sessão explícitas limitadas por `start`/`end`.

Cada principal é limitado a 16 entradas e 64 MiB de dados JPEG canônicos. Esses limites são independentes do teto global de 64 entradas/256 MiB: a pressão da cota do principal expulsa apenas as entradas menos recentemente usadas desse principal antes que a expulsão global LRU seja considerada. As entradas expiradas são varridas tanto da contabilidade do principal quanto da global na atividade do cache, enquanto a cancelamento e a falha de validação não comprometem uma substituição parcial.

O cache rejeita Base64 não canônico, preenchimento excessivo, mídia não JPEG, JPEGs malformados ou truncados, e JPEGs que produzem um aviso durante uma decodificação de imagem completa `sharp` limitada. Ele re-encoda cada imagem aceita como um JPEG canônico, deriva largura e altura dos bytes decodificados em vez de confiar nos campos do chamador, e descarta quaisquer bytes poliglotas finais em vez de retê-los. Apenas o buffer comprimido canônico limitado é cobrado a ambas as cotas. O limite de wire JSON inclui a sobrecarga Base64 para o teto de 32 MiB de entrada decodificada. Cada derivação armazenada registra seu formato/resolução JPEG validado, política de amostragem, versão da derivação, hora de criação, hash de conteúdo computado pelo servidor e hash de referência pai, além do hash de conteúdo pai do chamador confiável. A cancelamento é verificada entre as fases assíncronas de decodificação/hash antes do compromisso atômico do cache.

O produtor de produção reutiliza quadros de corretor já derivados apenas após uma análise visual bem-sucedida, sem um segundo download/extracção de vídeo. Exige `modalityBridgeVideoDrilldownEnabled=true` do operador, `drilldown: true` estrito por parte, e um ID de registro de chave API autenticada. Valores de principal/sessão declarados pelo cliente nunca estabelecem propriedade. Sem as três condições, não hash, redimensiona ou retém quadros adicionais. A falha de retenção preserva a resposta visual utilizável. Pedidos consentidos ignoram o cache de resultados de vídeo completo, de modo que os resultados em cache nunca reproduzem handles.

Respostas JSON e SSE bem-sucedidas expõem no máximo quatro handles opacos no cabeçalho `x-omniroute-video-drilldown` limitado. Origens de navegador autorizadas podem ler esse cabeçalho sem ampliar a política de origem CORS. Novos handles usam `v1.<token base64url aleatório de 32 bytes>`, e o registro retém apenas seus hashes SHA-256. O leitor/parser de cabeçalho também aceita tokens legados de 64 hexadecimais. O consumidor público autenticado é `GET /api/v1/video-bridge/drilldown?handle=...`, independentemente controlado por `modalityBridgeVideoDrilldownRemoteEnabled=true`. A revogação explícita persistida falsa revoga o acesso mesmo quando o fallback legado `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` está habilitado. A retenção de produção tem o fallback legado análogo `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED`. Ambos os fallbacks têm como padrão o estado desligado.

O consumidor deriva a propriedade da chave autenticada, aplica a política de chave e retorna o mesmo 404 para handles desconhecidos, expirados e de outra chave. Aceita `variant=preview|standard|detail` (dimensão máxima JPEG 320/640/1280, nunca ampliada), `limit=1..8` (ou o alias legado `frames`, nunca ambos), `page` baseado em zero, e segundos de foco opcionais `start`/`end`. Chaves de consulta duplicadas e janelas de foco invertidas são rejeitadas. Cada variante retornada tem um hash de seu conteúdo real e metadados de resolução real, vinculados à fonte retida. As variantes são derivadas na leitura em vez de armazenadas como cópias retidas extras. A resposta JSON, incluindo Base64/envelope, é limitada a 32 MiB; uma página excessiva retorna 413 e o cliente deve solicitar menos quadros. As leituras verificam a cancelamento em torno de cada redimensionamento e rechecagem da validade do handle antes de retornar. `DELETE` pelo proprietário é idempotente; a exclusão ou expiração de TTL libera a fonte retida e a contabilidade de uso.

O armazenamento partilhado é local ao processo: os identificadores expiram na reinicialização e não são transferíveis entre processos independentes do OmniRoute. As estatísticas de gestão expõem a política de retenção/remota eficaz e agregam apenas entradas/bytes retidos, nunca media, referências, IDs principais ou identificadores. O painel de configurações de Vídeo mostra esses valores e pode persistir ambos os interruptores de consentimento. Esta documentação de implementação não é evidência de implantação ou promoção ao vivo; a aceitação do modelo real é rastreada separadamente.

Os frames são legendados sequencialmente com o modelo de Vídeo configurado. Uma sobreposição de Vídeo vazia herda a configuração de Visão; se ambos estiverem vazios, o auto-router de Visão seleciona o modelo eficaz capaz de visão. Legendas bem-sucedidas substituem a parte original com um prefixo estável `[Video description:` que também marca o texto como uma observação derivada de media não confiável e informa os modelos a jusante para não seguirem instruções encontradas na media. As chaves de cache de legendas de frames incluem os bytes JPEG, o prompt, o timestamp e o modelo eficaz; apenas legendas bem-sucedidas são armazenadas em cache. As entradas de cache retêm o modelo produtor bem-sucedido real, incluindo um modelo de fallback; a ponte reporta `mixed` quando diferentes frames foram produzidos por diferentes modelos. Um acerto de cache reutiliza essa identidade do produtor em vez de rotulá-la como o plano de roteamento solicitado. O cache de resultados de vídeo completo é indexado em cada entrada que altera a saída — prompt, modelo eficaz, política de amostragem, contagem de frames, modo de análise semântica, a impressão digital SHA-256 da dica de foco normalizada, janela de foco, `transcript`, `audioTranscript`, e a flag de contact-sheet — portanto, mudar qualquer uma dessas dimensões resulta em um erro de cache, nunca em uma reutilização obsoleta. A versão da política de deduplicação visual, o limiar e a contagem de frames candidatos limitados também são explícitos na chave e metadados do cache de resultados; uma mudança de política, portanto, não pode reutilizar uma descrição de vídeo completo obsoleta. Os metadados do cache de resultados v4 mantêm o modo e a impressão digital, nunca a tarefa bruta do usuário. Os metadados de guardrail reportam tanto os modos de análise solicitados quanto os eficazes; um modo `focused` solicitado sem texto utilizável do usuário é reportado como efetivamente `full`.

O guardrail extrai cada parte de vídeo suportada, mas não descreve mais do que `modalityBridgeVideoMaxVideos`. Para um alvo provado ter `supportsVideo === false`, vídeos falhados e acima do limite tornam-se marcadores de texto seguro explícitos, de modo que nenhum vídeo bruto sobrevive. Quando a capacidade é desconhecida, essas partes permanecem intocadas. Alvos com `supportsVideo === true` ignoram a ponte. O sinal de abortar a solicitação do cliente propaga-se através do download, fila do broker, subprocessos e chamadas de legendas; os abortos param entre vídeos e nunca falham abertos para media bruta.

As configurações de runtime são suportadas por DB e validadas por Zod:

| Chave                               | Padrão      | Intervalo / comportamento                                                                             |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Runtime opcional, opt-in                                                                              |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` preserva legendas genéricas; `focused` usa contexto limitado e não confiável do último usuário |
| `modalityBridgeVideoModel`          | `""`        | Herdar o modelo da Ponte de Visão                                                                     |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                  |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, ou `segment_aware` proporcional; falha do detector recai para `uniform`     |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                   |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                        |

Os valores de timeout de Vídeo persistidos legados acima de 120 segundos são limitados ao prazo do broker; novas gravações de configurações acima desse limite são rejeitadas. `GET /api/modality-bridge/video/runtime` requer localidade de loopback confiável antes da autenticação ou sondagem de runtime, e depois requer autenticação de gestão. Retorna apenas versões FFmpeg/ffprobe disponíveis e sanitizadas, e um motivo fixo quando o runtime não está disponível. O endpoint de extração interna não é uma API pública de upload: a saturação da fila retorna `503` mais `Retry-After`, uma desconexão do chamador retorna `499`, e o prazo fixo do broker retorna `504`. Respostas convertidas adicionam `video->text;model=<visionModel>;parts=<videos>` ao cabeçalho central `x-omniroute-modality-bridge` sem remover segmentos de Visão ou Áudio.

### PII Masker (`piiMasker.ts`)

Executa em **ambas** as etapas.

- **`preCall`** clona a carga útil, percorre `system`, `messages`, `input` e `prompt` (incluindo itens de string simples), e aplica `processPII()` (de `@/shared/utils/inputSanitizer`) aos campos de string `content`/`text`. Quando `PII_REDACTION_ENABLED=true`, PII detectada é redigida na carga útil de saída. Isso é independente de `INPUT_SANITIZER_MODE` (que apenas controla a política de injeção de prompt). Quando a redacção está desligada, a chamada regista contagens de deteção sem reescrever o conteúdo.
- **`postCall`** clona profundamente a resposta, executa `sanitizePIIResponse()` mais o mascarador de formato da API de Respostas (`maskResponsesOutput` — cobre `output_text` e `output[].content[].text`). Se ocorrer alguma redacção, a resposta modificada substitui a original.

O guardrail nunca bloqueia; apenas anota (`meta.detections`, `meta.redacted`) ou reescreve.

### Prompt Injection (`promptInjection.ts`)

Detecta estruturas adversariais no conteúdo fornecido pelo utilizador e aplica a política configurada. O comportamento é controlado por variáveis de ambiente e opções do construtor:

| Configuração       | Variável de ambiente                                                                                 | Padrão | Efeito                                                                                                                                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ativado            | `INPUT_SANITIZER_ENABLED`                                                                            | `true` | Quando `false`, o guardrail é interrompido.                                                                                                                                                             |
| Modo               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn` | Política de injeção: `block`, `warn` ou `log`. (`redact` é aceito para compatibilidade retroativa, mas **não** remove o texto de injeção; a reescrita de PII é controlada por `PII_REDACTION_ENABLED`.) |
| Limite de bloqueio | Opção `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Severidade mínima necessária para bloquear. Médio é apenas de observação por padrão.                                                                                                                    |

**Precedência do modo** (`getMode`): `options.mode` do chamador → `INJECTION_GUARD_MODE` **sobrescrita de feature-flag do DB** (Dashboard → Configurações → Feature Flags) → variável de ambiente `INJECTION_GUARD_MODE` → variável de ambiente `INPUT_SANITIZER_MODE` → `warn`. Portanto, uma sobrescrita do dashboard prevalece sobre as variáveis de ambiente, de modo que a interface de usuário das Feature Flags controla o guardião em execução ao vivo (sem reinício). A leitura do DB é à prova de falhas: se ocorrer um erro, o guardião recua para o comportamento baseado em ambiente, e quando nenhuma sobrescrita é definida, o comportamento é idêntico à resolução apenas por ambiente.

Fontes de detecção:

1. `sanitizeRequest()` de `@/shared/utils/inputSanitizer` (detetor compartilhado usado em outros locais do pipeline).
2. `DEFAULT_GUARD_PATTERNS` incorporados (atualmente `system_override_inline` e `markdown_system_block`, ambos de severidade `high`).
3. `customPatterns` opcionais passados através das opções do construtor (strings, regex ou registros `{ name, pattern, severity }`).

Quando `mode === "block"` **e** pelo menos uma deteção atende ao limite de severidade, `preCall` retorna `{ block: true, message: "Pedido rejeitado: conteúdo suspeito detectado" }`. Nos modos `warn`/`log`, o guardrail regista, mas permite a chamada. O helper compartilhado `evaluatePromptInjection()` também é exportado para chamadores que precisam avaliar prompts sem passar pelo registro.

**Limite de varredura (v3.8.20):** o detetor apenas inspeciona os **primeiros 16 KB** do texto do prompt unido — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) em `src/shared/utils/inputSanitizer.ts`. Tanto `detectInjection()` quanto `evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` antes de executar o loop de padrões. As diretivas de injeção estão próximas do topo de uma entrada, portanto, isso limita o uso de CPU/GC em cargas úteis de várias centenas de KB sem enfraquecer a deteção (cf. #3932, #4041).

### Máscara de Credenciais (`credentialMasker.ts`)

Executa em **ambas** as etapas, por último na cadeia padrão (prioridade `95`). Redige padrões bem conhecidos de chave de API / token secreto do payload de saída (conteúdo da mensagem, argumentos de chamada de ferramenta, resultados da ferramenta) **e** da resposta do provedor, de modo que uma credencial colada em um prompt (ou ecoada de volta por um resultado de ferramenta) não seja vazada para o provedor upstream ou de volta ao cliente.

- **Apenas por opção**, mesma convenção que a redação de PII (Regra Rigorosa #20-adjacente): desativado a menos que `settings.credentialRedactionEnabled === true` **ou** `CREDENTIAL_REDACTION_ENABLED=true`. Com isso desativado, o guardrail não faz nada — nunca bloqueia e nunca reescreve.
- `redactCredentials()` percorre toda a árvore de payload/resposta (`walkValue()`, seguro contra poluição de protótipo, seguro contra ciclos via `WeakSet`) e substitui correspondências por um espaço reservado `[REDACTED:<type>]`, clonando apenas os ramos que realmente mudaram.
- `CREDENTIAL_PATTERNS` cobre chaves de provedores de LLM (OpenAI, OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), tokens de VCS/SaaS (GitHub, Slack, Linear, Notion, npm, Postman, Discord), chaves de pagamento (Stripe, Square), chaves de nuvem (chave de acesso AWS, Twilio, SendGrid, Mailgun), chaves privadas / JWTs, strings de conexão que contêm credenciais (`mongodb://user:pass@...`, etc.), e um padrão genérico de cabeçalho `Authorization`/`x-api-key`/`api-key`/`apikey`. Chaves em formato de cabeçalho (`authorization`, `x-api-key`, `api-key`, `apikey`) são redigidas estruturalmente (apenas valor, prefixo de esquema como `Bearer `/`Basic ` preservado) em vez de via regex de texto genérico.
- O guardrail nunca bloqueia; ele apenas reescreve (`modifiedPayload` / `modifiedResponse`) e anota (`meta.credentialsRedacted`, `meta.count`).

Guarda de regressão: `tests/unit/credential-masker-guardrail.test.ts`.

## Contrato Base (`base.ts`)

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
  block?: boolean; // true interrompe imediatamente a cadeia
  message?: string; // apresentada em caso de bloqueio
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // devolvido por preCall para reescrever o pedido
  modifiedResponse?: TValue; // devolvido por postCall para reescrever a resposta
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

Uma proteção assinala «sem alterações» devolvendo `void`, `{}` ou
`{ block: false }`. Devolver um `modifiedPayload`/`modifiedResponse` substitui
o valor que percorre a cadeia para as proteções subsequentes.
`signal?: AbortSignal` transmite o ciclo de vida do chamador às proteções. O cancelamento de um pedido é a exceção deliberada de abertura em caso de falha: as pontes multimédia interrompem o trabalho e efetuam a limpeza sem restaurar os dados multimédia em bruto para um destino que se sabe não os suportar.

## Registo (`registry.ts`)

A instância única `guardrailRegistry` expõe:

- `register(guardrail)` — adiciona uma proteção (ou substitui-a pelo nome normalizado) e
  reordena por `priority` ascendente.
- `clear()` / `list()` — auxiliares administrativos.
- `runPreCallHooks(payload, context)` — percorre as proteções ativas, encaminha o
  payload através de `modifiedPayload` e para no primeiro `block: true`.
- `runPostCallHooks(response, context)` — o mesmo fluxo no lado da resposta.
- `resetGuardrailsForTests({ registerDefaults })` — limpa o estado e, opcionalmente,
  regista novamente as predefinições para garantir um isolamento limpo dos testes.

Ambos os executores devolvem `{ blocked, payload|response, results, guardrail?, message? }`,
em que `results` é um array de registos `GuardrailExecutionResult` que incluem
os campos `blocked`, `skipped`, `modified`, `error` e `meta` por proteção,
úteis para rastreio.

### Desativar Proteções por Pedido

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agrega uma
lista sem duplicados dos nomes das proteções que devem ser ignoradas no pedido
atual. Origens (todas opcionais e combinadas):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` no corpo do pedido (nível superior)
- `metadata.disabledGuardrails` no corpo do pedido
- Cabeçalho `x-omniroute-disabled-guardrails` (ou o antigo
  `x-disabled-guardrails`)

Os valores podem ser arrays de strings ou uma string separada por vírgulas; os nomes são
normalizados para minúsculas em kebab-case (`pii_masker` → `pii-masker`). O resultado
é transmitido através de `context.disabledGuardrails` para o registo, que ignora
as proteções correspondentes (`skipped: true` em `results`).

## Ordem de execução

Para cada pedido que passa por `src/sse/handlers/chat.ts` e
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` cria a lista de exclusão a partir da chave de API, do corpo
   e dos cabeçalhos.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` executa os mecanismos de proteção por ordem
   crescente de prioridade:
   - Os mecanismos de proteção desativados são registados como `skipped`.
   - O `preCall` de cada mecanismo de proteção pode reescrever a carga útil através de `modifiedPayload`.
   - O primeiro `block: true` interrompe a cadeia e o processador devolve
     uma resposta de rejeição do mecanismo de proteção.
3. A carga útil (potencialmente reescrita) segue para o encaminhamento combinado e para o envio
   ao serviço a montante.
4. Depois de a resposta ser preparada, `guardrailRegistry.runPostCallHooks(...)`
   executa a mesma cadeia na resposta. Neste caso, `block: true` descarta a resposta
   do serviço a montante.

Os mecanismos de proteção que geram exceções são registados com `error: <message>` e registados no log através de
`logger.warn`, mas a cadeia prossegue — uma conceção de falha permissiva.

## Configuração

Variáveis de ambiente lidas pelos mecanismos de proteção integrados:

| Variável                              | Utilizada por            | Efeito                                                                                                                                               |
| ------------------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Defina como `false` para desativar completamente a deteção.                                                                                          |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Política de injeção: `warn`, `block` ou `log`. O valor legado `redact` não reescreve o texto da injeção.                                             |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Modo do mecanismo de proteção contra injeção; é também um sinalizador de funcionalidade da BD que **substitui** as variáveis de ambiente (BD > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | Gravidade mínima que `MODE=block` rejeita: `high` (predefinição), `medium` ou `low`.                                                                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | Alias legado de `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | Quando definido como `true`, as PII do pedido são ocultadas (independentemente do modo de injeção).                                                  |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (a jusante) | Controla o comportamento do ocultador no lado da resposta.                                                                                           |

Os mecanismos de proteção do Modality Bridge leem a configuração em tempo de execução a partir do armazenamento
de definições suportado pela BD (`getSettings()`), e não das variáveis de ambiente. As chaves principais da visão são
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` e
`modalityBridgeCacheMaxEntries`. As chaves legadas
`visionBridge*` são aceites apenas como a alternativa de leitura documentada durante um ciclo;
as escritas efetuadas pelo painel utilizam as chaves principais. As predefinições e o resolvedor
alternativo encontram-se em `src/shared/constants/modalityBridgeDefaults.ts`, sendo as constantes
legadas mantidas em `src/shared/constants/visionBridgeDefaults.ts`.

O áudio utiliza `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` e `modalityBridgeAudioMaxClips`, além das definições
`modalityBridgeCache*` partilhadas. O áudio não dispõe de uma alternativa baseada em chaves legadas, uma vez que estas
chaves foram introduzidas com o esquema do Modality Bridge.

O vídeo utiliza `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` e
`modalityBridgeVideoTimeout`, além das definições `modalityBridgeCache*` partilhadas.
Está desativado por predefinição porque o FFmpeg/ffprobe são dependências operacionais
opcionais e a legendagem de fotogramas acrescenta latência e custos de modelo.

## Mecanismos de proteção personalizados

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

Passos:

1. Crie `src/lib/guardrails/myGuardrail.ts` como uma extensão de `BaseGuardrail`.
2. Implemente `preCall` e/ou `postCall`.
3. Registe durante a importação (através de `registerDefaultGuardrails`) ou
   chame `guardrailRegistry.register(...)` em tempo de execução — o registo substitui
   qualquer mecanismo de proteção anterior com o mesmo nome normalizado.
4. Adicione testes em `tests/unit/` (exemplos existentes:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testes

Utilize `resetGuardrailsForTests()` entre testes para começar a partir de um estado conhecido.
Passe `{ registerDefaults: false }` para começar com um registo vazio e
registar apenas os mecanismos de proteção em teste. O Vision Bridge aceita injeção de
dependências (`deps.getSettings`, `deps.callVisionModel`); o Audio Bridge disponibiliza os
pontos de integração equivalentes para definições, capacidades, seleção do modelo STT, verificações
de credenciais e transcrição. Desta forma, os testes podem exercitar ambos os fluxos sem acesso à
base de dados ou à rede.

## Consulte também

- `src/lib/guardrails/` — implementação
- `src/shared/utils/inputSanitizer.ts` — detetor partilhado que suporta a
  deteção de injeção de prompts e a ocultação de PII
- `src/shared/constants/visionBridgeDefaults.ts` — predefinições do Vision Bridge e
  lista de modelos com utilização obrigatória do bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — predefinições partilhadas de execução do Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — camada ortogonal (circuit breaker, períodos de espera)
- `docs/reference/ENVIRONMENT.md` — referência completa das variáveis de ambiente

## Cobertura de rotas e red team do mecanismo contra injeção (Fase 8 · Bloco D)

O mecanismo contra injeção (`createInjectionGuard` / `withInjectionGuard`) abrange todas as rotas
que aceitam prompts do utilizador. Respeita `INJECTION_GUARD_MODE` (predefinição `warn` = apenas registo;
`block` = devolve HTTP 400 `SECURITY_001`).

| Tipo              | Rotas                                                                                                                                                | Modo predefinido |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Texto (existente) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn             |
| Generativo        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn             |
| Dados             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn             |

A extração de texto (`extractMessageContents`) abrange `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red team (todas as noites, `nightly-llm-security.yml`):** o promptfoo valida que cada rota bloqueia
o corpus OWASP-LLM quando `INJECTION_GUARD_MODE=block`; o garak executa sondagens (é ignorado sem o segredo).
`moderations` está incluído por motivos de consistência — os operadores no modo de bloqueio podem isentá-lo através de
`resolveDisabledGuardrails`.

O fluxo de trabalho noturno (`.github/workflows/nightly-llm-security.yml`, cron + execução
manual) tem duas tarefas:

- **`promptfoo-guard` (bloqueante)** — executa `promptfoo eval -c promptfooconfig.yaml`
  com `INJECTION_GUARD_MODE=block`. Cada caso adversarial (por exemplo, "ignore all
  previous instructions…", jailbreaks ao estilo DAN) verifica que a resposta contém
  `error.code === "SECURITY_001"`, ou seja, que o mecanismo rejeitou efetivamente o pedido.
- **`garak` (consultivo)** — executa o garak com `--probes promptinject,dan,leakreplay`
  numa instância local do OmniRoute (`http://localhost:20128/v1`). Está condicionado à existência de um
  segredo do fornecedor (`PROMPTFOO_PROVIDER_KEY`); é ignorado de forma adequada e recebe o sufixo
  `|| true`, pelo que gera um relatório sem causar uma falha na CI.

A cobertura do auxiliar do mecanismo (`createInjectionGuard` / `withInjectionGuard`)
abrange todas as rotas `/v1` que recebem prompts; o texto do prompt é obtido de
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` por
`extractMessageContents()` em `src/shared/utils/inputSanitizer.ts`.
