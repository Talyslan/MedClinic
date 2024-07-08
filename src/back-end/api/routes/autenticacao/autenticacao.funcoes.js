// imports
import { FabricaConexoes } from "../../../banco-de-dados/FabricaConexoes.js";
import { MedClinicDAO } from "../../../banco-de-dados/DAO/databaseMedClinicDAO.js";
import { PessoaDAO } from "../../../banco-de-dados/DAO/pessoaDAO.js";
import { JsonWebTokenFunc, SECRET } from "../../autentificacao/jwt.js";

const fabricaConexoes = new FabricaConexoes();

export const loginValidation = async (req, res) => {
  const conexao = await fabricaConexoes.open();
  const databaseMedClinic = new MedClinicDAO(conexao);
  const tablePessoa = new PessoaDAO(conexao);
  const JsonWebToken = new JsonWebTokenFunc()

  const { email, senha } = req.body;

  try {
    await databaseMedClinic.useDatabase();
    const emailNoBanco = await tablePessoa.getEmail(email);

    // Se não houver resultados para o email
    if (!emailNoBanco) {
      console.log("Email não encontrado: ", email);
      res.status(404).send("Email não existe!");
      return;
    }

    const senhaNoBanco = await tablePessoa.getSenha(email);
    const id = await tablePessoa.getId(email);

    if (emailNoBanco === email && senhaNoBanco === senha) {
      const token = JsonWebToken.createJWT(id, res);
      console.log("Token gerado: ", token);

      res.status(200).send({ message: "Login bem-sucedido", auth: true, token: token });
      return;
    } 
    else {
      console.log("Senha incorreta para o email: ", email);
      res.status(401).send("Senha errada!");
      return;
    }

  } 
  catch (err) {
    console.error("Erro ao acessar o email ou a senha! | ", err.stack);
    res.status(500).send("Erro ao acessar o email ou a senha!");
  } 
  finally {
    await fabricaConexoes.end();
  }
};
