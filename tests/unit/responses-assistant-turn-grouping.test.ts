import test from "node:test";
import assert from "node:assert/strict";
import { openaiResponsesToOpenAIRequest } from "../../open-sse/translator/request/openai-responses.ts";

test("Responses -> Chat keeps assistant text, reasoning, and function calls in one turn", () => {
  const result = openaiResponsesToOpenAIRequest(
    "gpt-4o",
    {
      input: [
        {
          type: "reasoning",
          content: [{ type: "reasoning_text", text: "Inspect first" }],
        },
        {
          type: "message",
          role: "assistant",
          content: [{ type: "output_text", text: "I will inspect" }],
        },
        { type: "function_call", call_id: "call_1", name: "read_file", arguments: "{}" },
        { type: "function_call", call_id: "call_2", name: "search", arguments: "{}" },
        { type: "function_call_output", call_id: "call_1", output: "contents" },
      ],
    },
    false,
    { _preserveReasoningContent: true }
  ) as { messages: Array<Record<string, unknown>> };

  assert.equal(result.messages.length, 2);
  assert.deepEqual(result.messages[0], {
    role: "assistant",
    content: [{ type: "text", text: "I will inspect" }],
    reasoning_content: "Inspect first",
    tool_calls: [
      {
        id: "call_1",
        type: "function",
        function: { name: "read_file", arguments: "{}" },
      },
      {
        id: "call_2",
        type: "function",
        function: { name: "search", arguments: "{}" },
      },
    ],
  });
  assert.deepEqual(result.messages[1], {
    role: "tool",
    tool_call_id: "call_1",
    content: "contents",
  });
});
