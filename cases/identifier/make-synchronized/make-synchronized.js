import makeSynchronized from "make-synchronized";

export default makeSynchronized(import.meta.url, (value) =>
  Promise.resolve(value),
);
