const userInput = require("prompt-sync")();
let mercadoria, valorCompra, valorTotalCompras = 0, valorVenda, valorTotalVendas = 0, lucroTotal = 0, lucroPercent, lucroMenor = 0, lucroMaior = 0, lucroEntre = 0, loop;
loop = true;

function randomLimit(min, max){
  return(Math.random()*(max-min)+min).toFixed(2);
}

while(loop == true){
  mercadoria = userInput("Nome da mercadoria: ");
  if(mercadoria=="exit"){
    loop = false;
  }
  
  valorCompra = parseFloat((randomLimit(0, 100)));
  valorVenda = parseFloat((randomLimit(valorCompra, 100)));
  lucroPercent = ((valorVenda-valorCompra)*100)/valorCompra;
  if(lucroPercent<10){
    lucroMenor += 1;
  }else if(lucroPercent>=10&&lucroPercent<=20){
    lucroEntre += 1;
  }else if(lucroPercent>20){
    lucroMaior += 1;
  }
  valorTotalCompras += valorCompra;
  valorTotalVendas += valorVenda;
  lucroTotal += (valorVenda-valorCompra); 
}

console.log(`Lucro < 10% = ${lucroMenor}\n10% <= lucro <= 20% = ${lucroEntre}\nLucro > 20% = ${lucroMaior}\nTotal compras = R$${valorTotalCompras}\nTotal vendas = R$${valorTotalVendas}\nLucro total = R$${lucroTotal}`);
