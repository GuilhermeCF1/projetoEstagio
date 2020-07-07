const fs = require('fs')
const path = require('path')

let sistema = ['siaif.pbt', 'sicco.pbt']

function listarAruivosDiretorio (dir, files) {
  if (!files) {
    files = []
  }

  let file = fs.readdirSync(dir)
  file.map((item, index) => {
    let stat = fs.statSync(dir + '/' + file[index])

    if (stat.isDirectory()) {
      listarAruivosDiretorio(dir + '/' + file[index], files)
    } else if (dir + '/' + file[index] ===`./Energisa/Sistemas/TECCOM/SIAIF/fontes/${sistema[0]}`) {
      return files.push(dir + '/' + file[index])
    }
  })

  return files.toString()
}


function readFile(file) {
  const target = fs.readFileSync(file)
  return target.toString('utf-8')
}


let file = readFile(listarAruivosDiretorio('./Energisa')).split(' ')


function preperetRow(row) {
  row.map(item =>{
    return item.split(';')
  })
}

let row = preperetRow(file)
 console.log(file[14].split(';'))
