// Desenvolva uma função que receba dois números inteiro não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de multiplicação.

function multiplicar(num1, num2) {
  let resultado = 0

  for (let i = 0; i < num2; i++) {
    resultado += num1
  }

  console.log(resultado)
}

multiplicar(2, 4)
multiplicar(6, 4)
multiplicar(10, 4)

/*
function falsaMultiplicacao(num1, num2) {
  let maior = 0
  let menor = 0
  let resultado = 0
  if (num1 > num2) {
     maior = num1
     menor = num2
  } else {
     maior = num2
     menor = num1
  }

  for (let i = 0; i < maior; i++) {
    resultado += menor
  }
  console.log(resultado)
}

falsaMultiplicacao(10, 4)
*/

/*
let num1 = 10
let num2 = 4
let i = ((num1 - num2) * (Math.sign(num1 - num2))) + 1

do {
  num1 += num1
  i++
} while(i < num2)
console.log(num1)
*/