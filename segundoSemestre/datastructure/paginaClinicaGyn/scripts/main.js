class Paciente{
    #nome
    #peso
    #altura
    #sexo
    constructor(nome, peso, altura, sexo){
        this.#nome = nome;
        this.#peso = peso;
        this.#altura = altura;
        this.#sexo = sexo;
    }
    set nome(newName){this.#nome = newName;}
    set peso(newPeso){this.#peso = newPeso;}
    set altura(newAltura){this.#altura = newAltura;}
    set sexo(newSexo){this.#sexo = newSexo;}
    get nome(){return(this.#nome);}
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
    if(this.#sexo === 'm'){
      return((72.7*this.#altura)-58);
    }else if(this.#sexo === 'f'){
      return((62.1*this.#altura)-44.7);
    }
    return(0);
  }
}

// const inNome = document.getElementById("inNome");
// const inPeso = document.getElementById("inPeso");
// const inAltura = document.getElementById("inAltura");
// const inSexo = document.getElementById("inSexo");

const allForm = document.getElementById("allForm");
const inConsultar = document.getElementById("inConsultar");
const outImc = document.getElementById("outImc");
const outFaixaRisco = document.getElementById("outFaixaRisco");
const outPesoIdeal = document.getElementById("outPesoIdeal");

function out(iD, outVariable){
  iD.innerHTML = `${outVariable}`;
}

function dadosSaude(peso, altura, sexo){
  const saudePaciente = new Paciente(peso, altura, sexo);
  const imc = (saudePaciente.calcularImc()).toFixed(2);
  const faixaDeRisco = saudePaciente.faixaDeRisco();
  const pesoIdeal = (saudePaciente.pesoIdeal()).toFixed(2);
  out(outImc, imc);
  out(outFaixaRisco, faixaDeRisco);
  out(outPesoIdeal, pesoIdeal);
}

function saidaSaude(event){
  event.preventDefault(); 
  // let peso = parseFloat(inPeso.value);
  // let altura = parseFloat(inAltura.value);
  // let sexo = inSexo.value;
  try{ 
    const dados = Object.fromEntries(new FormData(allForm));//Pega todos os campos do form, os canois entram em uma classe que recebe "name" como seu parametro, sendo necessario get para receber
    dadosSaude(parseInt(dados.peso), parseFloat(dados.altura), dados.sexo);
    // dadosSaude(peso, altura, sexo);
  }catch(error){
    console.log("Algum dado é invalido!");
  }
}

allForm.addEventListener('submit', saidaSaude);