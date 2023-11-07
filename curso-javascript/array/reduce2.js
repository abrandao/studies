const alunos = [
  { nome: 'João', nota: 1, bolsista: false },
  { nome: 'Maria', nota: 2, bolsista: true },
  { nome: 'Pedro', nota: 3, bolsista: false },
  { nome: 'Ana', nota: 4, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))