const userInput = require('prompt-sync')();

let lado1 = Number(userInput('Lado 1: '));
let lado2 = Number(userInput('lado 2: '));
let lado3 = Number(userInput('Lado 3: '));

function heron(a, b ,c){
    return ((a + b + c)/2);
}

function areaTriangulo(a, b, c){
    const FormulaDeHeron = heron(a, b, c);
    let area = (FormulaDeHeron * (FormulaDeHeron - a) * (FormulaDeHeron - b) * (FormulaDeHeron - c)) ** (1/2);
    return area;
}

console.log(`A area do traingulo equivale a ${areaTriangulo(lado1, lado2, lado3)}`)