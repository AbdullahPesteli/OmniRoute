import assert from "node:assert/strict";
import test from "node:test";

import {
  ADOBE_FORTER_TIMESTAMP_PATTERN,
  matchAdobeForterTimestamp,
} from "../../open-sse/services/adobeFireflySecurity.ts";

const MS = 1761600000000; // 2025-10-27

test("legacy delimited forter token still parses", () => {
  assert.equal(matchAdobeForterTimestamp(`ftr_${MS}__UDF43_9cc`), MS);
});

test("modern undelimited colligo token parses", () => {
  assert.equal(matchAdobeForterTimestamp(`UDF43-${MS}-v2_tt`), MS);
  assert.equal(matchAdobeForterTimestamp(String(MS)), MS);
});

test("does not match digits inside a longer run", () => {
  assert.equal(matchAdobeForterTimestamp(`x${MS}9`), 0);
  assert.equal(matchAdobeForterTimestamp("12345678901234567"), 0);
});

test("rejects out-of-range and short values", () => {
  assert.equal(matchAdobeForterTimestamp("_1000000000000__"), 0);
  assert.equal(matchAdobeForterTimestamp("_176160000000__"), 0);
  assert.equal(matchAdobeForterTimestamp(""), 0);
});

test("pattern is stateless across calls", () => {
  assert.equal(ADOBE_FORTER_TIMESTAMP_PATTERN.global, false);
  assert.equal(matchAdobeForterTimestamp(`a_${MS}__`), MS);
  assert.equal(matchAdobeForterTimestamp(`a_${MS}__`), MS);
});
