const frm = document.querySelector("form");
const resp = document.querySelector("#resp");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const num = Number(frm.inNumero.value);
  let numDivisores = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      numDivisores++;
    }
  }
  if (numDivisores == 2) {
    resp.innerText = `${num} é número primo!`;
  } else {
    resp.innerText = `${num} NÃO é número primo!`;
  }
});
