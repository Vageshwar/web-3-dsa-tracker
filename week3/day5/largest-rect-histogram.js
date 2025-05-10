// link: https://takeuforward.org/data-structure/area-of-largest-rectangle-in-histogram/
// Problem Statement: Given an array of integers heights representing the histogram's bar height where the width of each bar is 1  return the area of the largest rectangle in histogram.

// Example:

// Input: N =6, heights[] = {2,1,5,6,2,3}

// Output: 10

function bruteForce(arr){
    let ans = 0;
    let n = arr.length;
    let time = Date.now();
    console.log(`Start Time: ${time}`)
    for(let i = 0; i<n; i++){
        let leftMin = Number.MAX_SAFE_INTEGER;
        for(let j = i; j<n;j++){
            leftMin = Math.min(arr[j], leftMin);
            ans = Math.max(ans, leftMin * (j-i+1));
        }
    }
    console.log("END TIME: ", Date.now())
    console.log("TIME TAKEN:", (Date.now() - time), "ms");
    return ans;
}

console.log(bruteForce([2,1,5,6,2,3]))

// using Next Greater / Small element algo
function optimal1(){
 let leftSmaller = [] // get left smaller
 let rightSmaller = [] // get right smaller
 // use formaul for each i
 // height * width
 // heigh = leftsmaller - rightSmaller 
 // width = rightSmallerIdx - leftSmallerIdx + 1
}


function singlePass(arr){
    let ans = 0;
    let s = [];
    let n = arr.length;
    const getTop = () => {
        return s[s.length - 1];
    }
    for(let i = 0; i <= n; i++){
        while(s.length && (i === n || arr[getTop()] >= arr[i])){
            let height = arr[getTop()];
            s.pop();
            let width;
            if(!s.length) width = i;
            else{
                width = i - getTop() - 1;
            }
            ans = Math.max(ans, width * height);
        }
        s.push(i);
    }
    return ans;
}