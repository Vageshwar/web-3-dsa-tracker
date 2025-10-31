/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let arr = Array(101).fill(0);
    let res = [];
    for(const n of nums){
        if(arr[n]){
            res.push(n);
        }
        arr[n] = 1;
    }
    return res;
};