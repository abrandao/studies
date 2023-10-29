// Com let temos escopos diferentes
let numero = 1
{
  let numero = 2
  console.log('dentro =', numero)
}
console.log('fora =', numero)

// Com var temos o mesmo escopo
var numero2 = 1
{
  var numero2 = 2
  console.log('dentro =', numero2)
}
console.log('fora =', numero2)