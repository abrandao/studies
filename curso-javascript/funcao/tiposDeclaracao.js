console.log(soma(3, 4)) // A função pode ser chamada antes da declaração

// Function declaration
function soma(x, y) {
  return x + y
}

// function expression
const sub = function (x, y) {
  return x - y
}
console.log(sub(3, 4)) // a função só pode ser chamada após ter sido declarada

// named function expression
const mult = function mult(x, y) {
  return x * y
}
console.log(mult(3, 4)) // a função só pode ser chamada após ter sido declarada