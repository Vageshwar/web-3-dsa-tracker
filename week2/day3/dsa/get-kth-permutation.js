// 
// Examples:

// Example 1:
// Input: N = 3, K = 3
// Output: “213”
// Explanation: The sequence has 3! permutations as illustrated in the figure above. K = 3 corresponds to the third sequence.

// Example 2:
// Input: N = 3, K = 5 
// Result: “312”
// Explanation: The sequence has 3! permutations as illustrated in the figure above. K = 5 corresponds to the fifth sequence.


function findKthPermutation(N, K){
    let fact = 1;
    let ans = [];
    let nums = [];
    for(let i = 1; i < N; i++){
        fact *= i;
        nums.push(i);
    }
    nums.push(N);
    K--;
    while(true){
        let currentKey = Math.floor(K/fact);
        ans.push(nums[currentKey]);
        nums.splice(currentKey, 1);
        if(nums.length === 0) break;
        K %= fact;
        fact = Math.floor(fact / nums.length);
    }
    return ans.join("");
}

console.log(findKthPermutation(3,5));
console.log(findKthPermutation(3,3));
console.log(findKthPermutation(3,2));