// LC: https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/description/

// Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 <= i <= j < n.

 

// Example 1:

// Input: nums = [3,10,5,25,2,8]
// Output: 28
// Explanation: The maximum result is 5 XOR 25 = 28.
// Example 2:

// Input: nums = [14,70,53,83,49,91,36,80,92,51,66,70]
// Output: 127

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXORBrute = function(nums) {
    let ans = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            ans = Math.max(nums[i]^nums[j], ans);
        }
    }
    return ans;
};


class TrieNode {
    constructor(){
        this.children = Array(2).fill(null);
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

class Trie {
    constructor(){
        this.root = new TrieNode();
    }

    insert(num){
        let node = this.root;
        for(let i = 31; i>=0; i--){
            let bit = (num >> i) & 1;
            if(!node.contains(bit)){
                node.put(bit, new TrieNode());
            }
            node = node.get(bit);
        }
    }

    getMax(num){
        let node = this.root;
        let maxNum = 0;
        for(let i = 31; i >= 0; i--){
            let bit = (num >> i) & 1;
            if(node.contains(1-bit)){
                maxNum = maxNum | (1 << i);
                node = node.get(1-bit);
            }else{
                node = node.get(bit);
            }
        }
        return maxNum;
    }
}


function findMaximumXOR(nums){
    let ans = Number.MIN_SAFE_INTEGER;
    const trie = new Trie();
    for(let num of nums){
        trie.insert(num);
    }
    for(let num of nums){
        ans = Math.max(ans, trie.getMax(num));
    }

    return ans;
}

console.log(findMaximumXOR([3,10,5,25,2,8]))