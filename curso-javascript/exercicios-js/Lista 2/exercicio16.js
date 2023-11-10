// Afim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos bissextos, que têm 366 dias em vez dos 365 presentes nos anos atuais.
// Para determinar se um ano é bissexto, é necessário saber se ele é múltiplo de 4. Não pode ser múltiplo de 100, exceto se for também múltiplo de 400.
// Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é bissexto ou não.

/*
function anoBissexto(ano) {
  if (ano % 4 == 0) {
    if (ano % 400 == 0) {
      return `${ano} é ano bissexto.`
    } if (ano % 100 != 0) {
      return `${ano} é ano bissexto.`
    } else {
      return `${ano} não é ano bissexto.`
    }
  } else {
    return `${ano} não é ano bissexto.`
  }
}
*/

function anoBissexto(ano) {
  const divisivelPorQuatro = ano % 4 == 0
  const divisivelPorCem = ano % 100 == 0
  const divisivelPorQuatrocentos = ano % 400 == 0

  return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos
}

console.log(anoBissexto(2022))
console.log(anoBissexto(2024))
console.log(anoBissexto(400))
console.log(anoBissexto(500))
console.log(anoBissexto(600))
console.log(anoBissexto(800))
console.log(anoBissexto(1200))
console.log(anoBissexto(1600))
console.log(anoBissexto(1700))
console.log(anoBissexto(1800))
console.log(anoBissexto(1900))
console.log(anoBissexto(2000))
console.log(anoBissexto(2100))
console.log(anoBissexto(2200))
console.log(anoBissexto(2300))
console.log(anoBissexto(2400))

/*
400 – bissexto
500 – não bissexto
600 – não bissexto
800 – bissexto
1200 – bissexto
1600 – bissexto
1700 – não bissexto
1800 – não bissexto
1900 – não bissexto
2000 – bissexto
2100 – não bissexto
2200 – não bissexto
2300 – não bissexto
2400 – bissexto
*/