const userInput = require("prompt-sync")();
const nome = userInput("Insira seu nome: ");
const peso = parseFloat(userInput("Insira o seu peso em Kg: "));
const altura = parseFloat(userInput("Insira a sua altura: "));

function imc(peso, altura){
  const imc = peso/(altura ** 2);
  return imc;
}

function faixaDeRisco(imc){
  if(imc <= 20){
    return "Abaixo do peso";
  }else if(imc > 20 && imc <= 25){
    return "Peso normal";
  }else if(imc > 25 && imc <= 30){
    return "Excesso de peso";
  }else if(imc > 30 && imc <= 35){
    return "Obesidade";
  }else{
    return "Obesidade morbida"
  }
}

console.log(`\nNome: ${nome}\nIMC: ${imc(peso, altura)}\nFaixa de risco: ${faixaDeRisco(imc(peso, altura))}`)