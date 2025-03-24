import assert from "node:assert/strict";
import makeSynchronized3 from "./make-synchronized-0-3.js";
import makeSynchronized from "./make-synchronized.js";
import makeSynchronous from "./make-synchronous.js";
import synckit from "./synckit/synckit.js";
import syncThreads from "./sync-threads/sync-threads.js";
import awaitSync from "./await-sync.js";
import { runBench } from "../../utilities/utilities.js";
import implementation from "./implementation.js";

const value = Math.random();

await runBench({
  name: "identity()",
  cases: [
    { name: "identity()", fn: implementation, isAsync: true },
    { name: "synckit", fn: synckit },
    { name: "make-synchronized", fn: makeSynchronized },
    { name: "make-synchronized@0.3", fn: makeSynchronized3 },
    { name: "make-synchronous", fn: makeSynchronous },
    { name: "await-sync", fn: awaitSync },
    { name: "sync-threads", fn: syncThreads },
  ],
  run: ({ fn }) => fn(value),
  expected: value,
});
