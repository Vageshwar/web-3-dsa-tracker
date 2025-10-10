/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function(energy, k) {
    // const n = energy.length;
    // const helper = (i, s) => {
    //     if(i >= n) return s;
    //     s += energy[i];
    //     return helper(i+k, s);
    // }
    // let res = Number.MIN_SAFE_INTEGER;

    // for(let i = 0; i < n; i++){
    //     res = Math.max(res, helper(i, 0));
    // }

    // return res;

    const n = energy.length;
    const dp = new Array(n).fill(0);
    let result = Number.MIN_SAFE_INTEGER;
    for (let i = n - 1; i >= 0; i--) {
        dp[i] = energy[i] + ((i + k < n) ? dp[i + k] : 0);
        result = Math.max(result, dp[i]);
    }
    return result
};