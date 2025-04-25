// Problem Statement: You are given an array of ‘N’ integers. You need to find the length of the longest sequence which contains the consecutive elements.

// Examples

// Example 1:

// Input: [100, 200, 1, 3, 2, 4]

// Output: 4

// Explanation: The longest consecutive subsequence is 1, 2, 3, and 4.

// Input: [3, 8, 5, 7, 6]

// Output: 4

// Explanation: The longest consecutive subsequence is 5, 6, 7, and 8.
// I think there might be a soln without sorting
// sorting seems easy to solve, but its (nlogn + n) => nlogn

var longestConsecutive = function(nums) {
    nums = nums.sort((a,b) => a-b);
    if(nums.length === 0) return 0;
    let max = 1, window = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === nums[i]) continue;
        window = nums[i - 1] + 1 === nums[i] ? window + 1 : 1;
        max = Math.max(window, max);
    }
    return max;

};

//  I think we can do it in n+n soln

function longestConsecutiveN(arr){
    let map = {};
    let max = 1;
    arr.forEach(item => {
        map[item] = true;
    })
    arr.forEach(item =>{
        if(!map[item-1]){
            let ans = 1;
            let start = item+1;
            while(map[start]){
                ans++;
                start++;
            }
            max = Math.max(ans, max); 
        }
    })
    return max;
}

// hmm not n+n

