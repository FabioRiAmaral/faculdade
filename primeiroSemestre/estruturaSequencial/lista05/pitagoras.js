function Lado1(m, n){
    return (m**2) - (n**2);
}

function Lado2(m, n){
    return 2 * m * n;
}

function Hipotenusa(cateto1, cateto2){ 
    return ((cateto1**2) + (cateto2**2))**(1/2); //valor real da hipotenusa corrigido (da atividade tava errado)
}

const userInput = require('prompt-sync')();

let m = Number(userInput('Insira M (M deve ser maior que N): '));
let n = Number(userInput('Insira N (N deve ser menor que M): '));

console.log(`Os lados do triangulo rentangulo é de ${Lado1(m,n)} cm no lado 1 e ${Lado2(m,n)} no lado 2, enquanto a hipotenusa equivale a ${Hipotenusa(Lado1(m,n), Lado2(m,n))} cm`);