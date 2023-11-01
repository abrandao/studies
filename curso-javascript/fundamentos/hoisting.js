console.log('a =', a) // undefined
var a = 2
console.log('a =', a) // 2

console.log('b =', b) // O içamento (hosting) não ocorre com let, gerando um erro
let b = 2
console.log('b =', b)