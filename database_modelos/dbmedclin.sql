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
	FOREIGN KEY (id) REFERENCES pessoa(id)
);

CREATE TABLE telefone (
    id INT NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    PRIMARY KEY (id, telefone),
    FOREIGN KEY (id) REFERENCES pessoa(id)
);
