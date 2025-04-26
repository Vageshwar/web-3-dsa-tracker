// Problem Statement: Given an array of integers A and an integer B. Find the total number of subarrays having bitwise XOR of all elements equal to k.
// Pre-requisite: Find the number of subarrays with the sum K

// Examples

// Example 1:
// Input Format: A = [4, 2, 2, 6, 4] , k = 6
// Result: 4
// Explanation: The subarrays having XOR of their elements as 6 are  [4, 2], [4, 2, 2, 6, 4], [2, 2, 6], [6]

// Example 2:
// Input Format: A = [5, 6, 7, 8, 9], k = 5
// Result: 2
// Explanation: The subarrays having XOR of their elements as 5 are [5] and [5, 6, 7, 8, 9]

function kXOR1(arr, k){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let prev = arr[i];
        if(prev === k) count++;
        for(let j = i+1; j < arr.length; j++){
            prev = prev ^ arr[j];
            if(prev === k){
                count++;
            }
        }
    }
    return count;
}

// console.log(kXOR1([5, 6, 7, 8, 9], 5))

function kXOR2(arr, k){
    let map = {0: 1}; // 0 ^ k = k so we have zero possible previous value already stored
    let xr = 0;
    let count = 0;
    arr.forEach(item => {
        xr = xr ^ item;
        let x = xr ^ k;
        if(map[x]){
            count += map[x];
        }
        map[xr] = (map[xr] || 0) + 1;
    })
    return count;
}

console.log(kXOR2([5, 6, 7, 8, 9], 5))
console.log(kXOR2([4, 2, 2, 6, 4], 6))