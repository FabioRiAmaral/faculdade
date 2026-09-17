const userInput = require('prompt-sync')();

console.log("1 -- While Loop\n2 -- For Loop\n3 -- Do While Loop\n")
const loopType = parseInt(userInput("Qual tipo de loop ira usar: "));

let loop = 1;
const limite = parseInt(userInput("Digite ate qual deseja printar: "));

function whileLoop(start, end){
  while(start != (end + 1)){
    console.log(start);
    start++
  }
}

function forLoop(end){
  for(let e = 1; e < (end + 1); e++){
    console.log(e);
  }
}

function doWhileLoop(start, end){
  do{
    console.log(start);
    start++;
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