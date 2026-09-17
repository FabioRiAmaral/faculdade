const userInput = require('prompt-sync')();
console.log(`Tipos de paciente\n1 - Bebê\n2 - Adolescente\n3 - Adulto\n4 - Idoso`);
const paciente = parseInt(userInput('Selecione o numero equivalente ao tipo de paciente: '));

function dosagem(tipo){
    const gota = 400/14;
    const cemMg = 100/gota;
    switch(tipo){
        case(1):
            return `${cemMg * 6} gotas, 600mg `;
            break;
        case (2):
            return `${cemMg * 16} gotas, 1600mg`;
            break;
        case (3):
            return `${cemMg * 46} gotas, 4600mg`;
            break;
        case (4):
            return `${cemMg * 24.5} gotas, 2450mg`;
            break;
        default:
            return `Paciente Invalido!`;
    }

}

console.log(dosagem(paciente));