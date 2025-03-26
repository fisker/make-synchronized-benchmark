import makeSynchronized from "make-synchronized";
import implementation from "./implementation-import-inside.js";

export default makeSynchronized(import.meta, implementation);
