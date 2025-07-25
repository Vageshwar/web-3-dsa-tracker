/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    nums.sort((a,b) => b-a);
    let ans = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[i-1]){
            continue;
        }
        if(nums[i] < 0) break;
        ans+= nums[i];
    }
    return ans;
};