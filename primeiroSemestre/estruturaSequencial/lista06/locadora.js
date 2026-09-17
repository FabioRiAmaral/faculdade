const userInput = require('prompt-sync')();

let horas = Number(userInput('Insira quantas horas de uso?: '));

function valorAPagar(horasDeUso){
  const QuantidadeDe3h = Math.floor(horasDeUso/3);
  const horasExtra = horas % 3;
  const valor = (QuantidadeDe3h * 8.5) + (horasExtra * 3.5);
  return valor
}

console.log(`O total a pagar é de R$${valorAPagar(horas)}`)