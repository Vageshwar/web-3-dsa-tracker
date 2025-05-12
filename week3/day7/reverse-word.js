// Problem Statement: Given a string s, reverse the words of the string.

// Examples:

// Example 1:
// Input: s=”this is an amazing program”
// Output: “program amazing an is this”

// Example 2:
// Input: s=”This is decent”
// Output: “decent is This”

function reverseWord(s){
    let ans = "";
    let temp = "";
    let n = s.length;
    for(let i = n; i>=0; i--){
        const lastChar = s.charAt(i);
        temp = `${lastChar}${temp}`.trim();
        if((lastChar === " " || i === 0) && temp.length){
            ans = `${ans} ${temp}`;
            temp = "";
            continue;
        }
    }
    return ans.trim();
}

console.log(reverseWord("a good   example"))
console.log(reverseWord("This is decent"))