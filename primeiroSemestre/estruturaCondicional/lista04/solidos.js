const userInput = require("prompt-sync")();
console.log("1 --- Cone Reto\n2 --- Cilindro\n3 --- Esfera");
const figura = userInput("\nInsira qual das figuras geometricas a cima é desejada para os calculos: ");
let altura;
let raio;

switch(figura){
  case("1"):
  case("2"):
    altura = parseFloat(userInput("Insira a altura da figura: "));
    raio = parseFloat(userInput("Insira o raio da figura: "));
    break;
  case("3"):
    raio = parseFloat(userInput("Insira o raio da figura: "));
    break;
  default:
    console.log("Figura invalida!");
}

function medidasFiguras(tipoFigura, r, h){
  const pi = 3.14;
  let volume;
  let area;

  if(tipoFigura == "1"){
    volume = (pi*(r**2)*h)**(1/3);
    area = pi*r*(((r**2)+(h**2))**(1/2));
    return `O volume do Cone Reto equivale a ${volume.toFixed(2)} e a área de sua superfície equivale a ${area.toFixed(2)}`;
  }else if(tipoFigura == "2"){
    volume = (pi*(r**2)*h);
    area = 2*pi*r*h
    return `O volume do Cilindro equivale a ${volume.toFixed(2)} e a área de sua superfície equivale a ${area.toFixed(2)}`;
  }
  else{
    volume = (4/3)*pi*(r**3);
    area = 4*pi*(r**2);
    return `O volume da Esfera equivale a ${volume.toFixed(2)} e a área de sua superfície equivale a ${area.toFixed(2)}`;
  }
}

console.log(medidasFiguras(figura, altura, raio));