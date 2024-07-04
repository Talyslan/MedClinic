// Importa as funções para validar email e senha
const {
  emailValidation,
  passwordValidation,
} = require("./funcoesDeValidacao/funcoesDeValidacao.js");

// Seleciona o email e senha vindos para input
const [inputEmail, inputPassword] = document.querySelectorAll(".inputsVerificar");


// Adiciona eventos de input para validação de email e senha
inputEmail.addEventListener("input", msg_erro_validade_email);
inputPassword.addEventListener("input", msg_erro_validade_password);

// Função para mostrar mensagem de erro de email
function msg_erro_validade_email() {
  const email = inputEmail.value;
  if (!emailValidation(email)) {
    inputEmail.parentElement.children[3].innerText = "Email inválido!"
  } else {
    inputEmail.parentElement.children[3].innerText = ""
  }
}

// Função para mostrar mensagem de erro de senha
function msg_erro_validade_password() {
  const password = inputPassword.value;
  if (!passwordValidation(password)) {
    inputPassword.setCustomValidity("Senha deve ter pelo menos 6 caracteres");
    inputPassword.reportValidity();
  } else {
    inputPassword.setCustomValidity("");
  }
}