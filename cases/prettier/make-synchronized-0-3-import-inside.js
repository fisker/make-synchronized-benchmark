import makeSynchronized from "make-synchronized-0-3";
import implementation from "./implementation-import-inside.js";

export default makeSynchronized(import.meta, implementation);
