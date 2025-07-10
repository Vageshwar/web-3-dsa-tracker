/**
 * @param {number} eventTime
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function(eventTime, startTime, endTime) {
    let n = startTime.length;
    let gap = new Array(n+1).fill(0);

    for(let i = 1; i < n; i++){
        gap[i] = startTime[i] - endTime[i-1];
    }

    gap[0] = startTime[0];
    gap[n] = eventTime - endTime[n-1];

    const rightMax = new Array(n + 1).fill(0);
    rightMax.reduceRight((a, val, i) => {
        if (i < n) rightMax[i] = Math.max(rightMax[i + 1], gap[i + 1]);
        return a;
    }, 0);

    let leftMax = 0;
    let maxGap = 0;

    startTime.map((s, i) => i + 1).forEach(i => {
        const dur = endTime[i - 1] - startTime[i - 1];
        const gapL = gap[i - 1];
        const gapR = gap[i];

        if (leftMax >= dur || rightMax[i] >= dur)
            maxGap = Math.max(maxGap, gapL + dur + gapR);

        maxGap = Math.max(maxGap, gapL + gapR);
        leftMax = Math.max(leftMax, gapL);
    });

    return maxGap;
};