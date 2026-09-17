const userInput = require("prompt-sync")();

function tabuadaAdicao(){
  for(let e = 1; e <= 10; e++){
    for(let i = 1; i <= 10; i++){
      console.log(`${e} + ${i} = ${e + i}`);
    }
  }
}

tabuadaAdicao();