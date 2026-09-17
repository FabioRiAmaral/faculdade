const userInput = require('prompt-sync')();

const numero = parseInt(userInput('Insira um numero inteiro: '));

function quadradoPerfeito(n){
    const quadrado = n**(1/2);
    const inteiro = parseInt(quadrado);
    if (quadrado === inteiro){
        return `O resultado do quadrado é de ${quadrado}, sendo portanto um quadrado perfeito!`;
    }
    else{
        return `O resultado do quadrado é de ${quadrado}, não sendo portanto um quadrado perfeito!`;
    }
}

console.log(quadradoPerfeito(numero))