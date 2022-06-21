// Exercício 1
const a = 10;
const b = 20;
console.log("Exercício 1!");
console.log("Soma: " + (a + b));
console.log("Subtração: " + (a - b));
console.log("Multiplicação: " + a * b);
console.log("Divisão: " + a / b);
console.log("Módulo: " + (a % b));
console.log("------------------------");

// Exercício 2
console.log("Exercício 2!");
if (a > b) {
  console.log("'A' é maior que 'B'");
} else {
console.log("'B' é maior que 'A'");
}
console.log("------------------------");

// Exercício 3
const c = 30;
console.log("Exercício 3!");
if (a > b && a > c) {
  console.log("'A' é maior");
} else if (b > a && b > c) {
  console.log("'B' é maior");
} else {
  console.log("'C' é maior");
}
console.log("------------------------");

// Exercício 4
const num = -5;
console.log("Exercício 4!");
if (num > 0) {
  console.log("positive");
} else if (num == 0) {
  console.log("zero");
} else {
  console.log("negative");
}