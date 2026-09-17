const userInput = require('prompt-sync')();
console.log("Tipo 1 -- pulverização contra ervas daninhas, R$ 50,00 por acre\nTipo 2 -- pulverização contra gafanhotos, R$ 100,00 por acre");
console.log("Tipo 3 -- pulverização contra broca, R$ 150,00 por acre\nTipo 4 -- pulverização contra tudo acima, R$ 250,00 por acre")
const nome = userInput("Qual o nome do fanzendeiro?: ");
const tipo = parseInt(userInput("Qual o tipo de pulverização será utilizada?: "));
const acre = parseFloat(userInput("Qual a area, em acres, a ser pulverizada?: "));

function custoFinal(tipo, area) {
    let custoTotal;
    switch (tipo){
        case (1):
            custoTotal = 50 * area;
            break;
        case (2):
            custoTotal = 100 * area;
            break;
        case (3):   
            custoTotal = 150 * area;
            break;
        case (4):
            custoTotal = 250 * area;
            break;
    }
    if (area > 350){
        if (custoTotal == 10750){
            return (custoTotal * 0.95) - ((custoTotal - 10750) * 0.90);
        } else {
            return (custoTotal * 0.95);
        }
    }
    else{
        return (custoTotal);
    }
}

console.log(`O custo final para pulverização da propriedade de ${nome} é de R$${custoFinal(tipo, acre)}`)