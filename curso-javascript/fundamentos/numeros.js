const peso = 1.0
const peso2 = Number('2.3')

console.log(peso, peso2)
console.log(Number.isInteger(peso))
console.log(Number.isInteger(peso2))

const avaliacao = 9.871
const avaliacao2 = 6.871

const total = avaliacao * peso + avaliacao2 * peso2
const media = total / (peso + peso2)

console.log(media.toFixed(2))
console.log(media.toString(8))
console.log(typeof media)
console.log(typeof Number)