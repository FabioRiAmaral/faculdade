const userInput = require("prompt-sync")();
let nome, prova1, prova2, media;
let mediaGeral = 0;

function mediaIndividual(nota1, nota2){
  const media = (nota1+nota2)/2;
  return(media);
}

for(let e = 0; e < 15; e++){
  const nomes = ["Miguel", "Ravi", "Theo", "Gael", "Noah", "Arthur", "Davi", "Anthony", "Heitor", "Samuel", "Bernardo", "Benício", "Gabriel", "Isaac", "Matheus"]
  nome = nomes[e]
  prova1 = parseFloat((Math.random() * 10).toFixed(1));
  prova2 = parseFloat((Math.random() * 10).toFixed(1));
  media = parseFloat(mediaIndividual(prova1, prova2).toFixed(2));
  mediaGeral += media;
  console.log(`${nome} -- Notas: ${prova1} - ${prova2} -- Media: ${media}`);
  if((e + 1) == 15){
    mediaGeral /= e + 1;
    console.log(`Media Geral: ${mediaGeral.toFixed(2)}`);
  }
}