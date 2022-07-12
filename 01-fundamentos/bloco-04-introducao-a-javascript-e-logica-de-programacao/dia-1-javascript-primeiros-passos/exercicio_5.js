// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

let angA = 40;
let angB = 50;
let angC = 90;

if (angA + angB + angC === 180) {
    console.log("true");
} else if (angA < 0 || angB < 0 || angC < 0) {
    console.log("Erro. Valor inválido.");
} else {
    console.log("false");
}