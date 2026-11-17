import { Fila } from './fila.js';

const fila = new Fila();

const inNome = document.getElementById('inNome');
const outPrimeiro = document.getElementById('outPrimeiro');
const outMensagem = document.getElementById('outMensagem');
const outFila = document.getElementById('outFila');

function mostrarFila() {
  outFila.innerText = fila.obterDadosFila();

  if (fila.estaVazia()) {
    outPrimeiro.innerText = 'Não tem pessoa';
  }
}

document.getElementById('btnIncluir').addEventListener('click', () => {
  const nome = inNome.value;

  if (nome === '') {
    outMensagem.innerText = 'Digite o nome da pessoa.';
    return;
  }

  fila.enfileirar(nome);
  outMensagem.innerText = `${nome} entrou na fila.`;
  inNome.value = '';
  mostrarFila();
});

document.getElementById('btnRetirar').addEventListener('click', () => {
  if (fila.estaVazia()) {
    outMensagem.innerText = 'Não há ninguém para retirar.';
    return;
  }

  const saiu = fila.acessar();
  fila.desenfileirar();
  outMensagem.innerText = `${saiu} saiu da fila.`;

  // fila vazia: reinicia os índices
  if (fila.estaVazia()) {
    fila.limpar();
  }
  mostrarFila();
});

document.getElementById('btnAcessar').addEventListener('click', () => {
  if (fila.estaVazia()) {
    outPrimeiro.innerText = 'Não tem pessoa';
    return;
  }

  outPrimeiro.innerText = fila.acessar();
});

mostrarFila();