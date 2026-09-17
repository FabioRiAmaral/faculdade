const userInput = require('prompt-sync')()
let loop;

function bairro(bairro, numero){
  let topFour = Math.floor(10000*(parseInt(numero)/(10**numero.length)));
  switch(topFour){
    case(3223):
    case(3225):
    case(3212):
      return(`equivale ao bairro recebido, Oeste`);
    case(3223):
    case(3224):
    case(3212):
      return(`equivale ao bairro recebido, Centro`);
    case(3241):
    case(3242):
    case(3243):
    case(3281):
      return(`equivale ao bairro recebido, Sul`);
    case(3251):
    case(3285):
      return(`equivale ao bairro recebido, Bueno`);
    case(3233):
    case(3291):
      return(`equivale ao bairro recebido, Campinas`);
    default:
      return(`não equivale a nenhum bairro, tente novamente`);
  }
}

do{
  let bairroReferente = userInput("Digite o bairro referente ao seu número: ");
  let numero = userInput("Digite o numero de telefone: ");
  console.log(`O número de telefone recebido ${bairro(bairroReferente, numero)}`); //confirmado no bairro referente
  loop = userInput("Deseja tentar novamente? (S / N) ");
} while(loop == "S" || loop == "s");