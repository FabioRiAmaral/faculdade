const userInput = require("prompt-sync")();
let quantidadeDeNotas = parseInt(userInput("Insira a quantidade de notas: "));
let total = 0;
let maior = 0;

for(let e = 0; e < quantidadeDeNotas; e++){
  let nota = parseInt(userInput(`Digite a nota ${e + 1}: `));
  total += nota;

  if (e == 1 || nota > maior){
    maior = nota;
  }
}
const media = total/quantidadeDeNotas;

console.log(`Total Arrecadado: R$ ${total} - Valor da Maior nota: R$ ${maior} - Media: R$ ${media}`);