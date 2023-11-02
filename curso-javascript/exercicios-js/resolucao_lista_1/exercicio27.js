// Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

function crescimento(alturaA, taxaA, alturaB, taxaB) {
  if (alturaA == alturaB) {
    console.log("Alturas iguais")
  } else if (alturaA > alturaB) {
    criancaMaior = [alturaA, taxaA]
    criancaMenor = [alturaB, taxaB]
    ultrapassarAltura(criancaMaior, criancaMenor)
  } else {
    criancaMaior = [alturaB, taxaB]
    criancaMenor = [alturaA, taxaA]
    ultrapassarAltura(criancaMaior, criancaMenor)
  }
}

let contador = 0
function ultrapassarAltura(criancaMaior, criancaMenor) {
  do {
    criancaMaior[0] += criancaMaior[1]
    criancaMenor[0] += criancaMenor[1]
    contador++
  } while (criancaMaior[0] > criancaMenor[0])

  console.log(criancaMaior[0], criancaMaior[1])
  console.log(criancaMaior, criancaMenor)
  console.log(contador)
  console.log(`A criança menor ultrapassará a maior em altura após ${contador} anos.`)
}

crescimento(89, 5, 89, 10)
