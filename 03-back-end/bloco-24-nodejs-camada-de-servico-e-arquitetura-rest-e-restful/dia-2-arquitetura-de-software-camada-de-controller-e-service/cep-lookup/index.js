const express = require('express');
const app = express();
const cep = require('./routes/cepRoute');
const { error } = require('./middlewares');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.json({ message: 'pong!' });
})

app.use('/cep', cep);

app.use(error);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));