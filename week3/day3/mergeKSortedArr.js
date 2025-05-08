// Given K sorted arrays, merge them and print the sorted output.

const { MinPriorityQueue } = require("datastructures-js");

// Examples:

// Input: K = 3, arr = { {1, 3, 5, 7}, {2, 4, 6, 8}, {0, 9, 10, 11}}
// Output: 0 1 2 3 4 5 6 7 8 9 10 11 


// Input: k = 4, arr = { {1}, {2, 4}, {3, 7, 9, 11}, {13} }
// Output: 1 2 3 4 7 9 11 13

function mergeKSortedArrays(arr){
    let compare = (a,b) => {
        if(a?.val === undefined || b?.val === undefined) return 0;
        if(a?.val > b?.val) return 1;
        else if(b?.val > a?.val) return -1;
        return 0;
    };
    let pq = new MinPriorityQueue({compare});

    let k = arr.length;
    for(let i = 0; i < k; i++){
        pq.enqueue({
            val: arr[i][0],
            k: i,
            i: 0
        });
    }
    let ans = [];
    while(pq.size()){
        let element = pq.dequeue();
        ans.push(element.val);
        let arrIdx = element.k;
        let nextVal = element.i + 1;
        if(arr[arrIdx].length > nextVal){
            pq.enqueue({
                val: arr[arrIdx][nextVal],
                k: arrIdx,
                i: nextVal
            })
        }
    }
    return ans;
}


console.log(mergeKSortedArrays([
    [1, 3, 5, 7],
    [2, 4, 6, 8],
    [0, 9, 10, 11]
]))