function CustoConsumidor(custoFabrica){
    const lucroDistribuidor = custoFabrica*(12/100);
    const imposto = custoFabrica*(30/100);
    const custoConsumidor = custoFabrica + lucroDistribuidor + imposto;
    return custoConsumidor;
}

const userInput = require('prompt-sync')();

let custoFabrica = Number(userInput('Custo do veiculo de fabrica: '));

console.log(`Custo ao consumidor é de R$${CustoConsumidor(custoFabrica)}`);