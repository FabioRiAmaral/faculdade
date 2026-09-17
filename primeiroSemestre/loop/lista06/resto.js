const userInput = require("prompt-sync")();

const numero1 = parseInt(userInput("Insira o número 1: "));
const numero2 = parseInt(userInput("Insira o número 2: "));

function quociente(n1, n2){
  let quociente = 0;
  while((n1 - n2) >= 0){
    n1 = n1 - n2;
    quociente += 1;
  }
  return(quociente);
}

function resto(n1, n2){
  let resto;
  while((n1 - n2) >= 0){
    n1 = n1 - n2;
    if((n1 - n2) <= 0){
      resto = n1;
    }else{
      continue;
    }
  }
  return(resto);
}

console.log(`\nQuociente(${numero1}, ${numero2}) = ${quociente(numero1, numero2)}\nResto(${numero1}, ${numero2}) = ${resto(numero1, numero2)}`);