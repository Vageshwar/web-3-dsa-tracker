// Problem Statement: Given a String, find the length of longest substring without any repeating character.

// Examples:

// Example 1:

// Input: s = ”abcabcbb”

// Output: 3

// Explanation: The answer is abc with length of 3.

// Example 2:

// Input: s = ”bbbbb”

// Output: 1

// Explanation: The answer is b with length of 1 units.


function longestSubStringNoRepeat(s){
    let track = Array(26).fill(0);
    let ans = 0;
    for(let i = 0; i < s.length; i++){
        let tempAns = 1;
        track[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
        for(let j = i+1; j < s.length; j++){
            // assuming all chars are lowercased
            let val = s.charCodeAt(j) - 'a'.charCodeAt(0);
            if(track[val]) {
                ans = Math.max(tempAns, ans);
                track = Array(26).fill(0);
                break;
            };
            tempAns++;
            track[val] += 1;
        }
    }
    return ans;
}

function longestSubStringNoRepeat2(s){
    let track = {};
    let ans = 1;
    let start = 0;
    let end = 1;
    track[s.charAt(start)] = 1;
    while(end > start){
        if(end >= s.length) break;
        const element = s.charAt(end);
        if(track[element]){
            track = {};
            ans = Math.max(end - start, ans);
            start = end;
            tempAns = 1;
            end = start+1;
            track[s.charAt(start)] = 1;
        }else{
            track[element] = 1;
            end++;
        }
    }
    return ans;
}

console.log(longestSubStringNoRepeat2("bbbbbb"));
console.log(longestSubStringNoRepeat2("abcabcbb"));