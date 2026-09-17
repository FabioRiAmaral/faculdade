const userInput = require("prompt-sync")();

const numero1 = parseInt(userInput("Insira o primeiro número: "));
const numero2 = parseInt(userInput("Insira o segundo Número: "));

function mdc(a, b){
  if(a > b){
    while(a != 0){
      let resto = a;
      a = b%a;
      b = resto;
    }
    return(b);
  }else{
    while(b != 0){
      let resto = b;
      b = a%b;
      a = resto;
    }
    return(a);
  }
}

console.log(mdc(numero1, numero2));