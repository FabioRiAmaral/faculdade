const userInput = require('prompt-sync')();
const id = userInput("Insira seu numero de verificação: ");
const nota1 = parseFloat(userInput("Insira a sua nota 1: "));
const nota2 = parseFloat(userInput("Insira a sua nota 2: "));
const nota3 = parseFloat(userInput("Insira a sua nota 3: "));
const notaMedia = parseFloat(userInput("Insira a nota media dos exercicios: "));

function mediaFinal(nota1, nota2, nota3, media){
  const mediaFinal = (nota1 + (nota2*2)+(nota3*3)+media)/7;
  return mediaFinal.toFixed(2);
}

function mediaConceito(media){
  if(media<=4){
    return "E";
  }
  else if(media>4 && media<=6){
    return "D";
  }
  else if(media>6 && media<=7.5){
    return "C";
  }
  else if(media>7.5 && media<=9){
    return "B";
  } 
  else{
    return "A";
  }
}

function conceitoAprovado(mediaConceito){
  switch(mediaConceito){
    case("A"):
    case("B"):
    case("C"):
      return "APROVADO"
      break;
    default:
      return "REPROVADO"
  }
}

let notaMediaFinal = mediaFinal(nota1, nota2, nota3, notaMedia);
let conceitoRecebido = mediaConceito(notaMediaFinal);
console.log(`O aluno de id ${id}, referente as notas ${nota1}, ${nota2} e ${nota3}, com a media dos exercicios sendo ${notaMedia}, teve os resultados:`);
console.log(`\nMédia final: ${notaMediaFinal}\nConceito correspondente: ${conceitoRecebido}\nSituação: ${conceitoAprovado(conceitoRecebido)}`);