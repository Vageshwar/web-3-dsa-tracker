/**
 * @param {number[][]} fruits
 * @return {number}
 */
var maxCollectedFruits = function (fruits) {
const n = fruits.length;
    let ans = 0;

    // Student 1: fixed diagonal path
    for (let i = 0; i < n; ++i) {
        ans += fruits[i][i];
        fruits[i][i] = 0;  // remove these so no one else collects
    }

    function dp(grid) {
        let prev = new Array(n).fill(-Infinity);
        let curr = new Array(n).fill(-Infinity);

        prev[n - 1] = grid[0][n - 1];  // start from top-right

        for (let i = 1; i < n - 1; ++i) {
            for (let j = Math.max(n - 1 - i, i + 1); j < n; ++j) {
                let best = prev[j];

                if (j - 1 >= 0) best = Math.max(best, prev[j - 1]);
                if (j + 1 < n) best = Math.max(best, prev[j + 1]);

                curr[j] = best + grid[i][j];
            }
            [prev, curr] = [curr, prev]; // Swap buffers
        }

        return prev[n - 1]; // End at bottom-right
    }

    // Student 2
    ans += dp(fruits);

    // Transpose matrix to simulate Student 3's mirrored path
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            [fruits[i][j], fruits[j][i]] = [fruits[j][i], fruits[i][j]];
        }
    }

    // Student 3
    ans += dp(fruits);

    return ans;
};