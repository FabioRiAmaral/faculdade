const userInput = require("prompt-sync")();
let quantidadeDeNotas = parseInt(userInput("Insira a quantidade de notas: "));
let notas = [];
let loop = 0;

do{
  notas[loop] = parseInt(userInput("Insira a nota: "))
  loop += 1;
}while(loop < quantidadeDeNotas);

function maior(array){
  let maiorDentre = array[1];
  for(let e = 0; e < array.length; e++){
    if(maiorDentre < array[e]){
      maiorDentre = array[e];
    }
  }
  return(maiorDentre);
}

function media(array){
  let media = 0;
  for(let e = 0; e < array.length; e++){
    media += array[e];
  }
  media /= array.length;
  
  return(media);
}

function total(array){
  let total = 0;
  for(let e = 0; e < array.length; e++){
    total += array[e];
  }
  return(total);
}

console.log(`Total Arrecadado: R$ ${total(notas)} - Valor da Maior nota: R$ ${maior(notas)} - Media: R$ ${media(notas)}`);