// Afim de criar um mecanismo de busca para a sua aplicação, você precisa iniciar criando uma função para identificar palavras semelhantes.
// Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de strings. A função deverá filtrar as palavras do array que contém nelas a string do primeiro parâmetro.

function mecanismoBusca(inicio, palavras) {
  return palavras.filter(palavra => palavra.includes(inicio))
}

console.log(mecanismoBusca("pro", ["programação", "mobile", "profissional"]))