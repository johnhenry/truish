import test from "node:test";
import assert from "node:assert";
import { createMatcher } from "../index.mjs";

test("createMatcher function", async (t) => {
  await t.test("should create a matcher function", () => {
    const colorMatcher = createMatcher("red", "green", "blue");
    assert.strictEqual(typeof colorMatcher, "function");
  });

  await t.test("should match values correctly", () => {
    const colorMatcher = createMatcher("red", "green", "blue");
    assert.strictEqual(colorMatcher("red"), true);
    assert.strictEqual(colorMatcher("green"), true);
    assert.strictEqual(colorMatcher("blue"), true);
    assert.strictEqual(colorMatcher("yellow"), false);
    assert.strictEqual(colorMatcher("purple"), false);
  });

  await t.test("should be case-insensitive and trim values", () => {
    const colorMatcher = createMatcher("red", "green", "blue");
    assert.strictEqual(colorMatcher("  RED  "), true);
    assert.strictEqual(colorMatcher("Blue"), true);
    assert.strictEqual(colorMatcher("GrEeN"), true);
  });

  await t.test("should handle empty word lists", () => {
    const emptyMatcher = createMatcher();
    assert.strictEqual(emptyMatcher("anything"), false);
  });

  await t.test("should throw TypeError for non-string values", () => {
    const matcher = createMatcher("test");
    assert.throws(() => matcher(123), TypeError);
    assert.throws(() => matcher(true), TypeError);
    assert.throws(() => matcher(null), TypeError);
    assert.throws(() => matcher(undefined), TypeError);
  });
});
