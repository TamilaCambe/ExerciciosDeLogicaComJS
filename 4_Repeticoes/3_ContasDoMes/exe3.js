const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

let resposta = "";
let contador = 0;
let valorTotal = 0;

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const descricao = frm.inDescricao.value;
  const valor = Number(frm.inValor.value);

  contador++;
  valorTotal = valorTotal += valor;
  resposta = resposta + descricao + ` R$ ${valor.toFixed(2)} \n`;
  resp1.innerText = `${resposta}-------------------------------`;
  resp2.innerHTML = `${contador} Contas - Total R$: ${valorTotal.toFixed(2)}`;

  frm.inDescricao.value = "";
  frm.inValor.value = "";
  frm.inDescrcao.focus();
});
