import { FabricaConexoes } from "../../../banco-de-dados/FabricaConexoes.js";
import { MedClinicDAO } from "../../../banco-de-dados/DAO/databaseMedClinicDAO.js";
import { LembreteDAO } from "../../../banco-de-dados/DAO/lembreteDAO.js";

const fabricaConexoes = new FabricaConexoes();

export const getAllLembretesFromPac = async (req, res) => {
    const conexao = await fabricaConexoes.open();
    const databaseMedClinic = new MedClinicDAO(conexao);
    const tableLembrete = new LembreteDAO(conexao);
  
    const { idPac } = req.params;
  
    try {
      await databaseMedClinic.useDatabase();
      const result = await tableLembrete.getAllLembretesFromPacDAO(idPac)
      res.status(201).send(result);
    } 
    catch (err) {
      res.status(500).send("Erro ao acessar os Lembretes!");
    }
  
    await fabricaConexoes.end();
  };