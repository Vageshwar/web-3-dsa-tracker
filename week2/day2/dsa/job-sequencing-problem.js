// Problem Statement: You are given a set of N jobs where each job comes with a deadline and profit.
// The profit can only be earned upon completing the job within its deadline.
// Find the number of jobs done and the maximum profit that can be obtained.
// Each job takes a single unit of time and only one job can be performed at a time.

// Examples

// Example 1:

// Input: N = 4, Jobs = {(1,4,20),(2,1,10),(3,1,40),(4,1,30)}

// Output: 2 60

// Explanation: The 3rd job with a deadline 1 is performed during the first unit of time .The 1st job is performed during the second unit of time as its deadline is 4.
// Profit = 40 + 20 = 60

// Example 2:

// Input: N = 5, Jobs = {(1,2,100),(2,1,19),(3,2,27),(4,1,25),(5,1,15)}

// Output: 2 127

// Explanation: The  first and third job both having a deadline 2 give the highest profit. 
// Profit = 100 + 27 = 127


/**
 * Sort as max profit in descending order and take the jobs, when sorting will consider highest profit lowest deadline, if deadline taken
 * take next highest profile and lowest deadline
 */

const jobObject = (id, deadline, profit) => ({id, profit, deadline});


function jobSequencing(jobs){
    let maxDeadline = 0;
    let sortedJobs = jobs.sort((a,b) => {
        maxDeadline = Math.max(maxDeadline, a.deadline, b.deadline);
        return b.profit - a.profit;
    })
    let profit = 0;
    let scheduler = Array(maxDeadline+1).fill(-1);

    sortedJobs.forEach(job => {
        for (let j = job.deadline; j > 0; j--) {
            if(scheduler[j] === -1){
                scheduler[j] = job.id;
                profit+=job.profit;
                break;
            }
        }
    })
    return profit;
    
}


let jobs = [jobObject(1,4,20), jobObject(2,1,10), jobObject(3,1,40), jobObject(4,1,30)]
let jobs2 = [jobObject(1,2,100),jobObject(2,1,19),jobObject(3,2,27),jobObject(4,1,25),jobObject(5,1,15)]

console.log(jobSequencing(jobs));