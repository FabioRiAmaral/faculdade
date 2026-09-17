const userInput = require('prompt-sync')();
const numeroConta = userInput("Digite o numero da conta: ");
const tipo = userInput("Digite o tipo: ");
const consumo = Number(userInput("Digite quantos m³ de água foram consumidos: "))

function contaCliente(tipo, consumo){
    const residencial = 5 + (0.55 * consumo);
    const comercial = 150 + (1.25 * consumo);
    const industrial = 280 + (2.54 * consumo)
    switch(tipo){
        case("residencial"):
            return residencial;
            break;
        case("comercial"):
            return comercial;
            break;
        case("industrial"):
            return industrial;
            break;
        default:
            return `${tipo} não é um tipo valido!`
    }
}

console.log(`A conta de número ${numeroConta} deve pagar um valor total de R$${contaCliente(tipo, consumo).toFixed(2)}`)