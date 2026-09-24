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
btnLength.addEventListener('click', eventCriarArray);

const btnBubbleSort = document.getElementById("btnBubbleSort");
const onBubbleSort = document.getElementById("onBubbleSort");

function bubbleSort(){
    const length = parseInt(inLength.value);
    let arrayOrdenado = [...array]; //3 pontos passa cada elemento do array para dentro do novo invés de referenciar
    let temp = 0;
    for(let e = 0;e<length;e++){
        for(let i = 0;i<(length-1);i++){
            if(arrayOrdenado[i]>arrayOrdenado[i+1]){
                temp = arrayOrdenado[i];
                arrayOrdenado[i] = arrayOrdenado[i+1];
                arrayOrdenado[i+1] = temp;
            }
        }
    }
    onBubbleSort.innerHTML = "Conjunto Ordenado = " + arrayOrdenado.join(", ");
}
btnBubbleSort.addEventListener('click', bubbleSort);

const inBusca = document.getElementById("inBusca");
const btnBuscaBinary = document.getElementById("btncBuscaBinary");

function binarySearch(array, position, numero){
    if(array[position]>numero){
        return(position+(position/2));
    }else if(array[position]<numero){
        return(position/2);
    }else{
        return(true);
    }
}

function binarySearchMontagem(array, numeroBusca){
    const length = parseInt(inLength.value);
    const originalArrayCopy = [...array];
    let tempPosition = length/2;
    let loop = true;
    let encontrado;
    while(loop){
        let busca = binarySearch(originalArrayCopy, tempPosition, numeroBusca);
        if(busca!=true){
            tempPosition = busca;
        }else{
            encontrado = tempPosition;
        }
    }
    console.log(encontrado);
}