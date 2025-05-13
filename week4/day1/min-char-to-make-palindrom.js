// Minimum Characters to Add at Front for Palindrome
// Last Updated : 25 Oct, 2024
// Given a string s, the task is to find the minimum number of characters to be added to the front of s to make it palindrome. A palindrome string is a sequence of characters that reads the same forward and backward.

// Examples: 

// Input: s = “abc”
// Output: 2
// Explanation: We can make above string palindrome as “cbabc”, by adding ‘b’ and ‘c’ at front.

// Input: str = “aacecaaaa”
// Output: 2
// Explanation: We can make above string palindrome as “aaaacecaaaa” by adding two a’s at front of string.

function computeLPSArray(pat) {
    let n = pat.length;
    let lps = new Array(n).fill(0);

    // lps[0] is always 0
    let len = 0;

    // loop calculates lps[i] for i = 1 to n-1
    let i = 1;
    while (i < n) {

        // If the characters match, increment len
        // and set lps[i]
        if (pat[i] === pat[len]) {
            len++;
            lps[i] = len;
            i++;
        }

        // If there is a mismatch
        else {

            // If len is not zero, update len to
            // the last known prefix length
            if (len !== 0) {
                len = lps[len - 1];
            }

            // No prefix matches, set lps[i] to 0
            else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

// Method returns minimum character to be added at
// front to make string palindrome
function minChar(s) {
    let n = s.length;
    let rev = s.split("").reverse().join("");

    // Get concatenation of string, special character
    // and reverse string
    s = s + "$" + rev;

    // Get LPS array of this concatenated string
    let lps = computeLPSArray(s);

    // By subtracting last entry of lps array from
    // string length, we will get our result
    return n - lps[lps.length - 1];
}

// Driver Code
let s = "AACECAAAA";
console.log(minChar(s));