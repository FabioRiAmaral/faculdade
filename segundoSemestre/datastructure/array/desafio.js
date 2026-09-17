const userInput = require("prompt-sync")();

let soma = 0;
let maior = 0;
let menor = 10;
let totalAlunos = userInput("Quantidade de alunos: ")

for (let i = 1; i <= totalAlunos; i++) {
    let nome = userInput(`Digite o nome do aluno ${i}: `);
    let nota = parseFloat(userInput(`Digite a nota de ${nome}: `));
    soma = soma + nota;
    if (nota > maior) {
        maior = nota;
    }
    if (nota < menor) {
        menor = nota;
    }
}

let media = soma / totalAlunos;

console.log(`Média: ${media}`);
console.log(`Maior nota: ${maior}`);
console.log(`Menor nota: ${menor}`);

for (let i = 1; i <= totalAlunos; i++) {
    let nome = userInput(`Digite o nome do aluno ${i} novamente: `);
    let nota = parseFloat(userInput(`Digite a nota de ${nome} novamente: `));

    console.log(`Aluno: ${nome}`);
    console.log(`Nota: ${nota}`);

    if (nota >= media) {
        console.log(`${nome} ficou acima da média.`);
    } else {
        console.log(`${nome} ficou abaixo da média.`);
    }
}