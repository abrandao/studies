// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.

function repeticao(elemento, repetidor) {
  let arrayRepeticoes = []
  let i = 0
  do {
    arrayRepeticoes.push(elemento)
    i++
  } while(i < repetidor)
  return arrayRepeticoes
}

console.log(repeticao("Isabelle", 3))