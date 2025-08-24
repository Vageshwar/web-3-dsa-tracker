/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let start = 0;
    let ans = 0;
    let zeros = 0;
    for(let i = 0; i < nums.length; i++){
        zeros += (nums[i] === 0 ? 1 : 0);

        while(zeros > 1 && start < nums.length){
            zeros -= (nums[start] === 0 ? 1 : 0);
            start++;
        }
        ans = Math.max(ans, i - start);
    }
    return ans;
};