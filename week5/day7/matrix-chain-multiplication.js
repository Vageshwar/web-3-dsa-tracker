// Problem Statement: 

// Matrix Chain Multiplication | Partition DP Starts

// In the coming articles, we will discuss problems related to a new pattern called “Partition DP”.Before proceeding further, let us understand how to identify whether a problem can be solved using this pattern.

// Pattern Identification:

// Whenever we need to find the answer to a large problem such that the problem can be broken into subproblems and the final answer varies due to the order in which the subproblems are solved, we can think in terms of partition DP.


// https://www.naukri.com/code360/problems/matrix-chain-multiplication_975344?source=youtube&campaign=striver_dp_videos
// Problem statement
// Given a chain of matrices A1, A2, A3,.....An. Your task is to find out the minimum cost to multiply these matrices. The cost of matrix multiplication is defined as the number of scalar multiplications. A Chain of matrices A1, A2, A3,.....An is represented by a sequence of numbers in an array ‘arr’ where the dimension of 1st matrix is equal to arr[0] * arr[1] , 2nd matrix is arr[1] * arr[2], and so on.

// For example:
// For arr[ ] = { 10, 20, 30, 40}, matrix A1 = [10 * 20], A2 = [20 * 30], A3 = [30 * 40]

// Scalar multiplication of matrix with dimension 10 * 20 is equal to 200.

// Rules to solve the problem of partition DP:

// Start with the entire block/array and mark it with i,j. We need to find the value of f(i,j).
// Try all partitions.
// Run the best possible answer of the two partitions ( answer that comes after dividing the problem into two subproblems and solving them recursively).
// Now let us go through these rules and apply them one by one to the MCM problem.

// Start with the entire block/array and mark it with i,j

/**
 * 
 * @param {number[]} arr
 * @returns {number} 
 */
function mcm(arr){
    let n = arr.length;
    let dp = Array.from({length: n}, () => Array(n).fill(-1));
    function helper(i,j){
        if(dp[i][j] !== -1) return dp[i][j];
        if(i===j) return 0;
        let ans = 0;
        for(let k = i; k<j-1;k++){
            ans = Math.min(
                arr[i-1] * arr[k] * arr[j]
                + helper(k+1, j, arr) + helper(i,k,arr)
            );
        }
        dp[i][j] = ans;
        return ans;
    }

    return helper(1, n-1);
}


/**
 * 
 * @param {number[]} arr
 * @returns {number} 
 */
function mcmTabulation(arr){
    let n = arr.length;
    let dp = Array.from({length: n}, () => Array(n).fill(-1));

    for(let i = n-1; i>=0;i--){
        for(let j = i+1; j<n;j++){
            let ans = Number.MIN_SAFE_INTEGER;
            for(let k = i; k<j;k++){
                let steps = (arr[i-1] * arr[k] * arr[j]) + dp[i][k] + dp[k+1][j];

                ans = Math.min(ans, steps);
            }
            dp[i][j] = ans;
        }
    }
    return dp[1][n-1];
}