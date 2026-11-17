import { Pilha } from "./pilha.js";

let pilha = new Pilha();
const inWord = document.getElementById('inWord');
const saida = document.getElementById('onSaida');

document.getElementById('btnWord').addEventListener('click', ()=>{
  let palavra = inWord.value;
  const minuscula = palavra.toLowerCase();
  let limpa = '';
  for (let i = 0; i < minuscula.length; i++) {
    if (minuscula[i] !== ' ') {
      limpa += minuscula[i];
      pilha.stack(minuscula[i]);
    }
  }
  let reverso = '';
  while (!pilha.isEmpty()) {
    reverso += pilha.getElement();
    pilha.unstack();
  }
  if (reverso === limpa) {
    saida.innerHTML = `"${palavra}" é um palíndromo!`;
  } else {
    saida.innerHTML = `"${palavra}" não é um palíndromo!`;
  }
});