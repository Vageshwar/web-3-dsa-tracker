// LC: https://leetcode.com/problems/swim-in-rising-water/description/?envType=problem-list-v2&envId=7p55wqm
// You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point (i, j).

// The rain starts to fall. At time t, the depth of the water everywhere is t. You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distances in zero time. Of course, you must stay within the boundaries of the grid during your swim.

// Return the least time until you can reach the bottom right square (n - 1, n - 1) if you start at the top left square (0, 0).

 

// Example 1:


// Input: grid = [[0,2],[1,3]]
// Output: 3
// Explanation:
// At time 0, you are in grid location (0, 0).
// You cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.
// You cannot reach point (1, 1) until time 3.
// When the depth of water is 3, we can swim anywhere inside the grid.


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
