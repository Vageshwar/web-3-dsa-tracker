/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let maxVal = Math.max(...nums);

    let res = 1;
    const n = nums.length;
    let temp = 1;
    for(let i = 1; i < n; i++){
        if(nums[i] === nums[i-1] && nums[i] === maxVal){
            temp+=1;
            res = Math.max(res, temp);
        }else{
            temp = 1;
        }
    }

    return res;

};