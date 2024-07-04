// Importa as funções para validar email e senha
import {
  emailValidation,
  passwordValidation,
} from "./funcoesDeValidacao/funcoesDeValidacao.js";

// Seleciona o email e senha vindos para input
const [inputEmail, inputPassword] = document.querySelectorAll(".inputsVerificar");

// Adiciona eventos de input para validação de email e senha
inputEmail.addEventListener("input", msg_erro_validade_email);
inputPassword.addEventListener("input", msg_erro_validade_password);

// Função para mostrar mensagem de erro de email
function msg_erro_validade_email() {

  if (!emailValidation(inputEmail.value)){
    inputEmail.parentElement.children[3].innerHTML = "Email inválido!"
  }
  if (emailValidation(inputEmail.value)){
    inputEmail.parentElement.children[3].innerHTML = " "
  }
  
}

// Função para mostrar mensagem de erro de senha
function msg_erro_validade_password() {
  if (!emailValidation(inputPassword.value)){
    inputPassword.parentElement.children[3].innerHTML = "No mínimo 12 caracteres; uma letra maiúscula; um caractere especial; um número"
  }
  if (emailValidation(inputPassword.value)){
    inputPassword.parentElement.children[3].innerHTML = " "
  }
}
