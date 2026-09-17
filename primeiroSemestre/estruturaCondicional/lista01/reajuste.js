const userInput = require('prompt-sync')();

const salario = parseFloat(userInput('Insira o salario: '));

function reajuste(montante){
    if (montante <= 1412) {
        return montante * 1.5;
    }
    else {
        return montante * 1.4;
    }
}

console.log(`O salario de R$${salario} sofreu um reajuste para R$${reajuste(salario).toFixed(2)}`)