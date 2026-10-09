export class Calculo{
    #numEsquerda
    #numDireita
    #operador
    constructor(numEsquerda, numDireita, operador){
        this.#numEsquerda = numEsquerda
        this.#numDireita = numDireita
        this.#operador = operador
    }
    set newNumEsquerda(newNum){this.#numEsquerda=newNum;}
    set newNumDireita(newNum){this.#numDireita=newNum;}
    set newOperador(newOp){this.#operador=newOp;}

    adicao(a, b){
        return(a+b);
    }
    subtracao(a, b){
        return(a-b);
    }
    multiplicacao(a, b){
        return(a*b);
    }
    divisao(a, b){
        return(a/b);
    }
    potencia(a, b){
        return(Math.pow(a, b));
    }
    radiciacao(a, b){
        return(Math.pow(a, (1/b)));
    }

    operacao(){
        const a = this.#numEsquerda;
        const b = this.#numDireita;
        const operador = this.#operador;
        console.log(a, b);
        switch(operador){
            case("+"):
                return(this.adicao(a, b));
            case("-"):
                return(this.subtracao(a, b));
            case("*"):
                return(this.multiplicacao(a, b));
            case("/"):
                return(this.divisao(a, b));
            case("**"):
                return(this.potencia(a, b));
            case("^/"):
                return(this.radiciacao(a, b));
        }
    }
}