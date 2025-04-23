// Problem Statement: Given an array of N integers, count the inversion of the array (using merge-sort).

// What is an inversion of an array? Definition: for all i & j < size of array, if i < j then you have to find pair (A[i],A[j]) such that A[j] < A[i].

// Examples

// Example 1:
// Input Format: N = 5, array[] = {1,2,3,4,5}
// Result: 0
// Explanation: we have a sorted array and the sorted array has 0 inversions as for i < j you will never find a pair such that A[j] < A[i]. More clear example: 2 has index 1 and 5 has index 4 now 1 < 5 but 2 < 5 so this is not an inversion.

// Example 2:
// Input Format: N = 5, array[] = {5,4,3,2,1}
// Result: 10
// Explanation: we have a reverse sorted array and we will get the maximum inversions as for i < j we will always find a pair such that A[j] < A[i]. Example: 5 has index 0 and 3 has index 2 now (5,3) pair is inversion as 0 < 2 and 5 > 3 which will satisfy out conditions and for reverse sorted array we will get maximum inversions and that is (n)*(n-1) / 2.For above given array there is 4 + 3 + 2 + 1 = 10 inversions.

// Example 3:
// Input Format: N = 5, array[] = {5,3,2,1,4}
// Result: 7
// Explanation: There are 7 pairs (5,1), (5,3), (5,2), (5,4),(3,2), (3,1), (2,1) and we have left 2 pairs (2,4) and (1,4) as both are not satisfy our condition. 

// Initial thoughts: N^2 appraoch to compare all combinations and count it 

function bruteForce(arr){
    let n = arr.length;
    let count = 0;
    for(let i = 0; i < n; i++){
        for(let j = i+1; j < n; j++){
            if(arr[i] > arr[j]){
                count++;
            }
        }
    }
    return count;
}

// console.log(bruteForce([1,2,3,4,5]))
// console.log(bruteForce([5,4,3,2,1]))
// console.log(bruteForce([5,3,2,1,4]))


let ans = 0;
const merge = (arr, low, mid, high) => {
    let temp = [];
    let left = low;
    let right = mid + 1;

    while(left <= mid && right <= high){
        if(arr[left] <= arr[right]){
            temp.push(arr[left]);
            left++;
        }
        else {
            temp.push(arr[right]);
            ans += (mid - left + 1);
            right++;
        }
    }

    while(left <= mid){
        temp.push(arr[left]);
        left++;
    }
    while(right <= high){
        temp.push(arr[right]);
        right++;
    }

    for(let i = low; i <= high; i++){
        arr[i] = temp[i-low];
    }
}

const mergeSort = (arr, low, high) => {
    if(low >= high) return;
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid+1, high);
    merge(arr, low, mid, high)
}

function optimal(arr){
    ans = 0;
    let n = arr.length;
    mergeSort(arr, 0, n-1);
    return ans;
}

console.log(optimal([1,2,3,4,5]))
console.log(optimal([5,4,3,2,1]))
console.log(optimal([5,3,2,1,4]))