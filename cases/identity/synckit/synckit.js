import { createSyncFn } from "synckit";

export default createSyncFn(new URL("./worker.js", import.meta.url).href);
