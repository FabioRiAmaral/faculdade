function Popular(publico){
    const adesao = publico * (10/100);
    const valor = 5;
    return adesao * valor
}

function Geral(publico){
    const adesao = publico * (50/100);
    const valor = 10;
    return adesao * valor;
}

function Arquibancada(publico){
    const adesao = publico * (30/100);
    const valor = 20;
    return adesao * valor;
}

function Cadeira(publico){
    const adesao = publico * (10/100);
    const valor = 40;
    return adesao * valor;
}

function RendaTotal(publico){
    const total = Popular(publico) + Geral(publico) + Arquibancada(publico) + Cadeira(publico);
    return total;
}

const userInput = require("prompt-sync")();

let publico = Number(userInput('Quantidade de pessoas: '));

console.log(`A renda total do jogo foi de R$${RendaTotal(publico)}`);