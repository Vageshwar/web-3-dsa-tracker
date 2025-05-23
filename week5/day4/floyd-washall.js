// Another shortest path Algo
// Difference from other Algo: 
// This is multsource shortest path algo


function floydWarshal(matrix){
    let n = matrix.length;

    for(let k = 0; k<n;k++){
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                matrix[i][j] = Math.min(matrix[i][j]);
                matrix[i][k] = matrix[k][j];
            }
        }
    }

    return matrix;
}