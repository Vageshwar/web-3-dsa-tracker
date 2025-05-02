// Problem Statement: The n-queens is the problem of placing n queens on n × n chessboard such that no two queens can attack each other. Given an integer n, return all distinct solutions to the n -queens puzzle. Each solution contains a distinct boards configuration of the queen's placement, where ‘Q’ and ‘.’ indicate queen and empty space respectively.

// Examples:

// Input: n = 4

// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]


function nQueen(n){
    let rows = Array(n).fill(false);
    let upperDiagonal = Array(2*n-1).fill(false);
    let lowerDiagonal = Array(2*n-1).fill(false);
    let ans = [];
    let temp = Array(n).fill("").map((_) => Array(n).fill("_"));

    function helper(c){
        if(c===n){
            ans.push(structuredClone(temp).map(row => row.join("")));
        }
        for(let r = 0; r<n; r++){
            if(!rows[r] && !lowerDiagonal[r+c] && !upperDiagonal[n-1+(c-r)]){
                temp[r][c] = "Q";
                rows[r] = true;
                lowerDiagonal[r+c] = true;
                upperDiagonal[n-1+(c-r)] = true;
                helper(c+1);
                temp[r][c] = "_";
                rows[r] = false;
                lowerDiagonal[r+c] = false;
                upperDiagonal[n-1+(c-r)] = false;
                
            }
        }
    }
    helper(0);
    return ans;
}


console.log(nQueen(4));