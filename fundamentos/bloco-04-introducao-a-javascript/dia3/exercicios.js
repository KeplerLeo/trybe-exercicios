// Exercício 1
let fatorial = 1;
for (let i = 1; i <= 10; i++) {
  fatorial = fatorial * i;
}
console.log(fatorial);

// Exercício 2
let world = 'tryber';
let invert = '';
for (let i = world.length - 1; i >= 0; i--) {
  invert += world[i];
}
console.log(invert);

// Exercício 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i].length > maior.length) {
    maior = array[i];
  }
  if (array[i].length < menor.length) {
    menor = array[i];
  }
}
console.log(maior);
console.log(menor);

// Exercício 4
let num = 0;
for (let i = 2; i <= 50; i++) {
  let divisor = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      divisor++;
    }
  }
  if (divisor === 2) {
    num = i;
  }
}
console.log(num);
