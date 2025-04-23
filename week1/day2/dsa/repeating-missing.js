// Problem Statement: You are given a read-only array of N integers with values also in the range [1, N] both inclusive. Each integer appears exactly once except A which appears twice and B which is missing. The task is to find the repeating and missing numbers A and B where A repeats twice and B is missing.

// Examples

// Example 1:
// Input Format:  array[] = {3,1,2,5,3}
// Result: {3,4)
// Explanation: A = 3 , B = 4 
// Since 3 is appearing twice and 4 is missing

// Example 2:
// Input Format: array[] = {3,1,2,5,4,6,7,5}
// Result: {5,8)
// Explanation: A = 5 , B = 8 
// Since 5 is appearing twice and 8 is missing

// Thoughts: Hashmap seems straight forward solution but with extra space


function mathSol(arr){
    const n = arr.length;
    const s = (n * (n+1)) / 2;
    const ss = (n * (n+1) * (2 *n + 1)) / 6;
    let s2 = 0;
    let ss2 = 0;
    arr.forEach(item => {
        s2 += item;
        ss2 += (item * item);
    })
    let val1 = s2 - s;
    let val2 = (ss2 - ss) / val1;
    let x = (val1 + val2) / 2;
    let y = x - val1;
    return [x,y];
}

console.log(mathSol([4,3,6,2,1,1]));