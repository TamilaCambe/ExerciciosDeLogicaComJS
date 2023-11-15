const frm = document.querySelector("form");
const respErros = document.querySelector("#inErros");
const respChances = document.querySelector("#inChances");
const respDica = document.querySelector("#inDicas");

const erros = [];
const sorteado = Math.floor(Math.random() * 100) + 1;
const CHANCES = 6;

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(frm.inNumero.value);
  if (numero == sorteado) {
    respDica.innerText = `Parabéns! Número sorteado ${numero}`;
    frm.btSubmit.disabled = true; // troca status dos botões
    frm.btNovo.className = "exibe";
  } else {
    if (erros.includes(numero)) {
      // se o número existe no vetor erros (se já apostou)
      alert(`Você já apostou o número ${numero}. Tente outro...`);
    } else {
      erros.push(numero); // adiciona número ao array
      const numErros = erros.length; // obtém tamanho do array
      const numChances = CHANCES - numErros; // calcula o número de chances
      // exibe o nº de erros, conteúdo do array e nº de chances
      respErros.innerText = `${numErros} (${erros.join(", ")})`;
      respChances.innerText = numChances;
      if (numChances == 0) {
        alert("Suas chances acabaram...");
        frm.btSubmit.disabled = true;
        frm.btNovo.className = "exibe";
        respDica.innerText = `Game Over! Número sorteado: ${sorteado}`;
      } else {
        // usa o operador ternário para mensagem da dica
        const dica = numero < sorteado ? "maior" : "menor";
        respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`;
      }
    }
  }
  frm.inNumero.value = "";
  frm.inNumero.focus();
});

frm.btNovo.addEventListener("click", () => {
  location.reload(); // recarrega a página
});
