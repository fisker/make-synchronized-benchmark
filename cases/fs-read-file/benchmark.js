import makeSynchronized3 from "./make-synchronized-0-3.js";
import makeSynchronized from "./make-synchronized.js";
import synckit from "./synckit/synckit.js";
import fs from "node:fs/promises";
import { runBench } from "../../utilities/utilities.js";
import implementation from "./implementation.js";

const filename = import.meta.filename;
const content = await implementation(filename);

await runBench({
  name: "fs.readFile()",
  cases: [
    { name: "fs.readFile()", fn: implementation, isAsync: true },
    { name: "synckit", fn: synckit },
    { name: "make-synchronized", fn: makeSynchronized },
    { name: "make-synchronized@0.3", fn: makeSynchronized3 },
  ],
  run: ({ fn }) => fn(filename),
  expected: content,
});
