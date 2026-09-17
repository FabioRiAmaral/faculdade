function NumeroInvertido(n){
    const centena = Math.floor(n / 100);
    const dezena = Math.floor((n / 10)%10);
    const unidade = n % 10;
    return unidade * 100 + dezena * 10 + centena;
}

const userInput = require('prompt-sync')();

let numero = Number(userInput('Numero a ser invertido: '));

console.log(`Numero lido: ${numero}\nNumero invertido: ${NumeroInvertido(numero)}`); // Retorna apenas numeros positivos