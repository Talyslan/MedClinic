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
('Juninho Oliveira', 'senha101112', '1989-11-30', '12312312312', 'juninho.oliveira@example.com'),
('Ana Pereira', 'senha111', '1985-06-17', '45678901234', 'ana.pereira@example.com'),
('Lucas Lima', 'senha222', '1990-02-25', '56789012345', 'lucas.lima@example.com'),
('Carla Nunes', 'senha333', '1983-03-15', '67890123456', 'carla.nunes@example.com'),
('Ricardo Costa', 'senha444', '1995-12-10', '78901234567', 'ricardo.costa@example.com');

INSERT INTO paciente (id) VALUES
(1),
(2),
(5),
(6);

INSERT INTO medico (id, especializacao, crm, valorConsulta) VALUES
(3, 'Cardiologia', 'CRM12345', 300),
(4, 'Dermatologia', 'CRM67890', 200),
(7, 'Pediatria', 'CRM11223', 250),
(8, 'Ortopedia', 'CRM44556', 350);

INSERT INTO telefone (id, telefone) VALUES
(1, '11987654321'),
(2, '21987654321'),
(3, '31987654321'),
(4, '41987654321'),
(5, '51987654321'),
(6, '61987654321'),
(7, '71987654321'),
(8, '81987654321');

INSERT INTO disponibilidade (id_medico, hora_inicio, status) VALUES
(3, '09:00:00', 'disponível'),
(3, '10:00:00', 'disponível'),
(4, '14:00:00', 'indisponível'),
(7, '08:00:00', 'disponível'),
(7, '11:00:00', 'indisponível'),
(8, '13:00:00', 'disponível');

INSERT INTO agendamento (status, dataAgendamento, hora, id_medico, id_paciente) VALUES
('agendado', '2024-07-10', '09:00:00', 3, 1),
('concluido', '2024-07-05', '14:00:00', 4, 2),
('cancelado', '2024-07-12', '10:00:00', 3, 2),
('agendado', '2024-07-11', '08:00:00', 7, 5),
('concluido', '2024-07-06', '13:00:00', 8, 6),
('cancelado', '2024-07-13', '11:00:00', 7, 6);

INSERT INTO pagamento (status, forma, data_hora_realizado, data_vencimento, valor, banco, id_agendamento, id_paciente) VALUES
('concluido', 'pix', '2024-07-05 14:30:00', '2024-07-15', 300.00, 'Banco do Brasil', 1, 1),
('pendente', 'dinheiro', '2024-07-10 09:30:00', '2024-07-20', 200.00, 'Caixa', 2, 2),
('concluido', 'pix', '2024-07-06 13:30:00', '2024-07-16', 350.00, 'Banco Itaú', 4, 6),
('pendente', 'dinheiro', '2024-07-11 08:30:00', '2024-07-21', 250.00, 'Banco Bradesco', 5, 5);

INSERT INTO lembrete (data_envio, titulo, mensagem, id_paciente) VALUES
('2024-07-09 12:00:00', 'Consulta amanhã', 'Lembrete: você tem uma consulta agendada para amanhã às 09:00.', 1),
('2024-07-04 12:00:00', 'Consulta concluída', 'Sua consulta foi concluída.', 2),
('2024-07-10 12:00:00', 'Consulta amanhã', 'Lembrete: você tem uma consulta agendada para amanhã às 08:00.', 5),
('2024-07-05 12:00:00', 'Consulta concluída', 'Sua consulta foi concluída.', 6);

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
