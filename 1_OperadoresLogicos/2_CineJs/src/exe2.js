const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const titulo = frm.inTitulo.value;
  const duracao = Number(frm.inDuracao.value);

  const horas = Math.floor(duracao / 60);
  const minutos = duracao % 60;

  resp1.innerText = titulo;
  resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;
  frm.inTitulo.value = "";
  frm.inDuracao.value = "";
});
