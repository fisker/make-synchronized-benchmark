// https://github.com/gajus/eslint-plugin-jsdoc/commit/5497b031e0f04738ecd7271f4b4504478b0ef99b

import * as parseImportsPackage from "parse-imports";

await parseImportsPackage.wasmLoadPromise;

export const parseImportsSync = (code) => [
  ...parseImportsPackage.parseImportsSync(code),
];
export const parseImports = async (code) => [
  ...(await parseImportsPackage.parseImports(code)),
];
