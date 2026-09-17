const userInput = require('prompt-sync')();

const numero = parseInt(userInput('Insira um número: '));

function verificadorParImpar(n){
    if (n % 2 == 0){
        return `O número ${n} é par!`;
    }
    if (n % 2 == 1){
        return `O número ${n} é impar!`;
    }
}

console.log(verificadorParImpar(numero));