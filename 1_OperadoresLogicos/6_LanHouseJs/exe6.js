const frm = document.querySelector("form");
const resp = document.querySelector("#resp");

frm.addEventListener("submit", (e) => {
  const valor = Number(frm.valor.value);
  const tempo = Number(frm.tempo.value);

  const numCiclosInteiros = Math.floor(tempo / 15);
  const valorCiclosInteiros = numCiclosInteiros * valor;
  const tempoRestante = tempo % 15;
  const numCiclosTotal =
    tempoRestante > 0 ? numCiclosInteiros + 1 : valorCiclosInteiros;
  const valorTotal = numCiclosTotal * valor;

  resp.innerText = `Valor a Pagar R$${valorTotal.toFixed(2)}`;

  e.preventDefault();
});
