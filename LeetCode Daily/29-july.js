/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function(nums) {
    const n = nums.length;
    const bits = Array(31).fill(-1);
    const ans = Array(n);
    
    for(let i = n-1; i >= 0; i--){
        let j = i;

        for(let bit = 0; bit < 31; bit++){
            if(!(nums[i] & (1 << bit))){
                if(bits[bit] !== -1){
                    j = Math.max(j, bits[bit]);
                }
            }else{
                bits[bit] = i;
            }
        }
        ans[i] = j - i + 1;
    }
    return ans;
    
};