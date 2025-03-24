import makeSynchronized from "make-synchronized-0-3";

export default makeSynchronized(import.meta.url, (value) =>
  Promise.resolve(value),
);
