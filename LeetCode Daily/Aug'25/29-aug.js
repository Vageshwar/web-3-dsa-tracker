/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flowerGame = function(n, m) {
    let x1 = Math.floor(n/2);
    let y1 = m%2 === 1 ? Math.floor(m/2) + 1 : Math.floor(m/2);

    let x2 = n%2 === 1 ? x1 + 1 : x1;
    let y2 = Math.floor(m/2);

    return (x1 * y1) + (x2 * y2);
};