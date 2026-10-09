import { Calculo } from "./calculadora.js"

const inFirstNum = document.getElementById("inFirstNum");
const inSecondNum = document.getElementById("inSecondNum");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnSubtrair = document.getElementById("btnSubtrair");
const btnMultiplicar = document.getElementById("btnMultiplicar");
const btnDividir = document.getElementById("btnDividir");
const btnPotencia = document.getElementById("btnPotencia");
const btnRaiz = document.getElementById("btnRaiz");
const outResultado = document.getElementById("outResultado");

function montagemSaida(a, b, tipo){
    const resultante = new Calculo(a, b, tipo)
    outResultado.innerHTML = `${resultante.operacao()}`;
}

function identificarBtn(event){
    const btnSelecionado = event.currentTarget; //identifica o ID do eventListener
    const tipoOperador = btnSelecionado.value;
    montagemSaida(parseInt(inFirstNum.value), parseInt(inSecondNum.value), tipoOperador);
}

btnAdicionar.addEventListener('click', identificarBtn);
btnSubtrair.addEventListener('click', identificarBtn);
btnMultiplicar.addEventListener('click', identificarBtn);
btnDividir.addEventListener('click', identificarBtn);
btnPotencia.addEventListener('click', identificarBtn);
btnRaiz.addEventListener('click', identificarBtn);