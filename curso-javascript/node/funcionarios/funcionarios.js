const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// A mulher chinesa com o menor salário
const mulheresChinesas = f => f.pais === 'China' && f.genero === 'F'

const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data
  const func = funcionarios
    .filter(mulheresChinesas)
    .reduce(menorSalario)
  console.log(func)
})
