// GFC POTD: https://www.geeksforgeeks.org/problems/case-specific-sorting-of-strings4845/1

// Given a string s consisting of only uppercase and lowercase characters. The task is to sort uppercase and lowercase letters separately such that if the ith place in the original string had an Uppercase character then it should not have a lowercase character after being sorted and vice versa.


class Solution {
    caseSort(s) {
        // code here
        let n = s.length;
        let lower = [];
        let upper = [];
        for(let c of s){
            if(c >= 'a' && c <= 'z'){
                lower.push(c);
            }else{
                upper.push(c);
            }
        }
        lower.sort();
        upper.sort();
        let l = 0;
        let u = 0;
        let res = Array(n).fill("");
        
        for(let i = 0; i < n; i++){
            if(s[i] >= 'a' && s[i] <= 'z'){
                res[i] = lower[l++];
            }else{
                res[i] = upper[u++];
            }
        }
        
        return res.join("")
    }
}