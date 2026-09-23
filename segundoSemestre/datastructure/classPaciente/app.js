import { Paciente } from "./paciente.js";

const p1 = new Paciente("Fabio", 65, 1.8, "Masculino");
const p2 = new Paciente("Rafaela", 60, 1.55, "Feminino");
console.log(`Nome: ${p1.nome}\nPeso: ${p1.peso}\nAltura: ${p1.altura}\nSexo: ${p1.sexo}`);
console.log(`IMC: ${(p1.calcularImc()).toFixed(2)}`);
console.log(`\n\nNome: ${p2.nome}\nPeso: ${p2.peso}\nAltura: ${p2.altura}\nSexo: ${p2.sexo}`);
console.log(`IMC: ${(p2.calcularImc()).toFixed(2)}`);

p1.nome = 'Fabao'; //Não é necessario especificar setter e nem getter
console.log(`Nome: ${p1.nome}\nPeso: ${p1.peso}\nAltura: ${p1.altura}\nSexo: ${p1.sexo}`);
console.log(`IMC: ${(p1.calcularImc()).toFixed(2)}`);