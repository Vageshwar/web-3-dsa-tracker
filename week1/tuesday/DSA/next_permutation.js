/**REVIST: https://www.youtube.com/watch?v=JDOXKqF60RQ */

// Problem Statement: Given an array Arr[] of integers, rearrange the numbers of the given array into the lexicographically next greater permutation of numbers.
// If such an arrangement is not possible, it must rearrange to the lowest possible order (i.e., sorted in ascending order).

// Example 1 :
// Input format: Arr[] = {1,3,2}
// Output: Arr[] = {2,1,3}
// Explanation: All permutations of {1,2,3} are {{1,2,3} , {1,3,2}, {2,1,3} , {2,3,1} , {3,1,2} , {3,2,1}}. So, the next permutation just after {1,3,2} is {2,1,3}.

// Example 2:
// Input format: Arr[] = {3,2,1}
// Output: Arr[] = {1,2,3}
// Explanation: As we see all permutations of {1,2,3}, we find {3,2,1} at the last position. So, we have to return the topmost permutation.

// Apporach 0: Brute force -> generate all and return the next in the list if its last return first -> Can think of backtracking with recursion as a possible way of printing all permutations

function generateAllPermutations(arr){
    let ans = [];
    function swap(i,j){
        let temp = arr[i]
        arr[i] = arr[j];
        arr[j] = temp;
    }
    function recursionHelper(index){
        // store answer when reached leaf node
        if(index === arr.length){
            ans.push([...arr]);
            return;
        }
        for(let i = index; i < arr.length; i++){
            swap(i,index);
            recursionHelper(index+1);
            swap(i,index); // reset for backtracking
        }
    }
    recursionHelper(0);
    return ans;
}

// console.log(generateAllPermutations([1,2,3]))

// Approach 1: From Examples, if I have numbers {a,b,c} where a < b < c then {a,b,c} is the topmost permutation and {c,b,a} is the last position. so If I have a random number
// {x,y,z} first I can sort it and prepare to combimations if its last return sorted one else swap position of two closest numbers from right side. ( does not work )

// Approach 2 (TUF):
// Step 1: Find a breakpoint in the sequenece where if its rearranged will form the next sequence. i.e find ith index such that arr[i] < arr[i+1]
// Step 2: Break the array in to 2 parts arr[0:i] and arr[i+1:n] and swap arr[i] with min(arr[i+1:n])
// Step 3: sort the arr[i+1:n]
// Edge Case: If no breakpoint exists that means its in decending order so reverse the array and return


function nextPermutation(arr){
    let breakpoint = -1;
    // Step 1
    for (let i = arr.length-2; i >= 0; i--) {
        if(arr[i] < arr[i+1]){
            breakpoint = i;
            break;
        }
    }
    console.log('BREAKPOINT ', breakpoint);
    // Edge Case
    if(breakpoint === -1){
        let ans = [];
        arr.forEach(e => ans.unshift(e));
        console.log('LAST POS returning 1st combn', ans);
        return ans;
    }
    // Step 2
    let minIndex = breakpoint+1;
    for(let j = breakpoint+2; j < arr.length; j++){
        if(arr[minIndex] > arr[j]){
            minIndex = j;
        }
    }
    let temp = arr[minIndex];
    arr[minIndex] = arr[breakpoint];
    arr[breakpoint] = temp;

    let sortedArr = arr.splice(breakpoint+1) || [];
    console.log('first Half Array ', arr);
    sortedArr.sort((a,b) => a-b);
    console.log('2nd Half Array sorted ', sortedArr);
    let ans = arr.concat(sortedArr);
    return ans;

}

console.log(nextPermutation([1,3,2]))