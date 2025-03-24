import { createWorker } from "await-sync";
import { deserialize } from "node:v8";

const awaitSync = createWorker();

export default awaitSync(async (value) => {
  const { serialize } = await import("node:v8");
  return serialize(value);
}, deserialize);
