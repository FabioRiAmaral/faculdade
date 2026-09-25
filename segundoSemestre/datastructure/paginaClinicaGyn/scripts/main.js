class Paciente{
    #peso
    #altura
    #sexo
    constructor(peso, altura, sexo){
        this.#peso = peso;
        this.#altura = altura;
        this.#sexo = sexo;
    }
    set peso(newName){this.#peso = newName;}
    set altura(newName){this.#altura = newName;}
    set sexo(newName){this.#sexo = newName;}
    get peso(){return(this.#peso);}
    get altura(){return(this.#altura);}
    get sexo(){return(this.#sexo);}

  calcularImc(){
    return(this.#peso/(this.#altura*this.#altura));
  }

  faixaDeRisco(){
    const imc = this.calcularImc();
    if(imc<20){
      return("Abaixo do peso ideal");
    }else if(imc>=20&&imc<=25){
      return("Peso normal");
    }else if(imc>25&&imc<=30){
      return("Excesso de peso");
    }else if(imc>30&&imc<=35){
      return("Obesidade");
    }else if(imc>35){
      return("Obesidade mórbida");
    }
  }

  pesoIdeal(){
    if(this.#sexo == 'm'){
      return((72.7*this.#altura)-58);
    }else if(this.#sexo == 'f'){
      return((62.1*this.#altura)-44.7);
    }
  }
}

// inNome = document.getElementById("inNome");
// inPeso = parseFloat(document.getElementById("inPeso").value);
// inAltura = parseFloat(document.getElementById("inAltura").value);
// inSexo = document.getElementById("inSexo");

allForm = document.getElementById("allForm");
inConsultar = document.getElementById("inConsultar");
outImc = document.getElementById("outImc");
outFaixaRisco = document.getElementById("outFaixaRisco");
outPesoIdeal = document.getElementById("outPesoIdeal");

function dadosSaude(peso, altura, sexo){
    const saudePaciente = new Paciente(peso, altura, sexo);
    const imc = (saudePaciente.calcularImc()).toFixed(2);
    const faixaDeRisco = saudePaciente.faixaDeRisco();
    const pesoIdeal = saudePaciente.pesoIdeal();
    outImc.innerHTML = `${imc}`;
    outFaixaRisco = faixaDeRisco;
    outPesoIdeal = `${pesoIdeal}`;
}

function saidaSaude(){
    event.preventDefault();
    const dados = Object.fromEntries(new FormData(allForm));
    dadosSaude(dados.peso, dados.altura, dados.sexo);
}

inConsultar.addEventListener('submit', saidaSaude);