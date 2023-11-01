const pessoa = {
  saudacao: 'Bom dia',
  falar() {
    console.log(this.saudacao)
  }
}

pessoa.falar() // Bom dia
const falar = pessoa.falar

falar() // undefinded // Conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // Bom dia

const falar2 = pessoa.falar
falar2() // undefined