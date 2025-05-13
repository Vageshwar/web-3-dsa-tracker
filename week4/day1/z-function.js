// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

function zFunction(str){
    let l = 0;
    let r = 0;
    let n = str.length;
    let z = new Array(n).fill(0);
    for(let i = 1; i<n;i++){
        if(i<r){
            z[i] = Math.min(r-i, z[i-l]);
        }
        while(i+z[i]<n && str.charAt(z[i]) === str.charAt(i+z[i])){
            z[i]++;
        }
        if(r < z[i]+1){
            r = z[i];
        }
    }
    return z;
}

function needleInStack(haystack, needle){
    let second = needle.length;
    let zString = `${needle}#${haystack}`
    let z = zFunction(zString);
    console.log(z);
    for(let i=second+1; i<z.length; i++){
        if(z[i] === second) return i - second - 1;
    }
    return -1;
}

console.log(needleInStack("sadbutsad", "sad"));