// An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

// Your goal is to find that missing element.

// Write a function:

// class Solution { public int solution(int[] A); }

// that, given an array A, returns the value of the missing element.

// For example, given array A such that:

//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.

function missingElement(arr){
    const n = arr.length;
    let sumCurrent = arr.reduce((prev, curr) => {
        prev += curr;
        return prev;
    }, 0)

    let sumToBe = ((n+1) * (n+2)) / 2;
    console.log(sumCurrent, sumToBe);
    return sumToBe - sumCurrent;
}

console.log(missingElement([1,2,3,5]));
