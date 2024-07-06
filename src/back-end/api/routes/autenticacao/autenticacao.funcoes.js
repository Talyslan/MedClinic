// imports
import { FabricaConexoes } from "../../../banco-de-dados/FabricaConexoes.js";
import { MedClinicDAO } from "../../../banco-de-dados/DAO/databaseMedClinicDAO.js";
import { PessoaDAO } from "../../../banco-de-dados/DAO/pessoaDAO.js";

const fabricaConexoes = new FabricaConexoes();

export const loginValidation = async (req, res) => {
  const conexao = await fabricaConexoes.open();
  const databaseMedClinic = new MedClinicDAO(conexao);
  const tablePessoa = new PessoaDAO(conexao);

  const { email, senha } = req.body;

  try {
    await databaseMedClinic.useDatabase();
    const result = await tablePessoa.getEmail(email);

    // Se não houver resultados para o email
    if (!result) {
      res.status(404).send("Email não existe!");
      return;
    }

    const senhaNoBanco = await tablePessoa.getSenha(email);

    if (senhaNoBanco === senha) {
      res.status(201).send({ message: "Login bem-sucedido", data: result });
      return;
    } 
    else {
      res.status(401).send("Senha errada!");
      return;
    }
  } 
  catch (err) {
    res.status(500).send("Erro ao acessar a senha!");
  } 
  finally {
    await fabricaConexoes.end();
  }
};
