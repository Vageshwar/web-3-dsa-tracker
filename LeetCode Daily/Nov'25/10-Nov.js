/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const s = [];
    let res = 0;
    for (const n of nums) {
        while (s.length && s[s.length - 1] > n) {
            s.pop();
        }
        if (n === 0) continue;
        if (!s.length || s[s.length - 1] < n) {
            res++;
            s.push(n);
        }
    }
    return res;
};
