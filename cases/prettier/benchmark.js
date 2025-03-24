import assert from "node:assert/strict";
import makeSynchronized3 from "./make-synchronized-0-3.js";
import makeSynchronized from "./make-synchronized.js";
import synckit from "./synckit/synckit.js";
import fs from "node:fs/promises";
import { runBench } from "../../utilities/utilities.js";
import implementation from "./implementation.js";

const code = await fs.readFile(new URL(import.meta.url), "utf8");
const expected = await implementation(code);

await runBench({
  name: "prettier.format()",
  cases: [
    { name: "prettier.format()", fn: implementation, isAsync: true },
    { name: "synckit", fn: synckit },
    { name: "make-synchronized", fn: makeSynchronized },
    { name: "make-synchronized@0.3", fn: makeSynchronized3 },
  ],
  run: ({ fn }) => fn(code),
  expected,
});
