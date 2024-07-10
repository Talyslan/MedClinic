export const pacientes = [
  {
    nome: "João Silva",
    senha: "senha123",
    data_nasc: "1980-05-15",
    cpf: "12345678901",
    email: "joao.silva@example.com",
  },
  {
    nome: "Maria Souza",
    senha: "senha456",
    data_nasc: "1992-08-20",
    cpf: "23456789012",
    email: "maria.souza@example.com",
  },
  {
    nome: "Ana Pereira",
    senha: "senha111",
    data_nasc: "1985-06-17",
    cpf: "45678901234",
    email: "ana.pereira@example.com",
  },
  {
    nome: "Lucas Lima",
    senha: "senha222",
    data_nasc: "1990-02-25",
    cpf: "56789012345",
    email: "lucas.lima@example.com",
  },
];

export const medicos = [
  {
    nome: "Pedro Santos",
    senha: "senha789",
    data_nasc: "1975-11-30",
    cpf: "34567890123",
    email: "pedro.santos@example.com",
    especializacao: "Cardiologia",
    crm: "CRM12345",
    valorConsulta: 300,
  },
  {
    nome: "Juninho Oliveira",
    senha: "senha101112",
    data_nasc: "1989-11-30",
    cpf: "12312312312",
    email: "juninho.oliveira@example.com",
    especializacao: "Dermatologia",
    crm: "CRM67890",
    valorConsulta: 200,
  },
  {
    nome: "Carla Nunes",
    senha: "senha333",
    data_nasc: "1983-03-15",
    cpf: "67890123456",
    email: "carla.nunes@example.com",
    especializacao: "Pediatria",
    crm: "CRM11223",
    valorConsulta: 250,
  },
  {
    nome: "Ricardo Costa",
    senha: "senha444",
    data_nasc: "1995-12-10",
    cpf: "78901234567",
    email: "ricardo.costa@example.com",
    especializacao: "Ortopedia",
    crm: "CRM44556",
    valorConsulta: 350,
  },
];

export const telefones = [
  { id: 1, telefone: "11987654321" },
  { id: 2, telefone: "21987654321" },
  { id: 3, telefone: "31987654321" },
  { id: 4, telefone: "41987654321" },
  { id: 5, telefone: "51987654321" },
  { id: 6, telefone: "61987654321" },
  { id: 7, telefone: "71987654321" },
  { id: 8, telefone: "81987654321" },
];

export const disponibilidades = [
  { id_medico: 5, hora_inicio: "09:00:00", status: "disponível" },
  { id_medico: 5, hora_inicio: "10:00:00", status: "disponível" },
  { id_medico: 6, hora_inicio: "14:00:00", status: "indisponível" },
  { id_medico: 7, hora_inicio: "08:00:00", status: "disponível" },
  { id_medico: 7, hora_inicio: "11:00:00", status: "indisponível" },
  { id_medico: 8, hora_inicio: "13:00:00", status: "disponível" },
];

export const agendamentos = [
  {
    status: "agendado",
    dataAgendamento: "2024-07-10",
    hora: "09:00:00",
    id_medico: 5,
    id_paciente: 1,
  },
  {
    status: "concluido",
    dataAgendamento: "2024-07-05",
    hora: "14:00:00",
    id_medico: 6,
    id_paciente: 2,
  },
  {
    status: "cancelado",
    dataAgendamento: "2024-07-12",
    hora: "10:00:00",
    id_medico: 5,
    id_paciente: 2,
  },
  {
    status: "agendado",
    dataAgendamento: "2024-07-11",
    hora: "08:00:00",
    id_medico: 7,
    id_paciente: 4,
  },
  {
    status: "concluido",
    dataAgendamento: "2024-07-06",
    hora: "13:00:00",
    id_medico: 8,
    id_paciente: 3,
  },
  {
    status: "cancelado",
    dataAgendamento: "2024-07-13",
    hora: "11:00:00",
    id_medico: 7,
    id_paciente: 2,
  },
];

export const pagamentos = [
  {
    status: "concluido",
    forma: "pix",
    data_hora_realizado: "2024-07-05 14:30:00",
    data_vencimento: "2024-07-15",
    valor: 300.0,
    banco: "Banco do Brasil",
    id_agendamento: 1,
    id_paciente: 1,
  },
  {
    status: "pendente",
    forma: "dinheiro",
    data_hora_realizado: "2024-07-10 09:30:00",
    data_vencimento: "2024-07-20",
    valor: 200.0,
    banco: "Caixa",
    id_agendamento: 2,
    id_paciente: 2,
  },
  {
    status: "concluido",
    forma: "pix",
    data_hora_realizado: "2024-07-06 13:30:00",
    data_vencimento: "2024-07-16",
    valor: 350.0,
    banco: "Banco Itaú",
    id_agendamento: 4,
    id_paciente: 4,
  },
  {
    status: "pendente",
    forma: "dinheiro",
    data_hora_realizado: "2024-07-11 08:30:00",
    data_vencimento: "2024-07-21",
    valor: 250.0,
    banco: "Banco Bradesco",
    id_agendamento: 5,
    id_paciente: 3,
  },
];

export const lembretes = [
  {
    data_envio: "2024-07-09 12:00:00",
    titulo: "Consulta amanhã",
    mensagem: "Lembrete: você tem uma consulta agendada para amanhã às 09:00.",
    id_paciente: 1,
    id_medico: 5
  },
  {
    data_envio: "2024-07-04 12:00:00",
    titulo: "Consulta concluída",
    mensagem: "Sua consulta foi concluída.",
    id_paciente: 2,
    id_medico: 6
  },
  {
    data_envio: "2024-07-10 12:00:00",
    titulo: "Consulta amanhã",
    mensagem: "Lembrete: você tem uma consulta agendada para amanhã às 08:00.",
    id_paciente: 3,
    id_medico: 5
  },
  {
    data_envio: "2024-07-05 12:00:00",
    titulo: "Consulta concluída",
    mensagem: "Sua consulta foi concluída.",
    id_paciente: 4,
    id_medico: 6,
  },
  {
    data_envio: "2024-07-08 12:00:00",
    titulo: "Consulta confirmada",
    mensagem: "Sua consulta está confirmada para o dia 10 de julho às 10:00.",
    id_paciente: 1,
    id_medico: 5
  },
  {
    data_envio: "2024-07-06 12:00:00",
    titulo: "Exame de sangue",
    mensagem: "Lembrete: você tem um exame de sangue agendado para amanhã às 07:30.",
    id_paciente: 2,
    id_medico: 7
  },
  {
    data_envio: "2024-07-11 12:00:00",
    titulo: "Retorno de consulta",
    mensagem: "Lembrete: você tem um retorno de consulta agendado para amanhã às 11:00.",
    id_paciente: 3,
    id_medico: 8
  },
  {
    data_envio: "2024-07-07 12:00:00",
    titulo: "Consulta marcada",
    mensagem: "Sua consulta foi marcada para o dia 12 de julho às 14:00.",
    id_paciente: 4,
    id_medico: 5
  },
  {
    data_envio: "2024-07-03 12:00:00",
    titulo: "Lembrete de consulta",
    mensagem: "Lembrete: você tem uma consulta agendada para o dia 9 de julho às 09:00.",
    id_paciente: 1,
    id_medico: 7
  },
  {
    data_envio: "2024-07-05 12:00:00",
    titulo: "Exame de rotina",
    mensagem: "Lembrete: seu exame de rotina está agendado para amanhã às 08:30.",
    id_paciente: 2,
    id_medico: 8
  },
  {
    data_envio: "2024-07-12 12:00:00",
    titulo: "Consulta de retorno",
    mensagem: "Lembrete: você tem uma consulta de retorno agendada para amanhã às 15:00.",
    id_paciente: 3,
    id_medico: 6
  },
  {
    data_envio: "2024-07-06 12:00:00",
    titulo: "Procedimento marcado",
    mensagem: "Lembrete: seu procedimento está marcado para o dia 10 de julho às 09:00.",
    id_paciente: 4,
    id_medico: 5
  }
];

