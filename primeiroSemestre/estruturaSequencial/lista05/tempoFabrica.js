function Minutos(segundos){  
    return Math.floor(segundos / 60);
}

function Horas(segundos){
    return Math.floor(Minutos(segundos) / 60);
}

function MinutosRestante(segundos){ // Minutos restantes caso seja descontado as horas já usadas
    return Minutos(segundos) - (Horas(segundos) * 60);
}

function SegundosRestante(segundos){ // Segudno restante com o desconto de horas e minutos que já vão ser mostradas
    return (segundos - ((Horas(segundos) * 60) * 60)) - (MinutosRestante(segundos) * 60);
}

const userInput = require('prompt-sync')();

let segundos = Number(userInput('Qual a duração do evento em segundos?: '));

console.log(`O evento durou um total de ${Horas(segundos)} horas, ${MinutosRestante(segundos)} minutos e ${SegundosRestante(segundos)} segundos`);