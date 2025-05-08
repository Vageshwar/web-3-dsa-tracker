// Given two integer array A and B of size N each.
// A sum combination is made by adding one element from array A and another element of array B.
// Return the maximum K valid sum combinations from all the possible sum combinations.

const { MaxPriorityQueue } = require("datastructures-js");

// Note : Output array must be sorted in non-increasing order.


// solution -> make arr of all possible sum
// -> make heap and return top k elements from heap of sums

function maxCombinations(arr1, arr2, k){
    let n = arr1.length;
    let s = new Set();
    arr1 = arr1.sort((a,b) => b-a);
    arr2 = arr2.sort((a,b) => b-a);

    const compare = (a,b) => b?.sum - a?.sub;
    let pq = new MaxPriorityQueue(compare);
    pq.enqueue({sum: arr1[0] + arr2[0], i: 0, j:0});
    s.add(`0-0`);
    let ans = [];
    for(let i = 0; i<k; i++){
        let maxItem = pq.dequeue();
        ans.push(maxItem.sum);
        if(maxItem.i + 1 < n && !s.has(`${maxItem.i+1}-${maxItem.j}`)){
            pq.enqueue({
                sum: arr1[maxItem.i+1] + arr2[maxItem.j],
                i: maxItem.i+1,
                j: maxItem.j
            })
            s.add(`${maxItem.i + 1}-${maxItem.j}`);
        }
        if(maxItem.j + 1 < n && !s.has(`${maxItem.i}-${maxItem.j+1}`)){
            pq.enqueue({
                sum: arr1[maxItem.i] + arr2[maxItem.j+1],
                i: maxItem.i,
                j: maxItem.j + 1,
            })
            s.add(`${maxItem.i}-${maxItem.j+1}`);
        }
    }
    return ans;

    
}

console.log(maxCombinations([3,2], [1,4], 2));