# Medclinic💉

## Banco de Dados
1. Criar o modelo EER e Relacional/Lógico enviar até dia 9 de abril. ✔️
2. Criar Banco automático MySQL Workbench. ✔️# Medclinic💉

### Conceitos utilizados
- Modelo EER e Relacional/Lógico (boas práticas)
- Criação do banco com código SQL
- Herança


### Estrutura de Arquivos:

- <a href="./dbmedclin.sql/">Estrutura do banco no modelo relacional</a>
- <a href="./Modelo-EER-LÓGICO.PDF/">Modelo EER</a>

- Primeiro fizemos o modelo lógico, posteriomente o modelo EER que passou por modifcações 
ao decorrer da criação do site. 

### Instalações
- não é necessário

### Status final:
- não foi encontrado nenhum problema com o banco de dados, conseguimos inserir e deletar os dados.
- CREATE TABLE: 

-> pessoa: possue o id como PK, nome, senha, data_nasc, CPF e email

-> paciente: passue o id como PK, tendo com FK a PK de pessoa
                
-> medico: possue o id como PK, especialização, crm, valorConsulta e FK sendo a PK de pessoa

-> telefone: possue id e telefone com PK e FK sendo o id de pessoa

-> disponibilidade: usamos no id o 'AUTO_INCREMENT' para que o id seja criado automaticamente, temos o id_medico, hora_inicio, status patra que possa saber se está disponivel ou indisponivel, FK sendo o id_medico

-> agendamento: id como PK e novamente usamos o 'AUTO_INCREMENT', status para que apareça se está 'concluido', 'agendado', 'cancelado', dataAgendamento, hora, id_medico, id_paciente, FK sendo o id_medico e id_paciente
                
-> pagamento: id sendo PK e usando'AUTO_INCREMENT', status para mostrar se o pagamento está 'concluido' ou 'pendente', a forma de pagamento sendo 'dinheiro'ou 'pix', data_hora_realizado, data_vencimento, valor, banco, por fim id_agendamento e id_paciente sendo FK
                
-> lembrete: id_lembrete sendo PK e 'AUTO_INCREMENT',  data_envio, titulo, mensagem; id_paciente e id_medico sendo FK

- Em seguida inserimos alguns dados.
- TODAS as FK tem 'ON DELETE CASCADE' para evitar erro no banco

- Possue heranças: pessoa -> medico
                          -> paciente
