/**
 * @param {number[][]} rects
 * @return {number}
 */
var areaOfMaxDiagonal = function (rects) {
    let maxD = 0;
    let maxA = 0;

    for (const [x, y] of rects) {
        const d = x ** 2 + y ** 2;
        const a = x * y;

        if (d === maxD) {
            maxA = Math.max(maxA, a);
            continue;
        }

        if (d > maxD) {
            maxD = d;
            maxA = a;
        }
    }

    return maxA;
};