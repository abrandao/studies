// Object.preventExtensions
// Previne que sejam adicionados novos atributos
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)


// Object.seal
// Não consegue adicionar ou excluir novos atributos. Porém é possível modificá-los
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29

console.log(pessoa) // { nome: 'Juliana', idade: 29 }


// Object.freze = selado + valores constantes
// Não pode modificar nada