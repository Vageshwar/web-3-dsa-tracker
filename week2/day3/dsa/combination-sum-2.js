// Problem Statement: Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target. Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

// Examples:

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8

// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]]


// Explanation: These are the unique combinations whose sum is equal to target.
 
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5

// Output: [[1,2,2],[5]]

// Explanation: These are the unique combinations whose sum is equal to target.

function combinationSum2(arr, target){
    let ans = [];
    let n =  arr.length;
    arr = arr.sort((a,b) => a-b); // Imp
    let temp = [];
    const helper = (idx, remaningTarget) => {
        if(remaningTarget === 0){
            ans.push(structuredClone(temp));
            return;
        }
        if(idx >= n || remaningTarget < 0){
            return;
        }
        for(let i = idx; i < n; i++){
            if(i > idx && arr[i] === arr[i-1]) continue; // this makes sure same comb is not considered twice
            if(arr[i] > remaningTarget) break;
            temp.push(arr[i]);
            helper(i+1, remaningTarget-arr[i]);
            temp.pop();
        }
    }
    helper(0, target);
    return ans;
}


console.log(combinationSum2([10,1,2,7,6,1,5], 8));
