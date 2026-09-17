const userInput = require("prompt-sync")();
let continuar;

function inversor(n){
  const unidade = n % 10;
  const dezena = Math.floor((n % 100)/10);
  const centena = Math.floor((n % 1000)/100);
  const unidadeMilhar = Math.floor((n%10000)/1000)
  const dezenaMilhar = Math.floor(n / 10000)
  const invertidoStr = `${unidade}${dezena}${centena}${unidadeMilhar}${dezenaMilhar}`;

  return parseInt(invertidoStr);
}

function polindromo(n){
  const invertido = inversor(n);
  if(invertido == n){
    return "é um palindromo"
  }
  else{
    return "não é um palindromo"
  }
}


do{
  const number = parseInt(userInput("Insira um número de 5 digitos inteiro: "));
  console.log(`O número ${number} ${polindromo(number)}`);
  continuar = userInput("Deseja tentar novamente? (S / N) ");
} while(continuar == "S" || continuar == "s");