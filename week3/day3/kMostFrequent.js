// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

const { MaxPriorityQueue } = require("datastructures-js");

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]


function kMostFrequentElementLinear(arr, k){
    let frequency = {};
    let n = arr.length;
    arr.forEach(element => {
        frequency[element] = (frequency[element] || 0) + 1;
    });
    let values = Array(n+1).fill([]);
    Object.keys(frequency).forEach(key => {
        values[key].push(frequency[key]);
    })
    let ans = [];
    for(let i = n-1; i > 0; i--){
        ans = ans.concat(values[i]);
        if(ans.length === k) break;
    }
    return ans;

}
function kMostFrequentElementHeap(arr, k){
    let frequency = {};
    let compare = (a,b) => {
        if(a?.val === undefined || b?.val === undefined) return 0;
        if(a.val > b.val) return 1;
        else if(a.val < b.val) return -1;
        return 0;
    }
    let pq = MaxPriorityQueue({compare});
    Object.keys(frequency).forEach(key => {
        let val = {
            val: frequency[key],
            item: key,
        }
        pq.enqueue(val);
    })
    let ans = [];
    for(let i = 0; i<k; i++){
        ans.push(pq.dequeue().item);
    }
    return ans;

}