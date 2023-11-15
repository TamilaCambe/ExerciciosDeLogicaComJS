const frm = document.querySelector("form");
const resp = document.querySelector("#resp");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const fruta = frm.inFruta.value;
  const num = Number(frm.inNumero.value);

  let fru = "";

  for (let i = 1; i <= num; i++) {
    fru = fru + fruta.padEnd(5, " * ");
    resp.innerText = `${fru}`;
  }
});
