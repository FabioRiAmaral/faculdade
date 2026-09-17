const userInput = require("prompt-sync")();
let nome, salario;


function aliquota(montante){
  if(montante<=1412){
    return(7.5/100);
  }else if(montante>1412&&montante<=2666.68){
    return(9/100);
  }else if(montante>2666.68&&montante<=4000.03){
    return(12/100);
  }else{
    return(14/100);
  }
}

while(nome!="exit"){
  nome = userInput("Nome: ");
  salario = parseFloat(userInput("Sálario Bruto: "));
  console.log(`Nome: ${nome} -- Sálario Bruto: ${salario} -- INSS: ${salario*aliquota(salario)} -- Sálario Liquido: ${salario*(1*aliquota(salario))}`);
}