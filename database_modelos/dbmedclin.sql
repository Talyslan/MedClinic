CREATE DATABASE IF NOT EXISTS dbmedclin;

USE dbmedclin;

CREATE TABLE pessoa (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    data_nasc DATE NOT NULL,
    cpf CHAR(11) NOT NULL,
    email VARCHAR(255)
);

CREATE TABLE paciente (
	id INT NOT NULL PRIMARY KEY,
    FOREIGN KEY (id) REFERENCES pessoa(id)
);

CREATE TABLE medico (
    id INT NOT NULL PRIMARY KEY,
    especializacao VARCHAR(255) NOT NULL,
    crm VARCHAR(255) NOT NULL,
    valorConsulta INT NOT NULL,
	FOREIGN KEY (id) REFERENCES pessoa(id)
);

CREATE TABLE telefone (
    id INT NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    PRIMARY KEY (id, telefone),
    FOREIGN KEY (id) REFERENCES pessoa(id)
);

CREATE TABLE disponibilidade (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_medico INT,
    hora_inicio TIME NOT NULL,
    status ENUM('disponível', 'indisponível') NOT NULL,
    FOREIGN KEY (id_medico) REFERENCES medico(id_medico),
    UNIQUE (id_medico, hora_inicio)
);

CREATE TABLE agendamento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    status ENUM('concluido', 'agendado', 'cancelado') NOT NULL,
    dataAgendamento DATE NOT NULL,
    hora TIME NOT NULL,
    id_medico INT NOT NULL,
    id_paciente INT NOT NULL,
    FOREIGN KEY (id_medico) REFERENCES medico(id),
    FOREIGN KEY (id_paciente) REFERENCES paciente(id)
);

CREATE TABLE pagamento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    status ENUM('concluido', 'pendente') NOT NULL,
    forma ENUM('dinheiro', 'pix') NOT NULL,
    data_hora_realizado DATETIME NOT NULL,
    data_vencimento DATE NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    banco VARCHAR(20) NOT NULL,
    id_agendamento INT NOT NULL,
    id_paciente INT NOT NULL,
    FOREIGN KEY (id_agendamento) REFERENCES agendamento(id),
    FOREIGN KEY (id_paciente) REFERENCES paciente(id)
);

CREATE TABLE lembrete (
    id_lembrete INT AUTO_INCREMENT PRIMARY KEY,
    data_envio DATETIME,
    titulo VARCHAR(100),
    mensagem VARCHAR(255),
    id_paciente INT,
    FOREIGN KEY (id_paciente) REFERENCES paciente(id)
);

INSERT INTO pessoa (nome, senha, data_nasc, cpf, email) VALUES
('João Silva', 'senha123', '1980-05-15', '12345678901', 'joao.silva@example.com'),
('Maria Souza', 'senha456', '1992-08-20', '23456789012', 'maria.souza@example.com'),
('Pedro Santos', 'senha789', '1975-11-30', '34567890123', 'pedro.santos@example.com'),
('Juninho Oliveira', 'senha101112', '1989-11-30', '12312312312', 'juninho.oliveira@example.com');

INSERT INTO paciente (id) VALUES
(1),
(2);

INSERT INTO medico (id, especializacao, crm, valorConsulta) VALUES
(3, 'Cardiologia', 'CRM12345', 300),
(4, 'Dermatologia', 'CRM67890', 200);

INSERT INTO telefone (id, telefone) VALUES
(1, '11987654321'),
(2, '21987654321'),
(3, '31987654321'),
(4, '41987654321');

INSERT INTO disponibilidade (id_medico, hora_inicio, status) VALUES
(3, '09:00:00', 'disponível'),
(3, '10:00:00', 'disponível'),
(4, '14:00:00', 'indisponível');

INSERT INTO agendamento (status, dataAgendamento, hora, id_medico, id_paciente) VALUES
('agendado', '2024-07-10', '09:00:00', 3, 1),
('concluido', '2024-07-05', '14:00:00', 4, 2),
('cancelado', '2024-07-12', '10:00:00', 3, 2);

INSERT INTO pagamento (status, forma, data_hora_realizado, data_vencimento, valor, banco, id_agendamento, id_paciente) VALUES
('concluido', 'pix', '2024-07-05 14:30:00', '2024-07-15', 300.00, 'Banco do Brasil', 1, 1),
('pendente', 'dinheiro', '2024-07-10 09:30:00', '2024-07-20', 200.00, 'Caixa', 2, 2);

INSERT INTO lembrete (data_envio, titulo, mensagem, id_paciente) VALUES
('2024-07-09 12:00:00', 'Consulta amanhã', 'Lembrete: você tem uma consulta agendada para amanhã às 09:00.', 1),
('2024-07-04 12:00:00', 'Consulta concluída', 'Sua consulta foi concluída.', 2);

-- Selecionando dados da tabela pessoa
SELECT * FROM pessoa;

-- Selecionando dados da tabela paciente
SELECT * FROM paciente;

-- Selecionando dados da tabela medico
SELECT * FROM medico;

-- Selecionando dados da tabela telefone
SELECT * FROM telefone;

-- Selecionando dados da tabela disponibilidade
SELECT * FROM disponibilidade;

-- Selecionando dados da tabela agendamento
SELECT * FROM agendamento;

-- Selecionando dados da tabela pagamento
SELECT * FROM pagamento;

-- Selecionando dados da tabela lembrete
SELECT * FROM lembrete;
