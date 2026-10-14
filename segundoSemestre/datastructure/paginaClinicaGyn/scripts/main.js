import { Funcionario } from "./funcionario.js";
import { Paciente } from "./paciente.js"

const allForm = document.getElementById("allForm");
const inConsultar = document.getElementById("inConsultar");
const outName = document.getElementById("outName");
const outImc = document.getElementById("outImc");
const outFaixaRisco = document.getElementById("outFaixaRisco");
const outPesoIdeal = document.getElementById("outPesoIdeal");

function dadosSaude(nome, peso, altura, sexo){
  if (!nome || isNaN(peso) || isNaN(altura) || !sexo) {
    throw new Error("Por favor, preencha todos os campos corretamente com valores válidos.");
  }
  const saudePaciente = new Paciente(nome, peso, altura, sexo);
  const imc = (saudePaciente.calcularImc()).toFixed(2);
  const faixaDeRisco = saudePaciente.faixaDeRisco();
  const pesoIdeal = (saudePaciente.pesoIdeal()).toFixed(2);
  outName.innerHTML = saudePaciente.nome;
  outImc.innerHTML = imc;
  outFaixaRisco.innerHTML = faixaDeRisco;
  outPesoIdeal.innerHTML = pesoIdeal;
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

const outMatricula = document.getElementById("outMatricula");
const tableSalarioBase = document.getElementById("tableSalarioBase");
const outSalarioBase = document.getElementById("outSalarioBase");
const tableGratificacao = document.getElementById("tableGratificacao");
const outGratificacao = document.getElementById("outGratificacao");
const tableSalarioBruto = document.getElementById("tableSalarioBruto");
const outSalarioBruto = document.getElementById("outSalarioBruto");
const tableInss = document.getElementById("tableInss");
const outInss = document.getElementById("outInss");
const tableIrpf = document.getElementById("tableIrpf");
const outIrpf = document.getElementById("outIrpf");
const outSalarioLiquido = document.getElementById("outSalarioLiquido");

function contracheque(matricula, nome, dependentes, salarioBase, producao){
  const contrachequeFinal = new Funcionario(matricula, nome, dependentes, salarioBase, producao);
  const gratificacao = contrachequeFinal.valorGratificacao();
  const salarioBruto = contrachequeFinal.salarioBruto();
  const inss = contrachequeFinal.descontoInss();
  const irpf = contrachequeFinal.descontoIrpf();
  const salarioLiquido = contrachequeFinal.salarioLiquido();
  outMatricula.innerHTML = `${contrachequeFinal.nome} #${contrachequeFinal.matricula}`;
  tableSalarioBase.innerHTML = `Salario Base`;
  outSalarioBase.innerHTML = `R$ ${contrachequeFinal.salarioBase.toFixed(2)}`
  tableGratificacao.innerHTML =  `Gratificação`;
  outGratificacao.innerHTML = `R$ ${gratificacao.toFixed(2)}`;
  tableSalarioBruto.innerHTML = `Salário Bruto`;
  outSalarioBruto.innerHTML = `R$ ${salarioBruto.toFixed(2)}`;
  tableInss.innerHTML = `Desconto do INSS`;
  outInss.innerHTML = `R$ ${inss.toFixed(2)}`;
  tableIrpf.innerHTML = `Desconto do IRPF`;
  outIrpf.innerHTML = `R$ ${irpf.toFixed(2)}`;
  outSalarioLiquido.innerHTML = `Salario Liquido de R$${salarioLiquido.toFixed(2)}`;
}

function saidaSalario(event){
  event.preventDefault();
  try{
    const dadosSalario = Object.fromEntries(new FormData(document.getElementById("formSalario")));
    contracheque(dadosSalario.matricula, dadosSalario.nome, parseInt(dadosSalario.dependentes), parseInt(dadosSalario.salarioBase), parseInt(dadosSalario.producao));
  }catch(error){
    console.error("Erro no processamento:", error.message);
    alert(error.message);
  }
}

if (allForm) {
  allForm.addEventListener('submit', saidaSaude);
}
document.getElementById("formSalario").addEventListener('submit', saidaSalario);