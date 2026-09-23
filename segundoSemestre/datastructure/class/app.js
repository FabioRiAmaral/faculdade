import { Paciente } from "./paciente.js";

const p1 = new Paciente("Fabio", 65, 1.8, "m");
const p2 = new Paciente("Rafaela", 50, 1.6, "f");
console.log(p1);
console.log(`IMC do paciente 1 equivale a: ${(p1.calcularImc()).toFixed(2)}`);
p1.peso = 60;
p1.altura = 1.7;
console.log(p1);