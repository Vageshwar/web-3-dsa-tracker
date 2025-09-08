/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for (let a = 1; a < n; a++) {
        const b = n - a;
        if (!a.toString().includes("0") && !b.toString().includes("0")) {
            return [a, b];
        }
    }
    return [];
};
