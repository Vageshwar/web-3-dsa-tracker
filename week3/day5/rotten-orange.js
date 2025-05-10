// Problem Statement: You will be given an m x n grid, where each cell has the following values : 

// 2  -  represents a rotten orange
// 1  -  represents a Fresh orange
// 0  -  represents an Empty Cell
// Every minute, if a Fresh Orange is adjacent to a Rotten Orange in 4-direction ( upward, downwards, right, and left ) it becomes Rotten. 

// Return the minimum number of minutes required such that none of the cells has a Fresh Orange. If it's not possible, return -1.

// Examples:

// Example 1:

// Input: grid - [ [2,1,1] , [0,1,1] , [1,0,1] ]

// Output: -1

function orangesRotting(grid) {
    let direction = [[0,1], [0,-1], [1,0], [-1, 0]]
    let ROW = grid.length;
    let COLUMN = grid[0].length;
    let q = [];
    let time = 0;
    let fresh = 0;
    grid.forEach((_, row) => {
        _.forEach((_, col) => {
            if(grid[row][col] === 1){
                fresh+=1;
            }
            else if(grid[row][col] === 2){
                q.push([row, col]);
            }
        })
    })

    while(q.length && fresh > 0){
        let n = q.length;
        for(let i=0; i < n; i++){
            let current = q.shift();
            for(let j = 0; j < direction.length; j++){
                let dir = direction[j];
                let newRow = current[0] + dir[0];
                let newCol = current[1] + dir[1];
                if(newRow < 0 || newRow >= ROW
                    || newCol < 0 || newCol >= COLUMN
                ){
                    continue;
                }
                if(grid[newRow][newCol] !== 1){
                    continue;
                }
                fresh-=1;
                q.push([newRow, newCol]);
                grid[newRow][newCol] = 2;
            }
        }
        time+=1;
    }
    let ans = fresh === 0 ? time : -1;
    return ans;
};
