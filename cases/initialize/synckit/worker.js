import { runAsWorker } from "synckit";

const implementation = await import(
  `implementation.js?_=${Math.random() * performance.now()}`
);

runAsWorker(implementation);
