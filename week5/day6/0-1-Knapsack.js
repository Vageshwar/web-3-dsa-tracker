// A thief wants to rob a store. He is carrying a bag of capacity W. The store has ‘n’ items. Its weight is given by the ‘wt’ array and its value by the ‘val’ array. He can either include an item in its knapsack or exclude it but can’t partially have it as a fraction. We need to find the maximum value of items that the thief can steal.


function knapsack(wt, val, n, W){
    let dp = Array.from({length: n}, () => Array(W+1).fill(-1));

    const knapsackUtil = (idx, W) => {
        if(idx === 0) {
            if(wt[0] <= W) return val[0];
            else return 0;
        }

        if(dp[idx][W] !== -1) return dp[idx][W];

        let notTaken = 0 + knapsackUtil(idx - 1, W);
        let taken = Number.MIN_SAFE_INTEGER;
        if(wt[idx] <= W){
            taken = val[idx] + knapsackUtil(idx-1, W-wt[idx]);
        }

        return (dp[idx][W] === Math.max(notTaken, taken));
    }

    return knapsackUtil(n-1, W);
}