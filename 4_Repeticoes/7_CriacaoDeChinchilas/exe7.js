const frm = document.querySelector("form");
const result = document.querySelector("#result");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(frm.inNumero.value);
  const anos = Number(frm.inAno.value);
  let total = "";
  for (let i = 1; i <= anos; i++) {
    total = total * 3;
    if (i == 1) {
      total = numero;
    }
    result.innerText += `${i}º Ano: ${total} Chinchilas\n`;
  }
});
