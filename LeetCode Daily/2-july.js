var possibleStringCount = function(word, k) {
    const MOD = 1e9 + 7;
    const n = word.length;
    // 1) Extract run lengths:
    const runs = [];
    let last = word[0], cnt = 1;
    for (let i = 1; i < n; i++) {
        if (word[i] === last) {
            cnt++;
        } else {
            runs.push(cnt);
            last = word[i];
            cnt = 1;
        }
    }
    runs.push(cnt);
    
    const m = runs.length;
    // 2) Quick case: if minimal original length = one per run >= k,
    //    then *every* choice of t_i in [1..runs[i]] works.
    if (m >= k) {
        let prod = 1;
        for (let r of runs) prod = prod * r % MOD;
        return prod;
    }
    
    // 3) Otherwise we need some extra repeats to reach length k:
    //      let d = k - m = total extra we need (each run i can give up to runs[i] - 1 extra)
    const d = k - m;
    // total number of all assignments = ∏ runs[i], we'll subtract those that give < d extras
    let total = 1;
    for (let r of runs) total = total * r % MOD;
    
    // 4) Count (# of ways extra_sum < d) via DP:
    //    dp[s] = # ways so far to get exactly s extra; we only keep s = 0..d-1
    let dp = new Array(d).fill(0);
    dp[0] = 1;
    for (let r of runs) {
        const allow = r - 1;
        if (allow === 0) continue;  // no extra from this run: dp stays the same
        // build prefix sums of dp
        const pre = new Array(d).fill(0);
        pre[0] = dp[0];
        for (let s = 1; s < d; s++) {
            pre[s] = (pre[s - 1] + dp[s]) % MOD;
        }
        // compute new dp'
        const ndp = new Array(d).fill(0);
        for (let s = 0; s < d; s++) {
            // sum dp[s-j] for j=0..min(allow, s)
            const lo = s - allow - 1;
            ndp[s] = pre[s] - (lo >= 0 ? pre[lo] : 0);
            if (ndp[s] < 0) ndp[s] += MOD;
        }
        dp = ndp;
    }
    
    // 5) sum dp[0..d-1] = # assignments whose extra < d,
    //    so subtract from total to get those with extra >= d
    let bad = 0;
    for (let s = 0; s < d; s++) {
        bad = (bad + dp[s]) % MOD;
    }
    return (total - bad + MOD) % MOD;
};