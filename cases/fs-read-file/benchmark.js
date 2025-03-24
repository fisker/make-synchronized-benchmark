import makeSynchronized3 from "./make-synchronized-0-3/make-synchronized.js";
import makeSynchronized from "./make-synchronized/make-synchronized.js";
import synckit from "./synckit/synckit.js";
import fs from "node:fs/promises";
import { runBench } from "../../utilities/utilities.js";

const filename = import.meta.filename;
const code = await fs.readFile(filename, "utf8");

await runBench({
  name: "fs.readFile()",
  cases: [
    { name: "fs.readFile", fn: fs.readFile, isAsync: true },
    { name: "synckit", fn: synckit },
    { name: "makeSynchronized", fn: makeSynchronized },
    { name: "makeSynchronized 0.3", fn: makeSynchronized3 },
  ],
  run: ({ fn }) => fn(filename, "utf8"),
  expected: code,
});
