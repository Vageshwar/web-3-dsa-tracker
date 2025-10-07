/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function(rains) {
    const n = rains.length;
    const ans = new Array(n).fill(1);
    const last = new Map();
    const dry = [];

    const upperBound = (arr, target) => {
        let l = 0, r = arr.length;
        while (l < r) {
            let m = (l + r) >> 1;
            if (arr[m] <= target) l = m + 1;
            else r = m;
        }
        return l;
    };

    for (let i = 0; i < n; ++i) {
        if (rains[i] > 0) {
            const lake = rains[i];
            ans[i] = -1;
            if (last.has(lake)) {
                const prev = last.get(lake);
                const idx = upperBound(dry, prev); 
                if (idx === dry.length) return [];
                const dryDay = dry[idx];
                ans[dryDay] = lake; 
                dry.splice(idx, 1); 
            }
            last.set(lake, i);
        } else {
            dry.push(i); 
        }
    }
    return ans;
};