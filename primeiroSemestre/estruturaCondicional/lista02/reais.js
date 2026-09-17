const userInput = require('prompt-sync')();

const reais = parseFloat(userInput('Quantos reais?: '));
const moedaDesejada = userInput('Para qual moeda deseja transformar?: ');

function conversorReais(reais, moedaParaConverter){
    if (moedaParaConverter == 'Euro'){
        return reais * 5.418;
    }
    else if (moedaParaConverter == 'Libra Esterlina'){
        return reais * 6.336;
    }
    else if (moedaParaConverter == 'Dolar'){
        return reais * 5.189;
    }
}

console.log(`R$${conversorReais(reais, moedaDesejada)}`);