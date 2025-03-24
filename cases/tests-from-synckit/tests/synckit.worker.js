import fs from 'node:fs'

import { runAsWorker } from 'synckit'

runAsWorker(filename => fs.promises.readFile(filename, 'utf8'))
