// Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN
imprimirSoma(2, 3, 4, 5, 6) // Ignora os excedentes
imprimirSoma() // NaN

// Função com retorno
function soma(a, b = 1) {
  return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) // Considerou o valor padrão de B
console.log(soma()) // NaN