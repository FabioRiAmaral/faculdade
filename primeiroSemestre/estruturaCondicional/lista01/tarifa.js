const userInput = require('prompt-sync')();

const nome = userInput('Insira o nome: ');
const conta = parseInt(userInput('Insira o número da conta: '));
const saldoSemestral = parseFloat(userInput('Insira o saldo da conta: '));

function tarifa(montante){
    if (montante <= 1000){
        return 25;
    }
    else if (montante > 1000 && montante <= 2000){
        return 20;
    }
    else if (montante > 2000 && montante <= 3500){
        return 13;
    }
    else {
        return 0;
    }
}

console.log(`A conta do usuario ${nome} de conta ${conta} tem tarifa de R$${tarifa(saldoSemestral).toFixed(2)}`);