const userInput = require("prompt-sync")();
let idade, peso;
let faixaA = 0, faixaB = 0, faixaC = 0, faixaD = 0, contadorA = 0, contadorB = 0, contadorC = 0, contadorD = 0;

for(let e = 0; e < 20; e++){
  idade = parseInt((Math.random() * 100));
  peso = parseFloat((Math.random() * 100).toFixed(1));
  if(idade>=1&&idade<=10){
    faixaA += peso;
    contadorA += 1;
  }else if(idade>10&&idade<=20){
    faixaB += peso;
    contadorB += 1;
  }else if(idade>20&&idade<=30){
    faixaC += peso;
    contadorC += 1;
  }else if(idade>30){
    faixaD += peso;
    contadorD += 1;
  }
}

console.log(`Medias:\n1-10: ${(faixaA/contadorA).toFixed(2)}\n11-20: ${(faixaB/contadorB).toFixed(2)}\n21-30: ${(faixaC/contadorC).toFixed(2)}\n31+: ${(faixaD/contadorD).toFixed(2)}`);