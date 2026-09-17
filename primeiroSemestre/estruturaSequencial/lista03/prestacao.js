function Prestacao(valorPrestacao, taxa, atraso){
    let prestacao = valorPrestacao+(valorPrestacao*(taxa/100)*atraso);
    return prestacao;
}
const userInput = require("prompt-sync")();

let valorPrestacao = Number(userInput('Qual o valor da prestação?: '));
let taxa = Number(userInput('Qual o valor de juro pelo atraso?: '));
let atraso = Number(userInput('Quantos dias em atraso?: '));

console.log(`O valor atualizado da prestação é: R$${Prestacao(valorPrestacao, taxa, atraso)}`);