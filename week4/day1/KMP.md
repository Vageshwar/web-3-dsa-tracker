KMP (Knuth-Morris-Pratt) Algorithm in JavaScript
The KMP algorithm is an efficient string matching algorithm that avoids unnecessary comparisons when searching for a pattern in a text. It uses a preprocessing table (called the LPS array) to skip characters in the pattern string after a mismatch.

🔍 Why Use KMP?
Naive string matching takes O(m * n) time (m = pattern length, n = text length).

KMP improves this to O(n + m) by preprocessing the pattern.

🧠 Core Concepts
1. LPS Array (Longest Prefix Suffix)
LPS[i] is the length of the longest proper prefix of the substring pattern[0...i] which is also a suffix.

Helps to avoid rechecking characters after a mismatch.

📘 Example Use Case
Find all occurrences of the pattern 'abc' in the text 'abcabcabc'.

🧑‍💻 JavaScript Implementation
Step 1: Compute the LPS Array

```
function computeLPSArray(pattern) {
  const lps = Array(pattern.length).fill(0);
  let length = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
}

```
Step 2: Perform the KMP Search

```
function kmpSearch(text, pattern) {
  const lps = computeLPSArray(pattern);
  const result = [];

  let i = 0; // index for text
  let j = 0; // index for pattern

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      result.push(i - j); // Match found
      j = lps[j - 1];
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return result;
}

const text = "abcabcabc";
const pattern = "abc";

const matches = kmpSearch(text, pattern);
console.log(matches); // Output: [0, 3, 6]

```
✅ Output Explanation
Pattern "abc" is found at indices:

0 → "abc"

3 → "abc"

6 → "abc"