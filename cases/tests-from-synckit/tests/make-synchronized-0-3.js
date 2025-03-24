import { makeSynchronized } from "make-synchronized-0-3";

/**
 * @param {string} filename
 * @returns {() => string} syncified function
 */
const syncFn = (filename) =>
  makeSynchronized("node:fs/promises").readFile(filename, "utf8");

export default syncFn;
