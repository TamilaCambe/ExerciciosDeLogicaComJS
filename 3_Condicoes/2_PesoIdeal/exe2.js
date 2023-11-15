const frm = document.querySelector("form");
const resultado = document.querySelector("#resultado");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.nome.value;
  const sexo = frm.feminino.checked;
  const altura = Number(frm.altura.value);

  let peso;
  if (sexo) {
    // se for sexo feminino
    peso = 21 * Math.pow(altura, 2);
  } else {
    peso = 22 * Math.pow(altura, 2);
  }

  resultado.innerText = `${nome}: Seu peso ideal é: ${peso.toFixed(2)} kg!`;
});

frm.addEventListener("reset", () => {
  resultado.innerText = "";
});
