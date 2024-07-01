export const pessoas = [
  {
    nome: "João Silva",
    senha: "hashed_password1",
    data_nasc: "1980-05-15",
    cpf: "12345678901",
    email: "joao.silva@example.com",
  },
  {
    nome: "Maria Souza",
    senha: "hashed_password2",
    data_nasc: "1990-07-20",
    cpf: "10987654321",
    email: "maria.souza@example.com",
  },
  {
    nome: "Carlos Pereira",
    senha: "hashed_password3",
    data_nasc: "1975-03-30",
    cpf: "11122233344",
    email: "carlos.pereira@example.com",
  },
  {
    nome: "Ana Oliveira",
    senha: "hashed_password4",
    data_nasc: "1985-11-25",
    cpf: "44433322211",
    email: "ana.oliveira@example.com",
  },
];
/*
exemplo para adicionar com API
pessoa/paciente:
{
  "nome": "Maria Oliveira",
  "senha": "hashed_password2",
  "data_nasc": "1995-10-22",
  "cpf": "98765432109",
  "email": "maria.oliveira@example.com"
}

medico:
{
  "nome": "José Santos",
  "senha": "hashed_password3",
  "data_nasc": "1988-03-18",
  "cpf": "45678901234",
  "email": "jose.santos@example.com",
  "especializacao": "Clínica Geral",
  "crm": "12345"
}
*/

export const pacientes = [
  { id: 1, nome: "João Silva" },
  { id: 2, nome: "Maria Souza" },
];

export const medicos = [
  {
    id: 3,
    especializacao: "Cardiologia",
    crm: "CRM12345",
    nome: "Carlos Pereira",
  },
  { id: 4, especializacao: "Pediatria", crm: "CRM54321", nome: "Ana Oliveira" },
];

export const telefones = [
  { id: 1, telefone: "3455-1234", nome: "João Silva" },
  { id: 2, telefone: "5555-5678", nome: "Maria Souza" },
  { id: 3, telefone: "5565-8765", nome: "Carlos Pereira" },
  { id: 4, telefone: "5585-4321", nome: "Ana Oliveira" },
];

// // Inserindo dados
// pessoas.forEach((obj) => tablePessoa.insertInto_Pessoa(obj));
// pacientes.forEach((obj) => tablePaciente.insertInto_Paciente(obj));
// medicos.forEach((obj) => tableMedico.insertInto_Medico(obj));
// telefones.forEach((obj) => tableTelefone.insertInto_Telefone(obj));
