export class Paciente{
  #nomeCompleto; //# para privado
  #peso;
  #altura;
  #sexo;
  //metodos
  constructor(nomeCompleto, peso, altura, sexo){//atributos
    this.#nomeCompleto = nomeCompleto;
    this.#peso = peso;
    this.#altura = altura;
    this.#sexo = sexo;
  }
  set nome(newName){this.#nomeCompleto = newName;}
  set peso(newPeso){this.#peso = newPeso;}
  set altura(newAltura){this.#altura = newAltura;}
  set sexo(newSexo){this.#sexo = newSexo;}
  get nome(){return(this.#nomeCompleto);}
  get peso(){return(this.#peso);}
  get altura(){return(this.#altura);}
  get sexo(){return(this.#sexo);}

  calcularImc(){
    return(this.#peso/(this.#altura*this.#altura));
  }

  faixaRisco(){
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
    if(this.#sexo == 'Masculino'){
      return((72.7*this.#altura)-58);
    }else if(this.#sexo == 'Feminino'){
      return((62.1*this.#altura)-44.7);
    }
  }
}