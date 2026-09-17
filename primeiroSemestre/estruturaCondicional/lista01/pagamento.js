const userInput = require('prompt-sync')();

const valorProduto = 1000;
console.log(`1 -- À vista, dinheiro ou cheque, 10% de desconto\n2 -- À vista, cartão de crédito, 5% de desconto`);
console.log(`3 -- Em 2 vezes, preço normal da etiqueta sem juros\n4 -- Em 3 vezes, preço normal da etiqueta + 10% de juros`)
const tipoPagamento = userInput('Selecione seu tipo de pagamento: ');

function valorTotal(preco, condicao){
    if (condicao == 'dinheiro'|| condicao == 'cheque'){
        return (preco - (preco * 0.1));
    }
    if (condicao == 'cartao'){
        return (preco - (preco * 0.05));
    }
    if (condicao == '2 vezes'){
        return preco;
    }
    if (condicao = '3 vezes'){
        return (preco * 1.1);
    }
}

console.log(valorTotal(valorProduto, tipoPagamento));