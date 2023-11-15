const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");
const resp3 = document.querySelector("#resp3");

frm.addEventListener("submit", (e) => {
  const nomeVeiculo = frm.inVeiculo.value;
  const precoVeiculo = frm.inPreco.value;

  const entrada = Number(precoVeiculo) * (50 / 100);
  const parcelamento = (precoVeiculo - entrada) / 12;

  resp1.innerText = `Pomoção: ${nomeVeiculo}`;
  resp2.innerText = `Entrada de R$: ${entrada}`;
  resp3.innerText = `+ 12x de ${parcelamento}`;

  e.preventDefault();
});
