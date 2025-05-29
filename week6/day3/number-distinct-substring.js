// Given a string s, determine the number of distinct substrings (including the empty substring) of the given string.



// A string B is a substring of a string A if B can be obtained by deleting several characters (possibly none) from the start of A and several characters (possibly none) from the end of A. Two strings X and Y are considered different if there is at least one index i such that the character of X at index i is different from the character of Y at index i (X[i] != Y[i]).


// Examples:
// Input : s = "aba"

// Output : 6

// Explanation : The distinct substrings are "a", "ab", "ba", "b", "aba", "".

// Input : s = "abc"

// Output : 7

// Explanation : The distinct substrings are "a", "ab", "abc", "b", "bc", "c", "".

// LC: https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/description/
// Requires subscribtion

class TrieNode {
    constructor(){
        this.children = {};
    }

    contains(c){
        return Boolean(this.children[c]);
    }

    put(c, node){
        this.children[c] = node;
    }

    get(c){
        return this.children[c];
    }
}

function countDistinctSubstring(s){
    let root = new TrieNode();

    let ans = 1;

    for(let i = 0; i < s.length; i++){
        let node = root;
        for(let j = i; j < s.length; j++){
            if(!node.contains(s[j])){
                ans++;
                node.put(s[j], new TrieNode());
            }
            node  = node.get(s[j]);
        }
    }
    return ans;
}