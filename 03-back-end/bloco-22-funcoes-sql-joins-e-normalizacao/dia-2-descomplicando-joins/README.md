# Atividades

## Para fixar - INNER JOIN

Vamos ver agora alguns desafios para consolidar esse conhecimento sobre o INNER JOIN, utilizando o banco de dados sakila. Antes de começar a escrever suas queries, identifique quais tabelas contêm as informações de que você precisa e como elas estão relacionadas.

1. Monte uma query que exiba o **id do ator**, **nome do ator** e **id do filme** em que ele já atuou usando as tabelas **actor** e **film_actor**.

```sql
SELECT 
  fa.actor_id,
  CONCAT(a.first_name, ' ', a.last_name) AS actor_name,
  FA.film_id
FROM sakila.film_actor AS fa
JOIN sakila.actor AS a
ON fa.actor_id = a.actor_id
```

2. Use o **JOIN** para exibir o **nome**, **sobrenome** e **endereço** de cada um dos funcionários do banco. Use as tabelas **staff** e **address**.

```sql
SELECT s.first_name, s.last_name, s.address
FROM sakila.staff AS s
JOIN sakila.address AS a
ON s.address_id = a.address_id;
```

3. Exiba o **id do cliente**, **nome** e **email** dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o **id do endereço** e o **nome da rua** onde o cliente mora. Essas informações podem ser encontradas nas tabelas **customer** e **address**.

```sql
SELECT
  c.customer_id,
  c.first_name,
  c.email,
  c.address_id,
  a.address
FROM sakila.customer AS c
JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY first_name
LIMIT 100;
```

4. Exiba o **nome**, **email**, **id do endereço**, **endereço** e **distrito** dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas **address** e **customer**.

```sql
SELECT
  c.first_name,
  c.email,
  c.address_id,
  a.address,
  a.district
FROM sakila.customer AS c
JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE district = 'California'
AND first_name LIKE '%rene%';
```

5. Exiba o **nome** e a **quantidade de endereços** dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela **address** e **customer**.

```sql
SELECT
  CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
  COUNT(a.address) AS number_of_addresses
FROM sakila.customer AS c
JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE active = 1
GROUP BY customer_name
ORDER BY customer_name DESC;
```

6. Monte uma query que exiba o **nome**, **sobrenome** e a **média de valor** ( **amount** ) paga aos funcionários no ano de 2006. Use as tabelas **payment** e **staff**. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

```sql
SELECT
  CONCAT(a.first_name, ' ', s.last_name) AS staff_name,
  AVG(p.amount) AS payment_average
FROM sakila.payment AS p
JOIN sakila.staff AS s
ON p.staff_id = s.staff_id
WHERE YEAR(p.payment_date) = '2006'
GROUP BY staff_name;
```

7. Monte uma query que exiba o **id do ator**, **nome**, **id do filme** e **título do filme**, usando as tabelas **actor**, **film_actor** e **film**. Dica: você precisará fazer mais de um **JOIN** na mesma query.

```sql
SELECT
  fa.actor_id,
  CONCAT(a.first_name, ' ', a.last_name) AS actor_name,
  fa.film_id,
  f.title
FROM sakila.film_actor AS fa
JOIN sakila.actor AS a
ON fa.actor_id = a.actor_id
JOIN sakila.film AS f
ON fa.film_id = f.film_id
```

## Para fixar - SELF JOIN

1. Queremos saber os **ids** e **custos de substituição** dos filmes que possuem o mesmo custo de substituição.

```sql
SELECT 
  f1.film_id AS film1,
  f2.film_id AS film2,
  f1.replacement_cost
FROM sakila.film AS f1, sakila.film AS f2
WHERE f1.replacement_cost = f2.replacement_cost
ORDER BY film1, film2;
```

2. Exiba o **título** e a **duração de empréstimo** dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.

```sql
SELECT 
  f1.title AS title1,
  f2.title AS title2,
  f1.rental_duration
FROM sakila.film AS f1, sakila.film AS f2
WHERE f1.length = f2.length
AND f1.rental_duration BETWEEN 2 AND 4
AND f2.rental_duration BETWEEN 2 AND 4
ORDER BY title1, title2;
```

## Exercícios

Faça os exercícios 1 a 12 utilizando banco de dados **Pixar** abaixo:

```sql

DROP SCHEMA IF EXISTS Pixar;
CREATE SCHEMA Pixar;
USE Pixar;

CREATE TABLE Theater (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL,
  location VARCHAR(30) NULL
);

CREATE TABLE Movies (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30) NULL,
  year INT NOT NULL,
  length_minutes INT NOT NULL,
  theater_id INTEGER,
  FOREIGN KEY (theater_id) REFERENCES Theater (id)
);

CREATE TABLE BoxOffice (
  movie_id INTEGER,
  FOREIGN KEY (movie_id) REFERENCES Movies (id),
  rating DECIMAL(2,1) NOT NULL,
  domestic_sales INT NOT NULL,
  international_sales INT NOT NULL

);

INSERT INTO Theater(name, location)
    VALUES ('Cinemark', 'São Paulo'),
            ('Brodway theater', 'Nova York'),
            ('Phoenix theater', 'Londres'),
            ('Le Champo', 'Paris'),
            ('TLC Chinese Theater', 'Los Angeles'),
            ('Regal Tikahtnu', 'Alaska');

INSERT INTO Movies(title, director, year, length_minutes, theater_id)
  VALUES ('Toy Story', 'John Lasseter', 1995, 81, 1),
         ('Vida de inseto', 'Andrew Staton', 1998, 95, 3),
         ('Ratatuille', 'Brad Bird', 2010, 115, NULL),
         ('UP', 'Pete Docter', 2009, 101, 2),
         ('Carros', 'John Lasseter', 2006, 117, NULL),
         ('Toy Story 2', 'John Lasseter', 1999, 93, 5),
         ('Valente', 'Brenda Chapman', 2012, 98, NULL),
         ('Monstros SA', 'Pete Docter', 2001, 92, NULL),
         ('Procurando Nemo', 'Jon Lasseter', 2003, 107, 4),
         ('Os Incríveis', 'Brad Bird', 2004, 116, NULL),
         ('WALL-E', 'Pete Docter', 2008, 104, NULL);


INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
  VALUES (1, 8.3, 190000000, 170000000),
         (2, 7.2, 160000000, 200600000),
         (3, 7.9, 245000000, 239000000),
         (4, 6.1, 330000000, 540000000),
         (5, 7.8, 140000000, 310000000),
         (6, 5.8, 540000000, 600000000),
         (7, 7.5, 250000000, 190000000),
         (8, 8.5, 300000000, 250000000),
         (10, 7.4, 460000000, 510000000),
         (9, 6.8, 450000000, 370000000),
         (11, 9.9, 290000000, 280000000);
```

1. Utilizando o **INNER JOIN**, encontre as vendas nacionais ( **domestic_sales** ) e internacionais ( **internationa_sales** ) de cada filme.

```sql
SELECT m.title, bo.domestic_sales, bo.international_sales
FROM Pixar.BoxOffice AS bo
JOIN Pixar.Movies AS m
ON bo.movie_id = m.id;
```

2. Utilizando o **INNER JOIN**, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( **internationa_sales** ) do que vendas nacionais ( **domestic_sales** ).

```sql
SELECT m.title, bo.domestic_sales, bo.international_sales
FROM Pixar.BoxOffice AS bo
JOIN Pixar.Movies AS m
ON bo.movie_id = m.id
WHERE international_sales > domestic_sales;
```

3. Utilizando o **INNER JOIN**, faça uma busca que retorne os filmes e sua avaliação ( **rating** ) em ordem decrescente.

```sql
SELECT m.title, bo.rating
FROM Pixar.BoxOffice AS bo
JOIN Pixar.Movies AS m
ON bo.movie_id = m.id
ORDER BY rating DESC;
```

4. Utilizando o **LEFT JOIN**, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

```sql
SELECT * FROM Pixar.Theater AS t
LEFT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY t.name;
```

5. Utilizando o **RIGHT JOIN**, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

```sql
SELECT * FROM Pixar.Theater AS t
RIGHT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY t.name;
```
