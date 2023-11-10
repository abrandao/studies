// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.

const arrayNumeros = [1, 2, 8, 4, 5, 6, 10, 12, 14, 200, 2022222]

function pares(arrayNumeros) {
  let arrayPares = []
  for (i = 0; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] % 2 == 0 && i % 2 == 0) {
      arrayPares.push(arrayNumeros[i])
    }
  }
  console.log(arrayPares)
}

pares(arrayNumeros)