// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let n1 = 3;
let n2 = 5;
let n3 = 10;

if (n1%2 === 0 || n2%2 === 0 || n3%2 === 0) {
  console.log(true);
} else {
  console.log(false);
}