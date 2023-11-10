// Desenvolva uma função que receba como parâmetro um número entre 1 e 10., Internamente, na função, será gerado um número aleatório entre 1 e 10.
// A função deverá retornar se o parâmetro de entrada for igual ao número sorteado internamente. Se o valor fornecido for sorteado, retorne "Parabéns! o número sorteado foi X". Se não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.

function sorteio(numero) {
  let numeroSorteado = Math.floor(Math.random() * 10) + 1

  return numero == numeroSorteado ? 
    `Parabéns! o número sorteado foi ${numero}.` : 
    `Que pena! O número sorteado foi o ${numeroSorteado}.`
}

console.log(sorteio(1))
console.log(sorteio(2))
console.log(sorteio(3))
console.log(sorteio(4))
console.log(sorteio(5))
console.log(sorteio(6))
console.log(sorteio(7))
console.log(sorteio(8))
console.log(sorteio(9))
console.log(sorteio(10))