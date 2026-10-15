# Guardrails (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Fuente de referencia:** `src/lib/guardrails/`
> **Última actualización:** 2026-08-29 — v3.8.51 (la procedencia de la transcripción de Video Bridge es declarada por quien realiza la llamada,
> aún no está verificada por el servidor — aclarado según #11661)

Las barreras de seguridad aplican medidas de seguridad, políticas y transformaciones de contenido en el límite
entre OmniRoute y los proveedores ascendentes. Cada barrera puede inspeccionar (y
opcionalmente rechazar, transformar o anotar) las cargas útiles de las solicitudes (`preCall`) y
las respuestas ascendentes (`postCall`).

El sistema es **fail-open**: si una barrera genera una excepción durante la ejecución, el registro
guarda el error y continúa con la siguiente barrera en lugar de hacer que falle la
solicitud. El bloqueo es una decisión explícita (`block: true`), nunca un accidente.

## Guardrails Integrados

El registro carga automáticamente seis guardrails en orden de prioridad al importar
(vea `registry.ts` → `registerDefaultGuardrails()`):

| Prioridad | Nombre              | Etapa(s)       | Archivo               |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Los números de prioridad más bajos se ejecutan **primero**.

### Vision Bridge (`visionBridge.ts`) — Puente de Modalidad PR-1

Intercepta solicitudes que contienen imágenes dirigidas a **modelos no visuales** y
ya sea redirige toda la solicitud a un modelo capaz de visión o reemplaza las partes de imagen
con descripciones de texto producidas por un modelo de visión configurable antes de
la llamada ascendente. Esto permite que los proveedores solo de texto manejen
cargas multimodales de manera transparente.

Flujo:

1. Omitir si el modelo objetivo ya soporta visión (a menos que aparezca en la
   lista de puente forzado `isVisionBridgeForcedModel`).
2. Extraer partes de imagen a través de `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), que delega al **detector de medios unificado**
   `detectMediaParts()` en `open-sse/utils/mediaParts.ts` — la
   única fuente de verdad compartida con el filtro de compatibilidad combinado.
   La extracción está permitida solo para partes de nivel superior de las formas
   que `replaceImageParts` puede volver a insertar (el contrato extract↔replace): OpenAI
   `image_url`, base64 de Anthropic `source.type:"base64"`, URL de Anthropic
   `source.type:"url"`, y API de Respuestas `input_image`. Los hits anidados y
   las formas solo de indicador son material para el filtro combinado y nunca se extraen.
   Omitir si no se encuentra ninguno.
3. Resolver la configuración en tiempo de ejecución a través de `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nuevas claves de configuración
   `modalityBridge*` ganan; las claves heredadas `visionBridge*` permanecen como un
   **retroceso de un ciclo** (ventana de retroceso). Omitir antes de cualquier
   recorrido de medios cuando el puente está deshabilitado.
4. El selector de modo (`modalityBridgeVisionMode`, vea la tabla a continuación) decide
   redirigir vs describir. La redirección devuelve `modifiedPayload` con solo `model`
   intercambiado, más meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Ruta de descripción: limitar imágenes a `maxImages`, componer el aviso consciente de la tarea,
   consultar la caché de descripción, llamar al modelo de visión **en paralelo**
   (`Promise.allSettled`), e inyectar partes de texto `[Image N]: <description>` en
   su lugar. Una descripción fallida produce `null` y la parte de imagen original se
   **preserva** (#4012) — excepto en la ruta de descripción combinada cuando cada
   descripción falla, donde un upstream confirmado no visual recibe un
   `(no disponible — ningún proveedor capaz de visión conectado)` stub en su lugar (#8430).
6. Devolver `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selector de modo (`modalityBridgeVisionMode`)

| Modo       | Predeterminado | Comportamiento                                                                                                                                                                                                                                                                                                           |
| ---------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔              | Heurística heredada, sin cambios (#6640/#7204): modelos no combinados/`auto/` redirigen al mejor modelo de visión a menos que el modelo original ya tenga credenciales utilizables (entonces describe); los objetivos combinados siempre describen.                                                                      |
| `describe` |                | Siempre describe — el bloque de redirección se omite por completo; el modelo elegido por el usuario siempre responde.                                                                                                                                                                                                    |
| `reroute`  |                | Fuerza la redirección: se omite la guardia del modelo con credenciales. La guardia de credenciales del **objetivo** de redirección aún se aplica — cuando no existe un objetivo de visión utilizable, la solicitud pasa a describir para que las imágenes sin procesar nunca lleguen a un backend solo de texto (#8430). |

Los modos forzados cortocircuitan **antes** de que se ejecute la heurística automática; el comportamiento `auto`
es idéntico en bytes al guardrail anterior a PR-1.

#### Alcance de clave API (`visionBridgeKeyScope.ts`)

Cuando la clave API del llamador restringe `allowedConnections`, grupos de cuotas
(`allowedQuotas`) o modelos (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), el puente solo
elige modelos de redirección y descripción que la clave puede usar, en conexiones que la clave puede
usar. La llamada de descripción pasa siempre a través del bucle de auto-ruta de OmniRoute con
el encabezado `x-omniroute-self-loop-key-id`, por lo que la solicitud de chat receptora
hace cumplir la política de conexión y modelo de esa clave nuevamente. `enforceApiKeyPolicy()`
honra ese encabezado solo junto con el portador del bucle de auto-ruta, por lo que solo puede
reducir el acceso, y un id que no se resuelve es rechazado.

Si no se permite ningún modelo de visión para la clave, la ruta de descripción se aparta y
la solicitud pasa sin cambios, el mismo comportamiento de falla-abierta que un guardrail deshabilitado
(meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Las solicitudes sin una clave, y las claves sin estas restricciones, se comportan exactamente como
antes.

#### Aviso consciente de la tarea para describir (`modalityBridgeVisionTaskAware`)

Default **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) agrega
el texto del **último mensaje del usuario** (truncado a 500 caracteres) al prompt
base de descripción, orientando la descripción hacia lo que el usuario realmente
preguntó (patrón codex-vision-proxy) y pidiendo al modelo de visión que transcriba
el texto visible. Con la bandera desactivada — o sin texto del usuario — se utiliza
el prompt base sin cambios.

La solicitud compatible con OpenAI del bucle de auto-descripción (`callVisionModelSingle()`
en `visionBridgeHelpers.ts`) siempre solicita `image_url.detail: "high"` —
incondicionalmente, para cada llamador/proveedor, no condicionado a ninguna señal
del cliente. El muestreo de baja calidad degrada la precisión de OCR para exactamente
la tarea de transcripción de texto que este prompt solicita, por lo que la llamada
de descripción siempre pide alta calidad independientemente del nivel de detalle
que utilizó la solicitud de entrada original. Esto solo afecta al cuerpo de la
solicitud interna de descripción; no cambia cómo OmniRoute reenvía el propio
`image_url.detail` del llamador en la solicitud principal — ese valor predeterminado
se aplica por separado, y solo para clientes OpenCode detectados, en
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). La
rama de formato de wire de Anthropic del bucle de auto-descripción no tiene
campo `detail` y no se ve afectada por ninguno de los valores predeterminados.

#### Límite de salida de descripción (`modalityBridgeVisionMaxChars`)

| Clave                          | Predeterminado | Rango           |
| ------------------------------ | -------------- | --------------- |
| `modalityBridgeVisionMaxChars` | `0`            | `0` o 100–50000 |

`0` (predeterminado) significa **sin límite** — la descripción devuelta por
`callVisionModel()` se pasa sin modificar, preservando el comportamiento existente.
Cualquier valor en el rango de 100–50000 trunca la descripción con un sufijo
`…` antes de que se vuelva a insertar como `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` en `src/lib/guardrails/visionBridge.ts`).
Aumenta esto para tareas de OCR con mucho detalle donde el modelo descendente
necesita la transcripción completa; redúcelo para limitar el uso de tokens en
modelos de visión muy conversadores. El campo del panel de control se encuentra
en el panel Avanzado de la pestaña de Visión (`modality-bridge-max-chars` en
`ModalityBridgeVisionTab.tsx`) y limita cualquier valor entre 1 y 99 hasta el
mínimo de 100, mientras deja un `0` explícito intacto — `0` es un valor Zod
válido por derecho propio (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`),
no meramente el valor predeterminado "no establecido".

#### Caché de descripción (`modalityBridge/bridgeCache.ts`)

Caché LRU + TTL en memoria para salidas de descripción, compartida a nivel de proceso.
Clave = `sha256(imageRef + composedPrompt + configuredBridgeModel)` con
encuadre de prefijo de longitud (sin colisiones de límite de campo). El componente
del modelo es el modelo de puente **configurado**, no el modelo que realmente
respondió — `callVisionModel` puede recurrir internamente, y usar claves por
intento fragmentaría la caché. Las descripciones fallidas nunca se almacenan en caché.
Configuraciones:

| Clave                           | Predeterminado | Rango   |
| ------------------------------- | -------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`         | —       |
| `modalityBridgeCacheTtlMinutes` | `60`           | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`          | 10–5000 |

#### Normalización de imágenes remotas (bucle de auto-descripción/búsqueda base64)

Cuando el puente busca una imagen **remota** por sí mismo — la llamada de
auto-descripción de Anthropic y la conversión base64 de formato wire de claude
(`ensureBase64ImagesForClaudeWire`), ambas a través de
`fetchRemoteImageAsDataUri()` en `visionBridgeHelpers.ts` — el URI de datos resultante
se pasa a través de `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) antes de ser incrustado en la solicitud
del modelo de visión. Las imágenes de gran tamaño se reducen a un **borde largo de 2048px**
(coincidiendo con el límite de redimensionamiento que OpenAI/Anthropic ya aplican
del lado del servidor), lo que reduce los bytes de carga/latencia sin cambiar lo
que ve el modelo de visión. El redimensionamiento utiliza `sharp`, cargado a través
de importación dinámica: en una plataforma donde su binario nativo no se carga,
`normalizeDataUri()` **nunca lanza** — vuelve a pasar los bytes originales, por lo
que el camino de descripción/conversión base64 siempre sigue funcionando. Los bytes
que no son imágenes (una búsqueda que no devolvió una imagen decodificable) también
se pasan sin cambios. Esta normalización se limita a las imágenes que el puente
busca para su propia llamada — nunca se aplica a la carga útil de paso sin procesar
del llamador, consistente con el principio de mutación solo optativa (Regla Dura #20).

#### Esquema de configuraciones + migración

Las nuevas claves `modalityBridge*` son validadas por Zod en `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, el trío `modalityBridgeCache*`, y el grupo
`modalityBridgeAudio*` utilizado por el Puente de Audio. La migración
`141_modality_bridge_settings.sql` copia los valores heredados existentes
`visionBridge*` a las nuevas claves correspondientes (idempotente, nunca sobrescribe
un valor `modalityBridge*` establecido por un operador); las claves heredadas
siguen siendo aceptadas como una opción de lectura de respaldo durante un ciclo
de lanzamiento.

#### Encabezado de transparencia + estadísticas

Las respuestas transformadas por descripción llevan
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(construido por `buildModalityBridgeHeader()` en `modalityBridge/bridgeStats.ts`,
sellado por `withModalityBridgeHeader()` en `src/sse/handlers/chatHelpers.ts`).
Las solicitudes reenviadas **no** reciben encabezado — la carga útil no fue
tocada y el intercambio de modelo ya es visible en el campo `model` del cuerpo
de la respuesta.

`GET /api/modality-bridge/stats` (autenticación de gestión, mismo nivel que
`GET /api/settings`) devuelve los contadores en memoria por modalidad
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` para `vision`, `audio` y
`video`. `averageLatencyMs` utiliza `latencySamples`, no todos los intentos, como su
denominador; una operación sin temporización no fabrica una muestra de cero milisegundos.
`bridged` sigue siendo el alias compatible hacia atrás para conversiones exitosas; los
intentos fallidos no lo incrementan.
Los contadores se restablecen al reiniciar el proceso por diseño
(telemetría, no contabilidad).

#### Configuración del panel

La página dedicada del panel es
`/dashboard/settings/modality-bridge`. Sus pestañas `Vision`, `Audio` y
`Video` direccionables por URL preservan los parámetros de consulta mientras cambian el
valor de `tab`. La pestaña de Vision expone habilitación, modo, selección de modelo
(incluyendo el predeterminado automático), indicaciones conscientes de la tarea, límites
avanzados de tiempo de espera/imágenes/largo de descripción/caché, contadores de
tiempo de ejecución, y una solicitud de muestra protegida. La pestaña de Audio también
está activa: expone habilitación, un selector de modelo solo para STT con Auto, límites
de tiempo de espera/máximo clip, contadores de audio, y una prueba de muestra
`input_audio`. La pestaña de Video es funcional: informa el estado de tiempo de
ejecución de FFmpeg/ffprobe — uno de cuatro estados de UI explícitos (`unknown` mientras
la sonda está en vuelo o no pudo completarse, `restricted` en un host de panel que no
es de bucle invertido donde la sonda se omite del lado del cliente, `unavailable` una
vez sondeado y confirmado como faltante, o `available` con las versiones de
FFmpeg/ffprobe) — persiste habilitación/modelo/límite de fotogramas/video/tiempo de
espera, filtra el selector de modelo a modelos capaces de visión, y expone contadores
de video.

La antigua tarjeta de Vision Bridge bajo la configuración de IA es un enlace de
compatibilidad a la nueva página; ya no posee una segunda copia del formulario. Los
Proveedores de Medios también enlazan los flujos de trabajo de Imagen-a-Texto y
Voz-a-Texto a las pestañas correspondientes de Modality Bridge sin eliminar el
existente espacio de pruebas de Voz-a-Texto.

**Bypass de admisión de auto-bucle:** cuando la llamada describe se enruta a través del
propio `/v1` auto-bucle de OmniRoute (modelo de proveedor no estándar), la subsolicitud
envía `x-omniroute-admission-bypass: internal` y se autentica con las credenciales de
auto-bucle resueltas — el centinela local `sk_omniroute` en modo local, o la clave
de entorno configurada por el operador `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (# 1350) para que los despliegues `REQUIRE_API_KEY=true` aún puedan ejecutar la llamada
describe. El bypass solo se respeta para esas credenciales exactas, por lo que los
clientes externos no pueden usar el encabezado para omitir la admisión.

Los valores predeterminados heredados viven en `src/shared/constants/visionBridgeDefaults.ts`; los
nuevos valores predeterminados conscientes de modo/tarea/caché y el resolvedor de
configuración viven en `src/shared/constants/modalityBridgeDefaults.ts`. La barandilla
expone una opción de constructor `deps` para que las pruebas puedan inyectar
implementaciones falsas de `getSettings` y `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Intercepta solicitudes de chat que contienen audio antes de que lleguen a un
destino que no se conoce que acepte entrada de audio. Nunca redirige la solicitud de
chat: las partes de audio se transcriben a través del endpoint multipart
compatible con OpenAI existente y el modelo de chat elegido continúa con las
transcripciones de texto.

Flujo:

1. Resuelve `supportsAudio` a través de `getResolvedModelCapabilities()`. La
   metadata del registro de proveedores explícito gana, luego la metadata de modelo
   estática, luego `modalities_input` sincronizado. Una lista de entrada declarada
   sin `audio` es `false`; ninguna evidencia de capacidad permanece `null`. Tanto
   `false` como `null` activan el puente conservador, mientras que `true` lo
   omite.
2. Resuelve la configuración `modalityBridgeAudio*` y extrae partes de audio
   de nivel superior que se pueden unir de cada mensaje a través del detector
   compartido `detectMediaParts()`. Las formas de cable soportadas son
   `input_audio`, `audio_url` de OpenAI, y `source.media_type: "audio/*"`.
   El audio anidado se detecta para el enrutamiento pero no se elimina por la ruta
   de unión. El trabajo está limitado por `modalityBridgeAudioMaxClips`; las partes
   posteriores permanecen intactas.
3. Honra un `provider/model` configurado, o deja que `selectAudioBridgeModel()`
   recorra `AUDIO_TRANSCRIPTION_PROVIDERS` en orden de catálogo estable y seleccione
   el primer modelo con una credencial de proveedor activa utilizable.
4. `callAudioTranscription()` convierte audio en base64/URI de datos a un
   `file` multipart, o descarga un `audio_url` remoto a través de la protección
   de salida solo pública con pinning de DNS y un límite de 25 MB. Luego
   POSTea el archivo y el modelo seleccionado al auto-bucle local
   `/v1/audio/transcriptions`, autenticado con `resolveSelfLoopBearer()`. La ruta
   de transcripción existente realiza la búsqueda normal de credenciales, manejo de
   enfriamiento/límite de tasa, y despacho de proveedor.
5. Las llamadas exitosas reemplazan sus partes con `[Audio N]: <transcript>`. Las
   llamadas se ejecutan con `Promise.allSettled`: un fallo individual preserva esa
   parte de audio original (#4012 contrato). Si cada llamada falla y se demuestra que
   el destino es `supportsAudio === false`, las partes se convierten en
   `[Audio N]: (no disponible — ningún proveedor de STT conectado)` (#8430 contrato).
   Para un destino desconocido (`null`), un resultado de todas las fallas permanece
   intacto. Un destino comprobado solo de texto sin credencial STT utilizable recibe
   el mismo stub explícito sin emitir una llamada de red.

Las transcripciones exitosas utilizan la caché LRU/TTL del Modality Bridge a nivel de
proceso. La clave combina la referencia de audio, la etiqueta de operación
`audio-transcription` estable, y el modelo STT seleccionado; los fallos nunca se
almacenan en caché. Los intentos de audio actualizan los contadores compartidos
`bridged`, `cacheHits`, `failures`, y `lastUsedAt`. Las respuestas transformadas llevan
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; las
solicitudes sin cambios no reciben un segmento de Audio Bridge.

Las configuraciones de tiempo de ejecución están respaldadas por la base de datos y
validadas por Zod:

| Clave                         | Predeterminado | Rango            |
| ----------------------------- | -------------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`         | —                |
| `modalityBridgeAudioModel`    | `""`           | Auto o ID de STT |
| `modalityBridgeAudioTimeout`  | `60000`        | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`            | 1–10             |

La caché compartida sigue controlada por `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` y `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepta las partes de video de nivel superior en los `messages` de Chat Completions y en la API de Responses
`input` antes de que se llame a un objetivo sin soporte nativo de video conocido.
Las formas soportadas son `input_video`, `video_url`, `video_source`, URLs HTTPS,
y `data:video/*;base64,...` URIs de datos. Los nombres de archivos simples en texto no se tratan
como video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) se encarga del recorrido de la solicitud, la
verificación de capacidad/política, la agregación por solicitud y la carga útil de respuesta.
El trabajo por video — adquisición, la caché de resultados completos, la descripción de una secuencia de fotogramas
(que fusiona cualquier transcripción de audio declarada por el llamador), y métricas/abortos/limpieza por intento — está oculto detrás de `processVideoPart` en
`videoBridgePipeline.ts`, llamado una vez por parte de video dentro del bucle de `preCall`.
Ese módulo también define los límites de puerto explícitos `VideoMediaBrokerPort`
(adquisición de bytes y extracción de fotogramas muestreados), `VideoAudioTranscriptionPort`
(fusión de una transcripción de audio declarada por el llamador con los subtítulos muestreados), y
`VideoDrilldownPort` (la forma de almacenamiento en crudo heredada). La producción de STT y la retención de fotogramas
se componen alrededor del puerto descriptivo a través de `createVideoSttAdapter` y
`createVideoDrilldownAdapter`; este último utiliza el ciclo de vida de manejador opaco compartido.

La ruta de solicitud pública `/v1` nunca importa ni invoca un subprocesso. Los
videos remotos se descargan bajo un límite de 50 MiB; los videos en base64 en línea tienen un
límite conservador de 36 MiB decodificados por video para que el modelo/mensajes/envase de enmarcado
puedan permanecer dentro del límite de admisión de solicitud JSON pública de 50 MiB. La longitud en línea y las estimaciones de tamaño decodificado se verifican antes de la asignación. Se requiere HTTPS
en la URL remota inicial y en cada redirección, utilizando el guardia de salida público existente
con fijación de DNS. Los bytes luego cruzan el límite interno exacto
`POST /api/modality-bridge/video/extract`. Esa ruta es tanto
`LOCAL_ONLY` como `SPAWN_CAPABLE`, acepta solo una solicitud autenticada por proceso,
de bucle de confianza, y nunca acepta una URL, ruta de sistema de archivos, ejecutable,
o lista de argumentos. La tubería de tamaño del cuerpo de la API y el lector de cuerpo incremental del manejador
imponen independientemente un límite de entrada de 50 MiB para el corredor. Su cola limitada ejecuta
una extracción a la vez, permite cuatro trabajos pendientes, y limita la entrada pendiente a
100 MiB.

Dentro del corredor, `ffprobe` lee un archivo local privado; la lista de formatos
permitidos excluye formatos de lista de reproducción y manifiesto. Para los contenedores de la familia MOV permitidos,
las referencias de datos MOV externas permanecen deshabilitadas por defecto, y el
comando fijo no opta por ellas. Tanto `ffprobe` como `ffmpeg` utilizan la
lista blanca de protocolo `file`-only, un hilo, arreglos de argumentos fijos, sin shell,
y ejecutables resueltos desde `PATH`. Los flujos de portada de imagen adjunta no son
candidatos reproducibles. Todos los flujos reproducibles deben satisfacer los límites, y un
flujo predeterminado explícito es preferido antes del retroceso determinista de índice más bajo.
Los videos están limitados a 600 segundos, 8,192 píxeles por dimensión, y
33,554,432 píxeles de origen. FFmpeg muestrea de 1 a 16 fotogramas JPEG a mitad de camino, reduce la escala
del lado largo a un máximo de 1,024 píxeles sin aumentar entradas más pequeñas, y
nunca recibe una URL. El muestreo es `uniforme` por defecto. Las políticas opcionales
`scene_aware` y `segment_aware` realizan un pase adicional fijo de FFmpeg sobre el flujo local ya validado, seleccionan
marcas de tiempo de escena `showinfo` limitadas, y retroceden de manera determinista a los mismos
puntos medios uniformes en caso de fallo del detector, tiempo de espera, salida malformada, o un conjunto de candidatos vacío. El modo consciente de segmentos asigna muestras de puntos medios proporcionalmente a
los intervalos de escena validados; la evidencia consciente de segmentos y el comportamiento de retroceso se
detallan a continuación. El límite duro de 16 fotogramas se aplica
después de la selección en cada política. Cuando una solicitud consciente de escena tiene solo un
presupuesto de un fotograma, utiliza el punto medio uniforme de todo el video activo o la ventana de enfoque
y reporta `policyEffective: uniform`: un solo fotograma de escena seleccionado no puede preservar ambos extremos temporales. Un llamador puede opcionalmente proporcionar una
ventana de enfoque finita (`start`/`end` segundos); los límites se ajustan a la duración de los medios,
ventanas invertidas o no finitas son rechazadas, y todas las políticas de muestreo se realizan solo dentro del intervalo normalizado. La ventana resultante
se incluye en los metadatos de muestreo y en el prefijo de descripción no confiable
para que los modelos posteriores puedan distinguir un extracto enfocado de la línea de tiempo completa.

El enfoque de subtítulos semánticos es una configuración separada y explícita. El modo de análisis predeterminado `full`
preserva el aviso de fotograma existente y nunca reenvía el texto de la solicitud al modelo de subtítulos. En el modo `focused`, el puente lee solo el último
`text`/`input_text` no vacío creado por el usuario del mismo contenedor de Chat o Responses,
lo normaliza a NFC, colapsa caracteres de control y espacios en blanco,
y lo limita a 500 puntos de código Unicode. Un resultado vacío retrocede al
exacto aviso `full`. Una pista utilizable se serializa como JSON en un bloque dedicado
de contexto de usuario no confiable y solo puede priorizar detalles observables; no
puede anular la advertencia separada contra seguir instrucciones visibles
o audibles en los medios. El enfoque textual nunca infiere `start`/`end` o cambia
el muestreador temporal.

#### FU-07 evidencia de segmento estructural

`segment_aware` utiliza un pase de pre-análisis limitado sobre el flujo de video local ya validado. La cadena de filtros fija primero escala a un máximo de 320 píxeles de ancho, detecta cambios de escena e intervalos congelados, luego muestrea a 1 fotograma por segundo para desenfoque, luma promedio e información espacial/temporal. El pase está limitado a 600 muestras estructurales, un hilo de FFmpeg/filtro, el mismo protocolo y listas de contenedores permitidos solo para `file`, un límite de salida de proceso de 1 MiB, y un máximo de 30 segundos dentro del tiempo compartido de aborto/plazo del corredor. Nunca acepta un comando, filtro, ruta o URL de la solicitud.

Los valores estructurales son evidencia de muestreo determinista, no comprensión semántica del video. No infieren sujetos, acciones, subtítulos, discurso o intención del usuario. Los límites de escena y congelación forman segmentos; la cobertura de congelación, desenfoque, exposición, detalle espacial y cambio temporal solo influyen en cómo se asigna el presupuesto existente de 1 a 16 fotogramas. Un segmento completamente congelado está limitado a un fotograma, mientras que los segmentos no congelados compiten por el presupuesto restante. Cuando los límites superan a los fotogramas, se mantiene una cobertura uniforme de la línea de tiempo para que cortes rápidos no puedan ocultar un segmento largo. Los límites de escena dentro de la resolución de análisis de 1 segundo de un límite de congelación se fusionan.

Filtros faltantes, evidencia malformada/vacía, un error del detector o el tiempo de espera de pre-análisis limitado fallan en abrirse a la política de punto medio uniforme exacta. Un aborto del llamador o un plazo del corredor no fallan en abrirse: terminan el subproceso en vuelo, previenen la extracción de fotogramas posteriores, y el árbol temporal privado se elimina en `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genera elementos FFmpeg reales deterministas para ahorros en llamadas de subtítulos post-deducción, asignación de presupuesto de movimiento denso, evidencia de desenfoque/exposición/SI-TI, cortes rápidos con una larga cola, y falsos positivos de desvanecimiento gradual. Registra el tiempo de pared de pre-análisis y, donde `/usr/bin/time` está disponible, el CPU hijo y el RSS máximo. Sus verificaciones de calidad son oráculos estructurales únicamente. La calidad real del modelo de subtítulos permanece en `HOLD` porque este arnés no tiene un punto final autorizado o un juez congelado. Los ahorros monetarios también permanecen en `HOLD` a menos que `--caption-cost-per-call-usd` proporcione una estimación positiva explícita por llamada; el script nunca fabrica ninguno de los resultados.

Cada fotograma está limitado a 4 MiB, todos los fotogramas sin procesar juntos a 23 MiB, y la respuesta serializada del corredor a 32 MiB. Un directorio temporal privado se elimina en `finally`. OmniRoute no agrupa FFmpeg y no acepta una ruta ejecutable personalizada. Antes de subtitular, el puente aplica un pase de deduplicación visual conservador: cada JPEG se reduce a un búfer en escala de grises de 16×16 y se compara solo con el último fotograma retenido. Para un presupuesto de subtítulos solicitado por encima de un fotograma, la extracción proporciona un grupo de candidatos limitado de hasta el doble de ese presupuesto y nunca más de 16 fotogramas. El límite solicitado se aplica solo después de la deduplicación, con los primeros y últimos candidatos seleccionados preservados durante el adelgazamiento final cuando el presupuesto es al menos dos. La política versionada `grayscale-16x16-mean-cells-v2` utiliza el mayor de la delta de luma promedio y la relación de celdas de miniatura cuya delta normalizada es al menos 0.05. El umbral de duplicados es la constante 0.04, elegida por su previsibilidad en lugar de ser expuesta como una configuración en tiempo de ejecución. Esta señal secundaria de alto contraste preserva pequeños movimientos y cambios de texto visible que una comparación solo de media puede ocultar. Los errores de comparador o decodificador fallan en abrirse y mantienen la cobertura. Los metadatos de salida separan los candidatos extraídos, los fotogramas utilizados con éxito y los duplicados visuales descartados.

Una parte de video explícitamente marcada puede solicitar una hoja de contacto con marca de tiempo. El puente construye un máximo de una cuadrícula JPEG de 4 columnas y 16 fotogramas. Cada celda de 512 píxeles quema su marca de tiempo de origen en una banda inferior de alto contraste, mientras que las mismas marcas de tiempo permanecen en los metadatos textuales para asociación y auditoría posteriores. El JPEG completo permanece limitado a 32 MiB. Si `sharp` no puede decodificar o componer la cuadrícula, el puente vuelve a los fotogramas JPEG individuales; un aborto del cliente aún se propaga a través de la operación de la hoja.

La evidencia de promoción está deliberadamente separada del microbenchmark de composición sintética. `scripts/perf/video-bridge-contact-sheet-eval.ts` define un arnés A/B versionado por esquema para modelos de visión compatibles con OpenAI reales. Mide los tokens reportados por el proveedor, la latencia de pared de extremo a extremo (incluida la composición de la hoja), el conteo de llamadas al modelo y la retención de hechos definida en el manifiesto. Las respuestas del modelo sin procesar no se escriben en el informe; solo se retienen los resúmenes SHA-256 y los IDs de hechos coincidentes. El arnés no realiza ninguna llamada de red o modelo pagado a menos que se pase `--execute-real` y se configuren `--model`, `OMNIROUTE_BASE_URL` y `OMNIROUTE_API_KEY`. Sin esa ejecución real explícita, su veredicto legible por máquina permanece en `HOLD`; las mediciones de carga útil/cantidad de llamadas sintéticas por sí solas no son evidencia de promoción.

El separado `scripts/perf/video-bridge-promotion-eval.ts` consume observaciones de FU-07 o FU-09. La admisión de promoción requiere los ocho tipos de escenarios sintéticos más un clip real saneado, al menos tres repeticiones medidas por rol y caso, las diez métricas declaradas, resúmenes de medios/prompt/hechos/ajustes congelados, IDs de observación únicos y orden A/B verificado. El recibo de ejecución vincula el resumen del corpus, el SHA exacto del candidato y la revisión del modelo. Las mediciones faltantes o inválidas permanecen en `HOLD`, incluyendo CPU por encima de 30 s, RSS máximo por encima de 512 MiB o pre-análisis por encima de 30 s. Estos son límites de admisión de evidencia, no una nueva garantía de aplicación de RSS en tiempo de ejecución.

FU-07 requiere al menos un 98% de retención de calidad y una latencia p95 no mayor a 1.2x la línea base, además de una mejora de recuperación media absoluta equilibrada de 0.05 en llamadas de subtítulos medias equivalentes, o al menos un 10% menos de llamadas de subtítulos post-deduplicadas medias. FU-09 requiere al menos 0.85 de calidad, 95% de retención, una reducción del 20% en la latencia p95 y una reducción del 10% en tokens. La pérdida de hechos críticos, el cumplimiento de inyección o el uso faltante impiden la promoción. Una ejecución no puede promover nada: `--previous-report` confirma dos ejecuciones elegibles distintas, no superpuestas, y consecutivas de la misma política/revisión de modelo/candidato/corpus. Un experimento de muestreo no puede confirmar un experimento de hoja de contacto.

Los recolectores deben puntuar las respuestas en memoria y guardar `responseDigest` más métricas y enlaces de observación, nunca el texto de respuesta. El consumidor también lee observaciones en bruto heredadas, pero nunca copia ese texto en sus informes. Exactamente uno de `responseDigest` o `rawResponseText` es aceptado para cada observación. La lista de permitidos versionada permanece vacía con un `hold` predeterminado inmutable. Una entrada elegible requiere su referencia de evidencia, política, revisión de modelo, SHA exacto del candidato, digest de manifiesto y dos IDs de ejecución distintas; los contextos en conflicto son rechazados. Estos metadatos son un contrato de auditoría, no prueba de que un archivo referenciado contenga mediciones genuinas. Revisa los recibos reales antes de agregar cualquier entrada. El punto final de estadísticas de gestión y el panel de Video exponen una preparación conservadora. Un alias de modelo configurado por sí solo no establece su revisión o el SHA del candidato en ejecución, por lo que el panel actual informa `HOLD` en lugar de reutilizar la elegibilidad de otro contexto de ejecución. La selección experimental explícita permanece separada de la promoción; ningún valor predeterminado se cambia automáticamente.

Los llamadores pueden adjuntar un array opcional `transcript.cues` a una parte de video soportada cuando ya poseen texto alineado. Cada indicación debe llevar `text`, un intervalo finito `start`/`end` dentro de la duración sondeada, y un `source` en la lista blanca (`client`, `embedded`, o `audio-bridge`); `confidence` tiene un valor predeterminado de `1` y debe permanecer entre `0` y `1`. Las indicaciones duplicadas exactas se colapsan. OmniRoute nunca inicia la transcripción a partir de estos metadatos: las indicaciones validadas se copian en el resultado descrito con fuente, confianza e intervalo, y se presentan como observaciones no confiables junto a los subtítulos de los fotogramas. El texto inválido, fuera de rango o sin procedencia es rechazado en lugar de mezclarse en el flujo de subtítulos. Ambos canales de transcripción del cuerpo de la solicitud normalizan la procedencia suministrada a `client`, incluyendo etiquetas autoafirmadas `embedded` o `audio-bridge`. Solo un adaptador de propiedad del servidor puede asignar esas etiquetas confiables a través del argumento solo de código `trustedSource`; un campo JSON de solicitud no puede alcanzar ese argumento. El texto de la transcripción sigue siendo contenido derivado de medios no confiables, independientemente de su procedencia, y nunca debe determinar la autorización.

Un llamador avanzado puede proporcionar una pista `audioTranscript` para el mismo video; se trata como texto proporcionado por el cliente, no como prueba de transcripción del servidor. La costura de fusión ejecuta observaciones visuales y de audio bajo una única fecha límite y señal de aborto, las ordena en una línea de tiempo común, colapsa duplicados exactos y reporta un resultado parcial cuando solo un lado tiene éxito. Un `audioTranscript` inválido se degrada a ese resultado parcial: la descripción visual se mantiene y la rama de audio registra un código de fallo sanitizado, en lugar de fallar todo el video. La disponibilidad por rama, la bandera parcial y los códigos de fallo sanitizados se preservan en el resultado descrito, en los metadatos de guardrail (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), en los metadatos de caché de resultados y en los contadores de fusión del puente. La ruta predeterminada del Video Bridge no invoca el reconocimiento de voz a texto ni descarga una segunda copia de medios; sin esa pista explícita, permanece solo en video.

**Retención de transcripciones (#12150 P1).** Esto se aplica automáticamente siempre que el Video Bridge (que es optativo) renderiza una indicación de transcripción: no hay una bandera de retención separada. Cuando una solicitud renderiza cualquier indicación de transcripción (un `transcript` declarado por el llamador o un `audioTranscript` fusionado), el guardrail la marca como `videoBridgeObserved` y produce una sombra redactada de la descripción del video: una representación idéntica en la que el cuerpo de texto libre de cada indicación es reemplazado por `[redacted-video-transcript]`, construido al sustituir el campo de indicación estructurado antes de que se ensamble la cadena (nunca mediante el análisis del texto aplanado, por lo que ningún contenido de indicación —adversarial u ordinario, incluyendo cuerpos que contengan `]` como `[inaudible]`/`[music]`— puede sobrevivir). El cuerpo de solicitud del registro de llamadas persistido intercambia cada parte de texto derivada del video por esa sombra redactada, emparejada por igualdad de contenido; el ancla `fullText` se vuelve a leer del payload de guardrail previo a la llamada terminado, por lo que la coincidencia aún tiene éxito después de que los guardrails de cadena posteriores (los enmascaradores de PII y credenciales, prioridades 10/95) reescriben el texto de descripción en su lugar y después de que la inyección de mensajes del sistema/prompt/transferencia remodela el array de mensajes. El cuerpo enviado hacia arriba al modelo permanece sin cambios. Una solicitud observada tampoco pobló ninguna Memoria duradera (se omiten tanto la extracción derivada de la solicitud como de la respuesta), por lo que la propia respuesta del modelo no puede reflejar el texto de la transcripción en la Memoria.

**Campos de video en bruto (#12430).** Cuando el puente está habilitado y el soporte de video nativo es desconocido o está ausente, los campos definidos `transcript`/`audioTranscript` también activan `videoBridgeObserved`, incluso después de un fallo de descripción o un límite de `maxVideos`. `null` y cadenas vacías cuentan; los campos ausentes y los metadatos no relacionados con video no. Las copias retenidas redactan estos campos u omiten la solicitud, y se omiten cachés/Memoria.

En esos caminos de respaldo, las pistas de llamada válidas se convierten en partes soportadas `text`/`input_text` en lugar de campos de proveedor no estándar. Ambas pistas suministradas por la solicitud siguen siendo observaciones `client` no confiables, con una advertencia explícita de que el video no fue descrito y las marcas de tiempo no fueron verificadas contra el medio. El presupuesto existente de 256 pistas/64-KiB total y por pista se aplica a las dos pistas juntas; las marcas de tiempo deben ajustarse al límite de 600 segundos del intermediario y a cualquier ventana de enfoque suministrada. Las pistas no válidas se descartan, no se reenvían como texto arbitrario; un hermano válido aún puede ser utilizado a menos que su presupuesto combinado sea excedido. Los campos nulos/vacíos no añaden texto. No se añade ninguna búsqueda de medios o transcripción por este respaldo. Los campos de extensión de transcripción se eliminan del transportador de video de respaldo y sus objetos `video_url`/`source`. La lista blanca de OpenAI se mantiene estricta; los transportadores de video nativos desconocidos siguen disponibles y los objetivos conocidos solo de texto mantienen marcadores seguros. Las sombras de redacción estructurada protegen el texto de transcripción añadido, mientras que la solicitud original de propiedad del llamador permanece sin cambios. Los objetivos soportados de forma nativa y los puentes deshabilitados conservan su comportamiento de bypass existente.

Las copias retenidas adicionales utilizan la misma señal de solicitud observada. La instantánea de solicitud del cliente antes de la protección, la solicitud pendiente en memoria y el registro de solicitudes rechazadas tempranas reemplazan estructuralmente los campos de transcripción en las partes de video; los prompts de cadena sintetizados por las etapas de la tubería y la transferencia de contexto son redactados en el sumidero del cuerpo de solicitud persistente. El marcador `video_content_removed` persistente hace que la continuación de `previous_response_id` falle cerrada en lugar de reconstruir texto que fue intencionalmente descartado. Si una solicitud observada pierde su sombra de redacción por parte antes de ser registrada, o incluso si una de varias sombras de video no coincide después de mutaciones posteriores de la solicitud, el cuerpo de solicitud retenido se omite por completo en lugar de retener una transcripción parcialmente redactada.

Para una solicitud observada, una respuesta del modelo podría citar cualquier parte de la transcripción sin un límite de cue estructurado. Su `responseBody` de registro de llamada persistente es, por lo tanto, reemplazado por un marcador de omisión; el artefacto detallado de la tubería (que puede incluir cuerpos de upstream/cliente y fragmentos de flujo) no se retiene. Las cachés semánticas, de idempotencia y de repetición de razonamiento evitan lecturas y escrituras para esa solicitud. La solicitud del proveedor y la respuesta visible para el cliente permanecen sin cambios. Los bytes de keepalive tempranos se drenan del búfer temporal cuando se omite el artefacto detallado. La advertencia de EventStream malformada de Kiro informa solo el conteo de bytes de carga útil, nunca su contenido o el error bruto del analizador JSON. Esto no afirma que cada diagnóstico de proveedor/plugin no relacionado haya sido auditado; la barrida más amplia del sumidero retenido se rastrea en #11658.

El ciclo de vida interno de `/api/modality-bridge/video/drilldown` es un sustrato de caché separado, autenticado por bucle/token. Cada operación también requiere un ID de principal opaco canónico. Antes de que se habilite un llamador de producción, debe derivar ese ID del inquilino autenticado y nunca debe reenviar un valor seleccionado por el cliente. Las claves de caché vinculan a ese principal con IDs de sesión canónica y referencia de video, almacenan solo sus claves derivadas de SHA-256 y limitan tanto las lecturas como la eliminación al mismo principal. La caché almacena un máximo de 16 cuadros JPEG derivados por entrada, los expira después de diez minutos y admite lecturas o eliminación de sesión explícita con límites `start`/`end`.

Cada principal está limitado a 16 entradas y 64 MiB de datos JPEG canónicos. Esos límites son independientes del límite global de 64 entradas/256 MiB: la presión de cuota del principal solo expulsa las entradas menos utilizadas de ese principal antes de considerar la expulsión LRU global. Las entradas expiradas se barren tanto de la contabilidad del principal como de la global en la actividad de caché, mientras que la cancelación y el fallo de validación no comprometen un reemplazo parcial.

La caché rechaza Base64 no canónico, relleno excesivo, medios no JPEG, JPEG malformados o truncados, y JPEG que producen una advertencia durante una decodificación de imagen completa `sharp` limitada. Re-codifica cada imagen aceptada como un JPEG canónico, deriva el ancho y la altura de los bytes decodificados en lugar de confiar en los campos del llamador, y descarta cualquier byte poliglota final en lugar de retenerlos. Solo el búfer comprimido canónico limitado se carga a ambas cuotas. El límite de wire JSON incluye el overhead de Base64 para el límite de entrada decodificada de 32 MiB. Cada derivación almacenada registra su formato/resolución JPEG validada, política de muestreo, versión de derivación, tiempo de creación, hash de contenido calculado por el servidor y hash de referencia de padre más el hash de contenido de padre del llamador confiable. La cancelación se verifica entre las fases de decodificación/hash asíncronas antes del compromiso atómico de la caché.

El productor de producción reutiliza los cuadros de corredor ya derivados solo después de un análisis visual exitoso, sin una segunda descarga/extracción de video. Requiere `modalityBridgeVideoDrilldownEnabled=true` del operador, `drilldown: true` estricto por parte, y un ID de registro de clave API autenticada. Los valores de principal/sesión declarados por el cliente nunca establecen propiedad. Sin las tres condiciones no se hash, redimensiona ni retiene cuadros adicionales. El fallo de retención preserva la respuesta visual utilizable. Las solicitudes consentidas evitan la caché de resultados de video completo, por lo que los resultados en caché nunca reproducen manejadores.

Las respuestas JSON y SSE exitosas exponen como máximo cuatro identificadores opacos en el encabezado limitado `x-omniroute-video-drilldown`. Los orígenes de navegador autorizados pueden leer ese encabezado sin ampliar la política de origen CORS. Los nuevos identificadores utilizan `v1.<token aleatorio base64url de 32 bytes>`, y el registro retiene solo sus hashes SHA-256. El lector/parser de encabezados también acepta tokens hexadecimales de 64 bits heredados. El consumidor público autenticado es `GET /api/v1/video-bridge/drilldown?handle=...`, controlado de forma independiente por `modalityBridgeVideoDrilldownRemoteEnabled=true`. Un valor explícito persistido en falso revoca el acceso incluso cuando el fallback heredado `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_REMOTE_ENABLED` está habilitado. La retención en producción tiene el fallback heredado análogo `OMNIROUTE_VIDEO_BRIDGE_DRILLDOWN_ENABLED`. Ambos fallbacks están desactivados por defecto.

El consumidor deriva la propiedad de la clave autenticada, aplica la política de clave y devuelve el mismo 404 para identificadores desconocidos, expirados y de otra clave. Acepta `variant=preview|standard|detail` (dimensión máxima de JPEG 320/640/1280, nunca escalado), `limit=1..8` (o el alias heredado `frames`, nunca ambos), `page` basado en cero y opcionales `start`/`end` en segundos de enfoque. Se rechazan claves de consulta duplicadas y ventanas de enfoque invertidas. Cada variante devuelta tiene un hash de su contenido real y metadatos de resolución real, vinculados a la fuente retenida. Las variantes se derivan en la lectura en lugar de almacenarse como copias retenidas adicionales. La respuesta JSON, incluyendo Base64/envase, está limitada a 32 MiB; una página demasiado grande devuelve 413 y el cliente debe solicitar menos fotogramas. Las lecturas verifican la cancelación alrededor de cada cambio de tamaño y vuelven a verificar la validez del identificador antes de devolver. `DELETE` por el propietario es idempotente; la eliminación o la expiración de TTL libera la fuente retenida y la contabilidad de uso.

El almacén compartido es local al proceso: los identificadores expiran al reiniciar y no son transferibles entre procesos independientes de OmniRoute. Las estadísticas de gestión exponen la política de retención/remota efectiva y las entradas/bytes retenidos agregados solamente, nunca medios, referencias, IDs principales o identificadores. El panel de configuración de Video muestra esos valores y puede persistir ambos interruptores de consentimiento. Esta documentación de implementación no es evidencia de despliegue en vivo o promoción; la aceptación del modelo real se rastrea por separado.

Los fotogramas se subtitulan secuencialmente con el modelo de Video configurado. Un anulación de Video vacía hereda la configuración de Visión; si ambos están vacíos, el enrutador automático de Visión selecciona el modelo efectivo capaz de visión. Los subtítulos exitosos reemplazan la parte original con un prefijo estable `[Descripción del Video:` que también marca el texto como una observación derivada de medios no confiables y le dice a los modelos posteriores que no sigan las instrucciones encontradas en los medios. Las claves de caché de subtítulos de fotogramas incluyen los bytes JPEG, el aviso, la marca de tiempo y el modelo efectivo; solo se almacenan en caché los subtítulos exitosos. Las entradas de caché retienen el modelo productor exitoso real, incluyendo un modelo de respaldo; el puente informa `mixed` cuando diferentes fotogramas fueron producidos por diferentes modelos. Un acierto de caché reutiliza esa identidad de productor en lugar de volver a etiquetarla como el plan de enrutamiento solicitado. La caché de resultados de video completo se basa en cada entrada que cambia la salida — aviso, modelo efectivo, política de muestreo, recuento de fotogramas, modo de análisis semántico, el hash SHA-256 de la pista de enfoque normalizada, ventana de enfoque, `transcript`, `audioTranscript`, y la bandera de hoja de contacto — por lo que cambiar cualquiera de esas dimensiones es un fallo de caché, nunca una reutilización obsoleta. La versión de política de deduplicación visual, el umbral y el recuento de fotogramas candidatos limitados también son explícitos en la clave de caché de resultados y metadatos; por lo tanto, un cambio de política no puede reutilizar una descripción de video completo obsoleta. Los metadatos de caché de resultados v4 mantienen el modo y el hash, nunca la tarea de usuario en bruto. Los metadatos de guardarraíl informan tanto los modos de análisis solicitados como los efectivos; un modo `focused` solicitado sin texto de usuario utilizable se informa como efectivamente `full`.

El guardarraíl extrae cada parte de video soportada pero no describe más de `modalityBridgeVideoMaxVideos`. Para un objetivo que se ha demostrado tener `supportsVideo === false`, los videos fallidos y sobre el límite se convierten en marcadores de texto seguro explícitos, por lo que no sobrevive ningún video en bruto. Cuando la capacidad es desconocida, esas partes retienen su portador de video; cualquier transcripción de respaldo sigue la conversión de texto limitada anterior. Los objetivos con `supportsVideo === true` evitan el puente. La señal de aborto de la solicitud del cliente se propaga a través de la descarga, la cola del corredor, los subprocesos y las llamadas de subtítulos; los abortos se detienen entre videos y nunca fallan abriendo a medios en bruto.

Las configuraciones de tiempo de ejecución están respaldadas por la base de datos y validadas por Zod:

| Clave                               | Predeterminado | Rango / comportamiento                                                                                      |
| ----------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`        | Opcional en tiempo de ejecución, opt-in                                                                     |
| `modalityBridgeVideoAnalysisMode`   | `"full"`       | `full` preserva subtítulos genéricos; `focused` utiliza contexto limitado y no confiable del último usuario |
| `modalityBridgeVideoModel`          | `""`           | Hereda el modelo del Puente de Visión                                                                       |
| `modalityBridgeVideoFrameCount`     | `8`            | 1–16                                                                                                        |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`    | `uniform`, `scene_aware`, o `segment_aware` proporcional; la falla del detector vuelve a `uniform`          |
| `modalityBridgeVideoMaxVideos`      | `1`            | 1–4                                                                                                         |
| `modalityBridgeVideoTimeout`        | `120000`       | 1000–120000 ms                                                                                              |

Valores de tiempo de espera de video persistidos en legado superiores a 120 segundos se limitan al plazo del broker; se rechazan las escrituras de nuevas configuraciones por encima de ese límite. `GET /api/modality-bridge/video/runtime` requiere una localidad de bucle de confianza estampada antes de la autenticación o sondeo en tiempo de ejecución, luego requiere autenticación de gestión. Solo devuelve versiones de FFmpeg/ffprobe `disponibles` y sanitizadas, y una razón fija cuando el tiempo de ejecución no está disponible. El endpoint de extracción interno no es una API de carga pública: la saturación de la cola devuelve `503` más `Retry-After`, una desconexión del llamador devuelve `499`, y el plazo fijo del broker devuelve `504`. Las respuestas convertidas añaden `video->text;model=<visionModel>;parts=<videos>` al encabezado central `x-omniroute-modality-bridge` sin eliminar segmentos de Visión o Audio.

### PII Masker (`piiMasker.ts`)

Funciona en **ambas** etapas.

- **`preCall`** clona la carga útil, recorre `system`, `messages`, `input` y `prompt` (incluyendo elementos de cadena simple), y aplica `processPII()` (de `@/shared/utils/inputSanitizer`) a los campos de cadena `content`/`text`. Cuando `PII_REDACTION_ENABLED=true`, se redacta el PII detectado en la carga útil saliente. Esto es independiente de `INPUT_SANITIZER_MODE` (que solo controla la política de inyección de prompts). Cuando la redacción está desactivada, el registro de la llamada cuenta las detecciones sin reescribir el contenido.
- **`postCall`** clona profundamente la respuesta, ejecuta `sanitizePIIResponse()` más el enmascarador de forma de la API de Respuestas (`maskResponsesOutput` — cubre `output_text` y `output[].content[].text`). Si ocurre alguna redacción, la respuesta modificada reemplaza la original.

La barandilla nunca bloquea; solo anota (`meta.detections`, `meta.redacted`) o reescribe.

### Prompt Injection (`promptInjection.ts`)

Detecta estructuras adversariales en el contenido proporcionado por el usuario y aplica la política configurada. El comportamiento está impulsado por variables de entorno y opciones del constructor:

| Configuración     | Var de entorno                                                                                        | Predeterminado | Efecto                                                                                                                                                                                                                |
| ----------------- | ----------------------------------------------------------------------------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Habilitado        | `INPUT_SANITIZER_ENABLED`                                                                             | `true`         | Cuando es `false`, la barandilla se corta.                                                                                                                                                                            |
| Modo              | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`         | Política de inyección: `block`, `warn` o `log`. (`redact` es aceptado por compatibilidad, pero **no** elimina el texto de inyección; la solicitud de reescritura de PII está controlada por `PII_REDACTION_ENABLED`.) |
| Umbral de bloqueo | opción `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`         | Severidad mínima requerida para bloquear. Medium es solo de observación por defecto.                                                                                                                                  |

**Precedencia del modo** (`getMode`): `options.mode` del llamador → `INJECTION_GUARD_MODE` **anulación de la función de bandera de la base de datos** (Dashboard → Configuración → Banderas de características) → var de entorno `INJECTION_GUARD_MODE` → var de entorno `INPUT_SANITIZER_MODE` → `warn`. Por lo tanto, una anulación del panel de control gana sobre las variables de entorno, por lo que la interfaz de usuario de Banderas de características controla la barandilla en vivo (sin reinicio). La lectura de la base de datos es a prueba de fallos: si hay un error, la barandilla vuelve al comportamiento basado en el entorno, y cuando no se establece ninguna anulación, el comportamiento es idéntico a la resolución solo basada en el entorno.

Fuentes de detección:

1. `sanitizeRequest()` de `@/shared/utils/inputSanitizer` (conjunto de detectores compartidos utilizados en otros lugares de la canalización).
2. `DEFAULT_GUARD_PATTERNS` incorporados (actualmente `system_override_inline` y `markdown_system_block`, ambos de severidad `high`).
3. `customPatterns` opcionales pasados a través de opciones del constructor (cadenas, regex o registros `{ name, pattern, severity }`).

Cuando `mode === "block"` **y** al menos una detección cumple con el umbral de severidad, `preCall` devuelve `{ block: true, message: "Solicitud rechazada: contenido sospechoso detectado" }`. En modos `warn`/`log`, la barandilla registra pero permite la llamada. El helper compartido `evaluatePromptInjection()` también se exporta para los llamadores que necesitan evaluar prompts sin pasar por el registro.

**Límite de escaneo (v3.8.20):** el detector solo inspecciona los **primeros 16 KB** del texto de prompt unido — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) en `src/shared/utils/inputSanitizer.ts`. Tanto `detectInjection()` como `evaluatePromptInjection()` `slice(0, MAX_INJECTION_SCAN_BYTES)` antes de ejecutar el bucle de patrones. Las directivas de inyección se encuentran cerca de la parte superior de una entrada, por lo que esto limita el uso de CPU/GC de regex en cargas útiles de varios cientos de KB sin debilitar la detección (cf. #3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Funciona en **ambas** etapas, al final de la cadena predeterminada (prioridad `95`). Redacta patrones de clave API / token secreto bien conocidos de la carga útil saliente (contenido del mensaje, argumentos de llamada a herramientas, resultados de herramientas) **y** de la respuesta del proveedor, por lo que una credencial pegada en un prompt (o devuelta por un resultado de herramienta) no se filtra al proveedor ascendente o de vuelta al cliente.

- **Solo con opción de participación**, misma convención que la redacción de PII (Regla Dura #20-adjacente):
  deshabilitado a menos que `settings.credentialRedactionEnabled === true` **o**
  `CREDENTIAL_REDACTION_ENABLED=true`. Con esto desactivado, la barrera es un no-op —
  nunca bloquea y nunca reescribe.
- `redactCredentials()` recorre todo el árbol de carga útil/respuesta (`walkValue()`,
  seguro contra contaminación de prototipos, seguro contra ciclos a través de `WeakSet`) y reemplaza coincidencias con
  un marcador de posición `[REDACTED:<type>]`, clonando solo las ramas que realmente
  cambiaron.
- `CREDENTIAL_PATTERNS` cubre claves de proveedores de LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens de VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), claves de pago (Stripe, Square), claves de nube
  (clave de acceso de AWS, Twilio, SendGrid, Mailgun), claves privadas / JWTs,
  cadenas de conexión que contienen credenciales (`mongodb://user:pass@...`, etc.), y
  un patrón genérico de encabezado-valor `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Las claves con forma de encabezado (`authorization`, `x-api-key`, `api-key`,
  `apikey`) se redactan estructuralmente (solo el valor, el prefijo del esquema como
  `Bearer `/`Basic ` se conserva) en lugar de a través de la expresión regular de texto genérica.
- La barrera nunca bloquea; solo reescribe (`modifiedPayload` /
  `modifiedResponse`) y anota (`meta.credentialsRedacted`, `meta.count`).

Guardia de regresión: `tests/unit/credential-masker-guardrail.test.ts`.

## Contrato base (`base.ts`)

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
  block?: boolean; // true interrumpe inmediatamente la cadena
  message?: string; // se muestra cuando se bloquea
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // devuelto por preCall para reescribir la solicitud
  modifiedResponse?: TValue; // devuelto por postCall para reescribir la respuesta
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

Un mecanismo de protección indica que «no hay cambios» devolviendo `void`, `{}` o
`{ block: false }`. Devolver un `modifiedPayload`/`modifiedResponse` reemplaza
el valor que fluye por la cadena para los mecanismos de protección posteriores.
`signal?: AbortSignal` transmite el ciclo de vida del llamador a los mecanismos de protección. La cancelación de una solicitud es la excepción deliberada de apertura ante fallos: los puentes multimedia detienen el trabajo y realizan la limpieza sin restaurar los datos multimedia sin procesar en un destino que se sabe que no los admite.

## Registro (`registry.ts`)

La instancia singleton `guardrailRegistry` expone:

- `register(guardrail)` — añade un mecanismo de protección (o reemplaza uno según su nombre normalizado) y
  vuelve a ordenarlos por `priority` ascendente.
- `clear()` / `list()` — funciones auxiliares administrativas.
- `runPreCallHooks(payload, context)` — recorre los mecanismos de protección activos, pasa el
  payload a través de `modifiedPayload` y se detiene ante el primer `block: true`.
- `runPostCallHooks(response, context)` — el mismo flujo en el lado de la respuesta.
- `resetGuardrailsForTests({ registerDefaults })` — borra el estado y, opcionalmente,
  vuelve a registrar los valores predeterminados para lograr un aislamiento limpio de las pruebas.

Ambos ejecutores devuelven `{ blocked, payload|response, results, guardrail?, message? }`,
donde `results` es un array de registros `GuardrailExecutionResult` que incluyen
los campos `blocked`, `skipped`, `modified`, `error` y `meta` por cada mecanismo de protección,
útiles para el seguimiento.

### Desactivar mecanismos de protección por solicitud

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` recopila una
lista sin duplicados de nombres de mecanismos de protección que deben omitirse en la
solicitud actual. Fuentes (todas opcionales y combinadas):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` en el cuerpo de la solicitud (nivel superior)
- `metadata.disabledGuardrails` en el cuerpo de la solicitud
- Encabezado `x-omniroute-disabled-guardrails` (o el heredado
  `x-disabled-guardrails`)

Los valores pueden ser arrays de cadenas o una cadena separada por comas; los nombres se
normalizan a minúsculas en formato kebab-case (`pii_masker` → `pii-masker`). El resultado
se pasa mediante `context.disabledGuardrails` al registro, que omite
los mecanismos de protección coincidentes (`skipped: true` en `results`).

## Orden de ejecución

Para cada solicitud que pasa por `src/sse/handlers/chat.ts` y
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` crea la lista de omisiones a partir de la clave de API, el cuerpo
   y los encabezados.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` ejecuta las barreras de seguridad en orden
   ascendente de prioridad:
   - Las barreras de seguridad deshabilitadas se registran como `skipped`.
   - El método `preCall` de cada barrera de seguridad puede reescribir la carga útil mediante `modifiedPayload`.
   - El primer `block: true` interrumpe la cadena y el controlador devuelve
     una respuesta de rechazo de la barrera de seguridad.
3. La carga útil (posiblemente reescrita) pasa al enrutamiento combinado y al despacho
   ascendente.
4. Una vez creada la respuesta, `guardrailRegistry.runPostCallHooks(...)`
   ejecuta la misma cadena sobre la respuesta. En este caso, `block: true` descarta la respuesta
   ascendente.

Las barreras de seguridad que generan una excepción se registran con `error: <message>` y se anotan mediante
`logger.warn`, pero la cadena continúa; por diseño, se permite la operación en caso de fallo.

## Configuración

Variables de entorno leídas por las barreras de seguridad integradas:

| Variable                              | Utilizada por              | Efecto                                                                                                                                          |
| ------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`         | Establézcala en `false` para deshabilitar por completo la detección.                                                                            |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`         | Política de inyección: `warn`, `block` o `log`. El valor heredado `redact` no reescribe el texto de la inyección.                               |
| `INJECTION_GUARD_MODE`                | `prompt-injection`         | Modo de la protección contra inyecciones; también es una marca de funcionalidad de la BD que **reemplaza** las variables de entorno (BD > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`         | Gravedad mínima que rechaza `MODE=block`: `high` (predeterminada), `medium` o `low`.                                                            |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`         | Alias heredado de `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                            |
| `PII_REDACTION_ENABLED`               | `pii-masker`               | Cuando es `true`, se oculta la PII de la solicitud (independientemente del modo de inyección).                                                  |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (descendente) | Controla el comportamiento del ocultador en las respuestas.                                                                                     |

Las barreras de seguridad de Modality Bridge leen la configuración en tiempo de ejecución del almacén
de ajustes respaldado por la BD (`getSettings()`), no de las variables de entorno. Las claves principales de Vision son
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` y
`modalityBridgeCacheMaxEntries`. Las claves heredadas
`visionBridge*` solo se aceptan como mecanismo alternativo de lectura durante un ciclo, según lo documentado;
las escrituras del panel usan las claves principales. Los valores predeterminados y el
resolutor alternativo se encuentran en `src/shared/constants/modalityBridgeDefaults.ts`, mientras que las constantes
heredadas se conservan en `src/shared/constants/visionBridgeDefaults.ts`.

Audio usa `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` y `modalityBridgeAudioMaxClips`, además de los ajustes compartidos
`modalityBridgeCache*`. Audio no tiene un mecanismo alternativo para claves heredadas porque estas
claves se introdujeron con el esquema de Modality Bridge.

Video usa `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` y
`modalityBridgeVideoTimeout`, además de los ajustes compartidos `modalityBridgeCache*`.
Está deshabilitado de forma predeterminada porque FFmpeg/ffprobe son dependencias operativas
opcionales y la descripción de fotogramas añade latencia y costes del modelo.

## Barreras de protección personalizadas

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

Pasos:

1. Cree `src/lib/guardrails/myGuardrail.ts` extendiendo `BaseGuardrail`.
2. Implemente `preCall` y/o `postCall`.
3. Regístrela durante la importación (incorpórela desde `registerDefaultGuardrails`) o
   llame a `guardrailRegistry.register(...)` en tiempo de ejecución; el registro reemplaza
   cualquier barrera de protección anterior que tenga el mismo nombre normalizado.
4. Añada pruebas en `tests/unit/` (ejemplos existentes:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Pruebas

Use `resetGuardrailsForTests()` entre pruebas para comenzar desde un estado conocido.
Pase `{ registerDefaults: false }` para comenzar con un registro vacío y
registrar únicamente las barreras de protección que se estén probando. Vision Bridge admite
inyección de dependencias (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge expone los
puntos de integración equivalentes para la configuración, las capacidades, la selección del modelo STT, las comprobaciones
de credenciales y la transcripción. Por lo tanto, las pruebas pueden ejercitar ambos flujos sin acceso
a la base de datos ni a la red.

## Véase también

- `src/lib/guardrails/` — implementación
- `src/shared/utils/inputSanitizer.ts` — detector compartido que permite
  detectar la inyección de prompts y enmascarar PII
- `src/shared/constants/visionBridgeDefaults.ts` — valores predeterminados de Vision Bridge y
  lista de modelos con puente forzado
- `src/shared/constants/modalityBridgeDefaults.ts` — valores predeterminados compartidos de ejecución de Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — capa ortogonal (disyuntor, períodos de espera)
- `docs/reference/ENVIRONMENT.md` — referencia completa de variables de entorno

## Cobertura de rutas y red team de la protección contra inyecciones (Fase 8 · Bloque D)

La protección contra inyecciones (`createInjectionGuard` / `withInjectionGuard`) cubre todas las rutas
que aceptan prompts de usuario. Respeta `INJECTION_GUARD_MODE` (el valor predeterminado `warn` = solo registra;
`block` = devuelve HTTP 400 `SECURITY_001`).

| Tipo              | Rutas                                                                                                                                                | Modo predeterminado |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Texto (existente) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Generativas       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Datos             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

La extracción de texto (`extractMessageContents`) cubre `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red team (nocturno, `nightly-llm-security.yml`):** promptfoo valida que cada ruta bloquee
el corpus OWASP-LLM con `INJECTION_GUARD_MODE=block`; garak ejecuta sondas (se omite si no hay un secreto).
`moderations` se incluye para mantener la coherencia; los operadores que utilicen el modo de bloqueo pueden excluirla mediante
`resolveDisabledGuardrails`.

El flujo de trabajo nocturno (`.github/workflows/nightly-llm-security.yml`, cron + ejecución
manual) tiene dos trabajos:

- **`promptfoo-guard` (bloqueante)** — ejecuta `promptfoo eval -c promptfooconfig.yaml`
  con `INJECTION_GUARD_MODE=block`. Cada caso adversario (p. ej., «ignora todas las
  instrucciones anteriores…», jailbreaks de estilo DAN) comprueba que la respuesta contenga
  `error.code === "SECURITY_001"`, es decir, que la protección haya rechazado realmente la solicitud.
- **`garak` (consultivo)** — ejecuta garak `--probes promptinject,dan,leakreplay`
  contra una instancia local de OmniRoute (`http://localhost:20128/v1`). Está condicionado a un
  secreto del proveedor (`PROMPTFOO_PROVIDER_KEY`); se omite sin errores y lleva el sufijo
  `|| true`, por lo que genera informes sin provocar fallos en CI.

La cobertura del auxiliar de protección (`createInjectionGuard` / `withInjectionGuard`)
abarca todas las rutas `/v1` que admiten prompts; el texto del prompt se obtiene de
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` mediante
`extractMessageContents()` en `src/shared/utils/inputSanitizer.ts`.
