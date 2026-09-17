const userInput = require('prompt-sync')();

let nome = userInput('Insira seu nome: ');
let peso = Number(userInput('Insira seu peso: '));

function pesoEmJupter(pesoNaTerra){
    const pesoAtualizado = (pesoNaTerra * 2.64) / 9.87;
    return pesoAtualizado.toFixed(4);
}

console.log(`${nome} seu peso em Júpter é ${pesoEmJupter(peso)}`)