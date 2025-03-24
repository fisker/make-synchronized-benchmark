import makeSynchronized from "make-synchronized";
import implementation from "./implementation.js";

export default makeSynchronized(import.meta, implementation);
