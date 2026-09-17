const userInput = require("prompt-sync")();

const numero = parseInt(userInput("Insira quantos termos de fibonnaci deseja ver: "));

function fibonnaci(n){
  let a = 1;
  let b = 1;
  console.log(`1°: ${a}\n2°: ${b}`);
  for(let e = 1; e <= (n - 2); e++){
    let fibonnaciSequene = a + b;
    a = b;
    b = fibonnaciSequene;
    console.log(`${e + 2}°: ${fibonnaciSequene}`);
  }
}

fibonnaci(numero);