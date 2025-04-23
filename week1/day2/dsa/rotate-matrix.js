// Problem Statement: Given a matrix, your task is to rotate the matrix 90 degrees clockwise.

// Example 1:
// Input: [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Explanation: Rotate the matrix simply by 90 degree clockwise and return the matrix.

// Example 2:
// Input: [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output:[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// Explanation: Rotate the matrix simply by 90 degree clockwise and return the matrix

// Thoughts: Rotate 90 means rows -> cols and cols -> rows ? 
// Questions: is it square matrix or it can be rectanges ? 
// n * m matrix will change to m * n matrix if rotated

// Approach: Make a new M X N matrix and fill one by one 

function rotateMatrix(matrix){
    let n = matrix.length;
    let m = matrix[0].length;
    let ans = Array(m).fill(0).map(_ => Array(n).fill(0));
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            ans[j][n-i-1] = matrix[i][j];
        }
    }
    return ans;
}

console.log(rotateMatrix([[1,2,3],[4,5,6],[7,8,9]]))