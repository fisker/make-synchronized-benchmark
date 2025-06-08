import { Bench } from "tinybench";
import assert from "node:assert/strict";
import { table } from "console-table-without-index";
import { setFlagsFromString } from "node:v8";
import { runInNewContext } from "node:vm";

let gc = getGc();
async function runBench({ name, cases, run, expected, benchmarkOptions }) {
  const bench = new Bench({
    name: `Case: ${name}`,
    setup: (_task, mode) => {
      // Run the garbage collector before warmup at each cycle
      if (mode === "warmup") {
        gc();
      }
    },
    ...benchmarkOptions,
  });

  for (let testCase of cases) {
    const { isAsync } = testCase;
    const fn = run ? () => run(testCase) : testCase.fn;
    const name = `[${isAsync ? "ASYNC" : "SYNC "}] ${testCase.name}`;
    if (isAsync) {
      assert.equal(await fn(), expected, name);
    } else {
      assert.equal(fn(), expected, name);
    }

    bench.add(name, fn);
  }

  console.log();
  console.log(bench.name);
  await bench.run();
  console.table(bench.table());
}

function getGc() {
  if (globalThis.gc) {
    return globalThis.gc;
  }

  let gc;
  setFlagsFromString("--expose_gc");
  gc = runInNewContext("gc");
  setFlagsFromString("--no-expose-gc");
  return gc;
}

function importFresh(url) {
  return import(`${file}?_=${Math.random() * performance.now()}`);
}

export { runBench, importFresh };
