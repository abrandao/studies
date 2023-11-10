// Escreva uma função que receberá um array de números e retornará a soma de todos os números desse array.

let numeros = [10, 20, 30, 40]

function somarNumeros(numeros) {
  const quantidadeDeNumeros = numeros.length
  return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
}

console.log(somarNumeros(numeros))