import * as prettier from "prettier";

export default (code) => prettier.format(code, { parser: "meriyah" });
