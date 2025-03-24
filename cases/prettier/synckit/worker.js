import { runAsWorker } from "synckit";
import * as prettier from "prettier";

runAsWorker((code) => prettier.format(code, { parser: "meriyah" }));
