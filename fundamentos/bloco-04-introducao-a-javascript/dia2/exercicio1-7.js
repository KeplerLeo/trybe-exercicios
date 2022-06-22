let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 1
console.log('**** Exercício 1 ****');
for (let number of numbers) {
  console.log(number);
}
console.log('---------------------');
// Exercício 2
console.log('**** Exercício 2 ****');
let soma = 0;
for (let i = 0; i < numbers.length; i++) {
  soma += numbers[i];
}
console.log(soma);
console.log('---------------------');

// Exercício 3
console.log('**** Exercício 3 ****');
let media = 0;
media = soma / numbers.length;
console.log(media);
console.log('---------------------');

// Exercício 4
console.log('**** Exercício 4 ****');
if (media > 20) {
  console.log('Valor maior que 20!');
} else {
  console.log('Valor menor que 20!');
}
console.log('---------------------');

// Exercício 5
console.log('**** Exercício 5 ****');
let maior = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (maior < numbers[i]) {
    maior = numbers[i];
  }
}
console.log(maior);
console.log('---------------------');

// Exercício 6
console.log('**** Exercício 6 ****');
let count = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    count++;
  }
}
console.log(count);
console.log('---------------------');

//Exercício 7
console.log('**** Exercício 7 ****');
let menor = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (menor > numbers[i]) {
    menor = numbers[i];
  }
}
console.log(menor);
console.log('---------------------');
