// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

let contadorPares = 0
let contadorImpares = 0

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 33, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (i = 0; i < vetor.length; i++) {
  if (vetor[i] % 2 == 0) {
    contadorPares++
  } else {
    contadorImpares++
  }
}

console.log(contadorPares, contadorImpares)