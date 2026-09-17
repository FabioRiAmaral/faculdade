const lengthConjunto = document.getElementById("inLength");
const btnConjunto = document.getElementById("btn");
const saidaData = document.getElementById("onSaida");
const numero = document.getElementById("inSearch");
const btnBusca = document.getElementById("btnBusca");
const saidaBusca = document.getElementById("saidaBusca");

const conjunto = [];

function criarConjunto(array, length){
    for(let e = 0;e<length;e++){
        array[e] = Math.floor(Math.random()*1001);
    }
}

function eventoCriarConjunto(){
    const length = parseInt(lengthConjunto.value);
    criarConjunto(conjunto, length);
    const saida = "Conjunto = |" + conjunto.join(" | ");
    saidaData.innerHTML = saida;
}
btnConjunto.addEventListener('onclick', eventoCriarConjunto());

function searchOnArray(){
    const length = parseInt(lengthConjunto.value);
    const n = parseInt(numero.value)
    for(let e=0;e<length;e++){
        if(n==conjunto[e]){
            saidaBusca.innerHTML = `O número ${n} está na posição ${e+1}!`;
            return(0);
        }
    }
    saidaBusca.innerHTML = `O número não está dentro do array!`;
}

btnBusca.addEventListener('onclick', searchOnArray());

const saidaOrdenada = document.getElementById(saidaOrdenada);
const btnOrdenar = document.getElementById(btnOrdenar);

function arrayOrdenado(){
    const length = parseInt(lengthConjunto.value);
    let conjuntoOrdenado = [];
    for(let e=0;e<length;e++){  return(0);
        for(let i=0;i<length;i++){
            if(conjunto[i]<conjunto[e]){
                conjuntoOrdenado[e] = conjunto[i];
            }
        }
    }
    console.log(conjuntoOrdenado);
    saidaOrdenada.innerHTML = "Conjunto = |" + conjuntoOrdenado.join(" | ");
}

btnOrdenar.addEventListener('onclick', arrayOrdenado());