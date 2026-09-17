function DistanciaCoodernadas(AX, AY, BX, BY){
    let distancia = (((BY - AX)**2 + (BX - AY)**2) ** (1/2))
    return distancia;
}

const userInput = require("prompt-sync")();

let coordenadaAX = Number(userInput('Insira o valor da coordenada A posição X: '));
let coordenadaAY = Number(userInput('Insira o valor da coordenada A posição Y: '));
let coordenadaBX = Number(userInput('Insira o valor da coordenada B posição X: '));
let coordenadaBY = Number(userInput('Insira o valor da coordenada B posição Y: '));

console.log(`A ditancia entra A e B é: ${DistanciaCoodernadas(coordenadaAX, coordenadaAY, coordenadaBX, coordenadaBY)}`);