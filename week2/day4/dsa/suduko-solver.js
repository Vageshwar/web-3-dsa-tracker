// Problem Statement:

// Given a 9x9 incomplete sudoku, solve it such that it becomes valid sudoku. Valid sudoku has the following properties.

//          1. All the rows should be filled with numbers(1 - 9) exactly once.

//          2. All the columns should be filled with numbers(1 - 9) exactly once.

//          3. Each 3x3 submatrix should be filled with numbers(1 - 9) exactly once.

// Note: Character '.' indicates empty cell.

// link: https://takeuforward.org/data-structure/sudoku-solver/

function sudukoSolver(board){
    let n = board.length;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(board[i][j] === null){
                for(let c = 1; c<=9;c++){
                    if(isValid(board, i, j, c)){
                        board[i][j] = c;
                    }
                    if(sudukoSolver(board)) return true;
                    else board[i][j] = null;
                }
                return false;
            }
        }
    }
    return true;
}

function isValid(board, row, col, c){
    for(let i = 0; i <9;i++){
        if(board[i][col] === c) return false;
        if(board[row][i] === c) return false;
        if(board[3*Math.floor(row/3) + Math.floor(i/3)][3 * Math.floor(col/3) + i % 3] === c)
            return false;
    }
    return true;
}