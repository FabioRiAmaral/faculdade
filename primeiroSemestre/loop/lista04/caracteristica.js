const userInput = require("prompt-sync")();

function caracteristica(){
  for(let e = 1000; e <= 9999; e++){
    const dezenaMilhar = Math.floor(e/100);
    const dezena = (e%100);
    const soma = dezenaMilhar + dezena;
    if(soma ** 2 == e){
      console.log(`${e} -- ${dezenaMilhar} + ${dezena} = ${soma} >> ${soma}² = ${e}`);
    }
  }
}

caracteristica();