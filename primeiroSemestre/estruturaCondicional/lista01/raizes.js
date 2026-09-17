const userInput = require('prompt-sync')();

const a = parseInt(userInput('Coeficiente A: '));
const b = parseInt(userInput('Coeficiente B: '));
const c = parseInt(userInput('Coeficiete C: '));

// Tem que achar o discriminante (delta), se for negativo então é uma raiz imaginaria

function classificaRaizes(a, b, c){
    const delta = (b**2)-(4*a*c);
    const baskaraPositivo = (0-b + (delta ** 1/2)) / (2*a);
    const baskaraNegativo = (0-b - (delta ** 1/2)) / (2*a);
    if (delta < 0){
        console.log('Raíz Imaginária');
    }
    if (baskaraPositivo > 0 != baskaraNegativo > 0){
        console.log('Raíz Distintas');
    }
    if (baskaraPositivo == baskaraNegativo){
        console.log('Raíz Única');
    }
}

classificaRaizes(a,b,c)