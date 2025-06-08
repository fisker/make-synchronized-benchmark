import { createSyncFn } from "synckit";
import { freshUrl } from "../../../utilities/utilities.js";

export default createSyncFn(
  new URL(freshUrl("./worker.js"), import.meta.url).href,
);
