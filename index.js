const validCharacterRegEx = /[a-z0-9]+/g;
const invalidCharacterRegEx = /[^a-z0-9]+|\s+/ig;

/**
 * This function will compare two strings to determine whether they are an anagram.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string} a First string used for comparison
 * @param {string} b Second string used for comparison
 * @returns {boolean} Result determines whether the strings are anagrams
 */
async function anagram(a, b) {
  if (a === undefined || b === undefined || a === null || b === null) {
    return false;
  }

  let sanitizedA = a.replace(invalidCharacterRegEx, '');
  let sanitizedB = b.replace(invalidCharacterRegEx, '');

  sanitizedA = sanitizedA.toLowerCase();
  sanitizedB = sanitizedB.toLowerCase();

  if (sanitizedA.length !== sanitizedB.length) {
    return false;
  }

  const charCount = {};

  // Loop through first string to tally character count
  for (let aIdx = 0; aIdx < sanitizedA.length; aIdx += 1) {
    const character = sanitizedA[aIdx];
    if (character.match(validCharacterRegEx)) {
      charCount[character] = charCount[character] === undefined || charCount[character] === null
        ? 1
        : charCount[character] + 1;
    }
  }

  // Loop through second string to decrement character count. Will delete the key when the count becomes zero, but
  // will add back the key if second string contains more of a character than the first string.
  for (let bIdx = 0; bIdx < sanitizedB.length; bIdx += 1) {
    const character = sanitizedB[bIdx];
    if (character.match(validCharacterRegEx)) {
      charCount[character] = charCount[character] === undefined || charCount[character] === null
        ? -1
        : charCount[character] - 1;

      if (charCount[character] === 0) {
        delete charCount[character];
      }
    }
  }

  return Object.keys(charCount).length === 0;
}

export default anagram;
