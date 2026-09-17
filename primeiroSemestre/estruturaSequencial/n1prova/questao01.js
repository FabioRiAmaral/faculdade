const userInput = require("prompt-sync")();

let salario = Number(userInput('Salário Mínimo: '));
let qntQwtts = Number(userInput('Quantos Quilowatts?: '));

function valorPerQwtts(salario){ //calcula o valor de cada Quilowatt
    const qwttsValor = (salario / 5); // 1/5 do total do salario
    return qwttsValor.toFixed(2);
}

function valorTotalQwtts(valorPerQuillowats, quilowatts){ // calcula o valor total a ser pago por todo Quilowatt consumido
    const valorTotal = valorPerQuillowats * quilowatts;
    return valorTotal.toFixed(2);
}

function valorTotalComDesconto(valorTotal){
    const desconto = 15 / 100;
    const valorTotalDesconto = valorTotal - (valorTotal * desconto);
    return valorTotalDesconto.toFixed(2);
}

let perQwtts = valorPerQwtts(salario);
let valorTotal = valorTotalQwtts(valorPerQwtts(salario), qntQwtts);
let valorComDesconto = valorTotalComDesconto(valorTotal)

console.log(`Valor do Quilowatt equivale a R$ ${perQwtts}`);
console.log(`Valor a ser pago pelo consumidor: R$ ${valorTotal}`)
console.log(`Valor com 15% de desconto: R$ ${valorComDesconto}`)