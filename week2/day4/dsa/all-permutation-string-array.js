// Problem Statement: Given an array arr of distinct integers, print all permutations of String/Array.

// Examples:

// Example 1: 

// Input: arr = [1, 2, 3]

// Output: 
// [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1]
// ]

// Explanation: Given an array, return all the possible permutations.

// Example 2:

// Input: arr = [0, 1]

// Output:
// [
//   [0, 1],
//   [1, 0]
// ]

// Explanation: Given an array, return all the possible permutations.

function allPermutation(arr){
    let ans = [];
    let n = arr.length;
    let temp = [];
    let flag = Array(n).fill(false);
    const helper = () => {
        if(temp.length === n){
            ans.push(structuredClone(temp));
            return;
        }
        for(let i = 0; i < n; i++){
            if(!flag[i]){
                flag[i]=true;
                temp.push(arr[i]);
                helper();
                temp.pop();
                flag[i] = false;

            }
        }
    }
    helper();
    return ans;
}

console.log(allPermutation([1,2,3]))