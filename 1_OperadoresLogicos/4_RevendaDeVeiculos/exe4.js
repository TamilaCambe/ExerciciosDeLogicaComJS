const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const preco = Number(frm.inPreco.value);
  const peso = Number(frm.inPeso.value);

  const precoQuilo = (preco / 1000) * peso;

  resp.innerText = `Valor a pagar R$${precoQuilo.toFixed(2)}`;
  e.preventDefault();
});
