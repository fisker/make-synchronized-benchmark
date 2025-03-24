import { Bench } from "tinybench";
import assert from "node:assert/strict";
import styleText from "node-style-text";
import { table } from "console-table-without-index";
import { setFlagsFromString } from "node:v8";
import { runInNewContext } from "node:vm";

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
  console.log(styleText.blue(bench.name));
  await bench.run();
  console.table(bench.table());
}

export { runBench };
