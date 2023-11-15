const frm = document.querySelector("form");
const result = document.querySelector("#result");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(frm.inNumber.value);
  let resp = `Entre ${numero} e 1: `;
  for (let i = numero; i > 1; i--) {
    resp = `${resp}${i}, `;
  }
  resp = resp + "1.";

  result.innerText = resp;
});
