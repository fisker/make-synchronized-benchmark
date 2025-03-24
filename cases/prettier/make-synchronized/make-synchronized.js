import makeSynchronized from "make-synchronized";
import * as prettier from "prettier";

export default makeSynchronized(import.meta.url, (code) =>
  prettier.format(code, { parser: "meriyah" }),
);
