function MediaComPeso(a, b, c){
    let media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 3;
    return media;
}

const userInput = require("prompt-sync")();

let nota1 = Number(userInput('Nota 1: '));
let nota2 = Number(userInput('Nota 2: '));
let nota3 = Number(userInput('Nota 3: '));

console.log(MediaComPeso(nota1, nota2, nota3))