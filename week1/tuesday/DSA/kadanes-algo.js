// Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.
// Example 1:

// Input: arr = [-2,1,-3,4,-1,2,1,-5,4] 

// Output: 6 

// Explanation: [4,-1,2,1] has the largest sum = 6. 

// Examples 2: 

// Input: arr = [1] 

// Output: 1 

// Explanation: Array has only one element and which is giving positive sum of 1. 

// Approach 1: Make sum of all subarrays using kadanes alog and return the maximun ? 

function kadanesAlogSimple (arr) {
    let sumDP = [];
    arr.forEach((ele, idx) => {
        sumDP[idx] = (sumDP[idx-1] || 0) + ele;
    })
    return Math.max(...sumDP);
}

// console.log(kadanesAlogSimple([4,-1,2,1]))

function approach1 (arr){
    let max = -Infinity;
    let ansI = 0;
    let ansJ = 0;
    for(let i = 0; i<arr.length; i++){
        for(let j = i; j < arr.length; j++){
            let ans = kadanesAlogSimple(arr.slice(i,j));
            if(ans > max){
                max = ans;
                ansI = i;
                ansJ = j;
            }
        }
    }
    console.log(max);
    console.log(arr.slice(ansI, ansJ));
}

approach1([-2,1,-3,4,-1,2,1,-5,4])