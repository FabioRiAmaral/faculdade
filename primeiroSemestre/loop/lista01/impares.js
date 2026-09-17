const userInput = require("prompt-sync")();

console.log("1 -- While Loop\n2 -- For Loop\n3 -- Do While Loop\n")
const loopType = parseInt(userInput("Qual tipo de loop ira usar: "));
let loop = 1;
const limite = parseInt(userInput("Digite um numero inteiro positivo para printar todos impares dentre 1 e ele: "));

function whileLoop(start, end){
  while(start != (end + 1)){
    if(start%2 != 0){
      console.log(start);
      start++;
    }else{
      start++;
    }
  }
}

function forLoop(end){
  for(let e = 1; e < end; e++)
    if(e%2 != 0){
      console.log(e);
    }
}

function doWhileLoop(start, end){
  do{
    if(start%2 != 0){
      console.log(start);
      start++;
    }else{
      start++;
    }
  }while(start != (end + 1));
}

if(loopType == 1){
  whileLoop(loop, limite);
}else if(loopType == 2){
  forLoop(limite);
}else if(loopType == 3){
  doWhileLoop(loop, limite);
}else{
  console.log("Loop invalido");
}