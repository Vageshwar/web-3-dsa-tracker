// Given an integer array arr[] of size n, the task is to find the maximum of the minimums for every window size in the given array, where the window size ranges from 1 to n.

const { Stack } = require("datastructures-js");

// Example:

// Input: arr[] = [10, 20, 30]
// Output: [30, 20, 10]
// Explanation: 
// First element in output indicates maximum of minimums of all windows of size 1. Minimums of windows of size 1 are [10], [20], [30]. Maximum of these minimums are 30 and similarly other outputs can be computed


// Input: arr[] = [10, 20, 30, 50, 10, 70, 30]
// Output: [70, 30, 20, 10, 10, 10, 10]
// Explanation: The first element in the output indicates the maximum of minimums of all windows of size 1. 
// Minimums of windows of size 1 are [10], [20], [30], [50], [10], [70] and [30]. 
// Maximum of these minimums is 70
// The second element in the output indicates the maximum of minimums of all windows of size 2. 
// Minimums of windows of size 2 are [10], [20], [30], [10], [10], and [30]. 
// Maximum of these minimums is 30
// The third element in the output indicates the maximum of minimums of all windows of size 3. 
// Minimums of windows of size 3 are [10], [20], [10], [10] and [10]. 
// Maximum of these minimums is 20
// Similarly, other elements of output are computed. 


function maximumOfMinimumEveryWindow(arr){
    let n = arr.length;
    // let nsr = Array(n+1).fill(n);
    // let nsl = Array(n+1).fill(-1);

    let ans = Array(n).fill(0);
    let s = new Stack();

    for(let i = 0; i <n; i++){
        while(!s.isEmpty() && arr[s.peek()] > arr[i]){
            let idx = s.peek();
            s.pop();
            let range = i;
            if(!s.isEmpty()){
                range = i - s.peek() - 1;
            }
            ans[range-1] = Math.max(ans[range-1], arr[idx]);
        }
        s.push(i);
    }

    while(!s.isEmpty()){
        let idx = s.peek();
        s.pop();
        let range = n;
        if(!s.isEmpty()){
            range = n - s.peek() - 1;
        }
        ans[range-1] = Math.max(ans[range-1], arr[idx]);
    }
    for(let i = n-2; i>=0; i--){
        ans[i] = Math.max(ans[i], ans[i+1]);
    }
    return ans;
}

// console.log(maximumOfMinimumEveryWindow([10, 20, 30, 50, 10, 70, 30]));
console.log(maximumOfMinimumEveryWindow([10, 20, 30]));