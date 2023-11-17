// Encapsule a chamada de um arquivo usando Promise
const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(caminho) {
  return new Promise(resolve => {
    fs.readFile(caminho, function(_, conteudo) {
      resolve(conteudo.toString())
    })
    console.log('Depois de ler.')
  })
}ff

lerArquivo(caminho)
  .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(', '))
      .then(conteudo => `O valor final é: ${conteudo}`)
        .then(console.log)