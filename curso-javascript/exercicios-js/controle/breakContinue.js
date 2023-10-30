const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
  if (x == 5) {
    break
  }
  console.log(`Item ${x}: = ${nums[x]}`)
}

for (y in nums) {
  if (y == 5) {
    continue
  }
  console.log(`Itens ${y}: = ${nums[y]}`)
}

// Break executa até que a condição for verdadeira.
// Continue apenas pula a iteração em que a condição é verdadeira e dá seguimento.

externo: for (a in nums) {
  for (b in nums) {
    if (a == 2 && b == 3) break externo
    console.log(`Par = ${a}, ${b}`)
  }
}

console.log('Fim!')