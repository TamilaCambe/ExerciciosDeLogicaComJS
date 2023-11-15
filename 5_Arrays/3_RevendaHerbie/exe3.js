const frm = document.querySelector("form");
const resp = document.querySelector("h3");
const carros = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const modelo = frm.inModelo.value;
  const preco = Number(frm.inPreco.value);
  carros.push({ modelo, preco }); // depois de obter os dados, adiciona eles ao vetor
  frm.inModelo.value = "";
  frm.inPreco.value = "";
  modelo.focus();
  // dispara um evento de click em btListar (equivale a um click no botão na página) pra listagem ser atualizada
  frm.btListar.dispatchEvent(new Event("click"));
});

frm.btListar.addEventListener("click", () => {
  // 'escuta' o click no botão listar
  if (carros.length == 0) {
    // se o tamanho do array é igual a 0
    alert("Não há carros na lista!");
    return;
  }
  const lista = carros.reduce(
    (acc, carro) =>
      acc + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n",
    ""
  );
  resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`;
});

frm.btFiltrar.addEventListener("click", () => {
  const maximo = Number(prompt("Qual valor máximo o cliente deseja pagar?"));
  if (maximo == 0 || isNaN(maximo)) {
    // se não informou ou valor inválido retorna
    return;
  }
  // cria um novo array com os objetos que atendem a condição de filtro
  const carrosFilter = carros.filter((carro) => carro.preco <= maximo);
  if (carrosFilter.length == 0) {
    alert("Não há carros com preço inferior ou igual ao solicitado");
    return;
  }
  let lista = "";
  for (const carro of carrosFilter) {
    // percorre cada elemento do array
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
  }
  resp.innerText = `Carros até R${maximo.toFixed(2)}\n${"-".repeat(
    40
  )}\n${lista}`;
});

frm.btSimular.addEventListener("click", () => {
  const desconto = Number(prompt("Qual o percentual de desconto?"));
  if (desconto == 0 || isNaN(desconto)) {
    return;
  }
  const carrosDesc = carros.map((aux) => ({
    modelo: modelo.aux,
    preco: preco.aux - (aux.preco * desconto) / 100, // (aux.preco * desconto / 100)
  }));
  let lista = "";
  for (const carro of carrosDesc) {
    lista += `${carro.modelo} - ${carro.preco.toFixed(2)}\n`;
  }
  resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(
    40
  )}\n${lista}`;
});
