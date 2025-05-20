// LC: https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/description/

import { TreeNode } from "../../utils/binary-tree.js";

// Given a binary tree root, return the maximum sum of all keys of any sub-tree which is also a Binary Search Tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


function NodeValue(minNode, maxNode, maxSum) {
    this.maxNode = maxNode;
    this.minNode = minNode;
    this.maxSum = maxSum;
}

function maxSumBST(root){
    if(!root) return 0;
    function helper(node){
        if(!node) return new NodeValue(Infinity, -Infinity, 0);

        let left = helper(node.left);
        let right = helper(node.right);
        
        // Check if bst
        if(left.maxNode < node.val && node.val < right.minNode){
            return new NodeValue(Math.min(root.val, left.minNode), Math.max(root.val, right.maxNode), left.maxSum + right.maxSum + node.val);
        }

        return new NodeValue(-Infinity, Infinity, Math.max(left.maxSum, right.maxSum));
    }

    return helper().maxSum;


}

const root = new TreeNode(4);
root.right = new TreeNode(3);
root.right.left = new TreeNode(1);
root.right.right = new TreeNode(2);

console.log(maxSumBST(root));