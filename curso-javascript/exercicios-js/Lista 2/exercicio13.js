// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro.

function filtrarArray(array) {
  return array.filter(item => typeof item === "number")
}

console.log(filtrarArray(["a", 3, 7, true]))