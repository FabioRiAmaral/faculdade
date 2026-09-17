const userInput = require("prompt-sync")();

const n = parseInt(userInput("Insira o n: "))

function tabuada(n){
  for(let e = 1; e < 11; e++){
    console.log(`${n} x ${e} = ${n*e}`)
  }
}

tabuada(n);