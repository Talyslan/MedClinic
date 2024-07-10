const path = "../login-registro-page/form-icon/";
const SRCSenhaInvisivel = path + "cadeado-fechado.png";
const SRCSenhaVisivel = path + "cadeado-aberto.png";

// handle
const handletoggleVisibilidadeSenha = ({ target }) => {
  const imgSrc = target.getAttribute("src");
  const input = target.previousElementSibling.previousElementSibling;

  if (target && imgSrc === SRCSenhaInvisivel) {
    target.src = SRCSenhaVisivel;
    input.type = "text";
  } else if (target && imgSrc === SRCSenhaVisivel) {
    target.src = SRCSenhaInvisivel;
    input.type = "password";
  }
};

// selectors
const listaInputsSenhas = document.querySelectorAll("input[type='password']");
const listaImgCadeado = [];

listaInputsSenhas.forEach((input) =>
  listaImgCadeado.push(input.nextElementSibling.nextElementSibling)
);

// events
listaImgCadeado.forEach((imgCadeado) => {
  imgCadeado.addEventListener("click", handletoggleVisibilidadeSenha);
});
