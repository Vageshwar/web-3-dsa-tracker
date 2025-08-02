/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    let maxVal = 0;
    for(let num of nums){
        maxVal |= num;
    }

    let n = 1 << nums.length;
    let res = 0;

    for(let i = 0; i < n; i++){
        let c = 0;
        for(let j = 0; j < nums.length; j++){
            if(((i >> j) & 1) === 1){
                c |= nums[j];
            }
        }

        if(c === maxVal){
            res++;
        }
    }
    return res;
};