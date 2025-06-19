// LC: https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k

// You are given an integer array nums and an integer k. You may partition nums into one or more subsequences such that each element in nums appears in exactly one of the subsequences.

// Return the minimum number of subsequences needed such that the difference between the maximum and minimum values in each subsequence is at most k.

// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    nums = nums.sort((a,b) => a-b);

    if(nums.length === 1) return 1;

    let n = nums.length;
    let i = 0;
    let j = 1;
    let res = 1;

    while(j < n){
        while((nums[j] - nums[i]) <= k){
            j++;
        }
        if(j < n) res++;
        i = j;
        j = i+1;
    }

    return res;



};