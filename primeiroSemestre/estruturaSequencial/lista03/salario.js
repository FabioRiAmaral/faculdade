function SalarioTotal(fixo, lcd, led, plasma){
    let salario = fixo + ((lcd * 50) + (led * 60) + (plasma * 55));
    return salario
}

const userInput = require("prompt-sync")();

let vendasLCD = Number(userInput('Quantas televissões LCD foram vendidas?: '))
let vendasLED = Number(userInput('Quantas televissões LED foram vendidas?: '))
let vendasPlasma = Number(userInput('Quantas televissões de PLASMA foram vendidas: '))

const salarioFixo = 1600;

console.log(`O salario total com comissão é igual a R$${SalarioTotal(salarioFixo, vendasLCD, vendasLED, vendasPlasma)}`)