const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(frm.inNumero.value);
  let soma = 0;
  let acc = 0;
  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      soma = soma + i + " ";
      acc += i;
    }
  }

  resp1.innerText = `Divisores do ${numero}: ${soma} (Soma: ${acc})`;

  if (acc === numero) {
    resp2.innerText = `${numero} é um número perfeito!`;
  } else {
    resp2.innerText = `${numero} NÃO é um número perfeito!`;
  }
});
