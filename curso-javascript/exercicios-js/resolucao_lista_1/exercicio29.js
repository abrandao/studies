// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 33, 11, 12, 13, 14, 15, 36, 17, 18, 19, 20, 77]
let contadorIntervalo = 0

for (let i = 0; i< vetor.length; i++) {
  if (vetor[i] >= 10 && vetor[i] <= 20) {
    contadorIntervalo++
  }
}
console.log(`${contadorIntervalo} estã dentro do intervalo e ${vetor.length - contadorIntervalo} estão fora.`)