/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    const n = grid.length;

    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    const isReachable = (t) => {
        if (grid[0][0] > t) return false;

        const visited = Array.from({ length: n }, () => Array(n).fill(false));
        const queue = [[0, 0]];
        visited[0][0] = true;

        while (queue.length > 0) {
            const [i, j] = queue.shift();
            if (i === n - 1 && j === n - 1) return true;

            for (const [di, dj] of directions) {
                const ni = i + di;
                const nj = j + dj;
                if (
                    ni >= 0 &&
                    ni < n &&
                    nj >= 0 &&
                    nj < n &&
                    !visited[ni][nj] &&
                    grid[ni][nj] <= t
                ) {
                    visited[ni][nj] = true;
                    queue.push([ni, nj]);
                }
            }
        }

        return false;
    };

    // Binary search for minimum time t
    let left = Math.max(grid[0][0], grid[n - 1][n - 1]);
    let right = n * n - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (isReachable(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};