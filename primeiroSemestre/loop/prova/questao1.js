const userInput = require("prompt-sync")();

const x = parseInt(userInput("Insira um número: "));
const y = parseInt(userInput("Insira o expoente: "))

function potencia(n, e){
  let resultado = n;
  for(let expoente = 1; expoente < e; expoente++){
    resultado *= n;
  }
  return(resultado);
}

console.log(potencia(x, y));