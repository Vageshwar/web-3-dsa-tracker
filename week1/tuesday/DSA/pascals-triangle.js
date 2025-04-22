// Problem Statement: This problem has 3 variations. They are stated below:

// Variation 1: Given row number r and column number c. Print the element at position (r, c) in Pascal’s triangle.
// Variation 2: Given the row number n. Print the n-th row of Pascal’s triangle.
// Variation 3: Given the number of rows n. Print the first n rows of Pascal’s triangle.

// In Pascal’s triangle, each number is the sum of the two numbers directly above it

// Example 1:
// Input Format: N = 5, r = 5, c = 3
// Result: 6 (for variation 1)
// 1 4 6 4 1 (for variation 2)

// 1 
// 1 1 
// 1 2 1 
// 1 3 3 1 
// 1 4 6 4 1    (for variation 3)

// Explanation: There are 5 rows in the output matrix. Each row is formed using the logic of Pascal’s triangle.

// Example 2:
// Input Format: N = 1, r = 1, c = 1
// Result: 1 (for variation 1)
//     1 (for variation 2)
//     1  (for variation 3)
// Explanation: The output matrix has only 1 row.

// formula: nCr = n! / (r! * (n-r)!)


function nCr(n,r){
    let ans = 1;
    for(let i = 0; i < r; i++){
        ans = ans * (n-i);
        ans = ans / (i+1);
    }
    return ans;
}

function print(v){console.log(v)};

function printPascalsTriangle (N){
    let row = [1];
    for(let i = 0; i < N; i++){
        for(let j = 0; j<i; j++){
            row.push(nCr(i,j));
        }
        print(row.join(' '));
        row = [];
    }
}

function printPascalsTriangleRow(r){
    let row = [1]
    let prev = 1;

    for(let i = 1; i<r;i++){
        prev = prev * (r-i);
        prev = prev / i;
        row.push(prev);
    }

    return row;

}

function printPascalsTriangleWithRows (N){
    for(let i = 1; i <= N; i++){
        row = printPascalsTriangleRow(i);
        print(row.join(' '));
    }
}



printPascalsTriangleWithRows(5);
// printPascalsTriangleRow(5);
