// Problem Statement: Given an array of numbers, you need to return the count of reverse pairs. Reverse Pairs are those pairs where i<j and arr[i]>2*arr[j].

// Examples

// Example 1:

// Input: N = 5, array[] = {1,3,2,3,1)

// Output: 2 

// Explanation: The pairs are (3, 1) and (3, 1) as from both the pairs the condition arr[i] > 2*arr[j] is satisfied.

// Example 2:

// Input: N = 4, array[] = {3,2,1,4}

// Output: 1

// Explaination: There is only 1 pair  ( 3 , 1 ) that satisfy the condition arr[i] > 2*arr[j]


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