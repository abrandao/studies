// Elabore uma função que receba um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro.

function cruzinhas(repeticao) {
  let cruzinhas = "+"
  for (i = 1; i < repeticao; i++) {
    cruzinhas += "+"
  }
  return cruzinhas
}

console.log(cruzinhas(6))