/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    if (!mat || mat.length === 0) return [];

    const N = mat.length;
    const M = mat[0].length;
    let row = 0, col = 0;
    let direction = 1; // 1 = up-right, -1 = down-left
    let res = new Array(N * M);
    let r = 0;

    while (r < N * M) {
        res[r++] = mat[row][col];

        let new_row = row + (direction === 1 ? -1 : 1);
        let new_col = col + (direction === 1 ? 1 : -1);

        if (new_row < 0 || new_row === N || new_col < 0 || new_col === M) {
            if (direction === 1) {
                // going up
                if (col === M - 1) {
                    row++;
                } else {
                    col++;
                }
            } else {
                // going down
                if (row === N - 1) {
                    col++;
                } else {
                    row++;
                }
            }
            direction = -direction; // flip direction
        } else {
            row = new_row;
            col = new_col;
        }
    }
    return res;
};
