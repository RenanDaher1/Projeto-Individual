CREATE DATABASE projetoIndividual;
USE projetoIndividual;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
nome_usuario VARCHAR(45) NOT NULL UNIQUE,
email VARCHAR (60)NOT NULL
);

INSERT INTO usuario VALUES 
(DEFAULT, 'Renan', 'redaher_', 'renan.franceschelli@sptech.school'),
(DEFAULT, 'Renan', 'redaher_2', 'renan.franceschelli@sptech.school');

