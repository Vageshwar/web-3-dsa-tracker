/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(board[i][j] !== '.'){
                let val = board[i][j];
                board[i][j] = ".";
                if(!isValid(board, i, j, val)) return false;
                board[i][j] = val;
            }
        }
    }
    return true;
};

function isValid(board, row, col, c){
    for(let i = 0; i <9;i++){
        if(board[i][col] === c) return false;
        if(board[row][i] === c) return false;
        if(board[3*Math.floor(row/3) + Math.floor(i/3)][3 * Math.floor(col/3) + i % 3] === c)
            return false;
    }
    return true;
}