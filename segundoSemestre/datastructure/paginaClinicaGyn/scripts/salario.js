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
        const salarioBruto = this.salarioBruto();
        if(salarioBruto<=1412){

        }else if(salarioBruto>1412&&salarioBruto<=2666.68){

        }else if(salarioBruto>2666.68&&salarioBruto<=4000.03){

        }
        return(salarioBruto*0.14);
    }

    descontoDependentes(){
        return(123*this.#numDependentes);
    }

    descontoIrpf(){
        const salarioBruto = this.salarioBruto();
        const desconto = this.descontoDependentes();
        let irpf;
        if(salarioBruto>2259.20&&salarioBruto<=2826.65){
            irpf = ((salarioBruto*0.075)-desconto);
        }else if(salarioBruto>2826.65&&salarioBruto<=3751.05){
            irpf = ((salarioBruto*0.15)-desconto);
        }else if(salarioBruto>3751.05&&salarioBruto<=2664.68){
            irpf = ((salarioBruto*0.225)-desconto);
        }else if(salarioBruto>2664.68){
            irpf = ((salarioBruto*0.275)-desconto);
        }
        if(irpf>0){
            return(irpf);
        }
        return(0);
    }

    gerarContraque(){
        const salarioLiquido = this.salarioBruto()-(this.descontoInss+this.descontoIrpf);
        const contracheque = `Matricula: ${this.#matricula}<br>Nome: ${this.#nome}<br>Número de dependentes: ${this.#numDependentes}<br>Salário base: ${this.#salarioBase}<br>Valor da gatificação: ${this.valorGratificacao()}<br>Salário Bruto: ${this.salarioBruto()}<br>Valor de desconto do INSS: ${this.descontoInss()}<br>Valor do desconto do IRPF: ${this.descontoIrpf()}<br>Valor total do desconto por dependentes: ${this.descontoDependentes()}<br>Sálario líquido: ${salarioLiquido}`;
        return(contracheque);
    }
}