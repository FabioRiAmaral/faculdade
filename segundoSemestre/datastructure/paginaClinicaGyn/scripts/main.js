import { Paciente } from "./paciente.js"

const allForm = document.getElementById("allForm");
const outImc = document.getElementById("outImc");
const outFaixaRisco = document.getElementById("outFaixaRisco");
const outPesoIdeal = document.getElementById("outPesoIdeal");

function renderizarSaida(elemento, outString){
  elemento.innerHTML = `${outString}`;
}

function dadosSaude(nome, peso, altura, sexo){
  if (!nome || isNaN(peso) || isNaN(altura) || !sexo) {
    throw new Error("Por favor, preencha todos os campos corretamente com valores válidos.");
  }
  const saudePaciente = new Paciente(nome, peso, altura, sexo);
  const imc = (saudePaciente.calcularImc()).toFixed(2);
  const faixaDeRisco = saudePaciente.faixaDeRisco();
  const pesoIdeal = (saudePaciente.pesoIdeal()).toFixed(2);
  renderizarSaida(outImc, imc);
  renderizarSaida(outFaixaRisco, faixaDeRisco);
  renderizarSaida(outPesoIdeal, pesoIdeal);
}

function saidaSaude(event){
  event.preventDefault(); 
  try{ 
    const dados = Object.fromEntries(new FormData(allForm));
    dadosSaude(dados.nome, parseFloat(dados.peso), parseFloat(dados.altura), dados.sexo);
  }catch(error){
    console.error("Erro no processamento:", error.message);
    alert(error.message);
  }
}

allForm.addEventListener('submit', saidaSaude);