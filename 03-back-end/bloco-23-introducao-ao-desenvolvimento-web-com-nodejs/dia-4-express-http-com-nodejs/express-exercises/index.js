const fs = require('fs/promises');
const express = require('express');
const rescue = require('express-rescue');

const app = express();

app.use(express.json());

const handleErrorsMiddleware = (err, _req, res, next) => {
  res.status(500).send(err.message);
  next();
}

app.get('/ping', (_req, res) => {
  res.json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
})

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age <= 17) return res.status(401).send({ message: 'Unauthorized' });
  res.status(200).json({ message: `Hello, ${name}!` } );
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
})

app.get('/simpsons', rescue(async (_req, res) => {
  const content = await fs.readFile('./simpsons.json', 'utf-8');
  const result = JSON.parse(content);
  res.json(result);
}));

app.get('/simpsons/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const content = JSON.parse(data);
  const result = content.find((character) => character.id === id);
  if (!result) res.status(404).send({ message: 'simpson not found' });
  res.status(200).json(result);
}));

app.post('/simpsons', rescue(async (req, res) => {
  const { id, name } = req.body;
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const content = JSON.parse(data);
  const isIdUsed = content.some((character) => character.id === id);
  if (isIdUsed) return res.status(409).send({ message: 'id already exists' });
  content.push({ id, name });
  await fs.writeFile('./simpsons.json', JSON.stringify(content, null, 2));
  res.send(204).exit();
}));

app.use(handleErrorsMiddleware);

app.listen(3000, () => {
  console.log(`Listening on port 3000`)
});