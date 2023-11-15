const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

frm.addEventListener("submit", (e) => {
  const nome = frm.nome.value;
  const preco = Number(frm.preco.value);

  const precoDesconto = preco - preco * 0.5;
  const promo = preco * 3 - precoDesconto;

  resp1.innerText = `${nome} - Promoção: Leve 3 por R$ ${promo.toFixed(2)}`;
  resp2.innerText = `O 3º produto custa apenas R$ ${precoDesconto.toFixed(2)}`;

  e.preventDefault();
});
