/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let n = grid.length;

    let map = new Map();
    let res = 0;

    for(let i = 0; i < n; i++){
        let rHash = grid[i].join(",");
        map.set(rHash, (map.get(rHash) || 0) + 1);
    }

    for(let i = 0; i < n; i++){
        let temp = []
        for(let j = 0; j < n; j++){
            temp.push(grid[j][i]);
        }
        let cHash = temp.join(",");

        if(map.get(cHash)){
            res+=map.get(cHash);
        }
    }
    return res;

};