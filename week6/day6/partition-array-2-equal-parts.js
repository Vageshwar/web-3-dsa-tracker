// You are given an integer array nums containing distinct positive integers and an integer target.

// Determine if you can partition nums into two non-empty disjoint subsets, with each element belonging to exactly one subset, such that the product of the elements in each subset is equal to target.

// Return true if such a partition exists and false otherwise.

// A subset of an array is a selection of elements of the array.
//  

// Example 1:

// Input: nums = [3,1,6,8,4], target = 24

// Output: true

// Explanation: The subsets [3, 8] and [1, 6, 4] each have a product of 24. Hence, the output is true.

// Example 2:

// Input: nums = [2,5,3,7], target = 15

// Output: false

// Explanation: There is no way to partition nums into two non-empty disjoint subsets such that both subsets have a product of 15. Hence, the output is false.

var checkEqualPartitions = function(nums, target) {

    const n = nums.length;
    function f(idx, s1, p1, s2, p2){
        if(idx === n){
            if(s1.length && s2.length && p1 === target && p2 === target) return true;
            return false;
        }
        const num = nums[idx];
        let possible = false;

        if(p1 * num <= target){
            possible ||= f(idx+1, [...s1, num], p1*num, s2, p2);
        }
        if(p2 * num <= target){
            possible ||= f(idx+1, s1, p1, [...s2, num], p2*num)
        }
        return possible;
    }

    return f(0, [], 1, [], 1);
    
    
};


console.log(checkEqualPartitions([2,5,3,7], 15))