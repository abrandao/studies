// Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

let notaCem = 100
let notaCinquenta = 50
let notaDez = 10
let notaCinco = 5
let notaUm = 1

function minimoDeNotas(valor) {
  contagem100 = Math.floor(valor / 100)
  info100 = `${contagem100} nota(s) de R$ 100. `
  contagem50 = Math.floor((valor % 100) / 50)
  info50 = `${contagem50} nota(s) de R$ 50. `
  contagem10 = Math.floor((valor - ((contagem100 * 100) + (contagem50 * 50))) /10)
  info10 = `${contagem10} nota(s) de R$ 10. `
  contagem5 = Math.floor((valor - ((contagem100 * 100) + (contagem50 * 50) + (contagem10 * 10))) / 5)
  console.log(contagem5)
  info5 = `${contagem5} nota(s) de R$ 5. `
  contagem1 = Math.floor(valor - ((contagem100 * 100) + (contagem50 * 50) + (contagem10 * 10) + (contagem5 * 5)))
  info1 = `${contagem1} nota(s) de R$ 1. `
  return info100 + info50 + info10 + info5 + info1
}

console.log(minimoDeNotas(187))