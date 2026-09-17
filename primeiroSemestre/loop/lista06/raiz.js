const userInput = require("prompt-sync")();

const numero = parseInt(userInput("Insira um número inteiro positivo: "));

function raiz(n){
  let raiz = 0;
  while(n > 0){
    for(let impar = 1; impar <= n; impar++){
      if((impar % 2) != 0){
        n = n - impar;
        raiz += 1;
      }else{
        continue;
      }
    }
  }
  return(raiz);
}

console.log("A raiz quadrada de " + numero + " é igual á " + raiz(numero));