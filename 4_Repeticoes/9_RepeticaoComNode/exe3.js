const prompt = require("prompt-sync")();
const valor = prompt("Valor R$: ");
const parcelas = prompt("Nº de parcelas: ");

const valorParcelas = Math.floor(valor / parcelas);
const valorFinal = valorParcelas + (valor % parcelas);

for (let i = 1; i < parcelas; i++) {
  console.log(`${i} parcela: R$ ${valorParcelas.toFixed(2)}`);
}
console.log(`${parcelas}ª parcela: R$ ${valorFinal.toFixed(2)}`);
