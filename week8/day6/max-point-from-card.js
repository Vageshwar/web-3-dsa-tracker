// LC: https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/description/?envType=problem-list-v2&envId=5poup3js

// There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.

// In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

// Your score is the sum of the points of the cards you have taken.

// Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

 

// Example 1:

// Input: cardPoints = [1,2,3,4,5,6,1], k = 3
// Output: 12
// Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.
// Example 2:

// Input: cardPoints = [2,2,2], k = 2
// Output: 4
// Explanation: Regardless of which two cards you take, your score will always be 4.
// Example 3:

// Input: cardPoints = [9,7,7,9,7,7,9], k = 7
// Output: 55
// Explanation: You have to take all the cards. Your score is the sum of points of all cards.
 


// Attempt 1: Recursion all ways

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScoreRecur = function(cardPoints, k) {
    let n = cardPoints.length;
    function helper(c, s, i , j){
        if(c === k) return s;

        if(i > j || j<0 || i>=n) return s;

        const first = helper(c+1, s+cardPoints[i],i+1, j);
        const last = helper(c+1, s+cardPoints[j],i, j-1);
        let ans = Math.max(first, last);
        return ans;
    }

    return helper(0,0,0,n-1);
};


// Attempt 2: Prefix sum and window

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let curSum = 0;
    let n = cardPoints.length;
    for(let i = n-k; i <n; i++){
        curSum += cardPoints[i];
    }
    if(n === k) return curSum;
    let maxSum = curSum;
    for(let i = 0, j = n-k; i < k; i++,j++){
        curSum += cardPoints[i];
        curSum -= cardPoints[j];
        if(curSum > maxSum){
            maxSum = curSum;
        }
    }
    return maxSum;
};