import { runAsWorker } from "synckit";
import fs from "node:fs/promises";

runAsWorker((file, encoding) => fs.readFile(file, encoding));
