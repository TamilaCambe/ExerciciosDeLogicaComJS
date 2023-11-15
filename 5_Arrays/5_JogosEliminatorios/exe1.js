const frm = document.querySelector("form");
const resp = document.querySelector("#resp");

const clubes = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const time = frm.inTime.value;
  clubes.push({ time });
  frm.inTime.value = "";
  frm.inTime.focus();
});

frm.btListar.addEventListener("click", () => {
  if (clubes.length == 0) {
    alert("Não há clubes na lista!");
    return;
  }
  let lista = ""; // inicia uma lista vazia
  for (const clube of clubes) {
    // em cada passada clube vai ser cada elemento de clubes
    const { time } = clube;
    /* desestruturando os valores do obj. Portanto a const time conterá o valor da propriedade time do objeto clube */
    lista += time + "\n";
    /* adicionando o valor da const time à string lista */
  }
  resp.innerText = `${lista}`;
});

frm.btMontar.addEventListener("click", () => {
  if (clubes.length == 0) {
    alert("Não ha clubes na lista!");
    return;
  }
  const totalClubes = clubes.length;
  const meioDaLista = Math.floor(totalClubes / 2);
  const primeiraMetade = clubes.slice(0, meioDaLista);
  const segundaMetade = clubes.slice(meioDaLista).reverse();

  const tabelaDeJogos = [];

  for (let i = 0; i < primeiraMetade.length; i++) {
    const jogo = `${primeiraMetade[i]} x ${segundaMetade[i]}`;
    tabelaDeJogos.push(jogo);
  }

  tabelaDeJogos.forEach((jogo, index) => {
    let tabela = `${index + 1} ${jogo}`;
  });
  resp.innerText = `${tabela}`;
});
