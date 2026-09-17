const userInput = require('prompt-sync')();

let polegadas = Number(userInput('Chuva em polegadas: '))

function milimetro(polegadas){
    return polegadas * 25.4;
}

console.log(`${polegadas} polegadas equivalem a ${milimetro(polegadas)}mm`)