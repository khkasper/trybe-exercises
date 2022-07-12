const fetch = require('node-fetch');

const promise = new Promise((resolve, reject) => {
  const array = [];
  for (let i = 0; i < 10; i += 1) {
    array[i] = Math.round(Math.random() * 50);
  }
  const sum = array.map((number) => number ** 2)
    .reduce((acc, next) => acc + next);
  sum < 8000 ? resolve() : reject();
});

promise
  .then(() => console.log('Promise resolvida'))
  .catch(() => console.log('Promise rejeitada'));
