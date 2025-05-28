// LC: https://leetcode.com/problems/maximum-profit-in-job-scheduling/description/

// We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i].

// You're given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.

// If you choose a job that ends at time X you will be able to start another job that starts at time X.

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
  const numJobs = startTime.length;
  const jobs = Array(numJobs).fill(0).map((_,i) => [endTime[i], startTime[i], profit[i]]);

  jobs.sort((a,b) => a[0] - b[0]);

  const dp = Array(numJobs+1).fill(0);

  for(let i = 0; i < numJobs; i++){
    const [startTime, profit] = jobs[i];

    const latestJob = upperBound(jobs, i, startTime);
    dp[i+1] = Math.max(dp[i], dp[latestJob] + profit);
  }

  return dp[numJobs];
};


function upperBound(jobs, endIndex, targetTime) {
    let low = 0;
    let high = endIndex;
    while(low < high){
        const mid = Math.floor((low+high)/2);
        if(jobs[mid][0] <= targetTime){
            low = mid+1;
        }else{
            high = mid;
        }
    }
    return low;
}