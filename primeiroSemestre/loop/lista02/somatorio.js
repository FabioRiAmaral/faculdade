const userInput = require("prompt-sync")();

let sum = 0;
let n = parseInt(userInput("Digite o valor de n: "));

function produtorio(n){
  for(let e = 1; e < (n+1); e++){
    sum += e;
  }
}

produtorio(n);
console.log(sum);