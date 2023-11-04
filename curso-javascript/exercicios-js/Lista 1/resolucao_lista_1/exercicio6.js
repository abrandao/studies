// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos

// Cálculo de Juros Simples

function calcularJurosSimples(capitalInicial, taxaDeJuros, tempo) {
  const montante = capitalInicial + (capitalInicial * taxaDeJuros * tempo);
  return montante;
}

const capitalInicial = 1000; // Valor principal
const taxaDeJuros = 0.05; // 5% de taxa de juros
const tempo = 2; // 2 anos

const montanteTotal = calcularJurosSimples(capitalInicial, taxaDeJuros, tempo);
console.log(`O montante total é: ${montanteTotal}`);

// Cálculo de Juros Compostos

function calcularJurosCompostos(principalC, taxaDeJurosC, tempoC) {
  const montanteC = principalC * Math.pow(1 + taxaDeJurosC, tempoC);
  return montanteC;
}

const principalC = 1000; // Valor principal
const taxaDeJurosC = 0.05; // 5% de taxa de juros
const tempoC = 2; // 2 anos

const montanteTotalC = calcularJurosCompostos(principalC, taxaDeJurosC, tempoC);
console.log(`O montante total é: ${montanteTotalC.toFixed(2)}`);