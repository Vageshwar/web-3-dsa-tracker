/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let map = {}
    let maxFreq = 0;
    for(let num of nums){
        map[num] = (map[num] || 0) + 1;
        maxFreq = Math.max(maxFreq, map[num]);
    }
    let ans = 0;
    Object.keys(map).forEach(key => {
        if(map[key] === maxFreq){
            ans+=maxFreq;
        }
    })

    return ans;
};