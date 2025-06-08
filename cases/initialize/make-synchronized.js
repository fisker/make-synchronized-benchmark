import makeSynchronized from "make-synchronized";

const implementation = await import(
  `implementation.js?_=${Math.random() * performance.now()}`
);

export default makeSynchronized(import.meta, implementation);
