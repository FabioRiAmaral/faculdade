function CustoLata(raio, altura){
    const pi = 3.1415
    const areaBase = pi*(r**2)*2;
    const areaLado = 2*pi*r*h;
    return 155 * (areaBase + areaLado);
}

function AreaLata(raio, altura){
    const pi = 3.1415
    const areaBase = pi*(r**2)*2;
    const areaLado = 2*pi*r*h;
    return areaBase + areaLado;
}

const userInput = require("prompt-sync")();

let r = Number(userInput('Raio em metros: '));
let h = Number(userInput('Altura em metros: '));

console.log(`O custo da lata cilindrica é equivalente a R$${CustoLata(r, h)} e ela tem uma area de ${AreaLata(r, h)}m²`)