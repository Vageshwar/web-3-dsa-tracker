// Problem Statement: Given an array of N integers, your task is to find unique triplets that add up to give a sum of zero. In short, you need to return an array of all the unique triplets [arr[a], arr[b], arr[c]] such that i!=j, j!=k, k!=i, and their sum is equal to zero.

// Pre-requisite: 2 Sum Problem

// Examples

// Example 1: 

// Input: nums = [-1,0,1,2,-1,-4]

// Output: [[-1,-1,2],[-1,0,1]]

// Explanation: Out of all possible unique triplets possible, [-1,-1,2] and [-1,0,1] satisfy the condition of summing up to zero with i!=j!=k

// Example 2:

// Input: nums=[-1,0,1,0]
// Output: Output: [[-1,0,1],[-1,1,0]]
// Explanation: Out of all possible unique triplets possible, [-1,0,1] and [-1,1,0] satisfy the condition of summing up to zero with i!=j!=k


 function threeSum(arr){
    ans = [];
    let map = {};
    for(let i = 0; i < arr.length; i++){
        map = {};
        for(let j = i+1; j < arr.length; j++){
            const sum = arr[i] + arr[j];
            const toFind = sum ? -sum : 0;
            if(map[toFind]) {
                ans.push([
                    arr[i],
                    toFind,
                    arr[j],
                ])
            }
            map[arr[j]] = true;
        }
    }
    return ans;
 }


 console.log(threeSum([-1,0,1,2,-1,-4]))