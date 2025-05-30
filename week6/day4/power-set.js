// Problem Statement: Given a string, find all the possible subsequences of the string.

// Examples:

// Example 1:
// Input: str = "abc"
// Output: a ab abc ac b bc c
// Explanation: Printing all the 7 subsequence for the string "abc".

// Example 2:
// Input: str = "aa"
// Output: a a aa 
// Explanation: Printing all the 3 subsequences for the string "aa"


function powerSet(s){
    let ans = [];
    let n = s.length;

    for(let num = 0; num < (1 << n)-1; num++){
        let temp = "";
        for(let i = 0; i < n; i++){
            if(num & (1 << i)){
                temp = `${temp}${s[i]}`
            }
        }
        ans.push(temp);
    }
    return ans;
}

console.log(powerSet("abc"));