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

function computeLPS(pattern){
    const lps = Array(pattern.length).fill(0);
    let length = 0;
    let i = 1;

    while(i<pattern.length){
        if(pattern[i] === pattern[length]){
            length++;
            lps[i] = length;
            i++;
        }else{
            if(length !== 0){
                length = lps[length-1];
            }else{
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

function kmpSearch(text, pattern){
    const lps = computeLPS(pattern);
    const result = [];

    let i = 0;
    let j = 0;

    while(i < text.length){
        if(pattern[j] === text[i]){
            i++;
            j++;
        }
        if(j === pattern.length){
            result.push(i-j);
            j = lps[j-1];
        }else if(i < text.length && pattern[j] !== text[i]){
            if(j !== 0){
                j = lps[j-1];
            }else{
                i++;
            }
        }
    }
    if(!result.length) return -1;
    return result[0];
}

function needleInStack(haystack, needle){
    return kmpSearch(haystack, needle);
}

console.log(needleInStack("sadbutsad", "but"));