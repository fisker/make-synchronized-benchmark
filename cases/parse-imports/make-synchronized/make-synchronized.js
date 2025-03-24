// https://github.com/gajus/eslint-plugin-jsdoc/commit/f8e99608ce5c51dd45f0f06ba76da3f89ac26e80

import makeSynchronized from "make-synchronized";

// ESLint doesn't support async rules
export default makeSynchronized(import.meta.url, async (imprt) => {
  const { parseImports } = await import("parse-imports");
  try {
    return [...(await parseImports(imprt))];
  } catch (err) {
    return false;
  }
});
