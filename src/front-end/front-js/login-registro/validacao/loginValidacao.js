// import
import {
  emailValidation,
  passwordValidation,
} from "./funcoesDeValidacao/funcoesDeValidacao.js";

// selectors
const [inputEmail, inputPassword] = document.querySelectorAll(".inputsVerificar");

// event
inputEmail.addEventListener("input", emailValidation);
inputPassword.addEventListener("input", passwordValidation);
