// Problem Statement: Given an array of integers arr, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

const { Queue } = require("datastructures-js");

// Examples:

// Example 1:

// Input: arr = [4,0,-1,3,5,3,6,8], k = 3

// Output: [4,3,5,5,6,8]

// Explanation: 

// Window position                   Max
// ------------------------         -----
// [4  0  -1] 3  5  3  6  8           4
//  4 [0  -1  3] 5  3  6  8           3
//  4  0 [-1  3  5] 3  6  8           5
//  4  0  -1 [3  5  3] 6  8           5
//  4  0  -1  3 [5  3  6] 8           6
//  4  0  -1  3  5 [3  6  8]          8

// For each window of size k=3, we find the maximum element in the window and add it to our output array.



function slidingWindowMax(arr, k){
    let n = arr.length;
    let r = Array(n-k+1).fill(0);
    let ri = 0;
    let q = new Queue();
    for(let i = 0; i<n;i++){
        if(!q.isEmpty() && q.front() === i - k){
            q.dequeue(); // remove first
        }
        while(!q.isEmpty() && arr[q.back()] < arr[i]){
            console.log("Popped: ", q.pop()); // remove last
        }
        q.enqueue(i); // push last
        if(i >= k-1){
            r[ri++] = arr[q.front()];
        }
        console.log(i, q.toArray())
    }
    return r;
}

console.log(slidingWindowMax([1,3,1,2,0,5], 3))