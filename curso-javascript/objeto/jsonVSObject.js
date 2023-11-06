const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(obj)
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) // JSON inválido
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) // JSON inválido
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // JSON válido
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')) // JSON válido