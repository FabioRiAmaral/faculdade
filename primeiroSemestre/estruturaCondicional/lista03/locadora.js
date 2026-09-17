const userInput = require('prompt-sync')();
const valor = parseFloat(userInput("Insira o preço normal do filme alugado: "));
const dia = parseInt(userInput("Insira o dia da compra: "))
const categoria = userInput("Insira a categoria do filme alugado: ");

function valorFinal(preco, categoria, dia){
    let valorTotal;
    switch(dia){
        case(2):
        case(3):
        case(5):
            valorTotal = preco*0.6;
            break
        default:
            valorTotal = preco;
    }

    switch(categoria){
        case("lancamento"):
        case("lançamento"):
            valorTotal += (preco * 0.15);
            return valorTotal;
            break;
        default:
            return(valorTotal);
    }
}

console.log(`O preço final a ser pago pelo filme é de ${valorFinal(valor, categoria, dia).toFixed(2)}`)