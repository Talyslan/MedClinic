create database dbmedclin;

use dbmedclin;

create table paciente(
	id int not null,
    nome varchar(255) not null,
    senha varchar(255) not null,
    data_nasc date not null,
    cpf char(11) not null,
    email varchar(255),
    primary key(id)
);

create table medico(
	id int not null,
    nome varchar(255) not null,
    senha varchar(255) not null,
    data_nasc date not null,
    cpf char(11) not null,
    email varchar(255),
    especializacao varchar(255) not null,
    crm varchar(255) not null,
    primary key(id)
);

create table telefone_pac(
	telefone varchar(255) not null,
    id int not null,
    foreign key(id) references paciente(id)
);

create table telefone_med(
	telefone varchar(255) not null,
    id int not null,
    foreign key(id) references medico(id)
);