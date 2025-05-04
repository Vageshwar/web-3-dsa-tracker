// roblem Statement: Given an array of N integers. Every number in the array except one appears twice. Find the single number in the array.

// Pre-requisite: Binary Search Algorithm

// Examples

// Example 1:
// Input Format: arr[] = {1,1,2,2,3,3,4,5,5,6,6}
// Result: 4
// Explanation: Only the number 4 appears once in the array.

// Example 2:

// Input Format: arr[] = {1,1,3,5,5}
// Result: 3
// Explanation: Only the number 3 appears once in the array.


function searchOnceTwice(arr){
    let n = arr.length;

    if(n===1) return arr[0];
    let low = 1, high = n-2;

    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid] !== arr[mid+1] && arr[mid] !== arr[mid-1]){
            return arr[mid];
        }
        if((mid % 2 === 1 && arr[mid] === arr[mid-1])
        || (mid % 2 === 0 && arr[mid] === arr[mid+1])){
            low = mid+1;
        }else{
            high = mid - 1;
        }
    }
    return -1;
}