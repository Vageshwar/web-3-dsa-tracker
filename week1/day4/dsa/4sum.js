// Problem Statement: Given an array of N integers, your task is to find unique quads that add up to give a target value. In short, you need to return an array of all the unique quadruplets [arr[a], arr[b], arr[c], arr[d]] such that their sum is equal to a given target.

// Pre-req: 3-sum problem and 2-sum problem

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// arr[a] + arr[b] + arr[c] + arr[d] == target

// Examples

// Example 1:
// Input Format: arr[] = [1,0,-1,0,-2,2], target = 0
// Result: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Explanation: We have to find unique quadruplets from the array such that the sum of those elements is equal to the target sum given that is 0. The result obtained is such that the sum of the quadruplets yields 0.

// Example 2:
// Input Format: arr[] = [4,3,3,4,4,2,1,2,1,1], target = 9
// Result: [[1,1,3,4],[1,2,2,4],[1,2,3,3]]
// Explanation: The sum of all the quadruplets is equal to the target i.e. 9.

function fSum(){
    let n = v.length;

    let cnt1 = 0, cnt2 = 0; 
    let el1 = -Infinity; 
    let el2 = -Infinity; 

    for (let i = 0; i < n; i++) {
        if (cnt1 === 0 && el2 !== v[i]) {
            cnt1 = 1;
            el1 = v[i];
        }
        else if (cnt2 === 0 && el1 !== v[i]) {
            cnt2 = 1;
            el2 = v[i];
        }
        else if (v[i] === el1) cnt1++;
        else if (v[i] === el2) cnt2++;
        else {
            cnt1--, cnt2--;
        }
    }

    let ls = []; 

    cnt1 = 0, cnt2 = 0;
    for (let i = 0; i < n; i++) {
        if (v[i] === el1) cnt1++;
        if (v[i] === el2) cnt2++;
    }

    let mini = Math.floor(n / 3) + 1;
    if (cnt1 >= mini) ls.push(el1);
    if (cnt2 >= mini) ls.push(el2);


    return ls;
}