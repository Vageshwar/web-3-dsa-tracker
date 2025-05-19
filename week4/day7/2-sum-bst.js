// LC: https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/

import { TreeNode } from "../../utils/binary-tree.js";

// Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    if(!root) return false;
    let seen = new Map();

    function dfs(node){
        if(!node) return false;

        if(seen.has(k-node.val)) return true;
        seen.set(node.val, true);
        return dfs(node.left) || dfs(node.right);
    }

    return dfs(root);
};

const root = new TreeNode(5);
root.left = new TreeNode(3);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right = new TreeNode(6);
root.right.right = new TreeNode(7);


console.log(findTarget(root, 9));
