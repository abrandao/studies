// Elabore uma função que receba um objeto com estudantes e suas notas. As notas de cada estudante estarão num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto com os atributos nome e média, que indica que o aluno teve o melhor desempenho das notas.

let estudantes = {
  Isabelle: [10, 5, 5, 0],
  Nathalia: [6, 7, 3, 9],
  Fernando: [9.5, 5, 8, 9]
}

function Medias(estudantes) {
  let medias = []
  let chaveMelhorEstudante = 0
  const entries = Object.entries(estudantes)
  
  for (let estudante of entries) {
    medias.push(calculaMedias(estudante))
  }

  chaveMelhorEstudante = defineMelhorEstudante(medias)
  trataSaida(entries[chaveMelhorEstudante][0], medias[chaveMelhorEstudante])  
}

// Calcula as médias
function calculaMedias(estudante) { 
  let total = 0
  notas = estudante[1]
  notas.forEach(el => {
    total += el
  });
  return (total / 4).toFixed(2)
}

function defineMelhorEstudante(medias) {
  
  chaveMelhorEstudante = 0
  for (let key in medias) {
    if (medias[key] > chaveMelhorEstudante)
      chaveMelhorEstudante = key
  }
  return chaveMelhorEstudante
}

function trataSaida(nome, media) {  
  const melhorAluno = {}
  melhorAluno[nome] = media
  console.log(melhorAluno)
}

Medias(estudantes)