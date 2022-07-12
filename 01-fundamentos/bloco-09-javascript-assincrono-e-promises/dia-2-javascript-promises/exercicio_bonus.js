const sumRandomNumbers = () => {
  const array = [];
  for (let i = 0; i < 10; i += 1) {
    array[i] = Math.round(Math.random() * 50);
  }
  const sum = array.map((number) => number ** 2)
    .reduce((acc, next) => acc += next);

  if (sum >= 8000) {
    throw new Error();
  }

  return sum;
}

const sumArrayFromSum = (sum) => [2, 3, 5, 10].map(number => sum / number)
  .reduce((number, acc) => number + acc);

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const sumFromSum = await sumArrayFromSum(sum);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();
