const userInput = require('prompt-sync')();

const numero = parseInt(userInput("Insira um número inteiro positivo: "));

function perfeito(numero){
  let sum = 0;
  for(let e = 1; e < numero; e++){
    if(numero%e == 0){
      sum += e;
    }else{
      continue;
    }
  }

  if(sum == numero){
    console.log(`\n${numero} é um número perfeito!`);
  }else{
    console.log(`\n${numero} não é um número perfeito!`);
  }
}

perfeito(numero);