/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function(fruits, startPos, k) {
    const n = fruits.length;
    const positions = fruits.map(f => f[0]);
    const preSum = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        preSum[i + 1] = preSum[i] + fruits[i][1];
    }

    const getSum = (l, r) => preSum[r + 1] - preSum[l];

    let res = 0;
    let left = 0;

    for (let right = 0; right < n; right++) {
        // Shrink window from left if cost exceeds k
        while (left <= right) {
            const lPos = fruits[left][0];
            const rPos = fruits[right][0];

            const dist = Math.min(
                Math.abs(startPos - lPos) + (rPos - lPos),
                Math.abs(startPos - rPos) + (rPos - lPos)
            );

            if (dist <= k) break;
            left++;
        }

        res = Math.max(res, getSum(left, right));
    }

    return res;
};