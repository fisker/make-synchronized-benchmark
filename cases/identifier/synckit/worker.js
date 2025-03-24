import { runAsWorker } from "synckit";
import * as prettier from "prettier";

runAsWorker((value) => Promise.resolve(value));
