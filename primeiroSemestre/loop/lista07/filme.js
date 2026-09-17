let excelente = 0,bom = 0,regular = 0,idadeA = 0, idadeB = 0,idadeC = 0;

function randomLimit(min, max){
  return(Math.random()*(max-min)+min).toFixed(0);
}

for(let e = 0; e < 20; e++){
  const nota = parseInt(randomLimit(1, 3));
  const idade = parseInt(randomLimit(14, 100)); //idades possiveis
  switch(nota){
    case(1):
      regular += 1;
      idadeA += idade;
      break;
    case(2):
      bom += 1;
      idadeB += idade;
      break;
    case(3):
      excelente += 1;
      idadeC += idade;
      break;
  }
}

const percentagemBom = bom*100/(excelente+bom+regular);
console.log(`Média idade excelente: ${(idadeC/excelente).toFixed(1)}\nQuantidade regular: ${regular}\nPorcentagem de bons entre todos: ${percentagemBom}%`);