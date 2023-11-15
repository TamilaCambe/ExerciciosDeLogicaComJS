const frm = document.querySelector("form");
const resp = document.querySelector("h3");

const criancas = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const idade = Number(frm.inIdade.value);
  criancas.push({ nome, idade });
  frm.reset();
  nome.inNome.focus();
  frm.btListar.dispatchEvent(new Event("click"));
});

frm.btListar.addEventListener("click", () => {
  if (criancas.length == 0) {
    alert("Não há nomes na lista!");
    return;
  }
  const lista = criancas.reduce(
    (acc, crianca) =>
      acc + crianca.nome + " - " + crianca.idade + " anos" + "\n",
    ""
  );
  resp.innerText = `${lista}`;
});

frm.btResumir.addEventListener("click", () => {
  if (criancas.length == 0) {
    alert("Não há nomes na lista!");
    return;
  }
  const copia = [...criancas]; // cria uma cópia do array, pois dessa forma se eu clicar novamente em listar vai ficar na ordem que foi inserido
  copia.sort((a, b) => a.idade - b.idade); // ordena pela idade
  let resumo = ""; // pra concatenar a saída
  let aux = copia[0].idade; // menor idade do array ordenado
  let nomes = []; // para inserir nomes de cada idade
  for (const crianca of copia) {
    const { nome, idade } = crianca;
    if (idade == aux) {
      nomes.push(nome); // se as idades forem iguais, os nomes serão inseridos aqui
    } else {
      // quando trocar a idade, monta um resumo pra idade anterior
      resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
      resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
      resumo += "(" + nomes.join(", ") + ")\n\n";

      aux = idade; // atualiza a idade auxiliar
      nomes = []; // limpa o array dos nomes para a nova idade
      nomes.push(nome); // adiciona o nome à nova lista de nomes, com a nova idade
    }
  }
  // adiciona o último grupo de crianças ao resumo
  resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
  resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
  resumo += "(" + nomes.join(", ") + ")\n\n";
  resp.innerText = resumo; // exibe a resposta
});
