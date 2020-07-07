const fs = require('fs')

function getTarget (dir, file) {
  let ext = '.pbt'
  let system = {
    siaif: 'siaif'
  }

  if (!file) {
    file = []
  }

  let files = fs.readdirSync(dir)
  files.map((item, index) => {
    let stat = fs.statSync(dir + '/' + files[index])

    if (stat.isDirectory()) {
      getTarget(dir + '/' + files[index], file)
    } else if (dir + '/' + files[index] === `${dir}/${system.siaif}${ext}`) {
      return file.push(dir + '/' + files[index])
    }
  })

  return file.toString()
}

module.exports = getTarget
