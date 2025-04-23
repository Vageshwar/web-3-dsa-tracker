// Problem Statement: Given an array of intervals, merge all the overlapping intervals and return an array of non-overlapping intervals.

// Example 1: 
// Input: intervals=[[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]

// Explanation: Since intervals [1,3] and [2,6] are overlapping we can merge them to form [1,6]
//  intervals.

// Example 2:
// Input: [[1,4],[4,5]]
// Output: [[1,5]]

// Explanation: Since intervals [1,4] and [4,5] are overlapping we can merge them to form [1,5].

// Question: Is this sorted ? e.g [x1,y1] [x2, y2] is for all data points xi <= xj where i < j

// Thoughts: for [xi, yi] and [xj, yj] I need to find yi >= xj and make [xi, yj] and repeat ?
// seems like n^2 approach, because after merging we will again compare the merged one with remaining intervals also if not sorted add NlogN

function mergeInternvals(intervals){
    // TODO: Sort if not sorted
    let ans = [];
    intervals.forEach(interval => {
        if(ans.length){
            const prev = ans[ans.length-1];
            if(prev[1] >= interval[0]){
                prev[1] = interval[1];
                ans[ans.length-1] = prev;
            }else{
                ans.push(interval);
            }
        }else{
            ans.push(interval);
        }
    })
    return ans;
    
}

console.log(mergeInternvals([[1,4],[4,5]]))