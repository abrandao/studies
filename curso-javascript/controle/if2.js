function teste1(num) {
  if(num > 7)
    console.log(num) // Dentro do bloco IF
    console.log('Final') // Fora do bloco IF
}

teste1(6)
teste1(8)

function teste2(num) {
  if(num > 7); { // Cuidado com o ';'. Não o use em estruturas de controle.
    console.log(num)
  }
}

teste2(6)
teste2(8)