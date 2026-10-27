import { Pilha } from './pilha.js';

function verificarPalindromo(palavra) {
    if (typeof palavra !== 'string') {
        throw new TypeError("A entrada precisa ser uma palavra.");
    }

    const textoLimpo = texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "");  

    const pilha = new Pilha();

    for (let i = 0; i < textoLimpo.length; i++) {
        pilha.push(textoLimpo[i]);
    }

    let textoInvertido = "";
    while (!pilha.isEmpty()) {
        textoInvertido += pilha.pop();
    }

    return textoLimpo === textoInvertido;
}