/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
var maxFrequency = function (nums, k, numOperations) {
    nums.sort((a, b) => a - b);

    let ans = 0;
    const numCount = new Map();
    const modes = new Set();

    const addMode = (value) => {
        modes.add(value);
        if (value - k >= nums.at(0)) {
            modes.add(value - k);
        }

        if (value + k <= nums.at(-1)) {
            modes.add(value + k);
        }
    };

    let lastNumIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[lastNumIndex]) {
            numCount.set(nums[lastNumIndex], i - lastNumIndex);
            ans = Math.max(ans, i - lastNumIndex);
            addMode(nums[lastNumIndex]);

            lastNumIndex = i;
        }
    }

    numCount.set(nums[lastNumIndex], nums.length - lastNumIndex);
    ans = Math.max(ans, nums.length - lastNumIndex);
    addMode(nums[lastNumIndex]);

    const leftBound = (value) => {
        let left = 0;
        let right = nums.length - 1;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] < value) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    };

    const rightBound = (value) => {
        let left = 0;
        let right = nums.length - 1;
        while (left < right) {
            const mid = Math.floor((left + right + 1) / 2);
            if (nums[mid] > value) {
                right = mid - 1;
            } else {
                left = mid;
            }
        }
        return left;
    };

    for (const mode of modes) {
        const [l, r] = [leftBound(mode - k), rightBound(mode + k)];

        let tempAns;

        if (numCount.has(mode)) {
            tempAns = Math.min(r - l + 1, numCount.get(mode) + numOperations);
        } else {
            tempAns = Math.min(r - l + 1, numOperations);
        }

        ans = Math.max(ans, tempAns);
    }

    return ans;
};