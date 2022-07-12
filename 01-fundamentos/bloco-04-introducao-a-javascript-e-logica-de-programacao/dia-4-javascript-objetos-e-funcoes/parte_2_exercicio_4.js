function maior(nomes) {
  let maior = nomes[0];
  for (let index in nomes) {
    if (maior.length < nomes[index].length) {
      maior = nomes[index];
    }
  }
  return maior;
}

console.log(maior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
