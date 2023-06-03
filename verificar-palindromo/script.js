/* 
  1. Crie uma função chamada verificarPalindromo
   Receba uma string como parâmetro
   Retorne true se a string for um palíndromo e false caso contrário.

  output desejado: arara, banana, reconhecer, javascript
*/

function checkPalindrome(word) {
  const reverseWord = word.split("").reverse().join("");
  return word === reverseWord;
}

console.log(checkPalindrome("arara"));
console.log(checkPalindrome("banana"));
console.log(checkPalindrome("reconhecer"));
console.log(checkPalindrome("javascript"));