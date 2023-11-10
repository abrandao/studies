// Crie uma função que receba um array de números e retorne o segundo maior número presente nesse array.

function removeOMaior(arrayNumeros) {
  let maiorNumero = arrayNumeros[0]
  let indiceDoMaior = 0
  
  for (i = 0; i < arrayNumeros.length; i++) {
    if (maiorNumero < arrayNumeros[i]) {
      maiorNumero = arrayNumeros[i]
      indiceDoMaior = i
    }
  }
  
  arrayNumeros.splice(indiceDoMaior, 1)
  console.log(arrayNumeros)
}

const arrayNumeros = [2, 45, 199, 300, 27, 177]
removeOMaior(arrayNumeros)