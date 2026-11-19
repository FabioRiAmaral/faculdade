const inPreco = document.getElementById('inPreco');
const inCod = document.getElementById('inCod');

function calc(){
  const preco = parseInt(inPreco.value);
  const cod = parseInt(inCod.value);
  if(preco==NaN){
    throw new Error('Insira o número!');
  }
  let valorFinal;
  switch(cod){
    case(1):
      valorFinal = `À vista, dinheiro ou cheque, 10% de desconto: R$${(preco*0.9).toFixed(2)}`;
      break;
    case(2):
      valorFinal = `À vista, cartão de cédito, 5% de desconto: R$${(preco*0.95).toFixed(2)}`;
      break;
    case(3):
      valorFinal = `Em 2 vezes, preço normal da etiqueta sem juros: R$${(preco).toFixed(2)}`;
      break;
    default:
      valorFinal = `Em 3 vezes, preço normal da etiqueta + 10% de juros: R$${(preco*1.1).toFixed(2)}`;
      break;
  }
  document.getElementById('outPreco').innerHTML = `<h2 style="animation: fade 2s; color: blue;">${valorFinal}</h2>`;
}

document.getElementById('btnCalc').addEventListener('click', calc);