import assert from "node:assert/strict";
import * as prettier from "prettier";
import makeSynchronized3 from "./make-synchronized-0-3/make-synchronized.js";
import makeSynchronized from "./make-synchronized/make-synchronized.js";
import synckit from "./synckit/synckit.js";
import fs from "node:fs/promises";
import { runBench } from "../../utilities/utilities.js";

const code = await fs.readFile(new URL(import.meta.url), "utf8");
const prettierFormat = (code) => prettier.format(code, { parser: "meriyah" });
const expected = await prettierFormat(code);

await runBench({
  name: "prettier.format()",
  cases: [
    { name: "prettier", fn: prettierFormat, isAsync: true },
    { name: "synckit", fn: synckit },
    { name: "makeSynchronized", fn: makeSynchronized },
    { name: "makeSynchronized 0.3", fn: makeSynchronized3 },
  ],
  run: ({ fn }) => fn(code),
  expected,
});
