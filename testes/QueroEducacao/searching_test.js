function primeiraPalavraComMaisLetrasRepetidas(frase) {
  // Dividindo a frase em palavras
  const palavras = frase.split(' ');

  let palavraMaiorRepeticao = '';
  let maiorRepeticao = 0;

  // Loop através de cada palavra
  for (const palavra of palavras) {
      // Objeto para contar a frequência de cada letra na palavra
      const frequencia = {};

      // Loop através de cada letra da palavra
      for (const letra of palavra) {
          // Incrementa o contador de frequência para a letra atual
          frequencia[letra] = (frequencia[letra] || 0) + 1;
      }

      // Encontra o número máximo de repetições de letras
      const maxRepeticoes = Math.max(...Object.values(frequencia));

      // Se o número máximo de repetições desta palavra for maior que o atual
      if (maxRepeticoes > maiorRepeticao) {
          // Atualiza a palavra com mais repetições e o número de repetições
          palavraMaiorRepeticao = palavra;
          maiorRepeticao = maxRepeticoes;
      }
  }

  return palavraMaiorRepeticao;
}

// Exemplo de uso:
const frase = "I hope he says that he loves Litterancee and hate Targgaryyanss";
const primeiraPalavra = primeiraPalavraComMaisLetrasRepetidas(frase);
console.log("A primeira palavra com o maior número de letras repetidas é:", primeiraPalavra);
