import test from "node:test";
import assert from "node:assert";
import { truish, falsish, indeterminant } from "../index.mjs";

test("truish function", async (t) => {
  await t.test("should return true for truthy values", () => {
    assert.strictEqual(truish("true"), true);
    assert.strictEqual(truish("yes"), true);
    assert.strictEqual(truish("on"), true);
    assert.strictEqual(truish("1"), true);
  });

  await t.test("should return false for non-truthy values", () => {
    assert.strictEqual(truish("false"), false);
    assert.strictEqual(truish("no"), false);
    assert.strictEqual(truish("maybe"), false);
    assert.strictEqual(truish("random string"), false);
  });

  await t.test("should be case-insensitive and trim values", () => {
    assert.strictEqual(truish("  TRUE  "), true);
    assert.strictEqual(truish("Yes"), true);
  });

  await t.test("should throw TypeError for non-string values", () => {
    assert.throws(() => truish(123), TypeError);
    assert.throws(() => truish(true), TypeError);
    assert.throws(() => truish(null), TypeError);
    assert.throws(() => truish(undefined), TypeError);
  });
});

test("falsish function", async (t) => {
  await t.test("should return true for falsy values", () => {
    assert.strictEqual(falsish("false"), true);
    assert.strictEqual(falsish("no"), true);
    assert.strictEqual(falsish("off"), true);
    assert.strictEqual(falsish("0"), true);
  });

  await t.test("should return false for non-falsy values", () => {
    assert.strictEqual(falsish("true"), false);
    assert.strictEqual(falsish("yes"), false);
    assert.strictEqual(falsish("maybe"), false);
    assert.strictEqual(falsish("random string"), false);
  });

  await t.test("should be case-insensitive and trim values", () => {
    assert.strictEqual(falsish("  FALSE  "), true);
    assert.strictEqual(falsish("No"), true);
  });

  await t.test("should throw TypeError for non-string values", () => {
    assert.throws(() => falsish(123), TypeError);
    assert.throws(() => falsish(false), TypeError);
    assert.throws(() => falsish(null), TypeError);
    assert.throws(() => falsish(undefined), TypeError);
  });
});

test("indeterminant function", async (t) => {
  await t.test("should return true for indeterminant values", () => {
    assert.strictEqual(indeterminant("maybe"), true);
    assert.strictEqual(indeterminant("possibly"), true);
    assert.strictEqual(indeterminant("sometimes"), true);
  });

  await t.test("should return false for non-indeterminant values", () => {
    assert.strictEqual(indeterminant("true"), false);
    assert.strictEqual(indeterminant("false"), false);
    assert.strictEqual(indeterminant("yes"), false);
    assert.strictEqual(indeterminant("no"), false);
    assert.strictEqual(indeterminant("random string"), false);
  });

  await t.test("should be case-insensitive and trim values", () => {
    assert.strictEqual(indeterminant("  MAYBE  "), true);
    assert.strictEqual(indeterminant("Possibly"), true);
  });

  await t.test("should throw TypeError for non-string values", () => {
    assert.throws(() => indeterminant(123), TypeError);
    assert.throws(() => indeterminant(true), TypeError);
    assert.throws(() => indeterminant(null), TypeError);
    assert.throws(() => indeterminant(undefined), TypeError);
  });
});
