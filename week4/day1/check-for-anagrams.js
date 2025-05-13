// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

var isAnagram = function(s, t) {
    let map = new Map();
    let n = s.length;
    let m = t.length;
    if(m !== n) return false; // length dif
    for(let i = 0; i < n; i++){
        let c = `${s.charAt(i)}`;
        map.set(c, (map.get(c) || 0) + 1);
    }
    for(let j = 0; j < m; j++){
        let c = `${t.charAt(j)}`;
        if(!map.get(c)) return false;
        else map.set(c, map.get(c) - 1);
    }
    return true;
};