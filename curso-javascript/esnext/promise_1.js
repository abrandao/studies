// Cada Promise gera apenas um único valor
const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function(cumprirPromessa) {
  cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
  .then(primeiroElemento) // Primeiro elemento do array
    .then(primeiroElemento) // Primeiro elemento da string
      .then(letraMinuscula)
        .then(console.log)