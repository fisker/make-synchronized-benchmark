import assert from "node:assert/strict";
import { Bench } from "tinybench";

async function runBench({ name, cases, run, expected }) {
  const bench = new Bench({ name: `Case: ${name}` });

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

export { runBench };
