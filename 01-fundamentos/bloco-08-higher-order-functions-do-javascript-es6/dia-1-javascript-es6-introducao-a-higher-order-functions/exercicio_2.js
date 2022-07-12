const numberChecker = (a, b) => a === b;
const lottery = (x, callback) => callback(x, Math.ceil(Math.random() * 5)) ? 'Parabéns você ganhou' : 'Tente novamente';
console.log(lottery(2 , numberChecker));
