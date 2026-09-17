const userInput = require('prompt-sync')();

console.log(`1 - Álcool -- R$4,805\n2 - Diesel -- R$5,953\n3 - Gasolina -- R$6,565`);
const tipoCombustivel = parseInt(userInput('Selecione um dos tipos de combustivel acima: '));
const quantidadeLitro = parseInt(userInput('Insira a quantidade de litros desejada: '));

function valor(tipo, litros){
    const alcool = 4.805;
    const diesel = 5.953;
    const gasolina = 6.565;
    if (tipo == 1){
        return (litros * alcool);
    }
    if (tipo == 2){
        return (litros * diesel);
    }
    if (tipo == 3){
        return (litros * gasolina);
    }
}

console.log('R$' + (valor(tipoCombustivel, quantidadeLitro)).toFixed(2))