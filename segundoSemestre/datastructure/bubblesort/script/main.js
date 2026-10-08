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

function bubbleSortLogic(){
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
    return(arrayOrdenado);
}

function bubbleSort(){
    let arrayOrdenado = bubbleSortLogic();
    onBubbleSort.innerHTML = "Conjunto Ordenado = " + arrayOrdenado.join(", ");
}
btnBubbleSort.addEventListener('click', bubbleSort);

const inBusca = parseInt((document.getElementById("inBusca")).value);
const btnBuscaBinary = document.getElementById("btnBuscaBinary");
const onSaidaBuscaBinary = document.getElementById("onSaidaBuscaBinary");

function binarySearch(arrayOrdenado, numero){
    let inicio = 0;
    let fim = (arrayOrdenado.length - 1);
    while(inicio<=fim){
        let meio = (inicio+((fim-inicio)/2));
        if(arrayOrdenado[meio] == numero){
            return(meio);
        }
        if(arrayOrdenado[meio]<numero){
            inicio = meio+1;
        }else{
            fim = meio-1;
        }
    }
    return(-1);
}

function binarySearchMontagem(){ //Falta retrabalho
    let numeroBusca = inBusca;
    const originalArrayCopy = [...bubbleSortLogic()];

    onSaidaBuscaBinary.innerHTML = `Encontrado dentro do Array!`;

}

btnBuscaBinary.addEventListener('click', binarySearchMontagem);