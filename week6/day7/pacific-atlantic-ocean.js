// LC: https://leetcode.com/problems/pacific-atlantic-water-flow/description/
// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.


/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let m = heights.length;
    let n = heights[0].length;
    let vp = Array.from({
        length: m
    }, () => Array(n).fill(0));
    let va = Array.from({
        length: m
    }, () => Array(n).fill(0));

    const directions = [
        [1,0],
        [0,1],
        [-1, 0],
        [0, -1]
    ];

    function dfs(i, j, visited, prev){

        if(i < 0 || j < 0 || i >= m || j >= n || visited[i][j] || heights[i][j] < prev) return;

        visited[i][j] = 1;

        dfs(i+1, j, visited, heights[i][j]);
        dfs(i-1, j, visited, heights[i][j]);
        dfs(i, j+1, visited, heights[i][j]);
        dfs(i, j-1, visited, heights[i][j]);
     }

     for(let i = 0; i < n; i++){
        dfs(0,i,vp,0);
        dfs(m-1,i,va,0);
     }

     for(let i = 0; i < m; i++){
        dfs(i,0,vp,0);
        dfs(i,n-1,va,0);
     }

    let ans = [];

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(vp[i][j] && va[i][j]){
                ans.push([i,j]);
            }
        }
    }
    return ans;
};