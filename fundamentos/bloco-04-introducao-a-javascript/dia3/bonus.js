// Bônus 1
let n = 5;
for (let i = 0; i < n; i++) {
  let quadrado = '';
  for (let j = 0; j < n; j++) {
    quadrado += '*';
  }
  console.log(quadrado);
}

// Bônus 2
for (let i = 0; i < n; i++) {
  let triangulo = '';
  for (let j = 0; j <= i; j++) {
    triangulo += '*';
  }
  console.log(triangulo);
}

// Bônus 3
for (let i = 0; i < n; i++) {
  let triangulo = '';
  for (let j = 0; j < n; j++) {
    if (j < n - i - 1) {
      triangulo += ' ';
    } else {
      triangulo += '*';
    }
  }
  console.log(triangulo);
}

// Bônus 4
for (let i = 1; i <= (n + 1) / 2; i += 1) {
  let piramide = '';
  for (let j = 1; j <= n; j += 1) {
    if (j > (n + 1) / 2 - i && j < (n + 1) / 2 + i) {
      piramide += '*';
    } else {
      piramide += ' ';
    }
  }
  console.log(piramide);
}

// Bônus 5
for (let i = 1; i <= (n + 1) / 2; i += 1) {
  let piramide = '';
  for (let j = 1; j <= n; j += 1) {
    if (j === (n + 1) / 2 - (i - 1) || j === (n + 1) / 2 + (i - 1) || i === (n + 1) / 2) {
      piramide += '*';
    } else {
      piramide += ' ';
    }
  }
  console.log(piramide);
}


// Bônus 6
let num = 60;
let divisor = 0;
for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    divisor++;
  }
}
if (divisor === 2) {
  console.log('O número ' + num + ' é primo');
} else {
  console.log('O número ' + num + ' não é primo');
}
