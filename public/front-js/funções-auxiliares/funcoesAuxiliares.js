// handle

// manipulamento da classe Active
export const addActive = (element) => element.classList.add("active");
export const removeActive = (element) => element.classList.remove("active");
export const containsActive = (element) => element.classList.contains("active");

// remover e set o disabled
export const removeDisabled = (element) => element.removeAttribute("disabled");
export const addDisabled = (element) => element.setAttribute("disabled", "true");

export const handleActiveBtn = () => {
  const listaInputVerify = document.querySelectorAll(".inputVerify");
  const btn = document.querySelector(".btn");

  // verifica se todos os inputs tem classe active
  const listaInputs = Array.from(listaInputVerify);
  const todosAtivos = listaInputs.every((input) => containsActive(input));

  todosAtivos? removeDisabled(btn) : addDisabled(btn);
};

// recebe elementos html para tirar da tela e adicionar outro
export const alterarElementos = (elementoRemover, seletor, elementoAdicionar) => {
  if (elementoRemover) {
    elementoRemover.remove();
  }
  
  seletor.innerHTML += elementoAdicionar;
};
