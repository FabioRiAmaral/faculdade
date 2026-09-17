const userInput = require('prompt-sync')();

function Dias(anos, meses, dias){
    const anosDias = anos * 365;
    const mesesDias = meses * 30;
    let totalDias = anosDias + mesesDias + dias;
    return totalDias
}

let anos = Number(userInput('Quantos anos?: '));
let meses = Number(userInput('Quantos meses?: '));
let dias = Number(userInput('Quantos dias?: '));

console.log(`O total de dias é de ${Dias(anos, meses, dias)} dias, que da ${Math.floor(Dias(anos, meses, dias)/365)} anos`);