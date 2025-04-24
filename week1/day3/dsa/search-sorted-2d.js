// Problem Statement: You have been given a 2-D array 'mat' of size 'N x M' where 'N' and 'M' denote the number of rows and columns, respectively. The elements of each row are sorted in non-decreasing order. Moreover, the first element of a row is greater than the last element of the previous row (if it exists). You are given an integer ‘target’, and your task is to find if it exists in the given 'mat' or not.

// Examples

// Example 1:
// Input Format: N = 3, M = 4, target = 8,
// mat[] = 
// 1 2 3 4
// 5 6 7 8 
// 9 10 11 12
// Result: true
// Explanation: The ‘target’  = 8 exists in the 'mat' at index (1, 3).

// Example 2:
// Input Format: N = 3, M = 3, target = 78,
// mat[] = 
// 1 2 4
// 5 7 8 
// 9 10 34
// Result: false
// Explanation: The ‘target' = 78 does not exist in the 'mat'. Therefore in the output, we see 'false'.

// Thoughts -> if sorted and need to find something use binary search -> But now its 2D array so need to think
// Normally we use low, mid and high, I belive here we need to have a different forumal for mid low and high can still be same
// N x M matrix means total of N x M items
// Since matrix is array of array can't we check last and first element of each row first and then do binary search in possible row. if no possible row return false ? 


function binarySearch(arr, x){
    let low = 0;
    let high = arr.length-1;
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        if(arr[mid] === x) return true;
        if(arr[mid] > x) high = mid-1;
        else if(arr[mid] < x) low = mid+1;
    }
    return false;
}

function searchSorted2DArray(matrix, val){
    let N = matrix.length;
    let M = matrix[0].length;
    let searchArr = [];

    for(let i = 0; i < N; i++){
        let row = matrix[i];
        if(row[0] === val || row[M-1] === val) return true;
        if(row[0] < val && row[M-1] > val) {
            searchArr = row;
            break;
        }
    }
    if(!searchArr.length) return false;
    return binarySearch(searchArr, val);
}


console.log(searchSorted2DArray([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
], 7));
console.log(searchSorted2DArray([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
], 13));
console.log(searchSorted2DArray([
    [1,2,4],
    [5,7, 8],
    [10,12,13],
], 7));