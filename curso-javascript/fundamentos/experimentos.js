let a = 3

console.log(this.a) // undefined
console.log(global.a) // undefined

global.b = 123
console.log(global.b) // 123

this.c = 456
console.log(this.c) // 456
console.log(module.exports === this) // true

this.d = false
this.e = 'teste'

console.log(module.exports) // { c: 456, d: false, e: 'teste' }

// Criando uma variável maluca: sem var e let!
abc = 3 // Não faça isso por envia essa variável para global
console.log(global.abc) // 3