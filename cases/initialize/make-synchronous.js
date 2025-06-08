import makeSynchronous from "make-synchronous";

const implementation = await import(
  `implementation.js?_=${Math.random() * performance.now()}`
);

export default makeSynchronous(implementation);
