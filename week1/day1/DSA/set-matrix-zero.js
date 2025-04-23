// Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.
// Examples 1:

// Input: matrix=[[1,1,1],[1,0,1],[1,1,1]]

// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Explanation: Since matrix[2][2]=0.Therfore the 2nd column and 2nd row wil be set to 0.
 
// Input: matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]

// Output:[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Explanation:Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to 0

// ------------------------------------------------------

// Approach: find the cell with zero, save its row and col index and them loop again to change each row and col index to zero
// Time complexity: O(2*(n*m) => O(n*m) i.e O(n^2) where n = rows and m = columns

function setMatrixZero (matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let rows = []
    let cols = []

    matrix.forEach((_, i) => {
        _.forEach((__, j) => {
            if(matrix[i][j] === 0){
                rows.push(i);
                cols.push(j);
            }
        })
    })

    rows.forEach(row => {
        for(let i = 0; i < m; i++){
            matrix[row][i] = 0;
        }
    })

    cols.forEach(col => {
        for(let i = 0; i < n; i++){
            matrix[i][col] = 0;
        }
    })
    return matrix;
}

// Approach 2: When we first encounter a zero, we set all previous rows and cols from this zero to zero, and we mark only the next row and current column cell as zero too.
// This way we save space but time is similar

// Appraoch 3 (TUF): We can use the first row and first column of the matrix itself to mark the rows and columns that need to be set to zero. We can use two variables to check if the first row and first column need to be set to zero.



function setMatrixZeroOptimized(matrix){
    let n = matrix[0].length;
    let m = matrix[0][0].length;

    matrix.forEach((_, i) => {
        _.forEach((__, j) => {
            if(matrix[i][j] === 0){
                matrix[i][0] = 0; // set the first row to zero
                matrix[0][j] = 0; // set the first column to zero
            }
        })
    })

    // LOOP AGAIN AND SET THE ROWS and COLS to Zero

    // RETURN MATRIX


}

let matrix = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
]

console.log(setMatrixZero(matrix)); // Works




