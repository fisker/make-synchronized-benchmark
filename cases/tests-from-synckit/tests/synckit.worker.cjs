const fs = require('node:fs')

const { runAsWorker } = require('synckit')

runAsWorker(filename => fs.promises.readFile(filename, 'utf8'))
