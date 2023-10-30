let num1 = 1
let num2 = 2

num1++ // Forma pós-fixada
console.log(num1)

--num1 // Forma pré-fixada
console.log(num1)

console.log(++num1 === num2--) // true pois num2 é decrementado somente após a execução
console.log(num1 === num2) // false pois num2 já foi decrementado