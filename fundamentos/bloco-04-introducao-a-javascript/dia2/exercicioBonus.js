// Bônus 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log('****** Bônus 1 ******');
for (let i = 1; i < numbers.length; i++) {
  for (let y = 0; y < numbers.length; y++) {
    if (numbers[i] < numbers[y]) {
      let temp = numbers[i];
      numbers[i] = numbers[y];
      numbers[y] = temp;
    }
  }
}
console.log(numbers);
console.log('---------------------');

// Bônus 2
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log('****** Bônus 2 ******');
for (let i = 1; i < numbers.length; i++) {
  for (let y = 0; y < numbers.length; y++) {
    if (numbers[i] > numbers[y]) {
      let temp = numbers[i];
      numbers[i] = numbers[y];
      numbers[y] = temp;
    }
  }
}
console.log(numbers);
console.log('---------------------');

// Bônus 3
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log('****** Bônus 3 ******');
let newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (i + 1 < numbers.length) {
    newNumbers.push(numbers[i] * numbers[i + 1]);
  } else {
    newNumbers.push(numbers[i] * 2);
  }
}
console.log(newNumbers);
console.log('---------------------');
