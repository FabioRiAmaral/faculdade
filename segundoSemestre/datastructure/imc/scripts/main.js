const inNome = document.getElementById("inNome");
const inPeso = document.getElementById("inPeso");
const inAltura = document.getElementById("inAltura");
const btnCalcular = document.getElementById("btncCalcular");
const outResultado = document.getElementById("outResultado");

function imc(){
    const nome = inNome.value;
    const peso = Number(inPeso.value);
    const altura = Number(inAltura.value);
    const resultadoImc = peso/(altura*altura);
    outResultado.innerHTML = `${nome}, o seu IMC é de ${Math.round(resultadoImc)}!`;
}

btnCalcular.addEventListener("onclick", imc());