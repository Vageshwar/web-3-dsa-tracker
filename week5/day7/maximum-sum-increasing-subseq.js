// Given an array arr[] of n positive integers. The task is to find the sum of the maximum sum subsequence of the given array such that the integers in the subsequence are sorted in strictly increasing order.

// Examples:

// Input: arr[] = [1, 101, 2, 3, 100]
// Output: 106
// Explanation: The maximum sum of a increasing sequence is obtained from [1, 2, 3, 100].

// Input: arr[] = [4, 1, 2, 3]
// Output: 6
// Explanation: The maximum sum of a increasing sequence is obtained from [1, 2, 3].

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSunSubsequence = function(nums) {
    let ans = 0;
    let n = ans.length;
    for(let i = 0; i<n;i++){
        dp[i] = nums[i];
        for(let j = 0; j<i; j++){
            dp[i] = Math.max(ans, dp[i]+dp[j]);
        }
        ans = Math.max(dp[i], ans);
    }
    return ans;
};