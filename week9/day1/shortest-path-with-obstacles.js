// LC: https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/?envType=problem-list-v2&envId=7p55wqm


// You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle). You can move up, down, left, or right from and to an empty cell in one step.

// Return the minimum number of steps to walk from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1) given that you can eliminate at most k obstacles. If it is not possible to find such walk return -1.


var shortestPath = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;

    if (m === 1 && n === 1) return 0;

    const directions = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ];

    const visited = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => Array(k + 1).fill(false))
    );

    const queue = [{ i: 0, j: 0, k, steps: 0 }];
    visited[0][0][k] = true;

    while (queue.length) {
        const { i, j, k: remK, steps } = queue.shift();

        for (let [dx, dy] of directions) {
            const ni = i + dx;
            const nj = j + dy;

            if (ni < 0 || ni >= m || nj < 0 || nj >= n) continue;

            const obstacle = grid[ni][nj] === 1;
            const nextK = remK - obstacle;

            if (nextK < 0) continue;

            if (ni === m - 1 && nj === n - 1) return steps + 1;

            if (!visited[ni][nj][nextK]) {
                visited[ni][nj][nextK] = true;
                queue.push({ i: ni, j: nj, k: nextK, steps: steps + 1 });
            }
        }
    }

    return -1;
};
