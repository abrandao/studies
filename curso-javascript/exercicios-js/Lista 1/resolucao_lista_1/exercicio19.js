// O cardápio de uma lanchonete é o seguinte:

//  Código   Descrição do Produto   Preço
//   100     Cachorro Quente        R$ 3,00
//   200     Hambúrguer Simples     R$ 4,00
//   300     Cheeseburguer          R$ 5,50
//   400     Bauru                  R$ 7,50
//   500     Refrigerante           R$ 3,50
//   600     Suco                   R$ 2,80

//Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente.

function contaLanchonete(codigo, quantidade) {
  switch (codigo) {
    case 100:
      return (quantidade * 3).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    case 200:
      return (quantidade * 4).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    case 300:
      return (quantidade * 5.5).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    case 400:
      return (quantidade * 7.5).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    case 500:
      return (quantidade * 3.5).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    case 600:
      return (quantidade * 2.8).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    default:
      return "Código inválido"
  }
}

console.log("Pedido nº 01: " + contaLanchonete(100, 3))
console.log("Pedido nº 02: " + contaLanchonete(300, 1))
console.log("Pedido nº 03: " + contaLanchonete(600, 4))
console.log("Pedido nº 04: " + contaLanchonete(900, 3))