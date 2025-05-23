// Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.

// Examples:

// Example 1:

// Input: prices = {1, 1, 0, 1, 1, 1}

// Output: 3

// Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.

// Input: prices = {1, 0, 1, 1, 0, 1} 

// Output: 2

// Explanation: There are two consecutive 1's in the array. 

function maxConsecutiveOnes(arr){
    let count = 0;
    let ans = 0;

    for(let i = 0; i<arr.length;i++){
        if(arr[i] === 1) count++;
        else{
            ans = Math.max(count, ans);
            count = 0;
        }
        ans = Math.max(count, ans);
    }
    return ans;
}

console.log(maxConsecutiveOnes([1, 0, 1, 1, 1, 1]))