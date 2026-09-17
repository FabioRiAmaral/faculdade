const userInput = require("prompt-sync")();

function leibniz(){
  pi = 0;
  denominador = 1;
  termo = 4 / denominador;
  sinal = 1;
  while(Math.abs(termo) >= 0.00001){
    pi += termo;
    denominador += 2;
    sinal *= -1; //muda sinal
    termo = sinal * (4/denominador);
  }
  return(pi);
}

console.log(leibniz().toFixed(6))