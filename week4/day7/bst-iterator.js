// LC: https://leetcode.com/problems/binary-search-tree-iterator/description/

import { TreeNode } from "../../utils/binary-tree.js";

// Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):

// BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.
// boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
// int next() Moves the pointer to the right, then returns the number at the pointer.
// Notice that by initializing the pointer to a non-existent smallest number, the first call to next() will return the smallest element in the BST.

// You may assume that next() calls will always be valid. That is, there will be at least a next number in the in-order traversal when next() is called.

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
 */
var BSTIterator = function(root) {
    this.stack = [];
    const inorder = (node) => {
        if(!node) return;

        inorder(node.left);
        this.stack.push(node.val);
        inorder(node.right);
    }
    inorder(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.stack.pop();
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

// let root = new TreeNode(7);
// root.left = new TreeNode(3);
// root.right = new TreeNode(15);
// root.right.left = new TreeNode(9);
// root.right.right = new TreeNode(20);

// bstItr = new BSTIterator(root);
// console.log(bstItr.next());
// console.log(bstItr.next());
// console.log(bstItr.hasNext());
// console.log(bstItr.next());
// console.log(bstItr.hasNext());
// console.log(bstItr.next());
// console.log(bstItr.hasNext());
