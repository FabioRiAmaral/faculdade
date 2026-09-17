function CustoViagem(velocidadeMedia, tempo){
    console.log(`Custo de viagem = ${6.20 * ((tempo * velocidadeMedia) / 12.5)}`)
}

const userInput = require("prompt-sync")();
let t = Number(userInput("Insira o tempo de viagem em horas: "));
let vM = Number(userInput("Insira a velocidade media: "));
CustoViagem(vM, t)