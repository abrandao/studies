// Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

function calculadoraCase(operacao, a, b) {
  switch (operacao) {
    case "soma":
      return a + b
    case "divisão":
      return a / b
    case "subtração":
      return a - b
    case "multiplicação":
      return a * b
    default:
      return "Operação inválida"
  }
}

console.log(calculadoraCase("soma", 3, 4))
console.log(calculadoraCase("divisão", 8, 2))
console.log(calculadoraCase("subtração", 26, 7))
console.log(calculadoraCase("multiplicação", 5, 25))
console.log(calculadoraCase("Resto", 6, 2))