const userInput = require("prompt-sync")();
let length = parseInt(userInput("Insira o tamanho do vetor: "));

function arrayAleatorio(length){
    let array = [];
    for(let e = 0;e < length;e++){
        array[e] = parseInt((Math.random()*1001));
    }
    return(array);
}

console.log(arrayAleatorio(length));