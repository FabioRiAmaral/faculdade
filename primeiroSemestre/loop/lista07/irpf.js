const userInput = require("prompt-sync")();
let nome, salario;


function irpf(montante){
  if(montante<=2259.2){
    return(0);
  }else if(montante>2259.2&&montante<=2826.65){
    return(7.5/100);
  }else if(montante>2826.65&&montante<=3751.05){
    return(15/100);
  }else if(montante>3751.05&&montante<=4664.68){
    return(22.5/100);
  }else{
    return(27.5/100);
  }
}

while(nome!="exit"){
  nome = userInput("Nome: ");
  salario = parseFloat(userInput("Sálario Bruto: "));
  console.log(`Nome: ${nome} -- Sálario Bruto: ${salario} -- IRPF: ${salario*irpf(salario)}`);
}