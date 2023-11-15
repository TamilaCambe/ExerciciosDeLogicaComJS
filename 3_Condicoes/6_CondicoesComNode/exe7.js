const prompt = require("prompt-sync")();
const ladoA = prompt("Lado A: ");
const ladoB = prompt("Lado B: ");
const ladoC = prompt("Lado C: ");

if (ladoA == ladoB && ladoB == ladoC && ladoC == ladoA) {
  console.log("Lados podem formar um triângulo");
  console.log("Tipo: Equilátero");
} else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
  console.log("Lados podem formar um triângulo");
  console.log("Tipo: Isósceles");
}
if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA) {
  console.log("Lados podem formar um triângulo");
  console.log("Tipo: Escaleno");
}
