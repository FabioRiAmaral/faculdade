const userInput = require("prompt-sync")();

for(let e = 0; e < 15; e++){
  let numero = parseInt(userInput("Insira um número: "));
  const quadrado = (numero**2);
  console.log(`${e + 1} -- ${numero} ** 2 = ${quadrado}`);
}