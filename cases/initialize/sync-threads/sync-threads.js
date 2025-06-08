import { createSyncFn } from "sync-threads";
import { freshUrl } from "../../utilities/utilities.js";

export default createSyncFn(freshUrl("./worker.js"));
