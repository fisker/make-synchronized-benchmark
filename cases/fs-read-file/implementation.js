import fs from "node:fs/promises";

export default (file) => fs.readFile(file, "utf8");
