const userInput = require("prompt-sync")();

function seno(radianos){
  // const radianos = angulo/180
  const senoAngulo = radianos - ((radianos**3)/6) + ((radianos**5)/120) - ((radianos**7)/5040);
  return(senoAngulo);
}

for(let anguloA = 0.0; anguloA <= 3.3; anguloA += 0.3){
  console.log(seno(anguloA))
}