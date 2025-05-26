// LC: https://leetcode.com/problems/minimum-path-sum/description/
// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.



 /**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let n = grid.length;
    let m = grid[0].length;
    let dp = new Array({length: n}, () => Array(m).fill(-1));
    dp[0][0] = grid[0][0];
    function helper(i,j){
        if(i < 0 || i >= n || j < 0 || j >= m) return Number.MAX_SAFE_INTEGER;

        if(dp[i][j] !== -1) return dp[i][j];
        
        if(i=== 0 && j === 0) return grid[i][j];

        const up = dp[i][j] + helper(i-1, j);
        const left = dp[i][j] + helper(i, j-1);

        dp[i][j] = Math.min(up, left);
        return dp[i][j];
    }
    return helper(n-1,m-1);
};

var minPathSumTabulation
 = function(grid) {
    let n = grid.length;
    let m = grid[0].length;
    let dp = Array.from({length: n}, () => Array(m).fill(0));
    dp[0][0] = grid[0][0];
    for(let i = 0; i < n;i++){
        for(let j = 0; j < m; j++){
            if(i === 0 && j === 0){
                dp[i][j] = grid[i][j];
            }else{
                let up = grid[i][j];
                if(i > 0) up += dp[i-1][j];
                else up += Number.MAX_SAFE_INTEGER;
                let left = grid[i][j];
                if(j > 0) left += dp[i][j-1];
                else left += Number.MAX_SAFE_INTEGER;
                dp[i][j] = Math.min(left, up);
            }
        }
    }
    return dp[n-1][m-1]
};