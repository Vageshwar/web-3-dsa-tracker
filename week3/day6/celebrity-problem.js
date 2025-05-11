// https://www.geeksforgeeks.org/the-celebrity-problem/
// Given a square matrix mat[][] of size n x n, such that mat[i][j] = 1 means ith person knows jth person, the task is to find the celebrity. A celebrity is a person who is known to all but does not know anyone. Return the index of the celebrity, if there is no celebrity return -1.

// Note: Follow 0-based indexing and mat[i][i] will always be 1.

// Examples:  

// Input: mat[][] = [[1, 1, 0], 
//                              [0, 1, 0], 
//                              [0, 1, 1]]
// Output: 1
// Explanation: 0th and 2nd person both know 1. Therefore, 1 is the celebrity.


// Input: mat[][] = [[1, 1], 
//                             [1, 1]]
// Output: -1
// Explanation: The two people at the party both know each other. None of them is a celebrity.


// Input: mat[][] = [[1]]
// Output: 0

function celebrity(matrix){
    let possibleCelebrities = [];
    let n = matrix.length;
    let top = 0;
    let down = n-1;
    while(top < down){
        if(matrix[top][down] === 1){
            top++;
        }else if(matrix[down][top] === 1){
            down--;
        }else{
            top--;
            down--;
        }
    }
    if(top > down) return -1;
    for(let i = 0; i<n; i++){
        if(i === top) continue;
        if(matrix[top][i] === 1 || matrix[i][top] === 0) return -1;
    }
    return top;
}