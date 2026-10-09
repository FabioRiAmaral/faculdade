import { Calculadora } from "./calculadora.js"

const inFirstNum = parseInt(document.getElementById("inFirstNum").value);
const inSecondNum = parseInt(document.getElementById("inSecondNum").value);
const btnAdicionar = document.getElementById("btnAdicionar");
const btnSubtrair = document.getElementById("btnSubtrair");
const btnMultiplicar = document.getElementById("btnMultiplicar");
const btnDividir = document.getElementById("btnDividir");
const btnPotencia = document.getElementById("btnPotencia");
const btnRaiz = document.getElementById("btnRaiz");
const outResultado = document.getElementById("outResultado");

function montagemSaida(btn){
    outResultado.innerHTML = btn.value;
}

function identificarBtn(event){
    const elemento = event.currentTarget;
    montagemSaida(elemento);
}

btnAdicionar.addEventListener('click', identificarBtn);
btnSubtrair.addEventListener('click', identificarBtn);
btnMultiplicar.addEventListener('click', identificarBtn);
btnDividir.addEventListener('click', identificarBtn);
btnPotencia.addEventListener('click', identificarBtn);
btnRaiz.addEventListener('click', identificarBtn);