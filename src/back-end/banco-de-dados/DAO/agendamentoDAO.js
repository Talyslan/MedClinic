import { tableDAO } from "./superclasse/tableDAO.js";

export class AgendamentoDAO extends tableDAO {
  // sql para criação da tabela
  static sql_nomeTabela = `agendamento`;
  static sql_especificacoesTabela = `
    id INT AUTO_INCREMENT PRIMARY KEY,
    status ENUM('concluido', 'agendado', 'cancelado') NOT NULL DEFAULT 'agendado',
    dataAgendamento DATE NOT NULL,
    hora TIME NOT NULL,
    id_medico INT NOT NULL,
    id_paciente INT NOT NULL,
    FOREIGN KEY (id_medico) REFERENCES medico(id),
    FOREIGN KEY (id_paciente) REFERENCES paciente(id)`;

  // variaveis sql para consultas
  static sql_SelectAll = `
  SELECT id, status, DATE_FORMAT(dataAgendamento, '%Y-%m-%d') as dataAgendamento, hora, id_medico, id_paciente
  FROM agendamento;`;

  static sql_SelectOne = `
    SELECT id, status, DATE_FORMAT(dataAgendamento, '%Y-%m-%d') as formattedDate, hora, id_medico, id_paciente
    FROM agendamento
    WHERE agendamento.id_paciente = ?;
`;

    static sql_SelectMedOfAgendamento = `
    SELECT pes.nome, med.valorConsulta
    FROM
        medico as med, 
        pessoa as pes, 
        agendamento as ag
    WHERE 
        ag.id_paciente = ?
        and med.id = ?
        and med.id = pes.id
         LIMIT 1`;

  constructor(conexaoExistente) {
    super(conexaoExistente);
  }

  async getMedicoOfAgendamentoOnDB(idPac, idMed) {
    try {
      const [result] = await this._conexao.execute(this.constructor.sql_SelectMedOfAgendamento, [idPac, idMed]);
      console.log(`Sucesso ao buscar medico do id ${idPac} que tem id ${idMed}!`);
      return result[0];
    } 
    catch (err) {
      console.error(`Erro ao buscar medico do id ${idPac} que tem id ${idMed}! | ${err.stack}`);
      throw err;
    }
  }
}