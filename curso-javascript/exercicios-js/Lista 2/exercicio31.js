// Segunda versão do exercício 31

let estudantes = {
  Isabelle: [10, 5, 5, 0],
  Nathalia: [6, 7, 3, 9],
  Fernando: [9.5, 5, 8, 9]
}

const soma = estudantes => estudantes.reduce((acumulador, atual) => acumulador + atual, 0)
const media = estudantes => soma(estudantes) / estudantes.length

function receberMelhorEstudante(estudantes) {
  const estudantesComMedias = Object.entries(estudantes).map( estudante => {
  const chave = 0,
  valor = 1
  return { nome: estudante[chave], media: media(estudante[valor]) }
  })
  const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
  const melhorEstudante = estudantesOrdenados[0]
  return melhorEstudante
  }

  console.log(receberMelhorEstudante(estudantes))