// Problem Statement: Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. You may consider that such an element always exists in the array.

// Examples

// Example 1:
// Input Format: N = 3, nums[] = {3,2,3}
// Result: 3
// Explanation: When we just count the occurrences of each number and compare with half of the size of the array, you will get 3 for the above solution. 

// Example 2:
// Input Format:  N = 7, nums[] = {2,2,1,1,1,2,2}

// Result: 2

// Explanation: After counting the number of times each element appears and comparing it with half of array size, we get 2 as result.

// Example 3:
// Input Format:  N = 10, nums[] = {4,4,2,4,3,4,4,3,2,4}

// Result: 4


// Q: Will be be only 2 elements in the array ? 

// We can have a current count variable and current majority, will start by assuming arr[0] is majority 

function findMajority1(arr){
    let m = arr[0];
    let c = 1;

    for(let i = 1; i<arr.length; i++){
        if(arr[i] === m) c++;
        else c--;
        if(c===0){
            m = arr[i];
        }
    }
    return m;
}

console.log(findMajority1([2,2,1,1,1,2,2]))
console.log(findMajority1([4,4,2,4,3,4,4,3,2,4]))