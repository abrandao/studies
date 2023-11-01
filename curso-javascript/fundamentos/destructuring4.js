function rand([min = 0, max = 1000]) {
  if(min > max) [min, max] = [max, min] // Operador destructuring para inverter as variáveis
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor) // Tirando as casas decimais
}

console.log(rand([50, 40]))
console.log(rand([900]))
console.log(rand([,10]))
console.log(rand([]))