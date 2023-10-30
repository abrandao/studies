const imprimirResultado = function(nota) {
  if (nota >= 7) {
    console.log('Aprovado!')
  } else {
    console.log('Reprovado!')
  }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa') // A comparação ocorre devido à fraca tipagem da linguagem javascript