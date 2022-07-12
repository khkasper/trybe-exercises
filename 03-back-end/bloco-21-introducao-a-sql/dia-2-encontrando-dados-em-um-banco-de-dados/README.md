# Praticando SELECT

## Parte 1

### 1. Monte uma query que exiba seu nome na tela;
- R: SELECT 'Kristiano';
 
### 2. Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
- R: SELECT 'Kristiano', 'Kasper', 'Berlim', '100';

### 3. Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL ( alias é como um apelido no português);
- R: SELECT 'Kristiano' AS Nome, 'Kasper' AS Sobrenome, 'Berlim' AS 'Cidade Natal', '100' AS Idade;

### 4. Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT ;
- R: SELECT 13*8;

### 5. Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".
- R: SELECT NOW() AS 'Data Atual';

## Parte 2

**Utilizando a planilha:**
USE Sakila;

### 1. Escreva uma query que selecione todas as colunas da tabela city ;
- R: SELECT * FROM city;

### 2. Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer ;
- R: SELECT first_name, last_name FROM customer;

### 3. Escreva uma query que exiba todas as colunas da tabela rental ;
- R: SELECT * FROM rental;

### 4. Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film ;
- R: SELECT title, description, release_year FROM film;

### 5. Utilize o SELECT para explorar todas as tabelas do banco de dados.
- R: SELECT * FROM table_name;

# Praticando CONCAT

### 1. Na tabela sakila.film , monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme .
- R: SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM film;

### 2. Na tabela sakila.film , crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação . Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.
- R: SELECT CONCAT(title, ' ', rating) AS Classificação FROM film;

### 3. Na tabela sakila.address , monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço .
- R: SELECT CONCAT(address, ' ', district) AS Endereço FROM address;

# Praticando DISTINCT

```sql
CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Alunos (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
INSERT INTO Escola.Alunos VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
```

### 1. Monte uma query para encontrar pares únicos de nomes e idades .
- R: SELECT DISTINCT Nome, Idade FROM Alunos;

### 2. Quantas linhas você encontraria na query anterior?
- R: 5

### 3. Monte uma query para encontrar somente os nomes únicos.
- R: SELECT DISTINCT Nome FROM Alunos; 

### 4. Quantas linhas você encontraria na query anterior?
- R: 4

### 5. Monte uma query para encontrar somente as idades únicas.
- R: SELECT DISTINCT Idade FROM Alunos; 

### 6. Quantas linhas você encontraria na query anterior?
- R: 4

# Praticando COUNT

**Utilizando a planilha:**
USE Sakila;

### 1. Quantas senhas temos cadastradas nessa tabela?
- SELECT COUNT(password) FROM staff;
- R: 1

### 2. Quantas pessoas temos no total trabalhando para nossa empresa?
- SELECT COUNT(*) FROM staff;
- R: 2

### 3. Quantos emails temos cadastrados nessa tabela?
- SELECT COUNT(email) FROM staff;
- R: 2

# Esquenta

**Utilizando a planilha:**
USE Sakila;

**Para os exercícios a seguir, vamos usar a tabela sakila.film**

### 1. Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
- R: SELECT * FROM film;

### 2. Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação .
- R: SELECT title, release_year, rating FROM film;

### 3. Quantos filmes temos cadastrados?
- R: SELECT COUNT(*) FROM film;

**Para os exercícios a seguir, vamos usar a tabela sakila.actor**

### 1. Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
- R: SELECT last_name FROM actor;

### 2. Quantos sobrenomes únicos temos na tabela?
- R: SELECT COUNT(DISTINCT last_name) FROM actor;

### 3. Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
- R: SELECT * FROM actor ORDER BY last_name, first_name DESC;

### 4. Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados , mas não mostre o idioma english .
- R: SELECT * FROM language LIMIT 5 OFFSET 1;

### 5. Agora vamos tentar fazer o seguinte: vá até a tabela film e selecione todos os dados da tabela. Crie uma query para encontrar os 20 primeiros filmes , incluindo o título , o ano de lançamento , a duração , a classificação indicativa e o custo de substituição . Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
- R: SELECT title, release_year, length, rating, replacement_cost FROM film ORDER BY length DESC, replacement_cost LIMIT 20;

# Agora, a prática:

**Exercício 1** : Faça as tarefas de 1 a 15.
Para realizar os exercícios do 1 ao 15, restaure o seguinte banco de dados.

```sql
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);

INSERT INTO Scientists(SSN,Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
```

Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos [deste link](https://creativecommons.org/licenses/by-sa/3.0/).

### 1. Escreva uma query para exibir a string "This is an SQL Exercise, Practice and Solution".
- R: SELECT "This is an SQL Exercise, Practice and Solution";

### 2. Escreva uma query para exibir três números em três colunas.
- R: SELECT 1 AS um, 2 AS dois, 3 AS três;

### 3. Escreva uma query para exibir a soma dos números 10 e 15.
- R: SELECT 10+15;

### 4. Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
- R: SELECT 50/2;

**Utilizando a planilha:**
USE Scientists;

### 5. Escreva uma query para exibir todas as informações de todos os cientistas.
- R: SELECT * FROM Scientists;

### 6. Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
- R: SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;

### 7. Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
- R: SELECT * FROM Scientists ORDER BY Name;

### 8. Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.
- R: SELECT * FROM Projects ORDER BY Name DESC;

### 9. Escreva uma query que exiba a string "O projeto **Name** precisou de **Hours** horas para ser concluído." para cada projeto.
- R: SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') AS 'CONCAT example' FROM Projects;

### 10. Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
- R: SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 3;

### 11. Escreva uma query para exibir o código de todos os projetos da tabela **AssignedTo** sem que haja repetições.
- R: SELECT DISTINCT Project FROM AssignedTo;

### 12. Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
- R: SELECT Name from Projects ORDER BY Hours DESC LIMIT 1;

### 13. Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
- R: ELECT Name FROM Projects ORDER BY Hours LIMIT 1 OFFSET 1;

### 14. Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
- R: ELECT * FROM Projects ORDER BY Hours LIMIT 5;

### 15. Escreva uma query que exiba a string "Existem **Number** cientistas na tabela Scientists.", em que **Number** se refira a quantidade de cientistas.
- R: ELECT CONCAT('Existem ', COUNT(*), ' cientistas na tabela Scientists') FROM Scientists;

## Bônus

** Exercício 2** : Para realizar as tarefas do 1 ao 4, restaure o seguinte banco de dados:

```SQL
DROP SCHEMA IF EXISTS PiecesProviders;
CREATE SCHEMA PiecesProviders;
USE PiecesProviders;

CREATE TABLE Pieces (
  Code INTEGER PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Providers (
  Code VARCHAR(40) PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Provides (
  Piece INTEGER,
  FOREIGN KEY (Piece) REFERENCES Pieces (Code),
  Provider VARCHAR(40),
  FOREIGN KEY (Provider) REFERENCES Providers (Code),
  Price INTEGER NOT NULL,
  PRIMARY KEY (Piece , Provider)
);

INSERT INTO Providers(Code, Name)
  VALUES ('HAL', 'Clarke Enterprises'),
    ('RBT', 'Susan Calvin Corp.'),
    ('TNBC', 'Skellington Supplies');

INSERT INTO Pieces(Code, Name)
  VALUES (1, 'Sprocket'),
    (2, 'Screw'),
    (3, 'Nut'),
    (4, 'Bolt');

INSERT INTO Provides(Piece, Provider, Price)
  VALUES (1, 'HAL', 10),
    (1, 'RBT', 15),
    (2, 'HAL', 20),
    (2, 'RBT', 25),
    (2, 'TNBC', 14),
    (3, 'RBT', 50),
    (3, 'TNBC', 45),
    (4, 'HAL', 5),
    (4, 'RBT', 7);
```

Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos [deste link](https://creativecommons.org/licenses/by-sa/3.0/).


**Utilizando a planilha:**
USE PiecesProviders;

### 1. Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT .
- R: SELECT Piece, Price FROM Provides WHERE Provider = 'RBT';

### 2. Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
- R: SELECT * FROM Provides ORDER BY Price DESC LIMIT 5;

### 3. Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.
- R: SELECT Provider, Price FROM Provides ORDER BY Price DESC LIMIT 4 OFFSET 2;

### 4. Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL . Ordene o resultado pelos preços das peças de forma decrescente.
- R: SELECT * FROM Provides WHERE Provider = 'HAL' ORDER BY Price DESC;

### 5. Escreva uma query para exibir por quantas empresas a peça 1 é provida.
- R: SELECT COUNT (Provider) FROM Provides WHERE Piece = 1;

### 6. Usando WHERE , faça os exercícios [deste link](https://www.w3schools.com/sql/exercise.asp?filename=exercise_where1) .

1. Select all records where the City column has the value "Berlin".
- R: SELECT * FROM Customers WHERE City = 'Berlin';

2. Use the NOT keyword to select all records where City is NOT "Berlin".
- R: SELECT * FROM Customers WHERE NOT City = 'Berlin';

3. Select all records where the CustomerID column has the value 32.
- R: SELECT * FROM Customers WHERE CustomerID = 32;

4. Select all records where the City column has the value 'Berlin' and the PostalCode column has the value 12209.
- R: SELECT * FROM Customers WHERE City = 'Berlin' AND PostalCode = 12209;

5. Select all records where the City column has the value 'Berlin' or 'London'.
- R: SELECT * FROM Customers WHERE City = 'Berlin' OR City = 'London';

### 7. Aplicando Restrições, faça os exercícios [deste link](https://sqlbolt.com/lesson/select_queries_with_constraints) .

### Exercise 2

Sample table: movies
Columns: Id, Title, Director, Year, Length_minutes

1. Find the movie with a row id of 6
- R: SELECT Title FROM movies WHERE id = 6;

2. Find the movies released in the years between 2000 and 2010 
- R: SELECT Title, Year FROM movies WHERE Year BETWEEN 2000 AND 2010;

3. Find the movies not released in the years between 2000 and 2010
- R: SELECT Title, Year FROM movies WHERE Year NOT BETWEEN 2000 AND 2010;

4. Find the first 5 Pixar movies and their release year
- R: SELECT Title, Year FROM movies LIMIT 5;

### 8. Estude e faça os exercícios das páginas 1 a 3 [deste link](http://www.sqlcourse.com/intro.html) .

Sample Table: empinfo
Columns: first, last, id, age, city, state

1. Display the first name and age for everyone that's in the table.
- R: SELECT first, age, FROM empinfo;

2. Display the first name, last name, and city for everyone that's not from Payson.
- R: SELECT first, last, city FROM empinfo WHERE city <> 'Payson';

3. Display all columns for everyone that is over 40 years old.
- R: SELECT * FROM empinfo WHERE age > 40;

4. Display the first and last names for everyone whose last name ends in an "ay".
- R: SELECT first, last FROM empinfo WHERE last LIKE '%ay';

5. Display all columns for everyone whose first name equals "Mary".
- R: SELECT * FROM empinfo WHERE first = 'Mary';

6. Display all columns for everyone whose first name contains "Mary".
- R: SELECT * FROM empinfo WHERE first LIKE '%mary%';
