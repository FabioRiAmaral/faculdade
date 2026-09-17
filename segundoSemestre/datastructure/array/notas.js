const userInput = require("prompt-sync")();
let length = parseInt(userInput("Quantidade: "));

function notas(length) {
	notas = [];
	for (let e = 0; e < length; e++) {
		notas[e] = parseFloat(userInput("Insira a nota: "));
	}
	return (notas);
}

function mediaTotal(notas) {
	//let quantidade = 0;
	let total = 0;
	for (let e = 0; e < notas.length; e++) {
		total += notas[e];
	}
	return (total / notas.length);
}

function maiorNota(notas) {
	let maior = 0;
	for (let e = 0; e < notas.length; e++) {
		if(notas[e] > maior){
			maior = notas[e];
		}else{
		continue;
		}
	}
	return(maior);
}

function menorNota(notas){
	let menor = maiorNota(notas);
	for(let e = 0; e < notas.length;e++){
		if(notas[e] < menor){
			menor = notas[e];
		}
	}
	return(menor);
}

function abaixoMedia(notas){
	let length = 0;
	let notasAbaixo = [];
	for(let e = 0;e < notas.length;e++){
		if(notas[e] < mediaTotal(notas)){
			length += 1;
			notasAbaixo[length - 1] = notas[e]
		}
	}
	return(notasAbaixo);
}

function acimaMedia(notas){
	let length = 0;
	let notasAcima = [];
	for(let e = 0;e < notas.length;e++){
		if(notas[e] > mediaTotal(notas)){
			length += 1;
			notasAcima[length - 1] = notas[e]
		}
	}
	return(notasAcima);
}

const notasTotais = notas(length);
const media = mediaTotal(notasTotais);
const maior = maiorNota(notasTotais);
const menor = menorNota(notasTotais);
const abaixo = abaixoMedia(notasTotais);
const acima = acimaMedia(notasTotais);

console.log(`Notas: ${notasTotais}\nMedia: ${media}\nMaior/Menor: ${maior} / ${menor}\nNotas Abaixo / Notas Acima: ${abaixo} / ${acima}`);