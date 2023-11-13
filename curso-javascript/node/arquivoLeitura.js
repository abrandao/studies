const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

// Leitura de arquivo de forma síncrona
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Leitura de arquivo de forma assíncrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
  console.log(`Conteúdo da pasta...`)
  console.log(arquivos)
})