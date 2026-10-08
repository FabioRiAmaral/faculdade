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

const inBusca = (document.getElementById("inBusca"));
const btnBuscaBinary = document.getElementById("btnBuscaBinary");
const onSaidaBuscaBinary = document.getElementById("onSaidaBuscaBinary");

function binarySearch(arrayOrdenado, inicio, fim, n){
    if(fim>=inicio){
        let meio = inicio+Math.floor((fim-inicio)/2);
        if(arrayOrdenado[meio]===n){
            return(meio);
        }
        if(arrayOrdenado[meio]>n){
            return(binarySearch(arrayOrdenado, inicio, meio-1, n)); 
        }
        if(arrayOrdenado[meio]<n){
            return(binarySearch(arrayOrdenado, meio+1, fim, n));
        }
    }
    return(-1);
}

function binarySearchMontagem(){ //Falta retrabalho
    let numeroBusca = parseInt(inBusca.value);
    const originalArrayCopy = [...bubbleSortLogic()];
    let procura = binarySearch(originalArrayCopy, 0, (originalArrayCopy.length - 1),numeroBusca);
    if(procura===-1){
        onSaidaBuscaBinary.innerHTML = `Não encontrado dentro do Array!`;
    }else{
        onSaidaBuscaBinary.innerHTML = `Encontrado dentro do Array na posição ${procura}!`;
    }
}

btnBuscaBinary.addEventListener('click', binarySearchMontagem);