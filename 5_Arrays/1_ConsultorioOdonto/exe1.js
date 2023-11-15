const frm = document.querySelector("form");
const respNome = document.querySelector("#resp");
const respLista = document.querySelector("#lista");

const pacientes = []; // declarando um vetor global

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inPaciente.value;
  pacientes.push(nome); // adiciona o nome no final do vetor (a cada iteração)
  let lista = ""; // string para concatenar pacientes

  for (let i = 0; i < pacientes.length; i++) {
    lista += `${i + 1}. ${pacientes[i]} \n`;
  }
  respLista.innerText = lista; // exibe a lista de pacientes
  frm.inPaciente.value = ""; // limpa o conteúdo do campo de formulário
  frm.inPaciente.focus(); // posiciona o cursor no campo
});

// Adiciona um "ouvinte" para o evento click no btUrgência que está no form
frm.btUrgencia.addEventListener("click", () => {
  // verifica se as validações do form estão ok (no caso, paciente is required)
  if (!frm.checkValidity()) {
    alert("Informe o nome do paciente a ser atendido em caráter de urgência");
    frm.inPaciente.focus(); // posiciona o cursor no campo inPaciente
    return; // retorna ao form
  }
  const nome = frm.inPaciente.value;
  pacientes.unshift(nome); // adiciona paciente no início do array
  let lista = ""; // string para concatenar pacientes
  // forEach aplicado sobre array pacientes
  pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
  respLista.innerText = lista; // exibe a lista de pacientes na página
  frm.inPaciente.value = ""; // limpa conteúdo do campo de formulário
  frm.inPaciente.focus(); // posiciona o cursor no campo
});

frm.btAtender.addEventListener("click", () => {
  // se o tamanho do array for 0
  if (pacientes.length == 0) {
    alert("Não há pacientes!");
    frm.inPaciente.focus();
    return;
  }
  const atender = pacientes.shift(); // remove do início da fila e (obtém nome) e armazena nessa variável
  resp.innerText = atender; // exibe o nome do paciente em atendimento
  let lista = "";
  pacientes.forEach((paciente, i) => (lista += `${i + 1} ${paciente}\n`));
  respLista.innerText = lista; // exibe a lista de pacientes na página
});
