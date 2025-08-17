/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function(n, k, maxPts) {
    //  const dp = Array.from({length: n+1}, ()=>0);
    //  dp[0] = 1;
    //  for(let i = 1; i <= n; i++){
    //     for(let j = 1; j <= maxPts; j++){
    //         if(i-j >= 0 && i-j < k){
    //             dp[i] += (dp[i-j] / maxPts);
    //         }
    //     }
    //  }
    //  let ans = 0;
    //  for(let i = k; i <= n; i++){
    //     ans += dp[i];
    //  } 
    //  return ans;

    // TLE : ABOVE SOLUTION

    if (k === 0 || n >= k - 1 + maxPts) return 1.0;

    let dp = new Array(maxPts).fill(0.0);
    dp[0] = 1.0;

    let windowSum = 1.0, result = 0.0;

    for (let i = 1; i <= n; i++) {
        let prob = windowSum / maxPts;

        if (i < k) {
            windowSum += prob;
        } else {
            result += prob;
        }

        if (i >= maxPts) {
            windowSum -= dp[i % maxPts];
        }

        dp[i % maxPts] = prob;
    }

    return result;
};