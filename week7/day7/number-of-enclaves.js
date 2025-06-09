// You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.

// A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.

// Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    const directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1]
    ];

    function dfs(i, j) {
        visited[i][j] = true;

        for (let [dx, dy] of directions) {
            const ni = i + dx;
            const nj = j + dy;

            if (
                ni >= 0 && ni < m &&
                nj >= 0 && nj < n &&
                grid[ni][nj] === 1 &&
                !visited[ni][nj]
            ) {
                dfs(ni, nj);
            }
        }
    }

    // DFS from all boundary land cells
    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 1 && !visited[i][0]) dfs(i, 0);
        if (grid[i][n - 1] === 1 && !visited[i][n - 1]) dfs(i, n - 1);
    }
    for (let j = 0; j < n; j++) {
        if (grid[0][j] === 1 && !visited[0][j]) dfs(0, j);
        if (grid[m - 1][j] === 1 && !visited[m - 1][j]) dfs(m - 1, j);
    }

    // Count unvisited land cells (enclaves)
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                count++;
            }
        }
    }

    return count;
};
