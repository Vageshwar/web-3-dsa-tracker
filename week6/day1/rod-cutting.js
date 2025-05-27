// Problem statement
// Given a rod of length ‘N’ units. The rod can be cut into different sizes and each size has a cost associated with it. Determine the maximum cost obtained by cutting the rod and selling its pieces.

// Note:
// 1. The sizes will range from 1 to ‘N’ and will be integers.

// 2. The sum of the pieces cut should be equal to ‘N’.

// 3. Consider 1-based indexing.

function rodCutting(n, price){
    function f(idx, target){
        if(idx === 0) return target * price[0];
        
        const notTaken = 0 + f(idx-1, target, price);
        const rodLength = idx + 1;
        let taken = Number.MIN_SAFE_INTEGER;
        if(rodLength <= target){
            taken =  f(idx, target-price[idx]);
        }
        return Math.max(taken, notTaken);
    }

    return f(n-1, price);
}

function rodCuttingMemoization(n, price){
    let dp = Array.from({length: n}, () => Array(n+1).fill(-1));
    function f(idx, target){
        if(idx === 0) return target * price[0];

        if(dp[idx][target] !== -1) return dp[idx][target];
        
        const notTaken = 0 + f(idx-1, target, price);
        const rodLength = idx + 1;
        let taken = Number.MIN_SAFE_INTEGER;
        if(rodLength <= target){
            taken =  price[idx] + f(idx, target-price[idx]);
        }
        dp[idx][target] = Math.max(taken, notTaken);
        return dp[idx][target];
    }

    return f(n-1, price);
}

function rodCuttingTabulation(n, price){
    let dp = Array.from({length: n+1}, () => Array(n+1).fill(-1));
    function f(idx, target){
        if(idx === 0) return target * price[0];

        if(dp[idx][target] !== -1) return dp[idx][target];
        
        const notTaken = 0 + f(idx-1, target, price);
        const rodLength = idx + 1;
        let taken = Number.MIN_SAFE_INTEGER;
        if(rodLength <= target){
            taken =  price[idx]+ f(idx, target-price[idx]);
        }
        dp[idx][target] = Math.max(taken, notTaken);
        return dp[idx][target];
    }

    for(let target = 0; target<=n;target++){
        dp[0][target] = target * price[0];
    }

    for(let i = 1; i<n;i++){
        for(target = 0; target <= n; target++){
            let notTaken = 0 + dp[i-1][target];
            let taken = Number.MIN_SAFE_INTEGER;
            let rodLength = i+1;
            if(target >= rodLength){
                taken = price[i] + dp[i][target-rodLength];
            }

            dp[i][target] = Math.max(notTaken, taken);
        }
    }

    return dp[n-1][n]
}