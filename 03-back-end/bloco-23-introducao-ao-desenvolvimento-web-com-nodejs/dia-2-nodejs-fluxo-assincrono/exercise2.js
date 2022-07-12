const { sumThreeNumbers } = require('./exercise1');

const getRandomNumber = () => Math.floor(Math.random() * 100);
const numbers = Array.from({ length: 3 }, getRandomNumber);

sumThreeNumbers(...numbers)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));