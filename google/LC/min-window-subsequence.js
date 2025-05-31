// You are given two strings, s1 and s2. Your task is to find the smallest substring in s1 such that s2 appears as a subsequence within that substring.

// The characters of s2 must appear in the same sequence within the substring of s1.
// If there are multiple valid substrings of the same minimum length, return the one that appears first in s1.
// If no such substring exists, return an empty string.
// Note: Both the strings contain only lowercase letters.

// Examples:

// Input: s1 = "geeksforgeeks", s2 = "eksrg"
// Output: "eksforg"
// Explanation: "eksforg" satisfies all required conditions. s2 is its subsequence and it is longest and leftmost among all possible valid substrings of s1.
// Input: s1 = "abcdebdde", s2 = "bde" 
// Output: "bcde"
// Explanation:  "bcde" is the answer and "deb" is not a smaller window because the elements in the window must occur in order.
// Input: s1 = "ad", s2 = "b" 
// Output: ""
// Explanation: There is no substring exists.

class Solution {
    minWindow(s1, s2) {
        let minLen = Infinity;
        let minStart = -1;
        let i = 0;
        
        while (i < s1.length) {
            let j = 0;

            // Forward pass: try to match s2 as a subsequence in s1 starting from i
            while (i < s1.length) {
                if (s1[i] === s2[j]) {
                    j++;
                    if (j === s2.length) break;
                }
                i++;
            }

            // If we reached end of s1 and didn't match full s2
            if (j < s2.length) break;

            // Backtrack to find start of window
            let end = i;
            j = s2.length - 1;
            while (j >= 0) {
                if (s1[i] === s2[j]) {
                    j--;
                }
                i--;
            }

            i++; // Adjust i to actual start of the window
            if ((end - i + 1) < minLen) {
                minLen = end - i + 1;
                minStart = i;
            }

            i = i + 1; // Continue from next character
        }

        return minStart === -1 ? "" : s1.substr(minStart, minLen);
    }
}