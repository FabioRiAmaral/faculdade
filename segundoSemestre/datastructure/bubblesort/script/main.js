const inLength = document.getElementById("inLength");
const btnLength = document.getElementById("btnLength");
const onSaidaVetorAleatorio = document.getElementById("onSaidaVetorAleatorio");

let array = [];

function criarArray(array, length){
    for(let e = 0;e<length;e++){
        array[e] = Math.floor(Math.random()*1001);
    }
}

function eventCriarArray(){
    array = [0];
    const length = parseInt(inLength.value);
    criarArray(array, length);
    onSaidaVetorAleatorio.innerHTML = "Conjunto = " + array.join(", ");
}
btnLength.addEventListener('onclick', eventCriarArray);

const btnBubbleSort = document.getElementById("btnBubbleSort");
const onBubbleSort = document.getElementById("onBubbleSort");

function bubbleSort(){
    const length = parseInt(inLength.value);
    let arrayOrdenado = [];
    for(let e = 0;e<(array.length);e++){
        arrayOrdenado[e] = array[e];
    }
    let temp = 0;
    for(let e = 0;e<length;e++){
        for(let i = 0;i<(length-1);i++){
            if(arrayOrdenado[i]>arrayOrdenado[i+1]){
                temp = arrayOrdenado[i+1];
                arrayOrdenado[i+1] = array[i];
                arrayOrdenado[i] = temp;
            }
        }
    }
    console.log(arrayOrdenado);
    onBubbleSort.innerHTML = "Conjunto = " + arrayOrdenado.join(", ");
}
btnBubbleSort.addEventListener('onclick', bubbleSort);