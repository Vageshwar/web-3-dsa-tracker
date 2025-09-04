/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    const f = Math.abs(z - x);
    const s = Math.abs(z - y);
    if(f === s) return 0;
    if(f < s) {
        return 1;
    }
    if(f > s) return 2;
};