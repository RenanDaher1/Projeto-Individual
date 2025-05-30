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
titulo varchar(45) unique not null,
dtAula datetime not null);

create table usuario_aula(
id int auto_increment not null,
fkAula int not null,
fkUsuario int not null,
dtInicio_aula datetime default current_timestamp,
primary key (id, fkAula, fkUsuario),
foreign key (fkUsuario) references usuario(idusuario),
foreign key (fkAula) references aula(idAula));

select * from usuario;

