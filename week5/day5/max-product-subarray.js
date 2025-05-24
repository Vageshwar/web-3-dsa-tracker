// LC: https://leetcode.com/problems/maximum-product-subarray/description/

// Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let prefix = 1;
    let suffix = 1;
    let n = nums.length;
    let maxI = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i<n; i++){
        if(prefix === 0) prefix = 1;
        if(suffix === 0) suffix = 1;

        prefix *= nums[i];
        suffix *= nums[n-i-1];
        maxI = Math.max(maxI, Math.max(prefix, suffix));
    }
    return maxI;
};