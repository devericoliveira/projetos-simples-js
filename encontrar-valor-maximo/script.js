/* 
  1. Crie uma função chamada encontrarMaximo 
    Receba um array de números como parâmetro
    Retorne o número máximo presente no array.

  output esperado: [1, 5, 3, 9, 2], [-10, -5, -3, -7], [100, 0, 50, 25]
*/

function findMaximum(numbersToCompare) {
  return Math.max(...numbersToCompare);
}

console.log(findMaximum([1, 5, 3, 9, 2]));
console.log(findMaximum([-10, -5, -3, -7]));
console.log(findMaximum([100, 0, 50, 25]));