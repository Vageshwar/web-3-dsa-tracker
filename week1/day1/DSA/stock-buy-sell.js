// Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and 
// sell on day 5 (price = 6), profit = 6-1 = 5.

// Note: That buying on day 2 and selling on day 1 
// is not allowed because you must buy before 
// you sell.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are 
// done and the max profit = 0.



// Initution: Need to find 2 numbers such that difference between both is maximum but the difference needs to be +ve

// Brute force: Calculate difference for each combinations and return the maximum

function bruteForce(stockPrices){
    let ans = -Infinity;
    for(let i = 0; i < stockPrices.length; i++){
        for(let j = i+1; j < stockPrices.length; j++){
            let diff = stockPrices[j] - stockPrices[i];
            ans = Math.max(ans, diff);
        }
    }
    return ans;
}

// console.log(bruteForce([7,1,5,3,6,4]))


// Optimal Approach: use min pointer and calculate difference from current index and store the max

function optimal(stockPrices){
    let ans = -Infinity;
    let min = Infinity;
    stockPrices.forEach(price => {
        min = Math.min(price, min);
        ans = Math.max(ans, price - min);
    })
    return ans;
}
console.log(optimal([7,1,5,3,6,4]))