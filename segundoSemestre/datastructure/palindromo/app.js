import { Pilha } from "./pilha.js";

let pilha = new Pilha();
const palavra = document.getElementById('inWord').value;
let palavraReverse = '';

function comparar(){
    palavraReverse = '';
    for(let e=0;e<palavra.length;e++){
      if(palavra[e] != ' '){
        pilha.stack(palavra[e]);
      }
    }
    for(let e=0;e<palavra.length;e++){
        palavraReverse += pilha.getElement();
        pilha.unstack();
    }
    console.log(palavraReverse);
    if(palavraReverse == palavra){
      document.getElementById('onSaida').innerHTML = `A plavra ${palavra} é uma palindromo`;
    }else{
      document.getElementById('onSaida').innerHTML = `A plavra ${palavra} não é uma palindromo`;
    }
}

document.getElementById('btnWord').addEventListener('click', ()=>{
  comparar();
});