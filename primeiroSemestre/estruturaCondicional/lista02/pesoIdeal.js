const userInput = require('prompt-sync')();

const altura = parseFloat(userInput('Altura: '));
const sexo = userInput('Sexo: ');

function pesoIdeal(altura, sexo){
    console.log(`${altura}\n${sexo}`);
    if (sexo == "masculino"){
        return (72.7 * altura) - 58;
    }
    else if (sexo == "feminino"){
        return (62.1 * altura) - 44.7;
    }
}

console.log(`Seu peso ideal é de ${pesoIdeal(altura, sexo)}`);