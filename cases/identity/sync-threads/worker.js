import { runAsWorker } from "sync-threads";
import implementation from "../implementation.js";

runAsWorker(implementation);
