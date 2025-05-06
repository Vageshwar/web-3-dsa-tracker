// Problem Statement: Given two sorted arrays arr1 and arr2 of size m and n respectively, return the median of the two sorted arrays. The median is defined as the middle value of a sorted list of numbers. In case the length of the list is even, the median is the average of the two middle elements.

// Examples

// Example 1:
// Input Format: n1 = 3, arr1[] = {2,4,6}, n2 = 3, arr2[] = {1,3,5}
// Result: 3.5
// Explanation: The array after merging 'a' and 'b' will be { 1, 2, 3, 4, 5, 6 }. As the length of the merged list is even, the median is the average of the two middle elements. Here two medians are 3 and 4. So the median will be the average of 3 and 4, which is 3.5.

// Example 2:
// Input Format: n1 = 3, arr1[] = {2,4,6}, n2 = 2, arr2[] = {1,3}
// Result: 3
// Explanation: The array after merging 'a' and 'b' will be { 1, 2, 3, 4, 6 }. The median is simply 3.


function medianOfTwoSorted(arr1, arr2){
    let n1 = arr1.length;
    let n2 = arr2.length;
    if(n1 > n2){
        return medianOfTwoSorted(arr2, arr1);
    }
    let low = 0;
    let high = n1;
    let left = Math.floor((n1+n2+1)/2);
    let n = n1 + n2;
    while(low <= high){
        let mid1 = (low + high) >> 1;
        let mid2 = (left - mid1);
        let l1 = -Infinity;
        let l2 = -Infinity;
        let r1 = Infinity;
        let r2 = Infinity;
        
        if(mid1 < n1) r1 = arr1[mid1];
        if(mid2 < n2) r2 = arr2[mid2];
        if(mid1 - 1 >= 0) l1 = a[mid1-1];
        if(mid2 - 1 >= 0) l2 = a[mid2-1];

        if(l1 <= r2 && l2 <= r1){
            if(n%2 === 1) return Math.max(l1,l2);
            else{
                return ((Math.max(l1,l2) + Math.min(r1,r2)) / 2); //ans;
            }
        }
        else if(l1 > r2) high = mid1 - 1;
        else low = mid1+1;
    }
}