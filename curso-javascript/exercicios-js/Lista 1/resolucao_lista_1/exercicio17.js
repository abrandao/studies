// Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
// Plano Aumento
//   A     10%
//   B     15%
//   C     20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function aumentoSalarial(plano, salario) {
  switch(plano) {
    case "A":
      return (salario += salario * 0.1).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    case "B":
      return (salario += salario * 0.15).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    case "C":
      return (salario += salario * 0.2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  }
}

console.log(aumentoSalarial("A", 3000))
console.log(aumentoSalarial("B", 6000))
console.log(aumentoSalarial("C", 2000))