import { runAsWorker } from "synckit";
import implementation from "./implementation.js";

runAsWorker(implementation);
