export class Calculadora{
    #numEsquerda
    #numDireita
    #operacao
    constructor(numEsquerda, numDireita, operacao){
        this.#numEsquerda = numEsquerda
        this.#numDireita = numDireita
        this.#operacao = operacao
    }
    set newNumEsquerda(newNum){this.#numEsquerda=newNum;}
    set newNumDireita(newNum){this.#numDireita=newNum;}
    set newOperaor(newOp){this.#operacao=newOp;}

    adicao(){
        return(this.#numEsquerda+this.#numDireita);
    }
    subtracao(){
        return(this.#numEsquerda-this.#numDireita);
    }
    multiplicacao(){
        return(this.#numEsquerda*this.#numDireita);
    }
    divisao(){
        return(this.#numEsquerda/this.#numDireita);
    }
    potencia(){
        return(Math.pow(this.#numEsquerda, this.#numDireita));
    }
    radiciacao(){
        return(Math.pow(this.#numEsquerda, (1/this.#numDireita)));
    }
}