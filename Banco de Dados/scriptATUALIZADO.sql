create database ti;
use ti;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45) not null,
email varchar(80) not null,
nome_usuario varchar(45) unique not null,
senha varchar(45) unique not null);

create table aula(
idAula int primary key auto_increment,
modulo int,
titulo varchar(200) unique not null);

create table usuario_aula(
id int auto_increment not null,
fkAula int not null,
fkUsuario int not null,
dtInicio_aula datetime default current_timestamp,
primary key (id, fkAula, fkUsuario),
foreign key (fkUsuario) references usuario(idUsuario),
foreign key (fkAula) references aula(idAula));

insert into aula values

(default, '1', '1- O que é educação financeira e por que ela importa?'),
(default, '1', '2- Como montar um orçamento pessoal do zero'),
(default, '1', '3- Entendendo renda, despesas fixas e variáveis'),
(default, '1', '4- Como sair do vermelho: lidando com dívidas'),
(default, '1', '5- A importância da reserva de emergência'),
(default, '1', '6- Diferença entre necessidade e desejo de consumo'),
(default, '1', '7- Como usar o cartão de crédito com responsabilidade'),
(default, '1', '8- Planejamento financeiro básico'),
(default, '1', '9- Organização prática com planilhas e apps'),

(default, '2', '1- Juros compostos: o poder dos rendimentos'),
(default, '2', '2- Inflação e seu impacto no poder de compra'),
(default, '2', '3- Tipos de investimentos: renda fixa x variável'),
(default, '2', '4- Tesouro Direto: como funciona e começar'),
(default, '2', '5- CBD, LCI e LCA: o que são e quando usar'),
(default, '2', '6- Fundos de investimento e estrutura básica'),
(default, '2', '7- Como montar um planejamento com metas'),
(default, '2', '8- Mentalidade de investidor'),
(default, '2', '9- Erros comuns ao começar a investir'),

(default, '3', '1- Diversificação de investimentos'),
(default, '3', '2- Análise fundamentalista de ações'),
(default, '3', '3- Dividendos: carteira e geração de renda'),
(default, '3', '4- Fundos Imobiliários: o que são e como investir'),
(default, '3', '5- Previdência privada: vale a pena?'),
(default, '3', '6- ETFs e investimentos no exterior'),
(default, '3', '7- Criptomoedas: como iniciar com segurança'),
(default, '3', '8- Gestão de patrimônio'),
(default, '3', '9- Planejamento para independência financeira');

select * from usuario;
select * from aula;
select * from usuario_aula;

select count(idAula) as 'Quantidade_de_Aulas' from usuario_aula join aula on fkAula = idAula where fkUsuario = 1 group by modulo;


select count(idAula) from usuario_aula left join aula on fkAula = idAula where fkUsuario = 1 and modulo = 1;
select count(idAula) from usuario_aula left join aula on fkAula = idAula where fkUsuario = 1 and modulo = 2;
select count(idAula) from usuario_aula left join aula on fkAula = idAula where fkUsuario = 1 and modulo = 3;
