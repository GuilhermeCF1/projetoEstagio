const fs = require('fs')

function readTarget (target) {
  const readFile = fs.readFileSync(target)
  return readFile.toString('utf-8')
}

module.exports = readTarget
