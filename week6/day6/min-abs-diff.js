/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var minAbsDiff = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    let ans = Array.from({length: m-k+1}, () => Array(n-k+1).fill(0));
    if(k===1) return ans;
    function getMinAbs(r,c){
        let vals = [];
        for(let i = r; i < r+k; i++){
            for(let j = c; j < c+k; j++){
                vals.push(grid[i][j]);
            }
        }
        if(vals.length < 2) return 0;
        vals.sort((a,b) => a-b);
        let minDiff = Number.MAX_SAFE_INTEGER;
        for(let z = 1; z < vals.length; z++){
            if(vals[z] !== vals[z-1])
                minDiff = Math.min(minDiff, Math.abs( vals[z] - vals[z-1]));
        }
        return minDiff === Number.MAX_SAFE_INTEGER ? 0 : minDiff;
    }
    
    for(let i = 0; i < m-k+1; i++){
        for(let j = 0; j < n-k+1; j++){
            ans[i][j] = getMinAbs(i,j);
        }
    }
    
    return ans;
};


console.log(minAbsDiff([[1,8],[3,-2]], 2));
console.log(minAbsDiff([[3,-1]], 1));
console.log(minAbsDiff([[1,-2,3],[2,3,5]], 2));