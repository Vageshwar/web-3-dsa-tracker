/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function (n) {
    if (n >= 4800) return 1;

    const m = Math.ceil(n / 25);
    const memo = new Map();

    function dfs(i, j) {
        if (i <= 0 && j <= 0) return 0.5;
        if (i <= 0) return 1;
        if (j <= 0) return 0;

        const key = `${i},${j}`;
        if (memo.has(key)) return memo.get(key);

        const result = 0.25 * (
            dfs(i - 4, j) +
            dfs(i - 3, j - 1) +
            dfs(i - 2, j - 2) +
            dfs(i - 1, j - 3)
        );

        memo.set(key, result);
        return result;
    }

    return dfs(m, m);
}