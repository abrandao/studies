// Desenvolva uma função que receba um objeto como parâmetro e o nome de uma propriedade deste mesmo objeto como segundo parâmetro. Em seguida, retorne uma cópia deste objeto sem a propriedade especificada no segundo parâmetro.

objeto = {
  "marca": "Triumph",
  "nome": "Scrambler 400 x",
  "cilindradas": 400
}

let propriedade = "cilindradas"

function removerPropriedade(objeto, propriedade) {
  console.log(objeto)
  delete objeto[propriedade]
  return objeto
}

console.log(removerPropriedade(objeto, "cilindradas"))