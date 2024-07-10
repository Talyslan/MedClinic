export const addActive = (element) => element.classList.add("active");
export const removeActive = (element) => element.classList.remove("active");
export const containsActive = (element) => element.classList.contains("active");

// handle
export const handleActiveBtn = () => {
  const listaInputVerify = document.querySelectorAll(".inputVerify");
  const btn = document.querySelector(".btn");

  // verifica se todos os inputs tem classe active
  const listaInputs = Array.from(listaInputVerify);
  const todosAtivos = listaInputs.every((input) => containsActive(input));

  todosAtivos?
   btn.removeAttribute("disabled") : btn.setAttribute("disabled", "true");
};
