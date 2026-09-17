const userInput = require("prompt-sync")();

const numero = parseInt(userInput("Insira um número inteiro positivo: "));

function fatorial(numero){
  let resultado = 0;
  for(let e = numero; e >= 0; e--){
    console.log(e);
    if(e == 0 || e == 1){
      if(e == 0){
        resultado == 1;
      }else{
        continue;
      }
    }else if(e == numero){
      resultado += (e * (e - 1));
    }else{
      resultado = (resultado * (e - 1));
    }
  }
  console.log(`Fatorial de ${numero} = ${resultado}`);
}

fatorial(numero);