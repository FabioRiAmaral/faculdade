function Volume(base, altura){
    return (1/2)*base*altura;
}
const userInput = require("prompt-sync")();

let h = Number(userInput('Altura do trinagulo: '));
let b = Number(userInput('Base do triangulo: '));

console.log(`O volume do triangulo equivale a: ${Volume(b, h)}`); // É dividido por meio na verdade, de um quadrado se da para tirar 2 triangulos