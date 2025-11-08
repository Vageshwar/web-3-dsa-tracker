/**
 * @param {number} n
 * @return {number}
 */
var minimumOneBitOperations = function(n) {
    let res = n;
    res ^= res >> 16;
    res ^= res >> 8;
    res ^= res >> 4;
    res ^= res >> 2;
    res ^= res >> 1;
    return res;
};