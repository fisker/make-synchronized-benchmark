import makeSynchronous from "make-synchronous";
import format from "./implementation-import-inside.js";

// Since we can't use import outside, we have to reimplement logic in implementation.js
export default makeSynchronous(format);
