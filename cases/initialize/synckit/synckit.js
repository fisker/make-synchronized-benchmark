import { createSyncFn } from "synckit";

export default createSyncFn(
  new URL(`./worker.js?_=${Math.random() * performance.now()}`, import.meta.url)
    .href,
);
