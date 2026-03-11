CREATE DATABASE IF NOT EXISTS dbselecao;

USE dbselecao;

-- Tabela de seleções
CREATE TABLE IF NOT EXISTS selecoes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    selecao VARCHAR(255) NOT NULL,
    grupo VARCHAR(10) NOT NULL
);

-- Inserir dados iniciais
INSERT INTO selecoes (selecao, grupo) VALUES
('Brasil', 'C'),
('EUA', 'A'),
('Canada', 'B'),
('Alemanha', 'D');