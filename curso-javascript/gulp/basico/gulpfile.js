const gulp = require('gulp')
const { series, parallel } = require('gulp')
const { transform } = require('lodash')

const antes1 = cb => {
  console.log('Tarefas Antes 1')
  return cb()
}

const antes2 = cb => {
  console.log('Tarefas Antes 2')
  return cb()
}

function copiar(cb) {
  gulp.src(['pastaA/**/*.txt', 'pastaA/**/*.json'])
    .pipe(gulp.dest('pastaB'))
  //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    // .pipe(imagePelaMetade())
    // .pipe(imageEmPretoEBranco())
    // .pipe(transformacaoA())
    // .pipe(transformacaoB())
    // .pipe(transformacaoC())
  return cb()
}

const fim = cb => {
  console.log('Tarefas Fim')
  return cb()
}

module.exports.default = series(
  parallel(antes1, antes2),
  copiar,
  fim
)