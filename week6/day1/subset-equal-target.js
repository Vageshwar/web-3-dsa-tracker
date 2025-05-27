// Problem statement
// You are given an array/list ‘ARR’ of ‘N’ positive integers and an integer ‘K’. Your task is to check if there exists a subset in ‘ARR’ with a sum equal to ‘K’.

// Note: Return true if there exists a subset with sum equal to ‘K’. Otherwise, return false.

// For Example :
// If ‘ARR’ is {1,2,3,4} and ‘K’ = 4, then there exists 2 subsets with sum = 4. These are {1,3} and {4}. Hence, return true.
// Detailed explanation ( Input/output format, Notes, Images )
// Constraints:
// 1 <= T <= 5
// 1 <= N <= 10^3
// 0 <= ARR[i] <= 10^9
// 0 <= K <= 10^3


function subsetEqualK(nums,k){
    let n = nums.length;
    function f(idx, target){
        if(target === 0) return true;

        if(nums[0] === target) return true;

        if(idx < 0) return false;

        const notTaken = f(idx-1, target);
        let taken = false;
        if(nums[idx] <= target){
            taken = f(idx-1, target - nums[idx]);
        }

        return notTaken || taken;
    }

    return f(n-1, k);
}

function subsetEqualKTable(nums,k){
    let n = nums.length;
    let dp = Array.from({length: n}, () => Array(k).fill(false));

    for(let i = 0; i < n; i++){
        dp[i][0] = true;
    }

    for(let i = 1; i < n; i++){
        for(let target = 1; target <= k; target++){

            const notTaken = dp[i-1][target];
            let taken = false;
            if(nums[i] <= target){
                taken = dp[i-1][target - nums[i]];
            }

            dp[i][target] = notTaken || taken;
        }
    }
    return dp[n-1][k];
}