// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes que caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.

let frase = "Iron Maidend - Fear of the Dark"
let contador = 0

function contaCaractere(frase, character) {
  let arrayCaracteres = frase.split('')
  arrayCaracteres.forEach(el => {
    if (el == character) contador++
  });
  console.log(contador)
}
contaCaractere(frase, "a")