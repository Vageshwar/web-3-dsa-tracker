// Generated from the AI inside LeetCode

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const m = heights.length;
    const n = heights[0].length;

    // Handle edge case for empty or invalid input
    if (m === 0 || n === 0) {
        return [];
    }

    // pacificReachable[r][c] will be true if water from (r,c) can flow to the Pacific Ocean
    const pacificReachable = Array.from({ length: m }, () => Array(n).fill(false));
    // atlanticReachable[r][c] will be true if water from (r,c) can flow to the Atlantic Ocean
    const atlanticReachable = Array.from({ length: m }, () => Array(n).fill(false));

    // Define possible directions for traversal (up, down, left, right)
    const directions = [
        [1, 0],  // down
        [-1, 0], // up
        [0, 1],  // right
        [0, -1]  // left
    ];

    /**
     * Performs a DFS traversal to mark all cells reachable from a given ocean border.
     * We simulate water flowing *from* the ocean *to* the land. A cell (r, c) is reachable
     * from the ocean if its height is greater than or equal to the height of the adjacent
     * cell from which the "flow" originated (`prevHeight`). This reverse flow logic
     * correctly identifies cells that can drain into the ocean.
     *
     * @param {number} r The current row index.
     * @param {number} c The current column index.
     * @param {boolean[][]} visited The 2D array tracking cells reachable by the current ocean.
     * @param {number} prevHeight The height of the cell from which we are trying to flow to (r,c).
     */
    function dfs(r, c, visited, prevHeight) {
        // If out of bounds or already visited, or current cell is lower than the previous one, stop.
        // `heights[r][c] < prevHeight` means water cannot flow *from* (r,c) to the `prevHeight` cell.
        // In our reverse flow, it means we cannot reach (r,c) from the `prevHeight` cell.
        if (r < 0 || c < 0 || r >= m || c >= n || visited[r][c] || heights[r][c] < prevHeight) {
            return;
        }

        visited[r][c] = true; // Mark current cell as reachable from this ocean

        // Explore neighbors
        for (const [dr, dc] of directions) {
            const newR = r + dr;
            const newC = c + dc;
            // Recursively call DFS for neighbors. The current cell's height becomes `prevHeight`
            // for the neighbor, ensuring we only move to cells that are equal or higher in elevation.
            dfs(newR, newC, visited, heights[r][c]);
        }
    }

    // Start DFS from all cells on the Pacific Ocean borders (top row and left column)
    // The `prevHeight` is initialized to 0 because the ocean can be considered height 0,
    // and any land cell can technically "drain" into it if its height is >= 0.
    for (let i = 0; i < m; i++) { // Leftmost column
        dfs(i, 0, pacificReachable, 0);
    }
    for (let j = 0; j < n; j++) { // Topmost row
        dfs(0, j, pacificReachable, 0);
    }

    // Start DFS from all cells on the Atlantic Ocean borders (bottom row and right column)
    for (let i = 0; i < m; i++) { // Rightmost column
        dfs(i, n - 1, atlanticReachable, 0);
    }
    for (let j = 0; j < n; j++) { // Bottommost row
        dfs(m - 1, j, atlanticReachable, 0);
    }

    const result = [];
    // Collect all cells that can reach both Pacific and Atlantic Oceans
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacificReachable[i][j] && atlanticReachable[i][j]) {
                result.push([i, j]);
            }
        }
    }

    return result;
};