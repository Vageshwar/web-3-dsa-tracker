// LC: https://leetcode.com/problems/repeated-string-match/solutions/416144/Rabin-Karp-algorithm-C++-implementation/

// Given two strings a and b, return the minimum number of times you should repeat string a so that string b is a substring of it. If it is impossible for b​​​​​​ to be a substring of a after repeating it, return -1.

// Notice: string "abc" repeated 0 times is "", repeated 1 time is "abc" and repeated 2 times is "abcabc".

 

// Example 1:

// Input: a = "abcd", b = "cdabcdab"
// Output: 3
// Explanation: We return 3 because by repeating a three times "abcdabcdabcd", b is a substring of it.
// Example 2:

// Input: a = "a", b = "aa"
// Output: 2
 
let BASE = 1000000;
function rabinKarp(source, target){
    if(source === "" || target === "") return -1;
    console.log(source, target);
    let m = target.length;
    let power = 1;
    for(let i = 0; i<m;i++){
        power = (power * 31)%BASE;
    }
    let targetCode = 0;
    for(let i = 0; i<m;i++){
        targetCode = (targetCode*31 + target.charCodeAt(i))%BASE;
    }
    let hashCode = 0;
    for(let i = 0; i<source.length;i++){
        hashCode = (hashCode*31 + source.charCodeAt(i))%BASE;
        if(i<m-1)continue;
        if(i>=m){
            hashCode = (hashCode - source.charCodeAt(i-m)*power)%BASE;
        }
        if(hashCode<0) hashCode+=BASE;
        if(hashCode === targetCode){
            if(source.substr(i-m+1,m) === target) return i-m+1;
        }
    }
    return -1;
}



function repeatedStringMatch(a,b){
    if(a===b) return 1;
    let count = 1;
    let source = a;
    while(source.length < b.length){
        count++;
        source = `${source}${a}`
    }
    if(source === b) return count;
    if(rabinKarp(source, b) !== -1) return count;
    if(rabinKarp(`${source}${a}`, b) !== -1) return count+1;
    return -1;
}


console.log(repeatedStringMatch("abcd", "cdabcdab"));
console.log(repeatedStringMatch("a", "aa"));

// JS Way
var repeatedStringMatchJS = function(a, b) {
    let rep = a
    let count = 1
    while (rep.length < b.length) {
        rep += a
        count++
    }
    if (rep.includes(b)) {
        return count
    }
    rep += a
    count++
    if (rep.includes(b)) {
        return count
    }
    return -1
};