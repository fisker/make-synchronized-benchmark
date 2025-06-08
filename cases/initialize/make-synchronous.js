import makeSynchronous from "make-synchronous";
import { importFresh } from "../../utilities/utilities.js";

const implementation = await importFresh("./implementation.js");

export default makeSynchronous(implementation);
