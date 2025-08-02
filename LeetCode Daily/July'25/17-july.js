/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function(nums) {
    const N = nums.length;
    const n = Math.floor(N/3);
    let minHeap = new MinPriorityQueue();
    let maxHeap = new MaxPriorityQueue();
    let prefixSum  = new Array(n+1).fill(0);
    let suffixSum = 0;
    let sum = 0;

    for(let i = 0; i < n; i++){
        sum += nums[i];
        maxHeap.enqueue(nums[i]);
    }

    prefixSum[0] = sum;
    for(let i = n; i < 2*n;i++){
        sum += nums[i];
        maxHeap.enqueue(nums[i]);
        sum -= maxHeap.dequeue();
        prefixSum[i - (n-1)] = sum;
    }

    for(let i = ((n * 3 )- 1); i >= 2*n; i--){
        suffixSum += nums[i];
        minHeap.enqueue(nums[i]);
    }

    let ans = prefixSum[n] - suffixSum;
    for(let i = (2*n)-1; i >= n; i--){
        suffixSum += nums[i];
        minHeap.enqueue(nums[i]);
        suffixSum -= minHeap.dequeue();
        ans = Math.min(ans, prefixSum[i-n] - suffixSum);
    }

    return ans;

};