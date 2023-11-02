// Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’

function escreverPorExtenso(numero) {
  switch (numero) {
    case 0:
      return "zero"
    case 1:
      return "um"
    case 2:
      return "dois"
    case 3:
      return "três"
    case 4:
      return "quatro"
    case 5:
      return "cinco"
    case 6:
      return "seis"
    case 7:
      return "sete"
    case 8:
      return "oito"
    case 9:
      return "nove"
    case 10:
      return "dez"
    default:
      return "Número fora do intervalo"
  }
}

console.log(escreverPorExtenso(0), 
            escreverPorExtenso(3),
            escreverPorExtenso(5),
            escreverPorExtenso(8),
            escreverPorExtenso(12)
)