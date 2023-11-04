// pessoa -> #enderecoDeMemoria1 -> {...}
const pessoa = { nome: 'Joao' } // Esse objeto sempre apontará para o enderecoDeMemoria1
pessoa.nome = 'Pedro'
console.log(pessoa)

// Pessoa -> #enderecoDeMemoria2 <- {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // Uma vez que um objeto esteja congelado você não consegue mais mexer no objeto

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome) // O nome não foi mudado pois o objeto está congelado
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)