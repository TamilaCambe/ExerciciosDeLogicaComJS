const frm = document.querySelector("form");
const resp = document.querySelector("#resp");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const horaBrasil = Number(frm.horaBrasil.value);

  let horaFranca = horaBrasil + 5;
  if (horaFranca > 24) {
    horaFranca = horaFranca - 24;
  }
  resp.innerText = ` Hora na França ${horaFranca.toFixed(2)}`;
});
