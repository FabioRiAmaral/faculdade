function PerdaCarga(q, d, c){
    let j = (q**1.85)*10.643*(d**4.87)*(c**(0-1.85));
    return j
}

const userInput = require("prompt-sync")();

let vazao = Number(userInput('Vazão: '));
let diametro = Number(userInput('Diamentro do tubo: '));
let coeficienteDeRugosidade = Number(userInput('Coeficiente de rugosidade: '));

console.log(`A perda de carga é igual a ${PerdaCarga(vazao, diametro, coeficienteDeRugosidade)}`)