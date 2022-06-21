// Exercício 6
const peca = 'rei';

switch (peca.toLowerCase()) {
  case 'peão':
    console.log(
      'Peão -> Se move uma casa para frente ou até duas casas para frente caso seja o primeio movimento da peça'
    );
    break;
  case 'bispo':
    console.log('Bispo -> Se move para as diagonais');
    break;
  case 'cavalo':
    console.log('Cavalo -> Se move em "L" e pode saltar sobre outras peças');
    break;
  case 'torre':
    console.log('Torre -> Se move na horizontal ou vertical');
    break;
  case 'rainha':
    console.log('Rainha -> Se move na horizontal, vertical ou diagonal');
    break;
  case 'rei':
    console.log('Rei -> Se move uma casa para qualquer direção');
    break;
  default:
    console.log('Peça inválida!!!');
}
