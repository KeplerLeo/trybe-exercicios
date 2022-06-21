// Exercício 10
const custo = 10;
const venda = 20;

if (custo >= 0 && venda >= 0) {
  const valorCustoTotal = custo * 1.2;
  const lucro = (venda - valorCustoTotal) * 1000;
  console.log(lucro);
} else {
  console.log('ERRO: Valor menor que zero!');
}
