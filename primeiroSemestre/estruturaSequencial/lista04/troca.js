function TrocarEntre(a, b){
    let variavelAntes = a;
    a = b;
    b = variavelAntes;
    console.log(`Valor de a é de ${a} e o valor de b é de ${variavelAntes}`);
}

const userInput = require('prompt-sync')();

let a = 5;
let b = 6;
TrocarEntre(a, b);

