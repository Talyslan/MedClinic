// imports
import { FabricaConexoes } from "../../../banco-de-dados/FabricaConexoes.js";
import { MedClinicDAO } from "../../../banco-de-dados/DAO/databaseMedClinicDAO.js";
import { PessoaDAO } from "../../../banco-de-dados/DAO/pessoaDAO.js";

const fabricaConexoes = new FabricaConexoes();

export const getSenhaPessoa = async (req, res) => {
  const conexao = await fabricaConexoes.open();
  const databaseMedClinic = new MedClinicDAO(conexao);
  const tablePessoa = new PessoaDAO(conexao);

  const { email } = req.params;

  try {
    await databaseMedClinic.useDatabase();
    const result = await tablePessoa.getEmailBySenha(email)
    res.status(201).send(result);
  } 
  catch (err) {
    res.status(500).send("Erro ao acessar a senha!");
  }

  await fabricaConexoes.end();
};


