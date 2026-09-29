class Funcionario{
    #matricula
    #nome
    #numDependentes
    #salarioBase
    #producao
    constructor(matricula, nome, numDependentes, salarioBase, producao){
        this.#matricula = matricula;
        this.#nome = nome;
        this.#numDependentes = numDependentes;
        this.#salarioBase = salarioBase;
        this.#producao = producao;
    }
    set matricula(newMatricula){this.#matricula = newMatricula;}
    set nome(newNome){this.#nome = newNome;}
    set numDependentes(newNumDependentes){this.#numDependentes = newNumDependentes;}
    set salarioBase(newSalarioBase){this.#salarioBase = newSalarioBase;}
    set producao(newProducao){this.#producao = newProducao;}
    get matricula(){return(this.#matricula);}
    get nome(){return(this.#nome);}
    get numDependentes(){return(this.#numDependentes);}
    get salarioBase(){return(this.#salarioBase);}
    get producao(){return(this.#producao);}

    valorGratificacao(){
        const producao = this.#producao;
        if(producao<=1000){
            return(500);
        }else if(producao>1000&&producao<=2000){
            return(1250);
        }else if(producao>2000){
            return(2250);
        }
    }

    salarioBruto(){
        const bonificacao = this.valorGratificacao();
        return(this.#salarioBase+bonificacao);
    }

    descontoInss(){
        return();
    }
}