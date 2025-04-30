// Problem Statement: Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.

// If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result. It does not matter what you leave beyond the first k elements.

// Note: Return k after placing the final result in the first k slots of the array.

// Examples

// Example 1: 

// Input: arr[1,1,2,2,2,3,3]

// Output: arr[1,2,3,_,_,_,_] "_" represents original value at that index

// Explanation: Total number of unique elements are 3, i.e[1,2,3] and Therefore return 3 after assigning [1,2,3] in the beginning of the array.

function removeDuplicatesInPlace(arr){
    let i = 0;
    let n = arr.length;
    for(let j = 1; j < n; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return arr;
}

console.log(removeDuplicatesInPlace([1,1,2,2,2,3,3]))