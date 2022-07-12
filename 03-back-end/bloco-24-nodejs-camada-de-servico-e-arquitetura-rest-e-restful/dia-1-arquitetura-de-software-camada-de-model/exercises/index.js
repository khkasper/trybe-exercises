const express = require('express');
const app = express();
const user = require('./routers/user');

const PORT = process.env.PORT || 3000;

app.user(express.json());

app.use('/user', user);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});