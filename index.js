const fs = require('fs')

let ext = '.pbt'
let sistemas = ['siaif', 'sicco']

function listarAruivosDiretorio (dir, file) {
  if (!file) {
    file = []
  }

  let files = fs.readdirSync(dir)
  files.map((item, index) => {
    let stat = fs.statSync(dir + '/' + files[index])

    if (stat.isDirectory()) {
      listarAruivosDiretorio(dir + '/' + files[index], file)
    } else if (dir + '/' + files[index] === `${dir}/${sistemas[0]}${ext}`) {
      return file.push(dir + '/' + files[index])
    }
  })

  return file.toString()
}

function readFile (file) {
  const target = fs.readFileSync(file)
  return target.toString('utf-8')
}

let file = readFile(listarAruivosDiretorio('./Energisa')).split(' ')

fs.writeFileSync('file.txt', file)




console.log(file)
