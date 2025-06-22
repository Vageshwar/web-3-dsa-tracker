// LC: https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/?envType=daily-question&envId=2025-06-21
// You are given a string word and an integer k.

// We consider word to be k-special if |freq(word[i]) - freq(word[j])| <= k for all indices i and j in the string.

// Here, freq(x) denotes the frequency of the character x in word, and |y| denotes the absolute value of y.

// Return the minimum number of characters you need to delete to make word k-special.



/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function(word, k) {
    const freqMap = {};
    for (const char of word) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    const freqs = Object.values(freqMap).sort((a, b) => a - b);
    let minDeletions = Infinity;

    for (let i = 0; i < freqs.length; i++) {
        const base = freqs[i];
        let deletions = 0;

        for (let j = 0; j < freqs.length; j++) {
            if (freqs[j] < base) {
                deletions += freqs[j]; // delete all to bring up to base
            } else if (freqs[j] > base + k) {
                deletions += freqs[j] - (base + k); // bring down to base + k
            }
        }

        minDeletions = Math.min(minDeletions, deletions);
    }

    return minDeletions;
};
