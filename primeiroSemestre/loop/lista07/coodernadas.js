const userInput = require("prompt-sync")();
const coordenadaX = parseInt(userInput("Insira a coordenada X: "));
const coodernadaY = parseInt(userInput("Insira a coordenada Y: "));

function verificador(x, y){
  x = Math.abs(x);
  y = Math.abs(y);
  const hipotenusaMaxima = (15**2)+(15**2);
  const hipotenusaXY = (x**2)+(y**2);
  if(hipotenusaXY > hipotenusaMaxima){
    return("EXTERIOR");
  }else if(hipotenusaXY <= hipotenusaMaxima){
    return("INTERIOR");
  }
}

console.log(verificador(coordenadaX, coodernadaY));