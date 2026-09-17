const userInput = require('prompt-sync')();

let diasSemAcidente = Number(userInput('Quantos dias sem acidentes?: '));

function anosRestantes(dias){
    const anos = dias / 365;
    return Math.floor(anos);
}

function mesesRestantes(dias){
    const diasRestantes = anosRestantes(dias) * 365;
    const meses = (dias - diasRestantes) / 30;
    return Math.floor(meses);
}

function diasRestantes(dias){
    const AnosEmDiasRestante = anosRestantes(dias) * 365;
    const mesesEmDiasRestante = mesesRestantes(dias) * 30;
    const diasRestantes = (AnosEmDiasRestante + mesesEmDiasRestante) - dias;
    return diasRestantes;
}

console.log(anosRestantes(diasSemAcidente) + 'anos');
console.log(mesesRestantes(diasSemAcidente) + 'meses');
console.log(diasRestantes(diasSemAcidente) + 'dias');