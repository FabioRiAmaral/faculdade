const userInput = require("prompt-sync")();

const numero1 = parseInt(userInput("Numero 1: "));
const numero2 = parseInt(userInput("Numero 2: "));

function mmc(a, b){
  let resto;
  let x = a;
  let y = b;
  while(resto != 0){
    resto = x % y;
    x = y;
    y = resto;
  }
  return((a*b)/x);
}

console.log(mmc(numero1, numero2));