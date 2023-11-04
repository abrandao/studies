// Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true ou false.

let n = 9.3
const inteiro = Math.trunc(n)
const divisivel = (numero) => !(numero % 3)
console.log(divisivel(inteiro))