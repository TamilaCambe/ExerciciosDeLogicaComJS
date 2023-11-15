const frm = document.querySelector("form");
const resp = document.querySelector("#resp");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(frm.numero.value);
  const raiz = Math.sqrt(numero);
  if (Number.isInteger(raiz)) {
    resp.innerText = `Raiz: ${raiz}`;
  } else {
    resp.innerText = `Não há raiz exata para ${numero}`;
  }
});
