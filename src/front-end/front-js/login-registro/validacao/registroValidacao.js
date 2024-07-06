// import
import {
  nameValidation,
  cpfValidation,
  emailValidation,
  passwordValidation,
  passwordConfirmValidation,
  dateValidation,
  telValidation,
  crmValidation,
} from "./funcoesDeValidacao/funcoesDeValidacao.js";

const [
  inputNome,
  inputCPF,
  inputEmail,
  inputPassword,
  inputPasswordConfirm,
  inputDate,
  inputTel,
] = document.querySelectorAll(".inputsVerificar");

const [ 
  inputCRM,
  inputPasswordAdmin
] = document.querySelectorAll(".inputsVerificarMed")

// Adiciona eventos de input para validação de email e senha
inputNome.addEventListener("input", msg_erro_validade_nome);
inputCPF.addEventListener("input", msg_erro_validade_cpf);
inputEmail.addEventListener("input", msg_erro_validade_email);
inputPassword.addEventListener("input", msg_erro_validade_password);
inputPasswordConfirm.addEventListener(
  "input",
  msg_erro_validade_password_confirm
);

inputDate.addEventListener("input", msg_erro_validade_data);
inputTel.addEventListener("input", msg_erro_validade_tel);

inputCRM.addEventListener("input", msg_erro_validade_crm)
inputPasswordAdmin.addEventListener("input", msg_erro_validade_password_admin)

// apenas para testes
passwordAdmin = "ABC1234"

// Função para mostrar mensagem de erro de nome
function msg_erro_validade_nome() {
  if (!nameValidation(inputNome.value)) {
    inputNome.parentElement.children[3].innerHTML = "Nome inválido!";
  }
  else {
    inputNome.parentElement.children[3].innerHTML = " ";
  }
}

// Função para mostrar mensagem de erro de CPF
function msg_erro_validade_cpf() {
  if (!cpfValidation(inputCPF.value)) {
    inputCPF.parentElement.children[3].innerHTML = "CPF inválido!";
  }
  else {
    inputCPF.parentElement.children[3].innerHTML = " ";
  }
}

// Função para mostrar mensagem de erro de email
function msg_erro_validade_email() {
  if (!emailValidation(inputEmail.value)) {
    inputEmail.parentElement.children[3].innerHTML = "Email inválido!";
  }
  else {
    inputEmail.parentElement.children[3].innerHTML = " ";
  }
}

// Função para mostrar mensagem de erro de senha
function msg_erro_validade_password() {
  if (!passwordValidation(inputPassword.value)) {
    inputPassword.parentElement.children[3].innerHTML =
      "12+ caracteres, 1 maiúscula, 1 especial, 1 número";
  }
  else {
    inputPassword.parentElement.children[3].innerHTML = " ";
  }
}

// Função para mostrar mensagem de erro da confirmação de senha
function msg_erro_validade_password_confirm() {
  if (!passwordConfirmValidation(inputPassword.value, inputPasswordConfirm.value)) {
    inputPasswordConfirm.parentElement.children[3].innerHTML =
      "As senhas precisam ser idênticas";
  }
  else {
    inputPasswordConfirm.parentElement.children[3].innerHTML = " ";
  }
}

// Função para mostrar mensagem de erro da data de nascimento
function msg_erro_validade_data() {
  if (!dateValidation(inputDate.value)) {
    inputPassword.parentElement.children[3].innerHTML =
      "Necessita ter no mínimo 18 anos para criar uma conta!";
  }
  else {
    inputPassword.parentElement.children[3].innerHTML = " ";
  }
}

// Função para mostrar mensagem de erro do telefone
function msg_erro_validade_tel() {
  if (!telValidation(inputTel.value)) {
    inputTel.parentElement.children[3].innerHTML =
      "Digite um número de telefone válido!";
  }
  else{
    inputTel.parentElement.children[3].innerHTML = " ";
  }
}

// Função para mostrar mensagem de erro do CRM 

function msg_erro_validade_crm() { 
  if (!crmValidation(inputCRM.value)) { 
    inputCRM.parentElement.children[3].innerHTML = 
      "Digite um número CRM válido!";
  }
  else { 
    inputCRM.parentElement.children[3].innerHTML = " "; 
  }
}

// Função para mostrar mensagem de erro da senha do Admin

function msg_erro_validade_password_admin() {
  if (passwordConfirmValidation(inputPasswordAdmin, passwordAdmin)) { 
    inputPasswordAdmin.parentElement.children[3].innerHTML = 
      "Digite a senha do administrador correta!";
  }
  else { 
    inputPasswordAdmin.parentElement.children[3].innerHTML = " "; 
  }
}