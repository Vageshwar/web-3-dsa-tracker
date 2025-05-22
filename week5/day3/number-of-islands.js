// Number of Distinct Islands

// Problem Statement: Given a boolean 2D matrix grid of size N x M. You have to find the number of distinct islands where a group of connected 1s (horizontally or vertically) forms an island. Two islands are considered to be distinct if and only if one island is equal to another (not rotated or reflected).

// LC: https://leetcode.com/problems/number-of-islands/description/
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let ans = 0;
    const dfs = (i,j) => {
        if(i < 0 || i >= m || j < 0 || j >= n) return;
        if(grid[i][j] !== '1') return;
        grid[i][j] = '2';

        dfs(i+1,j);
        dfs(i-1,j);
        dfs(i,j+1);
        dfs(i,j-1);
    }

    for(let i = 0; i<m;i++){
        for(let j = 0; j<n;j++){
            if(grid[i][j] === '1'){
                dfs(i,j);
                ans++;
            }
        }
    }
    return ans;
};