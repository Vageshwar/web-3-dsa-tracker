/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ans = [[1]]

    for(let i = 1; i < numRows; i++){
        let r = [1]
        for(let j = 1; j < i; j++){
            r.push(
                (ans[i-1][j] || 0) + (ans[i-1][j-1] || 0)
            )
        }
        r.push(1);
        ans.push(r);
    }
    return ans;
};