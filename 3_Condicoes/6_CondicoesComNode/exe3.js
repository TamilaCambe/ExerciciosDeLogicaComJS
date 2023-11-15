const prompt = require("prompt-sync")();
const numero = prompt("Digite um número que seja centena: ");

if (numero < 100 || numero > 1000) {
  console.log(`ERRO! O número ${numero} não é uma centena`);
  return;
}

const numero1 = Math.floor(numero / 100);
const sobra = numero % 100;
const numero2 = Math.floor(sobra / 10);
const numero3 = sobra % 10;
console.log(`Invertido: ${numero3}${numero2}${numero1}`);
