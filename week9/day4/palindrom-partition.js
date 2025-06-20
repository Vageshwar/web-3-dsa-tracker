// Given a string s, find all possible ways to partition it such that every substring in the partition is a palindrome.

// Examples:

// Input: s = "geeks"
// Output: [[g, e, e, k, s], [g, ee, k, s]]
// Explanation: [g, e, e, k, s] and [g, ee, k, s] are the only partitions of "geeks" where each substring is a palindrome.
// Input: s = "abcba"
// Output: [[a, b, c, b, a], [a, bcb, a], [abcba]]
// Explanation: [a, b, c, b, a], [a, bcb, a] and [abcba] are the only partitions of "abcba" where each substring is a palindrome.
// Constraints:
// 1 ≤ s.size() ≤ 20

/**
 * @param {string} S
 * @return {string[][]}
 */
class Solution {
    palinParts(s) {
        // code here
        const isPalindrom = (s) => {
            let i = 0;
            let j = s.length - 1;
            
            while(j > i){
                if(s[i] !== s[j]) return false;
                i++;
                j--;
            }
            return true;
        }
        let res = [];
        let n = s.length;
        
        function backtrack(i, temp){
            if(i === n){
                res.push([...temp]);
                return;
            }
            for(let j = i+1; j < n+1; j++){
                let ss = s.substring(i, j);
                if(isPalindrom(ss)){
                    temp.push(ss);
                    backtrack(j,temp);
                    temp.pop();
                }
            }
        }
        
        backtrack(0,[])
        return res;
    }
}