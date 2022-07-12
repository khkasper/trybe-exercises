function numeroMenor(numeros) {
  let maior = 0;
  for (let index in numeros) {
    if (numeros[maior] < numeros[index]) {
      maior = index;
    }
  }
  return maior;
}
