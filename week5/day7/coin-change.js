// LC: https://leetcode.com/problems/coin-change/

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let n = coins.length;
    let dp = Array.from({length: n}, () => Array(amount+1).fill(0));
    for(let i = 0; i<amount+1;i++){
        dp[0][i] = (i % coins[0] === 0) ? 1 : 0;
    }
    for(let i = 0; i < n; i++){
        for(let T = 0; T < amount; T++){
            let notTake = dp[i-1][T];
            let take = 0;
            if(i <= T) take = dp[i][T-coins[i]];
            dp[i][T] = take + notTake;
        }
    }
    return dp[n-1][amount];
};