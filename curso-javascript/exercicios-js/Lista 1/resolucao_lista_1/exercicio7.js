// Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.

function calcularRaizesQuadraticas(a, b, c) {
  const discriminante = b * b - 4 * a * c;

  if (discriminante > 0) {
    const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    return [raiz1, raiz2];
  } else if (discriminante === 0) {
    const raizUnica = -b / (2 * a);
    return [raizUnica];
  } else {
    return [];
  }
}

const raizes = calcularRaizesQuadraticas(3, -5, 12);
console.log('As raízes são:', raizes);