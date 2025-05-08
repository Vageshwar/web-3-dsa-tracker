// Problem Statement: Given an unsorted array, print Kth Largest and Smallest Element from an unsorted array.

const { MaxPriorityQueue } = require("datastructures-js");



// Examples:

// Example 1:
// Input: Array = [1,2,6,4,5,3] , K = 3 
// Output: kth largest element = 4, kth smallest element = 3

// Example 2:
// Input: Array = [1,2,6,4,5] , k = 3 -> [6,5,4,2,1]
// Output : kth largest element = 4,  kth smallest element = 4

function kthLargeAndSmall(arr, k){
    const maxHeap = MaxPriorityQueue.fromArray(arr);
    let n = arr.length;
    let ans = Array(2).fill(null);
    let maxIdx = Math.max(k-1, n-(k-1));
    for(let i = 1; i<=maxIdx; i++){
        let elemet = maxHeap.dequeue();
        if(i === k){
            ans[0] = elemet;
        }if(i === n-(k-1)){
            ans[1] = elemet;
        }
    }
    return ans;
}

console.log(kthLargeAndSmall([1,2,6,4,5],3));