import assert from "node:assert/strict";
import makeSynchronized3 from "./make-synchronized-0-3/make-synchronized.js";
import makeSynchronized from "./make-synchronized/make-synchronized.js";
import synckit from "./synckit/synckit.js";
import fs from "node:fs/promises";
import { runBench } from "../../utilities/utilities.js";

const value = Math.random();

await runBench({
  name: "identity()",
  cases: [
    {
      name: "identity()",
      fn: (value) => Promise.resolve(value),
      isAsync: true,
    },
    { name: "identity()", fn: (value) => value },
    { name: "synckit", fn: synckit },
    { name: "makeSynchronized", fn: makeSynchronized },
    { name: "makeSynchronized 0.3", fn: makeSynchronized3 },
  ],
  run: ({ fn }) => fn(value),
  expected: value,
});
