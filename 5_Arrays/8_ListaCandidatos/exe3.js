const frm = document.querySelector("form");
const resp = document.querySelector("#resp");

const candidatos = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nomes = frm.inNome.value;
  const pontos = Number(frm.inPontos.value);

  candidatos.push({ nomes, pontos });
  frm.reset();
  frm.inNome.focus();
  frm.btListar.dispatchEvent(new Event("click"));
});

frm.btListar.addEventListener("click", () => {
  if (candidatos.length == 0) {
    alert("Não há nomes na lista!");
    return;
  }
  let lista = "";
  for (const nomeCandi of candidatos) {
    const { nomes, pontos } = nomeCandi;
    lista += nomes + " - " + pontos + " acertos" + "\n";
  }
  resp.innerText = `${lista}`;
});

frm.btAprovados.addEventListener("click", () => {
  if (candidatos.length == 0) {
    alert("Não há nomes na lista!");
    return;
  }
  const aprovacao = prompt("Número de acertos para Aprovação?");

  const numPrompt = parseFloat(aprovacao);

  let lista2 = "";
  for (let i = 0; i < candidatos.length; i++) {
    if (candidatos[i].pontos >= numPrompt) {
      lista2 +=
        candidatos[i].nomes + " - " + candidatos[i].pontos + " acertos" + "\n";
    }
  }
  resp.innerText = `${lista2}`;
});
