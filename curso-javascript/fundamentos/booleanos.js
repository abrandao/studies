let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo)
console.log(!isAtivo)
console.log(!!isAtivo)
console.log(!true)
console.log(!!true)

console.log(`Os verdadeiros...`)
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = 33))
console.log(!!(isAtivo = 0))
console.log(!!'texto')

console.log(`Os falsos...`)
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(`Para finalizar...`)
console.log(!!('' || null || 0 || ' '))
console.log('' || null || 0 || 'epa')
console.log('' || null || 0 || 'epa' || 123) // Retorna o primeiro valor verdadeiro.

// Antes de atribuir um valor à variável
let nome = ''
console.log(nome || 'Desconhecido')
// Após de atribuir um valor à variável
nome = 'Lucas'
console.log(nome || 'Desconhecido')