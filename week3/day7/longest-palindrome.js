// LC: https://leetcode.com/problems/longest-palindromic-substring/description/

// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

function longestPalindrome(s){
    let n = s.length;
    let ans = "";
    let ansL = 0;
    for(let i = 0; i<n; i++){
        let l = i;
        let r = i;
        //for odd length
        while(l >= 0 && r < n && s.charAt(l) === s.charAt(r)){
            let len = r - l + 1;
            if(len > ansL){
                ansL = len;
                ans = s.substring(l, r+1);
            }
            l--;
            r++;
        }
        //for even length
        l = i;
        r = i+1;
        // repeat same
        while(l >= 0 && r < n && s.charAt(l) === s.charAt(r)){
            let len = r - l + 1;
            if(len > ansL){
                ansL = len;
                ans = s.substring(l, r+1);
            }
            l--;
            r++;
        }
    }
    return ans;
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));