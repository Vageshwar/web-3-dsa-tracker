// Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values) and a target value k. Now the array is rotated at some pivot point unknown to you. Find the index at which k is present and if k is not present return -1.



function  searchSortedRoated(arr, k){
    let low = 0;
    let high = arr.length;
    while(low <= high){
        let mid = Math.floor((low+high)/2);

        if(arr[mid === k]) return mid;

        if(arr[low] <= arr[mid]){
            if(arr[low] <= k && k <= arr[mid]){
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        }else{
            if(arr[mid] <= k && k <= arr[high]){
                low = mid + 1;
            }else{
                high = mid - 1;
            }
        }
    }
    return -1;
}