![Banner (1)](https://github.com/Talyslan/MedClinic/assets/78499700/50b81edf-b8d5-41e3-9130-e974e4d4d940)

# MedClinic 💉

## Objetivo

O objetivo deste projeto é proporcionar aos alunos oportunidade para aplicar os conhecimentos adquiridos nas disciplinas de Programação Orientada a Objetos, Fundamentos de Banco de Dados e Programação Web em projeto prático.

## Tema: Sistema de Agendamento de Consultas

- Agendamento online: Permitir que os clientes agendem consultas através de uma plataforma online.
- Notificações de lembrete: Enviar lembretes automáticos de consulta por e-mail ou mensagem de texto.
- Calendário de disponibilidade: Exibir a disponibilidade dos profissionais para consulta em tempo real.
- Registro de histórico médico: Manter registros dos atendimentos anteriores e informações médicas dos pacientes.
- Gerenciamento de cancelamentos e reagendamentos: Permitir que os clientes cancelem ou re-agendem consultas com facilidade.
- Integração de pagamento: Integrar um sistema de pagamento para cobrança de consultas agendadas.

## Como usar?
### Requisitos
MySQL WorkBench instalado na máquina e ter uma conexão sem senha no usuário root.
Node.js

### No projeto
Realize um clone do projeto.
```javascript
git clone https://github.com/Talyslan/MedClinic.git
```

Instale as dependências.
```javascript
npm install
or
npm i
```

Crie um arquivo .env e coloque as variáveis de ambiente (1)
```javascript
PORT=value
DB_HOST=value
DB_USER=value
DB_PASS=value
```


Instale o banco local.
```javascript
npm run database
```

Rode o servidor da API.
```javascript
npm run dev
```

## Disciplinas

### Banco de Dados
- Orientadora: Wládia Bessa.
s no projeto aqui:
<a href="./readmes/BCDD.md">Readme - Programação Orientada a Objetos</a>

### Programação Orientada a Objetos
Informações sobre o que foi usado de Banco de Dado
- Orientador: Ricardo Rubens.

Informações sobre o que foi usado de POO no projeto aqui:
<a href="./readmes/POO.md">Readme - Programação Orientada a Objetos</a>

### Programação Web
- Orientador: Edison Gomes.

Informações sobre o que foi usado de Programação Web no projeto aqui:
<a href="./readmes/PWEB.md">Readme - Programação Orientada a Objetos</a>

## Figma

Link do Figma: <a href="https://www.figma.com/file/rkpodyPJAEsVC17SN7mZ42/Web-Site---HeathTech?type=design&node-id=0-1&mode=design&t=if7RKvTVmJ4EHrg2-0">
Clique Aqui
</a>

## Tecnologias
- HTML
- CSS
- JavaScript
- Biblioteca AOS (Animation On Scroll)
- SQL (MySQL Workbench)

## 👨‍🎓 Integrantes:

- Maria Izabel dos Santos Oliveira.
- Matheus Ferreira da Silva Barros.
- Rafael Silva Amorim.
- Talyslan Cauan Pimentel Canabarro.

## Atualizações

- (Código de Atualização: 'Inicial da Pessoa' 1.0. + 'Próximo número')

### Exemplo:
- cod1.0.1 -
### Adições:
- add1
- add2
### Remoções:
- rmv1
- rmv2
### Bugs:
- bug1
- bug2
<p>
|==============================|
|     Atualização: mat1.0.1    |
|==============================|
</p>

### Adições:
- src/api/autentificacao/jwt.js - Objeto jwt que cria, verifica e apaga tokens
- .env para variáveis de ambiente (ver '1')
### Remoções:
- Nenhuma
### Bugs:
- É preciso adaptar a API para receber e verificar tokens
- Não foi aplicado 100% as funções de token devido o problema acima 
