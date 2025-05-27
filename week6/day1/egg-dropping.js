// You are given n identical eggs and you have access to a k-floored building from 1 to k.

// There exists a floor f where 0 <= f <= k such that any egg dropped from a floor higher than f will break, and any egg dropped from or below floor f will not break. There are a few rules given below:

// An egg that survives a fall can be used again.
// A broken egg must be discarded.
// The effect of a fall is the same for all eggs.
// If the egg doesn't break at a certain floor, it will not break at any floor below.
// If the egg breaks on a certain floor, it will break on any floor above.
// Your task is to find the minimum number of moves you need to determine the value of f with certainty.

/**
 * 
 * @param {number} e - eggs 
 * @param {number} f - floors
 */
function nonBreakingFloor(e, f){
    if(f === 0 || f === 1 || e === 1) return f;

    let ans = Number.MAX_SAFE_INTEGER;
    for(let i = 1; i<=f;i++){
        let temp = 1 + Math.max(
            nonBreakingFloor(e-1, k-1),
            nonBreakingFloor(e, f-k)
        );
        ans = Math,min(ans, temp);
    }

    return ans;






}