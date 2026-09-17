function Delta(a, b, c){
    let delta = b**2 - (4 * a * c);
    return delta
}

const userInput = require("prompt-sync")();
let coeficienteA = Number(userInput('Insira o coeficiente A: '));
let coeficienteB = Number(userInput('Insira o coeficiente B: '));
let coeficienteC = Number(userInput('Insira o coeficiente C: '));

console.log(`Delta é equivalente a ${Delta(coeficienteA, coeficienteB, coeficienteC)}`);