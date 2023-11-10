// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto.

moto = {
  'marca': "Haojue",
  'modelo': "Master Ride 150"
}

function chaveValor(objeto) {
  const resultado = []
  for (let chave in objeto) {
    resultado.push([chave, objeto[chave]])
  }
  console.log(resultado)
}

chaveValor(moto)

/*
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
*/