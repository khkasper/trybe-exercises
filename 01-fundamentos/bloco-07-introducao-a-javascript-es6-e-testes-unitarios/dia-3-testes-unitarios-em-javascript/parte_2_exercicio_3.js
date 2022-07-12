const assert = require('assert');

let sum = 0;
function sumAllNumbers(numbers) {
  numbers.forEach((i) => (sum += i));
  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
