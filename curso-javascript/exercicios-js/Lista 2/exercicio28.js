// Elabore uma função que receba dois parâmetros: o primeiro é um array de números e o segundo é um número que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que têm a quantidade de dígitos indicada pelo segundo parâmetro.

function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
  return numeros.filter(numero => {
      const quantidadeDeDigitos = String(numero).length
      return quantidadeDeDigitos === quantidadeDesejada
    })
  }

const arrayNumeros = [1222, 13, 144, 898989, 17, 29]

console.log(filtrarPorQuantidadeDeDigitos(arrayNumeros, 2))