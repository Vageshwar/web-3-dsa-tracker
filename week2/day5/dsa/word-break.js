// TFU Link was broken
// Searched on youtube most of the problems where DP and not backtracking found one but its seems incorrect

// Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// LC: https://leetcode.com/problems/word-break-ii
 

function solver(str, a, dic, ans){
    if(str.length === 0){
        ans.push(structuredClone(a));
        return;
    }
    for(let i = 0; i<str.length; i++){
        let left = str.substring(0, i+1);
        if(dic.includes(left)){
            let right = str.substring(i+1);
            solver(right, `${a}${left} `, dic, ans);
        }
    }
}

function wordBreak(s, dict){
    let ans = [];
    wordBreak(s, "", dict, ans);
    return ans;
}

console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"]));