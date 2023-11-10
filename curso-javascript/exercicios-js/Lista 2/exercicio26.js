// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as consoantes, ou seja, sem as vogais.

const frase = "Bom dia!"

function removerVogais(frase) {
  const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
  vogais.forEach( vogal => frase = frase.replace(vogal, '') )
  console.log(frase)
}

removerVogais(frase)