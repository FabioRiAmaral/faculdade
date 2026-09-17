const userInput = require('prompt-sync')();

const a = parseInt(userInput('A: '));
const b = parseInt(userInput('B: '));
const c = parseInt(userInput('C: '));

function triangulo(a, b, c){
    if (a && b === c){
        return 'Triangulo equilátero! Todos os lados com a mesma medida!';
    }
    else if (a == b || a == c || b == c){
        return 'Triangulo isóceles! Ao menos 2 lados com a mesma medida!';
    }
    else if (a != b || a != c || b != c){
        return 'Triangulo escaleno! Nenhum dos lados com a mesma medida!';
    }
    else{
        return 'Triangulo invalido!';
    }
}

console.log(triangulo(a, b, c));