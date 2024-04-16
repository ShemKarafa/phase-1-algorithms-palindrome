function isPalindrome(word) {
  // Write your algorithm here
  const reverseWorld = word.split("").reverse().join("");
  return word.toLowerCase() === reversedWord.toLowerCase();
}

/* 
  Add your pseudocode here
  Initialize empty array called 'reversedArray'
  Iterate over each character in the input word
  After iteration 'reversedArray' is converted back to a string
  if(reversedWord === word);
  return true else false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
