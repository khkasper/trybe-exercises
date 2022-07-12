function repetido(num) {

  let contador1 = 0;
  let contador2 = 0;
  let indexNum = 0;

  for (let index in num) {
    let verificaNumero = num[index];
    for (let index2 in num) {
      if (verificaNumero === num[index2]) {
        contador2 += 1;
      }
    }
    if (contador2 > contador1) {
      contador1 = contador2;
      indexNum = index;
    }
    contador2 = 0;
  }
  return num[indexNum];
}
