import makeSynchronized from "make-synchronized-0-3";
import * as prettier from "prettier";

export default makeSynchronized(import.meta.url, (code) =>
  prettier.format(code, { parser: "meriyah" }),
);
