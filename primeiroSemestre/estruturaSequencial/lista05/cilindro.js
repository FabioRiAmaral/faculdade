function AreaCilindro(raio, altura){
    const pi = 3.1415;
    const area = 2 * pi * r * (h + r);
    return area;
}

function VolumeCilindro(raio, altura){
    const pi = 3.1415;
    const volume = pi * r **2 * h;
    return volume;
}

const userInput = require('prompt-sync')();

let r = Number(userInput('Raio em cm: '));
let h = Number(userInput('Altura em cm: '));



console.log(`O cilindro a seguir tem uma area de ${AreaCilindro(r, h)} cm² e um volume de ${VolumeCilindro(r, h)} cm³`)