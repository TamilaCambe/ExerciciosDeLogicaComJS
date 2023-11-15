const prompt = require("prompt-sync")();
const valor = Number(prompt("Valor: "));
const tab1 = 1;
const tab2 = 1.75;
const tab3 = 3;

if (valor < tab1) {
  console.log(`Valor insuficiente!`);
}
if (valor == tab1) {
  console.log(`Tempo: 30min`);
}
if (valor == tab2 || (valor >= tab2 && valor < tab3)) {
  console.log(`Tempo: 60min`);
  console.log(`Troco R$: ${valor - tab2}`);
}
if (valor >= tab3) {
  console.log(`Tempo: 120min`);
  console.log(`Troco R$: ${valor - tab3}`);
}
