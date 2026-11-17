import { Pilha } from "./pilha.js";

const inNum = document.getElementById('inNum');
const out = document.getElementById('out');

document.getElementById('btnVer').addEventListener('click', ()=>{
  const pilha = new Pilha();
  let num = parseInt(inNum.value);
  const original = num;
  while(num>0){
    pilha.stack(num%10);
    num = Math.floor(num/10);
  }
  let invertido = 0;
  let posicao = 1;
  while(!pilha.isEmpty()){
    invertido += pilha.getElement()*posicao;
    pilha.unstack();
    posicao *= 10;
  }
  if(original===invertido){
    out.innerText = `${original} é capicua!`;
  }else{
    out.innerText = `${original} invertido é ${invertido}, portanto não é capicua!`
  }
});