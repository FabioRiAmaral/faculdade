const userInput = require('prompt-sync')();

const numero = parseInt(userInput("Digite um numero inteiro positivo para verificar se é primo: "));

function verificadorPrimo(numero){
  let vezesDividido = 0;
  for(let e = 1; e <= 9; e++){
    if(numero%e == 0){
      vezesDividido++;
    }
  }

  if(vezesDividido == 2){
    console.log(`O número ${numero} é primo!`);
  }else{
    console.log(`O número ${numero} não é primo!`);
  }
}

verificadorPrimo(numero);