// https://github.com/gajus/eslint-plugin-jsdoc/commit/771eadfa447e171d4a33ff2aff9c93d863988ab2
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createSyncFn } from "synckit";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathName = join(__dirname, "./import-worker.mjs");

const getImports = createSyncFn(pathName);

export default getImports;
