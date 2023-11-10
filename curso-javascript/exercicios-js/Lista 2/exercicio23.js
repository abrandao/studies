// Crie uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
const frase = "O Flamengo será campeão do Brasileirão em 2024."

function contaPalavras(frase) {
  
  const stringToArray = frase.split(' ')
  return `A frase contém ${stringToArray.length} palavras.`
}

console.log(contaPalavras(frase))