const userInput = require('prompt-sync')();

const valorFabrica = Number(userInput('Insira o valor de fabrica do veiculo: '));
console.log(`\n1 - Ar Condicionado -- R$1750,00\n2 - Pintura Metálica -- R$800,00\n3 - Vidro Elétrico -- R$1200,00\n4 - Diração Hidráulica -- R$2000,00`);
const adicional = Number(userInput('Selecione uma das opções: '));

function valorTotal(valor, adicional){
    const arCondicionado = 1750;
    const pinturaMetalica = 800;
    const vidroEletrico = 1200;
    const direcaoHidraulica = 2000;
    if (adicional == 1){
        return (valor + arCondicionado);
    }
    else if (adicional == 2){
        return (valor + pinturaMetalica);
    }
    else if (adicional == 3){
        return (valor + vidroEletrico);
    }
    else if (adicional == 4){
        return (valor + direcaoHidraulica);
    }
    else{
        return 'Opção invexistente, tente novamente!'
    }
}

console.log(valorTotal(valorFabrica, adicional));