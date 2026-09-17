const userInput = require("prompt-sync")();

const numero = parseInt(userInput("Insira um número inteiro positivo: "));

function capicua(n1, n2){
    if(reverso(n1) == n2){
			return("É capicua!");
		}else{
			return("Não é capicua!");
		}
}

function reverso(n){
    let reverso = 0;
    while (n > 0) {
      let digit = n % 10;
      reverso = reverso * 10 + digit;
      n = (n - digit) / 10;
    }
    return reverso;
}

console.log(capicua(numero, numero))