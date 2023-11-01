// Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

const valor = 0.30000000000000004;

const opcoesDeFormato = {
  style: 'currency',
  currency: 'BRL'
};

const valorFormatado = valor.toLocaleString('pt-BR', opcoesDeFormato);

console.log(valorFormatado); // Isso imprimirá "R$ 0,30"
