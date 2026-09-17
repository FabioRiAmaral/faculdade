const userInput = require("prompt-sync")();
let nome, peso, altura, sexo;
nome = userInput("Insira seu nome: ");
peso = parseFloat(userInput("Insira seu peso: "));
altura = parseFloat(userInput("Insira sua altura: "));
sexo = userInput("Insira seu sexo: ");

function imc(peso, altura, sexo, nome){
  const imc = peso/(altura**2);
  let pesoIdeal;
  let faixaDeRisco;
  switch(sexo){
    case("masculino"):
      pesoIdeal = (72.2 * altura) - 58;
      break;
    case("feminino"):
      pesoIdeal = (62.1 * altura) - 55.7;
      break;
  }
  if(imc < 20){
    faixaDeRisco = "Abaixo do peso ideal";
  }else if(imc >= 20 || imc <= 25){
    faixaDeRisco = "Peso normal";
  }else if(imc > 25 || imc <= 30){
    faixaDeRisco = "Excesso de peso";
  }else if(imc > 30 || imc <= 35){
    faixaDeRisco = "Obesidade";
  }else if(imc > 35){
    faixaDeRisco = "Obesidade Mórbida";
  }

  return(`${nome} -- IMC: ${imc} -- Faixa de Peso: ${faixaDeRisco} -- Peso Ideal: ${pesoIdeal}`);
}

imc(peso, altura, sexo, nome);