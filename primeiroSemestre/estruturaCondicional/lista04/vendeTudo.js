const userInput = require("prompt-sync")();
const cor = userInput("Insira a cor da etiqueta: ");
const quantidade = parseInt(userInput("Insira a quantidade de produtos: "));
const valor = parseFloat(userInput("Insira o valor total do produto: "));

function valorFinal(corEtiqueta, quantidade, valorUnitario){
  switch(corEtiqueta == "verde"){
    case("verde"):
      if(quantidade <= 10){
        return((valorUnitario * quantidade) * 0.95);
      }
      else{
        return((valorUnitario * quantidade) * 0.90);
      }
      break

    case("amarelo"):
      if(quantidade <= 5){
        return((valorUnitario * quantidade) * 0.85);
      }
      else if(quantidade > 10){
        return((valorUnitario * quantidade) * 0.8);
      }
      else{
        return((valorUnitario * quantidade));
      }
      break
      
    default:
      return(valorUnitario * quantidade);
    }
}

console.log(`O valor final do produto será de R$${valorFinal(cor, quantidade, valor)}`);
