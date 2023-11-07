const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// O índice sempre é passado como segundo parâmetro
aprovados.forEach(function(nome, indice) {
  console.log(`${indice + 1}) ${nome}`)  
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)