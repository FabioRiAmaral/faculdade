const userInput = require('prompt-sync')();

const numero = parseInt(userInput("Insira um numero inteiro positivo: "));

for(let e = 0; e <= numero; e++){
  let result;
  if(numero%e == 0){
    result = numero/e;
  }else{
    continue;
  }
  console.log(`${numero} / ${e} = ${result}`);
}