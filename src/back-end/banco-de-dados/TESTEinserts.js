export const pacientes = [
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
];

export const medicos = [
  {
    nome: "Carlos Pereira",
    senha: "hashed_password3",
    data_nasc: "1975-03-30",
    cpf: "11122233344",
    email: "carlos.pereira@example.com",
    especializacao: "Cardiologia",
    crm: "CRM12345",
  },
  {
    nome: "Ana Oliveira",
    senha: "hashed_password4",
    data_nasc: "1985-11-25",
    cpf: "44433322211",
    email: "ana.oliveira@example.com",
    especializacao: "Pediatria",
    crm: "CRM54321",
  },
];

export const telefones = [
  { telefone: "3455-1234" },
  { telefone: "5555-5678" },
  { telefone: "5565-8765" },
  { telefone: "5585-4321" },
];

/*
exemplo para adicionar com API

paciente:
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