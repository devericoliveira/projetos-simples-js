/*
  1. Crie uma função chamada calculadora 
    - Receba três parâmetros: dois números e uma operação matemática representada por uma string 
  2. A função deve retornar o resultado da operação matemática aplicada aos dois números.

  output esperado: 

  Resultado: 7
  Resultado: 7
  Resultado: 24
  Resultado: 4
*/

function calc(num1, num2, operator) {
  let output;
  switch(operator) {
    case "+": 
      output = num1 + num2;
    break;
    case "-": 
      output = num1 - num2;
    break;
    case "*": 
      output = num1 * num2;
    break;
    case "/": 
      output = num1 / num2;
    break;
  }

  return output;
}

console.log(calc(4, 3, "+"))
console.log(calc(10, 3, "-"))
console.log(calc(4, 6, "*"))
console.log(calc(16, 4, "/"))