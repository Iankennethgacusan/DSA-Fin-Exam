function isPalindrome(word) {
  let reversed = word.split("").reverse().join("");
  return word === reversed;
}

let inputs = prompt("Enter two words (comma separated):").split(",");

let word1 = inputs[0].trim();
let word2 = inputs[1].trim();

console.log(`Word 1: ${word1}`);
console.log(`Is "${word1}" a palindrome?`, isPalindrome(word1));

console.log(`Word 2: ${word2}`);
console.log(`Is "${word2}" a palindrome?`, isPalindrome(word2));
