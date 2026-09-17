function diasDeVida(idade){
    let dias = idade * 365.25;
    console.log(`dias: ${dias}`);
    return dias
}

function horasDeVida(idade){
    let horas = diasDeVida(idade) * 24;
    console.log(`horas: ${horas}`)
    return horas
}

function minutosDeVida(idade){
    let minutos = horasDeVida(idade) * 60;
    console.log(`minutos: ${minutos}`);
    return minutos
}

function segundosDeVida(idade){
    let segundos = minutosDeVida(idade) * 60;
    console.log(`segundos: ${segundos}`)
    return segundos
}

function batidasPorVida(idade){
    return segundosDeVida(idade) * 1; //Uma batida por segundo
}

const userInput = require('prompt-sync')();

let idade = Number(userInput('Idade em anos: '));

console.log(`A quantidade de batidas equivale a ${batidasPorVida(idade)} batidas`)
