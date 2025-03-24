import { createRequire } from "module";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import { runBench } from "../../utilities/utilities.js";
import makeSynchronized from "./tests/make-synchronized.js";
import makeSynchronized03 from "./tests/make-synchronized-0-3.js";
import synckit from "./tests/synckit.js";

const filename = import.meta.filename;
const code = await fs.readFile(filename, "utf8");

const require = createRequire(import.meta.url);

// Can't install on Node.js 23
// const deasync = require('./tests/deasync.cjs')
const makeSynchronizedCjs = require("./tests/make-synchronized.cjs");
const makeSynchronized03Cjs = require("./tests/make-synchronized-0-3.cjs");
const native = require("./tests/native.cjs");
const syncThreads = require("./tests/sync-threads.cjs");
const synckitCjs = require("./tests/synckit.cjs");

const value = Math.random();

await runBench({
  name: "suit from synckit",
  cases: [
    // { name: "deasync", fn:deasync },
    { name: "synckit", fn: synckit },
    { name: "native", fn: native },
    { name: "syncThreads", fn: syncThreads },
    { name: "synckitCjs", fn: synckitCjs },
    { name: "makeSynchronized", fn: makeSynchronized },
    { name: "makeSynchronizedCjs", fn: makeSynchronizedCjs },
    { name: "makeSynchronized 0.3", fn: makeSynchronized03 },
    { name: "makeSynchronizedCjs 0.3", fn: makeSynchronized03Cjs },
  ],
  run: ({ fn }) => fn(filename),
  expected: code,
});
