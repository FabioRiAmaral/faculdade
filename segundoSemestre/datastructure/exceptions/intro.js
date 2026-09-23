const userInput = require('prompt-sync')();

function saqueConta(atual, saque){
  if(saldo<saque){
    throw new Error("Sem saldo!");
  }
  return(atual-saque);
}

let saldo, saque;
saldo = parseFloat(userInput("Saldo atual: "));
saque = parseFloat(userInput("Saque requerido: "));

try{
  saldo = saqueConta(saldo, saque);
}catch(erro){
  console.log("Erro do sistema: " + erro.message)
}finally{
  console.log(`Saldo atual R$ ${saldo}`);
}