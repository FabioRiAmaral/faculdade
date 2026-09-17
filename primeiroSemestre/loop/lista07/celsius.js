const userInput = require("prompt-sync")();
const maximo = parseFloat(userInput("Insira a temperatura maxima: "));
const minimo = parseFloat(userInput("Insira a temperatura minima: "));
const decremento = parseFloat(userInput("Insira o decremento: "));

function convert(max, min, decrement){
  while(max >= min){
    let celsius = 5*((max - 32)/9);
    console.log(`${max.toFixed(1)} F° == ${celsius.toFixed(1)} C°`);
    max -= decrement;
  }
}

convert(maximo, minimo, decremento);