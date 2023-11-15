const prompt = require("prompt-sync")();
const velocidadeP = Number(prompt("Velocidade permitida: "));
const velocidadeC = Number(prompt("Velocidade do Condutor: "));
const velocidadeM = velocidadeP / 5;
const veloMais = velocidadeP + velocidadeM;

if (velocidadeC <= velocidadeP) {
  console.log(`Sem multa!`);
}
if (velocidadeC > velocidadeP || velocidadeC >= veloMais) {
  console.log(`Multa leve!`);
}
if (velocidadeC > veloMais) {
  console.log(`Multa grave!`);
}
