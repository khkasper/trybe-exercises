// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let n1 = 3;
let n2 = 6;
let n3 = 10;

if (n1%2 === 1 || n2%2 === 1 || n3%2 === 1) {
  console.log(true);
} else {
  console.log(false);
}