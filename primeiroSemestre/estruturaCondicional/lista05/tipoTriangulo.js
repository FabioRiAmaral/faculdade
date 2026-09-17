const userInput = require("prompt-sync")();

let continuar;

function tipoTriangulo(a, b, c){
  if((a**2) == ((b**2) + (c**2))){
    return "retângulo";
  }
  else if((a**2) > ((b**2) + (c**2))){
    return "obtusângulo";
  }
  else if((a**2) < ((b**2) + (c**2))){
    return "acutângulo";
  }
  else{
    return "invalido, tente novamente";
  }
}

do{
  const a = parseInt(userInput("A: "));
  const b = parseInt(userInput("B: "));
  const c = parseInt(userInput("C: "));

  console.log(`É um triângulo ${tipoTriangulo(a,b,c)}`)
  continuar = userInput("Deseja tentar novamente? (S / N) ");
} while(continuar == "S" || continuar == "s");