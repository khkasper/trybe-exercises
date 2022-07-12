## Agora, a prática!

Antes de iniciar os exercícios

Para os exercícios a seguir, utilizaremos um dataset que contém dados de super-heróis. Faça o download do arquivo JSON [aqui](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/superheroes-957c961ea234d06d7cfdae73c87d47a6.json).

Após fazer o download do arquivo, importe-o para o **MongoDB** através da ferramenta **mongoimport**. No seu terminal, utilize o seguinte comando (lembre-se de substituir o caminho do arquivo):

```bash
mongoimport --db class --collection superheroes <caminho_do_arquivo>
```

Pronto! Você já tem uma base de dados com 734 super-heróis. Para conferir, conecte-se à instância do seu banco de dados utilizando o **Mongo Shell** e execute os seguintes comandos:

```
use class;

db.superheroes.count();
```

Os documentos têm a seguinte estrutura:

```javascript
{
    "_id" : ObjectId("5e4ed2b2866be74b5b26ebf1"),
    "name" : "Abin Sur",
    "alignment" : "good",
    "gender" : "Male",
    "race" : "Ungaran",
    "aspects" : {
        "eyeColor" : "blue",
        "hairColor" : "No Hair",
        "skinColor" : "red",
        "height" : 185,
        "weight" : 40.82
    },
    "publisher" : "DC Comics"
}
```

Exercícios

O MongoDB possui diversas ferramentas, como, por exemplo, **mongo**, **mongosh**, **Compass** e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as queries, o importante é realizá-las.

**Exercício 1**: Inspecione um documento para que você se familiarize com eles. Entenda os campos e os níveis existentes no documento escolhido.

**Exercício 2**: Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está gravada em centímetros.

```javascript
db.superheroes.find({ "aspects.height": { $lt: 180 } });
```

**Exercício 3**: Retorne o total de super-heróis menores que 1.80m.

```javascript
db.superheroes.find({ "aspects.height": { $lt: 180 } }).count();
```

**Exercício 4**: Retorne o total de super-heróis com até 1.80m.

```javascript
db.superheroes.find({ "aspects.height": { $lte: 180 } }).count();
```

**Exercício 5**: Selecione um super-herói com 2.00m ou mais de altura.

```javascript
db.superheroes.find({ "aspects.height": { $gte: 200 } }).limit(1).pretty();
```

**Exercício 6**: Retorne o total de super-heróis com 2.00m ou mais.

```javascript
db.superheroes.find({ "aspects.height": { $gte: 200 } }).count();
```

**Exercício 7**: Selecione todos os super-heróis que têm olhos verdes.

```javascript
db.superheroes.find({ "aspects.eyeColor": "green" });
```

**Exercício 8**: Retorne o total de super-heróis com olhos azuis.

```javascript
db.superheroes.find({ "aspects.eyeColor": "blue" }).count();
```

**Exercício 9**: Utilizando o operador **$in**, selecione todos os super-heróis com cabelos pretos ou carecas ( **"No Hair"** ).

```javascript
db.superheroes.find({ "aspects.hairColor": { $in: [ "Black", "No Hair" ] } });
```

**Exercício 10**: Retorne o total de super-heróis com cabelos pretos ou carecas ( **"No Hair"** ).

```javascript
db.superheroes.find({ "aspects.hairColor": { $in: [ "Black", "No Hair" ] } }).count();
```

**Exercício 11**: Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.

```javascript
db.superheroes.find({ "aspects.hairColor": { $nin: [ "Black", "No Hair" ] } }).count();
```

**Exercício 12**: Utilizando o operador **$not**, retorne o total de super-heróis que não tenham mais de 1.80m de altura.

```javascript
db.superheroes.find({ "aspects.height": { $not: { $gt: 180 } } }).count();
```

**Exercício 13**: Selecione todos os super-heróis que **não** sejam **humanos** ou que **não** sejam maiores do que **1.80m**.

```javascript
db.superheroes.find({
  $nor: [
    { race: "Human" },
    { "aspects.height": { $gt: 180 } }
  ]
});
```

**Exercício 14**: Selecione todos os super-heróis com **1.80m** ou **2.00m** de altura e que **sejam publicados** pela **Marvel Comics**.

```javascript
db.superheroes.find({
  $and: [
    { "aspects.height": { $in: [ 180, 200 ] } },
    { publisher: "Marvel Comics" }
  ]
});
```

**Exercício 15**: Selecione todos os super-heróis que **pesem** entre **80kg** e **100kg**, sejam **Humanos** ou **Mutantes** e **não sejam publicados** pela **DC Comics**.

```javascript
db.superheroes.find({
  "aspects.weight": { $gte: 80, $lte: 100 },
  race: { $in: ["Human", "Mutant"] },
  publisher: { $not: { $eq: "DC Comics" } }
});
```

**Exercício 16**: Retorne o total de documentos que **não** contêm o campo **race**.

```javascript
db.superheroes.find({ race: { $exists: false } }).count();
```

**Exercício 17**: Retorne o total de documentos que **contêm** o campo **hairColor**.

```javascript
db.superheroes.find({ "aspects.hairColor": { $exists: true } }).count();
```

**Exercício 18**: Remova **apenas um** documento publicado pela **Sony Pictures**.

```javascript
db.superheroes.deleteOne({ publisher: "Sony Pictures" });
```

**Exercício 19**: Remova todos os documentos **publicados** pelo **George Lucas**.

```javascript
db.superheroes.deleteMany({ publisher: "George Lucas" });
```
