/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {
    const row = mat.length;
    const col = mat[0].length;

    let dp = Array.from({length: row}, () => Array(col).fill(0));
    let res = 0;

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            let curr = mat[i][j];

            if(j === 0){
                dp[i][j] = curr;
            }else{
                dp[i][j] = curr === 0 ? 0 : dp[i][j-1] + 1;
            }

            curr = dp[i][j];
            for(let k = i; k >= 0; k--){
                curr = Math.min(curr, dp[k][j]);
                if(curr === 0) break;
                res+=curr;
            }
        }
    }
    return res;
};