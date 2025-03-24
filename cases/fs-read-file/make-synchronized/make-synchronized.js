import makeSynchronized from "make-synchronized";
import fs from "node:fs/promises";

export default makeSynchronized(import.meta.url, (file, encoding) =>
  fs.readFile(file, encoding),
);
