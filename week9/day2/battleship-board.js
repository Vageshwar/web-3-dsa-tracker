// LC: https://leetcode.com/problems/battleships-in-a-board/?envType=problem-list-v2&envId=7p55wqm
// Given an m x n matrix board where each cell is a battleship 'X' or empty '.', return the number of the battleships on board.

// Battleships can only be placed horizontally or vertically on board. In other words, they can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k rows, 1 column), where k can be of any size. At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships).


//  [[".", ".", "."],[".", ".", "."],[".", ".", "."]]
//  [["X", "X", "X"],[".", ".", "."],[".", ".", "."]]
//  [["X", ".", "."],["X", ".", "."],["X", ".", "."]]
//  [["X", "X", "X"],[".", ".", "."],[".", ".", "."]]

//  [["X", ".", "X", ".", "X"],[".", ".", ".", ".", "."],["X", ".", "X", ".", "X"]]
// [["X", "X", "X", ".", "X"],[".", ".", ".", ".", "."],["X", ".", "X", ".", "X"]]


/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let res = 0;
    let m = board.length;
    let n = board[0].length
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(board[i][j] === 'X'){
                if(i > 0 && board[i-1][j] === 'X') continue;
                if(j > 0 && board[i][j-1] === 'X') continue;
                res++;
            }
        }
    }
    return res;
};