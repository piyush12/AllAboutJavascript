import { getCharacterMap, removeNonAlphanumeric } from "./utils";

// ####### Palindromes
const isPalindrome = (string) => {
  const formattedString = removeNonAlphanumeric(string).toLowerCase();
  // Walk from the beginning and end to the middle and compare each character
  for (let i = 0; i < formattedString.length / 2; i++) {
    if (
      formattedString[i] !== formattedString[formattedString.length - 1 - i]
    ) {
      return false;
    }
  }
  return true;
};

// console.log(isPalindrome("Never odd or even"));

// ##### Anagrams

/* Here are some examples of words that are anagrams.

“listen” and “silent”
“rail safety” and “fairy tales”
“dormitory” and “dirty room”
“the eyes” and “they see” */

function anagrams(stringA, stringB) {
  const formattedStringA = removeNonAlphanumeric(stringA);
  const formattedStringB = removeNonAlphanumeric(stringB);

  const charMapA = getCharacterMap(formattedStringA);
  const charMapB = getCharacterMap(formattedStringB);

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }
  return true;
}

// console.log(anagrams("listen", "silent"));
