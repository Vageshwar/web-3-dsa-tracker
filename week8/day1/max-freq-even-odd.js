/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
    const c = new Map();
    for (const ch of s) {
        c.set(ch, (c.get(ch) || 0) + 1);
    }
    let maxOdd = 1,
        minEven = s.length;
    for (const [_, value] of c) {
        if (value % 2 === 1) {
            maxOdd = Math.max(maxOdd, value);
        } else {
            minEven = Math.min(minEven, value);
        }
    }
    return maxOdd - minEven;
};