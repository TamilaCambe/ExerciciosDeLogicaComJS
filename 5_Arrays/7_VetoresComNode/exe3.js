const prompt = require("prompt-sync")();
console.log("Informe o valor dos saques ou 0 para sair");
const saques = [];

do {
  const valor = Number(prompt("Saque R$: "));
  if (valor == 0 || valor == NaN) {
    break;
  }
  saques.push(valor);
  if (valor % 10 == 0) {
    console.log("Saque realizado com sucesso!");
  } else {
    console.log("ERRO! Valor inválido (deve ser multiplo de 10)");
  }
} while (true);
{
  console.log("\nSaques válidos");
  console.log("-".repeat(40));
  const saquesValidos = saques.filter((saque) => saque % 10 == 0);
  for (const saque of saquesValidos) {
    console.log(saque.toFixed(2));
  }
  console.log("-".repeat(40));
  const totalSacado = saquesValidos.reduce((total, saque) => total + saque, 0);
  console.log(`Total dos Saques: R$ ${totalSacado.toFixed(2)}`);

  const saquesInvalidos = saques.length - saquesValidos.length;
  console.log(
    `\nNº de tentativas de saque (saques inválidos): ${saquesInvalidos}`
  );
}
