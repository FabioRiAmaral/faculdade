const userInput = require('prompt-sync')();

let per100ipi = Number(userInput('Insira o porcentagem de IPI: '));
let valor1 = Number(userInput('Valor peça 1: '));
let quantidade1 = Number(userInput('Quantiade peça 1: '));
let valor2 = Number(userInput('Valor peça 2: '));
let quantidade2 = Number(userInput('Quantiade peça 2: '));

function valorTotal(valorPeca1, valorPeca2, quantidadePeca1, quantidadePeca2, porcentagemIPI){
    const totalSerPago = ((valorPeca1 * quantidadePeca1) + (valorPeca2 * quantidadePeca2)) * ((porcentagemIPI/100) + 1);
    return totalSerPago
}

console.log(`O total a ser pago equivale a R$${valorTotal(valor1, valor2, quantidade1, quantidade2, per100ipi)}`);