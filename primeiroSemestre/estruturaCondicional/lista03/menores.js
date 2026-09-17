const userInput = require("prompt-sync")();
const a = parseInt(userInput("Valor de A: "));
const b = parseInt(userInput('Valor de B: '));
const c = parseInt(userInput('Valor de C: '));
const d = parseInt(userInput('Valor de D: '))

function somaMenoresSemIf(a,b,c,d){
  let absoluto;
  absoluto = (a - b);

  let maiorAB = (a+b+(absoluto * -1))/2;
  absoluto = (maiorAB - c);

  let maiorABC = (maiorAB+c+(absoluto * -1))/2;
  absoluto = (maiorABC - d);

  let maiorABCD = (maiorABC + d + (absoluto * -1))/2;
  let somaDosMenores = (a+b+c+d) - maiorABCD;
  
  return somaDosMenores;
}

function somaMenores(a,b,c,d){
  if (a>b || a>c || a>d){
    return b+c+d;
  }
  else if (b>a || b>c || b>d){
    return a+c+d;
  }
  else if (c>a || c>b || c>d){
    return a+b+d;
  }
  else{
    return a+b+c;
  }
}

console.log("A soma dos 3 menores equivale a: " + somaMenores(a,b,c,d));