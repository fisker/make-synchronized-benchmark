import fs from "node:fs/promises";

const directory = new URL("./cases/", import.meta.url);

for (const name of new Set([
  // I want these on top
  "identity",
  "error",
  ...(await fs.readdir(directory)),
])) {
  const url = new URL(`./${name}/benchmark.js`, directory);

  console.log();
  console.log(`Running ${url.href}`);
  await import(url);
}
