console.log(Math.ceil(6.1)) // 7

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'
console.log(obj1.nome) // Bola

function Obj(nome) {
  this.nome = nome // Criando um atributo público
  this.exec = function() {
    console.log('Exec...')
  }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome) // Cadeira
console.log(obj3.nome) // Mesa
obj2.exec() // Exec...
obj3.exec() // Exec...