const { createSyncFn } = require("synckit");

/**
 * @type {() => string}
 */
const syncFn = createSyncFn(require.resolve("./synckit.worker.cjs"));

module.exports = syncFn;
