// Problem statement: Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order. Merge them in sorted order. Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements.
// Example 1:

// Input: 
// n = 4, arr1[] = [1 4 8 10] 
// m = 5, arr2[] = [2 3 9]

// Output: 
// arr1[] = [1 2 3 4]
// arr2[] = [8 9 10]

// Explanation:
// After merging the two non-decreasing arrays, we get, 1,2,3,4,8,9,10.

// Example2:

// Input: 
// n = 4, arr1[] = [1 3 5 7] 
// m = 5, arr2[] = [0 2 6 8 9]

// Output: 
// arr1[] = [0 1 2 3]
// arr2[] = [5 6 7 8 9]

// Explanation:
// After merging the two non-decreasing arrays, we get, 0 1 2 3 5 6 7 8 9.


function mergeSortShellSort(arr1, arr2){
    let m = arr2.length;
    let n = arr1.length;
    let len = n + m;
    let gap = Math.ceil(len / 2);

    const swap = (a1, a2, i1, i2) => {
        if(a1[i1] > a2[i2]){
            let temp = a1[i1];
            a1[i1] = a2[i2];
            a2[i2] = temp;
        }
    }

    while(gap > 0){
        let left = 0;
        let right = gap;
        while(right < len){
            if(left < n && right >= n){
                swap(arr1, arr2, left, right - n);
            }
            else if(left >= n && right >= n){
                swap(arr2, arr2, left - n, right - n);
            }
            else {
                swap(arr1, arr1, left, right);
            }
            left++;
            right++
        }
        if(gap === 1) break;
        gap = Math.ceil(gap/2);
    }
    
    console.log(arr1);
    console.log(arr2);

}

mergeSortShellSort([1,4,8,10], [2,3,9] )