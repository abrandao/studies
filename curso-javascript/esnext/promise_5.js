function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      if (Math.random() < chanceErro) {
        reject('Ocorreu um erro!')
      } else {
        resolve(valor)
      }
    } catch (e) {
      reject(e) // Chamada do tratamento de erro
    }
  })
}

funcionarOuNao('Testando...', 0.5)
  .then(v => `Valor: ${v}`)
  .then(
    v => consol.log(v),
    err => console.log(`Erro Esp.: ${err}`)
  )
  .then(() => console.log('Quase Fim!'))
  .catch(err => console.log(`Erro: ${err}`))
  .then(() => console.log('Fim!'))

// Via de regra o catch vai no final para tratar os problemas de todos os fluxos