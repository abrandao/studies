// Crie uma função que receba quatro números como parâmetros (numero, maximo, minimo, inclusivo) e retorne se o parâmetro número (o primeiro) está entre o máximo e o mínimo. Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se o número é igual a mínimo ou ao máximo. Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se o número é igual a mínimo ou ao máximo.

function range(numero, minimo, maximo, inclusivo = false) {
   return inclusivo ? maximo >= numero && minimo <= numero : maximo > numero && minimo < numero
} 

console.log(range(10, 20, 30, true))