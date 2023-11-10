// Crie uma função que receba um array de números e retorne o menor número desse array.
var numeros = [22, 14, 51, 7, 0.23]

let menorNumero = (numeros) => Math.min(...numeros)
console.log(menorNumero(numeros))