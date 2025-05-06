// Problem Statement: Given two sorted arrays of size m and n respectively, you are tasked with finding the element that would be at the kth position of the final sorted array.

function kthElementSortedArray(arr1, arr2, k){
    let m = arr1.length;
    let n = arr2.length;
    if(m > n) kthElementSortedArray(arr2, arr1, k);

    let left = k;

    let low = Math.max(0, k-n), high = Math.min(k,m);
    while(low <= high){
        let mid1 = Math.floor((low+high)/2);
        let mid2 = left - mid1;
        let r1 = Number.MAX_SAFE_INTEGER, r2 = Number.MAX_SAFE_INTEGER;
        let l1 = Number.MIN_SAFE_INTEGER, l2 = Number.MIN_SAFE_INTEGER

        if(mid1 < m) r1 = arr1[mid1];
        if(mid2 < n) r2 = arr2[mid2];
        if(mid1 - 1 >= 0) l1 = arr1[mid1-1];
        if(mid2 - 1 >= 0) l2 = arr2[mid2-1];

        if(l1 <= r2 && l2 <= r1){
            return Math.max(l1, l2);
        }
        else if(l1 > r2) high = mid1-1;
        else low = mid1+1;
    }
    return;
}