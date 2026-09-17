function Delta(a, b, c){
    let delta = b**2 - (4 * a * c);
    return delta
}

const coeficienteA = 4;
const coeficienteB = 10;
const coeficienteC = 6;

console.log(Delta(coeficienteA, coeficienteB, coeficienteC));
