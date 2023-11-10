// Crie uma função que receba um array e retorne o primeiro e o último elemento desse array como um novo array.

let array = [2, 4, 6, 8, 8]
function primeiroEUltimo(array) {
  console.log(array.length - 1)
  let arrayPrimeiroEUltimo = [array.shift(), array.pop()]
  console.log(arrayPrimeiroEUltimo)
}

primeiroEUltimo(array)