import { runAsWorker } from "synckit";
import { importFresh } from "../../utilities/utilities.js";

const implementation = await importFresh("./implementation.js");

runAsWorker(implementation);
