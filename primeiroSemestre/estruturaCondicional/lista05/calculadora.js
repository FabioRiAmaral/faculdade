const userInput = require("prompt-sync")();
console.log(`+ -- Adição\n- -- Subtração\n* -- Multiplicação\n/ -- Divisão`)

let continuar;

function calcular(tipoOperacao, numeroEsquerda, numeroDireita){
  if(tipoOperacao == "+"){
    return(numeroEsquerda + numeroDireita);
  }
  else if(tipoOperacao == "-"){
    return(numeroEsquerda - numeroDireita);
  }
  else if(tipoOperacao == "*"){
    return(numeroEsquerda * numeroDireita);
  }
  else if(tipoOperacao == "/"){
    return(numeroEsquerda / numeroDireita);
  }
  else{
    return `${tipoOperacao} é um tipo invalido!`;
  }
}

do{
  const tipo = userInput("Digite qual das possiveis operações aritmética deseja calcular: ");
  const numero1 = parseFloat(userInput("Digite qual o número que será usado à esquerda: "));
  const numero2 = parseFloat(userInput("Digite qual o número que será usada à direita: "));

  console.log(`O resultado do seu calculo é de: ${calcular(tipo, numero1, numero2)}\n`);
  continuar = userInput("Deseja tentar novamente? (S / N)\n");
} while(continuar == "S" || continuar == "s");