function numeroMenor(numeros) {
  let maior = 0;
  for (let index in numeros) {
    if (numeros[maior] > numeros[index]) {
      maior = index;
    }
  }
  return maior;
}

console.log(numeroMenor([2, 4, 6, 7, 10, 0, -3]));
