// Desenvolva uma função que receba dois parâmetros, um é a quantidade de horas trabalhadas por um funcionários em um mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês.

const calculoHonorarios = (horas, honorario) => horas * honorario
let resultado = calculoHonorarios(120, 45)
console.log(`Salário igual a ${resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)