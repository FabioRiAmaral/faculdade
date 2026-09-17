const userInput = require('prompt-sync')();

let valor = Number(userInput('Qual o valor a ser decomposto: '));


function dinheiroDecomposto(valor){

  function notas100(valor){
    return Math.floor(valor / 100);
  }

  const sobraNotas100 = valor - (notas100(valor) * 100); // A sobra do numero total menos a quantidade de notas de 100 já contadas

  function notas50(valor){
    return Math.floor(sobraNotas100 / 50);
  }

  const sobraNotas50 = sobraNotas100 - (notas50(valor) * 50); // A sobra já retirada das notas de 100 menos a quantidade de notas de 50 que faltam

  function notas10(valor){
    return Math.floor(sobraNotas50 / 10);
  }

  const sobraNotas10 = sobraNotas50 - (notas10(valor) * 10)

  function notas5(valor){
    return Math.floor(sobraNotas10 / 5)
  }

  function notas1(valor){
    return Math.floor(sobraNotas10 - (notas5(valor) * 5))
  }

  console.log(`São ${notas100(valor)} notas de 100`);
  console.log(`${notas50(valor)} notas de 50`);
  console.log(`${notas10(valor)} notas de 10`);
  console.log(`${notas5(valor)} notas de 5`);
  console.log(`${notas1(valor)} notas de 1`);
}

console.log(dinheiroDecomposto(valor));