# Agora a prática

Agora vamos abrir o **Workbench** e fazer uma análise prática do banco de dados sakila, que já deve estar instalado, caso você tenha feito a instalação do **MySql Workbench** de forma padrão. Caso o banco sakila não esteja disponível, volte até a seção **Restaurando o banco de dados de prática sakila** e siga as instruções listadas. Com esse banco disponível na sua instalação do **Workbench**, sua missão agora é tentar finalizar os exercícios a seguir!

## **Exercício 1**: Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o **MySql Workbench**.

**R**: Clicar com o botão direito na tabela que desejamos fazer a pesquisa e no menu haverá a opção "Select Rows - Limit 1000".

## **Exercício 2**: Descubra como é possível criar uma tabela sem usar código **SQL** usando o **MySql Workbench**.

**R**: No agrupamento "Tables", ao clicar com o botão direito neste temos a opção "Create Table...". Ao clicar nesta opção abre uma janela onde podemos criar colunas, selecionar contraints etc.

## **Exercício 3**: Feito isso, crie uma tabela com as seguintes restrições:

Nome da tabela: **Filme**

Colunas:
  * **FilmeId** - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
  * **Descricao** - não permite nulos, tipo texto (varchar(100);
  * **AnoLancamento** - não permite nulos, tipo int;
  * **Nota** - permite nulos, tipo int;

## **Exercício 4**: Analise a tabela **city** e encontre a tabela à qual a coluna **country_id** faz referência.

**R**: Através do Table Inspector, em DDL, na linha 8, pode-se identificar que a coluna country_id faz referência à coluna country_id da tabela country

## **Exercício 5**: Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country?

**R**: N-1, pois várias cidades podem ser do mesmo país.

## **Exercício 6**: Qual tipo de relacionamento a tabela **country** faz com a tabela **city**?

**R**: 1-N, pois um país pode ter várias cidades.

## **Exercício 7**: Abra tabela por tabela do banco **sakila** e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.

**R**: 

* **address** N:1 com **city**.
* **city** 1:N com **address**.
* **customer** N:1 com **store**.
* **customer** 1:1 com **address**.
* **film** N:1 com **language**.
* **store** 1:N com **customer**.
