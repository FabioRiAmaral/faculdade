const userInput = require("prompt-sync")();

function criarEstrutura() {
  let primeiro = null;
  let quantidade = 0;
  function adicionar(nome, nota) {
    let novo = {
      nome: nome,
      nota: nota,
      proximo: null
    };
    if (primeiro === null) {
      primeiro = novo;
    } else {
      let atual = primeiro;
      while (atual.proximo !== null) {
        atual = atual.proximo;
      }
      atual.proximo = novo;
    }
    quantidade++;
  }
  function obter(indice) {
    let atual = primeiro;
    let contador = 0;
    while (contador < indice) {
      atual = atual.proximo;
      contador++;
    }
    return atual;
  }

  function tamanho() {
    return quantidade;
  }

  return {
    adicionar: adicionar,
    obter: obter,
    tamanho: tamanho
  };
}

let alunos = criarEstrutura();
let contador = 0;
let tamanhoTotal = 5;

for (let e = 0; e < tamanhoTotal; e++) { //cadastro

  let nome = userInput("Nome: ");
  let nota = parseFloat(userInput("Nota: "));

  alunos.adicionar(nome, nota);

  contador++;
}

let soma = 0;
contador = 0;

for (let e = 0; e < tamanhoTotal; e++) {//media

  let aluno = alunos.obter(contador);

  soma = soma + aluno.nota;

  contador++;
}

let media = soma / tamanhoTotal;
console.log(`Média: ${media}`);

contador = 0;

for (let e = 0; e < tamanhoTotal; e++) {

  let aluno = alunos.obter(contador);

  if (aluno.nota > media) {
    console.log(`${aluno.nome} ficou acima da média.`);
  }

  if (aluno.nota < media) {
    console.log(`${aluno.nome} ficou abaixo da média.`);
  }

  contador++;
}

let melhor = alunos.obter(0);
let pior = alunos.obter(0);

for (let e = 1; e < tamanhoTotal; e++) {

    let aluno = alunos.obter(e);

    if (aluno.nota > melhor.nota) {
        melhor = aluno;
    }

    if (aluno.nota < pior.nota) {
        pior = aluno;
    }
}

console.log(`Melhor nota: ${melhor.nome} - ${melhor.nota}`);
console.log(`Pior nota: ${pior.nome} - ${pior.nota}`);