// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está desenvolvendo no momento é a de somar o total de despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas.

let motocicletas = [
  { 
    nome: "Scrambler 400x",
    categoria: "Trail",
    preco: 32000
  }, {
    nome: "Hunter 350",
    categoria: "City",
    preco: 20000
  }, {
    nome: "Versys-X 300 Touring",
    categoria: "Touring",
    preco: 37000
  }
]

let total = 0
function somaPrecos(motocicletas) {
  motocicletas.forEach(element => {
    total += element.preco
  });
  console.log(`O total de preços para comprar todas essas maravilhas é de ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`)
}

somaPrecos(motocicletas)