/**
 * @param {number} n
 * @param {number[][]} conflictingPairs
 * @return {number}
 */
var maxSubarrays = function(n, conflictingPairs) {
    const right = Array.from({length: n+1}, () => []);
    for(const pair of conflictingPairs){
        right[Math.max(pair[0], pair[1])].push(Math.min(pair[0], pair[1]));
    }
    let ans = 0;
    let left = [0,0]
    let bonus = Array.from({length: n+1}, () => 0);
    for(let r=1; r<=n;r++){
        for(const l_val of right[r]){
            if(l_val > left[0]){
                left[1] = left[0];
                left[0] = l_val;
            }else if (l_val > left[1]){
                left[1] = l_val;
            }
        }
        ans += r - left[0];
        if(left[0] > 0){
            bonus[left[0]] += left[0] - left[1];
        }
    }

    let maxBonus = 0;
    for(let b of bonus){
        maxBonus = Math.max(maxBonus, b);
    }

    return ans + maxBonus;
};