# Guardrails (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Fonte da verdade:** `src/lib/guardrails/`
> **Última atualização:** 2026-08-29 — v3.8.51 (A proveniência da transcrição da Video Bridge é declarada pelo chamador,
> ainda não verificada pelo servidor — esclarecido conforme #11661)

Guardrails impõem segurança, política e transformações de conteúdo na fronteira
entre o OmniRoute e os provedores upstream. Cada guardrail pode inspecionar (e
opcionalmente rejeitar, transformar ou anotar) cargas de solicitação (`preCall`) e
respostas upstream (`postCall`).

O sistema é **fail-open**: se um guardrail falhar durante a execução, o registro
registra o erro e continua com o próximo guardrail em vez de falhar a
solicitação. O bloqueio é uma decisão explícita (`block: true`), nunca um acidente.

## Guardrails Integrados

O registro carrega automaticamente seis guardrails em ordem de prioridade na importação
(veja `registry.ts` → `registerDefaultGuardrails()`):

| Prioridade | Nome                | Estágio(s)     | Arquivo               |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Números de prioridade mais baixos são executados **primeiro**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Intercepta solicitações que contêm imagens destinadas a **modelos não visuais** e
ou redireciona toda a solicitação para um modelo capaz de visão ou substitui as partes de imagem
por descrições textuais produzidas por um modelo de visão configurável antes
da chamada upstream. Isso permite que provedores apenas de texto lidem de forma transparente
com cargas multimodais.

Fluxo:

1. Pular se o modelo alvo já suporta visão (a menos que apareça na lista de
   modelos forçados `isVisionBridgeForcedModel`).
2. Extrair partes de imagem via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), que delega ao **detector de mídia unificado**
   `detectMediaParts()` em `open-sse/utils/mediaParts.ts` — a
   única fonte de verdade compartilhada com o filtro de compatibilidade combo.
   A extração é permitida apenas para partes de nível superior das formas
   que `replaceImageParts` pode reverter (o contrato de extração↔substituição): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, e Responses API `input_image`. Acertos aninhados e
   formas apenas de indicador são material do filtro combo e nunca são extraídos.
   Pular se nenhum for encontrado.
3. Resolver a configuração em tempo de execução via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): novas chaves de configuração
   `modalityBridge*` vencem; chaves legadas `visionBridge*` permanecem como um **fallback de um ciclo**
   (janela de retrocesso). Pular antes de qualquer travessia de mídia quando a
   ponte está desativada.
4. O seletor de modo (`modalityBridgeVisionMode`, veja a tabela abaixo) decide
   redirecionar ou descrever. O redirecionamento retorna `modifiedPayload` com apenas `model`
   trocado, além de meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Caminho de descrição: limitar imagens a `maxImages`, compor o prompt ciente da tarefa,
   consultar o cache de descrição, chamar o modelo de visão **em paralelo**
   (`Promise.allSettled`), e injetar partes de texto `[Image N]: <description>` em
   seus lugares. Uma descrição falhada resulta em `null` e a parte de imagem original é
   **preservada** (#4012) — exceto no caminho de descrição combo quando cada
   descrição falhou, onde um upstream confirmado não visual recebe um
   `(indisponível — nenhum provedor capaz de visão conectado)` stub em vez disso (#8430).
6. Retornar `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Seletor de modo (`modalityBridgeVisionMode`)

| Modo       | Padrão | Comportamento                                                                                                                                                                                                                                                                                                                 |
| ---------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Heurística legada, inalterada (#6640/#7204): modelos não combo/`auto/` redirecionam para o melhor modelo de visão, a menos que o modelo original já tenha credenciais utilizáveis (então descreve); alvos combo sempre descrevem.                                                                                             |
| `describe` |        | Sempre descreve — o bloco de redirecionamento é completamente ignorado; o modelo escolhido pelo usuário sempre responde.                                                                                                                                                                                                      |
| `reroute`  |        | Forçar redirecionamento: o guardião de modelo com credenciais mantidas é ignorado. O guardião de credenciais do **alvo** de redirecionamento ainda se aplica — quando nenhum alvo de visão utilizável existe, a solicitação cai para descrever, de modo que imagens brutas nunca alcancem um backend apenas de texto (#8430). |

Modos forçados interrompem **antes** que a heurística automática seja executada; o comportamento `auto`
é idêntico em bytes ao guardrail pré-PR-1.

#### Escopo da chave da API (`visionBridgeKeyScope.ts`)

Quando a chave da API do chamador restringe `allowedConnections`, pools de cota
(`allowedQuotas`) ou modelos (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), a ponte só
escolhe modelos de redirecionamento e descrição que a chave pode usar, em conexões que a chave pode
usar. A chamada de descrição então sempre passa pelo loop auto-referencial OmniRoute com
o cabeçalho `x-omniroute-self-loop-key-id`, assim a solicitação de chat recebida
aplica novamente a política de conexão e modelo daquela chave. `enforceApiKeyPolicy()`
honra esse cabeçalho apenas junto com o portador do loop auto-referencial, então só pode
restringir o acesso, e um id que não se resolve é rejeitado.

Se nenhum modelo de visão for permitido para a chave, o caminho de descrição se afasta e
a solicitação passa inalterada, o mesmo comportamento fail-open de um guardrail desativado
(meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Solicitações sem uma chave, e chaves sem essas restrições, se comportam exatamente como
antes.

#### Prompt de descrição ciente da tarefa (`modalityBridgeVisionTaskAware`)

Padrão **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) anexa
o texto da **última mensagem do usuário** (truncado para 500 caracteres) ao prompt
base de descrição, direcionando a descrição para o que o usuário realmente pediu
(padrão codex-vision-proxy) e pedindo ao modelo de visão para transcrever o texto
visível. Com a flag desligada — ou sem texto do usuário — o prompt base é usado
sem alterações.

A própria solicitação compatível com OpenAI do loop de auto-descrição (`callVisionModelSingle()`
em `visionBridgeHelpers.ts`) sempre solicita `image_url.detail: "high"` —
incondicionalmente, para cada chamador/provedor, não condicionado a nenhum sinal
do cliente. A amostragem de baixa detalhamento degrada a precisão do OCR para
exatamente a tarefa de transcrição de texto que este prompt pede, então a chamada
de descrição em si sempre pede alto detalhamento, independentemente do nível de
detalhamento que a solicitação original usou. Isso afeta apenas o corpo da
solicitação interna de descrição; não altera como o OmniRoute encaminha o
próprio `image_url.detail` do chamador na solicitação principal — esse padrão é
aplicado separadamente, e apenas para clientes OpenCode detectados, em
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). O
ramo de formato wire da Anthropic do loop de auto-descrição não possui campo
`detail` e não é afetado por nenhum padrão.

#### Limite de saída da descrição (`modalityBridgeVisionMaxChars`)

| Chave                          | Padrão | Faixa            |
| ------------------------------ | ------ | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` ou 100–50000 |

`0` (padrão) significa **sem limite** — a descrição retornada por
`callVisionModel()` é passada sem modificações, preservando o comportamento
existente. Qualquer valor na faixa de 100–50000 truncará a descrição com um
sufixo `…` antes de ser inserida como `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` em `src/lib/guardrails/visionBridge.ts`).
Aumente isso para tarefas de OCR com muitos detalhes onde o modelo a jusante
precisa da transcrição completa; diminua para limitar o uso de tokens em modelos
de visão mais verbosos. O campo do painel é encontrado na aba de Visão no painel
Avançado (`modality-bridge-max-chars` em `ModalityBridgeVisionTab.tsx`) e limita
qualquer valor entre 1 e 99 até o piso de 100, enquanto deixa um `0` explícito
inalterado — `0` é um valor Zod válido por si só
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), não meramente
o padrão "não definido".

#### Cache de descrição (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL em memória para saídas de descrição, compartilhado em todo o processo.
Chave = `sha256(imageRef + composedPrompt + configuredBridgeModel)` com
formatação de prefixo de comprimento (sem colisões de limite de campo). O componente
do modelo é o modelo de ponte **configurado**, não o modelo que realmente respondeu —
`callVisionModel` pode recuar internamente, e a chave por tentativa fragmentaria
o cache. Descrições falhadas nunca são armazenadas em cache. Configurações:

| Chave                           | Padrão | Faixa   |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Normalização de imagem remota (auto-chamada de descrição/busca base64)

Quando a ponte busca uma imagem **remota** por conta própria — a auto-chamada de
descrição da Anthropic e a conversão base64 do formato wire claude
(`ensureBase64ImagesForClaudeWire`), ambas via
`fetchRemoteImageAsDataUri()` em `visionBridgeHelpers.ts` — o URI de dados resultante
é passado por `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) antes de ser incorporado na solicitação do
modelo de visão. Imagens excessivamente grandes são redimensionadas para uma
**borda longa de 2048px** (correspondendo ao limite de redimensionamento que a OpenAI/Anthropic
já aplica no lado do servidor), o que reduz bytes de upload/latência sem mudar
o que o modelo de visão vê. O redimensionamento usa `sharp`, carregado via importação
dinâmica: em uma plataforma onde seu binário nativo falha ao carregar, `normalizeDataUri()`
**nunca lança** — ele recua para uma passagem dos bytes originais, então o caminho
de descrição/conversão base64 sempre continua funcionando. Bytes que não são imagem
(uma busca que não retornou uma imagem decodificável) também são passados sem alterações.
Essa normalização é restrita a imagens que a ponte busca para sua própria auto-chamada —
nunca é aplicada ao payload bruto de passagem do chamador, consistente com o
princípio de mutação apenas por opt-in (Regra Dura #20).

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
um valor `modalityBridge*` definido pelo operador); as chaves legadas continuam a ser aceitas
como uma alternativa de leitura por um ciclo de lançamento.

#### Cabeçalho de transparência + estatísticas

Respostas transformadas pela descrição carregam
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(construído por `buildModalityBridgeHeader()` em `modalityBridge/bridgeStats.ts`,
carimbado por `withModalityBridgeHeader()` em `src/sse/handlers/chatHelpers.ts`).
Solicitações redirecionadas não recebem **nenhum** cabeçalho — o payload foi
inalterado e a troca de modelo já é visível no campo `model` do corpo da resposta.

`GET /api/modality-bridge/stats` (autenticação de gerenciamento, mesmo nível que
`GET /api/settings`) retorna os contadores em memória por modalidade
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` para `vision`, `audio` e
`video`. `averageLatencyMs` usa `latencySamples`, não todas as tentativas, como seu
denominador; uma operação sem temporização não fabrica uma amostra de zero milissegundos.
`bridged` permanece o alias compatível com versões anteriores para conversões bem-sucedidas;
tentativas falhadas não o incrementam.
Os contadores são redefinidos na reinicialização do processo por design
(telemetria, não contabilidade).

#### Configuração do painel

A página dedicada do painel é
`/dashboard/settings/modality-bridge`. Seus guias `Vision`, `Audio`
e `Video` endereçáveis por URL preservam os parâmetros de consulta ao mudar o valor de `tab`.
O guia Vision expõe habilitação, modo, seleção de modelo (incluindo o padrão automático),
prompting ciente da tarefa, limites avançados de tempo/imagem/comprimento da descrição/cache,
contadores de tempo de execução e uma solicitação de amostra protegida. O guia Audio também
está ativo: ele expõe habilitação, um seletor de modelo apenas STT com Auto, limites de tempo/máximo-clipe,
contadores de áudio e um teste de amostra `input_audio`. O guia Video é funcional: ele relata
o estado de execução do FFmpeg/ffprobe — um dos quatro estados explícitos da UI (`unknown` enquanto
o probe está em voo ou não pôde ser concluído, `restricted` em um host de painel não-loopback onde o probe
é pulado do lado do cliente, `unavailable` uma vez sondado e confirmado como ausente, ou `available`
com as versões do FFmpeg/ffprobe) — persiste limites de habilitação/modelo/quadro/vídeo/tempo limite,
filtra o seletor de modelo para modelos capazes de visão e expõe contadores de vídeo.

O antigo cartão Vision Bridge nas configurações de IA é um link de compatibilidade para a
nova página; ele não possui mais uma segunda cópia do formulário. Provedores de Mídia também
vinculam fluxos de Trabalho de Imagem para Texto e Fala para Texto às respectivas guias do Modality
Bridge sem remover o playground existente de Fala para Texto.

**Desvio de admissão de auto-loop:** quando a chamada de descrição passa pelo
próprio `/v1` auto-loop do OmniRoute (modelo de provedor não padrão), a sub-solicitação envia
`x-omniroute-admission-bypass: internal` e é autenticada com a credencial de auto-loop
resolvida — o sentinela local `sk_omniroute` em modo local, ou a chave de ambiente configurada pelo
operador `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` ( #1350 ) para que implantações com
`REQUIRE_API_KEY=true` ainda possam executar a chamada de descrição. O desvio
é honrado apenas para essas credenciais exatas, então clientes externos não podem usar o
cabeçalho para pular a admissão.

Os padrões legados estão em `src/shared/constants/visionBridgeDefaults.ts`; os
novos padrões cientes de modo/tarefa/cache e o resolvedor de configurações estão em
`src/shared/constants/modalityBridgeDefaults.ts`. O guardrail expõe uma
opção de construtor `deps` para que os testes possam injetar implementações falsas de
`getSettings` e `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Intercepta solicitações de chat que contêm áudio antes que cheguem a um alvo que não é
conhecido por aceitar entrada de áudio. Ele nunca redireciona a solicitação de chat: as partes de áudio são
transcritas através do endpoint multipart compatível com OpenAI existente e o
modelo de chat escolhido continua com transcrições de texto.

Fluxo:

1. Resolve `supportsAudio` através de `getResolvedModelCapabilities()`. Metadados explícitos
   do registro de provedores vencem, depois metadados de modelo estático, depois `modalities_input` sincronizados.
   Uma lista de entrada declarada sem `audio` é `false`; nenhuma evidência de capacidade permanece `null`.
   Tanto `false` quanto `null` ativam a ponte conservadora, enquanto `true` a contorna.
2. Resolve as configurações `modalityBridgeAudio*` e extrai partes de áudio de nível superior
   que podem ser cortadas de cada mensagem através do detector compartilhado `detectMediaParts()`.
   As formas de wire suportadas são `input_audio`, `audio_url` e `source.media_type: "audio/*"` do OpenAI.
   Áudio aninhado é detectado para roteamento, mas não removido pelo caminho de corte. O trabalho é limitado por
   `modalityBridgeAudioMaxClips`; partes posteriores permanecem inalteradas.
3. Honra um `provider/model` configurado, ou deixa `selectAudioBridgeModel()` percorrer
   `AUDIO_TRANSCRIPTION_PROVIDERS` na ordem do catálogo estável e selecionar o primeiro
   modelo com uma credencial de provedor ativo utilizável.
4. `callAudioTranscription()` converte áudio base64/data-URI em um multipart
   `file`, ou baixa um `audio_url` remoto através do guardião de saída apenas público com pinagem de DNS e um limite de 25 MB.
   Em seguida, POSTa o arquivo e o modelo selecionado para o auto-loop local `/v1/audio/transcriptions`,
   autenticado com `resolveSelfLoopBearer()`. A rota de transcrição existente realiza a busca normal
   de credenciais, manuseio de cooldown/límite de taxa e despacho de provedores.
5. Chamadas bem-sucedidas substituem suas partes por `[Audio N]: <transcript>`. Chamadas
   são executadas com `Promise.allSettled`: uma falha individual preserva essa parte de áudio original
   (contrato #4012). Se todas as chamadas falharem e o alvo for provado como
   `supportsAudio === false`, as partes se tornam
   `[Audio N]: (indisponível — nenhum provedor STT conectado)` (contrato #8430). Para um alvo desconhecido
   (`null`), um resultado de todas as falhas permanece inalterado. Um alvo comprovado apenas de texto
   sem credencial STT utilizável recebe o mesmo stub explícito sem emitir uma chamada de rede.

Transcrições bem-sucedidas usam o cache LRU/TTL do Modality Bridge em todo o processo. A
chave combina a referência de áudio, o rótulo da operação `audio-transcription` estável
e o modelo STT selecionado; falhas nunca são armazenadas em cache. Tentativas de áudio atualizam
os contadores compartilhados `bridged`, `cacheHits`, `failures` e `lastUsedAt`.
Respostas transformadas carregam
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; solicitações inalteradas
não recebem um segmento Audio Bridge.

As configurações em tempo de execução são respaldadas por DB e validadas por Zod:

| Chave                         | Padrão  | Faixa          |
| ----------------------------- | ------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —              |
| `modalityBridgeAudioModel`    | `""`    | Auto ou ID STT |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10           |

O cache compartilhado permanece controlado por `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` e `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepta partes de vídeo de nível superior nas mensagens de Chat Completions e
na API de Respostas `input` antes que um alvo sem suporte nativo de vídeo conhecido
seja chamado. As formas suportadas são `input_video`, `video_url`, `video_source`,
URLs HTTPS e URIs de dados `data:video/*;base64,...`. Nomes de arquivos simples em texto
não são tratados como vídeo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) é responsável pela travessia de
requisições, pela verificação de capacidade/política, pela agregação por requisição
e pelo payload da resposta. O trabalho por vídeo — aquisição, cache de resultado
completo, descrição de uma sequência de quadros (que funde qualquer transcrição de áudio
declarada pelo chamador) e métricas/aborto/limpeza por tentativa — está oculto atrás
de `processVideoPart` em `videoBridgePipeline.ts`, chamado uma vez por parte de vídeo
dentro do loop de `preCall`. Esse módulo também define os limites de porta explícitos
`VideoMediaBrokerPort` (adquirindo bytes e extraindo quadros amostrados),
`VideoAudioTranscriptionPort` (fundindo uma transcrição de áudio declarada pelo
chamador com as legendas amostradas) e `VideoDrilldownPort` (a forma de armazenamento
bruto legado). A retenção de STT e quadros de produção é composta em torno da porta
descritiva através de `createVideoSttAdapter` e `createVideoDrilldownAdapter`; este
último utiliza o ciclo de vida de manipulador opaco compartilhado.

O caminho de requisição público `/v1` nunca importa ou invoca um subprocesso. Vídeos
remotos são baixados sob um limite de 50 MiB; vídeos base64 inline têm um limite
conservador de 36 MiB decodificados por vídeo, para que o modelo/mensagens/envelope
de formatação possam permanecer dentro do limite de admissão de requisição JSON
público de 50 MiB. Estimativas de comprimento inline e tamanho decodificado são
verificadas antes da alocação. HTTPS é exigido na URL remota inicial e em cada
redirecionamento, utilizando a proteção de saída pública existente com pinagem de DNS.
Os bytes então cruzam o exato limite interno do corretor `POST /api/modality-bridge/video/extract`.
Essa rota é tanto `LOCAL_ONLY` quanto `SPAWN_CAPABLE`, aceita apenas uma requisição
autenticada por processo, de loopback confiável, e nunca aceita uma URL, caminho de
sistema de arquivos, executável ou lista de argumentos. O pipeline de tamanho do corpo
da API e o leitor de corpo incremental do manipulador impõem independentemente um
limite de entrada de corretor de 50 MiB. Sua fila limitada executa uma extração por
vez, permite quatro trabalhos pendentes e limita a entrada pendente a 100 MiB.

Dentro do corretor, `ffprobe` lê um arquivo local privado; a lista de formatos
permitidos fixa exclui formatos de playlist e manifesto. Para contêineres da família
MOV permitidos, referências de dados MOV externas permanecem desativadas por padrão,
e o comando fixo não opta por elas. Tanto `ffprobe` quanto `ffmpeg` usam a lista
branca de protocolo apenas `file`, um thread, arrays de argumentos fixos, sem shell,
e executáveis resolvidos a partir de `PATH`. Streams de capa de imagem anexada não
são candidatos jogáveis. Todos os streams jogáveis devem satisfazer os limites, e
um stream padrão explícito é preferido antes do fallback determinístico de menor
índice. Vídeos são limitados a 600 segundos, 8.192 pixels por dimensão e
33.554.432 pixels de origem. FFmpeg amostra de 1 a 16 quadros JPEG intermediários,
reduz a borda longa para no máximo 1.024 pixels sem aumentar entradas menores, e
nunca recebe uma URL. A amostragem é `uniforme` por padrão. As políticas opcionais
`scene_aware` e `segment_aware` realizam uma passagem adicional fixa do FFmpeg sobre
o stream local já validado, selecionam timestamps de cena `showinfo` limitados e
recuam deterministicamente para os mesmos pontos médios uniformes em caso de falha
do detector, timeout, saída malformada ou um conjunto de candidatos vazio. O modo
consciente de segmentos aloca amostras de pontos médios proporcionalmente aos
intervalos de cena validados; evidências conscientes de segmentos e comportamento
de fallback são detalhados abaixo. O limite rígido de 16 quadros é aplicado após
a seleção em cada política. Quando uma requisição consciente de cena tem apenas um
orçamento de um quadro, ela usa o ponto médio uniforme da janela de vídeo completo
ou da janela de foco ativa e relata `policyEffective: uniform`: um único quadro de
cena selecionado não pode preservar ambas as extremidades temporais. Um chamador pode
opcionalmente fornecer uma janela de foco finita (`start`/`end` segundos); os limites
são restringidos à duração da mídia, janelas invertidas ou não finitas são rejeitadas,
e todas as políticas de amostragem são realizadas apenas dentro do intervalo normalizado.
A janela resultante é incluída nos metadados de amostragem e no prefixo de descrição
não confiável para que modelos a jusante possam distinguir um excerto focado da linha
do tempo completa.

O foco semântico de legendas é uma configuração separada e explícita. O modo de
análise padrão `full` preserva o prompt de quadro existente e nunca encaminha o texto
da requisição para o modelo de legendas. No modo `focused`, a ponte lê apenas o
último `text`/`input_text` não vazio criado pelo usuário do mesmo contêiner de Chat
ou Respostas, normaliza para NFC, colapsa caracteres de controle e espaços em branco,
e limita a 500 pontos de código Unicode. Um resultado vazio recua para o exato
prompt `full`. Uma dica utilizável é serializada como JSON em um bloco dedicado
de contexto de usuário não confiável e pode apenas priorizar detalhes observáveis;
não pode substituir o aviso separado contra seguir instruções visíveis ou audíveis
na mídia. O foco textual nunca infere `start`/`end` ou altera o amostrador temporal.

#### FU-07 evidência de segmento estrutural

`segment_aware` utiliza uma passagem de pré-análise limitada sobre o fluxo de vídeo local já validado. A cadeia de filtros fixa primeiro redimensiona para no máximo 320 pixels de largura, detecta mudanças de cena e intervalos congelados, e então amostra a 1 quadro por segundo para desfoque, média de luma e informações espaciais/temporais. A passagem é limitada a 600 amostras estruturais, um thread de FFmpeg/filter, o mesmo protocolo e listas de permissão de contêiner apenas para `file`, um limite de saída de processo de 1 MiB, e no máximo 30 segundos dentro do tempo limite/aborto compartilhado do broker. Nunca aceita um comando, filtro, caminho ou URL da solicitação.

Os valores estruturais são evidências de amostragem determinística, não compreensão semântica de vídeo. Eles não inferem sujeitos, ações, legendas, fala ou intenção do usuário. Limites de cena e congelamento formam segmentos; a cobertura de congelamento, desfoque, exposição, detalhe espacial e mudança temporal apenas influenciam como o orçamento existente de 1 a 16 quadros é alocado. Um segmento totalmente congelado é limitado a um quadro, enquanto segmentos não congelados competem pelo orçamento restante. Quando os limites superam os quadros, a cobertura uniforme da linha do tempo é mantida para que cortes rápidos no início não possam esconder um longo segmento posterior. Limites de cena dentro da resolução de análise de 1 segundo de um limite de congelamento são coalescidos.

Filtros ausentes, evidências malformadas/vazias, um erro de detector ou o tempo limite de pré-análise limitado falham abertos para a exata política de ponto médio uniforme. Um aborto do chamador ou prazo do broker não falha aberto: termina o subprocesso em andamento, impede a extração de quadros posteriores, e a árvore temporária privada é removida em `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` gera fixações reais determinísticas do FFmpeg para economias de chamadas de legenda pós-duplicação, alocação de orçamento de movimento denso, evidências de desfoque/exposição/SI-TI, cortes rápidos com uma longa cauda e falsos positivos de desvanecimento gradual. Ele registra o tempo de parede da pré-análise e, onde `/usr/bin/time` está disponível, o uso de CPU do filho e o pico de RSS. Suas verificações de qualidade são apenas oráculos estruturais. A qualidade real do modelo de legenda permanece `HOLD` porque este sistema não possui um endpoint autorizado ou juiz congelado. As economias monetárias também permanecem `HOLD` a menos que `--caption-cost-per-call-usd` forneça uma estimativa positiva explícita por chamada; o script nunca fabrica nenhum resultado.

Cada quadro é limitado a 4 MiB, todos os quadros brutos juntos a 23 MiB, e a resposta serializada do broker a 32 MiB. Um diretório temporário privado é removido em `finally`. OmniRoute não agrupa o FFmpeg e não aceita um caminho executável personalizado. Antes da legendagem, a ponte aplica uma passagem conservadora de deduplicação visual: cada JPEG é reduzido a um buffer em escala de cinza 16×16 e é comparado apenas com o último quadro retido. Para um orçamento de legenda solicitado acima de um quadro, a extração fornece um
pool de candidatos limitado de até o dobro desse orçamento e nunca mais de 16 quadros. O limite solicitado é aplicado apenas após a deduplicação, com os primeiros e últimos candidatos selecionados preservados durante o afinamento final quando o orçamento é de pelo menos dois. A política versionada
`grayscale-16x16-mean-cells-v2` utiliza o maior entre a média de delta de luma e a razão de células de miniatura cujo delta normalizado é de pelo menos 0,05. O limite de duplicação é a constante 0,04, escolhida pela previsibilidade em vez de exposta como uma configuração de tempo de execução. Este sinal secundário de alto contraste preserva pequenas mudanças de movimento e texto visível que uma comparação apenas de média pode ocultar. Erros de comparador ou decodificador falham abertos e mantêm a cobertura. Metadados de saída separam candidatos extraídos, quadros usados com sucesso e duplicatas visuais descartadas.

Uma parte de vídeo explicitamente marcada pode solicitar uma folha de contato com timestamp. A ponte constrói no máximo uma grade JPEG de 4 colunas e 16 quadros. Cada célula de 512 pixels grava seu timestamp de origem em uma faixa inferior de alto contraste, enquanto os mesmos timestamps permanecem em metadados textuais para associação e auditoria posteriores. O JPEG completo permanece limitado a 32 MiB. Se `sharp` não conseguir decodificar ou compor a grade, a ponte recua para os quadros JPEG individuais; um aborto do cliente ainda se propaga através da operação da folha.

Evidências de promoção são deliberadamente separadas do microbenchmark de composição sintética. `scripts/perf/video-bridge-contact-sheet-eval.ts` define um sistema de A/B versionado para modelos de visão compatíveis com OpenAI reais. Ele mede tokens relatados pelo provedor, latência de parede de ponta a ponta (incluindo composição da folha), contagem de chamadas de modelo e retenção de fatos definidos no manifesto. Respostas brutas do modelo não são escritas no relatório; apenas os resumos SHA-256 e IDs de fatos correspondentes são retidos. O sistema não faz chamadas de rede ou de modelo pago a menos que `--execute-real` seja passado e `--model`, `OMNIROUTE_BASE_URL` e `OMNIROUTE_API_KEY` estejam configurados. Sem essa execução real explícita, seu veredicto legível por máquina permanece `HOLD`; medições de carga útil/soma de chamadas sintéticas sozinhas não são evidências de promoção.

O separado `scripts/perf/video-bridge-promotion-eval.ts` consome observações FU-07 ou FU-09. A admissão de promoção requer todos os oito tipos de cenários sintéticos mais um clipe real sanitizado, pelo menos três repetições medidas por papel e caso, todas as dez métricas declaradas, resumos de mídia/prompt/fato esperado/configurações congeladas, IDs de observação únicos e ordem A/B verificada. O recibo de execução vincula o resumo do corpus, o SHA exato do candidato e a revisão do modelo. Medidas ausentes ou inválidas permanecem `HOLD`, incluindo CPU acima de 30 s, pico de RSS acima de 512 MiB ou pré-análise acima de 30 s. Estes são limites de admissão de evidências, não uma nova garantia de aplicação de RSS em tempo de execução.

FU-07 requer pelo menos 98% de retenção de qualidade e latência p95 não superior a 1,2x
da linha de base, além de um aumento absoluto de 0,05 na média de recall balanceado por caso em
chamadas de legenda média equivalentes, ou pelo menos 10% menos chamadas de legenda pós-deduplicação em média. FU-09 requer pelo menos 0,85 de qualidade, 95% de retenção, 20% de redução na latência p95
e 10% de redução de tokens. A perda de fato crítico, conformidade de injeção ou
uso ausente impede a promoção. Uma execução não pode promover nada:
`--previous-report` confirma duas execuções distintas, não sobrepostas, consecutivas
e elegíveis da mesma política/revisão de modelo/candidato/corpus. Um
experimento de amostragem não pode confirmar um experimento de folha de contato.

Os coletores devem pontuar as respostas na memória e salvar `responseDigest` mais
métricas e vinculações de observação, nunca o texto da resposta. O consumidor também lê
observações brutas legadas, mas nunca copia esse texto para seus relatórios. Exatamente
um de `responseDigest` ou `rawResponseText` é aceito para cada observação.
A lista de permissão versionada permanece vazia com um padrão imutável `hold`. Uma
entrada elegível requer sua referência de evidência, política, revisão de modelo, SHA exato
do candidato, digest do manifesto e dois IDs de execução distintos; contextos conflitantes
são rejeitados. Esses metadados são um contrato de auditoria, não prova de que um arquivo referenciado contém medições genuínas. Revise os recibos reais antes de adicionar
qualquer entrada. O endpoint de estatísticas de gerenciamento e o painel de vídeo expõem uma
preparação conservadora. Um alias de modelo configurado sozinho não estabelece sua revisão ou
o SHA do candidato em execução, então o painel atual relata `HOLD` em vez de
reutilizar a elegibilidade de outro contexto de execução. A seleção experimental explícita
permanece separada da promoção; nenhum padrão é alterado automaticamente.

Os chamadores podem anexar um array opcional `transcript.cues` a uma parte de vídeo suportada
quando já possuem texto alinhado. Cada cue deve conter `text`, um intervalo finito `start`/`end`
dentro da duração sondada, e uma `source` na lista branca (`client`, `embedded` ou `audio-bridge`); `confidence` tem como padrão `1` e deve permanecer entre `0` e `1`. Cues duplicados exatos são colapsados.
OmniRoute nunca inicia a transcrição a partir desses metadados: cues validadas são
copiadas para o resultado descrito com fonte, confiança e intervalo, e
são renderizadas como observações não confiáveis ao lado das legendas de quadro. Texto inválido,
fora do intervalo ou sem proveniência é rejeitado em vez de misturado no
fluxo de legendas. Ambos os canais de transcrição do corpo da solicitação normalizam a
proveniência fornecida para `client`, incluindo `embedded` ou `audio-bridge`
autoafirmados. Apenas um adaptador de propriedade do servidor pode atribuir esses rótulos confiáveis
por meio do argumento `trustedSource` apenas de código; um campo JSON de solicitação não pode acessar
esse argumento. O texto da transcrição permanece conteúdo derivado de mídia não confiável,
independentemente de sua proveniência, e nunca deve determinar autorização.

Um chamador avançado pode fornecer uma faixa `audioTranscript` para o mesmo vídeo;
ela é tratada como texto fornecido pelo cliente, não como prova de transcrição do servidor.
A costura de fusão executa observações visuais e de áudio sob
um prazo e sinal de abortar, ordena-as em uma linha do tempo comum, colapsa
duplicatas exatas e relata um resultado parcial quando apenas um lado tem sucesso.
Um `audioTranscript` inválido degrada para esse resultado parcial — a
descrição visual é mantida e o ramo de áudio registra um código de falha sanitizado —
em vez de falhar o vídeo inteiro. A disponibilidade por ramo, a flag parcial
e os códigos de falha sanitizados são preservados no resultado descrito, nos
metadados de guardrail (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), nos metadados de cache de resultados e nos contadores de fusão de ponte. O caminho padrão do Video Bridge não invoca a conversão de fala em texto
ou baixa uma segunda cópia de mídia; sem essa faixa explícita, permanece
apenas vídeo.

**Retenção de transcrição (#12150 P1).** Isso se aplica automaticamente sempre que o
Video Bridge (ele mesmo opt-in) renderiza uma cue de transcrição — não há uma flag de retenção separada. Quando uma solicitação renderiza qualquer cue de transcrição (um `transcript` declarado pelo chamador ou um `audioTranscript` fundido), o guardrail a marca
`videoBridgeObserved` e produz uma sombra redigida da descrição do vídeo —
uma renderização idêntica na qual o corpo de texto livre de cada cue é substituído por
`[redacted-video-transcript]`, construído substituindo o campo de cue estruturado
antes que a string seja montada (nunca por meio da análise do texto achatado, então nenhum conteúdo de cue — adversarial ou comum, incluindo corpos contendo `]` como
`[inaudível]`/`[música]` — pode sobreviver). O corpo da solicitação do log de chamadas persistido
troca cada parte de texto derivada do vídeo por essa sombra redigida, correspondida por igualdade de conteúdo; o
ancorador `fullText` é lido novamente do payload de guardrail pré-chamada finalizado, então a
correspondência ainda é bem-sucedida após guardrails de cadeia posteriores (os mascaradores de PII e
credenciais, prioridades 10/95) reescrevem o texto da descrição no local e
após a injeção de prompt/suporte/memória remodelar a matriz de mensagens. O
corpo enviado para o modelo permanece inalterado. Uma solicitação observada também não popula
nenhuma Memória durável (tanto a extração derivada da solicitação quanto da resposta são puladas),
então a própria resposta do modelo não pode ecoar o texto da transcrição na Memória.

**Campos de vídeo bruto (#12430).** Quando a ponte está habilitada e o suporte nativo de vídeo é desconhecido ou ausente, os campos definidos `transcript`/`audioTranscript` também ativam `videoBridgeObserved`, mesmo após falha de descrição ou um limite de `maxVideos`. `null` e strings vazias contam; campos ausentes e metadados não relacionados a vídeo não contam. Cópias retidas redigem esses campos ou omitem a solicitação, e caches/Memória são contornados.

Nos caminhos de fallback, as pistas de chamadas válidas tornam-se partes suportadas `text`/`input_text` em vez de campos de provedor não padronizados. Ambas as faixas fornecidas pela solicitação permanecem observações `client` não confiáveis, com um aviso explícito de que o vídeo não foi descrito e os timestamps não foram verificados em relação à mídia. O orçamento existente de 256 cues/64-KiB total e por cue se aplica às duas faixas juntas; os timestamps devem se encaixar no teto de 600 segundos do corretor e em qualquer janela de foco fornecida. Faixas inválidas são descartadas, não encaminhadas como texto arbitrário; um irmão válido ainda pode ser usado, a menos que seu orçamento combinado seja excedido. Campos nulos/vazios não adicionam texto. Nenhuma busca de mídia ou transcrição é adicionada por este fallback. Campos de extensão de transcrição são removidos do transportador de vídeo de fallback e seus objetos `video_url`/`source`. A lista de permissões da OpenAI permanece rigorosa; transportadores de vídeo nativos desconhecidos permanecem disponíveis e alvos conhecidos apenas de texto mantêm marcadores seguros. Sombras de redacção estruturada protegem o texto da transcrição anexada, enquanto a solicitação original de propriedade do chamador permanece inalterada. Alvos suportados nativamente e pontes desativadas mantêm seu comportamento de bypass existente.

Cópias adicionais retidas usam o mesmo sinal de solicitação observada. O instantâneo da solicitação do cliente antes da proteção, a solicitação pendente em memória e o log de solicitações rejeitadas precocemente substituem estruturalmente os campos de transcrição nas partes do vídeo; prompts de string sintetizados por estágios de pipeline e transferência de contexto são redigidos no sink do corpo da solicitação persistida. O marcador `video_content_removed` persistido faz com que a continuação de `previous_response_id` falhe em fechar em vez de reconstruir texto que foi intencionalmente descartado. Se uma solicitação observada perder sua sombra de redacção por parte antes do log, ou mesmo uma das várias sombras de vídeo falhar em corresponder após mutações de solicitação posteriores, o corpo da solicitação retido é omitido completamente em vez de reter uma transcrição parcialmente redigida.

Para uma solicitação observada, uma resposta do modelo pode citar qualquer parte da transcrição sem um limite de cue estruturado. Seu `responseBody` de log de chamada persistido é, portanto, substituído por um marcador de omissão; o artefato detalhado do pipeline (que pode incluir corpos upstream/clientes e pedaços de stream) não é retido. Caches semânticos, de idempotência e de replay de raciocínio ignoram leituras e gravações para essa solicitação. A solicitação do provedor e a resposta visível ao cliente permanecem inalteradas. Bytes de keepalive precoces são drenados do buffer temporário quando o artefato detalhado é omitido. O aviso de EventStream malformado do Kiro relata apenas a contagem de bytes do payload, nunca seu conteúdo ou o erro bruto do parser JSON. Isso não afirma que todos os diagnósticos de provedor/plugin não relacionados foram auditados; a varredura mais ampla do sink retido é rastreada em #11658.

O ciclo de vida interno de `/api/modality-bridge/video/drilldown` é um substrato de cache separado, autenticado por loopback/token. Cada operação também requer um ID de principal opaco canônico. Antes que um chamador de produção seja habilitado, ele deve derivar esse ID do inquilino autenticado e nunca deve encaminhar um valor selecionado pelo cliente. Chaves de cache vinculam esse principal a IDs de sessão canônica e referência de vídeo, armazenam apenas suas chaves derivadas de SHA-256 e restringem tanto leituras quanto exclusões ao mesmo principal. O cache armazena no máximo 16 quadros JPEG derivados por entrada, expira-os após dez minutos e suporta leituras ou exclusões de sessão explícitas com limites `start`/`end`.

Cada principal é limitado a 16 entradas e 64 MiB de dados JPEG canônicos. Esses limites são independentes do teto global de 64 entradas/256 MiB: a pressão da cota do principal expulsa apenas as entradas menos recentemente usadas desse principal antes que a expulsão global LRU seja considerada. Entradas expiradas são varridas tanto da contabilidade do principal quanto da global na atividade do cache, enquanto cancelamentos e falhas de validação não comprometem uma substituição parcial.

O cache rejeita Base64 não canônico, preenchimento excessivo, mídia não JPEG, JPEGs malformados ou truncados, e JPEGs que produzem um aviso durante uma decodificação de imagem completa `sharp` com limites. Ele re-encoda cada imagem aceita como um JPEG canônico, deriva largura e altura dos bytes decodificados em vez de confiar nos campos do chamador, e descarta quaisquer bytes poliglotas finais em vez de retê-los. Apenas o buffer comprimido canônico com limites é cobrado a ambas as cotas. O limite de wire JSON inclui sobrecarga Base64 para o teto de 32 MiB de entrada decodificada. Cada derivação armazenada registra seu formato/resolução JPEG validado, política de amostragem, versão de derivação, hora de criação, hash de conteúdo computado pelo servidor e hash de referência pai, além do hash de conteúdo pai do chamador confiável. O cancelamento é verificado entre fases assíncronas de decodificação/hash antes do commit atômico do cache.

O produtor de produção reutiliza quadros de corretor já derivados apenas após uma análise visual bem-sucedida, sem download/extracção de vídeo secundário. Ele requer `modalityBridgeVideoDrilldownEnabled=true` do operador, `drilldown: true` rigoroso por parte e um ID de registro de chave API autenticada. Valores de principal/sessão declarados pelo cliente nunca estabelecem propriedade. Sem todas as três condições, ele não faz hash, redimensiona ou retém quadros adicionais. A falha de retenção preserva a resposta visual utilizável. Solicitações consentidas ignoram o cache de resultados de vídeo completo, de modo que os resultados em cache nunca reproduzem handles.

Respostas JSON e SSE bem-sucedidas expõem no máximo quatro identificadores opacos no cabeçalho limitado `x-omniroute-video-drilldown`. Origens de navegador autorizadas podem ler esse cabeçalho sem ampliar a política de origem CORS. Novos identificadores usam `v1.<token base64url aleatório de 32 bytes>`, e o registro retém apenas seus hashes SHA-256. O leitor/analisador de cabeçalho também aceita tokens legados de 64 hexadecimais. O consumidor público autenticado é `GET /api/v1/video-bridge/drilldown?handle=...`, controlado independentemente por `modalityBridgeVideoDrilldownRemoteEnabled=true`. A revogação explícita persistida de falso revoga o acesso mesmo quando o fallback legado `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` está habilitado. A retenção em produção tem o fallback legado análogo `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED`. Ambos os fallbacks têm o padrão desligado.

O consumidor deriva a propriedade da chave autenticada, aplica a política de chave e retorna o mesmo 404 para identificadores desconhecidos, expirados e de outra chave. Aceita `variant=preview|standard|detail` (dimensão máxima JPEG 320/640/1280, nunca ampliada), `limit=1..8` (ou o alias legado `frames`, nunca ambos), `page` baseado em zero e segundos de foco opcionais `start`/`end`. Chaves de consulta duplicadas e janelas de foco invertidas são rejeitadas. Cada variante retornada tem um hash de seu conteúdo real e metadados de resolução real, vinculados à fonte retida. As variantes são derivadas na leitura em vez de armazenadas como cópias retidas extras. A resposta JSON, incluindo Base64/envelope, é limitada a 32 MiB; uma página excessiva retorna 413 e o cliente deve solicitar menos quadros. As leituras verificam cancelamento em torno de cada redimensionamento e rechecagem da validade do identificador antes de retornar. `DELETE` pelo proprietário é idempotente; a exclusão ou expiração de TTL libera a fonte retida e a contabilidade de uso.

O armazenamento compartilhado é local ao processo: identificadores expiram na reinicialização e não são transferíveis entre processos independentes do OmniRoute. As estatísticas de gerenciamento expõem a política de retenção/remota efetiva e entradas/bytes retidos agregados apenas, nunca mídia, referências, IDs principais ou identificadores. O painel de configurações de vídeo mostra esses valores e pode persistir ambas as alternâncias de consentimento. Esta documentação de implementação não é evidência de implantação ou promoção ao vivo; a aceitação do modelo real é rastreada separadamente.

Os quadros são legendados sequencialmente com o modelo de vídeo configurado. Uma substituição de vídeo vazia herda a configuração de Visão; se ambos estiverem vazios, o roteador automático de Visão seleciona o modelo efetivo capaz de visão. Legendas bem-sucedidas substituem a parte original com um prefixo estável `[Video description:` que também marca o texto como uma observação derivada de mídia não confiável e informa os modelos a jusante para não seguir instruções encontradas na mídia. As chaves de cache de legendas de quadros incluem os bytes JPEG, prompt, timestamp e modelo efetivo; apenas legendas bem-sucedidas são armazenadas em cache. As entradas de cache retêm o modelo de produtor bem-sucedido real, incluindo um modelo de fallback; a ponte relata `mixed` quando quadros diferentes foram produzidos por modelos diferentes. Um acerto de cache reutiliza essa identidade de produtor em vez de rotulá-la como o plano de roteamento solicitado. O cache de resultados de vídeo completo é chaveado em cada entrada que muda a saída — prompt, modelo efetivo, política de amostragem, contagem de quadros, modo de análise semântica, o hash SHA-256 da dica de foco normalizada, janela de foco, `transcript`, `audioTranscript` e a flag de contato — portanto, mudar qualquer uma dessas dimensões é uma falha de cache, nunca uma reutilização obsoleta. A versão da política de deduplicação visual, limite e contagem de quadros candidatos limitados também são explícitos na chave de cache de resultados e metadados; uma mudança de política, portanto, não pode reutilizar uma descrição de vídeo completo obsoleta. Os metadados do cache de resultados v4 mantêm o modo e a impressão digital, nunca a tarefa bruta do usuário. Os metadados de guardrail relatam tanto os modos de análise solicitados quanto os efetivos; um modo `focused` solicitado sem texto de usuário utilizável é relatado como efetivamente `full`.

O guardrail extrai cada parte de vídeo suportada, mas não descreve mais do que `modalityBridgeVideoMaxVideos`. Para um alvo comprovado de ter `supportsVideo === false`, vídeos falhados e acima do limite tornam-se marcadores de texto seguro explícitos, de modo que nenhum vídeo bruto sobrevive. Quando a capacidade é desconhecida, essas partes retêm seu transportador de vídeo; qualquer transcrição de fallback segue a conversão de texto limitada acima. Alvos com `supportsVideo === true` ignoram a ponte. O sinal de abortar a solicitação do cliente se propaga através do download, fila de corretor, subprocessos e chamadas de legenda; abortos param entre vídeos e nunca falham abertos para mídia bruta.

As configurações de tempo de execução são respaldadas por DB e validadas por Zod:

| Chave                               | Padrão      | Faixa / comportamento                                                                                 |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Tempo de execução opcional, opt-in                                                                    |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` preserva legendas genéricas; `focused` usa contexto limitado e não confiável do último usuário |
| `modalityBridgeVideoModel`          | `""`        | Herdar o modelo da Ponte de Visão                                                                     |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                  |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` ou `segment_aware` proporcional; falha do detector recai para `uniform`      |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                   |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                        |

Valores de tempo limite de vídeo persistidos legados acima de 120 segundos são limitados ao prazo do broker; novas gravações de configurações acima desse limite são rejeitadas. `GET /api/modality-bridge/video/runtime` requer localidade de loopback confiável antes da autenticação ou sondagem de tempo de execução, e então requer autenticação de gerenciamento. Ele retorna apenas versões `available`, sanitizadas do FFmpeg/ffprobe, e um motivo fixo quando o tempo de execução não está disponível. O endpoint de extração interno não é uma API pública de upload: a saturação da fila retorna `503` mais `Retry-After`, uma desconexão do chamador retorna `499`, e o prazo fixo do broker retorna `504`. Respostas convertidas adicionam `video->text;model=<visionModel>;parts=<videos>` ao cabeçalho central `x-omniroute-modality-bridge` sem remover segmentos de Visão ou Áudio.

### PII Masker (`piiMasker.ts`)

Executa em **ambos** os estágios.

- **`preCall`** clona a carga útil, percorre `system`, `messages`, `input` e `prompt` (incluindo itens de string simples), e aplica `processPII()` (de `@/shared/utils/inputSanitizer`) aos campos de string `content`/`text`. Quando `PII_REDACTION_ENABLED=true`, PII detectada é redigida na carga útil de saída. Isso é independente de `INPUT_SANITIZER_MODE` (que controla apenas a política de injeção de prompt). Quando a redação está desativada, a chamada registra contagens de detecção sem reescrever o conteúdo.
- **`postCall`** faz uma cópia profunda da resposta, executa `sanitizePIIResponse()` mais o mascarador de formato da API de Respostas (`maskResponsesOutput` — cobre `output_text` e `output[].content[].text`). Se alguma redação ocorrer, a resposta modificada substitui a original.

A barreira nunca bloqueia; ela apenas anota (`meta.detections`, `meta.redacted`) ou reescreve.

### Prompt Injection (`promptInjection.ts`)

Detecta estruturas adversariais no conteúdo fornecido pelo usuário e impõe a política configurada. O comportamento é guiado por variáveis de ambiente e opções do construtor:

| Configuração       | Var de ambiente                                                                                      | Padrão | Efeito                                                                                                                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Habilitado         | `INPUT_SANITIZER_ENABLED`                                                                            | `true` | Quando `false`, a barreira de proteção é interrompida.                                                                                                                                                      |
| Modo               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn` | Política de injeção: `block`, `warn` ou `log`. (`redact` é aceito para compatibilidade, mas **não** remove o texto de injeção; a solicitação de reescrita de PII é controlada por `PII_REDACTION_ENABLED`.) |
| Limite de bloqueio | Opção `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Severidade mínima necessária para bloquear. Médio é apenas para observação por padrão.                                                                                                                      |

**Precedência do modo** (`getMode`): `options.mode` do chamador → `INJECTION_GUARD_MODE` **sobrescrita de recurso do DB** (Dashboard → Configurações → Flags de Recursos) → var de ambiente `INJECTION_GUARD_MODE` → var de ambiente `INPUT_SANITIZER_MODE` → `warn`. Uma sobrescrita do painel, portanto, vence sobre as variáveis de ambiente, de modo que a interface do usuário de Flags de Recursos controla a barreira em execução ao vivo (sem reinício). A leitura do DB é à prova de falhas: se ocorrer um erro, a barreira recua para o comportamento baseado em ambiente, e quando nenhuma sobrescrita é definida, o comportamento é idêntico à resolução apenas baseada em ambiente.

Fontes de detecção:

1. `sanitizeRequest()` de `@/shared/utils/inputSanitizer` (conjunto de detectores compartilhados usados em outros lugares no pipeline).
2. `DEFAULT_GUARD_PATTERNS` embutido (atualmente `system_override_inline` e `markdown_system_block`, ambos de severidade `high`).
3. `customPatterns` opcionais passados via opções do construtor (strings, regex ou registros `{ name, pattern, severity }`).

Quando `mode === "block"` **e** pelo menos uma detecção atende ao limite de severidade, `preCall` retorna `{ block: true, message: "Request rejected: suspicious content detected" }`. Nos modos `warn`/`log`, a barreira registra, mas permite a chamada. O helper compartilhado `evaluatePromptInjection()` também é exportado para chamadores que precisam avaliar prompts sem passar pelo registro.

**Limite de varredura (v3.8.20):** o detector inspeciona apenas os **primeiros 16 KB** do texto de prompt unido — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) em `src/shared/utils/inputSanitizer.ts`. Tanto `detectInjection()` quanto `evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` antes de executar o loop de padrão. Diretrizes de injeção ficam próximas ao topo de uma entrada, então isso limita o uso de CPU/GC de regex em cargas úteis de várias centenas de KB sem enfraquecer a detecção (cf. #3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Executa em **ambos** os estágios, por último na cadeia padrão (prioridade `95`). Redige padrões bem conhecidos de chave de API / token secreto da carga útil de saída (conteúdo da mensagem, argumentos de chamada de ferramenta, resultados da ferramenta) **e** da resposta do provedor, de modo que uma credencial colada em um prompt (ou ecoada de volta por um resultado de ferramenta) não seja vazada para o provedor upstream ou de volta para o cliente.

- **Apenas com opt-in**, mesma convenção que a redação de PII (Regra Rigorosa #20-adjacente):
  desativado a menos que `settings.credentialRedactionEnabled === true` **ou**
  `CREDENTIAL_REDACTION_ENABLED=true`. Com isso desativado, a proteção é um no-op —
  nunca bloqueia e nunca reescreve.
- `redactCredentials()` percorre toda a árvore de payload/resposta (`walkValue()`,
  seguro contra poluição de protótipo, seguro contra ciclos via `WeakSet`) e substitui correspondências por
  um espaço reservado `[REDACTED:<type>]`, clonando apenas os ramos que realmente
  mudaram.
- `CREDENTIAL_PATTERNS` cobre chaves de provedores de LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens de VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), chaves de pagamento (Stripe, Square), chaves de nuvem
  (chave de acesso AWS, Twilio, SendGrid, Mailgun), chaves privadas / JWTs,
  strings de conexão que contêm credenciais (`mongodb://user:pass@...`, etc.), e
  um padrão genérico de cabeçalho `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Chaves em formato de cabeçalho (`authorization`, `x-api-key`, `api-key`,
  `apikey`) são redigidas estruturalmente (apenas o valor, prefixo de esquema como
  `Bearer `/`Basic ` preservado) em vez de via a regex de texto genérica.
- A proteção nunca bloqueia; ela apenas reescreve (`modifiedPayload` /
  `modifiedResponse`) e anota (`meta.credentialsRedacted`, `meta.count`).

Proteção contra regressão: `tests/unit/credential-masker-guardrail.test.ts`.

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
  block?: boolean; // true interrompe a cadeia
  message?: string; // exibido ao bloquear
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // retornado por preCall para reescrever a solicitação
  modifiedResponse?: TValue; // retornado por postCall para reescrever a resposta
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

Um guardrail sinaliza "sem alteração" retornando `void`, `{}` ou
`{ block: false }`. Retornar um `modifiedPayload`/`modifiedResponse` substitui
o valor que flui pela cadeia para guardrails a jusante.
`signal?: AbortSignal` transporta o ciclo de vida do chamador para os guardrails. Uma interrupção de solicitação é a exceção deliberada de falha aberta: pontes de mídia param o trabalho e fazem a limpeza sem restaurar a mídia bruta para um destino conhecido por não suportá-la.

## Registro (`registry.ts`)

O singleton `guardrailRegistry` expõe:

- `register(guardrail)` — adiciona (ou substitui por nome normalizado) um guardrail e
  reordena por `priority` ascendente.
- `clear()` / `list()` — auxiliares administrativos.
- `runPreCallHooks(payload, context)` — itera sobre os guardrails ativos, passa o
  payload através de `modifiedPayload`, e para no primeiro `block: true`.
- `runPostCallHooks(response, context)` — mesmo fluxo no lado da resposta.
- `resetGuardrailsForTests({ registerDefaults })` — limpa o estado e opcionalmente
  registra novamente os padrões para um isolamento de teste limpo.

Ambos os executores retornam `{ blocked, payload|response, results, guardrail?, message? }`
onde `results` é um array de registros `GuardrailExecutionResult` que incluem
os campos `blocked`, `skipped`, `modified`, `error` e `meta` por guardrail,
úteis para rastreamento.

### Desabilitando Guardrails Por Requisição

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agrega uma
lista deduplicada de nomes de guardrails que devem ser ignorados para a
requisição atual. Fontes (todas opcionais, todas mescladas):

- `apiKeyInfo.disabledGuardrails`
- Corpo da requisição `disabledGuardrails` (nível superior)
- Corpo da requisição `metadata.disabledGuardrails`
- Cabeçalho `x-omniroute-disabled-guardrails` (ou legado
  `x-disabled-guardrails`)

Os valores podem ser arrays de strings ou uma string separada por vírgulas; os nomes são
normalizados para kebab-case em minúsculas (`pii_masker` → `pii-masker`). O resultado
é passado através de `context.disabledGuardrails` para o registro, que ignora
os guardrails correspondentes (`skipped: true` em `results`).

## Ordem de Execução

Para cada requisição que passa por `src/sse/handlers/chat.ts` e
`open-sse/handlers/chatCore.ts`:

1.  `resolveDisabledGuardrails(...)` constrói a lista de ignorados a partir da chave da API, corpo e cabeçalhos.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` executa os guardrails em ordem crescente de prioridade:
    - Guardrails desabilitados são registrados como `skipped`.
    - O `preCall` de cada guardrail pode reescrever o payload via `modifiedPayload`.
    - O primeiro `block: true` interrompe a cadeia e o handler retorna uma resposta de rejeição do guardrail.
3.  O payload (potencialmente reescrito) flui para o roteamento combinado e despacho upstream.
4.  Após a resposta ser montada, `guardrailRegistry.runPostCallHooks(...)` executa a mesma cadeia na resposta. `block: true` aqui descarta a resposta upstream.

Guardrails que lançam exceções são registrados com `error: <message>` e logados via
`logger.warn`, mas a cadeia continua — fail-open por design.

## Configuração

Variáveis de ambiente lidas pelos guardrails integrados:

| Variável                              | Usado por                 | Efeito                                                                                                                   |
| :------------------------------------ | :------------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Defina `false` para desabilitar a detecção completamente.                                                                |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Política de injeção: `warn`, `block`, ou `log`. O valor legado `redact` não reescreve o texto de injeção.                |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Modo para o guardrail de injeção; também uma feature flag do DB que **sobrescreve** as variáveis de ambiente (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Severidade mínima que `MODE=block` rejeita: `high` (padrão), `medium`, ou `low`.                                         |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Alias legado para `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                     |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Quando `true`, PII da requisição é redigida (independente do modo de injeção).                                           |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Controla o comportamento do mascarador no lado da resposta.                                                              |

Os guardrails do Modality Bridge leem a configuração de tempo de execução do armazenamento de configurações baseado em DB (`getSettings()`), e não das variáveis de ambiente. As chaves primárias do Vision são
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, e
`modalityBridgeCacheMaxEntries`. As chaves legadas
`visionBridge*` são aceitas apenas como o fallback de leitura de um ciclo documentado; as escritas do dashboard usam as chaves primárias. Os padrões e o resolvedor de fallback residem em `src/shared/constants/modalityBridgeDefaults.ts`, com as constantes legadas mantidas em `src/shared/constants/visionBridgeDefaults.ts`.

O Áudio usa `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout`, e `modalityBridgeAudioMaxClips`, além das configurações compartilhadas `modalityBridgeCache*`. O Áudio não possui fallback de chave legada porque essas chaves foram introduzidas com o esquema do Modality Bridge.

O Vídeo usa `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, e
`modalityBridgeVideoTimeout`, além das configurações compartilhadas `modalityBridgeCache*`.
Ele é desabilitado por padrão porque FFmpeg/ffprobe são dependências operacionais opcionais e a legendagem de quadros adiciona latência e custo de modelo.

## Guardrails Personalizados

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

1. Crie `src/lib/guardrails/myGuardrail.ts` estendendo `BaseGuardrail`.
2. Implemente `preCall` e/ou `postCall`.
3. Registre no momento da importação (push de `registerDefaultGuardrails`) ou
   chame `guardrailRegistry.register(...)` em tempo de execução — o registro substitui
   qualquer guardrail anterior com o mesmo nome normalizado.
4. Adicione testes em `tests/unit/` (exemplos existentes:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testando

Use `resetGuardrailsForTests()` entre os testes para começar de um estado conhecido.
Passe `{ registerDefaults: false }` para começar com um registro vazio e
registrar apenas os guardrails em teste. O Vision Bridge aceita injeção de dependência
(`deps.getSettings`, `deps.callVisionModel`); o Audio Bridge expõe as
equivalentes para configurações, capacidades, seleção de modelo STT, verificações de credenciais e transcrição. Os testes podem, portanto, exercitar ambos os fluxos sem acesso a DB ou rede.

## Veja Também

- `src/lib/guardrails/` — implementação
- `src/shared/utils/inputSanitizer.ts` — detector compartilhado que alimenta
  a injeção de prompt e a mascaramento de PII
- `src/shared/constants/visionBridgeDefaults.ts` — Padrões do Vision Bridge e
  lista de modelos de ponte forçada
- `src/shared/constants/modalityBridgeDefaults.ts` — Padrões de tempo de execução compartilhados Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — camada ortogonal (disjuntor, resfriamentos)
- `docs/reference/ENVIRONMENT.md` — referência completa de variáveis de ambiente

## Cobertura de rota de proteção contra injeção e equipe vermelha (Fase 8 · Bloco D)

A proteção contra injeção (`createInjectionGuard` / `withInjectionGuard`) cobre todas as rotas
que aceitam prompts de usuário. Ela respeita `INJECTION_GUARD_MODE` (padrão `warn` = apenas log;
`block` = retorna HTTP 400 `SECURITY_001`).

| Tipo              | Rotas                                                                                                                                                | Modo padrão |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Texto (existente) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn        |
| Generativo        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn        |
| Dados             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn        |

A extração de texto (`extractMessageContents`) cobre `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Equipe vermelha (noturno, `nightly-llm-security.yml`):** promptfoo valida que cada rota bloqueia
o corpus OWASP-LLM em `INJECTION_GUARD_MODE=block`; garak executa sondas (ignora sem segredo).
`moderations` está incluído para consistência — operadores em modo de bloqueio podem isentá-lo via
`resolveDisabledGuardrails`.

O fluxo de trabalho noturno (`.github/workflows/nightly-llm-security.yml`, cron + despacho manual)
tem dois trabalhos:

- **`promptfoo-guard` (bloqueio)** — executa `promptfoo eval -c promptfooconfig.yaml`
  com `INJECTION_GUARD_MODE=block`. Cada caso adversarial (por exemplo, "ignore todas
  as instruções anteriores...", jailbreaks estilo DAN) afirma que a resposta contém
  `error.code === "SECURITY_001"`, ou seja, a proteção realmente rejeitou a solicitação.
- **`garak` (consultivo)** — executa garak `--probes promptinject,dan,leakreplay`
  contra uma instância local do OmniRoute (`http://localhost:20128/v1`). Protegido por um
  segredo do provedor (`PROMPTFOO_PROVIDER_KEY`); ignora graciosamente e é sufixado
  `|| true`, para que ele relate sem falhar o CI.

A cobertura do auxiliar de proteção (`createInjectionGuard` / `withInjectionGuard`)
abrange todas as rotas `/v1` que contêm prompts; o texto do prompt é extraído de
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` por
`extractMessageContents()` em `src/shared/utils/inputSanitizer.ts`.
