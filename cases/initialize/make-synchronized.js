import makeSynchronized from "make-synchronized";
import { importFresh } from "../../utilities/utilities.js";

const implementation = await importFresh("./implementation.js");

export default makeSynchronized(import.meta, implementation);
