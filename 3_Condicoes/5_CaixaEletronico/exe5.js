const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");
const resp3 = document.querySelector("#resp3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const saque = Number(frm.valor.value);
  if (saque % 10 != 0) {
    alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
    frm.valor.focus();
    return;
  }
  const notas100 = Math.floor(saque / 100);
  let resto = saque % 100;
  const notas50 = Math.floor(resto / 50);
  resto = resto % 50;
  const notas10 = Math.floor(resto / 10);
  if (notas100 > 0) {
    resp1.innerText = `Notas de R$ 100: ${notas100}`;
  }
  if (notas50 > 0) {
    resp2.innerText = `Notas de R$ 50: ${notas50}`;
  }
  if (notas10 > 0) {
    resp3.innerText = `Notas de R$ 10: ${notas10}`;
  }
});
