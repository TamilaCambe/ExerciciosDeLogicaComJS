const prompt = require("prompt-sync")();
const pesoRacao = Number(prompt("Peso da Ração (kg): "));
const consumoDiario = Number(prompt("Consumo Diário (gr): "));
const pesoGr = pesoRacao * 1000;
const duracao = Math.floor(pesoGr / consumoDiario);
const sobra = pesoGr % consumoDiario;
console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra}`);
