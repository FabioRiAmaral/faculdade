const userInput = require('prompt-sync')();

const numero = parseInt(userInput('Digite um numero de 4 digitos: '));

function caracteristica(n){
    const dezenaMilhar = Math.floor(numero/100);
    const dezena = (numero%100);
    const soma = dezenaMilhar + dezena;
    if (soma ** 2 == n){
        return `O número ${n} apresenta a caracteristica desejada!\n${dezenaMilhar} + ${dezena} = ${soma}\n${soma}² = ${soma ** 2}`;
    }
    else{
        return `O número ${n} NÃO apresenta a caracteristica desejada!\n${dezenaMilhar} + ${dezena} = ${soma}\n${soma}² = ${soma ** 2}`
    }
}

console.log(caracteristica(numero));