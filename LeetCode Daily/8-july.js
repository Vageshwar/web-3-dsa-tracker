/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function(events, k) {
    events.sort((a, b) => a[0] - b[0]);
    const n = events.length;
    function findNextIndex(endTime) {
        let left = 0, right = n;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (events[mid][0] > endTime) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }

    const memo = new Map();

    function dfs(i, remain) {
        if (i >= n || remain === 0) return 0;
        const key = `${i}-${remain}`;
        if (memo.has(key)) return memo.get(key);

        // Option 1: skip this event
        let res = dfs(i + 1, remain);

        // Option 2: take this event
        let next = findNextIndex(events[i][1]);
        res = Math.max(res, events[i][2] + dfs(next, remain - 1));

        memo.set(key, res);
        return res;
    }

    return dfs(0, k);
};
