import { createSyncFn } from "sync-threads";

export default createSyncFn("./worker.js");
