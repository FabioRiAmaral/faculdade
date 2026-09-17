function NumeroInvertido(n){
    const centena = Math.floor(n / 100);
    const dezena = Math.floor((n / 10)%10);
    const unidade = n % 10;
    return unidade * 100 + dezena * 10 + centena;
}

function Soma(numero){
    const soma = numero + NumeroInvertido(numero)
    return soma;
}

function DigitoVerificador(numero){
    const centena = Math.floor(Soma(numero)/100);
    const dezena = Math.floor((Soma(numero)/10)%10);
    const unidade = Soma(numero)%10;

    const somaPri = centena * 1;
    const somaSeg = dezena * 2;
    const somaTer = unidade * 3;

    const resultante = somaPri + somaSeg + somaTer;
    const digitoVerificador = resultante%10;
    return digitoVerificador;
}

const userInput = require('prompt-sync')();

let nunConta = Number(userInput('Numero da conta: '));

console.log(`O numero da conta com o digito verificador é ${nunConta}-${DigitoVerificador(nunConta)}`)