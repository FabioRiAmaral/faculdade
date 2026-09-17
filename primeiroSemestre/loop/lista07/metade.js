const userInput = require("prompt-sync")();

for(let e = 0; e < 10; e++){
  let numero = parseInt(userInput("Insira um número: "));
  const metade = (numero/2);
  console.log(`${e + 1}. ${numero} / 2 = ${metade}`);
}