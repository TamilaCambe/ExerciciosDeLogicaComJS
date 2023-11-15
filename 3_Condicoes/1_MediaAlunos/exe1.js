const frm = document.querySelector("form");
const mediaFinal = document.querySelector("#mediaFinal");
const situacao = document.querySelector("#situacao");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = frm.nome.value;
  const nota1 = Number(frm.nota1.value);
  const nota2 = Number(frm.nota2.value);

  const media = (nota1 + nota2) / 2;

  mediaFinal.innerText = `Média das Notas ${media.toFixed(2)}`;

  if (media >= 7) {
    situacao.innerText = `Parabéns, ${nome}! Você foi aprovado(a)`;
    situacao.style.color = "blue";
  } else {
    situacao.innerText = `Ops ${nome}... Você foi reprovado(a)`;
    situacao.style.color = "red";
  }
});
