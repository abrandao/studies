// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {  // Função anônima
  console.log(a + b)
}

imprimirSoma(2, 3)

// Armazanando uma função arrow em uma variável
const soma = (a, b) => {
  return a + b
}
console.log(soma(2, 3)) // 5

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(5, 3)) // 2

const imprimir2 = a => console.log(a)  // Reduão para funcões de um único parâmetro
imprimir2('Legall!!!')

const imprimeESoma = c => console.log(c + 3)
imprimeESoma(5)

const imprimeESoma2 = d => d + 3
console.log(imprimeESoma2(7))