const userInput = require("prompt-sync")();

function cons(cabeca, cauda) {
  return function (selecionador) {
    return selecionador(cabeca, cauda);
  };
}

function pegarCabeca(par) {
  function selecionador(h, t) {
    return h;
  }
  return par(selecionador);
}

function pegarCauda(par) {
  function selecionador(h, t) {
    return t;
  }
  return par(selecionador);
}

function estaVazia(lista) {
  return lista === null;
}

function pegarNota(aluno) {
  return pegarCabeca(pegarCauda(aluno));
}

function contarElementos(lista) {
  let contador = 0;
  let atual = lista;
  while (!estaVazia(atual)) {
    contador += 1;
    atual = pegarCauda(pegarCauda(atual));
  }
  return contador;
}

function calcularSoma(lista) {
  let soma = 0;
  let atual = lista;
  while (!estaVazia(atual)) {
    soma += pegarNota(atual);
    atual = pegarCauda(pegarCauda(atual));
  }
  return soma;
}

function calcularMedia(lista) {
  let soma = calcularSoma(lista);
  let quantidade = contarElementos(lista);
  return soma / quantidade;
}

function encontrarMaior(lista) {
  let maiorNome = pegarCabeca(lista);
  let maiorNota = pegarNota(lista);
  let atual = pegarCauda(pegarCauda(lista));
  while (!estaVazia(atual)) {
    if (pegarNota(atual) > maiorNota) {
      maiorNota = pegarNota(atual);
      maiorNome = pegarCabeca(atual);
    }
    atual = pegarCauda(pegarCauda(atual));
  }
  return cons(maiorNome, maiorNota);
}

function encontrarMenor(lista) {
  let menorNome = pegarCabeca(lista);
  let menorNota = pegarNota(lista);
  let atual = pegarCauda(pegarCauda(lista));
  while (!estaVazia(atual)) {
    if (pegarNota(atual) < menorNota) {
      menorNota = pegarNota(atual);
      menorNome = pegarCabeca(atual);
    }
    atual = pegarCauda(pegarCauda(atual));
  }
  return cons(menorNome, menorNota);
}

function listarEmOrdem(lista) {
  if (estaVazia(lista)) {
    return "";
  }
  let restante = listarEmOrdem(pegarCauda(pegarCauda(lista)));
  let item = pegarCabeca(lista) + " (" + pegarNota(lista) + ")";
  if (restante === "") {
    return item;
  } else {
    return restante + ", " + item;
  }
}

function compararComMedia(lista, media) {
  if (estaVazia(lista)) {
    return;
  }
  compararComMedia(pegarCauda(pegarCauda(lista)), media);
  let nome = pegarCabeca(lista);
  let nota = pegarNota(lista);
  if (nota > media) {
    console.log(`${nome} (${nota}) acima da media`);
  } else if (nota < media) {
    console.log(`${nome} (${nota}) abaixo da media`);
  } else {
    console.log(`${nome} (${nota}) na media`);
  }
}

let quantidade = parseFloat(userInput("Quantos alunos deseja inserir? "));

let notas = null;

for (let i = 0; i < quantidade; i = i + 1) {
  let nome = userInput("Digite o nome do aluno " + (i + 1) + ": ");
  let nota = parseFloat(userInput("Digite a nota de " + nome + ": "));
  notas = cons(nome, cons(nota, notas));
}

console.log("");
console.log("Alunos inseridos: " + listarEmOrdem(notas));
console.log(`Media: ${calcularMedia(notas)}`);
console.log(`Maior: ${pegarCabeca(encontrarMaior(notas))} (${pegarCauda(encontrarMaior(notas))})`);
console.log(`Menor: ${pegarCabeca(encontrarMenor(notas))} (${pegarCauda(encontrarMenor(notas))})`);
compararComMedia(notas, calcularMedia(notas));