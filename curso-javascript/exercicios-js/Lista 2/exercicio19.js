// Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
// Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada de números e retorne a média simples desses números.
// A média simples é o resultado da soma de todos os números dividido pela quantidade de números.

let valores = [10, 20, 30, 40, 200]
let soma = 0

function media(valores) {

  for (valor of valores) {
    console.log("of " + valor)
  } // Traz os valores dos elementos

  for (valor in valores) {
    console.log("in " + valor)
  } // Traz os índices dos elementos

  valores.forEach(el => {
    soma += el
  }); // Traz o elemento em si

 return soma / valores.length
}

console.log(media(valores))