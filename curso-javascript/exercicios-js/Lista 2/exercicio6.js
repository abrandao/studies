// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for numérico, o retorno será o número inverso. Por exemplo, se for fornecido o número 1, o retorno será -1. Se o parâmetro de entrada não for de nenhum dos tipos acima, retorne "Booleano ou número esperados, mas o parâmetro é do tipo..."

function reverteEntrada(valor) {
  const tipo = typeof valor
  
  if (tipo === "boolean") return !valor
  else if (tipo === "number") return !valor
  else
    return `Tipos booleanos ou numéricos esperados, mas o parâmetro é do tipo ${typeof valor}`
}

console.log(reverteEntrada(1))
console.log(reverteEntrada(-223))
console.log(reverteEntrada(false))
console.log(reverteEntrada(true))
console.log(reverteEntrada("Flamengo"))