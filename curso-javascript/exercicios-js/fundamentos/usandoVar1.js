{ 
  { 
    { 
      { 
        var sera = 'Será???' 
      }
    }
  } 
}
console.log(sera) // A variável é visível

function teste() {
  var local = 123
}
teste()
console.log(local) // A variável não é visível fora da função