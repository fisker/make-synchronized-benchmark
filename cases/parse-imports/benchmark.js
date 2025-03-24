import assert from "node:assert/strict";
import {
  parseImportsSync,
  parseImports,
} from "./parse-imports/parse-imports.js";
import makeSynchronized3 from "./make-synchronized-0-3/make-synchronized.js";
import makeSynchronized from "./make-synchronized/make-synchronized.js";
import synckit from "./synckit/synckit.js";
import fs from "node:fs/promises";
import * as parseImportsPackage from "parse-imports";
import { runBench } from "../../utilities/utilities.js";

const code = await fs.readFile(new URL(import.meta.url), "utf8");
const expected = Array.from(
  await parseImportsPackage.parseImports(code),
).length;

await runBench({
  name: "parseImports",
  cases: [
    { name: "parseImportsSync", fn: parseImportsSync },
    { name: "parseImports", fn: parseImports, isAsync: true },
    { name: "synckit", fn: synckit },
    { name: "makeSynchronized", fn: makeSynchronized },
    { name: "makeSynchronized 0.3", fn: makeSynchronized3 },
  ],
  run: ({ isAsync, fn }) =>
    isAsync ? fn(code).then((x) => x.length) : fn(code).length,
  expected,
});
