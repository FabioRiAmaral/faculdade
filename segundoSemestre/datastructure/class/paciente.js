export class Paciente{
  constructor(nomeCompleto, peso, altura, sexo){
    this.nomeCompleto = nomeCompleto;
    this.peso = peso;
    this.altura = altura;
    this.sexo = sexo;
  }

  calcularImc(){
    return(this.peso/(this.altura*this.altura));
  }
}