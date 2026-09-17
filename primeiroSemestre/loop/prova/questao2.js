const userInput = require("prompt-sync")();

const number = parseInt(userInput("Insira um número: "));

function multiplos(n){
  for(let e = 1; e <= 20; e++){
    let multiplo = n * e;
    console.log(`${n} * ${e} = ${multiplo}`);
  }
}

multiplos(number);