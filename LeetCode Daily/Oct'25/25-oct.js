/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let k = Math.floor(n/7);
    let F = 28;
    let L = 28 + (k-1) * 7;
    let sum = Math.floor(k * (F+L) / 2);
    let m = 1 + k;
    let f = 0;
    for(let day = 0; day < n%7; day++){
        f += m + day;
    }
    return sum + f;
};
