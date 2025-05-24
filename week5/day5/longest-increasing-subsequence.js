// LC: https://leetcode.com/problems/longest-increasing-subsequence/description/

// Given an integer array nums, return the length of the longest strictly increasing subsequence.

 

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1
 

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = Array(n).fill(1);
    let n = nums.length;
    let maxNum = Number.MIN_SAFE_INTEGER;
    for(let i = 1; i<n;i++){
        if(nums[i-1] < nums[i]){
            dp[i] =  dp[i-1]+1;
            maxNum = Math.max(maxNum, nums[i]);
            
        }else{
            dp[i] = dp[i]; 
        }
            
    }
};