// LC: https://leetcode.com/problems/minimum-cost-to-cut-a-stick/description/

// Given a wooden stick of length n units. The stick is labelled from 0 to n. For example, a stick of length 6 is labelled as follows:


// Given an integer array cuts where cuts[i] denotes a position you should perform a cut at.

// You should perform the cuts in order, you can change the order of the cuts as you wish.

// The cost of one cut is the length of the stick to be cut, the total cost is the sum of costs of all cuts. When you cut a stick, it will be split into two smaller sticks (i.e. the sum of their lengths is the length of the stick before the cut). Please refer to the first example for a better explanation.

// Return the minimum total cost of the cuts.

/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function (n, cuts) {
  let c = cuts.length;
  if (!c) return 0;
  cuts.unshift(0);
  cuts.push(n);
  cuts = cuts.sort((a, b) => a - b);
  let dp = Array.from({ length: c + 1 }, () => Array(c + 1).fill(-1));
  let helper = (i, j) => {
    let mini = Infinity;
    if (i > j) return 0;
    if (dp[i][j] !== -1) return dp[i][j];
    for (let idx = i; idx <= j; idx++) {
      let currentCost =
        cuts[j + 1] - cuts[i - 1] + helper(i, idx - 1) + helper(idx + 1, j);
      mini = Math.min(mini, currentCost);
    }
    dp[i][j] = mini;
    return mini;
  };

  return helper(1, c);
}; 