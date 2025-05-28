// LC: https://leetcode.com/problems/word-break/description/

// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let n = s.length;
    let dp = Array(n+1).fill(-1);
    function f(idx){
        if(idx >= n){
            return;
        }
        if(dp[idx] !== -1) return dp[idx];
        let temp = "";
        for(let i = idx; i>=0;i--){
            temp = `${s.charAt(i)}${temp}`;
            if(wordDict.includes(temp)){
                dp[idx] = true;
                return f(idx+1);
            }
        }
        dp[idx] = false;
        return false;
    }
    f(idx);
    return dp[0];
};

var wordBreakTable = function(s, wordDict) {
    let n = s.length;
    let dp = Array(n+1).fill(false);

    dp[n] = true;

    for(let i = n-1; i>=0; i--){
        for(let j = 0; j < wordDict.length; j++){
            let word = wordDict[j];
            let wn = word.length;
            if((wn + i) <= n && s.substring(i, i+wn) === word){
                dp[i] = dp[i + wn];
            }
            if(dp[i]) break;
        }
    }
    return dp[0];
};