const userInput = require("prompt-sync")();

const numero = parseInt(userInput("Insira um número inteiro positivo: "));

function triangular(n){
  let numTri;
  for(let e = 1; e <= n; e++){
    if((e*(e+1)*(e+2)) == n){
      numTri = `O número ${n} é triangular pois ${e} * ${e + 1} * ${e + 2} = ${n}`;
      break;
    }else{
      numTri = "Numero não triangular!";
    }
  }
  return numTri;
}

console.log(triangular(numero));