import { Pilha } from "./pilha.js";

const inLength = document.getElementById("inLength");
const btnLength = document.getElementById("btnLength");
const onSaidaVetorAleatorio = document.getElementById("onSaidaVetorAleatorio");
const onOrdenado = document.getElementById("onOrdenado");

let array = [];

function criarArray(array, length){
    for(let e = 0;e<length;e++){
        array[e] = Math.floor(Math.random()*101);
    }
}

function ordenar(){
    let pilha = new Pilha();
    let length = 0;
    array.forEach(element => {
        length++;
        pilha.stack(element);
    });
    let arrayNovo = [];
    for(let e=0;e<length;e++){
        arrayNovo[e] = pilha.getElement();
        pilha.unstack();
    }
    onOrdenado.innerHTML = "Reverso = " + arrayNovo.join(", ");
}

function eventCriarArray(){
    array = [0];
    const length = parseInt(inLength.value);
    criarArray(array, length);
    onSaidaVetorAleatorio.innerHTML = "Conjunto = " + array.join(", ");
    ordenar();
}
btnLength.addEventListener('click', eventCriarArray);


