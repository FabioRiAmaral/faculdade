import { Paciente } from "./paciente.js"

const allForm = document.getElementById("allForm");
const inConsultar = document.getElementById("inConsultar");
const outImc = document.getElementById("outImc");
const outFaixaRisco = document.getElementById("outFaixaRisco");
const outPesoIdeal = document.getElementById("outPesoIdeal");

function out(iD, outVariable){
  iD.innerHTML = `${outVariable}`;
}

function dadosSaude(nome, peso, altura, sexo){
  const saudePaciente = new Paciente(nome, peso, altura, sexo);
  const imc = (saudePaciente.calcularImc()).toFixed(2);
  const faixaDeRisco = saudePaciente.faixaDeRisco();
  const pesoIdeal = (saudePaciente.pesoIdeal()).toFixed(2);
  out(outImc, imc);
  out(outFaixaRisco, faixaDeRisco);
  out(outPesoIdeal, pesoIdeal);
}

function saidaSaude(event){
  event.preventDefault(); 
  try{ 
    const dados = Object.fromEntries(new FormData(allForm));
    dadosSaude(dados.nome, parseFloat(dados.peso), parseFloat(dados.altura), dados.sexo);
  }catch(error){
    console.log("Algum dado é invalido!");
  }
}

allForm.addEventListener('submit', saidaSaude);