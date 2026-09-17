function Rendimento(taxa, meses, mensalAplicado){
    return ((((1 + (taxa/100))**meses) - 1) / taxa) * valorMensalAplicado;
}
const userInput = require("prompt-sync")();

let valorMensalAplicado = Number(userInput("Qual foi a aplicação mensal?: "));
let taxa = Number(userInput('Qual a taxa aplicada a cada mês?: '));
let meses = Number(userInput('Por quantos meses foi aplicado esse valor?: '));

console.log(`O rendimento total foi de R$${Rendimento(taxa, meses, valorMensalAplicado)}`)