// Problem Statement: Given an array of N + 1 size, where each element is between 1 and N. Assuming there is only one duplicate number, your task is to find the duplicate number.

// Examples:

// Example 1: 

// Input: arr=[1,3,4,2,2]

// Output: 2

// Explanation: Since 2 is the duplicate number the answer will be 2.

// Example 2:

// Input: [3,1,3,4,2]

// Output:3

// Explanation: Since 3 is the duplicate number the answer will be 3.

function duplicate(arr){
    let n = arr.length;
    let sumOfN = ((n)*(n-1))/2
    let sum = arr.reduce((acc, val)=>{
        acc+=val;
        return acc;
    }, 0)
    return sum - sumOfN;
}

console.log(duplicate([3,1,3,4,2]))

// Tortoise hare solution seems fun but not intutive and easy to grasp, might also make interviwer confuse on the colission part if he his not aware before hand
// can be considered if interviewer is aware.