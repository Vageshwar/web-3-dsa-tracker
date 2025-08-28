/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function(grid) {
    const n = grid.length;

    for(let i = 0; i < n; i++){
        const t = []
        for(let j = 0; i + j < n; j++){
            t.push(grid[i+j][j]);
        }
        t.sort((a,b) => b-a);
        for(let j = 0; i+j <n; j++){
            grid[i+j][j] = t[j];
        }
    }

    for(let j = 1; j < n; j++){
        const t = []
        for(let i = 0; j+i < n; i++){
            t.push(grid[i][j+i]);
        }
        t.sort((a,b) => a-b);
        for(let i = 0; j+i < n; i++){
            grid[i][j+i] = t[i];
        }
    }
    return grid;
};