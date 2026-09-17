const userInput = require('prompt-sync')();

let a11 = Number(userInput('a11: '));
let a12 = Number(userInput('a12: '));
let a21 = Number(userInput('a21: '));
let a22 = Number(userInput('a22: '));

function determinante(a11, a12, a21, a22){
  return ((a11 * a22) - (a21 * a12))
}

console.log(`Determinante da matriz equivale a ${determinante(a11, a12, a21, a22)}`)