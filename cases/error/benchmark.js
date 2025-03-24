import assert from "node:assert/strict";
import synckit from "./synckit/synckit.js";
import makeSynchronized3 from "./make-synchronized-0-3.js";
import makeSynchronized from "./make-synchronized.js";
import makeSynchronous from "./make-synchronous.js";
import { runBench } from "../../utilities/utilities.js";

const errorMessage = "Error message";

await runBench({
  name: "throw error",
  cases: [
    { name: "synckit", fn: synckit },
    { name: "make-synchronized", fn: makeSynchronized },
    { name: "make-synchronized@0.3", fn: makeSynchronized3 },
    { name: "make-synchronous", fn: makeSynchronous },
  ],
  run: ({ fn }) => {
    try {
      fn(errorMessage);
    } catch (error) {
      return error.message;
    }
  },
  expected: errorMessage,
});
