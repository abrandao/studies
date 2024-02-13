let chute;
let tentativas = 1;
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

alert('Boas vindas ao jogo do número secreto!');

// Enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}.`);
  
  // Se chute for igual ao número secreto
  if (chute == numeroSecreto) {
    break;
    
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
