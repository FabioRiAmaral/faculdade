function soma(x, y){
    return x + y;
}

function subtracao(x, y){
    return x - y;
}

function multiplicacao(x, y){
    return x * y;
}

function divisao(x, y){
    return x / y;
}

function sobra(x, y){
    return x % y;
}

function potenciacao(x, y){
    return x ** y;
}

function raizQuadrada(x){
    return x ** (1/2);
}

function raizCubica(x){
    return x **(1/3);
}
const a = 4;
const b = 8;

let resultado1 = soma(a, b);
let resultado2 = subtracao(a, b);
let resultado3 = multiplicacao(a, b);
let resultado4 = divisao(a, b);
let resultado5 = sobra(a, b);
let resultado6 = potenciacao(a, b);
let resultado7 = raizQuadrada(a);
let resultado8 = b**(1/3);

console.log(`Resultados exercicio 1: ${resultado1}, ${resultado2}, ${resultado3}, ${resultado4}, ${resultado5}, ${resultado6}, ${resultado7}, ${resultado8}`)