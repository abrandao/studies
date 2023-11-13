console.log(this === global) // false porque this não aponta para global e sim para module.exports
console.log(this === module) // false porque this é um object exatamente a referência para module.exports

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
  console.log('Dentro de uma função...')
  console.log(this === exports)
  console.log(this === module.exports)
  console.log(this === global)

  this.perigo = '...' // Dentro do escopo global
}

this.perigo = '...' // Dentro de module.exports
logThis()