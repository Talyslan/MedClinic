// import
import { listaDepartamentos } from "../../data/DATAdepartamentos.js";

// handle
const insertOpt = ({ department }) => {
    return `<option value="${department}">${department}</option>`;
}

// selector
const selectEspecializacao = document.querySelector("#especializacao");

// event
if (selectEspecializacao) {
  listaDepartamentos.forEach((departamento) => {
    selectEspecializacao.innerHTML += insertOpt(departamento);
  });
}
