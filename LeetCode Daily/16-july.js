/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    let n = nums.length;
    if(n < 2) return n;

        const parity = nums.map(num => num % 2); // 0 = even, 1 = odd

    let maxLen = 0;

    // Case 1: all even (0s)
    let countEven = parity.filter(p => p === 0).length;
    maxLen = Math.max(maxLen, countEven);

    // Case 2: all odd (1s)
    let countOdd = parity.filter(p => p === 1).length;
    maxLen = Math.max(maxLen, countOdd);

    // Case 3: alternating even-odd (0,1,0,1...)
    maxLen = Math.max(maxLen, getAlternatingLength(parity, 0));

    // Case 4: alternating odd-even (1,0,1,0...)
    maxLen = Math.max(maxLen, getAlternatingLength(parity, 1));

    return maxLen;
}

// Helper: Get max length for alternating pattern starting with `startParity`
function getAlternatingLength(parityArr, startParity) {
    let expected = startParity;
    let count = 0;

    for (const p of parityArr) {
        if (p === expected) {
            count++;
            expected = 1 - expected; // alternate 0 <-> 1
        }
    }

    return count;
}