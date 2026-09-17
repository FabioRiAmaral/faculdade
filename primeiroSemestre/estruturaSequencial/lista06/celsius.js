const userInput = require('prompt-sync')();

let fehrenheit = Number(userInput('Temeperatura em Fehrenheit: '))

function FparaC(f){
    let celsius = (f - 32) / (9/5)
    return celsius
}

console.log(`${fehrenheit} °F equivale a ${FparaC(fehrenheit)} °C`)