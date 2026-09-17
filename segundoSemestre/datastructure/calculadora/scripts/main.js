const inFirstNum = document.getElementById("inFirstNum");
const inSecondNum = document.getElementById("inSecondNum");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnSubtrair = document.getElementById("btnSubtrair");
const btnMultiplicar = document.getElementById("btncMultiplicar");
const btnDividir = document.getElementById("btnDividir");
const btnPotencia = document.getElementById("btnPotencia");
const btnRaiz = document.getElementById("btnRaiz");
const outResultado = document.getElementById("outResultado");

const firstValor = Number(inFirstNum.value);
const secondValor = Number(inSecondNum.value);


function adicionar(){
    console.log(firstValor, secondValor);
    outResultado.innerHTML = `${(firstValor+secondValor)}`;
}

function subtrair(){
    outResultado.innerHTML = `${(firstValor-secondValor)}`;
}

function multiplicar(){
    outResultado.innerHTML = `${(firstValor*secondValor)}`;
}
function dividir(){
    outResultado.innerHTML = `${(firstValor/secondValor)}`;
}

function potencia(){
    outResultado.innerHTML = `${(Math.pow(firstValor, secondValor))}`;
}

function raiz(){
    outResultado.innerHTML = `${(Math.pow(firstValor, (1/secondValor)))}`;
}

btnAdicionar.addEventListener("onclick", adicionar());
btnSubtrair.addEventListener("onclick", subtrair());
btnMultiplicar.addEventListener("onclick", multiplicar());
btnDividir.addEventListener("onclick", dividir());
btnRaiz.addEventListener("onclick", raiz());
btnPotencia.addEventListener("onclick", potencia());