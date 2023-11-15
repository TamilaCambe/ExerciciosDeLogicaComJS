const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

frm.addEventListener("submit", (e) => {
  const nome = frm.inRemedio.value;
  const preco = frm.inPreco.value;

  let precoDois = Number(preco) * 2;
  let precoFinal = Math.floor(precoDois).toFixed(2);

  resp1.innerText = `Promoção de ${nome}`;
  resp2.innerText = `Leve 2 por apenas R$ ${Math.floor(precoFinal).toFixed(2)}`;
  e.preventDefault();
});
