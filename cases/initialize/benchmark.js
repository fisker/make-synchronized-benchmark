import assert from "node:assert/strict";
import { runBench, importFresh } from "../../utilities/utilities.js";
import implementation from "./implementation.js";

const libs = [
  { name: "synckit", file: "./synckit/synckit.js" },
  { name: "make-synchronized", file: "./make-synchronized.js" },
  { name: "make-synchronized@0.3", file: "./make-synchronized-0-3.js" },
  { name: "make-synchronous", file: "./make-synchronous.js" },
].map(({ name, file }) => ({
  name,
  fn: () => importFresh(file),
  isAsync: true,
}));

await runBench({
  name: "Initialize",
  cases: libs,
  async run({ fn: loadModule }) {
    const module = await loadModule();
    return typeof module.default;
  },
  expected: "function",
  benchmarkOptions: {
    iterations: 20,
    warmup: false,
  },
});

const value = Math.random();
await runBench({
  name: "Initialize + 1 run",
  cases: libs,
  async run({ fn: loadModule }) {
    const { default: identity } = await loadModule();
    return identity(value);
  },
  expected: value,
  benchmarkOptions: {
    iterations: 20,
    warmup: false,
  },
});
