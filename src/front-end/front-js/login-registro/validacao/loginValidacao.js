// importa as funções para validar email e senha
import {
  emailValidation,
  passwordValidation,
} from "./funcoesDeValidacao/funcoesDeValidacao.js";

// seleciona o email e senha vindos para input 
const [inputEmail, inputPassword] = Document.querySelectorAll(".inputsVerificar");

// funções para escutar o input
inputEmail.addEventListener("input", emailValidation);
inputPassword.addEventListener("input", passwordValidation);

// TODO: Criar função para complementar o listener: se for true, o /p/ de erro é 0, se não, 
// modifica para uma mensagem de erro 

const error_message_verify = () => {
  console.log(inputEmail.parentElement.children[3].innerHTML)
}

error_message_verify()