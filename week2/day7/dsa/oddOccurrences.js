// A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

// For example, in array A such that:

//   A[0] = 9  A[1] = 3  A[2] = 9
//   A[3] = 3  A[4] = 9  A[5] = 7
//   A[6] = 9
// the elements at indexes 0 and 2 have value 9,
// the elements at indexes 1 and 3 have value 3,
// the elements at indexes 4 and 6 have value 9,
// the element at index 5 has value 7 and is unpaired.

function oddOccurrences(arr){
    let ans = arr[0];
    const n = arr.length;
    for(let i = 1; i<n; i++){
        ans = ans ^ arr[i];
    }
    return ans;
}


console.log(oddOccurrences([9,3,9,3,9,7,9]))