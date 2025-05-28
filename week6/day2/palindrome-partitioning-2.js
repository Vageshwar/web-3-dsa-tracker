// LC: https://leetcode.com/problems/palindrome-partitioning-ii/description/

// Given a string s, partition s such that every substring of the partition is a palindrome.

// Return the minimum cuts needed for a palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: 1
// Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
// Example 2:

// Input: s = "a"
// Output: 0
// Example 3:

// Input: s = "ab"
// Output: 1
 

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {

    let n = s.length;
    let dp = Array(n).fill(-1);
    const isPalindrome = (i,j) => {
        while(j > i){
            if(s.charAt(i) !== s.charAt(j)) {
                return false;
            };
            j--;
            i++;
        }
        return true;
    }

    function f(idx){
        if(idx >= n){
            return 0;
        }
        if(dp[idx] !== -1) return dp[idx];
        let minCost = Number.MAX_SAFE_INTEGER;
        for(let j = idx; j < n; j++){
            if(isPalindrome(idx,j)){
                let cost = 1 + f(j+1);
                minCost = Math.min(cost, minCost);
            }
        }
        dp[idx] = minCost;
        return minCost;
    }

    return (f(0) - 1);
};


/**
 * @param {string} s
 * @return {number}
 */
var minCutTable = function(s) {

    let n = s.length;
    let dp = Array(n+1).fill(0);
    const isPalindrome = (i,j) => {
        while(j > i){
            if(s.charAt(i) !== s.charAt(j)) {
                return false;
            };
            j--;
            i++;
        }
        return true;
    }

    for(let i = n-1; i>=0;i--){
        let minCost = Number.MAX_SAFE_INTEGER;
        for(let j = i; j <n; j++){
            if(isPalindrome(i,j)){
                let cost = 1 + dp[j+1];
                minCost = Math.min(minCost, cost);
            }
        }
        dp[i] = minCost;
    }

    return dp[0]-1;
};