const userInput = require('prompt-sync')();

const idade = parseInt(userInput('Digite sua idade: '));

function classeEleitoral(idade){
    if (idade >= 18 || idade <= 65){
        return 'Eleitor Obrigatório!';
    }
    else if (idade < 16){
        return 'Não-eleitor!';
    }
    else {
        return 'Eleitor facultativo!';
    }
}

console.log(classeEleitoral(idade));