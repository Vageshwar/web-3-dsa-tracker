// Problem Statement: Given a matrix m X n, count paths from left-top to the right bottom of a matrix with the constraints that from each cell you can either only move to the rightward direction or the downward direction.

// Example 1:

// Input Format: m = 2, n= 2
// Output: 2

// TUF Page crashed for this problem statement 
// refer this link: https://leetcode.com/problems/unique-paths/description/

function gridUniquePath(m,n){
    let ans = 0;
    function recursionHelper(i, j){
        if(i >= m || j >= n) return;
        if(i === m-1 && j === n-1) {
            ans++;
            return;
        };
        recursionHelper(i+1, j); //down
        recursionHelper(i, j+1); //right
    }

    recursionHelper(0, 0);
    return ans;
}

console.log(gridUniquePath(2,2));


// TODO: Explore the combimatrics solution for the problem before interviews