import assert from "node:assert/strict";
import makeSynchronous from "./make-synchronous.js";
import makeSynchronized from "./make-synchronized.js";
import { runBench } from "../../utilities/utilities.js";
import implementation from "./implementation.js";

const value = Math.random();

await runBench({
  name: "Inline function identity()",
  cases: [
    { name: "identity()", fn: implementation, isAsync: true },
    { name: "make-synchronized", fn: makeSynchronized },
    { name: "make-synchronous", fn: makeSynchronous },
  ],
  run: ({ fn }) => fn(value),
  expected: value,
});
