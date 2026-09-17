const userInput = require('prompt-sync')();

console.log("1 -- While Loop\n2 -- For Loop\n3 -- Do While Loop\n")
const loopType = parseInt(userInput("Qual tipo de loop ira usar: "));
let loop = 1;
let limite = parseInt(userInput("Digite de qual ate 1 deseja printar: "));

while((loop - 1) != limite){
  console.log(limite);
  limite--;
}

function whileLoop(start, end){
  while((start - 1) != end){
    console.log(end);
    limite--;
  }
}

function forLoop(start, end){
  for(let e = end; e != (start - 1); e++){
    console.log(e);
  }
}

function doWhileLoop(start, end){
  do{
    console.log(end);
    end--;
  }while((start - 1) != end);
}

if(loopType == 1){
  whileLoop(loop, limite);
}else if(loopType == 2){
  forLoop(loop, limite);
}else if(loopType == 3){
  doWhileLoop(loop, limite);
}else{
  console.log("Loop invalido");
}