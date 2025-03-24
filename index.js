import fs from "node:fs/promises";

const directory = new URL("./cases/", import.meta.url);

for (const name of await fs.readdir(directory)) {
  const url = new URL(`./${name}/benchmark.js`, directory);

  console.log()
  console.log(`Running ${url.href}`)
  await import(url);
}
